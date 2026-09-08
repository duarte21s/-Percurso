/* Soluções e concentrações (50 questões).
   Solubilidade, concentração comum e molar, diluição, misturas de
   soluções, título e solubilidade em função da temperatura.
   Ver quimica.mjs para o formato. */

export const questoes = [
  {
    materia: "quimica",
    tema: "Soluções e concentrações",
    dificuldade: "facil",
    enunciado:
      "Uma solução química é formada pela mistura homogênea de duas ou mais substâncias, sendo o soluto a substância dissolvida em menor quantidade e o solvente a que dissolve, presente em maior quantidade. No soro fisiológico, água e sal dissolvido, o soluto e o solvente são, respectivamente:",
    opcoes: [
      "o sal e a água",
      "a água e o sal",
      "apenas a água, pois o sal desaparece",
      "apenas o sal, pois a água evapora",
      "ambos são solventes ao mesmo tempo",
    ],
    correta: 0,
    explicacao:
      "O sal, presente em quantidade bem menor, é o soluto; a água, que forma o volume principal da mistura e dissolve o sal, é o solvente. O sal não desaparece: ele se dispersa em íons na água, mantendo sua identidade química, apenas invisível a olho nu.",
  },
  {
    materia: "quimica",
    tema: "Soluções e concentrações",
    dificuldade: "facil",
    enunciado:
      "A concentração comum de uma solução relaciona a massa de soluto dissolvido com o volume total da solução. Uma solução preparada com 20 g de sal dissolvidos em água suficiente para completar 2 L de solução tem concentração comum de:",
    opcoes: [
      "10 g/L",
      "20 g/L",
      "40 g/L",
      "2 g/L",
      "0,1 g/L",
    ],
    correta: 0,
    explicacao:
      "A concentração comum é a massa de soluto dividida pelo volume total: 20 ÷ 2 = 10 g/L. É importante usar o volume final da solução, e não o volume de água usado antes de completar o balão volumétrico.",
  },
  {
    materia: "quimica",
    tema: "Soluções e concentrações",
    dificuldade: "facil",
    enunciado:
      "A concentração molar, ou molaridade, de uma solução expressa a quantidade de matéria de soluto, em mols, dissolvida em cada litro de solução. Uma solução com 0,5 mol de soluto dissolvido em 1 L de solução tem concentração molar de:",
    opcoes: [
      "0,5 mol/L",
      "1 mol/L",
      "2 mol/L",
      "0,25 mol/L",
      "5 mol/L",
    ],
    correta: 0,
    explicacao:
      "A concentração molar é diretamente a razão entre mols de soluto e litros de solução: 0,5 ÷ 1 = 0,5 mol/L. Quando o volume já é exatamente 1 L, a concentração molar coincide numericamente com o número de mols de soluto.",
  },
  {
    materia: "quimica",
    tema: "Soluções e concentrações",
    dificuldade: "facil",
    enunciado:
      "Ao adicionar açúcar à água aos poucos e mexer, chega um momento em que o açúcar para de se dissolver e passa a se depositar no fundo do recipiente, mesmo que a agitação continue. Nesse ponto, a solução é classificada como:",
    opcoes: [
      "saturada",
      "insaturada",
      "diluída",
      "supersaturada estável",
      "eletrolítica",
    ],
    correta: 0,
    explicacao:
      "Uma solução saturada atingiu o limite máximo de soluto que o solvente consegue dissolver naquela temperatura; qualquer excesso permanece como corpo de fundo, sem se dissolver. Soluções insaturadas, ao contrário, ainda têm capacidade de dissolver mais soluto.",
  },
  {
    materia: "quimica",
    tema: "Soluções e concentrações",
    dificuldade: "facil",
    enunciado:
      "A solubilidade de uma substância indica a quantidade máxima que pode ser dissolvida em determinada quantidade de solvente, a uma dada temperatura. Para a maioria dos sólidos dissolvidos em água, o aumento da temperatura costuma:",
    opcoes: [
      "aumentar a solubilidade, permitindo dissolver mais soluto",
      "diminuir a solubilidade, sempre sem exceções",
      "não ter nenhum efeito sobre a solubilidade",
      "transformar o soluto em solvente",
      "impedir totalmente a dissolução do sólido",
    ],
    correta: 0,
    explicacao:
      "Para a maioria dos sólidos, dissolver-se em água é um processo que absorve energia, e o aumento de temperatura fornece essa energia extra, favorecendo a dissolução — é por isso que se dissolve mais açúcar em água quente que em água fria. Existem exceções, como alguns sais cuja solubilidade cai com o aquecimento, mas não é o comportamento predominante.",
  },
  {
    materia: "quimica",
    tema: "Soluções e concentrações",
    dificuldade: "facil",
    enunciado:
      "Ao adicionar água a uma solução concentrada de suco, sem acrescentar mais soluto, o processo realizado é chamado de:",
    opcoes: [
      "diluição",
      "saturação",
      "cristalização",
      "evaporação",
      "titulação",
    ],
    correta: 0,
    explicacao:
      "A diluição consiste em adicionar solvente a uma solução, reduzindo a concentração de soluto sem alterar a quantidade total de soluto presente. O processo inverso, retirar solvente para aumentar a concentração, é chamado de concentração da solução.",
  },
  {
    materia: "quimica",
    tema: "Soluções e concentrações",
    dificuldade: "facil",
    enunciado:
      "Um copo com água e sal dissolvido é deixado destampado ao sol por vários dias, até que toda a água evapore. Ao final, observa-se novamente o sal em sua forma sólida no fundo do copo. Esse resultado demonstra que a dissolução do sal em água é um processo:",
    opcoes: [
      "físico, sem formação de nova substância",
      "químico, com formação de nova substância",
      "irreversível, que não pode ser desfeito",
      "nuclear, com liberação de radiação",
      "impossível de ocorrer naturalmente",
    ],
    correta: 0,
    explicacao:
      "Como o sal reaparece com as mesmas propriedades de antes, não houve formação de substância nova: a dissolução e a posterior evaporação são transformações físicas e reversíveis. Se fosse uma transformação química, o sal recuperado seria uma substância diferente do sal original.",
  },
  {
    materia: "quimica",
    tema: "Soluções e concentrações",
    dificuldade: "facil",
    enunciado:
      "Comparando duas soluções de mesmo soluto e mesmo solvente, aquela que apresenta maior quantidade de soluto dissolvido por unidade de volume é chamada de solução mais:",
    opcoes: [
      "concentrada",
      "diluída",
      "saturada, sempre",
      "insaturada, sempre",
      "eletrolítica",
    ],
    correta: 0,
    explicacao:
      "Concentração é justamente a medida de quanto soluto há por unidade de volume de solução; quanto mais soluto por litro, mais concentrada a solução. Saturação é um conceito diferente: indica se a solução atingiu o limite de solubilidade, o que pode ocorrer em concentrações distintas dependendo da temperatura.",
  },
  {
    materia: "quimica",
    tema: "Soluções e concentrações",
    dificuldade: "facil",
    enunciado:
      "Um rótulo de vinagre indica '4% de acidez'. Essa porcentagem expressa a proporção entre a massa de ácido acético e a massa (ou volume) total do produto, sendo um exemplo de concentração expressa em:",
    opcoes: [
      "porcentagem em massa ou em volume",
      "mol/L exclusivamente",
      "partes por milhão exclusivamente",
      "densidade da solução",
      "número de Avogadro",
    ],
    correta: 0,
    explicacao:
      "Rótulos de produtos comerciais costumam expressar a concentração em porcentagem, relacionando a quantidade de soluto à quantidade total do produto, seja em massa ou em volume. É uma forma prática e intuitiva de comunicar concentração ao consumidor, sem exigir conhecimento de mol ou molaridade.",
  },
  {
    materia: "quimica",
    tema: "Soluções e concentrações",
    dificuldade: "facil",
    enunciado:
      "O título de uma solução expressa a razão entre a massa (ou volume) de soluto e a massa (ou volume) total da solução, podendo ser expresso também em porcentagem. Uma solução com título igual a 0,25 tem, em termos percentuais, a concentração de:",
    opcoes: [
      "25%",
      "2,5%",
      "0,25%",
      "250%",
      "0,025%",
    ],
    correta: 0,
    explicacao:
      "Para converter o título em porcentagem, basta multiplicar por 100: 0,25 × 100 = 25%. É a mesma lógica usada para converter qualquer fração decimal em porcentagem.",
  },
  {
    materia: "quimica",
    tema: "Soluções e concentrações",
    dificuldade: "media",
    enunciado:
      "Uma solução aquosa de hidróxido de sódio é preparada dissolvendo 8 g de NaOH (massa molar 40 g/mol) em água suficiente para completar 500 mL de solução. A concentração molar dessa solução é de:",
    opcoes: [
      "0,2 mol/L",
      "0,4 mol/L",
      "0,04 mol/L",
      "4 mol/L",
      "16 mol/L",
    ],
    correta: 1,
    explicacao:
      "O número de mols de NaOH é 8 ÷ 40 = 0,2 mol, e dividindo pelo volume em litros, 0,5 L, obtém-se 0,4 mol/L. Manter o volume em mililitros, sem converter para litros, é o erro mais comum nesse tipo de cálculo.",
  },
  {
    materia: "quimica",
    tema: "Soluções e concentrações",
    dificuldade: "media",
    enunciado:
      "Um laboratorista precisa diluir 100 mL de uma solução de ácido clorídrico 2 mol/L até obter uma solução de concentração 0,5 mol/L. Usando a relação C₁V₁ = C₂V₂, o volume final da solução diluída deve ser de:",
    opcoes: [
      "200 mL",
      "400 mL",
      "50 mL",
      "800 mL",
      "25 mL",
    ],
    correta: 1,
    explicacao:
      "Aplicando C₁V₁ = C₂V₂: 2 × 100 = 0,5 × V₂, logo V₂ = 200 ÷ 0,5 = 400 mL. Isso significa que devem ser adicionados 300 mL de água aos 100 mL originais para atingir o volume final de 400 mL.",
  },
  {
    materia: "quimica",
    tema: "Soluções e concentrações",
    dificuldade: "media",
    enunciado:
      "Uma solução aquosa contém 90 g de glicose dissolvidos em 1 L de solução. Sabendo que a massa molar da glicose, C₆H₁₂O₆, é 180 g/mol, a concentração molar dessa solução é de:",
    opcoes: [
      "1 mol/L",
      "0,5 mol/L",
      "2 mol/L",
      "0,25 mol/L",
      "90 mol/L",
    ],
    correta: 1,
    explicacao:
      "O número de mols de glicose é 90 ÷ 180 = 0,5 mol, e como o volume já é 1 L, a concentração molar é diretamente 0,5 mol/L. Esse tipo de cálculo, massa dividida por massa molar dividida por volume, é o caminho padrão para obter a molaridade a partir de dados de massa.",
  },
  {
    materia: "quimica",
    tema: "Soluções e concentrações",
    dificuldade: "media",
    enunciado:
      "Um químico mistura 200 mL de uma solução de NaCl 0,5 mol/L com 300 mL de uma solução de NaCl 1 mol/L. Considerando que os volumes se somam sem alteração, a concentração molar da solução resultante é de:",
    opcoes: [
      "0,75 mol/L",
      "0,8 mol/L",
      "1,5 mol/L",
      "0,5 mol/L",
      "1 mol/L",
    ],
    correta: 1,
    explicacao:
      "O número total de mols é (0,2 × 0,5) + (0,3 × 1) = 0,1 + 0,3 = 0,4 mol, distribuído em um volume final de 0,5 L, resultando em 0,4 ÷ 0,5 = 0,8 mol/L. Somar diretamente as concentrações sem ponderar pelos volumes é o erro que levaria a uma simples média aritmética incorreta.",
  },
  {
    materia: "quimica",
    tema: "Soluções e concentrações",
    dificuldade: "media",
    enunciado:
      "Uma solução aquosa de ácido sulfúrico tem densidade 1,2 g/mL e título em massa de 25%. A concentração comum dessa solução, em g/L, é de:",
    opcoes: [
      "250 g/L",
      "300 g/L",
      "1200 g/L",
      "25 g/L",
      "480 g/L",
    ],
    correta: 1,
    explicacao:
      "Cada litro de solução tem massa 1200 g (densidade × volume), e 25% dessa massa é soluto: 1200 × 0,25 = 300 g de ácido por litro. A relação entre concentração comum, densidade e título é uma das mais usadas para converter dados de rótulos comerciais em concentração molar.",
  },
  {
    materia: "quimica",
    tema: "Soluções e concentrações",
    dificuldade: "media",
    enunciado:
      "A curva de solubilidade do nitrato de potássio mostra que, a 20 °C, cada 100 g de água dissolve no máximo 32 g desse sal. Uma solução preparada com 200 g de água e 80 g de nitrato de potássio a 20 °C apresentará:",
    opcoes: [
      "solução insaturada, com todo o sal dissolvido",
      "corpo de fundo, pois o sal excede a quantidade máxima solúvel nessa temperatura",
      "solução saturada exatamente no limite, sem sobras",
      "impossibilidade de qualquer dissolução do sal",
      "formação de um novo composto químico",
    ],
    correta: 1,
    explicacao:
      "Para 200 g de água, o limite de dissolução é o dobro de 32 g, ou seja, 64 g; como há 80 g de sal, os 16 g excedentes não se dissolvem e formam corpo de fundo. É essencial ajustar o valor da curva de solubilidade, dada para 100 g de água, à quantidade real de solvente do problema.",
  },
  {
    materia: "quimica",
    tema: "Soluções e concentrações",
    dificuldade: "media",
    enunciado:
      "Uma solução aquosa de ácido clorídrico 2 mol/L tem 250 mL de volume. A quantidade de matéria de HCl presente nessa solução é de:",
    opcoes: [
      "2 mols",
      "0,5 mol",
      "0,25 mol",
      "5 mols",
      "0,125 mol",
    ],
    correta: 1,
    explicacao:
      "A quantidade de matéria é a concentração molar multiplicada pelo volume em litros: 2 × 0,25 = 0,5 mol. Manter o volume em mililitros ao multiplicar, sem converter para litros, geraria um resultado 1000 vezes maior que o correto.",
  },
  {
    materia: "quimica",
    tema: "Soluções e concentrações",
    dificuldade: "media",
    enunciado:
      "Um estudante precisa preparar 500 mL de uma solução de sulfato de cobre II 0,1 mol/L a partir do sal sólido CuSO₄ (massa molar 160 g/mol). A massa de sulfato de cobre que deve ser pesada é de:",
    opcoes: [
      "16 g",
      "8 g",
      "0,8 g",
      "80 g",
      "1,6 g",
    ],
    correta: 1,
    explicacao:
      "Primeiro se calcula a quantidade de matéria necessária, 0,1 × 0,5 = 0,05 mol, e depois multiplica-se pela massa molar: 0,05 × 160 = 8 g. Esse é o procedimento padrão de preparo de soluções em laboratório, partindo da concentração desejada até chegar à massa a ser pesada.",
  },
  {
    materia: "quimica",
    tema: "Soluções e concentrações",
    dificuldade: "media",
    enunciado:
      "Comparando as concentrações comum e molar de uma mesma solução, a relação matemática entre elas envolve a massa molar do soluto. A fórmula que relaciona concentração comum (C, em g/L) e concentração molar (M, em mol/L) é:",
    opcoes: [
      "C = M ÷ massa molar",
      "C = M × massa molar",
      "M = C × massa molar",
      "C = M + massa molar",
      "não existe relação entre essas duas grandezas",
    ],
    correta: 1,
    explicacao:
      "Como a concentração comum é massa por volume e a molar é mols por volume, e massa é igual a mols vezes massa molar, a relação correta é C = M × massa molar. Essa fórmula permite converter rapidamente entre as duas formas de expressar concentração sem refazer todo o cálculo a partir do zero.",
  },
  {
    materia: "quimica",
    tema: "Soluções e concentrações",
    dificuldade: "media",
    enunciado:
      "Um técnico de laboratório mistura 100 mL de uma solução de ácido nítrico 3 mol/L com água suficiente para completar exatamente 600 mL de solução final. A concentração molar da solução resultante é de:",
    opcoes: [
      "3 mol/L",
      "0,5 mol/L",
      "1,8 mol/L",
      "0,3 mol/L",
      "5 mol/L",
    ],
    correta: 1,
    explicacao:
      "Pela relação C₁V₁ = C₂V₂: 3 × 100 = C₂ × 600, logo C₂ = 300 ÷ 600 = 0,5 mol/L. Na diluição, a quantidade de soluto permanece a mesma (0,3 mol antes e depois), apenas distribuída em um volume maior de solução.",
  },
  {
    materia: "quimica",
    tema: "Soluções e concentrações",
    dificuldade: "media",
    enunciado:
      "Uma solução saturada de cloreto de potássio a 40 °C contém 40 g do sal dissolvidos em 100 g de água. Ao resfriar essa solução para 20 °C, temperatura em que a solubilidade do sal cai para 32 g por 100 g de água, é esperado que ocorra:",
    opcoes: [
      "a dissolução de mais 8 g de sal na solução",
      "nenhuma alteração visível na solução",
      "a precipitação de 8 g de sal, formando corpo de fundo",
      "a evaporação de parte da água presente",
      "a formação de uma nova substância química",
    ],
    correta: 2,
    explicacao:
      "Como a solubilidade cai com o resfriamento, a solução que estava saturada com 40 g passa a comportar apenas 32 g nas mesmas 100 g de água, e o excesso de 8 g se precipita como sólido. Esse fenômeno é usado industrialmente na técnica de recristalização para purificar sais.",
  },
  {
    materia: "quimica",
    tema: "Soluções e concentrações",
    dificuldade: "media",
    enunciado:
      "Ao dissolver um comprimido efervescente em um copo de água, ocorre liberação de bolhas de gás carbônico até a solução ficar em equilíbrio com a pressão atmosférica. Comparando a solubilidade de um gás em água com a temperatura, é correto afirmar que, diferentemente da maioria dos sólidos, a solubilidade dos gases em água tende a:",
    opcoes: [
      "aumentar com o aumento da temperatura",
      "permanecer sempre constante",
      "diminuir com o aumento da temperatura",
      "depender exclusivamente da pressão atmosférica",
      "ser nula em qualquer temperatura",
    ],
    correta: 2,
    explicacao:
      "Gases dissolvidos em líquidos tendem a escapar mais facilmente quando a temperatura sobe, pois suas moléculas ganham energia cinética suficiente para vencer as forças que as mantêm dissolvidas — por isso um refrigerante quente perde gás mais rápido que um gelado. Esse comportamento é oposto ao da maioria dos sólidos, cuja solubilidade cresce com o aquecimento.",
  },
  {
    materia: "quimica",
    tema: "Soluções e concentrações",
    dificuldade: "dificil",
    enunciado:
      "Um técnico precisa preparar 2 L de uma solução de ácido sulfúrico 0,25 mol/L a partir de uma solução concentrada de 10 mol/L. O volume da solução concentrada que deve ser medido e diluído é de:",
    opcoes: [
      "500 mL",
      "5 mL",
      "50 mL",
      "200 mL",
      "20 mL",
    ],
    correta: 2,
    explicacao:
      "Pela relação C₁V₁ = C₂V₂: 10 × V₁ = 0,25 × 2000, logo V₁ = 500 ÷ 10 = 50 mL. Vale sempre conferir se os volumes estão na mesma unidade antes de aplicar a fórmula, já que aqui o volume final foi convertido de litros para mililitros.",
  },
  {
    materia: "quimica",
    tema: "Soluções e concentrações",
    dificuldade: "dificil",
    enunciado:
      "Uma solução A de NaOH tem concentração 0,4 mol/L e volume 300 mL; uma solução B do mesmo soluto tem concentração 0,8 mol/L e volume 200 mL. Ao misturar as duas soluções, a concentração molar final, admitindo que os volumes se somam, é de:",
    opcoes: [
      "0,6 mol/L",
      "0,4 mol/L",
      "0,56 mol/L",
      "1,2 mol/L",
      "0,2 mol/L",
    ],
    correta: 2,
    explicacao:
      "O número total de mols é (0,3 × 0,4) + (0,2 × 0,8) = 0,12 + 0,16 = 0,28 mol, distribuído em 0,5 L de volume final, resultando em 0,28 ÷ 0,5 = 0,56 mol/L. A concentração final de uma mistura nunca é a simples média das concentrações quando os volumes envolvidos são diferentes.",
  },
  {
    materia: "quimica",
    tema: "Soluções e concentrações",
    dificuldade: "dificil",
    enunciado:
      "Uma solução aquosa de ácido clorídrico comercial tem densidade 1,18 g/mL e título em massa de 36,5%. Sabendo que a massa molar do HCl é 36,5 g/mol, a concentração molar dessa solução comercial é de:",
    opcoes: [
      "36,5 mol/L",
      "1,18 mol/L",
      "11,8 mol/L",
      "3,65 mol/L",
      "118 mol/L",
    ],
    correta: 2,
    explicacao:
      "Em 1 L de solução, a massa total é 1180 g, e 36,5% disso é soluto: 1180 × 0,365 = 430,7 g de HCl, equivalentes a 430,7 ÷ 36,5 ≈ 11,8 mol. Esse encadeamento entre densidade, título e massa molar é o caminho padrão para obter a concentração molar de ácidos comerciais concentrados, como o HCl vendido em frascos de laboratório.",
  },
  {
    materia: "quimica",
    tema: "Soluções e concentrações",
    dificuldade: "dificil",
    enunciado:
      "Uma solução de sacarose, C₁₂H₂₂O₁₁ (massa molar 342 g/mol), é preparada dissolvendo 34,2 g do soluto em água suficiente para completar 300 mL de solução. A concentração molar dessa solução, aproximada a duas casas decimais, é de:",
    opcoes: [
      "0,10 mol/L",
      "1,00 mol/L",
      "0,33 mol/L",
      "0,03 mol/L",
      "3,33 mol/L",
    ],
    correta: 2,
    explicacao:
      "O número de mols de sacarose é 34,2 ÷ 342 = 0,1 mol, e dividindo pelo volume em litros, 0,3 L, obtém-se 0,1 ÷ 0,3 ≈ 0,33 mol/L. Massas molares grandes, como a da sacarose, exigem atenção redobrada na divisão para não errar a ordem de grandeza do resultado.",
  },
  {
    materia: "quimica",
    tema: "Soluções e concentrações",
    dificuldade: "dificil",
    enunciado:
      "Um laboratorista evapora parte do solvente de 400 mL de uma solução de NaCl 0,5 mol/L até restarem apenas 160 mL de solução, sem perda de soluto durante o processo. A nova concentração molar dessa solução concentrada é de:",
    opcoes: [
      "0,5 mol/L",
      "0,2 mol/L",
      "1,25 mol/L",
      "2 mol/L",
      "0,8 mol/L",
    ],
    correta: 2,
    explicacao:
      "A quantidade de soluto permanece constante durante a evaporação: 0,5 × 0,4 = 0,2 mol. Dividindo pelo novo volume, 0,16 L, obtém-se 0,2 ÷ 0,16 = 1,25 mol/L. Evaporar solvente é o processo inverso da diluição: reduz o volume e, por consequência, aumenta a concentração.",
  },
  {
    materia: "quimica",
    tema: "Soluções e concentrações",
    dificuldade: "dificil",
    enunciado:
      "Uma indústria de bebidas prepara um xarope misturando 4 kg de uma solução de açúcar a 50% em massa com 6 kg de água pura. Considerando que as massas se conservam na mistura, a nova concentração em porcentagem de massa da mistura final é de:",
    opcoes: [
      "50%",
      "30%",
      "20%",
      "40%",
      "10%",
    ],
    correta: 2,
    explicacao:
      "A massa de açúcar na solução original é 4 × 0,50 = 2 kg, e a água pura adicionada, sem soluto, soma 6 kg; a massa total final é 4 + 6 = 10 kg. O percentual de açúcar na mistura é 2 ÷ 10 × 100 = 20%. Somar apenas as massas envolvidas, sem se preocupar com densidade, é o caminho mais direto quando o enunciado já fornece massas em vez de volumes.",
  },
  {
    materia: "quimica",
    tema: "Soluções e concentrações",
    dificuldade: "media",
    enunciado:
      "Um soro caseiro para hidratação é preparado dissolvendo pequenas quantidades de sal e açúcar em água. Do ponto de vista da classificação das soluções quanto ao estado físico do soluto e do solvente, o soro caseiro é um exemplo de solução:",
    opcoes: [
      "líquido dissolvido em líquido",
      "gás dissolvido em líquido",
      "sólido dissolvido em líquido",
      "sólido dissolvido em gás",
      "líquido dissolvido em sólido",
    ],
    correta: 2,
    explicacao:
      "Tanto o sal quanto o açúcar são sólidos à temperatura ambiente antes de serem dissolvidos na água líquida, caracterizando uma solução sólido-líquido, a mais comum no cotidiano. Um exemplo de solução líquido-líquido seria o álcool dissolvido em água, e de gás-líquido, o gás carbônico dissolvido em um refrigerante.",
  },
  {
    materia: "quimica",
    tema: "Soluções e concentrações",
    dificuldade: "media",
    enunciado:
      "Uma solução é preparada misturando um soluto sólido com um solvente líquido além do ponto de saturação, mas sem que se forme corpo de fundo, por resfriamento cuidadoso e sem agitação. Essa solução instável, que contém mais soluto do que deveria ser capaz de dissolver naquela temperatura, é chamada de:",
    opcoes: [
      "insaturada",
      "diluída",
      "supersaturada",
      "eletrolítica fraca",
      "coloidal",
    ],
    correta: 2,
    explicacao:
      "A solução supersaturada é um estado instável, além da saturação normal, que só se mantém sob condições controladas; qualquer perturbação, como uma vibração ou a adição de um cristal semente, provoca cristalização imediata do excesso de soluto. É um fenômeno explorado em demonstrações de laboratório com acetato de sódio.",
  },
  {
    materia: "quimica",
    tema: "Soluções e concentrações",
    dificuldade: "media",
    enunciado:
      "Um estudante prepara uma solução de cloreto de sódio 1 mol/L e outra de cloreto de cálcio 1 mol/L, ambas na mesma concentração molar. Ao comparar a concentração de íons cloreto (Cl⁻) livres em cada solução, é correto afirmar que:",
    opcoes: [
      "as duas soluções têm exatamente a mesma concentração de Cl⁻",
      "a solução de cloreto de sódio tem mais Cl⁻ que a de cloreto de cálcio",
      "nenhuma das duas soluções libera íons cloreto",
      "a solução de cloreto de cálcio tem o dobro da concentração de Cl⁻ da solução de cloreto de sódio",
      "a concentração de Cl⁻ não pode ser determinada em nenhum dos casos",
    ],
    correta: 3,
    explicacao:
      "Cada mol de NaCl libera 1 mol de Cl⁻, mas cada mol de CaCl₂ libera 2 mols de Cl⁻, já que a fórmula tem dois cloros por unidade; por isso, na mesma concentração molar do sal, a solução de CaCl₂ tem o dobro de íons cloreto livres. É um detalhe importante ao calcular concentração de íons específicos a partir da concentração do sal como um todo.",
  },
  {
    materia: "quimica",
    tema: "Soluções e concentrações",
    dificuldade: "media",
    enunciado:
      "Um professor demonstra que, ao misturar óleo e água em um recipiente, as duas substâncias não se misturam, formando duas camadas distintas separadas por uma interface visível. Essa mistura, diferentemente de uma solução verdadeira, é classificada como:",
    opcoes: [
      "homogênea, como qualquer solução",
      "uma solução saturada de óleo em água",
      "uma solução molecular verdadeira",
      "heterogênea, pois é possível distinguir as duas fases a olho nu",
      "uma solução supersaturada de água em óleo",
    ],
    correta: 3,
    explicacao:
      "Óleo e água são substâncias de polaridades muito diferentes e não se misturam de forma uniforme, resultando em duas fases visíveis — o critério que distingue uma mistura heterogênea de uma solução homogênea, na qual não é possível distinguir as fases a olho nu, nem mesmo com microscópio óptico comum.",
  },
  {
    materia: "quimica",
    tema: "Soluções e concentrações",
    dificuldade: "dificil",
    enunciado:
      "Um estudante compara a curva de solubilidade de dois sais: o sal X, cuja solubilidade cresce de 20 g para 60 g por 100 g de água entre 10 °C e 50 °C, e o sal Y, cuja solubilidade cai de 50 g para 30 g por 100 g de água no mesmo intervalo. Para purificar por recristalização uma amostra do sal X contaminada com o sal Y, a estratégia mais eficiente é:",
    opcoes: [
      "dissolver a mistura a frio e aquecer bruscamente",
      "evaporar toda a água sem controlar a temperatura",
      "misturar mais água fria sem qualquer aquecimento",
      "dissolver a mistura a quente e resfriar lentamente, cristalizando o sal X",
      "adicionar mais sal Y à mistura antes de resfriar",
    ],
    correta: 3,
    explicacao:
      "Aquecendo a solução, dissolve-se mais do sal X (que fica mais solúvel a quente); ao resfiar lentamente, a solubilidade do X cai bastante e ele cristaliza preferencialmente, enquanto o Y, que era mais solúvel a frio, tende a permanecer dissolvido. É esse contraste de comportamento com a temperatura que torna possível separar os dois sais por recristalização controlada.",
  },
  {
    materia: "quimica",
    tema: "Soluções e concentrações",
    dificuldade: "facil",
    enunciado:
      "O ar atmosférico, formado principalmente por nitrogênio e oxigênio gasosos misturados de forma homogênea, é um exemplo de solução no estado físico:",
    opcoes: [
      "líquido, com gás dissolvido em líquido",
      "sólido, com gás dissolvido em sólido",
      "líquido, com líquido dissolvido em líquido",
      "gasoso, com gás dissolvido em gás",
      "sólido, com sólido dissolvido em sólido",
    ],
    correta: 3,
    explicacao:
      "Como todos os componentes do ar são gases misturados uniformemente, sem fases distinguíveis, trata-se de uma solução gasosa. Esse mesmo princípio de mistura homogênea entre gases vale para qualquer combinação de gases que não reajam quimicamente entre si.",
  },
  {
    materia: "quimica",
    tema: "Soluções e concentrações",
    dificuldade: "facil",
    enunciado:
      "As ligas metálicas, como o bronze (cobre e estanho) e o aço (ferro e carbono), são exemplos de soluções sólidas, nas quais os átomos de diferentes elementos se distribuem de forma homogênea na rede cristalina. Esse tipo de solução é classificado, quanto ao estado físico de seus componentes, como:",
    opcoes: [
      "líquido dissolvido em sólido",
      "gás dissolvido em sólido",
      "sólido dissolvido em líquido",
      "sólido dissolvido em sólido",
      "líquido dissolvido em líquido",
    ],
    correta: 3,
    explicacao:
      "Nas ligas metálicas, tanto o soluto quanto o solvente são sólidos à temperatura ambiente, distribuídos de maneira uniforme na estrutura cristalina do metal principal. É esse arranjo que confere às ligas propriedades mecânicas diferentes das dos metais puros que as compõem.",
  },
  {
    materia: "quimica",
    tema: "Soluções e concentrações",
    dificuldade: "facil",
    enunciado:
      "Uma solução aquosa de sulfato de cobre II apresenta coloração azul característica, mais intensa quanto maior a quantidade de sal dissolvido. Comparando duas soluções de sulfato de cobre de concentrações diferentes, a que apresenta coloração mais intensa é, necessariamente, a:",
    opcoes: [
      "mais diluída",
      "mais fria",
      "de maior volume total",
      "mais concentrada",
      "de menor densidade",
    ],
    correta: 3,
    explicacao:
      "Quanto mais soluto colorido dissolvido por unidade de volume, mais intensa é a cor observada — é esse princípio que permite, inclusive, estimar concentrações por comparação visual ou por métodos de espectrofotometria em laboratório. O volume total sozinho, sem considerar a quantidade de soluto, não determina a intensidade da cor.",
  },
  {
    materia: "quimica",
    tema: "Soluções e concentrações",
    dificuldade: "media",
    enunciado:
      "Uma solução aquosa de ácido acético é preparada dissolvendo 30 g do ácido (massa molar 60 g/mol) em água suficiente para completar 500 mL de solução. A concentração molar dessa solução é de:",
    opcoes: [
      "0,5 mol/L",
      "2 mol/L",
      "0,25 mol/L",
      "1 mol/L",
      "60 mol/L",
    ],
    correta: 3,
    explicacao:
      "O número de mols de ácido acético é 30 ÷ 60 = 0,5 mol, e dividindo pelo volume em litros, 0,5 L, obtém-se exatamente 1 mol/L. Quando o número de mols e o volume em litros coincidem numericamente, a concentração molar resulta em um valor igual a 1, o que facilita a conferência do cálculo.",
  },
  {
    materia: "quimica",
    tema: "Soluções e concentrações",
    dificuldade: "media",
    enunciado:
      "Um estudante dilui 50 mL de uma solução de ácido sulfúrico 4 mol/L até completar 1 L de solução final, adicionando apenas água. A concentração molar da solução resultante é de:",
    opcoes: [
      "4 mol/L",
      "2 mol/L",
      "0,05 mol/L",
      "0,2 mol/L",
      "0,4 mol/L",
    ],
    correta: 3,
    explicacao:
      "Pela relação C₁V₁ = C₂V₂: 4 × 50 = C₂ × 1000, logo C₂ = 200 ÷ 1000 = 0,2 mol/L. A quantidade de matéria de ácido, 0,2 mol, permanece igual antes e depois da diluição — apenas o volume em que ela está distribuída aumenta.",
  },
  {
    materia: "quimica",
    tema: "Soluções e concentrações",
    dificuldade: "media",
    enunciado:
      "Uma solução aquosa de cloreto de potássio, KCl (massa molar 74,5 g/mol), tem concentração comum de 14,9 g/L. A concentração molar dessa solução é de:",
    opcoes: [
      "2 mol/L",
      "0,02 mol/L",
      "14,9 mol/L",
      "0,2 mol/L",
      "5 mol/L",
    ],
    correta: 3,
    explicacao:
      "Usando a relação C = M × massa molar, isola-se M = C ÷ massa molar = 14,9 ÷ 74,5 = 0,2 mol/L. Essa conversão é útil quando o rótulo de um produto informa a concentração em g/L, mas o cálculo estequiométrico exige a concentração em mol/L.",
  },
  {
    materia: "quimica",
    tema: "Soluções e concentrações",
    dificuldade: "media",
    enunciado:
      "Um professor mistura 400 mL de uma solução de KOH 0,25 mol/L com 100 mL de uma solução de KOH 1 mol/L. Considerando que os volumes se somam, a concentração molar da solução resultante é de:",
    opcoes: [
      "0,625 mol/L",
      "0,25 mol/L",
      "1 mol/L",
      "0,4 mol/L",
      "0,125 mol/L",
    ],
    correta: 3,
    explicacao:
      "O número total de mols é (0,4 × 0,25) + (0,1 × 1) = 0,1 + 0,1 = 0,2 mol, distribuído em 0,5 L de volume final, resultando em 0,2 ÷ 0,5 = 0,4 mol/L. Ponderar cada concentração pelo respectivo volume, e não apenas somar ou tirar a média simples, é o que garante o resultado correto em misturas de soluções.",
  },
  {
    materia: "quimica",
    tema: "Soluções e concentrações",
    dificuldade: "media",
    enunciado:
      "A curva de solubilidade do sulfato de sódio hidratado apresenta um comportamento incomum: a solubilidade aumenta com a temperatura até cerca de 32 °C e depois começa a diminuir. Esse tipo de comportamento demonstra que a regra geral de que 'todo sólido fica mais solúvel a quente':",
    opcoes: [
      "é sempre válida, sem qualquer exceção",
      "só se aplica a substâncias orgânicas",
      "é válida apenas para gases dissolvidos em líquidos",
      "nunca se aplica a sais inorgânicos",
      "não é universal, havendo exceções que dependem da substância específica",
    ],
    correta: 4,
    explicacao:
      "Embora a maioria dos sólidos siga a tendência de aumentar a solubilidade com o aquecimento, alguns sais apresentam curvas de solubilidade complexas, com trechos de queda, dependendo de mudanças na forma cristalina hidratada da substância. É por isso que consultar a curva de solubilidade específica é mais confiável do que aplicar uma regra geral sem exceções.",
  },
  {
    materia: "quimica",
    tema: "Soluções e concentrações",
    dificuldade: "media",
    enunciado:
      "Um aquário de água salgada precisa manter a concentração de sal dentro de uma faixa específica para a saúde dos peixes. Ao evaporar parte da água do aquário sem repor sal, o efeito esperado sobre a concentração de sal na água restante é:",
    opcoes: [
      "diminuição da concentração, pois a água evaporada leva sal consigo",
      "nenhuma alteração, pois o sal também evapora",
      "transformação do sal em um novo composto",
      "diminuição do volume de sal sólido dissolvido",
      "aumento da concentração, pois a mesma quantidade de sal fica em menos água",
    ],
    correta: 4,
    explicacao:
      "O sal não é volátil nas condições normais de evaporação da água de um aquário, então ele permanece na água restante enquanto o volume de solvente diminui, elevando a concentração. É por esse motivo que aquaristas costumam repor apenas água doce para compensar a evaporação, sem adicionar mais sal.",
  },
  {
    materia: "quimica",
    tema: "Soluções e concentrações",
    dificuldade: "dificil",
    enunciado:
      "Um estudante precisa preparar 250 mL de uma solução de ácido fosfórico 0,6 mol/L a partir de uma solução concentrada de 15 mol/L. O volume da solução concentrada que deve ser medido é de:",
    opcoes: [
      "25 mL",
      "6 mL",
      "15 mL",
      "150 mL",
      "10 mL",
    ],
    correta: 4,
    explicacao:
      "Pela relação C₁V₁ = C₂V₂: 15 × V₁ = 0,6 × 250, logo V₁ = 150 ÷ 15 = 10 mL. Isso significa que, após medir os 10 mL do ácido concentrado, o laboratorista deve completar com água até atingir exatamente 250 mL de solução final.",
  },
  {
    materia: "quimica",
    tema: "Soluções e concentrações",
    dificuldade: "dificil",
    enunciado:
      "Uma solução de NaOH 2 mol/L e volume 100 mL é misturada com uma solução de NaOH de concentração desconhecida e volume 400 mL, resultando em uma solução final de concentração 0,8 mol/L. A concentração molar da segunda solução era de:",
    opcoes: [
      "1 mol/L",
      "1,5 mol/L",
      "0,8 mol/L",
      "2 mol/L",
      "0,5 mol/L",
    ],
    correta: 4,
    explicacao:
      "O total de mols na mistura final é 0,8 × 0,5 = 0,4 mol; os mols vindos da primeira solução são 2 × 0,1 = 0,2 mol, restando 0,4 − 0,2 = 0,2 mol para a segunda solução. Dividindo pelo volume da segunda solução, 0,2 ÷ 0,4 = 0,5 mol/L. Isolar os mols de cada parcela antes de dividir pelo volume correspondente é o que evita confundir essa questão com uma simples média.",
  },
  {
    materia: "quimica",
    tema: "Soluções e concentrações",
    dificuldade: "dificil",
    enunciado:
      "Uma solução de ácido nítrico é preparada dissolvendo certa massa do ácido puro (massa molar 63 g/mol) em água suficiente para completar 2 L de solução, resultando em concentração 0,5 mol/L. A massa de ácido nítrico utilizada no preparo foi de:",
    opcoes: [
      "31,5 g",
      "126 g",
      "12,6 g",
      "6,3 g",
      "63 g",
    ],
    correta: 4,
    explicacao:
      "O número de mols necessário é 0,5 × 2 = 1 mol, e multiplicando pela massa molar, 1 × 63 = 63 g. Esse cálculo é o caminho inverso do usado para determinar a concentração a partir da massa: aqui, parte-se da concentração desejada para chegar à massa a ser pesada.",
  },
  {
    materia: "quimica",
    tema: "Soluções e concentrações",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa o rótulo de uma solução antisséptica de álcool 70%, indicando que essa é a concentração ideal para desinfecção, mais eficaz que o álcool absoluto (100%). Essa maior eficácia do álcool 70% se relaciona ao fato de que a presença de água na solução:",
    opcoes: [
      "aumenta a concentração de álcool disponível para ação antisséptica",
      "torna a solução completamente inerte, sem ação alguma",
      "transforma o álcool em um composto diferente",
      "elimina qualquer propriedade desinfetante da solução",
      "retarda a evaporação do álcool, prolongando o tempo de contato com os micro-organismos",
    ],
    correta: 4,
    explicacao:
      "A água reduz a velocidade de evaporação do álcool, mantendo-o em contato com micro-organismos por mais tempo, o que aumenta sua eficácia em desnaturar proteínas microbianas; o álcool absoluto evapora rápido demais para agir com a mesma eficiência. É um exemplo prático de como a concentração de uma solução influencia diretamente sua aplicação e função.",
  },
  {
    materia: "quimica",
    tema: "Soluções e concentrações",
    dificuldade: "media",
    enunciado:
      "Um estudante prepara uma solução de sulfato de alumínio, Al₂(SO₄)₃ (massa molar 342 g/mol), dissolvendo 34,2 g do sal em água suficiente para completar 1 L de solução. A concentração molar de íons sulfato (SO₄²⁻) presentes nessa solução é de:",
    opcoes: [
      "0,1 mol/L",
      "0,2 mol/L",
      "0,05 mol/L",
      "0,03 mol/L",
      "0,3 mol/L",
    ],
    correta: 4,
    explicacao:
      "A concentração molar do sal é 34,2 ÷ 342 = 0,1 mol/L; como cada mol de Al₂(SO₄)₃ libera três mols de sulfato, a concentração de SO₄²⁻ é o triplo, 0,1 × 3 = 0,3 mol/L. Esquecer de multiplicar pelo número de íons liberados por fórmula é um erro recorrente ao calcular concentração de íons específicos.",
  },
  {
    materia: "quimica",
    tema: "Soluções e concentrações",
    dificuldade: "media",
    enunciado:
      "Um professor de química demonstra que, ao adicionar um pequeno cristal de sal a uma solução supersaturada de acetato de sódio, ocorre cristalização quase instantânea de todo o excesso de soluto, com liberação perceptível de calor. Essa liberação de calor durante a cristalização indica que o processo de dissolução do acetato de sódio nessas condições foi originalmente:",
    opcoes: [
      "endotérmico, e por isso a cristalização também absorve calor",
      "isotérmico, sem qualquer troca de calor associada",
      "nuclear, envolvendo emissão de radiação",
      "impossível de ocorrer nessas condições",
      "exotérmico, e por isso a cristalização, processo inverso, libera calor",
    ],
    correta: 4,
    explicacao:
      "Se a cristalização (o processo inverso da dissolução) libera calor, isso indica que dissolver o sal originalmente havia absorvido essa mesma quantidade de energia — ou seja, o processo de dissolução foi endotérmico, e o processo de cristalização, sendo o inverso, é exotérmico. Esse experimento clássico com acetato de sódio é usado em bolsas de aquecimento reutilizáveis, ativadas mecanicamente.",
  },
  {
    materia: "quimica",
    tema: "Soluções e concentrações",
    dificuldade: "facil",
    enunciado:
      "As soluções podem ser classificadas em eletrolíticas e não eletrolíticas, conforme conduzam ou não corrente elétrica quando dissolvidas em água. Uma solução de açúcar em água, formada por moléculas neutras que não se dissociam em íons, é classificada como uma solução:",
    opcoes: [
      "eletrolítica forte, pois conduz corrente elétrica intensamente",
      "eletrolítica fraca, conduzindo pouca corrente",
      "iônica, formada inteiramente por íons livres",
      "supersaturada, independentemente da concentração",
      "não eletrolítica, pois não conduz corrente elétrica",
    ],
    correta: 4,
    explicacao:
      "Como as moléculas de açúcar permanecem neutras e inteiras em solução, sem liberar íons, a solução resultante não conduz corrente elétrica de forma significativa, sendo classificada como não eletrolítica. Soluções de sais e ácidos, que se dissociam ou ionizam em água, são os exemplos típicos de soluções eletrolíticas.",
  },
  {
    materia: "quimica",
    tema: "Soluções e concentrações",
    dificuldade: "dificil",
    enunciado:
      "Um técnico precisa preparar 3 L de uma solução de NaCl 0,2 mol/L a partir de uma solução concentrada de 6 mol/L. Após medir o volume necessário da solução concentrada, o volume de água que ainda deve ser adicionado para completar o volume final é de:",
    opcoes: [
      "3000 mL",
      "100 mL",
      "2000 mL",
      "1000 mL",
      "2900 mL",
    ],
    correta: 4,
    explicacao:
      "Pela relação C₁V₁ = C₂V₂: 6 × V₁ = 0,2 × 3000, logo V₁ = 600 ÷ 6 = 100 mL de solução concentrada. Como o volume final deve ser 3000 mL, a água a ser adicionada é 3000 − 100 = 2900 mL — um detalhe que escapa a quem calcula apenas o volume da solução concentrada e esquece de subtraí-lo do total.",
  },
];
