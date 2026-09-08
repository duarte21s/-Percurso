/* Termoquímica (50 questões).
   Reações exotérmicas e endotérmicas, entalpia, lei de Hess, energia de
   ligação, diagramas de entalpia e calor de combustão.
   Ver quimica.mjs para o formato. */

export const questoes = [
  {
    materia: "quimica",
    tema: "Termoquímica",
    dificuldade: "facil",
    enunciado:
      "A entalpia de uma reação química, representada pela letra H, mede o conteúdo energético de um sistema a pressão constante. Uma reação em que a entalpia dos produtos é menor que a dos reagentes libera energia para o ambiente e é classificada como:",
    opcoes: [
      "exotérmica",
      "endotérmica",
      "isotérmica",
      "isobárica neutra",
      "adiabática",
    ],
    correta: 0,
    explicacao:
      "Quando os produtos armazenam menos energia que os reagentes, a diferença é liberada para o ambiente, geralmente como calor, caracterizando uma reação exotérmica. Nas reações endotérmicas ocorre o oposto: os produtos têm entalpia maior, e a energia extra é absorvida do ambiente.",
  },
  {
    materia: "quimica",
    tema: "Termoquímica",
    dificuldade: "facil",
    enunciado:
      "A variação de entalpia de uma reação é calculada pela diferença entre a entalpia dos produtos e a entalpia dos reagentes, ΔH = H(produtos) − H(reagentes). Em uma reação exotérmica, o valor de ΔH é:",
    opcoes: [
      "negativo",
      "positivo",
      "sempre igual a zero",
      "indefinido, sem sinal possível",
      "igual à temperatura ambiente",
    ],
    correta: 0,
    explicacao:
      "Como a entalpia dos produtos é menor que a dos reagentes em uma reação exotérmica, a diferença resulta em um valor negativo de ΔH. Nas reações endotérmicas, ao contrário, os produtos têm entalpia maior, e o ΔH é positivo.",
  },
  {
    materia: "quimica",
    tema: "Termoquímica",
    dificuldade: "facil",
    enunciado:
      "A queima de gás natural em um fogão libera calor, que é usado para cozinhar os alimentos. Do ponto de vista termoquímico, essa reação apresenta:",
    opcoes: [
      "ΔH negativo, por ser exotérmica",
      "ΔH positivo, por ser endotérmica",
      "ΔH igual a zero, por ser neutra",
      "ΔH indefinido, por envolver gás",
      "ΔH variável, dependendo apenas da pressão",
    ],
    correta: 0,
    explicacao:
      "A combustão libera energia para o ambiente na forma de calor e luz, caracterizando uma reação exotérmica, com entalpia dos produtos menor que a dos reagentes e ΔH negativo. Praticamente todas as reações de combustão seguem esse padrão exotérmico.",
  },
  {
    materia: "quimica",
    tema: "Termoquímica",
    dificuldade: "facil",
    enunciado:
      "A fotossíntese realizada pelas plantas absorve energia luminosa do Sol para converter gás carbônico e água em glicose e oxigênio. Essa reação, por absorver energia do ambiente, é classificada como:",
    opcoes: [
      "endotérmica, com ΔH positivo",
      "exotérmica, com ΔH negativo",
      "isotérmica, sem variação de entalpia",
      "nuclear, com liberação de radiação",
      "catalítica, sem qualquer variação de energia",
    ],
    correta: 0,
    explicacao:
      "Como a glicose formada armazena mais energia química que os reagentes iniciais, a fotossíntese absorve energia do ambiente (a luz solar), caracterizando uma reação endotérmica com ΔH positivo. É essa energia armazenada na glicose que será liberada depois, na respiração celular, um processo exotérmico complementar.",
  },
  {
    materia: "quimica",
    tema: "Termoquímica",
    dificuldade: "facil",
    enunciado:
      "A entalpia padrão de formação de uma substância simples, no seu estado mais estável e em condições padrão, é convencionalmente definida como:",
    opcoes: [
      "zero",
      "igual à sua massa molar",
      "sempre positiva",
      "sempre negativa",
      "igual à entalpia de combustão",
    ],
    correta: 0,
    explicacao:
      "Por convenção termoquímica, substâncias simples em sua forma mais estável, como O₂ gasoso, C grafite e H₂ gasoso, têm entalpia de formação igual a zero, servindo como referência para calcular a entalpia de formação de compostos. Esse ponto de referência é o que permite comparar diferentes substâncias em uma mesma escala.",
  },
  {
    materia: "quimica",
    tema: "Termoquímica",
    dificuldade: "facil",
    enunciado:
      "Um diagrama de entalpia representa, no eixo vertical, o conteúdo energético dos reagentes e dos produtos de uma reação. Em uma reação exotérmica, esse diagrama mostra:",
    opcoes: [
      "os reagentes em um nível de energia mais alto que os produtos",
      "os reagentes em um nível de energia mais baixo que os produtos",
      "reagentes e produtos exatamente no mesmo nível de energia",
      "apenas os produtos representados no diagrama",
      "uma linha reta sem variação de altura",
    ],
    correta: 0,
    explicacao:
      "Como a reação exotérmica libera energia, os produtos terminam em um patamar de energia mais baixo que o dos reagentes no diagrama, e a seta que representa o ΔH aponta para baixo. Em uma reação endotérmica, o diagrama se inverte: os produtos ficam acima dos reagentes.",
  },
  {
    materia: "quimica",
    tema: "Termoquímica",
    dificuldade: "facil",
    enunciado:
      "A entalpia de combustão de uma substância corresponde à energia liberada quando um mol dessa substância é completamente queimado na presença de oxigênio. Essa grandeza é sempre, por definição, um valor:",
    opcoes: [
      "negativo, pois a combustão é uma reação exotérmica",
      "positivo, pois a combustão absorve energia",
      "nulo, independentemente do combustível",
      "igual à entalpia de formação da água",
      "variável entre positivo e negativo conforme o combustível",
    ],
    correta: 0,
    explicacao:
      "Toda reação de combustão libera energia para o ambiente, sendo por definição exotérmica, e por isso a entalpia de combustão é sempre um valor negativo na convenção termoquímica usual. Esse valor costuma ser tabelado para comparar a eficiência energética de diferentes combustíveis.",
  },
  {
    materia: "quimica",
    tema: "Termoquímica",
    dificuldade: "facil",
    enunciado:
      "Uma bolsa térmica reutilizável, usada para aquecer partes do corpo em dias frios, libera calor ao ser ativada por um pequeno disco metálico que provoca a cristalização de uma solução supersaturada de acetato de sódio. Esse processo de cristalização, por liberar calor, é classificado como:",
    opcoes: [
      "exotérmico",
      "endotérmico",
      "isotérmico",
      "nuclear",
      "catalítico puro",
    ],
    correta: 0,
    explicacao:
      "A liberação de calor durante a cristalização caracteriza um processo exotérmico, no qual a energia armazenada na solução supersaturada é devolvida ao ambiente conforme o sólido se organiza em cristais. É esse princípio termoquímico que torna a bolsa térmica reutilizável, bastando fervê-la depois para redissolver o sal.",
  },
  {
    materia: "quimica",
    tema: "Termoquímica",
    dificuldade: "facil",
    enunciado:
      "A lei de Hess estabelece que a variação de entalpia de uma reação química depende apenas dos estados inicial e final do sistema, sendo independente do:",
    opcoes: [
      "caminho ou número de etapas percorridas entre reagentes e produtos",
      "tipo de reagentes envolvidos na reação",
      "estado físico dos produtos formados",
      "valor da entalpia de formação dos reagentes",
      "número de mols de cada substância envolvida",
    ],
    correta: 0,
    explicacao:
      "A entalpia é uma função de estado, o que significa que seu valor depende só de onde o sistema começa e onde termina, não do percurso seguido — daí ser possível somar ou subtrair equações intermediárias para obter o ΔH de uma reação global. É esse princípio que permite calcular entalpias de reações difíceis de medir diretamente em laboratório.",
  },
  {
    materia: "quimica",
    tema: "Termoquímica",
    dificuldade: "facil",
    enunciado:
      "A energia de ligação corresponde à energia necessária para romper um mol de determinada ligação química no estado gasoso. Romper uma ligação química é sempre um processo que:",
    opcoes: [
      "absorve energia, sendo endotérmico",
      "libera energia, sendo exotérmico",
      "não envolve troca de energia",
      "libera energia apenas em ligações iônicas",
      "absorve energia apenas em ligações covalentes duplas",
    ],
    correta: 0,
    explicacao:
      "Quebrar uma ligação exige fornecer energia para separar os átomos, o que caracteriza um processo endotérmico, independentemente do tipo de ligação envolvida. O processo inverso, formar uma ligação a partir de átomos separados, libera energia e é exotérmico.",
  },
  {
    materia: "quimica",
    tema: "Termoquímica",
    dificuldade: "media",
    enunciado:
      "Considere a reação de combustão do metano: CH₄(g) + 2 O₂(g) → CO₂(g) + 2 H₂O(l), com ΔH = −890 kJ/mol. A queima completa de 2 mols de metano libera uma quantidade de energia igual a:",
    opcoes: [
      "890 kJ",
      "1780 kJ",
      "445 kJ",
      "2670 kJ",
      "1335 kJ",
    ],
    correta: 1,
    explicacao:
      "Como o ΔH tabelado se refere a 1 mol de metano, para 2 mols basta multiplicar: 890 × 2 = 1780 kJ liberados. A entalpia de reação é proporcional à quantidade de matéria envolvida, então dobrar os reagentes dobra a energia trocada.",
  },
  {
    materia: "quimica",
    tema: "Termoquímica",
    dificuldade: "media",
    enunciado:
      "A reação de formação da água líquida a partir de seus elementos, H₂(g) + ½ O₂(g) → H₂O(l), tem ΔH = −286 kJ/mol. Esse valor de entalpia corresponde à:",
    opcoes: [
      "entalpia de combustão do hidrogênio no estado gasoso",
      "entalpia padrão de formação da água líquida",
      "energia de ligação da molécula de água",
      "entalpia de vaporização da água",
      "entalpia de neutralização de um ácido",
    ],
    correta: 1,
    explicacao:
      "Como a reação parte de substâncias simples em seus estados mais estáveis (H₂ e O₂ gasosos) e forma um mol do composto água líquida, o ΔH dessa reação é, por definição, a entalpia padrão de formação da água. Esse tipo de reação, elementos simples formando um composto, é o que caracteriza uma entalpia de formação.",
  },
  {
    materia: "quimica",
    tema: "Termoquímica",
    dificuldade: "media",
    enunciado:
      "Uma reação apresenta as seguintes etapas, com seus respectivos ΔH: etapa 1, A → B, ΔH₁ = +50 kJ/mol; etapa 2, B → C, ΔH₂ = −80 kJ/mol. Aplicando a lei de Hess, o ΔH da reação global A → C é de:",
    opcoes: [
      "+30 kJ/mol",
      "−30 kJ/mol",
      "+130 kJ/mol",
      "−130 kJ/mol",
      "0 kJ/mol",
    ],
    correta: 1,
    explicacao:
      "Como as etapas se somam diretamente para formar a reação global, o ΔH total é a soma algébrica das etapas: (+50) + (−80) = −30 kJ/mol. É esse princípio de soma direta, respeitando os sinais, que permite calcular entalpias de reações compostas por múltiplas etapas conhecidas.",
  },
  {
    materia: "quimica",
    tema: "Termoquímica",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa duas reações: a neutralização entre ácido clorídrico e hidróxido de sódio, que aquece o recipiente, e a dissolução de nitrato de amônio em água, que esfria o recipiente. Essas duas reações são classificadas, respectivamente, como:",
    opcoes: [
      "endotérmica e exotérmica",
      "exotérmica e endotérmica",
      "exotérmica e exotérmica",
      "endotérmica e endotérmica",
      "neutra e exotérmica",
    ],
    correta: 1,
    explicacao:
      "O aquecimento do recipiente na neutralização indica liberação de calor, caracterizando uma reação exotérmica; o resfriamento na dissolução do nitrato de amônio indica absorção de calor do ambiente, caracterizando uma reação endotérmica. É esse contraste de sensação térmica que costuma ser usado para identificar o tipo de processo em experimentos simples de laboratório.",
  },
  {
    materia: "quimica",
    tema: "Termoquímica",
    dificuldade: "media",
    enunciado:
      "Considerando as entalpias de formação do CO₂(g) (−394 kJ/mol) e da H₂O(l) (−286 kJ/mol), e sabendo que a entalpia de formação de substâncias simples é zero, o ΔH da reação de combustão do metano, CH₄(g) + 2 O₂(g) → CO₂(g) + 2 H₂O(l), pode ser calculado pela fórmula:",
    opcoes: [
      "ΔH = [entalpia de formação dos reagentes] − [entalpia de formação dos produtos]",
      "ΔH = [entalpia de formação dos produtos] − [entalpia de formação dos reagentes]",
      "ΔH = [entalpia de formação dos produtos] + [entalpia de formação dos reagentes]",
      "ΔH = [entalpia de formação dos reagentes] × [entalpia de formação dos produtos]",
      "ΔH = [entalpia de combustão] ÷ [entalpia de formação]",
    ],
    correta: 1,
    explicacao:
      "A fórmula geral da lei de Hess aplicada a entalpias de formação subtrai a soma das entalpias dos reagentes da soma das entalpias dos produtos, cada uma multiplicada pelo respectivo coeficiente estequiométrico. É essa fórmula que permite calcular o ΔH de qualquer reação a partir de uma tabela de entalpias de formação, sem precisar medir a reação diretamente.",
  },
  {
    materia: "quimica",
    tema: "Termoquímica",
    dificuldade: "media",
    enunciado:
      "Usando os dados de entalpia de formação do CO₂(g) (−394 kJ/mol) e da H₂O(l) (−286 kJ/mol), e sabendo que a combustão do metano é CH₄(g) + 2 O₂(g) → CO₂(g) + 2 H₂O(l), com entalpia de formação do metano igual a −75 kJ/mol, o ΔH dessa reação de combustão é de:",
    opcoes: [
      "−755 kJ/mol",
      "−891 kJ/mol",
      "−605 kJ/mol",
      "−1027 kJ/mol",
      "−319 kJ/mol",
    ],
    correta: 1,
    explicacao:
      "Somando os produtos: (−394) + 2 × (−286) = −394 − 572 = −966; somando os reagentes: (−75) + 2 × 0 = −75. O ΔH é a diferença: −966 − (−75) = −891 kJ/mol. Esquecer de multiplicar a entalpia da água pelo coeficiente 2 é o erro mais comum nesse tipo de cálculo.",
  },
  {
    materia: "quimica",
    tema: "Termoquímica",
    dificuldade: "media",
    enunciado:
      "Em uma reação química, a energia total necessária para romper as ligações dos reagentes foi de 500 kJ/mol, e a energia total liberada na formação das ligações dos produtos foi de 620 kJ/mol. O ΔH dessa reação e sua classificação são, respectivamente:",
    opcoes: [
      "+120 kJ/mol, reação endotérmica",
      "−120 kJ/mol, reação exotérmica",
      "−1120 kJ/mol, reação exotérmica",
      "+620 kJ/mol, reação endotérmica",
      "0 kJ/mol, reação neutra",
    ],
    correta: 1,
    explicacao:
      "O ΔH pode ser calculado como energia absorvida para quebrar ligações menos energia liberada ao formar novas ligações: 500 − 620 = −120 kJ/mol, valor negativo que indica reação exotérmica. Como mais energia foi liberada na formação de ligações do que consumida para rompê-las, o saldo final é energia liberada ao ambiente.",
  },
  {
    materia: "quimica",
    tema: "Termoquímica",
    dificuldade: "media",
    enunciado:
      "Um estudante deseja calcular a entalpia de combustão do carbono grafite (C + O₂ → CO₂) somando duas etapas conhecidas: C + ½ O₂ → CO, com ΔH₁ = −110 kJ/mol, e CO + ½ O₂ → CO₂, com ΔH₂ = −283 kJ/mol. O ΔH da combustão completa do carbono é de:",
    opcoes: [
      "−173 kJ/mol",
      "−393 kJ/mol",
      "+173 kJ/mol",
      "−110 kJ/mol",
      "+393 kJ/mol",
    ],
    correta: 1,
    explicacao:
      "Somando as duas etapas conhecidas, o monóxido de carbono formado na primeira é consumido na segunda, cancelando-se e sobrando apenas C + O₂ → CO₂; o ΔH global é a soma direta: (−110) + (−283) = −393 kJ/mol. É essa técnica de somar equações intermediárias, cancelando espécies comuns, que caracteriza a aplicação prática da lei de Hess.",
  },
  {
    materia: "quimica",
    tema: "Termoquímica",
    dificuldade: "media",
    enunciado:
      "Um recipiente de 1 kg de água a 20 °C recebe 8400 J de energia térmica proveniente de uma reação exotérmica. Sabendo que o calor específico da água é 4,2 J/(g·°C), o aumento de temperatura sofrido pela água é de:",
    opcoes: [
      "4 °C",
      "2 °C",
      "8,4 °C",
      "20 °C",
      "0,5 °C",
    ],
    correta: 1,
    explicacao:
      "Usando Q = m · c · ΔT, isola-se ΔT = Q ÷ (m · c) = 8400 ÷ (1000 × 4,2) = 8400 ÷ 4200 = 2 °C. Esse tipo de cálculo é usado em calorimetria para medir experimentalmente o calor liberado por uma reação, a partir da variação de temperatura de um líquido de referência.",
  },
  {
    materia: "quimica",
    tema: "Termoquímica",
    dificuldade: "media",
    enunciado:
      "Comparando as entalpias de combustão do etanol (−1368 kJ/mol) e da gasolina, componente principal octano (−5470 kJ/mol), ambos usados como combustíveis automotivos, é correto concluir que, por mol de combustível queimado, a gasolina:",
    opcoes: [
      "libera menos energia que o etanol",
      "libera mais energia que o etanol",
      "libera exatamente a mesma energia que o etanol",
      "não libera energia alguma ao ser queimada",
      "absorve energia do ambiente ao ser queimada",
    ],
    correta: 1,
    explicacao:
      "Como o valor absoluto da entalpia de combustão do octano é bem maior que o do etanol, cada mol de octano libera mais energia ao ser queimado. É importante notar que, para comparar combustíveis de forma prática, costuma-se usar a energia liberada por quilograma ou por litro, já que as massas molares das duas substâncias são bem diferentes.",
  },
  {
    materia: "quimica",
    tema: "Termoquímica",
    dificuldade: "media",
    enunciado:
      "A entalpia padrão de neutralização entre um ácido forte e uma base forte, como HCl e NaOH, é praticamente constante e vale aproximadamente −57 kJ/mol, independentemente do ácido e da base fortes escolhidos. Essa constância se explica porque a reação de neutralização entre eletrólitos fortes se resume, na prática, à formação de:",
    opcoes: [
      "um novo composto covalente diferente da água",
      "um sal insolúvel em qualquer caso",
      "água a partir dos íons H⁺ e OH⁻ livres em solução",
      "gás hidrogênio a partir dos íons H⁺",
      "um óxido metálico a partir da base",
    ],
    correta: 2,
    explicacao:
      "Como ácidos e bases fortes se ionizam totalmente em água, a reação efetiva entre eles é sempre H⁺(aq) + OH⁻(aq) → H₂O(l), independentemente de qual ácido ou base específicos estão envolvidos, o que explica por que o ΔH de neutralização é praticamente o mesmo em todos esses casos. Os demais íons, como Na⁺ e Cl⁻, permanecem em solução sem participar diretamente da liberação de energia.",
  },
  {
    materia: "quimica",
    tema: "Termoquímica",
    dificuldade: "media",
    enunciado:
      "Um diagrama de entalpia mostra os reagentes de uma reação em um nível de energia de 100 kJ e os produtos em um nível de 40 kJ. O valor do ΔH dessa reação e sua classificação são, respectivamente:",
    opcoes: [
      "+60 kJ, reação endotérmica",
      "−140 kJ, reação exotérmica",
      "−60 kJ, reação exotérmica",
      "+140 kJ, reação endotérmica",
      "0 kJ, reação neutra",
    ],
    correta: 2,
    explicacao:
      "O ΔH é calculado como entalpia dos produtos menos entalpia dos reagentes: 40 − 100 = −60 kJ, valor negativo que caracteriza uma reação exotérmica. Ler o diagrama de baixo para cima, subtraindo o valor de cima do valor de baixo, é o erro que inverteria indevidamente o sinal do resultado.",
  },
  {
    materia: "quimica",
    tema: "Termoquímica",
    dificuldade: "media",
    enunciado:
      "A entalpia de combustão completa do etanol, C₂H₅OH(l) + 3 O₂(g) → 2 CO₂(g) + 3 H₂O(l), vale −1368 kJ/mol. Ao queimar completamente 2 mols de etanol (massa molar 46 g/mol), a energia liberada é de:",
    opcoes: [
      "1368 kJ",
      "684 kJ",
      "2736 kJ",
      "4104 kJ",
      "2052 kJ",
    ],
    correta: 2,
    explicacao:
      "Como o ΔH tabelado se refere a 1 mol de etanol, para 2 mols basta multiplicar: 1368 × 2 = 2736 kJ liberados. Esse tipo de proporcionalidade direta entre quantidade de matéria e energia liberada é a base para calcular o poder calorífico de uma dada massa de combustível.",
  },
  {
    materia: "quimica",
    tema: "Termoquímica",
    dificuldade: "media",
    enunciado:
      "Um alpinista carrega barras energéticas ricas em carboidratos para consumir durante uma escalada em altitude, onde o gasto calórico é elevado. Do ponto de vista termoquímico, o consumo desses alimentos fornece ao corpo energia química que será liberada por meio de reações de respiração celular, classificadas, quanto à energia, como:",
    opcoes: [
      "endotérmicas, pois absorvem energia do ambiente externo",
      "nucleares, pois envolvem transformação de elementos",
      "exotérmicas, pois liberam energia armazenada nos alimentos",
      "neutras, pois não há variação de entalpia envolvida",
      "catalíticas, pois dependem exclusivamente de enzimas",
    ],
    correta: 2,
    explicacao:
      "A respiração celular quebra as moléculas de glicose e libera a energia nelas armazenada, o que caracteriza um conjunto de reações exotérmicas — é essa energia liberada que sustenta a atividade muscular durante o esforço físico. A fotossíntese, que originalmente armazenou essa energia na planta, é o processo inverso, endotérmico.",
  },
  {
    materia: "quimica",
    tema: "Termoquímica",
    dificuldade: "dificil",
    enunciado:
      "Considere as reações: C(grafite) + O₂(g) → CO₂(g), ΔH₁ = −394 kJ/mol; H₂(g) + ½ O₂(g) → H₂O(l), ΔH₂ = −286 kJ/mol; C₂H₆(g) + 7/2 O₂(g) → 2 CO₂(g) + 3 H₂O(l), ΔH₃ = −1560 kJ/mol. Aplicando a lei de Hess, a entalpia de formação do etano, C₂H₆(g), a partir de seus elementos, é de:",
    opcoes: [
      "+86 kJ/mol",
      "−1560 kJ/mol",
      "−86 kJ/mol",
      "−2240 kJ/mol",
      "−394 kJ/mol",
    ],
    correta: 2,
    explicacao:
      "A reação de formação desejada é 2 C + 3 H₂ → C₂H₆; somando 2 × ΔH₁ + 3 × ΔH₂ e subtraindo ΔH₃ (invertendo a equação da combustão do etano): 2(−394) + 3(−286) − (−1560) = −788 − 858 + 1560 = −86 kJ/mol. Esse tipo de combinação de três equações, com multiplicação e inversão de sinais, é o exercício mais completo de aplicação da lei de Hess.",
  },
  {
    materia: "quimica",
    tema: "Termoquímica",
    dificuldade: "dificil",
    enunciado:
      "Um calorímetro contém 500 g de água a 25 °C. Ao ocorrer uma reação exotérmica dentro do calorímetro, a temperatura da água sobe para 45 °C. Sabendo que o calor específico da água é 4,2 J/(g·°C) e desconsiderando a capacidade térmica do calorímetro, a energia liberada pela reação foi de:",
    opcoes: [
      "21 000 J",
      "10 500 J",
      "42 000 J",
      "84 000 J",
      "2100 J",
    ],
    correta: 2,
    explicacao:
      "A variação de temperatura é 45 − 25 = 20 °C, e aplicando Q = m · c · ΔT: 500 × 4,2 × 20 = 42 000 J. Esse é o princípio básico da calorimetria: medir a energia de uma reação a partir do aquecimento de uma massa conhecida de água ao redor dela.",
  },
  {
    materia: "quimica",
    tema: "Termoquímica",
    dificuldade: "dificil",
    enunciado:
      "Uma indústria avalia dois combustíveis para uma caldeira: o gás metano, com entalpia de combustão −890 kJ/mol e massa molar 16 g/mol, e o gás propano, com entalpia de combustão −2220 kJ/mol e massa molar 44 g/mol. Comparando a energia liberada por grama de cada combustível, é correto afirmar que:",
    opcoes: [
      "o propano libera mais energia por grama que o metano",
      "os dois liberam exatamente a mesma energia por grama",
      "o metano libera mais energia por grama que o propano",
      "nenhum dos dois libera energia ao ser queimado",
      "a comparação não pode ser feita sem a densidade dos gases",
    ],
    correta: 2,
    explicacao:
      "O metano libera 890 ÷ 16 ≈ 55,6 kJ/g, enquanto o propano libera 2220 ÷ 44 ≈ 50,5 kJ/g; apesar do propano ter maior entalpia molar, ao dividir pela massa molar, o metano se mostra ligeiramente mais eficiente por grama. Esse tipo de comparação, energia por unidade de massa, é o que realmente importa para decisões de engenharia sobre qual combustível transportar e armazenar.",
  },
  {
    materia: "quimica",
    tema: "Termoquímica",
    dificuldade: "dificil",
    enunciado:
      "Considerando as energias de ligação médias C–H (415 kJ/mol), Cl–Cl (243 kJ/mol), C–Cl (330 kJ/mol) e H–Cl (431 kJ/mol), o ΔH estimado para a reação CH₄(g) + Cl₂(g) → CH₃Cl(g) + HCl(g), que envolve a quebra de uma ligação C–H e uma Cl–Cl e a formação de uma C–Cl e uma H–Cl, é de:",
    opcoes: [
      "+103 kJ/mol",
      "−658 kJ/mol",
      "−103 kJ/mol",
      "+658 kJ/mol",
      "0 kJ/mol",
    ],
    correta: 2,
    explicacao:
      "A energia absorvida para romper as ligações dos reagentes é 415 + 243 = 658 kJ/mol, e a energia liberada ao formar as ligações dos produtos é 330 + 431 = 761 kJ/mol; o ΔH é a diferença entre o que se rompe e o que se forma: 658 − 761 = −103 kJ/mol. Como mais energia foi liberada na formação de ligações do que consumida para quebrá-las, a reação é exotérmica.",
  },
  {
    materia: "quimica",
    tema: "Termoquímica",
    dificuldade: "dificil",
    enunciado:
      "Um estudante mede a entalpia de dissolução do hidróxido de sódio em água, encontrando ΔH = −44,5 kJ/mol. Ao dissolver 20 g de NaOH (massa molar 40 g/mol) em água contida em um calorímetro com 500 g de solução total, sabendo que o calor específico da solução é aproximadamente 4,0 J/(g·°C), o aumento de temperatura esperado é de:",
    opcoes: [
      "22,25 °C",
      "5,6 °C",
      "11,1 °C",
      "44,5 °C",
      "8,9 °C",
    ],
    correta: 2,
    explicacao:
      "Os 20 g de NaOH equivalem a 0,5 mol, liberando 0,5 × 44 500 J = 22 250 J; aplicando Q = m · c · ΔT, isola-se ΔT = 22 250 ÷ (500 × 4,0) = 22 250 ÷ 2000 ≈ 11,1 °C. Esse tipo de cálculo conecta a entalpia molar tabelada com o efeito térmico observável em uma quantidade específica de solução.",
  },
  {
    materia: "quimica",
    tema: "Termoquímica",
    dificuldade: "dificil",
    enunciado:
      "Uma reação de decomposição do peróxido de hidrogênio, 2 H₂O₂(l) → 2 H₂O(l) + O₂(g), tem ΔH = −196 kJ/mol de H₂O₂. Ao decompor 340 g de H₂O₂ (massa molar 34 g/mol), a energia total liberada é de:",
    opcoes: [
      "196 kJ",
      "980 kJ",
      "1960 kJ",
      "3920 kJ",
      "98 kJ",
    ],
    correta: 2,
    explicacao:
      "Os 340 g de H₂O₂ equivalem a 10 mol; como o ΔH tabelado já se refere a 1 mol de H₂O₂ (note que a equação usa coeficiente 2, mas o ΔH costuma ser normalizado por mol de peróxido), a energia liberada é 10 × 196 = 1960 kJ. Conferir se o ΔH tabelado está normalizado por mol da substância de interesse, e não pela equação inteira, evita erros de fator 2 nesse tipo de cálculo.",
  },
  {
    materia: "quimica",
    tema: "Termoquímica",
    dificuldade: "dificil",
    enunciado:
      "Um pesquisador determina que a entalpia de formação do CO₂(g) é −394 kJ/mol e a entalpia de formação do CO(g) é −110 kJ/mol. Usando a lei de Hess, o ΔH da reação CO(g) + ½ O₂(g) → CO₂(g) é de:",
    opcoes: [
      "−504 kJ/mol",
      "+284 kJ/mol",
      "−110 kJ/mol",
      "−284 kJ/mol",
      "−394 kJ/mol",
    ],
    correta: 3,
    explicacao:
      "O ΔH da reação é a entalpia de formação do produto menos a do reagente: (−394) − (−110) = −394 + 110 = −284 kJ/mol. O oxigênio gasoso, substância simples, tem entalpia de formação zero e não altera o cálculo. Esse tipo de subtração direta entre entalpias de formação tabeladas dispensa qualquer manipulação de equações intermediárias.",
  },
  {
    materia: "quimica",
    tema: "Termoquímica",
    dificuldade: "media",
    enunciado:
      "Um estudante de química observa que, ao adicionar um comprimido efervescente a um copo de água, o copo fica ligeiramente mais frio ao toque durante a reação. Essa observação experimental indica que a reação envolvida nesse processo é:",
    opcoes: [
      "exotérmica, pois libera calor para o ambiente",
      "nuclear, pois emite radiação detectável",
      "neutra, sem qualquer variação de entalpia",
      "endotérmica, pois absorve calor do ambiente ao redor",
      "impossível de classificar sem mais dados",
    ],
    correta: 3,
    explicacao:
      "O resfriamento do copo indica que a reação está retirando energia térmica do ambiente ao seu redor para ocorrer, o que caracteriza um processo endotérmico. É a mesma lógica termodinâmica por trás das bolsas de gelo instantâneo usadas em primeiros socorros.",
  },
  {
    materia: "quimica",
    tema: "Termoquímica",
    dificuldade: "media",
    enunciado:
      "Um professor representa uma reação exotérmica escrevendo a equação química seguida do valor de ΔH negativo, como em C(grafite) + O₂(g) → CO₂(g), ΔH = −394 kJ/mol. Uma forma alternativa e equivalente de representar essa mesma informação é escrever a energia liberada como:",
    opcoes: [
      "um reagente da reação, somada aos demais reagentes com sinal negativo",
      "uma grandeza sem relação alguma com a equação química",
      "o valor da energia de ativação da reação",
      "um produto da reação, somada aos demais produtos com sinal positivo",
      "a entalpia padrão de qualquer substância simples envolvida",
    ],
    correta: 3,
    explicacao:
      "Em uma notação alternativa, comum em livros mais antigos, a energia liberada é escrita como se fosse um produto da equação: C + O₂ → CO₂ + 394 kJ, destacando visualmente que a energia sai do sistema junto aos produtos. Já em reações endotérmicas, a energia apareceria do lado dos reagentes, sendo consumida para que a reação ocorra.",
  },
  {
    materia: "quimica",
    tema: "Termoquímica",
    dificuldade: "media",
    enunciado:
      "Uma siderúrgica utiliza a reação de redução do óxido de ferro III pelo monóxido de carbono, Fe₂O₃(s) + 3 CO(g) → 2 Fe(s) + 3 CO₂(g), que apresenta ΔH negativo. Esse processo industrial libera energia útil que pode ser aproveitada para:",
    opcoes: [
      "resfriar o forno até a temperatura ambiente rapidamente",
      "absorver o calor gerado por outras reações do processo",
      "impedir que o ferro metálico se forme completamente",
      "aquecer outras etapas do processo siderúrgico, reduzindo o consumo externo de combustível",
      "aumentar a quantidade de óxido de ferro não reduzido",
    ],
    correta: 3,
    explicacao:
      "Como a reação é exotérmica, o calor liberado pode ser reaproveitado para manter a temperatura elevada necessária a outras etapas do processo siderúrgico, reduzindo a quantidade de combustível externo que precisa ser queimado. Esse aproveitamento de calor residual é uma prática comum de eficiência energética na indústria pesada.",
  },
  {
    materia: "quimica",
    tema: "Termoquímica",
    dificuldade: "facil",
    enunciado:
      "Um saco de gelo comum, feito apenas de água congelada, resfria uma região machucada ao absorver calor do corpo para derreter o gelo. Esse processo de fusão do gelo, por absorver energia do ambiente, é classificado como:",
    opcoes: [
      "exotérmico",
      "isotérmico",
      "catalítico",
      "endotérmico",
      "nuclear",
    ],
    correta: 3,
    explicacao:
      "A fusão do gelo consome energia térmica do ambiente ao redor para romper as ligações de hidrogênio que mantêm a estrutura sólida organizada, caracterizando um processo endotérmico. É por isso que compressas de gelo permanecem frias enquanto ainda houver gelo sólido derretendo.",
  },
  {
    materia: "quimica",
    tema: "Termoquímica",
    dificuldade: "facil",
    enunciado:
      "Ao acender uma vela, observa-se que a chama permanece acesa enquanto houver cera e oxigênio disponíveis, liberando luz e calor continuamente. Esse comportamento é típico das reações de combustão, que são sempre classificadas, quanto à energia, como:",
    opcoes: [
      "endotérmicas",
      "neutras",
      "catalíticas",
      "exotérmicas",
      "nucleares",
    ],
    correta: 3,
    explicacao:
      "Toda combustão libera energia para o ambiente na forma de luz e calor, o que a caracteriza como uma reação exotérmica por definição. Não existe reação de combustão endotérmica, já que a própria natureza da queima envolve liberação de energia armazenada no combustível.",
  },
  {
    materia: "quimica",
    tema: "Termoquímica",
    dificuldade: "media",
    enunciado:
      "Considere a reação de formação da amônia, N₂(g) + 3 H₂(g) → 2 NH₃(g), com ΔH = −92 kJ/mol de reação (ou seja, para os coeficientes exatamente como escritos). Ao formar 4 mols de NH₃, a energia liberada é de:",
    opcoes: [
      "92 kJ",
      "46 kJ",
      "368 kJ",
      "184 kJ",
      "276 kJ",
    ],
    correta: 3,
    explicacao:
      "Como o ΔH de −92 kJ corresponde à formação de 2 mols de NH₃ (conforme os coeficientes da equação), formar 4 mols equivale ao dobro dessa quantidade: 92 × 2 = 184 kJ. Conferir a que quantidade de produto o ΔH tabelado se refere, antes de multiplicar, é o passo que evita erros de proporção nesse tipo de questão.",
  },
  {
    materia: "quimica",
    tema: "Termoquímica",
    dificuldade: "media",
    enunciado:
      "Um estudante organiza um diagrama de entalpia para uma reação endotérmica, posicionando corretamente reagentes e produtos. Nesse diagrama, a seta que representa o ΔH deve apontar:",
    opcoes: [
      "para baixo, dos reagentes para os produtos, indicando perda de energia",
      "na horizontal, sem variação de energia",
      "em qualquer direção, pois o sentido não importa",
      "para cima, dos reagentes para os produtos, indicando ganho de energia",
      "sempre para baixo, independentemente do tipo de reação",
    ],
    correta: 3,
    explicacao:
      "Como a reação endotérmica absorve energia, os produtos ficam em um patamar de energia mais alto que os reagentes no diagrama, e a seta do ΔH aponta para cima. Esse é o padrão inverso do diagrama de uma reação exotérmica, no qual a seta aponta para baixo.",
  },
  {
    materia: "quimica",
    tema: "Termoquímica",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa a decomposição térmica do carbonato de cálcio, CaCO₃(s) → CaO(s) + CO₂(g), reação que exige aquecimento contínuo em fornos industriais para ocorrer. Essa necessidade de fornecimento constante de calor indica que essa reação é:",
    opcoes: [
      "exotérmica, com ΔH negativo",
      "neutra, sem variação de entalpia",
      "catalítica, independente de temperatura",
      "endotérmica, com ΔH positivo",
      "nuclear, com liberação de radiação",
    ],
    correta: 3,
    explicacao:
      "Reações que só ocorrem enquanto energia é fornecida continuamente do ambiente externo são endotérmicas, com ΔH positivo — é por isso que fornos de calcinação de calcário precisam ser mantidos aquecidos o tempo todo. Caso a reação fosse exotérmica, ela tenderia a se manter ou até se acelerar sozinha após iniciada.",
  },
  {
    materia: "quimica",
    tema: "Termoquímica",
    dificuldade: "media",
    enunciado:
      "Um recipiente com 200 g de água a 30 °C recebe energia de uma reação exotérmica e sua temperatura sobe para 50 °C. Sabendo que o calor específico da água é 4,2 J/(g·°C), a quantidade de calor absorvida pela água foi de:",
    opcoes: [
      "8 400 J",
      "4 200 J",
      "33 600 J",
      "16 800 J",
      "840 J",
    ],
    correta: 3,
    explicacao:
      "A variação de temperatura é 50 − 30 = 20 °C, e aplicando Q = m · c · ΔT: 200 × 4,2 × 20 = 16 800 J. Esse cálculo de calorimetria é o mesmo princípio usado para medir, indiretamente, a energia liberada por uma reação química realizada dentro de um calorímetro.",
  },
  {
    materia: "quimica",
    tema: "Termoquímica",
    dificuldade: "media",
    enunciado:
      "Um pesquisador determina a entalpia de formação do gás propano, C₃H₈(g), como sendo −104 kJ/mol. Esse valor corresponde à energia envolvida na reação de formação do propano a partir de:",
    opcoes: [
      "gás carbônico e água, seus produtos de combustão",
      "outros hidrocarbonetos de cadeia menor",
      "gás oxigênio puro, exclusivamente",
      "propano já existente em outro estado físico",
      "carbono grafite e gás hidrogênio, suas substâncias simples de origem",
    ],
    correta: 4,
    explicacao:
      "A entalpia de formação sempre parte das substâncias simples em seus estados mais estáveis — para um composto de carbono e hidrogênio, isso significa carbono grafite e gás hidrogênio molecular. Não se deve confundir entalpia de formação, que parte dos elementos, com entalpia de combustão, que parte do composto e forma CO₂ e água.",
  },
  {
    materia: "quimica",
    tema: "Termoquímica",
    dificuldade: "dificil",
    enunciado:
      "Um professor apresenta a seguinte generalização: 'toda reação exotérmica ocorre espontaneamente e rapidamente à temperatura ambiente'. Sobre essa afirmação, aplicada ao caso da reação entre gás hidrogênio e gás oxigênio para formar água, que é fortemente exotérmica mas não ocorre espontaneamente sem uma faísca, é correto dizer que ela é:",
    opcoes: [
      "verdadeira, pois toda reação exotérmica é instantânea",
      "falsa, pois nenhuma reação exotérmica ocorre espontaneamente",
      "verdadeira apenas para reações envolvendo metais",
      "falsa, pois reações exotérmicas nunca liberam energia suficiente",
      "falsa, pois o caráter exotérmico não garante velocidade de reação alta sem energia de ativação",
    ],
    correta: 4,
    explicacao:
      "A mistura de hidrogênio e oxigênio pode permanecer estável por muito tempo à temperatura ambiente, mesmo sendo termodinamicamente favorável reagir, porque existe uma barreira de energia de ativação que precisa ser vencida antes da reação prosseguir — a faísca fornece essa energia inicial. O ΔH negativo indica apenas que a reação libera energia ao ocorrer, não diz nada sobre a velocidade com que ela acontece.",
  },
  {
    materia: "quimica",
    tema: "Termoquímica",
    dificuldade: "dificil",
    enunciado:
      "Uma reação A + B → C tem ΔH = −50 kJ/mol e ocorre em duas etapas: A + B → X, com ΔH₁ = +30 kJ/mol, seguida de X → C, com ΔH₂ desconhecido. Aplicando a lei de Hess, o valor de ΔH₂ é de:",
    opcoes: [
      "−20 kJ/mol",
      "+80 kJ/mol",
      "+20 kJ/mol",
      "−50 kJ/mol",
      "−80 kJ/mol",
    ],
    correta: 4,
    explicacao:
      "Como a soma das etapas deve resultar no ΔH global, tem-se ΔH₁ + ΔH₂ = ΔH global, logo ΔH₂ = −50 − 30 = −80 kJ/mol. Isolar a incógnita a partir da soma algébrica das etapas é o procedimento padrão sempre que uma das etapas intermediárias não é fornecida diretamente.",
  },
  {
    materia: "quimica",
    tema: "Termoquímica",
    dificuldade: "dificil",
    enunciado:
      "Um tanque de gás butano (C₄H₁₀) usado em um acampamento fornece energia para cozinhar por meio da combustão completa do gás, cuja entalpia de combustão é −2878 kJ/mol. Sabendo que a massa molar do butano é 58 g/mol, a energia liberada pela queima completa de 2,9 kg desse gás é de:",
    opcoes: [
      "2878 kJ",
      "28 780 kJ",
      "57 560 kJ",
      "14 390 kJ",
      "143 900 kJ",
    ],
    correta: 4,
    explicacao:
      "Os 2900 g de butano correspondem a 2900 ÷ 58 = 50 mol; multiplicando pela entalpia de combustão, 50 × 2878 = 143 900 kJ liberados. Esse tipo de cálculo, convertendo massa de combustível em energia total disponível, é o que permite dimensionar quanto gás um botijão precisa ter para determinado uso.",
  },
  {
    materia: "quimica",
    tema: "Termoquímica",
    dificuldade: "dificil",
    enunciado:
      "Um sistema absorve 300 kJ de calor do ambiente e, ao mesmo tempo, realiza 80 kJ de trabalho sobre o ambiente ao se expandir. De acordo com a primeira lei da termodinâmica, ΔU = Q − W, a variação de energia interna desse sistema é de:",
    opcoes: [
      "+380 kJ",
      "+80 kJ",
      "−220 kJ",
      "+300 kJ",
      "+220 kJ",
    ],
    correta: 4,
    explicacao:
      "Aplicando ΔU = Q − W, com Q = +300 kJ (calor absorvido) e W = +80 kJ (trabalho realizado pelo sistema): ΔU = 300 − 80 = 220 kJ. Esse balanço energético é a base termodinâmica mais geral que sustenta os conceitos de entalpia usados na termoquímica.",
  },
  {
    materia: "quimica",
    tema: "Termoquímica",
    dificuldade: "media",
    enunciado:
      "Um estudante compara a queima de 1 mol de gás hidrogênio, H₂(g) + ½ O₂(g) → H₂O(g), com ΔH = −242 kJ/mol quando a água formada é vapor, e ΔH = −286 kJ/mol quando a água formada é líquida. A diferença entre esses dois valores, 44 kJ/mol, corresponde à:",
    opcoes: [
      "entalpia de formação do gás hidrogênio",
      "energia de ligação da molécula de oxigênio",
      "entalpia de combustão do gás oxigênio",
      "energia de ativação da reação de formação da água",
      "entalpia de condensação da água, liberada ao vapor se tornar líquido",
    ],
    correta: 4,
    explicacao:
      "A diferença entre os dois ΔH corresponde exatamente à energia liberada quando o vapor de água condensa para o estado líquido, processo que também é exotérmico. É por isso que a entalpia de formação da água líquida é mais negativa que a da água vapor: a condensação soma energia extra liberada ao processo total.",
  },
  {
    materia: "quimica",
    tema: "Termoquímica",
    dificuldade: "media",
    enunciado:
      "Um estudante aquece 100 g de água de 20 °C até 100 °C, fornecendo energia suficiente para depois vaporizar parte dela. Sabendo que o calor específico da água é 4,2 J/(g·°C), a energia necessária apenas para aquecer a água até a fervura, sem considerar a vaporização, é de:",
    opcoes: [
      "8 400 J",
      "16 800 J",
      "4 200 J",
      "42 000 J",
      "33 600 J",
    ],
    correta: 4,
    explicacao:
      "A variação de temperatura é 100 − 20 = 80 °C, e aplicando Q = m · c · ΔT: 100 × 4,2 × 80 = 33 600 J. Esse valor representa apenas o aquecimento até a temperatura de ebulição; a vaporização em si exigiria energia adicional, correspondente ao calor latente de vaporização da água.",
  },
  {
    materia: "quimica",
    tema: "Termoquímica",
    dificuldade: "media",
    enunciado:
      "Um engenheiro químico avalia o uso do hidrogênio como combustível de célula a combustível para veículos, comparando-o à gasolina. Uma vantagem ambiental frequentemente citada do hidrogênio como combustível é que sua combustão, H₂(g) + ½ O₂(g) → H₂O(l), produz como único produto:",
    opcoes: [
      "gás carbônico, sem liberação de água",
      "monóxido de carbono, um gás tóxico",
      "fuligem e resíduos sólidos de carbono",
      "óxidos de enxofre, causadores de chuva ácida",
      "água, sem liberação de gás carbônico",
    ],
    correta: 4,
    explicacao:
      "Como o hidrogênio não contém carbono em sua composição, sua combustão completa forma apenas água como produto, sem emissão de gás carbônico — ao contrário dos hidrocarbonetos derivados do petróleo, cuja combustão sempre libera CO₂. É essa ausência de carbono na molécula que torna o hidrogênio atraente do ponto de vista de emissões diretas, embora sua produção industrial atual costume depender de fontes fósseis.",
  },
  {
    materia: "quimica",
    tema: "Termoquímica",
    dificuldade: "dificil",
    enunciado:
      "Um estudante calcula a entalpia de combustão do gás hidrogênio a partir das energias de ligação: H–H (436 kJ/mol), O=O (498 kJ/mol) e O–H (463 kJ/mol, duas ligações por molécula de água). Para a reação H₂(g) + ½ O₂(g) → H₂O(g), que envolve quebrar uma ligação H–H e meia ligação O=O, formando duas ligações O–H, o ΔH estimado é de:",
    opcoes: [
      "+241 kJ/mol",
      "−685 kJ/mol",
      "+685 kJ/mol",
      "−926 kJ/mol",
      "−241 kJ/mol",
    ],
    correta: 4,
    explicacao:
      "A energia absorvida para romper as ligações dos reagentes é 436 + (498 ÷ 2) = 436 + 249 = 685 kJ/mol, e a energia liberada ao formar as duas ligações O–H é 2 × 463 = 926 kJ/mol; o ΔH é 685 − 926 = −241 kJ/mol. Esse valor calculado a partir de energias de ligação médias se aproxima bastante do valor experimental de −242 kJ/mol para a formação de vapor de água.",
  },
  {
    materia: "quimica",
    tema: "Termoquímica",
    dificuldade: "facil",
    enunciado:
      "Uma reação química libera calor para o ambiente ao longo de sua ocorrência, e o valor de ΔH calculado é negativo. Essa reação é classificada como:",
    opcoes: [
      "endotérmica",
      "isotérmica",
      "adiabática",
      "espontânea apenas em altas temperaturas",
      "exotérmica",
    ],
    correta: 4,
    explicacao:
      "Reações exotérmicas liberam energia na forma de calor para o ambiente, o que corresponde a um ΔH negativo, já que a entalpia dos produtos é menor que a dos reagentes. Reações endotérmicas, ao contrário, absorvem calor do ambiente e apresentam ΔH positivo.",
  },
];
