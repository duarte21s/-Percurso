/* Rascunho — Informática básica / Computação em nuvem.

   49 questões novas (11 fáceis, 28 médias, 10 difíceis), além da que já
   existe em informatica__fundamentos.mjs. As de número são conferidas por
   conta direta, por um caminho diferente do da explicação: indisponibilidade
   a partir do percentual de disponibilidade, custo por hora e por GB-mês,
   instâncias necessárias com arredondamento para cima, simulação hora a hora
   de um sistema elástico contra um dimensionado para o pico, disponibilidade
   de componentes em série e em paralelo, ponto de equilíbrio entre comprar e
   alugar e tempo de envio. As conceituais (modelos IaaS, PaaS e SaaS,
   implantação, responsabilidade compartilhada) ficam como pendentes. */

import { lerNum } from "./_matematica-fund.mjs";

export const materia = "informatica";
export const tema = "Computação em nuvem";
export const arquivo = "informatica__computacao-em-nuvem";

/* tira "R$", "≈" e a unidade final (minutos, horas, GB, %) e lê o número em pt-BR */
const limpa = (t) => String(t).replace(/^(≈|R\$)\s*/, "").replace(/\s*[A-Za-zÀ-ÿ%]+$/, "");
const num = (t) => lerNum(limpa(t));
const acha = (valor, alt, conv = num, tol = 1e-9) => { const a = alt.map((t) => { const x = conv(t); return Number.isFinite(x) && Math.abs(x - valor) <= tol * Math.max(1e-300, Math.abs(valor)); }); return a.filter(Boolean).length === 1 ? a.indexOf(true) : -1; };
/* converte "43,2 minutos" e "8,76 horas" para minutos */
const emMinutos = (t) => { const v = lerNum(limpa(t)); return /horas?$/.test(String(t)) ? v * 60 : v; };

const instancias = (pedidos, capacidade) => Math.ceil(pedidos / capacidade);
const emSerie = (...p) => p.reduce((a, b) => a * b, 1);
const emParalelo = (...p) => 1 - p.reduce((a, b) => a * (1 - b), 1);

