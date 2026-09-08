/* =========================================================================
   Conteúdo de partida da Comunidade.

   Semeado por scripts/seed-comunidade.mjs, todo atribuído a uma conta real e
   identificável — "Equipe Percurso", @percurso, com selo de verificado. Não
   há usuários fingidos: o v1 nasce com curadoria honesta, não com tráfego
   falso. Perguntas de verdade começam vazias e enchem conforme a galera usa.

   `seed_key` é estável: rodar o seed de novo atualiza o texto, não duplica.
   `dias` é há quantos dias o post foi "publicado", só para o feed não sair
   todo com o mesmo horário.
   ========================================================================= */

export const POSTS_SEMENTE = [
  {
    seed_key: "dica-repertorio-c2",
    tipo: "dica",
    dias: 1,
    titulo: "O erro de repertório que mais tira nota na competência 2",
    texto:
      "Citar Foucault, Bauman ou Kant sem conectar ao tema não é repertório: é enfeite. A banca do ENEM pontua o uso produtivo — a citação precisa sustentar o seu argumento, não aparecer do lado dele.\n\nTeste simples: se você apagar a citação e o parágrafo continuar dizendo a mesma coisa, ela não estava trabalhando.",
    tags: ["redação", "enem"],
  },
  {
    seed_key: "dica-proposta-intervencao",
    tipo: "dica",
    dias: 2,
    titulo: "Proposta de intervenção: os cinco elementos, sem decorar",
    texto:
      "Agente, ação, meio, finalidade e detalhamento. Em vez de decorar a lista, responda cinco perguntas: quem faz, faz o quê, como, para quê e de que jeito exatamente.\n\nSe o seu parágrafo responde as cinco, a competência 5 está completa.",
    tags: ["redação", "enem"],
  },
  {
    seed_key: "dica-recuperacao-ativa",
    tipo: "dica",
    dias: 3,
    titulo: "Feche o caderno e escreva o que você lembra",
    texto:
      "Reler a matéria dá sensação de progresso e quase nenhum. O que fixa é tentar recuperar de memória: fecha o caderno, escreve tudo que lembra do tópico, e só depois confere.\n\nÉ desconfortável porque escancara o que você não sabe — e é exatamente por isso que funciona.",
    tags: ["método", "vestibular"],
  },
  {
    seed_key: "dica-revisao-espacada",
    tipo: "compartilhamento",
    dias: 4,
    titulo: "Um jeito simples de agendar revisão espaçada",
    texto:
      "Não precisa de app. Anota a data em que estudou o tópico e marca três revisões: 1 dia, 7 dias e 30 dias depois. Quem quiser automatizar, o trecho abaixo faz a conta.",
    tags: ["método", "revisão espaçada"],
    codigo: {
      linguagem: "javascript",
      conteudo:
        'const revisoes = (estudadoEm) =>\n  [1, 7, 30].map((dias) => {\n    const d = new Date(estudadoEm);\n    d.setDate(d.getDate() + dias);\n    return { dias, data: d.toLocaleDateString("pt-BR") };\n  });\n\nconsole.table(revisoes("2026-08-27"));',
    },
  },
  {
    seed_key: "discussao-cronotipo",
    tipo: "discussao",
    dias: 5,
    titulo: "Estudar de manhã rende mais mesmo, ou é hábito?",
    texto:
      "Muita gente afirma que o cérebro rende mais de manhã. Mas tem quem produza muito melhor à noite, e se sinta culpado por isso.\n\nA literatura sobre cronotipo sugere que varia bastante entre pessoas. Quem aqui já testou os dois turnos por tempo suficiente para comparar de verdade?",
    tags: ["método", "vestibular"],
  },
  {
    seed_key: "dica-falso-cognato",
    tipo: "dica",
    dias: 6,
    titulo: "Como desconfiar de um falso cognato na prova",
    texto:
      'Use o contexto como juiz. Se a tradução "óbvia" deixa a frase estranha, provavelmente é falso cognato. "Actually" quase sempre cabe como "na verdade"; "pretend" é fingir, não pretender.\n\nNa dúvida, leia a frase inteira com a tradução literal e veja se faz sentido no parágrafo.',
    tags: ["inglês", "enem"],
  },
  {
    seed_key: "dica-heredograma",
    tipo: "dica",
    dias: 7,
    titulo: "Herança recessiva no heredograma: o atalho",
    texto:
      "Pais sem a característica com um filho que tem: é recessiva, sem exceção. Esse único sinal resolve a maioria das questões de heredograma antes de você testar hipótese nenhuma.\n\nSe além disso a característica é mais comum em homens, suspeite de recessiva ligada ao X.",
    tags: ["biologia", "enem"],
  },
  {
    seed_key: "discussao-travar-redacao",
    tipo: "discussao",
    dias: 8,
    titulo: "Trava para começar a redação: como vocês destravam?",
    texto:
      "Ler a proposta, entender o tema, e ficar quinze minutos olhando a folha. Depois escrever correndo e a conclusão sai fraca.\n\nUma coisa que ajuda: escrever a tese primeiro, mesmo que feia, e só depois a introdução. Introdução é mais fácil quando você já sabe onde vai chegar. O que funciona para você?",
    tags: ["redação"],
  },
  {
    seed_key: "dica-conta-fechada",
    tipo: "dica",
    dias: 9,
    titulo: "Em exatas, confira a ordem de grandeza antes de marcar",
    texto:
      "Antes de procurar sua resposta nas alternativas, estime: o resultado deveria ser dezenas? centenas? Se você calculou 3,4 e as opções giram em torno de 340, provavelmente esqueceu de multiplicar por 100 em algum passo.\n\nA conferência de ordem de grandeza pega a maioria dos erros de sinal e de unidade.",
    tags: ["matemática", "física"],
  },
  {
    seed_key: "compartilhamento-mapa-citologia",
    tipo: "compartilhamento",
    dias: 10,
    titulo: "Organizar organelas por função, não por nome",
    texto:
      "Parei de confundir retículo liso com rugoso quando agrupei as organelas pelo que elas fazem: as que produzem (ribossomo, RE rugoso), as que processam e empacotam (Golgi, RE liso), as que geram energia (mitocôndria, cloroplasto), as que degradam (lisossomo, peroxissomo).\n\nO nome vira detalhe quando a função está clara.",
    tags: ["biologia", "enem"],
  },
  {
    seed_key: "dica-atrito-energia",
    tipo: "dica",
    dias: 11,
    titulo: "\"A energia se perdeu no atrito\" — ela não se perdeu",
    texto:
      "O atrito transforma energia mecânica em energia térmica: as superfícies esquentam, as moléculas se agitam mais. A energia total continua a mesma, só deixou de estar disponível como movimento organizado.\n\nPor isso o nome certo é energia dissipada, não perdida. E é por isso que a mecânica não se conserva quando há atrito, mas a energia total sempre se conserva.",
    tags: ["física", "enem"],
  },
  {
    seed_key: "discussao-provas-antigas",
    tipo: "discussao",
    dias: 12,
    titulo: "Fazer todas as 15 provas antigas do ENEM compensa?",
    texto:
      "São 15 provas. Uma por semana dá quase quatro meses só nisso. Compensa fazer todas, ou é melhor intercalar com questões por assunto?\n\nNa prática, prova inteira treina ritmo e resistência; questão por assunto tampa buraco específico. Os dois têm lugar — a proporção é que muda conforme quanto tempo falta.",
    tags: ["enem", "vestibular"],
  },
  {
    seed_key: "dica-conectivos-c4",
    tipo: "dica",
    dias: 13,
    titulo: "Competência 4: varie o conectivo, mas não force",
    texto:
      "Repetir \"além disso\" em todo parágrafo derruba a nota da coesão. Mas encaixar \"outrossim\" e \"destarte\" à força é pior — soa decorado.\n\nTenha três ou quatro de cada tipo na manga (adição, contraste, conclusão, causa) e use o que a frase pede. Coesão boa é a que passa despercebida.",
    tags: ["redação", "enem"],
  },
  {
    seed_key: "dica-ia-para-estudar",
    tipo: "discussao",
    dias: 14,
    titulo: "IA para estudar: onde vocês traçam a linha?",
    texto:
      "Pedir para a IA explicar o que você não entendeu acelera o aprendizado. Pedir para ela resolver antes de você tentar terceiriza o esforço que faz a memória fixar.\n\nUma regra que funciona: pode pedir para explicar, não pode pedir para resolver antes de tentar. Como vocês usam?",
    tags: ["método"],
  },
  {
    seed_key: "compartilhamento-caderno-erros",
    tipo: "compartilhamento",
    dias: 15,
    titulo: "O que fazer com a questão que você errou",
    texto:
      "Errar e seguir em frente é jogar fora a parte mais útil do estudo. Anote a questão, o que você marcou, e por que a sua opção parecia certa. Volte nela depois de alguns dias.\n\nQuando a mesma pegadinha aparece de novo e você reconhece, é sinal de que fixou.",
    tags: ["método", "enem"],
  },
];
