/* Radioatividade e química nuclear (50 questões).
   Emissões alfa, beta e gama, leis da radioatividade, meia-vida,
   fissão e fusão nuclear, e aplicações da radioatividade.
   Ver quimica.mjs para o formato. */

export const questoes = [
  {
    materia: "quimica",
    tema: "Radioatividade e química nuclear",
    dificuldade: "facil",
    enunciado:
      "A radioatividade é o fenômeno pelo qual núcleos atômicos instáveis emitem partículas ou energia espontaneamente, transformando-se em núcleos mais estáveis. Esse fenômeno foi descoberto no final do século XIX pelo físico francês:",
    opcoes: [
      "Henri Becquerel",
      "Isaac Newton",
      "John Dalton",
      "Antoine Lavoisier",
      "Dmitri Mendeleev",
    ],
    correta: 0,
    explicacao:
      "Becquerel observou, em 1896, que sais de urânio emitiam uma radiação capaz de sensibilizar chapas fotográficas mesmo no escuro, sem qualquer exposição prévia à luz, o que marcou a descoberta da radioatividade. Marie e Pierre Curie, pouco depois, aprofundaram essas investigações e descobriram outros elementos radioativos, como o polônio e o rádio.",
  },
  {
    materia: "quimica",
    tema: "Radioatividade e química nuclear",
    dificuldade: "facil",
    enunciado:
      "A emissão alfa (α) é um tipo de decaimento radioativo em que o núcleo emite uma partícula composta por dois prótons e dois nêutrons, idêntica ao núcleo de um átomo de hélio. Ao emitir uma partícula alfa, o número atômico do átomo original:",
    opcoes: [
      "diminui em 2 unidades, e o número de massa diminui em 4 unidades",
      "aumenta em 2 unidades, e o número de massa permanece igual",
      "permanece igual, e o número de massa diminui em 4 unidades",
      "diminui em 4 unidades, e o número de massa diminui em 2 unidades",
      "aumenta em 4 unidades, e o número de massa aumenta em 2 unidades",
    ],
    correta: 0,
    explicacao:
      "Como a partícula alfa carrega 2 prótons e 2 nêutrons, o átomo que a emite perde 2 unidades de número atômico (2 prótons a menos) e 4 unidades de número de massa (2 prótons + 2 nêutrons a menos), transformando-se em um elemento diferente, duas posições atrás na tabela periódica.",
  },
  {
    materia: "quimica",
    tema: "Radioatividade e química nuclear",
    dificuldade: "facil",
    enunciado:
      "A emissão beta (β) é um tipo de decaimento radioativo em que um nêutron do núcleo se transforma em um próton, liberando um elétron de alta energia. Ao emitir uma partícula beta, o número atômico do átomo original:",
    opcoes: [
      "aumenta em 1 unidade, e o número de massa permanece igual",
      "diminui em 1 unidade, e o número de massa permanece igual",
      "aumenta em 1 unidade, e o número de massa também aumenta em 1",
      "permanece igual, e o número de massa diminui em 1 unidade",
      "diminui em 2 unidades, e o número de massa diminui em 1",
    ],
    correta: 0,
    explicacao:
      "Como um nêutron se converte em um próton dentro do núcleo, o número de prótons (número atômico) aumenta em 1, mas a soma total de prótons e nêutrons (número de massa) permanece a mesma, já que um nêutron simplesmente se tornou um próton. O elétron emitido não faz parte da estrutura original do átomo, sendo criado no próprio processo de decaimento.",
  },
  {
    materia: "quimica",
    tema: "Radioatividade e química nuclear",
    dificuldade: "facil",
    enunciado:
      "A emissão gama (γ) é um tipo de radiação eletromagnética de altíssima energia, liberada por núcleos atômicos após emissões alfa ou beta, quando o núcleo ainda está em um estado excitado. Diferentemente das emissões alfa e beta, a emissão gama:",
    opcoes: [
      "não altera o número atômico nem o número de massa do átomo",
      "sempre diminui o número atômico em 2 unidades",
      "sempre aumenta o número de massa em 4 unidades",
      "transforma o átomo em um elemento completamente diferente",
      "ocorre apenas em átomos de hidrogênio",
    ],
    correta: 0,
    explicacao:
      "Como a radiação gama é pura energia eletromagnética, sem massa nem carga, sua emissão não altera nem o número de prótons nem o número de massa do núcleo — ela apenas libera o excesso de energia de um núcleo que ficou em estado excitado após uma emissão alfa ou beta anterior, levando-o a um estado de menor energia.",
  },
  {
    materia: "quimica",
    tema: "Radioatividade e química nuclear",
    dificuldade: "facil",
    enunciado:
      "Comparando o poder de penetração das três principais formas de radiação, a radiação alfa é a menos penetrante, sendo barrada por uma simples folha de papel; a radiação beta atravessa o papel, mas é barrada por uma fina placa de alumínio; e a radiação gama, a mais penetrante das três, exige blindagem de:",
    opcoes: [
      "chumbo ou concreto espesso",
      "papel comum",
      "uma fina camada de água",
      "tecido de algodão",
      "vidro fino",
    ],
    correta: 0,
    explicacao:
      "Por ser uma radiação eletromagnética de altíssima energia, a radiação gama atravessa facilmente materiais que barrariam alfa e beta, exigindo blindagens densas e espessas, como chumbo ou concreto reforçado, para reduzir sua intensidade a níveis seguros — é por isso que salas de radioterapia e reatores nucleares têm paredes tão grossas.",
  },
  {
    materia: "quimica",
    tema: "Radioatividade e química nuclear",
    dificuldade: "facil",
    enunciado:
      "A meia-vida de um isótopo radioativo é o tempo necessário para que metade da quantidade inicial desse isótopo se desintegre. Se um isótopo tem meia-vida de 10 anos, após 20 anos (duas meias-vidas), a fração da amostra original que ainda permanece sem se desintegrar é de:",
    opcoes: [
      "1/4 (25%)",
      "1/2 (50%)",
      "1/8 (12,5%)",
      "0% (toda a amostra se desintegrou)",
      "3/4 (75%)",
    ],
    correta: 0,
    explicacao:
      "A cada meia-vida decorrida, a quantidade restante cai pela metade: após a primeira meia-vida, resta 1/2; após a segunda, resta metade de 1/2, ou seja, 1/4 (25%). Esse decaimento é exponencial, e não linear, o que significa que a amostra nunca chega teoricamente a zero, apenas se aproxima cada vez mais desse valor.",
  },
  {
    materia: "quimica",
    tema: "Radioatividade e química nuclear",
    dificuldade: "facil",
    enunciado:
      "A fissão nuclear é o processo em que um núcleo atômico pesado se divide em dois núcleos menores, liberando grande quantidade de energia. Esse processo é a base do funcionamento das usinas:",
    opcoes: [
      "nucleares, como as de Angra dos Reis",
      "hidrelétricas",
      "eólicas",
      "termelétricas a carvão",
      "solares fotovoltaicas",
    ],
    correta: 0,
    explicacao:
      "Nas usinas nucleares, a fissão controlada de núcleos de urânio libera energia térmica, usada para aquecer água e gerar vapor que movimenta turbinas conectadas a geradores elétricos, de forma análoga a uma termelétrica convencional, mas com a fissão nuclear como fonte de calor em vez da queima de combustível. Hidrelétricas, eólicas e solares não envolvem qualquer processo nuclear em sua geração de eletricidade.",
  },
  {
    materia: "quimica",
    tema: "Radioatividade e química nuclear",
    dificuldade: "facil",
    enunciado:
      "A fusão nuclear é o processo em que dois núcleos atômicos leves se combinam para formar um núcleo mais pesado, liberando quantidades ainda maiores de energia que a fissão. Esse processo é o que ocorre naturalmente no interior do:",
    opcoes: [
      "Sol e das demais estrelas",
      "núcleo da Terra",
      "reatores das usinas nucleares comerciais atuais",
      "gelo da Antártida",
      "manto terrestre",
    ],
    correta: 0,
    explicacao:
      "No interior do Sol e de outras estrelas, núcleos de hidrogênio se fundem sob temperaturas e pressões extremas, formando hélio e liberando a energia que sustenta o brilho e o calor estelar — é essa mesma reação que cientistas tentam reproduzir de forma controlada na Terra para geração de energia, ainda em fase experimental em grande escala. As usinas nucleares comerciais atuais utilizam fissão, não fusão.",
  },
  {
    materia: "quimica",
    tema: "Radioatividade e química nuclear",
    dificuldade: "facil",
    enunciado:
      "Os exames de radiografia médica utilizam radiação ionizante para produzir imagens do interior do corpo humano, aproveitando a diferença de absorção da radiação entre tecidos moles e ossos. O uso excessivo ou desnecessário desse tipo de exame é evitado porque a radiação ionizante:",
    opcoes: [
      "pode danificar células e material genético, aumentando o risco de câncer em exposições excessivas",
      "não apresenta qualquer risco à saúde, mesmo em grandes quantidades",
      "sempre cura doenças presentes no organismo automaticamente",
      "torna o paciente permanentemente radioativo após o exame",
      "aumenta a temperatura corporal de forma perigosa",
    ],
    correta: 0,
    explicacao:
      "A radiação ionizante, em doses elevadas ou exposições repetidas, pode danificar diretamente moléculas de DNA nas células, aumentando o risco de mutações que podem levar ao câncer ao longo do tempo — por isso os exames radiográficos usam a menor dose possível compatível com uma imagem diagnóstica útil, e o uso de aventais de chumbo protege áreas do corpo não examinadas.",
  },
  {
    materia: "quimica",
    tema: "Radioatividade e química nuclear",
    dificuldade: "facil",
    enunciado:
      "O iodo-131, um isótopo radioativo, é usado em medicina nuclear tanto para diagnóstico quanto para tratamento de certas doenças da tireoide, órgão que naturalmente absorve iodo para produzir hormônios. Esse tipo de aplicação médica da radioatividade é chamado de:",
    opcoes: [
      "medicina nuclear",
      "cirurgia robótica",
      "terapia gênica",
      "fisioterapia",
      "hemodiálise",
    ],
    correta: 0,
    explicacao:
      "A medicina nuclear utiliza isótopos radioativos, chamados de radiofármacos, tanto para diagnosticar doenças por meio de imagens quanto para tratar certas condições, aproveitando a capacidade de determinados órgãos de absorver preferencialmente certos elementos, como a tireoide com o iodo. É uma área distinta da radioterapia convencional, embora ambas envolvam o uso terapêutico de radiação.",
  },
  {
    materia: "quimica",
    tema: "Radioatividade e química nuclear",
    dificuldade: "media",
    enunciado:
      "Um átomo de urânio-238 (número atômico 92) emite uma partícula alfa, transformando-se em um novo elemento. O número atômico e o número de massa do átomo resultante são, respectivamente:",
    opcoes: [
      "94 e 242",
      "90 e 234",
      "92 e 234",
      "90 e 238",
      "88 e 234",
    ],
    correta: 1,
    explicacao:
      "A emissão alfa reduz o número atômico em 2 (92 − 2 = 90) e o número de massa em 4 (238 − 4 = 234), resultando em um átomo de tório-234. Esse tipo de cálculo simples de subtração é a base para acompanhar qualquer série de decaimento radioativo passo a passo.",
  },
  {
    materia: "quimica",
    tema: "Radioatividade e química nuclear",
    dificuldade: "media",
    enunciado:
      "Um átomo de carbono-14 (número atômico 6) emite uma partícula beta, transformando-se em um novo elemento. O número atômico e o número de massa do átomo resultante são, respectivamente:",
    opcoes: [
      "5 e 14",
      "7 e 14",
      "7 e 13",
      "6 e 13",
      "5 e 13",
    ],
    correta: 1,
    explicacao:
      "A emissão beta aumenta o número atômico em 1 (6 + 1 = 7), mantendo o número de massa igual (14), o que transforma o carbono-14 em nitrogênio-14, um átomo estável. Essa reação é a base da datação por carbono-14, usada para estimar a idade de materiais orgânicos antigos.",
  },
  {
    materia: "quimica",
    tema: "Radioatividade e química nuclear",
    dificuldade: "media",
    enunciado:
      "Uma amostra inicial de 80 g de um isótopo radioativo, de meia-vida igual a 5 anos, é deixada em repouso. Após 15 anos, a massa restante desse isótopo será de:",
    opcoes: [
      "40 g",
      "10 g",
      "20 g",
      "5 g",
      "0 g",
    ],
    correta: 1,
    explicacao:
      "Em 15 anos cabem exatamente 3 meias-vidas de 5 anos; a massa cai pela metade a cada meia-vida: 80 → 40 → 20 → 10 g. Confirmar quantas meias-vidas cabem no intervalo de tempo total, dividindo o tempo decorrido pela meia-vida, é o primeiro passo para resolver corretamente esse tipo de problema.",
  },
  {
    materia: "quimica",
    tema: "Radioatividade e química nuclear",
    dificuldade: "media",
    enunciado:
      "Um laboratório possui uma amostra de 100 g de um isótopo radioativo. Após um período de tempo, restam apenas 12,5 g desse isótopo sem se desintegrar. Sabendo que a meia-vida desse isótopo é de 8 anos, o tempo decorrido desde o início da observação foi de:",
    opcoes: [
      "16 anos",
      "24 anos",
      "8 anos",
      "32 anos",
      "12 anos",
    ],
    correta: 1,
    explicacao:
      "A fração restante é 12,5/100 = 1/8, que corresponde a exatamente 3 meias-vidas (1/2 → 1/4 → 1/8); multiplicando pelo valor da meia-vida: 3 × 8 = 24 anos. Reconhecer a fração restante como uma potência de 1/2 é o atalho mais rápido para descobrir quantas meias-vidas se passaram sem precisar de fórmulas mais complexas.",
  },
  {
    materia: "quimica",
    tema: "Radioatividade e química nuclear",
    dificuldade: "media",
    enunciado:
      "A datação por carbono-14 é uma técnica usada para estimar a idade de materiais orgânicos antigos, como fósseis e artefatos arqueológicos, comparando a proporção de carbono-14 restante com a proporção original presente em organismos vivos. Essa técnica se baseia no princípio de que:",
    opcoes: [
      "todo material, vivo ou não, contém a mesma quantidade de carbono-14 para sempre",
      "organismos vivos absorvem carbono-14 continuamente, e essa absorção cessa após a morte, permitindo medir o tempo decorrido pelo decaimento",
      "o carbono-14 se transforma instantaneamente em carbono-12 ao morrer o organismo",
      "apenas materiais inorgânicos podem ser datados por essa técnica",
      "o carbono-14 nunca decai, permanecendo constante ao longo do tempo",
    ],
    correta: 1,
    explicacao:
      "Enquanto vivo, um organismo incorpora carbono-14 continuamente por meio da alimentação e, no caso das plantas, da fotossíntese, mantendo uma proporção relativamente constante desse isótopo em relação ao carbono-12; após a morte, essa absorção cessa e o carbono-14 remanescente decai com sua meia-vida característica de aproximadamente 5730 anos, permitindo calcular há quanto tempo o organismo morreu a partir da proporção restante.",
  },
  {
    materia: "quimica",
    tema: "Radioatividade e química nuclear",
    dificuldade: "media",
    enunciado:
      "Comparando a fissão e a fusão nucleares, ambas capazes de liberar grande quantidade de energia, uma diferença importante entre os dois processos é que a fusão nuclear:",
    opcoes: [
      "já é amplamente utilizada em todas as usinas nucleares comerciais atuais",
      "exige temperaturas extremamente altas para ocorrer, dificultando seu controle em escala terrestre",
      "não libera qualquer quantidade de energia",
      "envolve a quebra de um núcleo pesado em dois núcleos menores",
      "é um processo muito mais simples de controlar que a fissão",
    ],
    correta: 1,
    explicacao:
      "Para que núcleos leves, como os de hidrogênio, se aproximem o suficiente para se fundirem, é necessário vencer a forte repulsão eletrostática entre eles, o que exige temperaturas de dezenas de milhões de graus — condição extremamente difícil de sustentar e controlar de forma estável em reatores terrestres, ao contrário da fissão, já dominada comercialmente há décadas.",
  },
  {
    materia: "quimica",
    tema: "Radioatividade e química nuclear",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa a série de decaimento do urânio-238, que passa por várias emissões alfa e beta sucessivas até se estabilizar como um isótopo de chumbo. Cada etapa dessa série produz um novo elemento radioativo, chamado de isótopo filho, até que se atinja um núcleo estável. Esse processo de múltiplas transformações sucessivas é chamado de:",
    opcoes: [
      "fusão nuclear contínua",
      "série radioativa (ou série de decaimento)",
      "reação em cadeia de fissão",
      "meia-vida acumulada",
      "isomeria nuclear",
    ],
    correta: 1,
    explicacao:
      "Uma série radioativa é uma sequência de decaimentos sucessivos, cada um produzindo um novo isótopo instável até que, ao final de várias etapas, se alcance um isótopo estável — no caso do urânio-238, o produto final estável é o chumbo-206, após 14 etapas de decaimento envolvendo emissões alfa e beta.",
  },
  {
    materia: "quimica",
    tema: "Radioatividade e química nuclear",
    dificuldade: "media",
    enunciado:
      "Uma reação em cadeia de fissão nuclear ocorre quando os nêutrons liberados pela fissão de um núcleo atingem outros núcleos vizinhos, provocando novas fissões que liberam ainda mais nêutrons, em um processo autossustentado. Em uma usina nuclear, essa reação é controlada por barras de controle que:",
    opcoes: [
      "aceleram ao máximo a reação em cadeia, sem qualquer controle",
      "absorvem parte dos nêutrons liberados, regulando a velocidade da reação em cadeia",
      "eliminam completamente a possibilidade de fissão nuclear",
      "aumentam a temperatura do reator sem qualquer limite",
      "não têm qualquer função relacionada à segurança do reator",
    ],
    correta: 1,
    explicacao:
      "As barras de controle, geralmente feitas de materiais que absorvem nêutrons com eficiência, como cádmio ou boro, podem ser inseridas ou retiradas do núcleo do reator para regular quantos nêutrons ficam disponíveis para provocar novas fissões, mantendo a reação em cadeia em um ritmo controlado e seguro, em vez de deixá-la acelerar descontroladamente.",
  },
  {
    materia: "quimica",
    tema: "Radioatividade e química nuclear",
    dificuldade: "media",
    enunciado:
      "Um técnico de radioproteção monitora a exposição de trabalhadores em uma instalação que utiliza fontes radioativas, seguindo o princípio conhecido pela sigla ALARA (As Low As Reasonably Achievable, ou 'tão baixo quanto razoavelmente exequível'). Esse princípio orienta que a exposição à radiação deve ser:",
    opcoes: [
      "maximizada sempre que possível, sem qualquer restrição",
      "minimizada ao máximo possível, mesmo quando abaixo dos limites legais considerados seguros",
      "completamente eliminada, tornando qualquer uso de radiação proibido",
      "irrelevante, já que não há qualquer risco associado à radiação",
      "aumentada gradualmente ao longo do tempo, sem monitoramento",
    ],
    correta: 1,
    explicacao:
      "O princípio ALARA reconhece que mesmo doses de radiação abaixo dos limites legais podem representar algum risco, por menor que seja, e por isso orienta que qualquer exposição desnecessária seja evitada, buscando sempre a menor dose possível compatível com a realização segura e eficaz da atividade, seja em medicina, indústria ou pesquisa.",
  },
  {
    materia: "quimica",
    tema: "Radioatividade e química nuclear",
    dificuldade: "media",
    enunciado:
      "A radioterapia, usada no tratamento de diversos tipos de câncer, utiliza radiação ionizante para destruir células tumorais. O princípio biológico por trás dessa técnica é que a radiação:",
    opcoes: [
      "aquece diretamente o tumor até sua destruição térmica completa",
      "danifica o material genético das células, e células cancerígenas, que se dividem rapidamente, são particularmente vulneráveis a esse dano",
      "transforma as células cancerígenas em células saudáveis instantaneamente",
      "não tem qualquer efeito sobre células vivas de qualquer tipo",
      "atua exclusivamente sobre bactérias presentes no tumor",
    ],
    correta: 1,
    explicacao:
      "A radiação ionizante danifica o DNA das células expostas, e como células cancerígenas costumam se dividir com muito mais frequência que a maioria das células saudáveis, elas têm menos tempo e capacidade de reparar esse dano antes da próxima divisão, tornando-se mais suscetíveis à morte celular induzida pela radioterapia — embora células saudáveis próximas também sejam parcialmente afetadas, o que explica os efeitos colaterais do tratamento.",
  },
  {
    materia: "quimica",
    tema: "Radioatividade e química nuclear",
    dificuldade: "dificil",
    enunciado:
      "Uma amostra de 240 g de um isótopo radioativo tem meia-vida de 6 horas. Após um período de 24 horas, a massa restante desse isótopo será de:",
    opcoes: [
      "30 g",
      "60 g",
      "15 g",
      "7,5 g",
      "120 g",
    ],
    correta: 2,
    explicacao:
      "Em 24 horas cabem exatamente 4 meias-vidas de 6 horas; a massa cai pela metade a cada meia-vida: 240 → 120 → 60 → 30 → 15 g. Esse tipo de decaimento em múltiplas etapas exige acompanhar cuidadosamente cada meia-vida sucessiva, sem pular etapas no cálculo.",
  },
  {
    materia: "quimica",
    tema: "Radioatividade e química nuclear",
    dificuldade: "dificil",
    enunciado:
      "Um átomo de urânio-235 sofre uma sequência de decaimentos: primeiro emite uma partícula alfa, depois uma partícula beta. Sabendo que o urânio tem número atômico 92, o número atômico e o número de massa do átomo resultante ao final dessa sequência de duas emissões são, respectivamente:",
    opcoes: [
      "90 e 231",
      "93 e 231",
      "91 e 231",
      "91 e 235",
      "89 e 231",
    ],
    correta: 2,
    explicacao:
      "A emissão alfa leva de (92, 235) para (90, 231); a emissão beta seguinte aumenta o número atômico em 1, sem alterar o número de massa, levando de (90, 231) para (91, 231). Acompanhar cada emissão separadamente, atualizando os dois números a cada etapa, é essencial para não errar o resultado final de uma sequência de decaimentos.",
  },
  {
    materia: "quimica",
    tema: "Radioatividade e química nuclear",
    dificuldade: "dificil",
    enunciado:
      "Uma amostra de material radioativo apresenta atividade inicial de 800 desintegrações por segundo. Sabendo que a meia-vida desse material é de 3 dias, a atividade dessa amostra após 12 dias será de:",
    opcoes: [
      "100 desintegrações por segundo",
      "25 desintegrações por segundo",
      "50 desintegrações por segundo",
      "200 desintegrações por segundo",
      "400 desintegrações por segundo",
    ],
    correta: 2,
    explicacao:
      "Como a atividade radioativa decai na mesma proporção que a massa da amostra, em 12 dias cabem 4 meias-vidas de 3 dias: 800 → 400 → 200 → 100 → 50 desintegrações por segundo. Esse mesmo raciocínio de meia-vida se aplica tanto à massa quanto à atividade de uma amostra radioativa, já que ambas decaem de forma proporcional.",
  },
  {
    materia: "quimica",
    tema: "Radioatividade e química nuclear",
    dificuldade: "dificil",
    enunciado:
      "Um paciente recebe uma dose de um radiofármaco com meia-vida biológica curta, projetada especificamente para exames diagnósticos. Comparando esse isótopo com outro de meia-vida muito mais longa, usado hipoteticamente na mesma dose, a vantagem médica do isótopo de meia-vida curta é que ele:",
    opcoes: [
      "nunca decai completamente, permanecendo radioativo para sempre",
      "é sempre mais perigoso que isótopos de meia-vida longa",
      "permanece radioativo no corpo do paciente por um tempo menor, reduzindo a dose total de radiação absorvida",
      "não pode ser detectado por nenhum equipamento de imagem",
      "aumenta permanentemente o risco de câncer no paciente",
    ],
    correta: 2,
    explicacao:
      "Isótopos de meia-vida curta, escolhidos cuidadosamente para exames diagnósticos, permanecem detectáveis o suficiente para gerar a imagem médica necessária, mas decaem rapidamente depois, minimizando o tempo total de exposição à radiação e a dose acumulada pelo paciente, uma consideração importante de segurança na escolha de radiofármacos para diagnóstico.",
  },
  {
    materia: "quimica",
    tema: "Radioatividade e química nuclear",
    dificuldade: "dificil",
    enunciado:
      "Um arqueólogo analisa um fragmento de madeira encontrado em uma escavação e determina, por meio da datação por carbono-14, que restam aproximadamente 25% da quantidade original desse isótopo na amostra. Sabendo que a meia-vida do carbono-14 é de aproximadamente 5730 anos, a idade estimada dessa amostra é de aproximadamente:",
    opcoes: [
      "5730 anos",
      "17190 anos",
      "11460 anos",
      "2865 anos",
      "22920 anos",
    ],
    correta: 2,
    explicacao:
      "Restar 25% (ou 1/4) da quantidade original corresponde a exatamente 2 meias-vidas (100% → 50% → 25%); multiplicando pelo valor da meia-vida: 2 × 5730 = 11460 anos. Esse cálculo simples, contando quantas vezes a quantidade foi dividida por 2, é a base da estimativa de idade por carbono-14 em arqueologia.",
  },
  {
    materia: "quimica",
    tema: "Radioatividade e química nuclear",
    dificuldade: "media",
    enunciado:
      "Um técnico de segurança do trabalho utiliza um dosímetro, um dispositivo que registra a quantidade acumulada de radiação ionizante recebida por um trabalhador exposto a fontes radioativas em seu ambiente de trabalho. Esse tipo de monitoramento é importante porque:",
    opcoes: [
      "elimina completamente qualquer risco associado à radiação",
      "transforma a radiação em uma forma de energia totalmente segura",
      "permite verificar se a exposição do trabalhador permanece dentro dos limites de segurança recomendados",
      "aumenta propositalmente a exposição do trabalhador à radiação",
      "não tem qualquer relação com a saúde ocupacional",
    ],
    correta: 2,
    explicacao:
      "O dosímetro permite acompanhar ao longo do tempo se a dose acumulada de radiação recebida por um trabalhador permanece dentro dos limites considerados seguros pelas normas de radioproteção, possibilitando intervenções, como afastamento temporário ou reforço de proteção, antes que a exposição se torne preocupante.",
  },
  {
    materia: "quimica",
    tema: "Radioatividade e química nuclear",
    dificuldade: "media",
    enunciado:
      "O acidente nuclear de Chernobyl, ocorrido em 1986, e o acidente radiológico de Goiânia, ocorrido em 1987 com uma fonte de césio-137 abandonada, são frequentemente citados em discussões sobre segurança no uso de materiais radioativos. Esses episódios históricos reforçam a importância de:",
    opcoes: [
      "abandonar completamente qualquer uso de energia nuclear ou radioatividade",
      "ignorar normas de segurança em instalações que utilizam radioatividade",
      "protocolos rigorosos de segurança, armazenamento e descarte adequado de materiais e equipamentos radioativos",
      "considerar que acidentes radioativos nunca têm consequências reais",
      "usar radioatividade sem qualquer supervisão técnica especializada",
    ],
    correta: 2,
    explicacao:
      "Ambos os acidentes, por razões distintas — falha operacional em um reator no caso de Chernobyl, e descarte inadequado de uma fonte radioativa hospitalar abandonada no caso de Goiânia —, evidenciam a necessidade de protocolos rigorosos em toda a cadeia de uso de materiais radioativos, da operação segura de reatores ao correto descarte de fontes já não mais utilizadas, para evitar exposições acidentais da população.",
  },
  {
    materia: "quimica",
    tema: "Radioatividade e química nuclear",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa a diferença entre isótopos radioativos e isótopos estáveis de um mesmo elemento químico. Isótopos radioativos, ao contrário dos estáveis, apresentam núcleos que:",
    opcoes: [
      "possuem sempre mais elétrons que prótons",
      "nunca emitem qualquer tipo de radiação",
      "têm uma proporção desfavorável entre prótons e nêutrons, tornando-os instáveis e propensos ao decaimento",
      "têm exatamente a mesma quantidade de prótons e nêutrons em todos os casos",
      "não participam de nenhum tipo de reação química",
    ],
    correta: 2,
    explicacao:
      "A estabilidade de um núcleo atômico depende de uma proporção relativamente equilibrada entre prótons e nêutrons; quando essa proporção foge da faixa de estabilidade, seja por excesso de nêutrons, excesso de prótons ou simplesmente por ser um núcleo muito grande, o átomo se torna radioativo e tende a decair, emitindo partículas ou energia até atingir uma configuração mais estável.",
  },
  {
    materia: "quimica",
    tema: "Radioatividade e química nuclear",
    dificuldade: "dificil",
    enunciado:
      "Um laboratório de pesquisa trabalha com dois isótopos radioativos diferentes: o isótopo X, com meia-vida de 2 horas, e o isótopo Y, com meia-vida de 20 anos. Ambos começam com a mesma atividade inicial. Comparando os dois isótopos após um período de 10 horas, é correto afirmar que:",
    opcoes: [
      "os dois isótopos terão decaído exatamente na mesma proporção",
      "o isótopo Y terá decaído muito mais que o isótopo X",
      "o isótopo X terá decaído muito mais que o isótopo Y, cuja atividade praticamente não mudou nesse curto período",
      "nenhum dos dois isótopos sofrerá qualquer decaimento em 10 horas",
      "a meia-vida não tem qualquer relação com a velocidade de decaimento",
    ],
    correta: 2,
    explicacao:
      "Em 10 horas, o isótopo X já passou por 5 meias-vidas completas (2h cada), reduzindo sua atividade para 1/32 do valor original; o isótopo Y, com meia-vida de 20 anos, mal terá decaído de forma perceptível nesse intervalo de apenas 10 horas, uma fração ínfima de sua meia-vida. Quanto menor a meia-vida, mais rapidamente um isótopo decai, e é essa diferença de escala de tempo que determina a aplicação prática de cada isótopo, seja em diagnóstico médico rápido ou em fontes de energia de longa duração.",
  },
  {
    materia: "quimica",
    tema: "Radioatividade e química nuclear",
    dificuldade: "media",
    enunciado:
      "O césio-137 e o cobalto-60 são isótopos radioativos utilizados em diversas aplicações industriais, incluindo a esterilização de materiais médicos e a irradiação de alimentos para prolongar sua conservação, sem torná-los radioativos no processo. Essa técnica de irradiação de alimentos funciona porque a radiação utilizada:",
    opcoes: [
      "transforma o alimento em uma substância radioativa permanente",
      "aumenta a quantidade de micro-organismos presentes no alimento",
      "elimina micro-organismos e parasitas presentes no alimento sem deixar resíduos radioativos, já que não há contato físico entre a fonte e o alimento que a torne radioativa",
      "modifica quimicamente todos os átomos do alimento em elementos diferentes",
      "não tem qualquer efeito sobre micro-organismos presentes no alimento",
    ],
    correta: 2,
    explicacao:
      "A radiação gama utilizada na irradiação de alimentos passa através do produto, danificando o material genético de micro-organismos e parasitas presentes, sem que ocorra contato físico direto entre a fonte radioativa e o alimento que pudesse torná-lo radioativo — o alimento irradiado não emite radiação após o processo, sendo seguro para consumo segundo órgãos de saúde e agências regulatórias internacionais.",
  },
  {
    materia: "quimica",
    tema: "Radioatividade e química nuclear",
    dificuldade: "media",
    enunciado:
      "Um detector Geiger-Müller é um instrumento usado para detectar e medir a presença de radiação ionizante em um ambiente. Esse tipo de equipamento é amplamente utilizado em instalações nucleares, hospitais e sítios de pesquisa porque:",
    opcoes: [
      "elimina completamente qualquer radiação presente no ambiente",
      "transforma a radiação detectada em energia elétrica utilizável",
      "funciona apenas em ambientes completamente livres de radiação",
      "permite identificar e quantificar a radiação presente, mesmo sendo ela imperceptível aos sentidos humanos",
      "detecta exclusivamente radiação visível a olho nu",
    ],
    correta: 3,
    explicacao:
      "Como a radiação ionizante não pode ser vista, sentida ou cheirada pelos sentidos humanos, instrumentos como o detector Geiger-Müller são essenciais para identificar sua presença e medir sua intensidade, permitindo que trabalhadores tomem medidas de proteção adequadas antes que a exposição se torne perigosa, funcionando como um verdadeiro 'sexto sentido' tecnológico para radiação.",
  },
  {
    materia: "quimica",
    tema: "Radioatividade e química nuclear",
    dificuldade: "facil",
    enunciado:
      "O casal Marie e Pierre Curie ficou conhecido por suas pesquisas pioneiras sobre radioatividade no início do século XX, incluindo a descoberta de dois novos elementos químicos radioativos. Esses dois elementos, descobertos e nomeados pelo casal, são:",
    opcoes: [
      "urânio e plutônio",
      "hidrogênio e hélio",
      "carbono e nitrogênio",
      "polônio e rádio",
      "ouro e prata",
    ],
    correta: 3,
    explicacao:
      "Marie Curie isolou o polônio, nomeado em homenagem à sua Polônia natal, e o rádio, batizado por sua intensa radioatividade, trabalhando junto com seu marido Pierre a partir de minérios de urânio; essas descobertas renderam a Marie Curie dois prêmios Nobel, em Física e em Química, sendo a primeira pessoa a receber o prêmio em duas categorias científicas diferentes.",
  },
  {
    materia: "quimica",
    tema: "Radioatividade e química nuclear",
    dificuldade: "facil",
    enunciado:
      "Comparando a massa das partículas alfa, beta e a radiação gama, é correto afirmar que a partícula alfa, formada por dois prótons e dois nêutrons, é a mais:",
    opcoes: [
      "leve das três, e também a mais penetrante",
      "massiva das três, e também a mais penetrante",
      "leve das três, mas a menos penetrante",
      "massiva das três, mas também a menos penetrante",
      "carregada eletricamente das três, sem massa alguma",
    ],
    correta: 3,
    explicacao:
      "A partícula alfa é consideravelmente mais pesada que a partícula beta (um simples elétron) e que a radiação gama (sem massa), mas justamente por ser grande e carregada, interage fortemente com a matéria ao seu redor, perdendo energia rapidamente e sendo barrada com facilidade, mesmo por uma folha de papel.",
  },
  {
    materia: "quimica",
    tema: "Radioatividade e química nuclear",
    dificuldade: "media",
    enunciado:
      "Um átomo de tório-232 (número atômico 90) emite uma partícula alfa, transformando-se em um novo elemento. O número atômico e o número de massa do átomo resultante são, respectivamente:",
    opcoes: [
      "92 e 236",
      "90 e 228",
      "88 e 232",
      "88 e 228",
      "86 e 228",
    ],
    correta: 3,
    explicacao:
      "A emissão alfa reduz o número atômico em 2 (90 − 2 = 88) e o número de massa em 4 (232 − 4 = 228), transformando o tório-232 em rádio-228. Esse é o primeiro passo da série de decaimento natural do tório, que também termina, após várias etapas, em um isótopo estável de chumbo.",
  },
  {
    materia: "quimica",
    tema: "Radioatividade e química nuclear",
    dificuldade: "media",
    enunciado:
      "Uma amostra de 160 g de um isótopo radioativo tem meia-vida de 4 dias. Após 12 dias, a massa restante desse isótopo será de:",
    opcoes: [
      "40 g",
      "80 g",
      "10 g",
      "20 g",
      "60 g",
    ],
    correta: 3,
    explicacao:
      "Em 12 dias cabem exatamente 3 meias-vidas de 4 dias; a massa cai pela metade a cada meia-vida: 160 → 80 → 40 → 20 g. Esse padrão de queda pela metade, repetido a cada intervalo de meia-vida, é a característica central do decaimento radioativo de qualquer isótopo.",
  },
  {
    materia: "quimica",
    tema: "Radioatividade e química nuclear",
    dificuldade: "media",
    enunciado:
      "Um pesquisador analisa uma amostra de material radioativo e constata que restam 6,25% da quantidade inicial sem se desintegrar. Sabendo que a meia-vida desse isótopo é de 10 dias, o tempo decorrido desde o início da observação foi de:",
    opcoes: [
      "20 dias",
      "30 dias",
      "50 dias",
      "40 dias",
      "10 dias",
    ],
    correta: 3,
    explicacao:
      "A fração restante, 6,25%, corresponde a 1/16, que é o resultado de 4 meias-vidas sucessivas (1/2 → 1/4 → 1/8 → 1/16); multiplicando pelo valor da meia-vida: 4 × 10 = 40 dias. Reconhecer rapidamente frações como 1/16, 1/32 ou 1/64 como potências de 1/2 agiliza bastante esse tipo de cálculo.",
  },
  {
    materia: "quimica",
    tema: "Radioatividade e química nuclear",
    dificuldade: "media",
    enunciado:
      "Um reator nuclear de fissão utiliza urânio enriquecido como combustível, no qual a proporção do isótopo físsil urânio-235 é artificialmente aumentada em relação à encontrada no minério natural. Esse processo de enriquecimento é necessário porque:",
    opcoes: [
      "o urânio natural não contém nenhum átomo de urânio-235",
      "o enriquecimento transforma o urânio em um elemento completamente diferente",
      "o urânio enriquecido deixa de ser radioativo",
      "o urânio natural contém uma proporção muito pequena de urânio-235, insuficiente para sustentar uma reação em cadeia eficiente na maioria dos reatores",
      "o processo de enriquecimento elimina toda a massa do urânio original",
    ],
    correta: 3,
    explicacao:
      "O urânio natural é composto por mais de 99% de urânio-238, que não sustenta fissão em cadeia com a mesma eficiência, e menos de 1% de urânio-235, o isótopo físsil desejado; o processo de enriquecimento aumenta artificialmente essa proporção de urânio-235 a níveis que tornam viável a reação em cadeia sustentada necessária para a maioria dos reatores nucleares comerciais.",
  },
  {
    materia: "quimica",
    tema: "Radioatividade e química nuclear",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa o destino final do combustível nuclear usado, que continua radioativo por muito tempo mesmo após deixar de ser útil para gerar energia no reator. Esse resíduo é armazenado, geralmente, em:",
    opcoes: [
      "aterros sanitários comuns, junto ao lixo doméstico",
      "rios e oceanos, sem qualquer tratamento",
      "incineradores convencionais de resíduos",
      "piscinas de resfriamento e, posteriormente, instalações de armazenamento seco especialmente projetadas e monitoradas",
      "esgoto público, diluído em grande volume de água",
    ],
    correta: 3,
    explicacao:
      "O combustível nuclear usado permanece radioativo e termicamente quente por muito tempo, exigindo inicialmente resfriamento em piscinas especiais dentro da própria usina e, posteriormente, armazenamento em instalações secas rigorosamente projetadas e monitoradas para conter a radiação com segurança por décadas ou mais, até que soluções de armazenamento definitivo de longo prazo sejam implementadas.",
  },
  {
    materia: "quimica",
    tema: "Radioatividade e química nuclear",
    dificuldade: "dificil",
    enunciado:
      "Uma amostra de material radioativo tem atividade inicial de 1600 desintegrações por segundo. Após 21 dias, a atividade caiu para 100 desintegrações por segundo. Sabendo que a atividade caiu para 1/16 do valor original, correspondendo a 4 meias-vidas, o valor da meia-vida desse isótopo é de:",
    opcoes: [
      "21 dias",
      "10,5 dias",
      "4 dias",
      "5,25 dias",
      "84 dias",
    ],
    correta: 3,
    explicacao:
      "Como 4 meias-vidas cabem nos 21 dias decorridos, basta dividir: 21 ÷ 4 = 5,25 dias por meia-vida. Esse tipo de problema inverso, em que se conhece o tempo total e o número de meias-vidas, mas não o valor da meia-vida em si, exige isolar essa incógnita por divisão simples.",
  },
  {
    materia: "quimica",
    tema: "Radioatividade e química nuclear",
    dificuldade: "media",
    enunciado:
      "Um estudante compara a radioatividade natural, proveniente de fontes como raios cósmicos, radônio no solo e isótopos naturalmente presentes em rochas, com a radioatividade artificial, produzida por atividades humanas como usinas nucleares e exames médicos. Sobre a exposição total de uma pessoa comum à radiação ao longo da vida, é correto afirmar que:",
    opcoes: [
      "a radiação artificial é sempre a maior fonte de exposição para qualquer pessoa",
      "não existe radiação natural, apenas artificial",
      "usinas nucleares são a única fonte de radiação existente",
      "a radiação natural de fundo geralmente contribui com a maior parte da dose total recebida pela maioria das pessoas",
      "seres humanos nunca são expostos a qualquer radiação natural",
    ],
    correta: 3,
    explicacao:
      "Para a maioria da população mundial, a radiação de fundo natural — proveniente de raios cósmicos, do próprio solo e rochas, e até de elementos radioativos naturalmente presentes no corpo humano, como o potássio-40 — costuma representar a maior parcela da dose total de radiação recebida ao longo da vida, superando, em média, as fontes artificiais como exames médicos e outras aplicações tecnológicas.",
  },
  {
    materia: "quimica",
    tema: "Radioatividade e química nuclear",
    dificuldade: "media",
    enunciado:
      "O gás radônio, um elemento radioativo natural que pode se acumular em ambientes fechados e mal ventilados, especialmente em porões e casas construídas sobre certos tipos de solo e rocha, é considerado uma preocupação de saúde pública porque:",
    opcoes: [
      "é um gás totalmente inofensivo à saúde humana",
      "só existe em laboratórios, nunca em ambientes naturais",
      "não emite qualquer tipo de radiação",
      "é usado exclusivamente para fins medicinais benéficos",
      "sua inalação prolongada está associada a maior risco de câncer de pulmão",
    ],
    correta: 4,
    explicacao:
      "Por ser um gás radioativo naturalmente presente em certos tipos de solo, o radônio pode se acumular em ambientes fechados com ventilação insuficiente, e sua inalação prolongada é reconhecida por agências de saúde como um fator de risco significativo para câncer de pulmão, sendo considerada, depois do tabagismo, uma das principais causas dessa doença em diversos países.",
  },
  {
    materia: "quimica",
    tema: "Radioatividade e química nuclear",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa a diferença entre uma reação química comum, como a combustão, e uma reação nuclear, como a fissão. Uma diferença fundamental entre esses dois tipos de reação é que, nas reações nucleares:",
    opcoes: [
      "apenas os elétrons da camada de valência participam da transformação",
      "nunca há liberação de qualquer quantidade de energia",
      "os átomos envolvidos permanecem exatamente os mesmos elementos químicos",
      "a massa total do sistema aumenta indefinidamente",
      "ocorrem alterações no núcleo do átomo, podendo transformar um elemento em outro, o que não acontece em reações químicas comuns",
    ],
    correta: 4,
    explicacao:
      "Reações químicas comuns, como a combustão, envolvem apenas rearranjos dos elétrons das camadas externas dos átomos, sem alterar o núcleo nem a identidade dos elementos envolvidos; reações nucleares, ao contrário, ocorrem no núcleo atômico e podem transformar um elemento em outro completamente diferente, liberando quantidades de energia ordens de grandeza maiores que as reações químicas comuns.",
  },
  {
    materia: "quimica",
    tema: "Radioatividade e química nuclear",
    dificuldade: "dificil",
    enunciado:
      "Um estudante analisa a equação de uma reação nuclear: ₉₂U²³⁵ + ₀n¹ → ₅₆Ba¹⁴¹ + ₃₆Kr⁹² + 3 ₀n¹, que representa a fissão do urânio-235 ao ser atingido por um nêutron. Verificando essa equação, é correto afirmar que ela está balanceada porque:",
    opcoes: [
      "apenas a soma dos números atômicos precisa ser igual, ignorando o número de massa",
      "apenas a soma dos números de massa precisa ser igual, ignorando o número atômico",
      "a equação está incorreta, pois nenhuma reação nuclear pode liberar mais de um nêutron",
      "nenhuma equação nuclear precisa estar balanceada",
      "a soma dos números atômicos e a soma dos números de massa são iguais nos dois lados da equação",
    ],
    correta: 4,
    explicacao:
      "Conferindo os números atômicos: 92 + 0 = 92 do lado esquerdo, e 56 + 36 + 0 = 92 do lado direito; conferindo os números de massa: 235 + 1 = 236 do lado esquerdo, e 141 + 92 + 3 = 236 do lado direito — ambos batem, confirmando que a equação nuclear está corretamente balanceada. É esse balanceamento duplo, tanto de número atômico quanto de número de massa, que caracteriza uma equação nuclear correta, diferente do balanceamento de átomos usado em equações químicas comuns.",
  },
  {
    materia: "quimica",
    tema: "Radioatividade e química nuclear",
    dificuldade: "media",
    enunciado:
      "Um estudante pesquisa sobre a energia nuclear como fonte de eletricidade e descobre que, apesar de não emitir gases de efeito estufa durante a operação, essa fonte enfrenta desafios específicos, como o gerenciamento de longo prazo de resíduos radioativos e os altos custos de construção de usinas. Esse conjunto de vantagens e desvantagens ilustra que a escolha de uma matriz energética envolve:",
    opcoes: [
      "escolher sempre a fonte de menor custo inicial, ignorando qualquer outro critério",
      "considerar apenas as emissões de gases de efeito estufa, ignorando outros fatores",
      "que a energia nuclear é sempre superior a qualquer outra fonte em todos os critérios",
      "que não existe qualquer desafio associado à energia nuclear",
      "ponderar diferentes critérios, como emissões, custo, segurança e gestão de resíduos, sem que nenhuma fonte seja perfeita em todos os aspectos",
    ],
    correta: 4,
    explicacao:
      "Como nenhuma fonte de energia é isenta de desafios — a nuclear tem baixas emissões operacionais, mas exige gestão de resíduos radioativos de longuíssimo prazo e investimentos iniciais elevados, enquanto outras fontes têm seus próprios conjuntos de vantagens e desvantagens —, decisões de planejamento energético exigem avaliar múltiplos critérios simultaneamente, e não apenas um fator isolado.",
  },
  {
    materia: "quimica",
    tema: "Radioatividade e química nuclear",
    dificuldade: "media",
    enunciado:
      "Um estudante compara os símbolos usados para representar as partículas alfa, beta e a radiação gama em equações nucleares: a partícula alfa é representada como ₂He⁴, a partícula beta como ₋₁e⁰, e a radiação gama como ₀γ⁰. Observando esses símbolos, é correto afirmar que a partícula beta é representada com número atômico:",
    opcoes: [
      "+1, pois sua carga é positiva",
      "0, pois não possui carga elétrica",
      "2, igual ao da partícula alfa",
      "impossível de determinar pelo símbolo apresentado",
      "−1, pois sua carga é negativa, equivalente à de um elétron",
    ],
    correta: 4,
    explicacao:
      "A partícula beta é, na prática, um elétron de alta energia ejetado do núcleo, e por convenção nas equações nucleares recebe número atômico −1, refletindo sua carga negativa, apesar de não ser tecnicamente um átomo com prótons; essa notação permite balancear equações nucleares somando e subtraindo números atômicos e de massa de forma consistente entre partículas e núcleos.",
  },
  {
    materia: "quimica",
    tema: "Radioatividade e química nuclear",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa os defeitos de segurança que levaram ao acidente na usina nuclear de Fukushima, no Japão, em 2011, desencadeado por um terremoto seguido de tsunami que danificou os sistemas de resfriamento dos reatores. Esse episódio reforçou, na comunidade internacional de energia nuclear, a importância de:",
    opcoes: [
      "eliminar qualquer sistema de resfriamento das usinas nucleares",
      "construir usinas nucleares sem qualquer estudo prévio de risco geológico",
      "ignorar completamente eventos climáticos e geológicos no planejamento de usinas",
      "que acidentes nucleares nunca têm qualquer consequência ambiental",
      "projetar sistemas de segurança capazes de resistir a eventos naturais extremos e falhas em cascata",
    ],
    correta: 4,
    explicacao:
      "O acidente de Fukushima expôs a vulnerabilidade dos sistemas de resfriamento da usina a um evento natural extremo e de baixa probabilidade, mas de consequências severas, levando reguladores e operadores de usinas nucleares ao redor do mundo a revisar e reforçar protocolos de segurança para resistir a falhas em cascata desencadeadas por desastres naturais, não apenas por falhas técnicas isoladas.",
  },
  {
    materia: "quimica",
    tema: "Radioatividade e química nuclear",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa o funcionamento de detectores de fumaça iônicos, comumente instalados em residências e prédios, que utilizam uma pequena quantidade de um isótopo radioativo, o amerício-241, para detectar partículas de fumaça no ar. O princípio de funcionamento desse detector é que a radiação emitida pelo amerício:",
    opcoes: [
      "queima diretamente qualquer fumaça que entre em contato com o detector",
      "transforma a fumaça em um gás inofensivo instantaneamente",
      "não tem qualquer relação com o funcionamento do detector",
      "é liberada continuamente para o ambiente da residência",
      "ioniza o ar dentro do detector, permitindo a passagem de uma pequena corrente elétrica que é interrompida quando partículas de fumaça bloqueiam esse fluxo de íons",
    ],
    correta: 4,
    explicacao:
      "A pequena fonte de amerício-241 ioniza continuamente o ar dentro de uma câmara do detector, criando uma corrente elétrica estável entre dois eletrodos; quando partículas de fumaça entram nessa câmara, elas interrompem parcialmente esse fluxo de íons, e o detector interpreta essa queda de corrente como um sinal de alarme, disparando o alerta sonoro — a quantidade de material radioativo usada é extremamente pequena e devidamente selada, representando risco desprezível em uso normal.",
  },
  {
    materia: "quimica",
    tema: "Radioatividade e química nuclear",
    dificuldade: "media",
    enunciado:
      "Um estudante de química analisa a diferença entre a radiação ionizante, capaz de arrancar elétrons de átomos e moléculas, e a radiação não ionizante, como a luz visível e as ondas de rádio, que não têm energia suficiente para esse efeito. Radiações como a radiação gama e os raios X são classificadas como ionizantes porque:",
    opcoes: [
      "têm sempre comprimento de onda maior que o da luz visível",
      "nunca interagem com a matéria de qualquer forma",
      "são sempre menos energéticas que as ondas de rádio",
      "são incapazes de atravessar qualquer material",
      "carregam energia suficiente para remover elétrons de átomos, podendo danificar estruturas biológicas como o DNA",
    ],
    correta: 4,
    explicacao:
      "A radiação ionizante carrega energia suficiente para arrancar elétrons de átomos e moléculas ao interagir com a matéria, um processo que pode danificar estruturas biológicas importantes, como o DNA — é essa capacidade de ionização, ausente em radiações de menor energia como a luz visível e as ondas de rádio, que torna a radiação gama e os raios X potencialmente perigosos em doses elevadas, exigindo cuidados especiais de proteção.",
  },
  {
    materia: "quimica",
    tema: "Radioatividade e química nuclear",
    dificuldade: "media",
    enunciado:
      "Um estudante analisa a produção de radioisótopos artificiais em aceleradores de partículas e reatores nucleares de pesquisa, usados para gerar isótopos que não existem naturalmente em quantidade suficiente para aplicações médicas e industriais. Um exemplo é o tecnécio-99m, amplamente utilizado em exames de imagem médica. Esse tipo de produção artificial de isótopos é importante porque:",
    opcoes: [
      "elimina totalmente a necessidade de qualquer isótopo natural",
      "torna os isótopos produzidos artificialmente sempre mais perigosos que os naturais",
      "não tem qualquer aplicação prática na medicina moderna",
      "produz isótopos que nunca decaem, permanecendo radioativos para sempre",
      "permite obter isótopos com propriedades específicas, como meia-vida curta e emissão adequada, otimizados para cada aplicação médica ou industrial",
    ],
    correta: 4,
    explicacao:
      "Muitos isótopos naturalmente disponíveis não têm as propriedades ideais — meia-vida muito longa, muito curta, ou tipo de emissão inadequado — para uma aplicação específica; a produção artificial permite criar isótopos sob medida, como o tecnécio-99m, com meia-vida de apenas cerca de 6 horas, ideal para exames diagnósticos por combinar boa capacidade de detecção com baixa exposição prolongada do paciente à radiação.",
  },
  {
    materia: "quimica",
    tema: "Radioatividade e química nuclear",
    dificuldade: "media",
    enunciado:
      "Uma amostra de um isótopo radioativo tem meia-vida de 10 dias. Partindo de uma massa inicial de 80 g desse isótopo, a massa restante após 30 dias será de:",
    opcoes: [
      "40 g",
      "20 g",
      "5 g",
      "2,5 g",
      "10 g",
    ],
    correta: 4,
    explicacao:
      "Em 30 dias ocorrem exatamente 3 meias-vidas (30 ÷ 10 = 3). A massa se reduz pela metade a cada meia-vida: 80 → 40 → 20 → 10 g. Um erro comum é dividir a massa inicial diretamente pelo número de dias, ignorando que o decaimento é exponencial, não linear.",
  },
];