export const questoes = [
  /* ------------------------------------------------------------ fáceis --- */
  {
    d: "facil",
    e: "O que é a computação em nuvem, em linhas gerais?",
    o: ["Usar servidores e serviços de outra empresa pela Internet", "Guardar os dados em nuvens da atmosfera", "Instalar todos os programas no computador", "Ligar os computadores só por cabos", "Usar o computador sem energia elétrica"],
    x: "A computação em nuvem é o uso de recursos de computação, como armazenamento, servidores, bancos de dados e programas, oferecidos por uma empresa pela Internet. O usuário os acessa sob demanda, sem precisar comprar nem manter os equipamentos.\n\nO nome é uma metáfora: não há nuvens da atmosfera. Instalar tudo no próprio computador é o modelo local. Ligar só por cabos e dispensar a energia elétrica não têm relação com a nuvem, que depende de servidores ligados e de acesso à rede.",
  },
  {
    d: "facil",
    e: "Qual dos serviços abaixo é um exemplo de armazenamento de arquivos em nuvem?",
    o: ["Google Drive", "Paint", "Bloco de Notas", "Calculadora", "Windows Media Player"],
    x: "O Google Drive guarda arquivos em servidores do provedor, e o usuário os acessa de qualquer aparelho com Internet. Outros exemplos são o OneDrive, o Dropbox e o iCloud.\n\nO Paint é um programa de desenho. O Bloco de Notas é um editor de texto simples. A Calculadora faz contas. E o Windows Media Player toca músicas e vídeos. Todos funcionam no próprio computador, sem guardar arquivos em servidores do provedor.",
  },
  {
    d: "facil",
    e: "Qual é uma vantagem de guardar arquivos na nuvem em vez de apenas no computador?",
    o: ["Acessá-los de qualquer lugar com Internet", "Poder usá-los sem nenhuma conexão", "Não precisar de senha", "Ocupar menos energia no computador", "Impedir qualquer perda de dados"],
    x: "Com os arquivos na nuvem, o usuário os acessa de qualquer aparelho com Internet, como o computador, o celular e o tablet, e os mantém sincronizados entre eles.\n\nA nuvem exige conexão, em geral, para o acesso inicial, embora haja modos offline. Não dispensa senha, que protege os dados. Não tem relação com a energia do computador. E não impede qualquer perda de dados: o usuário ainda pode apagar por engano, ou perder o acesso à conta.",
  },
  {
    d: "facil",
    e: "O que é preciso, em geral, para acessar os serviços em nuvem?",
    o: ["Conexão com a Internet", "Um cabo de impressora", "Um programa de planilhas", "Um monitor de alta resolução", "Uma câmera de vídeo"],
    x: "Os serviços em nuvem rodam em servidores remotos, e o usuário os alcança pela rede. Por isso, o requisito básico é a conexão com a Internet, em geral por um navegador ou um aplicativo.\n\nO cabo de impressora, o programa de planilhas, o monitor de alta resolução e a câmera de vídeo não são necessários para usar a nuvem. Alguns recursos funcionam offline, depois de sincronizados, mas o acesso inicial depende da rede.",
  },
  {
    d: "facil",
    e: "O que significa sincronizar uma pasta com um serviço de nuvem?",
    o: ["Manter as mesmas versões dos arquivos no computador e na nuvem", "Apagar a pasta do computador", "Compactar a pasta em um arquivo", "Trocar o nome da pasta", "Proteger a pasta com uma senha de uso único"],
    x: "A sincronização mantém iguais os arquivos de uma pasta do computador e os do serviço de nuvem: o que se cria, altera ou apaga em um lado aparece no outro, em poucos instantes. É o que permite abrir o mesmo arquivo em vários aparelhos.\n\nNão apaga a pasta do computador, não a compacta, não troca o nome e não a protege com senha. Mas atenção: como apagar é também sincronizado, um arquivo excluído em um lado pode sumir do outro.",
  },
  {
    d: "facil",
    e: "Como se pode compartilhar um arquivo guardado na nuvem com outra pessoa, sem enviar o arquivo em anexo?",
    o: ["Gerando um link de acesso ao arquivo", "Gravando o arquivo em um CD", "Imprimindo o arquivo", "Desligando a Internet", "Apagando o arquivo da nuvem"],
    x: "Os serviços em nuvem permitem criar um link para o arquivo, e quem o recebe o abre sem precisar de um anexo. Em geral, o dono escolhe se o acesso é só para quem convidou, para quem tem o link, e se a pessoa pode apenas ler ou também editar.\n\nGravar em CD ou imprimir são formas de entregar uma cópia física. Desligar a Internet impede o acesso. E apagar o arquivo da nuvem o torna indisponível para todos.",
  },
  {
    d: "facil",
    e: "Qual é a finalidade do backup na nuvem, para quem usa o serviço?",
    o: ["Guardar cópias dos dados em servidores remotos", "Apagar os arquivos antigos do computador", "Aumentar a velocidade do processador", "Trocar o sistema operacional", "Impedir o acesso à Internet"],
    x: "O backup na nuvem envia cópias dos dados para servidores do provedor, em outro local, e permite recuperá-los se o computador for perdido, roubado ou danificado, ou se for atacado por um ransomware.\n\nNão serve para apagar arquivos antigos, não aumenta a velocidade do processador, não troca o sistema operacional e não bloqueia a Internet, que é necessária para enviar as cópias.",
  },
  {
    d: "facil",
    e: "Qual dos nomes abaixo corresponde a um provedor de serviços de computação em nuvem?",
    o: ["Microsoft Azure", "Windows Paint", "VLC", "WinRAR", "Notepad"],
    x: "O Microsoft Azure é um dos grandes provedores de nuvem, ao lado da Amazon Web Services, a AWS, e do Google Cloud. Eles alugam servidores, armazenamento, bancos de dados e muitos outros serviços.\n\nO Paint é um programa de desenho, o VLC é um tocador de vídeos, o WinRAR trabalha com arquivos compactados, e o Notepad é um editor de texto. Todos são programas comuns, e não provedores de infraestrutura em nuvem.",
  },
  {
    d: "facil",
    e: "O que caracteriza uma nuvem pública, em comparação com as demais?",
    o: ["Serviços oferecidos pela Internet a vários clientes", "Uma nuvem de uso exclusivo de uma só empresa", "Uma rede sem nenhuma conexão externa", "Um servidor que fica dentro de casa", "Uma nuvem que só funciona de dia"],
    x: "Na nuvem pública, um provedor oferece seus servidores e serviços a muitos clientes ao mesmo tempo, pela Internet, e cada cliente usa só a sua parte, em geral pagando pelo uso. Os recursos são compartilhados, de forma isolada.\n\nA nuvem de uso exclusivo de uma só empresa é a privada. Uma rede sem conexão externa é uma rede isolada, e não uma nuvem pública. O servidor dentro de casa é local. E o horário de uso não define o tipo de nuvem.",
  },
  {
    d: "facil",
    e: "O que significa, na computação em nuvem, pagar apenas pelo que se usa?",
    o: ["Os custos acompanham o consumo", "Pagar um valor fixo igual, mesmo sem usar", "Comprar os servidores no início", "Pagar só pela instalação do programa", "Não pagar nada, em nenhum caso"],
    x: "No modelo de pagamento pelo uso, o cliente paga pelo que consome, como horas de servidor, gigabytes guardados ou pedidos processados. Se usa pouco, paga pouco, e a conta cresce com o uso.\n\nUm valor fixo sem relação com o consumo não é esse modelo. Comprar servidores no início é o investimento da infraestrutura própria. Pagar só pela instalação e não pagar nada também não descrevem o modelo, que cobra pelo uso real.",
  },
  {
    d: "facil",
    e: "Onde ficam, fisicamente, os dados guardados em um serviço de nuvem?",
    o: ["Em servidores de data centers do provedor", "Dentro do celular do usuário", "No ar, sem local físico", "Em um cabo de rede", "Na memória da impressora"],
    x: "Os dados ficam em servidores, em data centers do provedor, instalações com muitos computadores, energia redundante, refrigeração e segurança física. O usuário não vê esses equipamentos, mas eles existem.\n\nNão ficam apenas dentro do celular do usuário, nem no ar sem local físico, o que é só uma imagem popular. Um cabo de rede apenas leva os dados de um lugar a outro. E a memória da impressora guarda só os documentos em fila de impressão.",
  },

  /* ------------------------------------------------------------ médias --- */
  {
    d: "media",
    e: "Qual é a principal característica do modelo de serviço SaaS, o software como serviço?",
    o: ["O usuário usa um programa pronto, pela Internet", "O usuário aluga servidores vazios", "O usuário recebe só um ambiente para programar", "O usuário compra o programa em disco", "O usuário monta o próprio data center"],
    x: "No SaaS, de Software as a Service, o programa já está pronto e funciona nos servidores do provedor: o usuário só o acessa, em geral por um navegador, e não cuida de servidores nem de atualizações. Exemplos são o Gmail, o Google Docs e o Microsoft 365.\n\nAlugar servidores vazios é o IaaS. Receber um ambiente para programar é o PaaS. Comprar o programa em disco é o modelo tradicional. E montar o próprio data center é o oposto da nuvem.",
  },
  {
    d: "media",
    e: "Qual é a principal característica do modelo de serviço IaaS, a infraestrutura como serviço?",
    o: ["O cliente aluga servidores, rede e armazenamento virtuais", "O cliente usa um programa de e-mail pronto", "O cliente só recebe a conta de energia", "O cliente instala um antivírus", "O cliente compra um notebook"],
    x: "No IaaS, de Infrastructure as a Service, o provedor aluga a infraestrutura básica: máquinas virtuais, rede e armazenamento. O cliente escolhe o sistema operacional e instala o que precisa, e responde por isso. Exemplos são as máquinas virtuais da AWS e do Azure.\n\nUsar um programa de e-mail pronto é o SaaS. A conta de energia, o antivírus e o notebook não definem o modelo. O IaaS dá mais controle, e também mais responsabilidade ao cliente.",
  },
  {
    d: "media",
    e: "Qual é a principal característica do modelo de serviço PaaS, a plataforma como serviço?",
    o: ["O cliente recebe um ambiente pronto para criar e rodar aplicações", "O cliente usa só um programa de planilhas", "O cliente aluga apenas cabos", "O cliente cuida de todo o hardware", "O cliente não pode instalar nada"],
    x: "No PaaS, de Platform as a Service, o provedor entrega a plataforma: sistema operacional, ambiente de execução e ferramentas já preparados. O cliente cuida só do código da aplicação e dos dados, sem gerenciar os servidores. É muito usado por quem desenvolve programas.\n\nUsar só um programa pronto é o SaaS. Alugar infraestrutura virtual é o IaaS. Cuidar de todo o hardware é a infraestrutura própria. E o PaaS permite, sim, instalar a aplicação do cliente.",
  },
  {
    d: "media",
    e: "O Gmail, usado pelo navegador sem instalar nada, é um exemplo de qual modelo de serviço em nuvem?",
    o: ["SaaS", "IaaS", "PaaS", "Data center próprio", "Rede local"],
    x: "O Gmail é um programa pronto, entregue pela Internet e mantido inteiramente pelo provedor: o usuário só o usa. Isso é o SaaS, o software como serviço.\n\nO IaaS é o aluguel de infraestrutura, e o PaaS, o de uma plataforma para desenvolver. Um data center próprio e uma rede local são estruturas da própria organização, e não modelos de serviço em nuvem.",
  },
  {
    d: "media",
    e: "O que caracteriza uma nuvem privada, em comparação com a pública?",
    o: ["Uso exclusivo de uma organização", "É aberta a qualquer pessoa", "Não usa servidores", "Só existe em celulares", "É sempre gratuita"],
    x: "A nuvem privada é dedicada a uma só organização, que pode hospedá-la em seu próprio data center ou contratá-la de um provedor. Dá mais controle sobre os dados e a segurança, mas costuma custar mais caro e exigir mais gestão.\n\nA nuvem aberta a qualquer pessoa é a pública. Toda nuvem usa servidores. Não se limita a celulares. E não é gratuita: os custos de infraestrutura existem, e alguém paga por eles.",
  },
  {
    d: "media",
    e: "O que é uma nuvem híbrida, no contexto da computação em nuvem?",
    o: ["A combinação de nuvem privada e nuvem pública", "Uma nuvem só de dados em papel", "Uma nuvem que mistura cores", "Um tipo de cabo", "Uma nuvem sem servidores"],
    x: "A nuvem híbrida combina a infraestrutura privada, própria da organização, com a nuvem pública, e permite mover cargas de trabalho entre as duas. Por exemplo, dados sigilosos ficam na privada, e os picos de demanda vão para a pública.\n\nNão é uma nuvem de dados em papel, nem de cores. Também não é um cabo, e sempre depende de servidores, ainda que remotos.",
  },
  {
    d: "media",
    e: "O que é a elasticidade, na computação em nuvem?",
    o: ["Aumentar e reduzir os recursos conforme a demanda", "O aumento do tamanho físico do data center", "A compra de equipamentos para o futuro", "O desligamento da Internet", "A velocidade de uma impressora"],
    x: "A elasticidade é a capacidade de ampliar os recursos quando a demanda sobe, e de reduzi-los quando ela cai, de modo rápido e, em geral, automático. Assim, a empresa paga só pelo que precisa em cada momento.\n\nNão é o crescimento físico do data center, nem a compra antecipada de equipamentos, que é o dimensionamento para o pico. Não tem relação com o desligamento da Internet ou com a impressora.",
  },
  {
    d: "media",
    e: "O que é a virtualização, base de grande parte da computação em nuvem?",
    o: ["Criar máquinas virtuais em um servidor", "Imprimir documentos em 3D", "Ligar um computador sem energia", "Desenhar páginas de sites", "Apagar sistemas operacionais"],
    x: "A virtualização divide um servidor físico em várias máquinas virtuais, cada uma com seu sistema operacional, isoladas entre si. Assim, o provedor usa melhor o hardware e entrega recursos sob medida a cada cliente.\n\nNão se trata de impressão 3D, nem de ligar um computador sem energia. Não é a criação de páginas de sites. E não apaga sistemas operacionais: cada máquina virtual tem o seu.",
  },
  {
    d: "media",
    e: "O que é um SLA, em um contrato de serviço em nuvem?",
    o: ["Acordo de nível de serviço garantido", "Um tipo de cabo de fibra", "Um programa de edição de imagens", "A senha do administrador", "O endereço IP do servidor"],
    x: "O SLA, de Service Level Agreement, é a parte do contrato que fixa o nível de serviço que o provedor promete, como 99,9% de disponibilidade, os prazos de atendimento e as compensações se a meta não for cumprida.\n\nNão é um cabo, um programa de edição, a senha do administrador ou o endereço de um servidor. Ler o SLA é importante, para saber o que o provedor realmente garante.",
  },
  {
    d: "media",
    e: "O que estabelece o modelo de responsabilidade compartilhada da nuvem?",
    o: ["Provedor e cliente dividem a segurança", "Só o provedor responde por tudo", "Só o cliente responde por tudo", "Ninguém responde pela segurança", "O governo cuida de todas as senhas"],
    x: "No modelo de responsabilidade compartilhada, o provedor cuida da segurança da nuvem em si, como os data centers, o hardware e a rede, e o cliente cuida da segurança do que coloca nela, como os dados, os acessos e a configuração. A divisão muda conforme o serviço: no SaaS o provedor assume mais, e no IaaS o cliente assume mais.\n\nDizer que só um dos lados responde por tudo, que ninguém responde ou que o governo cuida das senhas está errado.",
  },
  {
    d: "media",
    e: "O que é o vendor lock-in, ou dependência do fornecedor, na computação em nuvem?",
    o: ["A dificuldade de trocar de provedor sem grandes custos", "A queda de energia de um data center", "O aumento da velocidade da rede", "Um tipo de vírus de computador", "A compactação dos arquivos"],
    x: "O vendor lock-in ocorre quando a empresa fica tão ligada aos serviços e formatos de um provedor que mudar para outro se torna caro ou difícil: é preciso reescrever sistemas e migrar dados. Padrões abertos e arquiteturas portáteis reduzem esse risco.\n\nNão é a queda de energia, nem o aumento da velocidade da rede. Não é um vírus. E não tem relação com compactar arquivos.",
  },
  {
    d: "media",
    e: "O que são as regiões e as zonas de disponibilidade de um provedor de nuvem?",
    o: ["Locais com data centers do provedor", "Tipos de cabos submarinos", "Divisões de uma planilha", "Áreas de memória do celular", "Pastas de arquivos de um usuário"],
    x: "As regiões são áreas geográficas com data centers do provedor, e cada região tem zonas de disponibilidade: grupos de data centers separados, com energia e rede independentes. Distribuir a aplicação por várias zonas mantém o serviço no ar se uma delas falhar, e aproximar a região dos usuários reduz a latência.\n\nNão são cabos submarinos, divisões de planilha, áreas de memória do celular ou pastas de um usuário.",
  },
  {
    d: "media",
    e: "Para que serve uma CDN, rede de distribuição de conteúdo, usada em muitos sites?",
    o: ["Entregar o conteúdo de servidores próximos ao usuário", "Compactar vídeos no celular", "Criar senhas de acesso", "Trocar o sistema operacional", "Proteger o computador contra vírus"],
    x: "A CDN mantém cópias do conteúdo de um site, como imagens e vídeos, em servidores espalhados pelo mundo, e entrega ao usuário a cópia do servidor mais próximo. Assim, as páginas carregam mais rápido, e o servidor original recebe menos carga.\n\nNão compacta vídeos no celular, não cria senhas, não troca o sistema operacional e não protege contra vírus, embora muitas CDNs ofereçam proteção contra ataques de negação de serviço.",
  },
  {
    d: "media",
    e: "Qual é a diferença entre escalar na vertical e na horizontal?",
    o: ["Na vertical se aumenta a máquina; na horizontal se acrescentam máquinas", "Na vertical se acrescentam máquinas; na horizontal se aumenta a máquina", "São a mesma coisa", "Na vertical só se mudam as cores", "Na horizontal só se muda o idioma"],
    x: "A escala vertical dá mais recursos a uma mesma máquina, como mais memória e mais processadores. A escala horizontal acrescenta mais máquinas, que dividem o trabalho. Na nuvem, a horizontal é a mais usada, porque não tem o limite do tamanho de uma só máquina.\n\nInverter as definições está errado, e as duas não são a mesma coisa. Nem a cor nem o idioma têm relação com a capacidade de um sistema.",
  },
  {
    d: "media",
    e: "Como a nuvem costuma mudar a forma de pagar pela infraestrutura de uma empresa, em comparação com o servidor próprio?",
    o: ["Troca o grande investimento inicial por despesas mensais", "Aumenta o investimento inicial", "Elimina qualquer custo", "Torna o custo sempre fixo", "Obriga a comprar todos os equipamentos"],
    x: "Com o servidor próprio, a empresa faz um grande investimento inicial, o CAPEX, para comprar os equipamentos. Com a nuvem, ela paga mensalmente pelo uso, a despesa operacional, o OPEX, o que reduz o desembolso inicial e acompanha o consumo.\n\nA nuvem não aumenta o investimento inicial, não elimina os custos e não os deixa sempre fixos, pois variam com o uso. E não obriga a comprar equipamentos: eles pertencem ao provedor.",
  },
  {
    d: "media",
    e: "Por que as exigências de proteção de dados pessoais, como as da LGPD, importam ao escolher onde os dados ficam na nuvem?",
    o: ["Porque o local dos dados pode ter regras legais", "Porque a LGPD proíbe qualquer uso de nuvem", "Porque a LGPD só vale para papel", "Porque a nuvem apaga os dados sozinha", "Porque a LGPD não tem relação com dados"],
    x: "A guarda de dados pessoais na nuvem deve respeitar a lei: o contrato com o provedor, o local em que os dados ficam e as medidas de segurança precisam estar de acordo com regras como as da LGPD, que também trata das transferências para fora do país.\n\nA LGPD não proíbe a nuvem, não vale só para papel e trata, sim, de dados. E a nuvem não apaga dados sozinha: o que se guarda continua lá até que o controlador o remova.",
  },
  {
    d: "media",
    e: "O que significa serverless, ou computação sem servidor, na nuvem?",
    o: ["O provedor executa o código sob demanda", "Não existem servidores em nenhum lugar", "O programa roda sem código", "O computador não precisa de energia", "A aplicação nunca é executada"],
    x: "No serverless, o desenvolvedor envia o código, em geral funções, e o provedor cuida de executá-lo quando há um pedido, e de dimensionar os recursos, cobrando só pelo tempo de execução. Os servidores continuam existindo, mas o cliente não os administra.\n\nPor isso a expressão não significa que não existem servidores. Também não quer dizer que o programa rode sem código, que o computador dispense energia ou que a aplicação nunca seja executada.",
  },
  {
    d: "media",
    e: "Um serviço em nuvem garante 99,9% de disponibilidade em um mês de 30 dias. Qual é o tempo máximo de indisponibilidade previsto nesse mês?",
    o: ["43,2 minutos", "4,32 minutos", "432 minutos", "8,76 horas", "72 minutos"],
    x: "A indisponibilidade prevista é de 100% − 99,9% = 0,1% do mês. O mês tem 30 × 24 × 60 = 43.200 minutos, e 0,001 × 43.200 = 43,2 minutos. Conferindo, 99,9% de 43.200 são 43.156,8 minutos disponíveis.\n\n4,32 minutos corresponderia a 99,99%. 432 minutos corresponderia a 99%. 8,76 horas é a indisponibilidade de um ano inteiro com 99,9%, e não a de um mês. E 72 minutos não corresponde a um percentual usual de disponibilidade.",
    v: { i: () => acha(30 * 24 * 60 * 0.001, ["43,2 minutos", "4,32 minutos", "432 minutos", "8,76 horas", "72 minutos"], emMinutos, 1e-6) },
  },
  {
    d: "media",
    e: "Uma empresa usa 3 máquinas virtuais, a R$ 0,40 por hora cada uma, durante 200 horas em um mês. Qual é o custo desse mês?",
    o: ["R$ 240", "R$ 80", "R$ 120", "R$ 600", "R$ 24"],
    x: "O custo é o preço por hora, vezes o número de máquinas, vezes as horas: 0,40 × 3 × 200 = R$ 240. Conferindo, cada máquina custa 0,40 × 200 = R$ 80, e 3 × 80 = R$ 240.\n\nR$ 80 é o custo de uma só máquina. R$ 120 considera apenas 100 horas. R$ 600 seria o custo com 5 máquinas, ou com um preço de R$ 1,00 por hora. E R$ 24 erra uma casa decimal.",
    v: { i: () => acha(0.4 * 3 * 200, ["R$ 240", "R$ 80", "R$ 120", "R$ 600", "R$ 24"]) },
  },
  {
    d: "media",
    e: "Um armazenamento em nuvem cobra R$ 0,10 por GB ao mês. Considerando 1 TB igual a 1.000 GB, quanto custa guardar 2 TB por um mês?",
    o: ["R$ 200", "R$ 20", "R$ 2.000", "R$ 0,20", "R$ 100"],
    x: "Os 2 TB equivalem a 2 × 1.000 = 2.000 GB. A R$ 0,10 por GB, o custo é 2.000 × 0,10 = R$ 200 por mês. Em contratos reais, o preço por GB costuma cair em faixas, conforme o volume, e varia com a classe de armazenamento escolhida.\n\nR$ 20 corresponde a 200 GB. R$ 2.000 corresponde a 20.000 GB, ou a um preço de R$ 1,00 por GB. R$ 0,20 é o preço de 2 GB. E R$ 100 corresponde a 1 TB, a metade do volume.",
    v: { i: () => acha(2 * 1000 * 0.1, ["R$ 200", "R$ 20", "R$ 2.000", "R$ 0,20", "R$ 100"]) },
  },
  {
    d: "media",
    e: "Um provedor cobra R$ 0,50 por GB pela transferência de dados que saem da nuvem. Quanto custa a saída de 500 GB?",
    o: ["R$ 250", "R$ 500", "R$ 1.000", "R$ 25", "R$ 0,50"],
    x: "O custo da saída de dados, o egress, é o volume multiplicado pelo preço por GB: 500 × 0,50 = R$ 250. Em muitos provedores, a entrada de dados é gratuita, e a saída é cobrada, o que pesa ao migrar para outro provedor.\n\nR$ 500 seria o custo de 1.000 GB, ou o de um preço de R$ 1,00 por GB. R$ 1.000 corresponde ao dobro. R$ 25 erra a ordem de grandeza. E R$ 0,50 é o preço de um só GB.",
    v: { i: () => acha(500 * 0.5, ["R$ 250", "R$ 500", "R$ 1.000", "R$ 25", "R$ 0,50"]) },
  },
  {
    d: "media",
    e: "Cada instância de um serviço atende 500 pedidos por segundo. No pico, chegam 2.300 pedidos por segundo. Quantas instâncias são necessárias, no mínimo?",
    o: ["5", "4", "6", "3", "46"],
    x: "Dividindo, 2.300 ÷ 500 = 4,6. Como não existe parte de uma instância, arredonda-se para cima: são necessárias 5 instâncias, que atendem 2.500 pedidos por segundo.\n\n4 instâncias atenderiam só 2.000 pedidos por segundo, e deixariam 300 sem atendimento. 6 seria mais do que o necessário. 3 é ainda menos. E 46 é o resultado de 2.300 ÷ 50, que erra a capacidade de cada instância.",
    v: { i: () => acha(instancias(2300, 500), ["5", "4", "6", "3", "46"]) },
  },
  {
    d: "media",
    e: "Um provedor replica 300 GB de dados em 3 zonas de disponibilidade, guardando uma cópia completa em cada uma. Quantos GB ficam armazenados no total?",
    o: ["900 GB", "300 GB", "100 GB", "600 GB", "1.200 GB"],
    x: "Cada zona guarda uma cópia completa, e o total é 3 × 300 = 900 GB. A replicação gasta mais espaço, e em troca protege contra a falha de uma zona inteira.\n\n300 GB é o tamanho dos dados, sem contar as cópias. 100 GB divide o volume pelo número de zonas, o que seria uma divisão dos dados, e não uma replicação. 600 GB corresponde a 2 cópias. E 1.200 GB corresponde a 4 cópias.",
    v: { i: () => acha(3 * 300, ["900 GB", "300 GB", "100 GB", "600 GB", "1.200 GB"]) },
  },
  {
    d: "media",
    e: "Uma instância custa R$ 1,00 por hora sob demanda. Reservada por um ano, ela tem 40% de desconto. Quanto custa usar a instância reservada por 100 horas?",
    o: ["R$ 60", "R$ 40", "R$ 100", "R$ 140", "R$ 600"],
    x: "Com 40% de desconto, a hora custa 1,00 × (1 − 0,40) = R$ 0,60. Em 100 horas, o custo é 0,60 × 100 = R$ 60. A reserva compensa quando a máquina fica ligada por muito tempo, e menos quando o uso é ocasional, pois o compromisso é de um ano.\n\nR$ 40 é o valor do desconto, e não do custo. R$ 100 é o custo sem desconto. R$ 140 soma o desconto, em vez de subtrair. E R$ 600 erra a ordem de grandeza.",
    v: { i: () => acha(1 * (1 - 0.4) * 100, ["R$ 60", "R$ 40", "R$ 100", "R$ 140", "R$ 600"]) },
  },
  {
    d: "media",
    e: "Um plano de nuvem oferece 15 GB. Considerando 1 GB igual a 1.000 MB, quantas fotos de 3 MB cada cabem no plano?",
    o: ["5.000", "50.000", "500", "45", "15.000"],
    x: "O plano tem 15 × 1.000 = 15.000 MB. Dividindo pelo tamanho de cada foto, 15.000 ÷ 3 = 5.000 fotos. Conferindo, 5.000 × 3 = 15.000 MB. Na prática, o espaço da conta é dividido com e-mails e documentos, e não só com fotos.\n\n50.000 erra por um fator de 10. 500 erra por um fator de 10, no outro sentido. 45 multiplica 15 por 3, sem converter as unidades. E 15.000 é o tamanho do plano em MB, sem dividir pelo tamanho das fotos.",
    v: { i: () => acha((15 * 1000) / 3, ["5.000", "50.000", "500", "45", "15.000"]) },
  },

  {
    d: "media",
    e: "O que é uma estratégia multicloud, adotada por algumas empresas?",
    o: ["Usar serviços de mais de um provedor de nuvem", "Usar uma nuvem só de uma empresa", "Usar uma nuvem sem Internet", "Usar nuvens de papel", "Usar só servidores próprios"],
    x: "Na estratégia multicloud, a empresa usa serviços de dois ou mais provedores de nuvem ao mesmo tempo, por exemplo, para escolher o melhor preço de cada serviço, reduzir a dependência de um fornecedor e aumentar a resiliência se um deles falhar.\n\nUsar a nuvem de uma só empresa é o contrário. Uma nuvem sem Internet não é acessível. Não existem nuvens de papel. E usar só servidores próprios é o modelo local, e não a nuvem. O custo da multicloud é a maior complexidade de gestão.",
  },
  {
    d: "media",
    e: "O que significa a característica de autosserviço sob demanda, da computação em nuvem?",
    o: ["Contratar recursos sozinho, na hora", "Esperar semanas pela instalação", "Depender de uma visita técnica", "Pagar só depois de um ano", "Comprar os servidores antes"],
    x: "No autosserviço sob demanda, o cliente contrata, amplia e cancela os recursos por conta própria, em um portal ou por programa, sem precisar de contato humano com o provedor e em poucos minutos. É uma das cinco características essenciais da nuvem, ao lado do amplo acesso pela rede, do agrupamento de recursos, da elasticidade e do serviço medido.\n\nEsperar semanas, depender de visita técnica, pagar só depois de um ano e comprar os servidores antes são traços da infraestrutura tradicional.",
  },
  {
    d: "media",
    e: "Qual é uma diferença entre contêineres e máquinas virtuais?",
    o: ["Contêineres compartilham o sistema do hospedeiro", "Contêineres são sempre maiores que as máquinas virtuais", "Máquinas virtuais não usam sistema operacional", "Contêineres só funcionam sem Internet", "Não existe nenhuma diferença entre eles"],
    x: "Cada máquina virtual traz um sistema operacional completo, e isso a torna mais pesada. Já os contêineres, como os do Docker, compartilham o núcleo do sistema operacional do hospedeiro e isolam só a aplicação e suas dependências, o que os torna mais leves e mais rápidos de iniciar.\n\nPor isso não são sempre maiores que as máquinas virtuais, e as máquinas virtuais usam, sim, sistema operacional. Os contêineres funcionam com ou sem Internet. E existe diferença clara entre os dois modelos.",
  },

  /* ---------------------------------------------------------- difíceis --- */
  {
    d: "dificil",
    e: "Um sistema depende de dois serviços em série, e cada um tem 99,9% de disponibilidade. Qual é, aproximadamente, a disponibilidade do sistema como um todo?",
    o: ["≈ 99,8%", "99,9%", "99,99%", "≈ 99,95%", "100%"],
    x: "Em série, o sistema só funciona se os dois serviços estiverem no ar, e as disponibilidades se multiplicam: 0,999 × 0,999 = 0,998001, ou cerca de 99,8%. A disponibilidade do conjunto é sempre menor que a de cada parte.\n\n99,9% seria a de um só serviço. 99,99% e 99,95% seriam resultados maiores, que só ocorreriam com redundância. E 100% não existe: nenhum serviço é perfeito. Cada componente em série a mais reduz a disponibilidade total.",
    v: { i: () => acha(emSerie(0.999, 0.999) * 100, ["≈ 99,8%", "99,9%", "99,99%", "≈ 99,95%", "100%"], num, 1e-4) },
  },
  {
    d: "dificil",
    e: "Dois servidores idênticos, cada um com 99% de disponibilidade, trabalham de forma redundante: basta um deles funcionar para o serviço ficar no ar. Qual é a disponibilidade do serviço?",
    o: ["99,99%", "99%", "99,9%", "98%", "100%"],
    x: "O serviço só cai se os dois servidores falharem ao mesmo tempo. A chance de um falhar é 1% e, sendo independentes, a de os dois falharem é 0,01 × 0,01 = 0,0001, ou 0,01%. A disponibilidade é 100% − 0,01% = 99,99%.\n\n99% é a de um só servidor. 99,9% subestimaria o ganho da redundância. 98% é menor que a de um servidor, o que é o contrário do efeito do paralelo. E 100% ignora a chance, pequena, de falha dos dois.",
    v: { i: () => acha(emParalelo(0.99, 0.99) * 100, ["99,99%", "99%", "99,9%", "98%", "100%"], num, 1e-9) },
  },
  {
    d: "dificil",
    e: "Um servidor próprio custa R$ 12.000, e o mesmo serviço na nuvem custa R$ 400 por mês. Ignorando outros custos, em quantos meses o gasto na nuvem se iguala ao do servidor?",
    o: ["30", "12", "40", "48", "3"],
    x: "O gasto na nuvem iguala o do servidor quando 400 × meses = 12.000, isto é, em 12.000 ÷ 400 = 30 meses. Depois disso, o servidor próprio sai mais barato, desconsiderando energia, manutenção e pessoal.\n\n12 é o preço do servidor dividido por 1.000, sem usar o custo mensal. 40 e 48 erram a divisão. E 3 erra por um fator de 10. Na prática, os custos de operar o servidor próprio mudam esse ponto de equilíbrio.",
    v: { i: () => acha(12000 / 400, ["30", "12", "40", "48", "3"]) },
  },
  {
    d: "dificil",
    e: "A demanda de um serviço, em pedidos por segundo, ao longo de 6 horas seguidas é: 300, 800, 1.700, 2.400, 900 e 200. Cada instância atende 500 pedidos por segundo e custa R$ 2 por hora. Em um sistema elástico, que ajusta o número de instâncias a cada hora, qual é o custo total das 6 horas?",
    o: ["R$ 30", "R$ 60", "R$ 20", "R$ 15", "R$ 36"],
    x: "A cada hora, o número de instâncias é a demanda dividida por 500, arredondada para cima: 1, 2, 4, 5, 2 e 1. A soma é 15 instâncias-hora, e 15 × R$ 2 = R$ 30. Um sistema fixo, dimensionado para o pico de 5 instâncias, custaria 5 × 6 × 2 = R$ 60, o dobro.\n\nR$ 60 é, portanto, o custo sem elasticidade. R$ 20 e R$ 15 erram a soma das instâncias. E R$ 36 corresponderia a 18 instâncias-hora.",
    v: { i: () => acha([300, 800, 1700, 2400, 900, 200].reduce((s, d) => s + instancias(d, 500), 0) * 2, ["R$ 30", "R$ 60", "R$ 20", "R$ 15", "R$ 36"]) },
  },
  {
    d: "dificil",
    e: "Uma empresa envia 50 GB de dados à nuvem por uma conexão de 100 Mbps. Considerando 1 GB igual a 1.000 MB, quanto tempo leva o envio, desconsiderando atrasos?",
    o: ["≈ 67 minutos", "≈ 6,7 minutos", "≈ 667 minutos", "≈ 33 minutos", "≈ 40 minutos"],
    x: "Os 50 GB equivalem a 50 × 1.000 × 8 = 400.000 megabits. Dividindo pela velocidade, 400.000 ÷ 100 = 4.000 segundos, isto é, 4.000 ÷ 60 ≈ 66,7 minutos. Conferindo, 100 Mbps são 12,5 MB/s, e 50.000 ÷ 12,5 = 4.000 s.\n\n6,7 minutos erra por um fator de 10. 667 minutos erra por um fator de 10, no outro sentido. 33 minutos corresponderia a uma velocidade de 200 Mbps. E 40 minutos corresponderia a 2.400 segundos, o que não resulta de nenhuma conta com esses dados.",
    v: { i: () => acha((50 * 1000 * 8) / 100 / 60, ["≈ 67 minutos", "≈ 6,7 minutos", "≈ 667 minutos", "≈ 33 minutos", "≈ 40 minutos"], emMinutos, 0.01) },
  },
  {
    d: "dificil",
    e: "Em qual modelo de serviço o cliente é responsável por aplicar as atualizações de segurança do sistema operacional das máquinas virtuais?",
    o: ["IaaS", "SaaS", "PaaS", "Nenhum, pois o provedor cuida de tudo", "Só no data center do provedor"],
    x: "No IaaS, o provedor entrega a máquina virtual, e o cliente cuida do que roda nela: o sistema operacional, as atualizações, os programas e os dados. É o modelo em que o cliente tem mais controle, e mais responsabilidade.\n\nNo SaaS, o provedor cuida de tudo, exceto dos dados e dos acessos do cliente. No PaaS, ele também administra o sistema operacional. Por isso não é verdade que o provedor cuide de tudo em qualquer modelo, e a tarefa não é só do data center.",
  },
  {
    d: "dificil",
    e: "Qual é a diferença entre escalabilidade e elasticidade, na computação em nuvem?",
    o: ["Escalar é crescer; elasticidade também reduz", "Escalabilidade é reduzir; elasticidade é só crescer", "As duas só significam comprar mais hardware", "Escalabilidade é nome de um provedor", "Elasticidade é um tipo de cabo"],
    x: "A escalabilidade é a capacidade de um sistema aumentar sua capacidade para atender mais carga. A elasticidade vai além: ajusta os recursos para mais e para menos, de modo rápido e automático, conforme a demanda varia. Por isso um sistema elástico é, necessariamente, escalável, mas o contrário não vale.\n\nAs outras definições trocam os sentidos, reduzem os conceitos a comprar hardware, ou os confundem com o nome de um provedor e um tipo de cabo.",
  },
  {
    d: "dificil",
    e: "Por que distribuir uma aplicação por mais de uma zona de disponibilidade aumenta a disponibilidade dela?",
    o: ["Porque a falha de uma zona não derruba as outras", "Porque a aplicação passa a ser gratuita", "Porque o código se corrige sozinho", "Porque a Internet fica mais rápida", "Porque o provedor deixa de existir"],
    x: "As zonas de disponibilidade são independentes entre si, com energia, refrigeração e rede próprias. Se a aplicação roda em mais de uma, a falha de uma delas, por um incêndio, uma queda de energia ou um defeito, deixa as outras no ar, e o serviço continua. É o princípio da redundância.\n\nA distribuição não torna a aplicação gratuita, não corrige o código sozinha, não deixa a Internet mais rápida e não faz o provedor deixar de existir.",
  },
  {
    d: "dificil",
    e: "Por que a cobrança pela saída de dados, o egress, pode pesar na hora de trocar de provedor de nuvem?",
    o: ["Porque mover grandes volumes para fora gera custo e reforça a dependência", "Porque a entrada de dados é sempre mais cara", "Porque os dados desaparecem ao sair", "Porque a cobrança só existe para arquivos de texto", "Porque ninguém paga pela transferência"],
    x: "Muitos provedores cobram pelo volume de dados que sai da nuvem, e é comum que a entrada seja gratuita. Para migrar grandes quantidades de dados a outro provedor, o custo da saída pode ser alto, o que aumenta a dependência do fornecedor, o lock-in.\n\nNão é a entrada que costuma ser mais cara. Os dados não desaparecem ao sair. A cobrança vale para qualquer tipo de arquivo. E existe, sim, quem pague pela transferência: o cliente.",
  },
  {
    d: "dificil",
    e: "Um provedor guarda 2 TB de dados, com uma cópia completa em cada uma de 3 zonas, e cobra R$ 0,10 por GB ao mês. Considerando 1 TB igual a 1.000 GB, qual é o custo mensal?",
    o: ["R$ 600", "R$ 200", "R$ 300", "R$ 1.800", "R$ 6.000"],
    x: "Com 3 cópias completas de 2 TB, são 3 × 2.000 = 6.000 GB armazenados. A R$ 0,10 por GB, o custo mensal é 6.000 × 0,10 = R$ 600. A redundância triplica o custo do armazenamento, em troca da proteção contra a falha de uma zona.\n\nR$ 200 é o custo de uma só cópia. R$ 300 corresponde a 1,5 cópia. R$ 1.800 multiplica por 3 duas vezes. E R$ 6.000 é o número de GB, sem aplicar o preço.",
    v: { i: () => acha(2 * 1000 * 3 * 0.1, ["R$ 600", "R$ 200", "R$ 300", "R$ 1.800", "R$ 6.000"]) },
  },
];
