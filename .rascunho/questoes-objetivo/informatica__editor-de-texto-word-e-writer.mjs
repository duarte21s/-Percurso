/* Rascunho — Informática básica / Editor de texto: Word e Writer.

   49 questões novas (11 fáceis, 28 médias, 10 difíceis), além da que já
   existe em informatica__fundamentos.mjs. As de cálculo são conferidas em
   código: largura útil de página, número de páginas, largura de colunas,
   contagem de caracteres de um texto, numeração inicial de páginas, células
   de tabela mescladas, conversão de polegadas e pontos em centímetros. As
   de comando e de recurso ficam como pendentes de revisão independente. */

import { unicoV, qualNum, lerNum } from "./_matematica-fund.mjs";

export const materia = "informatica";
export const tema = "Editor de texto: Word e Writer";
export const arquivo = "informatica__editor-de-texto-word-e-writer";

const num = (t) => lerNum(String(t).replace(/^≈\s*/, ""));
const acha = (valor, alt, conv = num, tol = 1e-9) => { const a = alt.map((t) => { const x = conv(t); return Number.isFinite(x) && Math.abs(x - valor) <= tol * Math.max(1e-300, Math.abs(valor)); }); return a.filter(Boolean).length === 1 ? a.indexOf(true) : -1; };

export const questoes = [
  /* ------------------------------------------------------------ fáceis --- */
  {
    d: "facil",
    e: "Qual é a extensão padrão dos documentos salvos nas versões atuais do Microsoft Word?",
    o: [".docx", ".odt", ".txt", ".xlsx", ".pptx"],
    x: "A extensão .docx é o formato padrão do Word desde a versão 2007. Ela se baseia em XML compactado, o Office Open XML, e substituiu o antigo formato .doc, que ainda pode ser aberto e salvo em modo de compatibilidade.\n\nA extensão .odt pertence ao Writer, no formato OpenDocument. A .txt identifica texto simples, sem formatação. A .xlsx é das planilhas do Excel, e a .pptx é das apresentações do PowerPoint. Nenhuma delas é o formato padrão do Word.",
  },
  {
    d: "facil",
    e: "Qual é a extensão padrão dos documentos de texto criados no LibreOffice Writer?",
    o: [".odt", ".docx", ".ods", ".odp", ".pdf"],
    x: "O Writer grava seus documentos por padrão em .odt, de OpenDocument Text, um formato aberto e padronizado. Esse formato também pode ser aberto pelo Word, e o Writer, por sua vez, abre e salva documentos .docx.\n\nA extensão .docx é o padrão do Word. A .ods é das planilhas do Calc, e a .odp, das apresentações do Impress. A .pdf é um formato de documento portátil, que o Writer só gera por exportação. Nenhuma delas é o padrão de texto do Writer.",
  },
  {
    d: "facil",
    e: "Em qual guia do Word ficam os botões mais usados de formatação, como negrito, itálico, sublinhado e alinhamento?",
    o: ["Página Inicial", "Inserir", "Revisão", "Exibição", "Referências"],
    x: "A guia Página Inicial reúne os grupos Área de Transferência, Fonte, Parágrafo e Estilos, com os comandos de formatação usados com mais frequência, como negrito, itálico, sublinhado, tamanho da fonte e alinhamento do texto.\n\nA guia Inserir traz tabelas, imagens e cabeçalhos. A Revisão oferece ortografia, comentários e controle de alterações. A Exibição muda o modo de visualização do documento. E a Referências cuida de sumário, notas de rodapé e legendas.",
  },
  {
    d: "facil",
    e: "Qual recurso dos editores de texto aponta erros de digitação e de gramática, em geral sublinhando as palavras com uma linha ondulada?",
    o: ["Verificação ortográfica e gramatical", "Mala direta", "Controle de alterações", "Quebra de seção", "Sumário automático"],
    x: "A verificação ortográfica e gramatical compara o texto com dicionários e regras do idioma e sublinha, em geral com uma linha ondulada, as palavras e trechos que podem conter erros. No Word, está na guia Revisão, e o atalho é a tecla F7.\n\nA mala direta gera documentos personalizados a partir de uma lista de dados. O controle de alterações registra quem mudou o quê. A quebra de seção divide o documento em partes com formatações diferentes. E o sumário automático lista os títulos com suas páginas.",
  },
  {
    d: "facil",
    e: "Para que serve, principalmente, o comando Salvar como dos editores de texto?",
    o: ["Gravar com outro nome, local ou formato", "Enviar o documento por e-mail", "Imprimir o documento em PDF", "Fechar o programa sem gravar", "Corrigir os erros de ortografia"],
    x: "O Salvar como grava uma cópia do documento com outro nome, em outro local ou em outro formato, como .docx, .odt, .pdf ou .txt. O arquivo original continua como estava, e o documento aberto passa a ser o novo arquivo.\n\nEnviar por e-mail é outra função, em geral do comando Compartilhar. Imprimir em PDF é uma opção do comando Imprimir ou Exportar. Fechar sem gravar descarta as alterações. E corrigir ortografia é tarefa da verificação ortográfica, e não do Salvar como.",
  },
  {
    d: "facil",
    e: "Num editor de texto, o que é o cabeçalho de um documento?",
    o: ["A área da margem superior, repetida nas páginas", "A primeira linha de cada parágrafo", "O título do arquivo na barra de tarefas", "A lista de comandos do menu Arquivo", "O espaço lateral reservado às anotações"],
    x: "O cabeçalho é a área da margem superior de cada página, usada para informações que se repetem ao longo do documento, como o título do trabalho, o nome do autor ou a data. O rodapé é o espaço equivalente na margem inferior, muito usado para o número da página.\n\nA primeira linha do parágrafo tem outro nome e outro uso. O título exibido na barra de tarefas é o nome do arquivo. O menu Arquivo é um conjunto de comandos. E as anotações laterais são os comentários, que ficam na margem direita.",
  },
  {
    d: "facil",
    e: "Em qual guia do Word se encontra o comando para inserir uma tabela no documento?",
    o: ["Inserir", "Página Inicial", "Revisão", "Layout", "Exibição"],
    x: "A guia Inserir traz os objetos que podem ser acrescentados ao documento: tabelas, imagens, formas, gráficos, links, cabeçalhos, rodapés, números de página e caixas de texto. Nela, o botão Tabela permite escolher o número de linhas e colunas.\n\nA Página Inicial concentra a formatação de texto e parágrafo. A Revisão cuida de ortografia e comentários. O Layout define margens, orientação e tamanho da página. E a Exibição altera o modo de visualização. Nenhuma delas tem o comando de inserir uma tabela.",
  },
  {
    d: "facil",
    e: "O que faz o comando Desfazer, cujo atalho é Ctrl + Z, nos editores de texto?",
    o: ["Anula a última ação realizada", "Apaga o documento inteiro", "Fecha o arquivo atual", "Imprime a página aberta", "Copia o texto selecionado"],
    x: "O Desfazer, com o atalho Ctrl + Z, anula a última ação realizada, como uma digitação, uma formatação ou uma exclusão. Acionado várias vezes, ele retrocede passo a passo pelo histórico de alterações. O comando contrário, o Refazer, repõe a ação anulada.\n\nEle não apaga o documento inteiro, não fecha o arquivo, não imprime nada e não copia o texto. A cópia é feita pelo Ctrl + C, e o Ctrl + V cola o conteúdo copiado na posição do cursor.",
  },
  {
    d: "facil",
    e: "Qual alinhamento de parágrafo faz o texto ficar encostado nas duas margens, esquerda e direita, ajustando o espaço entre as palavras?",
    o: ["Justificado", "Alinhado à esquerda", "Centralizado", "Alinhado à direita", "Distribuído por colunas"],
    x: "O alinhamento justificado estica o espaço entre as palavras de cada linha, menos a última do parágrafo, para que o texto toque as duas margens. Por isso ele é muito usado em documentos formais, livros e jornais.\n\nNo alinhamento à esquerda, só a margem esquerda fica reta. No centralizado, as linhas ficam centradas. No alinhamento à direita, só a margem direita fica reta. E distribuir por colunas não é um tipo de alinhamento de parágrafo, e sim uma divisão do texto em colunas de página.",
  },
  {
    d: "facil",
    e: "Como se define uma página em orientação paisagem?",
    o: ["A largura é maior que a altura", "A altura é maior que a largura", "O texto fica escrito em colunas", "As margens são todas iguais a zero", "O papel usado é sempre o A3"],
    x: "Na orientação paisagem, a página fica deitada: a largura é maior que a altura, o que é útil em tabelas largas, gráficos e quadros. Na orientação retrato, a página fica em pé, com a altura maior que a largura, e é a padrão dos documentos de texto.\n\nAs colunas e as margens são configurações independentes da orientação. E o tamanho do papel, como A4 ou A3, também não depende dela: uma folha A4 pode ser usada tanto em retrato quanto em paisagem.",
  },
  {
    d: "facil",
    e: "Qual é a função do comando Colar nos editores de texto?",
    o: ["Insere o conteúdo copiado no cursor", "Duplicar o arquivo no disco", "Apagar o trecho selecionado", "Tornar o texto sublinhado", "Enviar o texto ao e-mail"],
    x: "O Colar insere, na posição do cursor, o conteúdo guardado na área de transferência por um Copiar ou Recortar anteriores. O atalho é Ctrl + V. O mesmo trecho pode ser colado várias vezes, enquanto não for substituído por um novo conteúdo copiado.\n\nDuplicar um arquivo no disco é feito no gerenciador de arquivos. Apagar o trecho selecionado é função das teclas Delete ou Backspace. O sublinhado é uma formatação da fonte. E o envio por e-mail é feito por um comando de compartilhamento. Nenhum deles é a função do Colar.",
  },

  /* ------------------------------------------------------------ médias --- */
  {
    d: "media",
    e: "No Microsoft Word em português do Brasil, qual atalho de teclado aplica o negrito ao texto selecionado?",
    o: ["Ctrl + N", "Ctrl + B", "Ctrl + I", "Ctrl + S", "Ctrl + U"],
    x: "No Word em português do Brasil, o negrito usa o atalho Ctrl + N, pela inicial de Negrito. O itálico usa o Ctrl + I, e o sublinhado usa o Ctrl + S, pela inicial de Sublinhado.\n\nO Ctrl + B, no Word em português, é o atalho de Salvar, e não de negrito. O Ctrl + U, no Word em português, é o atalho de Substituir, e não de sublinhado. Por isso os atalhos mudam conforme o idioma do programa, e é preciso prestar atenção ao enunciado.",
  },
  {
    d: "media",
    e: "No LibreOffice Writer, qual atalho de teclado aplica o negrito ao texto selecionado?",
    o: ["Ctrl + B", "Ctrl + N", "Ctrl + S", "Ctrl + I", "Ctrl + G"],
    x: "No Writer, o negrito usa o Ctrl + B, de Bold, como nos programas em inglês. O Ctrl + I aplica o itálico, e o Ctrl + U aplica o sublinhado. O Ctrl + S, no Writer, salva o documento.\n\nO Ctrl + N, no Writer, abre um documento novo, e não aplica o negrito. O Ctrl + G não aplica negrito no Writer. A diferença com o Word em português, em que o negrito é Ctrl + N, é um ponto muito cobrado em provas.",
  },
  {
    d: "media",
    e: "No Microsoft Word em português do Brasil, qual atalho de teclado grava o documento em edição?",
    o: ["Ctrl + B", "Ctrl + S", "Ctrl + G", "Ctrl + P", "Ctrl + Z"],
    x: "No Word em português do Brasil, o atalho para salvar o documento é Ctrl + B, pela ideia de gravar. Como o Ctrl + S foi usado para o sublinhado, o Salvar ficou com o Ctrl + B.\n\nO Ctrl + S, no Word em português, aplica o sublinhado. O Ctrl + P imprime. O Ctrl + Z desfaz a última ação. E o Ctrl + G, no Word em português, alinha o texto à direita, e não grava o documento. Já no Writer, o Ctrl + S é que salva.",
  },
  {
    d: "media",
    e: "No Microsoft Word em português do Brasil, qual atalho de teclado seleciona todo o conteúdo do documento?",
    o: ["Ctrl + T", "Ctrl + A", "Ctrl + E", "Ctrl + L", "Ctrl + D"],
    x: "No Word em português do Brasil, o Ctrl + T seleciona tudo, pela inicial de Tudo. O mesmo comando, no Word em inglês e no Writer, é o Ctrl + A, de All.\n\nNo Word em português, o Ctrl + A abre um arquivo existente, o Ctrl + E centraliza o parágrafo e o Ctrl + L localiza um trecho no texto. O Ctrl + D abre a janela de formatação da fonte. Nenhum desses seleciona o documento inteiro.",
  },
  {
    d: "media",
    e: "Qual combinação de teclas insere uma quebra de página, tanto no Word quanto no Writer, na posição do cursor?",
    o: ["Ctrl + Enter", "Shift + Enter", "Alt + Enter", "Ctrl + Tab", "Ctrl + Home"],
    x: "O Ctrl + Enter insere uma quebra de página manual, e o texto que vem depois do cursor passa para o início da página seguinte. A combinação vale no Word e no Writer.\n\nO Shift + Enter insere uma quebra de linha, mantendo o texto no mesmo parágrafo. O Alt + Enter não insere quebra de página nesses programas. O Ctrl + Tab alterna entre abas ou desloca para a próxima tabulação. E o Ctrl + Home leva o cursor ao início do documento, sem quebrar página.",
  },
  {
    d: "media",
    e: "Qual é a diferença entre pressionar Enter e pressionar Shift + Enter ao final de uma linha de texto?",
    o: ["Enter inicia novo parágrafo; Shift + Enter só quebra a linha", "Enter quebra a linha; Shift + Enter inicia novo parágrafo", "Os dois fazem exatamente o mesmo", "Enter insere quebra de página; Shift + Enter, de coluna", "Shift + Enter salva o documento"],
    x: "O Enter termina o parágrafo e começa outro, o que aplica de novo as configurações de recuo e espaçamento entre parágrafos. O Shift + Enter apenas quebra a linha, e o texto seguinte continua no mesmo parágrafo, com a mesma formatação.\n\nPor isso as duas teclas não são equivalentes: a troca entre elas muda o espaçamento. A quebra de página é feita pelo Ctrl + Enter. O Shift + Enter não grava o documento, pois o salvamento é feito por outros atalhos.",
  },
  {
    d: "media",
    e: "No Word, qual trecho do texto fica selecionado quando se dá um triplo clique sobre uma palavra de um parágrafo?",
    o: ["Seleciona o parágrafo inteiro", "Seleciona só a palavra", "Seleciona só a frase", "Seleciona o documento inteiro", "Seleciona só a linha"],
    x: "No Word, o clique duplo seleciona uma palavra, e o clique triplo seleciona o parágrafo inteiro. Para selecionar a frase, usa-se Ctrl + clique, e para selecionar a linha inteira, basta clicar na margem esquerda, ao lado dela.\n\nA seleção só da palavra é o clique duplo. A seleção de toda a frase é feita com o Ctrl pressionado. A seleção do documento todo é feita pelo atalho Ctrl + T, no Word em português. E a linha se seleciona clicando na margem, e não com o triplo clique.",
  },
  {
    d: "media",
    e: "Ao dar três cliques seguidos sobre uma palavra no LibreOffice Writer, o que fica selecionado?",
    o: ["Seleciona a frase inteira", "Seleciona o parágrafo inteiro", "Seleciona só a palavra", "Seleciona o documento inteiro", "Seleciona só a linha"],
    x: "No Writer, o clique duplo seleciona a palavra, o clique triplo seleciona a frase inteira, e o clique quádruplo seleciona o parágrafo. Essa escala é diferente da do Word, em que o clique triplo já seleciona o parágrafo.\n\nO triplo clique, portanto, não seleciona só a palavra, que é o clique duplo. Também não seleciona o parágrafo, que exige quatro cliques no Writer, nem o documento inteiro, que se seleciona com o Ctrl + A. E a linha inteira se seleciona pelas teclas Home e Shift + End.",
  },
  {
    d: "media",
    e: "Qual é a função do recurso Pincel de Formatação do Word e do Writer?",
    o: ["Copiar a formatação de um trecho para outro", "Apagar toda a formatação do documento", "Pintar o fundo da página de uma cor", "Corrigir palavras escritas de forma errada", "Desenhar formas dentro do texto"],
    x: "O Pincel de Formatação, chamado de Clonar Formatação no Writer, copia a formatação de um trecho, como fonte, tamanho, cor e estilo, e aplica em outro trecho, sem copiar o texto em si. Com clique duplo no botão, ele pode ser aplicado várias vezes.\n\nApagar a formatação é função de outro comando, o Limpar Formatação. Mudar a cor do fundo da página é feito no grupo Design. A correção de palavras é feita pela verificação ortográfica. E as formas são inseridas pelo grupo Ilustrações, na guia Inserir.",
  },
  {
    d: "media",
    e: "Como o Word consegue montar automaticamente o sumário de um trabalho, com os títulos e os números de página?",
    o: ["Usando os estilos de título, como Título 1 e Título 2", "Digitando cada linha do sumário à mão", "Usando apenas a fonte em negrito nos títulos", "Escolhendo o tamanho 18 nos títulos", "Usando a verificação ortográfica"],
    x: "O sumário automático, na guia Referências, é gerado a partir dos estilos de título aplicados no texto, como Título 1, Título 2 e Título 3. O Word lê esses estilos, monta a lista com os títulos e mostra os números de página, que podem ser atualizados depois.\n\nDigitar as linhas à mão não gera um sumário automático. Negrito e tamanho 18 são formatações visuais que o Word não reconhece como títulos. E a verificação ortográfica não tem relação com a estrutura do documento. Por isso se recomenda aplicar os estilos de título, em vez de formatar os títulos na mão.",
  },
  {
    d: "media",
    e: "Onde aparece o texto de uma nota de rodapé inserida em um documento?",
    o: ["Na parte inferior da própria página da chamada", "No fim do documento inteiro", "No início da primeira página", "Numa janela separada que abre ao imprimir", "Na margem lateral da página"],
    x: "A nota de rodapé aparece na parte inferior da própria página em que está a chamada, separada do texto por uma linha curta, e costuma trazer fontes, explicações e comentários. A chamada, no texto, é um número ou símbolo em sobrescrito.\n\nA nota que fica no fim do documento inteiro é a nota de fim. O início da primeira página e a janela de impressão não são locais previstos para as notas. E os comentários laterais, que ficam na margem, são outro recurso, o de comentários de revisão.",
  },
  {
    d: "media",
    e: "Qual é a diferença entre nota de rodapé e nota de fim, nos editores de texto?",
    o: ["A de rodapé fica na página; a de fim, no final do documento", "A de rodapé fica no fim; a de fim, no início", "Não há diferença de posição entre as duas", "A de fim só existe no LibreOffice Writer", "A de rodapé só aceita números romanos"],
    x: "A nota de rodapé aparece no final da página em que a chamada foi inserida, enquanto a nota de fim reúne as notas no final do documento ou da seção. O conteúdo é o mesmo tipo de anotação, e a escolha depende do estilo do trabalho.\n\nAs posições não são trocadas nem iguais. A nota de fim existe no Word e no Writer, e não só neste. E a numeração da nota de rodapé pode ser escolhida, com números arábicos, romanos, letras ou símbolos, e não se limita a números romanos.",
  },
  {
    d: "media",
    e: "Para que serve o recurso Controlar Alterações, da guia Revisão do Word?",
    o: ["Registrar as edições feitas, para aceitar ou rejeitar", "Bloquear o documento com uma senha", "Corrigir a ortografia de forma automática", "Enviar o arquivo a todos os contatos", "Contar as palavras e os caracteres"],
    x: "O Controlar Alterações registra inserções, exclusões e mudanças de formatação, mostrando quem fez cada uma e quando. Depois, o autor pode aceitar ou rejeitar cada alteração, o que é útil em trabalhos revisados por mais de uma pessoa.\n\nProteger com senha é outra função, feita pelo comando Proteger Documento. A correção de ortografia é tarefa da verificação ortográfica. O envio do arquivo é feito por e-mail ou compartilhamento. E a contagem de palavras tem um botão próprio, o Contar Palavras.",
  },
  {
    d: "media",
    e: "Qual é a finalidade dos comentários, recurso da guia Revisão do Word e do menu Inserir do Writer?",
    o: ["Fazer anotações na margem sem mudar o texto do documento", "Apagar partes do texto sem deixar rastro", "Mudar o idioma de todo o documento", "Aumentar o tamanho das fontes", "Gerar um índice remissivo"],
    x: "Os comentários são anotações que aparecem na margem do documento, ligadas a um trecho, sem alterar o conteúdo do texto. Servem para sugerir mudanças, fazer perguntas e registrar observações em trabalhos revisados por mais de uma pessoa.\n\nApagar partes do texto sem rastro não é função de um comentário. A mudança de idioma é feita em outro comando. O tamanho das fontes é definido na guia Página Inicial. E o índice remissivo é gerado por um recurso próprio, o de marcação de entradas, na guia Referências.",
  },
  {
    d: "media",
    e: "O que é possível fazer no Word com o recurso Mala Direta, da guia Correspondências?",
    o: ["Gerar cartas personalizadas de uma lista", "Enviar o arquivo por correio comum", "Proteger o texto contra cópia", "Trocar o tipo de fonte do documento", "Transformar o texto em tabela"],
    x: "A Mala Direta combina um documento-modelo, como uma carta ou uma etiqueta, com uma lista de dados, como nomes e endereços. O Word gera um documento para cada registro, trocando os campos de mesclagem pelos dados de cada pessoa.\n\nEla não envia correspondência física, e nem protege o texto contra cópia. A troca da fonte é feita na guia Página Inicial. E a transformação do texto em tabela é feita pelo comando Converter Texto em Tabela, na guia Inserir. A mala direta serve para produzir cartas, crachás e etiquetas em série.",
  },
  {
    d: "media",
    e: "Para que serve a quebra de seção, nos editores de texto?",
    o: ["Permitir formatações diferentes em partes do documento", "Apagar uma parte do texto", "Contar as seções do documento", "Criar uma cópia do arquivo", "Esconder o cabeçalho do documento todo"],
    x: "A quebra de seção divide o documento em partes independentes, e cada seção pode ter orientação, margens, colunas, cabeçalhos e numeração de páginas próprios. É útil, por exemplo, para colocar uma página em paisagem no meio de um trabalho em retrato.\n\nEla não apaga texto, não conta seções, não cria cópias e não esconde o cabeçalho de todo o documento. A quebra de página, mais simples, só muda o texto de página, sem permitir configurações diferentes entre as partes.",
  },
  {
    d: "media",
    e: "Qual é a extensão usada, no Word, para um modelo de documento, que serve de base para criar novos arquivos?",
    o: [".dotx", ".docx", ".docm", ".rtf", ".pdf"],
    x: "A extensão .dotx identifica um modelo do Word, que guarda formatação, estilos e textos prontos. Ao abrir um modelo, o Word cria um documento novo com base nele, sem alterar o arquivo do modelo.\n\nA .docx é um documento comum do Word. A .docm é um documento com macros habilitadas. A .rtf é um formato de texto formatado, compatível com vários programas. E a .pdf é um formato portátil, feito para leitura e impressão. No Writer, o equivalente ao modelo é o .ott.",
  },
  {
    d: "media",
    e: "O que significa a extensão .docm, num arquivo do Microsoft Word?",
    o: ["Documento do Word com macros", "Modelo de documento do Word", "Documento em formato antigo do Word", "Documento em texto simples", "Documento compactado em ZIP"],
    x: "A extensão .docm indica um documento do Word que pode conter macros, isto é, pequenas rotinas que automatizam tarefas. Como macros podem executar código, esse tipo de arquivo merece cuidado quando vem de origem desconhecida.\n\nO modelo de documento é o .dotx. O formato antigo, anterior ao Word 2007, é o .doc. O texto simples é o .txt. E a compactação em ZIP é outra coisa, embora os arquivos .docx, por dentro, sejam pacotes compactados de arquivos XML.",
  },
  {
    d: "media",
    e: "Por que o PDF é muito usado para enviar documentos que não devem ser editados?",
    o: ["Mantém o visual e dificulta a edição", "Permite editar qualquer parte do texto", "Só abre no computador de quem o criou", "Sempre é menor que o arquivo original", "Dispensa o uso de qualquer programa de leitura"],
    x: "O PDF preserva o layout, as fontes e as imagens, e aparece igual em computadores e programas diferentes. Além disso, é mais difícil de ser editado que um arquivo .docx ou .odt, o que o torna adequado para entregar documentos finais.\n\nEle não é feito para edição livre. Pode ser aberto em qualquer computador com um programa leitor, em vez de só no do autor. Nem sempre é menor que o original. E continua exigindo um programa de leitura, que hoje vem em navegadores e sistemas.",
  },
  {
    d: "media",
    e: "Num parágrafo, o que caracteriza o recuo de primeira linha?",
    o: ["Só a primeira linha começa mais à direita", "Todas as linhas, menos a primeira, avançam", "O parágrafo inteiro fica centralizado", "A última linha fica mais à esquerda", "O espaço entre as linhas fica maior"],
    x: "No recuo de primeira linha, apenas a primeira linha do parágrafo começa mais afastada da margem esquerda, como nos textos escritos à mão ou nos livros. As demais linhas ficam alinhadas com a margem.\n\nO caso em que todas as linhas, menos a primeira, avançam é o recuo deslocado, muito usado em listas e referências bibliográficas. A centralização é um alinhamento, e não um recuo. E o espaço entre as linhas é o espaçamento entre linhas, definido em outra configuração do parágrafo.",
  },
  {
    d: "media",
    e: "Como se insere, no Word, o número da página em todas as páginas de um documento?",
    o: ["Inserir > Número de Página, que usa cabeçalho ou rodapé", "Digitando o número na mão em cada página", "Usando o botão Mala Direta", "Aplicando o estilo Título 1", "Pelo comando Salvar como PDF"],
    x: "Pela guia Inserir > Número de Página, escolhe-se a posição, no cabeçalho ou no rodapé, e o Word insere um campo que mostra o número certo em cada página, atualizado de forma automática quando o texto cresce ou diminui.\n\nDigitar o número à mão obrigaria a corrigir tudo a cada mudança. A mala direta gera documentos personalizados, e não numera páginas. O estilo Título 1 define um nível de título. E o Salvar como PDF apenas exporta o arquivo, sem inserir a numeração.",
  },
  {
    d: "media",
    e: "Qual tecla, no Word, abre o dicionário de sinônimos, com Shift pressionada?",
    o: ["Shift + F7", "Shift + F5", "F7", "Shift + F1", "Ctrl + F7"],
    x: "No Word, o Shift + F7 abre o dicionário de sinônimos, que sugere palavras de sentido próximo para o termo selecionado. A tecla F7, sozinha, inicia a verificação de ortografia e gramática.\n\nO Shift + F5 leva o cursor à posição da última edição. O Shift + F1 mostra as informações de formatação do trecho. O Ctrl + F7, no Word, ativa o modo de movimentar a janela. E, no Writer, o dicionário de sinônimos se abre com o Ctrl + F7.",
  },
  {
    d: "media",
    e: "Onde se acessa, no Word, o recurso que mostra a quantidade de palavras, caracteres e parágrafos do texto?",
    o: ["Revisão > Contar Palavras", "Inserir > Tabela", "Design > Marca d'Água", "Layout > Margens", "Página Inicial > Colar"],
    x: "No Word, a guia Revisão tem o botão Contar Palavras, que mostra o total de páginas, palavras, caracteres, com e sem espaços, parágrafos e linhas. A contagem também aparece na barra de status, na parte inferior da janela.\n\nA guia Inserir traz tabelas e imagens. O Design cuida de temas e da marca d'água. O Layout cuida das margens, da orientação e do tamanho da página. E o botão Colar, na Página Inicial, insere conteúdo copiado. Nenhum desses mostra a contagem de palavras.",
  },
  {
    d: "media",
    e: "Uma página A4 mede 21 cm de largura. Com margem esquerda de 3 cm e margem direita de 2 cm, qual é a largura útil disponível para o texto?",
    o: ["16 cm", "21 cm", "18 cm", "14 cm", "15 cm"],
    x: "A largura útil é a largura da folha menos as duas margens: 21 − 3 − 2 = 16 cm. É o espaço em que o texto pode ocupar de fato a linha. Conferindo, 3 + 16 + 2 = 21 cm.\n\n21 cm é a largura total da folha, sem descontar margens. 18 cm desconta só a margem esquerda. 14 cm desconta as margens em dobro, como se cada uma tivesse 3,5 cm. E 15 cm desconta duas margens de 3 cm, sem considerar que a margem direita só tem 2 cm.",
    v: { i: () => acha(21 - 3 - 2, ["16 cm", "21 cm", "18 cm", "14 cm", "15 cm"]) },
  },
  {
    d: "media",
    e: "Um texto tem 3.700 palavras, e cada página comporta, em média, 450 palavras. Quantas páginas, no mínimo, serão necessárias para imprimi-lo inteiro?",
    o: ["9", "8", "8,2", "10", "7"],
    x: "Dividindo, 3.700 ÷ 450 ≈ 8,22. Como não se imprime uma fração de página, arredonda-se sempre para cima: são necessárias 9 páginas, e a última ficará só com parte do texto. Conferindo, 8 páginas comportam 3.600 palavras, e sobram 100.\n\n8 páginas não bastam, pois deixam 100 palavras de fora. 8,2 é o resultado da divisão sem arredondar, e o número de páginas precisa ser inteiro. 10 sobra uma página. 7 páginas comportariam só 3.150 palavras.",
    v: { i: () => acha(Math.ceil(3700 / 450), ["9", "8", "8,2", "10", "7"]) },
  },
  {
    d: "media",
    e: "Num documento com largura útil de 16 cm, o texto é dividido em 2 colunas com 1 cm de espaço entre elas. Qual é a largura de cada coluna?",
    o: ["7,5 cm", "8 cm", "7 cm", "15 cm", "6,5 cm"],
    x: "Tira-se da largura útil o espaço entre as colunas e divide-se o resto pelo número de colunas: (16 − 1) ÷ 2 = 7,5 cm. Conferindo, 7,5 + 1 + 7,5 = 16 cm.\n\n8 cm divide a largura útil sem descontar o espaço entre as colunas. 7 cm desconta 2 cm de espaço, em vez de 1. 15 cm é a largura que sobra para as duas colunas, e não a de cada uma. E 6,5 cm desconta 3 cm, o que é mais do que o espaço entre elas.",
    v: { i: () => acha((16 - 1) / 2, ["7,5 cm", "8 cm", "7 cm", "15 cm", "6,5 cm"]) },
  },
  {
    d: "media",
    e: "Qual atalho de teclado, comum ao Word e ao Writer, insere um hiperlink no trecho selecionado?",
    o: ["Ctrl + K", "Ctrl + H", "Ctrl + L", "Ctrl + J", "Ctrl + M"],
    x: "O Ctrl + K abre a janela de inserção de hiperlink, em que se informa o endereço de destino, como uma página da web, outro arquivo ou um ponto do próprio documento. O atalho vale no Word e no Writer.\n\nO Ctrl + H, no Word em inglês e no Writer, abre a janela de localizar e substituir. O Ctrl + L, no Word em português, localiza, e no Writer alinha à esquerda. O Ctrl + J justifica o parágrafo. E o Ctrl + M, no Word, aumenta o recuo à esquerda do parágrafo.",
  },

  /* ---------------------------------------------------------- difíceis --- */
  {
    d: "dificil",
    e: "Um usuário seleciona a frase \"Ser ou não ser, eis a questão\" e abre a contagem do editor. A contagem de caracteres sem espaços inclui a pontuação. Quantos caracteres aparecem?",
    o: ["23", "22", "29", "7", "28"],
    x: "Contando as letras e a vírgula, sem os espaços: Ser (3), ou (2), não (3), ser, (4, com a vírgula), eis (3), a (1) e questão (7), o que dá 3 + 2 + 3 + 4 + 3 + 1 + 7 = 23. A contagem do editor inclui os sinais de pontuação.\n\n22 esquece a vírgula. 29 é a contagem com os 6 espaços entre as palavras. 7 é o número de palavras, e não de caracteres. E 28 soma só 5 espaços, o que não corresponde a nenhuma das duas contagens.",
    v: { i: () => acha("Ser ou não ser, eis a questão".replace(/\s/g, "").length, ["23", "22", "29", "7", "28"]) },
  },
  {
    d: "dificil",
    e: "Um relatório tem 10 páginas, e a numeração foi configurada para começar no número 5. Qual número aparece na última página?",
    o: ["14", "15", "10", "13", "9"],
    x: "Se a primeira página recebe o número 5, a segunda recebe o 6, e assim por diante. A última, a décima, recebe 5 + 10 − 1 = 14. Conferindo, de 5 a 14 há 10 números, um para cada página.\n\n15 conta uma página a mais, como se a numeração terminasse em 5 + 10. 10 é o total de páginas, e não o número da última. 13 perde uma página, e 9 é o número da quinta página, e não o da última.",
    v: { i: () => acha(5 + 10 - 1, ["14", "15", "10", "13", "9"]) },
  },
  {
    d: "dificil",
    e: "Uma tabela tem 4 colunas e 6 linhas. A primeira linha foi mesclada numa única célula, para o título, e, em outras duas linhas, as duas últimas células foram mescladas em uma. Quantas células a tabela tem agora?",
    o: ["19", "21", "20", "15", "24"],
    x: "A tabela tem, de início, 4 × 6 = 24 células. Na primeira linha, as 4 células viraram uma só, o que elimina 3. Em cada uma das outras duas linhas, duas células viraram uma, o que elimina 1 por linha, ou 2 no total. O resultado é 24 − 3 − 2 = 19.\n\n21 conta a mesclagem da linha do título como se eliminasse só 1 célula. 20 conta só uma das duas mesclagens das outras linhas. 15 trataria as três linhas como mescladas por inteiro, o que o enunciado não diz. E 24 ignora as mesclagens.",
    v: { i: () => acha(4 * 6 - (4 - 1) - 2 * (2 - 1), ["19", "21", "20", "15", "24"]) },
  },
  {
    d: "dificil",
    e: "Uma margem de 3,81 cm equivale a quantas polegadas, sabendo que 1 polegada mede 2,54 cm?",
    o: ["1,5 polegada", "3 polegadas", "0,75 polegada", "2 polegadas", "3,81 polegadas"],
    x: "Divide-se o valor em centímetros por 2,54, que é o tamanho de uma polegada em centímetros: 3,81 ÷ 2,54 = 1,5 polegada. Conferindo, 1,5 × 2,54 = 3,81 cm. O Word e o Writer mostram as medidas na unidade configurada, que pode ser centímetros ou polegadas.\n\n3 polegadas equivaleria a 7,62 cm. 0,75 polegada equivaleria a 1,905 cm. 2 polegadas equivaleria a 5,08 cm. E 3,81 polegadas trata o valor em centímetros como se já estivesse em polegadas, sem fazer a conversão.",
    v: { i: () => acha(3.81 / 2.54, ["1,5 polegada", "3 polegadas", "0,75 polegada", "2 polegadas", "3,81 polegadas"], num, 1e-6) },
  },
  {
    d: "dificil",
    e: "Uma linha de texto tem 18 pontos de altura. Sabendo que 1 polegada tem 72 pontos e mede 2,54 cm, qual é a altura aproximada dessa linha em centímetros?",
    o: ["≈ 0,64 cm", "≈ 1,80 cm", "≈ 0,25 cm", "≈ 6,35 cm", "≈ 0,18 cm"],
    x: "Primeiro converte-se de pontos para polegadas: 18 ÷ 72 = 0,25 polegada. Depois, para centímetros: 0,25 × 2,54 = 0,635 cm, isto é, cerca de 0,64 cm. Conferindo, 72 pontos equivalem a 2,54 cm, então 1 ponto vale cerca de 0,0353 cm.\n\n1,80 cm trata 18 pontos como 18 décimos de centímetro. 0,25 cm é o valor em polegadas, sem a conversão para centímetros. 6,35 cm corresponderia a 180 pontos. E 0,18 cm corresponderia a cerca de 5 pontos.",
    v: { i: () => acha((18 / 72) * 2.54, ["≈ 0,64 cm", "≈ 1,80 cm", "≈ 0,25 cm", "≈ 6,35 cm", "≈ 0,18 cm"], num, 0.01) },
  },
  {
    d: "dificil",
    e: "Na mala direta do Word, o que permite que um mesmo documento-modelo gere cartas com nomes e endereços diferentes?",
    o: ["Campos de mesclagem ligados a uma fonte de dados", "Uma cópia manual do arquivo para cada pessoa", "O uso de estilos de título", "A quebra de seção entre as cartas", "O controle de alterações ativado"],
    x: "A mala direta usa dois elementos: o documento principal, com o texto fixo e os campos de mesclagem, como Nome e Endereço, e uma fonte de dados, como uma planilha ou lista de contatos. Na geração, cada campo é trocado pelo dado de cada registro.\n\nFazer uma cópia manual de cada carta é o que a mala direta busca evitar. Os estilos de título organizam a estrutura do texto. A quebra de seção separa partes com formatações diferentes. E o controle de alterações só registra edições, sem relação com os dados dos destinatários.",
  },
  {
    d: "dificil",
    e: "Como inserir uma única página em paisagem no meio de um documento em retrato, sem mudar a orientação das demais?",
    o: ["Usar quebras de seção e mudar a orientação só dessa seção", "Mudar a orientação do documento inteiro", "Aplicar o estilo Título 1 nessa página", "Usar o controle de alterações", "Inserir uma quebra de coluna"],
    x: "Insere-se uma quebra de seção do tipo Próxima Página antes e depois da página desejada, e, na seção do meio, muda-se a orientação para paisagem. Como cada seção tem configurações próprias, as demais continuam em retrato.\n\nMudar a orientação do documento inteiro afetaria todas as páginas. O estilo Título 1 não altera a orientação da página. O controle de alterações só registra edições. E a quebra de coluna apenas move o texto de uma coluna para a seguinte, sem alterar a orientação.",
  },
  {
    d: "dificil",
    e: "Como fazer, no Word, com que a primeira página de um trabalho fique sem cabeçalho, mas as demais continuem com ele?",
    o: ["Marcar a opção Primeira Página Diferente", "Apagar o cabeçalho de todas as páginas", "Usar a mala direta", "Aplicar uma marca d'água", "Mudar a orientação para paisagem"],
    x: "Nas opções de Cabeçalho e Rodapé, marca-se Primeira Página Diferente. Com isso, a primeira página passa a ter um cabeçalho próprio, que pode ficar vazio, e as demais mantêm o cabeçalho comum, sem a necessidade de quebras de seção.\n\nApagar o cabeçalho de todas as páginas tiraria também o das demais. A mala direta gera documentos personalizados. A marca d'água acrescenta um texto ou imagem ao fundo. E a orientação paisagem só altera a forma da página, sem relação com o cabeçalho.",
  },
  {
    d: "dificil",
    e: "Um documento tem títulos formatados com o estilo Título 1, e o usuário quer mudar a fonte de todos eles de uma vez. Qual é o procedimento mais eficiente?",
    o: ["Modificar a definição do estilo Título 1", "Selecionar e reformatar cada título à mão", "Usar o Pincel de Formatação em cada um", "Copiar o primeiro título sobre os outros", "Refazer o documento com outra fonte"],
    x: "Como todos os títulos usam o estilo Título 1, basta modificar a definição do estilo, por exemplo a fonte e o tamanho. O Word atualiza de uma vez todos os parágrafos que usam aquele estilo, o que garante a uniformidade e economiza trabalho.\n\nReformatar cada título à mão ou usar o Pincel de Formatação em cada um funciona, mas é lento e sujeito a esquecimentos. Copiar o primeiro título sobre os outros apagaria o texto dos demais. E refazer o documento é desnecessário, pois a formatação por estilos existe justamente para isso.",
  },
  {
    d: "dificil",
    e: "Depois de incluir novos capítulos e renomear um título, o sumário automático continua mostrando os títulos e as páginas antigos. O que o usuário deve fazer para corrigi-lo?",
    o: ["Atualizar o campo do sumário, por exemplo com F9", "Digitar os novos números de página", "Apagar os títulos do texto", "Salvar o documento como PDF", "Mudar a margem das páginas"],
    x: "O sumário automático é um campo, e os campos não se atualizam sozinhos em todas as situações. O usuário deve clicar no sumário e usar Atualizar Tabela, ou a tecla F9, escolhendo atualizar a tabela inteira, para refletir os novos títulos e as novas páginas.\n\nDigitar os números à mão desfaz a automação, e o erro volta a cada mudança. Apagar os títulos do texto não corrige o sumário. Salvar como PDF apenas exporta o arquivo atual. E mudar a margem altera a paginação, sem atualizar o sumário.",
  },
  {
    d: "media",
    e: "Qual recurso dos editores de texto troca todas as ocorrências de uma palavra por outra, de uma só vez?",
    o: ["Localizar e Substituir", "Pincel de Formatação", "Quebra de seção", "Mala Direta", "Notas de rodapé"],
    x: "O recurso Localizar e Substituir procura um termo no documento e o troca por outro, podendo fazer a troca uma ocorrência por vez ou todas de uma só vez, com o botão Substituir Tudo. É útil para corrigir um nome escrito errado em um texto longo.\n\nO Pincel de Formatação copia a formatação de um trecho. A quebra de seção divide o documento em partes com configurações próprias. A mala direta gera documentos personalizados a partir de uma lista. E as notas de rodapé acrescentam explicações na parte inferior das páginas.",
  },
];
