/* Segurança da informação (49 questões) — informatica.

   Autorais, escritas por Claude (Anthropic) em 2026-10-09 seguindo as cinco
   regras de CONTINUAR-MATERIAS-POR-OBJETIVO.md. Nenhuma é atribuída a banca
   ou a prova real.

   Conferência do gabarito: 15 de 49 recalculadas por código que chega à
   resposta por outro caminho (ver .rascunho/questoes-objetivo/informatica__seguranca-da-informacao.mjs);
   34 conceituais aguardam a revisão independente listada no relatório.

   Montado por scripts/montar-questoes-objetivo.mjs; gabarito redistribuído
   por scripts/rebalancear-gabarito.mjs. Relatório em
   _relatorios/informatica__seguranca-da-informacao.json. */

export const questoes = [
  {
    materia: "informatica",
    tema: "Segurança da informação",
    dificuldade: "facil",
    enunciado:
      "Qual é o principal objetivo da segurança da informação?",
    opcoes: [
      "Proteger a informação contra uso indevido",
      "Aumentar a velocidade da Internet",
      "Reduzir o tamanho dos arquivos",
      "Aumentar o número de programas instalados",
      "Substituir os computadores antigos",
    ],
    correta: 0,
    explicacao:
      "A segurança da informação reúne práticas e tecnologias que protegem a informação, seja ela digital ou em papel, contra acessos indevidos, alterações não autorizadas, destruição e indisponibilidade. Seus pilares clássicos são a confidencialidade, a integridade e a disponibilidade.\n\nAumentar a velocidade da Internet, reduzir o tamanho dos arquivos, instalar mais programas e trocar computadores antigos podem ser objetivos de outras áreas da informática, mas não definem a segurança da informação.",
  },
  {
    materia: "informatica",
    tema: "Segurança da informação",
    dificuldade: "facil",
    enunciado:
      "Na tríade da segurança da informação, qual princípio garante que só pessoas autorizadas tenham acesso à informação?",
    opcoes: [
      "Confidencialidade",
      "Integridade",
      "Disponibilidade",
      "Velocidade",
      "Usabilidade",
    ],
    correta: 0,
    explicacao:
      "A confidencialidade garante que a informação seja acessada apenas por quem tem autorização, o que se obtém com senhas, controle de acesso e criptografia. É o que impede que um dado sigiloso seja visto por quem não deveria.\n\nA integridade garante que a informação não seja alterada de forma indevida. A disponibilidade garante que ela esteja acessível quando necessário. Velocidade e usabilidade são qualidades desejáveis de um sistema, mas não fazem parte da tríade.",
  },
  {
    materia: "informatica",
    tema: "Segurança da informação",
    dificuldade: "facil",
    enunciado:
      "Na tríade da segurança da informação, qual princípio garante que a informação não seja alterada indevidamente?",
    opcoes: [
      "Integridade",
      "Confidencialidade",
      "Disponibilidade",
      "Portabilidade",
      "Mobilidade",
    ],
    correta: 0,
    explicacao:
      "A integridade assegura que a informação permaneça completa e correta, sem alterações não autorizadas, acidentais ou intencionais. Recursos como o hash e a assinatura digital ajudam a detectar mudanças.\n\nA confidencialidade restringe quem pode ver a informação. A disponibilidade garante o acesso quando necessário. A portabilidade e a mobilidade, relacionadas à facilidade de levar e de usar a informação em vários lugares, não fazem parte dos três princípios básicos.",
  },
  {
    materia: "informatica",
    tema: "Segurança da informação",
    dificuldade: "facil",
    enunciado:
      "Na tríade da segurança da informação, qual princípio garante que a informação esteja acessível sempre que um usuário autorizado precisar?",
    opcoes: [
      "Disponibilidade",
      "Confidencialidade",
      "Integridade",
      "Autenticidade",
      "Privacidade",
    ],
    correta: 0,
    explicacao:
      "A disponibilidade garante que sistemas e dados estejam acessíveis a quem tem direito, na hora em que são necessários. Backups, redundância e proteção contra ataques de negação de serviço servem a esse princípio.\n\nA confidencialidade limita quem pode ver a informação. A integridade protege contra alterações indevidas. A autenticidade confirma a origem da informação. E a privacidade trata do controle do indivíduo sobre seus dados pessoais.",
  },
  {
    materia: "informatica",
    tema: "Segurança da informação",
    dificuldade: "facil",
    enunciado:
      "Qual das senhas abaixo é a mais forte, isto é, a mais difícil de descobrir?",
    opcoes: [
      "T7#kpQ2!vN9x",
      "12345678",
      "senha123",
      "maria2000",
      "qwerty",
    ],
    correta: 0,
    explicacao:
      "Uma senha forte é longa, mistura letras maiúsculas e minúsculas, números e símbolos e não depende de palavras ou de sequências previsíveis. T7#kpQ2!vN9x tem 12 caracteres, de vários tipos, sem sentido que se possa adivinhar.\n\n12345678 e qwerty são sequências comuns, que estão em todas as listas de senhas mais usadas. senha123 é previsível. E maria2000 usa um nome e uma data, fáceis de descobrir por quem conhece a pessoa.",
  },
  {
    materia: "informatica",
    tema: "Segurança da informação",
    dificuldade: "facil",
    enunciado:
      "Qual é a principal função de um antivírus?",
    opcoes: [
      "Detectar e remover programas maliciosos",
      "Aumentar a memória do computador",
      "Navegar em páginas da web",
      "Editar textos e planilhas",
      "Distribuir endereços IP",
    ],
    correta: 0,
    explicacao:
      "O antivírus analisa arquivos e programas em busca de códigos maliciosos, como vírus, trojans e ransomware, e os bloqueia ou remove. Precisa ser mantido atualizado, para reconhecer ameaças novas.\n\nAumentar a memória é tarefa de hardware. Navegar na web é papel do navegador. Editar textos e planilhas é papel dos aplicativos de escritório. E distribuir endereços IP é função do DHCP.",
  },
  {
    materia: "informatica",
    tema: "Segurança da informação",
    dificuldade: "facil",
    enunciado:
      "Por que é importante manter o sistema operacional e os programas sempre atualizados?",
    opcoes: [
      "As atualizações corrigem falhas de segurança conhecidas",
      "As atualizações apagam os arquivos antigos",
      "As atualizações deixam o computador mais lento de propósito",
      "As atualizações impedem o uso da Internet",
      "As atualizações trocam a senha do usuário",
    ],
    correta: 0,
    explicacao:
      "Muitas atualizações corrigem vulnerabilidades já descobertas, que criminosos exploram para invadir computadores e instalar programas maliciosos. Manter tudo em dia fecha essas portas.\n\nAs atualizações não apagam arquivos do usuário, não pretendem deixar o computador lento, não impedem o uso da Internet e não trocam senhas. O risco maior está em adiar as atualizações, e não em instalá-las.",
  },
  {
    materia: "informatica",
    tema: "Segurança da informação",
    dificuldade: "facil",
    enunciado:
      "O que é engenharia social, em segurança da informação?",
    opcoes: [
      "Enganar pessoas para obter dados ou acessos",
      "Projetar prédios para centros de dados",
      "Criar programas de computador",
      "Instalar redes de cabos",
      "Organizar equipes de trabalho",
    ],
    correta: 0,
    explicacao:
      "A engenharia social explora a confiança e a distração das pessoas, e não falhas de programas: o golpista se passa por alguém de confiança, como um técnico de suporte, para conseguir senhas, dados ou acesso. Mensagens falsas e ligações são os meios mais comuns.\n\nNão se trata de projetar prédios, de programar, de instalar cabos nem de organizar equipes. O elo atacado é o ser humano, por isso o treinamento é uma defesa importante.",
  },
  {
    materia: "informatica",
    tema: "Segurança da informação",
    dificuldade: "facil",
    enunciado:
      "O que significa autenticar um usuário em um sistema?",
    opcoes: [
      "Comprovar que ele é quem diz ser",
      "Apagar a conta do usuário",
      "Liberar todos os recursos do sistema",
      "Copiar os dados do usuário",
      "Trocar o nome do usuário",
    ],
    correta: 0,
    explicacao:
      "A autenticação é o processo de confirmar a identidade do usuário, em geral com uma senha, um código ou a biometria. É o passo que vem antes de qualquer liberação de acesso.\n\nApagar contas é uma operação administrativa. Liberar todos os recursos contraria o controle de acesso. Copiar dados do usuário e trocar o nome dele não confirmam a identidade, e não têm relação com a autenticação.",
  },
  {
    materia: "informatica",
    tema: "Segurança da informação",
    dificuldade: "facil",
    enunciado:
      "Qual das atitudes abaixo é uma boa prática de segurança no uso do computador?",
    opcoes: [
      "Não compartilhar a senha com ninguém",
      "Usar a mesma senha em todos os sites",
      "Clicar em links de mensagens desconhecidas",
      "Anotar a senha em um papel colado no monitor",
      "Desativar o antivírus para o computador ficar mais rápido",
    ],
    correta: 0,
    explicacao:
      "A senha é pessoal e não deve ser compartilhada: quem a conhece passa a agir em nome do usuário. É um dos hábitos mais básicos de segurança.\n\nUsar a mesma senha em todos os sites faz com que o vazamento de um deles comprometa os demais. Clicar em links de mensagens desconhecidas é o caminho do phishing. Deixar a senha anotada à vista expõe o acesso. E desativar o antivírus tira a proteção contra programas maliciosos.",
  },
  {
    materia: "informatica",
    tema: "Segurança da informação",
    dificuldade: "facil",
    enunciado:
      "Qual é a vantagem de usar um gerenciador de senhas?",
    opcoes: [
      "Tornar o computador mais rápido",
      "Guardar senhas fortes e diferentes, sem precisar decorá-las",
      "Impedir que o usuário acesse os sites",
      "Transformar senhas fracas em fortes sem alterá-las",
      "Dispensar o uso de antivírus",
    ],
    correta: 1,
    explicacao:
      "O gerenciador de senhas guarda, de forma criptografada, uma senha forte e exclusiva para cada site, e preenche tudo quando o usuário precisa. O usuário só precisa lembrar de uma senha, a do próprio gerenciador.\n\nO gerenciador não acelera o computador, nem impede acessos. Não torna forte uma senha fraca, pois só guarda o que lhe é dado. E não substitui o antivírus: são proteções diferentes, que se complementam.",
  },
  {
    materia: "informatica",
    tema: "Segurança da informação",
    dificuldade: "media",
    enunciado:
      "Em segurança da informação, o que garante a autenticidade de uma informação?",
    opcoes: [
      "A garantia de que ela nunca será apagada",
      "A confirmação de que ela veio de quem diz tê-la produzido",
      "A restrição do acesso a poucos usuários",
      "A capacidade de acessá-la a qualquer hora",
      "A compactação do arquivo em que está",
    ],
    correta: 1,
    explicacao:
      "A autenticidade assegura a origem da informação: que o autor ou o remetente é de fato quem se diz ser. Assinaturas digitais e certificados são recursos usados para isso.\n\nA garantia de que a informação não seja apagada tem relação com o backup e com a disponibilidade. A restrição de acesso é a confidencialidade. O acesso a qualquer hora é a disponibilidade. E compactar o arquivo é uma operação de armazenamento, sem relação com a origem.",
  },
  {
    materia: "informatica",
    tema: "Segurança da informação",
    dificuldade: "media",
    enunciado:
      "O que significa o não repúdio, em segurança da informação?",
    opcoes: [
      "A informação não pode ser copiada",
      "O autor não pode negar a autoria depois",
      "O sistema não pode ser desligado",
      "A senha não pode ser trocada",
      "O arquivo não pode ser aberto",
    ],
    correta: 1,
    explicacao:
      "O não repúdio, ou irretratabilidade, impede que quem praticou uma ação, como assinar um documento ou enviar uma mensagem, negue a autoria depois. É obtido, em geral, com a assinatura digital e com registros confiáveis.\n\nNão significa que a informação não possa ser copiada, que o sistema não possa ser desligado, que a senha não possa ser trocada ou que o arquivo não possa ser aberto. Trata da responsabilização por atos já realizados.",
  },
  {
    materia: "informatica",
    tema: "Segurança da informação",
    dificuldade: "media",
    enunciado:
      "Em segurança da informação, como se chama uma fraqueza de um sistema que pode ser explorada por uma ameaça?",
    opcoes: [
      "Ameaça",
      "Vulnerabilidade",
      "Risco",
      "Contramedida",
      "Backup",
    ],
    correta: 1,
    explicacao:
      "A vulnerabilidade é uma falha ou fraqueza, como um programa desatualizado ou uma senha fraca, que pode ser explorada. A ameaça é a causa potencial de um incidente, como um invasor ou um vírus. O risco é a possibilidade de a ameaça explorar a vulnerabilidade, com certo impacto.\n\nA contramedida é o controle que reduz o risco, como o firewall. E o backup é uma cópia de segurança, que ajuda a recuperar dados depois de um incidente.",
  },
  {
    materia: "informatica",
    tema: "Segurança da informação",
    dificuldade: "media",
    enunciado:
      "Qual é a diferença entre autenticação e autorização?",
    opcoes: [
      "Autenticação define o que o usuário pode fazer; autorização confirma quem ele é",
      "Autenticação confirma quem é o usuário; autorização define o que ele pode fazer",
      "São sinônimos e significam o mesmo",
      "Autenticação só vale para senhas; autorização, só para e-mails",
      "Autorização só ocorre depois de o usuário sair do sistema",
    ],
    correta: 1,
    explicacao:
      "Primeiro o sistema autentica, isto é, comprova quem é o usuário. Depois autoriza, isto é, decide a que recursos e a que ações esse usuário tem direito, como ler, alterar ou apagar.\n\nTrocar as definições está errado. Os dois termos não são sinônimos. A autenticação não se limita a senhas, e a autorização não se limita a e-mails. E a autorização ocorre depois do acesso, durante o uso, e não depois da saída do sistema.",
  },
  {
    materia: "informatica",
    tema: "Segurança da informação",
    dificuldade: "media",
    enunciado:
      "A impressão digital usada para desbloquear um celular é um exemplo de qual fator de autenticação?",
    opcoes: [
      "Algo que o usuário sabe",
      "Algo que o usuário é",
      "Algo que o usuário tem",
      "Algo que o usuário esqueceu",
      "Algo que o usuário compartilha",
    ],
    correta: 1,
    explicacao:
      "Os fatores de autenticação são três: o que o usuário sabe, como uma senha ou um PIN, o que ele tem, como um cartão ou um celular, e o que ele é, como a impressão digital, o rosto ou a íris. A biometria entra no terceiro grupo.\n\nA senha é algo que se sabe. O token e o celular são algo que se tem. E esquecer e compartilhar não são fatores de autenticação, e sim situações a evitar.",
  },
  {
    materia: "informatica",
    tema: "Segurança da informação",
    dificuldade: "media",
    enunciado:
      "O código de uso único, gerado por um aplicativo ou por um token físico, é um exemplo de qual fator de autenticação?",
    opcoes: [
      "Algo que o usuário sabe",
      "Algo que o usuário tem",
      "Algo que o usuário é",
      "Algo que o usuário esqueceu",
      "Algo que o usuário compartilha",
    ],
    correta: 1,
    explicacao:
      "O token ou o aplicativo gerador de códigos é um objeto que o usuário possui, e a posse dele comprova a identidade. Por isso entra no fator o que o usuário tem. Combinado com a senha, que é algo que se sabe, forma a autenticação em dois fatores.\n\nA biometria é algo que o usuário é. A senha é algo que ele sabe. E esquecer ou compartilhar não são fatores de autenticação.",
  },
  {
    materia: "informatica",
    tema: "Segurança da informação",
    dificuldade: "media",
    enunciado:
      "Um golpista liga para um funcionário, diz ser do suporte técnico e pede a senha para resolver um problema. Que tipo de ataque é esse?",
    opcoes: [
      "Negação de serviço",
      "Engenharia social",
      "Força bruta",
      "Injeção de código",
      "Interceptação de rede",
    ],
    correta: 1,
    explicacao:
      "O golpista se passa por alguém de confiança para convencer a vítima a revelar a senha. O alvo é a pessoa, e não o sistema: é o caso típico de engenharia social.\n\nA negação de serviço sobrecarrega um serviço. A força bruta testa muitas senhas, de modo automático. A injeção de código aproveita falhas em formulários de programas. E a interceptação de rede lê o tráfego no caminho. Nenhum deles depende de persuadir a vítima por telefone.",
  },
  {
    materia: "informatica",
    tema: "Segurança da informação",
    dificuldade: "media",
    enunciado:
      "Qual é a diferença entre um ataque DoS e um DDoS?",
    opcoes: [
      "O DoS usa muitas máquinas e o DDoS só uma",
      "O DDoS é distribuído, com muitas máquinas atacando ao mesmo tempo",
      "O DDoS rouba senhas e o DoS apaga arquivos",
      "Os dois são sinônimos de phishing",
      "O DoS só ocorre em redes sem fio",
    ],
    correta: 1,
    explicacao:
      "O DoS, de Denial of Service, tenta tornar um serviço indisponível, por exemplo sobrecarregando-o de pedidos. No DDoS, o D a mais é de distribuído: o ataque parte de muitas máquinas ao mesmo tempo, em geral computadores infectados que formam uma botnet, o que o torna mais difícil de bloquear.\n\nA definição que inverte as quantidades de máquinas está errada. Nenhum dos dois rouba senhas, e não são sinônimos de phishing. E ambos podem ocorrer em redes com ou sem fio.",
  },
  {
    materia: "informatica",
    tema: "Segurança da informação",
    dificuldade: "media",
    enunciado:
      "Em que consiste um ataque de força bruta contra uma senha?",
    opcoes: [
      "Enganar a vítima por telefone",
      "Testar, de modo automático, muitas combinações até acertar",
      "Interceptar a comunicação entre duas pessoas",
      "Enviar uma mensagem falsa de banco",
      "Sobrecarregar o servidor com pedidos",
    ],
    correta: 1,
    explicacao:
      "Na força bruta, um programa tenta, uma a uma, as combinações possíveis de senha, ou as de uma lista de senhas comuns, até acertar. A defesa está em senhas longas e complexas, em limites de tentativas e em bloqueios temporários.\n\nEnganar a vítima por telefone é engenharia social. Interceptar a comunicação é o ataque de intermediário. A mensagem falsa de banco é phishing. E sobrecarregar o servidor é negação de serviço.",
  },
  {
    materia: "informatica",
    tema: "Segurança da informação",
    dificuldade: "media",
    enunciado:
      "O que caracteriza o ataque do homem no meio, ou man-in-the-middle?",
    opcoes: [
      "O atacante apaga o disco do servidor",
      "O atacante envia uma mensagem para milhares de pessoas",
      "O atacante se coloca entre duas partes e lê ou altera a comunicação",
      "O atacante testa senhas em sequência",
      "O atacante sobrecarrega o serviço com pedidos",
    ],
    correta: 2,
    explicacao:
      "No ataque do homem no meio, o criminoso se interpõe entre duas partes que se comunicam, como o usuário e o site, e passa a ler, e às vezes a alterar, o que trafega, sem que elas percebam. Redes Wi-Fi abertas são um terreno comum. O HTTPS e a VPN dificultam esse ataque.\n\nApagar o disco é um ataque destrutivo. Enviar mensagens a muitos é spam ou phishing. Testar senhas em sequência é força bruta. E sobrecarregar o serviço é negação de serviço.",
  },
  {
    materia: "informatica",
    tema: "Segurança da informação",
    dificuldade: "media",
    enunciado:
      "Qual é a diferença entre um IDS e um IPS, em segurança de redes?",
    opcoes: [
      "O IDS bloqueia e o IPS apenas alerta",
      "Os dois só apagam arquivos",
      "O IDS só alerta; o IPS também bloqueia",
      "O IDS só funciona sem energia",
      "Os dois são antivírus de celular",
    ],
    correta: 2,
    explicacao:
      "O IDS, sistema de detecção de intrusão, monitora o tráfego e avisa quando vê algo suspeito, sem interferir. O IPS, sistema de prevenção de intrusão, vai além: além de detectar, age de imediato, bloqueando o tráfego ou a conexão considerados perigosos.\n\nA troca das funções está errada. Nenhum deles apaga arquivos como função principal, nenhum depende de ficar sem energia e não são antivírus de celular. Atuam em redes, e costumam ser usados junto com o firewall.",
  },
  {
    materia: "informatica",
    tema: "Segurança da informação",
    dificuldade: "media",
    enunciado:
      "O que estabelece o princípio do menor privilégio?",
    opcoes: [
      "Todos os usuários têm acesso total ao sistema",
      "Só o administrador tem senha",
      "Cada usuário recebe só os acessos de que precisa para o seu trabalho",
      "Os privilégios nunca podem ser revistos",
      "Os usuários escolhem os próprios privilégios",
    ],
    correta: 2,
    explicacao:
      "Pelo princípio do menor privilégio, cada usuário, programa ou processo recebe apenas as permissões necessárias à sua função, e nada além. Assim, se uma conta for invadida, o estrago é limitado.\n\nDar acesso total a todos viola o princípio. Ter senha só o administrador seria uma falha grave. Os privilégios devem ser revistos com frequência, e não são escolhidos pelo próprio usuário, e sim concedidos conforme a função.",
  },
  {
    materia: "informatica",
    tema: "Segurança da informação",
    dificuldade: "media",
    enunciado:
      "O que é uma política de segurança da informação em uma organização?",
    opcoes: [
      "Um programa que bloqueia todos os sites",
      "Uma lista de senhas dos funcionários",
      "Documento com as regras de proteção",
      "Um cabo de rede especial",
      "Um tipo de backup",
    ],
    correta: 2,
    explicacao:
      "A política de segurança da informação é o documento que estabelece as regras da organização para proteger a informação: o que é permitido, quem é responsável, como lidar com senhas, equipamentos e dados, e o que acontece quando as regras são descumpridas.\n\nNão é um programa que bloqueia sites, embora possa prever esse tipo de controle. Não é lista de senhas, que não pode ser compartilhada. Não é cabo. E o backup é só um dos controles que a política pode exigir.",
  },
  {
    materia: "informatica",
    tema: "Segurança da informação",
    dificuldade: "media",
    enunciado:
      "Qual protocolo de segurança de redes Wi-Fi é considerado obsoleto e inseguro, devendo ser evitado?",
    opcoes: [
      "WPA2",
      "WPA3",
      "WEP",
      "HTTPS",
      "VPN",
    ],
    correta: 2,
    explicacao:
      "O WEP foi o primeiro protocolo de segurança do Wi-Fi, mas tem falhas graves, e sua chave pode ser descoberta em minutos. Foi substituído pelo WPA, pelo WPA2 e, mais recentemente, pelo WPA3, que oferece a proteção atual.\n\nO HTTPS protege a navegação em sites, e a VPN protege o tráfego por um túnel criptografado: nenhum dos dois é um padrão de segurança do Wi-Fi, e não são obsoletos.",
  },
  {
    materia: "informatica",
    tema: "Segurança da informação",
    dificuldade: "media",
    enunciado:
      "Por que é recomendável usar uma VPN ao acessar a Internet por um Wi-Fi público?",
    opcoes: [
      "Porque deixa a Internet mais rápida",
      "Porque troca a senha do Wi-Fi",
      "Porque criptografa o tráfego",
      "Porque instala um antivírus",
      "Porque impede o uso do celular",
    ],
    correta: 2,
    explicacao:
      "Em um Wi-Fi público, outras pessoas na mesma rede podem tentar interceptar o tráfego. A VPN cria um túnel criptografado entre o aparelho e um servidor, e o que passa por ele fica ilegível para quem espia a rede.\n\nA VPN, em geral, não acelera a conexão, e pode até reduzi-la um pouco. Não troca a senha do Wi-Fi, não instala antivírus e não impede o uso do celular. Seu papel é proteger o tráfego.",
  },
  {
    materia: "informatica",
    tema: "Segurança da informação",
    dificuldade: "media",
    enunciado:
      "Qual é o assunto da Lei Geral de Proteção de Dados, a LGPD, no Brasil?",
    opcoes: [
      "A venda de equipamentos de informática",
      "A regulamentação das redes sociais",
      "O tratamento de dados pessoais, com direitos para os titulares",
      "A criação de novos domínios na Internet",
      "O imposto sobre programas de computador",
    ],
    correta: 2,
    explicacao:
      "A LGPD, Lei nº 13.709/2018, regula o tratamento de dados pessoais por empresas e órgãos públicos: define as hipóteses em que os dados podem ser coletados e usados, e garante direitos aos titulares, como saber como seus dados são tratados e pedir a correção ou a exclusão deles. A ANPD é o órgão que fiscaliza.\n\nNão trata da venda de equipamentos, das redes sociais em si, da criação de domínios nem de impostos sobre programas.",
  },
  {
    materia: "informatica",
    tema: "Segurança da informação",
    dificuldade: "media",
    enunciado:
      "O que é um certificado digital, usado em assinaturas e em sites seguros?",
    opcoes: [
      "Um cabo de rede de alta segurança",
      "Um programa antivírus",
      "Documento que liga chave e identidade",
      "Um tipo de senha de seis dígitos",
      "Um arquivo de música protegido",
    ],
    correta: 2,
    explicacao:
      "O certificado digital é emitido por uma autoridade certificadora, como as da ICP-Brasil, e liga uma chave pública a uma pessoa, empresa ou site. É a base da assinatura digital e do cadeado do HTTPS.\n\nNão é um cabo, nem um antivírus. Não é uma senha de seis dígitos, embora o acesso ao certificado costume ser protegido por uma. E também não é um arquivo de música protegido.",
  },
  {
    materia: "informatica",
    tema: "Segurança da informação",
    dificuldade: "media",
    enunciado:
      "Quantos PINs diferentes de 4 dígitos existem, de 0000 a 9999, podendo repetir dígitos?",
    opcoes: [
      "9.999",
      "9.000",
      "10.000",
      "40",
      "5.040",
    ],
    correta: 2,
    explicacao:
      "Cada uma das 4 posições pode receber qualquer um dos 10 dígitos, de 0 a 9, e o total é 10 × 10 × 10 × 10 = 10.000 combinações, de 0000 a 9999. É um espaço pequeno, e por isso o PIN só é seguro com limite de tentativas.\n\n9.999 desconta uma combinação, o 0000, sem motivo. 9.000 supõe que o primeiro dígito não pode ser zero. 40 soma em vez de multiplicar. E 5.040 conta só os PINs sem dígitos repetidos, o que não é o caso aqui.",
  },
  {
    materia: "informatica",
    tema: "Segurança da informação",
    dificuldade: "media",
    enunciado:
      "Quantas senhas diferentes de 6 letras minúsculas, de um alfabeto de 26 letras e podendo repetir letras, existem?",
    opcoes: [
      "165.765.600",
      "156",
      "308.915.776",
      "17.576",
      "1.000.000",
    ],
    correta: 2,
    explicacao:
      "Cada uma das 6 posições pode receber qualquer uma das 26 letras, e o total é 26⁶ = 308.915.776 senhas. É um número grande para uma pessoa, mas um computador percorre esse espaço em pouco tempo.\n\n165.765.600 conta as senhas sem letras repetidas, 26 × 25 × 24 × 23 × 22 × 21. 156 é 6 × 26, uma soma de opções. 17.576 é 26³, o que corresponde a 3 letras. E 1.000.000 é 10⁶, o número de PINs de 6 dígitos.",
  },
  {
    materia: "informatica",
    tema: "Segurança da informação",
    dificuldade: "media",
    enunciado:
      "Um programa testa 1.000.000 de senhas por segundo. No pior caso, quanto tempo leva para testar todos os PINs de 8 dígitos?",
    opcoes: [
      "10 segundos",
      "1.000 segundos",
      "50 segundos",
      "100 segundos",
      "10.000 segundos",
    ],
    correta: 3,
    explicacao:
      "Os PINs de 8 dígitos formam 10⁸ = 100.000.000 de combinações. No pior caso, o programa testa todas antes de acertar, e 100.000.000 ÷ 1.000.000 = 100 segundos.\n\n10 segundos corresponde a 10⁷ combinações, de 7 dígitos. 1.000 segundos corresponde a 10⁹, de 9 dígitos. 50 segundos é o tempo médio, quando se acerta, em média, na metade do espaço. E 10.000 segundos corresponde a 10¹⁰ combinações.",
  },
  {
    materia: "informatica",
    tema: "Segurança da informação",
    dificuldade: "media",
    enunciado:
      "Quantos caracteres hexadecimais tem a representação de um hash SHA-256?",
    opcoes: [
      "32",
      "40",
      "128",
      "64",
      "256",
    ],
    correta: 3,
    explicacao:
      "O SHA-256 produz um resumo de 256 bits, e cada caractere hexadecimal representa 4 bits, então o texto tem 256 ÷ 4 = 64 caracteres. O tamanho é sempre o mesmo, seja a entrada uma letra ou um arquivo de vários gigabytes.\n\n32 é o tamanho do MD5, de 128 bits. 40 é o do SHA-1, de 160 bits. 128 é o do SHA-512, de 512 bits. E 256 é o número de bits do SHA-256, e não de caracteres hexadecimais.",
  },
  {
    materia: "informatica",
    tema: "Segurança da informação",
    dificuldade: "media",
    enunciado:
      "Ao mudar uma única letra de uma mensagem, o que acontece com o hash SHA-256 dela?",
    opcoes: [
      "Só o último caractere do hash muda",
      "O hash fica igual",
      "O hash perde alguns caracteres",
      "O hash muda por completo, de forma imprevisível",
      "O hash se torna a mensagem original",
    ],
    correta: 3,
    explicacao:
      "As funções de hash têm o efeito avalanche: uma pequena mudança na entrada altera, de modo imprevisível, cerca de metade dos bits do resultado. Por isso o hash serve para detectar qualquer alteração em um arquivo ou mensagem.\n\nPor isso não muda só o último caractere, e o hash não fica igual: se ficasse, não revelaria alterações. O tamanho do hash é fixo, e ele não perde caracteres. E é uma função de mão única, que não permite recuperar a mensagem original.",
  },
  {
    materia: "informatica",
    tema: "Segurança da informação",
    dificuldade: "media",
    enunciado:
      "Uma empresa estima que um incidente tem 20% de chance de ocorrer em um ano e causaria um prejuízo de R$ 50.000. Qual é a perda esperada, isto é, o risco em valor?",
    opcoes: [
      "R$ 50.000",
      "R$ 250.000",
      "R$ 0,20",
      "R$ 10.000",
      "R$ 40.000",
    ],
    correta: 3,
    explicacao:
      "O risco em valor é o produto da probabilidade pelo impacto: 0,20 × 50.000 = R$ 10.000. Esse valor serve de referência para decidir quanto vale a pena gastar em proteção.\n\nR$ 50.000 é o prejuízo se o incidente ocorrer, sem ponderar pela chance. R$ 250.000 divide o prejuízo pela probabilidade, em vez de multiplicar. R$ 0,20 confunde a probabilidade com um valor em reais. E R$ 40.000 usa a probabilidade de o incidente não ocorrer, 80%.",
  },
  {
    materia: "informatica",
    tema: "Segurança da informação",
    dificuldade: "media",
    enunciado:
      "Um serviço promete 99,5% de disponibilidade ao longo de um ano de 365 dias. Qual é o tempo máximo de indisponibilidade previsto, em horas?",
    opcoes: [
      "4,38",
      "438",
      "87,6",
      "43,8",
      "21,9",
    ],
    correta: 3,
    explicacao:
      "A indisponibilidade prevista é de 100% − 99,5% = 0,5% do ano. O ano tem 365 × 24 = 8.760 horas, e 0,005 × 8.760 = 43,8 horas. Conferindo, 99,5% de 8.760 são 8.716,2 horas disponíveis, e 8.760 − 8.716,2 = 43,8.\n\n4,38 corresponderia a 99,95% de disponibilidade. 438 corresponderia a 95%. 87,6 corresponderia a 99%. E 21,9 corresponderia a 99,75%.",
  },
  {
    materia: "informatica",
    tema: "Segurança da informação",
    dificuldade: "media",
    enunciado:
      "Um servidor suporta 2.000 pedidos por segundo. Um ataque usa 150 dispositivos infectados, cada um enviando 30 pedidos por segundo. Quantos pedidos por segundo ultrapassam a capacidade do servidor?",
    opcoes: [
      "4.500",
      "2.000",
      "150",
      "2.500",
      "30",
    ],
    correta: 3,
    explicacao:
      "O ataque envia 150 × 30 = 4.500 pedidos por segundo. Como o servidor só atende 2.000, ultrapassam a capacidade 4.500 − 2.000 = 2.500 pedidos por segundo, o que gera lentidão ou queda do serviço, um ataque de negação de serviço distribuído.\n\n4.500 é o total enviado, sem descontar o que o servidor suporta. 2.000 é a capacidade, e não o excesso. 150 é o número de dispositivos. E 30 é o ritmo de cada dispositivo.",
  },
  {
    materia: "informatica",
    tema: "Segurança da informação",
    dificuldade: "media",
    enunciado:
      "Qual é a função de um firewall pessoal, instalado em um computador?",
    opcoes: [
      "Acelerar a leitura dos arquivos",
      "Corrigir erros de digitação",
      "Compactar fotos e vídeos",
      "Controlar as conexões do computador",
      "Aumentar o brilho da tela",
    ],
    correta: 3,
    explicacao:
      "O firewall pessoal monitora e filtra as conexões de rede do computador, com regras que permitem ou bloqueiam o tráfego por programa, endereço ou porta. Barra acessos externos indevidos e impede que programas desconhecidos enviem dados sem que o usuário saiba.\n\nNão acelera a leitura de arquivos, não corrige digitação, não compacta fotos e vídeos e não altera o brilho da tela. É um controle de rede, e não de desempenho ou de edição.",
  },
  {
    materia: "informatica",
    tema: "Segurança da informação",
    dificuldade: "media",
    enunciado:
      "Um sistema libera 3 tentativas de PIN antes de bloquear o cartão. Qual é a chance de um golpista acertar, ao acaso, um PIN aleatório de 4 dígitos nessas 3 tentativas?",
    opcoes: [
      "0,3%",
      "3%",
      "0,003%",
      "0,03%",
      "30%",
    ],
    correta: 3,
    explicacao:
      "Há 10.000 PINs possíveis, e cada tentativa testa um diferente. Com 3 tentativas, a chance é de 3 em 10.000, ou 0,0003, que corresponde a 0,03%. É pequena, e é por isso que o bloqueio após poucas tentativas protege bem, mesmo com um PIN curto.\n\n0,3% e 3% erram a posição da vírgula, e sobrestimam a chance. 0,003% a subestima, em 10 vezes. E 30% seria a chance de quem tivesse 3.000 tentativas, e não 3.",
  },
  {
    materia: "informatica",
    tema: "Segurança da informação",
    dificuldade: "media",
    enunciado:
      "Um programa testa 1.000 senhas por segundo. No pior caso, quanto tempo leva para testar todas as senhas de 4 letras minúsculas, com 26 letras e repetições permitidas?",
    opcoes: [
      "≈ 26 segundos",
      "≈ 4,57 segundos",
      "≈ 4.570 segundos",
      "≈ 457 segundos",
      "≈ 104 segundos",
    ],
    correta: 3,
    explicacao:
      "As senhas de 4 letras minúsculas somam 26⁴ = 456.976 combinações. No pior caso, o programa testa todas, e 456.976 ÷ 1.000 ≈ 457 segundos, isto é, cerca de 7,6 minutos.\n\n26 segundos é a ordem de grandeza do tamanho do alfabeto, sem relação com a conta. 4,57 segundos erra por um fator de 100. 4.570 segundos erra por um fator de 10, no outro sentido. E 104 segundos corresponde a 4 × 26, uma soma de opções, e não ao produto.",
  },
  {
    materia: "informatica",
    tema: "Segurança da informação",
    dificuldade: "dificil",
    enunciado:
      "Uma senha de 8 caracteres escolhidos ao acaso entre 62 símbolos (letras maiúsculas e minúsculas e dígitos) equivale a quantos bits de entropia, aproximadamente?",
    opcoes: [
      "≈ 62 bits",
      "≈ 8 bits",
      "≈ 24 bits",
      "≈ 48 bits",
      "≈ 96 bits",
    ],
    correta: 3,
    explicacao:
      "A entropia de uma senha aleatória é o número de caracteres vezes o log₂ do tamanho do alfabeto: 8 × log₂(62) ≈ 8 × 5,95 ≈ 47,6 bits, isto é, cerca de 48 bits. Cada bit a mais dobra o número de tentativas necessárias.\n\n62 é o tamanho do alfabeto, e não a entropia. 8 é o número de caracteres. 24 resultaria de 8 × 3, como se cada caractere valesse só 3 bits, o que corresponderia a 8 símbolos. E 96 dobraria o valor correto.",
  },
  {
    materia: "informatica",
    tema: "Segurança da informação",
    dificuldade: "dificil",
    enunciado:
      "Qual senha tem mais combinações possíveis: uma de 12 letras minúsculas ou uma de 8 caracteres escolhidos entre 62 símbolos?",
    opcoes: [
      "A de 8 caracteres entre 62 símbolos",
      "As duas têm o mesmo número de combinações",
      "Depende da marca do computador",
      "Nenhuma das duas pode ser quebrada",
      "A de 12 letras minúsculas",
    ],
    correta: 4,
    explicacao:
      "A de 12 letras minúsculas tem 26¹² ≈ 9,5 × 10¹⁶ combinações. A de 8 caracteres entre 62 símbolos tem 62⁸ ≈ 2,2 × 10¹⁴. A primeira é cerca de 440 vezes maior. O comprimento pesa mais que a variedade de símbolos, porque o número de combinações cresce como uma potência do comprimento.\n\nPor isso as duas não são iguais. A marca do computador não muda o número de combinações, só a velocidade de teste. E qualquer senha pode ser quebrada, com tempo suficiente.",
  },
  {
    materia: "informatica",
    tema: "Segurança da informação",
    dificuldade: "dificil",
    enunciado:
      "Um programa testa 1 bilhão de senhas por segundo. Em média, o atacante acerta ao testar metade do espaço de busca. Quanto tempo leva, aproximadamente, para acertar uma senha aleatória de 8 caracteres entre 62 símbolos?",
    opcoes: [
      "≈ 60 horas",
      "≈ 3 horas",
      "≈ 30 minutos",
      "≈ 30 dias",
      "≈ 30 horas",
    ],
    correta: 4,
    explicacao:
      "O espaço tem 62⁸ ≈ 2,18 × 10¹⁴ senhas. Em média, o atacante testa metade, 1,09 × 10¹⁴, e a 10⁹ por segundo isso leva cerca de 109.170 segundos, ou 30,3 horas.\n\n60 horas é o pior caso, em que se testa todo o espaço. 3 horas e 30 minutos subestimam o tempo por fatores de 10 ou de 60. E 30 dias o superestima em mais de 20 vezes. Esse cálculo mostra por que o comprimento e a variedade da senha importam.",
  },
  {
    materia: "informatica",
    tema: "Segurança da informação",
    dificuldade: "dificil",
    enunciado:
      "Quantos PINs de 4 dígitos, de 0000 a 9999, têm todos os dígitos diferentes entre si?",
    opcoes: [
      "10.000",
      "9.000",
      "4.536",
      "720",
      "5.040",
    ],
    correta: 4,
    explicacao:
      "O primeiro dígito tem 10 opções, o segundo, 9 (não pode repetir o primeiro), o terceiro, 8, e o quarto, 7. O total é 10 × 9 × 8 × 7 = 5.040 PINs.\n\n10.000 é o total de PINs, com repetições permitidas. 9.000 supõe que o primeiro dígito não pode ser zero, o que não é exigido. 4.536 usaria 9 × 9 × 8 × 7, o que impede o zero no início. E 720 usaria 10 × 9 × 8, e esqueceria o quarto dígito.",
  },
  {
    materia: "informatica",
    tema: "Segurança da informação",
    dificuldade: "dificil",
    enunciado:
      "Um sistema bloqueia a conta após 5 tentativas erradas. Qual é a chance de um atacante acertar ao acaso, nessas 5 tentativas, um PIN aleatório de 6 dígitos?",
    opcoes: [
      "0,005%",
      "0,05%",
      "5%",
      "0,00005%",
      "0,0005%",
    ],
    correta: 4,
    explicacao:
      "Há 10⁶ = 1.000.000 de PINs possíveis, e cada tentativa testa um deles, sem repetir. Com 5 tentativas, a chance é de 5 em 1.000.000, ou seja, 0,000005, que corresponde a 0,0005%. É por isso que o limite de tentativas protege bem, mesmo com um PIN curto.\n\n0,005%, 0,05% e 5% erram a posição da vírgula, e sobrestimam a chance. E 0,00005% a subestima, em 10 vezes.",
  },
  {
    materia: "informatica",
    tema: "Segurança da informação",
    dificuldade: "dificil",
    enunciado:
      "O que é um ataque de injeção de SQL, ou SQL injection?",
    opcoes: [
      "Enviar muitos pedidos para derrubar um site",
      "Testar senhas em sequência até acertar",
      "Enganar o usuário por telefone",
      "Interceptar mensagens em um Wi-Fi aberto",
      "Inserir comandos SQL em um campo de entrada",
    ],
    correta: 4,
    explicacao:
      "Na injeção de SQL, o atacante digita comandos da linguagem SQL em um campo de formulário que o programa envia, sem tratamento, ao banco de dados, e consegue ler, alterar ou apagar dados. A defesa é validar as entradas e usar consultas parametrizadas.\n\nSobrecarregar um site é negação de serviço. Testar senhas em sequência é força bruta. Enganar o usuário por telefone é engenharia social. E interceptar mensagens em um Wi-Fi aberto é o ataque do homem no meio.",
  },
  {
    materia: "informatica",
    tema: "Segurança da informação",
    dificuldade: "dificil",
    enunciado:
      "O que é uma vulnerabilidade zero-day, em segurança da informação?",
    opcoes: [
      "Uma falha que já foi corrigida há muito tempo",
      "Um vírus que só age à meia-noite",
      "Uma senha que expira em um dia",
      "Uma atualização que dura zero segundos",
      "Falha desconhecida do fabricante, sem correção",
    ],
    correta: 4,
    explicacao:
      "Uma vulnerabilidade zero-day é uma falha que o fabricante ainda não conhece, ou para a qual ainda não há correção. Os atacantes podem explorá-la antes de qualquer defesa específica, e o fabricante tem zero dias para corrigi-la, daí o nome.\n\nUma falha corrigida há muito tempo é uma vulnerabilidade conhecida, resolvida por atualização. O nome não tem relação com a hora de ação do vírus, nem com a validade de uma senha, nem com a duração de uma atualização.",
  },
  {
    materia: "informatica",
    tema: "Segurança da informação",
    dificuldade: "dificil",
    enunciado:
      "O que significa o conceito de defesa em profundidade, em segurança da informação?",
    opcoes: [
      "Escolher uma única proteção, a mais cara",
      "Guardar todos os dados em um só servidor",
      "Esconder o sistema, sem usar outras proteções",
      "Trocar todas as senhas todos os dias",
      "Várias camadas de proteção, e não só uma",
    ],
    correta: 4,
    explicacao:
      "A defesa em profundidade combina várias camadas independentes, como firewall, antivírus, controle de acesso, criptografia, backup e treinamento. Se uma camada falhar, as outras ainda protegem o ativo, e o invasor precisa vencer todas.\n\nDepender de uma só proteção cria um ponto único de falha. Concentrar dados em um servidor aumenta o risco. Esconder o sistema, sem outras defesas, é a chamada segurança por obscuridade, frágil. E trocar senhas todos os dias não é o conceito, e pode até estimular senhas fracas.",
  },
  {
    materia: "informatica",
    tema: "Segurança da informação",
    dificuldade: "dificil",
    enunciado:
      "Qual é a diferença entre o hash e a criptografia de um dado?",
    opcoes: [
      "O hash pode ser revertido com uma chave, e a criptografia não",
      "Os dois são sinônimos",
      "O hash só vale para imagens",
      "A criptografia gera sempre um resumo de tamanho fixo",
      "O hash é de mão única, e a criptografia pode ser revertida com a chave",
    ],
    correta: 4,
    explicacao:
      "O hash gera um resumo de tamanho fixo e é de mão única: não se recupera o dado original a partir dele. Serve para verificar integridade e para guardar senhas. A criptografia transforma o dado de modo reversível: quem tem a chave correta o decifra e recupera o original.\n\nPor isso as outras definições trocam as propriedades, tratam os dois como sinônimos ou limitam o hash a imagens, o que não é verdade. O resumo de tamanho fixo é característica do hash, e não da criptografia.",
  },
  {
    materia: "informatica",
    tema: "Segurança da informação",
    dificuldade: "dificil",
    enunciado:
      "Por que se acrescenta um sal, o salt, a uma senha antes de calcular o seu hash?",
    opcoes: [
      "Para tornar a senha mais fácil de lembrar",
      "Para que o hash fique reversível",
      "Para reduzir o tamanho da senha",
      "Para dispensar o uso de hash",
      "Para que senhas iguais gerem hashes diferentes",
    ],
    correta: 4,
    explicacao:
      "O sal é um valor aleatório, diferente para cada usuário, misturado à senha antes do hash. Dois usuários com a mesma senha passam a ter hashes diferentes, e as tabelas de hashes pré-calculados, as rainbow tables, deixam de servir. O atacante precisa atacar cada senha separadamente.\n\nO sal não ajuda a lembrar a senha, não torna o hash reversível, não reduz o tamanho da senha e não dispensa o uso de hash: ele complementa o hash.",
  },
];
