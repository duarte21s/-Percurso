/* Correio eletrônico (49 questões) — informatica.

   Autorais, escritas por Claude (Anthropic) em 2026-10-09 seguindo as cinco
   regras de CONTINUAR-MATERIAS-POR-OBJETIVO.md. Nenhuma é atribuída a banca
   ou a prova real.

   Conferência do gabarito: 15 de 49 recalculadas por código que chega à
   resposta por outro caminho (ver .rascunho/questoes-objetivo/informatica__correio-eletronico.mjs);
   34 conceituais aguardam a revisão independente listada no relatório.

   Montado por scripts/montar-questoes-objetivo.mjs; gabarito redistribuído
   por scripts/rebalancear-gabarito.mjs. Relatório em
   _relatorios/informatica__correio-eletronico.json. */

export const questoes = [
  {
    materia: "informatica",
    tema: "Correio eletrônico",
    dificuldade: "facil",
    enunciado:
      "O que é o correio eletrônico, também chamado de e-mail?",
    opcoes: [
      "Um programa para editar planilhas",
      "Um tipo de cabo de rede",
      "Um antivírus gratuito",
      "Um site de vídeos",
      "Troca de mensagens pela Internet",
    ],
    correta: 4,
    explicacao:
      "O correio eletrônico é o serviço que permite enviar e receber mensagens de texto, com ou sem arquivos anexados, entre pessoas que têm um endereço de e-mail, pela Internet ou por uma rede interna. Cada usuário tem uma caixa postal, hospedada em um servidor.\n\nUm programa de planilhas é outro tipo de software. O cabo de rede é um meio físico. O antivírus protege contra programas maliciosos. E um site de vídeos é um serviço de transmissão, e não de mensagens entre pessoas.",
  },
  {
    materia: "informatica",
    tema: "Correio eletrônico",
    dificuldade: "facil",
    enunciado:
      "Qual dos endereços abaixo está escrito no formato correto de um endereço de e-mail?",
    opcoes: [
      "maria silva@exemplo.com.br",
      "maria.silva@@exemplo.com.br",
      "maria.silva@exemplo.com.br",
      "maria.silva.exemplo.com.br",
      "@exemplo.com.br",
    ],
    correta: 2,
    explicacao:
      "Um endereço de e-mail tem duas partes ligadas pelo arroba: o nome do usuário, antes do @, e o domínio do provedor, depois dele. maria.silva@exemplo.com.br segue esse formato, sem espaços e com um único @.\n\nmaria silva@exemplo.com.br tem um espaço no nome do usuário, o que não é permitido. maria.silva@@exemplo.com.br repete o arroba. maria.silva.exemplo.com.br não tem arroba, e por isso não separa usuário e domínio. E @exemplo.com.br não tem o nome do usuário.",
  },
  {
    materia: "informatica",
    tema: "Correio eletrônico",
    dificuldade: "facil",
    enunciado:
      "Em uma nova mensagem de e-mail, o que se escreve no campo Para?",
    opcoes: [
      "O assunto da conversa",
      "O nome do arquivo anexado",
      "A senha do destinatário",
      "O endereço de quem recebe",
      "O tamanho da mensagem",
    ],
    correta: 3,
    explicacao:
      "No campo Para vão os endereços de e-mail dos destinatários principais, isto é, das pessoas a quem a mensagem é dirigida. Podem ser vários, separados por vírgula ou ponto e vírgula.\n\nO assunto tem campo próprio. O nome do arquivo anexado aparece na área de anexos. A senha do destinatário nunca é pedida para enviar uma mensagem. E o tamanho da mensagem é calculado pelo programa, e não digitado pelo usuário.",
  },
  {
    materia: "informatica",
    tema: "Correio eletrônico",
    dificuldade: "facil",
    enunciado:
      "Para que serve o campo Assunto de uma mensagem de e-mail?",
    opcoes: [
      "Indicar a senha do remetente",
      "Guardar os arquivos anexados",
      "Resumir, em poucas palavras, o motivo da mensagem",
      "Mostrar a data de nascimento do destinatário",
      "Escolher a cor do fundo da mensagem",
    ],
    correta: 2,
    explicacao:
      "O assunto é uma linha curta que resume o tema da mensagem. Aparece na lista da caixa de entrada, e ajuda o destinatário a saber do que se trata e a localizar a mensagem depois.\n\nNão é local para senhas. Os arquivos ficam nos anexos. A data de nascimento do destinatário não faz parte dos campos de uma mensagem. E a cor do fundo é uma opção de formatação do corpo do texto, e não do assunto.",
  },
  {
    materia: "informatica",
    tema: "Correio eletrônico",
    dificuldade: "facil",
    enunciado:
      "O que é um anexo, em uma mensagem de e-mail?",
    opcoes: [
      "O endereço do destinatário",
      "O assunto da conversa",
      "Uma cópia oculta da mensagem",
      "A assinatura do remetente",
      "Um arquivo enviado junto com a mensagem",
    ],
    correta: 4,
    explicacao:
      "O anexo é um arquivo, como um documento, uma foto ou uma planilha, que segue junto com a mensagem. O programa de e-mail costuma mostrar o nome e o tamanho de cada anexo, e há um limite de tamanho por mensagem.\n\nO endereço do destinatário vai no campo Para. O assunto resume a mensagem. A cópia oculta é feita no campo Cco. E a assinatura é um texto fixo ao final da mensagem, com o nome e os dados do remetente.",
  },
  {
    materia: "informatica",
    tema: "Correio eletrônico",
    dificuldade: "facil",
    enunciado:
      "Em qual pasta do programa de e-mail chegam, por padrão, as mensagens novas recebidas?",
    opcoes: [
      "Enviados",
      "Rascunhos",
      "Lixeira",
      "Caixa de entrada",
      "Caixa de saída",
    ],
    correta: 3,
    explicacao:
      "A caixa de entrada é a pasta que recebe as mensagens novas, e que mostra em destaque as ainda não lidas. É a pasta aberta ao entrar no programa de e-mail.\n\nA pasta Enviados guarda cópia do que o usuário mandou. A pasta Rascunhos guarda mensagens ainda não terminadas. A Lixeira recebe as mensagens excluídas. E a caixa de saída guarda temporariamente as mensagens que ainda não foram entregues ao servidor.",
  },
  {
    materia: "informatica",
    tema: "Correio eletrônico",
    dificuldade: "facil",
    enunciado:
      "O que fica guardado na pasta Enviados de um programa de e-mail?",
    opcoes: [
      "Cópias das mensagens que o usuário já enviou",
      "As mensagens recebidas e ainda não lidas",
      "As mensagens consideradas lixo eletrônico",
      "As mensagens ainda sendo escritas",
      "As mensagens apagadas definitivamente",
    ],
    correta: 0,
    explicacao:
      "A pasta Enviados guarda uma cópia de cada mensagem que o usuário mandou, o que permite conferir depois o que foi dito e para quem.\n\nAs mensagens recebidas e não lidas aparecem na caixa de entrada. As consideradas lixo eletrônico vão para a pasta Spam. As que ainda estão sendo escritas ficam em Rascunhos. E as apagadas definitivamente deixaram de existir, e não ficam em pasta alguma.",
  },
  {
    materia: "informatica",
    tema: "Correio eletrônico",
    dificuldade: "facil",
    enunciado:
      "O que é o spam, no correio eletrônico, em termos gerais?",
    opcoes: [
      "Uma cópia de segurança da caixa postal",
      "Mensagens não solicitadas, enviadas em massa",
      "A assinatura digital do remetente",
      "Um arquivo anexado a uma mensagem",
      "Um tipo de endereço de e-mail",
    ],
    correta: 1,
    explicacao:
      "Spam é a mensagem não solicitada, enviada em massa, em geral com propaganda, golpes ou links maliciosos. Os provedores usam filtros que mandam essas mensagens para a pasta de spam, ou lixo eletrônico.\n\nA cópia de segurança da caixa postal é um backup. A assinatura digital prova a autoria da mensagem. O arquivo anexado é um anexo. E o endereço de e-mail identifica a caixa postal, e não é um tipo de mensagem.",
  },
  {
    materia: "informatica",
    tema: "Correio eletrônico",
    dificuldade: "facil",
    enunciado:
      "Onde ficam guardadas as mensagens que o usuário começou a escrever, mas ainda não enviou?",
    opcoes: [
      "Na caixa de entrada",
      "Em Enviados",
      "Em Spam",
      "Na Lixeira",
      "Em Rascunhos",
    ],
    correta: 4,
    explicacao:
      "Os rascunhos são mensagens salvas antes do envio. O programa as grava de tempos em tempos, e o usuário pode abri-las depois para terminar a redação e enviar.\n\nA caixa de entrada recebe mensagens de outras pessoas. A pasta Enviados guarda o que já foi mandado. A pasta Spam recebe o lixo eletrônico. E a Lixeira guarda o que foi excluído, até ser apagado de vez.",
  },
  {
    materia: "informatica",
    tema: "Correio eletrônico",
    dificuldade: "facil",
    enunciado:
      "O que faz o botão Responder, ao abrir uma mensagem recebida?",
    opcoes: [
      "Apaga a mensagem recebida",
      "Envia a mensagem a todos os contatos",
      "Move a mensagem para o spam",
      "Cria uma resposta dirigida ao remetente da mensagem",
      "Salva o anexo no computador",
    ],
    correta: 3,
    explicacao:
      "O botão Responder abre uma nova mensagem, já endereçada ao remetente, com o assunto precedido de Re: e, em geral, com o texto original abaixo. O usuário escreve a resposta e envia.\n\nApagar é outro botão. Enviar a todos os contatos seria um disparo em massa, que não é a função do Responder. Mover para o spam é uma ação de denúncia. E salvar o anexo é uma opção própria, ao lado do arquivo anexado.",
  },
  {
    materia: "informatica",
    tema: "Correio eletrônico",
    dificuldade: "facil",
    enunciado:
      "O que é a assinatura de uma mensagem de e-mail, configurada no programa ou no webmail?",
    opcoes: [
      "Uma senha para abrir a caixa postal",
      "Um anexo obrigatório em toda mensagem",
      "O endereço do servidor de e-mail",
      "Um tipo de vírus de computador",
      "Texto fixo com seus dados, no fim da mensagem",
    ],
    correta: 4,
    explicacao:
      "A assinatura é um bloco de texto, definido uma vez, que o programa acrescenta automaticamente ao fim de cada mensagem enviada. Costuma trazer o nome, o cargo, o telefone e o endereço do remetente, e pode incluir uma imagem, como um logotipo.\n\nNão é uma senha, nem um anexo obrigatório. O endereço do servidor de e-mail é uma configuração técnica da conta. E não tem relação com vírus: a palavra assinatura, aqui, é usada no sentido de fecho da mensagem, e não da assinatura digital.",
  },
  {
    materia: "informatica",
    tema: "Correio eletrônico",
    dificuldade: "media",
    enunciado:
      "O que acontece com os destinatários colocados no campo Cc, de cópia, de uma mensagem?",
    opcoes: [
      "Recebem a cópia sem que ninguém saiba",
      "Recebem uma cópia, e os endereços aparecem para todos",
      "Não recebem a mensagem",
      "Recebem só os anexos",
      "Só podem ler, e não abrir a mensagem",
    ],
    correta: 1,
    explicacao:
      "O Cc, de com cópia, envia a mensagem a pessoas que precisam ficar informadas, mas não são as destinatárias principais. Os endereços em Cc ficam visíveis para todos os outros destinatários.\n\nA cópia sem que ninguém saiba é a do campo Cco. Os destinatários em Cc recebem a mensagem inteira, e não só os anexos. E podem abri-la normalmente, sem restrição de leitura, e responder, se quiserem.",
  },
  {
    materia: "informatica",
    tema: "Correio eletrônico",
    dificuldade: "media",
    enunciado:
      "O que acontece com os destinatários colocados no campo Cco, de cópia oculta, de uma mensagem?",
    opcoes: [
      "Não recebem a mensagem",
      "Aparecem para todos os outros destinatários",
      "Recebem só uma notificação, sem o texto",
      "Recebem a mensagem, mas os outros não veem seus endereços",
      "A mensagem é cifrada para eles",
    ],
    correta: 3,
    explicacao:
      "O Cco, de com cópia oculta, entrega a mensagem a quem está nele, sem que os outros destinatários vejam esses endereços. Só o remetente sabe quem recebeu a cópia oculta.\n\nOs destinatários em Cco recebem a mensagem inteira, e não só uma notificação. Eles não aparecem para os outros, que é o oposto do Cc. E o campo não cifra a mensagem: o sigilo é apenas quanto à lista de endereços.",
  },
  {
    materia: "informatica",
    tema: "Correio eletrônico",
    dificuldade: "media",
    enunciado:
      "Por que é recomendável usar o campo Cco ao enviar uma mensagem a uma lista grande de pessoas que não se conhecem?",
    opcoes: [
      "Para que a mensagem chegue mais rápido",
      "Para aumentar o limite de tamanho do anexo",
      "Para preservar a privacidade dos endereços de cada destinatário",
      "Para impedir que a mensagem caia no spam",
      "Para criptografar o texto da mensagem",
    ],
    correta: 2,
    explicacao:
      "Com todos os endereços em Cco, nenhum destinatário vê o endereço dos outros, o que protege a privacidade e evita que listas de contatos sejam copiadas e usadas para spam.\n\nO Cco não acelera a entrega, não amplia o limite de anexos, não impede o filtro de spam e não criptografa o texto. O benefício é a discrição sobre quem recebeu a mensagem.",
  },
  {
    materia: "informatica",
    tema: "Correio eletrônico",
    dificuldade: "media",
    enunciado:
      "O que faz a opção Responder a Todos, ao abrir uma mensagem recebida?",
    opcoes: [
      "Envia a resposta ao remetente e a todos os que aparecem em Para e Cc",
      "Envia a resposta só ao remetente",
      "Envia a resposta a todos os contatos da agenda",
      "Encaminha a mensagem a um novo destinatário",
      "Apaga a mensagem de todos os destinatários",
    ],
    correta: 0,
    explicacao:
      "O Responder a Todos dirige a resposta ao remetente e a todos os destinatários visíveis, os dos campos Para e Cc, exceto o próprio usuário. Convém usá-lo quando a resposta interessa a todos.\n\nO Responder, simples, vai só ao remetente. A agenda de contatos não entra nessa conta. Encaminhar leva a mensagem a pessoas novas, escolhidas pelo usuário. E apagar a mensagem de todos não é possível a partir do Responder a Todos.",
  },
  {
    materia: "informatica",
    tema: "Correio eletrônico",
    dificuldade: "media",
    enunciado:
      "Qual é a função do comando Encaminhar, em um programa de e-mail?",
    opcoes: [
      "Responder só ao remetente",
      "Apagar a mensagem da caixa de entrada",
      "Marcar a mensagem como spam",
      "Enviar a mensagem recebida a novos destinatários",
      "Salvar a mensagem como rascunho",
    ],
    correta: 3,
    explicacao:
      "Encaminhar reenvia a mensagem recebida, com o texto e os anexos, a outras pessoas escolhidas pelo usuário, como se fosse uma nova mensagem. O assunto costuma começar por Enc: ou Fwd:.\n\nResponder só ao remetente é o comando Responder. Apagar remove a mensagem da pasta. Marcar como spam é uma ação de denúncia. E salvar como rascunho guarda uma mensagem ainda não enviada. Só o encaminhamento dá um novo destino à mensagem.",
  },
  {
    materia: "informatica",
    tema: "Correio eletrônico",
    dificuldade: "media",
    enunciado:
      "Qual protocolo é usado, em sua função principal, para o envio de mensagens de e-mail?",
    opcoes: [
      "POP3",
      "IMAP",
      "SMTP",
      "DHCP",
      "FTP",
    ],
    correta: 2,
    explicacao:
      "O SMTP, de Simple Mail Transfer Protocol, é o protocolo de envio: leva a mensagem do programa do usuário ao servidor, e de um servidor a outro, até o servidor do destinatário.\n\nO POP3 e o IMAP são protocolos de recebimento, que permitem ler a caixa postal. O DHCP distribui endereços IP em uma rede. E o FTP transfere arquivos. Só o SMTP tem como função o envio das mensagens.",
  },
  {
    materia: "informatica",
    tema: "Correio eletrônico",
    dificuldade: "media",
    enunciado:
      "Qual é o comportamento clássico do protocolo POP3 ao receber mensagens?",
    opcoes: [
      "Mantém tudo no servidor e sincroniza vários aparelhos",
      "Baixa as mensagens para o computador, em geral removendo-as do servidor",
      "Envia as mensagens para os destinatários",
      "Traduz nomes de domínio em endereços IP",
      "Distribui endereços IP automaticamente",
    ],
    correta: 1,
    explicacao:
      "O POP3 baixa as mensagens do servidor para o computador do usuário e, em sua configuração clássica, as apaga do servidor. Por isso as mensagens ficam disponíveis em um só aparelho.\n\nManter tudo no servidor e sincronizar vários aparelhos é característica do IMAP. O envio é do SMTP. A tradução de nomes em endereços IP é do DNS. E a distribuição de endereços IP é do DHCP.",
  },
  {
    materia: "informatica",
    tema: "Correio eletrônico",
    dificuldade: "media",
    enunciado:
      "O que caracteriza o protocolo IMAP no acesso ao correio eletrônico?",
    opcoes: [
      "Só envia mensagens, sem receber",
      "Baixa tudo e apaga do servidor sempre",
      "Mantém as mensagens no servidor e sincroniza os aparelhos",
      "Só funciona sem conexão com a Internet",
      "Serve apenas para anexos de vídeo",
    ],
    correta: 2,
    explicacao:
      "O IMAP mantém as mensagens e as pastas no servidor, e os aparelhos mostram o que está lá: o que é lido, apagado ou movido no celular reflete no computador. Convém a quem usa a mesma caixa em vários equipamentos.\n\nO envio é feito pelo SMTP. Baixar e apagar do servidor é o comportamento clássico do POP3. O IMAP precisa de conexão para sincronizar, ainda que guarde cópias locais. E não se limita a anexos de vídeo: trata todas as mensagens.",
  },
  {
    materia: "informatica",
    tema: "Correio eletrônico",
    dificuldade: "media",
    enunciado:
      "Qual é a diferença entre usar o e-mail por webmail e por um programa cliente de e-mail?",
    opcoes: [
      "O webmail é acessado pelo navegador; o cliente é um programa instalado",
      "O webmail exige cabo; o cliente, não",
      "O webmail só envia, e o cliente só recebe",
      "O cliente de e-mail não precisa de conta",
      "Os dois são sinônimos, sem nenhuma diferença",
    ],
    correta: 0,
    explicacao:
      "No webmail, o usuário acessa a caixa pelo navegador, em um site, como no Gmail e no Outlook.com. No cliente de e-mail, como o Outlook ou o Thunderbird, a caixa é lida por um programa instalado no computador ou no celular, que pode reunir várias contas.\n\nO webmail não exige cabo. Os dois enviam e recebem. O cliente precisa de uma conta configurada. E não são sinônimos: mudam o lugar em que o usuário abre as mensagens e as opções do programa.",
  },
  {
    materia: "informatica",
    tema: "Correio eletrônico",
    dificuldade: "media",
    enunciado:
      "O que é o phishing, no contexto do correio eletrônico?",
    opcoes: [
      "Uma mensagem fraudulenta que tenta obter dados ou senhas do usuário",
      "Uma mensagem automática de ausência do usuário",
      "Uma cópia oculta enviada ao chefe",
      "Um anexo compactado pelo provedor",
      "Um filtro que organiza mensagens por pasta",
    ],
    correta: 0,
    explicacao:
      "O phishing é o golpe em que o criminoso se passa por uma pessoa ou empresa conhecida, como um banco, para levar a vítima a clicar em um link falso, abrir um anexo ou informar senhas e números de cartão.\n\nA mensagem automática de ausência é a resposta automática. A cópia oculta é o Cco. O anexo compactado é um arquivo comum. E o filtro que organiza as mensagens é uma regra da caixa de entrada. Nenhum deles é uma fraude.",
  },
  {
    materia: "informatica",
    tema: "Correio eletrônico",
    dificuldade: "media",
    enunciado:
      "Qual é a função do filtro de spam dos provedores de e-mail?",
    opcoes: [
      "Apagar todas as mensagens recebidas",
      "Desviar mensagens indesejadas ao spam",
      "Aumentar o tamanho da caixa de entrada",
      "Traduzir as mensagens para outro idioma",
      "Enviar as mensagens a todos os contatos",
    ],
    correta: 1,
    explicacao:
      "O filtro de spam analisa o remetente, o conteúdo e os links de cada mensagem, e desvia as suspeitas para a pasta de spam, de modo que não se misturem às importantes. Ele erra às vezes, e por isso vale olhar a pasta de spam de vez em quando.\n\nNão apaga tudo o que chega. Não aumenta o espaço da caixa. Não traduz mensagens. E não envia nada aos contatos do usuário.",
  },
  {
    materia: "informatica",
    tema: "Correio eletrônico",
    dificuldade: "media",
    enunciado:
      "Qual é a vantagem da verificação em duas etapas, ou autenticação em dois fatores, em uma conta de e-mail?",
    opcoes: [
      "Fazer a conta funcionar sem senha",
      "Aumentar o limite de anexos",
      "Eliminar todo o spam recebido",
      "Exigir uma segunda confirmação além da senha",
      "Apagar as mensagens antigas",
    ],
    correta: 3,
    explicacao:
      "Com a verificação em duas etapas, além da senha o acesso exige um segundo fator, como um código enviado ao celular ou gerado por um aplicativo. Assim, quem descobre a senha ainda não consegue entrar na conta.\n\nO método não elimina a senha, não amplia o limite de anexos, não elimina o spam e não apaga mensagens. Sua função é aumentar a segurança do acesso.",
  },
  {
    materia: "informatica",
    tema: "Correio eletrônico",
    dificuldade: "media",
    enunciado:
      "O que uma assinatura digital garante em uma mensagem de e-mail?",
    opcoes: [
      "O sigilo do conteúdo contra qualquer leitura",
      "A autoria e a integridade da mensagem",
      "A entrega mais rápida",
      "A remoção automática de vírus",
      "A tradução para outros idiomas",
    ],
    correta: 1,
    explicacao:
      "A assinatura digital, feita com a chave privada do remetente, comprova quem enviou a mensagem e que ela não foi alterada no caminho. Qualquer mudança no conteúdo invalida a assinatura.\n\nEla não garante sigilo: isso é feito pela criptografia. Não acelera a entrega, não remove vírus e não traduz a mensagem. Assinar e cifrar são operações diferentes, e podem ser usadas em conjunto.",
  },
  {
    materia: "informatica",
    tema: "Correio eletrônico",
    dificuldade: "media",
    enunciado:
      "Qual é a função de uma resposta automática, ou mensagem de ausência, no e-mail?",
    opcoes: [
      "Apagar as mensagens recebidas durante a ausência",
      "Enviar a caixa postal a outro provedor",
      "Responder sozinha a quem escreve, enquanto o usuário está ausente",
      "Bloquear todos os remetentes desconhecidos",
      "Aumentar o limite de armazenamento",
    ],
    correta: 2,
    explicacao:
      "A resposta automática responde às mensagens recebidas com um texto escolhido pelo usuário, como avisar que está de férias e quando volta. Evita que o remetente fique sem retorno, e pode ser limitada a datas.\n\nEla não apaga mensagens. Não transfere a caixa para outro provedor. Não bloqueia remetentes, o que seria uma regra de bloqueio. E não altera a cota da caixa, que depende do plano do provedor.",
  },
  {
    materia: "informatica",
    tema: "Correio eletrônico",
    dificuldade: "media",
    enunciado:
      "Para que servem as regras, ou filtros, da caixa de entrada de um programa de e-mail?",
    opcoes: [
      "Aumentar a velocidade da Internet",
      "Trocar a senha da conta",
      "Executar ações automáticas nas mensagens que atendem a um critério",
      "Fazer cópia de segurança do computador",
      "Criar contas de e-mail para outras pessoas",
    ],
    correta: 2,
    explicacao:
      "As regras aplicam ações automáticas às mensagens que atendem a um critério, como mover para uma pasta as que vêm de certo remetente ou têm certa palavra no assunto, marcar como importantes ou encaminhar a outro endereço.\n\nElas não alteram a velocidade da Internet, não trocam a senha da conta, não fazem backup do computador e não criam contas. Seu valor está em organizar a caixa de entrada sem trabalho manual.",
  },
  {
    materia: "informatica",
    tema: "Correio eletrônico",
    dificuldade: "media",
    enunciado:
      "O que são marcadores, ou etiquetas, usados em serviços de webmail como o Gmail?",
    opcoes: [
      "Rótulos que organizam as mensagens",
      "Pastas físicas que guardam uma só mensagem",
      "Tipos de anexo aceitos pelo provedor",
      "Senhas de acesso às mensagens",
      "Filtros de vírus do computador",
    ],
    correta: 0,
    explicacao:
      "Os marcadores, ou etiquetas, são rótulos que se aplicam às mensagens para organizá-las por assunto ou projeto. Diferentemente das pastas, uma mesma mensagem pode ter vários marcadores ao mesmo tempo.\n\nNão são pastas físicas que guardam uma só mensagem, nem tipos de anexo, nem senhas. E não têm relação com os filtros de vírus do computador, que são recursos de segurança.",
  },
  {
    materia: "informatica",
    tema: "Correio eletrônico",
    dificuldade: "media",
    enunciado:
      "Uma mensagem enviada a um endereço que não existe volta ao remetente com um aviso de erro. Como se chama essa devolução?",
    opcoes: [
      "Resposta automática",
      "Mensagem devolvida, ou bounce",
      "Cópia oculta",
      "Encaminhamento",
      "Rascunho",
    ],
    correta: 1,
    explicacao:
      "Quando a entrega falha, como no caso de endereço inexistente ou de caixa cheia, o servidor devolve ao remetente um aviso de erro. Essa devolução é chamada de mensagem devolvida, ou bounce, e traz o motivo da falha.\n\nA resposta automática é uma mensagem de ausência. A cópia oculta é o Cco. O encaminhamento reenvia a mensagem a outra pessoa. E o rascunho é uma mensagem ainda não enviada.",
  },
  {
    materia: "informatica",
    tema: "Correio eletrônico",
    dificuldade: "media",
    enunciado:
      "Ana envia uma mensagem para Bruno e Carla, com cópia (Cc) para Diego e cópia oculta (Cco) para Eva. Bruno usa Responder a Todos. Quem recebe a resposta?",
    opcoes: [
      "Ana e Carla",
      "Ana, Carla, Diego e Eva",
      "Apenas Ana",
      "Ana, Carla e Diego",
      "Carla, Diego e Eva",
    ],
    correta: 3,
    explicacao:
      "O Responder a Todos manda a resposta ao remetente, Ana, e a todos os que aparecem em Para e Cc, exceto quem está respondendo, Bruno. Sobram Ana, Carla e Diego. Eva está em Cco, e Bruno nem sabe que ela recebeu a mensagem, então ela não entra.\n\nAna e Carla deixaria Diego, que estava em cópia, de fora. Ana, Carla, Diego e Eva incluiria quem estava oculta. Apenas Ana seria o resultado do Responder simples. E Carla, Diego e Eva deixaria de fora a remetente.",
  },
  {
    materia: "informatica",
    tema: "Correio eletrônico",
    dificuldade: "media",
    enunciado:
      "Lia envia uma mensagem para Marcos e Nina, com cópia (Cc) para Otávio e cópia oculta (Cco) para Paulo. Otávio, que estava em Cc, usa Responder a Todos. Quem recebe a resposta?",
    opcoes: [
      "Lia e Otávio",
      "Lia, Marcos, Nina e Paulo",
      "Apenas Lia",
      "Marcos e Nina",
      "Lia, Marcos e Nina",
    ],
    correta: 4,
    explicacao:
      "Quem responde a todos, mesmo estando em Cc, dirige a resposta ao remetente, Lia, e a todos os de Para e Cc, exceto a si mesmo. Otávio está em Cc e sai da lista, e sobram Lia, Marcos e Nina. Paulo, em Cco, não aparece para Otávio, e não recebe a resposta.\n\nLia e Otávio inclui a si mesmo, e deixa os destinatários principais de fora. Lia, Marcos, Nina e Paulo traz o endereço oculto. Apenas Lia seria o Responder simples. E Marcos e Nina deixaria a remetente de fora.",
  },
  {
    materia: "informatica",
    tema: "Correio eletrônico",
    dificuldade: "media",
    enunciado:
      "Ana envia uma mensagem para Bruno e Carla, com cópia (Cc) para Diego e cópia oculta (Cco) para Eva. Quantos endereços de destinatários aparecem no cabeçalho da mensagem que Bruno recebe?",
    opcoes: [
      "3",
      "4",
      "2",
      "5",
      "1",
    ],
    correta: 0,
    explicacao:
      "O cabeçalho mostra os endereços dos campos Para e Cc: Bruno e Carla, em Para, e Diego, em Cc. São 3. O endereço de Eva, em Cco, não aparece para quem recebeu a mensagem.\n\n4 seria o total de pessoas que receberam a mensagem, contando Eva. 2 seria só os do campo Para. 5 contaria também a remetente, Ana, que não é destinatária. E 1 contaria só o próprio Bruno.",
  },
  {
    materia: "informatica",
    tema: "Correio eletrônico",
    dificuldade: "media",
    enunciado:
      "Pedro envia uma mensagem com 3 pessoas em Para, 2 em Cc e 4 em Cco. Quantas cópias da mensagem são entregues, no total?",
    opcoes: [
      "5",
      "9",
      "3",
      "4",
      "10",
    ],
    correta: 1,
    explicacao:
      "Cada pessoa listada em qualquer dos três campos recebe uma cópia: 3 + 2 + 4 = 9 cópias. A diferença entre Para, Cc e Cco está em quem enxerga o endereço de quem, e não em quantos recebem a mensagem.\n\n5 conta só os dos campos Para e Cc, e esquece as pessoas em Cco. 3 conta só o campo Para, e 4, só o Cco. E 10 soma uma cópia a mais, a do próprio remetente, que não é destinatária.",
  },
  {
    materia: "informatica",
    tema: "Correio eletrônico",
    dificuldade: "media",
    enunciado:
      "Rita envia uma mensagem para Sérgio e Tânia, com cópia (Cc) para Ulisses e cópia oculta (Cco) para Vera. Quem consegue ver o endereço de Vera?",
    opcoes: [
      "Todos os destinatários",
      "Sérgio, Tânia e Ulisses",
      "Ninguém, nem a remetente",
      "Apenas Sérgio e Tânia",
      "Apenas Rita e a própria Vera",
    ],
    correta: 4,
    explicacao:
      "O endereço em Cco só é conhecido por quem escreveu a mensagem, Rita, e por quem o recebeu, Vera. Os demais, Sérgio, Tânia e Ulisses, recebem a mensagem sem ver o nome de Vera no cabeçalho.\n\nPor isso a lista de quem vê o endereço não inclui todos os destinatários, nem só os de Para e Cc. A remetente sabe, pois foi ela quem preencheu o campo. E Sérgio e Tânia, sozinhos, não formam uma resposta, pois falta a própria Vera.",
  },
  {
    materia: "informatica",
    tema: "Correio eletrônico",
    dificuldade: "media",
    enunciado:
      "A cota de uma caixa de e-mail é de 15 GB. Considerando 1 GB igual a 1.000 MB, quantas mensagens com anexo, de 2 MB cada em média, cabem na caixa?",
    opcoes: [
      "30.000",
      "750",
      "15.000",
      "7.500",
      "7,5",
    ],
    correta: 3,
    explicacao:
      "A cota equivale a 15 × 1.000 = 15.000 MB. Dividindo pelo tamanho médio de cada mensagem, 15.000 ÷ 2 = 7.500 mensagens. Conferindo, 7.500 × 2 = 15.000 MB.\n\n30.000 multiplica o total por 2, em vez de dividir. 750 erra uma casa decimal. 15.000 é a cota em MB, sem dividir pelo tamanho das mensagens. E 7,5 divide a cota em GB pelo tamanho em MB, sem converter as unidades.",
  },
  {
    materia: "informatica",
    tema: "Correio eletrônico",
    dificuldade: "media",
    enunciado:
      "Um anexo de 20 MB é enviado por uma conexão de upload de 8 Mbps. Desconsiderando atrasos, quanto tempo leva o envio?",
    opcoes: [
      "20 segundos",
      "160 segundos",
      "2,5 segundos",
      "8 segundos",
      "1 segundo",
    ],
    correta: 0,
    explicacao:
      "O anexo tem 20 MB × 8 = 160 megabits, pois cada byte tem 8 bits. Dividindo pela velocidade, 160 ÷ 8 = 20 segundos. Conferindo, 8 Mbps equivalem a 1 MB/s, e 20 ÷ 1 = 20.\n\n160 segundos multiplica por 8 e esquece de dividir pela velocidade. 2,5 segundos divide 20 por 8, sem converter bytes em bits. 8 segundos é a própria velocidade. E 1 segundo é a razão entre as velocidades em bits e em bytes, e não um tempo.",
  },
  {
    materia: "informatica",
    tema: "Correio eletrônico",
    dificuldade: "media",
    enunciado:
      "Uma regra da caixa de entrada move para a pasta Cobranças toda mensagem cujo assunto contém o texto fatura, sem diferenciar maiúsculas de minúsculas. Os assuntos recebidos são: Fatura de março; Reunião de pauta; FATURA vencida; Promoção de verão; Re: fatura do cartão; Faturamento do mês. Quantas mensagens a regra move?",
    opcoes: [
      "4",
      "3",
      "2",
      "5",
      "6",
    ],
    correta: 0,
    explicacao:
      "A regra procura o trecho fatura dentro do assunto, sem se importar com maiúsculas. Casam Fatura de março, FATURA vencida, Re: fatura do cartão e Faturamento do mês, que contém o trecho no início da palavra. São 4 mensagens.\n\n3 deixaria de fora Faturamento do mês, supondo que a regra procure só a palavra inteira. 2 contaria só as que começam por fatura. 5 e 6 incluiriam assuntos que não trazem o trecho, como Reunião de pauta e Promoção de verão.",
  },
  {
    materia: "informatica",
    tema: "Correio eletrônico",
    dificuldade: "media",
    enunciado:
      "O limite por mensagem de um provedor é de 25 MB. Desconsiderando o aumento causado pela codificação dos anexos, quantos anexos de 4 MB cada cabem em uma mensagem?",
    opcoes: [
      "7",
      "5",
      "4",
      "6",
      "25",
    ],
    correta: 3,
    explicacao:
      "Dividindo o limite pelo tamanho de cada anexo, 25 ÷ 4 = 6,25. Como não existe parte de um anexo, cabem 6 anexos inteiros, que somam 24 MB, e sobra 1 MB.\n\n7 arredondaria para cima, o que ultrapassaria o limite: 7 × 4 = 28 MB. 5 e 4 subestimam o espaço disponível. E 25 é o próprio limite em MB, e não a quantidade de anexos. Em problemas de capacidade, a divisão sempre dá um número que precisa ser arredondado para baixo, porque um anexo incompleto não pode ser enviado.",
  },
  {
    materia: "informatica",
    tema: "Correio eletrônico",
    dificuldade: "media",
    enunciado:
      "Qual é a função do TLS, na troca de mensagens de e-mail entre o programa e o servidor?",
    opcoes: [
      "Apagar as mensagens após o envio",
      "Criptografar a conexão com o servidor",
      "Aumentar o tamanho dos anexos",
      "Traduzir as mensagens para outro idioma",
      "Separar as mensagens em pastas",
    ],
    correta: 1,
    explicacao:
      "O TLS cifra a conexão entre o programa de e-mail e o servidor, e entre os servidores, de modo que quem estiver no caminho, como em um Wi-Fi aberto, não consiga ler as mensagens nem as senhas. É o que protege os dados enquanto trafegam, e vem ligado, por padrão, nos provedores atuais.\n\nEle não apaga mensagens, não aumenta o tamanho dos anexos, não traduz textos e não organiza pastas. E não protege a mensagem depois que ela chega ao servidor, caso fique guardada sem cifra.",
  },
  {
    materia: "informatica",
    tema: "Correio eletrônico",
    dificuldade: "media",
    enunciado:
      "Uma caixa de entrada recebeu 240 mensagens em um dia, e 35% delas foram marcadas como spam. Quantas mensagens não são spam?",
    opcoes: [
      "84",
      "156",
      "205",
      "35",
      "240",
    ],
    correta: 1,
    explicacao:
      "Se 35% são spam, os 65% restantes não são: 0,65 × 240 = 156 mensagens. Conferindo, 35% de 240 são 84, e 240 − 84 = 156.\n\n84 é a quantidade de mensagens de spam, e não das demais. 205 subtrai 35 de 240, tratando o percentual como se fosse uma quantidade de mensagens. 35 é o próprio percentual. E 240 é o total de mensagens recebidas, sem descontar o spam.",
  },
  {
    materia: "informatica",
    tema: "Correio eletrônico",
    dificuldade: "dificil",
    enunciado:
      "Heitor envia uma mensagem para Íris e João, com cópia (Cc) para Kátia e cópia oculta (Cco) para Luís e Marta. Luís, que estava em Cco, usa Responder a Todos. Quem recebe a resposta?",
    opcoes: [
      "Heitor",
      "Heitor, Íris, João e Kátia",
      "Heitor, Íris, João, Kátia e Marta",
      "Íris, João e Kátia",
      "Heitor, Íris e João",
    ],
    correta: 1,
    explicacao:
      "Quem estava em Cco vê o cabeçalho completo, com o remetente e os campos Para e Cc. Ao usar Responder a Todos, Luís dirige a resposta a Heitor, Íris, João e Kátia. Marta, também em Cco, não aparece para ele, e não recebe a resposta.\n\nApenas Heitor seria o Responder simples. Incluir Marta é um erro, porque o endereço dela ficou oculto. Íris, João e Kátia deixaria de fora o remetente. E Heitor, Íris e João deixaria Kátia, que estava em cópia, de fora.",
  },
  {
    materia: "informatica",
    tema: "Correio eletrônico",
    dificuldade: "dificil",
    enunciado:
      "Um arquivo de 3.000.000 de bytes é anexado a uma mensagem. O anexo é codificado em base64, na qual cada 3 bytes viram 4 caracteres. Qual é o tamanho aproximado do anexo dentro da mensagem?",
    opcoes: [
      "3.000.000 bytes",
      "3.750.000 bytes",
      "6.000.000 bytes",
      "3.300.000 bytes",
      "4.000.000 bytes",
    ],
    correta: 4,
    explicacao:
      "Na codificação base64, cada grupo de 3 bytes vira 4 caracteres, o que aumenta o tamanho em 4/3, isto é, cerca de 33%. Assim, 3.000.000 × 4 ÷ 3 = 4.000.000 bytes. É por isso que o anexo ocupa mais espaço na mensagem do que o arquivo original.\n\n3.000.000 ignora a codificação. 3.750.000 usaria um aumento de 25%. 6.000.000 dobraria o tamanho. E 3.300.000 usaria um aumento de só 10%.",
  },
  {
    materia: "informatica",
    tema: "Correio eletrônico",
    dificuldade: "dificil",
    enunciado:
      "O limite de uma mensagem é de 25 MB, contados com o anexo já codificado em base64, na qual cada 3 bytes viram 4 caracteres. Considerando 1 MB igual a 1.000.000 de bytes, qual é o maior arquivo original que cabe?",
    opcoes: [
      "25 MB",
      "33,3 MB",
      "12,5 MB",
      "18,75 MB",
      "20 MB",
    ],
    correta: 3,
    explicacao:
      "Como a codificação multiplica o tamanho por 4/3, o arquivo original só pode ocupar 3/4 do limite: 25 × 3 ÷ 4 = 18,75 MB. Conferindo, 18,75 MB × 4 ÷ 3 = 25 MB depois de codificado.\n\n25 MB ignora o aumento da codificação. 33,3 MB multiplica por 4/3, em vez de dividir, e passaria muito do limite. 12,5 MB é metade do limite, sem relação com a codificação. E 20 MB, depois de codificado, ocuparia cerca de 26,7 MB, acima do limite.",
  },
  {
    materia: "informatica",
    tema: "Correio eletrônico",
    dificuldade: "dificil",
    enunciado:
      "Uma regra da caixa de entrada move para a pasta Banco as mensagens cujo remetente termina em @banco.com.br E cujo assunto contém extrato. As mensagens, com remetente e assunto, são: Mensagem 1: gerente@banco.com.br, Extrato de maio; Mensagem 2: gerente@banco.com.br, Convite para evento; Mensagem 3: golpe@banco.com.br.falso.net, Extrato urgente; Mensagem 4: suporte@banco.com.br, Seu EXTRATO; Mensagem 5: suporte@outrobanco.com.br, Extrato disponível. Quantas mensagens são movidas?",
    opcoes: [
      "1",
      "3",
      "4",
      "5",
      "2",
    ],
    correta: 4,
    explicacao:
      "A regra exige as duas condições juntas. A mensagem Mensagem 1: atende: o remetente termina em @banco.com.br e o assunto traz extrato. A Mensagem 4: também atende, pois o assunto casa sem diferenciar maiúsculas. São 2 mensagens.\n\nA Mensagem 2: tem o remetente certo, mas o assunto não contém extrato. A Mensagem 3: tem o assunto certo, mas o remetente termina em .falso.net, e não em @banco.com.br. A Mensagem 5: vem de outro domínio. Contar as que atendem só a uma condição levaria a 3, 4 ou 5, o que erra a regra.",
  },
  {
    materia: "informatica",
    tema: "Correio eletrônico",
    dificuldade: "dificil",
    enunciado:
      "Qual é a função do SPF, usado na autenticação de e-mails de um domínio?",
    opcoes: [
      "Listar os servidores autorizados a enviar e-mails em nome do domínio",
      "Criptografar o conteúdo de todas as mensagens",
      "Aumentar o limite de anexos",
      "Traduzir os nomes dos remetentes",
      "Apagar mensagens após a leitura",
    ],
    correta: 0,
    explicacao:
      "O SPF, de Sender Policy Framework, é um registro publicado no DNS do domínio que lista os servidores autorizados a enviar e-mails em seu nome. O servidor que recebe a mensagem confere se quem a enviou está na lista, e isso ajuda a barrar remetentes falsificados.\n\nO SPF não criptografa mensagens, não altera o limite de anexos, não traduz nomes e não apaga mensagens. Costuma ser usado junto com o DKIM e o DMARC.",
  },
  {
    materia: "informatica",
    tema: "Correio eletrônico",
    dificuldade: "dificil",
    enunciado:
      "Qual é a função do DKIM, na autenticação de e-mails?",
    opcoes: [
      "Listar os endereços de todos os usuários do domínio",
      "Criar cópias de segurança das caixas postais",
      "Assinar digitalmente a mensagem, para provar a origem e a integridade",
      "Distribuir endereços IP aos servidores de e-mail",
      "Bloquear os anexos executáveis",
    ],
    correta: 2,
    explicacao:
      "O DKIM, de DomainKeys Identified Mail, faz o servidor de envio assinar digitalmente cada mensagem, com uma chave privada, e publica no DNS a chave pública correspondente. Quem recebe confere a assinatura e sabe que a mensagem veio do domínio e não foi alterada.\n\nNão lista usuários, não faz backups, não distribui endereços IP, que é o DHCP, e não bloqueia anexos. Atua junto com o SPF e o DMARC.",
  },
  {
    materia: "informatica",
    tema: "Correio eletrônico",
    dificuldade: "dificil",
    enunciado:
      "O que é o spoofing de e-mail, uma técnica usada por golpistas?",
    opcoes: [
      "Enviar a mesma mensagem a muitos destinatários em Cco",
      "Compactar anexos grandes antes do envio",
      "Responder automaticamente durante a ausência",
      "Mover mensagens para a lixeira por regra",
      "Falsificar o remetente para que a mensagem pareça vir de outra pessoa",
    ],
    correta: 4,
    explicacao:
      "No spoofing, o atacante forja o campo do remetente para que a mensagem pareça vir de alguém conhecido, como o chefe ou o banco. É a base de muitos golpes de phishing, e mecanismos como SPF, DKIM e DMARC servem para detectá-lo.\n\nEnviar para muitos em Cco é uma prática de privacidade. Compactar anexos é uma operação legítima. A resposta automática é um recurso de ausência. E mover mensagens por regra é organização da caixa de entrada.",
  },
  {
    materia: "informatica",
    tema: "Correio eletrônico",
    dificuldade: "dificil",
    enunciado:
      "Um e-mail traz o link www.meubanco.com.br em texto azul, mas, ao passar o mouse sobre ele, a barra de status mostra outro endereço. O que isso indica?",
    opcoes: [
      "Que o destino real pode ser outro: sinal de golpe",
      "Que o link é mais seguro que os demais",
      "Que o navegador está desatualizado",
      "Que a mensagem foi criptografada",
      "Que o remetente usa uma assinatura digital",
    ],
    correta: 0,
    explicacao:
      "O texto de um link pode ser diferente do endereço para o qual ele leva. Quando o endereço mostrado ao passar o mouse não corresponde ao que está escrito, é um sinal clássico de phishing: o link leva a um site falso, parecido com o verdadeiro.\n\nNão é sinal de maior segurança, nem de navegador desatualizado, nem de criptografia da mensagem. E a assinatura digital ficaria indicada de outro modo, no cabeçalho. O hábito de conferir o destino antes de clicar protege contra esse golpe.",
  },
  {
    materia: "informatica",
    tema: "Correio eletrônico",
    dificuldade: "dificil",
    enunciado:
      "O que é o padrão MIME, no correio eletrônico?",
    opcoes: [
      "Um protocolo de recebimento de mensagens",
      "Um programa antivírus para e-mails",
      "Extensão que permite anexos e conteúdo não textual",
      "Um tipo de endereço de e-mail",
      "Uma pasta que guarda os rascunhos",
    ],
    correta: 2,
    explicacao:
      "O MIME, de Multipurpose Internet Mail Extensions, estende o formato original das mensagens, que só suportava texto simples, para que levem anexos, imagens, formatação e caracteres de vários idiomas, codificados de modo que atravessem os servidores.\n\nO recebimento é feito por protocolos como o POP3 e o IMAP. O antivírus é outro tipo de programa. O endereço de e-mail identifica a caixa postal. E a pasta de rascunhos é uma pasta da caixa postal, e não um padrão.",
  },
  {
    materia: "informatica",
    tema: "Correio eletrônico",
    dificuldade: "dificil",
    enunciado:
      "Uma mensagem de e-mail é apenas assinada digitalmente, sem ser criptografada. Quem a interceptar no caminho pode ler o conteúdo?",
    opcoes: [
      "Não, pois a assinatura embaralha o conteúdo",
      "Não, pois a assinatura é uma senha de acesso",
      "Sim, pois a assinatura prova a autoria e não oculta o texto",
      "Sim, mas só se o remetente estiver em Cco",
      "Não, pois a assinatura impede qualquer cópia",
    ],
    correta: 2,
    explicacao:
      "A assinatura digital garante a autoria e a integridade, mas o texto segue legível: quem interceptar a mensagem pode lê-la, e só não consegue alterá-la sem invalidar a assinatura. O sigilo exige a criptografia, que é uma operação separada.\n\nA assinatura não embaralha o conteúdo e não funciona como senha de acesso. O campo Cco não tem relação com a leitura por terceiros no caminho. E ela não impede cópias: apenas permite saber se o conteúdo foi modificado.",
  },
];
