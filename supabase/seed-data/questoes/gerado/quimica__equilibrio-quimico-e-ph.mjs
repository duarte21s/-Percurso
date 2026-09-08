/* Equilíbrio químico e pH (50 questões).
   Equilíbrio dinâmico, constante de equilíbrio, princípio de Le Chatelier,
   escala de pH e pOH, produto iônico da água, indicadores e tampões.
   Ver quimica.mjs para o formato. */

export const questoes = [
  {
    materia: "quimica",
    tema: "Equilíbrio químico e pH",
    dificuldade: "facil",
    enunciado:
      "Uma reação química reversível atinge o equilíbrio quando a velocidade da reação direta se iguala à velocidade da reação inversa. Nesse ponto, as concentrações de reagentes e produtos:",
    opcoes: [
      "permanecem constantes ao longo do tempo, embora as reações continuem ocorrendo",
      "se tornam exatamente iguais entre si",
      "param completamente de reagir em ambos os sentidos",
      "aumentam continuamente até o infinito",
      "diminuem até chegar a zero",
    ],
    correta: 0,
    explicacao:
      "No equilíbrio dinâmico, as reações direta e inversa continuam ocorrendo na mesma velocidade, de modo que as concentrações macroscópicas de reagentes e produtos deixam de variar, mesmo sem a reação ter parado no nível molecular. É esse caráter dinâmico, e não estático, que diferencia o equilíbrio químico de uma simples paralisação da reação.",
  },
  {
    materia: "quimica",
    tema: "Equilíbrio químico e pH",
    dificuldade: "facil",
    enunciado:
      "A constante de equilíbrio, Kc, de uma reação relaciona as concentrações dos produtos e dos reagentes no estado de equilíbrio. Um valor de Kc muito maior que 1 indica que, no equilíbrio, predominam:",
    opcoes: [
      "os produtos, pois a reação direta é favorecida",
      "os reagentes, pois a reação inversa é favorecida",
      "quantidades exatamente iguais de reagentes e produtos",
      "apenas os reagentes, sem qualquer produto formado",
      "apenas os produtos, sem qualquer reagente restante",
    ],
    correta: 0,
    explicacao:
      "Como Kc é a razão entre as concentrações dos produtos e as dos reagentes, um valor muito maior que 1 indica que, no equilíbrio, a concentração de produtos é bem maior que a de reagentes, ou seja, a reação avançou bastante no sentido direto. Um Kc muito menor que 1 indicaria o oposto, com predomínio de reagentes no equilíbrio.",
  },
  {
    materia: "quimica",
    tema: "Equilíbrio químico e pH",
    dificuldade: "facil",
    enunciado:
      "O princípio de Le Chatelier estabelece que, ao perturbar um sistema em equilíbrio, ele se desloca no sentido de:",
    opcoes: [
      "minimizar o efeito da perturbação, buscando um novo estado de equilíbrio",
      "maximizar o efeito da perturbação aplicada",
      "interromper completamente a reação em ambos os sentidos",
      "aumentar indefinidamente a temperatura do sistema",
      "eliminar totalmente os reagentes do sistema",
    ],
    correta: 0,
    explicacao:
      "Segundo Le Chatelier, o sistema reage a qualquer alteração externa — de concentração, temperatura ou pressão — deslocando o equilíbrio no sentido que tende a contrapor, ao menos parcialmente, essa mudança. É esse princípio que permite prever, por exemplo, como aumentar o rendimento de uma reação industrial ajustando as condições do processo.",
  },
  {
    materia: "quimica",
    tema: "Equilíbrio químico e pH",
    dificuldade: "facil",
    enunciado:
      "A escala de pH varia tipicamente de 0 a 14 e indica o caráter ácido, neutro ou básico de uma solução aquosa. Uma solução com pH igual a 7, a 25 °C, é classificada como:",
    opcoes: [
      "neutra",
      "ácida",
      "básica",
      "fortemente ácida",
      "fortemente básica",
    ],
    correta: 0,
    explicacao:
      "O valor 7 corresponde ao ponto de neutralidade a 25 °C, no qual a concentração de íons H⁺ é igual à de íons OH⁻. Valores de pH abaixo de 7 indicam acidez crescente, e valores acima de 7 indicam basicidade crescente.",
  },
  {
    materia: "quimica",
    tema: "Equilíbrio químico e pH",
    dificuldade: "facil",
    enunciado:
      "Quanto menor o valor do pH de uma solução, dentro da escala usual de 0 a 14, mais ácida ela é. Uma solução de pH igual a 2 é, portanto, classificada como:",
    opcoes: [
      "fortemente ácida",
      "fortemente básica",
      "neutra",
      "levemente básica",
      "impossível de existir",
    ],
    correta: 0,
    explicacao:
      "Valores de pH bem abaixo de 7 indicam alta concentração de íons H⁺ e, portanto, forte acidez — o suco gástrico e o suco de limão estão nessa faixa. Quanto mais próximo de zero o pH, mais ácida é a solução.",
  },
  {
    materia: "quimica",
    tema: "Equilíbrio químico e pH",
    dificuldade: "facil",
    enunciado:
      "O produto iônico da água, Kw, relaciona as concentrações de íons H⁺ e OH⁻ presentes em qualquer solução aquosa a 25 °C, valendo Kw = [H⁺][OH⁻] = 10⁻¹⁴. Em uma solução neutra a essa temperatura, as concentrações de H⁺ e OH⁻ são:",
    opcoes: [
      "iguais entre si, cada uma valendo 10⁻⁷ mol/L",
      "iguais entre si, cada uma valendo 10⁻¹⁴ mol/L",
      "diferentes, com [H⁺] maior que [OH⁻]",
      "diferentes, com [OH⁻] maior que [H⁺]",
      "ambas iguais a zero",
    ],
    correta: 0,
    explicacao:
      "Como Kw = [H⁺][OH⁻] = 10⁻¹⁴ e a neutralidade exige [H⁺] = [OH⁻], cada concentração deve valer a raiz quadrada de 10⁻¹⁴, ou seja, 10⁻⁷ mol/L. É esse equilíbrio exato entre H⁺ e OH⁻ que define a neutralidade, e não a ausência total desses íons.",
  },
  {
    materia: "quimica",
    tema: "Equilíbrio químico e pH",
    dificuldade: "facil",
    enunciado:
      "Um indicador ácido-base é uma substância que muda de cor conforme o pH do meio em que se encontra. A fenolftaleína, um indicador comum em laboratório, é incolor em meio ácido e neutro, mas assume coloração rosa intensa em meio:",
    opcoes: [
      "básico",
      "ácido",
      "neutro",
      "radioativo",
      "supersaturado",
    ],
    correta: 0,
    explicacao:
      "A fenolftaleína muda sua estrutura molecular em pH elevado, o que altera a forma como absorve luz e produz a coloração rosa característica, sendo um dos indicadores mais usados para identificar o ponto final de titulações ácido-base. Em meio ácido ou neutro, ela permanece incolor, sem indicar visualmente a presença de H⁺.",
  },
  {
    materia: "quimica",
    tema: "Equilíbrio químico e pH",
    dificuldade: "facil",
    enunciado:
      "O pOH de uma solução se relaciona ao pH pela fórmula pH + pOH = 14, válida a 25 °C. Uma solução com pH igual a 4 apresenta pOH igual a:",
    opcoes: [
      "10",
      "4",
      "14",
      "7",
      "18",
    ],
    correta: 0,
    explicacao:
      "Isolando pOH na fórmula: pOH = 14 − pH = 14 − 4 = 10. Como a soma é sempre 14 a essa temperatura, um pH baixo (ácido) corresponde a um pOH alto, e vice-versa.",
  },
  {
    materia: "quimica",
    tema: "Equilíbrio químico e pH",
    dificuldade: "facil",
    enunciado:
      "Reações em equilíbrio que ocorrem em sistema fechado, sem troca de matéria com o exterior, são chamadas de equilíbrios homogêneos quando todas as substâncias envolvidas estão na mesma fase, e de equilíbrios heterogêneos quando há mais de uma fase presente. Um exemplo de equilíbrio heterogêneo é a reação:",
    opcoes: [
      "CaCO₃(s) ⇌ CaO(s) + CO₂(g), com sólidos e gás presentes",
      "N₂(g) + 3 H₂(g) ⇌ 2 NH₃(g), com todos os componentes gasosos",
      "H₂(g) + I₂(g) ⇌ 2 HI(g), com todos os componentes gasosos",
      "2 SO₂(g) + O₂(g) ⇌ 2 SO₃(g), com todos os componentes gasosos",
      "N₂O₄(g) ⇌ 2 NO₂(g), com todos os componentes gasosos",
    ],
    correta: 0,
    explicacao:
      "Na decomposição do carbonato de cálcio, há substâncias sólidas (CaCO₃ e CaO) e uma substância gasosa (CO₂) coexistindo, o que caracteriza um equilíbrio heterogêneo, com mais de uma fase física envolvida. As demais reações citadas ocorrem inteiramente em fase gasosa, sendo exemplos de equilíbrio homogêneo.",
  },
  {
    materia: "quimica",
    tema: "Equilíbrio químico e pH",
    dificuldade: "facil",
    enunciado:
      "Uma solução tampão é capaz de resistir a pequenas variações de pH quando pequenas quantidades de ácido ou base são adicionadas a ela. Essa propriedade torna as soluções tampão especialmente úteis para:",
    opcoes: [
      "manter o pH relativamente estável em sistemas biológicos e industriais",
      "aumentar drasticamente a acidez de qualquer solução",
      "eliminar completamente qualquer variação de temperatura",
      "transformar ácidos fortes em bases fortes",
      "impedir qualquer reação química de ocorrer no sistema",
    ],
    correta: 0,
    explicacao:
      "Sistemas biológicos, como o sangue humano, dependem de soluções tampão para manter o pH dentro de uma faixa estreita e compatível com a vida, mesmo diante de pequenas variações na produção de ácidos ou bases pelo metabolismo. Essa mesma propriedade é explorada industrialmente em processos que exigem controle rigoroso de pH.",
  },
  {
    materia: "quimica",
    tema: "Equilíbrio químico e pH",
    dificuldade: "media",
    enunciado:
      "Considere o equilíbrio N₂(g) + 3 H₂(g) ⇌ 2 NH₃(g), uma reação exotérmica no sentido direto. Segundo o princípio de Le Chatelier, ao aumentar a temperatura do sistema em equilíbrio, o equilíbrio se deslocará no sentido:",
    opcoes: [
      "direto, favorecendo a formação de mais amônia",
      "inverso, favorecendo a decomposição da amônia, já que o aumento de temperatura favorece a reação endotérmica",
      "nenhum dos dois, pois a temperatura não afeta esse equilíbrio",
      "direto, sem qualquer relação com o caráter exotérmico",
      "inverso, mas apenas se a pressão também for alterada",
    ],
    correta: 1,
    explicacao:
      "Como a reação direta é exotérmica, o calor pode ser tratado como um 'produto' da reação; aumentar a temperatura equivale a adicionar mais desse produto, deslocando o equilíbrio no sentido inverso, endotérmico, que consome o calor extra. É por essa razão que a síntese industrial de amônia busca um equilíbrio entre temperatura moderada, para não prejudicar o rendimento, e velocidade de reação aceitável.",
  },
  {
    materia: "quimica",
    tema: "Equilíbrio químico e pH",
    dificuldade: "media",
    enunciado:
      "No mesmo equilíbrio N₂(g) + 3 H₂(g) ⇌ 2 NH₃(g), ao aumentar a pressão do sistema por meio da redução do volume do recipiente, o equilíbrio se deslocará no sentido que:",
    opcoes: [
      "produz maior número de mols de gás, decompondo a amônia",
      "produz menor número de mols de gás, ou seja, no sentido direto, formando mais amônia",
      "nenhum dos dois, pois a pressão não afeta equilíbrios gasosos",
      "direto, mas apenas se a temperatura também subir",
      "inverso, independentemente do número de mols envolvidos",
    ],
    correta: 1,
    explicacao:
      "Aumentar a pressão favorece o lado da reação com menor número total de mols de gás, já que esse deslocamento reduz o volume ocupado pelo sistema e alivia parcialmente o aumento de pressão; aqui, o lado direto tem 2 mols contra 4 mols do lado esquerdo, então o equilíbrio se desloca para a direita. Esse é um dos motivos pelos quais o processo industrial de síntese de amônia opera sob pressões elevadas.",
  },
  {
    materia: "quimica",
    tema: "Equilíbrio químico e pH",
    dificuldade: "media",
    enunciado:
      "Uma solução aquosa apresenta concentração de íons H⁺ igual a 1 × 10⁻⁵ mol/L. O pH dessa solução, calculado pela fórmula pH = −log[H⁺], é de:",
    opcoes: [
      "9",
      "5",
      "-5",
      "14",
      "1",
    ],
    correta: 1,
    explicacao:
      "Como [H⁺] = 10⁻⁵ mol/L, o pH é o expoente trocado de sinal: pH = −log(10⁻⁵) = 5. Esse valor, abaixo de 7, indica que a solução é ácida, com concentração de H⁺ mil vezes maior que a de uma solução neutra.",
  },
  {
    materia: "quimica",
    tema: "Equilíbrio químico e pH",
    dificuldade: "media",
    enunciado:
      "Uma solução aquosa tem pOH igual a 3. A concentração de íons OH⁻ nessa solução e sua classificação quanto ao caráter ácido-base são, respectivamente:",
    opcoes: [
      "10⁻³ mol/L, e a solução é ácida",
      "10⁻³ mol/L, e a solução é básica",
      "10⁻¹¹ mol/L, e a solução é básica",
      "10⁻¹¹ mol/L, e a solução é ácida",
      "10³ mol/L, e a solução é neutra",
    ],
    correta: 1,
    explicacao:
      "Da definição de pOH, [OH⁻] = 10⁻³ mol/L; como o pH correspondente é 14 − 3 = 11, maior que 7, a solução é básica. Um pOH baixo, abaixo de 7, sempre corresponde a uma solução básica, e não ácida.",
  },
  {
    materia: "quimica",
    tema: "Equilíbrio químico e pH",
    dificuldade: "media",
    enunciado:
      "Considere o equilíbrio 2 SO₂(g) + O₂(g) ⇌ 2 SO₃(g). Ao adicionar mais gás oxigênio ao sistema em equilíbrio, mantendo o volume e a temperatura constantes, o equilíbrio se deslocará no sentido:",
    opcoes: [
      "inverso, decompondo o SO₃ já formado",
      "direto, consumindo parte do oxigênio adicionado e formando mais SO₃",
      "nenhum dos dois, pois o oxigênio não participa do equilíbrio",
      "direto, mas sem consumir qualquer parte do oxigênio adicionado",
      "inverso, aumentando a concentração de oxigênio ainda mais",
    ],
    correta: 1,
    explicacao:
      "Adicionar mais reagente (oxigênio) desloca o equilíbrio no sentido que tende a consumir parte desse excesso, ou seja, no sentido direto, formando mais SO₃ e reduzindo parcialmente a concentração de O₂ adicionada. Esse deslocamento nunca consome a totalidade do reagente adicionado, apenas parte dele, até um novo equilíbrio ser estabelecido.",
  },
  {
    materia: "quimica",
    tema: "Equilíbrio químico e pH",
    dificuldade: "media",
    enunciado:
      "No mesmo equilíbrio 2 SO₂(g) + O₂(g) ⇌ 2 SO₃(g), ao retirar parte do SO₃ formado à medida que ele se acumula, retirando-o continuamente do sistema, o efeito sobre o equilíbrio será:",
    opcoes: [
      "deslocamento no sentido inverso, formando mais SO₂ e O₂",
      "deslocamento contínuo no sentido direto, para repor o produto retirado",
      "nenhum efeito, pois retirar produto não afeta o equilíbrio",
      "interrupção total da reação em ambos os sentidos",
      "deslocamento no sentido inverso, apenas se a temperatura subir",
    ],
    correta: 1,
    explicacao:
      "Retirar um produto do sistema reduz sua concentração abaixo do valor de equilíbrio, e o sistema reage produzindo mais desse produto para tentar restabelecer o equilíbrio, deslocando a reação no sentido direto. Essa estratégia é usada industrialmente para aumentar o rendimento de reações reversíveis, retirando continuamente o produto de interesse.",
  },
  {
    materia: "quimica",
    tema: "Equilíbrio químico e pH",
    dificuldade: "media",
    enunciado:
      "Um estudante calcula a concentração de íons H⁺ em uma solução de pH igual a 3. O valor dessa concentração, em mol/L, é de:",
    opcoes: [
      "10⁻¹¹",
      "10⁻³",
      "3",
      "10³",
      "10⁻⁷",
    ],
    correta: 1,
    explicacao:
      "Como pH = −log[H⁺], a concentração é obtida invertendo a operação: [H⁺] = 10⁻ᵖᴴ = 10⁻³ mol/L. Essa conversão direta entre pH e concentração de H⁺ é usada com frequência para comparar quantitativamente a acidez de diferentes soluções.",
  },
  {
    materia: "quimica",
    tema: "Equilíbrio químico e pH",
    dificuldade: "media",
    enunciado:
      "Um antiácido estomacal é ingerido para neutralizar o excesso de acidez do suco gástrico, elevando seu pH de aproximadamente 1,5 para valores próximos de 3 ou 4. Do ponto de vista da escala de pH, essa mudança representa:",
    opcoes: [
      "um aumento na concentração de íons H⁺, tornando o meio mais ácido",
      "uma redução na concentração de íons H⁺, tornando o meio menos ácido",
      "nenhuma alteração real na concentração de H⁺",
      "uma transformação do meio ácido em meio fortemente básico",
      "uma redução na concentração de íons OH⁻",
    ],
    correta: 1,
    explicacao:
      "Elevar o pH de 1,5 para valores mais próximos de 4 representa uma queda considerável na concentração de H⁺, já que a escala de pH é logarítmica: cada unidade de aumento representa uma redução de dez vezes na concentração de H⁺. Isso não torna o suco gástrico básico, apenas menos ácido, aliviando a sensação de azia.",
  },
  {
    materia: "quimica",
    tema: "Equilíbrio químico e pH",
    dificuldade: "media",
    enunciado:
      "A escala de pH é logarítmica, o que significa que cada unidade de variação representa uma mudança de dez vezes na concentração de H⁺. Uma solução de pH 3, comparada a uma solução de pH 5, apresenta uma concentração de íons H⁺:",
    opcoes: [
      "100 vezes menor",
      "100 vezes maior",
      "2 vezes maior",
      "10 vezes maior",
      "igual, pois ambas são ácidas",
    ],
    correta: 1,
    explicacao:
      "A diferença de duas unidades de pH corresponde a um fator de 10² = 100 na concentração de H⁺; como o pH 3 é menor que o pH 5, sua concentração de H⁺ é 100 vezes maior. É esse caráter logarítmico que faz pequenas diferenças numéricas de pH representarem mudanças bastante significativas na acidez real.",
  },
  {
    materia: "quimica",
    tema: "Equilíbrio químico e pH",
    dificuldade: "media",
    enunciado:
      "Considere o equilíbrio de ionização de um ácido fraco genérico HA em água: HA(aq) ⇌ H⁺(aq) + A⁻(aq). Ao adicionar mais do sal NaA, que fornece o íon A⁻ comum à reação, ao sistema em equilíbrio, o efeito esperado é:",
    opcoes: [
      "deslocamento do equilíbrio no sentido direto, aumentando a ionização do ácido",
      "deslocamento do equilíbrio no sentido inverso, reduzindo a ionização do ácido (efeito do íon comum)",
      "nenhum efeito sobre o equilíbrio de ionização",
      "transformação completa do ácido fraco em ácido forte",
      "neutralização total do ácido presente na solução",
    ],
    correta: 1,
    explicacao:
      "Adicionar A⁻, um produto da ionização, desloca o equilíbrio no sentido inverso, reprimindo a ionização do ácido fraco — fenômeno conhecido como efeito do íon comum. Esse efeito é amplamente utilizado no preparo de soluções tampão, que combinam um ácido fraco com um sal de seu ânion conjugado.",
  },
  {
    materia: "quimica",
    tema: "Equilíbrio químico e pH",
    dificuldade: "media",
    enunciado:
      "Um estudante compara duas soluções de ácido acético, uma mais concentrada e outra mais diluída, ambas contendo o mesmo ácido fraco. Ao diluir a solução mais concentrada, o grau de ionização do ácido acético tende a:",
    opcoes: [
      "diminuir, já que a diluição sempre reduz a ionização",
      "permanecer exatamente igual, independentemente da diluição",
      "aumentar, já que a diluição favorece a ionização de ácidos e bases fracos",
      "tornar-se completo, transformando o ácido fraco em forte",
      "cair a zero, interrompendo totalmente a ionização",
    ],
    correta: 2,
    explicacao:
      "A diluição desloca o equilíbrio de ionização no sentido que produz mais partículas em solução (mais íons livres), favorecendo o aumento do grau de ionização percentual do ácido fraco, mesmo que a concentração absoluta de H⁺ diminua. Esse comportamento, batizado de lei da diluição de Ostwald, é uma consequência direta do princípio de Le Chatelier aplicado a eletrólitos fracos.",
  },
  {
    materia: "quimica",
    tema: "Equilíbrio químico e pH",
    dificuldade: "media",
    enunciado:
      "O sangue humano mantém seu pH em torno de 7,4, ligeiramente básico, graças a um sistema tampão baseado no equilíbrio entre ácido carbônico e bicarbonato: H₂CO₃(aq) ⇌ H⁺(aq) + HCO₃⁻(aq). Se o corpo produz excesso de CO₂ durante um exercício intenso, aumentando a concentração de H₂CO₃, o equilíbrio se desloca no sentido que:",
    opcoes: [
      "diminui a concentração de H⁺, elevando o pH do sangue",
      "não afeta o pH do sangue de forma alguma",
      "aumenta a concentração de H⁺, tendendo a reduzir levemente o pH do sangue",
      "elimina completamente o CO₂ produzido instantaneamente",
      "transforma o ácido carbônico em oxigênio puro",
    ],
    correta: 2,
    explicacao:
      "O aumento de H₂CO₃ desloca o equilíbrio no sentido direto, liberando mais H⁺ e tendendo a reduzir o pH sanguíneo, o que o corpo compensa por meio da respiração, eliminando CO₂ extra pelos pulmões para reverter essa tendência. É esse sistema tampão dinâmico que evita variações bruscas e perigosas de pH durante atividades físicas intensas.",
  },
  {
    materia: "quimica",
    tema: "Equilíbrio químico e pH",
    dificuldade: "media",
    enunciado:
      "Uma solução aquosa apresenta [H⁺] = 1 × 10⁻⁹ mol/L. Classificando essa solução quanto ao caráter ácido-base, é correto afirmar que ela é:",
    opcoes: [
      "ácida, pois seu pH é menor que 7",
      "neutra, pois seu pH é igual a 7",
      "básica, pois seu pH é maior que 7",
      "impossível de classificar sem mais dados",
      "fortemente ácida, com pH próximo de zero",
    ],
    correta: 2,
    explicacao:
      "O pH dessa solução é −log(10⁻⁹) = 9, valor acima de 7 que caracteriza uma solução básica. Concentrações de H⁺ menores que 10⁻⁷ mol/L sempre correspondem a soluções básicas, já que a concentração de OH⁻ complementar se torna maior.",
  },
  {
    materia: "quimica",
    tema: "Equilíbrio químico e pH",
    dificuldade: "dificil",
    enunciado:
      "Para o equilíbrio N₂O₄(g) ⇌ 2 NO₂(g), a expressão da constante de equilíbrio em termos de concentração, Kc, é escrita corretamente como:",
    opcoes: [
      "Kc = [N₂O₄] / [NO₂]²",
      "Kc = [NO₂] / [N₂O₄]",
      "Kc = [NO₂]² / [N₂O₄]",
      "Kc = 2[NO₂] / [N₂O₄]",
      "Kc = [N₂O₄] × [NO₂]²",
    ],
    correta: 2,
    explicacao:
      "A constante de equilíbrio é escrita como a razão entre as concentrações dos produtos, elevadas aos respectivos coeficientes estequiométricos, e as concentrações dos reagentes, também elevadas aos seus coeficientes: Kc = [NO₂]² / [N₂O₄]. Multiplicar o coeficiente pela concentração, em vez de usá-lo como expoente, é o erro conceitual mais comum ao montar essa expressão.",
  },
  {
    materia: "quimica",
    tema: "Equilíbrio químico e pH",
    dificuldade: "dificil",
    enunciado:
      "Em um recipiente de 2 L, no equilíbrio A(g) ⇌ B(g), há 4 mols de A e 8 mols de B. O valor de Kc para esse equilíbrio é de:",
    opcoes: [
      "0,5",
      "4",
      "2",
      "8",
      "1",
    ],
    correta: 2,
    explicacao:
      "As concentrações são [A] = 4 ÷ 2 = 2 mol/L e [B] = 8 ÷ 2 = 4 mol/L; substituindo na expressão Kc = [B]/[A], obtém-se Kc = 4 ÷ 2 = 2. Esquecer de dividir o número de mols pelo volume do recipiente antes de aplicar a fórmula é o erro que levaria ao valor de Kc = 8 ÷ 4 = 2 coincidentemente igual neste caso, mas que falharia em recipientes de volume diferente de 1 L.",
  },
  {
    materia: "quimica",
    tema: "Equilíbrio químico e pH",
    dificuldade: "dificil",
    enunciado:
      "Uma solução de ácido acético 0,1 mol/L apresenta grau de ionização de 1,3%, ou seja, apenas 1,3% das moléculas do ácido se ionizam em água. A concentração de íons H⁺ nessa solução é de aproximadamente:",
    opcoes: [
      "1,3 × 10⁻¹ mol/L",
      "1,3 × 10⁻² mol/L",
      "1,3 × 10⁻³ mol/L",
      "0,1 mol/L",
      "1,3 × 10⁻⁴ mol/L",
    ],
    correta: 2,
    explicacao:
      "A concentração de H⁺ é o produto entre a concentração inicial do ácido e o grau de ionização: 0,1 × 0,013 = 1,3 × 10⁻³ mol/L. Esse cálculo mostra por que ácidos fracos, mesmo em concentrações relativamente altas, geram soluções bem menos ácidas do que ácidos fortes de mesma concentração, que se ionizariam quase totalmente.",
  },
  {
    materia: "quimica",
    tema: "Equilíbrio químico e pH",
    dificuldade: "dificil",
    enunciado:
      "Um sistema em equilíbrio 2 A(g) + B(g) ⇌ 2 C(g) tem sua pressão reduzida pela metade, aumentando o volume do recipiente. Sabendo que a reação direta tem menor número de mols de gás (3 mols de reagentes contra 2 de produtos), o efeito dessa redução de pressão sobre o equilíbrio será deslocá-lo no sentido:",
    opcoes: [
      "direto, favorecendo a formação de mais C",
      "nenhum dos dois, pois a pressão não afeta esse sistema",
      "inverso, favorecendo a formação de mais A e B, que ocupam maior volume",
      "inverso, mas apenas se a temperatura também for reduzida",
      "direto, independentemente do número de mols envolvidos",
    ],
    correta: 2,
    explicacao:
      "Reduzir a pressão (aumentando o volume) favorece o lado da reação com maior número de mols de gás, já que esse deslocamento tende a ocupar mais espaço e contrapor parcialmente a queda de pressão; aqui, o lado com 3 mols (A + B) é favorecido, deslocando o equilíbrio no sentido inverso. Esse comportamento é o oposto do que ocorreria com um aumento de pressão sobre o mesmo sistema.",
  },
  {
    materia: "quimica",
    tema: "Equilíbrio químico e pH",
    dificuldade: "dificil",
    enunciado:
      "Uma solução tampão é preparada misturando ácido acético (CH₃COOH) e acetato de sódio (CH₃COONa) em quantidades comparáveis. Ao adicionar uma pequena quantidade de ácido forte a essa solução tampão, o componente que reage para minimizar a variação de pH é:",
    opcoes: [
      "o próprio ácido acético, que se decompõe em gás carbônico",
      "a água presente na solução, que se transforma em H₂",
      "o íon acetato (CH₃COO⁻), que neutraliza o H⁺ adicionado formando ácido acético",
      "o sódio metálico, que reage diretamente com o ácido",
      "nenhum componente, pois o tampão é inerte a ácidos",
    ],
    correta: 2,
    explicacao:
      "O íon acetato, presente em quantidade significativa por causa do sal dissolvido, captura o excesso de H⁺ adicionado, convertendo-o de volta em ácido acético não ionizado e evitando uma queda brusca do pH. É essa reserva de base fraca conjugada que dá ao sistema tampão sua capacidade de resistir a pequenas adições de ácido.",
  },
  {
    materia: "quimica",
    tema: "Equilíbrio químico e pH",
    dificuldade: "dificil",
    enunciado:
      "Um estudante analisa o equilíbrio de solubilidade do cloreto de prata, AgCl(s) ⇌ Ag⁺(aq) + Cl⁻(aq), cujo produto de solubilidade Kps vale 1,8 × 10⁻¹⁰ a 25 °C. Ao adicionar cloreto de sódio a uma solução saturada de AgCl, aumentando a concentração de Cl⁻, o efeito esperado sobre o equilíbrio de solubilidade é:",
    opcoes: [
      "deslocamento no sentido direto, aumentando a solubilidade do AgCl",
      "nenhum efeito, pois o Kps é uma constante fixa que não muda com a adição de íons",
      "deslocamento no sentido inverso, reduzindo a solubilidade do AgCl (efeito do íon comum)",
      "dissolução completa de todo o AgCl sólido presente",
      "transformação do AgCl em um novo composto insolúvel",
    ],
    correta: 2,
    explicacao:
      "Aumentar a concentração de Cl⁻, um dos produtos da dissolução, desloca o equilíbrio no sentido inverso, favorecendo a precipitação do AgCl e reduzindo sua solubilidade efetiva — o mesmo efeito do íon comum observado em equilíbrios de ionização de ácidos fracos. O valor do Kps permanece constante à mesma temperatura; o que muda é a quantidade de sólido que permanece dissolvido em solução.",
  },
  {
    materia: "quimica",
    tema: "Equilíbrio químico e pH",
    dificuldade: "media",
    enunciado:
      "Um estudante mede o pH de quatro soluções: leite (pH 6,5), água pura (pH 7), sabão em barra dissolvido (pH 10) e suco de limão (pH 2,5). Ordenando essas soluções da mais ácida para a mais básica, tem-se:",
    opcoes: [
      "sabão, água pura, leite, suco de limão",
      "água pura, leite, suco de limão, sabão",
      "leite, suco de limão, sabão, água pura",
      "suco de limão, leite, água pura, sabão",
      "suco de limão, sabão, leite, água pura",
    ],
    correta: 3,
    explicacao:
      "Ordenando os valores de pH do menor para o maior: 2,5 (suco de limão), 6,5 (leite), 7 (água pura) e 10 (sabão), o que corresponde exatamente à ordem do mais ácido para o mais básico. Essa ordenação direta pelo valor numérico do pH é a forma mais simples de comparar a acidez relativa de diferentes soluções.",
  },
  {
    materia: "quimica",
    tema: "Equilíbrio químico e pH",
    dificuldade: "media",
    enunciado:
      "Considere o equilíbrio 2 NO₂(g) ⇌ N₂O₄(g), no qual o NO₂ é castanho-avermelhado e o N₂O₄ é incolor. Ao resfriar o sistema em equilíbrio, mantendo o volume constante, e sabendo que a reação direta é exotérmica, é esperado que a cor da mistura gasosa:",
    opcoes: [
      "se torne mais escura, pois o equilíbrio se desloca no sentido inverso",
      "permaneça inalterada, pois a temperatura não afeta esse equilíbrio",
      "desapareça completamente, tornando o gás transparente",
      "se torne mais clara, pois o equilíbrio se desloca no sentido direto, formando mais N₂O₄ incolor",
      "se torne mais escura, independentemente do sentido do deslocamento",
    ],
    correta: 3,
    explicacao:
      "Como a formação de N₂O₄ é exotérmica, resfriar o sistema favorece o sentido direto (que libera calor), aumentando a proporção do N₂O₄ incolor e clareando visivelmente a mistura gasosa. Esse experimento é um dos mais usados em salas de aula para visualizar diretamente, pela mudança de cor, o efeito da temperatura sobre um equilíbrio químico.",
  },
  {
    materia: "quimica",
    tema: "Equilíbrio químico e pH",
    dificuldade: "dificil",
    enunciado:
      "Um professor apresenta a seguinte afirmação a seus alunos: 'a adição de um catalisador a um sistema em equilíbrio desloca o equilíbrio no sentido de formar mais produtos'. Sobre essa afirmação, é correto dizer que ela é:",
    opcoes: [
      "verdadeira, pois catalisadores sempre favorecem a formação de produtos",
      "verdadeira apenas para equilíbrios heterogêneos",
      "falsa, pois catalisadores sempre deslocam o equilíbrio no sentido inverso",
      "falsa, pois o catalisador acelera igualmente as reações direta e inversa, sem deslocar o equilíbrio",
      "verdadeira apenas em sistemas a alta pressão",
    ],
    correta: 3,
    explicacao:
      "Um catalisador reduz a energia de ativação tanto da reação direta quanto da inversa na mesma proporção, o que faz o sistema atingir o equilíbrio mais rapidamente, mas sem alterar as concentrações finais de reagentes e produtos nesse equilíbrio. É um erro conceitual comum confundir velocidade de reação com posição de equilíbrio: são conceitos cinético e termodinâmico distintos.",
  },
  {
    materia: "quimica",
    tema: "Equilíbrio químico e pH",
    dificuldade: "facil",
    enunciado:
      "A água de piscina precisa ser mantida em uma faixa de pH próxima da neutralidade, entre 7,2 e 7,8, para garantir a eficácia do cloro e o conforto dos banhistas. Quando o pH da água sobe acima dessa faixa, diz-se que a água está:",
    opcoes: [
      "mais ácida que o recomendado",
      "exatamente neutra",
      "radioativa",
      "mais básica que o recomendado",
      "supersaturada de sal",
    ],
    correta: 3,
    explicacao:
      "Um pH acima da faixa recomendada indica que a água se tornou mais básica, o que reduz a eficiência desinfetante do cloro e pode causar irritação nos olhos dos banhistas. É por isso que profissionais de manutenção de piscinas testam regularmente o pH e ajustam com produtos corretivos.",
  },
  {
    materia: "quimica",
    tema: "Equilíbrio químico e pH",
    dificuldade: "facil",
    enunciado:
      "Um estudante testa o pH de uma solução de bicarbonato de sódio em água e obtém um valor de 8,3, ligeiramente acima de 7. Essa solução é, portanto, classificada como:",
    opcoes: [
      "levemente ácida",
      "neutra",
      "fortemente ácida",
      "levemente básica",
      "fortemente básica",
    ],
    correta: 3,
    explicacao:
      "Um pH de 8,3, por estar pouco acima de 7, caracteriza uma solução levemente básica, não uma solução fortemente básica, que teria valores bem mais altos, próximos de 13 ou 14. O bicarbonato de sódio, apesar de ser um sal, tem caráter levemente básico em solução aquosa por hidrólise.",
  },
  {
    materia: "quimica",
    tema: "Equilíbrio químico e pH",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa o equilíbrio 2 CO(g) + O₂(g) ⇌ 2 CO₂(g), uma reação exotérmica no sentido direto. Ao mesmo tempo em que aumenta a pressão do sistema, o estudante também eleva a temperatura. Considerando apenas o efeito da pressão, o equilíbrio tende a se deslocar no sentido:",
    opcoes: [
      "inverso, pois há maior número de mols de gás nos produtos",
      "nenhum dos dois, pois a pressão não afeta esse equilíbrio",
      "direto, apenas se a temperatura permanecer constante",
      "direto, pois há menor número de mols de gás nos produtos",
      "inverso, independentemente do número de mols envolvidos",
    ],
    correta: 3,
    explicacao:
      "O lado direto tem 2 mols de gás (CO₂) contra 3 mols do lado esquerdo (2 CO + O₂); aumentar a pressão favorece o lado com menor número de mols, deslocando o equilíbrio no sentido direto. O efeito da temperatura, que favoreceria o sentido inverso por ser a reação direta exotérmica, atua de forma independente e por vezes oposta ao efeito da pressão nesse mesmo sistema.",
  },
  {
    materia: "quimica",
    tema: "Equilíbrio químico e pH",
    dificuldade: "media",
    enunciado:
      "Uma solução aquosa de amônia, NH₃, é classificada como uma base fraca porque, em água, ocorre o equilíbrio NH₃(aq) + H₂O(l) ⇌ NH₄⁺(aq) + OH⁻(aq), com pequena extensão de ionização. Ao adicionar cloreto de amônio (NH₄Cl) a essa solução, fornecendo o íon NH₄⁺ em excesso, o efeito esperado é:",
    opcoes: [
      "deslocamento do equilíbrio no sentido direto, aumentando a concentração de OH⁻",
      "nenhum efeito sobre o equilíbrio de ionização da amônia",
      "transformação da amônia em um ácido forte",
      "deslocamento do equilíbrio no sentido inverso, reduzindo a concentração de OH⁻ e o pH da solução",
      "neutralização completa e imediata da amônia",
    ],
    correta: 3,
    explicacao:
      "Adicionar NH₄⁺, um produto da ionização, é outro exemplo do efeito do íon comum: o equilíbrio se desloca no sentido inverso, reprimindo a ionização da amônia e reduzindo a concentração de OH⁻, o que abaixa o pH da solução em relação ao que seria sem essa adição. Essa mistura de amônia e cloreto de amônio é, inclusive, usada para preparar soluções tampão básicas em laboratório.",
  },
  {
    materia: "quimica",
    tema: "Equilíbrio químico e pH",
    dificuldade: "media",
    enunciado:
      "Um estudante prepara duas soluções de mesma concentração molar: uma de ácido clorídrico (ácido forte) e outra de ácido acético (ácido fraco). Comparando os valores de pH das duas soluções, é correto afirmar que a solução de ácido clorídrico apresentará um pH:",
    opcoes: [
      "maior, pois se ioniza menos que o ácido acético",
      "igual ao do ácido acético, já que as concentrações molares são iguais",
      "impossível de determinar sem dados adicionais",
      "menor, pois se ioniza mais completamente, liberando mais H⁺",
      "igual a 7, pois todo ácido forte é neutro",
    ],
    correta: 3,
    explicacao:
      "Como o ácido clorídrico é forte e se ioniza quase totalmente, enquanto o ácido acético é fraco e se ioniza apenas parcialmente, a concentração real de H⁺ livre é bem maior na solução de HCl, resultando em um pH mais baixo, mesmo com a mesma concentração molar inicial dos dois ácidos. Esse é um exemplo de como a força de um ácido, e não apenas sua concentração, determina o pH final da solução.",
  },
  {
    materia: "quimica",
    tema: "Equilíbrio químico e pH",
    dificuldade: "media",
    enunciado:
      "Um sistema em equilíbrio A(g) + B(g) ⇌ 2 C(g) tem o mesmo número de mols de gás nos dois lados da equação. Ao aumentar a pressão desse sistema por meio da redução do volume, o efeito esperado sobre a posição do equilíbrio é:",
    opcoes: [
      "deslocamento no sentido direto, favorecendo a formação de C",
      "deslocamento no sentido inverso, favorecendo A e B",
      "deslocamento aleatório, sem padrão previsível",
      "nenhum deslocamento, pois o número de mols de gás é igual nos dois lados",
      "interrupção total da reação em ambos os sentidos",
    ],
    correta: 3,
    explicacao:
      "Como o número de mols de gás é igual nos dois lados da equação (2 mols de reagentes e 2 mols de produtos), uma mudança de pressão afeta igualmente ambos os lados e não desloca o equilíbrio em nenhum sentido específico. Esse é um caso particular importante: nem toda alteração de pressão desloca um equilíbrio gasoso, apenas quando há diferença no número de mols entre os dois lados.",
  },
  {
    materia: "quimica",
    tema: "Equilíbrio químico e pH",
    dificuldade: "media",
    enunciado:
      "Um estudante mede o pH da chuva em uma região industrializada e encontra o valor 4,5, mais ácido que o esperado para a chuva normal, de aproximadamente 5,6 devido ao CO₂ atmosférico dissolvido. Essa acidez adicional da chuva ácida é atribuída principalmente à presença de:",
    opcoes: [
      "gás oxigênio em excesso na atmosfera",
      "vapor de água puro, sem qualquer poluente dissolvido",
      "gás nitrogênio, que é naturalmente ácido",
      "poeira mineral levantada pelo vento",
      "óxidos de enxofre e de nitrogênio, que formam ácidos fortes ao reagir com a água da atmosfera",
    ],
    correta: 4,
    explicacao:
      "Óxidos de enxofre (SOₓ) e de nitrogênio (NOₓ), lançados por veículos e indústrias, reagem com a umidade atmosférica formando ácido sulfúrico e ácido nítrico, muito mais fortes que o ácido carbônico da chuva normal, o que reduz significativamente o pH da precipitação. É esse fenômeno que corrói monumentos, prejudica plantações e acidifica corpos d'água em regiões industrializadas.",
  },
  {
    materia: "quimica",
    tema: "Equilíbrio químico e pH",
    dificuldade: "dificil",
    enunciado:
      "Uma solução de ácido fraco HA tem constante de ionização Ka = 1 × 10⁻⁵ e concentração inicial de 0,1 mol/L. Considerando que a ionização é pequena o suficiente para aproximar a concentração de equilíbrio do ácido pela concentração inicial, a concentração de H⁺ nessa solução, calculada por [H⁺] = √(Ka × C), é de aproximadamente:",
    opcoes: [
      "1 × 10⁻⁵ mol/L",
      "1 × 10⁻⁶ mol/L",
      "1 × 10⁻¹ mol/L",
      "1 × 10⁻⁴ mol/L",
      "1 × 10⁻³ mol/L",
    ],
    correta: 4,
    explicacao:
      "Substituindo os valores: [H⁺] = √(10⁻⁵ × 10⁻¹) = √(10⁻⁶) = 10⁻³ mol/L. Essa fórmula aproximada é amplamente usada para ácidos fracos com Ka pequeno, dispensando a resolução de uma equação quadrática completa, desde que o grau de ionização seja de fato pequeno.",
  },
  {
    materia: "quimica",
    tema: "Equilíbrio químico e pH",
    dificuldade: "dificil",
    enunciado:
      "Usando o resultado do cálculo anterior, uma solução de ácido fraco HA com [H⁺] = 1 × 10⁻³ mol/L apresenta pH igual a:",
    opcoes: [
      "5",
      "11",
      "1",
      "-3",
      "3",
    ],
    correta: 4,
    explicacao:
      "Aplicando pH = −log[H⁺] = −log(10⁻³) = 3. Esse valor confirma que, apesar de ser um ácido fraco com ionização parcial, a solução ainda apresenta caráter claramente ácido, com pH bem abaixo de 7.",
  },
  {
    materia: "quimica",
    tema: "Equilíbrio químico e pH",
    dificuldade: "dificil",
    enunciado:
      "Um sistema em equilíbrio H₂(g) + I₂(g) ⇌ 2 HI(g) tem Kc = 64 a uma dada temperatura. Em um recipiente de 1 L, no equilíbrio, há 2 mols de H₂ e 2 mols de I₂. A quantidade de matéria de HI presente no equilíbrio é de:",
    opcoes: [
      "8 mols",
      "4 mols",
      "32 mols",
      "64 mols",
      "16 mols",
    ],
    correta: 4,
    explicacao:
      "Como o volume é 1 L, as concentrações coincidem com o número de mols; substituindo na expressão Kc = [HI]² / ([H₂][I₂]): 64 = [HI]² / (2 × 2) = [HI]² / 4, logo [HI]² = 256 e [HI] = 16 mol/L, ou seja, 16 mols no recipiente de 1 L. Tirar a raiz quadrada corretamente, e não apenas dividir por 4, é o passo que garante o resultado certo.",
  },
  {
    materia: "quimica",
    tema: "Equilíbrio químico e pH",
    dificuldade: "dificil",
    enunciado:
      "Um pesquisador estuda o equilíbrio de dissociação da água, 2 H₂O(l) ⇌ H₃O⁺(aq) + OH⁻(aq), e mede o Kw em duas temperaturas diferentes: 10⁻¹⁴ a 25 °C e um valor maior, 2,9 × 10⁻¹⁴, a 40 °C. Esse aumento do Kw com a temperatura indica que a autoionização da água é um processo:",
    opcoes: [
      "exotérmico, já que o aumento de temperatura desfavorece a reação direta",
      "isotérmico, sem qualquer relação com a temperatura",
      "impossível de ocorrer em qualquer temperatura",
      "que se torna neutro apenas a 25 °C, e ácido em outras temperaturas",
      "endotérmico, já que o aumento de temperatura favorece a reação direta",
    ],
    correta: 4,
    explicacao:
      "Como o aumento de temperatura desloca o equilíbrio no sentido que favorece a reação direta (aumentando o Kw), esse comportamento indica que a autoionização da água é um processo endotérmico, que absorve calor para ocorrer. É importante notar que, mesmo a 40 °C, a água pura continua neutra, pois [H⁺] ainda se iguala a [OH⁻] — apenas o valor numérico do pH neutro muda, ficando ligeiramente abaixo de 7.",
  },
  {
    materia: "quimica",
    tema: "Equilíbrio químico e pH",
    dificuldade: "dificil",
    enunciado:
      "Uma solução tampão é preparada com concentrações iguais de ácido acético (Ka = 1,8 × 10⁻⁵) e acetato de sódio. Segundo a equação de Henderson-Hasselbalch, pH = pKa + log([base]/[ácido]), quando as concentrações do ácido e da base conjugada são iguais, o pH da solução tampão resultante é:",
    opcoes: [
      "igual a 7, independentemente do ácido usado",
      "igual à concentração do ácido acético",
      "sempre igual a 14 menos o pKa",
      "impossível de calcular sem o valor exato das concentrações",
      "igual ao pKa do ácido, pois o logaritmo de 1 é zero",
    ],
    correta: 4,
    explicacao:
      "Quando [base] = [ácido], a razão entre elas é 1, e como log(1) = 0, a equação se reduz a pH = pKa, independentemente do valor absoluto das concentrações, desde que sejam iguais entre si. Esse é o ponto de maior capacidade tamponante de um sistema tampão, e por isso os tampões costumam ser escolhidos com pKa próximo do pH desejado para a aplicação.",
  },
  {
    materia: "quimica",
    tema: "Equilíbrio químico e pH",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa o equilíbrio heterogêneo CaCO₃(s) ⇌ CaO(s) + CO₂(g) em um recipiente fechado a temperatura constante. Ao adicionar mais CaCO₃ sólido ao sistema já em equilíbrio, sem alterar o volume disponível para o gás, o efeito sobre a posição do equilíbrio é:",
    opcoes: [
      "deslocamento no sentido direto, aumentando a pressão de CO₂",
      "deslocamento no sentido inverso, consumindo o CO₂ existente",
      "deslocamento proporcional à quantidade de sólido adicionada",
      "interrupção total da reação em ambos os sentidos",
      "nenhum, pois a concentração de um sólido puro não entra na expressão da constante de equilíbrio",
    ],
    correta: 4,
    explicacao:
      "Sólidos puros têm concentração constante (sua densidade não muda) e por isso não aparecem na expressão da constante de equilíbrio; adicionar mais CaCO₃ sólido não altera a posição do equilíbrio, apenas a quantidade de sólido disponível para reagir no futuro. Esse é um ponto frequentemente mal compreendido: mudar a quantidade de um sólido ou líquido puro em um equilíbrio heterogêneo não desloca o equilíbrio.",
  },
  {
    materia: "quimica",
    tema: "Equilíbrio químico e pH",
    dificuldade: "media",
    enunciado:
      "Um estudante de química analisa a rotulagem de um produto de limpeza doméstico que indica pH 12 e traz o aviso 'cáustico, evitar contato com a pele'. Comparando esse produto com um sabonete neutro de pH 5,5, é correto afirmar que o produto de limpeza é:",
    opcoes: [
      "muito mais ácido que o sabonete neutro",
      "igualmente neutro em relação ao sabonete",
      "menos básico que o sabonete neutro",
      "impossível de comparar sem mais informações",
      "muito mais básico que o sabonete neutro",
    ],
    correta: 4,
    explicacao:
      "Um pH de 12 está bem acima de 7 e indica um produto fortemente básico, enquanto o pH 5,5 do sabonete neutro está discretamente abaixo de 7, próximo da neutralidade da pele humana. É essa diferença de basicidade que explica por que produtos de limpeza cáusticos exigem cuidado redobrado no manuseio, podendo causar queimaduras químicas.",
  },
  {
    materia: "quimica",
    tema: "Equilíbrio químico e pH",
    dificuldade: "dificil",
    enunciado:
      "Um estudante analisa a reação de esterificação em equilíbrio, CH₃COOH(l) + C₂H₅OH(l) ⇌ CH₃COOC₂H₅(l) + H₂O(l), usada na produção de ésteres aromáticos. Sabendo que essa reação atinge o equilíbrio sem se completar totalmente, uma estratégia eficaz para aumentar o rendimento do éster, segundo o princípio de Le Chatelier, é:",
    opcoes: [
      "adicionar mais éster ao sistema já em equilíbrio",
      "remover parte do ácido acético do sistema",
      "resfriar drasticamente o sistema até a solidificação",
      "aumentar a pressão do sistema, já que é uma reação em fase líquida",
      "remover continuamente a água formada, deslocando o equilíbrio no sentido direto",
    ],
    correta: 4,
    explicacao:
      "Retirar a água formada, um dos produtos da reação, desloca o equilíbrio no sentido direto para repor o produto retirado, aumentando a conversão dos reagentes em éster — técnica usada industrialmente com agentes desidratantes ou destilação contínua. Adicionar mais éster, ao contrário, deslocaria o equilíbrio no sentido inverso, reduzindo o rendimento desejado.",
  },
  {
    materia: "quimica",
    tema: "Equilíbrio químico e pH",
    dificuldade: "facil",
    enunciado:
      "Uma solução aquosa apresenta pH igual a 3 a 25 °C. Essa solução é classificada como:",
    opcoes: [
      "neutra",
      "básica",
      "impossível de classificar sem outros dados",
      "ácida",
      "básica apenas se contiver sal dissolvido",
    ],
    correta: 3,
    explicacao:
      "Em água a 25 °C, o pH neutro é 7; valores abaixo de 7 indicam solução ácida, e valores acima, básica. Como pH 3 está bem abaixo de 7, a solução é claramente ácida, com concentração de íons H⁺ maior que a de íons OH⁻.",
  },
  {
    materia: "quimica",
    tema: "Equilíbrio químico e pH",
    dificuldade: "media",
    enunciado:
      "Um sistema em equilíbrio químico é caracterizado, do ponto de vista cinético, pelo fato de que:",
    opcoes: [
      "a reação direta e a reação inversa param completamente de ocorrer",
      "apenas a reação direta continua ocorrendo, em ritmo constante",
      "as velocidades das reações direta e inversa se igualam, mantendo as concentrações constantes",
      "todos os reagentes são completamente convertidos em produtos",
      "a temperatura do sistema necessariamente cai a zero",
    ],
    correta: 2,
    explicacao:
      "O equilíbrio químico é dinâmico: as reações direta e inversa continuam ocorrendo, mas em velocidades iguais, de modo que as concentrações de reagentes e produtos permanecem constantes ao longo do tempo, sem que a reação realmente \"pare\". Esse é um dos pontos mais confundidos por estudantes, que às vezes imaginam o equilíbrio como um estado estático.",
  },
  {
    materia: "quimica",
    tema: "Equilíbrio químico e pH",
    dificuldade: "dificil",
    enunciado:
      "Considere o equilíbrio N₂(g) + 3H₂(g) ⇌ 2NH₃(g), reação exotérmica usada na síntese industrial da amônia (processo de Haber-Bosch). Segundo o princípio de Le Chatelier, aumentar a pressão total do sistema (reduzindo o volume do recipiente) desloca o equilíbrio:",
    opcoes: [
      "no sentido inverso, favorecendo os reagentes, porque há mais mols de gás nesse lado",
      "não desloca o equilíbrio, pois a pressão não afeta reações gasosas",
      "desloca sempre no sentido dos reagentes, independentemente do número de mols",
      "depende exclusivamente da temperatura, nunca da pressão",
      "no sentido direto, favorecendo a formação de amônia, porque há menos mols de gás nesse lado",
    ],
    correta: 4,
    explicacao:
      "Do lado dos reagentes há 4 mols de gás (1 de N₂ + 3 de H₂) e do lado dos produtos há apenas 2 mols de NH₃; ao aumentar a pressão, o equilíbrio se desloca para o lado com menor número de mols gasosos, no caso o dos produtos, para aliviar o aumento de pressão. Esse é exatamente o motivo pelo qual o processo de Haber-Bosch é conduzido sob altas pressões.",
  },
];
