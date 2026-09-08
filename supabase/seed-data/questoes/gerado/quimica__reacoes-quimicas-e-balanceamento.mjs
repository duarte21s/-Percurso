/* Reações químicas e balanceamento (50 questões).
   Tipos de reação (síntese, análise, deslocamento, dupla troca),
   balanceamento por tentativa, lei da conservação da massa, evidências
   de reação e reações do cotidiano.
   Ver quimica.mjs para o formato. */

export const questoes = [
  {
    materia: "quimica",
    tema: "Reações químicas e balanceamento",
    dificuldade: "facil",
    enunciado:
      "A lei da conservação da massa, formulada por Lavoisier a partir de experimentos com reações em sistemas fechados, estabelece que, em uma reação química:",
    opcoes: [
      "a massa total dos reagentes é igual à massa total dos produtos",
      "a massa dos reagentes é sempre maior que a dos produtos",
      "a massa se transforma em energia durante a reação",
      "apenas o número de átomos de oxigênio se conserva",
      "a massa dos produtos depende da temperatura ambiente",
    ],
    correta: 0,
    explicacao:
      "Em um sistema fechado, nada entra nem sai durante a reação, então os mesmos átomos que formavam os reagentes se rearranjam para formar os produtos, preservando a massa total. É essa lei que fundamenta o balanceamento de equações químicas.",
  },
  {
    materia: "quimica",
    tema: "Reações químicas e balanceamento",
    dificuldade: "facil",
    enunciado:
      "Balancear uma equação química significa ajustar os coeficientes estequiométricos de modo que:",
    opcoes: [
      "o número de átomos de cada elemento seja igual nos reagentes e nos produtos",
      "todos os coeficientes sejam iguais a 1",
      "a massa dos reagentes seja o dobro da massa dos produtos",
      "apenas o elemento mais abundante seja contado",
      "os índices das fórmulas químicas sejam alterados livremente",
    ],
    correta: 0,
    explicacao:
      "Os coeficientes, colocados na frente das fórmulas, ajustam a proporção de moléculas sem alterar a identidade das substâncias, garantindo que cada elemento apareça em quantidade igual dos dois lados. Alterar índices dentro da fórmula mudaria a própria substância, o que não é permitido no balanceamento.",
  },
  {
    materia: "quimica",
    tema: "Reações químicas e balanceamento",
    dificuldade: "facil",
    enunciado:
      "Na reação de síntese N₂ + 3 H₂ → 2 NH₃, dois elementos simples se combinam formando um único composto. Esse tipo de reação é classificado como:",
    opcoes: [
      "síntese ou adição",
      "análise ou decomposição",
      "simples troca ou deslocamento",
      "dupla troca",
      "combustão completa",
    ],
    correta: 0,
    explicacao:
      "Reações de síntese unem duas ou mais substâncias em um único produto — aqui, nitrogênio e hidrogênio formam amônia. O padrão inverso, uma substância se quebrando em duas ou mais, caracteriza a decomposição.",
  },
  {
    materia: "quimica",
    tema: "Reações químicas e balanceamento",
    dificuldade: "facil",
    enunciado:
      "Ao aquecer carbonato de cálcio, CaCO₃, ele se decompõe formando óxido de cálcio e gás carbônico, segundo CaCO₃ → CaO + CO₂. Esse tipo de reação, em que uma substância se quebra em duas ou mais, é chamado de:",
    opcoes: [
      "análise ou decomposição",
      "síntese ou adição",
      "deslocamento",
      "dupla troca",
      "neutralização",
    ],
    correta: 0,
    explicacao:
      "A decomposição térmica do calcário é o exemplo clássico de reação de análise: um único reagente origina dois ou mais produtos. Esse processo é a base industrial da produção de cal virgem a partir do calcário.",
  },
  {
    materia: "quimica",
    tema: "Reações químicas e balanceamento",
    dificuldade: "facil",
    enunciado:
      "Ao mergulhar um prego de ferro em uma solução de sulfato de cobre, ocorre a reação Fe + CuSO₄ → FeSO₄ + Cu, na qual o ferro substitui o cobre no composto. Esse tipo de reação é chamado de:",
    opcoes: [
      "simples troca ou deslocamento",
      "síntese",
      "análise",
      "dupla troca",
      "combustão",
    ],
    correta: 0,
    explicacao:
      "Na simples troca, um elemento mais reativo desloca outro menos reativo de um composto — o ferro é mais reativo que o cobre e ocupa seu lugar no sulfato. É por isso que o prego fica revestido de cobre metálico avermelhado ao longo da reação.",
  },
  {
    materia: "quimica",
    tema: "Reações químicas e balanceamento",
    dificuldade: "facil",
    enunciado:
      "Ao misturar soluções de nitrato de prata e cloreto de sódio, ocorre a reação AgNO₃ + NaCl → AgCl + NaNO₃, na qual os cátions e ânions trocam de parceiro. Esse tipo de reação é conhecido como:",
    opcoes: [
      "dupla troca",
      "síntese",
      "decomposição",
      "deslocamento simples",
      "combustão incompleta",
    ],
    correta: 0,
    explicacao:
      "Na dupla troca, dois compostos trocam simultaneamente seus cátions ou ânions, formando dois novos compostos — aqui, a prata migra para o cloro e o sódio para o nitrato. O cloreto de prata formado é insolúvel e precipita como um sólido branco, evidência visual da reação.",
  },
  {
    materia: "quimica",
    tema: "Reações químicas e balanceamento",
    dificuldade: "facil",
    enunciado:
      "Uma evidência comumente observada quando ocorre uma reação química entre duas soluções aquosas é a formação de um sólido insolúvel que se deposita no fundo do recipiente. Esse sólido formado durante a reação é chamado de:",
    opcoes: [
      "precipitado",
      "catalisador",
      "solvente",
      "eletrólito",
      "indicador",
    ],
    correta: 0,
    explicacao:
      "O precipitado é uma das evidências clássicas de reação química, junto com mudança de cor, liberação de gás e variação de temperatura. Catalisadores, ao contrário, aceleram reações sem serem consumidos e sem formar novo produto sólido.",
  },
  {
    materia: "quimica",
    tema: "Reações químicas e balanceamento",
    dificuldade: "facil",
    enunciado:
      "Ao acender um palito de fósforo, observa-se liberação de luz e calor, característica de reações classificadas quanto à energia envolvida como:",
    opcoes: [
      "exotérmicas",
      "endotérmicas",
      "isotérmicas",
      "adiabáticas neutras",
      "catalíticas puras",
    ],
    correta: 0,
    explicacao:
      "Reações exotérmicas liberam energia para o ambiente, geralmente na forma de calor e, às vezes, luz — é o que ocorre na combustão do fósforo. Reações endotérmicas fazem o caminho oposto, absorvendo energia do ambiente para ocorrer.",
  },
  {
    materia: "quimica",
    tema: "Reações químicas e balanceamento",
    dificuldade: "facil",
    enunciado:
      "Uma bolsa de gelo instantâneo usada em primeiros socorros esfria ao ser ativada, absorvendo calor do local machucado. Esse tipo de reação, que retira energia do ambiente, é classificado como:",
    opcoes: [
      "endotérmica",
      "exotérmica",
      "isotérmica",
      "catalítica",
      "de combustão",
    ],
    correta: 0,
    explicacao:
      "Nas reações endotérmicas, a energia necessária para formar os produtos é maior que a liberada na quebra dos reagentes, e essa diferença é retirada do ambiente ao redor, resfriando-o. É esse princípio que torna possível o efeito de resfriamento instantâneo das bolsas de gelo químico.",
  },
  {
    materia: "quimica",
    tema: "Reações químicas e balanceamento",
    dificuldade: "facil",
    enunciado:
      "A queima completa de um hidrocarboneto em presença de oxigênio suficiente produz gás carbônico e água como únicos produtos. Esse tipo de reação é chamado de:",
    opcoes: [
      "combustão completa",
      "combustão incompleta",
      "decomposição térmica",
      "hidrólise",
      "oxirredução sem oxigênio",
    ],
    correta: 0,
    explicacao:
      "Na combustão completa, o oxigênio disponível é suficiente para converter todo o carbono do combustível em CO₂; quando o oxigênio é escasso, forma-se também monóxido de carbono ou fuligem, caracterizando a combustão incompleta, mais poluente.",
  },
  {
    materia: "quimica",
    tema: "Reações químicas e balanceamento",
    dificuldade: "media",
    enunciado:
      "Ao balancear a equação Al + O₂ → Al₂O₃, os coeficientes corretos que tornam a equação balanceada, na ordem em que as substâncias aparecem, são:",
    opcoes: [
      "2, 3 e 1",
      "4, 3 e 2",
      "1, 1 e 1",
      "3, 2 e 1",
      "2, 2 e 2",
    ],
    correta: 1,
    explicacao:
      "Com 4 Al, 3 O₂ e 2 Al₂O₃, contam-se 4 alumínios e 6 oxigênios (3 × 2) do lado esquerdo, e 4 alumínios e 6 oxigênios (2 × 3) do lado direito — a equação fecha. Testar coeficientes menores, como 2, 3 e 1, deixa os átomos de alumínio desbalanceados.",
  },
  {
    materia: "quimica",
    tema: "Reações químicas e balanceamento",
    dificuldade: "media",
    enunciado:
      "Ao balancear a equação de combustão do etanol, C₂H₅OH + O₂ → CO₂ + H₂O, os coeficientes corretos, na ordem apresentada, são:",
    opcoes: [
      "1, 2, 2 e 3",
      "1, 3, 2 e 3",
      "2, 3, 4 e 6",
      "1, 3, 1 e 3",
      "1, 1, 2 e 3",
    ],
    correta: 1,
    explicacao:
      "Com 1 C₂H₅OH, 3 O₂, 2 CO₂ e 3 H₂O, conferem-se 2 carbonos, 6 hidrogênios e 7 oxigênios (1 do etanol + 6 do O₂) de cada lado, batendo com 2 × 2 + 3 = 7 oxigênios nos produtos. O balanceamento de combustões costuma exigir ajustar o oxigênio por último, depois de fechar carbono e hidrogênio.",
  },
  {
    materia: "quimica",
    tema: "Reações químicas e balanceamento",
    dificuldade: "media",
    enunciado:
      "Ao balancear a equação Fe₂O₃ + CO → Fe + CO₂, usada industrialmente na redução do minério de ferro em alto-forno, os coeficientes corretos, na ordem apresentada, são:",
    opcoes: [
      "1, 1, 1 e 1",
      "1, 3, 2 e 3",
      "2, 3, 2 e 3",
      "1, 2, 2 e 2",
      "2, 3, 4 e 3",
    ],
    correta: 1,
    explicacao:
      "Com 1 Fe₂O₃, 3 CO, 2 Fe e 3 CO₂, batem 2 ferros, 3 oxigênios do óxido mais 3 do monóxido totalizando 6 de cada lado (3 × 2 nos CO₂), e 3 carbonos de cada lado. É essa reação que converte o minério em ferro metálico dentro do alto-forno siderúrgico.",
  },
  {
    materia: "quimica",
    tema: "Reações químicas e balanceamento",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa a reação Zn + HCl → ZnCl₂ + H₂ e observa liberação de bolhas de gás ao adicionar zinco metálico ao ácido. Após balancear corretamente a equação, os coeficientes são:",
    opcoes: [
      "1, 1, 1 e 1",
      "1, 2, 1 e 1",
      "2, 2, 1 e 1",
      "1, 2, 2 e 1",
      "2, 1, 1 e 2",
    ],
    correta: 1,
    explicacao:
      "Com 1 Zn, 2 HCl, 1 ZnCl₂ e 1 H₂, o cloro fecha em 2 de cada lado e o hidrogênio também em 2 de cada lado. As bolhas observadas são justamente o gás hidrogênio liberado, uma evidência típica de reação entre metal e ácido.",
  },
  {
    materia: "quimica",
    tema: "Reações químicas e balanceamento",
    dificuldade: "media",
    enunciado:
      "Ao queimar 10 g de magnésio em um recipiente fechado contendo oxigênio, obtêm-se 16,6 g de óxido de magnésio como único produto. Segundo a lei da conservação da massa, a massa de oxigênio consumida na reação foi de:",
    opcoes: [
      "10 g",
      "6,6 g",
      "16,6 g",
      "26,6 g",
      "3,3 g",
    ],
    correta: 1,
    explicacao:
      "Como a massa total se conserva, a massa de oxigênio consumida é a diferença entre a massa do produto e a massa do magnésio: 16,6 − 10 = 6,6 g. Somar em vez de subtrair as massas é o erro que levaria ao valor 26,6 g.",
  },
  {
    materia: "quimica",
    tema: "Reações químicas e balanceamento",
    dificuldade: "media",
    enunciado:
      "A reação entre bicarbonato de sódio e vinagre, comum em experimentos caseiros, libera gás carbônico visível na forma de borbulhamento intenso. Essa reação é classificada como:",
    opcoes: [
      "síntese, formando um único produto sólido",
      "dupla troca, entre um sal e um ácido, com liberação de gás",
      "combustão, com liberação de fuligem",
      "decomposição térmica do ácido acético",
      "simples troca entre dois metais",
    ],
    correta: 1,
    explicacao:
      "O bicarbonato reage com o ácido acético do vinagre trocando parceiros: forma-se acetato de sódio e ácido carbônico, que se decompõe imediatamente em água e CO₂ gasoso, responsável pela efervescência. É uma dupla troca seguida de uma decomposição instantânea do ácido instável.",
  },
  {
    materia: "quimica",
    tema: "Reações químicas e balanceamento",
    dificuldade: "media",
    enunciado:
      "Ao balancear a equação P₄ + O₂ → P₂O₅, os coeficientes corretos, na ordem apresentada, são:",
    opcoes: [
      "1, 2 e 1",
      "1, 5 e 2",
      "2, 5 e 2",
      "4, 5 e 2",
      "1, 10 e 4",
    ],
    correta: 1,
    explicacao:
      "Com 1 P₄, 5 O₂ e 2 P₂O₅, os quatro fósforos batem (2 × 2 do lado dos produtos), e os oxigênios fecham em 10 de cada lado (5 × 2 nos reagentes e 2 × 5 nos produtos). É comum começar o balanceamento pelo elemento que aparece em menos fórmulas, nesse caso o fósforo.",
  },
  {
    materia: "quimica",
    tema: "Reações químicas e balanceamento",
    dificuldade: "media",
    enunciado:
      "Considere a reação genérica A + B → C + D, na qual a substância A é consumida totalmente antes de a substância B terminar. Nesse contexto, A é chamado de:",
    opcoes: [
      "reagente em excesso",
      "reagente limitante",
      "catalisador",
      "produto secundário",
      "solvente da reação",
    ],
    correta: 1,
    explicacao:
      "O reagente limitante é aquele que se esgota primeiro e, por isso, determina a quantidade máxima de produto que a reação pode formar; o restante do outro reagente, não consumido, é chamado de excesso. Catalisadores não são consumidos na reação, ao contrário dos reagentes.",
  },
  {
    materia: "quimica",
    tema: "Reações químicas e balanceamento",
    dificuldade: "media",
    enunciado:
      "Uma substância que acelera a velocidade de uma reação química, sem ser consumida no processo e sem alterar os produtos formados, é chamada de:",
    opcoes: [
      "reagente limitante",
      "catalisador",
      "inibidor",
      "solvente",
      "precipitado",
    ],
    correta: 1,
    explicacao:
      "O catalisador oferece um caminho alternativo de menor energia de ativação para a reação, aumentando sua velocidade, mas é regenerado ao final e não aparece na equação como produto ou reagente consumido. Um inibidor faz o oposto: retarda a reação.",
  },
  {
    materia: "quimica",
    tema: "Reações químicas e balanceamento",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa a equação 2 KClO₃ → 2 KCl + 3 O₂, usada para gerar oxigênio em laboratório a partir do aquecimento do clorato de potássio. Verificando essa equação, é correto afirmar que ela está:",
    opcoes: [
      "desbalanceada, pois faltam átomos de oxigênio nos produtos",
      "balanceada, com 2 potássios, 2 cloros e 6 oxigênios de cada lado",
      "desbalanceada, pois sobra potássio nos reagentes",
      "balanceada apenas em relação ao cloro",
      "desbalanceada, pois o clorato não pode se decompor",
    ],
    correta: 1,
    explicacao:
      "Contando os átomos: reagentes têm 2 K, 2 Cl e 6 O (2 × 3); produtos têm 2 K, 2 Cl e 6 O (3 × 2) — tudo fecha corretamente. Essa reação de decomposição é usada em laboratórios escolares justamente por gerar gás oxigênio de forma controlada ao ser aquecida.",
  },
  {
    materia: "quimica",
    tema: "Reações químicas e balanceamento",
    dificuldade: "media",
    enunciado:
      "Em uma reação de simples troca, um metal só consegue deslocar outro de um composto se for mais reativo que ele, segundo a fila de reatividade dos metais. Com base nesse princípio, a reação entre cobre metálico e uma solução de sulfato de zinco (Cu + ZnSO₄):",
    opcoes: [
      "ocorre normalmente, formando sulfato de cobre e zinco metálico",
      "ocorre apenas em altas temperaturas",
      "não ocorre, pois o cobre é menos reativo que o zinco",
      "ocorre apenas na presença de um catalisador",
      "sempre ocorre, independentemente da reatividade dos metais",
    ],
    correta: 2,
    explicacao:
      "O zinco é mais reativo que o cobre na fila de reatividade, então o cobre não tem energia suficiente para deslocar o zinco do composto — a reação simplesmente não acontece. É esse mesmo princípio que explica por que o ferro desloca o cobre do sulfato de cobre, mas não o contrário.",
  },
  {
    materia: "quimica",
    tema: "Reações químicas e balanceamento",
    dificuldade: "media",
    enunciado:
      "Ao balancear a equação C₃H₈ + O₂ → CO₂ + H₂O, referente à combustão do gás propano usado em botijões domésticos, os coeficientes corretos, na ordem apresentada, são:",
    opcoes: [
      "1, 3, 3 e 4",
      "1, 5, 4 e 3",
      "1, 5, 3 e 4",
      "2, 5, 3 e 4",
      "1, 4, 3 e 4",
    ],
    correta: 2,
    explicacao:
      "Com 1 C₃H₈, 5 O₂, 3 CO₂ e 4 H₂O, os três carbonos e os oito hidrogênios (4 × 2) fecham, e os oxigênios somam 10 (5 × 2) nos reagentes contra 6 + 4 = 10 nos produtos. É essa mesma reação que libera a energia usada no fogão a gás.",
  },
  {
    materia: "quimica",
    tema: "Reações químicas e balanceamento",
    dificuldade: "media",
    enunciado:
      "Um recipiente aberto contém uma solução de ácido clorídrico. Ao adicionar um pedaço de zinco metálico, observa-se liberação de gás e o recipiente fica mais quente ao toque. As duas evidências observadas indicam, respectivamente:",
    opcoes: [
      "ausência de reação química e resfriamento do sistema",
      "formação de um precipitado e caráter endotérmico da reação",
      "formação de um novo produto gasoso e caráter exotérmico da reação",
      "mudança de cor e formação de um novo sólido",
      "evaporação simples do ácido, sem reação química",
    ],
    correta: 2,
    explicacao:
      "O borbulhamento indica a liberação de hidrogênio gasoso, produto da reação entre o metal e o ácido, e o aumento de temperatura mostra que a reação libera energia, sendo exotérmica. Essas duas evidências, junto à mudança de cor e à formação de precipitado, são os sinais clássicos de que uma reação química de fato ocorreu.",
  },
  {
    materia: "quimica",
    tema: "Reações químicas e balanceamento",
    dificuldade: "media",
    enunciado:
      "Um estudante escreve a equação não balanceada Al + H₂SO₄ → Al₂(SO₄)₃ + H₂ para a reação entre alumínio e ácido sulfúrico. Após o balanceamento correto, os coeficientes, na ordem apresentada, são:",
    opcoes: [
      "1, 1, 1 e 1",
      "2, 6, 1 e 3",
      "2, 3, 1 e 3",
      "3, 3, 1 e 3",
      "2, 3, 2 e 3",
    ],
    correta: 2,
    explicacao:
      "Com 2 Al, 3 H₂SO₄, 1 Al₂(SO₄)₃ e 3 H₂, os dois alumínios batem, os três grupos sulfato batem e os seis hidrogênios do ácido (3 × 2) igualam os seis hidrogênios dos três H₂ (3 × 2). Ir testando elemento por elemento, começando pelo que aparece em menos compostos, evita perder o controle do balanceamento.",
  },
  {
    materia: "quimica",
    tema: "Reações químicas e balanceamento",
    dificuldade: "media",
    enunciado:
      "Uma reação de oxirredução envolve transferência de elétrons entre as espécies participantes. Na reação Zn + Cu²⁺ → Zn²⁺ + Cu, o zinco perde elétrons e o cobre os recebe. O processo em que o zinco perde elétrons é chamado de:",
    opcoes: [
      "redução",
      "neutralização",
      "oxidação",
      "hidrólise",
      "sublimação",
    ],
    correta: 2,
    explicacao:
      "Oxidação é a perda de elétrons por uma espécie química, o que aumenta seu número de oxidação — o zinco passa de 0 para +2. O processo complementar, em que o cobre ganha elétrons e seu número de oxidação diminui, é chamado de redução.",
  },
  {
    materia: "quimica",
    tema: "Reações químicas e balanceamento",
    dificuldade: "media",
    enunciado:
      "Durante a queima de uma vela, observa-se a formação de gás carbônico e vapor de água, além de liberação de luz e calor. Além da classificação como combustão, essa reação também pode ser classificada, quanto à transferência de elétrons, como uma reação de:",
    opcoes: [
      "dupla troca, pois há troca de cátions e ânions",
      "neutralização, pois envolve ácido e base",
      "oxirredução, pois o carbono do combustível é oxidado pelo oxigênio",
      "análise, pois uma substância se decompõe em várias",
      "síntese apenas, sem qualquer transferência de elétrons",
    ],
    correta: 2,
    explicacao:
      "Toda combustão é, no fundo, uma oxirredução: o carbono e o hidrogênio do combustível são oxidados, perdendo elétrons para o oxigênio, que é reduzido. É essa transferência de elétrons que libera a energia observada como luz e calor.",
  },
  {
    materia: "quimica",
    tema: "Reações químicas e balanceamento",
    dificuldade: "media",
    enunciado:
      "Um professor demonstra a decomposição da água oxigenada, 2 H₂O₂ → 2 H₂O + O₂, usando fermento biológico como catalisador. A função do fermento nessa demonstração é:",
    opcoes: [
      "servir como reagente principal, sendo totalmente consumido",
      "atuar como produto secundário da reação",
      "acelerar a reação sem ser consumido, sem alterar os produtos formados",
      "neutralizar o caráter ácido da água oxigenada",
      "impedir que a reação de decomposição ocorra",
    ],
    correta: 2,
    explicacao:
      "A enzima catalase presente no fermento acelera drasticamente a decomposição do peróxido de hidrogênio, mas permanece química e quantitativamente inalterada ao final do processo. É por isso que uma pequena quantidade de fermento basta para acelerar a liberação intensa de gás oxigênio observada no experimento.",
  },
  {
    materia: "quimica",
    tema: "Reações químicas e balanceamento",
    dificuldade: "media",
    enunciado:
      "Ao balancear a equação Ca(OH)₂ + H₃PO₄ → Ca₃(PO₄)₂ + H₂O, referente à neutralização entre hidróxido de cálcio e ácido fosfórico, os coeficientes corretos, na ordem apresentada, são:",
    opcoes: [
      "2, 3, 1 e 6",
      "1, 1, 1 e 1",
      "3, 2, 1 e 6",
      "3, 2, 2 e 6",
      "2, 2, 1 e 4",
    ],
    correta: 2,
    explicacao:
      "Com 3 Ca(OH)₂, 2 H₃PO₄, 1 Ca₃(PO₄)₂ e 6 H₂O, os três cálcios e os dois fosfatos batem diretamente, e o hidrogênio soma 6 (3 × 2) nos reagentes contra 6 nas seis águas. Reações com fórmulas mais complexas, como as que envolvem fosfato, costumam exigir mais tentativas até fechar todos os elementos.",
  },
  {
    materia: "quimica",
    tema: "Reações químicas e balanceamento",
    dificuldade: "dificil",
    enunciado:
      "Ao queimar completamente 8 g de gás metano (CH₄) em oxigênio suficiente, forma-se gás carbônico e água segundo CH₄ + 2 O₂ → CO₂ + 2 H₂O. Sabendo que a massa molar do metano é 16 g/mol e a do oxigênio consumido, na proporção da equação, corresponde ao dobro em mols, a massa de oxigênio necessária para essa combustão é de:",
    opcoes: [
      "16 g",
      "8 g",
      "32 g",
      "64 g",
      "48 g",
    ],
    correta: 2,
    explicacao:
      "Oito gramas de metano correspondem a 0,5 mol; pela proporção 1:2 da equação, são necessários 1 mol de O₂, que em massa molar 32 g/mol resulta em 32 g. Esquecer de multiplicar por dois a proporção estequiométrica é o que levaria ao valor de 16 g.",
  },
  {
    materia: "quimica",
    tema: "Reações químicas e balanceamento",
    dificuldade: "dificil",
    enunciado:
      "Uma reação genérica X + 2Y → Z é realizada com 3 mols de X e 8 mols de Y. Sabendo que a proporção estequiométrica exige 2 mols de Y para cada mol de X, o reagente limitante dessa reação e a quantidade de Y que sobra sem reagir são, respectivamente:",
    opcoes: [
      "Y é limitante, e sobram 3 mols de X sem reagir",
      "X é limitante, e sobram 3 mols de Y sem reagir",
      "X é limitante, e sobram 2 mols de Y sem reagir",
      "nenhum dos dois é limitante, pois reagem completamente",
      "Y é limitante, e sobram 5 mols de X sem reagir",
    ],
    correta: 2,
    explicacao:
      "Para consumir os 3 mols de X seriam necessários 6 mols de Y, e como há 8 mols disponíveis, o X se esgota primeiro e é o limitante. Os 3 mols de X consomem 6 mols de Y, restando 8 − 6 = 2 mols de Y sem reagir. Conferir qual reagente esgota primeiro, e não apenas comparar os totais informados, é o que evita apontar o limitante errado.",
  },
  {
    materia: "quimica",
    tema: "Reações químicas e balanceamento",
    dificuldade: "dificil",
    enunciado:
      "Uma amostra de 5,4 g de alumínio reage completamente com ácido clorídrico em excesso, segundo 2 Al + 6 HCl → 2 AlCl₃ + 3 H₂. Sabendo que a massa molar do alumínio é 27 g/mol e a do gás hidrogênio é 2 g/mol, a massa de H₂ liberada nessa reação é de:",
    opcoes: [
      "1,2 g",
      "0,3 g",
      "2,4 g",
      "0,6 g",
      "5,4 g",
    ],
    correta: 3,
    explicacao:
      "Os 5,4 g de alumínio correspondem a 0,2 mol; pela proporção 2:3 da equação, formam-se 0,3 mol de H₂, que em massa molar 2 g/mol resulta em 0,6 g. Usar a proporção errada, como 1:1, é o deslize mais comum nesse tipo de cálculo com coeficientes desiguais.",
  },
  {
    materia: "quimica",
    tema: "Reações químicas e balanceamento",
    dificuldade: "dificil",
    enunciado:
      "A decomposição térmica do nitrato de potássio, KNO₃, produz nitrito de potássio e gás oxigênio: 2 KNO₃ → 2 KNO₂ + O₂. Ao decompor 202 g de KNO₃ (massa molar 101 g/mol), o volume de O₂ liberado, medido em condições normais de temperatura e pressão, em que 1 mol de gás ocupa 22,4 L, é de:",
    opcoes: [
      "44,8 L",
      "11,2 L",
      "2,24 L",
      "22,4 L",
      "89,6 L",
    ],
    correta: 3,
    explicacao:
      "Os 202 g de KNO₃ equivalem a 2 mols; pela proporção 2:1 da equação, formam-se 1 mol de O₂, que em condições normais ocupa 22,4 L. Ignorar a proporção 2:1 e assumir 1:1 é o que levaria ao dobro do resultado correto.",
  },
  {
    materia: "quimica",
    tema: "Reações químicas e balanceamento",
    dificuldade: "dificil",
    enunciado:
      "Uma mistura contém 4 mols de gás hidrogênio e 3 mols de gás nitrogênio, reagindo segundo N₂ + 3 H₂ → 2 NH₃. Considerando a estequiometria da reação, o reagente limitante e a quantidade de amônia formada são, respectivamente:",
    opcoes: [
      "nitrogênio, formando 6 mols de NH₃",
      "hidrogênio, formando 4 mols de NH₃",
      "nitrogênio, formando 3 mols de NH₃",
      "hidrogênio, formando 2,67 mols de NH₃",
      "nenhum dos dois é limitante",
    ],
    correta: 3,
    explicacao:
      "Para consumir os 3 mols de N₂ seriam necessários 9 mols de H₂, mas só há 4 disponíveis; o hidrogênio, portanto, é o limitante. Com 4 mols de H₂, pela proporção 3:2, formam-se 4 × (2/3) ≈ 2,67 mols de NH₃, e ainda sobra nitrogênio sem reagir.",
  },
  {
    materia: "quimica",
    tema: "Reações químicas e balanceamento",
    dificuldade: "dificil",
    enunciado:
      "Um forno industrial produz cal virgem a partir da decomposição térmica de 500 kg de calcário (CaCO₃), com pureza de 80%, segundo CaCO₃ → CaO + CO₂. Sabendo que as massas molares do CaCO₃ e do CaO valem, respectivamente, 100 g/mol e 56 g/mol, a massa de óxido de cálcio produzida é de:",
    opcoes: [
      "280 kg",
      "400 kg",
      "500 kg",
      "224 kg",
      "180 kg",
    ],
    correta: 3,
    explicacao:
      "A massa de carbonato puro é 500 × 0,80 = 400 kg, equivalente a 4000 mol; na proporção 1:1, formam-se 4000 mol de CaO, cuja massa é 4000 × 56 g = 224 000 g = 224 kg. Esquecer de aplicar a pureza de 80% é o que levaria ao valor de 280 kg.",
  },
  {
    materia: "quimica",
    tema: "Reações químicas e balanceamento",
    dificuldade: "dificil",
    enunciado:
      "Uma indústria de fertilizantes produz sulfato de amônio a partir da reação entre amônia e ácido sulfúrico: 2 NH₃ + H₂SO₄ → (NH₄)₂SO₄. Ao reagir 68 kg de amônia (massa molar 17 g/mol) com ácido sulfúrico em quantidade suficiente, a massa de sulfato de amônio formada (massa molar 132 g/mol) é de:",
    opcoes: [
      "132 kg",
      "68 kg",
      "528 kg",
      "264 kg",
      "396 kg",
    ],
    correta: 3,
    explicacao:
      "Os 68 kg de amônia correspondem a 4000 mol; pela proporção 2:1, formam-se 2000 mol de sulfato de amônio, cuja massa é 2000 × 132 g = 264 000 g = 264 kg. Esquecer de dividir por 2 na proporção estequiométrica é o que dobraria indevidamente o resultado.",
  },
  {
    materia: "quimica",
    tema: "Reações químicas e balanceamento",
    dificuldade: "dificil",
    enunciado:
      "Um estudante realiza a reação entre 6 mols de gás hidrogênio e 2 mols de gás oxigênio, segundo 2 H₂ + O₂ → 2 H₂O. Após a reação se completar, é correto afirmar que:",
    opcoes: [
      "o hidrogênio é o limitante, e sobra oxigênio sem reagir",
      "ambos os reagentes se esgotam exatamente ao mesmo tempo",
      "não há reagente limitante, pois as quantidades são proporcionais",
      "o oxigênio é o limitante, e sobram 2 mols de hidrogênio sem reagir",
      "o oxigênio é o limitante, e sobram 4 mols de hidrogênio sem reagir",
    ],
    correta: 3,
    explicacao:
      "Para consumir os 6 mols de H₂ seriam necessários 3 mols de O₂, mas só há 2 disponíveis; o oxigênio se esgota primeiro. Com 2 mols de O₂, pela proporção 2:1, consomem-se 4 mols de H₂, restando 6 − 4 = 2 mols de H₂ sem reagir.",
  },
  {
    materia: "quimica",
    tema: "Reações químicas e balanceamento",
    dificuldade: "media",
    enunciado:
      "Ao adicionar uma solução de hidróxido de sódio a uma solução de sulfato de cobre II, observa-se a formação imediata de um sólido azul claro que se deposita no fundo do tubo de ensaio. A equação balanceada dessa reação de dupla troca é:",
    opcoes: [
      "CuSO₄ + NaOH → CuOH + NaSO₄",
      "2 CuSO₄ + NaOH → Cu₂(OH) + Na₂SO₄",
      "CuSO₄ + 2 NaOH → CuNa₂ + SO₄(OH)₂",
      "CuSO₄ + 2 NaOH → Cu(OH)₂ + Na₂SO₄",
      "CuSO₄ + NaOH → Cu(OH)₂ + Na₂SO₄",
    ],
    correta: 3,
    explicacao:
      "O cobre, de carga 2+, precisa de duas hidroxilas para formar Cu(OH)₂, o que exige dois NaOH; sobram dois sódios, que se combinam ao sulfato formando Na₂SO₄. O hidróxido de cobre II, pouco solúvel, é justamente o precipitado azul claro observado no experimento.",
  },
  {
    materia: "quimica",
    tema: "Reações químicas e balanceamento",
    dificuldade: "media",
    enunciado:
      "Um estudante compara duas reações: a queima de gás natural em um fogão e a fotossíntese realizada por uma planta. Quanto ao aspecto energético, essas duas reações são classificadas, respectivamente, como:",
    opcoes: [
      "endotérmica e exotérmica",
      "exotérmica e exotérmica",
      "endotérmica e endotérmica",
      "exotérmica e endotérmica",
      "neutra e exotérmica",
    ],
    correta: 3,
    explicacao:
      "A combustão libera energia na forma de calor e luz, sendo exotérmica; a fotossíntese, ao contrário, absorve energia luminosa do Sol para converter CO₂ e água em glicose e oxigênio, sendo endotérmica. São processos opostos do ponto de vista energético, embora ambos envolvam transformações químicas.",
  },
  {
    materia: "quimica",
    tema: "Reações químicas e balanceamento",
    dificuldade: "media",
    enunciado:
      "Ao balancear a equação Na₂CO₃ + HCl → NaCl + H₂O + CO₂, referente à reação entre carbonato de sódio e ácido clorídrico, os coeficientes corretos, na ordem apresentada, são:",
    opcoes: [
      "1, 1, 1, 1 e 1",
      "2, 2, 2, 1 e 1",
      "1, 2, 1, 1 e 1",
      "1, 2, 2, 1 e 1",
      "1, 2, 2, 2 e 1",
    ],
    correta: 3,
    explicacao:
      "Com 1 Na₂CO₃, 2 HCl, 2 NaCl, 1 H₂O e 1 CO₂, os dois sódios e os dois cloros batem, e os dois hidrogênios do ácido formam exatamente uma molécula de água. Esse tipo de reação libera CO₂ visível como borbulhamento, sinal prático de que o balanceamento está de acordo com o observado experimentalmente.",
  },
  {
    materia: "quimica",
    tema: "Reações químicas e balanceamento",
    dificuldade: "media",
    enunciado:
      "Um professor apresenta a reação Mg + N₂ → Mg₃N₂ para ilustrar a formação de nitreto de magnésio a partir dos elementos simples. Após o balanceamento correto, os coeficientes, na ordem apresentada, são:",
    opcoes: [
      "1, 1 e 1",
      "2, 1 e 1",
      "3, 2 e 1",
      "3, 1 e 1",
      "6, 1 e 2",
    ],
    correta: 3,
    explicacao:
      "Com 3 Mg, 1 N₂ e 1 Mg₃N₂, os três magnésios batem diretamente, e os dois nitrogênios da molécula N₂ igualam os dois nitrogênios do nitreto. Esse tipo de reação de síntese direta entre dois elementos costuma exigir ajustar primeiro o elemento que aparece em fórmula com maior índice.",
  },
  {
    materia: "quimica",
    tema: "Reações químicas e balanceamento",
    dificuldade: "facil",
    enunciado:
      "Ao acender uma churrasqueira a carvão, o carbono sólido reage com o oxigênio do ar formando gás carbônico, segundo C + O₂ → CO₂. Nessa equação, o coeficiente estequiométrico de cada substância, na ordem apresentada, já está corretamente balanceado como:",
    opcoes: [
      "1, 2 e 1",
      "2, 1 e 2",
      "1, 1 e 2",
      "2, 2 e 1",
      "1, 1 e 1",
    ],
    correta: 4,
    explicacao:
      "Contando os átomos, há 1 carbono e 2 oxigênios de cada lado com todos os coeficientes iguais a 1, então a equação já nasce balanceada, sem necessidade de ajustes. Nem toda equação exige coeficientes maiores que 1 para fechar a contagem de átomos.",
  },
  {
    materia: "quimica",
    tema: "Reações químicas e balanceamento",
    dificuldade: "facil",
    enunciado:
      "Uma reação em que um único composto se decompõe formando dois ou mais elementos ou compostos mais simples, como na eletrólise da água em hidrogênio e oxigênio, é chamada de reação de:",
    opcoes: [
      "síntese ou adição",
      "simples troca",
      "dupla troca",
      "neutralização",
      "análise ou decomposição",
    ],
    correta: 4,
    explicacao:
      "A eletrólise da água, 2 H₂O → 2 H₂ + O₂, é um exemplo de decomposição induzida por corrente elétrica: uma substância se quebra em duas mais simples. É o padrão inverso de uma síntese, em que duas substâncias se unem formando uma só.",
  },
  {
    materia: "quimica",
    tema: "Reações químicas e balanceamento",
    dificuldade: "media",
    enunciado:
      "Ao balancear a equação Fe + O₂ → Fe₂O₃, referente à formação da ferrugem a partir do ferro metálico, os coeficientes corretos, na ordem apresentada, são:",
    opcoes: [
      "2, 3 e 1",
      "1, 1 e 1",
      "2, 1 e 1",
      "4, 2 e 2",
      "4, 3 e 2",
    ],
    correta: 4,
    explicacao:
      "Com 4 Fe, 3 O₂ e 2 Fe₂O₃, os quatro ferros batem (2 × 2 nos produtos) e os oxigênios fecham em 6 de cada lado (3 × 2 nos reagentes e 2 × 3 nos produtos). Esse mesmo padrão de coeficientes, 4-3-2, reaparece sempre que um metal forma óxido de fórmula M₂O₃.",
  },
  {
    materia: "quimica",
    tema: "Reações químicas e balanceamento",
    dificuldade: "media",
    enunciado:
      "Um estudante observa que, ao misturar solução de nitrato de chumbo II com solução de iodeto de potássio, forma-se imediatamente um sólido amarelo vistoso, o iodeto de chumbo II. A equação balanceada dessa reação de dupla troca é:",
    opcoes: [
      "Pb(NO₃)₂ + KI → PbI + KNO₃",
      "2 Pb(NO₃)₂ + KI → Pb₂I + 2 KNO₃",
      "Pb(NO₃)₂ + 2 KI → PbK₂ + I₂NO₃",
      "Pb(NO₃)₂ + KI → PbI₂ + KNO₃",
      "Pb(NO₃)₂ + 2 KI → PbI₂ + 2 KNO₃",
    ],
    correta: 4,
    explicacao:
      "O chumbo, de carga 2+, exige dois iodetos para formar PbI₂, o que demanda dois KI; os dois potássios liberados se combinam aos dois nitratos, formando 2 KNO₃. Essa reação é um clássico de laboratório usado para ilustrar precipitação, pela cor amarela viva e vistosa do sólido formado.",
  },
  {
    materia: "quimica",
    tema: "Reações químicas e balanceamento",
    dificuldade: "media",
    enunciado:
      "Ao balancear a equação C₄H₁₀ + O₂ → CO₂ + H₂O, referente à combustão do gás butano usado em isqueiros, os coeficientes corretos, na ordem apresentada, são:",
    opcoes: [
      "1, 13, 4 e 10",
      "1, 6, 4 e 5",
      "2, 13, 4 e 5",
      "1, 13, 8 e 5",
      "2, 13, 8 e 10",
    ],
    correta: 4,
    explicacao:
      "Como o oxigênio dá número ímpar de átomos ao balancear com coeficiente 1 no butano, dobra-se tudo: com 2 C₄H₁₀, 13 O₂, 8 CO₂ e 10 H₂O, batem 8 carbonos, 20 hidrogênios (10 × 2) e 26 oxigênios (13 × 2 nos reagentes contra 16 + 10 nos produtos). Multiplicar toda a equação por 2 é o recurso padrão quando o balanceamento do oxigênio resulta em fração.",
  },
  {
    materia: "quimica",
    tema: "Reações químicas e balanceamento",
    dificuldade: "media",
    enunciado:
      "Um estudante observa que, ao adicionar solução de cloreto de bário a uma solução de sulfato de sódio, forma-se um precipitado branco de sulfato de bário, usado inclusive como contraste em exames radiológicos. A equação balanceada dessa reação é:",
    opcoes: [
      "BaCl₂ + Na₂SO₄ → Ba₂SO₄ + NaCl",
      "BaCl₂ + NaSO₄ → BaSO₄ + NaCl",
      "2 BaCl₂ + Na₂SO₄ → BaSO₄ + 2 NaCl",
      "BaCl₂ + Na₂SO₄ → BaSO₄ + NaCl₂",
      "BaCl₂ + Na₂SO₄ → BaSO₄ + 2 NaCl",
    ],
    correta: 4,
    explicacao:
      "O bário e o sulfato já reagem na proporção 1:1, formando BaSO₄, e os dois sódios do sulfato de sódio se combinam aos dois cloros do cloreto de bário, formando 2 NaCl. A baixíssima solubilidade do BaSO₄ é o que garante a formação visível do precipitado branco.",
  },
  {
    materia: "quimica",
    tema: "Reações químicas e balanceamento",
    dificuldade: "media",
    enunciado:
      "Uma reação de combustão incompleta de um hidrocarboneto, realizada em ambiente com pouco oxigênio disponível, tende a produzir, além de água, os seguintes subprodutos:",
    opcoes: [
      "apenas gás carbônico em maior quantidade que na combustão completa",
      "gás hidrogênio puro, sem qualquer composto de carbono",
      "exclusivamente água, sem nenhum composto de carbono",
      "ozônio como único subproduto da combustão",
      "monóxido de carbono e fuligem (carbono sólido), além do gás carbônico",
    ],
    correta: 4,
    explicacao:
      "Quando falta oxigênio para oxidar todo o carbono até CO₂, parte dele forma monóxido de carbono, tóxico, e parte pode ficar como fuligem de carbono não queimado, visível como fumaça escura. É por isso que motores e fogões mal regulados, com combustão incompleta, liberam mais poluentes e menos energia útil.",
  },
  {
    materia: "quimica",
    tema: "Reações químicas e balanceamento",
    dificuldade: "dificil",
    enunciado:
      "Uma indústria produz amônia pelo processo Haber-Bosch, N₂ + 3 H₂ → 2 NH₃, partindo de 28 kg de gás nitrogênio (massa molar 28 g/mol) e hidrogênio em excesso. A massa de amônia (massa molar 17 g/mol) formada, considerando rendimento de 100%, é de:",
    opcoes: [
      "17 kg",
      "51 kg",
      "28 kg",
      "68 kg",
      "34 kg",
    ],
    correta: 4,
    explicacao:
      "Os 28 kg de N₂ equivalem a 1000 mol; pela proporção 1:2 da equação, formam-se 2000 mol de NH₃, cuja massa é 2000 × 17 g = 34 000 g = 34 kg. Esquecer de dobrar a quantidade de produto, mantendo a proporção 1:1, é o que levaria ao valor de 17 kg.",
  },
  {
    materia: "quimica",
    tema: "Reações químicas e balanceamento",
    dificuldade: "dificil",
    enunciado:
      "Um laboratorista queima completamente 11,2 L de gás metano, medidos em condições normais de temperatura e pressão (1 mol de gás ocupa 22,4 L), segundo CH₄ + 2 O₂ → CO₂ + 2 H₂O. O volume de CO₂ formado, nas mesmas condições, é de:",
    opcoes: [
      "22,4 L",
      "5,6 L",
      "44,8 L",
      "33,6 L",
      "11,2 L",
    ],
    correta: 4,
    explicacao:
      "Os 11,2 L de metano correspondem a 0,5 mol, e a proporção CH₄ : CO₂ na equação é de 1:1, então também se formam 0,5 mol de CO₂, ou seja, 11,2 L nas mesmas condições. Para gases nas mesmas condições de temperatura e pressão, a proporção em volume é igual à proporção em mols, o que dispensa converter para massa.",
  },
  {
    materia: "quimica",
    tema: "Reações químicas e balanceamento",
    dificuldade: "dificil",
    enunciado:
      "Uma mistura reacional contém 4 mols de gás cloro (Cl₂) e 10 mols de gás hidrogênio (H₂), que reagem segundo H₂ + Cl₂ → 2 HCl. Após a reação se completar, a quantidade de HCl formada e o reagente que sobra em excesso são, respectivamente:",
    opcoes: [
      "8 mols de HCl, sobrando 6 mols de Cl₂",
      "10 mols de HCl, sobrando 4 mols de H₂",
      "4 mols de HCl, sobrando 6 mols de H₂",
      "14 mols de HCl, sem excesso de nenhum reagente",
      "8 mols de HCl, sobrando 6 mols de H₂",
    ],
    correta: 4,
    explicacao:
      "Como a proporção é 1:1, o Cl₂ se esgota primeiro por ser o menor: 4 mols de Cl₂ reagem com 4 mols de H₂, formando 8 mols de HCl (proporção 1:2), e sobram 10 − 4 = 6 mols de H₂ sem reagir. Comparar diretamente as quantidades disponíveis, já que a proporção é 1:1, é o atalho mais rápido para identificar o limitante nesse caso.",
  },
];
