/* Planilhas: referências, filtros e gráficos (49 questões) — informatica.

   Autorais, escritas por Claude (Anthropic) em 2026-10-09 seguindo as cinco
   regras de CONTINUAR-MATERIAS-POR-OBJETIVO.md. Nenhuma é atribuída a banca
   ou a prova real.

   Conferência do gabarito: 20 de 49 recalculadas por código que chega à
   resposta por outro caminho (ver .rascunho/questoes-objetivo/informatica__planilhas-referencias-filtros-e-graficos.mjs);
   29 conceituais aguardam a revisão independente listada no relatório.

   Montado por scripts/montar-questoes-objetivo.mjs; gabarito redistribuído
   por scripts/rebalancear-gabarito.mjs. Relatório em
   _relatorios/informatica__planilhas-referencias-filtros-e-graficos.json. */

export const questoes = [
  {
    materia: "informatica",
    tema: "Planilhas: referências, filtros e gráficos",
    dificuldade: "facil",
    enunciado:
      "Em uma planilha, qual tipo de referência se ajusta automaticamente quando a fórmula é copiada para outra célula?",
    opcoes: [
      "Referência absoluta",
      "Referência circular",
      "Referência externa",
      "Referência relativa",
      "Referência travada",
    ],
    correta: 3,
    explicacao:
      "A referência relativa, como A1, não tem cifrões e é ajustada quando a fórmula é copiada: se a fórmula é levada uma linha para baixo, A1 vira A2, e se for levada uma coluna para a direita, A1 vira B1. É o tipo padrão ao digitar uma referência.\n\nA referência absoluta, como $A$1, não se altera ao copiar. A circular é aquela em que a fórmula depende do próprio resultado. A externa aponta para outra pasta de trabalho. E a expressão referência travada não é o nome de um tipo: travar é o efeito do cifrão.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: referências, filtros e gráficos",
    dificuldade: "facil",
    enunciado:
      "Em uma fórmula, o que indica o uso do cifrão na referência $A$1?",
    opcoes: [
      "Que o valor está em moeda",
      "Que a célula contém um texto",
      "Que a fórmula tem um erro",
      "Que a referência é absoluta",
      "Que a célula está protegida",
    ],
    correta: 3,
    explicacao:
      "Os cifrões em $A$1 travam a coluna e a linha: ao copiar a fórmula para outra célula, a referência continua apontando para A1. É o que se chama de referência absoluta, muito usada para fixar taxas, preços e totais.\n\nO cifrão não muda o formato de moeda da célula, que é definido em outro lugar. Não indica texto, nem erro, nem proteção. Ele só age sobre o comportamento da referência quando a fórmula é copiada ou arrastada para outras células.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: referências, filtros e gráficos",
    dificuldade: "facil",
    enunciado:
      "Qual recurso das planilhas exibe apenas as linhas que atendem a um critério, ocultando as demais?",
    opcoes: [
      "Classificação",
      "Mesclar células",
      "Quebra de texto",
      "Validação de dados",
      "Filtro",
    ],
    correta: 4,
    explicacao:
      "O filtro mostra só as linhas que atendem ao critério escolhido, como valores maiores que 500 ou textos que começam por uma letra, e oculta as demais, sem apagá-las. Ao remover o filtro, todas as linhas voltam a aparecer.\n\nA classificação reordena as linhas, mas mantém todas à vista. Mesclar células une várias células em uma. A quebra de texto faz o texto continuar na linha de baixo dentro da célula. E a validação de dados limita o que pode ser digitado em uma célula.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: referências, filtros e gráficos",
    dificuldade: "facil",
    enunciado:
      "Qual recurso das planilhas reorganiza as linhas de uma lista em ordem alfabética ou numérica?",
    opcoes: [
      "Filtrar",
      "Classificar",
      "Congelar painéis",
      "Formatar como moeda",
      "Inserir gráfico",
    ],
    correta: 1,
    explicacao:
      "O comando Classificar reorganiza as linhas de uma lista segundo os valores de uma coluna, em ordem crescente ou decrescente, como de A a Z ou do maior para o menor número. Todas as linhas continuam visíveis, só mudam de posição.\n\nO filtro oculta linhas, sem reorganizá-las. Congelar painéis mantém linhas e colunas à vista ao rolar a planilha. Formatar como moeda muda a aparência dos números. E inserir gráfico cria uma representação visual dos dados.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: referências, filtros e gráficos",
    dificuldade: "facil",
    enunciado:
      "Qual tipo de gráfico é mais indicado para mostrar a participação de cada parte em um todo, como a divisão de um orçamento?",
    opcoes: [
      "Linhas",
      "Dispersão",
      "Pizza",
      "Colunas agrupadas",
      "Radar",
    ],
    correta: 2,
    explicacao:
      "O gráfico de pizza divide um círculo em fatias proporcionais aos valores, e mostra o quanto cada parte representa do total. Por isso é indicado para participações, como despesas por categoria em um orçamento, desde que o número de fatias seja pequeno.\n\nO gráfico de linhas mostra evolução no tempo. O de dispersão relaciona duas variáveis numéricas. O de colunas agrupadas compara valores entre categorias. E o de radar compara várias variáveis em eixos que partem de um ponto central.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: referências, filtros e gráficos",
    dificuldade: "facil",
    enunciado:
      "Qual tipo de gráfico é mais indicado para acompanhar a evolução de um valor ao longo do tempo, como as vendas mês a mês?",
    opcoes: [
      "Pizza",
      "Rosca",
      "Linhas",
      "Organograma",
      "Mapa",
    ],
    correta: 2,
    explicacao:
      "O gráfico de linhas liga os pontos de cada período, e deixa visível a subida, a queda e a tendência de um valor ao longo do tempo. É a escolha comum para vendas por mês, temperaturas por dia ou cotações.\n\nA pizza e a rosca mostram partes de um total em um momento, e não a evolução. O organograma representa a hierarquia de uma organização. E o mapa mostra valores por região geográfica. Nenhum deles é o mais indicado para acompanhar uma série no tempo.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: referências, filtros e gráficos",
    dificuldade: "facil",
    enunciado:
      "Em qual guia do Excel se encontram os comandos para inserir um gráfico?",
    opcoes: [
      "Página Inicial",
      "Revisão",
      "Inserir",
      "Exibir",
      "Dados",
    ],
    correta: 2,
    explicacao:
      "A guia Inserir reúne os comandos de objetos que entram na planilha, como tabelas, ilustrações e gráficos. No grupo Gráficos, escolhe-se o tipo: colunas, linhas, pizza, barras, dispersão e outros.\n\nA Página Inicial traz formatação, colar e classificar e filtrar. A Revisão oferece ortografia, comentários e proteção. A Exibir muda o modo de visualização, como o congelamento de painéis. E a guia Dados cuida de importação, classificação, filtro e validação.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: referências, filtros e gráficos",
    dificuldade: "facil",
    enunciado:
      "Quantas células tem o intervalo A1:B2 de uma planilha?",
    opcoes: [
      "2",
      "3",
      "6",
      "8",
      "4",
    ],
    correta: 4,
    explicacao:
      "O intervalo A1:B2 vai da coluna A à coluna B e da linha 1 à linha 2: são 2 colunas e 2 linhas, e 2 × 2 = 4 células: A1, B1, A2 e B2.\n\n2 conta só uma linha ou uma coluna. 3 esquece uma das células do canto. 6 e 8 contam células a mais, como se o intervalo incluísse a coluna C ou a linha 3. O número de células é o produto do número de colunas pelo de linhas, contando as duas extremidades.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: referências, filtros e gráficos",
    dificuldade: "facil",
    enunciado:
      "No Excel, como se chama o arquivo que reúne uma ou várias planilhas, exibidas em abas na parte inferior?",
    opcoes: [
      "Pasta de trabalho",
      "Livro de texto",
      "Caderno de células",
      "Tabela dinâmica",
      "Banco de dados",
    ],
    correta: 0,
    explicacao:
      "No Excel, o arquivo inteiro, como um arquivo .xlsx, é chamado de pasta de trabalho, e cada aba na parte inferior é uma planilha. Uma pasta de trabalho pode reunir várias planilhas, que podem se referir umas às outras nas fórmulas.\n\nLivro de texto e caderno de células não são termos do programa. A tabela dinâmica é um recurso que resume dados. E um banco de dados é um sistema de armazenamento com estrutura própria, e não o arquivo de planilhas do Excel.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: referências, filtros e gráficos",
    dificuldade: "facil",
    enunciado:
      "Qual é a extensão padrão dos arquivos de planilha criados no LibreOffice Calc?",
    opcoes: [
      ".ods",
      ".xlsx",
      ".odt",
      ".csv",
      ".pdf",
    ],
    correta: 0,
    explicacao:
      "O Calc grava suas planilhas por padrão em .ods, de OpenDocument Spreadsheet, um formato aberto. Ele também abre e salva arquivos .xlsx, o formato do Excel, e pode exportar em PDF ou em texto delimitado.\n\nA extensão .xlsx é o padrão do Excel. A .odt é dos documentos de texto do Writer. A .csv é um formato de texto simples, com valores separados por vírgula ou ponto e vírgula, e não o padrão do Calc. E a .pdf é um formato de documento portátil.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: referências, filtros e gráficos",
    dificuldade: "facil",
    enunciado:
      "No Excel, qual tecla alterna entre referência relativa, absoluta e mista enquanto se edita uma fórmula?",
    opcoes: [
      "F2",
      "F7",
      "F4",
      "F9",
      "F12",
    ],
    correta: 2,
    explicacao:
      "Com o cursor sobre uma referência na fórmula, a tecla F4 alterna entre as formas A1, $A$1, A$1 e $A1, inserindo os cifrões, sem ter de digitá-los. É o jeito mais rápido de travar uma referência.\n\nA tecla F2 entra no modo de edição da célula. A F7 abre a verificação ortográfica. A F9 recalcula as fórmulas. E a F12 abre a janela Salvar como. Somente a F4 alterna entre os tipos de referência.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: referências, filtros e gráficos",
    dificuldade: "media",
    enunciado:
      "As células A2, A3 e A4 contêm 50, 80 e 120, e a célula B1 contém 10%. Em C2 digita-se =A2*$B$1, e a fórmula é copiada até C4. Qual é o valor de C4?",
    opcoes: [
      "0",
      "8",
      "5",
      "12",
      "1.200",
    ],
    correta: 3,
    explicacao:
      "Ao copiar de C2 para C4, a referência relativa A2 vira A4, e a absoluta $B$1 continua igual. Em C4 fica =A4*$B$1, isto é, 120 × 0,1 = 12.\n\n0 ocorreria se B1 fosse relativa: em C4 ela se deslocaria para B3, vazia. 8 é o valor de C3, 80 × 0,1, e 5 é o de C2. E 1.200 multiplicaria 120 por 10, em vez de 10%. A trava do cifrão é o que mantém a taxa na célula B1.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: referências, filtros e gráficos",
    dificuldade: "media",
    enunciado:
      "Na célula D4 está a fórmula =B$2*$C3. Ao copiá-la para a célula F7, que fórmula passa a existir?",
    opcoes: [
      "=D$5*$E6",
      "=B$2*$C6",
      "=D$5*$C6",
      "=D$2*$E6",
      "=D$2*$C6",
    ],
    correta: 4,
    explicacao:
      "De D4 para F7, a cópia desloca 2 colunas para a direita e 3 linhas para baixo. Em B$2, a linha está travada e a coluna é relativa: B passa a D, e a linha 2 fica. Em $C3, a coluna está travada e a linha é relativa: C fica, e 3 passa a 6. O resultado é =D$2*$C6.\n\nAs demais opções deslocam a parte travada, ou não deslocam a parte relativa: D$5 desloca a linha travada, $E6 desloca a coluna travada, e B$2 não acompanha a coluna.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: referências, filtros e gráficos",
    dificuldade: "media",
    enunciado:
      "A planilha tem A1 = 2, B1 = 3, A2 = 5, B2 = 6, A3 = 8 e B3 = 1. Em C1 digita-se =A1+B1, e a fórmula é copiada até C3. Qual é o valor exibido em C3?",
    opcoes: [
      "5",
      "11",
      "14",
      "9",
      "25",
    ],
    correta: 3,
    explicacao:
      "Ao copiar duas linhas para baixo, as referências relativas também descem duas linhas: A1 vira A3 e B1 vira B3. Em C3 fica =A3+B3, que dá 8 + 1 = 9.\n\n5 é o valor de C1, a fórmula original, e 11 é o de C2, 5 + 6. 14 mistura A3 com B2, como se só uma das referências descesse. E 25 é a soma de todos os valores das duas colunas. Como as referências são relativas, cada linha calcula com os valores da própria linha.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: referências, filtros e gráficos",
    dificuldade: "media",
    enunciado:
      "Uma fórmula =A$1*$B2 foi digitada em C2 e depois colada em D3. Como ela aparece em D3?",
    opcoes: [
      "=B$1*$B3",
      "=B$1*$C3",
      "=A$1*$B3",
      "=B$2*$B3",
      "=B$1*$B2",
    ],
    correta: 0,
    explicacao:
      "De C2 para D3, a cópia desloca 1 coluna e 1 linha. Em A$1, a linha está travada, e só a coluna se ajusta: A vira B, e a linha 1 fica. Em $B2, a coluna está travada, e só a linha se ajusta: B fica, e 2 vira 3. O resultado é =B$1*$B3.\n\n=B$1*$C3 move também a coluna travada. =A$1*$B3 não move a coluna relativa. =B$2*$B3 move a linha travada. E =B$1*$B2 não move a linha relativa do segundo fator.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: referências, filtros e gráficos",
    dificuldade: "media",
    enunciado:
      "Na célula C1 está a fórmula =$A1*B1. Ao copiá-la para a célula E3, que fórmula passa a existir?",
    opcoes: [
      "=$C3*D3",
      "=$A3*D3",
      "=$A1*B1",
      "=$A3*B3",
      "=$C1*D1",
    ],
    correta: 1,
    explicacao:
      "De C1 para E3, a cópia desloca 2 colunas e 2 linhas. Em $A1, a coluna está travada e a linha é relativa: A fica, e 1 passa a 3. Em B1, as duas partes são relativas: B vira D, e 1 passa a 3. O resultado é =$A3*D3.\n\n=$C3*D3 desloca a coluna travada. =$A1*B1 é a fórmula original, sem ajuste. =$A3*B3 não desloca a coluna da segunda referência. E =$C1*D1 não desloca as linhas e move a coluna travada.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: referências, filtros e gráficos",
    dificuldade: "media",
    enunciado:
      "Quantas células tem o intervalo B2:D6 de uma planilha?",
    opcoes: [
      "12",
      "18",
      "15",
      "20",
      "10",
    ],
    correta: 2,
    explicacao:
      "O intervalo B2:D6 vai da coluna B à coluna D, que são 3 colunas, e da linha 2 à linha 6, que são 5 linhas. O número de células é 3 × 5 = 15.\n\n12 resulta de contar 4 colunas por 3 linhas, e 18, de 3 por 6, como se a linha 1 fosse contada. 20 é 4 × 5, que inclui a coluna A. E 10 é 2 × 5, que desconsidera uma das colunas. Para contar as células de um intervalo, multiplicam-se as colunas pelas linhas, contando as extremidades.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: referências, filtros e gráficos",
    dificuldade: "media",
    enunciado:
      "As células B2, C2, B3 e C3 contêm 4, 6, 5 e 7, e a célula D2 contém 100. Qual é o resultado de =SOMA(B2:C3)?",
    opcoes: [
      "15",
      "122",
      "10",
      "11",
      "22",
    ],
    correta: 4,
    explicacao:
      "O intervalo B2:C3 abrange as células B2, C2, B3 e C3, isto é, duas colunas e duas linhas. A soma é 4 + 6 + 5 + 7 = 22. A célula D2, com 100, está fora do intervalo e não entra.\n\n15 esquece a célula C3. 122 inclui D2, que está fora do intervalo. 10 soma só a primeira linha, 4 + 6. E 11 soma B2 e C3, que são apenas as células da diagonal. Um intervalo abrange todas as células do retângulo entre as duas extremidades.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: referências, filtros e gráficos",
    dificuldade: "media",
    enunciado:
      "Para montar uma tabuada, A2:A4 contêm 2, 3 e 4, e B1:D1 contêm 10, 20 e 30. Em B2 digita-se =$A2*B$1, e a fórmula é copiada até D4. Qual é o valor de D4?",
    opcoes: [
      "40",
      "90",
      "60",
      "120",
      "30",
    ],
    correta: 3,
    explicacao:
      "De B2 para D4, a cópia desloca 2 colunas e 2 linhas. Em $A2, a coluna é travada, e a linha acompanha: A fica e 2 passa a 4. Em B$1, a linha é travada, e a coluna acompanha: B passa a D e a linha 1 fica. Em D4 fica =$A4*D$1, isto é, 4 × 30 = 120.\n\n40 é 4 × 10, que usaria a coluna B do cabeçalho. 90 é 3 × 30, que usaria a linha 3. 60 é 2 × 30, a primeira linha. E 30 é só o valor de D1. Os dois travamentos mistos é que permitem uma única fórmula preencher a tabela inteira.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: referências, filtros e gráficos",
    dificuldade: "media",
    enunciado:
      "No Excel, como se escreve uma fórmula que busca o conteúdo da célula A1 de outra planilha chamada Plan2, da mesma pasta de trabalho?",
    opcoes: [
      "=Plan2.A1",
      "=Plan2:A1",
      "=Plan2!A1",
      "=[Plan2]A1",
      "=Plan2#A1",
    ],
    correta: 2,
    explicacao:
      "No Excel, a referência a outra planilha da mesma pasta de trabalho usa o nome da planilha, um ponto de exclamação e o endereço da célula: =Plan2!A1. Se o nome tiver espaços, vai entre aspas simples, como em ='Vendas 2026'!A1.\n\nO ponto, como em =Plan2.A1, é a forma do LibreOffice Calc. Os dois-pontos indicam intervalo dentro da mesma planilha. Os colchetes são usados para o nome de outra pasta de trabalho, como em [Pasta1.xlsx]Plan2!A1. E o sustenido não faz parte da sintaxe de referência.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: referências, filtros e gráficos",
    dificuldade: "media",
    enunciado:
      "No LibreOffice Calc, como se escreve uma fórmula que busca o conteúdo da célula A1 de outra planilha chamada Plan2, do mesmo arquivo?",
    opcoes: [
      "=Plan2!A1",
      "=Plan2:A1",
      "=Plan2.A1",
      "=[Plan2]A1",
      "=Plan2#A1",
    ],
    correta: 2,
    explicacao:
      "No Calc, o nome da planilha é separado do endereço da célula por um ponto: =Plan2.A1, ou =$Plan2.A1 quando o nome da planilha é travado. É uma diferença em relação ao Excel.\n\nO ponto de exclamação, como em =Plan2!A1, é a sintaxe do Excel, embora o Calc possa ler fórmulas dessa forma ao abrir arquivos .xlsx. Os dois-pontos indicam intervalo dentro da mesma planilha. Os colchetes e o sustenido não fazem parte da sintaxe de referência a outra planilha no Calc.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: referências, filtros e gráficos",
    dificuldade: "media",
    enunciado:
      "O que acontece com as linhas que não atendem ao critério quando se aplica um filtro a uma lista?",
    opcoes: [
      "São apagadas definitivamente",
      "São movidas para outra planilha",
      "Vão para o final da lista",
      "Ficam com a fonte em vermelho",
      "Ficam ocultas, sem serem apagadas",
    ],
    correta: 4,
    explicacao:
      "O filtro apenas oculta as linhas que não atendem ao critério. Os dados continuam na planilha, e reaparecem quando o filtro é limpo. Os números das linhas visíveis ficam com uma cor diferente, e há saltos na numeração, o que revela a ocultação.\n\nNão há exclusão: apagar linhas é outro comando. O filtro também não move as linhas para outra planilha nem para o fim da lista, e não muda a cor da fonte. A reordenação das linhas é tarefa da classificação, e não do filtro.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: referências, filtros e gráficos",
    dificuldade: "media",
    enunciado:
      "Num filtro de texto do Excel, qual condição mostra as células que incluem um trecho em qualquer posição do texto?",
    opcoes: [
      "Começa com",
      "Contém",
      "Termina com",
      "É igual a",
      "Não é igual a",
    ],
    correta: 1,
    explicacao:
      "A condição Contém mostra as células em que o trecho informado aparece em qualquer posição: o filtro \"Contém\" com a palavra \"ana\" mostra tanto Ana quanto Mariana e Banana. É a mais flexível das condições de texto.\n\nComeça com exige o trecho no início, e Termina com, no fim. É igual a exige o texto inteiro idêntico, e Não é igual a mostra tudo o que for diferente do texto informado. Só a condição Contém aceita o trecho em qualquer posição.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: referências, filtros e gráficos",
    dificuldade: "media",
    enunciado:
      "Uma lista tem 8 vendas, em reais: 120, 480, 650, 300, 900, 510, 75 e 500. Um filtro mostra apenas os valores maiores que 500. Quantas linhas ficam visíveis?",
    opcoes: [
      "3",
      "4",
      "5",
      "2",
      "8",
    ],
    correta: 0,
    explicacao:
      "O filtro \"maior que 500\" deixa visíveis só os valores estritamente maiores que 500: 650, 900 e 510, ou seja, 3 linhas. O valor 500 não entra, pois não é maior que 500.\n\n4 seria o resultado de \"maior ou igual a 500\", que inclui o 500. 5 seria o de \"maior que 300\", que inclui 480, 500 e os três valores citados. 2 conta só os maiores que 600. E 8 é o total de linhas, o que aparece sem filtro.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: referências, filtros e gráficos",
    dificuldade: "media",
    enunciado:
      "Os valores 14, 3, 27, 9 e 21 estão em uma coluna e são classificados do maior para o menor. Que valor fica na quarta linha?",
    opcoes: [
      "21",
      "14",
      "27",
      "3",
      "9",
    ],
    correta: 4,
    explicacao:
      "Em ordem decrescente, os valores ficam 27, 21, 14, 9 e 3. A quarta linha guarda, portanto, o 9.\n\n21 é o valor da segunda linha, e 14, o da terceira. 27 é o primeiro, o maior, e 3 é o último, o menor. Em ordem crescente, a lista seria 3, 9, 14, 21 e 27, e a quarta linha guardaria o 21, o que não corresponde ao pedido de ordem decrescente. Antes de ler a posição pedida, vale sempre escrever a lista inteira já na ordem final.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: referências, filtros e gráficos",
    dificuldade: "media",
    enunciado:
      "Os nomes Marta, Bruno, Ana, Diego e Carla estão em uma coluna e são classificados de A a Z. Qual nome fica na quarta linha?",
    opcoes: [
      "Carla",
      "Marta",
      "Bruno",
      "Diego",
      "Ana",
    ],
    correta: 3,
    explicacao:
      "Em ordem alfabética, a lista fica Ana, Bruno, Carla, Diego e Marta. O quarto nome é Diego.\n\nAna é o primeiro da ordem, Bruno o segundo e Carla o terceiro. Marta ocupa a última posição, pois M vem depois de D. Ordenar de A a Z é o mesmo que ordem crescente para textos, enquanto de Z a A é a ordem decrescente, que inverteria a lista. O Excel compara os caracteres um a um, da esquerda para a direita.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: referências, filtros e gráficos",
    dificuldade: "media",
    enunciado:
      "Qual tipo de gráfico é mais indicado para comparar valores de diferentes categorias, como as vendas de cada filial no mesmo mês?",
    opcoes: [
      "Colunas",
      "Pizza com muitas fatias",
      "Linhas com eixo de tempo",
      "Dispersão",
      "Radar",
    ],
    correta: 0,
    explicacao:
      "O gráfico de colunas usa a altura das barras para comparar valores de categorias diferentes, e deixa claro qual filial vendeu mais ou menos. É a escolha comum quando cada categoria tem um valor, sem ideia de tempo corrido.\n\nA pizza com muitas fatias dificulta a comparação. O de linhas com eixo de tempo é melhor para evolução. O de dispersão relaciona duas variáveis numéricas. E o de radar compara várias variáveis de um mesmo item, e não categorias de uma só.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: referências, filtros e gráficos",
    dificuldade: "media",
    enunciado:
      "Qual tipo de gráfico é indicado para investigar se há relação entre duas variáveis numéricas, como a altura e o peso de pessoas?",
    opcoes: [
      "Pizza",
      "Colunas empilhadas",
      "Rosca",
      "Dispersão",
      "Linhas com datas",
    ],
    correta: 3,
    explicacao:
      "O gráfico de dispersão coloca cada observação como um ponto, com um valor no eixo horizontal e outro no vertical, e permite ver se há relação, como a tendência de pessoas mais altas pesarem mais.\n\nA pizza e a rosca mostram partes de um todo. As colunas empilhadas mostram a composição de cada categoria. E o de linhas com datas mostra a evolução de um valor no tempo, em que o eixo horizontal é sempre de datas ou períodos.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: referências, filtros e gráficos",
    dificuldade: "media",
    enunciado:
      "Qual é a principal limitação de um gráfico de pizza?",
    opcoes: [
      "Mostra uma única série, como partes de um todo",
      "Só aceita datas",
      "Só funciona com números negativos",
      "Não aceita títulos",
      "Só pode ter duas fatias",
    ],
    correta: 0,
    explicacao:
      "O gráfico de pizza representa uma única série de dados, e cada fatia mostra a participação de um valor no total. Por isso não serve para comparar várias séries, e fica difícil de ler quando há muitas fatias ou valores muito parecidos.\n\nEle não exige datas, e não funciona bem com valores negativos, que não cabem como fatias. Aceita títulos e rótulos normalmente. E pode ter muitas fatias, embora a leitura piore com o aumento delas.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: referências, filtros e gráficos",
    dificuldade: "media",
    enunciado:
      "Para que servem os rótulos de dados em um gráfico do Excel?",
    opcoes: [
      "Dar nome ao arquivo do gráfico",
      "Mostrar os valores sobre as colunas, fatias ou pontos",
      "Alterar a cor do fundo da planilha",
      "Impedir a edição dos dados",
      "Criar uma nova série de dados",
    ],
    correta: 1,
    explicacao:
      "Os rótulos de dados exibem o valor, o percentual ou o nome da categoria diretamente sobre cada coluna, fatia ou ponto, o que dispensa a leitura aproximada pelos eixos.\n\nEles não dão nome ao arquivo nem alteram a cor do fundo da planilha. Também não impedem a edição dos dados, o que é papel da proteção da planilha. E não criam uma série nova, que depende dos dados da planilha, e não de um elemento de formatação.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: referências, filtros e gráficos",
    dificuldade: "media",
    enunciado:
      "O que acontece com um gráfico do Excel quando se altera um valor da tabela de origem?",
    opcoes: [
      "Ele se atualiza e mostra o novo valor",
      "Permanece igual até ser recriado",
      "É apagado da planilha",
      "Vira uma imagem",
      "Muda para o tipo pizza",
    ],
    correta: 0,
    explicacao:
      "O gráfico fica vinculado aos dados da tabela de origem e é atualizado de forma automática quando o valor muda: a altura da coluna ou a posição do ponto se ajusta ao novo número. Esse vínculo é o que torna o gráfico dinâmico.\n\nEle não precisa ser recriado, não é apagado e não vira imagem, o que só acontece se for copiado como figura. E o tipo do gráfico só muda se o usuário escolher outro tipo, sem relação com a alteração dos dados.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: referências, filtros e gráficos",
    dificuldade: "media",
    enunciado:
      "Qual recurso do Excel muda a formatação de uma célula, como a cor do fundo, de forma automática, de acordo com o valor que ela contém?",
    opcoes: [
      "Mesclar e centralizar",
      "Congelar painéis",
      "Classificar",
      "Proteger planilha",
      "Formatação condicional",
    ],
    correta: 4,
    explicacao:
      "A formatação condicional aplica cores, ícones ou barras às células conforme regras, como destacar em vermelho os valores abaixo de 5. Quando o valor muda, a formatação também muda, sem intervenção manual.\n\nMesclar e centralizar une células. Congelar painéis mantém linhas ou colunas à vista ao rolar. Classificar reordena as linhas. E proteger a planilha impede alterações. Nenhum deles altera a formatação segundo o valor da célula.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: referências, filtros e gráficos",
    dificuldade: "media",
    enunciado:
      "Para que serve a validação de dados, da guia Dados do Excel?",
    opcoes: [
      "Limitar o que pode ser digitado em uma célula",
      "Corrigir fórmulas com erro",
      "Criar gráficos automáticos",
      "Ocultar colunas inteiras",
      "Somar valores de um intervalo",
    ],
    correta: 0,
    explicacao:
      "A validação de dados define regras para o que pode ser digitado em uma célula, como só números entre 1 e 10, datas de um período ou uma lista de opções em uma caixa de seleção. Quem digita algo fora da regra recebe um aviso.\n\nEla não corrige fórmulas, não cria gráficos, não oculta colunas e não soma valores. Serve para evitar erros de digitação e padronizar as informações que entram na planilha.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: referências, filtros e gráficos",
    dificuldade: "media",
    enunciado:
      "Qual é a função do recurso Congelar Painéis, da guia Exibir do Excel?",
    opcoes: [
      "Impedir qualquer alteração nos dados",
      "Manter linhas ou colunas visíveis ao rolar a planilha",
      "Transformar fórmulas em valores",
      "Reduzir o tamanho do arquivo",
      "Esconder as linhas de grade",
    ],
    correta: 1,
    explicacao:
      "O Congelar Painéis fixa as linhas ou colunas escolhidas, como a linha de cabeçalho, para que continuem visíveis enquanto o resto da planilha é rolado, o que facilita a leitura de tabelas longas.\n\nEle não impede alterações, que é o papel da proteção. Não transforma fórmulas em valores, o que se faz colando como valores. Não reduz o tamanho do arquivo. E esconder as linhas de grade é outra opção da guia Exibir.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: referências, filtros e gráficos",
    dificuldade: "media",
    enunciado:
      "Qual é a função de uma tabela dinâmica, recurso da guia Inserir do Excel?",
    opcoes: [
      "Resumir e reorganizar grandes quantidades de dados",
      "Criar um gráfico de pizza",
      "Proteger a planilha com senha",
      "Corrigir a ortografia das células",
      "Converter texto em maiúsculas",
    ],
    correta: 0,
    explicacao:
      "A tabela dinâmica resume grandes quantidades de dados, agrupando e somando valores por categorias escolhidas, como vendas por região e por mês. O usuário arrasta campos para linhas, colunas e valores, e a tabela se reorganiza.\n\nEla não é um gráfico de pizza, embora possa dar origem a um gráfico dinâmico. Não protege o arquivo, não corrige ortografia e não converte textos. É uma ferramenta de análise e de resumo dos dados.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: referências, filtros e gráficos",
    dificuldade: "media",
    enunciado:
      "Por que uma célula do Excel exibe uma sequência de sinais ##### no lugar de um número?",
    opcoes: [
      "O número é negativo",
      "A fórmula tem divisão por zero",
      "A coluna está estreita demais para o número",
      "A célula está protegida",
      "O arquivo está corrompido",
    ],
    correta: 2,
    explicacao:
      "Quando a coluna é estreita demais para mostrar o número ou a data no formato atual, o Excel exibe ##### no lugar do valor. O dado continua na célula, e basta alargar a coluna para que ele volte a aparecer.\n\nNúmero negativo aparece normalmente, com sinal de menos. A divisão por zero mostra #DIV/0!, e não sinais de sustenido em série. A proteção não altera a exibição. E o arquivo corrompido exibe outras mensagens de erro ao ser aberto.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: referências, filtros e gráficos",
    dificuldade: "media",
    enunciado:
      "Qual atalho, no Excel, insere uma quebra de linha dentro de uma mesma célula durante a digitação?",
    opcoes: [
      "Ctrl + Enter",
      "Shift + Enter",
      "Tab",
      "Alt + Enter",
      "Esc",
    ],
    correta: 3,
    explicacao:
      "Dentro de uma célula, o Alt + Enter insere uma quebra de linha, e o texto continua na linha de baixo da mesma célula. O simples Enter confirma a digitação e passa à célula seguinte.\n\nO Ctrl + Enter confirma a digitação mantendo a seleção na mesma célula, ou preenche todas as células selecionadas. O Shift + Enter confirma e sobe para a célula de cima. O Tab confirma e move para a direita. E o Esc cancela a edição.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: referências, filtros e gráficos",
    dificuldade: "media",
    enunciado:
      "Qual atalho do Excel insere automaticamente a função de soma sobre as células vizinhas, o recurso Autosoma?",
    opcoes: [
      "Ctrl + Shift + L",
      "Ctrl + Z",
      "Ctrl + P",
      "Alt + =",
      "F4",
    ],
    correta: 3,
    explicacao:
      "O atalho Alt + = insere a função SOMA com o intervalo sugerido, em geral as células numéricas acima ou à esquerda, e basta confirmar com Enter. O botão Autosoma fica na Página Inicial e na guia Fórmulas.\n\nO Ctrl + Shift + L liga e desliga os filtros da lista. O Ctrl + Z desfaz a última ação. O Ctrl + P abre a impressão. E o F4 alterna o tipo de referência na fórmula, ou repete a última ação. Nenhum deles insere a soma.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: referências, filtros e gráficos",
    dificuldade: "media",
    enunciado:
      "O que faz o comando Mesclar e Centralizar, da Página Inicial do Excel?",
    opcoes: [
      "Divide uma célula em várias",
      "Soma os valores das células selecionadas",
      "Copia a formatação de uma célula",
      "Protege as células contra edição",
      "Une várias células em uma e centraliza o conteúdo",
    ],
    correta: 4,
    explicacao:
      "O Mesclar e Centralizar une as células selecionadas em uma só, e centraliza o conteúdo nela, o que é muito usado em títulos de tabelas. Só o conteúdo da célula superior esquerda é preservado.\n\nDividir uma célula em várias não é o que faz o comando. Somar valores é tarefa de funções como SOMA. Copiar a formatação é papel do Pincel de Formatação. E proteger células é feito pelo comando Proteger Planilha.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: referências, filtros e gráficos",
    dificuldade: "dificil",
    enunciado:
      "As células A1 a A4 contêm 3, 5, 2 e 7. Em B1 digita-se =SOMA($A$1:A1), e a fórmula é copiada até B4. Qual é o valor de B4?",
    opcoes: [
      "7",
      "10",
      "3",
      "17",
      "12",
    ],
    correta: 3,
    explicacao:
      "No intervalo $A$1:A1, o início é absoluto, e o fim é relativo. Em B4, a fórmula vira =SOMA($A$1:A4), que soma 3 + 5 + 2 + 7 = 17. É a técnica do total acumulado: cada linha soma tudo até a sua posição.\n\n7 é só o valor de A4. 10 é o acumulado de B3, 3 + 5 + 2. 3 é o valor de B1, que só soma A1. E 12 seria a soma de A2:A4, o que ocorreria se o início do intervalo também se deslocasse.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: referências, filtros e gráficos",
    dificuldade: "dificil",
    enunciado:
      "Uma planilha tem A1 = 2, B1 = 3, C1 = 9, D1 = 5 e C3 = 7. Em C2 digita-se =A1*B$1, e a fórmula é copiada para E4. Qual é o valor de E4?",
    opcoes: [
      "6",
      "35",
      "14",
      "21",
      "10",
    ],
    correta: 1,
    explicacao:
      "De C2 para E4, a cópia desloca 2 colunas e 2 linhas. A1 vira C3. Em B$1, a linha está travada, e só a coluna se ajusta: B vira D, e a linha continua 1. Em E4 fica =C3*D$1, isto é, 7 × 5 = 35.\n\n6 é o valor da fórmula original, 2 × 3. 14 multiplica C3 por A1, que não é a referência resultante. 21 usa B$1 sem deslocar a coluna, 7 × 3. E 10 multiplica A1 por D1, sem deslocar a primeira referência.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: referências, filtros e gráficos",
    dificuldade: "dificil",
    enunciado:
      "A fórmula =$A1+B$1, escrita em C2, é colada em D3. Como ela fica em D3?",
    opcoes: [
      "=$B2+C$2",
      "=$A2+C$1",
      "=$A2+C$2",
      "=$A1+C$1",
      "=$B2+C$1",
    ],
    correta: 1,
    explicacao:
      "De C2 para D3, a cópia desloca 1 coluna e 1 linha. Em $A1, a coluna está travada, e só a linha se ajusta: 1 passa a 2. Em B$1, a linha está travada, e só a coluna se ajusta: B passa a C. O resultado é =$A2+C$1.\n\n=$B2+C$2 desloca as partes travadas. =$A2+C$2 desloca a linha travada da segunda referência. =$A1+C$1 não desloca a linha da primeira. E =$B2+C$1 desloca a coluna travada da primeira.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: referências, filtros e gráficos",
    dificuldade: "dificil",
    enunciado:
      "Em E1:F3 há uma tabela: 1 → \"Baixa\", 2 → \"Média\" e 3 → \"Alta\". Em B2 digita-se =PROCV(A2;$E$1:$F$3;2;FALSO), copiada até B4. Se A2, A3 e A4 contêm 2, 3 e 1, qual é o valor de B4?",
    opcoes: [
      "Média",
      "Alta",
      "#N/D",
      "#REF!",
      "Baixa",
    ],
    correta: 4,
    explicacao:
      "Ao copiar de B2 para B4, A2 vira A4, que contém 1. A tabela $E$1:$F$3 está travada e continua a mesma. O PROCV procura o 1 na primeira coluna e devolve a segunda coluna da linha encontrada: \"Baixa\".\n\n\"Média\" é o resultado de B2, que procura o 2, e \"Alta\" é o de B3, que procura o 3. #N/D ocorreria se a tabela não estivesse travada: em B4 ela viraria E3:F5, e o 1 não estaria lá. E #REF! só aparece se o índice da coluna passar do tamanho da tabela.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: referências, filtros e gráficos",
    dificuldade: "dificil",
    enunciado:
      "Uma tabela tem 6 linhas (cidade, valor): (SP, 300), (RJ, 150), (SP, 80), (MG, 500), (SP, 620) e (RJ, 410). Um filtro mostra só as linhas em que a cidade é SP e o valor é maior que 100. Quantas linhas ficam visíveis?",
    opcoes: [
      "3",
      "5",
      "2",
      "1",
      "6",
    ],
    correta: 2,
    explicacao:
      "Os dois critérios precisam ser atendidos ao mesmo tempo. Entre as linhas de SP, que são (SP, 300), (SP, 80) e (SP, 620), só 300 e 620 passam de 100. Ficam 2 linhas visíveis.\n\n3 é a quantidade de linhas de SP, sem aplicar o critério do valor. 5 é a quantidade de linhas com valor maior que 100, sem aplicar o da cidade. 1 e 6 não correspondem a nenhuma das contas: 6 é o total de linhas, o que aparece sem filtro.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: referências, filtros e gráficos",
    dificuldade: "dificil",
    enunciado:
      "Uma tabela tem 5 alunos, com turma e nota: (B, 7), (A, 9), (B, 10), (A, 6) e (B, 8). Ela é classificada pela turma, de A a Z, e, dentro de cada turma, pela nota, da maior para a menor. Qual par fica na terceira linha?",
    opcoes: [
      "A, 6",
      "B, 8",
      "B, 10",
      "A, 9",
      "B, 7",
    ],
    correta: 2,
    explicacao:
      "Com a turma como primeira chave, os dois alunos da turma A vêm antes dos da B. Dentro da A, a nota maior vem primeiro: (A, 9) e (A, 6). Dentro da B, a ordem é (B, 10), (B, 8) e (B, 7). Na ordem final, a terceira linha é (B, 10).\n\n(A, 6) é a segunda linha, e (A, 9) é a primeira. (B, 8) fica na quarta, e (B, 7), na quinta. Cada chave de classificação só desempata as linhas em que a anterior é igual.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: referências, filtros e gráficos",
    dificuldade: "dificil",
    enunciado:
      "As células B2 a B5 contêm 20, 30, 50 e 100, e a célula B6 contém o total, 200. Em C2 digita-se =B2/B6, e a fórmula é arrastada até C5. C2 mostra corretamente a participação de B2, mas C3 mostra #DIV/0!. Por que isso ocorre?",
    opcoes: [
      "A referência B6 é relativa e, em C3, passou para B7, vazia",
      "A célula C3 está protegida",
      "O operador de divisão não aceita percentuais",
      "A coluna B está estreita demais",
      "O total B6 é menor que B3",
    ],
    correta: 0,
    explicacao:
      "Ao arrastar a fórmula uma linha para baixo, as duas referências relativas descem uma linha: B2 vira B3, e B6 vira B7. Em C3 fica =B3/B7, e como B7 está vazia, a divisão é por zero, o que gera #DIV/0!. A solução é travar o total com =B2/$B$6.\n\nA proteção da célula não causaria esse erro. O operador de divisão funciona com percentuais. A coluna estreita geraria #####. E o total ser menor que uma parcela não gera erro, apenas um resultado acima de 100%.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: referências, filtros e gráficos",
    dificuldade: "dificil",
    enunciado:
      "Uma planilha tem a receita em reais, na casa dos milhões, e a margem de lucro em percentual, entre 5% e 15%, para cada mês. Qual gráfico permite mostrar as duas informações juntas de forma legível?",
    opcoes: [
      "Pizza, com uma fatia por mês",
      "Combinado: colunas e linha em eixo secundário",
      "Colunas com um só eixo de valores",
      "Rosca com duas séries de cores",
      "Dispersão sem rótulos nos eixos",
    ],
    correta: 1,
    explicacao:
      "As duas séries têm ordens de grandeza muito diferentes: um percentual de 5% a 15% ficaria invisível no mesmo eixo de valores de milhões. O gráfico combinado resolve isso: colunas para a receita no eixo principal e uma linha para a margem em um eixo secundário, com escala própria.\n\nA pizza mostra uma só série, como partes de um total. Colunas com um só eixo deixariam a margem quase invisível. A rosca aceita mais de uma série, mas dificulta a leitura. E a dispersão sem rótulos dificultaria identificar os meses.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: referências, filtros e gráficos",
    dificuldade: "dificil",
    enunciado:
      "Na célula C3 está a fórmula =$A$1*B2. Ao copiá-la para a célula D5, que fórmula passa a existir?",
    opcoes: [
      "=$B$2*C4",
      "=$A$1*C4",
      "=$A$1*B4",
      "=$A$3*C4",
      "=$A$1*C2",
    ],
    correta: 1,
    explicacao:
      "De C3 para D5, a cópia desloca 1 coluna e 2 linhas. A referência $A$1 é absoluta e não muda. A referência B2 é relativa: B passa a C, e 2 passa a 4. O resultado é =$A$1*C4.\n\n=$B$2*C4 altera a parte absoluta, que deveria ficar em A1. =$A$1*B4 não desloca a coluna da parte relativa. =$A$3*C4 desloca a linha da parte absoluta. E =$A$1*C2 não desloca a linha da parte relativa.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: referências, filtros e gráficos",
    dificuldade: "dificil",
    enunciado:
      "Uma lista está filtrada, e só algumas linhas estão visíveis. Qual função do Excel soma apenas os valores das linhas que continuam visíveis?",
    opcoes: [
      "SOMA",
      "SUBTOTAL",
      "SOMASE",
      "CONT.SE",
      "MÉDIA",
    ],
    correta: 1,
    explicacao:
      "A função SUBTOTAL, com o código de função 9 ou 109 para a soma, ignora as linhas ocultas pelo filtro e soma só as visíveis. Por isso ela é usada em listas filtradas, em que o total deve acompanhar o que aparece na tela.\n\nA função SOMA inclui todas as células do intervalo, inclusive as que o filtro ocultou. A SOMASE soma com base em um critério, e não na visibilidade. A CONT.SE conta células que atendem a um critério. E a MÉDIA calcula a média de todas as células, com as ocultas inclusive.",
  },
];
