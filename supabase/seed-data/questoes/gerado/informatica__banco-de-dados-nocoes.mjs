/* Banco de dados: noções (49 questões) — informatica.

   Autorais, escritas por Claude (Anthropic) em 2026-10-09 seguindo as cinco
   regras de CONTINUAR-MATERIAS-POR-OBJETIVO.md. Nenhuma é atribuída a banca
   ou a prova real.

   Conferência do gabarito: 19 de 49 recalculadas por código que chega à
   resposta por outro caminho (ver .rascunho/questoes-objetivo/informatica__banco-de-dados-nocoes.mjs);
   30 conceituais aguardam a revisão independente listada no relatório.

   Montado por scripts/montar-questoes-objetivo.mjs; gabarito redistribuído
   por scripts/rebalancear-gabarito.mjs. Relatório em
   _relatorios/informatica__banco-de-dados-nocoes.json. */

export const questoes = [
  {
    materia: "informatica",
    tema: "Banco de dados: noções",
    dificuldade: "facil",
    enunciado:
      "O que é um banco de dados, em informática?",
    opcoes: [
      "Um programa para editar fotos",
      "Um tipo de cabo de rede",
      "Uma pasta que guarda só imagens",
      "Um conjunto organizado de dados relacionados entre si",
      "Um aparelho que imprime documentos",
    ],
    correta: 3,
    explicacao:
      "O banco de dados é um conjunto organizado de dados relacionados, guardados de modo que possam ser consultados, atualizados e protegidos com facilidade. Cadastros de alunos, estoques de lojas e prontuários de hospitais são exemplos.\n\nUm programa de fotos é outro tipo de software. O cabo de rede é um meio físico. Uma pasta de imagens é só uma forma de organizar arquivos, sem relações entre os dados. E a impressora é um periférico de saída.",
  },
  {
    materia: "informatica",
    tema: "Banco de dados: noções",
    dificuldade: "facil",
    enunciado:
      "O que é um SGBD, ou sistema gerenciador de banco de dados?",
    opcoes: [
      "Um tipo de pen drive",
      "Uma linguagem para escrever textos",
      "Uma tabela com apenas uma linha",
      "Programa que gerencia o banco",
      "O nome de um cabo especial",
    ],
    correta: 3,
    explicacao:
      "O SGBD é o software que gerencia o banco de dados: cria as tabelas, controla quem pode ler e alterar os dados, garante a integridade e executa as consultas. MySQL, PostgreSQL, Oracle, SQL Server e SQLite são exemplos.\n\nNão é um pen drive, nem uma linguagem de textos. Uma tabela com uma só linha é apenas um conjunto de dados, e não o programa que os gerencia. E também não é um cabo.",
  },
  {
    materia: "informatica",
    tema: "Banco de dados: noções",
    dificuldade: "facil",
    enunciado:
      "Em uma tabela de um banco de dados relacional, como se chama cada linha, que guarda os dados de um item?",
    opcoes: [
      "Campo",
      "Registro",
      "Esquema",
      "Índice",
      "Consulta",
    ],
    correta: 1,
    explicacao:
      "Cada linha da tabela é um registro, também chamado de tupla, e reúne os dados de uma ocorrência, como um aluno ou um produto. Uma tabela de alunos tem um registro para cada aluno.\n\nO campo, ou atributo, é cada coluna. O esquema é a descrição da estrutura do banco. O índice é um recurso que acelera as buscas. E a consulta é um pedido de dados feito ao banco.",
  },
  {
    materia: "informatica",
    tema: "Banco de dados: noções",
    dificuldade: "facil",
    enunciado:
      "Em uma tabela de um banco de dados relacional, como se chama cada coluna, que guarda um tipo de informação?",
    opcoes: [
      "Registro",
      "Banco",
      "Relatório",
      "Servidor",
      "Campo, ou atributo",
    ],
    correta: 4,
    explicacao:
      "Cada coluna da tabela é um campo, ou atributo, e guarda um tipo de informação, como o nome, a data de nascimento ou a nota. Todos os registros têm os mesmos campos, e cada campo tem um tipo de dado definido.\n\nO registro é a linha. O banco é o conjunto de tabelas. O relatório é uma forma de apresentar dados. E o servidor é o computador em que o banco funciona.",
  },
  {
    materia: "informatica",
    tema: "Banco de dados: noções",
    dificuldade: "facil",
    enunciado:
      "O que é uma chave primária, em uma tabela?",
    opcoes: [
      "Uma senha de acesso ao banco",
      "Um campo que pode se repetir à vontade",
      "Um campo que identifica cada registro de forma única",
      "Uma cópia de segurança da tabela",
      "Um tipo de gráfico",
    ],
    correta: 2,
    explicacao:
      "A chave primária é o campo, ou o conjunto de campos, cujo valor identifica de modo único cada registro da tabela, e nunca se repete nem fica vazio. O número de matrícula de um aluno é um exemplo.\n\nNão é uma senha. Um campo que pode se repetir não identifica ninguém. A cópia de segurança é o backup. E o gráfico é uma forma de apresentar dados.",
  },
  {
    materia: "informatica",
    tema: "Banco de dados: noções",
    dificuldade: "facil",
    enunciado:
      "O que significa a sigla SQL, usada em bancos de dados?",
    opcoes: [
      "Structured Query Language",
      "Super Quick Link",
      "Simple Quiet Line",
      "Secure Question Letter",
      "Single Query Loader",
    ],
    correta: 0,
    explicacao:
      "SQL, de Structured Query Language, é a linguagem padrão para criar, consultar e alterar dados em bancos de dados relacionais. Com ela se escrevem comandos como SELECT, INSERT, UPDATE e DELETE. Ela foi padronizada por organismos como a ISO, e a maioria dos SGBDs a aceita com pequenas variações de dialeto.\n\nAs demais expansões não correspondem à sigla. O que importa é que a SQL é uma linguagem, e não um programa: ela é interpretada pelo SGBD.",
  },
  {
    materia: "informatica",
    tema: "Banco de dados: noções",
    dificuldade: "facil",
    enunciado:
      "Qual comando SQL é usado para consultar, ou seja, buscar dados de uma tabela?",
    opcoes: [
      "INSERT",
      "SELECT",
      "DELETE",
      "UPDATE",
      "DROP",
    ],
    correta: 1,
    explicacao:
      "O comando SELECT busca dados, e é o mais usado da SQL. Em SELECT nome FROM alunos, por exemplo, o banco devolve o nome de todos os alunos da tabela.\n\nO INSERT acrescenta novos registros. O DELETE remove registros. O UPDATE altera registros existentes. E o DROP remove uma tabela inteira, com sua estrutura. Só o SELECT consulta os dados sem alterá-los.",
  },
  {
    materia: "informatica",
    tema: "Banco de dados: noções",
    dificuldade: "facil",
    enunciado:
      "Qual comando SQL é usado para inserir um novo registro em uma tabela?",
    opcoes: [
      "SELECT",
      "DELETE",
      "UPDATE",
      "INSERT",
      "CREATE",
    ],
    correta: 3,
    explicacao:
      "O comando INSERT acrescenta um novo registro, como em INSERT INTO alunos (nome, nota) VALUES ('Ana', 8). Cada comando informa a tabela, os campos e os valores. Os valores precisam respeitar o tipo de cada campo e as restrições da tabela, como a chave primária.\n\nO SELECT consulta dados. O DELETE apaga registros. O UPDATE altera registros que já existem. E o CREATE cria objetos do banco, como uma tabela, e não registros dentro dela.",
  },
  {
    materia: "informatica",
    tema: "Banco de dados: noções",
    dificuldade: "facil",
    enunciado:
      "Qual comando SQL é usado para alterar dados que já existem em uma tabela?",
    opcoes: [
      "UPDATE",
      "INSERT",
      "SELECT",
      "DROP",
      "GRANT",
    ],
    correta: 0,
    explicacao:
      "O UPDATE altera valores de registros existentes, como em UPDATE alunos SET nota = 9 WHERE id = 1. A cláusula WHERE limita quais registros são atingidos: sem ela, todos seriam alterados.\n\nO INSERT cria registros novos. O SELECT só consulta. O DROP remove uma tabela. E o GRANT concede permissões a usuários. Só o UPDATE modifica o conteúdo dos registros.",
  },
  {
    materia: "informatica",
    tema: "Banco de dados: noções",
    dificuldade: "facil",
    enunciado:
      "Qual dos nomes abaixo é um sistema gerenciador de banco de dados relacional?",
    opcoes: [
      "Photoshop",
      "Paint",
      "Windows Media Player",
      "PostgreSQL",
      "WinRAR",
    ],
    correta: 3,
    explicacao:
      "O PostgreSQL é um SGBD relacional, de código aberto, muito usado em sistemas web. Outros exemplos são o MySQL, o Oracle, o SQL Server e o SQLite.\n\nO Photoshop edita imagens. O Paint desenha. O Windows Media Player toca músicas e vídeos. E o WinRAR compacta arquivos. Nenhum deles armazena e consulta dados relacionados, como um banco de dados.",
  },
  {
    materia: "informatica",
    tema: "Banco de dados: noções",
    dificuldade: "facil",
    enunciado:
      "O que é uma tabela, em um banco de dados relacional?",
    opcoes: [
      "Um tipo de gráfico de pizza",
      "Um programa de planilhas",
      "Estrutura de linhas e colunas",
      "Um cabo de rede",
      "Um antivírus",
    ],
    correta: 2,
    explicacao:
      "A tabela organiza os dados de um assunto em linhas, os registros, e colunas, os campos, como a tabela de alunos, a de produtos ou a de pedidos. O banco de dados relacional é feito de várias tabelas ligadas entre si. Cada tabela deve tratar de um só assunto, e a ligação entre assuntos diferentes é feita pelas chaves.\n\nNão é um gráfico, nem um programa, mesmo que a planilha tenha aparência parecida. Também não é um cabo ou um antivírus.",
  },
  {
    materia: "informatica",
    tema: "Banco de dados: noções",
    dificuldade: "media",
    enunciado:
      "O que é uma chave estrangeira, em um banco de dados relacional?",
    opcoes: [
      "Um campo que se refere à chave primária de outra tabela",
      "Uma senha do administrador",
      "Um campo que só aceita texto estrangeiro",
      "Uma cópia da tabela em outro país",
      "Um campo que nunca é usado",
    ],
    correta: 0,
    explicacao:
      "A chave estrangeira é o campo que guarda o valor da chave primária de outro registro, geralmente de outra tabela, e cria a ligação entre elas. Em pedidos, o campo cliente_id é uma chave estrangeira para a tabela de clientes.\n\nNão é uma senha, e não tem relação com idiomas ou países. Também não é um campo inútil: é o que permite juntar as tabelas em consultas e garantir a integridade das ligações.",
  },
  {
    materia: "informatica",
    tema: "Banco de dados: noções",
    dificuldade: "media",
    enunciado:
      "Em um sistema de loja, um cliente pode fazer vários pedidos, mas cada pedido pertence a um só cliente. Que tipo de relacionamento é esse?",
    opcoes: [
      "Um para um (1:1)",
      "Muitos para muitos (N:N)",
      "Nenhum relacionamento",
      "Um para muitos (1:N)",
      "Zero para zero",
    ],
    correta: 3,
    explicacao:
      "Um cliente se liga a muitos pedidos, e cada pedido se liga a um só cliente: é um relacionamento um para muitos. Costuma ser implementado pondo a chave do cliente, como chave estrangeira, na tabela de pedidos.\n\nO um para um liga cada registro a exatamente um outro. O muitos para muitos liga vários a vários. E existe, sim, um relacionamento entre as duas tabelas, e ele não é do tipo zero para zero.",
  },
  {
    materia: "informatica",
    tema: "Banco de dados: noções",
    dificuldade: "media",
    enunciado:
      "Um aluno pode se matricular em várias disciplinas, e cada disciplina tem vários alunos. Como esse relacionamento muitos para muitos é implementado em um banco relacional?",
    opcoes: [
      "Repetindo os dados nas duas tabelas",
      "Com uma tabela associativa, que liga as duas",
      "Colocando todos os alunos em uma célula",
      "Apagando uma das tabelas",
      "Não é possível implementá-lo",
    ],
    correta: 1,
    explicacao:
      "O relacionamento muitos para muitos é desfeito com uma tabela associativa, no exemplo, a de matrículas, que guarda a chave do aluno e a da disciplina. Cada linha representa uma matrícula, e as duas chaves estrangeiras ligam as tabelas originais.\n\nRepetir dados gera inconsistência. Pôr todos os alunos em uma célula viola a primeira forma normal. Apagar uma tabela perderia informação. E é possível, sim, implementá-lo, e dessa forma.",
  },
  {
    materia: "informatica",
    tema: "Banco de dados: noções",
    dificuldade: "media",
    enunciado:
      "O que é a integridade referencial, em um banco de dados?",
    opcoes: [
      "Garantir que o banco nunca seja copiado",
      "Impedir qualquer consulta",
      "Apagar registros antigos automaticamente",
      "Aumentar a velocidade da rede",
      "Chave estrangeira sempre válida",
    ],
    correta: 4,
    explicacao:
      "A integridade referencial assegura que as ligações entre tabelas sejam válidas: um pedido não pode apontar para um cliente que não existe, e um cliente com pedidos não pode ser apagado sem tratar os pedidos. O SGBD recusa operações que a violariam.\n\nNão proíbe cópias, nem consultas. Não apaga registros antigos por conta própria. E não tem relação com a velocidade da rede.",
  },
  {
    materia: "informatica",
    tema: "Banco de dados: noções",
    dificuldade: "media",
    enunciado:
      "Qual é o objetivo principal da normalização de um banco de dados?",
    opcoes: [
      "Aumentar o tamanho dos dados",
      "Misturar todas as tabelas em uma só",
      "Deixar os dados sem chave",
      "Impedir o uso de SQL",
      "Reduzir a redundância e evitar anomalias nos dados",
    ],
    correta: 4,
    explicacao:
      "A normalização organiza as tabelas por regras, as formas normais, de modo a reduzir a repetição de dados e evitar anomalias de inserção, de atualização e de exclusão. Em vez de repetir o nome do cliente em cada pedido, guarda-se o nome uma vez, e liga-se por uma chave.\n\nNão busca aumentar o tamanho dos dados, nem reunir tudo em uma tabela, o que seria o contrário. Todas as tabelas precisam de chave. E a normalização não impede o uso de SQL.",
  },
  {
    materia: "informatica",
    tema: "Banco de dados: noções",
    dificuldade: "media",
    enunciado:
      "Qual é o grupo de comandos SQL que define a estrutura do banco, como CREATE TABLE, ALTER TABLE e DROP TABLE?",
    opcoes: [
      "DDL, linguagem de definição de dados",
      "DML, linguagem de manipulação de dados",
      "DCL, linguagem de controle de dados",
      "TCL, linguagem de controle de transações",
      "HTML, linguagem de marcação",
    ],
    correta: 0,
    explicacao:
      "A DDL, de Data Definition Language, reúne os comandos que criam, alteram e removem a estrutura do banco, como tabelas e índices: CREATE, ALTER e DROP.\n\nA DML, de manipulação, trata dos dados em si, com INSERT, UPDATE, DELETE e SELECT. A DCL controla permissões, com GRANT e REVOKE. A TCL controla transações, com COMMIT e ROLLBACK. E o HTML é a linguagem das páginas da web, e não de bancos de dados.",
  },
  {
    materia: "informatica",
    tema: "Banco de dados: noções",
    dificuldade: "media",
    enunciado:
      "Qual é o grupo de comandos SQL que manipula os dados das tabelas, como INSERT, UPDATE e DELETE?",
    opcoes: [
      "DDL, linguagem de definição de dados",
      "DCL, linguagem de controle de dados",
      "DML, linguagem de manipulação de dados",
      "TCL, linguagem de controle de transações",
      "CSS, linguagem de estilos",
    ],
    correta: 2,
    explicacao:
      "A DML, de Data Manipulation Language, reúne os comandos que inserem, alteram, apagam e, em muitas classificações, consultam os dados: INSERT, UPDATE, DELETE e SELECT.\n\nA DDL define a estrutura, com CREATE, ALTER e DROP. A DCL trata de permissões, com GRANT e REVOKE. A TCL trata de transações, com COMMIT e ROLLBACK. E o CSS é uma linguagem de estilos de páginas, e não de bancos de dados.",
  },
  {
    materia: "informatica",
    tema: "Banco de dados: noções",
    dificuldade: "media",
    enunciado:
      "Qual comando SQL concede a um usuário permissão para acessar objetos do banco?",
    opcoes: [
      "REVOKE",
      "GRANT",
      "SELECT",
      "COMMIT",
      "CREATE",
    ],
    correta: 1,
    explicacao:
      "O GRANT concede permissões, como a de ler ou a de alterar uma tabela, a usuários ou papéis. Faz parte da DCL, a linguagem de controle de dados. O uso criterioso do GRANT segue o princípio do menor privilégio: cada usuário recebe só o que precisa.\n\nO REVOKE faz o contrário: retira permissões. O SELECT consulta dados. O COMMIT confirma uma transação. E o CREATE cria objetos, como tabelas. Só o GRANT dá permissão a alguém.",
  },
  {
    materia: "informatica",
    tema: "Banco de dados: noções",
    dificuldade: "media",
    enunciado:
      "O que faz o comando COMMIT, em uma transação de banco de dados?",
    opcoes: [
      "Desfaz todas as alterações",
      "Apaga o banco inteiro",
      "Confirma e grava as alterações da transação",
      "Cria um novo usuário",
      "Mostra a estrutura de uma tabela",
    ],
    correta: 2,
    explicacao:
      "O COMMIT encerra a transação com sucesso e torna definitivas as alterações feitas desde o seu início, que passam a ser visíveis para os outros usuários.\n\nDesfazer as alterações é o papel do ROLLBACK. O COMMIT não apaga o banco, não cria usuários e não mostra a estrutura de tabelas. Os dois comandos, COMMIT e ROLLBACK, formam a TCL, a linguagem de controle de transações.",
  },
  {
    materia: "informatica",
    tema: "Banco de dados: noções",
    dificuldade: "media",
    enunciado:
      "Qual das propriedades ACID garante que uma transação seja executada por inteiro ou não seja executada, sem deixar resultados parciais?",
    opcoes: [
      "Atomicidade",
      "Consistência",
      "Isolamento",
      "Durabilidade",
      "Portabilidade",
    ],
    correta: 0,
    explicacao:
      "A atomicidade trata a transação como uma unidade indivisível: ou todas as operações são concluídas, ou nenhuma é, e o banco volta ao estado anterior. É o que evita, em uma transferência bancária, que o dinheiro saia de uma conta e não chegue à outra.\n\nA consistência leva o banco de um estado válido a outro. O isolamento impede a interferência entre transações simultâneas. A durabilidade mantém o que foi confirmado, mesmo depois de uma falha. E a portabilidade não faz parte do ACID.",
  },
  {
    materia: "informatica",
    tema: "Banco de dados: noções",
    dificuldade: "media",
    enunciado:
      "Para que serve um índice em uma tabela de banco de dados?",
    opcoes: [
      "Apagar registros repetidos",
      "Acelerar as buscas por determinados campos",
      "Guardar as senhas dos usuários",
      "Impedir o uso do SELECT",
      "Reduzir o número de colunas",
    ],
    correta: 1,
    explicacao:
      "O índice é uma estrutura auxiliar, como o índice de um livro, que permite ao banco achar registros por um campo sem percorrer a tabela inteira, e acelera as consultas. Em compensação, ocupa espaço e deixa mais lentas as inserções e as atualizações, que precisam atualizá-lo.\n\nNão apaga registros repetidos, não guarda senhas, não impede consultas e não reduz o número de colunas.",
  },
  {
    materia: "informatica",
    tema: "Banco de dados: noções",
    dificuldade: "media",
    enunciado:
      "O que é uma view, ou visão, em um banco de dados relacional?",
    opcoes: [
      "Uma consulta salva, que se usa como uma tabela virtual",
      "Uma cópia física completa do banco",
      "Um tipo de cabo de rede",
      "Um usuário administrador",
      "Uma senha criptografada",
    ],
    correta: 0,
    explicacao:
      "A view é uma consulta guardada com um nome, que se usa em outras consultas como se fosse uma tabela, mas que não guarda dados próprios: mostra o resultado da consulta no momento em que é usada. Serve para simplificar consultas e para limitar o que cada usuário vê.\n\nNão é uma cópia física do banco, nem um cabo, nem um usuário, nem uma senha.",
  },
  {
    materia: "informatica",
    tema: "Banco de dados: noções",
    dificuldade: "media",
    enunciado:
      "O que faz um INNER JOIN, ao ligar duas tabelas por uma condição?",
    opcoes: [
      "Devolve todas as linhas de uma tabela, com ou sem correspondência",
      "Apaga as linhas que se repetem",
      "Soma todos os campos numéricos",
      "Devolve só as linhas que têm correspondência nas duas tabelas",
      "Cria uma nova tabela no banco",
    ],
    correta: 3,
    explicacao:
      "O INNER JOIN combina as linhas das duas tabelas que atendem à condição de ligação, e descarta as que não encontram par. Se um pedido não tem cliente correspondente, ele não aparece no resultado.\n\nDevolver todas as linhas de uma das tabelas, com ou sem par, é o LEFT JOIN, ou o RIGHT JOIN. Apagar repetições é função do DISTINCT. Somar campos é função do SUM. E a criação de tabelas usa o CREATE TABLE.",
  },
  {
    materia: "informatica",
    tema: "Banco de dados: noções",
    dificuldade: "media",
    enunciado:
      "O que são os bancos de dados NoSQL, como o MongoDB?",
    opcoes: [
      "Bancos que só funcionam sem Internet",
      "Bancos feitos exclusivamente de planilhas",
      "Bancos não relacionais",
      "Bancos que não guardam dados",
      "Bancos sem nenhum tipo de estrutura",
    ],
    correta: 2,
    explicacao:
      "Os bancos NoSQL, de Not only SQL, fogem do modelo de tabelas relacionais: guardam dados como documentos, pares chave-valor, colunas ou grafos. São usados quando há volumes enormes ou estruturas que mudam com frequência. O MongoDB é um exemplo, de documentos.\n\nNão são bancos que só funcionam offline, nem feitos de planilhas. Guardam dados, sim, e têm estrutura própria, embora mais flexível que a dos bancos relacionais.",
  },
  {
    materia: "informatica",
    tema: "Banco de dados: noções",
    dificuldade: "media",
    enunciado:
      "O que representa o diagrama entidade-relacionamento, o DER, no projeto de um banco de dados?",
    opcoes: [
      "O desenho da rede elétrica do prédio",
      "Entidades, atributos e relacionamentos",
      "O nome de todos os usuários",
      "A velocidade do disco rígido",
      "O tamanho de cada arquivo",
    ],
    correta: 1,
    explicacao:
      "O DER é um desenho do modelo conceitual do banco: mostra as entidades, como aluno e disciplina, os atributos de cada uma e os relacionamentos entre elas, com a cardinalidade, como um para muitos. Serve de base para criar as tabelas. Ele é feito antes das tabelas, na fase do projeto conceitual.\n\nNão é a rede elétrica do prédio, a lista de usuários, a velocidade do disco ou o tamanho dos arquivos.",
  },
  {
    materia: "informatica",
    tema: "Banco de dados: noções",
    dificuldade: "media",
    enunciado:
      "Considere alunos(id, nome, turma, nota): (1, 'Ana', 'A', 8); (2, 'Bruno', 'B', 6); (3, 'Carla', 'A', 9); (4, 'Diego', 'B', 7); (5, 'Eva', 'A', 5). Qual é o resultado da consulta SELECT COUNT(*) FROM alunos WHERE turma = 'A'?",
    opcoes: [
      "2",
      "5",
      "4",
      "3",
      "1",
    ],
    correta: 3,
    explicacao:
      "A cláusula WHERE filtra os registros da turma A: Ana, Carla e Eva. O COUNT(*) conta as linhas que sobraram, e o resultado é 3. O COUNT(*) conta linhas, e não valores de um campo, e por isso conta também as linhas com campos vazios.\n\n2 seria o número de alunos da turma B. 5 é o total de alunos, sem aplicar o filtro. 4 e 1 não correspondem a nenhuma contagem possível com esses dados. Primeiro se filtra, e só depois se conta.",
  },
  {
    materia: "informatica",
    tema: "Banco de dados: noções",
    dificuldade: "media",
    enunciado:
      "Considere alunos(id, nome, turma, nota): (1, 'Ana', 'A', 8); (2, 'Bruno', 'B', 6); (3, 'Carla', 'A', 9); (4, 'Diego', 'B', 7); (5, 'Eva', 'A', 5). Qual é o resultado da consulta SELECT AVG(nota) FROM alunos WHERE turma = 'B'?",
    opcoes: [
      "6",
      "6,5",
      "7",
      "13",
      "7,5",
    ],
    correta: 1,
    explicacao:
      "A turma B tem Bruno, com nota 6, e Diego, com nota 7. A média é (6 + 7) ÷ 2 = 6,5. O resultado do AVG é, em geral, um número decimal, mesmo quando todas as notas são inteiras.\n\n6 e 7 são as notas isoladas de cada aluno. 13 é a soma das duas notas, sem dividir pela quantidade. E 7,5 não corresponde a nenhuma conta com esses dados. O AVG calcula a média só dos registros que passaram pelo filtro.",
  },
  {
    materia: "informatica",
    tema: "Banco de dados: noções",
    dificuldade: "media",
    enunciado:
      "Considere alunos(id, nome, turma, nota): (1, 'Ana', 'A', 8); (2, 'Bruno', 'B', 6); (3, 'Carla', 'A', 9); (4, 'Diego', 'B', 7); (5, 'Eva', 'A', 5). Na consulta SELECT nome FROM alunos WHERE nota >= 7 ORDER BY nota DESC, qual nome aparece na primeira linha do resultado?",
    opcoes: [
      "Carla",
      "Ana",
      "Diego",
      "Bruno",
      "Eva",
    ],
    correta: 0,
    explicacao:
      "O WHERE mantém quem tem nota 7 ou mais: Ana, 8, Carla, 9, e Diego, 7. O ORDER BY nota DESC ordena da maior para a menor, e a lista fica Carla, Ana e Diego. A primeira linha é Carla.\n\nAna seria a primeira se a ordem fosse por nome. Diego seria a primeira em ordem crescente. Bruno e Eva não aparecem, pois suas notas, 6 e 5, não atendem ao filtro.",
  },
  {
    materia: "informatica",
    tema: "Banco de dados: noções",
    dificuldade: "media",
    enunciado:
      "Considere alunos(id, nome, turma, nota): (1, 'Ana', 'A', 8); (2, 'Bruno', 'B', 6); (3, 'Carla', 'A', 9); (4, 'Diego', 'B', 7); (5, 'Eva', 'A', 5). Qual turma é devolvida pela consulta SELECT turma FROM alunos GROUP BY turma HAVING AVG(nota) > 7?",
    opcoes: [
      "B",
      "A e B",
      "A",
      "Nenhuma turma",
      "A consulta dá erro",
    ],
    correta: 2,
    explicacao:
      "O GROUP BY forma um grupo por turma, e o HAVING filtra os grupos pela média. A turma A tem notas 8, 9 e 5, e média 22 ÷ 3 ≈ 7,33, acima de 7. A turma B tem 6 e 7, e média 6,5, abaixo de 7. Só a turma A é devolvida.\n\nB fica de fora, e por isso a resposta não inclui as duas. Nenhuma turma só valeria se todas as médias fossem menores ou iguais a 7. E a consulta está correta: o HAVING é a cláusula certa para filtrar grupos.",
  },
  {
    materia: "informatica",
    tema: "Banco de dados: noções",
    dificuldade: "media",
    enunciado:
      "Considere alunos(id, nome, turma, nota): (1, 'Ana', 'A', 8); (2, 'Bruno', 'B', 6); (3, 'Carla', 'A', 9); (4, 'Diego', 'B', 7); (5, 'Eva', 'A', 5). Qual é o resultado da consulta SELECT COUNT(*) FROM alunos WHERE nome LIKE '%o'?",
    opcoes: [
      "3",
      "1",
      "2",
      "4",
      "0",
    ],
    correta: 2,
    explicacao:
      "O padrão '%o' casa com os nomes que terminam em o: Bruno e Diego. O símbolo % representa qualquer sequência de caracteres. O resultado é 2. O LIKE não diferencia maiúsculas de minúsculas em alguns bancos, e o símbolo _ representa um único caractere, em vez de uma sequência qualquer.\n\n3 contaria também um terceiro nome, mas Ana, Carla e Eva terminam em a. 1 contaria só um dos dois. 4 e 0 não correspondem à contagem. O LIKE, com o %, serve para buscas por parte do texto.",
  },
  {
    materia: "informatica",
    tema: "Banco de dados: noções",
    dificuldade: "media",
    enunciado:
      "Considere alunos(id, nome, turma, nota): (1, 'Ana', 'A', 8); (2, 'Bruno', 'B', 6); (3, 'Carla', 'A', 9); (4, 'Diego', 'B', 7); (5, 'Eva', 'A', 5). Qual é o resultado da consulta SELECT COUNT(DISTINCT turma) FROM alunos?",
    opcoes: [
      "5",
      "3",
      "1",
      "2",
      "0",
    ],
    correta: 3,
    explicacao:
      "O DISTINCT elimina as repetições antes de contar. A coluna turma tem os valores A, B, A, B e A, e, sem repetições, só dois valores distintos: A e B. O resultado é 2. O DISTINCT também pode ser usado em SELECT DISTINCT turma, que lista cada turma uma só vez.\n\n5 seria o resultado de COUNT(turma), sem o DISTINCT, que conta todas as linhas. 3 e 1 não correspondem à quantidade de turmas diferentes. E 0 só ocorreria se a tabela estivesse vazia.",
  },
  {
    materia: "informatica",
    tema: "Banco de dados: noções",
    dificuldade: "media",
    enunciado:
      "Considere alunos(id, nome, turma, nota): (1, 'Ana', 'A', 8); (2, 'Bruno', 'B', 6); (3, 'Carla', 'A', 9); (4, 'Diego', 'B', 7); (5, 'Eva', 'A', 5). Qual é o resultado da consulta SELECT COUNT(*) FROM alunos WHERE nota BETWEEN 6 AND 8?",
    opcoes: [
      "2",
      "3",
      "4",
      "5",
      "1",
    ],
    correta: 1,
    explicacao:
      "O BETWEEN inclui os dois extremos, e então a condição é nota maior ou igual a 6 e menor ou igual a 8. Atendem Ana, 8, Bruno, 6, e Diego, 7. O resultado é 3. Em SQL, o BETWEEN é inclusivo nos dois extremos, e a ordem dos limites importa: BETWEEN 8 AND 6 não casa com nada.\n\n2 esqueceria um dos extremos, como se o intervalo fosse aberto. 4 incluiria Carla, que tem 9, fora do intervalo. 5 é o total de alunos, sem filtro. E 1 contaria só um deles.",
  },
  {
    materia: "informatica",
    tema: "Banco de dados: noções",
    dificuldade: "media",
    enunciado:
      "Considere alunos(id, nome, turma, nota): (1, 'Ana', 'A', 8); (2, 'Bruno', 'B', 6); (3, 'Carla', 'A', 9); (4, 'Diego', 'B', 7); (5, 'Eva', 'A', 5). Executam-se, em ordem, UPDATE alunos SET nota = nota + 1 WHERE turma = 'B' e SELECT SUM(nota) FROM alunos. Qual é o resultado da soma?",
    opcoes: [
      "35",
      "36",
      "39",
      "7",
      "37",
    ],
    correta: 4,
    explicacao:
      "Antes da alteração, a soma é 8 + 6 + 9 + 7 + 5 = 35. O UPDATE soma 1 à nota dos dois alunos da turma B, Bruno e Diego, o que acrescenta 2 ao total: 35 + 2 = 37. Sem o WHERE, o UPDATE alteraria todos os registros da tabela, e por isso ele deve ser conferido antes de ser executado.\n\n35 é a soma original, antes do UPDATE. 36 aplicaria o aumento a um só aluno. 39 aplicaria o aumento a todos os cinco, e somaria 4 a mais. E 7 é o valor de uma nota, sem relação com a soma.",
  },
  {
    materia: "informatica",
    tema: "Banco de dados: noções",
    dificuldade: "media",
    enunciado:
      "Considere alunos(id, nome, turma, nota): (1, 'Ana', 'A', 8); (2, 'Bruno', 'B', 6); (3, 'Carla', 'A', 9); (4, 'Diego', 'B', 7); (5, 'Eva', 'A', 5). Executam-se, em ordem, DELETE FROM alunos WHERE nota < 7 e SELECT COUNT(*) FROM alunos. Qual é o resultado da contagem?",
    opcoes: [
      "2",
      "3",
      "5",
      "4",
      "0",
    ],
    correta: 1,
    explicacao:
      "O DELETE apaga os registros com nota menor que 7: Bruno, com 6, e Eva, com 5. Restam Ana, Carla e Diego, e a contagem é 3. Diego, com nota 7, fica, pois 7 não é menor que 7. Antes de rodar um DELETE, convém executar o SELECT com a mesma condição, para ver quais registros serão atingidos.\n\n2 é o número de alunos apagados. 5 seria a contagem antes do DELETE. 4 apagaria só um dos dois. E 0 só ocorreria sem o WHERE, que apagaria todos os registros.",
  },
  {
    materia: "informatica",
    tema: "Banco de dados: noções",
    dificuldade: "media",
    enunciado:
      "Considere clientes(id, nome): (1, 'Ana'); (2, 'Bruno'); (3, 'Carla') e pedidos(id, cliente_id, valor): (1, 1, 100); (2, 1, 50); (3, 3, 200); (4, NULL, 80). Qual é o resultado de SELECT COUNT(*) FROM pedidos p INNER JOIN clientes c ON p.cliente_id = c.id?",
    opcoes: [
      "3",
      "4",
      "7",
      "2",
      "12",
    ],
    correta: 0,
    explicacao:
      "O INNER JOIN só mantém os pedidos cujo cliente_id corresponde a um cliente: os pedidos 1 e 2, do cliente 1, e o pedido 3, do cliente 3. O pedido 4 tem cliente_id vazio, e não encontra par. O resultado é 3.\n\n4 é o total de pedidos, sem descartar o que não tem par. 7 soma os pedidos e os clientes. 2 contaria só um dos clientes. E 12 é o produto 4 × 3, de um produto cartesiano, sem condição de ligação.",
  },
  {
    materia: "informatica",
    tema: "Banco de dados: noções",
    dificuldade: "media",
    enunciado:
      "Considere clientes(id, nome): (1, 'Ana'); (2, 'Bruno'); (3, 'Carla') e pedidos(id, cliente_id, valor): (1, 1, 100); (2, 1, 50); (3, 3, 200); (4, NULL, 80). Qual é o resultado de SELECT COUNT(*) FROM clientes c LEFT JOIN pedidos p ON p.cliente_id = c.id?",
    opcoes: [
      "3",
      "2",
      "7",
      "12",
      "4",
    ],
    correta: 4,
    explicacao:
      "O LEFT JOIN mantém todos os clientes, com ou sem pedidos. Ana, com 2 pedidos, gera 2 linhas. Bruno, sem pedidos, gera 1 linha, com campos vazios dos pedidos. Carla, com 1 pedido, gera 1 linha. O total é 2 + 1 + 1 = 4.\n\n3 é o número de clientes, e seria o resultado se cada um tivesse um só pedido. 2 contaria só os pedidos de Ana. 7 soma clientes e pedidos. E 12 é o produto cartesiano.",
  },
  {
    materia: "informatica",
    tema: "Banco de dados: noções",
    dificuldade: "media",
    enunciado:
      "Considere alunos(id, nome, turma, nota): (1, 'Ana', 'A', 8); (2, 'Bruno', 'B', 6); (3, 'Carla', 'A', 9); (4, 'Diego', 'B', 7); (5, 'Eva', 'A', NULL). Qual é o resultado da consulta SELECT COUNT(nota) FROM alunos?",
    opcoes: [
      "5",
      "0",
      "4",
      "1",
      "35",
    ],
    correta: 2,
    explicacao:
      "O COUNT(nota) conta só os valores que não são nulos na coluna indicada. Eva tem nota NULL, ou seja, vazia, e fica de fora: restam Ana, Bruno, Carla e Diego, e o resultado é 4.\n\n5 seria o resultado de COUNT(*), que conta todas as linhas, inclusive as com campos nulos. 0 e 1 não correspondem à contagem. E 35 seria um resultado de soma, com valores diferentes dos do enunciado.",
  },
  {
    materia: "informatica",
    tema: "Banco de dados: noções",
    dificuldade: "media",
    enunciado:
      "Considere alunos(id, nome, turma, nota): (1, 'Ana', 'A', 8); (2, 'Bruno', 'B', 6); (3, 'Carla', 'A', 9); (4, 'Diego', 'B', 7); (5, 'Eva', 'A', 5). Qual é a soma das duas maiores notas, obtida por SELECT SUM(nota) FROM (SELECT nota FROM alunos ORDER BY nota DESC LIMIT 2)?",
    opcoes: [
      "15",
      "16",
      "8",
      "9",
      "17",
    ],
    correta: 4,
    explicacao:
      "A consulta de dentro ordena as notas da maior para a menor e fica com as duas primeiras: 9 e 8. O SUM, de fora, soma as duas: 9 + 8 = 17. Sem o ORDER BY, o LIMIT devolveria duas linhas quaisquer, em uma ordem que o banco não garante.\n\n15 somaria 8 e 7, a segunda e a terceira. 16 somaria 9 e 7, pulando a segunda. 8 e 9 são notas isoladas, e não a soma. O LIMIT 2 é o que restringe a soma às duas maiores.",
  },
  {
    materia: "informatica",
    tema: "Banco de dados: noções",
    dificuldade: "dificil",
    enunciado:
      "Considere alunos(id, nome, turma, nota): (1, 'Ana', 'A', 8); (2, 'Bruno', 'B', 6); (3, 'Carla', 'A', 9); (4, 'Diego', 'B', 7); (5, 'Eva', 'A', 5), em que id é a chave primária. O que ocorre ao executar INSERT INTO alunos (id, nome, turma, nota) VALUES (3, 'Fábio', 'B', 8)?",
    opcoes: [
      "A inserção é recusada, pois o id 3 já existe",
      "O registro de Carla é substituído pelo de Fábio",
      "A inserção funciona, com dois alunos de id 3",
      "O banco apaga todos os registros",
      "O id passa a ser 6, de forma automática",
    ],
    correta: 0,
    explicacao:
      "A chave primária não aceita valores repetidos, e o id 3 já pertence a Carla. O SGBD recusa a inserção com um erro de violação de restrição de unicidade, e a tabela fica como estava.\n\nO registro de Carla não é substituído, o que exigiria um comando de substituição. Dois alunos com o mesmo id contrariam a chave primária. O banco não apaga registros por isso. E o id só seria gerado de forma automática se o campo fosse de autoincremento e o valor não fosse informado.",
  },
  {
    materia: "informatica",
    tema: "Banco de dados: noções",
    dificuldade: "dificil",
    enunciado:
      "Considere clientes(id, nome): (1, 'Ana'); (2, 'Bruno'); (3, 'Carla') e pedidos(id, cliente_id, valor): (1, 1, 100); (2, 1, 50); (3, 3, 200); (4, NULL, 80), em que cliente_id é chave estrangeira para clientes(id). O que ocorre ao executar INSERT INTO pedidos (id, cliente_id, valor) VALUES (5, 9, 70)?",
    opcoes: [
      "O cliente 9 é criado de forma automática",
      "O pedido é aceito, sem nenhuma verificação",
      "Todos os pedidos são apagados",
      "O valor do pedido passa a ser zero",
      "A inserção é recusada, pois não existe cliente com id 9",
    ],
    correta: 4,
    explicacao:
      "A chave estrangeira exige que cliente_id aponte para um cliente existente. Como não há cliente com id 9, o SGBD recusa a inserção, com um erro de violação de chave estrangeira. É a integridade referencial em ação.\n\nO banco não cria o cliente por conta própria, não aceita o pedido sem verificar, não apaga os outros pedidos e não zera o valor. A recusa protege os dados contra pedidos sem dono.",
  },
  {
    materia: "informatica",
    tema: "Banco de dados: noções",
    dificuldade: "dificil",
    enunciado:
      "Considere alunos(id, nome, turma, nota): (1, 'Ana', 'A', 8); (2, 'Bruno', 'B', 6); (3, 'Carla', 'A', 9); (4, 'Diego', 'B', 7); (5, 'Eva', 'A', 5). Executam-se, em ordem, BEGIN, DELETE FROM alunos, ROLLBACK e SELECT COUNT(*) FROM alunos. Qual é o resultado da contagem?",
    opcoes: [
      "5",
      "0",
      "3",
      "1",
      "A consulta dá erro",
    ],
    correta: 0,
    explicacao:
      "O BEGIN abre uma transação, e o DELETE, sem WHERE, apaga todos os registros dentro dela. O ROLLBACK desfaz tudo o que foi feito desde o BEGIN, e a tabela volta ao estado original, com os 5 alunos. A contagem é 5.\n\n0 seria o resultado se a transação fosse confirmada, com o COMMIT. 3 e 1 não correspondem a nenhuma situação. E não há erro: os comandos estão corretos, e o ROLLBACK é o comando que reverte a transação.",
  },
  {
    materia: "informatica",
    tema: "Banco de dados: noções",
    dificuldade: "dificil",
    enunciado:
      "Considere alunos(id, nome, turma, nota): (1, 'Ana', 'A', 8); (2, 'Bruno', 'B', 6); (3, 'Carla', 'A', 9); (4, 'Diego', 'B', 7); (5, 'Eva', 'A', 5). Qual é o resultado de SELECT COUNT(*) FROM alunos WHERE nota > (SELECT AVG(nota) FROM alunos)?",
    opcoes: [
      "3",
      "1",
      "5",
      "2",
      "0",
    ],
    correta: 3,
    explicacao:
      "A consulta de dentro calcula a média geral: (8 + 6 + 9 + 7 + 5) ÷ 5 = 7. A de fora conta os alunos com nota estritamente maior que 7: Ana, com 8, e Carla, com 9. O resultado é 2.\n\n3 incluiria Diego, que tem exatamente 7, e não é maior que a média. 1 contaria só um dos dois. 5 é o total de alunos. E 0 só ocorreria se ninguém estivesse acima da média.",
  },
  {
    materia: "informatica",
    tema: "Banco de dados: noções",
    dificuldade: "dificil",
    enunciado:
      "Considere alunos(id, nome, turma, nota): (1, 'Ana', 'A', 8); (2, 'Bruno', 'B', 6); (3, 'Carla', 'A', 9); (4, 'Diego', 'B', 7); (5, 'Eva', 'A', 5). Qual é o resultado de SELECT turma, SUM(nota) FROM alunos GROUP BY turma ORDER BY turma?",
    opcoes: [
      "A: 13; B: 22",
      "A: 35; B: 35",
      "A: 22; B: 13",
      "A: 8; B: 6",
      "A: 3; B: 2",
    ],
    correta: 2,
    explicacao:
      "O GROUP BY forma um grupo por turma. Na turma A, 8 + 9 + 5 = 22. Na turma B, 6 + 7 = 13. O ORDER BY coloca a turma A antes da B, e o resultado é A: 22 e B: 13.\n\nA: 13 e B: 22 troca os valores dos grupos. A: 35 e B: 35 usaria o total geral nos dois. A: 8 e B: 6 mostraria só a primeira nota de cada turma. E A: 3 e B: 2 é o número de alunos de cada turma, e não a soma das notas.",
  },
  {
    materia: "informatica",
    tema: "Banco de dados: noções",
    dificuldade: "dificil",
    enunciado:
      "Considere clientes(id, nome): (1, 'Ana'); (2, 'Bruno'); (3, 'Carla') e pedidos(id, cliente_id, valor): (1, 1, 100); (2, 1, 50); (3, 3, 200); (4, NULL, 80). Qual cliente tem o maior total de pedidos na consulta SELECT c.nome, SUM(p.valor) AS total FROM clientes c JOIN pedidos p ON p.cliente_id = c.id GROUP BY c.id ORDER BY total DESC LIMIT 1?",
    opcoes: [
      "Ana, com 150",
      "Bruno, com 0",
      "Ana, com 100",
      "Carla, com 200",
      "Carla, com 280",
    ],
    correta: 3,
    explicacao:
      "O JOIN liga cada pedido ao seu cliente, e o GROUP BY soma os valores por cliente. Ana tem os pedidos de 100 e de 50, total 150. Carla tem um pedido de 200. Bruno não tem pedidos, e não aparece no JOIN. O pedido 4, sem cliente, também fica de fora. Ordenando do maior para o menor, Carla, com 200, vem primeiro.\n\nAna, com 150, é a segunda. Bruno não entra. Ana, com 100, usaria só um dos pedidos. E Carla, com 280, somaria o pedido 4, que não pertence a ela.",
  },
  {
    materia: "informatica",
    tema: "Banco de dados: noções",
    dificuldade: "dificil",
    enunciado:
      "Uma tabela guarda, em um único campo, vários telefones de cada pessoa, separados por vírgula. Qual forma normal ela viola?",
    opcoes: [
      "A segunda forma normal (2FN)",
      "A terceira forma normal (3FN)",
      "A primeira forma normal (1FN)",
      "Nenhuma, pois é válida",
      "A forma normal de Boyce-Codd, só",
    ],
    correta: 2,
    explicacao:
      "A primeira forma normal exige que cada campo guarde um único valor, atômico, sem listas nem grupos repetidos. Vários telefones em um campo violam essa regra. A solução é uma tabela própria de telefones, ligada à pessoa por uma chave estrangeira.\n\nA 2FN trata das dependências parciais da chave, e a 3FN, das dependências transitivas, e as duas pressupõem que a 1FN já esteja cumprida. Dizer que não viola nenhuma está errado. E a forma de Boyce-Codd é mais rigorosa, e só vale depois das anteriores.",
  },
  {
    materia: "informatica",
    tema: "Banco de dados: noções",
    dificuldade: "dificil",
    enunciado:
      "Uma tabela de pedidos guarda o código do cliente, o nome do cliente e a cidade dele em cada linha, o que repete esses dados a cada pedido. Que forma normal exige eliminar essas dependências transitivas?",
    opcoes: [
      "A primeira forma normal (1FN)",
      "A terceira forma normal (3FN)",
      "Nenhuma forma normal",
      "O SQL",
      "A integridade de domínio",
    ],
    correta: 1,
    explicacao:
      "A terceira forma normal exige que os campos que não são chave dependam só da chave primária, e não de outros campos que também não são chave. Aqui, o nome e a cidade do cliente dependem do código do cliente, e não do pedido: a dependência é transitiva, e esses dados devem ir para uma tabela de clientes.\n\nA 1FN trata da atomicidade dos campos. Existe uma forma normal para isso. O SQL é uma linguagem, e não uma forma normal. E a integridade de domínio trata dos valores válidos de cada campo.",
  },
  {
    materia: "informatica",
    tema: "Banco de dados: noções",
    dificuldade: "dificil",
    enunciado:
      "Qual das propriedades ACID impede que transações simultâneas interfiram umas nas outras, de modo que cada uma pareça executar sozinha?",
    opcoes: [
      "Atomicidade",
      "Consistência",
      "Durabilidade",
      "Replicação",
      "Isolamento",
    ],
    correta: 4,
    explicacao:
      "O isolamento garante que as alterações de uma transação em andamento não sejam vistas, de forma parcial, pelas outras, e que o resultado das transações simultâneas seja equivalente ao de executá-las uma de cada vez. É o que evita, por exemplo, que duas pessoas comprem o último ingresso ao mesmo tempo.\n\nA atomicidade trata do tudo ou nada. A consistência mantém o banco em estados válidos. A durabilidade preserva o que foi confirmado. E a replicação, a cópia de dados entre servidores, não faz parte do ACID.",
  },
  {
    materia: "informatica",
    tema: "Banco de dados: noções",
    dificuldade: "dificil",
    enunciado:
      "Qual é a desvantagem de criar muitos índices em uma tabela de banco de dados?",
    opcoes: [
      "Impedem qualquer consulta",
      "Apagam os dados da tabela",
      "Duplicam as chaves primárias",
      "Tornam o banco imune a erros",
      "Ocupam espaço e atrasam as escritas",
    ],
    correta: 4,
    explicacao:
      "Cada índice é uma estrutura extra, que ocupa espaço em disco e precisa ser atualizada a cada inserção, alteração ou exclusão, o que torna essas operações mais lentas. Por isso se indexam só os campos mais usados em buscas.\n\nOs índices não impedem consultas, e as aceleram. Não apagam dados, não duplicam chaves primárias e não deixam o banco imune a erros. O que se ganha em leitura se paga, em parte, na escrita.",
  },
];
