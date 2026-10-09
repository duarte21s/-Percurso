/* Rascunho — Informática básica / Apresentações: PowerPoint e Impress.

   49 questões novas (11 fáceis, 28 médias, 10 difíceis), além da que já
   existe em informatica__fundamentos.mjs. As de conta são conferidas em
   código por um caminho diferente do da explicação: proporção de tela por
   razão de inteiros, folhetos por divisão com teto, intervalos de impressão
   por expansão de faixas, cliques de animação por simulação da sequência,
   resolução por pixels sobre polegadas, tamanho de arquivo e tempo total por
   soma. As conceituais (extensões, atalhos, recursos) ficam como pendentes
   de revisão independente. */

import { qualNum, lerNum } from "./_matematica-fund.mjs";

export const materia = "informatica";
export const tema = "Apresentações: PowerPoint e Impress";
export const arquivo = "informatica__apresentacoes-powerpoint-e-impress";

const num = (t) => lerNum(String(t).replace(/^≈\s*/, ""));
const acha = (valor, alt, conv = num, tol = 1e-9) => { const a = alt.map((t) => { const x = conv(t); return Number.isFinite(x) && Math.abs(x - valor) <= tol * Math.max(1e-300, Math.abs(valor)); }); return a.filter(Boolean).length === 1 ? a.indexOf(true) : -1; };
void qualNum;

/* faixas de impressão como "2-5, 9, 12-14" → lista de slides */
const expande = (txt) => txt.split(",").flatMap((p) => { const [a, b] = p.trim().split("-").map(Number); return b === undefined ? [a] : Array.from({ length: b - a + 1 }, (_, i) => a + i); });
/* efeitos de animação: "c" ao clicar, "m" com o anterior, "a" após o anterior */
const cliques = (seq) => seq.filter((t) => t === "c").length;
const automaticos = (seq) => seq.filter((t) => t !== "c").length;

