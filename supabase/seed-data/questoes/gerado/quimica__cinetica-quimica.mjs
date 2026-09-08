/* Cinética química (50 questões).
   Velocidade de reação, fatores que a influenciam (concentração,
   temperatura, superfície de contato, catalisador), lei da velocidade,
   ordem de reação e energia de ativação.
   Ver quimica.mjs para o formato. */

export const questoes = [
  {
    materia: "quimica",
    tema: "Cinética química",
    dificuldade: "facil",
    enunciado:
      "A cinética química é o ramo da química que estuda a velocidade das reações e os fatores que a influenciam. A velocidade de uma reação química mede:",
    opcoes: [
      "a rapidez com que reagentes se transformam em produtos ao longo do tempo",
      "a quantidade total de produto formado ao final da reação",
      "a energia total liberada ou absorvida na reação",
      "o número de átomos presentes nos reagentes",
      "a massa molar dos produtos formados",
    ],
    correta: 0,
    explicacao:
      "A velocidade de reação expressa quanto reagente é consumido, ou quanto produto é formado, por unidade de tempo — é uma medida de rapidez, não de quantidade total. Uma reação pode formar muito produto, mas lentamente, ou pouco produto, rapidamente.",
  },
  {
    materia: "quimica",
    tema: "Cinética química",
    dificuldade: "facil",
    enunciado:
      "Um comprimido efervescente inteiro dissolve mais lentamente em água do que o mesmo comprimido triturado em pó. Esse fenômeno demonstra o efeito do seguinte fator sobre a velocidade de uma reação:",
    opcoes: [
      "superfície de contato",
      "temperatura",
      "concentração dos reagentes",
      "presença de catalisador",
      "pressão do sistema",
    ],
    correta: 0,
    explicacao:
      "Triturar o comprimido aumenta a área de contato entre o sólido e a água, expondo mais partículas à reação simultaneamente e acelerando o processo. É pelo mesmo motivo que a lenha em lascas finas queima mais rápido que uma tora inteira.",
  },
  {
    materia: "quimica",
    tema: "Cinética química",
    dificuldade: "facil",
    enunciado:
      "Alimentos se conservam por mais tempo quando guardados na geladeira, pois o frio retarda as reações químicas de decomposição. Esse comportamento ilustra o efeito da seguinte variável sobre a velocidade das reações:",
    opcoes: [
      "temperatura",
      "superfície de contato",
      "pressão do ambiente",
      "concentração de oxigênio apenas",
      "cor da luz incidente",
    ],
    correta: 0,
    explicacao:
      "Temperaturas mais baixas reduzem a energia cinética média das moléculas, diminuindo a frequência e a eficácia das colisões entre elas, o que retarda as reações de decomposição dos alimentos. É por isso que o congelamento conserva alimentos por muito mais tempo que a simples refrigeração.",
  },
  {
    materia: "quimica",
    tema: "Cinética química",
    dificuldade: "facil",
    enunciado:
      "Uma barra de ferro enferruja mais rapidamente em ambientes úmidos e com maior concentração de oxigênio no ar do que em ambientes secos. Esse comportamento demonstra que a velocidade de uma reação depende diretamente da:",
    opcoes: [
      "concentração dos reagentes envolvidos",
      "cor do metal reagente",
      "forma geométrica exclusiva da barra",
      "quantidade de luz solar recebida",
      "distância entre a barra e outros objetos",
    ],
    correta: 0,
    explicacao:
      "Quanto maior a concentração de um reagente, como o oxigênio dissolvido na umidade do ar, mais colisões efetivas ocorrem por unidade de tempo entre as partículas reagentes, acelerando a reação de oxidação do ferro. É por isso que ambientes costeiros, com maior salinidade e umidade, aceleram ainda mais a corrosão de estruturas metálicas.",
  },
  {
    materia: "quimica",
    tema: "Cinética química",
    dificuldade: "facil",
    enunciado:
      "Um catalisador é uma substância que acelera a velocidade de uma reação química sem ser consumida no processo. Ao final da reação, a quantidade de catalisador presente no sistema é:",
    opcoes: [
      "a mesma que havia no início, pois ele é regenerado",
      "totalmente consumida, como um reagente comum",
      "convertida em um novo produto da reação",
      "reduzida à metade da quantidade inicial",
      "aumentada, pois o catalisador se multiplica durante a reação",
    ],
    correta: 0,
    explicacao:
      "O catalisador participa do mecanismo da reação, oferecendo um caminho alternativo de menor energia, mas é regenerado ao final do processo e sua quantidade permanece inalterada. É essa característica que permite reutilizar a mesma pequena quantidade de catalisador em muitos ciclos reacionais.",
  },
  {
    materia: "quimica",
    tema: "Cinética química",
    dificuldade: "facil",
    enunciado:
      "A energia de ativação de uma reação química corresponde à energia mínima que as moléculas reagentes precisam ter no momento da colisão para que a reação ocorra. Reações com energia de ativação elevada tendem a ser:",
    opcoes: [
      "mais lentas, pois poucas colisões atingem a energia necessária",
      "mais rápidas, pois toda colisão já teria energia suficiente",
      "instantâneas, independentemente da temperatura",
      "impossíveis de ocorrer em qualquer condição",
      "exclusivamente exotérmicas",
    ],
    correta: 0,
    explicacao:
      "Quanto maior a barreira de energia de ativação, menor a fração de colisões moleculares com energia suficiente para ultrapassá-la, o que torna a reação mais lenta em uma dada temperatura. É justamente para reduzir essa barreira que os catalisadores são empregados, acelerando reações que de outra forma seriam muito lentas.",
  },
  {
    materia: "quimica",
    tema: "Cinética química",
    dificuldade: "facil",
    enunciado:
      "A panela de pressão cozinha alimentos mais rapidamente do que uma panela comum, pois a pressão elevada no interior faz a água ferver em temperatura mais alta que 100 °C. Esse aumento na velocidade do cozimento ilustra o efeito da:",
    opcoes: [
      "temperatura sobre a velocidade das reações químicas de cocção",
      "concentração de sal na água",
      "cor do recipiente utilizado",
      "quantidade de luz ambiente",
      "forma geométrica da panela",
    ],
    correta: 0,
    explicacao:
      "A temperatura mais alta atingida dentro da panela de pressão acelera as reações químicas envolvidas no amolecimento dos alimentos, reduzindo o tempo total de cozimento. Esse é um exemplo prático e cotidiano de como pequenos aumentos de temperatura podem acelerar consideravelmente processos químicos.",
  },
  {
    materia: "quimica",
    tema: "Cinética química",
    dificuldade: "facil",
    enunciado:
      "Segundo a teoria das colisões, para que uma reação química ocorra entre duas moléculas, é necessário que elas colidam com energia suficiente e também com:",
    opcoes: [
      "orientação geométrica adequada entre as partículas",
      "a mesma cor e o mesmo estado físico",
      "massa atômica idêntica",
      "carga elétrica nula obrigatoriamente",
      "temperatura exatamente igual a zero",
    ],
    correta: 0,
    explicacao:
      "Além de energia suficiente, as moléculas precisam colidir na orientação espacial correta para que as ligações se rearranjem adequadamente, formando os produtos; colisões com energia adequada mas orientação errada não resultam em reação efetiva. É essa exigência dupla — energia e geometria — que explica por que nem toda colisão molecular provoca uma reação.",
  },
  {
    materia: "quimica",
    tema: "Cinética química",
    dificuldade: "facil",
    enunciado:
      "Um pedaço de carvão em brasa aumenta drasticamente de intensidade quando se sopra ar sobre ele, fazendo a combustão ficar mais viva. Esse aumento de velocidade da reação de combustão está relacionado ao aumento da concentração de:",
    opcoes: [
      "gás oxigênio disponível para a reação",
      "gás carbônico ao redor do carvão",
      "vapor de água na atmosfera",
      "nitrogênio atmosférico",
      "fuligem produzida pela combustão",
    ],
    correta: 0,
    explicacao:
      "Soprar ar renova o suprimento de oxigênio próximo ao carvão, aumentando sua concentração local e, por consequência, a frequência de colisões efetivas entre o oxigênio e o carbono em brasa, intensificando a combustão. É por esse motivo que os foles eram usados historicamente para intensificar o fogo em forjas e fornalhas.",
  },
  {
    materia: "quimica",
    tema: "Cinética química",
    dificuldade: "facil",
    enunciado:
      "A enzima catalase, presente em células do fígado, acelera a decomposição do peróxido de hidrogênio em água e oxigênio. Enzimas como a catalase são exemplos biológicos de:",
    opcoes: [
      "catalisadores",
      "reagentes limitantes",
      "produtos de reação",
      "inibidores de reação",
      "solventes universais",
    ],
    correta: 0,
    explicacao:
      "Enzimas são catalisadores biológicos altamente específicos, que aceleram reações metabólicas essenciais à vida sem serem consumidas no processo. É por essa aceleração drástica que reações que levariam horas para ocorrer espontaneamente acontecem em frações de segundo dentro das células.",
  },
  {
    materia: "quimica",
    tema: "Cinética química",
    dificuldade: "media",
    enunciado:
      "Considere a reação genérica A + B → C, cuja lei de velocidade experimental é v = k[A]²[B]. Se a concentração de A for duplicada, mantendo B constante, a velocidade da reação será multiplicada por:",
    opcoes: [
      "2",
      "4",
      "8",
      "16",
      "1",
    ],
    correta: 1,
    explicacao:
      "Como a lei de velocidade tem expoente 2 para [A], dobrar essa concentração eleva a velocidade ao quadrado do fator de aumento: 2² = 4. É esse expoente, determinado experimentalmente e não pelos coeficientes da equação balanceada, que define a ordem da reação em relação a cada reagente.",
  },
  {
    materia: "quimica",
    tema: "Cinética química",
    dificuldade: "media",
    enunciado:
      "Para a reação A + B → C, com lei de velocidade v = k[A][B]², a ordem global da reação é de:",
    opcoes: [
      "2",
      "3",
      "1",
      "4",
      "0",
    ],
    correta: 1,
    explicacao:
      "A ordem global de uma reação é a soma dos expoentes de todos os reagentes na lei de velocidade: 1 (de A) + 2 (de B) = 3. Essa ordem global costuma ser determinada experimentalmente e não pode ser deduzida diretamente dos coeficientes estequiométricos da equação balanceada.",
  },
  {
    materia: "quimica",
    tema: "Cinética química",
    dificuldade: "media",
    enunciado:
      "Um estudo cinético mostra que, ao triplicar a concentração de um reagente X, mantendo os demais constantes, a velocidade da reação também triplica. Com base nesse resultado experimental, a ordem da reação em relação a X é:",
    opcoes: [
      "2",
      "1",
      "3",
      "0",
      "0,5",
    ],
    correta: 1,
    explicacao:
      "Quando a velocidade varia na mesma proporção da concentração, isto é, 3¹ = 3, a ordem em relação a esse reagente é 1, caracterizando uma reação de primeira ordem em X. Se a ordem fosse 2, triplicar a concentração multiplicaria a velocidade por 9, não por 3.",
  },
  {
    materia: "quimica",
    tema: "Cinética química",
    dificuldade: "media",
    enunciado:
      "Um estudo cinético mostra que, ao dobrar a concentração de um reagente Y, mantendo os demais constantes, a velocidade da reação não se altera. A ordem da reação em relação a Y, nesse caso, é:",
    opcoes: [
      "1",
      "0",
      "2",
      "3",
      "impossível de determinar",
    ],
    correta: 1,
    explicacao:
      "Quando a variação da concentração não afeta a velocidade da reação, a ordem em relação a esse reagente é zero, o que significa que ele não aparece na lei de velocidade, mesmo participando da equação química balanceada. Esse comportamento é comum quando o reagente está em grande excesso ou não participa da etapa lenta do mecanismo.",
  },
  {
    materia: "quimica",
    tema: "Cinética química",
    dificuldade: "media",
    enunciado:
      "Segundo a teoria das colisões, o aumento de temperatura acelera as reações químicas principalmente porque:",
    opcoes: [
      "reduz o número total de partículas presentes no sistema",
      "aumenta a energia cinética média das partículas, elevando a fração de colisões com energia suficiente",
      "diminui a energia de ativação necessária para a reação ocorrer",
      "transforma automaticamente os reagentes em produtos",
      "reduz a frequência de colisões entre as partículas",
    ],
    correta: 1,
    explicacao:
      "Com temperaturas mais altas, as partículas se movem mais rápido e colidem com mais energia e frequência, aumentando a proporção de colisões que superam a barreira de energia de ativação. A energia de ativação em si, uma propriedade da reação, não muda com a temperatura — o que muda é a fração de moléculas capazes de vencê-la.",
  },
  {
    materia: "quimica",
    tema: "Cinética química",
    dificuldade: "media",
    enunciado:
      "Um catalisador acelera uma reação química ao oferecer um caminho alternativo com energia de ativação menor. Comparando o mecanismo catalisado com o não catalisado, é correto afirmar que o catalisador:",
    opcoes: [
      "torna a reação mais exotérmica do que seria sem ele",
      "não altera o ΔH da reação, apenas a rapidez com que ela ocorre",
      "aumenta a quantidade de produto formado ao final da reação",
      "altera os reagentes e produtos envolvidos na reação",
      "sempre transforma uma reação endotérmica em exotérmica",
    ],
    correta: 1,
    explicacao:
      "O catalisador muda apenas o caminho cinético da reação, reduzindo a energia de ativação e acelerando o processo, mas não altera a diferença de energia entre reagentes e produtos, que é o que define o ΔH. A quantidade final de produto, determinada pela estequiometria e pelo equilíbrio termodinâmico, também permanece a mesma com ou sem catalisador.",
  },
  {
    materia: "quimica",
    tema: "Cinética química",
    dificuldade: "media",
    enunciado:
      "Um estudante compara a decomposição do peróxido de hidrogênio com e sem a presença de dióxido de manganês como catalisador. Com o catalisador, a reação libera bolhas de oxigênio muito mais rapidamente. Nesse experimento, o dióxido de manganês:",
    opcoes: [
      "é consumido completamente durante a reação",
      "permanece quimicamente inalterado ao final da reação",
      "se transforma em água ao final do processo",
      "atua como reagente limitante da reação",
      "reduz a quantidade total de oxigênio formada",
    ],
    correta: 1,
    explicacao:
      "Como catalisador, o dióxido de manganês participa do mecanismo da reação, mas é regenerado ao final, podendo ser recuperado por filtração e reutilizado em uma nova decomposição. A quantidade total de oxigênio liberada é determinada pela quantidade de peróxido de hidrogênio, não pelo catalisador.",
  },
  {
    materia: "quimica",
    tema: "Cinética química",
    dificuldade: "media",
    enunciado:
      "Um gráfico de energia potencial em função do caminho da reação mostra um pico entre os níveis de energia dos reagentes e dos produtos. Esse pico representa:",
    opcoes: [
      "o produto final da reação",
      "o complexo ativado, estado de maior energia durante a reação",
      "a energia total liberada pela reação",
      "o catalisador utilizado na reação",
      "o reagente limitante da reação",
    ],
    correta: 1,
    explicacao:
      "O complexo ativado, também chamado de estado de transição, é uma configuração instável e de energia máxima pela qual os reagentes passam antes de se transformarem em produtos, representando o topo da barreira de energia de ativação. Catalisadores atuam justamente reduzindo a altura desse pico, facilitando a passagem dos reagentes para os produtos.",
  },
  {
    materia: "quimica",
    tema: "Cinética química",
    dificuldade: "media",
    enunciado:
      "Um professor compara a velocidade de reação entre zinco em pó e zinco em barra, ambos reagindo com a mesma quantidade de ácido clorídrico de mesma concentração. A reação com o zinco em pó ocorre visivelmente mais rápido. Essa diferença de velocidade se deve ao fato de que o zinco em pó apresenta:",
    opcoes: [
      "menor quantidade de átomos de zinco disponíveis",
      "maior área superficial exposta ao ácido por unidade de massa",
      "maior massa molar que o zinco em barra",
      "menor reatividade química intrínseca",
      "temperatura de fusão mais baixa que a barra",
    ],
    correta: 1,
    explicacao:
      "Ao ser reduzido a pó, o zinco expõe uma superfície de contato muito maior ao ácido, permitindo que mais colisões efetivas ocorram simultaneamente entre as partículas reagentes, acelerando a reação. A quantidade de átomos de zinco e sua reatividade intrínseca não mudam com a forma física do metal, apenas a rapidez com que reagem.",
  },
  {
    materia: "quimica",
    tema: "Cinética química",
    dificuldade: "media",
    enunciado:
      "Uma regra empírica frequentemente citada em cinética química estabelece que, para muitas reações, um aumento de 10 °C na temperatura tende a dobrar ou triplicar a velocidade da reação. Essa observação prática está relacionada ao fato de que:",
    opcoes: [
      "a temperatura não tem relação alguma com a energia das moléculas",
      "pequenos aumentos de temperatura elevam significativamente a fração de moléculas com energia acima da energia de ativação",
      "a energia de ativação da reação aumenta proporcionalmente com a temperatura",
      "o número de moléculas reagentes dobra a cada 10 °C",
      "a reação se torna endotérmica acima de determinada temperatura",
    ],
    correta: 1,
    explicacao:
      "A distribuição de energias das moléculas em um sistema é bastante sensível a pequenas variações de temperatura, e mesmo um aumento modesto pode elevar consideravelmente a fração de partículas capazes de vencer a barreira de energia de ativação. Essa regra empírica ajuda a entender, por exemplo, por que pequenas variações climáticas afetam tanto a velocidade de processos biológicos e industriais.",
  },
  {
    materia: "quimica",
    tema: "Cinética química",
    dificuldade: "media",
    enunciado:
      "Em uma indústria de amônia, um catalisador de ferro é utilizado para acelerar a reação N₂(g) + 3 H₂(g) → 2 NH₃(g), que sem catalisador seria extremamente lenta à temperatura ambiente. A principal vantagem econômica de usar esse catalisador é:",
    opcoes: [
      "aumentar a quantidade teórica de amônia que pode ser formada",
      "eliminar completamente a necessidade de nitrogênio e hidrogênio como reagentes",
      "permitir obter a mesma quantidade de produto em menos tempo, ou usar temperaturas mais baixas mantendo boa velocidade",
      "transformar a reação de exotérmica em endotérmica",
      "tornar a reação completamente irreversível",
    ],
    correta: 2,
    explicacao:
      "O catalisador acelera a reação sem alterar a quantidade máxima de produto prevista pela estequiometria, permitindo à indústria produzir amônia em prazos viáveis, muitas vezes com menor gasto de energia para aquecer o sistema. Sem o catalisador, seria necessário elevar muito mais a temperatura para obter velocidade aceitável, encarecendo o processo.",
  },
  {
    materia: "quimica",
    tema: "Cinética química",
    dificuldade: "media",
    enunciado:
      "Um estudante representa graficamente a concentração de um reagente em função do tempo durante uma reação química. À medida que a reação avança, a inclinação da curva, que representa a velocidade instantânea, tende a:",
    opcoes: [
      "aumentar continuamente até o infinito",
      "permanecer sempre constante durante toda a reação",
      "diminuir, pois a concentração do reagente cai ao longo do tempo",
      "ser sempre positiva, já que a concentração do reagente aumenta",
      "não ter relação alguma com a concentração do reagente",
    ],
    correta: 2,
    explicacao:
      "Como a maioria das reações depende da concentração dos reagentes, a velocidade tende a diminuir conforme eles são consumidos ao longo do tempo, o que se traduz em uma curva cada vez menos inclinada no gráfico de concentração por tempo. É por isso que a velocidade média medida no início de uma reação costuma ser maior que a velocidade média medida perto do fim.",
  },
  {
    materia: "quimica",
    tema: "Cinética química",
    dificuldade: "dificil",
    enunciado:
      "Um estudo cinético da reação 2 A + B → C fornece os seguintes dados experimentais: quando [A] = 0,1 mol/L e [B] = 0,1 mol/L, v = 2 × 10⁻³ mol/(L·s); quando [A] = 0,2 mol/L e [B] = 0,1 mol/L, v = 8 × 10⁻³ mol/(L·s); quando [A] = 0,2 mol/L e [B] = 0,2 mol/L, v = 1,6 × 10⁻² mol/(L·s). A ordem da reação em relação a A e em relação a B são, respectivamente:",
    opcoes: [
      "1 e 2",
      "1 e 1",
      "2 e 1",
      "2 e 2",
      "0 e 1",
    ],
    correta: 2,
    explicacao:
      "Ao dobrar [A] mantendo [B] fixo, a velocidade quadruplica (de 2 para 8 × 10⁻³), indicando ordem 2 em relação a A; ao dobrar [B] mantendo [A] fixo, a velocidade dobra (de 8 para 16 × 10⁻³), indicando ordem 1 em relação a B. Comparar apenas os experimentos em que uma única concentração muda de cada vez é o que permite isolar o efeito de cada reagente separadamente.",
  },
  {
    materia: "quimica",
    tema: "Cinética química",
    dificuldade: "dificil",
    enunciado:
      "Usando os dados do estudo cinético da reação 2 A + B → C, com v = 2 × 10⁻³ mol/(L·s) quando [A] = 0,1 mol/L e [B] = 0,1 mol/L, e sabendo que a lei de velocidade é v = k[A]²[B], a constante de velocidade k dessa reação é de:",
    opcoes: [
      "0,2 L²/(mol²·s)",
      "20 L²/(mol²·s)",
      "2 L²/(mol²·s)",
      "0,02 L²/(mol²·s)",
      "200 L²/(mol²·s)",
    ],
    correta: 2,
    explicacao:
      "Substituindo os valores na lei de velocidade: 2 × 10⁻³ = k × (0,1)² × (0,1) = k × 0,001, logo k = 2 × 10⁻³ ÷ 10⁻³ = 2 L²/(mol²·s). A unidade da constante de velocidade varia conforme a ordem global da reação, o que exige atenção redobrada ao expressar o resultado final.",
  },
  {
    materia: "quimica",
    tema: "Cinética química",
    dificuldade: "dificil",
    enunciado:
      "Uma reação em duas etapas ocorre segundo o mecanismo: etapa 1 (lenta), A + B → X; etapa 2 (rápida), X + A → C. A lei de velocidade experimental dessa reação global, determinada pela etapa lenta (a etapa determinante da velocidade), é:",
    opcoes: [
      "v = k[A]²[B]",
      "v = k[A][B][C]",
      "v = k[A][B]",
      "v = k[X][A]",
      "v = k[C]",
    ],
    correta: 2,
    explicacao:
      "Em um mecanismo de múltiplas etapas, a lei de velocidade da reação global é determinada pela etapa lenta, que atua como um gargalo: aqui, a etapa lenta envolve A e B, então v = k[A][B]. A etapa rápida seguinte não aparece na lei de velocidade porque não limita a rapidez do processo como um todo.",
  },
  {
    materia: "quimica",
    tema: "Cinética química",
    dificuldade: "dificil",
    enunciado:
      "Um estudo mostra que a decomposição de um determinado composto segue cinética de primeira ordem, com meia-vida constante de 20 minutos, independentemente da concentração inicial. Partindo de uma concentração inicial de 80 mmol/L, a concentração restante após 60 minutos será de:",
    opcoes: [
      "20 mmol/L",
      "40 mmol/L",
      "10 mmol/L",
      "5 mmol/L",
      "60 mmol/L",
    ],
    correta: 2,
    explicacao:
      "Em 60 minutos cabem exatamente três meias-vidas de 20 minutos; a cada meia-vida a concentração cai pela metade: 80 → 40 → 20 → 10 mmol/L. Essa característica de meia-vida constante, independente da concentração inicial, é uma marca registrada das reações de primeira ordem, como o decaimento radioativo.",
  },
  {
    materia: "quimica",
    tema: "Cinética química",
    dificuldade: "dificil",
    enunciado:
      "Um pesquisador estuda a reação de decomposição do N₂O₅ e observa que ela segue cinética de primeira ordem em relação ao reagente, com lei de velocidade v = k[N₂O₅]. Se a concentração inicial for reduzida à metade, mantendo a temperatura constante, a velocidade inicial da reação será:",
    opcoes: [
      "reduzida a um quarto da velocidade original",
      "dobrada em relação à velocidade original",
      "reduzida à metade da velocidade original",
      "inalterada em relação à velocidade original",
      "quadruplicada em relação à velocidade original",
    ],
    correta: 2,
    explicacao:
      "Como a reação é de primeira ordem, a velocidade é diretamente proporcional à concentração do reagente: reduzir a concentração à metade reduz a velocidade também à metade. Essa proporcionalidade direta só vale para reações de primeira ordem; em ordens diferentes, a relação entre concentração e velocidade seguiria outra proporção.",
  },
  {
    materia: "quimica",
    tema: "Cinética química",
    dificuldade: "dificil",
    enunciado:
      "Um professor apresenta a seguinte afirmação: 'a ordem de uma reação em relação a um reagente é sempre igual ao seu coeficiente estequiométrico na equação balanceada'. Sobre essa afirmação, aplicada a reações que ocorrem em múltiplas etapas, é correto dizer que ela é:",
    opcoes: [
      "verdadeira sempre, sem exceções em qualquer tipo de reação",
      "verdadeira apenas para reações de decomposição",
      "falsa em geral, pois a ordem depende do mecanismo e só pode ser determinada experimentalmente",
      "falsa, pois a ordem de reação nunca coincide com o coeficiente estequiométrico",
      "verdadeira apenas quando o catalisador está ausente",
    ],
    correta: 2,
    explicacao:
      "A ordem de reação reflete como a etapa lenta do mecanismo depende das concentrações dos reagentes, e só coincide com os coeficientes estequiométricos em reações elementares de uma única etapa; para a maioria das reações reais, com múltiplas etapas, é preciso determinar a ordem experimentalmente. Essa é uma das razões pelas quais a cinética química depende fortemente de dados de laboratório, e não apenas da equação balanceada.",
  },
  {
    materia: "quimica",
    tema: "Cinética química",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa a reação entre magnésio metálico e ácido clorídrico em dois experimentos: no primeiro, usa ácido concentrado; no segundo, usa ácido diluído com a mesma massa de magnésio. A liberação de bolhas de gás hidrogênio é visivelmente mais rápida no experimento com ácido concentrado. Essa diferença de velocidade se deve à maior:",
    opcoes: [
      "massa molar do ácido clorídrico concentrado",
      "temperatura inicial do ácido concentrado",
      "concentração de íons H⁺ disponíveis para colidir com o magnésio",
      "quantidade de magnésio metálico disponível",
      "pressão atmosférica sobre o sistema reacional",
    ],
    correta: 2,
    explicacao:
      "O ácido mais concentrado tem mais íons H⁺ por unidade de volume, o que aumenta a frequência de colisões efetivas com a superfície do magnésio, acelerando a reação e a liberação de gás. A quantidade de magnésio, mantida igual nos dois experimentos, não é o fator que explica a diferença observada.",
  },
  {
    materia: "quimica",
    tema: "Cinética química",
    dificuldade: "media",
    enunciado:
      "Um pesquisador estuda a velocidade de deterioração de frutas em diferentes condições de armazenamento: à temperatura ambiente, sob refrigeração e em congelamento. Ordenando essas três condições da que preserva a fruta por mais tempo para a que preserva por menos tempo, tem-se:",
    opcoes: [
      "temperatura ambiente, refrigeração e congelamento",
      "refrigeração, temperatura ambiente e congelamento",
      "congelamento, refrigeração e temperatura ambiente",
      "as três condições preservam a fruta pelo mesmo tempo",
      "congelamento, temperatura ambiente e refrigeração",
    ],
    correta: 2,
    explicacao:
      "Quanto mais baixa a temperatura, mais lentas são as reações químicas e biológicas responsáveis pela deterioração dos alimentos, então o congelamento preserva por mais tempo, seguido da refrigeração, e a temperatura ambiente acelera mais a deterioração. Esse princípio cinético é a base de toda a cadeia de conservação de alimentos por frio.",
  },
  {
    materia: "quimica",
    tema: "Cinética química",
    dificuldade: "dificil",
    enunciado:
      "Uma reação de decomposição de segunda ordem em relação ao único reagente A segue a lei v = k[A]². Comparando essa reação com uma de primeira ordem, v = k[A], ambas com a mesma constante de velocidade numérica k e partindo da mesma concentração inicial de A, é correto afirmar que, para concentrações de A maiores que 1 mol/L:",
    opcoes: [
      "a reação de primeira ordem é sempre mais rápida, independentemente da concentração",
      "as duas reações têm exatamente a mesma velocidade",
      "a reação de segunda ordem é sempre mais lenta que a de primeira ordem",
      "a reação de segunda ordem é mais rápida que a de primeira ordem",
      "a comparação é impossível sem conhecer a temperatura",
    ],
    correta: 3,
    explicacao:
      "Para concentrações maiores que 1 mol/L, elevar a concentração ao quadrado resulta em um valor maior do que elevá-la à primeira potência, então a reação de segunda ordem se torna mais rápida nessa faixa. Abaixo de 1 mol/L ocorre o inverso, já que elevar um número menor que 1 ao quadrado o torna ainda menor — um detalhe que mostra como a ordem de reação afeta a sensibilidade da velocidade à concentração.",
  },
  {
    materia: "quimica",
    tema: "Cinética química",
    dificuldade: "facil",
    enunciado:
      "Um pedaço de fruta cortado ao meio escurece mais rápido quando exposto ao ar em um dia quente de verão do que quando guardado em um recipiente refrigerado. Esse escurecimento é uma reação química cuja velocidade é afetada principalmente pela:",
    opcoes: [
      "cor da fruta antes do corte",
      "forma geométrica do corte",
      "quantidade de água presente no ar",
      "temperatura do ambiente",
      "distância da fruta até uma janela",
    ],
    correta: 3,
    explicacao:
      "O escurecimento enzimático da fruta cortada é acelerado pelo calor, já que temperaturas mais altas aumentam a energia cinética das moléculas envolvidas na reação com o oxigênio do ar. É por isso que armazenar frutas cortadas na geladeira retarda visivelmente esse processo.",
  },
  {
    materia: "quimica",
    tema: "Cinética química",
    dificuldade: "facil",
    enunciado:
      "Um experimento de laboratório compara a velocidade de reação entre carbonato de cálcio em pedaços grandes e em pó, ambos reagindo com a mesma quantidade de ácido clorídrico de mesma concentração. É esperado que a reação com o carbonato em pó:",
    opcoes: [
      "ocorra mais lentamente, por apresentar menor superfície de contato",
      "ocorra na mesma velocidade, pois a massa total é igual",
      "não ocorra, pois o pó não reage com ácidos",
      "ocorra mais rapidamente, por apresentar maior superfície de contato",
      "libere menos gás carbônico que os pedaços grandes",
    ],
    correta: 3,
    explicacao:
      "Reduzir o sólido a pó aumenta enormemente a área de contato entre o carbonato e o ácido, permitindo mais colisões efetivas por unidade de tempo e acelerando a reação. A quantidade total de gás carbônico liberado, no entanto, depende apenas da massa de carbonato reagida, não da sua forma física.",
  },
  {
    materia: "quimica",
    tema: "Cinética química",
    dificuldade: "media",
    enunciado:
      "Um estudo cinético mostra que, ao quadruplicar a concentração de um reagente Z, mantendo os demais fatores constantes, a velocidade da reação também quadruplica. Com base nesse resultado, a ordem da reação em relação a Z é:",
    opcoes: [
      "2",
      "4",
      "0",
      "1",
      "0,5",
    ],
    correta: 3,
    explicacao:
      "Como a velocidade varia na mesma proporção da concentração (4¹ = 4), a ordem em relação a Z é 1, caracterizando uma dependência linear entre concentração e velocidade. Se a ordem fosse 2, quadruplicar a concentração multiplicaria a velocidade por 16, não por 4.",
  },
  {
    materia: "quimica",
    tema: "Cinética química",
    dificuldade: "media",
    enunciado:
      "Um professor demonstra que uma vela acesa dentro de um frasco fechado se apaga após alguns instantes, mesmo com bastante cera ainda disponível. Essa observação indica que a reação de combustão parou por causa da:",
    opcoes: [
      "diminuição da temperatura da chama ao longo do tempo",
      "aumento da concentração de cera disponível",
      "presença de um catalisador que inibiu a reação",
      "diminuição da concentração de oxigênio dentro do frasco fechado",
      "diminuição da massa molar do gás carbônico formado",
    ],
    correta: 3,
    explicacao:
      "Conforme o oxigênio dentro do frasco fechado é consumido pela combustão e não é reposto, sua concentração cai até não ser mais suficiente para sustentar a reação, apagando a chama mesmo havendo cera sobrando. Esse experimento simples ilustra como a concentração de um reagente pode se tornar o fator limitante da velocidade de reação ao longo do tempo.",
  },
  {
    materia: "quimica",
    tema: "Cinética química",
    dificuldade: "media",
    enunciado:
      "Um técnico de laboratório mede a velocidade inicial de uma reação em quatro temperaturas diferentes e observa que a velocidade aumenta de forma acentuada, e não linear, conforme a temperatura sobe. Esse comportamento não linear da velocidade em função da temperatura está relacionado ao fato de que:",
    opcoes: [
      "a energia de ativação da reação diminui exponencialmente com a temperatura",
      "o número de moléculas no sistema aumenta exponencialmente com o calor",
      "a reação muda de mecanismo a cada grau de temperatura",
      "a fração de moléculas com energia acima da energia de ativação cresce exponencialmente com a temperatura",
      "a pressão do sistema cai proporcionalmente à temperatura",
    ],
    correta: 3,
    explicacao:
      "A distribuição de energias das moléculas segue um comportamento no qual pequenos aumentos de temperatura elevam de forma desproporcional a fração de partículas com energia suficiente para reagir, resultando em um crescimento acentuado, e não linear, da velocidade. Esse comportamento é descrito de forma mais precisa pela equação de Arrhenius, que relaciona a constante de velocidade à temperatura de forma exponencial.",
  },
  {
    materia: "quimica",
    tema: "Cinética química",
    dificuldade: "media",
    enunciado:
      "Um estudante compara a decomposição do peróxido de hidrogênio em dois frascos idênticos: no primeiro, adiciona-se batata crua picada, rica na enzima catalase; no segundo, mantém-se o peróxido sem qualquer adição. A liberação de bolhas de oxigênio é visivelmente mais rápida no frasco com batata. Esse resultado demonstra que a catalase atua como:",
    opcoes: [
      "um reagente que se transforma em produto durante a reação",
      "um inibidor, retardando a decomposição do peróxido",
      "um solvente que dilui o peróxido de hidrogênio",
      "um catalisador biológico, reduzindo a energia de ativação da decomposição",
      "um produto secundário formado ao final da reação",
    ],
    correta: 3,
    explicacao:
      "A catalase acelera drasticamente a decomposição do peróxido de hidrogênio ao oferecer um caminho de menor energia de ativação, sem ser consumida no processo, o que caracteriza sua função como catalisador biológico. Esse experimento clássico com batata é usado em salas de aula justamente para visualizar de forma simples o efeito de um catalisador.",
  },
  {
    materia: "quimica",
    tema: "Cinética química",
    dificuldade: "media",
    enunciado:
      "Uma reação química é acompanhada em laboratório, e observa-se que sua velocidade inicial é maior que a velocidade medida após alguns minutos de reação, mesmo em temperatura constante. Essa redução de velocidade ao longo do tempo, na ausência de mudança de temperatura, se explica principalmente pela:",
    opcoes: [
      "diminuição da energia de ativação da reação com o tempo",
      "formação de um catalisador durante a própria reação",
      "diminuição da massa molar dos reagentes ao longo do tempo",
      "diminuição da concentração dos reagentes conforme eles são consumidos",
      "mudança espontânea no mecanismo da reação a cada minuto",
    ],
    correta: 3,
    explicacao:
      "À medida que a reação avança, os reagentes vão sendo consumidos e sua concentração cai, reduzindo a frequência de colisões efetivas entre as partículas e, consequentemente, a velocidade da reação, mesmo sem qualquer mudança de temperatura. É por isso que a velocidade instantânea de uma reação típica tende a diminuir ao longo do tempo, aproximando-se de zero quando os reagentes se esgotam.",
  },
  {
    materia: "quimica",
    tema: "Cinética química",
    dificuldade: "media",
    enunciado:
      "Um inibidor de reação é uma substância que retarda a velocidade de uma reação química, ao contrário do catalisador, que a acelera. Um exemplo prático de uso de inibidores no cotidiano é a adição de conservantes a alimentos industrializados, cuja função é:",
    opcoes: [
      "acelerar a decomposição do alimento para facilitar a digestão",
      "aumentar a energia de ativação das reações nutritivas do corpo",
      "transformar o alimento em uma substância radioativa",
      "retardar as reações químicas de deterioração, aumentando a validade do produto",
      "eliminar completamente qualquer reação química no alimento",
    ],
    correta: 3,
    explicacao:
      "Os conservantes atuam retardando reações químicas e biológicas de deterioração, como a oxidação de gorduras e a proliferação de micro-organismos, o que prolonga a validade do alimento nas prateleiras. Diferentemente de eliminar toda reação química, o que tornaria o alimento inerte, os conservantes apenas desaceleram os processos indesejados.",
  },
  {
    materia: "quimica",
    tema: "Cinética química",
    dificuldade: "dificil",
    enunciado:
      "Um estudo cinético da reação A + 2 B → C fornece os seguintes dados: quando [A] = 0,2 mol/L e [B] = 0,2 mol/L, v = 4 × 10⁻³ mol/(L·s); quando [A] = 0,4 mol/L e [B] = 0,2 mol/L, v = 4 × 10⁻³ mol/(L·s); quando [A] = 0,2 mol/L e [B] = 0,4 mol/L, v = 1,6 × 10⁻² mol/(L·s). A lei de velocidade dessa reação é:",
    opcoes: [
      "v = k[A][B]²",
      "v = k[A]²[B]",
      "v = k[A][B]",
      "v = k[B]²",
      "v = k[A]²[B]²",
    ],
    correta: 3,
    explicacao:
      "Dobrar [A] mantendo [B] fixo não altera a velocidade, indicando ordem zero em relação a A (ele não aparece na lei); dobrar [B] mantendo [A] fixo quadruplica a velocidade (de 4 para 16 × 10⁻³), indicando ordem 2 em relação a B. A lei de velocidade resultante, v = k[B]², depende apenas de B — um lembrete de que nem todo reagente presente na equação balanceada aparece na lei de velocidade experimental.",
  },
  {
    materia: "quimica",
    tema: "Cinética química",
    dificuldade: "dificil",
    enunciado:
      "Uma reação de primeira ordem tem constante de velocidade k = 0,1 min⁻¹. Sabendo que a meia-vida de uma reação de primeira ordem é dada por t½ = 0,693/k, a meia-vida dessa reação é de aproximadamente:",
    opcoes: [
      "0,0693 minutos",
      "69,3 minutos",
      "0,693 minutos",
      "10 minutos",
      "6,93 minutos",
    ],
    correta: 4,
    explicacao:
      "Aplicando a fórmula: t½ = 0,693 ÷ 0,1 = 6,93 minutos. Esse tipo de relação inversa entre constante de velocidade e meia-vida também é usado no estudo do decaimento radioativo, que segue a mesma cinética de primeira ordem.",
  },
  {
    materia: "quimica",
    tema: "Cinética química",
    dificuldade: "dificil",
    enunciado:
      "Um pesquisador observa que uma reação em fase gasosa, quando realizada sob pressão elevada, ocorre mais rapidamente do que a mesma reação em pressão baixa, mantendo a temperatura constante. Essa aceleração ocorre porque o aumento de pressão, ao comprimir o volume do sistema:",
    opcoes: [
      "diminui a energia de ativação da reação",
      "reduz o número de moléculas presentes no sistema",
      "transforma os reagentes gasosos em líquidos automaticamente",
      "não tem qualquer relação com a velocidade da reação",
      "aumenta a concentração efetiva dos gases reagentes, elevando a frequência de colisões",
    ],
    correta: 4,
    explicacao:
      "Comprimir um gás em um volume menor aumenta sua concentração (mais partículas por unidade de volume), o que eleva a frequência de colisões entre as moléculas reagentes e, consequentemente, a velocidade da reação. Esse é o motivo pelo qual reatores industriais que envolvem gases costumam operar sob pressões elevadas, quando o custo compensa o ganho de velocidade.",
  },
  {
    materia: "quimica",
    tema: "Cinética química",
    dificuldade: "dificil",
    enunciado:
      "Um catalisador heterogêneo, como a platina usada nos conversores catalíticos de automóveis, atua em uma fase física diferente da dos reagentes gasosos, adsorvendo as moléculas em sua superfície sólida. Comparado a um catalisador homogêneo, que está na mesma fase dos reagentes, o catalisador heterogêneo apresenta como vantagem prática:",
    opcoes: [
      "a impossibilidade de ser reutilizado em novos ciclos reacionais",
      "a necessidade de ser consumido totalmente durante a reação",
      "a incapacidade de reduzir a energia de ativação da reação",
      "a exigência de estar sempre no estado gasoso",
      "a facilidade de ser separado dos produtos ao final do processo, já que está em fase diferente",
    ],
    correta: 4,
    explicacao:
      "Por estar em uma fase diferente da dos reagentes e produtos (geralmente sólido em contato com gases ou líquidos), o catalisador heterogêneo é facilmente separado ao final do processo, o que simplifica sua recuperação e reutilização em escala industrial. É por essa praticidade que catalisadores heterogêneos, como o próprio conversor catalítico automotivo, são amplamente preferidos em processos contínuos.",
  },
  {
    materia: "quimica",
    tema: "Cinética química",
    dificuldade: "media",
    enunciado:
      "Um professor realiza um experimento em que duas amostras idênticas de mármore (carbonato de cálcio) reagem com ácido clorídrico de mesma concentração, mas uma delas é aquecida antes da reação. A amostra aquecida reage visivelmente mais rápido. Esse resultado experimental confirma que a velocidade de uma reação:",
    opcoes: [
      "independe totalmente da temperatura envolvida",
      "diminui sempre que a temperatura é elevada",
      "depende apenas da concentração do ácido, nunca da temperatura",
      "só é afetada pela temperatura em reações endotérmicas",
      "aumenta com a elevação da temperatura do sistema reacional",
    ],
    correta: 4,
    explicacao:
      "O aquecimento prévio da amostra de mármore eleva a energia cinética das partículas na superfície do sólido, aumentando a frequência e a eficácia das colisões com o ácido assim que a reação começa, o que acelera visivelmente o processo. Esse é um dos experimentos mais diretos para demonstrar em sala de aula o efeito da temperatura sobre a velocidade de reação.",
  },
  {
    materia: "quimica",
    tema: "Cinética química",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa um gráfico de energia em função do progresso de uma reação exotérmica catalisada e não catalisada, ambos representados na mesma figura. Em relação à curva não catalisada, a curva catalisada apresenta:",
    opcoes: [
      "um pico de energia de ativação mais alto, com produtos de menor energia",
      "os mesmos picos de energia de ativação, mas produtos de energia diferente",
      "reagentes de energia mais alta e produtos de energia mais baixa",
      "nenhuma diferença visível entre as duas curvas",
      "um pico de energia de ativação mais baixo, mas os mesmos níveis de energia para reagentes e produtos",
    ],
    correta: 4,
    explicacao:
      "O catalisador reduz exclusivamente a altura do pico de energia de ativação, criando um caminho alternativo mais acessível, mas os níveis de energia dos reagentes e dos produtos, que definem o ΔH da reação, permanecem exatamente os mesmos nas duas curvas. É esse detalhe que costuma ser mal interpretado: o catalisador muda a cinética, não a termodinâmica da reação.",
  },
  {
    materia: "quimica",
    tema: "Cinética química",
    dificuldade: "media",
    enunciado:
      "Um técnico de laboratório precisa acelerar uma reação em fase líquida sem alterar a temperatura nem a concentração dos reagentes disponíveis. Uma estratégia eficaz para aumentar a velocidade da reação nessas condições é:",
    opcoes: [
      "reduzir o volume do recipiente sem adicionar mais reagente",
      "diminuir a agitação do sistema reacional",
      "aumentar a pressão atmosférica sobre o líquido",
      "resfriar lentamente o sistema reacional",
      "adicionar um catalisador adequado à reação",
    ],
    correta: 4,
    explicacao:
      "Como o técnico não pode alterar temperatura nem concentração, a adição de um catalisador é a estratégia disponível para acelerar a reação, já que ele oferece um caminho de menor energia de ativação sem depender desses dois fatores. Reduzir o volume sem adicionar reagente e alterar a pressão sobre um líquido, diferentemente de um gás, têm efeito muito menor sobre a velocidade de reações em fase líquida.",
  },
  {
    materia: "quimica",
    tema: "Cinética química",
    dificuldade: "dificil",
    enunciado:
      "Um estudo cinético de uma reação de ordem zero mostra que sua velocidade permanece constante ao longo de todo o experimento, independentemente da concentração do reagente. Esse comportamento é típico de reações cuja etapa determinante da velocidade ocorre:",
    opcoes: [
      "em fase gasosa, sem qualquer catalisador envolvido",
      "exclusivamente entre duas moléculas idênticas",
      "apenas em temperaturas próximas de zero absoluto",
      "sem qualquer interação entre as partículas reagentes",
      "na superfície limitada de um catalisador sólido saturado de reagente",
    ],
    correta: 4,
    explicacao:
      "Quando um catalisador sólido tem sua superfície completamente saturada de moléculas de reagente adsorvidas, a velocidade passa a depender apenas da capacidade limitada da superfície de processar essas moléculas, tornando-se independente de novas moléculas de reagente em solução — daí a ordem zero observada. Esse comportamento é comum em catálise heterogênea industrial, quando o reagente está em grande excesso frente aos sítios catalíticos disponíveis.",
  },
  {
    materia: "quimica",
    tema: "Cinética química",
    dificuldade: "facil",
    enunciado:
      "Ao guardar um refrigerante aberto na geladeira em vez de deixá-lo em temperatura ambiente, ele perde o gás carbônico dissolvido mais lentamente. Esse comportamento está relacionado ao efeito da temperatura sobre a velocidade de escape do gás, que segue o mesmo princípio geral de que reações e processos físicos tendem a:",
    opcoes: [
      "ocorrer sempre na mesma velocidade, independentemente da temperatura",
      "ocorrer mais rapidamente em temperaturas mais baixas",
      "parar completamente em qualquer temperatura abaixo de 25 °C",
      "inverter de sentido quando resfriados",
      "ocorrer mais lentamente em temperaturas mais baixas",
    ],
    correta: 4,
    explicacao:
      "Tanto reações químicas quanto processos físicos, como a liberação de um gás dissolvido, são retardados por temperaturas mais baixas, já que a energia cinética das partículas envolvidas diminui. É esse mesmo princípio geral que explica por que a geladeira retarda tanto o escape de gás de um refrigerante quanto a decomposição de alimentos.",
  },
  {
    materia: "quimica",
    tema: "Cinética química",
    dificuldade: "media",
    enunciado:
      "Um estudante realiza dois experimentos de decomposição do peróxido de hidrogênio, ambos com a mesma concentração de peróxido e a mesma temperatura, mas em um deles adiciona um catalisador. Comparando a quantidade final de gás oxigênio produzida ao término de cada reação, é esperado que:",
    opcoes: [
      "o experimento com catalisador produza mais oxigênio no total",
      "o experimento sem catalisador produza mais oxigênio no total",
      "o experimento com catalisador não produza oxigênio algum",
      "a quantidade de oxigênio dependa exclusivamente do catalisador usado",
      "as duas produzam a mesma quantidade final de oxigênio, diferindo apenas no tempo necessário",
    ],
    correta: 4,
    explicacao:
      "Como o catalisador não altera a quantidade de reagente disponível nem a estequiometria da reação, a quantidade total de oxigênio formada ao final é a mesma nos dois casos; a diferença está apenas no tempo necessário para que a reação se complete, muito mais curto na presença do catalisador. Esse é um ponto frequentemente confundido: catalisadores mudam a velocidade, não o resultado final da reação.",
  },
  {
    materia: "quimica",
    tema: "Cinética química",
    dificuldade: "media",
    enunciado:
      "Um estudante compara a velocidade de reação entre um comprimido efervescente inteiro e o mesmo comprimido triturado em pó, ambos colocados em copos idênticos com a mesma quantidade de água à mesma temperatura. É esperado que o comprimido triturado reaja:",
    opcoes: [
      "mais lentamente, pois o pó dificulta o contato com a água",
      "na mesma velocidade, já que a massa total é igual em ambos os casos",
      "de forma imprevisível, sem relação com o estado de divisão do sólido",
      "apenas se a água estiver em temperatura muito mais alta",
      "mais rapidamente, devido à maior área de superfície de contato exposta à água",
    ],
    correta: 4,
    explicacao:
      "Triturar o comprimido aumenta drasticamente a área de superfície exposta ao solvente, permitindo mais pontos de contato simultâneos entre os reagentes e, portanto, uma reação mais rápida. Esse é o mesmo princípio que explica por que lenha em pedaços pequenos queima mais depressa que uma tora inteira.",
  },
];
