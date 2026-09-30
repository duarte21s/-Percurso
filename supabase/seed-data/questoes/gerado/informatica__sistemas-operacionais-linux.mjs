/* Sistemas operacionais: Linux (49 questões) — informatica.

   Autorais, escritas por Claude (Anthropic) em 2026-09-30 seguindo as cinco
   regras de CONTINUAR-MATERIAS-POR-OBJETIVO.md. Nenhuma é atribuída a banca
   ou a prova real.

   Conferência do gabarito: 15 de 49 recalculadas por código que chega à
   resposta por outro caminho (ver .rascunho/questoes-objetivo/informatica__sistemas-operacionais-linux.mjs);
   34 conceituais aguardam a revisão independente listada no relatório.

   Montado por scripts/montar-questoes-objetivo.mjs; gabarito redistribuído
   por scripts/rebalancear-gabarito.mjs. Relatório em
   _relatorios/informatica__sistemas-operacionais-linux.json. */

export const questoes = [
  {
    materia: "informatica",
    tema: "Sistemas operacionais: Linux",
    dificuldade: "facil",
    enunciado:
      "Num terminal Linux, que comando mostra o caminho completo do diretório em que o usuário está no momento?",
    opcoes: [
      "pwd",
      "ls",
      "cd",
      "mkdir",
      "rm",
    ],
    correta: 0,
    explicacao:
      "O comando pwd, de print working directory, exibe o caminho completo do diretório atual, como /home/ana/documentos. É útil para saber onde o terminal está antes de criar, mover ou apagar arquivos.\n\nO ls lista o conteúdo do diretório. O cd muda de diretório. O mkdir cria um novo diretório. E o rm remove arquivos. Nenhum desses mostra o caminho completo do local atual.",
  },
  {
    materia: "informatica",
    tema: "Sistemas operacionais: Linux",
    dificuldade: "facil",
    enunciado:
      "Qual comando é usado no Linux para mudar o diretório de trabalho no terminal?",
    opcoes: [
      "cd",
      "pwd",
      "ls",
      "mv",
      "cp",
    ],
    correta: 0,
    explicacao:
      "O comando cd, de change directory, muda o diretório atual do terminal. Por exemplo, cd /etc entra no diretório de configurações, e cd .. sobe um nível, para o diretório pai. Sem argumentos, cd leva ao diretório pessoal do usuário.\n\nO pwd só mostra o local atual. O ls lista o conteúdo. O mv move ou renomeia. E o cp copia arquivos. Nenhum deles altera o diretório de trabalho do terminal.",
  },
  {
    materia: "informatica",
    tema: "Sistemas operacionais: Linux",
    dificuldade: "facil",
    enunciado:
      "Qual comando cria um novo diretório no Linux?",
    opcoes: [
      "mkdir",
      "rmdir",
      "touch",
      "cat",
      "chmod",
    ],
    correta: 0,
    explicacao:
      "O comando mkdir, de make directory, cria um ou mais diretórios. Por exemplo, mkdir projetos cria a pasta projetos no diretório atual, e mkdir -p a/b/c cria também os diretórios intermediários.\n\nO rmdir remove diretórios vazios. O touch cria um arquivo vazio ou atualiza a data de um arquivo. O cat exibe o conteúdo de arquivos. E o chmod altera permissões. Nenhum deles cria diretórios.",
  },
  {
    materia: "informatica",
    tema: "Sistemas operacionais: Linux",
    dificuldade: "facil",
    enunciado:
      "Qual comando remove arquivos no Linux, sem enviá-los a uma lixeira?",
    opcoes: [
      "rm",
      "mv",
      "cp",
      "ls",
      "cat",
    ],
    correta: 0,
    explicacao:
      "O comando rm, de remove, apaga arquivos de forma definitiva: no terminal, não há lixeira, então o conteúdo não volta pelos meios comuns. Para apagar diretórios e seu conteúdo, usa-se rm -r, e é preciso cuidado com essa opção.\n\nO mv move ou renomeia. O cp copia. O ls lista o conteúdo de um diretório. E o cat exibe arquivos. Nenhum deles remove arquivos.",
  },
  {
    materia: "informatica",
    tema: "Sistemas operacionais: Linux",
    dificuldade: "facil",
    enunciado:
      "Qual comando copia um arquivo para outro local no Linux, mantendo o original?",
    opcoes: [
      "cp",
      "mv",
      "rm",
      "touch",
      "pwd",
    ],
    correta: 0,
    explicacao:
      "O comando cp copia arquivos: cp a.txt b.txt cria b.txt com o mesmo conteúdo, e o original permanece. Para copiar diretórios, usa-se cp -r. Para copiar uma pasta inteira, usa-se cp -r.\n\nO mv move ou renomeia, e o original deixa de existir no local de origem. O rm apaga. O touch cria um arquivo vazio. E o pwd mostra o diretório atual. Só o cp produz uma cópia mantendo o original.",
  },
  {
    materia: "informatica",
    tema: "Sistemas operacionais: Linux",
    dificuldade: "facil",
    enunciado:
      "Qual comando é usado para mover um arquivo de pasta ou renomeá-lo no Linux?",
    opcoes: [
      "mv",
      "cp",
      "rm",
      "cat",
      "ln",
    ],
    correta: 0,
    explicacao:
      "O comando mv, de move, move arquivos e diretórios para outro local e também serve para renomear, pois renomear é mover para um novo nome: mv velho.txt novo.txt. No Linux, não existe um comando separado só para renomear.\n\nO cp copia, sem apagar o original. O rm remove. O cat exibe conteúdo. E o ln cria links entre arquivos. Nenhum desses faz a mudança de local ou de nome como o mv.",
  },
  {
    materia: "informatica",
    tema: "Sistemas operacionais: Linux",
    dificuldade: "facil",
    enunciado:
      "Qual comando exibe o conteúdo de um arquivo de texto diretamente no terminal?",
    opcoes: [
      "cat",
      "mkdir",
      "chmod",
      "cd",
      "sudo",
    ],
    correta: 0,
    explicacao:
      "O comando cat exibe o conteúdo de um ou mais arquivos no terminal, por exemplo, cat notas.txt. O nome vem de concatenate, pois também pode juntar vários arquivos numa só saída.\n\nO mkdir cria diretórios. O chmod altera permissões. O cd muda de diretório. E o sudo executa comandos com privilégios de administrador. Nenhum deles mostra o conteúdo de um arquivo.",
  },
  {
    materia: "informatica",
    tema: "Sistemas operacionais: Linux",
    dificuldade: "facil",
    enunciado:
      "Para que serve o comando sudo, muito usado em terminais Linux de administração?",
    opcoes: [
      "Executar um comando com privilégios de administrador",
      "Apagar todos os arquivos do usuário",
      "Listar os arquivos ocultos",
      "Mostrar a data e a hora",
      "Desligar o terminal",
    ],
    correta: 0,
    explicacao:
      "O sudo permite executar um comando com os privilégios do superusuário, o administrador do sistema, desde que o usuário esteja autorizado. É usado, por exemplo, para instalar programas ou alterar arquivos de configuração do sistema.\n\nEle não apaga arquivos por si só, não lista arquivos ocultos, não mostra data e hora e não fecha o terminal. Seu papel é apenas elevar o privilégio do comando que vem depois dele.",
  },
  {
    materia: "informatica",
    tema: "Sistemas operacionais: Linux",
    dificuldade: "facil",
    enunciado:
      "Como se chama o diretório que fica no topo da hierarquia de arquivos do Linux, representado por uma barra?",
    opcoes: [
      "Raiz (/)",
      "Home (/home)",
      "Usr (/usr)",
      "Temporário (/tmp)",
      "Dispositivos (/dev)",
    ],
    correta: 0,
    explicacao:
      "O diretório raiz, representado por /, é o topo da hierarquia: todos os outros diretórios e arquivos estão dentro dele, em qualquer distribuição Linux.\n\n/home guarda as pastas pessoais dos usuários. /usr contém a maior parte dos programas e bibliotecas. /tmp guarda arquivos temporários. E /dev contém os arquivos que representam dispositivos. Todos são subdiretórios da raiz, e não o topo da hierarquia.",
  },
  {
    materia: "informatica",
    tema: "Sistemas operacionais: Linux",
    dificuldade: "facil",
    enunciado:
      "Em qual diretório ficam, normalmente, as pastas pessoais dos usuários de um sistema Linux?",
    opcoes: [
      "/home",
      "/etc",
      "/bin",
      "/var",
      "/dev",
    ],
    correta: 0,
    explicacao:
      "O diretório /home guarda as pastas pessoais dos usuários, como /home/ana e /home/bruno, onde ficam documentos, downloads e as configurações individuais de cada pessoa.\n\nO /etc guarda arquivos de configuração do sistema. O /bin guarda comandos essenciais. O /var guarda dados variáveis, como logs. E o /dev contém arquivos de dispositivos. Nenhum deles guarda as pastas pessoais dos usuários.",
  },
  {
    materia: "informatica",
    tema: "Sistemas operacionais: Linux",
    dificuldade: "facil",
    enunciado:
      "Qual comando exibe o manual de uso de outro comando no terminal Linux, por exemplo man ls?",
    opcoes: [
      "help-me",
      "man",
      "docs",
      "info-all",
      "readme",
    ],
    correta: 1,
    explicacao:
      "O comando man, de manual, abre a página de manual do comando informado, com descrição, opções e exemplos. Por exemplo, man ls mostra como usar o ls. Para sair, basta pressionar a tecla q.\n\nAs outras opções, como help-me, docs, info-all e readme, não são comandos padrão do Linux para abrir o manual. O comando man é o caminho clássico para consultar a documentação no terminal.",
  },
  {
    materia: "informatica",
    tema: "Sistemas operacionais: Linux",
    dificuldade: "media",
    enunciado:
      "Qual comando é usado para procurar linhas que contêm um determinado texto dentro de um arquivo?",
    opcoes: [
      "find",
      "grep",
      "cat",
      "sort",
      "wc",
    ],
    correta: 1,
    explicacao:
      "O grep procura padrões de texto dentro de arquivos e mostra as linhas que os contêm, por exemplo, grep erro log.txt. Com a opção -i ignora maiúsculas e minúsculas, e com -c conta as linhas encontradas.\n\nO find procura arquivos pelo nome ou outros atributos, e não linhas de texto. O cat exibe arquivos. O sort ordena linhas. E o wc conta linhas, palavras e bytes. Nenhum deles filtra linhas por conteúdo como o grep.",
  },
  {
    materia: "informatica",
    tema: "Sistemas operacionais: Linux",
    dificuldade: "media",
    enunciado:
      "Qual comando altera as permissões de leitura, escrita e execução de um arquivo?",
    opcoes: [
      "chown",
      "chmod",
      "chgrp",
      "passwd",
      "umask",
    ],
    correta: 1,
    explicacao:
      "O chmod, de change mode, altera as permissões de leitura, escrita e execução de arquivos e diretórios, por exemplo, chmod 755 script.sh ou chmod u+x script.sh.\n\nO chown muda o dono do arquivo. O chgrp muda o grupo dono. O passwd altera a senha de um usuário. E o umask define as permissões padrão de arquivos novos. Nenhum deles altera as permissões de um arquivo já existente como o chmod.",
  },
  {
    materia: "informatica",
    tema: "Sistemas operacionais: Linux",
    dificuldade: "media",
    enunciado:
      "Qual comando altera o usuário dono de um arquivo no Linux?",
    opcoes: [
      "chmod",
      "chown",
      "passwd",
      "useradd",
      "su",
    ],
    correta: 1,
    explicacao:
      "O chown, de change owner, muda o usuário dono de arquivos e diretórios e, com a sintaxe usuario:grupo, também o grupo. Por exemplo, chown ana arquivo.txt passa o arquivo para a usuária ana.\n\nO chmod muda permissões, e não o dono. O passwd muda senhas. O useradd cria usuários. E o su troca o usuário da sessão atual. Nenhum deles muda o dono de um arquivo.",
  },
  {
    materia: "informatica",
    tema: "Sistemas operacionais: Linux",
    dificuldade: "media",
    enunciado:
      "Um arquivo executável deve ter a permissão rwxr-xr-x. Qual é essa permissão escrita em notação octal, no comando chmod?",
    opcoes: [
      "644",
      "755",
      "777",
      "750",
      "700",
    ],
    correta: 1,
    explicacao:
      "Cada trio de permissões vira um dígito, com r valendo 4, w valendo 2 e x valendo 1. O dono tem rwx, isto é, 4 + 2 + 1 = 7. O grupo tem r-x, isto é, 4 + 1 = 5. Os outros têm r-x, também 5. O resultado é 755. É a permissão típica de programas e scripts.\n\n644 seria rw-r--r--. 777 daria tudo a todos. 750 seria rwxr-x---, sem acesso aos outros. E 700 seria rwx------, só para o dono.",
  },
  {
    materia: "informatica",
    tema: "Sistemas operacionais: Linux",
    dificuldade: "media",
    enunciado:
      "Um documento recebeu a permissão 644 por meio do chmod. Como essa permissão é escrita em notação simbólica, como aparece no ls -l?",
    opcoes: [
      "rwxr-xr-x",
      "rw-r--r--",
      "rw-rw-rw-",
      "r--r--r--",
      "rwx------",
    ],
    correta: 1,
    explicacao:
      "Em 644, o dígito 6 do dono é 4 + 2, isto é, leitura e escrita, rw-. O dígito 4 do grupo é só leitura, r--, e o 4 dos outros também, r--. Juntando, a permissão fica rw-r--r--, comum em documentos comuns.\n\nrwxr-xr-x corresponde a 755. rw-rw-rw- corresponde a 666. r--r--r-- corresponde a 444, sem escrita para o dono. E rwx------ corresponde a 700, só para o dono.",
  },
  {
    materia: "informatica",
    tema: "Sistemas operacionais: Linux",
    dificuldade: "media",
    enunciado:
      "Qual é, em notação octal, a permissão rwxr-x---, em que o dono faz tudo, o grupo lê e executa e os demais não têm acesso?",
    opcoes: [
      "755",
      "750",
      "705",
      "570",
      "640",
    ],
    correta: 1,
    explicacao:
      "O dono tem rwx, isto é, 7. O grupo tem r-x, isto é, 4 + 1 = 5. Os outros têm ---, isto é, 0. A permissão é 750. Essa é uma permissão comum em diretórios de trabalho de equipes, em que só o grupo pode acessar.\n\n755 daria leitura e execução também aos outros. 705 daria rwx ao dono, nada ao grupo e r-x aos outros. 570 inverte dono e grupo. E 640 seria rw-r-----, sem permissão de execução para o dono.",
  },
  {
    materia: "informatica",
    tema: "Sistemas operacionais: Linux",
    dificuldade: "media",
    enunciado:
      "Um arquivo tem permissão rw-r--r--. Depois do comando chmod u+x arquivo, qual passa a ser a permissão dele?",
    opcoes: [
      "rwxrwxrwx",
      "rwxr--r--",
      "rw-r-xr-x",
      "rwx------",
      "rw-r--r-x",
    ],
    correta: 1,
    explicacao:
      "No modo simbólico, u+x acrescenta a permissão de execução ao dono, sem alterar as demais. A permissão rw-r--r-- passa, então, a rwxr--r--: o dono ganha o x, e grupo e outros permanecem como estavam.\n\nrwxrwxrwx daria tudo a todos. rw-r-xr-x acrescentaria a execução ao grupo e aos outros. rwx------ removeria as permissões do grupo e dos outros. E rw-r--r-x acrescentaria execução apenas aos outros.",
  },
  {
    materia: "informatica",
    tema: "Sistemas operacionais: Linux",
    dificuldade: "media",
    enunciado:
      "O administrador remove a leitura do grupo e dos outros de um arquivo rwxr-xr-x com o comando chmod go-r. Que permissão resulta?",
    opcoes: [
      "rwxr-xr-x",
      "rwx--x--x",
      "rwx------",
      "r-xr-xr-x",
      "rwxrwxrwx",
    ],
    correta: 1,
    explicacao:
      "No modo simbólico, go-r remove a permissão de leitura do grupo e dos outros, sem mexer na execução. A permissão rwxr-xr-x passa, então, a rwx--x--x: o dono continua com tudo, e o grupo e os outros ficam só com a execução.\n\nrwxr-xr-x seria o valor sem a alteração. rwx------ removeria também a execução. r-xr-xr-x removeria a escrita do dono em vez da leitura do grupo e dos outros. E rwxrwxrwx daria escrita a todos.",
  },
  {
    materia: "informatica",
    tema: "Sistemas operacionais: Linux",
    dificuldade: "media",
    enunciado:
      "Em qual diretório do Linux ficam, em geral, os arquivos de configuração do sistema e dos serviços instalados?",
    opcoes: [
      "/home",
      "/etc",
      "/tmp",
      "/dev",
      "/proc",
    ],
    correta: 1,
    explicacao:
      "O /etc concentra os arquivos de configuração do sistema e dos serviços, em geral em texto simples, como os de rede, de usuários e de inicialização. Por isso é um dos diretórios mais consultados por administradores.\n\nO /home guarda as pastas pessoais. O /tmp guarda arquivos temporários. O /dev contém arquivos de dispositivos. E o /proc é um sistema de arquivos virtual com informações do kernel e dos processos. Nenhum deles é o local padrão de configurações.",
  },
  {
    materia: "informatica",
    tema: "Sistemas operacionais: Linux",
    dificuldade: "media",
    enunciado:
      "Em qual diretório ficam os comandos essenciais do sistema, como ls, cp e mv, necessários para o funcionamento básico?",
    opcoes: [
      "/etc",
      "/var",
      "/bin",
      "/home",
      "/boot",
    ],
    correta: 2,
    explicacao:
      "O /bin reúne os programas executáveis essenciais, como ls, cp, mv e cat, usados tanto pelo administrador quanto pelos usuários, inclusive na recuperação do sistema. Em várias distribuições atuais, é um link para /usr/bin.\n\nO /etc guarda configurações. O /var guarda dados variáveis, como logs. O /home guarda pastas de usuários. E o /boot guarda o kernel e os arquivos de inicialização. Nenhum deles é o local dos comandos essenciais.",
  },
  {
    materia: "informatica",
    tema: "Sistemas operacionais: Linux",
    dificuldade: "media",
    enunciado:
      "Em qual diretório do Linux ficam os arquivos temporários, que podem ser apagados em reinicializações?",
    opcoes: [
      "/etc",
      "/bin",
      "/tmp",
      "/home",
      "/root",
    ],
    correta: 2,
    explicacao:
      "O /tmp guarda arquivos temporários criados por programas e usuários, e em muitos sistemas o conteúdo é apagado ao reiniciar. Por isso não é um local adequado para guardar arquivos que precisam ser mantidos.\n\nO /etc guarda configurações. O /bin guarda comandos. O /home guarda as pastas dos usuários. E o /root é a pasta pessoal do administrador. Nenhum deles é o local de arquivos temporários.",
  },
  {
    materia: "informatica",
    tema: "Sistemas operacionais: Linux",
    dificuldade: "media",
    enunciado:
      "Em qual diretório ficam, normalmente, os arquivos de log e outros dados que mudam com frequência, como filas e bancos de dados?",
    opcoes: [
      "/etc",
      "/bin",
      "/var",
      "/boot",
      "/media",
    ],
    correta: 2,
    explicacao:
      "O /var guarda dados variáveis, isto é, que mudam durante o funcionamento do sistema, como logs em /var/log, filas de e-mail e de impressão, e arquivos de bancos de dados.\n\nO /etc guarda configurações, que mudam pouco. O /bin guarda comandos. O /boot guarda arquivos de inicialização. E o /media é o ponto de montagem de mídias removíveis. Nenhum deles é o local usual de logs e dados variáveis.",
  },
  {
    materia: "informatica",
    tema: "Sistemas operacionais: Linux",
    dificuldade: "media",
    enunciado:
      "No Linux, que diretório contém arquivos especiais que representam os dispositivos de hardware, como discos e terminais?",
    opcoes: [
      "/etc",
      "/home",
      "/dev",
      "/usr",
      "/opt",
    ],
    correta: 2,
    explicacao:
      "O /dev contém arquivos especiais que representam dispositivos, como /dev/sda para um disco e /dev/null, que descarta tudo o que recebe. No Linux, vale a ideia de que tudo é um arquivo, inclusive o acesso ao hardware.\n\nO /etc guarda configurações. O /home guarda as pastas pessoais. O /usr contém programas e bibliotecas. E o /opt guarda programas de terceiros. Nenhum deles contém arquivos de dispositivos.",
  },
  {
    materia: "informatica",
    tema: "Sistemas operacionais: Linux",
    dificuldade: "media",
    enunciado:
      "Qual diretório do Linux é um sistema de arquivos virtual que expõe informações do kernel e dos processos em execução?",
    opcoes: [
      "/etc",
      "/tmp",
      "/proc",
      "/home",
      "/bin",
    ],
    correta: 2,
    explicacao:
      "O /proc é um sistema de arquivos virtual, criado pelo kernel, que mostra informações sobre processos, memória, CPU e configurações do sistema, como /proc/cpuinfo e /proc/meminfo. Ele não ocupa espaço em disco.\n\nO /etc guarda arquivos de configuração reais. O /tmp guarda temporários. O /home guarda pastas de usuários. E o /bin guarda comandos. Nenhum deles é um sistema de arquivos virtual do kernel.",
  },
  {
    materia: "informatica",
    tema: "Sistemas operacionais: Linux",
    dificuldade: "media",
    enunciado:
      "No terminal Linux, qual é a função do símbolo de barra vertical (|) entre dois comandos?",
    opcoes: [
      "Executar os dois comandos em paralelo em janelas distintas",
      "Apagar a saída do primeiro comando",
      "Enviar a saída do primeiro como entrada do segundo",
      "Unir dois arquivos em um só",
      "Repetir o primeiro comando várias vezes",
    ],
    correta: 2,
    explicacao:
      "O símbolo | é o pipe: ele pega a saída padrão do primeiro comando e a entrega como entrada ao segundo. Por exemplo, ls | wc -l conta quantos itens há no diretório, pois a lista do ls vira a entrada do wc.\n\nO pipe não abre janelas distintas, não apaga a saída, não une arquivos em um só e não repete comandos. Ele encadeia comandos, formando uma linha de processamento.",
  },
  {
    materia: "informatica",
    tema: "Sistemas operacionais: Linux",
    dificuldade: "media",
    enunciado:
      "No terminal Linux, qual é a diferença entre os redirecionamentos > e >> ao enviar a saída de um comando para um arquivo?",
    opcoes: [
      "> acrescenta ao final e >> sobrescreve",
      "Os dois sobrescrevem do mesmo modo",
      "> sobrescreve o arquivo e >> acrescenta ao final",
      "> copia e >> move o arquivo",
      "> lê e >> grava o arquivo",
    ],
    correta: 2,
    explicacao:
      "O operador > grava a saída num arquivo e apaga o conteúdo anterior, se ele existir. O operador >> acrescenta a saída ao final do arquivo, preservando o que já estava lá. Por exemplo, echo oi > a.txt recria o arquivo, e echo oi >> a.txt acrescenta uma linha.\n\nAs demais opções invertem as funções, igualam os dois operadores ou os confundem com copiar, mover, ler e gravar.",
  },
  {
    materia: "informatica",
    tema: "Sistemas operacionais: Linux",
    dificuldade: "media",
    enunciado:
      "Um arquivo de texto tem as 5 linhas seguintes: maçã, uva, maçã, pera, uva. Qual é a saída do comando sort arquivo | uniq -c, isto é, cada linha distinta, ordenada, precedida pelo número de ocorrências?",
    opcoes: [
      "1 maçã, 1 pera, 1 uva",
      "2 maçã, 2 uva, 1 pera",
      "2 maçã, 1 pera, 2 uva",
      "5 maçã, 5 pera, 5 uva",
      "2 uva, 2 maçã, 1 pera",
    ],
    correta: 2,
    explicacao:
      "O sort ordena as linhas, deixando as repetidas juntas: maçã, maçã, pera, uva, uva. O uniq -c agrupa linhas iguais e adjacentes e mostra quantas vezes cada uma aparece: 2 maçã, 1 pera e 2 uva.\n\n1 para cada ignoraria as repetições. 2 maçã, 2 uva, 1 pera não segue a ordem alfabética. 5 para cada confunde com o total de linhas. E 2 uva, 2 maçã, 1 pera está em ordem alfabética inversa.",
  },
  {
    materia: "informatica",
    tema: "Sistemas operacionais: Linux",
    dificuldade: "media",
    enunciado:
      "Qual comando lista os processos em execução no Linux, e qual comando encerra um deles pelo seu número de identificação (PID)?",
    opcoes: [
      "ls e rm",
      "top e cat",
      "ps e kill",
      "df e du",
      "man e sudo",
    ],
    correta: 2,
    explicacao:
      "O ps lista os processos em execução, com seus PIDs, e o kill envia um sinal a um processo identificado pelo PID, em geral para encerrá-lo: kill 1234. Com kill -9, o sinal força o encerramento.\n\nO ls e o rm lidam com arquivos. O top mostra processos em tempo real, mas o cat exibe arquivos. O df e o du medem espaço em disco. E o man e o sudo mostram manuais e elevam privilégios. Só ps e kill formam o par pedido.",
  },
  {
    materia: "informatica",
    tema: "Sistemas operacionais: Linux",
    dificuldade: "media",
    enunciado:
      "Qual comando mostra, em tempo real, os processos em execução, o uso de CPU e de memória, atualizando a tela periodicamente?",
    opcoes: [
      "ls",
      "cat",
      "top",
      "pwd",
      "mkdir",
    ],
    correta: 2,
    explicacao:
      "O top exibe, em tempo real, os processos que mais usam CPU e memória, junto com a carga do sistema, e atualiza a tela a cada poucos segundos. Para sair, pressiona-se a tecla q. Ele é o monitor de processos clássico.\n\nO ls lista arquivos. O cat exibe conteúdo de arquivos. O pwd mostra o diretório atual. E o mkdir cria diretórios. Nenhum deles monitora processos em tempo real.",
  },
  {
    materia: "informatica",
    tema: "Sistemas operacionais: Linux",
    dificuldade: "media",
    enunciado:
      "Qual comando mostra o espaço livre e usado nos sistemas de arquivos montados, como o disco principal e os pen drives?",
    opcoes: [
      "du",
      "ls",
      "mount -x",
      "df",
      "free",
    ],
    correta: 3,
    explicacao:
      "O df, de disk free, mostra, para cada sistema de arquivos montado, o tamanho total, o espaço usado e o espaço livre. Com a opção -h, exibe os valores em unidades legíveis, como GB e MB.\n\nO du mostra o espaço ocupado por arquivos e diretórios, e não o livre em cada sistema de arquivos. O ls lista arquivos. O mount -x não é uma forma padrão de listar espaço. E o free mostra o uso da memória RAM, e não do disco.",
  },
  {
    materia: "informatica",
    tema: "Sistemas operacionais: Linux",
    dificuldade: "media",
    enunciado:
      "Qual comando pesquisa arquivos e diretórios pelo nome, tamanho, data ou outros atributos, a partir de um diretório?",
    opcoes: [
      "grep",
      "cat",
      "sort",
      "find",
      "head",
    ],
    correta: 3,
    explicacao:
      "O find percorre uma árvore de diretórios e localiza arquivos que atendem a critérios, como o nome, o tamanho ou a data de modificação. Por exemplo, find /home -name \"*.txt\" acha todos os arquivos terminados em .txt.\n\nO grep procura texto dentro de arquivos. O cat exibe conteúdo. O sort ordena linhas. E o head mostra as primeiras linhas de um arquivo. Nenhum deles procura arquivos pelo nome ou atributos.",
  },
  {
    materia: "informatica",
    tema: "Sistemas operacionais: Linux",
    dificuldade: "media",
    enunciado:
      "Qual comando mostra as primeiras linhas de um arquivo de texto, por padrão as dez primeiras?",
    opcoes: [
      "tail",
      "sort",
      "uniq",
      "head",
      "cut",
    ],
    correta: 3,
    explicacao:
      "O head exibe o começo de um arquivo, por padrão as 10 primeiras linhas, e com head -n 3 mostra as 3 primeiras. É útil para dar uma olhada rápida em arquivos longos, como logs e listas.\n\nO tail faz o oposto, mostrando o final do arquivo. O sort ordena linhas. O uniq remove ou conta linhas repetidas e adjacentes. E o cut extrai colunas ou campos de cada linha. Nenhum deles mostra as primeiras linhas de um arquivo.",
  },
  {
    materia: "informatica",
    tema: "Sistemas operacionais: Linux",
    dificuldade: "media",
    enunciado:
      "Qual comando cria um arquivo vazio, caso ele não exista, ou apenas atualiza a data de modificação, caso já exista?",
    opcoes: [
      "mkdir",
      "cat",
      "echo",
      "touch",
      "ln",
    ],
    correta: 3,
    explicacao:
      "O touch cria um arquivo vazio quando o nome informado não existe e, quando já existe, apenas atualiza a data e a hora de modificação, sem alterar o conteúdo. É o jeito mais simples de criar um arquivo vazio no terminal. É também chamado de tocar o arquivo.\n\nO mkdir cria diretórios. O cat exibe conteúdo. O echo imprime texto, e só cria um arquivo se a saída for redirecionada. E o ln cria links. Nenhum deles tem esse comportamento de criar ou atualizar a data.",
  },
  {
    materia: "informatica",
    tema: "Sistemas operacionais: Linux",
    dificuldade: "media",
    enunciado:
      "Qual comando instala um programa a partir dos repositórios em distribuições baseadas em Debian, como o Ubuntu?",
    opcoes: [
      "apt remove",
      "apt update",
      "dpkg -r",
      "apt install",
      "apt purge",
    ],
    correta: 3,
    explicacao:
      "O apt install baixa o pacote dos repositórios configurados, resolve as dependências e instala o programa. Em geral, é usado com sudo, como em sudo apt install nome-do-pacote.\n\nO apt remove e o apt purge desinstalam pacotes, e o purge também apaga as configurações. O dpkg -r também remove um pacote. E o apt update só atualiza a lista de pacotes disponíveis, sem instalar nada.",
  },
  {
    materia: "informatica",
    tema: "Sistemas operacionais: Linux",
    dificuldade: "media",
    enunciado:
      "Em termos técnicos, o que é o Linux propriamente dito, isto é, o que dá nome ao sistema?",
    opcoes: [
      "A interface gráfica",
      "O gerenciador de pacotes",
      "O shell Bash",
      "O kernel, núcleo do sistema",
      "O conjunto de aplicativos",
    ],
    correta: 3,
    explicacao:
      "O Linux é, tecnicamente, o kernel, o núcleo do sistema operacional, que gerencia processador, memória, dispositivos e processos. As distribuições, como Ubuntu, Debian e Fedora, reúnem o kernel com outros programas, como shell, ferramentas e interface gráfica.\n\nA interface gráfica, o gerenciador de pacotes, o shell Bash e os aplicativos são partes da distribuição, e não o Linux em si. Por isso se diz que o kernel é o coração do sistema, e que as distribuições são o sistema completo.",
  },
  {
    materia: "informatica",
    tema: "Sistemas operacionais: Linux",
    dificuldade: "dificil",
    enunciado:
      "Numa pasta há arq1.txt, arq2.txt, arq3.txt, arq4.txt e arq10.txt. Quantos arquivos correspondem ao padrão arq[1-3].txt?",
    opcoes: [
      "4",
      "5",
      "2",
      "3",
      "1",
    ],
    correta: 3,
    explicacao:
      "Nos colchetes, [1-3] representa um único caractere entre 1 e 3. Então o padrão exige arq, um dígito de 1 a 3 e .txt. Correspondem arq1.txt, arq2.txt e arq3.txt, isto é, 3 arquivos. Colchetes com hífen indicam uma faixa de valores para um único caractere.\n\narq4.txt tem o dígito 4, fora da faixa. arq10.txt tem dois caracteres depois de arq, e o padrão aceita só um. Então a contagem é 3, e não 4 nem 5.",
  },
  {
    materia: "informatica",
    tema: "Sistemas operacionais: Linux",
    dificuldade: "dificil",
    enunciado:
      "Um usuário está em /home/ana/docs e executa cd ../../bruno. Em que diretório ele fica?",
    opcoes: [
      "/home/ana/bruno",
      "/bruno",
      "/home/ana/docs/bruno",
      "/home/bruno",
      "/home",
    ],
    correta: 3,
    explicacao:
      "O .. indica o diretório pai. Partindo de /home/ana/docs, o primeiro .. leva a /home/ana, e o segundo, a /home. Depois, bruno entra na subpasta, resultando em /home/bruno. Em caminhos relativos, cada .. sobe um nível, então é preciso contar quantos níveis sobem antes de descer para o destino.\n\n/home/ana/bruno usaria só um .., e /bruno teria subido até a raiz. /home/ana/docs/bruno não usaria nenhum .., criando um caminho dentro de docs. E /home pararia antes de entrar em bruno.",
  },
  {
    materia: "informatica",
    tema: "Sistemas operacionais: Linux",
    dificuldade: "dificil",
    enunciado:
      "Com o umask 022, quais são as permissões padrão de um arquivo comum recém-criado, em notação octal?",
    opcoes: [
      "755",
      "666",
      "644 e 755 ao mesmo tempo",
      "644",
      "600",
    ],
    correta: 3,
    explicacao:
      "Arquivos novos partem de 666, sem execução, e o umask remove bits: 666 − 022 = 644, isto é, rw-r--r--. Diretórios novos partem de 777, e resultam em 755. Por isso, com umask 022, arquivos saem com 644 e diretórios com 755. Esse é o umask padrão em muitas distribuições.\n\n755 é o resultado para diretórios. 666 seria o valor sem o umask. 644 e 755 juntos não descrevem um único arquivo. E 600 seria o resultado de um umask 066.",
  },
  {
    materia: "informatica",
    tema: "Sistemas operacionais: Linux",
    dificuldade: "dificil",
    enunciado:
      "Qual é, em notação octal, a permissão definida pelo comando chmod u=rw,g=r,o= arquivo?",
    opcoes: [
      "644",
      "600",
      "460",
      "640",
      "604",
    ],
    correta: 3,
    explicacao:
      "O u=rw dá ao dono leitura e escrita, 4 + 2 = 6. O g=r dá ao grupo só leitura, 4. E o= sem nada remove todas as permissões dos outros, 0. A permissão é 640, isto é, rw-r-----. Na notação simbólica, = define exatamente as permissões indicadas, removendo as que não foram citadas para aquela categoria.\n\n644 daria leitura também aos outros. 600 tiraria a leitura do grupo. 460 inverte dono e grupo. E 604 daria leitura aos outros e nada ao grupo.",
  },
  {
    materia: "informatica",
    tema: "Sistemas operacionais: Linux",
    dificuldade: "dificil",
    enunciado:
      "Um arquivo de texto tem 3 linhas: \"um dois\", \"tres quatro cinco\" e \"seis\". Qual é a saída de cat arquivo | wc -w?",
    opcoes: [
      "3",
      "16",
      "5",
      "4",
      "6",
    ],
    correta: 4,
    explicacao:
      "O wc -w conta palavras separadas por espaços. As linhas têm 2, 3 e 1 palavras, e 2 + 3 + 1 = 6. O pipe entrega o texto do cat ao wc, que conta as palavras de todo o conteúdo. A opção -l contaria as linhas, e a -c, os bytes, mas o -w conta apenas as palavras.\n\n3 é o número de linhas, que seria a saída do wc -l. 16 conta os caracteres sem espaço. 5 e 4 perdem palavras na contagem.",
  },
  {
    materia: "informatica",
    tema: "Sistemas operacionais: Linux",
    dificuldade: "dificil",
    enunciado:
      "Num arquivo há as linhas: erro disco, ok rede, ERRO cpu, erro memória, ok disco. Quantas linhas o comando grep -i erro arquivo encontra?",
    opcoes: [
      "2",
      "1",
      "5",
      "4",
      "3",
    ],
    correta: 4,
    explicacao:
      "A opção -i faz o grep ignorar a diferença entre maiúsculas e minúsculas. Então casam as linhas com erro, ERRO ou qualquer variação: erro disco, ERRO cpu e erro memória, isto é, 3 linhas. A opção -c, em vez de mostrar as linhas, mostraria só a contagem delas.\n\nSem -i, seriam 2, pois a linha ERRO cpu não casaria. 1 e 4 perdem ou acrescentam linhas sem razão, e 5 é o total de linhas do arquivo, sem filtrar.",
  },
  {
    materia: "informatica",
    tema: "Sistemas operacionais: Linux",
    dificuldade: "dificil",
    enunciado:
      "Um arquivo aparece no ls -l com as permissões -rwxr-xr--. Quais categorias podem executá-lo?",
    opcoes: [
      "Só o dono",
      "O dono, o grupo e os outros",
      "Só os outros",
      "Ninguém",
      "O dono e o grupo",
    ],
    correta: 4,
    explicacao:
      "No ls -l, depois do tipo de arquivo, vêm três trios: rwx para o dono, r-x para o grupo e r-- para os outros. O x de execução aparece no trio do dono e no do grupo, mas não no dos outros, que só têm leitura.\n\nPortanto, só dono e grupo podem executar. A resposta Só o dono ignoraria o x do grupo. Dono, grupo e outros exigiria x no terceiro trio. Só os outros e Ninguém contrariam o x presente no primeiro trio.",
  },
  {
    materia: "informatica",
    tema: "Sistemas operacionais: Linux",
    dificuldade: "dificil",
    enunciado:
      "Qual é o efeito do comando kill -9 seguido do PID de um processo?",
    opcoes: [
      "Pede ao processo que reinicie",
      "Coloca o processo em pausa",
      "Muda a prioridade do processo",
      "Mostra as informações do processo",
      "Força o encerramento imediato do processo",
    ],
    correta: 4,
    explicacao:
      "O kill -9 envia o sinal SIGKILL, que o processo não pode ignorar nem tratar, e o sistema o encerra imediatamente. Deve ser usado como último recurso, pois o processo não tem chance de salvar dados ou liberar recursos.\n\nPedir reinício não é função do kill -9. Pausar o processo é feito com outro sinal, o SIGSTOP. Mudar a prioridade é tarefa do nice e do renice. E mostrar informações do processo é papel do ps e do top.",
  },
  {
    materia: "informatica",
    tema: "Sistemas operacionais: Linux",
    dificuldade: "media",
    enunciado:
      "Qual é a função do comando ln -s destino atalho no Linux?",
    opcoes: [
      "Copiar o destino para o atalho",
      "Apagar o destino e o atalho",
      "Compactar o destino",
      "Listar os links do sistema",
      "Criar um link simbólico para o destino",
    ],
    correta: 4,
    explicacao:
      "O ln -s cria um link simbólico, isto é, um arquivo especial que aponta para outro caminho, o destino. Abrir o link equivale a abrir o destino, e se o destino for apagado, o link fica quebrado.\n\nO comando não copia o destino, não apaga nenhum dos dois, não compacta o destino e não lista links. Para copiar, usa-se cp. Para compactar, tar ou gzip. E para listar, ls -l mostra os links com uma seta.",
  },
  {
    materia: "informatica",
    tema: "Sistemas operacionais: Linux",
    dificuldade: "media",
    enunciado:
      "Qual é o comando que empacota e compacta uma pasta num único arquivo .tar.gz no Linux?",
    opcoes: [
      "tar -xvf",
      "cp -r",
      "mv -f",
      "gzip -d",
      "tar -czf",
    ],
    correta: 4,
    explicacao:
      "O tar -czf cria um arquivo: c de create, z para compactar com gzip e f para informar o nome do arquivo de saída. O resultado é um .tar.gz, que reúne e compacta a pasta.\n\nO tar -xvf extrai o conteúdo, fazendo o caminho inverso. O cp -r copia diretórios. O mv -f move à força, sem compactar. E o gzip -d descompacta um arquivo .gz, e não empacota uma pasta.",
  },
  {
    materia: "informatica",
    tema: "Sistemas operacionais: Linux",
    dificuldade: "media",
    enunciado:
      "Como se reconhece, no Linux, um arquivo ou diretório oculto, que só aparece com ls -a?",
    opcoes: [
      "O nome termina com til",
      "O nome tem letras maiúsculas",
      "O arquivo está vazio",
      "O arquivo é executável",
      "O nome começa com um ponto",
    ],
    correta: 4,
    explicacao:
      "No Linux, arquivos e diretórios cujo nome começa com ponto, como .bashrc e .config, são ocultos nas listagens comuns. O ls -a mostra todos os itens, inclusive esses, e o ls -A omite apenas . e ..\n\nUm nome terminado em til costuma indicar cópia de segurança de editores, e não item oculto. Letras maiúsculas não escondem nada. Arquivos vazios aparecem normalmente. E arquivos executáveis também aparecem nas listagens comuns.",
  },
  {
    materia: "informatica",
    tema: "Sistemas operacionais: Linux",
    dificuldade: "dificil",
    enunciado:
      "Um arquivo tem 8 linhas, numeradas de 1 a 8. Quais linhas aparecem na saída de head -n 5 arquivo | tail -n 2?",
    opcoes: [
      "7 e 8",
      "1 e 2",
      "5 e 6",
      "3 e 4",
      "4 e 5",
    ],
    correta: 4,
    explicacao:
      "O head -n 5 seleciona as cinco primeiras linhas, de 1 a 5, e o pipe entrega essas linhas ao tail -n 2, que fica com as duas últimas delas: as linhas 4 e 5. Conferindo, a saída do primeiro comando termina na linha 5, e são as duas últimas dessa saída que aparecem.\n\n7 e 8 seriam a saída de tail -n 2 sobre o arquivo inteiro. 1 e 2 seriam a saída de head -n 2. 5 e 6 e 3 e 4 erram um dos limites, como se o head fosse de 6 linhas ou o tail tomasse linhas do meio sem relação com as duas últimas.",
  },
  {
    materia: "informatica",
    tema: "Sistemas operacionais: Linux",
    dificuldade: "dificil",
    enunciado:
      "Um script tem permissão 640. Depois do comando chmod u+x script, qual passa a ser a permissão dele em notação octal?",
    opcoes: [
      "750",
      "641",
      "744",
      "660",
      "740",
    ],
    correta: 4,
    explicacao:
      "A permissão 640 corresponde a rw-r-----. O comando u+x acrescenta a execução ao dono, que passa de rw- a rwx, isto é, de 6 para 7, sem alterar o grupo nem os outros. O resultado é rwxr-----, isto é, 740.\n\n750 daria também a execução ao grupo. 641 daria a execução aos outros, e não ao dono. 744 daria leitura aos outros. E 660 daria escrita ao grupo, sem acrescentar execução a ninguém.",
  },
];