export const questoes = [
  /* ------------------------------------------------------------ fáceis --- */
  {
    d: "facil",
    e: "Qual é a extensão padrão dos arquivos de apresentação criados nas versões atuais do PowerPoint?",
    o: [".pptx", ".docx", ".xlsx", ".odp", ".pdf"],
    x: "A extensão .pptx é o formato padrão do PowerPoint desde a versão 2007, baseado em XML compactado, o Office Open XML. Ela substituiu o antigo .ppt, que as versões atuais ainda abrem, em modo de compatibilidade.\n\nA extensão .docx é dos documentos do Word, e a .xlsx, das planilhas do Excel. A .odp é o formato de apresentação do LibreOffice Impress. E a .pdf é um formato de documento portátil, que o PowerPoint só gera por exportação.",
  },
  {
    d: "facil",
    e: "Qual é a extensão padrão das apresentações criadas no LibreOffice Impress?",
    o: [".odp", ".pptx", ".ods", ".odt", ".pdf"],
    x: "O Impress grava suas apresentações por padrão em .odp, de OpenDocument Presentation, um formato aberto. Ele também abre e salva arquivos .pptx, o formato do PowerPoint, e exporta para PDF.\n\nA extensão .pptx é a padrão do PowerPoint. A .ods é das planilhas do Calc, e a .odt, dos documentos de texto do Writer. A .pdf é um formato de documento portátil, e não o formato nativo de apresentações do Impress.",
  },
  {
    d: "facil",
    e: "Qual tecla inicia a exibição da apresentação a partir do primeiro slide, tanto no PowerPoint quanto no Impress?",
    o: ["F5", "F1", "F7", "F12", "Ctrl + P"],
    x: "A tecla F5 inicia a apresentação de slides a partir do primeiro slide, e funciona do mesmo jeito no PowerPoint e no Impress. A exibição ocupa a tela inteira, e o slide avança com um clique ou com as setas.\n\nA tecla F1 abre a ajuda. A F7 inicia a verificação de ortografia. A F12 abre a janela Salvar como, no PowerPoint. E o Ctrl + P abre a impressão. Nenhuma delas inicia a exibição dos slides.",
  },
  {
    d: "facil",
    e: "Qual tecla interrompe a exibição em tela cheia e devolve o usuário ao modo de edição?",
    o: ["Esc", "Enter", "Page Down", "Home", "Seta para a esquerda"],
    x: "A tecla Esc encerra a exibição de slides e volta ao modo de edição, em qualquer ponto da apresentação. É a saída de emergência de quem apresenta.\n\nA tecla Enter e a Page Down avançam para o próximo slide ou efeito. A tecla Home leva ao primeiro slide da exibição, sem encerrá-la. E a seta para a esquerda volta ao slide ou ao efeito anterior. Todas elas mantêm a apresentação em andamento.",
  },
  {
    d: "facil",
    e: "O que é um slide, em um programa de apresentações?",
    o: ["Cada página individual da apresentação", "Um tipo de gráfico de colunas", "Um efeito sonoro de transição", "A barra de ferramentas do programa", "O arquivo de imagem de um fundo"],
    x: "O slide é a unidade da apresentação: cada página, que pode conter títulos, textos, imagens, tabelas, gráficos e vídeos. O conjunto dos slides, na ordem em que são exibidos, forma a apresentação.\n\nNão é um tipo de gráfico, nem um efeito sonoro. Também não é a barra de ferramentas, que reúne os comandos do programa, nem apenas o arquivo de imagem de um fundo, que é um elemento que pode aparecer dentro de um slide.",
  },
  {
    d: "facil",
    e: "Como se chama o efeito visual que ocorre na passagem de um slide para o slide seguinte?",
    o: ["Transição", "Animação de objeto", "Tema", "Layout", "Slide mestre"],
    x: "A transição é o efeito aplicado na troca entre dois slides, como esmaecer, empurrar ou revelar. Ela é configurada no slide que vai entrar, e fica em uma guia própria, a Transições, no PowerPoint.\n\nA animação age sobre objetos dentro de um slide, como um título ou uma imagem. O tema define cores, fontes e efeitos gerais. O layout define a disposição dos espaços do slide. E o slide mestre guarda a formatação comum a todos os slides.",
  },
  {
    d: "facil",
    e: "Como se chama o efeito de movimento aplicado a um objeto de dentro do slide, como um título ou uma imagem?",
    o: ["Animação", "Transição", "Tema", "Folheto", "Seção"],
    x: "A animação é o efeito aplicado a um objeto do slide, como fazer um título entrar pela esquerda ou uma imagem aumentar de tamanho. No PowerPoint, fica na guia Animações.\n\nA transição, ao contrário, ocorre entre um slide e o seguinte. O tema define cores e fontes gerais. O folheto é um modo de impressão com vários slides por página. E a seção é um grupo de slides, que serve para organizar a apresentação.",
  },
  {
    d: "facil",
    e: "Em qual guia do PowerPoint se escolhe um tema, que muda de uma só vez as cores, as fontes e os efeitos de toda a apresentação?",
    o: ["Design", "Inserir", "Transições", "Revisão", "Exibição"],
    x: "A guia Design reúne os temas, que são conjuntos prontos de cores, fontes e efeitos, além das variantes e do tamanho do slide. Ao escolher um tema, toda a apresentação muda de aparência de uma só vez.\n\nA guia Inserir traz imagens, tabelas, gráficos e formas. A Transições cuida dos efeitos entre os slides. A Revisão oferece ortografia e comentários. E a Exibição muda os modos de visualização, como a Classificação de Slides.",
  },
  {
    d: "facil",
    e: "Qual atalho insere um novo slide depois do slide selecionado, no PowerPoint?",
    o: ["Ctrl + M", "Ctrl + Z", "Ctrl + P", "Ctrl + C", "Ctrl + Y"],
    x: "O atalho Ctrl + M insere um novo slide logo depois do slide selecionado, com o mesmo layout do anterior ou com o layout padrão. Também funciona no Impress.\n\nO Ctrl + Z desfaz a última ação, e o Ctrl + Y a refaz. O Ctrl + P abre a impressão. E o Ctrl + C copia o que está selecionado. Nenhum desses cria um slide novo: só o Ctrl + M faz isso, e o slide criado já nasce com um layout, pronto para receber o conteúdo.",
  },
  {
    d: "facil",
    e: "Onde ficam as anotações do apresentador, que o público não vê durante a exibição dos slides?",
    o: ["No painel de Anotações, abaixo do slide", "Dentro do slide mestre", "Na barra de status do programa", "No rodapé de todos os slides", "Na guia Revisão"],
    x: "As anotações, também chamadas de notas do orador, ficam no painel de Anotações, abaixo do slide, no modo Normal. Servem como roteiro do apresentador, e não aparecem para o público durante a exibição.\n\nO slide mestre guarda a formatação comum aos slides. A barra de status mostra informações como o número do slide. O rodapé dos slides é visível ao público. E a guia Revisão reúne ortografia e comentários, que são outro recurso.",
  },
  {
    d: "facil",
    e: "Em qual guia do PowerPoint ficam os comandos Do Começo e Do Slide Atual, que iniciam a exibição?",
    o: ["Apresentação de Slides", "Design", "Inserir", "Animações", "Página Inicial"],
    x: "Na guia Apresentação de Slides ficam os comandos que iniciam a exibição, como Do Começo e Do Slide Atual, além de Ocultar Slide, Testar Intervalos e as opções de configuração da apresentação.\n\nA guia Design traz os temas. A Inserir acrescenta objetos aos slides. A Animações aplica movimento aos objetos. E a Página Inicial concentra a formatação de texto, o novo slide e a área de transferência.",
  },

  /* ------------------------------------------------------------ médias --- */
  {
    d: "media",
    e: "Qual é a diferença entre transição e animação em uma apresentação?",
    o: ["A transição liga um slide ao seguinte; a animação age sobre os objetos", "A transição age sobre os objetos; a animação liga os slides", "As duas são sinônimos, mudando só o nome", "A transição só existe no Impress; a animação, no PowerPoint", "A animação serve para imprimir; a transição, para exibir"],
    x: "A transição é o efeito da passagem de um slide para o outro, e a animação é o efeito sobre objetos de dentro de um slide, como textos e imagens. Os dois ficam em guias diferentes no PowerPoint: Transições e Animações.\n\nNão são sinônimos, e as definições não podem ser trocadas. Os dois recursos existem no PowerPoint e no Impress. E nenhum deles tem relação com impressão: ambos só aparecem durante a exibição dos slides.",
  },
  {
    d: "media",
    e: "Qual atalho inicia a exibição a partir do slide que está selecionado, e não do primeiro?",
    o: ["Shift + F5", "F5", "Esc", "Ctrl + P", "Ctrl + Z"],
    x: "O atalho Shift + F5 inicia a exibição no slide atual, o que é útil para testar um trecho sem passar por todos os anteriores. No PowerPoint, equivale ao comando Do Slide Atual.\n\nA tecla F5, sozinha, inicia do primeiro slide. A tecla Esc encerra a exibição. O Ctrl + P abre a impressão. E o Ctrl + Z desfaz a última ação de edição. Só a combinação com o Shift altera o ponto de partida da apresentação.",
  },
  {
    d: "media",
    e: "Para colocar o logotipo de uma escola em todos os slides de uma vez, em qual elemento ele deve ser inserido?",
    o: ["No slide mestre", "Na guia Transições", "No painel de Anotações", "Na barra de status", "No modo de leitura"],
    x: "O slide mestre guarda a formatação e os elementos comuns a todos os slides, como logotipo, fontes e cores. Um objeto inserido nele aparece em todos os slides que seguem o mestre, sem precisar repeti-lo um por um.\n\nA guia Transições só define efeitos de passagem. O painel de Anotações guarda o roteiro do apresentador. A barra de status é uma área da janela do programa, e não faz parte dos slides. E o modo de leitura é só uma forma de visualizar a apresentação.",
  },
  {
    d: "media",
    e: "O que acontece com um slide marcado como oculto durante a exibição da apresentação?",
    o: ["Ele é pulado, mas continua no arquivo", "Ele é apagado do arquivo", "Ele é exibido duas vezes", "Ele é movido para o fim", "Ele é exibido sem o texto"],
    x: "Ao ocultar um slide, ele é pulado na exibição, mas permanece no arquivo e na lista de miniaturas, onde aparece esmaecido e com o número riscado. Pode ser reativado a qualquer momento, e é útil para guardar material de apoio.\n\nO slide oculto não é apagado, não é exibido duas vezes, não muda de posição e não perde o texto. Só deixa de aparecer para o público durante a apresentação.",
  },
  {
    d: "media",
    e: "Qual recurso mostra ao apresentador o slide atual, o próximo, as anotações e o cronômetro, enquanto o público vê só o slide?",
    o: ["Modo de Exibição do Apresentador", "Classificação de Slides", "Estrutura de Tópicos", "Modo de Leitura", "Slide Mestre"],
    x: "O modo de exibição do apresentador usa dois monitores, ou dois pontos de exibição: o público vê o slide em tela cheia, e o apresentador vê, no próprio computador, o slide atual, o seguinte, as anotações e o tempo decorrido.\n\nA classificação de slides mostra miniaturas para reorganizá-los. A estrutura de tópicos mostra só os textos. O modo de leitura exibe a apresentação em uma janela. E o slide mestre é o modelo de formatação dos slides.",
  },
  {
    d: "media",
    e: "No LibreOffice Impress, qual modo de exibição mostra as miniaturas de todos os slides, para reordená-los arrastando?",
    o: ["Classificador de slides", "Estrutura de tópicos", "Anotações", "Folheto", "Normal"],
    x: "O classificador de slides mostra todos os slides como miniaturas na tela, e permite reordená-los arrastando, além de ocultar, duplicar e excluir. É o mesmo princípio da Classificação de Slides do PowerPoint.\n\nA estrutura de tópicos mostra os textos em lista. O modo Anotações mostra o slide com o espaço das notas. O Folheto mostra o leiaute de impressão com vários slides por página. E o modo Normal é o de edição de um slide por vez.",
  },
  {
    d: "media",
    e: "Qual modo de exibição do PowerPoint mostra apenas os títulos e os tópicos de todos os slides, em forma de lista hierárquica?",
    o: ["Estrutura de Tópicos", "Classificação de Slides", "Página de Anotações", "Modo de Leitura", "Slide Mestre"],
    x: "A Estrutura de Tópicos mostra o texto dos slides como uma lista hierárquica, com títulos e subtópicos, e permite escrever ou reorganizar o conteúdo sem se preocupar com o visual. É útil para montar o roteiro da apresentação.\n\nA Classificação de Slides exibe miniaturas dos slides. A Página de Anotações mostra o slide com o espaço das notas. O Modo de Leitura exibe a apresentação em janela. E o Slide Mestre mostra o modelo de formatação.",
  },
  {
    d: "media",
    e: "Qual categoria de efeitos de animação faz um objeto aparecer no slide, como em Surgir e Desvanecer?",
    o: ["Entrada", "Saída", "Ênfase", "Trajetória", "Transição"],
    x: "Os efeitos de entrada fazem o objeto surgir no slide, que antes não o mostrava: aparecer, desvanecer, entrar voando e outros. É a categoria mais usada para revelar tópicos aos poucos.\n\nOs de saída fazem o objeto sair do slide. Os de ênfase chamam a atenção para um objeto que já está visível, como pulsar ou mudar de cor. As trajetórias movem o objeto por um caminho. E a transição não é categoria de animação: é o efeito entre slides.",
  },
  {
    d: "media",
    e: "Qual categoria de efeitos de animação faz um objeto que está visível desaparecer do slide durante a exibição?",
    o: ["Saída", "Entrada", "Ênfase", "Trajetória", "Layout"],
    x: "Os efeitos de saída retiram da tela um objeto que já estava visível, como desaparecer, sair voando ou encolher até sumir. Combinados com efeitos de entrada, permitem trocar um conteúdo por outro no mesmo slide.\n\nOs de entrada fazem o objeto aparecer. Os de ênfase mantêm o objeto na tela e só destacam algo nele. As trajetórias movem o objeto, que continua visível. E o layout não é efeito de animação: é a disposição dos espaços do slide.",
  },
  {
    d: "media",
    e: "O que é uma trajetória de animação, no PowerPoint e no Impress?",
    o: ["O caminho que o objeto percorre pelo slide", "A ordem em que os slides são exibidos", "O tempo de uma transição", "O local onde o arquivo é salvo", "O nome do tema aplicado"],
    x: "A trajetória de animação é um efeito de movimento em que o objeto percorre um caminho desenhado ou predefinido no slide, como uma linha reta, um arco ou uma curva livre. O caminho aparece como uma linha tracejada na edição.\n\nA ordem dos slides é definida pela sequência de miniaturas. O tempo da transição é a duração do efeito entre slides. O local do arquivo é o caminho no disco. E o nome do tema identifica um conjunto de cores e fontes.",
  },
  {
    d: "media",
    e: "Em uma animação, o que significa iniciar um efeito com a opção Com o Anterior?",
    o: ["Ele começa junto com o efeito anterior, sem novo clique", "Ele espera o clique do apresentador", "Ele começa só depois que o anterior termina", "Ele se repete até o fim da apresentação", "Ele é removido da apresentação"],
    x: "Com o Anterior faz o efeito começar no mesmo instante do efeito que o precede, sem exigir um novo clique. É o jeito de animar dois objetos ao mesmo tempo, como um título e uma imagem que entram juntos.\n\nEsperar o clique é a opção Ao Clicar. Começar depois que o anterior termina é a opção Após o Anterior. Repetir é uma configuração à parte, a de repetição. E remover um efeito é feito pelo painel de animação, e não por uma forma de início.",
  },
  {
    d: "media",
    e: "Qual forma de início de um efeito de animação o faz começar sozinho assim que o efeito anterior terminar?",
    o: ["Após o Anterior", "Ao Clicar", "Com o Anterior", "Em Loop", "Manual"],
    x: "Após o Anterior faz o efeito começar automaticamente quando o anterior termina, sem exigir clique. É a forma de montar sequências em cadeia, em que um objeto entra logo depois do outro.\n\nAo Clicar espera uma ação do apresentador. Com o Anterior começa junto com o efeito anterior, e não depois dele. Em Loop e Manual não são formas de início de efeito: a repetição é uma configuração do efeito, e o avanço manual é um modo de passagem de slides.",
  },
  {
    d: "media",
    e: "Qual recurso permite criar um botão que, ao ser clicado durante a exibição, leva a outro slide da apresentação?",
    o: ["Hiperlink ou botão de ação", "Slide mestre", "Transição", "Folheto", "Modo de leitura"],
    x: "O hiperlink e o botão de ação fazem o clique levar a outro slide, a um endereço da web, a um arquivo ou a um programa. Com eles se montam menus e apresentações não lineares, em que o apresentador escolhe o caminho.\n\nO slide mestre define a formatação comum. A transição é o efeito de troca entre slides. O folheto é um modo de impressão. E o modo de leitura é uma forma de visualizar a apresentação em janela, sem criar navegação.",
  },
  {
    d: "media",
    e: "O que acontece ao abrir um arquivo salvo como Apresentação de Slides do PowerPoint, com a extensão .ppsx?",
    o: ["Ele já abre em modo de exibição, em tela cheia", "Ele abre sempre em modo de edição", "Ele abre como documento de texto", "Ele é convertido em planilha", "Ele não pode ser aberto"],
    x: "Um arquivo .ppsx é uma apresentação de slides: ao ser aberto, o PowerPoint já inicia a exibição em tela cheia, sem passar pelo modo de edição. Serve para distribuir uma apresentação pronta para ser projetada.\n\nPara editar, abre-se o PowerPoint e se carrega o arquivo por dentro do programa. O arquivo não vira documento de texto nem planilha, e pode ser aberto normalmente. A extensão .pptx é a que abre em modo de edição por padrão.",
  },
  {
    d: "media",
    e: "Qual extensão identifica um modelo de apresentação do PowerPoint, usado como base para criar novos arquivos?",
    o: [".potx", ".pptx", ".ppsx", ".odp", ".xltx"],
    x: "A extensão .potx identifica um modelo do PowerPoint, que guarda tema, layouts, formatação e até conteúdo pronto. Ao abri-lo, o programa cria uma apresentação nova baseada nele, sem alterar o modelo.\n\nA .pptx é uma apresentação comum. A .ppsx é uma apresentação de slides, que abre em modo de exibição. A .odp é o formato do Impress. E a .xltx é um modelo do Excel, e não do PowerPoint.",
  },
  {
    d: "media",
    e: "Qual atalho agrupa em um só os objetos selecionados no slide, no PowerPoint?",
    o: ["Ctrl + G", "Ctrl + Shift + G", "Ctrl + D", "Ctrl + Z", "Ctrl + P"],
    x: "O atalho Ctrl + G agrupa os objetos selecionados, e eles passam a ser movidos, redimensionados e formatados como um só. O grupo pode ser desfeito depois sem perder os objetos.\n\nO Ctrl + Shift + G faz o contrário: desagrupa. O Ctrl + D duplica o objeto ou o slide selecionado. O Ctrl + Z desfaz a última ação. E o Ctrl + P abre a impressão. Só o primeiro atalho reúne os objetos em um grupo.",
  },
  {
    d: "media",
    e: "Para que serve o SmartArt, recurso da guia Inserir do PowerPoint?",
    o: ["Montar diagramas de listas, processos e hierarquias", "Corrigir a ortografia dos slides", "Proteger a apresentação com uma senha", "Gravar a voz do apresentador na exibição", "Alterar o tamanho do papel de impressão"],
    x: "O SmartArt converte o texto em diagramas prontos, como listas, processos, ciclos, hierarquias e relações, que se ajustam sozinhos quando se acrescenta ou se remove um item. É muito usado em organogramas e fluxos.\n\nA ortografia é verificada na guia Revisão. A senha é definida ao salvar ou nas informações do arquivo. A gravação de voz é outro recurso. E o tamanho do papel é uma configuração da impressão, e não do diagrama.",
  },
  {
    d: "media",
    e: "Um vídeo foi inserido no slide como vínculo, e não incorporado. Ao levar o arquivo da apresentação para outro computador, o que é necessário?",
    o: ["Levar também o arquivo do vídeo, na mesma pasta", "Nada, pois o vídeo viaja dentro do arquivo", "Converter o vídeo em imagem", "Apagar o vídeo e inserir de novo", "Salvar a apresentação em planilha"],
    x: "Um vídeo vinculado fica fora do arquivo da apresentação, e o slide guarda só o caminho até ele. Para que continue tocando em outro computador, o arquivo do vídeo precisa ir junto, de preferência na mesma pasta da apresentação.\n\nO vídeo incorporado, ao contrário, viaja dentro do arquivo, que fica maior. Converter em imagem tiraria o movimento. Apagar e inserir de novo recriaria o mesmo vínculo. E salvar em planilha não resolve nada, pois o formato muda o tipo de documento.",
  },
  {
    d: "media",
    e: "Por que se costuma exportar uma apresentação em PDF antes de enviá-la a outra pessoa para leitura?",
    o: ["Para manter o leiaute, mas sem as animações", "Para que as animações toquem melhor", "Para permitir a edição dos slides", "Para reduzir o número de slides", "Para trocar o tema automaticamente"],
    x: "O PDF preserva o leiaute, as fontes e as imagens, e aparece igual em qualquer computador, mesmo sem o PowerPoint. Em compensação, não guarda as animações e as transições, e é pouco indicado para quem precisa editar.\n\nAs animações não tocam melhor no PDF, pois não são mantidas. A edição é mais difícil, e não mais fácil. O número de slides não muda na exportação. E o tema não é trocado: ele é apenas fixado na aparência final.",
  },
  {
    d: "media",
    e: "Qual atalho cria uma cópia do slide selecionado no painel de miniaturas, colocando-a logo depois dele, no PowerPoint?",
    o: ["Ctrl + D", "Ctrl + G", "Ctrl + M", "Ctrl + P", "Ctrl + Z"],
    x: "O atalho Ctrl + D duplica o slide selecionado no painel de miniaturas, e a cópia aparece logo depois dele, com todo o conteúdo, formatação e efeitos. É útil para criar um slide parecido com outro, sem refazê-lo do zero.\n\nO Ctrl + G agrupa os objetos selecionados. O Ctrl + M insere um slide novo, com o layout padrão, e não uma cópia. O Ctrl + P abre a impressão. E o Ctrl + Z desfaz a última ação. Só o primeiro duplica o slide.",
  },
  {
    d: "media",
    e: "O que é um folheto, na impressão de uma apresentação?",
    o: ["Uma página com vários slides em miniatura", "Um slide impresso em tamanho gigante", "Um slide impresso sem o fundo", "O arquivo da apresentação compactado", "A lista dos efeitos de transição"],
    x: "O folheto é um modo de impressão que coloca vários slides em miniatura em uma mesma folha, geralmente 2, 3, 4, 6 ou 9 por página. Economiza papel, e pode ter linhas para anotações ao lado de cada miniatura.\n\nNão é um slide gigante, nem a impressão sem fundo, que é outra opção de cor. Também não é o arquivo compactado, que é feito pelo sistema de arquivos, nem a lista de transições, que se vê na guia Transições.",
  },
  {
    d: "media",
    e: "Um professor imprime em folhetos uma apresentação de 30 slides, com 6 slides por página. Quantas folhas ele usa, imprimindo só um lado?",
    o: ["5", "6", "4", "7", "30"],
    x: "Dividindo, 30 ÷ 6 = 5. Cada folha comporta 6 slides em miniatura, e a divisão é exata, então não sobram slides para uma folha a mais. Conferindo, 5 folhas × 6 slides = 30 slides.\n\n6 é o número de slides por folha, e não a quantidade de folhas. 4 resultaria de 8 slides por folha. 7 arredondaria para cima uma divisão que já é exata. E 30 é o total de slides, o que ocorreria se cada folha levasse um só slide.",
    v: { i: () => acha(Math.ceil(30 / 6), ["5", "6", "4", "7", "30"]) },
  },
  {
    d: "media",
    e: "Um slide tem proporção 16:9 e largura de 1.280 pixels. Qual é a altura, em pixels?",
    o: ["720", "960", "853", "1.024", "1.080"],
    x: "Na proporção 16:9, a altura é 9/16 da largura: 1.280 × 9 ÷ 16 = 720 pixels. É o formato 1280 × 720, comum em telas e projetores atuais, chamado de widescreen.\n\n960 seria a altura na proporção 4:3, que é 3/4 da largura. 853 corresponderia à proporção 3:2. 1.024 não corresponde a uma proporção usual de slides com essa largura. E 1.080 é a altura do formato 1920 × 1080, que é 16:9, mas de largura maior.",
    v: { i: () => acha((1280 * 9) / 16, ["720", "960", "853", "1.024", "1.080"], num, 0.002) },
  },
  {
    d: "media",
    e: "Um slide tem proporção 4:3 e largura de 1.024 pixels. Qual é a altura, em pixels?",
    o: ["768", "576", "683", "720", "1.024"],
    x: "Na proporção 4:3, a altura é 3/4 da largura: 1.024 × 3 ÷ 4 = 768 pixels. É o formato 1024 × 768, muito usado em projetores e monitores mais antigos.\n\n576 é a altura do mesmo slide na proporção 16:9, que é 9/16 da largura. 683 corresponderia à proporção 3:2. 720 é a altura do formato 1280 × 720, de outra largura. E 1.024 seria a altura de um slide quadrado, o que não é o caso de 4:3.",
    v: { i: () => acha((1024 * 3) / 4, ["768", "576", "683", "720", "1.024"], num, 0.002) },
  },
  {
    d: "media",
    e: "Uma palestra de 40 minutos terá 2,5 minutos por slide, em média. Quantos slides cabem na apresentação?",
    o: ["16", "20", "15", "18", "10"],
    x: "Dividindo o tempo total pelo tempo de cada slide, 40 ÷ 2,5 = 16 slides. Conferindo, 16 × 2,5 = 40 minutos.\n\n20 resultaria de 2 minutos por slide, e 10, de 4 minutos por slide. 15 slides ocupariam 37,5 minutos, e 18 slides, 45 minutos, que estouraria o tempo. Esse cálculo serve de regra prática para dimensionar uma apresentação: tempo disponível dividido pelo tempo médio de cada slide.",
    v: { i: () => acha(40 / 2.5, ["16", "20", "15", "18", "10"]) },
  },
  {
    d: "media",
    e: "No campo de impressão de slides, digita-se 2-5, 9, 12-14. Quantos slides serão impressos?",
    o: ["8", "6", "12", "5", "13"],
    x: "O intervalo 2-5 inclui os slides 2, 3, 4 e 5, isto é, 4 slides. O 9 é 1 slide, e o intervalo 12-14 inclui 12, 13 e 14, isto é, 3 slides. No total, 4 + 1 + 3 = 8 slides.\n\n6 subtrai os limites sem contar o primeiro de cada intervalo. 12 é a distância entre o primeiro e o último slide, 14 − 2. 5 é a quantidade de números digitados. E 13 conta todos os slides de 2 a 14, como se os intervalos fossem contínuos.",
    v: { i: () => acha(expande("2-5, 9, 12-14").length, ["8", "6", "12", "5", "13"]) },
  },
  {
    d: "media",
    e: "Uma apresentação tem 20 slides, e 3 deles estão ocultos. Quantos slides o público vê numa exibição completa?",
    o: ["17", "20", "23", "3", "16"],
    x: "Os slides ocultos são pulados na exibição, então o público vê 20 − 3 = 17 slides. Os três ocultos continuam no arquivo, só não aparecem.\n\n20 é o total de slides do arquivo, contando os ocultos. 23 somaria os ocultos em vez de descontá-los. 3 é a quantidade de slides ocultos, e não de exibidos. E 16 desconta um slide a mais do que o enunciado indica.",
    v: { i: () => acha(20 - 3, ["17", "20", "23", "3", "16"]) },
  },
  {
    d: "media",
    e: "Uma sequência de 7 efeitos tem estas formas de início: 1º Ao Clicar, 2º Com o Anterior, 3º Após o Anterior, 4º Ao Clicar, 5º Ao Clicar, 6º Com o Anterior e 7º Após o Anterior. Quantos cliques o apresentador dá para exibir todos?",
    o: ["3", "7", "2", "4", "5"],
    x: "Só os efeitos Ao Clicar exigem o clique do apresentador: são o 1º, o 4º e o 5º, isto é, 3 cliques. O 2º começa junto com o 1º, o 3º começa quando o 2º termina, e o 6º e o 7º seguem do mesmo modo depois do 5º, sem novo clique.\n\n7 seria o número de efeitos, como se todos pedissem clique. 2 e 4 erram a contagem dos efeitos Ao Clicar. E 5 inclui, por engano, dois efeitos que começam sozinhos.",
    v: { i: () => acha(cliques(["c", "m", "a", "c", "c", "m", "a"]), ["3", "7", "2", "4", "5"]) },
  },

  /* ---------------------------------------------------------- difíceis --- */
  {
    d: "dificil",
    e: "Uma foto de 3.000 pixels de largura é colocada em um slide de 25,4 cm de largura, ocupando-o por inteiro. Sabendo que 1 polegada mede 2,54 cm, qual é a resolução aproximada da foto no slide, em pixels por polegada?",
    o: ["300", "118", "72", "96", "3.000"],
    x: "A largura de 25,4 cm equivale a 25,4 ÷ 2,54 = 10 polegadas. Com 3.000 pixels distribuídos em 10 polegadas, a resolução é 3.000 ÷ 10 = 300 pixels por polegada, boa para impressão.\n\n118 é a densidade em pixels por centímetro, 3.000 ÷ 25,4, e não por polegada. 72 e 96 são resoluções típicas de telas, e não resultam desta conta. E 3.000 é a largura em pixels, sem dividir pela largura em polegadas.",
    v: { i: () => acha(3000 / (25.4 / 2.54), ["300", "118", "72", "96", "3.000"], num, 0.003) },
  },
  {
    d: "dificil",
    e: "Um slide 16:9 tem 33,867 cm de largura. Qual é a altura aproximada, em centímetros?",
    o: ["19,05", "25,4", "21,17", "16,93", "15"],
    x: "Na proporção 16:9, a altura é 9/16 da largura: 33,867 × 9 ÷ 16 = 19,05 cm. É o tamanho padrão do slide widescreen do PowerPoint, de 13,333 por 7,5 polegadas.\n\n25,4 seria a altura se a proporção fosse 4:3, com 3/4 da largura. 21,17 corresponderia à proporção 16:10. 16,93 é a metade da largura, que daria uma proporção 2:1. E 15 não corresponde a uma proporção usual de slides com essa largura.",
    v: { i: () => acha((33.867 * 9) / 16, ["19,05", "25,4", "21,17", "16,93", "15"], num, 0.002) },
  },
  {
    d: "dificil",
    e: "Uma apresentação tem 15 imagens de 4 MB cada. Ao comprimi-las, o tamanho total das imagens cai 60%. Qual é o tamanho total depois da compressão, em MB?",
    o: ["24", "36", "40", "60", "9"],
    x: "Antes, as imagens somam 15 × 4 = 60 MB. Uma queda de 60% significa que restam 40% do tamanho: 0,4 × 60 = 24 MB. Conferindo, 60 − 36 = 24, em que 36 MB é o que foi retirado.\n\n36 é o tamanho retirado, e não o que sobrou. 40 confunde os 40% restantes com uma quantidade em MB. 60 é o tamanho original. E 9 aplicaria o 60% ao número de imagens, 15 × 0,6, o que não tem significado nesta conta.",
    v: { i: () => acha(15 * 4 * (1 - 0.6), ["24", "36", "40", "60", "9"]) },
  },
  {
    d: "dificil",
    e: "Em um slide, 9 efeitos de animação têm estas formas de início, na ordem: Com o Anterior, Ao Clicar, Após o Anterior, Após o Anterior, Ao Clicar, Com o Anterior, Ao Clicar, Após o Anterior e Com o Anterior. Quantos efeitos acontecem sozinhos, sem clique?",
    o: ["6", "3", "9", "5", "7"],
    x: "Só o Ao Clicar exige uma ação do apresentador. Eles são o 2º, o 5º e o 7º, isto é, 3 efeitos. Os outros 9 − 3 = 6 efeitos começam sozinhos: o 1º, que dispara assim que o slide aparece, e o 3º, o 4º, o 6º, o 8º e o 9º.\n\n3 é a quantidade de efeitos que dependem de clique, e não dos automáticos. 9 é o total de efeitos. 5 e 7 erram a contagem, por esquecer um dos efeitos automáticos ou contar um dos que pedem clique.",
    v: { i: () => acha(automaticos(["m", "c", "a", "a", "c", "m", "c", "a", "m"]), ["6", "3", "9", "5", "7"]) },
  },
  {
    d: "dificil",
    e: "Uma apresentação automática tem 12 slides de 25 segundos cada e 3 slides de 40 segundos cada, sem pausas entre eles. Qual é a duração total, em minutos?",
    o: ["7", "5", "10", "6,25", "15"],
    x: "Os 12 slides de 25 segundos somam 300 segundos, e os 3 de 40 segundos somam 120 segundos. O total é 420 segundos, e 420 ÷ 60 = 7 minutos.\n\n5 minutos corresponde só aos 12 slides curtos, que dão 300 segundos. 10 minutos usaria 40 segundos nos 15 slides. 6,25 minutos usaria 25 segundos nos 15 slides, o que ignora os três slides mais longos. E 15 é o número de slides, e não o tempo.",
    v: { i: () => acha((12 * 25 + 3 * 40) / 60, ["7", "5", "10", "6,25", "15"]) },
  },
  {
    d: "dificil",
    e: "Ao mudar a fonte do título no slide mestre do PowerPoint, o que acontece com os slides já criados?",
    o: ["Os que herdam do mestre mudam; os formatados à mão mantêm a fonte", "Nenhum slide muda, pois só os novos são afetados", "Todos mudam, sem exceção, até os formatados à mão", "Os slides são apagados e recriados", "Só o primeiro slide muda"],
    x: "O slide mestre é o modelo de que os layouts e os slides herdam a formatação. Ao mudar a fonte do título nele, todos os slides que seguem o mestre passam a usar a nova fonte, e os que tiveram o título formatado manualmente continuam com a fonte que o usuário escolheu.\n\nA mudança não vale só para os novos. Também não ignora a formatação manual, que prevalece sobre o mestre. Nenhum slide é apagado ou recriado. E a alteração não se limita ao primeiro slide, pois atinge todos os que herdam do mestre.",
  },
  {
    d: "dificil",
    e: "Uma apresentação usa uma fonte decorativa que não está instalada no computador onde será exibida. Qual medida preserva a aparência do texto?",
    o: ["Incorporar as fontes ao arquivo ou exportar em PDF", "Aumentar o tamanho da fonte", "Trocar o tema por um tema escuro", "Ocultar os slides com a fonte", "Salvar o arquivo com extensão .txt"],
    x: "Quando a fonte não existe no outro computador, o programa a troca por uma parecida, e o texto muda de aparência. Para evitar isso, é possível incorporar as fontes ao arquivo ao salvar, ou exportar em PDF, que embute as fontes usadas.\n\nAumentar o tamanho não resolve a fonte ausente. Trocar o tema só muda cores e estilos. Ocultar os slides esconde o conteúdo, em vez de corrigi-lo. E salvar como .txt perde toda a formatação, inclusive imagens e slides.",
  },
  {
    d: "dificil",
    e: "No PowerPoint, o que acontece com os slides de uma seção ao usar o comando Remover Seção, sem a opção de excluir os slides?",
    o: ["Ficam na apresentação, na seção anterior", "Eles são apagados junto com a seção", "Eles são ocultados na exibição", "Eles passam para o fim do arquivo", "Eles viram anotações do apresentador"],
    x: "As seções agrupam slides em blocos nomeados. Remover a seção apaga só o nome do grupo, e os slides continuam na apresentação, incorporados à seção que vem antes dela. Para apagar também os slides, existe um comando à parte, que remove a seção e os slides.\n\nOs slides não são apagados pelo comando simples, nem ocultados. Também não mudam de posição para o fim do arquivo. E não viram anotações, que são outro recurso, o das notas do apresentador.",
  },
  {
    d: "dificil",
    e: "Qual recurso do PowerPoint grava quanto tempo o apresentador gasta em cada slide, para que a apresentação avance sozinha depois?",
    o: ["Testar Intervalos", "Modo de Leitura", "Folheto", "SmartArt", "Slide Mestre"],
    x: "O Testar Intervalos acompanha a apresentação ensaiada e registra o tempo de cada slide. Esses intervalos podem ser usados depois para avançar os slides automaticamente, quando a opção de usar intervalos gravados está ligada. Fica na guia Apresentação de Slides.\n\nO Modo de Leitura apenas exibe a apresentação em janela. O Folheto é um modo de impressão. O SmartArt cria diagramas. E o Slide Mestre guarda a formatação comum aos slides. Nenhum deles grava o tempo de cada slide.",
  },
  {
    d: "dificil",
    e: "Ao abrir no LibreOffice Impress um arquivo .pptx criado no PowerPoint, o que pode ocorrer?",
    o: ["Diferenças pequenas de fontes, animações ou formatação", "O arquivo é apagado", "Todos os slides ficam em branco", "A apresentação vira planilha", "O arquivo só abre protegido por senha"],
    x: "O Impress abre arquivos .pptx e converte a maior parte do conteúdo, mas os formatos são diferentes, e pequenas diferenças podem aparecer: fontes substituídas, efeitos de animação ou de transição ajustados, ou elementos como o SmartArt simplificados. Vale conferir o resultado.\n\nO arquivo não é apagado nem fica em branco, e não vira planilha. E a senha só é exigida se o autor tiver protegido o arquivo, o que não depende do programa que o abre.",
  },
];
