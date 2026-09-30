/* Hardware: componentes e periféricos (49 questões) — informatica.

   Autorais, escritas por Claude (Anthropic) em 2026-09-30 seguindo as cinco
   regras de CONTINUAR-MATERIAS-POR-OBJETIVO.md. Nenhuma é atribuída a banca
   ou a prova real.

   Conferência do gabarito: 20 de 49 recalculadas por código que chega à
   resposta por outro caminho (ver .rascunho/questoes-objetivo/informatica__hardware-componentes-e-perifericos.mjs);
   29 conceituais aguardam a revisão independente listada no relatório.

   Montado por scripts/montar-questoes-objetivo.mjs; gabarito redistribuído
   por scripts/rebalancear-gabarito.mjs. Relatório em
   _relatorios/informatica__hardware-componentes-e-perifericos.json. */

export const questoes = [
  {
    materia: "informatica",
    tema: "Hardware: componentes e periféricos",
    dificuldade: "facil",
    enunciado:
      "Numa montagem de computador, qual destes dispositivos é classificado apenas como periférico de entrada?",
    opcoes: [
      "Teclado",
      "Impressora",
      "Monitor",
      "Caixa de som",
      "Projetor",
    ],
    correta: 0,
    explicacao:
      "Periféricos de entrada são os que enviam dados ao computador, como o teclado, o mouse, o scanner, a webcam e o microfone. O teclado só envia informações, os caracteres digitados, e não recebe nada de volta para exibir.\n\nImpressora, monitor, caixa de som e projetor são periféricos de saída, pois apresentam ao usuário o resultado do processamento, em papel, imagem ou som. Nenhum deles recebe dados do usuário como função principal.",
  },
  {
    materia: "informatica",
    tema: "Hardware: componentes e periféricos",
    dificuldade: "facil",
    enunciado:
      "Qual periférico transforma um documento digital em uma cópia impressa em papel?",
    opcoes: [
      "Impressora",
      "Scanner",
      "Webcam",
      "Teclado",
      "Microfone",
    ],
    correta: 0,
    explicacao:
      "A impressora é um periférico de saída que recebe o conteúdo digital e o reproduz em papel, por tinta, toner ou impacto. É a ferramenta usada para obter cópias físicas de textos e imagens que estão no computador.\n\nO scanner faz o caminho inverso, transformando papel em arquivo digital. A webcam captura imagens em movimento, o teclado envia caracteres e o microfone captura som. Os três são periféricos de entrada e não produzem cópias impressas.",
  },
  {
    materia: "informatica",
    tema: "Hardware: componentes e periféricos",
    dificuldade: "facil",
    enunciado:
      "Um técnico precisa trocar o componente que executa as instruções dos programas e coordena o trabalho das demais peças. Que componente é esse?",
    opcoes: [
      "Processador (CPU)",
      "Placa-mãe",
      "Fonte de alimentação",
      "Gabinete",
      "Cooler",
    ],
    correta: 0,
    explicacao:
      "O processador, ou CPU, é o componente que busca, interpreta e executa as instruções dos programas, e coordena o funcionamento dos outros componentes. É frequentemente chamado de cérebro do computador.\n\nA placa-mãe interliga os componentes, a fonte fornece energia, o gabinete abriga e protege as peças, e o cooler resfria o processador. Nenhum deles executa instruções de programas, apesar de serem indispensáveis para o computador funcionar.",
  },
  {
    materia: "informatica",
    tema: "Hardware: componentes e periféricos",
    dificuldade: "facil",
    enunciado:
      "Em que unidade costuma ser medida a frequência de clock de um processador atual?",
    opcoes: [
      "Gigahertz (GHz)",
      "Gigabyte (GB)",
      "Watt (W)",
      "Pixel por polegada (ppi)",
      "Megabit por segundo (Mbps)",
    ],
    correta: 0,
    explicacao:
      "A frequência de clock indica quantos ciclos por segundo o processador executa, e é medida em hertz. Nos processadores atuais, os valores são da ordem de bilhões de ciclos por segundo, por isso se usa o gigahertz, em que 1 GHz equivale a 1 bilhão de ciclos por segundo.\n\nGigabyte mede quantidade de dados, watt mede potência elétrica, pixels por polegada mede densidade de imagem e Mbps mede taxa de transferência de dados. Nenhuma dessas unidades indica a frequência do processador.",
  },
  {
    materia: "informatica",
    tema: "Hardware: componentes e periféricos",
    dificuldade: "facil",
    enunciado:
      "Qual componente interliga o processador, a memória e os demais dispositivos, permitindo que eles se comuniquem?",
    opcoes: [
      "Placa-mãe",
      "Fonte de alimentação",
      "Cooler",
      "Gabinete",
      "Mouse",
    ],
    correta: 0,
    explicacao:
      "A placa-mãe é a placa de circuito principal do computador: nela se encaixam o processador, a memória RAM, as placas de expansão e os conectores dos periféricos. Suas trilhas e barramentos permitem que todos esses componentes troquem dados entre si.\n\nA fonte alimenta as peças, o cooler dissipa calor, o gabinete as abriga e o mouse é um periférico de entrada. Nenhum deles exerce o papel de interligar os componentes internos entre si.",
  },
  {
    materia: "informatica",
    tema: "Hardware: componentes e periféricos",
    dificuldade: "facil",
    enunciado:
      "Qual tipo de unidade de armazenamento não tem partes móveis e grava os dados em chips de memória flash?",
    opcoes: [
      "SSD",
      "HD mecânico",
      "Fita magnética",
      "Disquete",
      "CD-ROM",
    ],
    correta: 0,
    explicacao:
      "O SSD, sigla de unidade de estado sólido, armazena os dados em chips de memória flash, sem disco giratório nem cabeça de leitura móvel. Por isso é mais rápido, silencioso e resistente a impactos que o HD mecânico.\n\nO HD mecânico usa pratos giratórios e cabeças de leitura. A fita magnética e o disquete gravam em mídia magnética, e o CD-ROM grava por sulcos lidos por laser, em disco giratório. Todos esses dependem de mídias ou mecanismos que não são chips de memória flash.",
  },
  {
    materia: "informatica",
    tema: "Hardware: componentes e periféricos",
    dificuldade: "facil",
    enunciado:
      "Qual equipamento mantém o computador ligado por alguns minutos durante uma queda de energia, graças a uma bateria interna?",
    opcoes: [
      "No-break",
      "Estabilizador",
      "Filtro de linha",
      "Cooler",
      "Fonte ATX",
    ],
    correta: 0,
    explicacao:
      "O no-break, também chamado de UPS, tem bateria interna que assume o fornecimento de energia quando a rede falha, dando tempo para salvar os trabalhos e desligar o computador com segurança. Ele também costuma condicionar a tensão.\n\nO estabilizador apenas corrige variações de tensão da rede, sem bateria. O filtro de linha oferece tomadas e proteção contra surtos. O cooler resfria componentes, e a fonte ATX converte a energia da tomada para as peças, mas não mantém a energia numa falta.",
  },
  {
    materia: "informatica",
    tema: "Hardware: componentes e periféricos",
    dificuldade: "facil",
    enunciado:
      "Qual porta transmite vídeo e áudio digitais por um único cabo e é comum em monitores e televisores modernos?",
    opcoes: [
      "HDMI",
      "VGA",
      "PS/2",
      "Serial",
      "RJ-45",
    ],
    correta: 0,
    explicacao:
      "A porta HDMI transmite, por um só cabo, vídeo digital de alta definição e áudio, e é o padrão em televisores, monitores, projetores e placas de vídeo. Por isso simplifica a ligação entre o computador e a tela.\n\nA VGA é uma conexão analógica de vídeo, sem áudio. A PS/2 liga teclados e mouses antigos. A serial transmite dados bit a bit entre equipamentos, e a RJ-45 conecta cabos de rede. Nenhuma delas leva vídeo e áudio digitais juntos.",
  },
  {
    materia: "informatica",
    tema: "Hardware: componentes e periféricos",
    dificuldade: "facil",
    enunciado:
      "Um usuário conecta um pen drive ao computador. Esse dispositivo é classificado como que tipo de periférico?",
    opcoes: [
      "De entrada e saída",
      "Somente de entrada",
      "Somente de saída",
      "De processamento",
      "De alimentação",
    ],
    correta: 0,
    explicacao:
      "O pen drive é um periférico de entrada e saída, pois o computador tanto lê os dados gravados nele, o que é entrada, quanto grava novos dados nele, o que é saída. Os discos rígidos, os cartões de memória e os SSDs externos também são assim.\n\nSomente entrada descreveria o teclado ou o mouse, e somente saída, o monitor ou a impressora. O pen drive não processa dados nem fornece energia: ele apenas armazena informações.",
  },
  {
    materia: "informatica",
    tema: "Hardware: componentes e periféricos",
    dificuldade: "facil",
    enunciado:
      "Qual componente converte a corrente alternada da tomada em corrente contínua, na tensão adequada para as peças do computador?",
    opcoes: [
      "Fonte de alimentação",
      "Placa-mãe",
      "Processador",
      "Memória RAM",
      "Placa de vídeo",
    ],
    correta: 0,
    explicacao:
      "A fonte de alimentação recebe a energia alternada da tomada e a converte em corrente contínua, em tensões como 3,3 V, 5 V e 12 V, que os componentes internos utilizam. Ela também protege o computador de variações simples da rede.\n\nA placa-mãe distribui a energia, mas não a converte. O processador, a memória RAM e a placa de vídeo consomem energia já convertida, e não a transformam. Por isso, a fonte é a peça correta para essa função.",
  },
  {
    materia: "informatica",
    tema: "Hardware: componentes e periféricos",
    dificuldade: "facil",
    enunciado:
      "Qual periférico captura o conteúdo de documentos impressos e o transforma em arquivos digitais?",
    opcoes: [
      "Impressora",
      "Scanner",
      "Projetor",
      "Caixa de som",
      "Plotter",
    ],
    correta: 1,
    explicacao:
      "O scanner é um periférico de entrada que lê documentos e fotografias em papel e os converte em imagem digital, que pode ser salva, editada ou submetida a reconhecimento de texto. Por isso é usado na digitalização de documentos.\n\nA impressora e o plotter são periféricos de saída que imprimem em papel. O projetor amplia imagens numa superfície, e a caixa de som reproduz áudio. Nenhum deles converte papel em arquivo digital.",
  },
  {
    materia: "informatica",
    tema: "Hardware: componentes e periféricos",
    dificuldade: "media",
    enunciado:
      "Um processador possui uma pequena memória extremamente rápida, dentro dele ou muito perto, que guarda os dados e instruções usados com mais frequência. Como ela se chama?",
    opcoes: [
      "Memória virtual",
      "Memória cache",
      "Memória ROM",
      "Cartão SD",
      "Memória de massa",
    ],
    correta: 1,
    explicacao:
      "A memória cache fica entre o processador e a RAM e é muito mais rápida que esta. Ao guardar os dados mais usados, evita idas frequentes à RAM e acelera o processamento. Costuma ser organizada em níveis, L1, L2 e L3, do menor e mais rápido ao maior e mais lento.\n\nA memória virtual usa parte do disco como extensão da RAM. A ROM guarda firmware e não é alterada no uso comum. O cartão SD e a memória de massa são formas de armazenamento permanente, muito mais lentas que a cache.",
  },
  {
    materia: "informatica",
    tema: "Hardware: componentes e periféricos",
    dificuldade: "media",
    enunciado:
      "Que firmware, gravado na placa-mãe, inicializa o hardware e passa o controle ao sistema operacional quando o computador é ligado?",
    opcoes: [
      "Driver de vídeo",
      "BIOS ou UEFI",
      "Kernel do Linux",
      "Gerenciador de tarefas",
      "Antivírus",
    ],
    correta: 1,
    explicacao:
      "O BIOS, e seu sucessor moderno UEFI, é o firmware gravado na placa-mãe que, ao ligar o computador, testa e inicializa o hardware e procura o dispositivo de inicialização, transferindo então o controle ao sistema operacional. Ele também guarda configurações como a ordem de boot.\n\nO driver de vídeo faz a placa gráfica funcionar já com o sistema em execução. O kernel é o núcleo do sistema operacional, carregado depois. O gerenciador de tarefas e o antivírus são programas que só rodam depois que o sistema foi iniciado.",
  },
  {
    materia: "informatica",
    tema: "Hardware: componentes e periféricos",
    dificuldade: "media",
    enunciado:
      "Qual é a principal vantagem de um processador com vários núcleos em relação a um de núcleo único, de mesma frequência?",
    opcoes: [
      "Aumentar a capacidade do disco",
      "Executar mais tarefas simultaneamente",
      "Dispensar a memória RAM",
      "Dobrar a resolução do monitor",
      "Substituir a placa de vídeo",
    ],
    correta: 1,
    explicacao:
      "Cada núcleo é uma unidade de processamento completa, então um processador com vários núcleos pode executar várias tarefas ou partes de um programa ao mesmo tempo, o que melhora o desempenho em multitarefa e em programas preparados para paralelismo.\n\nNúcleos não aumentam o espaço de armazenamento, não eliminam a necessidade de memória RAM, não alteram a resolução da tela e não substituem a placa de vídeo dedicada, cujo trabalho é gráfico.",
  },
  {
    materia: "informatica",
    tema: "Hardware: componentes e periféricos",
    dificuldade: "media",
    enunciado:
      "Qual componente é especializado em processar imagens e cálculos gráficos, aliviando o processador central em jogos e edição de vídeo?",
    opcoes: [
      "Memória cache",
      "Unidade de processamento gráfico (GPU)",
      "Fonte de alimentação",
      "Chipset de som",
      "Barramento USB",
    ],
    correta: 1,
    explicacao:
      "A GPU é um processador especializado em operações gráficas e em cálculos paralelos, como renderizar cenas 3D, aplicar efeitos e decodificar vídeos. Ao assumir esse trabalho, libera a CPU para outras tarefas, o que melhora o desempenho em jogos e edição de imagem.\n\nA memória cache acelera o acesso a dados do processador. A fonte fornece energia. O chipset de som processa áudio, e o barramento USB conecta periféricos. Nenhum deles é especializado em processamento gráfico.",
  },
  {
    materia: "informatica",
    tema: "Hardware: componentes e periféricos",
    dificuldade: "media",
    enunciado:
      "Em ordem do mais rápido para o mais lento, como se organizam os tipos de memória de um computador comum?",
    opcoes: [
      "Armazenamento, RAM, cache e registradores",
      "Registradores, cache, RAM e armazenamento",
      "RAM, registradores, armazenamento e cache",
      "Cache, armazenamento, RAM e registradores",
      "RAM, cache, armazenamento e registradores",
    ],
    correta: 1,
    explicacao:
      "Na hierarquia de memória, quanto mais perto do processador, mais rápida e menor é a memória: os registradores, dentro da CPU, são os mais rápidos; vem a cache, depois a memória RAM, e por fim o armazenamento, SSD ou HD, o mais lento e de maior capacidade.\n\nAs demais ordens colocam a RAM antes da cache, ou o armazenamento antes da RAM, ou os registradores depois das memórias mais lentas, o que inverte a relação entre proximidade do processador e velocidade.",
  },
  {
    materia: "informatica",
    tema: "Hardware: componentes e periféricos",
    dificuldade: "media",
    enunciado:
      "Um processador de 32 bits consegue endereçar, no máximo, 2 elevado a 32 bytes de memória. Sabendo que 1 GiB equivale a 2 elevado a 30 bytes, quantos GiB isso representa?",
    opcoes: [
      "2 GiB",
      "4 GiB",
      "8 GiB",
      "16 GiB",
      "32 GiB",
    ],
    correta: 1,
    explicacao:
      "Com 32 bits de endereço, o número de posições distintas é 2³² = 4.294.967.296 bytes. Dividindo por 2³⁰, o valor de 1 GiB, obtém-se 2² = 4 GiB. É por isso que sistemas de 32 bits reconhecem, em geral, cerca de 4 GB de RAM.\n\n2 GiB seria o limite com 31 bits. 8 GiB exigiria 33 bits, 16 GiB exigiria 34 bits, e 32 GiB exigiria 35 bits. Cada bit a mais no endereço dobra a memória endereçável.",
  },
  {
    materia: "informatica",
    tema: "Hardware: componentes e periféricos",
    dificuldade: "media",
    enunciado:
      "Uma imagem usa 24 bits por pixel, sendo 8 bits para cada cor primária. Quantas cores diferentes ela consegue representar?",
    opcoes: [
      "65.536",
      "16.777.216",
      "256",
      "16.000.000",
      "1.048.576",
    ],
    correta: 1,
    explicacao:
      "Com 24 bits por pixel, o número de combinações é 2²⁴ = 16.777.216, que é 256 × 256 × 256, pois cada uma das três cores primárias tem 256 níveis, de 0 a 255. Essa é a chamada cor verdadeira, ou true color.\n\n65.536 corresponde a 16 bits por pixel. 256 corresponde a 8 bits. 16.000.000 é uma aproximação arredondada, e não o valor exato. E 1.048.576 corresponde a 20 bits por pixel.",
  },
  {
    materia: "informatica",
    tema: "Hardware: componentes e periféricos",
    dificuldade: "media",
    enunciado:
      "Um monitor Full HD tem resolução de 1920 × 1080 pixels. Quantos pixels tem a tela inteira?",
    opcoes: [
      "2.000.000",
      "2.073.600",
      "3.000",
      "1.920.000",
      "4.147.200",
    ],
    correta: 1,
    explicacao:
      "O número de pixels é o produto das duas dimensões: 1920 × 1080 = 2.073.600, isto é, pouco mais de 2 megapixels. Por partes, 1920 × 1000 = 1.920.000 e 1920 × 80 = 153.600, somando 2.073.600.\n\n2.000.000 é uma aproximação arredondada. 3.000 é a soma das duas dimensões, e não o produto. 1.920.000 esquece as 80 linhas finais, e 4.147.200 é o dobro do valor correto, da resolução 2560 × 1620.",
  },
  {
    materia: "informatica",
    tema: "Hardware: componentes e periféricos",
    dificuldade: "media",
    enunciado:
      "Um monitor 4K UHD tem 3840 × 2160 pixels. Quantas vezes ele tem mais pixels que um monitor Full HD, de 1920 × 1080?",
    opcoes: [
      "2 vezes",
      "4 vezes",
      "8 vezes",
      "16 vezes",
      "3 vezes",
    ],
    correta: 1,
    explicacao:
      "A largura e a altura do 4K são o dobro das do Full HD, 3840 = 2 × 1920 e 2160 = 2 × 1080. Como os pixels formam um produto, o total fica multiplicado por 2 × 2 = 4. Conferindo, 3840 × 2160 = 8.294.400, e 1920 × 1080 = 2.073.600, e 8.294.400 ÷ 2.073.600 = 4.\n\n2 vezes seria o fator apenas na largura ou apenas na altura. 8 vezes e 16 vezes superestimam o ganho. E 3 vezes não sai do dobro em cada dimensão.",
  },
  {
    materia: "informatica",
    tema: "Hardware: componentes e periféricos",
    dificuldade: "media",
    enunciado:
      "Um arquivo de 1.200 MB é copiado para um SSD externo a uma velocidade constante de 60 MB/s. Quanto tempo leva a cópia?",
    opcoes: [
      "2 minutos",
      "12 segundos",
      "20 segundos",
      "72 segundos",
      "200 segundos",
    ],
    correta: 2,
    explicacao:
      "O tempo é o tamanho do arquivo dividido pela velocidade: 1.200 MB ÷ 60 MB/s = 20 segundos. Conferindo, em 20 segundos, a 60 MB por segundo, são copiados 20 × 60 = 1.200 MB.\n\n2 minutos, 120 segundos, exigiria uma velocidade de 10 MB/s. 12 segundos exigiria 100 MB/s. 72 segundos corresponde a um arquivo de 4.320 MB. E 200 segundos corresponde a um arquivo de 12.000 MB.",
  },
  {
    materia: "informatica",
    tema: "Hardware: componentes e periféricos",
    dificuldade: "media",
    enunciado:
      "Um processador de 3 GHz realiza quantos ciclos de clock por segundo?",
    opcoes: [
      "3 milhões",
      "300 milhões",
      "3 bilhões",
      "30 bilhões",
      "3 mil",
    ],
    correta: 2,
    explicacao:
      "O prefixo giga significa bilhão, então 3 GHz equivalem a 3 bilhões de ciclos por segundo, isto é, 3 × 10⁹ hertz. Em outras palavras, cada ciclo dura cerca de um terço de nanossegundo.\n\n3 milhões corresponde a 3 MHz, valor de processadores muito antigos. 300 milhões corresponde a 300 MHz. 30 bilhões é dez vezes o valor correto. E 3 mil corresponde a 3 kHz, frequência de ordem de grandeza sonora, e não de processadores.",
  },
  {
    materia: "informatica",
    tema: "Hardware: componentes e periféricos",
    dificuldade: "media",
    enunciado:
      "Qual é a duração aproximada de um ciclo de clock em um processador de 2 GHz?",
    opcoes: [
      "2 nanossegundos",
      "0,5 microssegundo",
      "0,5 nanossegundo",
      "5 nanossegundos",
      "0,2 nanossegundo",
    ],
    correta: 2,
    explicacao:
      "A duração de um ciclo é o inverso da frequência: 1 ÷ (2 × 10⁹ Hz) = 0,5 × 10⁻⁹ s = 0,5 nanossegundo. Conferindo, 2 bilhões de ciclos de 0,5 ns somam 1 segundo. Como 1 ns é um bilionésimo de segundo, 0,5 ns é meio bilionésimo.\n\n2 nanossegundos é o valor para uma frequência de 0,5 GHz. 0,5 microssegundo corresponde a 2 MHz. 5 nanossegundos corresponde a 200 MHz. E 0,2 nanossegundo corresponde a 5 GHz.",
  },
  {
    materia: "informatica",
    tema: "Hardware: componentes e periféricos",
    dificuldade: "media",
    enunciado:
      "Quando a memória RAM fica cheia, o sistema operacional pode usar parte do disco como extensão dela. Como se chama esse recurso?",
    opcoes: [
      "Memória cache",
      "Memória ROM",
      "Memória virtual",
      "Memória flash",
      "Memória de vídeo",
    ],
    correta: 2,
    explicacao:
      "A memória virtual permite ao sistema operacional usar uma área do disco, o arquivo de paginação, como extensão da RAM, movendo para lá dados pouco usados. Assim, os programas podem usar mais memória do que a RAM física oferece, ao custo de menor velocidade.\n\nA cache fica junto ao processador e é muito rápida. A ROM guarda firmware. A memória flash é uma tecnologia de armazenamento, como a dos SSDs. E a memória de vídeo pertence à placa gráfica e guarda imagens.",
  },
  {
    materia: "informatica",
    tema: "Hardware: componentes e periféricos",
    dificuldade: "media",
    enunciado:
      "Qual tecnologia de impressão usa toner, um tambor fotossensível e calor para fixar o texto no papel?",
    opcoes: [
      "Impressora a jato de tinta",
      "Impressora matricial",
      "Impressora a laser",
      "Impressora térmica",
      "Plotter de corte",
    ],
    correta: 2,
    explicacao:
      "Na impressora a laser, um feixe de luz forma a imagem eletrostática num tambor fotossensível, que atrai o toner, um pó fino. O papel recebe o toner e passa por um fusor, que o fixa por calor. O resultado é rápido e de boa definição de texto.\n\nA de jato de tinta lança gotículas de tinta líquida. A matricial bate agulhas numa fita. A térmica escurece papel sensível ao calor. E o plotter de corte recorta materiais, sem toner nem tambor.",
  },
  {
    materia: "informatica",
    tema: "Hardware: componentes e periféricos",
    dificuldade: "media",
    enunciado:
      "Qual impressora forma os caracteres por impacto de agulhas sobre uma fita, permitindo imprimir várias vias com papel carbono?",
    opcoes: [
      "A laser",
      "A jato de tinta",
      "Matricial",
      "Térmica",
      "Impressora 3D",
    ],
    correta: 2,
    explicacao:
      "A impressora matricial, também chamada de impacto, usa uma cabeça com agulhas que golpeiam uma fita entintada contra o papel. Como o golpe atravessa várias folhas, ela consegue imprimir formulários de várias vias com papel carbono, o que a mantém em uso em notas fiscais e guias.\n\nA laser usa toner e calor. A de jato de tinta lança gotas de tinta. A térmica aquece papel especial. E a impressora 3D deposita material em camadas para formar objetos, e não imprime caracteres em papel por impacto.",
  },
  {
    materia: "informatica",
    tema: "Hardware: componentes e periféricos",
    dificuldade: "media",
    enunciado:
      "Um monitor com tela sensível ao toque é classificado como que tipo de periférico?",
    opcoes: [
      "Somente de saída",
      "Somente de entrada",
      "De entrada e saída",
      "De armazenamento",
      "De rede",
    ],
    correta: 2,
    explicacao:
      "Um monitor touchscreen exibe imagens, o que é função de saída, e também recebe os toques do usuário, o que é função de entrada. Por reunir as duas funções, é um periférico de entrada e saída.\n\nUm monitor comum seria somente de saída, e um teclado ou mouse, somente de entrada. A tela sensível ao toque não armazena dados permanentemente, e não tem a função de comunicação em rede.",
  },
  {
    materia: "informatica",
    tema: "Hardware: componentes e periféricos",
    dificuldade: "media",
    enunciado:
      "Um computador tem 4 slots de memória ocupados por três pentes de 4 GB e um pente de 8 GB. Qual é a memória total instalada?",
    opcoes: [
      "16 GB",
      "24 GB",
      "20 GB",
      "12 GB",
      "32 GB",
    ],
    correta: 2,
    explicacao:
      "A memória total é a soma dos pentes: 3 × 4 GB + 8 GB = 12 GB + 8 GB = 20 GB. Conferindo, 4 + 4 + 4 + 8 = 20. Em problemas desse tipo, basta somar as capacidades dos módulos, mesmo que sejam diferentes, pois a memória total é a soma delas.\n\n16 GB seria o total de quatro pentes de 4 GB. 24 GB soma um pente de 4 GB a mais. 12 GB esquece o pente de 8 GB. E 32 GB supõe quatro pentes de 8 GB, o que não corresponde ao enunciado.",
  },
  {
    materia: "informatica",
    tema: "Hardware: componentes e periféricos",
    dificuldade: "media",
    enunciado:
      "Qual conector costuma ser usado para ligar uma placa de vídeo dedicada à placa-mãe?",
    opcoes: [
      "Porta USB",
      "Conector RJ-45",
      "Slot PCI Express",
      "Entrada P2",
      "Porta serial",
    ],
    correta: 2,
    explicacao:
      "As placas de vídeo dedicadas, e outras placas de expansão de alto desempenho, se encaixam num slot PCI Express da placa-mãe, que oferece grande largura de banda para a troca de dados com o processador e a memória.\n\nA porta USB conecta periféricos externos, como pen drives e teclados. O RJ-45 é o conector de cabos de rede. A entrada P2 recebe fones e microfones. E a porta serial transmite dados bit a bit a equipamentos mais antigos, sem a banda necessária para uma placa gráfica.",
  },
  {
    materia: "informatica",
    tema: "Hardware: componentes e periféricos",
    dificuldade: "media",
    enunciado:
      "Qual equipamento corrige variações de tensão da rede elétrica, mas não mantém o computador ligado durante uma queda de energia?",
    opcoes: [
      "No-break",
      "Bateria de notebook",
      "Estabilizador",
      "Fonte ATX",
      "Cooler",
    ],
    correta: 2,
    explicacao:
      "O estabilizador de tensão regula a tensão de saída dentro de uma faixa segura, protegendo o equipamento de subidas e quedas moderadas da rede, mas não tem bateria, então o computador desliga assim que a energia falta.\n\nO no-break tem bateria e mantém o equipamento ligado por algum tempo. A bateria de um notebook também mantém o funcionamento. A fonte ATX converte corrente alternada em contínua, e o cooler apenas resfria componentes.",
  },
  {
    materia: "informatica",
    tema: "Hardware: componentes e periféricos",
    dificuldade: "media",
    enunciado:
      "Como se chama a prática de aumentar a frequência de um processador acima da especificada pelo fabricante, o que eleva o calor gerado?",
    opcoes: [
      "Downgrade",
      "Backup",
      "Formatação",
      "Overclock",
      "Desfragmentação",
    ],
    correta: 3,
    explicacao:
      "Overclock é a prática de fazer o processador, ou outro componente, operar numa frequência superior à original, ganhando desempenho ao custo de maior consumo, maior aquecimento e possível redução da vida útil, o que em geral exige resfriamento reforçado.\n\nDowngrade é trocar por uma versão mais antiga ou inferior. Backup é a cópia de segurança de dados. Formatação prepara uma unidade de armazenamento. E desfragmentação reorganiza arquivos em discos mecânicos. Nenhuma delas eleva a frequência do processador.",
  },
  {
    materia: "informatica",
    tema: "Hardware: componentes e periféricos",
    dificuldade: "media",
    enunciado:
      "Qual é a função do cooler instalado sobre o processador?",
    opcoes: [
      "Aumentar a memória RAM",
      "Converter a corrente",
      "Guardar dados permanentes",
      "Dissipar o calor gerado",
      "Ampliar o sinal de rede",
    ],
    correta: 3,
    explicacao:
      "O cooler combina um dissipador metálico, que absorve o calor do processador, e um ventilador, que o expulsa, mantendo a temperatura em níveis seguros. Sem ele, o processador superaqueceria e reduziria o desempenho ou desligaria o computador.\n\nAumentar a memória RAM exige instalar pentes. A conversão de corrente é papel da fonte. Guardar dados permanentes cabe a discos e SSDs. E ampliar o sinal de rede cabe a antenas e roteadores, nada disso é feito pelo cooler.",
  },
  {
    materia: "informatica",
    tema: "Hardware: componentes e periféricos",
    dificuldade: "media",
    enunciado:
      "Os smartphones usam, em geral, processadores de qual arquitetura, escolhida principalmente pelo baixo consumo de energia?",
    opcoes: [
      "x86 de 16 bits",
      "Itanium",
      "Z80",
      "ARM",
      "Mainframe IBM",
    ],
    correta: 3,
    explicacao:
      "A arquitetura ARM é a dominante em smartphones e tablets, porque seus processadores entregam bom desempenho com baixo consumo de energia e pouco calor, características essenciais para equipamentos alimentados por bateria.\n\nA x86 de 16 bits é uma arquitetura antiga de computadores pessoais. O Itanium foi uma linha de servidores da Intel, hoje descontinuada. O Z80 é um processador de 8 bits dos anos 1970. E os mainframes IBM são computadores de grande porte, e não processadores de celulares.",
  },
  {
    materia: "informatica",
    tema: "Hardware: componentes e periféricos",
    dificuldade: "media",
    enunciado:
      "Qual destes itens é um exemplo de memória secundária, isto é, de armazenamento permanente de massa?",
    opcoes: [
      "Registrador",
      "Memória cache",
      "Memória RAM",
      "Disco rígido",
      "Memória de vídeo",
    ],
    correta: 3,
    explicacao:
      "A memória secundária guarda dados de forma permanente, e mantém o conteúdo sem energia. O disco rígido, o SSD, o pen drive e o cartão de memória são exemplos, e têm grande capacidade, mas menor velocidade que as memórias primárias.\n\nO registrador, a cache e a RAM são memórias primárias, mais rápidas, de menor capacidade, e as duas últimas perdem o conteúdo sem energia. A memória de vídeo também é volátil, e guarda as imagens a serem exibidas.",
  },
  {
    materia: "informatica",
    tema: "Hardware: componentes e periféricos",
    dificuldade: "media",
    enunciado:
      "Qual porta é usada para ligar um computador a uma rede cabeada, por meio de cabo de par trançado?",
    opcoes: [
      "HDMI",
      "VGA",
      "P2",
      "RJ-45",
      "PS/2",
    ],
    correta: 3,
    explicacao:
      "A porta RJ-45 é o conector dos cabos de rede de par trançado usados em redes Ethernet, e permite ligar o computador a um roteador, switch ou modem por cabo. Seus oito contatos acomodam os quatro pares do cabo.\n\nA HDMI transmite vídeo e áudio digitais. A VGA leva vídeo analógico. A P2 é a entrada de fones e microfones. E a PS/2 liga teclados e mouses antigos. Nenhuma delas se destina à conexão de redes.",
  },
  {
    materia: "informatica",
    tema: "Hardware: componentes e periféricos",
    dificuldade: "media",
    enunciado:
      "Qual é o papel da placa de rede (NIC) em um computador?",
    opcoes: [
      "Converter a energia elétrica",
      "Processar imagens 3D",
      "Guardar o sistema",
      "Permitir a conexão à rede",
      "Reproduzir o áudio",
    ],
    correta: 3,
    explicacao:
      "A placa de rede, ou NIC, é o componente que permite ao computador se conectar a uma rede, por cabo ou sem fio, enviando e recebendo dados em pacotes. Em notebooks e placas-mãe modernas, costuma vir integrada.\n\nConverter energia é função da fonte de alimentação. Processar imagens 3D é função da GPU. Guardar o sistema operacional é tarefa do disco ou SSD. E reproduzir áudio cabe à placa de som e às caixas, e não à placa de rede.",
  },
  {
    materia: "informatica",
    tema: "Hardware: componentes e periféricos",
    dificuldade: "media",
    enunciado:
      "Um processador de 2,5 GHz executa uma instrução por ciclo de clock. Quantas instruções ele executa em 2 milissegundos?",
    opcoes: [
      "5 bilhões",
      "500 mil",
      "50 milhões",
      "5 milhões",
      "2,5 milhões",
    ],
    correta: 3,
    explicacao:
      "Por segundo, o processador executa 2,5 × 10⁹ instruções. Em 2 ms, que são 0,002 s, o número é 2,5 × 10⁹ × 0,002 = 5 × 10⁶, isto é, 5 milhões. Conferindo, em 1 ms seriam 2,5 milhões, e em 2 ms, o dobro.\n\n5 bilhões corresponderia a 2 segundos. 500 mil corresponderia a 0,2 ms. 50 milhões corresponderia a 20 ms. E 2,5 milhões corresponde a 1 ms, e não a 2 ms.",
  },
  {
    materia: "informatica",
    tema: "Hardware: componentes e periféricos",
    dificuldade: "media",
    enunciado:
      "Um disco de 500 GB, na notação do fabricante, em que 1 GB equivale a 1 bilhão de bytes, tem quantos bytes?",
    opcoes: [
      "536.870.912.000",
      "500.000.000",
      "5.000.000.000",
      "500.000.000.000",
      "50.000.000.000",
    ],
    correta: 3,
    explicacao:
      "Na notação decimal dos fabricantes, 1 GB = 10⁹ bytes, então 500 GB = 500 × 10⁹ = 500.000.000.000 bytes. Por isso o sistema operacional, que muitas vezes usa 1 GiB = 2³⁰ bytes, mostra um valor menor, cerca de 465 GiB.\n\n536.870.912.000 seria 500 GiB, na notação binária, 500 × 2³⁰. 500.000.000 tem três zeros a menos, e corresponde a 500 MB. 5.000.000.000 e 50.000.000.000 têm dois e um zero a menos que o valor correto.",
  },
  {
    materia: "informatica",
    tema: "Hardware: componentes e periféricos",
    dificuldade: "media",
    enunciado:
      "Que componente guarda as configurações básicas de hardware e mantém a hora do computador com ele desligado, graças a uma pequena bateria?",
    opcoes: [
      "Memória RAM",
      "Cache L3",
      "Disco rígido",
      "CMOS com bateria",
      "Fonte ATX",
    ],
    correta: 3,
    explicacao:
      "A memória CMOS, alimentada por uma pequena bateria na placa-mãe, guarda as configurações do BIOS ou UEFI e mantém o relógio funcionando mesmo com o computador desligado e desconectado da tomada. Quando a bateria se esgota, a hora e a data costumam se perder.\n\nA memória RAM perde o conteúdo sem energia. A cache L3 é volátil e fica no processador. O disco rígido guarda arquivos, mas não o relógio da placa-mãe. E a fonte ATX só fornece energia quando ligada à tomada.",
  },
  {
    materia: "informatica",
    tema: "Hardware: componentes e periféricos",
    dificuldade: "dificil",
    enunciado:
      "Um vídeo sem compressão tem 1920 × 1080 pixels, 24 bits por pixel e 30 quadros por segundo. Qual é a taxa de dados, em megabytes decimais por segundo, aproximadamente?",
    opcoes: [
      "≈ 62 MB/s",
      "≈ 1.493 MB/s",
      "≈ 23 MB/s",
      "≈ 187 MB/s",
      "≈ 6,2 MB/s",
    ],
    correta: 3,
    explicacao:
      "Cada pixel ocupa 24 bits, isto é, 3 bytes, e cada quadro tem 1920 × 1080 = 2.073.600 pixels, o que dá 6.220.800 bytes por quadro. A 30 quadros por segundo, a taxa é 6.220.800 × 30 = 186.624.000 bytes por segundo, cerca de 187 MB/s.\n\n62 MB/s corresponde a 10 quadros por segundo. 1.493 MB/s usa bits no lugar de bytes por pixel. 23 MB/s divide o valor por 8 uma vez a mais. E 6,2 MB/s é o tamanho de um único quadro, e não a taxa por segundo.",
  },
  {
    materia: "informatica",
    tema: "Hardware: componentes e periféricos",
    dificuldade: "dificil",
    enunciado:
      "Quantos endereços de memória distintos podem ser formados com 16 bits?",
    opcoes: [
      "16",
      "256",
      "1.024",
      "32.768",
      "65.536",
    ],
    correta: 4,
    explicacao:
      "Cada bit tem dois estados, então com 16 bits há 2¹⁶ = 65.536 combinações, isto é, 65.536 endereços distintos. Conferindo, 2⁸ = 256, e 256 × 256 = 65.536. Esse crescimento é exponencial.\n\n16 é o número de bits, e não o de combinações. 256 corresponde a 8 bits. 1.024 corresponde a 10 bits. E 32.768 é 2¹⁵, valor que corresponde a 15 bits, e metade do resultado correto.",
  },
  {
    materia: "informatica",
    tema: "Hardware: componentes e periféricos",
    dificuldade: "dificil",
    enunciado:
      "Num sistema, o acerto na memória cache ocorre em 90% dos acessos e leva 2 ns. Nos demais acessos, o dado é obtido da RAM e o tempo total é de 52 ns. Qual é o tempo médio de acesso?",
    opcoes: [
      "2 ns",
      "52 ns",
      "27 ns",
      "5,2 ns",
      "7 ns",
    ],
    correta: 4,
    explicacao:
      "O tempo médio é a média ponderada pelas frequências: 0,9 × 2 + 0,1 × 52 = 1,8 + 5,2 = 7 ns. Isso mostra como uma cache com alta taxa de acerto reduz o tempo médio, que fica bem mais perto do tempo da cache que do da RAM.\n\n2 ns seria o tempo se todos os acessos acertassem. 52 ns seria o tempo se todos errassem. 27 ns é a média simples entre 2 e 52, sem considerar as taxas. E 5,2 ns é só a contribuição dos erros, sem somar a dos acertos.",
  },
  {
    materia: "informatica",
    tema: "Hardware: componentes e periféricos",
    dificuldade: "dificil",
    enunciado:
      "Uma fonte de alimentação tem eficiência de 80% e fornece 400 W aos componentes. Quantos watts ela consome da tomada?",
    opcoes: [
      "320 W",
      "400 W",
      "480 W",
      "800 W",
      "500 W",
    ],
    correta: 4,
    explicacao:
      "A eficiência é a razão entre a potência entregue e a consumida, então a potência consumida é 400 ÷ 0,8 = 500 W. Conferindo, 80% de 500 W é 400 W, e os 100 W restantes são dissipados em calor.\n\n320 W é 80% de 400 W, calculando a eficiência sobre o valor errado. 400 W supõe uma eficiência de 100%. 480 W é 400 W mais 20%, o erro de aplicar a porcentagem sobre o valor entregue. E 800 W corresponderia a uma eficiência de 50%.",
  },
  {
    materia: "informatica",
    tema: "Hardware: componentes e periféricos",
    dificuldade: "dificil",
    enunciado:
      "Uma interface SATA III transmite, teoricamente, 6 gigabits por segundo. Ignorando a codificação, quantos megabytes por segundo, decimais, isso representa?",
    opcoes: [
      "6.000 MB/s",
      "48.000 MB/s",
      "60 MB/s",
      "75 MB/s",
      "750 MB/s",
    ],
    correta: 4,
    explicacao:
      "Em 6 Gbps há 6.000 megabits por segundo, e como cada byte tem 8 bits, dividem-se por 8: 6.000 ÷ 8 = 750 MB/s. É um limite teórico, e na prática a codificação reduz o valor útil a cerca de 600 MB/s.\n\n6.000 MB/s esquece de dividir por 8, tratando bits como bytes. 48.000 MB/s multiplica por 8 em vez de dividir. 60 MB/s e 75 MB/s erram por uma ou duas casas decimais na conversão.",
  },
  {
    materia: "informatica",
    tema: "Hardware: componentes e periféricos",
    dificuldade: "dificil",
    enunciado:
      "Quantas fotos de 4 MB cabem num cartão de memória de 64 GB, considerando 1 GB igual a 1.000 MB?",
    opcoes: [
      "1.600",
      "16",
      "160.000",
      "16.384",
      "16.000",
    ],
    correta: 4,
    explicacao:
      "O cartão tem 64 × 1.000 = 64.000 MB, e cada foto ocupa 4 MB, então cabem 64.000 ÷ 4 = 16.000 fotos. Conferindo, 16.000 × 4 MB = 64.000 MB.\n\n1.600 e 160.000 erram por uma casa decimal na divisão. 16 esquece de converter GB em MB. E 16.384 é o resultado da conta em base binária, 64 × 1.024 ÷ 4, que não segue a convenção de 1 GB igual a 1.000 MB pedida no enunciado.",
  },
  {
    materia: "informatica",
    tema: "Hardware: componentes e periféricos",
    dificuldade: "dificil",
    enunciado:
      "Quantas vezes a quantidade de endereços possíveis com 64 bits é maior que a possível com 32 bits?",
    opcoes: [
      "2 vezes",
      "32 vezes",
      "64 vezes",
      "1.024 vezes",
      "4.294.967.296 vezes",
    ],
    correta: 4,
    explicacao:
      "Com 64 bits há 2⁶⁴ endereços, e com 32 bits, 2³². A razão é 2⁶⁴ ÷ 2³² = 2³² = 4.294.967.296, isto é, mais de 4 bilhões de vezes. Cada bit a mais dobra o total, e são 32 bits a mais.\n\n2 vezes é o efeito de um único bit a mais. 32 vezes e 64 vezes confundem o número de bits com a razão. E 1.024 vezes seria o efeito de 10 bits a mais, e não de 32.",
  },
  {
    materia: "informatica",
    tema: "Hardware: componentes e periféricos",
    dificuldade: "dificil",
    enunciado:
      "Quantos pixels tem uma tela com resolução de 1366 × 768?",
    opcoes: [
      "1.000.000",
      "2.073.600",
      "1.366.768",
      "2.098.176",
      "1.049.088",
    ],
    correta: 4,
    explicacao:
      "O número de pixels é 1366 × 768. Por partes, 1366 × 700 = 956.200 e 1366 × 68 = 92.888, e 956.200 + 92.888 = 1.049.088, pouco mais de 1 megapixel. Conferindo, 1.049.088 ÷ 768 = 1.366.\n\n1.000.000 é uma aproximação arredondada. 2.073.600 é o número de pixels de uma tela Full HD. 1.366.768 apenas junta os algarismos das duas dimensões. E 2.098.176 é o dobro do valor correto.",
  },
  {
    materia: "informatica",
    tema: "Hardware: componentes e periféricos",
    dificuldade: "dificil",
    enunciado:
      "Um disco rígido gira a 7.200 rotações por minuto. Quanto tempo leva, em média, meia volta, que é a latência rotacional média?",
    opcoes: [
      "≈ 8,33 ms",
      "≈ 7,2 ms",
      "≈ 0,14 ms",
      "≈ 12,5 ms",
      "≈ 4,17 ms",
    ],
    correta: 4,
    explicacao:
      "A 7.200 rpm, o disco dá 120 voltas por segundo, então uma volta leva 1 ÷ 120 ≈ 8,33 ms, e meia volta, a latência média, leva cerca de 4,17 ms. Conferindo, 60 s ÷ 7.200 = 8,33 ms por volta.\n\n8,33 ms é o tempo de uma volta inteira, e não de meia. 7,2 ms apenas reaproveita o número de rotações. 0,14 ms divide por um valor errado. E 12,5 ms corresponde a uma volta inteira de um disco a 4.800 rpm.",
  },
  {
    materia: "informatica",
    tema: "Hardware: componentes e periféricos",
    dificuldade: "dificil",
    enunciado:
      "Um computador de 250 W fica ligado 8 horas por dia durante 30 dias, sempre consumindo 250 W. Qual é o consumo mensal, em kWh?",
    opcoes: [
      "2 kWh",
      "7,5 kWh",
      "600 kWh",
      "60 Wh",
      "60 kWh",
    ],
    correta: 4,
    explicacao:
      "A energia é a potência multiplicada pelo tempo: 250 W × 8 h × 30 = 60.000 Wh, que é 60 kWh, já que 1 kWh é 1.000 Wh. Conferindo, por dia são 2 kWh, e em 30 dias, 60 kWh.\n\n2 kWh é o consumo de um único dia. 7,5 kWh é 250 × 30 ÷ 1.000, esquecendo as horas. 600 kWh erra por um fator 10. E 60 Wh tem a ordem de grandeza errada, pois 60 Wh seria menos de 1 hora de uso.",
  },
];
