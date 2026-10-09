/* Rascunho — Português · 6º ao 9º / Acentuação gráfica.

   50 questões novas (12 fáceis, 28 médias, 10 difíceis), autorais, em
   linguagem e situações de escola do ensino fundamental II. Gramática não se
   confere em código, então nenhuma tem `v`: todas ficam em
   revisao_independente_pendente e passam pela resolução às cegas antes de
   serem gravadas. Só entram regras assentadas, já na grafia do Acordo
   Ortográfico: classificação pela sílaba tônica (oxítona, paroxítona,
   proparoxítona), acento nas proparoxítonas, nas oxítonas em a, e, o e em, nas
   paroxítonas terminadas em r, l, x, i, is, um, us, ã, ão e ditongo, nos
   monossílabos tônicos, nos hiatos com i e u tônicos, o fim do acento nos
   ditongos abertos éi e ói das paroxítonas e em voo, veem, leem e creem, o
   acento diferencial que continua (pôde, pôr, têm e vêm no plural, e os
   derivados mantêm e contêm) e o acento circunflexo e o til. Ficaram de fora,
   de propósito, as palavras com dupla prosódia ou com acento facultativo (como
   fôrma e forma, e as formas em que a pronúncia varia), e o emprego da crase. */

export const materia = "portugues-fund";
export const tema = "Acentuação gráfica";
export const arquivo = "portugues-fund__acentuacao-grafica";

