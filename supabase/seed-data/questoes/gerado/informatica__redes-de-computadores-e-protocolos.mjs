/* Redes de computadores e protocolos (49 questões) — informatica.

   Autorais, escritas por Claude (Anthropic) em 2026-10-09 seguindo as cinco
   regras de CONTINUAR-MATERIAS-POR-OBJETIVO.md. Nenhuma é atribuída a banca
   ou a prova real.

   Conferência do gabarito: 15 de 49 recalculadas por código que chega à
   resposta por outro caminho (ver .rascunho/questoes-objetivo/informatica__redes-de-computadores-e-protocolos.mjs);
   34 conceituais aguardam a revisão independente listada no relatório.

   Montado por scripts/montar-questoes-objetivo.mjs; gabarito redistribuído
   por scripts/rebalancear-gabarito.mjs. Relatório em
   _relatorios/informatica__redes-de-computadores-e-protocolos.json. */

export const questoes = [
  {
    materia: "informatica",
    tema: "Redes de computadores e protocolos",
    dificuldade: "facil",
    enunciado:
      "Como se chama uma rede que interliga computadores em uma área pequena, como uma casa, uma escola ou um escritório?",
    opcoes: [
      "WAN",
      "MAN",
      "VPN",
      "DNS",
      "LAN",
    ],
    correta: 4,
    explicacao:
      "A LAN, de Local Area Network, é a rede local: interliga equipamentos em uma área restrita, como uma casa ou um prédio, em geral com alta velocidade. É o tipo mais comum de rede doméstica e de escritório.\n\nA WAN abrange grandes distâncias, como cidades e países, e a Internet é o maior exemplo. A MAN cobre uma cidade ou uma região metropolitana. A VPN é uma rede privada virtual, construída sobre uma rede pública. E o DNS não é um tipo de rede, mas um serviço de nomes.",
  },
  {
    materia: "informatica",
    tema: "Redes de computadores e protocolos",
    dificuldade: "facil",
    enunciado:
      "Qual equipamento interliga redes diferentes e escolhe o melhor caminho para encaminhar os pacotes de dados?",
    opcoes: [
      "Roteador",
      "Hub",
      "Teclado",
      "Cabo coaxial",
      "Monitor",
    ],
    correta: 0,
    explicacao:
      "O roteador interliga redes distintas, como a rede de casa e a Internet, e decide por qual caminho cada pacote deve seguir, com base no endereço IP de destino. Em casa, costuma vir combinado com um ponto de acesso Wi-Fi.\n\nO hub apenas repete o sinal para todas as portas, sem escolher caminhos. O teclado e o monitor são periféricos de entrada e de saída, e não equipamentos de rede. E o cabo coaxial é um meio de transmissão, que leva o sinal, mas não toma decisões.",
  },
  {
    materia: "informatica",
    tema: "Redes de computadores e protocolos",
    dificuldade: "facil",
    enunciado:
      "Qual é a função do serviço DNS na Internet?",
    opcoes: [
      "Traduzir nomes de sites em endereços IP",
      "Proteger o computador contra vírus",
      "Distribuir endereços IP automaticamente",
      "Enviar mensagens de correio eletrônico",
      "Transferir arquivos entre computadores",
    ],
    correta: 0,
    explicacao:
      "O DNS, de Domain Name System, funciona como uma agenda da Internet: traduz um nome fácil de lembrar, como www.exemplo.com.br, no endereço IP que os computadores usam para se encontrar. Sem ele, seria preciso digitar os números de cada site.\n\nA proteção contra vírus é papel do antivírus. A distribuição automática de endereços é do DHCP. O envio de e-mails usa o SMTP. E a transferência de arquivos usa protocolos como o FTP.",
  },
  {
    materia: "informatica",
    tema: "Redes de computadores e protocolos",
    dificuldade: "facil",
    enunciado:
      "Qual protocolo atribui endereços IP automaticamente aos dispositivos que entram em uma rede?",
    opcoes: [
      "DHCP",
      "DNS",
      "HTTP",
      "SMTP",
      "FTP",
    ],
    correta: 0,
    explicacao:
      "O DHCP, de Dynamic Host Configuration Protocol, entrega a cada dispositivo que se conecta um endereço IP, a máscara de sub-rede, o gateway e o DNS, sem que o usuário precise configurar nada. É o que faz o celular receber um endereço ao entrar no Wi-Fi.\n\nO DNS traduz nomes em endereços IP. O HTTP transfere páginas da web. O SMTP envia e-mails. E o FTP transfere arquivos. Nenhum deles distribui endereços IP.",
  },
  {
    materia: "informatica",
    tema: "Redes de computadores e protocolos",
    dificuldade: "facil",
    enunciado:
      "Qual protocolo é usado para acessar páginas da web com criptografia, o que é indicado pelo cadeado no navegador?",
    opcoes: [
      "HTTP",
      "FTP",
      "HTTPS",
      "DHCP",
      "SMTP",
    ],
    correta: 2,
    explicacao:
      "O HTTPS é o HTTP protegido por criptografia, o que impede que terceiros leiam ou alterem os dados no caminho, como senhas e números de cartão. O navegador mostra o cadeado e o endereço começa por https.\n\nO HTTP leva os dados sem proteção. O FTP transfere arquivos, em geral sem criptografia. O DHCP distribui endereços IP. E o SMTP envia mensagens de e-mail. Só o HTTPS combina a navegação em páginas com a criptografia.",
  },
  {
    materia: "informatica",
    tema: "Redes de computadores e protocolos",
    dificuldade: "facil",
    enunciado:
      "Qual protocolo é usado, em sua função principal, para enviar mensagens de correio eletrônico entre servidores?",
    opcoes: [
      "DNS",
      "HTTP",
      "DHCP",
      "SMTP",
      "FTP",
    ],
    correta: 3,
    explicacao:
      "O SMTP, de Simple Mail Transfer Protocol, envia as mensagens de e-mail do programa do usuário para o servidor e de um servidor para outro. Para ler as mensagens recebidas, usam-se outros protocolos, como o POP3 e o IMAP.\n\nO DNS traduz nomes em endereços IP. O HTTP leva páginas da web. O DHCP distribui endereços IP. E o FTP transfere arquivos. Só o SMTP tem como função o envio de e-mails.",
  },
  {
    materia: "informatica",
    tema: "Redes de computadores e protocolos",
    dificuldade: "facil",
    enunciado:
      "O que identifica, de forma única, um dispositivo conectado a uma rede que usa o protocolo TCP/IP?",
    opcoes: [
      "O tamanho do monitor",
      "O endereço IP",
      "O nome do sistema operacional",
      "A cor do cabo de rede",
      "O volume do alto-falante",
    ],
    correta: 1,
    explicacao:
      "O endereço IP é o número que identifica o dispositivo na rede, e permite que os pacotes cheguem até ele. Pode ser atribuído automaticamente, pelo DHCP, ou configurado à mão.\n\nO tamanho do monitor, a cor do cabo e o volume do alto-falante não têm relação com a identificação na rede. E o nome do sistema operacional informa qual programa roda no equipamento, mas não o localiza na rede: vários equipamentos podem usar o mesmo sistema.",
  },
  {
    materia: "informatica",
    tema: "Redes de computadores e protocolos",
    dificuldade: "facil",
    enunciado:
      "Qual é o nome do padrão de redes sem fio, mais conhecido como Wi-Fi, definido pelo IEEE?",
    opcoes: [
      "802.3",
      "RJ-45",
      "802.11",
      "HTTP",
      "ICMP",
    ],
    correta: 2,
    explicacao:
      "O Wi-Fi corresponde à família de padrões IEEE 802.11, com versões como 802.11n, 802.11ac e 802.11ax. Define como os equipamentos se comunicam por ondas de rádio, nas faixas de 2,4 GHz e de 5 GHz.\n\nO 802.3 é o padrão da Ethernet, a rede com fio. O RJ-45 é o conector dos cabos de rede de par trançado. O HTTP é um protocolo de aplicação, para a web. E o ICMP é um protocolo de mensagens de controle e de erro, usado pelo ping.",
  },
  {
    materia: "informatica",
    tema: "Redes de computadores e protocolos",
    dificuldade: "facil",
    enunciado:
      "Qual é o nome do conector usado nas pontas dos cabos de rede de par trançado?",
    opcoes: [
      "USB",
      "HDMI",
      "VGA",
      "RJ-45",
      "P2",
    ],
    correta: 3,
    explicacao:
      "O conector RJ-45 tem 8 pinos e fecha as pontas dos cabos de par trançado usados em redes Ethernet. Ele encaixa na placa de rede do computador e nas portas de roteadores e switches.\n\nO USB liga periféricos como pen drives e teclados. O HDMI leva imagem e som digitais a monitores e televisores. O VGA leva imagem analógica a monitores. E o P2 é o conector de áudio dos fones de ouvido. Nenhum deles é o de cabos de rede.",
  },
  {
    materia: "informatica",
    tema: "Redes de computadores e protocolos",
    dificuldade: "facil",
    enunciado:
      "Para que serve o comando ping, muito usado para diagnosticar problemas de rede?",
    opcoes: [
      "Apagar arquivos temporários",
      "Aumentar a velocidade da conexão",
      "Instalar programas de rede",
      "Mudar a senha do Wi-Fi",
      "Testar se outro equipamento responde na rede",
    ],
    correta: 4,
    explicacao:
      "O ping envia pequenas mensagens a um endereço e espera a resposta, o que mostra se o equipamento está alcançável e quanto tempo a resposta leva, em milissegundos. É o primeiro teste de quem investiga uma falha de conexão.\n\nEle não apaga arquivos, não acelera a conexão, não instala programas e não muda senhas. Apenas diagnostica: mede a conectividade e o atraso entre o computador e o destino.",
  },
  {
    materia: "informatica",
    tema: "Redes de computadores e protocolos",
    dificuldade: "facil",
    enunciado:
      "Como se define a Internet, no contexto das redes de computadores?",
    opcoes: [
      "Um programa de navegação instalado no computador",
      "Um tipo de cabo de rede de alta velocidade",
      "Uma rede mundial formada pela interligação de várias redes",
      "Uma rede restrita aos funcionários de uma empresa",
      "Um sinônimo de página da web",
    ],
    correta: 2,
    explicacao:
      "A Internet é a rede mundial de computadores: reúne milhões de redes de empresas, universidades, governos e residências, interligadas pelo conjunto de protocolos TCP/IP. A web é só um dos serviços que funcionam sobre ela.\n\nO navegador é um programa para acessar a web. O cabo de alta velocidade é um meio físico. Uma rede restrita aos funcionários de uma empresa é uma intranet. E a página da web é um documento acessado pela Internet, e não a própria rede.",
  },
  {
    materia: "informatica",
    tema: "Redes de computadores e protocolos",
    dificuldade: "media",
    enunciado:
      "Em qual camada do modelo OSI atua o roteador, que escolhe o caminho dos pacotes com base no endereço IP?",
    opcoes: [
      "Enlace de dados",
      "Física",
      "Rede",
      "Transporte",
      "Aplicação",
    ],
    correta: 2,
    explicacao:
      "A camada de rede, a terceira do modelo OSI, é a responsável pelo endereçamento lógico, o endereço IP, e pelo roteamento dos pacotes entre redes. É nela que atua o roteador.\n\nA camada de enlace de dados usa o endereço físico, MAC, e é onde atua o switch. A camada física cuida do sinal elétrico, óptico ou de rádio. A de transporte cuida da comunicação entre processos, com TCP e UDP. E a de aplicação reúne serviços como web e e-mail.",
  },
  {
    materia: "informatica",
    tema: "Redes de computadores e protocolos",
    dificuldade: "media",
    enunciado:
      "Em qual camada do modelo OSI atua o switch, que encaminha os quadros com base no endereço MAC?",
    opcoes: [
      "Rede",
      "Física",
      "Sessão",
      "Enlace de dados",
      "Apresentação",
    ],
    correta: 3,
    explicacao:
      "O switch atua na camada de enlace de dados, a segunda do modelo OSI. Ele aprende o endereço MAC de cada equipamento ligado às suas portas e encaminha cada quadro apenas à porta do destinatário, o que reduz o tráfego desnecessário.\n\nA camada de rede é a do roteador, que usa o IP. A camada física trata do sinal e dos cabos. A de sessão controla o diálogo entre aplicações. E a de apresentação cuida de formato e de codificação dos dados.",
  },
  {
    materia: "informatica",
    tema: "Redes de computadores e protocolos",
    dificuldade: "media",
    enunciado:
      "O que faz um hub ao receber dados por uma de suas portas?",
    opcoes: [
      "Repete os dados para todas as outras portas",
      "Entrega os dados só à porta do destinatário",
      "Escolhe o melhor caminho até a Internet",
      "Traduz nomes em endereços IP",
      "Bloqueia os dados suspeitos",
    ],
    correta: 0,
    explicacao:
      "O hub é um repetidor simples, da camada física: não analisa os dados e os repete a todas as outras portas, o que gera tráfego desnecessário e colisões. Por isso foi substituído pelo switch.\n\nEntregar só ao destinatário é o que faz o switch, pelo endereço MAC. Escolher o caminho até a Internet é papel do roteador. Traduzir nomes em endereços é o serviço de DNS. E bloquear dados suspeitos é a função de um firewall.",
  },
  {
    materia: "informatica",
    tema: "Redes de computadores e protocolos",
    dificuldade: "media",
    enunciado:
      "Qual protocolo de transporte não estabelece conexão nem garante a entrega, sendo usado em transmissões ao vivo e chamadas de voz?",
    opcoes: [
      "TCP",
      "UDP",
      "HTTP",
      "SMTP",
      "FTP",
    ],
    correta: 1,
    explicacao:
      "O UDP envia os dados sem abrir conexão e sem confirmar a entrega, o que o torna mais rápido e leve. Serve a transmissões ao vivo e à voz pela Internet, em que perder um pedaço é melhor que atrasar tudo para reenviá-lo.\n\nO TCP, ao contrário, abre conexão, confirma a entrega e reenvia o que se perdeu. O HTTP, o SMTP e o FTP são protocolos de aplicação, e não de transporte: todos eles, em geral, usam o TCP por baixo.",
  },
  {
    materia: "informatica",
    tema: "Redes de computadores e protocolos",
    dificuldade: "media",
    enunciado:
      "Qual é a sequência de mensagens do handshake de três vias, que abre uma conexão TCP?",
    opcoes: [
      "ACK, SYN e FIN",
      "SYN, SYN-ACK e ACK",
      "FIN, ACK e RST",
      "GET, POST e PUT",
      "DISCOVER, OFFER e REQUEST",
    ],
    correta: 1,
    explicacao:
      "Para abrir uma conexão TCP, o cliente envia um SYN, o servidor responde com um SYN-ACK, e o cliente confirma com um ACK. Só depois disso os dados passam a ser trocados, com a conexão estabelecida dos dois lados.\n\nFIN e RST são usados para encerrar ou abortar conexões. GET, POST e PUT são métodos do protocolo HTTP. E DISCOVER, OFFER e REQUEST fazem parte da troca do DHCP, que distribui endereços IP.",
  },
  {
    materia: "informatica",
    tema: "Redes de computadores e protocolos",
    dificuldade: "media",
    enunciado:
      "Qual é a função do NAT em um roteador doméstico?",
    opcoes: [
      "Distribuir vírus pela rede",
      "Traduzir endereços privados em um endereço público",
      "Criptografar todas as páginas visitadas",
      "Aumentar o sinal do Wi-Fi",
      "Converter vídeos para outro formato",
    ],
    correta: 1,
    explicacao:
      "O NAT, de Network Address Translation, permite que vários dispositivos de uma rede local, com endereços privados, saiam para a Internet usando um único endereço público. O roteador mantém uma tabela que lembra qual dispositivo fez cada pedido.\n\nNão distribui vírus. A criptografia de páginas é feita pelo HTTPS. O aumento do sinal depende de antenas e repetidores. E a conversão de vídeos é tarefa de programas de edição, e não do roteador.",
  },
  {
    materia: "informatica",
    tema: "Redes de computadores e protocolos",
    dificuldade: "media",
    enunciado:
      "O que é o gateway padrão, configurado em um computador de uma rede local?",
    opcoes: [
      "O endereço MAC da placa de rede",
      "O servidor que guarda os e-mails",
      "O nome do computador na rede",
      "Equipamento de saída para outras redes",
      "O cabo que liga o computador ao switch",
    ],
    correta: 3,
    explicacao:
      "O gateway padrão é o equipamento, em geral o roteador, para o qual o computador envia tudo o que não pertence à sua própria rede, como o tráfego para a Internet. Sem ele configurado, o computador só conversa com a rede local.\n\nO endereço MAC identifica a placa de rede. O servidor de e-mails guarda mensagens, e é outro serviço. O nome do computador é um identificador de texto. E o cabo ligado ao switch é um meio físico, e não um endereço de configuração.",
  },
  {
    materia: "informatica",
    tema: "Redes de computadores e protocolos",
    dificuldade: "media",
    enunciado:
      "Qual protocolo descobre o endereço MAC de um equipamento a partir do endereço IP dele, dentro da rede local?",
    opcoes: [
      "ARP",
      "DNS",
      "DHCP",
      "ICMP",
      "SMTP",
    ],
    correta: 0,
    explicacao:
      "O ARP, de Address Resolution Protocol, pergunta a todos os equipamentos da rede local quem tem determinado endereço IP, e o dono responde com o seu endereço MAC. Assim, os quadros podem ser entregues dentro da rede local.\n\nO DNS traduz nomes em endereços IP. O DHCP distribui endereços IP. O ICMP leva mensagens de controle e de erro, como as do ping. E o SMTP envia e-mails. Só o ARP faz a ligação entre o endereço IP e o endereço MAC.",
  },
  {
    materia: "informatica",
    tema: "Redes de computadores e protocolos",
    dificuldade: "media",
    enunciado:
      "Quais são as portas padrão dos protocolos HTTP e HTTPS, respectivamente?",
    opcoes: [
      "21 e 22",
      "80 e 443",
      "25 e 110",
      "53 e 67",
      "143 e 993",
    ],
    correta: 1,
    explicacao:
      "O HTTP usa a porta 80, e o HTTPS usa a porta 443. É por isso que, ao digitar um endereço no navegador, ele se conecta por uma dessas duas portas, conforme o prefixo.\n\nAs portas 21 e 22 são do FTP e do SSH. As portas 25 e 110 são do SMTP, no envio, e do POP3, na leitura de e-mails. A 53 é do DNS, e a 67 é do servidor DHCP. E as portas 143 e 993 são do IMAP, sem e com criptografia.",
  },
  {
    materia: "informatica",
    tema: "Redes de computadores e protocolos",
    dificuldade: "media",
    enunciado:
      "Qual é a diferença entre os protocolos POP3 e IMAP, usados para ler e-mails?",
    opcoes: [
      "O POP3 mantém tudo no servidor e sincroniza os dispositivos",
      "O POP3 serve só para enviar e o IMAP só para receber",
      "O IMAP mantém as mensagens no servidor e sincroniza os dispositivos",
      "Os dois são sinônimos e funcionam do mesmo jeito",
      "O IMAP só funciona sem conexão com a Internet",
    ],
    correta: 2,
    explicacao:
      "O IMAP mantém as mensagens no servidor e sincroniza pastas e leituras entre os dispositivos: o que se lê no celular aparece como lido no computador. O POP3, em seu uso clássico, baixa as mensagens para o computador e, em geral, as remove do servidor.\n\nOs dois servem para receber, e o envio fica a cargo do SMTP. Não são sinônimos, porque o comportamento é diferente. E o IMAP precisa de conexão com o servidor para sincronizar as mensagens.",
  },
  {
    materia: "informatica",
    tema: "Redes de computadores e protocolos",
    dificuldade: "media",
    enunciado:
      "Em uma topologia em estrela, o que acontece quando o equipamento central, como o switch, deixa de funcionar?",
    opcoes: [
      "Os computadores perdem a comunicação entre si",
      "Só um computador é afetado",
      "A rede continua funcionando normalmente",
      "Os cabos passam a ser desnecessários",
      "A rede vira uma rede em anel",
    ],
    correta: 0,
    explicacao:
      "Na topologia em estrela, todos os computadores se ligam a um ponto central, como um switch. A vantagem é que o problema de um cabo afeta só um equipamento. A desvantagem é que, se o equipamento central falha, a comunicação de toda a rede se perde.\n\nPor isso a falha do centro afeta todos, e não só um computador. A rede não segue funcionando como se nada tivesse ocorrido, os cabos continuam necessários, e a topologia não muda sozinha para anel.",
  },
  {
    materia: "informatica",
    tema: "Redes de computadores e protocolos",
    dificuldade: "media",
    enunciado:
      "Qual é a principal vantagem da topologia em malha em relação às outras?",
    opcoes: [
      "Usar a menor quantidade possível de cabos",
      "Depender de um único equipamento central",
      "Ser a mais barata de instalar",
      "Funcionar só com redes sem fio",
      "Redundância, pois há vários caminhos entre os equipamentos",
    ],
    correta: 4,
    explicacao:
      "Na topologia em malha, os equipamentos têm mais de um caminho entre si. Se um enlace falha, o tráfego segue por outro, o que dá alta confiabilidade, como na Internet e em redes críticas. O preço é o custo e a complexidade de ter muitas ligações.\n\nPor isso ela não usa poucos cabos e não é a mais barata. Também não depende de um único equipamento central, que é a característica da estrela. E existe tanto com fio quanto sem fio.",
  },
  {
    materia: "informatica",
    tema: "Redes de computadores e protocolos",
    dificuldade: "media",
    enunciado:
      "Para que serve uma VPN, a rede privada virtual?",
    opcoes: [
      "Aumentar a velocidade da Internet",
      "Limpar arquivos temporários do computador",
      "Criar uma conexão privada e protegida sobre uma rede pública",
      "Substituir o antivírus",
      "Converter endereços IP em nomes",
    ],
    correta: 2,
    explicacao:
      "A VPN, de Virtual Private Network, cria um túnel criptografado sobre uma rede pública, como a Internet, o que permite acessar com segurança a rede de uma empresa, ou proteger o tráfego em um Wi-Fi aberto.\n\nEla não aumenta a velocidade, e muitas vezes a reduz um pouco. Não limpa arquivos, não substitui o antivírus e não converte endereços IP em nomes, que é a tarefa do DNS. Seu valor está em proteger e em isolar o caminho dos dados.",
  },
  {
    materia: "informatica",
    tema: "Redes de computadores e protocolos",
    dificuldade: "media",
    enunciado:
      "Qual é a função de um firewall em uma rede?",
    opcoes: [
      "Distribuir endereços IP aos computadores",
      "Filtrar o tráfego, permitindo ou bloqueando conexões",
      "Traduzir nomes em endereços",
      "Guardar cópias de segurança",
      "Aumentar o alcance do sinal sem fio",
    ],
    correta: 1,
    explicacao:
      "O firewall controla o que entra e o que sai de uma rede ou de um computador, com regras que permitem ou bloqueiam conexões por endereço, porta ou protocolo. É uma das principais barreiras contra acessos indevidos.\n\nDistribuir endereços IP é o papel do DHCP. Traduzir nomes é o do DNS. Guardar cópias de segurança é o do backup. E aumentar o alcance do sinal sem fio é o de repetidores e de pontos de acesso. O firewall não faz nenhuma dessas tarefas.",
  },
  {
    materia: "informatica",
    tema: "Redes de computadores e protocolos",
    dificuldade: "media",
    enunciado:
      "Qual é a função de um servidor proxy em uma rede?",
    opcoes: [
      "Fabricar cabos de rede",
      "Gerar senhas fortes",
      "Gravar vídeos",
      "Intermediar os acessos da rede",
      "Substituir o sistema operacional",
    ],
    correta: 3,
    explicacao:
      "O proxy fica entre os usuários e a Internet: recebe os pedidos de acesso, pode aplicar regras de filtragem, registrar o uso e guardar respostas em cache, o que acelera acessos repetidos. É comum em empresas e escolas.\n\nNão fabrica cabos nem gera senhas. Não grava vídeos, e não tem relação com a câmera. E não substitui o sistema operacional, pois é um serviço que roda sobre ele, em um servidor da rede.",
  },
  {
    materia: "informatica",
    tema: "Redes de computadores e protocolos",
    dificuldade: "media",
    enunciado:
      "Qual é uma vantagem da fibra óptica sobre os cabos de cobre?",
    opcoes: [
      "Imunidade a interferências eletromagnéticas e alcance maior",
      "Custo sempre menor que o dos outros cabos",
      "Funcionar por sinais elétricos de baixa tensão",
      "Poder ser dobrada sem limite, sem perder o sinal",
      "Dispensar equipamentos nas pontas",
    ],
    correta: 0,
    explicacao:
      "A fibra óptica leva o sinal na forma de luz, e por isso não sofre interferência eletromagnética e alcança distâncias muito maiores, com velocidades altas. É o meio usado nos enlaces de longa distância e nas redes de provedores.\n\nO custo dos equipamentos costuma ser maior, e não menor. O sinal é luminoso, e não elétrico. A fibra tem raio mínimo de curvatura, e se dobrar demais perde o sinal. E ainda precisa de equipamentos nas pontas, para converter a luz em sinais elétricos.",
  },
  {
    materia: "informatica",
    tema: "Redes de computadores e protocolos",
    dificuldade: "media",
    enunciado:
      "Qual é, em geral, o comprimento máximo de um segmento de cabo de par trançado em uma rede Ethernet, sem repetidores?",
    opcoes: [
      "10 metros",
      "1 quilômetro",
      "5 quilômetros",
      "1 metro",
      "100 metros",
    ],
    correta: 4,
    explicacao:
      "Em redes Ethernet com cabo de par trançado, como os UTP das categorias 5e e 6, o limite de um segmento é de 100 metros entre o equipamento e a tomada. Acima disso, o sinal se degrada, e é preciso um repetidor ou um switch.\n\n10 metros e 1 metro são limites pequenos demais para uma rede de escritório. 1 quilômetro e 5 quilômetros são distâncias que só a fibra óptica alcança sem apoio de equipamentos intermediários.",
  },
  {
    materia: "informatica",
    tema: "Redes de computadores e protocolos",
    dificuldade: "media",
    enunciado:
      "Qual característica distingue a banda de 2,4 GHz da banda de 5 GHz em redes Wi-Fi?",
    opcoes: [
      "A de 5 GHz alcança sempre mais longe que a de 2,4 GHz",
      "As duas têm o mesmo alcance e a mesma velocidade",
      "A de 2,4 GHz só funciona com cabo",
      "A de 2,4 GHz alcança mais longe, mas é mais congestionada",
      "A de 5 GHz não aceita celulares",
    ],
    correta: 3,
    explicacao:
      "A faixa de 2,4 GHz atravessa melhor paredes e alcança mais longe, mas é mais usada por vizinhos, micro-ondas e dispositivos Bluetooth, o que a deixa mais congestionada e, em geral, mais lenta. A de 5 GHz é mais rápida e menos disputada, porém com alcance menor.\n\nPor isso a de 5 GHz não alcança sempre mais longe, e as duas não são iguais. A de 2,4 GHz é sem fio, e a de 5 GHz é aceita por celulares recentes.",
  },
  {
    materia: "informatica",
    tema: "Redes de computadores e protocolos",
    dificuldade: "media",
    enunciado:
      "O Bluetooth é um exemplo de qual tipo de rede, pelo alcance?",
    opcoes: [
      "WAN, rede de longa distância",
      "MAN, rede metropolitana",
      "VPN, rede privada virtual",
      "PAN, rede de área pessoal",
      "Intranet corporativa",
    ],
    correta: 3,
    explicacao:
      "O Bluetooth liga dispositivos muito próximos, como fones, teclados e relógios inteligentes, em um alcance de poucos metros. Esse tipo de rede é a PAN, de Personal Area Network, a rede de área pessoal.\n\nA WAN cobre longas distâncias, e a MAN, uma cidade. A VPN é um túnel privado sobre uma rede pública, e não uma classificação por alcance. E a intranet é uma rede interna de uma organização, que pode usar vários meios.",
  },
  {
    materia: "informatica",
    tema: "Redes de computadores e protocolos",
    dificuldade: "media",
    enunciado:
      "Qual é o tamanho de um endereço MAC, o endereço físico de uma placa de rede?",
    opcoes: [
      "32 bits",
      "64 bits",
      "128 bits",
      "16 bits",
      "48 bits",
    ],
    correta: 4,
    explicacao:
      "O endereço MAC tem 48 bits, ou 6 bytes, escritos em 12 dígitos hexadecimais, como 00:1A:2B:3C:4D:5E. Os 3 primeiros bytes identificam o fabricante, e os 3 últimos, a placa.\n\n32 bits é o tamanho de um endereço IPv4. 128 bits é o tamanho de um endereço IPv6. 64 bits é o tamanho de alguns identificadores, como o EUI-64, mas não do MAC comum. E 16 bits é o tamanho de um número de porta, e não de um endereço de placa.",
  },
  {
    materia: "informatica",
    tema: "Redes de computadores e protocolos",
    dificuldade: "media",
    enunciado:
      "Qual é a máscara de sub-rede correspondente à notação /26?",
    opcoes: [
      "255.255.255.128",
      "255.255.255.224",
      "255.255.255.240",
      "255.255.255.192",
      "255.255.192.0",
    ],
    correta: 3,
    explicacao:
      "A notação /26 indica 26 bits iguais a 1 no começo da máscara: os 24 primeiros formam os três octetos 255, e os 2 restantes, no último octeto, dão 11000000, que vale 128 + 64 = 192. A máscara é 255.255.255.192.\n\n255.255.255.128 é a máscara /25, e 255.255.255.224 é a /27. 255.255.255.240 é a /28. E 255.255.192.0 é a /18, que tem os 2 bits extras no terceiro octeto, e não no último.",
  },
  {
    materia: "informatica",
    tema: "Redes de computadores e protocolos",
    dificuldade: "media",
    enunciado:
      "Quantos endereços de hosts utilizáveis, isto é, que podem ser atribuídos a equipamentos, tem uma sub-rede /27?",
    opcoes: [
      "32",
      "30",
      "62",
      "14",
      "254",
    ],
    correta: 1,
    explicacao:
      "Em uma sub-rede /27, restam 32 − 27 = 5 bits para os hosts, o que dá 2⁵ = 32 endereços. Dois deles têm função própria: o primeiro, o endereço da rede, e o último, o de broadcast. Sobram 32 − 2 = 30 endereços utilizáveis.\n\n32 é o total, contando os dois reservados. 62 é o número de hosts de uma /26. 14 é o de uma /28. E 254 é o de uma /24, que tem 8 bits de host. Cada bit a mais na máscara reduz os hosts, aproximadamente, à metade.",
  },
  {
    materia: "informatica",
    tema: "Redes de computadores e protocolos",
    dificuldade: "media",
    enunciado:
      "Qual é o endereço da rede à qual pertence o host 192.168.10.77, com a máscara /26?",
    opcoes: [
      "192.168.10.0",
      "192.168.10.77",
      "192.168.10.128",
      "192.168.10.127",
      "192.168.10.64",
    ],
    correta: 4,
    explicacao:
      "Com /26, o último octeto é dividido em blocos de 64 endereços: 0, 64, 128 e 192. O número 77 está entre 64 e 127, e o endereço da rede é o início do bloco, 192.168.10.64. O broadcast desse bloco é 192.168.10.127.\n\n192.168.10.0 seria o início de outro bloco, o anterior. 192.168.10.77 é o próprio host. 192.168.10.128 é o início do bloco seguinte. E 192.168.10.127 é o endereço de broadcast, e não o da rede.",
  },
  {
    materia: "informatica",
    tema: "Redes de computadores e protocolos",
    dificuldade: "media",
    enunciado:
      "Qual é o endereço de broadcast da rede à qual pertence o host 172.16.5.200, com a máscara /27?",
    opcoes: [
      "172.16.5.255",
      "172.16.5.192",
      "172.16.5.224",
      "172.16.5.200",
      "172.16.5.223",
    ],
    correta: 4,
    explicacao:
      "Com /27, o último octeto é dividido em blocos de 32 endereços: 0, 32, 64, 96, 128, 160, 192, 224. O número 200 está no bloco que vai de 192 a 223. O primeiro endereço, 172.16.5.192, é o da rede, e o último, 172.16.5.223, é o de broadcast.\n\n172.16.5.255 seria o broadcast de uma rede /24. 172.16.5.192 é o endereço da rede. 172.16.5.224 é o início do bloco seguinte. E 172.16.5.200 é o próprio host.",
  },
  {
    materia: "informatica",
    tema: "Redes de computadores e protocolos",
    dificuldade: "media",
    enunciado:
      "O endereço 172.20.5.9 pertence a qual classe de endereços IPv4, e é público ou privado?",
    opcoes: [
      "Classe B, privado",
      "Classe B, público",
      "Classe A, privado",
      "Classe C, privado",
      "Classe C, público",
    ],
    correta: 0,
    explicacao:
      "O primeiro octeto, 172, está entre 128 e 191, o que o coloca na classe B. A faixa privada 172.16.0.0 a 172.31.255.255 reserva endereços para uso interno, e 172.20.5.9 está dentro dela. Portanto, é um endereço de classe B e privado.\n\nA classe A vai de 1 a 126 no primeiro octeto, e a classe C, de 192 a 223. E dizer que é público erra a faixa: os endereços 172.16 a 172.31 não são roteados na Internet, e só valem dentro das redes locais.",
  },
  {
    materia: "informatica",
    tema: "Redes de computadores e protocolos",
    dificuldade: "media",
    enunciado:
      "O endereço IPv4 escrito em binário como 11000000.10101000.00000001.00001010 corresponde, em decimal, a qual endereço?",
    opcoes: [
      "192.168.1.5",
      "192.168.1.10",
      "192.168.0.10",
      "190.168.1.10",
      "192.169.1.10",
    ],
    correta: 1,
    explicacao:
      "Cada grupo de 8 bits vira um número de 0 a 255. O primeiro, 11000000, vale 128 + 64 = 192. O segundo, 10101000, vale 128 + 32 + 8 = 168. O terceiro, 00000001, vale 1. E o quarto, 00001010, vale 8 + 2 = 10. O endereço é 192.168.1.10.\n\nAs outras opções mudam um dos grupos: 192.168.1.5 corresponderia a 00000101 no último octeto, e 192.168.0.10, a 00000000 no terceiro. 190.168.1.10 e 192.169.1.10 trocam o primeiro e o segundo octeto, respectivamente.",
  },
  {
    materia: "informatica",
    tema: "Redes de computadores e protocolos",
    dificuldade: "media",
    enunciado:
      "A máscara de sub-rede 255.255.240.0 corresponde a qual notação de prefixo?",
    opcoes: [
      "/20",
      "/19",
      "/21",
      "/22",
      "/24",
    ],
    correta: 0,
    explicacao:
      "Os dois primeiros octetos, 255.255, somam 16 bits iguais a 1. O terceiro octeto, 240, vale 11110000 em binário, e tem mais 4 bits iguais a 1. O total é 16 + 4 = 20, ou seja, /20.\n\n/19 corresponderia a 255.255.224.0, com 3 bits no terceiro octeto. /21 seria 255.255.248.0, e /22 seria 255.255.252.0. E /24 seria 255.255.255.0, que tem o terceiro octeto inteiro igual a 255.",
  },
  {
    materia: "informatica",
    tema: "Redes de computadores e protocolos",
    dificuldade: "media",
    enunciado:
      "Um vídeo de 450 MB é baixado por uma conexão estável de 90 Mbps. Quanto tempo leva o download?",
    opcoes: [
      "5 segundos",
      "40 segundos",
      "320 segundos",
      "4 segundos",
      "56,25 segundos",
    ],
    correta: 1,
    explicacao:
      "O vídeo tem 450 MB × 8 = 3.600 megabits, pois cada byte tem 8 bits. Dividindo pela velocidade, 3.600 ÷ 90 = 40 segundos. Conferindo, 90 Mbps equivalem a 11,25 MB/s, e 450 ÷ 11,25 = 40.\n\n5 segundos divide 450 por 90, sem converter bytes em bits. 320 segundos converte duas vezes, como se a velocidade fosse 11,25 Mbps. 4 segundos erra a ordem de grandeza, ao dividir por 900. E 56,25 segundos divide só por 8, sem usar a velocidade.",
  },
  {
    materia: "informatica",
    tema: "Redes de computadores e protocolos",
    dificuldade: "dificil",
    enunciado:
      "Dividindo-se uma rede 192.168.1.0/24 em sub-redes /27, quantas sub-redes são obtidas?",
    opcoes: [
      "4",
      "16",
      "32",
      "8",
      "2",
    ],
    correta: 3,
    explicacao:
      "Passar de /24 para /27 toma 3 bits emprestados dos hosts para identificar sub-redes, e 2³ = 8 sub-redes. Cada uma tem 32 endereços, dos quais 30 são utilizáveis, e 8 × 32 = 256, que é o total da rede /24.\n\n4 sub-redes viriam de 2 bits, o que dá uma /26. 16 viriam de 4 bits, uma /28. 32 viriam de 5 bits, uma /29. E 2 viriam de 1 bit, uma /25. O número de sub-redes é uma potência de 2, que depende de quantos bits foram emprestados.",
  },
  {
    materia: "informatica",
    tema: "Redes de computadores e protocolos",
    dificuldade: "dificil",
    enunciado:
      "Com a máscara 255.255.255.224, qual dos endereços abaixo pertence à mesma sub-rede do host 192.168.0.45?",
    opcoes: [
      "192.168.0.64",
      "192.168.0.31",
      "192.168.0.60",
      "192.168.0.100",
      "192.168.0.20",
    ],
    correta: 2,
    explicacao:
      "A máscara 255.255.255.224 é a /27, com blocos de 32 endereços no último octeto. O número 45 está no bloco de 32 a 63, e o endereço 192.168.0.60 também está nele, então os dois pertencem à mesma sub-rede.\n\n192.168.0.64 é o início do bloco seguinte. 192.168.0.31 e 192.168.0.20 estão no bloco de 0 a 31, que é o anterior. E 192.168.0.100 está no bloco de 96 a 127. Comparar o endereço de rede, obtido com a máscara, é o jeito seguro de decidir.",
  },
  {
    materia: "informatica",
    tema: "Redes de computadores e protocolos",
    dificuldade: "dificil",
    enunciado:
      "Uma sub-rede precisa abrigar 50 equipamentos. Qual é o prefixo mais longo, isto é, que menos desperdiça endereços, que atende a essa necessidade?",
    opcoes: [
      "/25",
      "/27",
      "/24",
      "/28",
      "/26",
    ],
    correta: 4,
    explicacao:
      "Com /26, restam 6 bits de host, o que dá 2⁶ − 2 = 62 endereços utilizáveis, suficientes para 50. Com /27, seriam só 30, que não bastam. Entre os prefixos que atendem, /26 é o mais longo e o que menos desperdiça.\n\n/25 comporta 126 hosts, e /24, 254, mas ambos desperdiçam endereços sem necessidade. /27 e /28 comportam 30 e 14 hosts, que são insuficientes para os 50 equipamentos pedidos.",
  },
  {
    materia: "informatica",
    tema: "Redes de computadores e protocolos",
    dificuldade: "dificil",
    enunciado:
      "Quais são o primeiro e o último endereços de hosts válidos da rede 10.0.0.0/29?",
    opcoes: [
      "10.0.0.0 e 10.0.0.7",
      "10.0.0.1 e 10.0.0.7",
      "10.0.0.1 e 10.0.0.6",
      "10.0.0.2 e 10.0.0.6",
      "10.0.0.1 e 10.0.0.8",
    ],
    correta: 2,
    explicacao:
      "Uma rede /29 tem 3 bits de host, o que dá 8 endereços, de 10.0.0.0 a 10.0.0.7. O primeiro é o endereço da rede, e o último, o de broadcast. Os hosts válidos vão de 10.0.0.1 a 10.0.0.6, ou seja, 6 endereços.\n\n10.0.0.0 e 10.0.0.7 são os endereços reservados da rede e do broadcast. 10.0.0.1 e 10.0.0.7 inclui o broadcast. 10.0.0.2 e 10.0.0.6 pula o primeiro host. E 10.0.0.8 já pertence à rede seguinte.",
  },
  {
    materia: "informatica",
    tema: "Redes de computadores e protocolos",
    dificuldade: "dificil",
    enunciado:
      "O endereço IPv6 2001:0db8:0000:0000:0000:0000:0000:0001 pode ser abreviado, sem mudar de valor, de qual forma?",
    opcoes: [
      "2001:db8::10",
      "2001::db8::1",
      "2001:db8::1",
      "2001:db8:1",
      "2001:db8:::1",
    ],
    correta: 2,
    explicacao:
      "A abreviação do IPv6 tira os zeros à esquerda de cada grupo e troca uma sequência de grupos zerados por dois-pontos duplos, uma única vez. Aqui, 0db8 vira db8, e os cinco grupos zerados viram ::, o que resulta em 2001:db8::1.\n\n2001:db8::10 muda o último grupo para 0010, que é outro endereço. 2001::db8::1 usa os dois-pontos duplos duas vezes, o que é inválido, porque não dá para saber quantos grupos há em cada um. 2001:db8:1 tem poucos grupos. E 2001:db8:::1 tem dois-pontos demais.",
  },
  {
    materia: "informatica",
    tema: "Redes de computadores e protocolos",
    dificuldade: "dificil",
    enunciado:
      "Quantos endereços IPv4 distintos existem no total, considerando os 32 bits do endereço?",
    opcoes: [
      "4.294.967.296",
      "4.294.967.295",
      "2.147.483.648",
      "16.777.216",
      "65.536",
    ],
    correta: 0,
    explicacao:
      "Com 32 bits, há 2³² combinações, isto é, 4.294.967.296 endereços distintos, de 0.0.0.0 a 255.255.255.255. Esse total, de cerca de 4,3 bilhões, é a razão do esgotamento do IPv4 e da adoção do IPv6.\n\n4.294.967.295 é o maior valor do endereço, contado a partir do zero, e não o total. 2.147.483.648 é 2³¹, a metade do total. 16.777.216 é 2²⁴, o número de endereços de uma rede /8. E 65.536 é 2¹⁶, o de uma rede /16.",
  },
  {
    materia: "informatica",
    tema: "Redes de computadores e protocolos",
    dificuldade: "dificil",
    enunciado:
      "Quantos endereços de hosts utilizáveis tem uma rede com o prefixo /22?",
    opcoes: [
      "1.024",
      "510",
      "2.046",
      "1.022",
      "254",
    ],
    correta: 3,
    explicacao:
      "Com /22, restam 32 − 22 = 10 bits de host, o que dá 2¹⁰ = 1.024 endereços. Descontando o de rede e o de broadcast, sobram 1.022 utilizáveis.\n\n1.024 é o total, sem descontar os dois endereços reservados. 510 é o número de hosts de uma /23, com 9 bits. 2.046 é o de uma /21, com 11 bits. E 254 é o de uma /24, com 8 bits. Cada bit a mais ou a menos de host dobra ou reduz à metade a quantidade de endereços.",
  },
  {
    materia: "informatica",
    tema: "Redes de computadores e protocolos",
    dificuldade: "dificil",
    enunciado:
      "Em termos das camadas, a camada de aplicação do modelo TCP/IP corresponde a quais camadas do modelo OSI?",
    opcoes: [
      "Rede e enlace de dados",
      "Aplicação, apresentação e sessão",
      "Transporte e rede",
      "Física e enlace de dados",
      "Apresentação e transporte",
    ],
    correta: 1,
    explicacao:
      "O modelo TCP/IP, de quatro camadas, é mais compacto que o OSI, de sete. Sua camada de aplicação reúne as funções de três camadas do OSI: aplicação, apresentação e sessão. Protocolos como HTTP, SMTP e DNS ficam nela.\n\nRede e enlace, ou transporte e rede, não formam a camada de aplicação: a camada de transporte do TCP/IP corresponde à de transporte do OSI, e a de Internet, à de rede. Física e enlace correspondem à camada de acesso à rede. E apresentação com transporte não são vizinhas.",
  },
  {
    materia: "informatica",
    tema: "Redes de computadores e protocolos",
    dificuldade: "dificil",
    enunciado:
      "O que o comando tracert, no Windows, ou traceroute, em outros sistemas, mostra ao usuário?",
    opcoes: [
      "A velocidade do processador",
      "A senha da rede Wi-Fi",
      "Os vírus presentes no computador",
      "O espaço livre no disco",
      "Os roteadores do caminho até o destino",
    ],
    correta: 4,
    explicacao:
      "O tracert envia pacotes com um TTL, tempo de vida, que cresce a cada tentativa: cada roteador do caminho descarta o pacote quando o TTL chega a zero e avisa quem o enviou. Assim, o comando lista os roteadores, os saltos, até o destino, com o tempo de resposta de cada um.\n\nEle não mostra a velocidade do processador, a senha do Wi-Fi, os vírus ou o espaço livre no disco. Serve para descobrir em que ponto do caminho a conexão fica lenta ou é interrompida.",
  },
  {
    materia: "informatica",
    tema: "Redes de computadores e protocolos",
    dificuldade: "dificil",
    enunciado:
      "Qual é a sequência de mensagens que um cliente e um servidor DHCP trocam para atribuir um endereço IP?",
    opcoes: [
      "Request, Reply, Close e Reset",
      "SYN, SYN-ACK e ACK",
      "Discover, Offer, Request e Acknowledge",
      "Query, Answer e Update",
      "Hello, Link e Route",
    ],
    correta: 2,
    explicacao:
      "O DHCP troca quatro mensagens, lembradas como DORA: o cliente envia um Discover, procurando servidores, o servidor responde com um Offer, oferecendo um endereço, o cliente faz o Request, pedindo o endereço oferecido, e o servidor confirma com um Acknowledge.\n\nSYN, SYN-ACK e ACK formam o handshake do TCP. Query e Answer lembram as consultas do DNS. Hello, Link e Route lembram mensagens de protocolos de roteamento. E Request, Reply, Close e Reset não formam a sequência do DHCP.",
  },
];
