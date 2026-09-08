/* Estequiometria e cálculos (50 questões).
   Mol, massa molar, número de Avogadro, cálculos estequiométricos,
   pureza, rendimento e volume molar dos gases.
   Ver quimica.mjs para o formato. */

export const questoes = [
  {
    materia: "quimica",
    tema: "Estequiometria e cálculos",
    dificuldade: "facil",
    enunciado:
      "O mol é a unidade de medida usada em química para contar entidades elementares, como átomos ou moléculas. Um mol de qualquer substância contém, aproximadamente, o seguinte número de entidades:",
    opcoes: [
      "6,02 × 10²³",
      "6,02 × 10²²",
      "3,01 × 10²³",
      "1,00 × 10²³",
      "6,02 × 10²⁴",
    ],
    correta: 0,
    explicacao:
      "O número de Avogadro, 6,02 × 10²³, é a quantidade de entidades presentes em um mol de qualquer substância, seja ela composta por átomos, moléculas ou íons. Esse valor gigantesco é necessário porque átomos e moléculas são extremamente pequenos e numerosos mesmo em amostras minúsculas.",
  },
  {
    materia: "quimica",
    tema: "Estequiometria e cálculos",
    dificuldade: "facil",
    enunciado:
      "A massa molar de uma substância corresponde à massa, em gramas, de um mol dessa substância. Sabendo que a massa molar do carbono é 12 g/mol, a massa de 2 mols de átomos de carbono é de:",
    opcoes: [
      "24 g",
      "12 g",
      "6 g",
      "48 g",
      "2 g",
    ],
    correta: 0,
    explicacao:
      "Basta multiplicar a massa molar pelo número de mols: 12 g/mol × 2 mol = 24 g. Esse tipo de conversão simples, massa igual a mols vezes massa molar, é a base de praticamente todo cálculo estequiométrico.",
  },
  {
    materia: "quimica",
    tema: "Estequiometria e cálculos",
    dificuldade: "facil",
    enunciado:
      "A massa molar da água, H₂O, calculada a partir das massas atômicas do hidrogênio (1 g/mol) e do oxigênio (16 g/mol), vale:",
    opcoes: [
      "18 g/mol",
      "17 g/mol",
      "16 g/mol",
      "34 g/mol",
      "9 g/mol",
    ],
    correta: 0,
    explicacao:
      "A massa molar de um composto é a soma das massas atômicas de todos os átomos da fórmula: 2 × 1 + 16 = 18 g/mol. Esquecer de multiplicar o hidrogênio pelo índice 2 é o erro mais comum, que levaria ao valor 17 g/mol.",
  },
  {
    materia: "quimica",
    tema: "Estequiometria e cálculos",
    dificuldade: "facil",
    enunciado:
      "Um frasco contém 36 g de água. Sabendo que a massa molar da água é 18 g/mol, a quantidade de matéria, em mols, presente nesse frasco é de:",
    opcoes: [
      "2 mols",
      "18 mols",
      "36 mols",
      "0,5 mol",
      "648 mols",
    ],
    correta: 0,
    explicacao:
      "O número de mols é a massa dividida pela massa molar: 36 ÷ 18 = 2 mols. É essa divisão simples, e não a multiplicação, que converte uma massa em gramas para a quantidade de matéria correspondente.",
  },
  {
    materia: "quimica",
    tema: "Estequiometria e cálculos",
    dificuldade: "facil",
    enunciado:
      "Em condições normais de temperatura e pressão (CNTP), 1 mol de qualquer gás ideal ocupa um volume de aproximadamente:",
    opcoes: [
      "22,4 L",
      "24,0 L",
      "11,2 L",
      "6,02 L",
      "1,0 L",
    ],
    correta: 0,
    explicacao:
      "O volume molar dos gases nas CNTP (0 °C e 1 atm) é 22,4 L/mol, valor válido para qualquer gás que se comporte de forma aproximadamente ideal nessas condições. Esse número é a base para converter volume de gás em quantidade de matéria sem precisar da equação geral dos gases.",
  },
  {
    materia: "quimica",
    tema: "Estequiometria e cálculos",
    dificuldade: "facil",
    enunciado:
      "Considerando o número de Avogadro igual a 6,02 × 10²³, o número de moléculas presentes em 2 mols de gás oxigênio, O₂, é de:",
    opcoes: [
      "1,204 × 10²⁴",
      "6,02 × 10²³",
      "3,01 × 10²³",
      "1,204 × 10²³",
      "6,02 × 10²⁴",
    ],
    correta: 0,
    explicacao:
      "Basta multiplicar o número de mols pela constante de Avogadro: 2 × 6,02 × 10²³ = 1,204 × 10²⁴ moléculas. O resultado cresce proporcionalmente ao número de mols, então dobrar a quantidade de matéria dobra também o número de entidades.",
  },
  {
    materia: "quimica",
    tema: "Estequiometria e cálculos",
    dificuldade: "facil",
    enunciado:
      "A massa molar do gás carbônico, CO₂, calculada a partir das massas atômicas do carbono (12 g/mol) e do oxigênio (16 g/mol), é de:",
    opcoes: [
      "44 g/mol",
      "28 g/mol",
      "32 g/mol",
      "16 g/mol",
      "12 g/mol",
    ],
    correta: 0,
    explicacao:
      "Somando as massas atômicas com os respectivos índices: 12 + 2 × 16 = 12 + 32 = 44 g/mol. Esse valor, 44 g/mol, é usado com frequência em cálculos de emissão de CO₂ e de reações de combustão.",
  },
  {
    materia: "quimica",
    tema: "Estequiometria e cálculos",
    dificuldade: "facil",
    enunciado:
      "A pureza de uma amostra indica a porcentagem de substância realmente útil presente em um material que também contém impurezas. Uma amostra de 100 g de minério com 80% de pureza contém, de substância pura, uma massa de:",
    opcoes: [
      "80 g",
      "20 g",
      "100 g",
      "8 g",
      "60 g",
    ],
    correta: 0,
    explicacao:
      "Basta aplicar a porcentagem sobre a massa total: 100 × 0,80 = 80 g de substância pura, restando 20 g de impurezas. É esse ajuste pela pureza que torna os cálculos estequiométricos realistas, já que minérios e reagentes comerciais raramente são 100% puros.",
  },
  {
    materia: "quimica",
    tema: "Estequiometria e cálculos",
    dificuldade: "facil",
    enunciado:
      "O rendimento de uma reação química compara a quantidade de produto realmente obtida com a quantidade teórica prevista pelos cálculos estequiométricos. Uma reação com rendimento de 100% é aquela em que:",
    opcoes: [
      "toda a quantidade teórica de produto prevista é de fato obtida",
      "nenhum produto é formado",
      "o reagente limitante não é totalmente consumido",
      "apenas metade dos reagentes participa da reação",
      "a reação ocorre sem liberar nem absorver energia",
    ],
    correta: 0,
    explicacao:
      "O rendimento de 100% representa o caso ideal em que a massa obtida experimentalmente coincide exatamente com a massa calculada pela estequiometria. Na prática, reações reais quase sempre têm rendimento menor, por perdas físicas ou reações paralelas indesejadas.",
  },
  {
    materia: "quimica",
    tema: "Estequiometria e cálculos",
    dificuldade: "facil",
    enunciado:
      "Um recipiente contém 3 mols de gás nitrogênio, N₂. O número de átomos de nitrogênio presentes nesse recipiente, considerando que cada molécula tem dois átomos, é de:",
    opcoes: [
      "3,612 × 10²⁴",
      "1,806 × 10²⁴",
      "6,02 × 10²³",
      "1,806 × 10²³",
      "9,03 × 10²³",
    ],
    correta: 0,
    explicacao:
      "Primeiro calcula-se o número de moléculas, 3 × 6,02 × 10²³ = 1,806 × 10²⁴, e depois multiplica-se por 2, já que cada molécula de N₂ tem dois átomos: 3,612 × 10²⁴ átomos. Esquecer de contar os dois átomos por molécula é o que levaria ao valor pela metade.",
  },
  {
    materia: "quimica",
    tema: "Estequiometria e cálculos",
    dificuldade: "media",
    enunciado:
      "Uma amostra de calcário impuro, de massa 250 g, contém 90% de carbonato de cálcio, CaCO₃. Ao ser totalmente decomposta pelo calor segundo CaCO₃ → CaO + CO₂, sabendo que as massas molares do CaCO₃ e do CaO são, respectivamente, 100 g/mol e 56 g/mol, a massa de óxido de cálcio formada é de:",
    opcoes: [
      "126 g",
      "140 g",
      "225 g",
      "112 g",
      "100 g",
    ],
    correta: 0,
    explicacao:
      "A massa de carbonato puro é 250 × 0,90 = 225 g, equivalente a 2,25 mol; na proporção 1:1, formam-se 2,25 mol de CaO, cuja massa é 2,25 × 56 = 126 g. Ignorar a pureza de 90% e usar os 250 g inteiros é o que levaria ao valor de 140 g.",
  },
  {
    materia: "quimica",
    tema: "Estequiometria e cálculos",
    dificuldade: "media",
    enunciado:
      "Uma reação entre zinco metálico e ácido clorídrico, Zn + 2 HCl → ZnCl₂ + H₂, é realizada em laboratório partindo de 13 g de zinco (massa molar 65 g/mol). A quantidade teórica de gás hidrogênio formada, em mols, é de:",
    opcoes: [
      "0,1 mol",
      "0,2 mol",
      "0,4 mol",
      "2,0 mols",
      "1,0 mol",
    ],
    correta: 1,
    explicacao:
      "Os 13 g de zinco equivalem a 13 ÷ 65 = 0,2 mol; pela proporção 1:1 entre zinco e hidrogênio na equação, formam-se também 0,2 mol de H₂. A proporção direta 1:1 é o que torna esse cálculo mais simples que os que envolvem coeficientes diferentes.",
  },
  {
    materia: "quimica",
    tema: "Estequiometria e cálculos",
    dificuldade: "media",
    enunciado:
      "Uma reação de síntese de amônia, N₂ + 3 H₂ → 2 NH₃, foi realizada com quantidade suficiente de reagentes para formar teoricamente 68 g de amônia (massa molar 17 g/mol). No entanto, apenas 51 g de amônia foram efetivamente obtidos. O rendimento percentual dessa reação foi de:",
    opcoes: [
      "68%",
      "75%",
      "51%",
      "85%",
      "60%",
    ],
    correta: 1,
    explicacao:
      "O rendimento percentual é a razão entre a massa obtida e a massa teórica, multiplicada por 100: (51 ÷ 68) × 100 = 75%. Esse tipo de cálculo é fundamental na indústria química para avaliar a eficiência real de um processo frente ao previsto pela estequiometria.",
  },
  {
    materia: "quimica",
    tema: "Estequiometria e cálculos",
    dificuldade: "media",
    enunciado:
      "Uma indústria pretende produzir 340 kg de amônia (massa molar 17 g/mol) pelo processo N₂ + 3 H₂ → 2 NH₃. A massa de gás nitrogênio (massa molar 28 g/mol) necessária para essa produção, considerando rendimento de 100%, é de:",
    opcoes: [
      "340 kg",
      "280 kg",
      "560 kg",
      "140 kg",
      "170 kg",
    ],
    correta: 1,
    explicacao:
      "Os 340 kg de amônia correspondem a 20 000 mol; pela proporção 1:2 da equação, são necessários 10 000 mol de N₂, cuja massa é 10 000 × 28 g = 280 000 g = 280 kg. Usar a proporção 1:1 em vez de 1:2 é o que levaria ao dobro do valor correto.",
  },
  {
    materia: "quimica",
    tema: "Estequiometria e cálculos",
    dificuldade: "media",
    enunciado:
      "Um estudante calcula quantos átomos de oxigênio existem em uma amostra de 0,5 mol de gás oxigênio, O₂. Sabendo que cada molécula de O₂ contém dois átomos, o número de átomos de oxigênio presente na amostra é de:",
    opcoes: [
      "3,01 × 10²³",
      "6,02 × 10²³",
      "1,204 × 10²⁴",
      "3,01 × 10²²",
      "1,505 × 10²³",
    ],
    correta: 1,
    explicacao:
      "O número de moléculas é 0,5 × 6,02 × 10²³ = 3,01 × 10²³, e multiplicando por 2 átomos por molécula chega-se a 6,02 × 10²³ átomos. É fácil esquecer o segundo passo, contando as moléculas como se fossem os próprios átomos.",
  },
  {
    materia: "quimica",
    tema: "Estequiometria e cálculos",
    dificuldade: "media",
    enunciado:
      "Uma amostra de mármore impuro, usada em uma prática de laboratório, tem massa de 40 g e reage completamente com ácido clorídrico em excesso, liberando 8,96 L de gás carbônico medidos em condições normais (22,4 L/mol), segundo CaCO₃ + 2 HCl → CaCl₂ + H₂O + CO₂. Sabendo que a massa molar do CaCO₃ é 100 g/mol, o grau de pureza dessa amostra de mármore é de:",
    opcoes: [
      "80%",
      "100%",
      "89,6%",
      "50%",
      "40%",
    ],
    correta: 1,
    explicacao:
      "Os 8,96 L de CO₂ correspondem a 0,4 mol; pela proporção 1:1, reagiram 0,4 mol de CaCO₃, ou 40 g. Como a amostra pesava exatamente 40 g, toda ela era carbonato de cálcio puro, resultando em pureza de 100%.",
  },
  {
    materia: "quimica",
    tema: "Estequiometria e cálculos",
    dificuldade: "media",
    enunciado:
      "Uma reação entre alumínio e ácido sulfúrico, 2 Al + 3 H₂SO₄ → Al₂(SO₄)₃ + 3 H₂, parte de 5,4 g de alumínio (massa molar 27 g/mol) e ácido em excesso. O volume de gás hidrogênio formado, medido em condições normais de temperatura e pressão (22,4 L/mol), é de:",
    opcoes: [
      "4,48 L",
      "6,72 L",
      "2,24 L",
      "13,44 L",
      "22,4 L",
    ],
    correta: 1,
    explicacao:
      "Os 5,4 g de alumínio equivalem a 0,2 mol; pela proporção 2:3 da equação, formam-se 0,3 mol de H₂, que em volume molar 22,4 L/mol resultam em 6,72 L. Aplicar a proporção 2:3 corretamente, e não uma proporção 1:1 simplificada, é o que garante o resultado certo.",
  },
  {
    materia: "quimica",
    tema: "Estequiometria e cálculos",
    dificuldade: "media",
    enunciado:
      "Uma fábrica de bebidas gaseificadas produz gás carbônico pela decomposição de bicarbonato de sódio, 2 NaHCO₃ → Na₂CO₃ + H₂O + CO₂. Partindo de 168 kg de NaHCO₃ (massa molar 84 g/mol), a massa de CO₂ (massa molar 44 g/mol) produzida é de:",
    opcoes: [
      "88 kg",
      "44 kg",
      "22 kg",
      "168 kg",
      "84 kg",
    ],
    correta: 1,
    explicacao:
      "Os 168 kg de bicarbonato equivalem a 2000 mol; pela proporção 2:1 da equação, formam-se 1000 mol de CO₂, cuja massa é 1000 × 44 g = 44 000 g = 44 kg. Usar a proporção 1:1 em vez de 2:1 é o que dobraria indevidamente o resultado.",
  },
  {
    materia: "quimica",
    tema: "Estequiometria e cálculos",
    dificuldade: "media",
    enunciado:
      "Um laboratorista dissolve 5 g de hidróxido de sódio (massa molar 40 g/mol) em água suficiente para completar exatamente 500 mL de solução. A concentração em mol/L dessa solução é de:",
    opcoes: [
      "0,125 mol/L",
      "0,25 mol/L",
      "0,5 mol/L",
      "2,5 mol/L",
      "0,025 mol/L",
    ],
    correta: 1,
    explicacao:
      "O número de mols de soluto é 5 ÷ 40 = 0,125 mol, e dividindo pelo volume em litros, 0,5 L, obtém-se 0,25 mol/L. Esquecer de converter os 500 mL para 0,5 L antes de dividir é um dos erros mais comuns nesse tipo de cálculo.",
  },
  {
    materia: "quimica",
    tema: "Estequiometria e cálculos",
    dificuldade: "media",
    enunciado:
      "Uma indústria metalúrgica processa 800 kg de minério de ferro com 70% de pureza em óxido de ferro III, Fe₂O₃ (massa molar 160 g/mol), reduzido a ferro metálico (massa molar 56 g/mol) segundo Fe₂O₃ + 3 CO → 2 Fe + 3 CO₂. A massa de ferro metálico teoricamente obtida é de:",
    opcoes: [
      "560 kg",
      "392 kg",
      "280 kg",
      "800 kg",
      "196 kg",
    ],
    correta: 1,
    explicacao:
      "A massa de óxido puro é 800 × 0,70 = 560 kg, equivalente a 3500 mol; pela proporção 1:2, formam-se 7000 mol de Fe, cuja massa é 7000 × 56 g = 392 000 g = 392 kg. Esquecer de dobrar o ferro na proporção 1:2 é o que levaria ao valor de 196 kg.",
  },
  {
    materia: "quimica",
    tema: "Estequiometria e cálculos",
    dificuldade: "media",
    enunciado:
      "Um estudante mede 5,6 L de gás nitrogênio em condições normais de temperatura e pressão (22,4 L/mol). A massa desse gás, sabendo que a massa molar do N₂ é 28 g/mol, é de:",
    opcoes: [
      "5,6 g",
      "7 g",
      "22,4 g",
      "28 g",
      "14 g",
    ],
    correta: 1,
    explicacao:
      "Primeiro se calcula o número de mols, 5,6 ÷ 22,4 = 0,25 mol, e depois multiplica-se pela massa molar: 0,25 × 28 = 7 g. Esse tipo de conversão em duas etapas, de volume para mol e de mol para massa, é recorrente em questões que envolvem gases.",
  },
  {
    materia: "quimica",
    tema: "Estequiometria e cálculos",
    dificuldade: "media",
    enunciado:
      "Uma reação de combustão do gás propano, C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O, parte de 22 g de propano (massa molar 44 g/mol) e oxigênio em excesso. A massa de água formada, sabendo que a massa molar da água é 18 g/mol, é de:",
    opcoes: [
      "18 g",
      "72 g",
      "36 g",
      "44 g",
      "22 g",
    ],
    correta: 2,
    explicacao:
      "Os 22 g de propano equivalem a 0,5 mol; pela proporção 1:4 da equação, formam-se 2 mols de água, cuja massa é 2 × 18 = 36 g. Ignorar o coeficiente 4 do produto e usar proporção 1:1 é o que levaria ao valor de 18 g.",
  },
  {
    materia: "quimica",
    tema: "Estequiometria e cálculos",
    dificuldade: "dificil",
    enunciado:
      "Uma mistura reacional é preparada com 4 mols de gás hidrogênio e 1,2 mol de gás nitrogênio, que reagem segundo N₂ + 3 H₂ → 2 NH₃. Sabendo que o reagente limitante é o nitrogênio, a massa de amônia formada, considerando massa molar 17 g/mol, é de:",
    opcoes: [
      "68 g",
      "20,4 g",
      "40,8 g",
      "34 g",
      "81,6 g",
    ],
    correta: 2,
    explicacao:
      "Com 1,2 mol de N₂ como limitante, pela proporção 1:2, formam-se 2,4 mols de NH₃, cuja massa é 2,4 × 17 = 40,8 g. Usar o hidrogênio, que está em excesso, como base do cálculo é o erro que levaria a um valor superestimado.",
  },
  {
    materia: "quimica",
    tema: "Estequiometria e cálculos",
    dificuldade: "dificil",
    enunciado:
      "Uma amostra de 20 g de uma liga metálica contendo zinco reage completamente com ácido clorídrico em excesso, liberando 3,36 L de gás hidrogênio medidos em condições normais (22,4 L/mol), segundo Zn + 2 HCl → ZnCl₂ + H₂. Sabendo que a massa molar do zinco é 65 g/mol, a porcentagem em massa de zinco presente na liga é de:",
    opcoes: [
      "65%",
      "97,5%",
      "48,75%",
      "32,5%",
      "24,4%",
    ],
    correta: 2,
    explicacao:
      "Os 3,36 L de H₂ correspondem a 0,15 mol; pela proporção 1:1, reagiram 0,15 mol de zinco, ou 0,15 × 65 = 9,75 g. Dividindo pela massa total da liga, 9,75 ÷ 20 × 100 = 48,75% é o percentual de zinco presente.",
  },
  {
    materia: "quimica",
    tema: "Estequiometria e cálculos",
    dificuldade: "dificil",
    enunciado:
      "Uma indústria de fertilizantes processa 1000 kg de rocha fosfática com 62% de pureza em fosfato de cálcio, Ca₃(PO₄)₂ (massa molar 310 g/mol). Reagindo totalmente com ácido sulfúrico em excesso, segundo Ca₃(PO₄)₂ + 3 H₂SO₄ → 3 CaSO₄ + 2 H₃PO₄, a massa de ácido fosfórico (massa molar 98 g/mol) produzida é de:",
    opcoes: [
      "620 kg",
      "196 kg",
      "392 kg",
      "310 kg",
      "784 kg",
    ],
    correta: 2,
    explicacao:
      "A massa de fosfato puro é 1000 × 0,62 = 620 kg, equivalente a 2000 mol; pela proporção 1:2, formam-se 4000 mol de H₃PO₄, cuja massa é 4000 × 98 g = 392 000 g = 392 kg. Aplicar a pureza antes de converter para mols é o passo que não pode ser pulado nesse tipo de cálculo industrial.",
  },
  {
    materia: "quimica",
    tema: "Estequiometria e cálculos",
    dificuldade: "dificil",
    enunciado:
      "Uma reação entre 3 mols de gás cloro e 5 mols de gás hidrogênio, segundo H₂ + Cl₂ → 2 HCl, ocorre com rendimento de 80%. A massa de ácido clorídrico (massa molar 36,5 g/mol) efetivamente obtida é de:",
    opcoes: [
      "219 g",
      "146 g",
      "175,2 g",
      "292 g",
      "87,6 g",
    ],
    correta: 2,
    explicacao:
      "O cloro é o limitante (3 mols contra os 5 de hidrogênio, na proporção 1:1); pela proporção 1:2, o rendimento teórico é 6 mols de HCl, ou 219 g. Aplicando 80% de rendimento: 219 × 0,80 = 175,2 g. Esquecer de identificar o cloro como limitante é o que levaria a superestimar a quantidade teórica de produto.",
  },
  {
    materia: "quimica",
    tema: "Estequiometria e cálculos",
    dificuldade: "dificil",
    enunciado:
      "Uma siderúrgica reduz 2000 kg de óxido de ferro III (massa molar 160 g/mol), com pureza de 95%, segundo Fe₂O₃ + 3 CO → 2 Fe + 3 CO₂. Considerando rendimento de 90% do processo, a massa de ferro (massa molar 56 g/mol) efetivamente obtida é de:",
    opcoes: [
      "1330 kg",
      "700 kg",
      "1197 kg",
      "1064 kg",
      "1400 kg",
    ],
    correta: 2,
    explicacao:
      "A massa de óxido puro é 2000 × 0,95 = 1900 kg, ou 11 875 mol; pela proporção 1:2, o rendimento teórico é 23 750 mol de Fe, ou 1330 kg. Aplicando 90% de rendimento: 1330 × 0,90 = 1197 kg. É preciso encadear pureza, estequiometria e rendimento, nessa ordem, sem pular nenhuma etapa.",
  },
  {
    materia: "quimica",
    tema: "Estequiometria e cálculos",
    dificuldade: "dificil",
    enunciado:
      "Uma solução aquosa de ácido sulfúrico é preparada dissolvendo 49 g de H₂SO₄ (massa molar 98 g/mol) em água suficiente para completar 2 L de solução. Sabendo que o ácido sulfúrico é diprótico, a concentração de íons H⁺ liberados nessa solução, admitindo ionização total, é de:",
    opcoes: [
      "0,25 mol/L",
      "1,0 mol/L",
      "0,5 mol/L",
      "0,125 mol/L",
      "2,0 mol/L",
    ],
    correta: 2,
    explicacao:
      "A quantidade de H₂SO₄ é 49 ÷ 98 = 0,5 mol, resultando em concentração de 0,25 mol/L; como cada mol do ácido libera dois mols de H⁺, a concentração de H⁺ é o dobro, 0,5 mol/L. Esquecer de multiplicar por 2, por ser um ácido diprótico, é o erro que levaria ao valor 0,25 mol/L.",
  },
  {
    materia: "quimica",
    tema: "Estequiometria e cálculos",
    dificuldade: "dificil",
    enunciado:
      "Uma mistura de 10 g de carbonato de cálcio e 10 g de carbonato de sódio (massas molares 100 g/mol e 106 g/mol, respectivamente) é totalmente decomposta pelo calor. Sabendo que apenas o carbonato de cálcio se decompõe termicamente com facilidade nessa faixa de temperatura, segundo CaCO₃ → CaO + CO₂, o volume de CO₂ liberado, em condições normais (22,4 L/mol), é de:",
    opcoes: [
      "4,48 L",
      "2,12 L",
      "2,24 L",
      "22,4 L",
      "1,12 L",
    ],
    correta: 2,
    explicacao:
      "Somente o CaCO₃ reage nessas condições: 10 g correspondem a 0,1 mol, que pela proporção 1:1 liberam 0,1 mol de CO₂, ou seja, 2,24 L. O carbonato de sódio, por não se decompor na mesma faixa de temperatura, não contribui para o volume de gás liberado neste problema.",
  },
  {
    materia: "quimica",
    tema: "Estequiometria e cálculos",
    dificuldade: "media",
    enunciado:
      "A massa molar do ácido sulfúrico, H₂SO₄, calculada a partir das massas atômicas do hidrogênio (1 g/mol), do enxofre (32 g/mol) e do oxigênio (16 g/mol), vale:",
    opcoes: [
      "82 g/mol",
      "66 g/mol",
      "98 g/mol",
      "114 g/mol",
      "49 g/mol",
    ],
    correta: 2,
    explicacao:
      "Somando as parcelas: 2 × 1 (hidrogênio) + 32 (enxofre) + 4 × 16 (oxigênio) = 2 + 32 + 64 = 98 g/mol. Esquecer de multiplicar o oxigênio pelo índice 4 é o deslize mais comum, que levaria a um valor bem menor que o correto.",
  },
  {
    materia: "quimica",
    tema: "Estequiometria e cálculos",
    dificuldade: "media",
    enunciado:
      "Um frasco de laboratório contém 88 g de gás carbônico, CO₂ (massa molar 44 g/mol). O número de moléculas presentes nesse frasco é de:",
    opcoes: [
      "6,02 × 10²³",
      "2,408 × 10²⁴",
      "1,204 × 10²⁴",
      "3,01 × 10²³",
      "4,4 × 10²³",
    ],
    correta: 2,
    explicacao:
      "Primeiro se calcula o número de mols, 88 ÷ 44 = 2 mols, e depois multiplica-se pelo número de Avogadro: 2 × 6,02 × 10²³ = 1,204 × 10²⁴ moléculas. Pular a conversão para mols e multiplicar direto a massa pela constante de Avogadro é um erro comum que gera um número sem sentido físico.",
  },
  {
    materia: "quimica",
    tema: "Estequiometria e cálculos",
    dificuldade: "media",
    enunciado:
      "Uma reação de neutralização entre ácido clorídrico e hidróxido de sódio, HCl + NaOH → NaCl + H₂O, é realizada com 0,3 mol de cada reagente. A massa de cloreto de sódio formada, sabendo que sua massa molar é 58,5 g/mol, é de:",
    opcoes: [
      "58,5 g",
      "29,25 g",
      "35,1 g",
      "17,55 g",
      "11,7 g",
    ],
    correta: 3,
    explicacao:
      "Como a proporção é 1:1:1:1, e nenhum reagente está em excesso, formam-se 0,3 mol de NaCl, cuja massa é 0,3 × 58,5 = 17,55 g. Reações de neutralização com proporções simples como essa costumam ser as mais diretas de calcular em estequiometria.",
  },
  {
    materia: "quimica",
    tema: "Estequiometria e cálculos",
    dificuldade: "facil",
    enunciado:
      "A massa molar do gás metano, CH₄, calculada a partir das massas atômicas do carbono (12 g/mol) e do hidrogênio (1 g/mol), vale:",
    opcoes: [
      "13 g/mol",
      "12 g/mol",
      "20 g/mol",
      "16 g/mol",
      "4 g/mol",
    ],
    correta: 3,
    explicacao:
      "Somando as parcelas: 12 + 4 × 1 = 16 g/mol. Esse valor é usado com frequência em cálculos envolvendo o gás natural, cujo principal componente é justamente o metano.",
  },
  {
    materia: "quimica",
    tema: "Estequiometria e cálculos",
    dificuldade: "facil",
    enunciado:
      "Um frasco contém 3 mols de glicose, C₆H₁₂O₆. O número de moléculas de glicose presentes nesse frasco, considerando o número de Avogadro igual a 6,02 × 10²³, é de:",
    opcoes: [
      "6,02 × 10²³",
      "2,006 × 10²³",
      "1,806 × 10²³",
      "1,806 × 10²⁴",
      "3,01 × 10²³",
    ],
    correta: 3,
    explicacao:
      "Basta multiplicar o número de mols pela constante de Avogadro: 3 × 6,02 × 10²³ = 1,806 × 10²⁴ moléculas. A fórmula da glicose, embora mais complexa, não muda o procedimento de contagem de entidades a partir do número de mols.",
  },
  {
    materia: "quimica",
    tema: "Estequiometria e cálculos",
    dificuldade: "facil",
    enunciado:
      "Um balão de gás contém 44,8 L de gás hélio medidos em condições normais de temperatura e pressão, nas quais 1 mol de gás ocupa 22,4 L. A quantidade de matéria de hélio presente nesse balão é de:",
    opcoes: [
      "1 mol",
      "4 mols",
      "0,5 mol",
      "2 mols",
      "22,4 mols",
    ],
    correta: 3,
    explicacao:
      "Basta dividir o volume pelo volume molar: 44,8 ÷ 22,4 = 2 mols. Essa conversão direta entre volume de gás e quantidade de matéria só é válida nas condições normais de temperatura e pressão, ou em condições equivalentes especificadas no enunciado.",
  },
  {
    materia: "quimica",
    tema: "Estequiometria e cálculos",
    dificuldade: "media",
    enunciado:
      "Uma amostra de 8 g de gás metano, CH₄ (massa molar 16 g/mol), é totalmente queimada segundo CH₄ + 2 O₂ → CO₂ + 2 H₂O. A massa de gás carbônico formada, sabendo que sua massa molar é 44 g/mol, é de:",
    opcoes: [
      "44 g",
      "11 g",
      "16 g",
      "22 g",
      "8 g",
    ],
    correta: 3,
    explicacao:
      "Os 8 g de metano equivalem a 0,5 mol; pela proporção 1:1 entre CH₄ e CO₂ na equação, formam-se 0,5 mol de CO₂, cuja massa é 0,5 × 44 = 22 g. A proporção direta 1:1 simplifica bastante esse tipo de cálculo de combustão.",
  },
  {
    materia: "quimica",
    tema: "Estequiometria e cálculos",
    dificuldade: "media",
    enunciado:
      "Uma reação de decomposição do clorato de potássio, 2 KClO₃ → 2 KCl + 3 O₂, parte de 24,5 g de KClO₃ (massa molar 122,5 g/mol). O volume de gás oxigênio formado, medido em condições normais de temperatura e pressão (22,4 L/mol), é de:",
    opcoes: [
      "4,48 L",
      "2,24 L",
      "13,44 L",
      "6,72 L",
      "22,4 L",
    ],
    correta: 3,
    explicacao:
      "Os 24,5 g de clorato equivalem a 0,2 mol; pela proporção 2:3 da equação, formam-se 0,3 mol de O₂, que em volume molar 22,4 L/mol resultam em 6,72 L. Aplicar corretamente a proporção 2:3, e não uma simplificação para 1:1, é o que garante esse resultado.",
  },
  {
    materia: "quimica",
    tema: "Estequiometria e cálculos",
    dificuldade: "media",
    enunciado:
      "Uma indústria de vidro utiliza areia (dióxido de silício, SiO₂) como matéria-prima. Uma amostra de 300 kg de areia com 80% de pureza em SiO₂ contém, de dióxido de silício puro, uma massa de:",
    opcoes: [
      "60 kg",
      "300 kg",
      "24 kg",
      "240 kg",
      "180 kg",
    ],
    correta: 3,
    explicacao:
      "Basta aplicar a porcentagem de pureza sobre a massa total: 300 × 0,80 = 240 kg de SiO₂ puro, restando 60 kg de impurezas. Esse tipo de ajuste pela pureza é indispensável antes de qualquer cálculo estequiométrico com matérias-primas naturais.",
  },
  {
    materia: "quimica",
    tema: "Estequiometria e cálculos",
    dificuldade: "media",
    enunciado:
      "Uma reação de síntese da água, 2 H₂ + O₂ → 2 H₂O, é realizada com 4 mols de gás hidrogênio e oxigênio suficiente. Sabendo que a massa molar da água é 18 g/mol, a massa de água teoricamente formada é de:",
    opcoes: [
      "36 g",
      "18 g",
      "144 g",
      "72 g",
      "4 g",
    ],
    correta: 3,
    explicacao:
      "Pela proporção 1:1 entre H₂ e H₂O na equação, 4 mols de hidrogênio formam 4 mols de água, cuja massa é 4 × 18 = 72 g. Conferir a proporção direto na equação balanceada evita confundir os coeficientes do H₂ e do O₂.",
  },
  {
    materia: "quimica",
    tema: "Estequiometria e cálculos",
    dificuldade: "media",
    enunciado:
      "Uma amostra de zinco impuro, de massa 130 g, reage completamente com ácido clorídrico em excesso, segundo Zn + 2 HCl → ZnCl₂ + H₂, liberando 0,3 mol de gás hidrogênio. Sabendo que a massa molar do zinco é 65 g/mol, a massa de zinco puro presente na amostra e sua pureza percentual são, respectivamente:",
    opcoes: [
      "65 g e 50%",
      "130 g e 100%",
      "9,75 g e 7,5%",
      "19,5 g e 15%",
      "39 g e 30%",
    ],
    correta: 3,
    explicacao:
      "Pela proporção 1:1, 0,3 mol de H₂ vem de 0,3 mol de zinco, ou 0,3 × 65 = 19,5 g; dividindo pela massa total, 19,5 ÷ 130 × 100 = 15% de pureza. É esse tipo de cálculo reverso, partindo do gás liberado para chegar à pureza da amostra, que costuma aparecer em análises laboratoriais.",
  },
  {
    materia: "quimica",
    tema: "Estequiometria e cálculos",
    dificuldade: "media",
    enunciado:
      "Uma reação entre carbonato de cálcio e ácido clorídrico, CaCO₃ + 2 HCl → CaCl₂ + H₂O + CO₂, é realizada com 0,4 mol de CaCO₃ (massa molar 100 g/mol) e ácido em excesso. A massa de cloreto de cálcio formada, sabendo que sua massa molar é 111 g/mol, é de:",
    opcoes: [
      "40 g",
      "22,2 g",
      "111 g",
      "44,4 g",
      "88,8 g",
    ],
    correta: 3,
    explicacao:
      "Pela proporção 1:1 entre CaCO₃ e CaCl₂ na equação, 0,4 mol de carbonato formam 0,4 mol de cloreto de cálcio, cuja massa é 0,4 × 111 = 44,4 g. É fácil confundir esse resultado com a massa do próprio carbonato consumido, daí o distrator de 40 g.",
  },
  {
    materia: "quimica",
    tema: "Estequiometria e cálculos",
    dificuldade: "media",
    enunciado:
      "Uma reação de combustão do etanol, C₂H₅OH + 3 O₂ → 2 CO₂ + 3 H₂O, parte de 46 g de etanol (massa molar 46 g/mol) e oxigênio em excesso. A quantidade de matéria de gás oxigênio consumida nessa reação é de:",
    opcoes: [
      "1 mol",
      "2 mols",
      "6 mols",
      "0,5 mol",
      "3 mols",
    ],
    correta: 4,
    explicacao:
      "Os 46 g de etanol equivalem a 1 mol; pela proporção 1:3 da equação, são consumidos 3 mols de O₂. Ignorar o coeficiente 3 do oxigênio e assumir proporção 1:1 é o erro mais comum nesse tipo de cálculo de combustão.",
  },
  {
    materia: "quimica",
    tema: "Estequiometria e cálculos",
    dificuldade: "media",
    enunciado:
      "Uma reação entre nitrogênio e hidrogênio, N₂ + 3 H₂ → 2 NH₃, é conduzida com rendimento de 60%. Partindo de quantidade suficiente de reagentes para formar teoricamente 4 mols de amônia, a quantidade de matéria de amônia efetivamente obtida é de:",
    opcoes: [
      "4 mols",
      "1,6 mol",
      "6,67 mols",
      "0,6 mol",
      "2,4 mols",
    ],
    correta: 4,
    explicacao:
      "Basta aplicar o percentual de rendimento sobre a quantidade teórica: 4 × 0,60 = 2,4 mols. O rendimento reduz a quantidade obtida em relação ao previsto pela estequiometria, nunca a aumenta, o que já descarta valores maiores que 4.",
  },
  {
    materia: "quimica",
    tema: "Estequiometria e cálculos",
    dificuldade: "media",
    enunciado:
      "Uma amostra de 4,25 g de nitrato de sódio, NaNO₃ (massa molar 85 g/mol), é dissolvida em água suficiente para completar 250 mL de solução. A concentração molar dessa solução é de:",
    opcoes: [
      "0,05 mol/L",
      "0,5 mol/L",
      "2 mol/L",
      "0,02 mol/L",
      "0,2 mol/L",
    ],
    correta: 4,
    explicacao:
      "O número de mols de soluto é 4,25 ÷ 85 = 0,05 mol, e dividindo pelo volume em litros, 0,25 L, obtém-se 0,2 mol/L. Manter o volume em mililitros ao dividir, sem converter para litros, é o deslize que gera um resultado mil vezes menor.",
  },
  {
    materia: "quimica",
    tema: "Estequiometria e cálculos",
    dificuldade: "dificil",
    enunciado:
      "Uma mistura contém 3 mols de gás hidrogênio e 4 mols de gás nitrogênio, que reagem segundo N₂ + 3 H₂ → 2 NH₃. Sabendo que o hidrogênio é o reagente limitante, a quantidade de nitrogênio que sobra sem reagir, ao final da reação, é de:",
    opcoes: [
      "1 mol",
      "2 mols",
      "4 mols",
      "0,5 mol",
      "3 mols",
    ],
    correta: 4,
    explicacao:
      "Com 3 mols de H₂ como limitante, pela proporção 3:1, consome-se 1 mol de N₂; como havia 4 mols disponíveis, sobram 4 − 1 = 3 mols de N₂ sem reagir. Calcular o consumo do reagente em excesso a partir do limitante, e não o contrário, é o passo que evita erros nesse tipo de questão.",
  },
  {
    materia: "quimica",
    tema: "Estequiometria e cálculos",
    dificuldade: "dificil",
    enunciado:
      "Uma indústria produz 490 kg de ácido sulfúrico (massa molar 98 g/mol) a partir de enxofre (massa molar 32 g/mol), segundo a sequência global S + O₂ → SO₂, 2 SO₂ + O₂ → 2 SO₃ e SO₃ + H₂O → H₂SO₄, na qual cada mol de enxofre origina, ao final, um mol de ácido sulfúrico. A massa de enxofre necessária para essa produção, admitindo rendimento global de 100%, é de:",
    opcoes: [
      "98 kg",
      "320 kg",
      "490 kg",
      "80 kg",
      "160 kg",
    ],
    correta: 4,
    explicacao:
      "Os 490 kg de H₂SO₄ equivalem a 5000 mol; como a proporção final é 1:1 entre enxofre e ácido sulfúrico, são necessários 5000 mol de enxofre, cuja massa é 5000 × 32 g = 160 000 g = 160 kg. Mesmo com várias etapas intermediárias, a proporção final 1:1 simplifica bastante o cálculo global.",
  },
  {
    materia: "quimica",
    tema: "Estequiometria e cálculos",
    dificuldade: "dificil",
    enunciado:
      "Uma reação entre 2 mols de gás oxigênio e 5 mols de gás hidrogênio, segundo 2 H₂ + O₂ → 2 H₂O, tem rendimento de 75%. A massa de água (massa molar 18 g/mol) efetivamente obtida, sabendo que o hidrogênio é o reagente em excesso, é de:",
    opcoes: [
      "72 g",
      "90 g",
      "36 g",
      "67,5 g",
      "54 g",
    ],
    correta: 4,
    explicacao:
      "Com o oxigênio como limitante (2 mols consomem 4 mols de H₂, e há 5 disponíveis), pela proporção 1:2, o rendimento teórico é 4 mols de água, ou 72 g; aplicando 75%: 72 × 0,75 = 54 g. Confirmar qual reagente é o limitante antes de aplicar o rendimento é indispensável para não superestimar a quantidade teórica.",
  },
  {
    materia: "quimica",
    tema: "Estequiometria e cálculos",
    dificuldade: "dificil",
    enunciado:
      "Uma amostra de 500 g de minério de cobre com 64% de pureza em sulfeto de cobre II, CuS (massa molar 96 g/mol), é processada segundo CuS + O₂ → Cu + SO₂ para obtenção de cobre metálico (massa molar 64 g/mol). A massa de cobre metálico teoricamente obtida é de:",
    opcoes: [
      "320 g",
      "160 g",
      "500 g",
      "106,7 g",
      "213,3 g",
    ],
    correta: 4,
    explicacao:
      "A massa de sulfeto puro é 500 × 0,64 = 320 g, equivalente a 320 ÷ 96 ≈ 3,33 mol; pela proporção 1:1, formam-se 3,33 mol de Cu, cuja massa é 3,33 × 64 ≈ 213,3 g. Encadear a pureza antes da proporção estequiométrica é o que garante esse valor correto.",
  },
  {
    materia: "quimica",
    tema: "Estequiometria e cálculos",
    dificuldade: "dificil",
    enunciado:
      "Uma reação de combustão completa de 0,25 mol de octano, C₈H₁₈ + 12,5 O₂ → 8 CO₂ + 9 H₂O, ocorre com oxigênio em excesso. O volume de gás carbônico formado, medido em condições normais de temperatura e pressão (22,4 L/mol), é de:",
    opcoes: [
      "22,4 L",
      "56 L",
      "89,6 L",
      "11,2 L",
      "44,8 L",
    ],
    correta: 4,
    explicacao:
      "Pela proporção 1:8 entre octano e CO₂ na equação, 0,25 mol de octano formam 0,25 × 8 = 2 mols de CO₂, que em volume molar 22,4 L/mol resultam em 44,8 L. Esse tipo de proporção com coeficiente grande é típico de combustões de hidrocarbonetos de cadeia longa, como os presentes na gasolina.",
  },
  {
    materia: "quimica",
    tema: "Estequiometria e cálculos",
    dificuldade: "dificil",
    enunciado:
      "Um analista dispõe de uma amostra de 10 g de uma mistura de cloreto de sódio e cloreto de potássio. Ao reagir completamente com nitrato de prata em excesso, formando cloreto de prata insolúvel (massa molar 143,5 g/mol), obtêm-se 21,5 g de precipitado. Sabendo que ambos os sais reagem na proporção 1:1 com o nitrato de prata, a quantidade total de matéria de cloreto (Cl⁻) presente na mistura original era de:",
    opcoes: [
      "0,1 mol",
      "0,2 mol",
      "0,215 mol",
      "1,5 mol",
      "0,15 mol",
    ],
    correta: 4,
    explicacao:
      "A massa de AgCl formada corresponde a 21,5 ÷ 143,5 = 0,15 mol; como a proporção entre cloreto e AgCl é 1:1, a quantidade total de Cl⁻ na mistura original também era 0,15 mol, independentemente de vir do NaCl ou do KCl. Esse tipo de análise por precipitação é usado para determinar teores de cloreto em misturas sem precisar separar os sais individualmente.",
  },
  {
    materia: "quimica",
    tema: "Estequiometria e cálculos",
    dificuldade: "media",
    enunciado:
      "Uma reação entre magnésio e ácido clorídrico, Mg + 2 HCl → MgCl₂ + H₂, parte de 0,5 mol de magnésio (massa molar 24 g/mol) e ácido em excesso. O volume de gás hidrogênio formado, medido em condições normais de temperatura e pressão (22,4 L/mol), é de:",
    opcoes: [
      "22,4 L",
      "5,6 L",
      "44,8 L",
      "2,24 L",
      "11,2 L",
    ],
    correta: 4,
    explicacao:
      "Pela proporção 1:1 entre magnésio e hidrogênio na equação, 0,5 mol de Mg formam 0,5 mol de H₂, que em volume molar 22,4 L/mol resultam em 11,2 L. A proporção direta 1:1 dispensa qualquer ajuste extra no cálculo desse volume.",
  },
];
