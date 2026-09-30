/* Armazenamento e sistemas de arquivos (49 questões) — informatica.

   Autorais, escritas por Claude (Anthropic) em 2026-09-30 seguindo as cinco
   regras de CONTINUAR-MATERIAS-POR-OBJETIVO.md. Nenhuma é atribuída a banca
   ou a prova real.

   Conferência do gabarito: 26 de 49 recalculadas por código que chega à
   resposta por outro caminho (ver .rascunho/questoes-objetivo/informatica__armazenamento-e-sistemas-de-arquivos.mjs);
   23 conceituais aguardam a revisão independente listada no relatório.

   Montado por scripts/montar-questoes-objetivo.mjs; gabarito redistribuído
   por scripts/rebalancear-gabarito.mjs. Relatório em
   _relatorios/informatica__armazenamento-e-sistemas-de-arquivos.json. */

export const questoes = [
  {
    materia: "informatica",
    tema: "Armazenamento e sistemas de arquivos",
    dificuldade: "facil",
    enunciado:
      "Qual é a menor unidade de informação que um computador consegue representar?",
    opcoes: [
      "Bit",
      "Byte",
      "Kilobyte",
      "Pixel",
      "Caractere",
    ],
    correta: 0,
    explicacao:
      "O bit, de binary digit, é a menor unidade de informação: assume apenas os valores 0 ou 1. Todos os dados do computador, como textos, imagens e sons, são representados por sequências de bits.\n\nO byte reúne 8 bits. O kilobyte reúne 1.024 bytes, ou 1.000, conforme o padrão. O pixel é um ponto de imagem, e o caractere é um símbolo de texto. Todos esses são formados por muitos bits, e não são a menor unidade.",
  },
  {
    materia: "informatica",
    tema: "Armazenamento e sistemas de arquivos",
    dificuldade: "facil",
    enunciado:
      "Quantos bits formam um byte, a unidade básica usada para medir o tamanho de arquivos e memórias?",
    opcoes: [
      "8",
      "4",
      "16",
      "10",
      "2",
    ],
    correta: 0,
    explicacao:
      "Um byte reúne 8 bits, o que permite representar 2⁸ = 256 valores diferentes, por exemplo, um caractere de texto na codificação mais simples. É a unidade básica usada para medir o tamanho de arquivos e memórias.\n\n4 bits formam um nibble, meio byte. 16 bits formam duas unidades de byte. 10 é a base do sistema decimal, e não o número de bits do byte. E 2 é a base do sistema binário, e não o tamanho do byte.",
  },
  {
    materia: "informatica",
    tema: "Armazenamento e sistemas de arquivos",
    dificuldade: "facil",
    enunciado:
      "Entre as unidades de medida de armazenamento abaixo, qual é a maior?",
    opcoes: [
      "Terabyte (TB)",
      "Gigabyte (GB)",
      "Megabyte (MB)",
      "Kilobyte (KB)",
      "Byte (B)",
    ],
    correta: 0,
    explicacao:
      "Na escala de armazenamento, cada unidade é cerca de mil vezes maior que a anterior: byte, kilobyte, megabyte, gigabyte, terabyte. Por isso o terabyte, com cerca de 1 trilhão de bytes, é a maior entre as unidades listadas.\n\nO gigabyte equivale a cerca de 1 bilhão de bytes, o megabyte a cerca de 1 milhão, o kilobyte a cerca de mil e o byte é a unidade básica. Todos são menores que o terabyte.",
  },
  {
    materia: "informatica",
    tema: "Armazenamento e sistemas de arquivos",
    dificuldade: "facil",
    enunciado:
      "Qual extensão de arquivo corresponde, em geral, a uma imagem digital muito usada em fotografias?",
    opcoes: [
      ".jpg",
      ".mp3",
      ".exe",
      ".txt",
      ".zip",
    ],
    correta: 0,
    explicacao:
      "A extensão .jpg, ou .jpeg, identifica imagens em formato JPEG, muito usado em fotos por usar compressão que reduz bastante o tamanho do arquivo. É um dos formatos de imagem mais comuns na web.\n\nA extensão .mp3 identifica áudio. A .exe identifica programas executáveis do Windows. A .txt identifica texto simples. E a .zip identifica arquivos compactados. Nenhuma delas é uma imagem.",
  },
  {
    materia: "informatica",
    tema: "Armazenamento e sistemas de arquivos",
    dificuldade: "facil",
    enunciado:
      "Qual extensão de arquivo corresponde, em geral, a uma música ou outro conteúdo de áudio compactado?",
    opcoes: [
      ".mp3",
      ".jpg",
      ".pdf",
      ".exe",
      ".docx",
    ],
    correta: 0,
    explicacao:
      "A extensão .mp3 identifica áudio no formato MP3, que usa compressão para reduzir o tamanho do arquivo com pouca perda perceptível de qualidade. É um dos formatos de música mais usados.\n\nA extensão .jpg identifica imagens. A .pdf identifica documentos portáteis. A .exe identifica executáveis. E a .docx identifica documentos de texto do Word. Nenhuma delas guarda áudio como função principal.",
  },
  {
    materia: "informatica",
    tema: "Armazenamento e sistemas de arquivos",
    dificuldade: "facil",
    enunciado:
      "Como um arquivo com a extensão .exe, no Windows, é normalmente classificado?",
    opcoes: [
      "Programa executável",
      "Imagem",
      "Planilha",
      "Arquivo de áudio",
      "Arquivo compactado",
    ],
    correta: 0,
    explicacao:
      "A extensão .exe identifica um programa executável do Windows: ao ser aberto, o sistema roda as instruções nele contidas. Por isso é preciso cuidado com arquivos .exe de origem desconhecida, pois podem ser malwares.\n\nImagens costumam ser .jpg ou .png. Planilhas costumam ser .xlsx. Áudio costuma ser .mp3 ou .wav. E arquivos compactados costumam ser .zip ou .rar. Nenhum desses usa a extensão .exe.",
  },
  {
    materia: "informatica",
    tema: "Armazenamento e sistemas de arquivos",
    dificuldade: "facil",
    enunciado:
      "Qual formato de arquivo é conhecido como documento portátil e mantém o mesmo visual em diferentes computadores?",
    opcoes: [
      ".pdf",
      ".txt",
      ".exe",
      ".mp3",
      ".jpg",
    ],
    correta: 0,
    explicacao:
      "O PDF, de Portable Document Format, preserva o layout, as fontes e as imagens de um documento, e o exibe do mesmo modo em diferentes computadores e programas. Por isso é muito usado em documentos oficiais e formulários.\n\nO .txt guarda texto simples, sem formatação. O .exe é um programa executável. O .mp3 é áudio, e o .jpg é imagem. Nenhum deles é o formato de documento portátil.",
  },
  {
    materia: "informatica",
    tema: "Armazenamento e sistemas de arquivos",
    dificuldade: "facil",
    enunciado:
      "Num sistema operacional, qual é a função de uma pasta, também chamada de diretório?",
    opcoes: [
      "Organizar arquivos e outras pastas",
      "Executar programas",
      "Conectar à internet",
      "Proteger contra vírus",
      "Aumentar a memória",
    ],
    correta: 0,
    explicacao:
      "A pasta, ou diretório, é um contêiner lógico que agrupa arquivos e outras pastas, o que permite organizá-los numa estrutura de árvore e encontrá-los com facilidade.\n\nExecutar programas é função do sistema e dos processos. Conectar à internet é tarefa de placas e configurações de rede. Proteger contra vírus cabe aos antivírus. E aumentar a memória exige hardware ou memória virtual. Nenhuma dessas é a função de uma pasta.",
  },
  {
    materia: "informatica",
    tema: "Armazenamento e sistemas de arquivos",
    dificuldade: "facil",
    enunciado:
      "O que é um sistema de arquivos, como o NTFS, o FAT32 ou o ext4, num computador?",
    opcoes: [
      "Organização lógica dos dados numa unidade",
      "Um programa que remove vírus do disco",
      "O conjunto de arquivos de uma pasta",
      "Uma cópia de segurança dos dados",
      "O cabo que liga o disco à placa-mãe",
    ],
    correta: 0,
    explicacao:
      "O sistema de arquivos define como os dados são organizados, nomeados, gravados e localizados em uma unidade de armazenamento, por meio de estruturas como tabelas de alocação e diretórios. NTFS, FAT32, exFAT e ext4 são exemplos.\n\nNão é um programa antivírus, não é apenas o conjunto de arquivos de uma pasta, não é uma cópia de segurança e não é um cabo. É a camada lógica que permite ao sistema operacional guardar e achar os arquivos.",
  },
  {
    materia: "informatica",
    tema: "Armazenamento e sistemas de arquivos",
    dificuldade: "facil",
    enunciado:
      "O que acontece, em termos gerais, quando uma unidade de armazenamento é formatada?",
    opcoes: [
      "É preparada com um sistema de arquivos",
      "Ela aumenta de capacidade",
      "Ganha um antivírus instalado",
      "É conectada à internet",
      "Passa a funcionar mais rápido sempre",
    ],
    correta: 0,
    explicacao:
      "Formatar prepara a unidade para uso, criando a estrutura do sistema de arquivos que permite guardar e localizar dados. Na formatação, os dados antigos deixam de ser acessíveis pelos meios comuns.\n\nA capacidade física não aumenta, nenhum antivírus é instalado, e a unidade não se conecta à internet. Também não há garantia de que ela fique mais rápida: a velocidade depende do hardware.",
  },
  {
    materia: "informatica",
    tema: "Armazenamento e sistemas de arquivos",
    dificuldade: "facil",
    enunciado:
      "Qual tipo de mídia usa um feixe de laser para gravar e ler os dados?",
    opcoes: [
      "Pen drive",
      "CD, DVD e Blu-ray",
      "SSD",
      "Cartão SD",
      "Memória RAM",
    ],
    correta: 1,
    explicacao:
      "Os discos ópticos, como CD, DVD e Blu-ray, gravam os dados em sulcos microscópicos na superfície, que são lidos por um feixe de laser. O Blu-ray usa um laser de comprimento de onda menor, e por isso guarda mais dados.\n\nO pen drive, o SSD e o cartão SD usam memória flash, sem laser. E a memória RAM é volátil e feita de circuitos eletrônicos. Nenhum desses usa laser para ler ou gravar.",
  },
  {
    materia: "informatica",
    tema: "Armazenamento e sistemas de arquivos",
    dificuldade: "media",
    enunciado:
      "Quantos bytes tem 1 kilobyte (1 KB) no padrão binário, usado pelos sistemas operacionais para mostrar tamanhos?",
    opcoes: [
      "1.000",
      "1.024",
      "1.048.576",
      "512",
      "8.192",
    ],
    correta: 1,
    explicacao:
      "No padrão binário, 1 KB = 2¹⁰ = 1.024 bytes. É o padrão usado por sistemas operacionais ao mostrar tamanhos de arquivos, pois os computadores trabalham com potências de 2.\n\n1.000 é o valor no padrão decimal do sistema internacional. 1.048.576 é 1.024², isto é, 1 MB no padrão binário. 512 é metade de 1 KB. E 8.192 é 1 KB em bits, 1.024 × 8.",
  },
  {
    materia: "informatica",
    tema: "Armazenamento e sistemas de arquivos",
    dificuldade: "media",
    enunciado:
      "Ao converter 2 gigabytes em megabytes pelo padrão binário, em que 1 GB vale 1.024 MB, qual é o resultado?",
    opcoes: [
      "2.000",
      "2.048",
      "1.024",
      "2.097.152",
      "4.096",
    ],
    correta: 1,
    explicacao:
      "Como 1 GB = 1.024 MB, 2 GB = 2 × 1.024 = 2.048 MB. Conferindo, 2 × 2¹⁰ = 2¹¹ = 2.048. A regra geral é que, ao passar de uma unidade maior para uma menor, multiplica-se por 1.024: de GB para MB, de MB para KB e de KB para bytes. Na direção contrária, divide-se por 1.024.\n\n2.000 usaria o padrão decimal, 1 GB = 1.000 MB. 1.024 corresponde a 1 GB. 2.097.152 corresponde a 2 GB em KB, e não em MB. E 4.096 é o dobro do valor correto.",
  },
  {
    materia: "informatica",
    tema: "Armazenamento e sistemas de arquivos",
    dificuldade: "media",
    enunciado:
      "No padrão binário, em que cada unidade vale 1.024 vezes a anterior, 3.072 megabytes correspondem a quantos gigabytes?",
    opcoes: [
      "30",
      "3",
      "3,072",
      "300",
      "0,3",
    ],
    correta: 1,
    explicacao:
      "Dividindo por 1.024, 3.072 ÷ 1.024 = 3 GB. Conferindo, 3 × 1.024 = 3.072. Ao passar de uma unidade menor, como o megabyte, para a maior seguinte, o gigabyte, divide-se por 1.024. Olhar a direção da conversão antes de calcular evita trocar a multiplicação pela divisão.\n\n30 e 300 deslocam a vírgula para o lado errado. 3,072 é o resultado de dividir por 1.000, no padrão decimal, e 0,3 erra por uma casa. Como a pergunta pede o padrão binário, o divisor correto é 1.024.",
  },
  {
    materia: "informatica",
    tema: "Armazenamento e sistemas de arquivos",
    dificuldade: "media",
    enunciado:
      "Se cada unidade de armazenamento vale 1.024 vezes a anterior, 1 terabyte equivale a quantos gigabytes?",
    opcoes: [
      "1.000",
      "1.024",
      "1.048.576",
      "100",
      "10.240",
    ],
    correta: 1,
    explicacao:
      "Como cada unidade vale 1.024 vezes a anterior, 1 TB = 1.024 GB. Conferindo, 1 TB = 1.024 × 1.024 MB = 1.048.576 MB. O mesmo fator de 1.024 aparece em todas as passagens entre unidades vizinhas, do terabyte para o gigabyte, do gigabyte para o megabyte e do megabyte para o kilobyte, e é por isso que o sistema operacional costuma mostrar tamanhos menores que os anunciados pelos fabricantes.\n\n1.000 é o valor no padrão decimal. 1.048.576 é o valor de 1 TB em MB. 100 e 10.240 não correspondem a nenhuma das duas escolhas de padrão.",
  },
  {
    materia: "informatica",
    tema: "Armazenamento e sistemas de arquivos",
    dificuldade: "media",
    enunciado:
      "Um arquivo de 4.500 MB é copiado a uma velocidade constante de 90 MB/s, considerando 1 GB igual a 1.000 MB. Quanto tempo leva a cópia?",
    opcoes: [
      "5 minutos",
      "50 segundos",
      "405 segundos",
      "45 segundos",
      "500 segundos",
    ],
    correta: 1,
    explicacao:
      "O tempo é o tamanho dividido pela velocidade: 4.500 MB ÷ 90 MB/s = 50 segundos. Conferindo, 50 × 90 = 4.500. O procedimento vale para qualquer cópia a velocidade constante: tempo = tamanho ÷ velocidade, com as mesmas unidades no numerador e no denominador. Como o tamanho está em MB e a velocidade em MB/s, o resultado já sai em segundos.\n\n5 minutos, 300 segundos, exigiria uma velocidade de 15 MB/s. 405 segundos é o produto 4,5 × 90, e não a divisão. 45 segundos exigiria 100 MB/s. E 500 segundos exigiria 9 MB/s.",
  },
  {
    materia: "informatica",
    tema: "Armazenamento e sistemas de arquivos",
    dificuldade: "media",
    enunciado:
      "Quantas músicas de 5 MB cabem em um cartão de 2 GB, considerando 1 GB igual a 1.000 MB?",
    opcoes: [
      "40",
      "400",
      "4.000",
      "10",
      "2.000",
    ],
    correta: 1,
    explicacao:
      "O cartão tem 2 × 1.000 = 2.000 MB, e cada música ocupa 5 MB, então cabem 2.000 ÷ 5 = 400 músicas. Conferindo, 400 × 5 = 2.000. O passo decisivo é converter antes de dividir: a capacidade do cartão e o tamanho de cada música precisam estar na mesma unidade. Só depois disso a divisão indica quantos arquivos cabem no espaço disponível.\n\n40 e 4.000 erram por uma casa decimal na divisão. 10 seria o resultado se cada música tivesse 200 MB. E 2.000 é a capacidade em MB, sem dividir pelo tamanho de cada música.",
  },
  {
    materia: "informatica",
    tema: "Armazenamento e sistemas de arquivos",
    dificuldade: "media",
    enunciado:
      "Um arquivo de 5 KB é gravado num disco cujos clusters têm 4 KB. Quanto espaço ele ocupa no disco, em KB?",
    opcoes: [
      "5",
      "8",
      "4",
      "9",
      "12",
    ],
    correta: 1,
    explicacao:
      "O sistema de arquivos aloca espaço em clusters inteiros. Um arquivo de 5 KB precisa de 2 clusters de 4 KB, pois um só não basta, e o último fica parcialmente vazio. O espaço ocupado é 2 × 4 = 8 KB.\n\n5 KB seria o tamanho do arquivo, e não o espaço alocado. 4 KB cabe só um cluster. 9 KB soma 5 e 4 sem critério. E 12 KB seria 3 clusters, que não são necessários.",
  },
  {
    materia: "informatica",
    tema: "Armazenamento e sistemas de arquivos",
    dificuldade: "media",
    enunciado:
      "Dez arquivos de 1 KB cada são gravados num disco cujos clusters têm 4 KB. Quanto espaço eles ocupam no total, em KB?",
    opcoes: [
      "10",
      "40",
      "4",
      "14",
      "400",
    ],
    correta: 1,
    explicacao:
      "Cada arquivo, por menor que seja, ocupa pelo menos um cluster, então cada um usa 4 KB. Com 10 arquivos, o espaço alocado é 10 × 4 = 40 KB, apesar de a soma dos tamanhos ser só 10 KB. A diferença é o desperdício de espaço dentro dos clusters.\n\n10 KB seria a soma dos tamanhos, sem considerar os clusters. 4 KB seria o espaço de um só arquivo. 14 KB soma 10 e 4 sem critério. E 400 KB erra por um fator 10.",
  },
  {
    materia: "informatica",
    tema: "Armazenamento e sistemas de arquivos",
    dificuldade: "media",
    enunciado:
      "Um servidor usa dois discos de 500 GB em RAID 0. Quantos GB ficam disponíveis para guardar dados?",
    opcoes: [
      "500",
      "1.000",
      "250",
      "1.500",
      "2.000",
    ],
    correta: 1,
    explicacao:
      "No RAID 0, os dados são divididos entre os discos, o striping, sem redundância, então a capacidade útil é a soma dos discos: 500 + 500 = 1.000 GB. O desempenho melhora, mas a falha de um disco perde todos os dados.\n\n500 GB seria a capacidade no RAID 1, em que um disco espelha o outro. 250 GB não corresponde a nenhum nível. 1.500 e 2.000 GB superestimam a soma dos discos.",
  },
  {
    materia: "informatica",
    tema: "Armazenamento e sistemas de arquivos",
    dificuldade: "media",
    enunciado:
      "Para manter uma cópia idêntica dos dados, dois discos de 500 GB são unidos em RAID 1. Qual é o espaço útil, em GB?",
    opcoes: [
      "1.000",
      "250",
      "500",
      "750",
      "100",
    ],
    correta: 2,
    explicacao:
      "No RAID 1, um disco é cópia exata do outro, o espelhamento, então a capacidade útil é a de um só disco: 500 GB. Em troca, o conjunto tolera a falha de um dos discos sem perder dados.\n\n1.000 GB seria a capacidade do RAID 0. 250 GB seria metade de um disco, e nenhum nível de RAID com dois discos de 500 GB entrega isso. 750 GB e 100 GB não correspondem a nenhum nível de RAID com dois discos.",
  },
  {
    materia: "informatica",
    tema: "Armazenamento e sistemas de arquivos",
    dificuldade: "media",
    enunciado:
      "Um NAS recebe quatro discos de 1 TB em RAID 5. Quantos TB o usuário consegue aproveitar para gravar arquivos?",
    opcoes: [
      "4",
      "2",
      "3",
      "1",
      "5",
    ],
    correta: 2,
    explicacao:
      "No RAID 5, o equivalente a um disco é usado para paridade, distribuída entre os discos, então a capacidade útil é (n − 1) discos: com 4 discos de 1 TB, (4 − 1) × 1 = 3 TB. O conjunto tolera a falha de um disco.\n\n4 TB seria a soma de todos os discos, como no RAID 0. 2 TB seria a capacidade no RAID 10 com esses discos. 1 TB seria a do RAID 1. E 5 TB supera a soma dos discos.",
  },
  {
    materia: "informatica",
    tema: "Armazenamento e sistemas de arquivos",
    dificuldade: "media",
    enunciado:
      "Uma empresa monta um RAID 10 com quatro discos de 2 TB cada. Qual é o espaço útil disponível, em TB?",
    opcoes: [
      "8",
      "6",
      "4",
      "2",
      "1",
    ],
    correta: 2,
    explicacao:
      "O RAID 10 combina espelhamento e striping: os discos formam pares espelhados, e os dados são divididos entre os pares. A capacidade útil é metade da soma: 4 × 2 ÷ 2 = 4 TB. O conjunto tolera a falha de um disco em cada par.\n\n8 TB seria a soma, sem espelhamento. 6 TB seria a capacidade de um RAID 5 com esses discos. 2 TB seria a de um RAID 1. E 1 TB não corresponde a nenhum nível possível.",
  },
  {
    materia: "informatica",
    tema: "Armazenamento e sistemas de arquivos",
    dificuldade: "media",
    enunciado:
      "Qual é a principal vantagem do RAID 1, que espelha os dados entre dois discos?",
    opcoes: [
      "Dobrar a capacidade útil",
      "Dobrar a velocidade de escrita",
      "Tolerar a falha de um dos discos",
      "Dispensar cópias de segurança",
      "Criptografar os dados",
    ],
    correta: 2,
    explicacao:
      "No RAID 1, cada dado é gravado nos dois discos, e se um deles falhar, o outro ainda tem todas as informações, o que dá tolerância a falhas. A capacidade útil é a de um só disco.\n\nEle não dobra a capacidade, pois o segundo disco guarda apenas a cópia. Não dobra a velocidade de escrita. Não dispensa o backup, pois apagar um arquivo o apaga nos dois discos. E também não criptografa os dados.",
  },
  {
    materia: "informatica",
    tema: "Armazenamento e sistemas de arquivos",
    dificuldade: "media",
    enunciado:
      "Qual é a característica principal do RAID 0, que divide os dados entre os discos?",
    opcoes: [
      "Mais segurança, por espelhamento",
      "Tolerância à falha de dois discos",
      "Mais desempenho, sem redundância",
      "Menos desempenho e mais capacidade",
      "Criptografia dos dados",
    ],
    correta: 2,
    explicacao:
      "No RAID 0, os dados são divididos entre os discos, o striping, e as leituras e gravações ocorrem em paralelo, o que aumenta o desempenho. Por isso não há redundância: a falha de um disco faz perder todos os dados do conjunto.\n\nA segurança por espelhamento é do RAID 1. A tolerância a duas falhas é do RAID 6. O RAID 0 não reduz o desempenho nem criptografa. Sua vantagem é a velocidade, e seu risco é a falta de proteção.",
  },
  {
    materia: "informatica",
    tema: "Armazenamento e sistemas de arquivos",
    dificuldade: "media",
    enunciado:
      "Num disco rígido mecânico, o que é a fragmentação de arquivos?",
    opcoes: [
      "A divisão do disco em partições",
      "A compactação dos arquivos em .zip",
      "Arquivos gravados em partes não contíguas",
      "A cópia de segurança do disco",
      "A exclusão de arquivos antigos",
    ],
    correta: 2,
    explicacao:
      "A fragmentação ocorre quando as partes de um arquivo ficam espalhadas em áreas não contíguas do disco, o que obriga a cabeça de leitura a saltar entre regiões e deixa o acesso mais lento. A desfragmentação reorganiza essas partes para que fiquem juntas.\n\nDividir o disco em partições é particionamento. Compactar em .zip reduz o tamanho. A cópia de segurança é backup. E excluir arquivos antigos libera espaço, sem relação com a posição das partes. Em SSDs, a fragmentação quase não afeta o desempenho.",
  },
  {
    materia: "informatica",
    tema: "Armazenamento e sistemas de arquivos",
    dificuldade: "media",
    enunciado:
      "O que é uma partição, quando se fala na organização de um disco rígido ou SSD?",
    opcoes: [
      "Uma cópia de segurança do disco",
      "Um tipo de vírus de boot",
      "Uma divisão lógica da unidade de armazenamento",
      "Um cabo de ligação do disco",
      "Uma pasta compartilhada em rede",
    ],
    correta: 2,
    explicacao:
      "A partição é uma divisão lógica de um disco físico, que o sistema trata como uma unidade separada, com seu próprio sistema de arquivos. Permite, por exemplo, separar o sistema operacional dos dados pessoais ou instalar dois sistemas no mesmo disco.\n\nNão é cópia de segurança, nem vírus, nem cabo. E uma pasta compartilhada em rede é um recurso de rede, e não uma divisão do disco em áreas independentes.",
  },
  {
    materia: "informatica",
    tema: "Armazenamento e sistemas de arquivos",
    dificuldade: "media",
    enunciado:
      "Qual sistema de arquivos do Windows oferece permissões por usuário, compressão e suporte a arquivos muito grandes, sendo o padrão nos discos internos?",
    opcoes: [
      "FAT32",
      "ext4",
      "NTFS",
      "ISO 9660",
      "exFAT",
    ],
    correta: 2,
    explicacao:
      "O NTFS é o sistema de arquivos padrão do Windows atual. Oferece permissões por usuário, criptografia, compressão, registro de alterações para recuperação e suporte a arquivos e volumes muito grandes.\n\nO FAT32 é mais simples, com limite de 4 GiB por arquivo. O ext4 é comum em Linux. O ISO 9660 é usado em discos ópticos. E o exFAT é voltado a pen drives e cartões, sem as permissões por usuário do NTFS.",
  },
  {
    materia: "informatica",
    tema: "Armazenamento e sistemas de arquivos",
    dificuldade: "media",
    enunciado:
      "Qual sistema de arquivos é indicado para pen drives e cartões de memória grandes, que precisam ser usados em Windows e macOS, com arquivos acima de 4 GiB?",
    opcoes: [
      "FAT32",
      "NTFS apenas",
      "exFAT",
      "ISO 9660",
      "ext4 apenas",
    ],
    correta: 2,
    explicacao:
      "O exFAT foi criado para mídias removíveis: aceita arquivos e volumes muito grandes, e é compatível com Windows e macOS, o que o torna indicado para pen drives e cartões usados em sistemas diferentes.\n\nO FAT32 tem o limite de 4 GiB por arquivo. O NTFS funciona bem no Windows, mas tem suporte limitado, para escrita, no macOS. O ISO 9660 é de discos ópticos. E o ext4 é nativo do Linux, e não é lido pelo Windows e pelo macOS sem programas adicionais.",
  },
  {
    materia: "informatica",
    tema: "Armazenamento e sistemas de arquivos",
    dificuldade: "media",
    enunciado:
      "Qual sistema de arquivos é muito usado nas distribuições Linux, como padrão em discos internos?",
    opcoes: [
      "NTFS",
      "FAT32",
      "ext4",
      "exFAT",
      "APFS",
    ],
    correta: 2,
    explicacao:
      "O ext4 é o sistema de arquivos padrão em muitas distribuições Linux, com suporte a arquivos e volumes grandes, registro de alterações, o journaling, e boa confiabilidade.\n\nO NTFS é o padrão do Windows. O FAT32 e o exFAT são usados em mídias removíveis. E o APFS é o sistema de arquivos da Apple, em macOS e iOS. Nenhum desses é o padrão das distribuições Linux.",
  },
  {
    materia: "informatica",
    tema: "Armazenamento e sistemas de arquivos",
    dificuldade: "media",
    enunciado:
      "Qual é a extensão de arquivo normalmente associada a arquivos compactados no formato ZIP?",
    opcoes: [
      ".jpg",
      ".mp3",
      ".exe",
      ".zip",
      ".pdf",
    ],
    correta: 3,
    explicacao:
      "A extensão .zip identifica arquivos compactados no formato ZIP, que reúnem um ou vários arquivos num só, reduzindo o espaço ocupado e facilitando o envio por e-mail ou pela internet. O Windows abre e cria esses arquivos nativamente.\n\nA .jpg é de imagens. A .mp3 é de áudio. A .exe é de programas executáveis. E a .pdf é de documentos portáteis. Nenhuma delas indica um arquivo compactado em ZIP.",
  },
  {
    materia: "informatica",
    tema: "Armazenamento e sistemas de arquivos",
    dificuldade: "media",
    enunciado:
      "Num caminho de arquivo do Windows, o que caracteriza um caminho absoluto, como C:\\Usuarios\\Ana\\nota.txt?",
    opcoes: [
      "Parte da pasta atual",
      "Usa apenas o nome do arquivo",
      "Só vale em redes",
      "Parte da raiz da unidade",
      "Só vale em pen drives",
    ],
    correta: 3,
    explicacao:
      "O caminho absoluto descreve a localização do arquivo a partir da raiz da unidade, como C:\\, passando por todas as pastas até o arquivo. Ele aponta para o mesmo lugar, não importa onde o usuário esteja.\n\nO caminho relativo é que parte da pasta atual. Usar só o nome do arquivo o procura na pasta atual. E os caminhos absolutos não se restringem a redes nem a pen drives: valem em qualquer unidade.",
  },
  {
    materia: "informatica",
    tema: "Armazenamento e sistemas de arquivos",
    dificuldade: "media",
    enunciado:
      "Um arquivo de 80 MB é compactado e o resultado fica 25% menor. Qual é o tamanho do arquivo compactado, em MB?",
    opcoes: [
      "20",
      "55",
      "100",
      "60",
      "75",
    ],
    correta: 3,
    explicacao:
      "Uma redução de 25% elimina 0,25 × 80 = 20 MB. O arquivo compactado tem 80 − 20 = 60 MB. Pelo fator, 0,75 × 80 = 60. Em situações assim, vale transformar a redução em fator: reduzir 25% é multiplicar por 0,75, o que evita confundir o valor que sobra com o valor que foi retirado.\n\n20 MB é o tamanho da redução, e não do arquivo compactado. 55 MB não corresponde à redução de 25%. 100 MB seria um aumento de 25%, e não uma redução. E 75 MB usa a porcentagem como se fosse uma quantidade de MB.",
  },
  {
    materia: "informatica",
    tema: "Armazenamento e sistemas de arquivos",
    dificuldade: "media",
    enunciado:
      "Uma conexão transmite a 400 megabits por segundo (Mbps). Quantos megabytes por segundo (MB/s) isso representa?",
    opcoes: [
      "400",
      "3.200",
      "40",
      "50",
      "8",
    ],
    correta: 3,
    explicacao:
      "Como 1 byte tem 8 bits, dividem-se os megabits por 8: 400 ÷ 8 = 50 MB/s. Por isso, uma conexão de 400 Mbps baixa, no máximo, cerca de 50 megabytes por segundo. A razão do cuidado é que as operadoras anunciam a velocidade em bits por segundo, enquanto o tamanho dos arquivos é medido em bytes. Para estimar o tempo de um download, é preciso fazer essa conversão antes.\n\n400 MB/s trata megabits como megabytes. 3.200 MB/s multiplica por 8 em vez de dividir. 40 MB/s resulta de dividir por 10, e não por 8. E 8 é a razão entre bits e bytes, e não o resultado.",
  },
  {
    materia: "informatica",
    tema: "Armazenamento e sistemas de arquivos",
    dificuldade: "media",
    enunciado:
      "Qual tipo de memória usam os pen drives e os cartões SD para guardar dados sem energia elétrica?",
    opcoes: [
      "Memória RAM",
      "Memória cache",
      "Fita magnética",
      "Memória flash",
      "Disco óptico",
    ],
    correta: 3,
    explicacao:
      "Os pen drives, os cartões SD e os SSDs usam memória flash, que é não volátil: mantém os dados mesmo sem energia e pode ser regravada milhares de vezes. Não tem partes móveis, por isso é resistente a impactos.\n\nA memória RAM e a cache são voláteis. A fita magnética e o disco óptico são mídias de tecnologias diferentes, magnética e a laser. Nenhuma delas é a base dos pen drives e cartões SD.",
  },
  {
    materia: "informatica",
    tema: "Armazenamento e sistemas de arquivos",
    dificuldade: "media",
    enunciado:
      "O que é um NAS, usado em casas e escritórios para guardar arquivos?",
    opcoes: [
      "Um tipo de antivírus",
      "Uma placa de vídeo",
      "Um formato de imagem",
      "Armazenamento conectado à rede",
      "Um cabo de energia",
    ],
    correta: 3,
    explicacao:
      "O NAS, de Network Attached Storage, é um equipamento com discos ligado à rede, que oferece armazenamento compartilhado a vários computadores e dispositivos, e pode fazer backups e servir arquivos. Costuma ter discos em RAID.\n\nNão é um antivírus, nem uma placa de vídeo, nem um formato de imagem, nem um cabo de energia. É um servidor de arquivos simples, acessado pela rede.",
  },
  {
    materia: "informatica",
    tema: "Armazenamento e sistemas de arquivos",
    dificuldade: "media",
    enunciado:
      "Na numeração binária, qual é o valor decimal do número 1010?",
    opcoes: [
      "1.010",
      "5",
      "12",
      "10",
      "8",
    ],
    correta: 3,
    explicacao:
      "Cada dígito binário vale uma potência de 2, da direita para a esquerda: 1 × 8 + 0 × 4 + 1 × 2 + 0 × 1 = 10. Conferindo, 10 em decimal é 8 + 2, isto é, 1010 em binário. O método funciona para qualquer número binário: multiplica-se cada dígito pela potência de 2 da sua posição, contando da direita para a esquerda a partir de 2⁰, e somam-se os resultados. Os dígitos 0 não contribuem com nada.\n\n1.010 lê os dígitos como se fossem decimais. 5 é o valor de 101. 12 seria 1100 em binário. E 8 seria 1000, sem os dois bits menos significativos.",
  },
  {
    materia: "informatica",
    tema: "Armazenamento e sistemas de arquivos",
    dificuldade: "dificil",
    enunciado:
      "Num armazenamento com cinco discos de 2 TB em RAID 5, quantos TB ficam úteis depois de reservar a paridade?",
    opcoes: [
      "10",
      "6",
      "4",
      "8",
      "2",
    ],
    correta: 3,
    explicacao:
      "No RAID 5, a capacidade útil é a de (n − 1) discos, já que o equivalente a um disco é usado para paridade. Com 5 discos de 2 TB, (5 − 1) × 2 = 8 TB.\n\n10 TB é a soma de todos os discos, como no RAID 0. 6 TB seria a capacidade de um RAID 5 com apenas 4 discos de 2 TB, isto é, (4 − 1) × 2. 4 TB seria a do RAID 10 com 4 discos. E 2 TB é a de um único disco, como no RAID 1.",
  },
  {
    materia: "informatica",
    tema: "Armazenamento e sistemas de arquivos",
    dificuldade: "dificil",
    enunciado:
      "Seis discos de 1 TB são configurados em RAID 6, que usa dois discos equivalentes para paridade. Qual é a capacidade útil, em TB?",
    opcoes: [
      "5",
      "6",
      "3",
      "4",
      "2",
    ],
    correta: 3,
    explicacao:
      "No RAID 6, a capacidade útil é a de (n − 2) discos, pois dois discos equivalentes guardam a paridade. Com 6 discos de 1 TB, (6 − 2) × 1 = 4 TB. O conjunto tolera a falha de até dois discos.\n\n5 TB seria a capacidade do RAID 5, (6 − 1). 6 TB seria a soma, como no RAID 0. 3 TB seria a do RAID 10, com metade dos discos. E 2 TB não corresponde a um nível de RAID com 6 discos.",
  },
  {
    materia: "informatica",
    tema: "Armazenamento e sistemas de arquivos",
    dificuldade: "dificil",
    enunciado:
      "Num volume em que cada cluster mede 8 KB, quanto espaço alocado, em KB, consome um arquivo de 20 KB?",
    opcoes: [
      "20",
      "16",
      "28",
      "24",
      "8",
    ],
    correta: 3,
    explicacao:
      "O arquivo precisa de ⌈20 ÷ 8⌉ = 3 clusters, pois 2 clusters, 16 KB, não bastam. O espaço alocado é 3 × 8 = 24 KB, e os 4 KB que sobram no último cluster ficam desperdiçados. Esse arredondamento sempre para cima é a regra do cluster: o sistema não divide um cluster entre arquivos, por isso o espaço ocupado é um múltiplo do tamanho do cluster, mesmo que o arquivo use menos que isso.\n\n20 KB é o tamanho do arquivo, e não o espaço alocado. 16 KB são só dois clusters, insuficientes. 28 KB ultrapassa o necessário, e 8 KB é um único cluster.",
  },
  {
    materia: "informatica",
    tema: "Armazenamento e sistemas de arquivos",
    dificuldade: "dificil",
    enunciado:
      "Mil arquivos de 2 KB cada são gravados num disco com clusters de 4 KB. Quantos KB de espaço são desperdiçados no total?",
    opcoes: [
      "1.000",
      "4.000",
      "500",
      "8.000",
      "2.000",
    ],
    correta: 4,
    explicacao:
      "Cada arquivo ocupa um cluster inteiro, 4 KB, mas usa só 2 KB, desperdiçando 2 KB. Com mil arquivos, o desperdício é 1.000 × 2 = 2.000 KB. Conferindo, o espaço alocado é 4.000 KB, e o ocupado de fato, 2.000 KB.\n\n1.000 KB seria o desperdício de 500 arquivos. 4.000 KB é o espaço total alocado, e não o desperdiçado. 500 KB e 8.000 KB são, respectivamente, um quarto e quatro vezes o desperdício real de 2.000 KB.",
  },
  {
    materia: "informatica",
    tema: "Armazenamento e sistemas de arquivos",
    dificuldade: "dificil",
    enunciado:
      "Um backup de 600 GB é feito para um disco externo a 100 MB/s constantes, considerando 1 GB igual a 1.000 MB. Quanto tempo leva, em minutos?",
    opcoes: [
      "60",
      "6",
      "600",
      "10",
      "100",
    ],
    correta: 4,
    explicacao:
      "O backup tem 600 × 1.000 = 600.000 MB. A 100 MB/s, leva 600.000 ÷ 100 = 6.000 segundos, isto é, 6.000 ÷ 60 = 100 minutos. Conferindo, 100 minutos são 1 hora e 40 minutos.\n\n60 minutos corresponderia a 166,7 MB/s. 6 minutos resulta de dividir 600 por 100 sem converter gigabytes em megabytes nem segundos em minutos. 600 minutos corresponderia a 16,7 MB/s. E 10 minutos exigiria 1.000 MB/s de velocidade.",
  },
  {
    materia: "informatica",
    tema: "Armazenamento e sistemas de arquivos",
    dificuldade: "dificil",
    enunciado:
      "Quantos bits são necessários, no mínimo, para identificar cada um de 1.000 arquivos por um número distinto, usando código binário?",
    opcoes: [
      "8",
      "9",
      "16",
      "100",
      "10",
    ],
    correta: 4,
    explicacao:
      "Com n bits, é possível formar 2ⁿ números distintos. Como 2⁹ = 512, que é menor que 1.000, e 2¹⁰ = 1.024, que é maior, são necessários 10 bits. Conferindo, 10 bits permitem identificar até 1.024 arquivos.\n\n8 bits identificam só 256, e 9 bits, 512. 16 bits seriam mais do que o necessário, e 100 bits confundiria a quantidade de arquivos com a de bits. O mínimo é o menor n com 2ⁿ maior ou igual a 1.000.",
  },
  {
    materia: "informatica",
    tema: "Armazenamento e sistemas de arquivos",
    dificuldade: "dificil",
    enunciado:
      "Quantos valores diferentes podem ser representados com 2 bytes, isto é, com 16 bits?",
    opcoes: [
      "256",
      "16",
      "1.024",
      "32",
      "65.536",
    ],
    correta: 4,
    explicacao:
      "Com 16 bits, o número de combinações é 2¹⁶ = 65.536, de 0 a 65.535. Conferindo, 2 bytes formam 256 × 256 = 65.536 combinações. A regra geral é que n bits formam 2ⁿ combinações. Cada bit a mais dobra a quantidade de valores, por isso o número cresce muito rápido: 8 bits dão 256, e 16 bits dão 256 vezes 256.\n\n256 é o número de valores de um único byte. 16 é o número de bits, e não de combinações. 1.024 corresponde a 10 bits. E 32 é o dobro do número de bits, sem relação com as combinações.",
  },
  {
    materia: "informatica",
    tema: "Armazenamento e sistemas de arquivos",
    dificuldade: "dificil",
    enunciado:
      "Um disco vendido como 1 TB, com 1 TB igual a 1 trilhão de bytes, é mostrado pelo sistema operacional em GiB (1 GiB = 2³⁰ bytes). Qual valor aproximado aparece?",
    opcoes: [
      "≈ 1.000 GiB",
      "≈ 1.024 GiB",
      "≈ 900 GiB",
      "≈ 976 GiB",
      "≈ 931 GiB",
    ],
    correta: 4,
    explicacao:
      "O disco tem 10¹² bytes, e 1 GiB = 2³⁰ = 1.073.741.824 bytes. Dividindo, 10¹² ÷ 1.073.741.824 ≈ 931,3 GiB. Por isso o sistema mostra um valor menor que o anunciado pelo fabricante, que usa o padrão decimal.\n\n1.000 GiB ignora a diferença entre os padrões. 1.024 GiB trata 1 TB como binário. 900 GiB é uma aproximação grosseira. E 976 GiB resulta de dividir 1.000 por 1,024, isto é, de aplicar só um dos três fatores de 1.024 da conversão.",
  },
  {
    materia: "informatica",
    tema: "Armazenamento e sistemas de arquivos",
    dificuldade: "dificil",
    enunciado:
      "Na numeração hexadecimal, qual é o valor decimal do número FF?",
    opcoes: [
      "256",
      "15",
      "225",
      "16",
      "255",
    ],
    correta: 4,
    explicacao:
      "No sistema hexadecimal, F vale 15, e cada posição vale uma potência de 16: FF = 15 × 16 + 15 = 240 + 15 = 255. É o maior valor que cabe em um byte, 8 bits todos iguais a 1. A conversão usa a posição de cada dígito: o primeiro F, na posição das dezenas de base 16, vale 15 × 16, e o segundo, nas unidades, vale 15 × 1. É por isso que os códigos de cor usam pares hexadecimais de 00 a FF.\n\n256 é o número de valores de um byte, de 0 a 255. 15 é o valor de um único F. 225 é 15 × 15, e 16 é a base, e não o valor de FF.",
  },
  {
    materia: "informatica",
    tema: "Armazenamento e sistemas de arquivos",
    dificuldade: "dificil",
    enunciado:
      "Com discos de 4 TB em RAID 5, qual é o número mínimo de discos necessário para obter pelo menos 12 TB de capacidade útil?",
    opcoes: [
      "3",
      "5",
      "6",
      "2",
      "4",
    ],
    correta: 4,
    explicacao:
      "No RAID 5, a capacidade útil é (n − 1) × 4 TB. Para ter pelo menos 12 TB, (n − 1) × 4 ≥ 12, então n − 1 ≥ 3 e n ≥ 4. Com 4 discos, a capacidade é 3 × 4 = 12 TB. O raciocínio é sempre o mesmo: divide-se a capacidade desejada pela de cada disco para saber quantos discos de dados são necessários, e soma-se um, reservado à paridade. Aqui, 12 ÷ 4 = 3 discos de dados, mais 1 de paridade.\n\n3 discos dariam (3 − 1) × 4 = 8 TB, insuficientes. 5 e 6 discos dariam 16 e 20 TB, mais que o necessário. E 2 discos não formam um RAID 5, que exige no mínimo três.",
  },
  {
    materia: "informatica",
    tema: "Armazenamento e sistemas de arquivos",
    dificuldade: "media",
    enunciado:
      "Um arquivo de 600 MB é baixado por uma conexão estável de 100 megabits por segundo (Mbps). Quanto tempo leva o download?",
    opcoes: [
      "6 segundos",
      "60 segundos",
      "4,8 segundos",
      "480 segundos",
      "48 segundos",
    ],
    correta: 4,
    explicacao:
      "Primeiro converte-se o arquivo para megabits: 600 MB × 8 = 4.800 Mb. Depois divide-se pela velocidade: 4.800 ÷ 100 = 48 segundos. Conferindo, 100 Mbps equivalem a 12,5 MB/s, e 600 ÷ 12,5 = 48.\n\n6 segundos resulta de dividir 600 por 100 sem converter bytes em bits. 60 segundos trata 100 Mbps como 10 MB/s, dividindo por 10 em vez de 8. 4,8 segundos desloca a vírgula da conta. E 480 segundos corresponderia a uma conexão de 10 Mbps.",
  },
  {
    materia: "informatica",
    tema: "Armazenamento e sistemas de arquivos",
    dificuldade: "media",
    enunciado:
      "Qual é uma diferença importante entre um SSD e um disco rígido (HDD) tradicional?",
    opcoes: [
      "O SSD usa pratos magnéticos giratórios",
      "O HDD usa memória flash sem partes móveis",
      "O HDD é sempre mais rápido que o SSD",
      "O SSD perde os dados ao ser desligado",
      "O SSD não tem partes móveis",
    ],
    correta: 4,
    explicacao:
      "O SSD guarda os dados em memória flash, sem pratos nem cabeça de leitura em movimento. Por isso é mais silencioso, mais resistente a impactos e costuma ter acesso muito mais rápido que o HDD, que precisa girar os pratos e posicionar a cabeça.\n\nOs pratos magnéticos giratórios são do HDD, e não do SSD. A memória flash sem partes móveis é do SSD, e não do HDD. O HDD costuma ser mais lento, e não sempre mais rápido. E o SSD é não volátil: mantém os dados sem energia, ao contrário da memória RAM.",
  },
];
