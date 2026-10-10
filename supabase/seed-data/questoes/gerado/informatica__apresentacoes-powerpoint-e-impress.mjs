/* Apresentações: PowerPoint e Impress (49 questões) — informatica.

   Autorais, escritas por Claude (Anthropic) em 2026-10-09 seguindo as cinco
   regras de CONTINUAR-MATERIAS-POR-OBJETIVO.md. Nenhuma é atribuída a banca
   ou a prova real.

   Conferência do gabarito: 12 de 49 recalculadas por código que chega à
   resposta por outro caminho (ver .rascunho/questoes-objetivo/informatica__apresentacoes-powerpoint-e-impress.mjs);
   37 conceituais aguardam a revisão independente listada no relatório.

   Montado por scripts/montar-questoes-objetivo.mjs; gabarito redistribuído
   por scripts/rebalancear-gabarito.mjs. Relatório em
   _relatorios/informatica__apresentacoes-powerpoint-e-impress.json. */

export const questoes = [
  {
    materia: "informatica",
    tema: "Apresentações: PowerPoint e Impress",
    dificuldade: "facil",
    enunciado:
      "Qual é a extensão padrão dos arquivos de apresentação criados nas versões atuais do PowerPoint?",
    opcoes: [
      ".docx",
      ".xlsx",
      ".pptx",
      ".odp",
      ".pdf",
    ],
    correta: 2,
    explicacao:
      "A extensão .pptx é o formato padrão do PowerPoint desde a versão 2007, baseado em XML compactado, o Office Open XML. Ela substituiu o antigo .ppt, que as versões atuais ainda abrem, em modo de compatibilidade.\n\nA extensão .docx é dos documentos do Word, e a .xlsx, das planilhas do Excel. A .odp é o formato de apresentação do LibreOffice Impress. E a .pdf é um formato de documento portátil, que o PowerPoint só gera por exportação.",
  },
  {
    materia: "informatica",
    tema: "Apresentações: PowerPoint e Impress",
    dificuldade: "facil",
    enunciado:
      "Qual é a extensão padrão das apresentações criadas no LibreOffice Impress?",
    opcoes: [
      ".pptx",
      ".ods",
      ".odt",
      ".pdf",
      ".odp",
    ],
    correta: 4,
    explicacao:
      "O Impress grava suas apresentações por padrão em .odp, de OpenDocument Presentation, um formato aberto. Ele também abre e salva arquivos .pptx, o formato do PowerPoint, e exporta para PDF.\n\nA extensão .pptx é a padrão do PowerPoint. A .ods é das planilhas do Calc, e a .odt, dos documentos de texto do Writer. A .pdf é um formato de documento portátil, e não o formato nativo de apresentações do Impress.",
  },
  {
    materia: "informatica",
    tema: "Apresentações: PowerPoint e Impress",
    dificuldade: "facil",
    enunciado:
      "Qual tecla inicia a exibição da apresentação a partir do primeiro slide, tanto no PowerPoint quanto no Impress?",
    opcoes: [
      "F1",
      "F7",
      "F5",
      "F12",
      "Ctrl + P",
    ],
    correta: 2,
    explicacao:
      "A tecla F5 inicia a apresentação de slides a partir do primeiro slide, e funciona do mesmo jeito no PowerPoint e no Impress. A exibição ocupa a tela inteira, e o slide avança com um clique ou com as setas.\n\nA tecla F1 abre a ajuda. A F7 inicia a verificação de ortografia. A F12 abre a janela Salvar como, no PowerPoint. E o Ctrl + P abre a impressão. Nenhuma delas inicia a exibição dos slides.",
  },
  {
    materia: "informatica",
    tema: "Apresentações: PowerPoint e Impress",
    dificuldade: "facil",
    enunciado:
      "Qual tecla interrompe a exibição em tela cheia e devolve o usuário ao modo de edição?",
    opcoes: [
      "Enter",
      "Page Down",
      "Esc",
      "Home",
      "Seta para a esquerda",
    ],
    correta: 2,
    explicacao:
      "A tecla Esc encerra a exibição de slides e volta ao modo de edição, em qualquer ponto da apresentação. É a saída de emergência de quem apresenta.\n\nA tecla Enter e a Page Down avançam para o próximo slide ou efeito. A tecla Home leva ao primeiro slide da exibição, sem encerrá-la. E a seta para a esquerda volta ao slide ou ao efeito anterior. Todas elas mantêm a apresentação em andamento.",
  },
  {
    materia: "informatica",
    tema: "Apresentações: PowerPoint e Impress",
    dificuldade: "facil",
    enunciado:
      "O que é um slide, em um programa de apresentações?",
    opcoes: [
      "Um tipo de gráfico de colunas",
      "Cada página individual da apresentação",
      "Um efeito sonoro de transição",
      "A barra de ferramentas do programa",
      "O arquivo de imagem de um fundo",
    ],
    correta: 1,
    explicacao:
      "O slide é a unidade da apresentação: cada página, que pode conter títulos, textos, imagens, tabelas, gráficos e vídeos. O conjunto dos slides, na ordem em que são exibidos, forma a apresentação.\n\nNão é um tipo de gráfico, nem um efeito sonoro. Também não é a barra de ferramentas, que reúne os comandos do programa, nem apenas o arquivo de imagem de um fundo, que é um elemento que pode aparecer dentro de um slide.",
  },
  {
    materia: "informatica",
    tema: "Apresentações: PowerPoint e Impress",
    dificuldade: "facil",
    enunciado:
      "Como se chama o efeito visual que ocorre na passagem de um slide para o slide seguinte?",
    opcoes: [
      "Transição",
      "Animação de objeto",
      "Tema",
      "Layout",
      "Slide mestre",
    ],
    correta: 0,
    explicacao:
      "A transição é o efeito aplicado na troca entre dois slides, como esmaecer, empurrar ou revelar. Ela é configurada no slide que vai entrar, e fica em uma guia própria, a Transições, no PowerPoint.\n\nA animação age sobre objetos dentro de um slide, como um título ou uma imagem. O tema define cores, fontes e efeitos gerais. O layout define a disposição dos espaços do slide. E o slide mestre guarda a formatação comum a todos os slides.",
  },
  {
    materia: "informatica",
    tema: "Apresentações: PowerPoint e Impress",
    dificuldade: "facil",
    enunciado:
      "Como se chama o efeito de movimento aplicado a um objeto de dentro do slide, como um título ou uma imagem?",
    opcoes: [
      "Transição",
      "Tema",
      "Animação",
      "Folheto",
      "Seção",
    ],
    correta: 2,
    explicacao:
      "A animação é o efeito aplicado a um objeto do slide, como fazer um título entrar pela esquerda ou uma imagem aumentar de tamanho. No PowerPoint, fica na guia Animações.\n\nA transição, ao contrário, ocorre entre um slide e o seguinte. O tema define cores e fontes gerais. O folheto é um modo de impressão com vários slides por página. E a seção é um grupo de slides, que serve para organizar a apresentação.",
  },
  {
    materia: "informatica",
    tema: "Apresentações: PowerPoint e Impress",
    dificuldade: "facil",
    enunciado:
      "Em qual guia do PowerPoint se escolhe um tema, que muda de uma só vez as cores, as fontes e os efeitos de toda a apresentação?",
    opcoes: [
      "Inserir",
      "Transições",
      "Revisão",
      "Exibição",
      "Design",
    ],
    correta: 4,
    explicacao:
      "A guia Design reúne os temas, que são conjuntos prontos de cores, fontes e efeitos, além das variantes e do tamanho do slide. Ao escolher um tema, toda a apresentação muda de aparência de uma só vez.\n\nA guia Inserir traz imagens, tabelas, gráficos e formas. A Transições cuida dos efeitos entre os slides. A Revisão oferece ortografia e comentários. E a Exibição muda os modos de visualização, como a Classificação de Slides.",
  },
  {
    materia: "informatica",
    tema: "Apresentações: PowerPoint e Impress",
    dificuldade: "facil",
    enunciado:
      "Qual atalho insere um novo slide depois do slide selecionado, no PowerPoint?",
    opcoes: [
      "Ctrl + Z",
      "Ctrl + P",
      "Ctrl + M",
      "Ctrl + C",
      "Ctrl + Y",
    ],
    correta: 2,
    explicacao:
      "O atalho Ctrl + M insere um novo slide logo depois do slide selecionado, com o mesmo layout do anterior ou com o layout padrão. Também funciona no Impress.\n\nO Ctrl + Z desfaz a última ação, e o Ctrl + Y a refaz. O Ctrl + P abre a impressão. E o Ctrl + C copia o que está selecionado. Nenhum desses cria um slide novo: só o Ctrl + M faz isso, e o slide criado já nasce com um layout, pronto para receber o conteúdo.",
  },
  {
    materia: "informatica",
    tema: "Apresentações: PowerPoint e Impress",
    dificuldade: "facil",
    enunciado:
      "Onde ficam as anotações do apresentador, que o público não vê durante a exibição dos slides?",
    opcoes: [
      "Dentro do slide mestre",
      "Na barra de status do programa",
      "No rodapé de todos os slides",
      "No painel de Anotações, abaixo do slide",
      "Na guia Revisão",
    ],
    correta: 3,
    explicacao:
      "As anotações, também chamadas de notas do orador, ficam no painel de Anotações, abaixo do slide, no modo Normal. Servem como roteiro do apresentador, e não aparecem para o público durante a exibição.\n\nO slide mestre guarda a formatação comum aos slides. A barra de status mostra informações como o número do slide. O rodapé dos slides é visível ao público. E a guia Revisão reúne ortografia e comentários, que são outro recurso.",
  },
  {
    materia: "informatica",
    tema: "Apresentações: PowerPoint e Impress",
    dificuldade: "facil",
    enunciado:
      "Em qual guia do PowerPoint ficam os comandos Do Começo e Do Slide Atual, que iniciam a exibição?",
    opcoes: [
      "Apresentação de Slides",
      "Design",
      "Inserir",
      "Animações",
      "Página Inicial",
    ],
    correta: 0,
    explicacao:
      "Na guia Apresentação de Slides ficam os comandos que iniciam a exibição, como Do Começo e Do Slide Atual, além de Ocultar Slide, Testar Intervalos e as opções de configuração da apresentação.\n\nA guia Design traz os temas. A Inserir acrescenta objetos aos slides. A Animações aplica movimento aos objetos. E a Página Inicial concentra a formatação de texto, o novo slide e a área de transferência.",
  },
  {
    materia: "informatica",
    tema: "Apresentações: PowerPoint e Impress",
    dificuldade: "media",
    enunciado:
      "Qual é a diferença entre transição e animação em uma apresentação?",
    opcoes: [
      "A transição age sobre os objetos; a animação liga os slides",
      "As duas são sinônimos, mudando só o nome",
      "A transição só existe no Impress; a animação, no PowerPoint",
      "A animação serve para imprimir; a transição, para exibir",
      "A transição liga um slide ao seguinte; a animação age sobre os objetos",
    ],
    correta: 4,
    explicacao:
      "A transição é o efeito da passagem de um slide para o outro, e a animação é o efeito sobre objetos de dentro de um slide, como textos e imagens. Os dois ficam em guias diferentes no PowerPoint: Transições e Animações.\n\nNão são sinônimos, e as definições não podem ser trocadas. Os dois recursos existem no PowerPoint e no Impress. E nenhum deles tem relação com impressão: ambos só aparecem durante a exibição dos slides.",
  },
  {
    materia: "informatica",
    tema: "Apresentações: PowerPoint e Impress",
    dificuldade: "media",
    enunciado:
      "Qual atalho inicia a exibição a partir do slide que está selecionado, e não do primeiro?",
    opcoes: [
      "F5",
      "Shift + F5",
      "Esc",
      "Ctrl + P",
      "Ctrl + Z",
    ],
    correta: 1,
    explicacao:
      "O atalho Shift + F5 inicia a exibição no slide atual, o que é útil para testar um trecho sem passar por todos os anteriores. No PowerPoint, equivale ao comando Do Slide Atual.\n\nA tecla F5, sozinha, inicia do primeiro slide. A tecla Esc encerra a exibição. O Ctrl + P abre a impressão. E o Ctrl + Z desfaz a última ação de edição. Só a combinação com o Shift altera o ponto de partida da apresentação.",
  },
  {
    materia: "informatica",
    tema: "Apresentações: PowerPoint e Impress",
    dificuldade: "media",
    enunciado:
      "Para colocar o logotipo de uma escola em todos os slides de uma vez, em qual elemento ele deve ser inserido?",
    opcoes: [
      "Na guia Transições",
      "No painel de Anotações",
      "No slide mestre",
      "Na barra de status",
      "No modo de leitura",
    ],
    correta: 2,
    explicacao:
      "O slide mestre guarda a formatação e os elementos comuns a todos os slides, como logotipo, fontes e cores. Um objeto inserido nele aparece em todos os slides que seguem o mestre, sem precisar repeti-lo um por um.\n\nA guia Transições só define efeitos de passagem. O painel de Anotações guarda o roteiro do apresentador. A barra de status é uma área da janela do programa, e não faz parte dos slides. E o modo de leitura é só uma forma de visualizar a apresentação.",
  },
  {
    materia: "informatica",
    tema: "Apresentações: PowerPoint e Impress",
    dificuldade: "media",
    enunciado:
      "O que acontece com um slide marcado como oculto durante a exibição da apresentação?",
    opcoes: [
      "Ele é apagado do arquivo",
      "Ele é exibido duas vezes",
      "Ele é movido para o fim",
      "Ele é pulado, mas continua no arquivo",
      "Ele é exibido sem o texto",
    ],
    correta: 3,
    explicacao:
      "Ao ocultar um slide, ele é pulado na exibição, mas permanece no arquivo e na lista de miniaturas, onde aparece esmaecido e com o número riscado. Pode ser reativado a qualquer momento, e é útil para guardar material de apoio.\n\nO slide oculto não é apagado, não é exibido duas vezes, não muda de posição e não perde o texto. Só deixa de aparecer para o público durante a apresentação.",
  },
  {
    materia: "informatica",
    tema: "Apresentações: PowerPoint e Impress",
    dificuldade: "media",
    enunciado:
      "Qual recurso mostra ao apresentador o slide atual, o próximo, as anotações e o cronômetro, enquanto o público vê só o slide?",
    opcoes: [
      "Modo de Exibição do Apresentador",
      "Classificação de Slides",
      "Estrutura de Tópicos",
      "Modo de Leitura",
      "Slide Mestre",
    ],
    correta: 0,
    explicacao:
      "O modo de exibição do apresentador usa dois monitores, ou dois pontos de exibição: o público vê o slide em tela cheia, e o apresentador vê, no próprio computador, o slide atual, o seguinte, as anotações e o tempo decorrido.\n\nA classificação de slides mostra miniaturas para reorganizá-los. A estrutura de tópicos mostra só os textos. O modo de leitura exibe a apresentação em uma janela. E o slide mestre é o modelo de formatação dos slides.",
  },
  {
    materia: "informatica",
    tema: "Apresentações: PowerPoint e Impress",
    dificuldade: "media",
    enunciado:
      "No LibreOffice Impress, qual modo de exibição mostra as miniaturas de todos os slides, para reordená-los arrastando?",
    opcoes: [
      "Estrutura de tópicos",
      "Anotações",
      "Folheto",
      "Classificador de slides",
      "Normal",
    ],
    correta: 3,
    explicacao:
      "O classificador de slides mostra todos os slides como miniaturas na tela, e permite reordená-los arrastando, além de ocultar, duplicar e excluir. É o mesmo princípio da Classificação de Slides do PowerPoint.\n\nA estrutura de tópicos mostra os textos em lista. O modo Anotações mostra o slide com o espaço das notas. O Folheto mostra o leiaute de impressão com vários slides por página. E o modo Normal é o de edição de um slide por vez.",
  },
  {
    materia: "informatica",
    tema: "Apresentações: PowerPoint e Impress",
    dificuldade: "media",
    enunciado:
      "Qual modo de exibição do PowerPoint mostra apenas os títulos e os tópicos de todos os slides, em forma de lista hierárquica?",
    opcoes: [
      "Classificação de Slides",
      "Estrutura de Tópicos",
      "Página de Anotações",
      "Modo de Leitura",
      "Slide Mestre",
    ],
    correta: 1,
    explicacao:
      "A Estrutura de Tópicos mostra o texto dos slides como uma lista hierárquica, com títulos e subtópicos, e permite escrever ou reorganizar o conteúdo sem se preocupar com o visual. É útil para montar o roteiro da apresentação.\n\nA Classificação de Slides exibe miniaturas dos slides. A Página de Anotações mostra o slide com o espaço das notas. O Modo de Leitura exibe a apresentação em janela. E o Slide Mestre mostra o modelo de formatação.",
  },
  {
    materia: "informatica",
    tema: "Apresentações: PowerPoint e Impress",
    dificuldade: "media",
    enunciado:
      "Qual categoria de efeitos de animação faz um objeto aparecer no slide, como em Surgir e Desvanecer?",
    opcoes: [
      "Saída",
      "Ênfase",
      "Trajetória",
      "Entrada",
      "Transição",
    ],
    correta: 3,
    explicacao:
      "Os efeitos de entrada fazem o objeto surgir no slide, que antes não o mostrava: aparecer, desvanecer, entrar voando e outros. É a categoria mais usada para revelar tópicos aos poucos.\n\nOs de saída fazem o objeto sair do slide. Os de ênfase chamam a atenção para um objeto que já está visível, como pulsar ou mudar de cor. As trajetórias movem o objeto por um caminho. E a transição não é categoria de animação: é o efeito entre slides.",
  },
  {
    materia: "informatica",
    tema: "Apresentações: PowerPoint e Impress",
    dificuldade: "media",
    enunciado:
      "Qual categoria de efeitos de animação faz um objeto que está visível desaparecer do slide durante a exibição?",
    opcoes: [
      "Saída",
      "Entrada",
      "Ênfase",
      "Trajetória",
      "Layout",
    ],
    correta: 0,
    explicacao:
      "Os efeitos de saída retiram da tela um objeto que já estava visível, como desaparecer, sair voando ou encolher até sumir. Combinados com efeitos de entrada, permitem trocar um conteúdo por outro no mesmo slide.\n\nOs de entrada fazem o objeto aparecer. Os de ênfase mantêm o objeto na tela e só destacam algo nele. As trajetórias movem o objeto, que continua visível. E o layout não é efeito de animação: é a disposição dos espaços do slide.",
  },
  {
    materia: "informatica",
    tema: "Apresentações: PowerPoint e Impress",
    dificuldade: "media",
    enunciado:
      "O que é uma trajetória de animação, no PowerPoint e no Impress?",
    opcoes: [
      "A ordem em que os slides são exibidos",
      "O caminho que o objeto percorre pelo slide",
      "O tempo de uma transição",
      "O local onde o arquivo é salvo",
      "O nome do tema aplicado",
    ],
    correta: 1,
    explicacao:
      "A trajetória de animação é um efeito de movimento em que o objeto percorre um caminho desenhado ou predefinido no slide, como uma linha reta, um arco ou uma curva livre. O caminho aparece como uma linha tracejada na edição.\n\nA ordem dos slides é definida pela sequência de miniaturas. O tempo da transição é a duração do efeito entre slides. O local do arquivo é o caminho no disco. E o nome do tema identifica um conjunto de cores e fontes.",
  },
  {
    materia: "informatica",
    tema: "Apresentações: PowerPoint e Impress",
    dificuldade: "media",
    enunciado:
      "Em uma animação, o que significa iniciar um efeito com a opção Com o Anterior?",
    opcoes: [
      "Ele espera o clique do apresentador",
      "Ele começa junto com o efeito anterior, sem novo clique",
      "Ele começa só depois que o anterior termina",
      "Ele se repete até o fim da apresentação",
      "Ele é removido da apresentação",
    ],
    correta: 1,
    explicacao:
      "Com o Anterior faz o efeito começar no mesmo instante do efeito que o precede, sem exigir um novo clique. É o jeito de animar dois objetos ao mesmo tempo, como um título e uma imagem que entram juntos.\n\nEsperar o clique é a opção Ao Clicar. Começar depois que o anterior termina é a opção Após o Anterior. Repetir é uma configuração à parte, a de repetição. E remover um efeito é feito pelo painel de animação, e não por uma forma de início.",
  },
  {
    materia: "informatica",
    tema: "Apresentações: PowerPoint e Impress",
    dificuldade: "media",
    enunciado:
      "Qual forma de início de um efeito de animação o faz começar sozinho assim que o efeito anterior terminar?",
    opcoes: [
      "Ao Clicar",
      "Com o Anterior",
      "Em Loop",
      "Após o Anterior",
      "Manual",
    ],
    correta: 3,
    explicacao:
      "Após o Anterior faz o efeito começar automaticamente quando o anterior termina, sem exigir clique. É a forma de montar sequências em cadeia, em que um objeto entra logo depois do outro.\n\nAo Clicar espera uma ação do apresentador. Com o Anterior começa junto com o efeito anterior, e não depois dele. Em Loop e Manual não são formas de início de efeito: a repetição é uma configuração do efeito, e o avanço manual é um modo de passagem de slides.",
  },
  {
    materia: "informatica",
    tema: "Apresentações: PowerPoint e Impress",
    dificuldade: "media",
    enunciado:
      "Qual recurso permite criar um botão que, ao ser clicado durante a exibição, leva a outro slide da apresentação?",
    opcoes: [
      "Slide mestre",
      "Transição",
      "Folheto",
      "Hiperlink ou botão de ação",
      "Modo de leitura",
    ],
    correta: 3,
    explicacao:
      "O hiperlink e o botão de ação fazem o clique levar a outro slide, a um endereço da web, a um arquivo ou a um programa. Com eles se montam menus e apresentações não lineares, em que o apresentador escolhe o caminho.\n\nO slide mestre define a formatação comum. A transição é o efeito de troca entre slides. O folheto é um modo de impressão. E o modo de leitura é uma forma de visualizar a apresentação em janela, sem criar navegação.",
  },
  {
    materia: "informatica",
    tema: "Apresentações: PowerPoint e Impress",
    dificuldade: "media",
    enunciado:
      "O que acontece ao abrir um arquivo salvo como Apresentação de Slides do PowerPoint, com a extensão .ppsx?",
    opcoes: [
      "Ele abre sempre em modo de edição",
      "Ele já abre em modo de exibição, em tela cheia",
      "Ele abre como documento de texto",
      "Ele é convertido em planilha",
      "Ele não pode ser aberto",
    ],
    correta: 1,
    explicacao:
      "Um arquivo .ppsx é uma apresentação de slides: ao ser aberto, o PowerPoint já inicia a exibição em tela cheia, sem passar pelo modo de edição. Serve para distribuir uma apresentação pronta para ser projetada.\n\nPara editar, abre-se o PowerPoint e se carrega o arquivo por dentro do programa. O arquivo não vira documento de texto nem planilha, e pode ser aberto normalmente. A extensão .pptx é a que abre em modo de edição por padrão.",
  },
  {
    materia: "informatica",
    tema: "Apresentações: PowerPoint e Impress",
    dificuldade: "media",
    enunciado:
      "Qual extensão identifica um modelo de apresentação do PowerPoint, usado como base para criar novos arquivos?",
    opcoes: [
      ".potx",
      ".pptx",
      ".ppsx",
      ".odp",
      ".xltx",
    ],
    correta: 0,
    explicacao:
      "A extensão .potx identifica um modelo do PowerPoint, que guarda tema, layouts, formatação e até conteúdo pronto. Ao abri-lo, o programa cria uma apresentação nova baseada nele, sem alterar o modelo.\n\nA .pptx é uma apresentação comum. A .ppsx é uma apresentação de slides, que abre em modo de exibição. A .odp é o formato do Impress. E a .xltx é um modelo do Excel, e não do PowerPoint.",
  },
  {
    materia: "informatica",
    tema: "Apresentações: PowerPoint e Impress",
    dificuldade: "media",
    enunciado:
      "Qual atalho agrupa em um só os objetos selecionados no slide, no PowerPoint?",
    opcoes: [
      "Ctrl + Shift + G",
      "Ctrl + G",
      "Ctrl + D",
      "Ctrl + Z",
      "Ctrl + P",
    ],
    correta: 1,
    explicacao:
      "O atalho Ctrl + G agrupa os objetos selecionados, e eles passam a ser movidos, redimensionados e formatados como um só. O grupo pode ser desfeito depois sem perder os objetos.\n\nO Ctrl + Shift + G faz o contrário: desagrupa. O Ctrl + D duplica o objeto ou o slide selecionado. O Ctrl + Z desfaz a última ação. E o Ctrl + P abre a impressão. Só o primeiro atalho reúne os objetos em um grupo.",
  },
  {
    materia: "informatica",
    tema: "Apresentações: PowerPoint e Impress",
    dificuldade: "media",
    enunciado:
      "Para que serve o SmartArt, recurso da guia Inserir do PowerPoint?",
    opcoes: [
      "Corrigir a ortografia dos slides",
      "Montar diagramas de listas, processos e hierarquias",
      "Proteger a apresentação com uma senha",
      "Gravar a voz do apresentador na exibição",
      "Alterar o tamanho do papel de impressão",
    ],
    correta: 1,
    explicacao:
      "O SmartArt converte o texto em diagramas prontos, como listas, processos, ciclos, hierarquias e relações, que se ajustam sozinhos quando se acrescenta ou se remove um item. É muito usado em organogramas e fluxos.\n\nA ortografia é verificada na guia Revisão. A senha é definida ao salvar ou nas informações do arquivo. A gravação de voz é outro recurso. E o tamanho do papel é uma configuração da impressão, e não do diagrama.",
  },
  {
    materia: "informatica",
    tema: "Apresentações: PowerPoint e Impress",
    dificuldade: "media",
    enunciado:
      "Um vídeo foi inserido no slide como vínculo, e não incorporado. Ao levar o arquivo da apresentação para outro computador, o que é necessário?",
    opcoes: [
      "Nada, pois o vídeo viaja dentro do arquivo",
      "Levar também o arquivo do vídeo, na mesma pasta",
      "Converter o vídeo em imagem",
      "Apagar o vídeo e inserir de novo",
      "Salvar a apresentação em planilha",
    ],
    correta: 1,
    explicacao:
      "Um vídeo vinculado fica fora do arquivo da apresentação, e o slide guarda só o caminho até ele. Para que continue tocando em outro computador, o arquivo do vídeo precisa ir junto, de preferência na mesma pasta da apresentação.\n\nO vídeo incorporado, ao contrário, viaja dentro do arquivo, que fica maior. Converter em imagem tiraria o movimento. Apagar e inserir de novo recriaria o mesmo vínculo. E salvar em planilha não resolve nada, pois o formato muda o tipo de documento.",
  },
  {
    materia: "informatica",
    tema: "Apresentações: PowerPoint e Impress",
    dificuldade: "media",
    enunciado:
      "Por que se costuma exportar uma apresentação em PDF antes de enviá-la a outra pessoa para leitura?",
    opcoes: [
      "Para que as animações toquem melhor",
      "Para permitir a edição dos slides",
      "Para reduzir o número de slides",
      "Para trocar o tema automaticamente",
      "Para manter o leiaute, mas sem as animações",
    ],
    correta: 4,
    explicacao:
      "O PDF preserva o leiaute, as fontes e as imagens, e aparece igual em qualquer computador, mesmo sem o PowerPoint. Em compensação, não guarda as animações e as transições, e é pouco indicado para quem precisa editar.\n\nAs animações não tocam melhor no PDF, pois não são mantidas. A edição é mais difícil, e não mais fácil. O número de slides não muda na exportação. E o tema não é trocado: ele é apenas fixado na aparência final.",
  },
  {
    materia: "informatica",
    tema: "Apresentações: PowerPoint e Impress",
    dificuldade: "media",
    enunciado:
      "Qual atalho cria uma cópia do slide selecionado no painel de miniaturas, colocando-a logo depois dele, no PowerPoint?",
    opcoes: [
      "Ctrl + G",
      "Ctrl + M",
      "Ctrl + D",
      "Ctrl + P",
      "Ctrl + Z",
    ],
    correta: 2,
    explicacao:
      "O atalho Ctrl + D duplica o slide selecionado no painel de miniaturas, e a cópia aparece logo depois dele, com todo o conteúdo, formatação e efeitos. É útil para criar um slide parecido com outro, sem refazê-lo do zero.\n\nO Ctrl + G agrupa os objetos selecionados. O Ctrl + M insere um slide novo, com o layout padrão, e não uma cópia. O Ctrl + P abre a impressão. E o Ctrl + Z desfaz a última ação. Só o primeiro duplica o slide.",
  },
  {
    materia: "informatica",
    tema: "Apresentações: PowerPoint e Impress",
    dificuldade: "media",
    enunciado:
      "O que é um folheto, na impressão de uma apresentação?",
    opcoes: [
      "Um slide impresso em tamanho gigante",
      "Um slide impresso sem o fundo",
      "Uma página com vários slides em miniatura",
      "O arquivo da apresentação compactado",
      "A lista dos efeitos de transição",
    ],
    correta: 2,
    explicacao:
      "O folheto é um modo de impressão que coloca vários slides em miniatura em uma mesma folha, geralmente 2, 3, 4, 6 ou 9 por página. Economiza papel, e pode ter linhas para anotações ao lado de cada miniatura.\n\nNão é um slide gigante, nem a impressão sem fundo, que é outra opção de cor. Também não é o arquivo compactado, que é feito pelo sistema de arquivos, nem a lista de transições, que se vê na guia Transições.",
  },
  {
    materia: "informatica",
    tema: "Apresentações: PowerPoint e Impress",
    dificuldade: "media",
    enunciado:
      "Um professor imprime em folhetos uma apresentação de 30 slides, com 6 slides por página. Quantas folhas ele usa, imprimindo só um lado?",
    opcoes: [
      "5",
      "6",
      "4",
      "7",
      "30",
    ],
    correta: 0,
    explicacao:
      "Dividindo, 30 ÷ 6 = 5. Cada folha comporta 6 slides em miniatura, e a divisão é exata, então não sobram slides para uma folha a mais. Conferindo, 5 folhas × 6 slides = 30 slides.\n\n6 é o número de slides por folha, e não a quantidade de folhas. 4 resultaria de 8 slides por folha. 7 arredondaria para cima uma divisão que já é exata. E 30 é o total de slides, o que ocorreria se cada folha levasse um só slide.",
  },
  {
    materia: "informatica",
    tema: "Apresentações: PowerPoint e Impress",
    dificuldade: "media",
    enunciado:
      "Um slide tem proporção 16:9 e largura de 1.280 pixels. Qual é a altura, em pixels?",
    opcoes: [
      "960",
      "853",
      "720",
      "1.024",
      "1.080",
    ],
    correta: 2,
    explicacao:
      "Na proporção 16:9, a altura é 9/16 da largura: 1.280 × 9 ÷ 16 = 720 pixels. É o formato 1280 × 720, comum em telas e projetores atuais, chamado de widescreen.\n\n960 seria a altura na proporção 4:3, que é 3/4 da largura. 853 corresponderia à proporção 3:2. 1.024 não corresponde a uma proporção usual de slides com essa largura. E 1.080 é a altura do formato 1920 × 1080, que é 16:9, mas de largura maior.",
  },
  {
    materia: "informatica",
    tema: "Apresentações: PowerPoint e Impress",
    dificuldade: "media",
    enunciado:
      "Um slide tem proporção 4:3 e largura de 1.024 pixels. Qual é a altura, em pixels?",
    opcoes: [
      "576",
      "768",
      "683",
      "720",
      "1.024",
    ],
    correta: 1,
    explicacao:
      "Na proporção 4:3, a altura é 3/4 da largura: 1.024 × 3 ÷ 4 = 768 pixels. É o formato 1024 × 768, muito usado em projetores e monitores mais antigos.\n\n576 é a altura do mesmo slide na proporção 16:9, que é 9/16 da largura. 683 corresponderia à proporção 3:2. 720 é a altura do formato 1280 × 720, de outra largura. E 1.024 seria a altura de um slide quadrado, o que não é o caso de 4:3.",
  },
  {
    materia: "informatica",
    tema: "Apresentações: PowerPoint e Impress",
    dificuldade: "media",
    enunciado:
      "Uma palestra de 40 minutos terá 2,5 minutos por slide, em média. Quantos slides cabem na apresentação?",
    opcoes: [
      "20",
      "15",
      "18",
      "16",
      "10",
    ],
    correta: 3,
    explicacao:
      "Dividindo o tempo total pelo tempo de cada slide, 40 ÷ 2,5 = 16 slides. Conferindo, 16 × 2,5 = 40 minutos.\n\n20 resultaria de 2 minutos por slide, e 10, de 4 minutos por slide. 15 slides ocupariam 37,5 minutos, e 18 slides, 45 minutos, que estouraria o tempo. Esse cálculo serve de regra prática para dimensionar uma apresentação: tempo disponível dividido pelo tempo médio de cada slide.",
  },
  {
    materia: "informatica",
    tema: "Apresentações: PowerPoint e Impress",
    dificuldade: "media",
    enunciado:
      "No campo de impressão de slides, digita-se 2-5, 9, 12-14. Quantos slides serão impressos?",
    opcoes: [
      "6",
      "12",
      "5",
      "13",
      "8",
    ],
    correta: 4,
    explicacao:
      "O intervalo 2-5 inclui os slides 2, 3, 4 e 5, isto é, 4 slides. O 9 é 1 slide, e o intervalo 12-14 inclui 12, 13 e 14, isto é, 3 slides. No total, 4 + 1 + 3 = 8 slides.\n\n6 subtrai os limites sem contar o primeiro de cada intervalo. 12 é a distância entre o primeiro e o último slide, 14 − 2. 5 é a quantidade de números digitados. E 13 conta todos os slides de 2 a 14, como se os intervalos fossem contínuos.",
  },
  {
    materia: "informatica",
    tema: "Apresentações: PowerPoint e Impress",
    dificuldade: "media",
    enunciado:
      "Uma apresentação tem 20 slides, e 3 deles estão ocultos. Quantos slides o público vê numa exibição completa?",
    opcoes: [
      "20",
      "23",
      "17",
      "3",
      "16",
    ],
    correta: 2,
    explicacao:
      "Os slides ocultos são pulados na exibição, então o público vê 20 − 3 = 17 slides. Os três ocultos continuam no arquivo, só não aparecem.\n\n20 é o total de slides do arquivo, contando os ocultos. 23 somaria os ocultos em vez de descontá-los. 3 é a quantidade de slides ocultos, e não de exibidos. E 16 desconta um slide a mais do que o enunciado indica.",
  },
  {
    materia: "informatica",
    tema: "Apresentações: PowerPoint e Impress",
    dificuldade: "media",
    enunciado:
      "Uma sequência de 7 efeitos tem estas formas de início: 1º Ao Clicar, 2º Com o Anterior, 3º Após o Anterior, 4º Ao Clicar, 5º Ao Clicar, 6º Com o Anterior e 7º Após o Anterior. Quantos cliques o apresentador dá para exibir todos?",
    opcoes: [
      "3",
      "7",
      "2",
      "4",
      "5",
    ],
    correta: 0,
    explicacao:
      "Só os efeitos Ao Clicar exigem o clique do apresentador: são o 1º, o 4º e o 5º, isto é, 3 cliques. O 2º começa junto com o 1º, o 3º começa quando o 2º termina, e o 6º e o 7º seguem do mesmo modo depois do 5º, sem novo clique.\n\n7 seria o número de efeitos, como se todos pedissem clique. 2 e 4 erram a contagem dos efeitos Ao Clicar. E 5 inclui, por engano, dois efeitos que começam sozinhos.",
  },
  {
    materia: "informatica",
    tema: "Apresentações: PowerPoint e Impress",
    dificuldade: "dificil",
    enunciado:
      "Uma foto de 3.000 pixels de largura é colocada em um slide de 25,4 cm de largura, ocupando-o por inteiro. Sabendo que 1 polegada mede 2,54 cm, qual é a resolução aproximada da foto no slide, em pixels por polegada?",
    opcoes: [
      "300",
      "118",
      "72",
      "96",
      "3.000",
    ],
    correta: 0,
    explicacao:
      "A largura de 25,4 cm equivale a 25,4 ÷ 2,54 = 10 polegadas. Com 3.000 pixels distribuídos em 10 polegadas, a resolução é 3.000 ÷ 10 = 300 pixels por polegada, boa para impressão.\n\n118 é a densidade em pixels por centímetro, 3.000 ÷ 25,4, e não por polegada. 72 e 96 são resoluções típicas de telas, e não resultam desta conta. E 3.000 é a largura em pixels, sem dividir pela largura em polegadas.",
  },
  {
    materia: "informatica",
    tema: "Apresentações: PowerPoint e Impress",
    dificuldade: "dificil",
    enunciado:
      "Um slide 16:9 tem 33,867 cm de largura. Qual é a altura aproximada, em centímetros?",
    opcoes: [
      "25,4",
      "21,17",
      "16,93",
      "15",
      "19,05",
    ],
    correta: 4,
    explicacao:
      "Na proporção 16:9, a altura é 9/16 da largura: 33,867 × 9 ÷ 16 = 19,05 cm. É o tamanho padrão do slide widescreen do PowerPoint, de 13,333 por 7,5 polegadas.\n\n25,4 seria a altura se a proporção fosse 4:3, com 3/4 da largura. 21,17 corresponderia à proporção 16:10. 16,93 é a metade da largura, que daria uma proporção 2:1. E 15 não corresponde a uma proporção usual de slides com essa largura.",
  },
  {
    materia: "informatica",
    tema: "Apresentações: PowerPoint e Impress",
    dificuldade: "dificil",
    enunciado:
      "Uma apresentação tem 15 imagens de 4 MB cada. Ao comprimi-las, o tamanho total das imagens cai 60%. Qual é o tamanho total depois da compressão, em MB?",
    opcoes: [
      "36",
      "40",
      "60",
      "24",
      "9",
    ],
    correta: 3,
    explicacao:
      "Antes, as imagens somam 15 × 4 = 60 MB. Uma queda de 60% significa que restam 40% do tamanho: 0,4 × 60 = 24 MB. Conferindo, 60 − 36 = 24, em que 36 MB é o que foi retirado.\n\n36 é o tamanho retirado, e não o que sobrou. 40 confunde os 40% restantes com uma quantidade em MB. 60 é o tamanho original. E 9 aplicaria o 60% ao número de imagens, 15 × 0,6, o que não tem significado nesta conta.",
  },
  {
    materia: "informatica",
    tema: "Apresentações: PowerPoint e Impress",
    dificuldade: "dificil",
    enunciado:
      "Em um slide, 9 efeitos de animação têm estas formas de início, na ordem: Com o Anterior, Ao Clicar, Após o Anterior, Após o Anterior, Ao Clicar, Com o Anterior, Ao Clicar, Após o Anterior e Com o Anterior. Quantos efeitos acontecem sozinhos, sem clique?",
    opcoes: [
      "3",
      "9",
      "5",
      "7",
      "6",
    ],
    correta: 4,
    explicacao:
      "Só o Ao Clicar exige uma ação do apresentador. Eles são o 2º, o 5º e o 7º, isto é, 3 efeitos. Os outros 9 − 3 = 6 efeitos começam sozinhos: o 1º, que dispara assim que o slide aparece, e o 3º, o 4º, o 6º, o 8º e o 9º.\n\n3 é a quantidade de efeitos que dependem de clique, e não dos automáticos. 9 é o total de efeitos. 5 e 7 erram a contagem, por esquecer um dos efeitos automáticos ou contar um dos que pedem clique.",
  },
  {
    materia: "informatica",
    tema: "Apresentações: PowerPoint e Impress",
    dificuldade: "dificil",
    enunciado:
      "Uma apresentação automática tem 12 slides de 25 segundos cada e 3 slides de 40 segundos cada, sem pausas entre eles. Qual é a duração total, em minutos?",
    opcoes: [
      "7",
      "5",
      "10",
      "6,25",
      "15",
    ],
    correta: 0,
    explicacao:
      "Os 12 slides de 25 segundos somam 300 segundos, e os 3 de 40 segundos somam 120 segundos. O total é 420 segundos, e 420 ÷ 60 = 7 minutos.\n\n5 minutos corresponde só aos 12 slides curtos, que dão 300 segundos. 10 minutos usaria 40 segundos nos 15 slides. 6,25 minutos usaria 25 segundos nos 15 slides, o que ignora os três slides mais longos. E 15 é o número de slides, e não o tempo.",
  },
  {
    materia: "informatica",
    tema: "Apresentações: PowerPoint e Impress",
    dificuldade: "dificil",
    enunciado:
      "Ao mudar a fonte do título no slide mestre do PowerPoint, o que acontece com os slides já criados?",
    opcoes: [
      "Nenhum slide muda, pois só os novos são afetados",
      "Todos mudam, sem exceção, até os formatados à mão",
      "Os slides são apagados e recriados",
      "Só o primeiro slide muda",
      "Os que herdam do mestre mudam; os formatados à mão mantêm a fonte",
    ],
    correta: 4,
    explicacao:
      "O slide mestre é o modelo de que os layouts e os slides herdam a formatação. Ao mudar a fonte do título nele, todos os slides que seguem o mestre passam a usar a nova fonte, e os que tiveram o título formatado manualmente continuam com a fonte que o usuário escolheu.\n\nA mudança não vale só para os novos. Também não ignora a formatação manual, que prevalece sobre o mestre. Nenhum slide é apagado ou recriado. E a alteração não se limita ao primeiro slide, pois atinge todos os que herdam do mestre.",
  },
  {
    materia: "informatica",
    tema: "Apresentações: PowerPoint e Impress",
    dificuldade: "dificil",
    enunciado:
      "Uma apresentação usa uma fonte decorativa que não está instalada no computador onde será exibida. Qual medida preserva a aparência do texto?",
    opcoes: [
      "Aumentar o tamanho da fonte",
      "Trocar o tema por um tema escuro",
      "Ocultar os slides com a fonte",
      "Salvar o arquivo com extensão .txt",
      "Incorporar as fontes ao arquivo ou exportar em PDF",
    ],
    correta: 4,
    explicacao:
      "Quando a fonte não existe no outro computador, o programa a troca por uma parecida, e o texto muda de aparência. Para evitar isso, é possível incorporar as fontes ao arquivo ao salvar, ou exportar em PDF, que embute as fontes usadas.\n\nAumentar o tamanho não resolve a fonte ausente. Trocar o tema só muda cores e estilos. Ocultar os slides esconde o conteúdo, em vez de corrigi-lo. E salvar como .txt perde toda a formatação, inclusive imagens e slides.",
  },
  {
    materia: "informatica",
    tema: "Apresentações: PowerPoint e Impress",
    dificuldade: "dificil",
    enunciado:
      "No PowerPoint, o que acontece com os slides de uma seção ao usar o comando Remover Seção, sem a opção de excluir os slides?",
    opcoes: [
      "Eles são apagados junto com a seção",
      "Eles são ocultados na exibição",
      "Eles passam para o fim do arquivo",
      "Ficam na apresentação, na seção anterior",
      "Eles viram anotações do apresentador",
    ],
    correta: 3,
    explicacao:
      "As seções agrupam slides em blocos nomeados. Remover a seção apaga só o nome do grupo, e os slides continuam na apresentação, incorporados à seção que vem antes dela. Para apagar também os slides, existe um comando à parte, que remove a seção e os slides.\n\nOs slides não são apagados pelo comando simples, nem ocultados. Também não mudam de posição para o fim do arquivo. E não viram anotações, que são outro recurso, o das notas do apresentador.",
  },
  {
    materia: "informatica",
    tema: "Apresentações: PowerPoint e Impress",
    dificuldade: "dificil",
    enunciado:
      "Qual recurso do PowerPoint grava quanto tempo o apresentador gasta em cada slide, para que a apresentação avance sozinha depois?",
    opcoes: [
      "Modo de Leitura",
      "Folheto",
      "SmartArt",
      "Testar Intervalos",
      "Slide Mestre",
    ],
    correta: 3,
    explicacao:
      "O Testar Intervalos acompanha a apresentação ensaiada e registra o tempo de cada slide. Esses intervalos podem ser usados depois para avançar os slides automaticamente, quando a opção de usar intervalos gravados está ligada. Fica na guia Apresentação de Slides.\n\nO Modo de Leitura apenas exibe a apresentação em janela. O Folheto é um modo de impressão. O SmartArt cria diagramas. E o Slide Mestre guarda a formatação comum aos slides. Nenhum deles grava o tempo de cada slide.",
  },
  {
    materia: "informatica",
    tema: "Apresentações: PowerPoint e Impress",
    dificuldade: "dificil",
    enunciado:
      "Ao abrir no LibreOffice Impress um arquivo .pptx criado no PowerPoint, o que pode ocorrer?",
    opcoes: [
      "Diferenças pequenas de fontes, animações ou formatação",
      "O arquivo é apagado",
      "Todos os slides ficam em branco",
      "A apresentação vira planilha",
      "O arquivo só abre protegido por senha",
    ],
    correta: 0,
    explicacao:
      "O Impress abre arquivos .pptx e converte a maior parte do conteúdo, mas os formatos são diferentes, e pequenas diferenças podem aparecer: fontes substituídas, efeitos de animação ou de transição ajustados, ou elementos como o SmartArt simplificados. Vale conferir o resultado.\n\nO arquivo não é apagado nem fica em branco, e não vira planilha. E a senha só é exigida se o autor tiver protegido o arquivo, o que não depende do programa que o abre.",
  },
];
