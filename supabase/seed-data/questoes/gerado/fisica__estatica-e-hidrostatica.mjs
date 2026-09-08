/* Estática e hidrostática (50 questões).
   Equilíbrio de ponto material e de corpo extenso, momento de uma força,
   alavancas, pressão, densidade, Stevin, Pascal e Arquimedes.
   Ver fisica.mjs para o formato. */

export const questoes = [
  {
    materia: "fisica",
    tema: "Estática e hidrostática",
    dificuldade: "facil",
    enunciado:
      "Um ponto material está em equilíbrio estático quando a resultante das forças sobre ele é nula. Nessa condição, o corpo necessariamente:",
    opcoes: [
      "está em repouso ou em movimento retilíneo uniforme.",
      "está obrigatoriamente em repouso absoluto.",
      "não sofre a ação de nenhuma força.",
      "possui aceleração constante e não nula.",
      "tem massa desprezível.",
    ],
    correta: 0,
    explicacao:
      "Resultante nula implica aceleração nula, o que preserva o estado de movimento. O equilíbrio estático corresponde ao repouso; o dinâmico, ao movimento retilíneo uniforme. Forças podem existir em grande número, desde que se cancelem.",
  },
  {
    materia: "fisica",
    tema: "Estática e hidrostática",
    dificuldade: "media",
    enunciado:
      "Para que um corpo extenso esteja em equilíbrio completo, além de a resultante das forças ser nula, é necessário que:",
    opcoes: [
      "sua massa seja uniformemente distribuída.",
      "a soma dos momentos das forças em relação a qualquer ponto seja nula.",
      "todas as forças sejam aplicadas no mesmo ponto.",
      "não haja forças de atrito atuando.",
      "seu peso seja menor que a força normal.",
    ],
    correta: 1,
    explicacao:
      "Um corpo extenso pode ter resultante nula e ainda assim girar, como acontece em um binário de forças. O equilíbrio de rotação exige que a soma algébrica dos momentos seja zero. As duas condições juntas caracterizam o equilíbrio completo.",
  },
  {
    materia: "fisica",
    tema: "Estática e hidrostática",
    dificuldade: "media",
    enunciado:
      "Uma força de 20 N é aplicada perpendicularmente a uma barra, a 0,3 m do eixo de rotação. O momento dessa força em relação ao eixo é de:",
    opcoes: [
      "0,015 N·m",
      "6 N·m",
      "20,3 N·m",
      "60 N·m",
      "66,7 N·m",
    ],
    correta: 1,
    explicacao:
      "O momento é o produto da força pela distância perpendicular ao eixo: M = 20 · 0,3 = 6 N·m. Quanto maior o braço de alavanca, maior o efeito de rotação para a mesma força. É por isso que maçanetas ficam longe das dobradiças.",
  },
  {
    materia: "fisica",
    tema: "Estática e hidrostática",
    dificuldade: "media",
    enunciado:
      "Uma gangorra tem apoio central e uma criança de 30 kg sentada a 2 m do apoio. Para equilibrá-la, uma criança de 40 kg deve sentar-se, do outro lado, a uma distância de:",
    opcoes: [
      "1 m",
      "1,5 m",
      "2 m",
      "2,5 m",
      "3 m",
    ],
    correta: 1,
    explicacao:
      "O equilíbrio exige momentos iguais: 30 · 2 = 40 · d, logo d = 1,5 m. A criança mais pesada precisa sentar mais perto do apoio. As massas podem substituir os pesos porque a gravidade aparece nos dois lados e se cancela.",
  },
  {
    materia: "fisica",
    tema: "Estática e hidrostática",
    dificuldade: "media",
    enunciado:
      "As alavancas são classificadas conforme a posição relativa do apoio, da força e da resistência. Uma alavanca interfixa, como a tesoura, caracteriza-se por ter:",
    opcoes: [
      "o ponto de apoio entre a força aplicada e a resistência.",
      "a resistência entre o apoio e a força aplicada.",
      "a força aplicada entre o apoio e a resistência.",
      "apoio e resistência no mesmo ponto.",
      "ausência de ponto de apoio definido.",
    ],
    correta: 0,
    explicacao:
      "Na alavanca interfixa o apoio fica no meio, como na tesoura, no alicate e na gangorra. Na inter-resistente, a carga fica no meio, como no carrinho de mão. Na interpotente, a força fica no meio, como na pinça e no antebraço humano.",
  },
  {
    materia: "fisica",
    tema: "Estática e hidrostática",
    dificuldade: "facil",
    enunciado:
      "Uma força de 400 N é distribuída uniformemente sobre uma superfície de 0,5 m². A pressão exercida sobre essa superfície é de:",
    opcoes: [
      "80 Pa",
      "200 Pa",
      "400 Pa",
      "800 Pa",
      "2 000 Pa",
    ],
    correta: 3,
    explicacao:
      "A pressão é a razão entre força e área: 400/0,5 = 800 Pa. Reduzir a área aumenta a pressão para a mesma força, o que explica por que uma agulha perfura e um apoio largo não. O pascal equivale a um newton por metro quadrado.",
  },
  {
    materia: "fisica",
    tema: "Estática e hidrostática",
    dificuldade: "media",
    enunciado:
      "Um corpo de massa 500 g ocupa um volume de 200 cm³. A densidade desse corpo é de:",
    opcoes: [
      "0,4 g/cm³",
      "2,5 g/cm³",
      "4 g/cm³",
      "100 g/cm³",
      "700 g/cm³",
    ],
    correta: 1,
    explicacao:
      "A densidade é massa dividida por volume: 500/200 = 2,5 g/cm³. Como esse valor supera 1 g/cm³, densidade da água, o corpo afundaria nela. Em unidades do SI, 2,5 g/cm³ equivalem a 2 500 kg/m³.",
  },
  {
    materia: "fisica",
    tema: "Estática e hidrostática",
    dificuldade: "media",
    enunciado:
      "O teorema de Stevin estabelece que a diferença de pressão entre dois pontos de um líquido em equilíbrio depende:",
    opcoes: [
      "apenas do formato do recipiente que contém o líquido.",
      "da densidade do líquido, da gravidade e do desnível entre os pontos.",
      "somente do volume total de líquido presente.",
      "exclusivamente da área da superfície livre.",
      "apenas da temperatura do líquido.",
    ],
    correta: 1,
    explicacao:
      "A relação é Δp = d·g·h. O formato do recipiente não influencia: dois pontos à mesma profundidade têm a mesma pressão, mesmo em vasos de larguras diferentes. É esse resultado que explica o chamado paradoxo hidrostático.",
  },
  {
    materia: "fisica",
    tema: "Estática e hidrostática",
    dificuldade: "media",
    enunciado:
      "Em um lago de água doce, com densidade 1 000 kg/m³ e g = 10 m/s², a pressão hidrostática a 5 m de profundidade é de:",
    opcoes: [
      "500 Pa",
      "5 000 Pa",
      "50 000 Pa",
      "500 000 Pa",
      "200 Pa",
    ],
    correta: 2,
    explicacao:
      "Aplicando Δp = d·g·h = 1 000 · 10 · 5 = 50 000 Pa. Esse é o acréscimo em relação à superfície; a pressão absoluta somaria ainda a atmosférica, cerca de 100 000 Pa. A cada 10 m de água, a pressão sobe aproximadamente uma atmosfera.",
  },
  {
    materia: "fisica",
    tema: "Estática e hidrostática",
    dificuldade: "media",
    enunciado:
      "O princípio de Pascal afirma que uma variação de pressão aplicada a um líquido em equilíbrio:",
    opcoes: [
      "transmite-se apenas para o fundo do recipiente.",
      "transmite-se integralmente a todos os pontos do líquido.",
      "diminui à medida que se afasta do ponto de aplicação.",
      "atua somente sobre a superfície livre do líquido.",
      "depende do formato do recipiente utilizado.",
    ],
    correta: 1,
    explicacao:
      "A transmissão integral da pressão é a base da prensa hidráulica e dos freios de automóveis. Uma força pequena em um êmbolo de área reduzida gera força grande em um êmbolo de área maior. O que se conserva é a pressão, não a força.",
  },
  {
    materia: "fisica",
    tema: "Estática e hidrostática",
    dificuldade: "dificil",
    enunciado:
      "Em uma prensa hidráulica, o êmbolo menor tem área de 10 cm² e o maior, 200 cm². Aplicando 50 N no êmbolo menor, a força obtida no maior é de:",
    opcoes: [
      "50 N",
      "250 N",
      "500 N",
      "1 000 N",
      "2 000 N",
    ],
    correta: 3,
    explicacao:
      "A pressão é a mesma nos dois êmbolos: 50/10 = F/200, logo F = 1 000 N. A força foi multiplicada por 20, mesma razão entre as áreas. Em compensação, o êmbolo maior se desloca 20 vezes menos, de modo que o trabalho realizado é o mesmo.",
  },
  {
    materia: "fisica",
    tema: "Estática e hidrostática",
    dificuldade: "media",
    enunciado:
      "O princípio de Arquimedes estabelece que um corpo imerso em um fluido recebe uma força vertical para cima igual:",
    opcoes: [
      "ao peso do próprio corpo imerso.",
      "ao peso do fluido deslocado pelo corpo.",
      "ao volume total ocupado pelo corpo.",
      "à densidade do corpo multiplicada pela gravidade.",
      "à pressão atmosférica do local.",
    ],
    correta: 1,
    explicacao:
      "O empuxo vale E = d_fluido · V_deslocado · g. Ele explica por que navios de aço flutuam: o casco desloca um volume enorme de água. Quando o empuxo iguala o peso, o corpo permanece em equilíbrio dentro do fluido.",
  },
  {
    materia: "fisica",
    tema: "Estática e hidrostática",
    dificuldade: "media",
    enunciado:
      "Um corpo de volume 0,002 m³ está totalmente submerso em água de densidade 1 000 kg/m³. Adotando g = 10 m/s², o empuxo sobre ele é de:",
    opcoes: [
      "2 N",
      "20 N",
      "200 N",
      "2 000 N",
      "0,2 N",
    ],
    correta: 1,
    explicacao:
      "Calculando E = 1 000 · 0,002 · 10 = 20 N. O empuxo depende do volume submerso e da densidade do fluido, não da densidade do corpo. Dois corpos de mesmo volume, um de isopor e outro de chumbo, recebem o mesmo empuxo quando totalmente submersos.",
  },
  {
    materia: "fisica",
    tema: "Estática e hidrostática",
    dificuldade: "media",
    enunciado:
      "Um corpo flutua em equilíbrio na superfície de um líquido, com parte do volume emersa. Nessa situação, é correto afirmar que:",
    opcoes: [
      "o empuxo é maior que o peso do corpo.",
      "o empuxo é igual ao peso do corpo.",
      "o empuxo é menor que o peso do corpo.",
      "o empuxo sobre o corpo é nulo.",
      "o peso do corpo é nulo.",
    ],
    correta: 1,
    explicacao:
      "Em equilíbrio de flutuação, empuxo e peso se equilibram exatamente. Se o empuxo fosse maior, o corpo subiria até emergir mais; se fosse menor, afundaria. É a densidade média do corpo, comparada à do líquido, que determina qual fração fica submersa.",
  },
  {
    materia: "fisica",
    tema: "Estática e hidrostática",
    dificuldade: "dificil",
    enunciado:
      "Um bloco de densidade 600 kg/m³ flutua em água de densidade 1 000 kg/m³. A fração do volume do bloco que permanece submersa é de:",
    opcoes: [
      "40%",
      "50%",
      "60%",
      "70%",
      "100%",
    ],
    correta: 2,
    explicacao:
      "Em equilíbrio, a fração submersa é a razão entre as densidades: 600/1 000 = 0,6, ou 60%. É por isso que icebergs, com densidade próxima de 900 kg/m³, mantêm cerca de 90% do volume abaixo da linha da água.",
  },
  {
    materia: "fisica",
    tema: "Estática e hidrostática",
    dificuldade: "media",
    enunciado:
      "Um objeto afunda ao ser colocado em um líquido. Isso ocorre porque a densidade do objeto é:",
    opcoes: [
      "menor que a densidade do líquido.",
      "igual à densidade do líquido.",
      "maior que a densidade do líquido.",
      "independente da densidade do líquido.",
      "sempre igual a 1 g/cm³.",
    ],
    correta: 2,
    explicacao:
      "Se o corpo é mais denso, seu peso supera o empuxo máximo possível, que ocorre com ele totalmente submerso. Com densidades iguais, o corpo fica em equilíbrio em qualquer profundidade. Com densidade menor, sobe e passa a flutuar parcialmente emerso.",
  },
  {
    materia: "fisica",
    tema: "Estática e hidrostática",
    dificuldade: "media",
    enunciado:
      "Uma barra homogênea de 4 m e 20 kg está apoiada em suas duas extremidades. Adotando g = 10 m/s², a força exercida por cada apoio é de:",
    opcoes: [
      "50 N",
      "100 N",
      "150 N",
      "200 N",
      "400 N",
    ],
    correta: 1,
    explicacao:
      "O peso total é 200 N, e por simetria cada apoio sustenta metade: 100 N. Se a barra fosse não homogênea ou os apoios assimétricos, seria preciso aplicar a condição de momentos para dividir a carga corretamente.",
  },
  {
    materia: "fisica",
    tema: "Estática e hidrostática",
    dificuldade: "media",
    enunciado:
      "Em problemas de estática, define-se o centro de gravidade de um corpo como o ponto em que:",
    opcoes: [
      "pode-se considerar aplicada a resultante das forças peso.",
      "toda a massa do corpo está fisicamente concentrada.",
      "a força normal necessariamente atua.",
      "a densidade do corpo atinge seu valor máximo.",
      "o corpo apresenta seu maior volume.",
    ],
    correta: 0,
    explicacao:
      "Trata-se de um ponto de equivalência para efeito de cálculo: o peso distribuído por todo o corpo produz o mesmo efeito de uma única força aplicada nele. Em corpos homogêneos e simétricos coincide com o centro geométrico, e pode até ficar fora do material, como em um anel.",
  },
  {
    materia: "fisica",
    tema: "Estática e hidrostática",
    dificuldade: "media",
    enunciado:
      "Uma pessoa de 60 kg está de pé sobre um piso, com área total de contato dos pés igual a 300 cm². Adotando g = 10 m/s², a pressão exercida sobre o piso é de:",
    opcoes: [
      "2 Pa",
      "200 Pa",
      "2 000 Pa",
      "20 000 Pa",
      "200 000 Pa",
    ],
    correta: 3,
    explicacao:
      "A área em metros quadrados é 0,03 m² e o peso é 600 N, então p = 600/0,03 = 20 000 Pa. Apoiando-se em apenas um pé, a pressão dobraria. Converter centímetros quadrados em metros quadrados exige dividir por 10 000.",
  },
  {
    materia: "fisica",
    tema: "Estática e hidrostática",
    dificuldade: "dificil",
    enunciado:
      "Dois recipientes de formatos muito diferentes contêm água até a mesma altura. Sobre a pressão no fundo de cada um, conclui-se que ela é:",
    opcoes: [
      "maior no recipiente mais largo.",
      "maior no recipiente que contém mais água.",
      "igual nos dois, pois depende apenas da altura da coluna.",
      "menor no recipiente mais estreito.",
      "proporcional ao volume total de líquido.",
    ],
    correta: 2,
    explicacao:
      "Pelo teorema de Stevin, a pressão depende de densidade, gravidade e altura, não da quantidade total de líquido. Esse resultado, contraintuitivo à primeira vista, é conhecido como paradoxo hidrostático. A força total sobre o fundo, porém, difere, porque as áreas são diferentes.",
  },
  {
    materia: "fisica",
    tema: "Estática e hidrostática",
    dificuldade: "media",
    enunciado:
      "Medida em unidades do Sistema Internacional, a pressão atmosférica ao nível do mar equivale aproximadamente a:",
    opcoes: [
      "1 000 Pa",
      "10 000 Pa",
      "100 000 Pa",
      "1 000 000 Pa",
      "100 Pa",
    ],
    correta: 2,
    explicacao:
      "O valor padrão é cerca de 101 325 Pa, arredondado para 10⁵ Pa. Ele corresponde à coluna de 760 mm de mercúrio medida por Torricelli. Em altitudes elevadas a pressão cai, o que reduz a temperatura de ebulição da água.",
  },
  {
    materia: "fisica",
    tema: "Estática e hidrostática",
    dificuldade: "media",
    enunciado:
      "Um bloco de 10 kg está pendurado por dois fios verticais que sustentam igualmente sua carga. Adotando g = 10 m/s², a tração em cada fio é de:",
    opcoes: [
      "50 N",
      "10 N",
      "100 N",
      "200 N",
      "20 N",
    ],
    correta: 0,
    explicacao:
      "O peso de 100 N é dividido igualmente: 50 N em cada fio. Se os fios fossem inclinados, cada tração seria maior que 50 N, porque apenas suas componentes verticais sustentariam o peso. Quanto mais abertos, maior a tração necessária.",
  },
  {
    materia: "fisica",
    tema: "Estática e hidrostática",
    dificuldade: "dificil",
    enunciado:
      "Uma barra de 3 m e peso desprezível está apoiada em uma extremidade e sustenta uma carga de 60 N a 1 m desse apoio. A força vertical necessária na outra extremidade para manter o equilíbrio é de:",
    opcoes: [
      "20 N",
      "10 N",
      "30 N",
      "40 N",
      "60 N",
    ],
    correta: 0,
    explicacao:
      "Tomando momentos em relação ao apoio: 60 · 1 = F · 3, logo F = 20 N. A vantagem mecânica vem do braço maior. Esse é o princípio de funcionamento de guindastes e de pés de cabra.",
  },
  {
    materia: "fisica",
    tema: "Estática e hidrostática",
    dificuldade: "media",
    enunciado:
      "Um submarino controla sua profundidade ajustando a quantidade de água em seus tanques de lastro. Ao encher esses tanques, o submarino:",
    opcoes: [
      "aumenta sua densidade média e afunda.",
      "diminui sua densidade média e sobe.",
      "aumenta o empuxo que recebe da água.",
      "reduz seu volume externo total.",
      "elimina a ação da gravidade sobre o casco.",
    ],
    correta: 0,
    explicacao:
      "O volume externo permanece praticamente o mesmo, mas a massa aumenta, elevando a densidade média. Quando ela supera a da água, o peso vence o empuxo e o submarino desce. Para emergir, ar comprimido expulsa a água dos tanques.",
  },
  {
    materia: "fisica",
    tema: "Estática e hidrostática",
    dificuldade: "media",
    enunciado:
      "Um corpo pesa 50 N no ar e, quando totalmente submerso em água, a balança acusa 30 N. O empuxo sobre esse corpo é de:",
    opcoes: [
      "20 N",
      "30 N",
      "50 N",
      "80 N",
      "1 500 N",
    ],
    correta: 0,
    explicacao:
      "O peso aparente é a diferença entre peso real e empuxo: 50 − 30 = 20 N. Essa é a base do método de Arquimedes para medir volumes e identificar materiais. Conhecendo o empuxo, obtém-se o volume do corpo a partir da densidade do líquido.",
  },
  {
    materia: "fisica",
    tema: "Estática e hidrostática",
    dificuldade: "media",
    enunciado:
      "Ao calçar sapatos de salto fino, uma pessoa exerce sobre o piso pressão muito maior do que ao usar tênis, embora seu peso seja o mesmo. Isso ocorre porque:",
    opcoes: [
      "o peso da pessoa aumenta com o salto alto.",
      "a gravidade local se altera com a altura do salto.",
      "a área de contato diminui, elevando a pressão.",
      "a densidade do corpo aumenta.",
      "o empuxo do ar sobre a pessoa diminui.",
    ],
    correta: 2,
    explicacao:
      "Pressão é força por unidade de área: mantendo a força e reduzindo a área, a pressão sobe. É o mesmo princípio das facas afiadas e dos pregos pontiagudos. Esquis e pneus largos fazem o contrário, distribuindo o peso por área maior.",
  },
  {
    materia: "fisica",
    tema: "Estática e hidrostática",
    dificuldade: "dificil",
    enunciado:
      "Um objeto tem densidade exatamente igual à do líquido em que está imerso. Nessa condição, o objeto permanece:",
    opcoes: [
      "flutuando com metade do volume emerso.",
      "obrigatoriamente no fundo do recipiente.",
      "obrigatoriamente na superfície livre.",
      "em equilíbrio em qualquer profundidade em que for colocado.",
      "em movimento acelerado para cima.",
    ],
    correta: 3,
    explicacao:
      "Com densidades iguais, o empuxo iguala exatamente o peso em qualquer posição totalmente submersa, e o corpo fica em equilíbrio indiferente. É o princípio usado em ludiões e em peixes que ajustam sua bexiga natatória.",
  },
  {
    materia: "fisica",
    tema: "Estática e hidrostática",
    dificuldade: "media",
    enunciado:
      "Duas forças de 30 N atuam em sentidos opostos sobre uma barra, aplicadas em pontos distintos dela. Sobre o efeito produzido, é correto afirmar que a barra:",
    opcoes: [
      "permanece em equilíbrio completo.",
      "sofre translação acelerada.",
      "não sofre efeito algum.",
      "tende a girar, pois há um binário atuando.",
      "tem sua massa alterada.",
    ],
    correta: 3,
    explicacao:
      "A resultante das forças é nula, o que impede translação, mas os momentos se somam e produzem rotação — configuração chamada de binário ou conjugado. É por isso que o equilíbrio de um corpo extenso exige duas condições, e não apenas uma.",
  },
  {
    materia: "fisica",
    tema: "Estática e hidrostática",
    dificuldade: "media",
    enunciado:
      "Um mergulhador desce a 20 m de profundidade em água de densidade 1 000 kg/m³. Adotando g = 10 m/s² e pressão atmosférica de 100 000 Pa, a pressão absoluta nessa profundidade é de:",
    opcoes: [
      "100 000 Pa",
      "200 000 Pa",
      "300 000 Pa",
      "400 000 Pa",
      "20 000 Pa",
    ],
    correta: 2,
    explicacao:
      "A pressão hidrostática é 1 000 · 10 · 20 = 200 000 Pa, somada à atmosférica de 100 000 Pa, totalizando 300 000 Pa — cerca de três atmosferas. É essa variação que exige descompressão controlada no retorno à superfície.",
  },
  {
    materia: "fisica",
    tema: "Estática e hidrostática",
    dificuldade: "media",
    enunciado:
      "O carrinho de mão é classificado como alavanca inter-resistente porque, nesse equipamento:",
    opcoes: [
      "o apoio fica entre a força aplicada e a carga.",
      "a força aplicada fica entre o apoio e a carga.",
      "não existe ponto de apoio definido.",
      "a carga fica entre o apoio e a força aplicada.",
      "a carga coincide com o ponto de apoio.",
    ],
    correta: 3,
    explicacao:
      "A roda é o apoio, a carga fica na caçamba, no meio, e a força é aplicada nas alças. Essa configuração multiplica a força aplicada. Quebra-nozes e abridores de garrafa seguem o mesmo arranjo.",
  },
  {
    materia: "fisica",
    tema: "Estática e hidrostática",
    dificuldade: "dificil",
    enunciado:
      "Um bloco de gelo flutua em um copo com água. Quando o gelo derrete completamente, o nível da água no copo:",
    opcoes: [
      "sobe consideravelmente.",
      "desce até cerca da metade.",
      "transborda imediatamente.",
      "permanece praticamente o mesmo.",
      "depende apenas do formato do copo.",
    ],
    correta: 3,
    explicacao:
      "O gelo flutuante desloca um volume de água cujo peso iguala seu próprio peso. Ao derreter, ele se transforma exatamente nesse volume de água. Por isso o degelo do gelo marinho não eleva o nível dos oceanos — ao contrário do degelo continental.",
  },
  {
    materia: "fisica",
    tema: "Estática e hidrostática",
    dificuldade: "media",
    enunciado:
      "A unidade de pressão no Sistema Internacional é o pascal, que corresponde a:",
    opcoes: [
      "um newton por metro",
      "um joule por segundo",
      "um quilograma por metro cúbico",
      "um newton por metro quadrado",
      "um newton multiplicado por metro",
    ],
    correta: 3,
    explicacao:
      "O pascal é definido como N/m². Newton por metro seria constante elástica, joule por segundo é watt e quilograma por metro cúbico é densidade. Conferir a unidade é uma forma rápida de checar se a fórmula aplicada está correta.",
  },
  {
    materia: "fisica",
    tema: "Estática e hidrostática",
    dificuldade: "media",
    enunciado:
      "Em um sistema de vasos comunicantes que contém um único líquido em equilíbrio, o nível desse líquido:",
    opcoes: [
      "é mais alto no vaso mais estreito.",
      "é mais alto no vaso mais largo.",
      "atinge a mesma altura em todos os ramos.",
      "depende do volume de cada ramo.",
      "varia com a espessura das paredes.",
    ],
    correta: 2,
    explicacao:
      "Como a pressão na base é comum e depende apenas da altura da coluna, os níveis se igualam. Esse princípio é usado em níveis de mangueira na construção civil e explica o funcionamento de caixas d'água interligadas.",
  },
  {
    materia: "fisica",
    tema: "Estática e hidrostática",
    dificuldade: "dificil",
    enunciado:
      "Um corpo de massa 2 kg e volume 0,001 m³ é mantido totalmente submerso em água de densidade 1 000 kg/m³. Adotando g = 10 m/s², a força externa necessária para mantê-lo em repouso é de:",
    opcoes: [
      "5 N",
      "15 N",
      "20 N",
      "10 N",
      "30 N",
    ],
    correta: 3,
    explicacao:
      "O peso é 20 N e o empuxo é 1 000 · 0,001 · 10 = 10 N. A diferença, 10 N, precisa ser sustentada por um fio ou apoio. Note que o corpo afunda sozinho, porque sua densidade é 2 000 kg/m³, o dobro da água.",
  },
  {
    materia: "fisica",
    tema: "Estática e hidrostática",
    dificuldade: "media",
    enunciado:
      "Expressa em unidades do Sistema Internacional, a densidade da água pura é aproximadamente:",
    opcoes: [
      "1 kg/m³",
      "100 kg/m³",
      "1 000 kg/m³",
      "10 000 kg/m³",
      "1 000 000 kg/m³",
    ],
    correta: 2,
    explicacao:
      "O valor de 1 g/cm³ equivale a 1 000 kg/m³, porque um metro cúbico contém um milhão de centímetros cúbicos e um quilograma tem mil gramas. Essa conversão aparece em quase todo problema de hidrostática.",
  },
  {
    materia: "fisica",
    tema: "Estática e hidrostática",
    dificuldade: "media",
    enunciado:
      "Ao dobrar a profundidade de um ponto em um líquido homogêneo em repouso, a pressão hidrostática nesse ponto:",
    opcoes: [
      "permanece exatamente a mesma.",
      "fica multiplicada por quatro.",
      "reduz-se à metade.",
      "fica multiplicada por dois.",
      "torna-se nula.",
    ],
    correta: 3,
    explicacao:
      "A relação Δp = d·g·h é linear na profundidade, então dobrar h dobra a pressão hidrostática. Isso difere de grandezas quadráticas, como a energia cinética. A pressão absoluta, porém, não dobra, porque inclui a parcela atmosférica constante.",
  },
  {
    materia: "fisica",
    tema: "Estática e hidrostática",
    dificuldade: "media",
    enunciado:
      "Um navio de aço, material muito mais denso que a água, consegue flutuar porque:",
    opcoes: [
      "o aço perde densidade ao ser molhado.",
      "o empuxo não depende do volume deslocado.",
      "a água do mar tem densidade maior que a do aço.",
      "a gravidade é menor sobre a superfície do mar.",
      "seu formato oco faz a densidade média do conjunto ficar menor que a da água.",
    ],
    correta: 4,
    explicacao:
      "O casco encerra um grande volume de ar, e o que importa para a flutuação é a densidade média do conjunto, não a do material isolado. Quando há rombo e a água entra, a densidade média sobe e o navio afunda.",
  },
  {
    materia: "fisica",
    tema: "Estática e hidrostática",
    dificuldade: "media",
    enunciado:
      "Uma barra homogênea está em equilíbrio apoiada em um único ponto. Esse ponto de apoio necessariamente coincide com:",
    opcoes: [
      "a extremidade mais pesada da barra.",
      "o ponto de maior densidade do material.",
      "a extremidade mais leve da barra.",
      "qualquer ponto ao longo da barra.",
      "o centro de gravidade da barra.",
    ],
    correta: 4,
    explicacao:
      "Apoiada no centro de gravidade, a soma dos momentos do peso em relação ao apoio é nula e a barra permanece equilibrada. Em uma barra homogênea, esse ponto é o meio geométrico. Se a barra fosse mais grossa de um lado, o centro de gravidade se deslocaria para esse lado.",
  },
  {
    materia: "fisica",
    tema: "Estática e hidrostática",
    dificuldade: "dificil",
    enunciado:
      "Em uma prensa hidráulica em que a força é multiplicada por um fator 20, o deslocamento do êmbolo maior, comparado ao do menor, é:",
    opcoes: [
      "vinte vezes maior.",
      "igual ao do êmbolo menor.",
      "quatrocentas vezes menor.",
      "independente da razão entre as áreas.",
      "vinte vezes menor.",
    ],
    correta: 4,
    explicacao:
      "O volume de líquido deslocado é o mesmo nos dois lados, então área maior implica deslocamento menor na mesma proporção. Como trabalho é força vezes deslocamento, ele se conserva. A máquina multiplica força, nunca energia.",
  },
  {
    materia: "fisica",
    tema: "Estática e hidrostática",
    dificuldade: "media",
    enunciado:
      "Um objeto de 300 g e volume 500 cm³ é colocado em água de densidade 1 g/cm³. O comportamento esperado é que ele:",
    opcoes: [
      "afunde até o fundo do recipiente.",
      "permaneça em equilíbrio no meio do líquido.",
      "dissolva-se rapidamente na água.",
      "suba e salte para fora do recipiente.",
      "flutue com parte do volume emersa.",
    ],
    correta: 4,
    explicacao:
      "A densidade do objeto é 300/500 = 0,6 g/cm³, menor que a da água. Por isso ele flutua, com 60% do volume submerso. Se sua densidade fosse maior que 1 g/cm³, afundaria.",
  },
  {
    materia: "fisica",
    tema: "Estática e hidrostática",
    dificuldade: "media",
    enunciado:
      "O experimento de Torricelli, que mediu pela primeira vez a pressão atmosférica, utilizou uma coluna de mercúrio de altura aproximada de:",
    opcoes: [
      "76 cm",
      "10 cm",
      "760 m",
      "7,6 cm",
      "10 m",
    ],
    correta: 0,
    explicacao:
      "A coluna de 76 cm de mercúrio equilibra a pressão atmosférica ao nível do mar, valor que define a unidade milímetro de mercúrio. Com água, a coluna precisaria de cerca de 10 m, por causa da densidade muito menor.",
  },
  {
    materia: "fisica",
    tema: "Estática e hidrostática",
    dificuldade: "media",
    enunciado:
      "Ao usar uma chave de boca mais longa, torna-se mais fácil soltar um parafuso apertado porque:",
    opcoes: [
      "a força aplicada pela pessoa aumenta automaticamente.",
      "o atrito entre parafuso e rosca diminui.",
      "a massa da chave contribui diretamente para o torque.",
      "a pressão sobre a cabeça do parafuso diminui.",
      "o braço de alavanca maior aumenta o momento da força.",
    ],
    correta: 4,
    explicacao:
      "O momento é o produto da força pelo braço, então uma chave mais longa produz maior efeito de rotação com a mesma força. É o mesmo princípio dos pés de cabra e das maçanetas. Ferramentas com braço curto exigem força bem maior.",
  },
  {
    materia: "fisica",
    tema: "Estática e hidrostática",
    dificuldade: "dificil",
    enunciado:
      "Uma barra homogênea de 6 m está apoiada em dois suportes: um na extremidade esquerda e outro a 2 m dessa extremidade. Considerando que o peso atua no centro da barra, o sistema:",
    opcoes: [
      "está em equilíbrio, com cargas iguais nos dois apoios.",
      "só se equilibra se a barra for mais leve.",
      "independe da posição do centro de gravidade.",
      "só se equilibra se a barra for oca por dentro.",
      "não está em equilíbrio, pois o centro de gravidade fica fora do intervalo entre os apoios.",
    ],
    correta: 4,
    explicacao:
      "O centro de gravidade está a 3 m da extremidade esquerda, além do segundo apoio, situado a 2 m. Nessa configuração a barra tomba, girando em torno do apoio mais à direita. Para haver equilíbrio, o centro de gravidade precisa ficar entre os apoios.",
  },
  {
    materia: "fisica",
    tema: "Estática e hidrostática",
    dificuldade: "media",
    enunciado:
      "Um mesmo corpo é totalmente submerso primeiro em água e depois em óleo, cuja densidade é menor. Comparado ao empuxo em água, o empuxo em óleo será:",
    opcoes: [
      "maior",
      "igual",
      "nulo",
      "negativo",
      "menor",
    ],
    correta: 4,
    explicacao:
      "O empuxo é proporcional à densidade do fluido, e o óleo é menos denso que a água. Com o mesmo volume submerso, o empuxo é menor. Por isso é mais fácil flutuar em água salgada, mais densa, do que em água doce.",
  },
  {
    materia: "fisica",
    tema: "Estática e hidrostática",
    dificuldade: "media",
    enunciado:
      "O freio hidráulico de um automóvel funciona com base no princípio de Pascal porque, nesse sistema:",
    opcoes: [
      "a pressão aplicada no pedal é transmitida integralmente ao fluido e às rodas.",
      "o fluido perde pressão ao longo das tubulações.",
      "o empuxo do fluido move as pastilhas de freio.",
      "a densidade do fluido varia com a força aplicada.",
      "a pressão diminui com a distância percorrida pelo fluido.",
    ],
    correta: 0,
    explicacao:
      "A força no pedal gera pressão no fluido, que se transmite integralmente até os cilindros das rodas, onde áreas maiores produzem forças maiores. Bolhas de ar no sistema comprometem esse funcionamento, porque gases são compressíveis.",
  },
  {
    materia: "fisica",
    tema: "Estática e hidrostática",
    dificuldade: "media",
    enunciado:
      "Uma pessoa consegue boiar com muito mais facilidade no mar Morto do que em uma piscina. Isso acontece porque a água desse mar tem:",
    opcoes: [
      "temperatura significativamente mais elevada.",
      "pressão atmosférica reduzida sobre a superfície.",
      "profundidade média menor que a de uma piscina.",
      "volume total de água muito menor.",
      "densidade muito maior, por causa da alta concentração de sais.",
    ],
    correta: 4,
    explicacao:
      "A densidade elevada aumenta o empuxo para o mesmo volume submerso, o que reduz a fração do corpo que precisa ficar dentro da água. Com densidade próxima de 1 240 kg/m³, o mar Morto permite flutuar praticamente sem esforço.",
  },
  {
    materia: "fisica",
    tema: "Estática e hidrostática",
    dificuldade: "media",
    enunciado:
      "Uma força de 15 N é aplicada perpendicularmente a uma porta, a 40 cm do eixo das dobradiças. O momento produzido por essa força é de:",
    opcoes: [
      "0,6 N·m",
      "60 N·m",
      "600 N·m",
      "37,5 N·m",
      "6 N·m",
    ],
    correta: 4,
    explicacao:
      "Convertendo a distância para metros, tem-se 0,4 m, e o momento é 15 · 0,4 = 6 N·m. Aplicar a mesma força perto das dobradiças produziria momento muito menor, o que torna a porta difícil de abrir.",
  },
  {
    materia: "fisica",
    tema: "Estática e hidrostática",
    dificuldade: "dificil",
    enunciado:
      "Um corpo homogêneo tem 40% de seu volume emerso ao flutuar em um líquido de densidade 800 kg/m³. A densidade desse corpo é de:",
    opcoes: [
      "320 kg/m³",
      "400 kg/m³",
      "480 kg/m³",
      "560 kg/m³",
      "800 kg/m³",
    ],
    correta: 2,
    explicacao:
      "Se 40% está emerso, 60% está submerso. A densidade do corpo é 0,6 vezes a do líquido: 0,6 · 800 = 480 kg/m³. A razão entre densidades sempre corresponde à fração submersa em equilíbrio de flutuação.",
  },
  {
    materia: "fisica",
    tema: "Estática e hidrostática",
    dificuldade: "media",
    enunciado:
      "Tratores e veículos agrícolas usam pneus muito largos para trafegar em solo mole. A justificativa física para essa escolha é:",
    opcoes: [
      "aumentar a área de contato, reduzindo a pressão sobre o solo.",
      "aumentar o peso total do veículo sobre o terreno.",
      "reduzir a força normal aplicada pelo solo.",
      "elevar a densidade média do veículo.",
      "diminuir o atrito entre pneu e terreno.",
    ],
    correta: 0,
    explicacao:
      "Com o mesmo peso, uma área maior de contato reduz a pressão e evita que as rodas afundem. O mesmo raciocínio explica esquis, raquetes de neve e as patas largas de animais que caminham sobre areia.",
  },
  {
    materia: "fisica",
    tema: "Estática e hidrostática",
    dificuldade: "media",
    enunciado:
      "Sobre a diferença entre massa e densidade de um corpo, é correto afirmar que a densidade:",
    opcoes: [
      "expressa a quantidade total de matéria do corpo.",
      "é sempre igual à massa dividida pelo peso.",
      "aumenta quando o corpo é cortado ao meio.",
      "é medida em quilogramas no Sistema Internacional.",
      "relaciona a massa ao volume ocupado pelo corpo.",
    ],
    correta: 4,
    explicacao:
      "A densidade é uma propriedade do material, não da quantidade: cortar um bloco ao meio reduz massa e volume na mesma proporção, mantendo a densidade. É por isso que ela serve para identificar substâncias.",
  },
];