export const questoes = [
  /* ------------------------------------------------------------ fáceis --- */
  {
    d: "facil",
    e: "Em qual das palavras abaixo a sílaba tônica é a última?",
    o: ["café", "mesa", "árvore", "lápis", "música"],
    x: "A palavra em que a última sílaba é a mais forte é chamada de oxítona. Em café, a pronúncia é ca-FÉ, com a força na última sílaba. Por isso a sílaba tônica de café é a última.\n\nEm mesa, a força está na penúltima sílaba (ME-sa). Em lápis, também (LÁ-pis). Em árvore e em música, a força está na antepenúltima sílaba (ÁR-vo-re e MÚ-si-ca). Só café tem a última sílaba como a mais forte.",
  },
  {
    d: "facil",
    e: "Qual das palavras abaixo é proparoxítona?",
    o: ["lâmpada", "caderno", "café", "lápis", "amor"],
    x: "A palavra proparoxítona é aquela em que a sílaba mais forte é a antepenúltima, a terceira contando do fim. Em lâmpada, a pronúncia é LÂM-pa-da, e a força está em LÂM, a antepenúltima. Por isso lâmpada é proparoxítona.\n\nCaderno é paroxítona (ca-DER-no). Café é oxítona (ca-FÉ). Lápis é paroxítona (LÁ-pis). E amor é oxítona (a-MOR). Só lâmpada tem a força na antepenúltima sílaba.",
  },
  {
    d: "facil",
    e: "Entre as palavras abaixo, qual delas é paroxítona?",
    o: ["janela", "sábado", "café", "número", "hospital"],
    x: "A palavra paroxítona é aquela em que a sílaba mais forte é a penúltima. Em janela, a pronúncia é ja-NE-la, e a força está em NE, a penúltima. Por isso janela é paroxítona.\n\nSábado e número são proparoxítonas (SÁ-ba-do e NÚ-me-ro), pois a força está na antepenúltima. Café e hospital são oxítonas (ca-FÉ e hos-pi-TAL), pois a força está na última. Só janela tem a força na penúltima sílaba.",
  },
  {
    d: "facil",
    e: "Qual das palavras abaixo está acentuada corretamente?",
    o: ["árvore", "arvóre", "arvore", "àrvore", "ârvore"],
    x: "Árvore é proparoxítona: a sílaba mais forte é a antepenúltima, ÁR-vo-re. Todas as palavras proparoxítonas levam acento gráfico, e nesse caso o acento é o agudo, que marca a vogal aberta da sílaba forte.\n\nArvóre coloca o acento na sílaba errada. Arvore esquece o acento, que é obrigatório. Àrvore usa o acento grave, que não marca sílaba tônica. E ârvore usa o circunflexo, que marca vogal fechada, e o som de ár em árvore é aberto. Só árvore está acentuada corretamente.",
  },
  {
    d: "facil",
    e: "Qual palavra completa a frase “Sentei no ___ da sala para ver televisão”?",
    o: ["sofá", "sófa", "sofa", "sofâ", "sófá"],
    x: "Sofá é oxítona terminada em a, pronunciada so-FÁ. As oxítonas terminadas em a, e, o, seguidas ou não de s, levam acento gráfico: sofá, café, avô, jacaré, robô, através.\n\nSófa coloca o acento na primeira sílaba, que não é a tônica. Sofa esquece o acento obrigatório. Sofâ usa o circunflexo, que marca vogal fechada, mas o som de sofá é aberto. E sófá coloca acento duas vezes. Só sofá está acentuada corretamente.",
  },
  {
    d: "facil",
    e: "Por que a palavra avô recebe acento gráfico?",
    o: ["É oxítona terminada em o", "É proparoxítona", "É paroxítona terminada em r", "É monossílabo átono", "Forma um hiato com o i"],
    x: "Avô se pronuncia a-VÔ, com a força na última sílaba, por isso é oxítona. As oxítonas terminadas em a, e, o, seguidas ou não de s, recebem acento gráfico, e aqui o acento é o circunflexo, porque o som da vogal é fechado.\n\nAvô não é proparoxítona, pois tem só duas sílabas. Não é paroxítona terminada em r. Não é monossílabo átono, pois tem duas sílabas. E não tem hiato com i. Só a primeira explicação justifica o acento.",
  },
  {
    d: "facil",
    e: "Qual palavra completa a frase “Meu ___ mora no interior e planta milho”, referindo-se ao pai do pai?",
    o: ["avô", "avó", "avo", "avõ", "ávo"],
    x: "O pai do pai é o avô, escrito com acento circunflexo, que marca a vogal fechada da sílaba forte. O feminino, a mãe do pai, é avó, com acento agudo, que marca a vogal aberta.\n\nAvó é a forma feminina e não combina com o pai do pai. Avo, sem acento, é palavra que indica uma fração, como o um doze avos. Avõ e ávo são formas que não existem. Só avô corresponde ao pai do pai.",
  },
  {
    d: "facil",
    e: "Qual palavra completa a frase “Minha ___ preparou o jantar de domingo”?",
    o: ["mãe", "mae", "mãi", "mâe", "máe"],
    x: "A palavra mãe tem o til sobre o a, que marca o som nasal da vogal: mãe. O til indica nasalização e não é acento gráfico propriamente dito. Também aparece em irmã, limões, órgão e pão.\n\nMae esquece o til e perde o som nasal. Mãi coloca o til e troca o e por i, o que muda a palavra. Mâe usa o circunflexo, que marca vogal fechada, no lugar do til. E máe usa o agudo, que marca vogal aberta. Só mãe está escrita corretamente.",
  },
  {
    d: "facil",
    e: "Em qual das palavras abaixo o acento é obrigatório por se tratar de monossílabo tônico terminado em a?",
    o: ["já", "mar", "sol", "luz", "pai"],
    x: "Os monossílabos tônicos terminados em a, e, o, seguidos ou não de s, levam acento gráfico: já, pá, lá, pé, fé, só, nó, pó, mês, três. A palavra já é monossílabo tônico terminado em a, e por isso leva acento.\n\nMar, sol e luz terminam em r, l e z, e não em a, e ou o. Pai termina em ditongo. Em nenhuma delas se aplica a regra. Só já se encaixa nela.",
  },
  {
    d: "facil",
    e: "Em qual das palavras abaixo a sílaba tônica recebe acento circunflexo?",
    o: ["ônibus", "café", "lápis", "médico", "música"],
    x: "O acento circunflexo marca a vogal fechada da sílaba forte, e se escreve nas vogais a, e, o: câmera, êxito, ônibus. Em ônibus, a sílaba forte é Ô, e o som é fechado, por isso o acento é circunflexo.\n\nEm café, lápis, médico e música, o acento é o agudo, que marca a vogal aberta: café, lápis, médico, música. O circunflexo também aparece em câmera, tênis e você, sempre sobre vogais de som fechado. Só ônibus, entre as palavras da lista, tem circunflexo.",
  },
  {
    d: "facil",
    e: "Qual palavra completa a frase “O ___ examinou o paciente com muito cuidado”?",
    o: ["médico", "medico", "mêdico", "médicó", "méddico"],
    x: "Médico é proparoxítona: a sílaba mais forte é a antepenúltima, MÉ-di-co. Todas as proparoxítonas levam acento gráfico, e nesse caso o acento é o agudo, porque o som da vogal é aberto.\n\nMedico esquece o acento obrigatório. Mêdico usa o circunflexo, que marca vogal fechada, e o som de é em médico é aberto. Médicó acentua uma sílaba que não é tônica. E méddico duplica uma consoante sem necessidade. Só médico está acentuada corretamente.",
  },
  {
    d: "facil",
    e: "Qual das palavras abaixo é acentuada por ser paroxítona terminada em l?",
    o: ["fácil", "papel", "anel", "mel", "jornal"],
    x: "Fácil é paroxítona: a pronúncia é FÁ-cil, com a força na penúltima sílaba. As paroxítonas terminadas em l levam acento gráfico: fácil, útil, amável, imóvel. Por isso fácil é acentuada.\n\nPapel, anel e jornal terminam em l, mas são oxítonas (pa-PEL, a-NEL, jor-NAL), e as oxítonas terminadas em l não levam acento. Mel é monossílabo terminado em l, e também não leva acento. Só fácil é paroxítona terminada em l.",
  },

  /* ------------------------------------------------------------ médias --- */
  {
    d: "media",
    e: "Qual palavra completa a frase “Eu ___ quero ir ao cinema com você”?",
    o: ["também", "tambem", "tâmbem", "tambêm", "tãmbem"],
    x: "Também é oxítona terminada em em: tam-BÉM. As oxítonas terminadas em em ou ens levam acento gráfico: também, ninguém, alguém, armazém, parabéns. O acento é o agudo, que marca a vogal aberta da sílaba forte.\n\nTambem esquece o acento. Tâmbem coloca o circunflexo na primeira sílaba. Tambêm usa o circunflexo, que marca vogal fechada, mas o som de é em também é aberto. E tãmbem coloca o til, que marca a nasalização, no lugar errado. Só também está acentuada corretamente.",
  },
  {
    d: "media",
    e: "Por que a palavra parabéns recebe acento gráfico?",
    o: ["É oxítona terminada em -ens", "É proparoxítona", "É paroxítona terminada em vogal", "É monossílabo tônico", "Tem um hiato com o u"],
    x: "Parabéns se pronuncia pa-ra-BÉNS, com a força na última sílaba, e por isso é oxítona. As oxítonas terminadas em ens levam acento gráfico, como parabéns, armazéns e vinténs.\n\nParabéns não é proparoxítona, pois a força não está na antepenúltima. Não é paroxítona terminada em vogal. Não é monossílabo, pois tem três sílabas. E não tem hiato com o u. Só a primeira explicação justifica o acento.",
  },
  {
    d: "media",
    e: "Qual das palavras abaixo é acentuada por ser paroxítona terminada em r?",
    o: ["açúcar", "mulher", "comer", "amor", "doutor"],
    x: "Açúcar é paroxítona: a-ÇÚ-car, com a força na penúltima sílaba. As paroxítonas terminadas em r levam acento gráfico: açúcar, caráter, revólver, cadáver. Por isso açúcar é acentuada.\n\nMulher, comer, amor e doutor terminam em r, mas são oxítonas (mu-LHER, co-MER, a-MOR, dou-TOR), e as oxítonas terminadas em r não levam acento. Só açúcar é paroxítona terminada em r.",
  },
  {
    d: "media",
    e: "Qual das palavras abaixo é acentuada por ser paroxítona terminada em ão?",
    o: ["órfão", "coração", "balão", "melão", "avião"],
    x: "Órfão é paroxítona: ÓR-fão, com a força na penúltima sílaba. As paroxítonas terminadas em ão ou ãos levam acento gráfico: órfão, órgão, sótão, bênção. Por isso órfão é acentuada.\n\nCoração, balão, melão e avião terminam em ão, mas são oxítonas (co-ra-ÇÃO, ba-LÃO, me-LÃO, a-VI-ÃO), e as oxítonas terminadas em ão não levam acento, pois o til já marca a nasalização. Só órfão é paroxítona.",
  },
  {
    d: "media",
    e: "Qual palavra completa a frase “Anotei o nome com o ___ azul”?",
    o: ["lápis", "lapis", "lapís", "lâpis", "lápiz"],
    x: "Lápis é paroxítona terminada em is: LÁ-pis. As paroxítonas terminadas em i, is, us, um, uns, ps, x e ã levam acento gráfico: táxi, lápis, bônus, álbum, bíceps, tórax, ímã. Por isso lápis é acentuada na primeira sílaba.\n\nLapis esquece o acento. Lapís o coloca na última sílaba, que não é a tônica. Lâpis usa o circunflexo, que marca vogal fechada, mas o som de lá é aberto. E lápiz troca o s final por z. Só lápis está escrita corretamente.",
  },
  {
    d: "media",
    e: "Qual palavra completa a frase “Ganhei um ___ de figurinhas no aniversário”?",
    o: ["álbum", "album", "albúm", "âlbum", "alibum"],
    x: "Álbum é paroxítona terminada em um: ÁL-bum. As paroxítonas terminadas em um ou uns levam acento gráfico: álbum, fórum, médium, álbuns. O acento é o agudo, que marca a vogal aberta da sílaba forte.\n\nAlbum esquece o acento. Albúm o coloca na última sílaba, que não é a tônica. Âlbum usa o circunflexo, mas o som de ál em álbum é aberto. E alibum acrescenta uma sílaba que a palavra não tem. Só álbum está escrita corretamente.",
  },
  {
    d: "media",
    e: "Qual das palavras abaixo é acentuada por ser paroxítona terminada em ditongo?",
    o: ["série", "sorriso", "janela", "caderno", "mesa"],
    x: "Série é paroxítona terminada em ditongo, o encontro de duas vogais na mesma sílaba: SÉ-rie. As paroxítonas terminadas em ditongo levam acento gráfico: série, história, água, régua, tênue. Por isso série é acentuada.\n\nSorriso, janela, caderno e mesa são paroxítonas terminadas em vogal simples (o, a, o, a), e as paroxítonas terminadas em vogal simples não levam acento. Só série termina em ditongo.",
  },
  {
    d: "media",
    e: "Em qual das palavras abaixo o acento se justifica por um hiato com o u tônico?",
    o: ["saúde", "caule", "pauta", "fauna", "causa"],
    x: "Em saúde, a pronúncia é sa-Ú-de, e as vogais a e u ficam em sílabas separadas: é um hiato. O u é tônico e vem depois de uma vogal, por isso recebe acento. A regra é que o i e o u tônicos, formando hiato com a vogal anterior, são acentuados.\n\nCaule, pauta, fauna e causa têm o grupo au pronunciado na mesma sílaba, formando um ditongo (cau-le, pau-ta, fau-na, cau-sa). Quando há ditongo, não há hiato, e a regra não se aplica. Só saúde tem hiato.",
  },
  {
    d: "media",
    e: "Por que a palavra egoísta recebe acento no i?",
    o: ["Há hiato com o i tônico", "É proparoxítona", "É oxítona terminada em a", "É monossílabo tônico", "Termina em ditongo"],
    x: "Em egoísta, a pronúncia é e-go-ÍS-ta, e as vogais o e i ficam em sílabas separadas: é um hiato. O i é tônico, e a regra manda acentuar o i e o u tônicos que formam hiato com a vogal anterior, sozinhos na sílaba ou seguidos de s.\n\nEgoísta não é proparoxítona, pois a força está na penúltima sílaba. Não é oxítona. Não é monossílabo. E não termina em ditongo, mas em a. Só o hiato justifica o acento.",
  },
  {
    d: "media",
    e: "Qual palavra completa a frase “Tive uma ___ ótima para a festa de aniversário”, depois do Acordo Ortográfico?",
    o: ["ideia", "idéia", "ideía", "ídeia", "idêia"],
    x: "O Acordo Ortográfico eliminou o acento agudo dos ditongos abertos éi e ói das paroxítonas. Por isso a palavra, que antes era idéia, passou a ser escrita ideia, sem acento: ideia, assembleia, geleia, heroico, jiboia.\n\nIdéia mantém o acento que foi eliminado. Ideía coloca o acento no i, como se fosse hiato. Ídeia coloca o acento na primeira sílaba. E idêia usa o circunflexo, que não é o caso. Só ideia está escrita de acordo com a grafia atual.",
  },
  {
    d: "media",
    e: "Qual palavra completa a frase “Ela ganhou uma ___ de ouro da avó”, depois do Acordo Ortográfico?",
    o: ["joia", "jóia", "joía", "jôia", "joiá"],
    x: "Joia é paroxítona com ditongo aberto oi. O Acordo Ortográfico eliminou o acento agudo dos ditongos abertos éi e ói nas paroxítonas, e por isso jóia passou a ser escrita joia, assim como boia, estreia e heroico.\n\nJóia mantém o acento que foi eliminado. Joía o desloca para o i, como se fosse hiato. Jôia usa o circunflexo, que não se aplica. E joiá coloca o acento na última sílaba. Só joia está escrita de acordo com a grafia atual.",
  },
  {
    d: "media",
    e: "Qual frase está escrita de acordo com o Acordo Ortográfico?",
    o: ["Eles veem o voo da gaivota.", "Eles vêem o vôo da gaivota.", "Eles veem o vôo da gaivota.", "Eles vêem o voo da gaivota.", "Eles vêem o voô da gaivota."],
    x: "O Acordo Ortográfico eliminou o acento circunflexo nos grupos eem e oo: eles veem, eles leem, eles creem, o voo, o enjoo, ele abençoo. A frase correta é eles veem o voo da gaivota.\n\nAs demais mantêm acento em vêem ou em vôo, formas antigas, ou trazem voô, que não existe. Para cada acento retirado pelo Acordo, a grafia antiga continua errada. Só a primeira frase usa as duas palavras na grafia atual.",
  },
  {
    d: "media",
    e: "Em qual das frases abaixo o acento circunflexo está empregado corretamente?",
    o: ["Os alunos têm prova hoje.", "Os alunos tem prova hoje.", "O aluno têm prova hoje.", "A aluna têm prova hoje.", "O aluno têm provas hoje."],
    x: "O verbo ter tem acento circunflexo na terceira pessoa do plural do presente: eles têm, elas têm, os alunos têm. O acento diferencia essa forma da terceira pessoa do singular, que fica sem acento: ele tem, o aluno tem.\n\nOs alunos tem usa a forma do singular com sujeito plural. O aluno têm, a aluna têm e o aluno têm provas usam a forma do plural com sujeito singular. Só a primeira frase concorda o verbo com o sujeito.",
  },
  {
    d: "media",
    e: "Em qual das frases abaixo o verbo vir está escrito corretamente?",
    o: ["Eles vêm à escola de bicicleta.", "Eles vem à escola de bicicleta.", "Ele vêm à escola de bicicleta.", "Ela vêm à escola de bicicleta.", "Elas vem à escola de bicicleta."],
    x: "O verbo vir tem acento circunflexo na terceira pessoa do plural do presente: eles vêm, elas vêm. O acento diferencia essa forma da terceira pessoa do singular, sem acento: ele vem, ela vem.\n\nEles vem e elas vem usam a forma do singular com sujeito plural. Ele vêm e ela vêm usam a forma do plural com sujeito singular. Só a primeira frase concorda o verbo com o sujeito.",
  },
  {
    d: "media",
    e: "Qual palavra completa a frase “Ontem ele não ___ ir à festa, porque estava doente”?",
    o: ["pôde", "pode", "podê", "pôdé", "poder"],
    x: "A palavra ontem indica passado, e o verbo poder, no pretérito perfeito, fica pôde, com acento circunflexo. O acento diferencia pôde (passado) de pode (presente), e continua em vigor depois do Acordo Ortográfico.\n\nPode, sem acento, é o presente: ele pode ir hoje. Podê e pôdé são formas que não existem. E poder é o infinitivo, que não combina com a frase. Só pôde indica o passado.",
  },
  {
    d: "media",
    e: "Qual palavra completa a frase “Vou ___ os livros na estante da sala”?",
    o: ["pôr", "por", "pór", "porr", "pôrr"],
    x: "O verbo pôr, que significa colocar, leva acento circunflexo para se diferenciar da preposição por. O acento é mantido depois do Acordo Ortográfico. Na frase, vou pôr os livros na estante, o sentido é colocar.\n\nPor, sem acento, é a preposição, como em passei por aqui. Pór usa o agudo, que não é o caso. Porr e pôrr são grafias que não existem. Só pôr corresponde ao verbo colocar.",
  },
  {
    d: "media",
    e: "Qual palavra completa a frase “O fotógrafo comprou uma ___ nova para o casamento”?",
    o: ["câmera", "cámera", "camêra", "camerâ", "câmerá"],
    x: "Câmera é proparoxítona, e a sílaba forte é CÂ. O acento é o circunflexo, porque a vogal a que antecede uma consoante nasal, como m, tem som fechado: câmera, âncora, cânhamo. Todas as proparoxítonas levam acento.\n\nCámera usa o agudo, que marca vogal aberta. Camêra e camerâ colocam o acento em sílabas que não são tônicas. E câmerá acrescenta um segundo acento sem necessidade. Só câmera está acentuada corretamente.",
  },
  {
    d: "media",
    e: "Qual palavra completa a pergunta “___ já fez a lição de casa”?",
    o: ["Você", "Voce", "Vocé", "Vôce", "Voçê"],
    x: "Você é oxítona terminada em e: vo-CÊ. As oxítonas terminadas em a, e, o, seguidas ou não de s, levam acento, e aqui o acento é o circunflexo, que marca o som fechado da vogal tônica.\n\nVoce esquece o acento obrigatório. Vocé usa o agudo, que marca vogal aberta, mas o som de cê em você é fechado. Vôce coloca o acento na primeira sílaba, que não é tônica. E voçê usa ç antes de ê, o que a ortografia não permite. Só você está escrita corretamente.",
  },
  {
    d: "media",
    e: "Qual palavra completa a frase “A cesta estava cheia de ___ maduros”?",
    o: ["limões", "limoes", "limõs", "limóes", "limôes"],
    x: "Limões é oxítona terminada em ões: li-MÕES. O til marca a nasalização, e nas oxítonas terminadas em ão ou ões não há acento agudo nem circunflexo, pois o til já marca a sílaba forte. Escreve-se limões, balões, melões.\n\nLimoes esquece o til, e perde o som nasal. Limõs retira o e. Limóes e limôes acrescentam o acento sobre o o e esquecem o til. Só limões está escrita corretamente.",
  },
  {
    d: "media",
    e: "Qual palavra completa a frase “O ___ atrai o prego de ferro”?",
    o: ["ímã", "ima", "imã", "íma", "ìmã"],
    x: "Ímã é paroxítona terminada em ã: Í-mã. As paroxítonas terminadas em ã ou ãs levam acento gráfico, e o til aparece sobre o a para marcar a nasalização: ímã, órfã, ímãs. Por isso ímã tem dois sinais: o agudo no i e o til no a.\n\nIma perde os dois sinais. Imã perde o acento no i. Íma perde o til no a. E ìmã usa o acento grave, que não se usa para marcar sílaba tônica. Só ímã está escrita corretamente.",
  },
  {
    d: "media",
    e: "Qual palavra completa a frase “Comprei um ___ novo para correr no parque”?",
    o: ["tênis", "tenis", "tenís", "ténis", "tênís"],
    x: "Tênis é paroxítona terminada em is: TÊ-nis. As paroxítonas terminadas em i, is, us, um, uns, ps e x levam acento gráfico. Em tênis, o acento é o circunflexo, pois o e antes de nasal tem som fechado.\n\nTenis esquece o acento. Tenís o coloca na sílaba errada. Ténis usa o agudo, que marca vogal aberta, mas o som de tê é fechado. E tênís acrescenta um segundo acento sem necessidade. Só tênis está escrita corretamente.",
  },
  {
    d: "media",
    e: "Qual palavra completa a frase “Todo mês a empresa paga um ___ aos funcionários”?",
    o: ["bônus", "bonus", "bonús", "bónus", "bônûs"],
    x: "Bônus é paroxítona terminada em us: BÔ-nus. As paroxítonas terminadas em us levam acento gráfico: bônus, vírus, ônibus, Vênus. Em bônus, o acento é o circunflexo, porque o o antes de nasal tem som fechado.\n\nBonus esquece o acento. Bonús o coloca na sílaba errada. Bónus usa o agudo, que marca vogal aberta, mas o som de bô é fechado. E bônûs acrescenta um acento sobre o u, o que a palavra não admite. Só bônus está escrita corretamente.",
  },
  {
    d: "media",
    e: "Quantas palavras proparoxítonas há na lista: sábado, café, número, lápis, música?",
    o: ["Três", "Duas", "Quatro", "Uma", "Cinco"],
    x: "Proparoxítonas são as palavras com a sílaba forte na antepenúltima: SÁ-ba-do, NÚ-me-ro, MÚ-si-ca. São três: sábado, número e música.\n\nCafé é oxítona (ca-FÉ), pois a força está na última sílaba. Lápis é paroxítona (LÁ-pis), pois a força está na penúltima. Por isso a lista não tem duas, quatro, uma ou cinco palavras proparoxítonas. A resposta correta é três.",
  },
  {
    d: "media",
    e: "Qual lista contém apenas palavras oxítonas?",
    o: ["sofá, jacaré, também", "sofá, lápis, também", "sofá, jacaré, árvore", "mesa, jacaré, também", "sofá, médico, também"],
    x: "Oxítonas são as palavras com a sílaba forte na última: so-FÁ, ja-ca-RÉ, tam-BÉM. A primeira lista reúne só palavras desse tipo.\n\nAs demais misturam oxítonas com palavras de outros tipos: lápis é paroxítona (LÁ-pis), árvore e médico são proparoxítonas (ÁR-vo-re e MÉ-di-co), e mesa é paroxítona (ME-sa). Só a primeira lista traz três oxítonas.",
  },
  {
    d: "media",
    e: "Que regra explica o acento em sábado, número e música?",
    o: ["Toda proparoxítona é acentuada", "Toda oxítona é acentuada", "Toda paroxítona é acentuada", "Todo monossílabo é acentuado", "Toda palavra com til é acentuada"],
    x: "As palavras sábado, número e música são proparoxítonas, ou seja, têm a sílaba forte na antepenúltima. A regra manda acentuar todas as proparoxítonas, sem exceção: sábado, número, música, árvore, lâmpada, médico.\n\nNem toda oxítona é acentuada: só as terminadas em a, e, o, em, seguidas ou não de s. Nem toda paroxítona é acentuada: só as de certas terminações. Nem todo monossílabo é acentuado: só os tônicos terminados em a, e, o. E o til marca a nasalização, e não é acento. Só a primeira regra explica os três acentos.",
  },
  {
    d: "media",
    e: "Por que as palavras café e jacaré recebem acento gráfico?",
    o: ["São oxítonas terminadas em e", "São proparoxítonas", "São paroxítonas terminadas em l", "São monossílabos átonos", "São palavras com hiato"],
    x: "Café e jacaré são oxítonas, com a sílaba forte na última (ca-FÉ e ja-ca-RÉ), e terminam em e. As oxítonas terminadas em a, e, o, seguidas ou não de s, levam acento gráfico. Por isso as duas palavras são acentuadas.\n\nNão são proparoxítonas, pois a força não está na antepenúltima. Não são paroxítonas terminadas em l. Não são monossílabos, pois têm mais de uma sílaba. E não têm hiato. Só a primeira explicação justifica o acento.",
  },
  {
    d: "media",
    e: "Por que as palavras fácil e útil recebem acento gráfico?",
    o: ["São paroxítonas terminadas em l", "São oxítonas terminadas em l", "São proparoxítonas", "São monossílabos tônicos", "Terminam em ditongo"],
    x: "Fácil e útil são paroxítonas, com a sílaba forte na penúltima (FÁ-cil e Ú-til), e terminam em l. As paroxítonas terminadas em l levam acento gráfico. Por isso as duas palavras são acentuadas.\n\nNão são oxítonas, e as oxítonas terminadas em l, como papel e jornal, não têm acento. Não são proparoxítonas. Não são monossílabos, pois têm duas sílabas. E não terminam em ditongo, mas em consoante. Só a primeira explicação justifica o acento.",
  },
  {
    d: "media",
    e: "Qual destas palavras leva acento por ser um monossílabo tônico com final em -es?",
    o: ["três", "mar", "sol", "luz", "rei"],
    x: "Os monossílabos tônicos terminados em a, e, o, seguidos ou não de s, levam acento gráfico: já, pé, só, mês, três, nós. Três tem uma só sílaba, é tônico e termina em es, por isso é acentuada.\n\nMar, sol e luz terminam em r, l e z. Rei termina em ditongo ei. Em nenhuma delas se aplica a regra dos monossílabos terminados em a, e, o. Só três se encaixa nela.",
  },

  /* ---------------------------------------------------------- difíceis --- */
  {
    d: "dificil",
    e: "Qual palavra completa a frase “A ___ do monstro assustou as crianças”, depois do Acordo Ortográfico?",
    o: ["feiura", "feiúra", "feíura", "fêiura", "féiura"],
    x: "O Acordo Ortográfico eliminou o acento do i e do u tônicos que vêm depois de ditongo, nas paroxítonas: feiura, baiuca, bocaiuva. Em feiura, o u vem depois do ditongo ei, e por isso não leva acento.\n\nFeiúra mantém o acento que foi eliminado. Feíura o desloca para o i, como se houvesse hiato. Fêiura usa o circunflexo, e féiura usa o agudo, ambos sem justificativa. Só feiura está escrita de acordo com a grafia atual.",
  },
  {
    d: "dificil",
    e: "Por que a palavra país leva acento e a palavra paisagem não leva?",
    o: ["Em país há hiato; em paisagem há ditongo", "País é proparoxítona; paisagem não é", "País é oxítona terminada em a", "Paisagem é monossílaba", "As duas têm hiato, mas só uma é acentuada"],
    x: "Em país, a pronúncia é pa-ÍS, com as vogais a e i em sílabas separadas: é um hiato, e o i tônico, seguido de s, recebe acento. Em paisagem, a pronúncia é pai-SA-gem, e o grupo ai fica na mesma sílaba, formando um ditongo: quando há ditongo, não há hiato, e não há acento.\n\nPaís não é proparoxítona nem oxítona terminada em a. Paisagem tem três sílabas, e não é monossílaba. E só país tem hiato. Só a primeira explicação está correta.",
  },
  {
    d: "dificil",
    e: "Qual das frases abaixo está acentuada corretamente?",
    o: ["Ela mantém a calma, e elas mantêm a ordem.", "Ela mantêm a calma, e elas mantém a ordem.", "Ela mantem a calma, e elas mantem a ordem.", "Ela mantém a calma, e elas mantém a ordem.", "Ela mantêm a calma, e elas mantêm a ordem."],
    x: "Os derivados de ter, como manter, conter e deter, têm acento agudo na terceira pessoa do singular e circunflexo na terceira pessoa do plural: ela mantém, elas mantêm; ele contém, eles contêm. O acento agudo marca a oxítona terminada em em, e o circunflexo diferencia o plural.\n\nAs outras frases trocam as formas: usam mantêm com sujeito singular, mantém com sujeito plural, ou esquecem o acento. Só a primeira concorda o verbo com o sujeito e emprega o acento certo.",
  },
  {
    d: "dificil",
    e: "Qual frase está escrita de acordo com o Acordo Ortográfico?",
    o: ["Os médicos leem os exames e creem no tratamento.", "Os médicos lêem os exames e crêem no tratamento.", "Os médicos leem os exames e crêem no tratamento.", "Os médicos lêem os exames e creem no tratamento.", "Os médicos léem os exames e créem no tratamento."],
    x: "O Acordo Ortográfico eliminou o acento circunflexo nos verbos que terminam em eem: eles leem, eles creem, eles veem, eles deem, eles descreem. A frase correta é os médicos leem os exames e creem no tratamento.\n\nAs demais mantêm o acento em lêem ou em crêem, formas antigas, ou usam o agudo em léem e créem, que nunca existiram. Só a primeira frase usa os dois verbos na grafia atual.",
  },
  {
    d: "dificil",
    e: "Qual palavra completa a frase “O gato tem o ___ muito macio”, depois do Acordo Ortográfico?",
    o: ["pelo", "pêlo", "pélo", "pelô", "pêlô"],
    x: "O Acordo Ortográfico eliminou o acento diferencial de pelo, que antes era pêlo para diferenciar o substantivo da junção de por com o. Hoje as duas formas se escrevem pelo, sem acento, e o contexto indica o sentido: o pelo do gato, passei pelo parque.\n\nPêlo mantém o acento eliminado. Pélo usa o agudo, e pelô e pêlô acentuam sílabas que não são tônicas. Só pelo está escrita de acordo com a grafia atual.",
  },
  {
    d: "dificil",
    e: "Qual destas formas ainda mantém o acento diferencial depois do Acordo Ortográfico de 2009?",
    o: ["pôde", "pára", "pêlo", "pólo", "pêra"],
    x: "O acento diferencial de pôde (pretérito de poder) continua em vigor, para diferenciar de pode (presente): ontem ele não pôde, hoje ele pode. O mesmo vale para pôr (verbo), diferente de por (preposição).\n\nO Acordo eliminou o acento diferencial de pára (verbo parar, hoje para), pêlo (hoje pelo), pólo (hoje polo) e pêra (hoje pera). Só pôde mantém o acento diferencial.",
  },
  {
    d: "dificil",
    e: "Qual das frases abaixo contém um erro de acentuação?",
    o: ["O aviao decolou às nove horas.", "O avião decolou às nove horas.", "O ônibus saiu cedo da garagem.", "A água do rio estava fria.", "Ele é um médico muito querido."],
    x: "Avião é oxítona terminada em ão: a-vi-ÃO. O til marca a nasalização e a sílaba forte, e a palavra se escreve avião, com til. A forma aviao, sem til, é um erro de acentuação.\n\nAs demais frases estão corretas: ônibus é proparoxítona, com circunflexo; água é paroxítona terminada em ditongo, com agudo; e médico é proparoxítona, com agudo. Só a primeira frase tem erro.",
  },
  {
    d: "dificil",
    e: "Qual sequência apresenta apenas palavras acentuadas corretamente?",
    o: ["tênis, vírus, café", "tenis, vírus, café", "tênis, virus, café", "tênis, vírus, cafe", "tenis, virus, cafe"],
    x: "Tênis é paroxítona terminada em is, vírus é paroxítona terminada em us, e café é oxítona terminada em e. As três levam acento: tênis, vírus, café. A primeira sequência as traz acentuadas corretamente.\n\nAs demais sequências esquecem o acento de uma ou mais palavras: tenis, virus, cafe. Só a primeira reúne as três palavras com a acentuação correta.",
  },
  {
    d: "dificil",
    e: "Em “Eles têm razão e vêm de longe”, por que as palavras têm e vêm levam acento circunflexo?",
    o: ["Para diferenciar de tem e vem", "Porque são proparoxítonas", "Porque são monossílabos átonos", "Porque terminam em ditongo", "Porque têm hiato com o i"],
    x: "As formas têm e vêm estão na terceira pessoa do plural, e o acento circunflexo as diferencia das formas do singular, tem e vem, que não o levam: ele tem, eles têm; ele vem, eles vêm. É um acento diferencial.\n\nAs palavras não são proparoxítonas, pois têm uma só sílaba. Não são monossílabos átonos, pois são tônicas. Não terminam em ditongo, mas em m. E não têm hiato. Só a primeira explicação está correta.",
  },
  {
    d: "dificil",
    e: "Quantas palavras da frase “Ninguém contou que o ônibus tinha saído” recebem acento gráfico?",
    o: ["Três", "Duas", "Quatro", "Uma", "Nenhuma"],
    x: "Ninguém é oxítona terminada em em, e por isso leva acento agudo. Ônibus é proparoxítona, e por isso leva acento circunflexo. Saído tem hiato, sa-Í-do, com o i tônico depois da vogal a, e por isso leva acento agudo. São três palavras acentuadas.\n\nContou termina em ditongo, mas é oxítona, e as oxítonas terminadas em ditongo não levam acento. Tinha é paroxítona terminada em a. E que e o não levam acento. Por isso a resposta é três.",
  },
];
