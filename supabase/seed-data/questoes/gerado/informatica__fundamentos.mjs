/* Questões iniciais de Informática básica. Cada conteúdo recebe ao menos uma
   questão comentada, para entrar no estudo assim que este arquivo for semeado. */

export const questoes = [
  {
    materia: "informatica",
    tema: "Hardware: componentes e periféricos",
    dificuldade: "facil",
    enunciado:
      "Durante a manutenção de um computador, o técnico explica que um componente armazena temporariamente os programas e dados que estão em uso e perde seu conteúdo quando a energia é desligada. Que componente é esse?",
    opcoes: [
      "Memória RAM",
      "Disco SSD",
      "Memória ROM",
      "Placa de vídeo",
      "Fonte de alimentação",
    ],
    correta: 0,
    explicacao:
      "A memória RAM guarda temporariamente os dados usados pelos programas em execução e é volátil: seu conteúdo se perde ao desligar o computador. SSD e ROM conservam dados sem energia; a placa de vídeo processa imagens; e a fonte fornece energia aos componentes. A RAM não é um local para guardar arquivos de modo permanente; ela acelera o trabalho imediato do sistema e dos aplicativos abertos.",
  },
  {
    materia: "informatica",
    tema: "Sistemas operacionais: Windows",
    dificuldade: "facil",
    enunciado:
      "No Windows, um arquivo foi enviado para a Lixeira por engano. Sem esvaziá-la, qual ação permite que ele volte à pasta em que estava antes?",
    opcoes: [
      "Selecionar o arquivo e usar Restaurar",
      "Formatar a unidade",
      "Criar um atalho para a Lixeira",
      "Executar a Limpeza de Disco",
      "Renomear a Lixeira",
    ],
    correta: 0,
    explicacao:
      "A opção Restaurar devolve o arquivo da Lixeira ao seu local original. Formatar e executar a Limpeza de Disco podem eliminar dados, enquanto criar atalhos, renomear a Lixeira ou alterar sua aparência não recupera o arquivo descartado. A recuperação é possível porque o arquivo ainda está guardado na Lixeira; depois que ela é esvaziada, o procedimento comum deixa de ser suficiente.",
  },
  {
    materia: "informatica",
    tema: "Sistemas operacionais: Linux",
    dificuldade: "facil",
    enunciado:
      "Em um terminal Linux, qual comando lista os arquivos e diretórios do local atual?",
    opcoes: [
      "ls",
      "cd",
      "mkdir",
      "rm",
      "pwd",
    ],
    correta: 0,
    explicacao:
      "O comando ls lista o conteúdo do diretório atual. cd muda de diretório, mkdir cria uma pasta, rm remove arquivos ou diretórios e pwd apenas mostra o caminho completo do diretório atual. Em muitos sistemas, ls -l acrescenta detalhes como permissões e tamanho, mas a forma simples já responde à necessidade de visualizar os nomes disponíveis.",
  },
  {
    materia: "informatica",
    tema: "Armazenamento e sistemas de arquivos",
    dificuldade: "facil",
    enunciado:
      "Uma pessoa salva um documento em uma pasta do computador. Qual característica permite que o sistema diferencie esse documento de uma planilha que tenha o mesmo nome-base?",
    opcoes: [
      "A resolução do monitor",
      "A extensão do arquivo, como .docx ou .xlsx",
      "A senha do usuário",
      "O endereço IP da rede",
      "A marca do teclado",
    ],
    correta: 1,
    explicacao:
      "A extensão identifica o formato associado ao arquivo e ajuda o sistema a abrir o programa adequado: .docx indica documento do Word e .xlsx indica planilha do Excel. Monitor, senha, IP e teclado não determinam o tipo ou o formato do arquivo salvo. Mudar apenas o nome de uma extensão não converte o conteúdo; para isso é necessário salvar ou exportar pelo programa em outro formato.",
  },
  {
    materia: "informatica",
    tema: "Editor de texto: Word e Writer",
    dificuldade: "media",
    enunciado:
      "Em um documento longo, a autora quer que todos os títulos principais tenham a mesma fonte, tamanho e espaçamento, inclusive os que serão criados depois. Qual recurso deve usar?",
    opcoes: [
      "Quebra de página manual",
      "Estilos de título",
      "Localizar e substituir",
      "Comentário",
      "Contagem de palavras",
    ],
    correta: 1,
    explicacao:
      "Estilos de título aplicam um conjunto padronizado de formatações e permitem alterá-lo de uma só vez no documento inteiro. Quebras só mudam a paginação; localizar, comentários e contagem de palavras não mantêm a formatação consistente dos títulos. Além de uniformizar a aparência, estilos permitem criar sumário automático e facilitar a navegação entre seções de documentos extensos.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: fórmulas e funções",
    dificuldade: "facil",
    enunciado:
      "Em uma planilha, as células B2 até B5 contêm quatro valores. Qual fórmula calcula a soma desses valores?",
    opcoes: [
      "=MEDIA(B2:B5)",
      "=SOMA(B2:B5)",
      "=CONT.SE(B2:B5)",
      "=B2:B5",
      "SOMA(B2;B5)",
    ],
    correta: 1,
    explicacao:
      "A função SOMA recebe o intervalo B2:B5 e adiciona todos os seus valores. MEDIA calcula a média, CONT.SE conta células que obedecem a um critério e um intervalo sem função não produz a soma. A última opção não é uma fórmula válida como foi escrita. Os dois pontos indicam um intervalo contínuo: ele inclui B2, B3, B4 e B5, e não apenas as duas células das extremidades.",
  },
  {
    materia: "informatica",
    tema: "Planilhas: referências, filtros e gráficos",
    dificuldade: "facil",
    enunciado:
      "Uma tabela possui uma coluna chamada Situação, com valores Aberto e Concluído. Qual recurso mostra temporariamente apenas as linhas com Situação igual a Aberto, sem apagar as outras?",
    opcoes: [
      "Classificação",
      "Mesclagem de células",
      "Filtro",
      "Congelamento de painéis",
      "Validação de dados",
    ],
    correta: 2,
    explicacao:
      "O filtro exibe somente as linhas que atendem ao critério escolhido e preserva as demais para nova visualização. Classificação apenas muda a ordem; mesclagem altera células; congelar painéis fixa áreas na tela; e validação limita o que pode ser digitado. Para voltar à lista completa, basta limpar o filtro aplicado; nenhuma linha foi removida ou modificada durante essa consulta.",
  },
  {
    materia: "informatica",
    tema: "Apresentações: PowerPoint e Impress",
    dificuldade: "facil",
    enunciado:
      "Antes de apresentar, uma estudante quer visualizar os slides exatamente como serão mostrados ao público, ocupando a tela inteira. Qual modo deve iniciar?",
    opcoes: [
      "Modo de anotações",
      "Classificação de slides",
      "Apresentação de slides",
      "Modo de estrutura de tópicos",
      "Painel de seleção",
    ],
    correta: 2,
    explicacao:
      "O modo Apresentação de slides exibe a sequência para o público, normalmente em tela cheia. Anotações serve ao apresentador, classificação reorganiza miniaturas, estrutura trabalha o texto e painel de seleção controla objetos do slide. Esse modo também permite avançar pelos slides com teclado ou controle remoto durante a fala, sem mostrar as ferramentas de edição ao público.",
  },
  {
    materia: "informatica",
    tema: "Redes de computadores e protocolos",
    dificuldade: "media",
    enunciado:
      "Ao digitar um endereço como exemplo.gov.br, o navegador precisa descobrir o endereço IP do servidor correspondente. Qual serviço de rede realiza essa tradução?",
    opcoes: [
      "HTTP",
      "FTP",
      "DNS",
      "SMTP",
      "DHCP",
    ],
    correta: 2,
    explicacao:
      "O DNS traduz nomes de domínio em endereços IP. HTTP transporta páginas web, FTP transfere arquivos, SMTP envia e-mails e DHCP distribui configurações de rede, como endereços IP, mas não resolve o nome de um site solicitado pelo navegador. Essa tradução permite que pessoas usem nomes fáceis de memorizar enquanto os equipamentos se comunicam por endereços numéricos.",
  },
  {
    materia: "informatica",
    tema: "Internet: navegadores e mecanismos de busca",
    dificuldade: "facil",
    enunciado:
      "Em um mecanismo de busca, qual estratégia tende a localizar páginas que contenham exatamente a expressão relatório anual 2025, nessa ordem?",
    opcoes: [
      "Pesquisar relatório OR anual OR 2025",
      "Apagar todas as palavras da busca",
      "Usar apenas a tecla F5",
      "Pesquisar \"relatório anual 2025\" entre aspas",
      "Abrir uma janela anônima",
    ],
    correta: 3,
    explicacao:
      "As aspas pedem busca pela expressão exata, preservando a sequência das palavras. O operador OR amplia os resultados, F5 atualiza a página e a janela anônima altera dados locais de navegação; nenhum deles especifica uma expressão literal ao buscador. Esse recurso é útil quando a ordem das palavras é relevante, por exemplo em títulos, trechos de norma ou nomes oficiais de documentos.",
  },
  {
    materia: "informatica",
    tema: "Correio eletrônico",
    dificuldade: "facil",
    enunciado:
      "Uma servidora precisa enviar um aviso a vários destinatários sem que eles vejam os endereços de e-mail uns dos outros. Em qual campo deve inserir esses destinatários?",
    opcoes: [
      "Para",
      "Cc",
      "Assunto",
      "Cco",
      "Responder a",
    ],
    correta: 3,
    explicacao:
      "Cco significa cópia oculta e impede que cada destinatário veja os demais endereços incluídos nesse campo. Para e Cc tornam endereços visíveis, Assunto define o título da mensagem e Responder a indica onde devem chegar as respostas. Usar Cco protege a privacidade da lista de contatos e evita expor endereços pessoais em comunicados enviados para muitas pessoas.",
  },
  {
    materia: "informatica",
    tema: "Segurança da informação",
    dificuldade: "facil",
    enunciado:
      "Um serviço pede senha e, em seguida, um código temporário gerado no celular da pessoa. Que prática de segurança está sendo usada?",
    opcoes: [
      "Compactação de arquivos",
      "Navegação privada",
      "Desfragmentação de disco",
      "Autenticação em dois fatores",
      "Espelhamento de tela",
    ],
    correta: 3,
    explicacao:
      "A autenticação em dois fatores combina algo que a pessoa sabe, a senha, com algo que ela possui ou recebe, como o código temporário. As outras opções lidam com arquivos, navegação, manutenção do disco ou exibição de tela e não confirmam identidade. Assim, o vazamento da senha sozinho tende a não bastar para entrar na conta, pois falta a segunda comprovação exigida pelo serviço.",
  },
  {
    materia: "informatica",
    tema: "Malware, backup e criptografia",
    dificuldade: "facil",
    enunciado:
      "Após abrir um anexo suspeito, uma empresa percebe que seus arquivos foram criptografados e surge uma cobrança para liberar o acesso. Qual tipo de malware descreve melhor o incidente?",
    opcoes: [
      "Antivírus",
      "Firewall",
      "Spyware",
      "Cookie",
      "Ransomware",
    ],
    correta: 4,
    explicacao:
      "Ransomware bloqueia ou criptografa dados para exigir pagamento pela recuperação. Antivírus e firewall são mecanismos de proteção; spyware busca espionar informações; cookies registram dados de navegação e não costumam criptografar arquivos para extorsão. Backups isolados e atualizados reduzem o impacto desse ataque, porque permitem recuperar cópias sem depender da chave prometida pelo criminoso.",
  },
  {
    materia: "informatica",
    tema: "Computação em nuvem",
    dificuldade: "media",
    enunciado:
      "Uma equipe usa um serviço pela internet para aumentar ou reduzir recursos de processamento conforme a demanda, sem comprar servidores próprios. Qual característica da computação em nuvem aparece nesse caso?",
    opcoes: [
      "Uso obrigatório de rede local",
      "Instalação apenas em mídia física",
      "Ausência de conexão com a internet",
      "Eliminação de qualquer controle de acesso",
      "Elasticidade de recursos",
    ],
    correta: 4,
    explicacao:
      "Elasticidade é a capacidade de ajustar recursos sob demanda, ampliando ou reduzindo processamento conforme a necessidade. Serviços de nuvem dependem de conectividade e ainda exigem controles de acesso; não se definem por mídia física ou uso exclusivo de rede local. Ela ajuda a evitar manter capacidade ociosa em períodos calmos ou sofrer lentidão quando há aumento temporário de usuários.",
  },
  {
    materia: "informatica",
    tema: "Banco de dados: noções",
    dificuldade: "facil",
    enunciado:
      "Em uma tabela de cadastro de servidores, cada registro precisa ter um campo que o identifique de forma única, sem repetição. Como esse campo é chamado?",
    opcoes: [
      "Chave estrangeira",
      "Índice de texto",
      "Backup incremental",
      "Consulta de seleção",
      "Chave primária",
    ],
    correta: 4,
    explicacao:
      "A chave primária identifica unicamente cada linha da própria tabela. Chave estrangeira cria referência a outra tabela; índice pode acelerar consultas; backup copia dados; e consulta de seleção apenas lê registros, sem definir uma identificação única. Esse campo não pode se repetir em registros diferentes, pois sua função é permitir localizar com segurança um único cadastro dentro da tabela.",
  },
];
