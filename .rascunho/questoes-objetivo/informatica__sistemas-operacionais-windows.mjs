/* Rascunho — Informática básica / Sistemas operacionais: Windows.

   49 questões novas, além da que já existe em informatica__fundamentos.mjs.
   Conferidas em código as que dependem de regra verificável: nomes de
   arquivo válidos (caracteres proibidos), correspondência de curingas
   (* e ?), seleção de itens com Shift e Ctrl e o limite de arquivo do
   FAT32. As demais são conceituais (atalhos, recursos, ferramentas) e ficam
   listadas como pendentes de revisão independente. */

import { unicoV, qualNum } from "./_matematica-fund.mjs";

export const materia = "informatica";
export const tema = "Sistemas operacionais: Windows";
export const arquivo = "informatica__sistemas-operacionais-windows";

/* nome válido no Windows: sem \ / : * ? " < > | e sem terminar em ponto ou espaço */
const nomeValido = (n) => !/[\\/:*?"<>|]/.test(n) && !/[. ]$/.test(n) && n.length > 0;
/* curinga do Windows: * = qualquer sequência, ? = um caractere */
const casa = (padrao, nome) => new RegExp("^" + padrao.replace(/[.+^${}()|[\]\\]/g, "\\$&").replace(/\*/g, ".*").replace(/\?/g, ".") + "$", "i").test(nome);

export const questoes = [
  /* ------------------------------------------------------------ fáceis --- */
  {
    d: "facil",
    e: "No Windows, como se chama a tela principal que aparece depois do login e onde ficam ícones e atalhos de acesso rápido?",
    o: ["Área de trabalho", "Barra de tarefas", "Lixeira", "Painel de controle", "Menu de contexto"],
    x: "A área de trabalho, ou desktop, é a tela principal do Windows após o login. Nela ficam o plano de fundo e os ícones e atalhos que o usuário escolhe manter à mão, como pastas, documentos e programas.\n\nA barra de tarefas é a faixa inferior, que mostra os programas abertos e fixados. A Lixeira é uma pasta especial de arquivos excluídos. O Painel de controle reúne configurações, e o menu de contexto é o menu que aparece ao clicar com o botão direito.",
  },
  {
    d: "facil",
    e: "Qual elemento do Windows mostra os programas abertos e fixados, além do botão do menu Iniciar, em geral na borda inferior da tela?",
    o: ["Barra de tarefas", "Área de trabalho", "Explorador de Arquivos", "Lixeira", "Gerenciador de Tarefas"],
    x: "A barra de tarefas fica normalmente na parte inferior da tela e abriga o botão do menu Iniciar, a busca, os ícones dos programas fixados ou em execução e a área de notificação com relógio e ícones de sistema.\n\nA área de trabalho é o fundo onde ficam ícones. O Explorador de Arquivos navega por pastas e arquivos. A Lixeira guarda arquivos excluídos. E o Gerenciador de Tarefas é uma ferramenta que lista processos e desempenho, aberta por atalho e não fixa na borda da tela.",
  },
  {
    d: "facil",
    e: "Qual programa do Windows serve para navegar entre unidades, pastas e arquivos, permitindo copiar, mover e renomear itens?",
    o: ["Explorador de Arquivos", "Bloco de Notas", "Paint", "Calculadora", "Gerenciador de Dispositivos"],
    x: "O Explorador de Arquivos é o gerenciador de arquivos do Windows: mostra unidades, pastas e arquivos e permite copiar, mover, renomear, excluir e organizar itens. É aberto também pelo atalho Windows + E.\n\nO Bloco de Notas edita texto simples. O Paint cria e edita imagens. A Calculadora faz contas. E o Gerenciador de Dispositivos lista o hardware e seus drivers, sem a função de organizar arquivos do usuário.",
  },
  {
    d: "facil",
    e: "Qual é o atalho de teclado padrão do Windows para colar o conteúdo que foi copiado para a área de transferência?",
    o: ["Ctrl + V", "Ctrl + C", "Ctrl + X", "Ctrl + Z", "Ctrl + A"],
    x: "Ctrl + V cola o conteúdo da área de transferência na posição atual. Ele é usado depois de Ctrl + C, que copia, ou de Ctrl + X, que recorta, e vale em textos, arquivos, imagens e muito mais.\n\nCtrl + C copia, Ctrl + X recorta, Ctrl + Z desfaz a última ação e Ctrl + A seleciona tudo. Nenhum deles cola conteúdo: cada um tem uma função diferente no fluxo de copiar e colar.",
  },
  {
    d: "facil",
    e: "Qual atalho do Windows desfaz a última ação realizada, como uma exclusão de texto ou uma movimentação de arquivo?",
    o: ["Ctrl + Z", "Ctrl + Y", "Ctrl + V", "Ctrl + S", "Ctrl + P"],
    x: "Ctrl + Z desfaz a última ação na maioria dos programas e no Explorador de Arquivos, o que permite corrigir erros rapidamente, por exemplo ao mover um arquivo para a pasta errada. Ele vale em quase todos os programas do Windows.\n\nCtrl + Y refaz uma ação que foi desfeita. Ctrl + V cola. Ctrl + S salva o documento. E Ctrl + P abre a impressão. Nenhum desses desfaz a ação anterior.",
  },
  {
    d: "facil",
    e: "Qual combinação exclui um arquivo de forma permanente, sem enviá-lo à Lixeira?",
    o: ["Shift + Delete", "Ctrl + Delete", "Alt + Delete", "Tab + Delete", "Esc + Delete"],
    x: "Shift + Delete exclui o item selecionado de forma permanente, sem passar pela Lixeira, geralmente após uma confirmação. Por isso, é preciso cuidado: depois disso, a recuperação pelo procedimento comum deixa de ser possível.\n\nA tecla Delete sozinha envia o arquivo à Lixeira. As outras combinações citadas não têm função de exclusão permanente no Explorador de Arquivos.",
  },
  {
    d: "facil",
    e: "Qual tecla do teclado permite renomear o arquivo ou a pasta selecionada no Explorador de Arquivos?",
    o: ["F2", "F1", "F5", "F11", "Esc"],
    x: "A tecla F2 coloca o nome do item selecionado em modo de edição, permitindo renomeá-lo sem precisar usar o menu de contexto. É um atalho clássico do Windows. Em planilhas, a mesma tecla F2 coloca a célula selecionada em modo de edição.\n\nF1 abre a ajuda. F5 atualiza a janela. F11 alterna o modo de tela cheia. E Esc cancela operações ou fecha menus. Nenhuma dessas teclas renomeia um item selecionado.",
  },
  {
    d: "facil",
    e: "Qual atalho permite alternar rapidamente entre as janelas dos programas abertos, sem usar o mouse?",
    o: ["Alt + Tab", "Ctrl + Tab", "Shift + Tab", "Alt + F4", "Windows + D"],
    x: "Alt + Tab mostra as miniaturas das janelas abertas e alterna entre elas. Enquanto a tecla Alt é mantida pressionada, cada toque em Tab avança para a janela seguinte, e ao soltar as teclas a janela escolhida vem para a frente.\n\nCtrl + Tab alterna entre abas dentro de um mesmo programa, como o navegador. Shift + Tab volta entre campos. Alt + F4 fecha a janela ativa. E Windows + D mostra a área de trabalho.",
  },
  {
    d: "facil",
    e: "Qual atalho abre diretamente o Gerenciador de Tarefas do Windows?",
    o: ["Ctrl + Shift + Esc", "Ctrl + Alt + Tab", "Windows + R", "Alt + F4", "Ctrl + Shift + N"],
    x: "Ctrl + Shift + Esc abre o Gerenciador de Tarefas diretamente. Nele, o usuário vê processos, desempenho e programas de inicialização, e pode encerrar um programa que parou de responder.\n\nCtrl + Alt + Tab mantém o seletor de janelas aberto. Windows + R abre a caixa Executar. Alt + F4 fecha a janela ativa. E Ctrl + Shift + N cria uma nova pasta no Explorador de Arquivos.",
  },
  {
    d: "facil",
    e: "Qual tecla copia uma imagem de toda a tela para a área de transferência, permitindo colá-la depois num programa de imagem?",
    o: ["Print Screen (PrtScn)", "Scroll Lock", "Pause/Break", "Insert", "Caps Lock"],
    x: "A tecla Print Screen, ou PrtScn, captura a tela inteira e coloca a imagem na área de transferência, de onde pode ser colada, por exemplo, no Paint ou num documento. Com Alt, captura só a janela ativa.\n\nScroll Lock e Pause/Break têm funções específicas de rolagem e pausa em sistemas antigos. Insert alterna entre inserir e sobrescrever texto. E Caps Lock fixa as letras maiúsculas. Nenhuma delas captura a tela.",
  },
  {
    d: "facil",
    e: "Qual combinação de teclas bloqueia o computador rapidamente, exigindo a senha para voltar ao uso?",
    o: ["Windows + L", "Windows + D", "Windows + E", "Windows + R", "Windows + I"],
    x: "Windows + L bloqueia a sessão do usuário imediatamente, mostrando a tela de bloqueio. Os programas continuam abertos, mas é preciso autenticar-se de novo para voltar ao uso, o que protege o computador quando a pessoa se afasta.\n\nWindows + D mostra a área de trabalho. Windows + E abre o Explorador de Arquivos. Windows + R abre a caixa Executar. E Windows + I abre as Configurações. Nenhuma delas bloqueia a sessão.",
  },

  /* ------------------------------------------------------------ médias --- */
  {
    d: "media",
    e: "Ao excluir um arquivo guardado em um pen drive, pelo método padrão de exclusão do Explorador de Arquivos, o que normalmente acontece com ele?",
    o: ["É removido sem passar pela Lixeira", "Vai para a Lixeira do pen drive", "Vai para a Lixeira do computador", "É movido para a área de trabalho", "Fica oculto, mas recuperável"],
    x: "Arquivos excluídos de unidades removíveis, como pen drives, e de unidades de rede normalmente não passam pela Lixeira: são apagados de imediato, e o espaço fica disponível. Por isso, não há o botão Restaurar para eles.\n\nA Lixeira do Windows só recebe itens das unidades fixas do computador. O arquivo não vai para a área de trabalho, e não fica apenas oculto, embora programas especializados possam recuperar dados em certos casos.",
  },
  {
    d: "media",
    e: "Um usuário quer ver no Explorador de Arquivos os formatos dos arquivos, como .docx e .pdf, que estão ocultos. Que opção da guia Exibir deve ser marcada?",
    o: ["Extensões de nomes de arquivos", "Itens ocultos", "Painel de visualização", "Painel de navegação", "Ícones grandes"],
    x: "A opção Extensões de nomes de arquivos, na guia Exibir, mostra o sufixo que indica o formato, como .docx, .xlsx e .pdf. Isso ajuda a perceber arquivos disfarçados, por exemplo, um executável com nome de documento.\n\nItens ocultos exibe arquivos e pastas com o atributo oculto. O painel de visualização mostra uma prévia do conteúdo. O painel de navegação mostra a árvore de pastas. E Ícones grandes altera apenas o tamanho dos ícones.",
  },
  {
    d: "media",
    e: "No Windows, o que caracteriza um arquivo ou pasta com o atributo oculto?",
    o: ["Não aparece nas listagens comuns", "Não pode ser excluído nunca", "Fica protegido por senha", "Só pode ser lido, e não alterado", "É sempre um arquivo do sistema"],
    x: "O atributo oculto faz com que o item não apareça nas listagens normais do Explorador de Arquivos, a menos que a opção de exibir itens ocultos esteja ativada. Ele serve para reduzir o risco de alteração acidental, mas não é uma proteção de segurança.\n\nO item oculto pode ser excluído, não tem senha por causa disso, e não é necessariamente somente leitura, que é outro atributo. Também não é sempre arquivo do sistema, que tem um atributo próprio.",
  },
  {
    d: "media",
    e: "Qual procedimento reúne vários arquivos de uma pasta num único arquivo de menor tamanho, em formato .zip, pelo menu de contexto do Windows?",
    o: ["Enviar para > Pasta compactada", "Enviar para > Área de trabalho", "Propriedades > Segurança", "Abrir com > Bloco de Notas", "Criar atalho"],
    x: "Ao selecionar os itens, clicar com o botão direito e escolher Enviar para > Pasta compactada, o Windows cria um arquivo .zip que reúne os itens e costuma reduzir o tamanho total, o que facilita guardar e enviar por e-mail.\n\nEnviar para > Área de trabalho cria um atalho ou cópia na área de trabalho. A guia Segurança trata de permissões. Abrir com > Bloco de Notas abre o arquivo como texto. E Criar atalho cria um ponteiro, sem compactar nada.",
  },
  {
    d: "media",
    e: "Qual destes nomes pode ser dado a um arquivo no Windows, sem violar as regras de caracteres do sistema?",
    o: ["relatorio_2025.docx", "relatorio:2025.docx", "relatorio?2025.docx", "relatorio|2025.docx", "relatorio<2025>.docx"],
    x: "O Windows não permite, em nomes de arquivos, os caracteres \\ / : * ? \" < > |. O nome relatorio_2025.docx usa apenas letras, números, ponto e sublinhado, e por isso é válido.\n\nOs demais contêm caracteres proibidos: dois-pontos em relatorio:2025.docx, interrogação em relatorio?2025.docx, barra vertical em relatorio|2025.docx e sinais de menor e maior em relatorio<2025>.docx. O sistema recusa esses nomes ao renomear.",
    v: { i: () => unicoV(["relatorio_2025.docx", "relatorio:2025.docx", "relatorio?2025.docx", "relatorio|2025.docx", "relatorio<2025>.docx"].map(nomeValido)) },
  },
  {
    d: "media",
    e: "Numa busca no Windows, o padrão *.txt corresponde a quais arquivos?",
    o: ["Todos os que terminam em .txt", "Só arquivos chamados txt", "Arquivos com três letras no nome", "Arquivos que começam com txt", "Arquivos sem extensão"],
    x: "O asterisco é um curinga que substitui qualquer sequência de caracteres, inclusive nenhuma. Assim, *.txt corresponde a qualquer nome seguido de .txt, como notas.txt, lista.txt ou a.txt.\n\nUm arquivo chamado txt, sem ponto, não corresponde ao padrão. O padrão não limita o nome a três letras, não procura nomes que começam com txt e não seleciona arquivos sem extensão. Só os terminados em .txt entram no resultado.",
    v: { i: () => unicoV([["a.txt", "notas.txt", "lista final.txt"].every((n) => casa("*.txt", n)) && ["txt", "notas.doc", "notas.txt.bak"].every((n) => !casa("*.txt", n)), false, false, false, false]) },
  },
  {
    d: "media",
    e: "Para que serve o menu Iniciar do Windows?",
    o: ["Abrir programas e acessar configurações", "Mostrar só a hora e a data", "Listar os processos em execução", "Gerenciar os drivers de hardware", "Guardar os arquivos excluídos"],
    x: "O menu Iniciar é o ponto de partida do Windows: dá acesso aos programas instalados, aos aplicativos fixados, às configurações, à busca e às opções de energia, como desligar, reiniciar e suspender.\n\nA hora e a data ficam na área de notificação. Os processos em execução são listados no Gerenciador de Tarefas. Os drivers são geridos no Gerenciador de Dispositivos. E os arquivos excluídos ficam na Lixeira. Nenhuma dessas funções é do menu Iniciar.",
  },
  {
    d: "media",
    e: "Qual recurso do Windows permite organizar janelas em diferentes áreas de trabalho, como uma para trabalho e outra para lazer, e é aberto com Windows + Tab?",
    o: ["Visão de Tarefas", "Gerenciador de Tarefas", "Modo de segurança", "Prompt de Comando", "Editor do Registro"],
    x: "A Visão de Tarefas, aberta com Windows + Tab, mostra as janelas abertas e permite criar e alternar entre áreas de trabalho virtuais. Com elas, o usuário separa grupos de janelas, por exemplo, uma área para trabalho e outra para lazer.\n\nO Gerenciador de Tarefas mostra processos. O modo de segurança é um modo de inicialização para diagnóstico. O Prompt de Comando executa comandos de texto. E o Editor do Registro edita o banco de configurações do sistema.",
  },
  {
    d: "media",
    e: "Qual atalho minimiza todas as janelas e mostra a área de trabalho, e, se repetido, restaura as janelas?",
    o: ["Windows + D", "Windows + L", "Windows + E", "Windows + I", "Windows + R"],
    x: "Windows + D mostra a área de trabalho, minimizando todas as janelas, e pressionado de novo, devolve as janelas ao estado anterior. É útil para acessar rapidamente os ícones da área de trabalho.\n\nWindows + L bloqueia a sessão. Windows + E abre o Explorador de Arquivos. Windows + I abre as Configurações. E Windows + R abre a caixa Executar. Nenhum deles mostra a área de trabalho.",
  },
  {
    d: "media",
    e: "Qual atalho abre uma nova janela do Explorador de Arquivos no Windows?",
    o: ["Windows + E", "Windows + D", "Windows + L", "Windows + Tab", "Windows + I"],
    x: "Windows + E abre o Explorador de Arquivos, onde se navega por unidades, pastas e arquivos. Por isso, é o caminho mais rápido para chegar aos documentos sem usar o mouse.\n\nWindows + D mostra a área de trabalho, Windows + L bloqueia a sessão, Windows + Tab abre a Visão de Tarefas e Windows + I abre as Configurações. Nenhum deles abre o Explorador de Arquivos.",
  },
  {
    d: "media",
    e: "Qual atalho abre a caixa Executar, usada para digitar o nome de um programa, pasta ou comando e iniciá-lo?",
    o: ["Windows + R", "Windows + X", "Windows + S", "Windows + P", "Windows + K"],
    x: "Windows + R abre a caixa Executar, na qual se digita o nome de um programa, pasta, documento ou endereço para abri-lo, e comandos como cmd, notepad e calc. É um atalho comum entre técnicos.\n\nWindows + X abre o menu de tarefas de energia e administração. Windows + S abre a pesquisa. Windows + P escolhe o modo de projeção para telas. E Windows + K abre as opções de conexão com dispositivos sem fio.",
  },
  {
    d: "media",
    e: "Qual atalho abre diretamente o aplicativo Configurações do Windows?",
    o: ["Windows + I", "Windows + C", "Windows + H", "Windows + U", "Windows + Z"],
    x: "Windows + I abre o aplicativo Configurações, onde se ajustam rede, vídeo, contas, atualização e outras opções do sistema. O I é a letra de Ir para as configurações, em inglês Settings, mas o atalho usa a tecla I.\n\nAs outras combinações não abrem as Configurações: cada uma delas aciona outro recurso do sistema ou não tem função padrão. O atalho específico do aplicativo Configurações é Windows + I, que pode ser lembrado pela letra inicial de Information ou pela associação com o ícone de engrenagem.",
  },
  {
    d: "media",
    e: "Qual é a principal função do Windows Update?",
    o: ["Instalar atualizações e correções de segurança", "Limpar arquivos temporários do disco", "Fazer backup dos documentos", "Desfragmentar o disco rígido", "Bloquear sites perigosos"],
    x: "O Windows Update baixa e instala atualizações do sistema, como correções de segurança, correções de erros e melhorias, o que reduz a exposição a vulnerabilidades conhecidas. Manter o sistema atualizado é uma das medidas básicas de segurança.\n\nLimpar temporários é função da limpeza de disco. O backup é feito pelo Histórico de Arquivos. A desfragmentação é feita pela otimização de unidades. E bloquear sites perigosos é tarefa de antivírus e navegadores.",
  },
  {
    d: "media",
    e: "Qual é o antivírus que já vem incluído no Windows, sem necessidade de instalação, e é gerenciado pelo aplicativo Segurança do Windows?",
    o: ["Microsoft Defender Antivírus", "Windows Update", "BitLocker", "Firewall de borda", "Painel de controle"],
    x: "O Microsoft Defender Antivírus vem com o Windows e é gerenciado pelo aplicativo Segurança do Windows: faz varreduras, protege em tempo real e bloqueia malwares conhecidos, atualizando-se pelo próprio sistema.\n\nO Windows Update instala atualizações. O BitLocker criptografa discos. O firewall de borda é um equipamento de rede, e não o antivírus do Windows. E o Painel de controle é um conjunto de configurações, e não um programa de proteção contra malware.",
  },
  {
    d: "media",
    e: "Qual recurso do Windows filtra o tráfego de rede de entrada e de saída, permitindo ou bloqueando conexões segundo regras?",
    o: ["Firewall do Windows", "Gerenciador de Tarefas", "Lixeira", "Explorador de Arquivos", "Calculadora"],
    x: "O firewall do Windows filtra as conexões de rede de entrada e de saída, segundo regras por programa, porta e perfil de rede, e ajuda a impedir acessos não autorizados ao computador.\n\nO Gerenciador de Tarefas mostra processos e desempenho. A Lixeira guarda arquivos excluídos. O Explorador de Arquivos navega por pastas. E a Calculadora faz contas. Nenhum deles controla o tráfego de rede.",
  },
  {
    d: "media",
    e: "No Windows, qual é a diferença entre uma conta de usuário do tipo administrador e uma do tipo padrão?",
    o: ["O administrador pode alterar configurações do sistema", "A conta padrão pode apagar o Windows", "O administrador não tem senha", "A conta padrão é exclusiva de visitantes", "Só o padrão pode instalar drivers"],
    x: "A conta de administrador pode instalar programas para todos os usuários, alterar configurações do sistema e gerenciar outras contas. A conta padrão usa o computador no dia a dia, mas não faz alterações que afetem o sistema ou os outros usuários sem pedir credenciais de administrador.\n\nA conta padrão não consegue apagar o sistema, e o administrador costuma ter senha. A conta padrão não é exclusiva de visitantes, e instalar drivers é uma tarefa do administrador, e não do usuário padrão.",
  },
  {
    d: "media",
    e: "Qual recurso do Windows faz cópias de segurança dos arquivos pessoais para uma unidade externa e permite recuperar versões anteriores?",
    o: ["Histórico de Arquivos", "Gerenciador de Dispositivos", "Monitor de Recursos", "Editor do Registro", "Visualizador de Eventos"],
    x: "O Histórico de Arquivos copia periodicamente os arquivos das bibliotecas e da área de trabalho para uma unidade externa ou de rede, e guarda versões anteriores, o que permite restaurar um documento alterado ou excluído.\n\nO Gerenciador de Dispositivos lida com hardware. O Monitor de Recursos mostra o uso de CPU, memória e disco. O Editor do Registro edita configurações. E o Visualizador de Eventos registra ocorrências do sistema, sem fazer cópias de arquivos.",
  },
  {
    d: "media",
    e: "Um ponto de restauração do sistema é usado para quê?",
    o: ["Voltar o sistema a um estado anterior", "Recuperar documentos pessoais excluídos", "Aumentar a velocidade da internet", "Criptografar todo o disco", "Formatar o disco rígido"],
    x: "Um ponto de restauração guarda um retrato dos arquivos e das configurações do sistema, como drivers e programas instalados. Se uma atualização ou instalação causar problemas, a restauração do sistema devolve essas configurações ao estado anterior, sem apagar os documentos pessoais.\n\nEle não serve para recuperar documentos excluídos, que são tratados por backup. Não aumenta a velocidade da internet, não criptografa o disco e não formata o disco rígido.",
  },
  {
    d: "media",
    e: "Qual é o tamanho máximo de um único arquivo no sistema de arquivos FAT32, em bytes?",
    o: ["4.294.967.295", "2.147.483.647", "17.179.869.184", "1.073.741.824", "8.589.934.591"],
    x: "No FAT32, o tamanho do arquivo é guardado em 32 bits, então o maior valor possível é 2³² − 1 = 4.294.967.295 bytes, isto é, cerca de 4 GiB menos 1 byte. Por isso, arquivos maiores, como imagens de DVD e vídeos longos, não cabem numa unidade FAT32.\n\n2.147.483.647 é o maior valor de um inteiro de 31 bits. 17.179.869.184 corresponde a 16 GiB. 1.073.741.824 corresponde a 1 GiB. E 8.589.934.591 é 2³³ − 1, valor de 33 bits, acima do limite do sistema.",
    v: { i: () => qualNum(2 ** 32 - 1, ["4.294.967.295", "2.147.483.647", "17.179.869.184", "1.073.741.824", "8.589.934.591"]) },
  },
  {
    d: "media",
    e: "Em geral, em que letra de unidade fica instalado o sistema operacional Windows em um computador com um único disco?",
    o: ["C:", "A:", "B:", "Z:", "F:"],
    x: "Por convenção, a unidade C: é onde o Windows é instalado em computadores com um único disco. As letras A: e B: eram reservadas para disquetes, e as seguintes, D:, E: e assim por diante, são usadas para outras partições, unidades ópticas e dispositivos removíveis.\n\nZ: costuma ser usada para unidades de rede mapeadas, e F: é uma letra atribuída a um dispositivo adicional, como um pen drive, e não à unidade do sistema.",
  },
  {
    d: "media",
    e: "Onde o usuário deve ir, nas Configurações do Windows, para remover um programa instalado que não é mais usado?",
    o: ["Aplicativos > Aplicativos instalados", "Sistema > Tela", "Rede e Internet > Wi-Fi", "Contas > Suas informações", "Privacidade e segurança > Microfone"],
    x: "Em Configurações, o caminho é Aplicativos > Aplicativos instalados, onde a lista mostra os programas e oferece a opção de desinstalar cada um. O Painel de controle, em Programas e Recursos, também permite essa remoção.\n\nSistema > Tela ajusta resolução e brilho. Rede e Internet > Wi-Fi cuida das conexões sem fio. Contas > Suas informações trata do perfil do usuário. E Privacidade e segurança > Microfone controla a permissão de uso do microfone.",
  },
  {
    d: "media",
    e: "Qual comando, digitado no Prompt de Comando, exibe a configuração de rede do computador, como endereço IP, máscara e gateway padrão?",
    o: ["ipconfig", "dir", "cd", "cls", "ver"],
    x: "O comando ipconfig exibe as configurações de rede das interfaces do computador, como endereço IP, máscara de sub-rede e gateway padrão. Com a opção /all, mostra também endereço físico e servidores DNS.\n\nO comando dir lista os arquivos de um diretório. O cd muda o diretório atual. O cls limpa a tela do prompt. E ver mostra a versão do Windows. Nenhum deles exibe as configurações de rede.",
  },
  {
    d: "media",
    e: "Qual comando, no Prompt de Comando, lista os arquivos e as pastas do diretório atual?",
    o: ["dir", "ipconfig", "copy", "del", "cls"],
    x: "O comando dir lista os arquivos e subpastas do diretório atual, com datas, tamanhos e nomes. Com opções como /a e /s, inclui itens ocultos e subpastas. Quando a lista é longa, a opção /p mostra uma tela por vez.\n\nO ipconfig mostra a configuração de rede. O copy copia arquivos. O del exclui arquivos. E o cls limpa a tela do prompt. Nenhum deles lista o conteúdo do diretório.",
  },
  {
    d: "media",
    e: "O que caracteriza o modo de segurança do Windows?",
    o: ["Inicia com drivers e serviços mínimos", "Inicia mais rápido com gráficos extras", "Apaga todos os programas", "Bloqueia o acesso à internet do provedor", "Só funciona depois do login"],
    x: "No modo de segurança, o Windows inicia carregando apenas os drivers e serviços essenciais, o que ajuda a diagnosticar e resolver problemas causados por drivers ou programas que impedem a inicialização normal.\n\nEle não adiciona recursos gráficos, não apaga programas instalados e não tem relação com o provedor de internet. E é acessado na inicialização, antes do login normal, e não apenas depois de entrar no sistema.",
  },
  {
    d: "media",
    e: "Qual é a principal diferença entre a formatação rápida e a formatação completa de uma unidade no Windows?",
    o: ["A rápida só apaga a tabela de arquivos", "A completa é mais rápida", "A rápida verifica setores defeituosos", "A completa não apaga dados", "Não há diferença"],
    x: "Na formatação rápida, o sistema recria a estrutura de arquivos e apaga a tabela de alocação, sem verificar a superfície da unidade, o que é bem mais veloz. Na formatação completa, o Windows também verifica a unidade em busca de setores defeituosos, e leva muito mais tempo.\n\nA completa é a mais lenta, e não a mais rápida. A verificação de setores é da formatação completa. Ambas apagam o acesso aos dados. E há, sim, diferença entre elas.",
  },
  {
    d: "media",
    e: "Qual atalho fecha a janela do programa que está ativa no Windows?",
    o: ["Alt + F4", "Ctrl + F4", "Windows + F4", "Shift + F4", "F4"],
    x: "Alt + F4 fecha a janela do programa ativo, e, se nenhum programa estiver ativo e a área de trabalho estiver em foco, abre a caixa de desligamento do Windows.\n\nCtrl + F4 fecha apenas uma aba ou documento interno de alguns programas. Windows + F4 e Shift + F4 não têm função padrão para fechar janelas. E a tecla F4 sozinha, em muitos programas, repete ações ou abre a lista de endereços do Explorador de Arquivos.",
  },

  {
    d: "media",
    e: "Qual atalho abre a ferramenta de recorte do Windows para capturar apenas uma parte da tela?",
    o: ["Windows + Shift + S", "Ctrl + Shift + S", "Alt + Shift + S", "Windows + Alt + S", "Shift + PrtScn"],
    x: "Windows + Shift + S escurece a tela e permite selecionar uma área retangular, uma janela ou a tela toda para copiar a imagem capturada para a área de transferência, e mostra uma notificação para abrir a ferramenta de recorte e salvar o resultado.\n\nCtrl + Shift + S é, em vários programas, o atalho de Salvar como. Alt + Shift + S e Windows + Alt + S não têm essa função padrão. E Shift + PrtScn não é a combinação do recorte, ao passo que a tecla Print Screen sozinha captura a tela inteira.",
  },
  {
    d: "media",
    e: "Qual atalho cria uma nova área de trabalho virtual no Windows, permitindo separar grupos de janelas?",
    o: ["Windows + Ctrl + D", "Windows + D", "Windows + Tab", "Ctrl + Alt + D", "Windows + N"],
    x: "Windows + Ctrl + D cria uma nova área de trabalho virtual e já muda para ela. Com Windows + Ctrl + setas o usuário alterna entre as áreas, e com Windows + Ctrl + F4 fecha a área atual.\n\nWindows + D apenas mostra a área de trabalho, sem criar outra. Windows + Tab abre a Visão de Tarefas, que lista e permite gerir as áreas, mas não é o atalho de criação direta. Ctrl + Alt + D e Windows + N não têm essa função no sistema.",
  },

  /* ---------------------------------------------------------- difíceis --- */
  {
    d: "dificil",
    e: "Numa pasta com 12 arquivos numerados de 1 a 12, o usuário clica no 4º, segura Shift e clica no 9º, depois segura Ctrl e clica no 6º. Quantos arquivos ficam selecionados no final?",
    o: ["5", "6", "7", "4", "2"],
    x: "Clicar no 4º e, com Shift, no 9º seleciona todo o intervalo do 4º ao 9º, isto é, 6 arquivos. Em seguida, Ctrl + clique num item já selecionado o desmarca, então o 6º sai da seleção, e sobram 5 arquivos: o 4º, 5º, 7º, 8º e 9º.\n\n6 esqueceria o efeito do Ctrl + clique. 7 acrescentaria mais um arquivo em vez de desmarcar. 4 e 2 não correspondem à contagem do intervalo com uma unidade a menos.",
    v: { i: () => { const sel = new Set(); for (let k = 4; k <= 9; k++) sel.add(k); if (sel.has(6)) sel.delete(6); else sel.add(6); return qualNum(sel.size, ["5", "6", "7", "4", "2"]); } },
  },
  {
    d: "dificil",
    e: "Numa pasta há os arquivos relatorio_01.xlsx, relatorio_1.xlsx, relatorio_12.xlsx, relatorio_abc.xlsx e relatorio_01.xls. Quantos deles correspondem ao padrão relatorio_??.xlsx?",
    o: ["2", "1", "3", "4", "5"],
    x: "No padrão, cada ponto de interrogação substitui exatamente um caractere. Então o padrão exige relatorio_, dois caracteres quaisquer e a extensão .xlsx. Correspondem relatorio_01.xlsx e relatorio_12.xlsx, que têm dois caracteres depois do sublinhado.\n\nrelatorio_1.xlsx tem só um caractere, e relatorio_abc.xlsx tem três. relatorio_01.xls tem a extensão .xls, e não .xlsx. Portanto, são 2 arquivos.",
    v: { i: () => { const arqs = ["relatorio_01.xlsx", "relatorio_1.xlsx", "relatorio_12.xlsx", "relatorio_abc.xlsx", "relatorio_01.xls"]; return qualNum(arqs.filter((n) => casa("relatorio_??.xlsx", n)).length, ["2", "1", "3", "4", "5"]); } },
  },
  {
    d: "dificil",
    e: "Qual é a diferença entre hibernar e suspender o computador no Windows?",
    o: ["Hibernar grava o estado no disco e desliga", "Suspender grava o estado no disco e desliga", "Hibernar mantém tudo na RAM ligada", "Suspender apaga os programas abertos", "Não há diferença entre os dois"],
    x: "Ao hibernar, o Windows grava o conteúdo da memória num arquivo no disco e desliga o computador, sem consumo de energia; ao religar, os programas voltam como estavam. Ao suspender, o estado fica na memória RAM, que permanece alimentada em baixo consumo, e o retorno é bem mais rápido.\n\nPortanto, suspender não grava o estado no disco, hibernar não mantém a RAM ligada, suspender não apaga os programas abertos, e há diferença entre os dois modos.",
  },
  {
    d: "dificil",
    e: "Num volume NTFS, um usuário pertence a um grupo que tem permissão de Gravação numa pasta, mas outra entrada nega a gravação para esse mesmo usuário. Qual é o efeito prático?",
    o: ["A negação prevalece e ele não grava", "A permissão prevalece e ele grava", "As duas se anulam e ele só lê", "Vale a que foi criada primeiro", "O sistema pede uma senha extra"],
    x: "Nas permissões NTFS, uma entrada de negação tem precedência sobre as permissões concedidas. Assim, se o usuário está negado de gravar, ele não grava, mesmo que algum grupo a que pertença tenha essa permissão.\n\nA permissão não prevalece sobre a negação. As duas não se anulam para deixar só a leitura. A ordem de criação não decide o resultado, e o sistema não pede senha extra nesse caso: apenas nega o acesso.",
  },
  {
    d: "dificil",
    e: "O que é o Controle de Conta de Usuário (UAC) do Windows?",
    o: ["Um aviso para autorizar ações administrativas", "Um antivírus gratuito da Microsoft", "Um programa que compacta pastas", "Um serviço de backup automático", "Um limite de espaço por usuário"],
    x: "O UAC, Controle de Conta de Usuário, exibe uma solicitação de confirmação, ou de credenciais de administrador, quando um programa tenta fazer alterações que exigem privilégios elevados, o que ajuda a impedir que malwares realizem mudanças sem o conhecimento do usuário.\n\nO antivírus nativo é o Microsoft Defender. A compactação de pastas é feita por recursos de arquivos .zip. O backup automático é o Histórico de Arquivos. E o limite de espaço por usuário é uma cota de disco, recurso diferente.",
  },
  {
    d: "dificil",
    e: "O que a variável de ambiente %USERPROFILE% representa no Windows?",
    o: ["A pasta pessoal do usuário atual", "A pasta onde o Windows está instalado", "A pasta de arquivos temporários do sistema", "O nome do computador na rede", "A pasta de programas de 64 bits"],
    x: "A variável %USERPROFILE% contém o caminho da pasta pessoal do usuário que está logado, como C:\\Users\\Maria, onde ficam Documentos, Downloads e Área de Trabalho. Pode ser usada em comandos e atalhos sem precisar escrever o caminho completo.\n\nA pasta de instalação do Windows é indicada por %SystemRoot%. Os arquivos temporários usam %TEMP%. O nome do computador está em %COMPUTERNAME%. E a pasta de programas de 64 bits é %ProgramFiles%.",
  },
  {
    d: "dificil",
    e: "Qual recurso do Windows criptografa uma unidade inteira, protegendo os dados caso o disco seja retirado do computador?",
    o: ["BitLocker", "Windows Update", "Firewall do Windows", "Histórico de Arquivos", "Ponto de restauração"],
    x: "O BitLocker criptografa o volume inteiro, como o disco do sistema ou uma unidade externa, e exige uma chave ou senha para acessar os dados. Assim, mesmo que o disco seja retirado e ligado a outro computador, as informações permanecem ilegíveis.\n\nO Windows Update instala atualizações. O firewall filtra conexões de rede. O Histórico de Arquivos faz cópias de segurança. E o ponto de restauração guarda configurações do sistema. Nenhum deles criptografa a unidade.",
  },
  {
    d: "dificil",
    e: "Um arquivo de vídeo de 5 GiB pode ser copiado para um pen drive formatado em FAT32?",
    o: ["Não, pois passa do limite de 4 GiB por arquivo", "Sim, pois o FAT32 aceita qualquer tamanho", "Sim, se o pen drive tiver mais de 4 GiB livres", "Não, pois o FAT32 só aceita texto", "Sim, mas só se estiver compactado em 4 GiB"],
    x: "No FAT32, o tamanho máximo de um arquivo é 4 GiB menos 1 byte. Como o vídeo tem 5 GiB, ele não cabe, mesmo que o pen drive tenha espaço livre de sobra. A solução é formatar em NTFS ou exFAT, que suportam arquivos maiores, ou dividir o arquivo.\n\nO FAT32 não aceita qualquer tamanho. Não basta haver espaço livre. O sistema aceita qualquer tipo de arquivo, e não só texto. E compactar só resolve se o resultado ficar abaixo de 4 GiB, o que não está dito no enunciado.",
    v: { i: () => unicoV([5 * 2 ** 30 > 2 ** 32 - 1, false, false, false, false]) },
  },
  {
    d: "dificil",
    e: "Qual é a principal diferença entre excluir um arquivo com a tecla Delete e com Shift + Delete, no disco interno do computador?",
    o: ["Delete envia à Lixeira e Shift + Delete exclui direto", "Delete exclui direto e Shift + Delete envia à Lixeira", "Os dois enviam à Lixeira do mesmo modo", "Shift + Delete criptografa o arquivo", "Delete move o arquivo para a nuvem"],
    x: "A tecla Delete envia o arquivo para a Lixeira, de onde ele pode ser restaurado. Já Shift + Delete exclui o arquivo de forma permanente, sem passar pela Lixeira, o que dificulta a recuperação pelos meios comuns.\n\nAs demais alternativas invertem ou confundem essa relação: os dois métodos não se comportam do mesmo modo, Shift + Delete não criptografa nada, e Delete não envia o arquivo para a nuvem.",
  },
  {
    d: "dificil",
    e: "Qual ferramenta do Windows permite gerenciar os drivers dos dispositivos de hardware, por exemplo, atualizar ou desativar o driver de uma placa?",
    o: ["Gerenciador de Dispositivos", "Gerenciador de Tarefas", "Monitor de Recursos", "Visualizador de Eventos", "Limpeza de Disco"],
    x: "O Gerenciador de Dispositivos lista todo o hardware reconhecido pelo Windows e permite atualizar, reverter, desativar ou desinstalar os drivers de cada dispositivo, além de mostrar problemas de funcionamento.\n\nO Gerenciador de Tarefas mostra processos e desempenho. O Monitor de Recursos detalha o uso de CPU, memória, disco e rede. O Visualizador de Eventos registra ocorrências do sistema. E a Limpeza de Disco remove arquivos temporários, sem lidar com drivers.",
  },
];
