/* Energia, matriz elétrica e consumo (50 questões).
   Potência e consumo em kWh, conta de luz, efeito Joule, eficiência,
   fontes da matriz elétrica brasileira, transmissão, perdas e impactos.
   Ver fisica.mjs para o formato. */

export const questoes = [
  {
    materia: "fisica",
    tema: "Energia, matriz elétrica e consumo",
    dificuldade: "facil",
    enunciado:
      "A fatura mensal de energia de uma residência brasileira informa o quanto foi consumido em uma unidade que corresponde ao produto de potência por tempo. Essa unidade é o:",
    opcoes: [
      "watt (W)",
      "quilowatt-hora (kWh)",
      "volt-ampère (VA)",
      "ampère-hora (Ah)",
      "newton-metro (N·m)",
    ],
    correta: 1,
    explicacao:
      "Energia é potência multiplicada por tempo, e o kWh é exatamente 1 kW mantido durante 1 h. O watt e o volt-ampère medem potência, não energia; o ampère-hora mede carga, usado em baterias. O newton-metro é unidade de trabalho, mas não é a adotada na conta de luz.",
  },
  {
    materia: "fisica",
    tema: "Energia, matriz elétrica e consumo",
    dificuldade: "facil",
    enunciado:
      "Sabendo que 1 kW equivale a 1000 W e que uma hora tem 3600 segundos, a energia de 1 kWh, convertida para joules, vale:",
    opcoes: [
      "3,6 × 10³ J",
      "3,6 × 10⁵ J",
      "3,6 × 10⁶ J",
      "3,6 × 10⁷ J",
      "1,0 × 10³ J",
    ],
    correta: 2,
    explicacao:
      "Basta multiplicar: 1000 W × 3600 s = 3.600.000 J = 3,6 × 10⁶ J. Quem esquece de converter o quilowatt em watt chega a 3,6 × 10³ J; quem usa 3600 como se fosse 36 000 chega a 3,6 × 10⁷ J. Guardar esse número poupa tempo em qualquer questão de conta de luz.",
  },
  {
    materia: "fisica",
    tema: "Energia, matriz elétrica e consumo",
    dificuldade: "facil",
    enunciado:
      "Um chuveiro elétrico de potência 5500 W é usado, em média, 12 minutos por dia. Ao longo de 30 dias, o consumo de energia desse chuveiro é de:",
    opcoes: [
      "3,3 kWh",
      "11 kWh",
      "33 kWh",
      "66 kWh",
      "330 kWh",
    ],
    correta: 2,
    explicacao:
      "Doze minutos são 0,2 h, e 5500 W valem 5,5 kW: o consumo diário é 5,5 × 0,2 = 1,1 kWh, que em 30 dias dá 33 kWh. O erro mais comum é somar os minutos sem convertê-los em horas, ou manter a potência em watts e obter um número mil vezes maior.",
  },
  {
    materia: "fisica",
    tema: "Energia, matriz elétrica e consumo",
    dificuldade: "facil",
    enunciado:
      "Uma lâmpada de 100 W permanece acesa 5 horas por dia durante 30 dias. Se a tarifa cobrada é de R$ 0,80 por quilowatt-hora, o gasto correspondente a essa lâmpada será de:",
    opcoes: [
      "R$ 1,20",
      "R$ 12,00",
      "R$ 15,00",
      "R$ 40,00",
      "R$ 120,00",
    ],
    correta: 1,
    explicacao:
      "O consumo é 0,1 kW × 5 h × 30 dias = 15 kWh, e 15 × 0,80 resulta em R$ 12,00. Note que 15 kWh é a energia, não o valor: quem para no meio do caminho marca R$ 15,00. Manter a potência em watts multiplica o resultado por mil.",
  },
  {
    materia: "fisica",
    tema: "Energia, matriz elétrica e consumo",
    dificuldade: "facil",
    enunciado:
      "Considerando a geração de eletricidade no Brasil nas últimas décadas, a fonte que historicamente responde pela maior parcela da matriz elétrica nacional é a:",
    opcoes: [
      "energia nuclear",
      "queima de carvão mineral",
      "energia hidráulica",
      "energia solar fotovoltaica",
      "queima de óleo diesel",
    ],
    correta: 2,
    explicacao:
      "As usinas hidrelétricas seguem sendo a espinha dorsal do sistema brasileiro, favorecidas pelo relevo e pela abundância de rios de planalto. A eólica e a solar crescem rapidamente, mas partiram de uma base pequena; a nuclear se resume às unidades de Angra, e o carvão tem participação marginal no país.",
  },
  {
    materia: "fisica",
    tema: "Energia, matriz elétrica e consumo",
    dificuldade: "facil",
    enunciado:
      "Entre as fontes de energia empregadas na geração de eletricidade, uma delas não se renova na escala de tempo da atividade humana e se esgota conforme é explorada. Trata-se do(a):",
    opcoes: [
      "carvão mineral",
      "bagaço de cana-de-açúcar",
      "vento",
      "queda-d'água de um rio",
      "radiação solar",
    ],
    correta: 0,
    explicacao:
      "O carvão mineral levou milhões de anos para se formar a partir de matéria orgânica soterrada, de modo que seu estoque é finito na prática. Vento, radiação solar e o ciclo da água se repõem continuamente, e o bagaço de cana é biomassa replantada a cada safra.",
  },
  {
    materia: "fisica",
    tema: "Energia, matriz elétrica e consumo",
    dificuldade: "facil",
    enunciado:
      "Em uma usina hidrelétrica, a água represada desce pelo conduto forçado, gira a turbina e aciona o gerador. A sequência correta de transformações de energia nesse processo é:",
    opcoes: [
      "potencial gravitacional → cinética → mecânica de rotação → elétrica",
      "elétrica → cinética → potencial gravitacional → térmica",
      "química → térmica → cinética → elétrica",
      "cinética → potencial gravitacional → química → elétrica",
      "térmica → mecânica de rotação → química → elétrica",
    ],
    correta: 0,
    explicacao:
      "A altura da coluna de água armazena energia potencial gravitacional; a queda a converte em energia cinética, que gira a turbina (energia mecânica de rotação) e, no gerador, vira energia elétrica por indução. A rota que começa em energia química descreve uma termelétrica a combustível, não uma hidrelétrica.",
  },
  {
    materia: "fisica",
    tema: "Energia, matriz elétrica e consumo",
    dificuldade: "facil",
    enunciado:
      "Entre os aparelhos domésticos listados a seguir, aquele que costuma ter a maior potência elétrica, e por isso pesa muito na conta mesmo sendo usado por pouco tempo, é o:",
    opcoes: [
      "carregador de celular",
      "chuveiro elétrico",
      "ventilador de teto",
      "aparelho de televisão",
      "lâmpada de LED",
    ],
    correta: 1,
    explicacao:
      "Chuveiros elétricos operam tipicamente entre 4000 W e 7500 W, ordem de grandeza muito acima de televisores (cerca de 100 W), ventiladores (cerca de 80 W) e lâmpadas de LED (menos de 15 W). Por isso um banho longo pesa mais na conta que horas de televisão ligada.",
  },
  {
    materia: "fisica",
    tema: "Energia, matriz elétrica e consumo",
    dificuldade: "facil",
    enunciado:
      "A Etiqueta Nacional de Conservação de Energia classifica eletrodomésticos em faixas identificadas por letras. Um aparelho classificado na faixa A, em comparação com outro de mesma função classificado na faixa E, é aquele que:",
    opcoes: [
      "realiza a mesma tarefa consumindo menos energia",
      "tem preço de venda obrigatoriamente menor",
      "possui potência nominal necessariamente maior",
      "dispensa qualquer manutenção durante a vida útil",
      "funciona apenas em redes de 220 V",
    ],
    correta: 0,
    explicacao:
      "A etiqueta compara a eficiência energética: a faixa A indica que o aparelho entrega o mesmo serviço gastando menos eletricidade. Isso nada diz sobre preço, tensão de operação ou manutenção — modelos eficientes costumam, inclusive, custar mais na compra e se pagar ao longo do uso.",
  },
  {
    materia: "fisica",
    tema: "Energia, matriz elétrica e consumo",
    dificuldade: "facil",
    enunciado:
      "O sistema de bandeiras tarifárias sinaliza ao consumidor brasileiro o custo de gerar eletricidade em cada mês. O acionamento da bandeira vermelha indica que:",
    opcoes: [
      "o custo de geração subiu, em geral com maior uso de usinas termelétricas",
      "os reservatórios das hidrelétricas estão cheios",
      "haverá racionamento obrigatório de energia no mês seguinte",
      "a tarifa foi reduzida por decisão do órgão regulador",
      "o consumo residencial do país diminuiu",
    ],
    correta: 0,
    explicacao:
      "A bandeira vermelha entra em vigor quando reservatórios baixos obrigam o despacho de termelétricas, cujo combustível encarece a geração — e esse custo extra é repassado na tarifa. Reservatórios cheios correspondem à bandeira verde, e bandeira não é sinônimo de racionamento.",
  },
  {
    materia: "fisica",
    tema: "Energia, matriz elétrica e consumo",
    dificuldade: "media",
    enunciado:
      "Uma geladeira tem potência de 150 W enquanto o compressor está ligado, o que ocorre em média durante 8 horas por dia. O consumo mensal dessa geladeira, considerando 30 dias, é de aproximadamente:",
    opcoes: [
      "3,6 kWh",
      "12 kWh",
      "36 kWh",
      "108 kWh",
      "360 kWh",
    ],
    correta: 2,
    explicacao:
      "O cálculo é 0,15 kW × 8 h × 30 dias = 36 kWh. O detalhe que engana é o funcionamento intermitente: a geladeira fica ligada na tomada 24 h, mas o compressor só trabalha parte do tempo. Usar 24 h em vez de 8 h triplicaria o resultado, levando a 108 kWh.",
  },
  {
    materia: "fisica",
    tema: "Energia, matriz elétrica e consumo",
    dificuldade: "media",
    enunciado:
      "Uma residência troca 10 lâmpadas incandescentes de 60 W por 10 lâmpadas de LED de 10 W, mantendo o uso de 6 horas por dia. A economia de energia obtida em 30 dias é de:",
    opcoes: [
      "9 kWh",
      "18 kWh",
      "45 kWh",
      "90 kWh",
      "108 kWh",
    ],
    correta: 3,
    explicacao:
      "A potência total cai de 600 W para 100 W, uma redução de 500 W = 0,5 kW; em 6 h por dia durante 30 dias, isso equivale a 0,5 × 6 × 30 = 90 kWh economizados. Quem calcula a diferença por lâmpada e esquece de multiplicar pelas dez unidades chega a 9 kWh.",
  },
  {
    materia: "fisica",
    tema: "Energia, matriz elétrica e consumo",
    dificuldade: "media",
    enunciado:
      "Um ferro de passar de 1200 W é utilizado meia hora por dia. Considerando 30 dias e tarifa de R$ 0,75 por quilowatt-hora, o custo mensal atribuído a esse aparelho será de:",
    opcoes: [
      "R$ 4,50",
      "R$ 9,00",
      "R$ 13,50",
      "R$ 18,00",
      "R$ 27,00",
    ],
    correta: 2,
    explicacao:
      "O consumo é 1,2 kW × 0,5 h × 30 = 18 kWh, e 18 × 0,75 dá R$ 13,50. Confundir os 18 kWh com reais leva a R$ 18,00; esquecer de dividir a meia hora por dois leva ao dobro, R$ 27,00.",
  },
  {
    materia: "fisica",
    tema: "Energia, matriz elétrica e consumo",
    dificuldade: "media",
    enunciado:
      "Em uma usina hidrelétrica, a vazão é de 200 m³/s e a altura de queda vale 50 m. Adotando densidade da água igual a 1000 kg/m³ e g igual a 10 m/s², a potência hidráulica disponível, sem considerar perdas, é de:",
    opcoes: [
      "1 MW",
      "10 MW",
      "100 MW",
      "500 MW",
      "1000 MW",
    ],
    correta: 2,
    explicacao:
      "A potência vale P = ρ · g · Q · h = 1000 × 10 × 200 × 50 = 1,0 × 10⁸ W, ou seja, 100 MW. O produto ρ · Q dá a massa que passa por segundo (200 000 kg/s), e multiplicá-la por g · h fornece a energia potencial liberada a cada segundo.",
  },
  {
    materia: "fisica",
    tema: "Energia, matriz elétrica e consumo",
    dificuldade: "media",
    enunciado:
      "Uma usina termelétrica recebe, na queima do combustível, uma potência térmica de 500 MW e opera com rendimento de 40%. A potência elétrica entregue por essa usina é de:",
    opcoes: [
      "40 MW",
      "125 MW",
      "200 MW",
      "300 MW",
      "1250 MW",
    ],
    correta: 2,
    explicacao:
      "O rendimento é a razão entre potência útil e potência recebida, então a saída vale 0,40 × 500 = 200 MW; os 300 MW restantes são rejeitados como calor. Dividir em vez de multiplicar produz 1250 MW, valor maior que a entrada — impossível, e é assim que se percebe o erro na hora.",
  },
  {
    materia: "fisica",
    tema: "Energia, matriz elétrica e consumo",
    dificuldade: "media",
    enunciado:
      "Um conjunto de painéis fotovoltaicos com 10 m² de área recebe radiação solar de 1000 W/m² e converte 20% dessa energia em eletricidade. Se essa condição se mantém por 5 horas, a energia elétrica gerada é de:",
    opcoes: [
      "2 kWh",
      "5 kWh",
      "10 kWh",
      "20 kWh",
      "50 kWh",
    ],
    correta: 2,
    explicacao:
      "A potência incidente é 1000 × 10 = 10 000 W, e 20% disso são 2000 W = 2 kW; em 5 h, resultam 10 kWh. Um erro frequente é aplicar o rendimento depois de calcular a energia total e, distraído, esquecer de aplicá-lo — o que levaria a 50 kWh.",
  },
  {
    materia: "fisica",
    tema: "Energia, matriz elétrica e consumo",
    dificuldade: "media",
    enunciado:
      "Um aerogerador de potência nominal 2 MW opera com fator de capacidade médio de 40%, isto é, gera em média 40% do que geraria funcionando o tempo todo na potência máxima. A energia produzida em um dia é de:",
    opcoes: [
      "800 kWh",
      "4 800 kWh",
      "19 200 kWh",
      "48 000 kWh",
      "80 000 kWh",
    ],
    correta: 2,
    explicacao:
      "A conta é 2000 kW × 24 h × 0,40 = 19 200 kWh. O fator de capacidade existe porque o vento é intermitente: a turbina raramente entrega a potência de placa. Ignorar o fator levaria a 48 000 kWh, valor que superestima bastante a geração real.",
  },
  {
    materia: "fisica",
    tema: "Energia, matriz elétrica e consumo",
    dificuldade: "media",
    enunciado:
      "As linhas de transmissão que ligam as usinas aos centros consumidores operam em tensões muito elevadas, da ordem de centenas de milhares de volts. O motivo físico dessa escolha é que, para uma mesma potência transportada:",
    opcoes: [
      "a corrente diminui e as perdas por efeito Joule caem",
      "a resistência dos cabos se anula",
      "a energia transportada aumenta proporcionalmente à tensão",
      "o campo magnético em volta do cabo desaparece",
      "a frequência da rede pode ser reduzida à metade",
    ],
    correta: 0,
    explicacao:
      "Como P = U · i, elevar a tensão reduz a corrente na mesma proporção; e as perdas nos cabos valem R · i², de modo que caem com o quadrado dessa redução. A resistência do condutor depende do material e da geometria, não da tensão aplicada, e continua existindo.",
  },
  {
    materia: "fisica",
    tema: "Energia, matriz elétrica e consumo",
    dificuldade: "media",
    enunciado:
      "Um transformador elevador recebe 13,8 kV na entrada e entrega 138 kV na saída. Desprezando perdas internas, a corrente na saída, comparada à da entrada, será:",
    opcoes: [
      "10 vezes maior",
      "10 vezes menor",
      "100 vezes maior",
      "100 vezes menor",
      "igual, pois a corrente não muda",
    ],
    correta: 1,
    explicacao:
      "Num transformador ideal a potência se conserva, então U₁ · i₁ = U₂ · i₂. Como a tensão foi multiplicada por 10, a corrente é dividida por 10. O transformador não cria energia: o que ele faz é trocar tensão por corrente mantendo o produto constante.",
  },
  {
    materia: "fisica",
    tema: "Energia, matriz elétrica e consumo",
    dificuldade: "media",
    enunciado:
      "Ao se comparar os conceitos de matriz elétrica e matriz energética de um país, a diferença essencial entre eles é que a matriz energética:",
    opcoes: [
      "abrange toda a energia consumida, e não apenas a eletricidade gerada",
      "considera apenas as fontes renováveis disponíveis no território",
      "contabiliza somente a energia importada de outros países",
      "descreve exclusivamente o consumo das residências",
      "corresponde à energia elétrica perdida na transmissão",
    ],
    correta: 0,
    explicacao:
      "A matriz elétrica é um recorte da matriz energética: ela trata só da eletricidade gerada. A matriz energética inclui ainda os combustíveis queimados em veículos, fornos industriais e fogões. Por isso o Brasil aparece com matriz elétrica muito mais renovável do que sua matriz energética total.",
  },
  {
    materia: "fisica",
    tema: "Energia, matriz elétrica e consumo",
    dificuldade: "media",
    enunciado:
      "Usinas do setor sucroalcooleiro queimam o bagaço da cana para gerar vapor, mover turbinas e produzir eletricidade, vendendo o excedente à rede. Essa prática é classificada como aproveitamento de:",
    opcoes: [
      "biomassa, fonte renovável",
      "combustível fóssil, fonte não renovável",
      "energia geotérmica",
      "energia nuclear de fissão",
      "energia maremotriz",
    ],
    correta: 0,
    explicacao:
      "O bagaço é matéria orgânica vegetal, portanto biomassa, e a cana é replantada a cada safra, o que torna a fonte renovável. O carbono liberado na queima é aproximadamente o mesmo que a planta absorveu ao crescer, o que reduz o saldo líquido de emissões em comparação com fósseis.",
  },
  {
    materia: "fisica",
    tema: "Energia, matriz elétrica e consumo",
    dificuldade: "media",
    enunciado:
      "As usinas nucleares brasileiras de Angra dos Reis geram eletricidade a partir da fissão do urânio. Uma característica correta dessa fonte é que ela:",
    opcoes: [
      "não emite gases de efeito estufa na operação, mas produz rejeitos radioativos de longa duração",
      "depende diretamente do regime de chuvas da região",
      "libera energia pela fusão de núcleos leves de hidrogênio",
      "produz apenas vapor de água como resíduo, sem materiais perigosos",
      "tem geração intermitente, variando com o horário do dia",
    ],
    correta: 0,
    explicacao:
      "A fissão não queima carbono, de modo que a operação praticamente não emite CO₂, mas o combustível usado permanece radioativo por milhares de anos e exige armazenamento controlado. A fusão de núcleos leves ocorre no Sol, não em reatores comerciais, e usinas nucleares operam em regime contínuo de base.",
  },
  {
    materia: "fisica",
    tema: "Energia, matriz elétrica e consumo",
    dificuldade: "media",
    enunciado:
      "As fontes solar e eólica são chamadas de intermitentes. A principal consequência dessa característica para o planejamento do sistema elétrico é a necessidade de:",
    opcoes: [
      "manter fontes complementares ou sistemas de armazenamento para as horas sem sol ou vento",
      "reduzir a tensão das linhas de transmissão nos dias nublados",
      "proibir seu uso em regiões de clima tropical",
      "aumentar a frequência da rede elétrica durante a noite",
      "converter obrigatoriamente sua energia em combustível fóssil",
    ],
    correta: 0,
    explicacao:
      "Como a geração depende de recursos naturais que variam ao longo do dia e do ano, o sistema precisa de reservas: reservatórios hidrelétricos, térmicas de reserva ou baterias. Intermitência não significa baixa qualidade da energia gerada, e não afeta tensão ou frequência da rede por si só.",
  },
  {
    materia: "fisica",
    tema: "Energia, matriz elétrica e consumo",
    dificuldade: "media",
    enunciado:
      "No Nordeste brasileiro, os ventos mais intensos ocorrem justamente nos meses de estiagem, quando os reservatórios das hidrelétricas estão mais baixos. Essa coincidência favorável ao sistema elétrico é chamada de:",
    opcoes: [
      "complementaridade sazonal entre as fontes eólica e hidráulica",
      "efeito Joule aplicado à geração distribuída",
      "fator de potência das linhas de transmissão",
      "inversão térmica dos reservatórios",
      "curva de carga do horário de ponta",
    ],
    correta: 0,
    explicacao:
      "Quando uma fonte cai e a outra sobe no mesmo período do ano, elas se complementam e o sistema fica mais confiável sem precisar de tanta térmica de reserva. Curva de carga descreve o consumo ao longo do dia, e fator de potência é outra grandeza, ligada à defasagem entre tensão e corrente.",
  },
  {
    materia: "fisica",
    tema: "Energia, matriz elétrica e consumo",
    dificuldade: "media",
    enunciado:
      "Um chuveiro elétrico ligado à mesma tomada pode ser posto na posição verão ou inverno. Na posição inverno, o aquecimento da água é maior porque, nessa configuração, a resistência elétrica utilizada é:",
    opcoes: [
      "menor, o que aumenta a potência dissipada",
      "maior, o que aumenta a potência dissipada",
      "menor, o que reduz a potência dissipada",
      "maior, o que reduz a corrente e aumenta a temperatura",
      "a mesma, mudando apenas a vazão de água",
    ],
    correta: 0,
    explicacao:
      "Com tensão fixa, P = U²/R, então quanto menor a resistência, maior a potência dissipada e mais quente sai a água. A confusão nasce de associar 'mais resistência' a 'mais calor', mas em tensão constante é o contrário: menos resistência deixa passar mais corrente e aquece mais.",
  },
  {
    materia: "fisica",
    tema: "Energia, matriz elétrica e consumo",
    dificuldade: "media",
    enunciado:
      "Um chuveiro projetado para 220 V dissipa 4400 W quando ligado corretamente. Nessas condições, a corrente que o percorre e a resistência de seu elemento aquecedor valem, respectivamente:",
    opcoes: [
      "20 A e 22 Ω",
      "20 A e 11 Ω",
      "10 A e 22 Ω",
      "40 A e 5,5 Ω",
      "5 A e 44 Ω",
    ],
    correta: 1,
    explicacao:
      "De P = U · i vem i = 4400/220 = 20 A; de U = R · i vem R = 220/20 = 11 Ω. Vale conferir pelo caminho alternativo, R = U²/P = 48 400/4400 = 11 Ω, que confirma o valor. Trocar as duas fórmulas de lugar é o que produz os 22 Ω.",
  },
  {
    materia: "fisica",
    tema: "Energia, matriz elétrica e consumo",
    dificuldade: "media",
    enunciado:
      "Um circuito residencial em 127 V é protegido por um disjuntor de 20 A. A potência total dos aparelhos que podem ser ligados simultaneamente nesse circuito, sem que o disjuntor desarme, é de no máximo:",
    opcoes: [
      "254 W",
      "635 W",
      "1270 W",
      "2540 W",
      "6350 W",
    ],
    correta: 3,
    explicacao:
      "A potência máxima é P = U · i = 127 × 20 = 2540 W. O disjuntor limita a corrente, e é ela que aquece os fios: por isso a proteção é dimensionada em ampères e não em watts. Note que um único chuveiro de 4400 W já ultrapassaria esse limite, o que explica por que ele exige circuito próprio.",
  },
  {
    materia: "fisica",
    tema: "Energia, matriz elétrica e consumo",
    dificuldade: "media",
    enunciado:
      "Aparelhos eletrônicos deixados em modo de espera continuam consumindo energia. Se um conjunto de equipamentos de uma casa consome 5 W em standby durante as 24 horas do dia, o consumo em 30 dias será de:",
    opcoes: [
      "0,12 kWh",
      "1,2 kWh",
      "3,6 kWh",
      "12 kWh",
      "36 kWh",
    ],
    correta: 2,
    explicacao:
      "São 0,005 kW × 24 h × 30 dias = 3,6 kWh. Parece pouco, mas é energia gasta sem nenhum serviço prestado — daí a recomendação de usar filtros de linha com interruptor. Esquecer de converter 5 W em 0,005 kW é o deslize que leva ao valor mil vezes maior.",
  },
  {
    materia: "fisica",
    tema: "Energia, matriz elétrica e consumo",
    dificuldade: "media",
    enunciado:
      "Um aparelho de ar-condicionado de 1000 W é usado 8 horas por dia. Com tarifa de R$ 0,70 por quilowatt-hora, o custo desse uso ao longo de 30 dias será de:",
    opcoes: [
      "R$ 56,00",
      "R$ 168,00",
      "R$ 84,00",
      "R$ 240,00",
      "R$ 336,00",
    ],
    correta: 1,
    explicacao:
      "O consumo é 1 kW × 8 h × 30 = 240 kWh, e 240 × 0,70 dá R$ 168,00. Os 240 kWh sozinhos aparecem como distrator em reais, para pegar quem esquece a tarifa. Aparelhos de alta potência usados por muitas horas são os que realmente dominam a fatura.",
  },
  {
    materia: "fisica",
    tema: "Energia, matriz elétrica e consumo",
    dificuldade: "media",
    enunciado:
      "Uma loja oferece dois refrigeradores: o modelo A custa R$ 1200 e consome 30 kWh por mês; o modelo B custa R$ 900 e consome 45 kWh por mês. Com tarifa de R$ 1,00 por quilowatt-hora, o tempo necessário para que a economia de energia do modelo A compense sua diferença de preço é de:",
    opcoes: [
      "10 meses",
      "15 meses",
      "30 meses",
      "20 meses",
      "40 meses",
    ],
    correta: 3,
    explicacao:
      "O modelo A economiza 15 kWh por mês, ou R$ 15,00, e precisa cobrir a diferença de R$ 300 no preço: 300 ÷ 15 = 20 meses. Depois desse prazo, a escolha mais cara na compra passa a ser a mais barata no total — é assim que se lê uma etiqueta de eficiência com a calculadora na mão.",
  },
  {
    materia: "fisica",
    tema: "Energia, matriz elétrica e consumo",
    dificuldade: "media",
    enunciado:
      "Um forno de micro-ondas de 1000 W é utilizado 6 minutos por dia para aquecer refeições. O consumo desse aparelho em um mês de 30 dias corresponde a:",
    opcoes: [
      "0,6 kWh",
      "3 kWh",
      "6 kWh",
      "18 kWh",
      "30 kWh",
    ],
    correta: 1,
    explicacao:
      "Seis minutos valem 0,1 h, logo 1 kW × 0,1 h × 30 dias = 3 kWh. É um consumo pequeno apesar da potência alta, porque o tempo de uso é curto — o mesmo raciocínio explica por que o chuveiro, também de uso breve, pesa tanto: sua potência é cinco vezes maior.",
  },
  {
    materia: "fisica",
    tema: "Energia, matriz elétrica e consumo",
    dificuldade: "media",
    enunciado:
      "As chamadas Pequenas Centrais Hidrelétricas, ou PCHs, ocupam posição específica na matriz brasileira porque, em relação às grandes usinas:",
    opcoes: [
      "dispensam turbinas, gerando eletricidade diretamente do fluxo de água",
      "operam apenas durante a estação seca do ano",
      "utilizam água do mar em vez de água doce",
      "têm potência instalada bem menor e provocam alagamentos reduzidos",
      "produzem energia sem necessidade de linhas de transmissão",
    ],
    correta: 3,
    explicacao:
      "PCHs são definidas por faixas de potência instalada modestas e por área alagada limitada, o que reduz o impacto socioambiental e agiliza o licenciamento. Elas continuam usando turbinas e geradores como qualquer hidrelétrica, e sua energia também precisa ser transmitida.",
  },
  {
    materia: "fisica",
    tema: "Energia, matriz elétrica e consumo",
    dificuldade: "media",
    enunciado:
      "Apesar de gerar eletricidade a partir de fonte renovável, a construção de grandes hidrelétricas provoca impactos relevantes. Entre eles está corretamente citado o(a):",
    opcoes: [
      "emissão contínua de material radioativo no entorno do reservatório",
      "consumo irreversível da água, que deixa de retornar ao ciclo hidrológico",
      "aumento permanente da salinidade do rio a montante da barragem",
      "alagamento de áreas extensas, com deslocamento de populações e perda de vegetação",
      "impossibilidade técnica de conectar a usina ao sistema interligado",
    ],
    correta: 3,
    explicacao:
      "Formar o reservatório inunda florestas e terras habitadas, desloca comunidades ribeirinhas e indígenas, e a decomposição da vegetação submersa ainda libera metano. A água não é consumida: ela passa pela turbina e segue o curso do rio, permanecendo no ciclo hidrológico.",
  },
  {
    materia: "fisica",
    tema: "Energia, matriz elétrica e consumo",
    dificuldade: "media",
    enunciado:
      "Em períodos de seca prolongada, o custo da energia elétrica no Brasil tende a subir. A explicação central para esse encarecimento é que:",
    opcoes: [
      "a resistência elétrica dos cabos aumenta com a falta de umidade",
      "o consumo das residências cai e a distribuidora compensa a perda",
      "as turbinas hidráulicas precisam ser substituídas a cada estiagem",
      "termelétricas passam a ser acionadas e seu combustível tem custo elevado",
      "a tensão da rede precisa ser elevada, gastando mais energia",
    ],
    correta: 3,
    explicacao:
      "Com reservatórios baixos, o operador despacha usinas térmicas a gás, óleo ou carvão, cujo custo por megawatt-hora é muito maior que o da água já represada. Esse custo variável é repassado via bandeiras tarifárias, e não tem relação com propriedades físicas dos cabos.",
  },
  {
    materia: "fisica",
    tema: "Energia, matriz elétrica e consumo",
    dificuldade: "media",
    enunciado:
      "No sistema de compensação de energia adotado no Brasil, um consumidor que instala painéis solares no telhado e gera mais eletricidade do que consome em determinado mês:",
    opcoes: [
      "precisa desligar o sistema para não sobrecarregar a distribuidora",
      "tem a energia excedente descartada, sem qualquer compensação",
      "passa a receber pagamento em dinheiro no mesmo mês pela distribuidora",
      "injeta o excedente na rede e recebe créditos para abater em faturas seguintes",
      "fica obrigado a armazenar todo o excedente em baterias próprias",
    ],
    correta: 3,
    explicacao:
      "A geração distribuída funciona com créditos de energia: o excedente vai para a rede e volta como abatimento em contas futuras, dentro de um prazo de validade. Não há pagamento em dinheiro ao consumidor, e o armazenamento em baterias é opcional, não exigido pelo modelo.",
  },
  {
    materia: "fisica",
    tema: "Energia, matriz elétrica e consumo",
    dificuldade: "media",
    enunciado:
      "Ao classificar as formas de energia, distingue-se energia primária de energia secundária. São exemplos corretos dessa distinção:",
    opcoes: [
      "eletricidade é primária; petróleo bruto é secundário",
      "toda fonte renovável é primária e toda fonte fóssil é secundária",
      "gasolina é primária porque move veículos diretamente",
      "petróleo bruto e carvão são primárias; gasolina e eletricidade são secundárias",
      "energia solar é secundária por depender de painéis para ser usada",
    ],
    correta: 3,
    explicacao:
      "Energia primária é a que se obtém da natureza sem transformação — petróleo bruto, carvão, radiação solar, potencial hidráulico. Secundária é a que resulta de um processo de conversão, como a gasolina refinada e a eletricidade. A distinção não separa renováveis de fósseis.",
  },
  {
    materia: "fisica",
    tema: "Energia, matriz elétrica e consumo",
    dificuldade: "media",
    enunciado:
      "Um motor a combustão de automóvel aproveita cerca de 25% da energia liberada pelo combustível para mover o veículo. O destino dos 75% restantes é, predominantemente:",
    opcoes: [
      "conversão em energia elétrica armazenada na bateria",
      "acúmulo como energia potencial no tanque de combustível",
      "transformação em energia sonora audível fora do veículo",
      "dissipação na forma de calor pelo escapamento, pelo radiador e pelo atrito",
      "reaproveitamento integral pelo sistema de arrefecimento",
    ],
    correta: 3,
    explicacao:
      "A maior parte da energia química vira calor: gases quentes saindo pelo escapamento, calor retirado pelo radiador e perdas por atrito nas partes móveis. A energia sonora é desprezível no balanço, e o radiador retira calor para fora, não o devolve como trabalho útil.",
  },
  {
    materia: "fisica",
    tema: "Energia, matriz elétrica e consumo",
    dificuldade: "media",
    enunciado:
      "A conta de luz de uma residência registrou consumo de 45 kWh atribuído à geladeira ao longo de 30 dias, com o aparelho ligado na tomada o tempo todo. A potência média dessa geladeira, considerando as 720 horas do período, foi de:",
    opcoes: [
      "31,25 W",
      "62,5 W",
      "125 W",
      "150 W",
      "625 W",
    ],
    correta: 1,
    explicacao:
      "Potência média é energia dividida por tempo: 45 000 Wh ÷ 720 h = 62,5 W. Esse valor é menor que a potência do compressor porque ele desliga em boa parte do tempo — a potência média já embute os períodos parados, o que a torna útil para comparar aparelhos de funcionamento intermitente.",
  },
  {
    materia: "fisica",
    tema: "Energia, matriz elétrica e consumo",
    dificuldade: "media",
    enunciado:
      "Uma família de quatro pessoas usa um chuveiro de 5,4 kW por 10 minutos cada, todos os dias. O consumo mensal do chuveiro, em 30 dias, é de:",
    opcoes: [
      "27 kWh",
      "54 kWh",
      "216 kWh",
      "324 kWh",
      "108 kWh",
    ],
    correta: 4,
    explicacao:
      "São 40 minutos diários de uso, ou 2/3 de hora: 5,4 × (2/3) = 3,6 kWh por dia, que em 30 dias dão 108 kWh. Considerar só um banho de 10 minutos leva a 27 kWh, o valor que aparece como armadilha para quem não multiplica pelos quatro moradores.",
  },
  {
    materia: "fisica",
    tema: "Energia, matriz elétrica e consumo",
    dificuldade: "media",
    enunciado:
      "A bateria de um telefone celular tem capacidade de 5000 mAh e tensão nominal de 4 V. A energia armazenada nessa bateria, expressa em quilowatt-hora, é de aproximadamente:",
    opcoes: [
      "0,002 kWh",
      "0,02 kWh",
      "0,2 kWh",
      "2 kWh",
      "20 kWh",
    ],
    correta: 1,
    explicacao:
      "A energia vale carga vezes tensão: 5 Ah × 4 V = 20 Wh, ou 0,02 kWh. Comparar com o chuveiro é revelador: carregar o celular por um mês inteiro custa menos energia que poucos minutos de banho quente. O miliampère-hora mede carga, não energia — falta multiplicar pela tensão.",
  },
  {
    materia: "fisica",
    tema: "Energia, matriz elétrica e consumo",
    dificuldade: "media",
    enunciado:
      "O Sistema Interligado Nacional conecta usinas e consumidores em quase todo o território brasileiro. A principal vantagem técnica dessa interligação é permitir que:",
    opcoes: [
      "a tensão da rede seja mantida sem uso de transformadores",
      "cada estado gere exatamente a energia que consome",
      "as perdas na transmissão sejam completamente eliminadas",
      "a frequência da rede varie livremente conforme a demanda local",
      "regiões com excedente de geração socorram regiões com déficit",
    ],
    correta: 4,
    explicacao:
      "Chuvas e ventos não ocorrem ao mesmo tempo em todas as regiões, então interligar o país permite transferir energia de onde sobra para onde falta, reduzindo o risco de falta. A interligação não elimina perdas — ao contrário, transportar energia por longas distâncias as aumenta.",
  },
  {
    materia: "fisica",
    tema: "Energia, matriz elétrica e consumo",
    dificuldade: "dificil",
    enunciado:
      "Uma hidrelétrica opera com vazão de 100 m³/s, altura de queda de 80 m e rendimento global de 90%. Adotando 1000 kg/m³ para a densidade da água e 10 m/s² para a gravidade, a potência elétrica gerada é de:",
    opcoes: [
      "8 MW",
      "72 MW",
      "80 MW",
      "88 MW",
      "800 MW",
    ],
    correta: 1,
    explicacao:
      "A potência hidráulica vale 1000 × 10 × 100 × 80 = 8,0 × 10⁷ W = 80 MW, e o rendimento de 90% deixa 72 MW na saída. Aplicar o rendimento é o passo que falta em quem marca 80 MW; os 8 MW correspondem justamente à parcela perdida.",
  },
  {
    materia: "fisica",
    tema: "Energia, matriz elétrica e consumo",
    dificuldade: "dificil",
    enunciado:
      "Uma usina de 600 MW opera continuamente durante 30 dias. Se uma residência típica consome 180 kWh por mês, o número de residências que essa geração poderia atender é da ordem de:",
    opcoes: [
      "24 mil",
      "240 mil",
      "1,2 milhão",
      "2,4 milhões",
      "24 milhões",
    ],
    correta: 3,
    explicacao:
      "Em 30 dias há 720 h, então a usina gera 600 000 kW × 720 h = 4,32 × 10⁸ kWh; dividindo por 180 kWh chega-se a 2,4 × 10⁶ residências. O caminho seguro é padronizar tudo em kW e h antes de dividir — misturar MW com kWh é a origem dos erros de fator mil.",
  },
  {
    materia: "fisica",
    tema: "Energia, matriz elétrica e consumo",
    dificuldade: "dificil",
    enunciado:
      "Um sistema solar residencial de 3 kWp gera, em média, 4 kWh por dia para cada kWp instalado. Se o sistema custou R$ 18 000 e a tarifa é de R$ 1,00 por quilowatt-hora, o tempo de retorno do investimento, em meses de 30 dias, será de:",
    opcoes: [
      "30 meses",
      "40 meses",
      "60 meses",
      "72 meses",
      "50 meses",
    ],
    correta: 4,
    explicacao:
      "A geração diária é 3 × 4 = 12 kWh, ou 360 kWh por mês, o que economiza R$ 360,00 mensais; 18 000 ÷ 360 = 50 meses. O kWp indica a potência de pico dos painéis, e a razão kWh por kWp já embute as horas de sol equivalentes do local — por isso não se multiplica por 24 h.",
  },
  {
    materia: "fisica",
    tema: "Energia, matriz elétrica e consumo",
    dificuldade: "dificil",
    enunciado:
      "Uma linha de transmissão de resistência total 2 Ω transporta uma potência de 100 MW. Comparando a operação em 100 kV com a operação em 500 kV, a potência perdida por efeito Joule na linha, no segundo caso, será:",
    opcoes: [
      "5 vezes menor",
      "10 vezes menor",
      "igual nos dois casos",
      "5 vezes maior",
      "25 vezes menor",
    ],
    correta: 4,
    explicacao:
      "Em 100 kV a corrente é 10⁸/10⁵ = 1000 A e a perda vale 2 × 1000² = 2 MW; em 500 kV a corrente cai para 200 A e a perda vira 2 × 200² = 80 kW. Como a perda depende do quadrado da corrente, multiplicar a tensão por 5 divide a perda por 25.",
  },
  {
    materia: "fisica",
    tema: "Energia, matriz elétrica e consumo",
    dificuldade: "dificil",
    enunciado:
      "Uma termelétrica a carvão entrega 400 MW de potência elétrica com rendimento de 40%. Se o carvão utilizado libera 25 MJ por quilograma na queima, o consumo de combustível dessa usina é de:",
    opcoes: [
      "16 kg/s",
      "25 kg/s",
      "64 kg/s",
      "100 kg/s",
      "40 kg/s",
    ],
    correta: 4,
    explicacao:
      "A potência térmica necessária é 400 ÷ 0,40 = 1000 MW, ou seja, 1000 MJ liberados a cada segundo; dividindo por 25 MJ/kg, obtêm-se 40 kg de carvão por segundo. Aplicar o rendimento na ordem errada, multiplicando em vez de dividir, produz os 16 kg/s.",
  },
  {
    materia: "fisica",
    tema: "Energia, matriz elétrica e consumo",
    dificuldade: "dificil",
    enunciado:
      "Uma usina termelétrica emite, em média, 0,8 tonelada de dióxido de carbono para cada megawatt-hora gerado. Ao produzir 500 MWh em um dia de operação, a massa de CO₂ lançada na atmosfera será de:",
    opcoes: [
      "62,5 t",
      "160 t",
      "625 t",
      "4000 t",
      "400 t",
    ],
    correta: 4,
    explicacao:
      "Basta multiplicar: 500 × 0,8 = 400 toneladas. Dividir em vez de multiplicar leva a 625 t, valor maior que o produto e portanto suspeito à primeira vista. Esse tipo de fator de emissão é o que permite comparar o impacto climático de diferentes fontes na matriz elétrica.",
  },
  {
    materia: "fisica",
    tema: "Energia, matriz elétrica e consumo",
    dificuldade: "dificil",
    enunciado:
      "Um aquecedor precisa elevar a temperatura de 200 kg de água de 20 °C para 50 °C. Adotando calor específico da água igual a 4200 J/(kg·°C), a energia necessária, expressa em quilowatt-hora, é de:",
    opcoes: [
      "3,5 kWh",
      "5 kWh",
      "14 kWh",
      "25 kWh",
      "7 kWh",
    ],
    correta: 4,
    explicacao:
      "O calor vale Q = 200 × 4200 × 30 = 2,52 × 10⁷ J; dividindo por 3,6 × 10⁶ J/kWh, chega-se a 7 kWh. Usar a temperatura final em vez da variação, ou esquecer a conversão para kWh, são os dois deslizes que mais aparecem nesse tipo de conta.",
  },
  {
    materia: "fisica",
    tema: "Energia, matriz elétrica e consumo",
    dificuldade: "dificil",
    enunciado:
      "Um parque eólico com potência instalada de 100 MW gerou 262 800 MWh ao longo de um ano de 8760 horas. O fator de capacidade desse parque no período foi de:",
    opcoes: [
      "20%",
      "30%",
      "40%",
      "50%",
      "60%",
    ],
    correta: 1,
    explicacao:
      "A geração máxima teórica seria 100 × 8760 = 876 000 MWh; a razão 262 800 ÷ 876 000 dá 0,30, isto é, 30%. O fator de capacidade mede o quanto a usina realmente entregou em relação ao que entregaria funcionando sempre a plena carga, e é a métrica que permite comparar eólicas com térmicas.",
  },
  {
    materia: "fisica",
    tema: "Energia, matriz elétrica e consumo",
    dificuldade: "dificil",
    enunciado:
      "O operador do sistema elétrico decide, a cada momento, quais usinas acionar seguindo a chamada ordem de mérito. Esse critério estabelece que sejam despachadas primeiro as usinas de:",
    opcoes: [
      "maior potência instalada, independentemente do custo",
      "construção mais recente, para amortizar o investimento",
      "maior emissão de gases, para consumir o combustível estocado",
      "localização mais próxima da capital federal",
      "menor custo variável de operação, deixando as mais caras como reserva",
    ],
    correta: 4,
    explicacao:
      "Despachar primeiro o que é mais barato de operar — hidrelétricas com água já represada, eólicas e solares, cujo combustível é gratuito — minimiza o custo total do sistema. Térmicas caras entram só quando a demanda exige, e é esse acionamento que dispara as bandeiras tarifárias.",
  },
  {
    materia: "fisica",
    tema: "Energia, matriz elétrica e consumo",
    dificuldade: "dificil",
    enunciado:
      "Comparando os dois indicadores para o Brasil, observa-se que a participação de fontes renováveis é bem maior na matriz elétrica do que na matriz energética total. A razão principal dessa diferença é que:",
    opcoes: [
      "a eletricidade gerada por hidrelétricas é contabilizada duas vezes nos balanços oficiais",
      "a matriz energética exclui por definição as fontes hidráulica e eólica",
      "as indústrias brasileiras consomem exclusivamente eletricidade renovável",
      "os combustíveis fósseis não podem ser convertidos em eletricidade",
      "o setor de transportes, que pesa muito na matriz energética, ainda depende fortemente de derivados de petróleo",
    ],
    correta: 4,
    explicacao:
      "A matriz elétrica é dominada por hidrelétricas, eólicas e biomassa, enquanto a matriz energética soma também diesel, gasolina e gás usados em veículos e fornos — daí a queda no percentual renovável. O etanol e o biodiesel puxam esse número para cima, mas não o suficiente para igualar os dois indicadores.",
  },
  {
    materia: "fisica",
    tema: "Energia, matriz elétrica e consumo",
    dificuldade: "dificil",
    enunciado:
      "Uma indústria pretende reduzir o valor pago pela demanda contratada deslocando parte de sua produção para fora do horário de ponta. O horário de ponta, no sistema elétrico brasileiro, corresponde ao período em que:",
    opcoes: [
      "a tensão fornecida pela distribuidora cai abaixo do valor nominal",
      "as usinas hidrelétricas param para manutenção preventiva",
      "a frequência da rede é reduzida para economizar combustível",
      "as tarifas ficam menores para estimular o consumo industrial",
      "o consumo simultâneo do conjunto de usuários atinge seu valor máximo diário",
    ],
    correta: 4,
    explicacao:
      "A ponta é a faixa de poucas horas, geralmente no início da noite, em que a curva de carga do país atinge o pico e o sistema precisa acionar suas usinas mais caras. Por isso a tarifa nesse período é maior, e deslocar consumo para fora dela reduz custo tanto para a indústria quanto para o sistema.",
  },
];
