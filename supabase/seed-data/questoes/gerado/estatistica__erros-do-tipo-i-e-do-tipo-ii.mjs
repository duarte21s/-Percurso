/* Erros do tipo I e do tipo II (50 questões) — estatistica.

   Autorais, escritas por Claude (Anthropic) em 2026-09-30 seguindo as cinco
   regras de CONTINUAR-MATERIAS-POR-OBJETIVO.md. Nenhuma é atribuída a banca
   ou a prova real.

   Conferência do gabarito: 50 de 50 recalculadas por código que chega à
   resposta por outro caminho (ver .rascunho/questoes-objetivo/estatistica__erros-do-tipo-i-e-do-tipo-ii.mjs);
   nenhuma ficou sem conferência em código.

   Montado por scripts/montar-questoes-objetivo.mjs; gabarito redistribuído
   por scripts/rebalancear-gabarito.mjs. Relatório em
   _relatorios/estatistica__erros-do-tipo-i-e-do-tipo-ii.json. */

export const questoes = [
  {
    materia: "estatistica",
    tema: "Erros do tipo I e do tipo II",
    dificuldade: "facil",
    enunciado:
      "O que é o erro do tipo I em um teste de hipóteses?",
    opcoes: [
      "Não rejeitar H0 quando ela é falsa",
      "Rejeitar H0 quando ela é verdadeira",
      "Rejeitar H0 quando ela é falsa",
      "Não rejeitar H0 quando ela é verdadeira",
      "Errar a conta da estatística de teste",
    ],
    correta: 1,
    explicacao:
      "O erro do tipo I é rejeitar a hipótese nula quando ela é verdadeira: concluir que há um efeito que não existe, um falso positivo. Sua probabilidade é o nível de significância α, escolhido antes do teste. Os dois tipos de erro são consequências possíveis de decidir com dados aleatórios, mesmo sem nenhum engano de cálculo.\n\nNão rejeitar H0 falsa é o erro do tipo II. Rejeitar H0 falsa e manter H0 verdadeira são as duas decisões corretas. E erros de conta são enganos de cálculo, e não um dos tipos de erro de decisão do teste.",
  },
  {
    materia: "estatistica",
    tema: "Erros do tipo I e do tipo II",
    dificuldade: "facil",
    enunciado:
      "Um teste manteve H0, embora ela fosse falsa. Que tipo de erro ocorreu?",
    opcoes: [
      "Erro do tipo I",
      "Nenhum erro",
      "Erro do tipo II",
      "Os dois tipos de erro",
      "Erro de amostragem sistemático",
    ],
    correta: 2,
    explicacao:
      "Deixar de rejeitar uma hipótese nula falsa é o erro do tipo II: o efeito existia, mas o teste não o detectou, um falso negativo. Sua probabilidade, β, depende do tamanho do efeito verdadeiro, da variabilidade dos dados e do tamanho da amostra.\n\nO erro do tipo I é o contrário: rejeitar H0 verdadeira. Houve, sim, um erro, porque a decisão contrariou a realidade. Os dois tipos não ocorrem juntos num único teste. E viés de amostragem é outro problema, anterior ao teste.",
  },
  {
    materia: "estatistica",
    tema: "Erros do tipo I e do tipo II",
    dificuldade: "facil",
    enunciado:
      "O nível de significância α de um teste corresponde à probabilidade de qual evento?",
    opcoes: [
      "H0 ser verdadeira",
      "Não rejeitar H0 quando ela é falsa",
      "Rejeitar H0 quando ela é falsa",
      "H1 ser verdadeira",
      "Rejeitar H0 quando ela é verdadeira",
    ],
    correta: 4,
    explicacao:
      "α é a probabilidade de cometer o erro do tipo I: supondo H0 verdadeira, é a chance de os dados caírem na região crítica e H0 ser rejeitada. Com α = 5%, em muitos testes de hipóteses nulas verdadeiras, cerca de 5% terminam em rejeição.\n\nα não é a probabilidade de H0 ser verdadeira, nem a de H1. A probabilidade de não rejeitar H0 falsa é β. E a de rejeitar H0 falsa é o poder, 1 − β.",
  },
  {
    materia: "estatistica",
    tema: "Erros do tipo I e do tipo II",
    dificuldade: "facil",
    enunciado:
      "Em um teste de hipóteses, o que é o poder do teste?",
    opcoes: [
      "A chance de rejeitar H0 verdadeira",
      "A chance de rejeitar H0 quando ela é falsa",
      "O nível de significância",
      "A probabilidade de H0 ser falsa",
      "O tamanho da amostra",
    ],
    correta: 1,
    explicacao:
      "O poder é a probabilidade de rejeitar H0 quando ela é falsa, isto é, de detectar um efeito que existe. Vale 1 − β, em que β é a probabilidade do erro do tipo II. Um teste com poder alto raramente deixa passar efeitos reais do tamanho considerado.\n\nRejeitar H0 verdadeira é o erro do tipo I, com probabilidade α. O nível de significância é esse mesmo α. O poder não é a probabilidade de H0 ser falsa. E o tamanho da amostra influencia o poder, mas não é o poder.",
  },
  {
    materia: "estatistica",
    tema: "Erros do tipo I e do tipo II",
    dificuldade: "facil",
    enunciado:
      "Um teste tem probabilidade β = 0,2 de cometer o erro do tipo II contra um certo efeito. Qual é o poder do teste contra esse efeito?",
    opcoes: [
      "0,8",
      "0,2",
      "0,05",
      "0,95",
      "1,2",
    ],
    correta: 0,
    explicacao:
      "O poder é o complemento de β: poder = 1 − β = 1 − 0,2 = 0,8. Se o efeito existe com o tamanho considerado, o teste o detecta em 80% das amostras e o deixa passar em 20%. Um poder de 80% é uma meta comum no planejamento de estudos.\n\n0,2 é o próprio β. 0,05 é o α usual, que não entra nesta conta. 0,95 é 1 − α. E 1,2 soma 1 e β, e passa de 1.",
  },
  {
    materia: "estatistica",
    tema: "Erros do tipo I e do tipo II",
    dificuldade: "facil",
    enunciado:
      "Num julgamento, a hipótese nula é a inocência do réu. Condenar um réu inocente corresponde a que tipo de erro?",
    opcoes: [
      "Erro do tipo II",
      "Nenhum erro",
      "Erro do tipo I",
      "Os dois tipos de erro",
      "Depende da pena aplicada",
    ],
    correta: 2,
    explicacao:
      "Condenar é rejeitar H0, a inocência. Se o réu é inocente, H0 é verdadeira, e rejeitá-la é o erro do tipo I. O princípio de que alguém só é condenado com provas fortes corresponde a manter α pequeno.\n\nO erro do tipo II seria absolver um culpado, mantendo H0 falsa. Condenar um inocente é, sim, um erro. Os dois não ocorrem ao mesmo tempo no mesmo julgamento. E o tipo de erro não depende da pena.",
  },
  {
    materia: "estatistica",
    tema: "Erros do tipo I e do tipo II",
    dificuldade: "facil",
    enunciado:
      "Um exame testa H0: o paciente não tem a doença. Um resultado negativo num paciente doente corresponde a que tipo de erro?",
    opcoes: [
      "Erro do tipo I",
      "Uma decisão correta",
      "Os dois tipos de erro",
      "Um erro de medida, e não de decisão",
      "Erro do tipo II",
    ],
    correta: 4,
    explicacao:
      "Um resultado negativo mantém H0, a ausência de doença. Se o paciente está doente, H0 é falsa, e mantê-la é o erro do tipo II, o falso negativo. Em exames de triagem, esse erro costuma ser o mais grave, porque o doente deixa de ser tratado.\n\nO erro do tipo I seria um falso positivo: acusar doença num paciente sadio. O resultado negativo num doente não é correto. Os dois erros não ocorrem juntos. E, mesmo que venha de limitações do exame, o resultado leva a uma decisão errada.",
  },
  {
    materia: "estatistica",
    tema: "Erros do tipo I e do tipo II",
    dificuldade: "facil",
    enunciado:
      "Se a hipótese nula é falsa, é possível cometer o erro do tipo I?",
    opcoes: [
      "Não: esse erro exige H0 verdadeira",
      "Sim, com probabilidade α",
      "Sim, com probabilidade β",
      "Só com amostras pequenas",
      "Só em testes bilaterais",
    ],
    correta: 0,
    explicacao:
      "O erro do tipo I é rejeitar uma H0 verdadeira. Se H0 é falsa, rejeitá-la é a decisão correta, e o único erro possível é o do tipo II, não rejeitá-la. Por isso α descreve o comportamento do teste quando H0 é verdadeira, e β, quando ela é falsa.\n\nα é a probabilidade de erro do tipo I no caso de H0 verdadeira, e não se aplica aqui. β é a probabilidade do erro do tipo II. E o tamanho da amostra ou o formato do teste não mudam essa lógica.",
  },
  {
    materia: "estatistica",
    tema: "Erros do tipo I e do tipo II",
    dificuldade: "facil",
    enunciado:
      "Mantidos a amostra e o efeito verdadeiro, o que tende a acontecer com β ao reduzir o nível de significância de 5% para 1%?",
    opcoes: [
      "β diminui",
      "β não muda",
      "β se anula",
      "β fica igual a α",
      "β aumenta",
    ],
    correta: 4,
    explicacao:
      "Com α menor, a região crítica encolhe e fica mais longe de μ0: é preciso evidência mais forte para rejeitar H0. Isso protege contra o erro do tipo I, mas faz o teste deixar passar mais efeitos reais: β aumenta, e o poder diminui. Com n fixo, os dois erros andam em sentidos opostos.\n\nβ não diminui nem se mantém, porque a região de rejeição mudou. Ele não se anula. E não há relação que o iguale a α.",
  },
  {
    materia: "estatistica",
    tema: "Erros do tipo I e do tipo II",
    dificuldade: "facil",
    enunciado:
      "Mantidos o nível de significância e o efeito verdadeiro, o que acontece com o poder do teste quando o tamanho da amostra aumenta?",
    opcoes: [
      "Diminui",
      "Não muda",
      "Aumenta",
      "Fica igual a α",
      "Cai para zero",
    ],
    correta: 2,
    explicacao:
      "Com mais observações, o erro padrão σ/√n diminui, e a distribuição da estatística sob H1 se afasta da região de não rejeição. O mesmo efeito fica mais fácil de detectar, β cai e o poder aumenta, enquanto α continua fixo.\n\nO poder não diminui com mais dados. Ele muda, sim, porque depende de n. Poder igual a α só ocorre quando não há efeito nenhum. E o poder se aproxima de 1, e não de zero, quando n cresce.",
  },
  {
    materia: "estatistica",
    tema: "Erros do tipo I e do tipo II",
    dificuldade: "facil",
    enunciado:
      "Num único teste, é possível cometer os dois tipos de erro ao mesmo tempo?",
    opcoes: [
      "Sim, sempre",
      "Sim, quando o valor p é igual a α",
      "Não: cada um exige uma situação de H0",
      "Só com α grande",
      "Só em testes unilaterais",
    ],
    correta: 2,
    explicacao:
      "O erro do tipo I só ocorre se H0 for verdadeira e for rejeitada; o do tipo II, só se H0 for falsa e for mantida. Como H0 é verdadeira ou falsa, e o teste rejeita ou não, num único teste acontece no máximo um dos dois erros. O quadro de decisões tem quatro casas: duas corretas e uma para cada tipo de erro.\n\nNão há situação em que os dois ocorram juntos, nem com valor p igual a α, nem com α grande, nem em testes unilaterais. O que muda com essas escolhas são as probabilidades de cada erro.",
  },
  {
    materia: "estatistica",
    tema: "Erros do tipo I e do tipo II",
    dificuldade: "facil",
    enunciado:
      "Num teste com α = 0,05, se H0 for verdadeira, qual é a probabilidade de a decisão ser correta?",
    opcoes: [
      "0,95",
      "0,05",
      "1",
      "0,5",
      "Depende do poder",
    ],
    correta: 0,
    explicacao:
      "Com H0 verdadeira, a decisão correta é não rejeitá-la, e isso acontece com probabilidade 1 − α = 0,95. Os 5% restantes são os casos de erro do tipo I, em que os dados caem na região crítica por acaso. Assim, α controla o risco do teste quando H0 é verdadeira, e o poder descreve o comportamento quando ela é falsa.\n\n0,05 é a probabilidade de erro, e não de acerto. 1 exigiria α = 0. 0,5 não tem justificativa. E o poder só importa quando H0 é falsa.",
  },
  {
    materia: "estatistica",
    tema: "Erros do tipo I e do tipo II",
    dificuldade: "media",
    enunciado:
      "Num teste de H0: μ = 100 contra H1: μ > 100, com σ = 15, n = 25 e α = 5% (z = 1,645), rejeita-se H0 se a média amostral passar de 104,935. Se a média verdadeira for 106, e usando Φ(−0,355) ≈ 0,361, qual é a probabilidade do erro do tipo II?",
    opcoes: [
      "≈ 0,64",
      "0,05",
      "0,95",
      "≈ 0,36",
      "≈ 0,89",
    ],
    correta: 3,
    explicacao:
      "O erro do tipo II é não rejeitar H0, isto é, obter média amostral abaixo de 104,935, quando a média verdadeira é 106. Nesse caso, a média amostral é normal com média 106 e erro padrão 15/√25 = 3, e β = P(x̄ < 104,935) = Φ((104,935 − 106)/3) = Φ(−0,355) ≈ 0,36. O poder é cerca de 0,64.\n\n0,64 é o poder, 1 − β. 0,05 é α, a probabilidade do erro do tipo I. 0,95 é 1 − α. E 0,89 usa o desvio padrão 15 sem dividir por √n.",
  },
  {
    materia: "estatistica",
    tema: "Erros do tipo I e do tipo II",
    dificuldade: "media",
    enunciado:
      "Uma máquina deveria encher 500 mL, com σ = 10 mL. Testa-se H0: μ = 500 contra H1: μ < 500, com n = 16 e α = 5% (z = 1,645), e rejeita-se H0 se a média amostral ficar abaixo de 495,89. Se a média real for 492 mL, e usando Φ(1,555) ≈ 0,940, qual é o poder do teste?",
    opcoes: [
      "≈ 0,94",
      "≈ 0,06",
      "0,05",
      "≈ 0,64",
      "0,95",
    ],
    correta: 0,
    explicacao:
      "O poder é a probabilidade de rejeitar H0 quando a média real é 492: P(x̄ < 495,89), com x̄ normal de média 492 e erro padrão 10/√16 = 2,5. Padronizando, z = (495,89 − 492)/2,5 ≈ 1,555, e o poder é Φ(1,555) ≈ 0,94. Uma queda de 8 mL é detectada com alta probabilidade.\n\n0,06 é β, a chance de não detectar a queda. 0,05 é α. 0,64 corresponderia a uma queda menor, de 5 mL. E 0,95 é 1 − α, que não tem relação com o poder.",
  },
  {
    materia: "estatistica",
    tema: "Erros do tipo I e do tipo II",
    dificuldade: "media",
    enunciado:
      "Num teste unilateral de H0: μ = 50 contra H1: μ > 50, com erro padrão 2, o erro do tipo II vale cerca de 0,20 quando a média verdadeira é 55 e α = 5%. Com α = 1%, o ponto crítico sobe para 54,65. Usando Φ(0,174) ≈ 0,569, qual passa a ser β?",
    opcoes: [
      "≈ 0,43",
      "≈ 0,20",
      "≈ 0,57",
      "0,01",
      "0,99",
    ],
    correta: 0,
    explicacao:
      "Com α = 1%, só se rejeita H0 se a média amostral passar de 54,65. Com média verdadeira 55 e erro padrão 2, β = P(x̄ < 54,65) = Φ((54,65 − 55)/2) = Φ(−0,174) = 1 − 0,569 ≈ 0,43. Reduzir α de 5% para 1% mais que dobrou β, de 0,20 para 0,43: com n fixo, proteger-se de um erro aumenta o outro.\n\n0,20 é β com α = 5%. 0,57 é o poder com α = 1%. 0,01 é o novo α. E 0,99 é 1 − α.",
  },
  {
    materia: "estatistica",
    tema: "Erros do tipo I e do tipo II",
    dificuldade: "media",
    enunciado:
      "Um pesquisador faz 10 testes independentes, cada um com α = 5%, e todas as hipóteses nulas são verdadeiras. Qual é a probabilidade de pelo menos um teste rejeitar H0?",
    opcoes: [
      "≈ 40%",
      "5%",
      "50%",
      "≈ 60%",
      "10%",
    ],
    correta: 0,
    explicacao:
      "Cada teste mantém H0 com probabilidade 0,95, e os 10 mantêm juntos com probabilidade 0,95¹⁰ ≈ 0,599. A chance de pelo menos um erro do tipo I é 1 − 0,599 ≈ 0,40, oito vezes o α de cada teste. Por isso, quem faz muitos testes precisa ajustar o nível de significância.\n\n5% vale para cada teste isolado. 50% soma 5% dez vezes, o que superestima, porque ignora as sobreposições. 60% é a chance de nenhum erro. E 10% é o número de testes lido como porcentagem.",
  },
  {
    materia: "estatistica",
    tema: "Erros do tipo I e do tipo II",
    dificuldade: "media",
    enunciado:
      "Para manter em no máximo 5% a probabilidade de algum erro do tipo I em 10 testes, a correção de Bonferroni usa que nível de significância em cada teste?",
    opcoes: [
      "0,05",
      "0,5",
      "0,0005",
      "0,01",
      "0,005",
    ],
    correta: 4,
    explicacao:
      "A correção de Bonferroni divide o nível total pelo número de testes: 0,05/10 = 0,005. Como a probabilidade de pelo menos um erro é no máximo a soma das probabilidades, 10 · 0,005 = 0,05, o objetivo fica garantido. Com testes independentes, o valor exato seria 1 − 0,995¹⁰ ≈ 0,049.\n\n0,05 em cada teste daria cerca de 40% de chance de algum erro. 0,5 multiplica em vez de dividir. 0,0005 divide por 100. E 0,01 é um nível comum, mas não sai da correção.",
  },
  {
    materia: "estatistica",
    tema: "Erros do tipo I e do tipo II",
    dificuldade: "media",
    enunciado:
      "Numa análise, 20 testes independentes são feitos com α = 5%, e em todos a hipótese nula é verdadeira. Quantas rejeições se esperam, em média?",
    opcoes: [
      "0",
      "1",
      "5",
      "20",
      "0,05",
    ],
    correta: 1,
    explicacao:
      "Cada teste rejeita H0 verdadeira com probabilidade 0,05, e o número de rejeições é binomial com n = 20 e p = 0,05, de média 20 · 0,05 = 1. Em média, um dos 20 resultados será significativo só por acaso, sem nenhum efeito real. A chance de pelo menos uma rejeição é 1 − 0,95²⁰ ≈ 64%.\n\n0 ignora o erro do tipo I. 5 lê α como contagem. 20 supõe que todos os testes rejeitam. E 0,05 é a probabilidade de cada teste, e não o número esperado de rejeições.",
  },
  {
    materia: "estatistica",
    tema: "Erros do tipo I e do tipo II",
    dificuldade: "media",
    enunciado:
      "Num tribunal, a hipótese nula é a inocência. Se os juízes passarem a exigir provas bem mais fortes para condenar, o que tende a acontecer?",
    opcoes: [
      "Mais inocentes são condenados",
      "Mais culpados acabam absolvidos",
      "Os dois erros diminuem",
      "Nenhum dos erros muda",
      "Todos os culpados passam a ser condenados",
    ],
    correta: 1,
    explicacao:
      "Exigir provas mais fortes é reduzir α: menos inocentes condenados, menos erros do tipo I. O preço é que parte dos culpados, com provas insuficientes para o novo critério, passa a ser absolvida: β aumenta. Com a mesma qualidade de provas, os dois erros se movem em sentidos opostos.\n\nCondenar mais inocentes seria o efeito de afrouxar o critério. Os dois erros só cairiam juntos com provas melhores, o equivalente a mais dados. O critério mudou, e as taxas mudam. E exigir mais provas não aumenta as condenações de culpados.",
  },
  {
    materia: "estatistica",
    tema: "Erros do tipo I e do tipo II",
    dificuldade: "media",
    enunciado:
      "Para aprovar um novo medicamento, testa-se H0: o remédio não funciona. Nesse teste, o que é o erro do tipo I?",
    opcoes: [
      "Rejeitar um remédio que funciona",
      "Aprovar um remédio que funciona",
      "Rejeitar um remédio que não funciona",
      "Aprovar um remédio que não funciona",
      "Não fazer o teste",
    ],
    correta: 3,
    explicacao:
      "O erro do tipo I é rejeitar H0 verdadeira. Aqui, H0 verdadeira significa que o remédio não funciona, e rejeitá-la leva à aprovação: aprovar um remédio ineficaz. Por isso agências reguladoras exigem α pequeno, para proteger pacientes de tratamentos inúteis.\n\nRejeitar um remédio que funciona é o erro do tipo II. Aprovar um remédio que funciona e rejeitar um que não funciona são as decisões corretas. E não fazer o teste não é um dos erros de decisão.",
  },
  {
    materia: "estatistica",
    tema: "Erros do tipo I e do tipo II",
    dificuldade: "media",
    enunciado:
      "Um pesquisador repete o teste depois de cada 10 novas observações e para assim que obtém p < 0,05, com até 10 verificações. Se H0 for verdadeira, o que acontece com a probabilidade de erro do tipo I?",
    opcoes: [
      "Fica exatamente em 5%",
      "Fica bem maior que 5%",
      "Fica menor que 5%",
      "Vai a zero",
      "Depende só do tamanho final da amostra",
    ],
    correta: 1,
    explicacao:
      "Cada verificação é uma nova chance de o acaso produzir p < 0,05. Mesmo com resultados correlacionados, as chances se acumulam: com até 10 verificações, a probabilidade de rejeitar H0 verdadeira em algum momento fica perto de 20%, e não 5%. Parar quando o resultado agrada inflaciona o erro do tipo I.\n\nO nível nominal de 5% vale para um único teste planejado. O procedimento não reduz o erro, nem o zera. E o problema está na regra de parada, e não só no tamanho final.",
  },
  {
    materia: "estatistica",
    tema: "Erros do tipo I e do tipo II",
    dificuldade: "media",
    enunciado:
      "Com o mesmo tamanho de amostra e o mesmo α, como o poder para detectar uma diferença grande se compara com o poder para detectar uma diferença pequena?",
    opcoes: [
      "É menor",
      "É igual",
      "É igual a α",
      "É maior",
      "Aumenta o erro do tipo I",
    ],
    correta: 3,
    explicacao:
      "Quanto maior a diferença verdadeira entre μ e μ0, mais longe da região de não rejeição fica a distribuição da estatística, e mais fácil é rejeitar H0. O poder cresce com o tamanho do efeito: diferenças pequenas exigem amostras maiores para serem detectadas.\n\nO poder não é menor nem igual para efeitos maiores. Ele só se iguala a α quando não há efeito. E o erro do tipo I depende apenas de α, que é o mesmo nos dois casos.",
  },
  {
    materia: "estatistica",
    tema: "Erros do tipo I e do tipo II",
    dificuldade: "media",
    enunciado:
      "Um controle de qualidade testa H0: o lote está conforme. Aprovar um lote defeituoso corresponde a que tipo de erro?",
    opcoes: [
      "Erro do tipo I",
      "Erro do tipo II",
      "Uma decisão correta",
      "Os dois tipos de erro",
      "Nenhum, se a amostra for grande",
    ],
    correta: 1,
    explicacao:
      "Aprovar o lote é manter H0, a conformidade. Se o lote é defeituoso, H0 é falsa, e mantê-la é o erro do tipo II. Esse é o risco do comprador, que recebe produtos ruins; o erro do tipo I, rejeitar um lote bom, é o risco do fabricante.\n\nO erro do tipo I seria recusar um lote conforme. Aprovar um lote defeituoso não é correto. Os dois erros não ocorrem juntos. E amostras grandes reduzem a chance do erro, mas não mudam sua natureza.",
  },
  {
    materia: "estatistica",
    tema: "Erros do tipo I e do tipo II",
    dificuldade: "media",
    enunciado:
      "Para detectar μ > μ0, como se compara o poder de um teste unilateral à direita com o de um teste bilateral de mesmo α?",
    opcoes: [
      "Menor em qualquer direção",
      "Igual",
      "Nulo",
      "Maior na direção prevista",
      "Maior na direção oposta",
    ],
    correta: 3,
    explicacao:
      "O teste unilateral põe toda a região crítica do lado previsto, com valor crítico 1,645 em vez de 1,96 para α = 5%. Na direção prevista, é mais fácil rejeitar H0, e o poder é maior: para um efeito de 2 erros padrão, cerca de 0,64 contra 0,52 do bilateral. Na direção oposta, porém, o unilateral praticamente não detecta nada.\n\nO unilateral não é menos poderoso na direção prevista. Os poderes não são iguais. O poder não é nulo. E na direção oposta ele é quase zero, e não maior.",
  },
  {
    materia: "estatistica",
    tema: "Erros do tipo I e do tipo II",
    dificuldade: "media",
    enunciado:
      "Para um teste unilateral com α = 5% (z = 1,645), σ = 10 e efeito de interesse de 5 unidades, qual é o menor tamanho de amostra que dá poder de 80% (z = 0,842)?",
    opcoes: [
      "11",
      "32",
      "25",
      "5",
      "35",
    ],
    correta: 2,
    explicacao:
      "A condição é (zα + zβ) · σ/√n ≤ δ, isto é, n ≥ [(1,645 + 0,842) · 10/5]² = (2,487 · 2)² ≈ 24,7, e o menor inteiro é 25. Com 25 observações, o efeito de 5 unidades fica 2,5 erros padrão acima de μ0, e o poder é cerca de 80%.\n\n11 ignora zβ e só garante poder de 50%. 32 usa 1,96, de um teste bilateral. 5 esquece de elevar ao quadrado. E 35 corresponde a um poder de 90%, com zβ = 1,282.",
  },
  {
    materia: "estatistica",
    tema: "Erros do tipo I e do tipo II",
    dificuldade: "media",
    enunciado:
      "Por que, num teste de hipóteses, o valor de β não é fixado de antemão como se faz com α?",
    opcoes: [
      "β é sempre zero",
      "β é sempre igual a α",
      "β depende do valor verdadeiro do parâmetro",
      "β não existe em testes unilaterais",
      "β depende só do tamanho da amostra",
    ],
    correta: 2,
    explicacao:
      "α é calculado sob H0, que fixa um único valor do parâmetro. β, ao contrário, é calculado sob H1, que admite muitos valores, e para cada valor verdadeiro há um β diferente: é pequeno para efeitos grandes e grande para efeitos pequenos. Por isso se fala em β contra um efeito específico, escolhido no planejamento.\n\nβ não é zero, a não ser em casos extremos. Ele não é igual a α. Existe em qualquer teste. E depende também do efeito, de σ e de α, e não só de n.",
  },
  {
    materia: "estatistica",
    tema: "Erros do tipo I e do tipo II",
    dificuldade: "media",
    enunciado:
      "Para testar se uma moeda é honesta contra a suspeita de favorecer cara, adota-se a regra de rejeitar H0: p = 0,5 se saírem 8 caras ou mais em 10 lançamentos. Qual é a probabilidade do erro do tipo I?",
    opcoes: [
      "≈ 0,044",
      "0,8",
      "≈ 0,055",
      "≈ 0,011",
      "0,5",
    ],
    correta: 2,
    explicacao:
      "O erro do tipo I é rejeitar H0 quando a moeda é honesta: P(X ≥ 8) com X binomial de parâmetros 10 e 0,5, que vale (45 + 10 + 1)/1.024 = 56/1.024 ≈ 0,055. A regra tem nível pouco acima de 5%, e mudar o ponto de corte muda α em saltos, porque a binomial é discreta.\n\n0,044 é só P(X = 8). 0,8 é a proporção de caras exigida. 0,011 é P(X ≥ 9), o nível da regra mais exigente. E 0,5 é a probabilidade de cara sob H0.",
  },
  {
    materia: "estatistica",
    tema: "Erros do tipo I e do tipo II",
    dificuldade: "media",
    enunciado:
      "Aumentar o tamanho da amostra, mantendo a mesma regra com α = 5%, reduz a probabilidade do erro do tipo I?",
    opcoes: [
      "Não: α continua 5%; o que cai é β",
      "Sim: α cai com n",
      "Sim: α e β caem juntos",
      "Não: aumentar n aumenta α",
      "Só em testes bilaterais",
    ],
    correta: 0,
    explicacao:
      "α é escolhido pelo pesquisador e define a região crítica: com H0 verdadeira, a chance de rejeitar continua 5%, qualquer que seja n. O que melhora com mais dados é o poder, porque o erro padrão diminui e efeitos reais ficam mais fáceis de detectar; β cai.\n\nα não cai com n, nem cai junto com β, a menos que o pesquisador escolha um α menor. Aumentar n também não o aumenta. E essa lógica vale para testes unilaterais e bilaterais.",
  },
  {
    materia: "estatistica",
    tema: "Erros do tipo I e do tipo II",
    dificuldade: "media",
    enunciado:
      "Como é possível reduzir ao mesmo tempo a probabilidade do erro do tipo I e a do erro do tipo II?",
    opcoes: [
      "Diminuindo α",
      "Aumentando α",
      "Trocando para um teste bilateral",
      "Não é possível em nenhum caso",
      "Aumentando o tamanho da amostra",
    ],
    correta: 4,
    explicacao:
      "Com n fixo, reduzir α aumenta β, e vice-versa. Com mais dados, porém, o erro padrão diminui: é possível adotar um α menor e, ainda assim, ter β menor que antes. Por exemplo, num teste unilateral contra um efeito de 1 desvio padrão, passar de n = 9 com α = 5% para n = 25 com α = 1% reduz β de cerca de 0,09 para cerca de 0,004.\n\nDiminuir α sozinho aumenta β, e aumentar α faz o contrário. Trocar para bilateral reduz o poder na direção prevista. E é possível, sim, com mais informação.",
  },
  {
    materia: "estatistica",
    tema: "Erros do tipo I e do tipo II",
    dificuldade: "media",
    enunciado:
      "Qual é o valor da função poder de um teste quando o parâmetro verdadeiro é exatamente o valor da hipótese nula, μ = μ0?",
    opcoes: [
      "Igual a 1",
      "Igual a 0",
      "Igual a 1 − α",
      "Igual a β",
      "Igual a α",
    ],
    correta: 4,
    explicacao:
      "A função poder dá a probabilidade de rejeitar H0 para cada valor verdadeiro do parâmetro. Em μ = μ0, H0 é verdadeira, e a probabilidade de rejeitar é justamente o nível de significância α. À medida que μ se afasta de μ0, a curva sobe em direção a 1.\n\n1 seria rejeitar sempre. 0 seria nunca rejeitar. 1 − α é a probabilidade de manter H0 verdadeira. E β só se define para valores de H1.",
  },
  {
    materia: "estatistica",
    tema: "Erros do tipo I e do tipo II",
    dificuldade: "media",
    enunciado:
      "À medida que o valor verdadeiro do parâmetro se afasta de μ0 na direção da alternativa, para que valor tende o poder do teste?",
    opcoes: [
      "α",
      "0",
      "0,5",
      "β",
      "1",
    ],
    correta: 4,
    explicacao:
      "Quanto mais longe o valor verdadeiro está de μ0, mais extremos tendem a ser os dados, e mais certa fica a rejeição de H0. A função poder cresce e se aproxima de 1: efeitos muito grandes são detectados quase sempre. Com erro padrão 1 e α = 5%, um efeito de 4 unidades já tem poder de cerca de 0,99.\n\nα é o valor do poder em μ0, o ponto de partida da curva. 0 seria o limite na direção oposta, num teste unilateral. 0,5 é o poder quando o valor verdadeiro coincide com o ponto crítico. E β tende a zero, e não o poder.",
  },
  {
    materia: "estatistica",
    tema: "Erros do tipo I e do tipo II",
    dificuldade: "media",
    enunciado:
      "Num teste bilateral de H0: μ = 50 com σ = 8, n = 16 e α = 5%, rejeita-se H0 se a média amostral ficar fora de 46,08 a 53,92. Se a média verdadeira for 54, e usando Φ(0,04) ≈ 0,516, qual é, aproximadamente, o poder?",
    opcoes: [
      "≈ 0,52",
      "≈ 0,48",
      "≈ 0,64",
      "0,05",
      "≈ 0,98",
    ],
    correta: 0,
    explicacao:
      "Com média verdadeira 54 e erro padrão 8/√16 = 2, o poder soma as duas caudas: P(x̄ > 53,92) = Φ((54 − 53,92)/2) = Φ(0,04) ≈ 0,516, e P(x̄ < 46,08) = Φ(−3,96), praticamente zero. O poder é cerca de 0,52: um efeito de 2 erros padrão é detectado em só metade das amostras.\n\n0,48 é β. 0,64 seria o poder do teste unilateral, com ponto crítico 53,29. 0,05 é α. E 0,98 é Φ(2), que esquece o valor crítico e trata qualquer média acima de 50 como rejeição.",
  },
  {
    materia: "estatistica",
    tema: "Erros do tipo I e do tipo II",
    dificuldade: "media",
    enunciado:
      "Num teste de hipóteses, como se classifica a decisão de rejeitar H0 quando ela é falsa?",
    opcoes: [
      "Erro do tipo I",
      "Erro do tipo II",
      "Os dois tipos de erro",
      "Um erro de amostragem",
      "Uma decisão correta",
    ],
    correta: 4,
    explicacao:
      "Rejeitar H0 falsa é exatamente o que se espera do teste: detectar o efeito que existe. É uma decisão correta, e sua probabilidade é o poder, 1 − β. No quadro de decisões, a outra decisão correta é manter H0 quando ela é verdadeira, com probabilidade 1 − α.\n\nO erro do tipo I é rejeitar H0 verdadeira. O do tipo II é manter H0 falsa. Os dois erros não se aplicam aqui. E erro de amostragem é a diferença natural entre estatística e parâmetro, e não uma decisão.",
  },
  {
    materia: "estatistica",
    tema: "Erros do tipo I e do tipo II",
    dificuldade: "media",
    enunciado:
      "Duas pesquisas usam o mesmo n, o mesmo α e buscam o mesmo efeito, mas na segunda as medidas são mais imprecisas, com σ maior. Como fica o poder da segunda em relação ao da primeira?",
    opcoes: [
      "Maior",
      "Igual",
      "Menor",
      "Igual a α",
      "Igual a 1",
    ],
    correta: 2,
    explicacao:
      "Com σ maior, o erro padrão σ/√n aumenta, e o mesmo efeito corresponde a menos erros padrão de distância de μ0. A distribuição da estatística sob H1 se sobrepõe mais à região de não rejeição, β aumenta e o poder fica menor. Medidas mais precisas, com σ menor, aumentam o poder sem aumentar a amostra.\n\nO poder não fica maior nem igual. Ele só seria igual a α sem efeito. E não chega a 1: fica abaixo do da primeira pesquisa.",
  },
  {
    materia: "estatistica",
    tema: "Erros do tipo I e do tipo II",
    dificuldade: "media",
    enunciado:
      "Qual combinação de características torna um teste mais desejável?",
    opcoes: [
      "α grande e poder baixo",
      "α pequeno e poder baixo",
      "α grande e poder alto",
      "α igual ao poder",
      "α pequeno e poder alto",
    ],
    correta: 4,
    explicacao:
      "Um bom teste erra pouco nos dois sentidos: α pequeno significa poucos falsos positivos, e poder alto significa poucos falsos negativos. Com n fixo, os dois objetivos competem, e o planejamento escolhe n grande o bastante para alcançar os dois.\n\nα grande com poder baixo é o pior caso. α pequeno com poder baixo deixa passar muitos efeitos reais. α grande com poder alto aceita muitos falsos positivos. E α igual ao poder caracteriza um teste que não distingue H0 de H1.",
  },
  {
    materia: "estatistica",
    tema: "Erros do tipo I e do tipo II",
    dificuldade: "media",
    enunciado:
      "Um produto só é aprovado se dois testes independentes, cada um com α = 5%, rejeitarem H0: o produto não é eficaz. Se o produto for ineficaz, qual é a probabilidade de ser aprovado?",
    opcoes: [
      "0,05",
      "0,1",
      "0,0975",
      "0,025",
      "0,0025",
    ],
    correta: 4,
    explicacao:
      "A aprovação exige as duas rejeições. Com H0 verdadeira, cada teste rejeita com probabilidade 0,05, e, pela independência, os dois rejeitam juntos com probabilidade 0,05 · 0,05 = 0,0025. Exigir duas confirmações independentes reduz muito o erro do tipo I do processo.\n\n0,05 é o α de um teste. 0,1 soma os dois α. 0,0975 = 1 − 0,95² é a chance de pelo menos um rejeitar, que valeria se bastasse uma rejeição. E 0,025 divide α por 2, como num teste bilateral.",
  },
  {
    materia: "estatistica",
    tema: "Erros do tipo I e do tipo II",
    dificuldade: "media",
    enunciado:
      "Num teste com 10 lançamentos de moeda, a regra é rejeitar H0: p = 0,5 se o número de caras for maior ou igual a um valor c. Qual é o maior nível de significância real, sem passar de 5%, que essa regra pode ter?",
    opcoes: [
      "0,05",
      "≈ 0,055",
      "≈ 0,001",
      "≈ 0,011",
      "0",
    ],
    correta: 3,
    explicacao:
      "Com c = 8, o nível seria P(X ≥ 8) = 56/1.024 ≈ 0,055, acima de 5%. Com c = 9, é P(X ≥ 9) = 11/1.024 ≈ 0,011. Como a binomial é discreta, não existe regra desse tipo com nível exatamente 5%, e o maior nível permitido é cerca de 0,011, bem abaixo do nominal.\n\n0,05 exato não é atingível com essa regra. 0,055 passa do limite. 0,001 é o nível de c = 10, mais conservador que o necessário. E 0 corresponderia a nunca rejeitar.",
  },
  {
    materia: "estatistica",
    tema: "Erros do tipo I e do tipo II",
    dificuldade: "media",
    enunciado:
      "Um estudo rejeitou H0 com valor p igual a 0,04. Qual é a probabilidade de essa rejeição ser um erro do tipo I?",
    opcoes: [
      "Exatamente 4%",
      "Exatamente 5%",
      "96%",
      "Não dá para saber só com o valor p",
      "0%",
    ],
    correta: 3,
    explicacao:
      "O valor p é calculado supondo H0 verdadeira; ele não informa com que frequência H0 é verdadeira entre os estudos com resultados parecidos. A chance de esta rejeição ser um falso positivo depende de quão plausível H0 era antes e do poder do estudo: entre hipóteses em que o efeito quase nunca existe, rejeições com p = 0,04 são frequentemente falsas.\n\n4% confunde o valor p com a probabilidade de erro. 5% é a taxa de erro do procedimento quando H0 é verdadeira, e não a desta rejeição. 96% e 0% não têm justificativa.",
  },
  {
    materia: "estatistica",
    tema: "Erros do tipo I e do tipo II",
    dificuldade: "media",
    enunciado:
      "Num plano de amostragem, um lote é aceito se houver no máximo 1 peça defeituosa numa amostra de 20. Se o lote tiver 10% de peças defeituosas, o que é inaceitável, qual é a probabilidade de ele ser aceito?",
    opcoes: [
      "≈ 0,12",
      "≈ 0,39",
      "≈ 0,27",
      "≈ 0,61",
      "0,1",
    ],
    correta: 1,
    explicacao:
      "Aceitar um lote ruim é o erro do tipo II do plano. Com X binomial de parâmetros 20 e 0,1: P(X = 0) = 0,9²⁰ ≈ 0,122 e P(X = 1) = 20 · 0,1 · 0,9¹⁹ ≈ 0,270. Somando, P(X ≤ 1) ≈ 0,39: o plano aceita cerca de 39% dos lotes com 10% de defeitos, um risco alto para o comprador.\n\n0,12 é só P(X = 0). 0,27 é só P(X = 1). 0,61 é a probabilidade de rejeitar o lote, o poder do plano nesse caso. E 0,1 é a proporção de defeituosas.",
  },
  {
    materia: "estatistica",
    tema: "Erros do tipo I e do tipo II",
    dificuldade: "media",
    enunciado:
      "Se um pesquisador fixar α = 0, nunca aceitando o risco de erro do tipo I, qual será o poder do teste?",
    opcoes: [
      "0",
      "1",
      "0,5",
      "Igual a β",
      "Depende do tamanho da amostra",
    ],
    correta: 0,
    explicacao:
      "Com α = 0, a região crítica fica vazia: nenhum resultado, por mais extremo, leva à rejeição, porque qualquer valor tem alguma chance sob H0 numa distribuição contínua como a normal. Sem rejeições, o poder é zero, e β = 1: todo efeito real passa despercebido.\n\nPoder 1 exigiria rejeitar sempre. 0,5 não tem justificativa. O poder é 1 − β, e com β = 1 ele vale 0, e não β. E nem uma amostra enorme resolve, porque a regra nunca rejeita.",
  },
  {
    materia: "estatistica",
    tema: "Erros do tipo I e do tipo II",
    dificuldade: "dificil",
    enunciado:
      "Para testar H0: p = 0,5, rejeita-se H0 se saírem 8 ou mais sucessos em 10 ensaios. Se a probabilidade verdadeira de sucesso for 0,8, qual é o poder do teste?",
    opcoes: [
      "≈ 0,32",
      "0,8",
      "≈ 0,055",
      "≈ 0,68",
      "≈ 0,11",
    ],
    correta: 3,
    explicacao:
      "O poder é P(X ≥ 8) com X binomial de parâmetros 10 e 0,8: 45 · 0,8⁸ · 0,2² + 10 · 0,8⁹ · 0,2 + 0,8¹⁰ ≈ 0,302 + 0,268 + 0,107 ≈ 0,68. Mesmo com p verdadeiro bem acima de 0,5, o teste com só 10 ensaios deixa passar o efeito em cerca de 32% das vezes.\n\n0,32 é β. 0,8 é o p verdadeiro. 0,055 é α, a probabilidade de rejeitar com p = 0,5. E 0,11 é só P(X = 10).",
  },
  {
    materia: "estatistica",
    tema: "Erros do tipo I e do tipo II",
    dificuldade: "dificil",
    enunciado:
      "Um laboratório testa 1.000 hipóteses: em 900, H0 é verdadeira, e em 100, falsa. Com α = 5% e poder de 80%, que fração das rejeições, em média, é falsa?",
    opcoes: [
      "5%",
      "20%",
      "4,5%",
      "36%",
      "45%",
    ],
    correta: 3,
    explicacao:
      "Das 900 hipóteses nulas verdadeiras, espera-se rejeitar 5%, isto é, 45, todas erros do tipo I. Das 100 falsas, o poder de 80% leva a 80 rejeições corretas. Entre as 125 rejeições, 45 são falsas: 45/125 = 36%. Quando a maioria das hipóteses testadas não tem efeito, até um α de 5% gera muitas descobertas falsas.\n\n5% é a taxa de erro entre as H0 verdadeiras, e não entre as rejeições. 20% é β. 4,5% é 45 em 1.000 testes. E 45% lê a contagem de rejeições falsas como porcentagem.",
  },
  {
    materia: "estatistica",
    tema: "Erros do tipo I e do tipo II",
    dificuldade: "dificil",
    enunciado:
      "Deseja-se detectar, com teste bilateral a 5% (z = 1,96) e poder de 90% (z = 1,282), uma diferença de 5 unidades numa variável com σ = 20. Qual é o menor tamanho de amostra, aproximadamente?",
    opcoes: [
      "169",
      "62",
      "138",
      "126",
      "13",
    ],
    correta: 0,
    explicacao:
      "A fórmula é n = [(zα/2 + zβ) · σ/δ]² = [(1,96 + 1,282) · 20/5]² = (3,242 · 4)² ≈ 168,2, e arredonda-se para cima: 169. Detectar um efeito de só um quarto do desvio padrão, com poder alto, exige amostra grande.\n\n62 ignora zβ e garante só cerca de 50% de poder. 138 usa 1,645, de um teste unilateral. 126 corresponde a poder de 80%, com zβ = 0,842. E 13 esquece de elevar ao quadrado.",
  },
  {
    materia: "estatistica",
    tema: "Erros do tipo I e do tipo II",
    dificuldade: "dificil",
    enunciado:
      "Um pesquisador faz um teste bilateral a 5% com 50 observações e, se não rejeitar, coleta mais 50 e testa de novo com as 100, sempre com o valor crítico 1,96. Se H0 for verdadeira, qual é, aproximadamente, a probabilidade total de rejeitá-la?",
    opcoes: [
      "5%",
      "10%",
      "≈ 2,5%",
      "≈ 8%",
      "≈ 9,75%",
    ],
    correta: 3,
    explicacao:
      "As duas estatísticas são correlacionadas, porque a segunda usa as mesmas 50 observações da primeira, com correlação √(50/100) ≈ 0,71. A chance de pelo menos uma passar de 1,96 em valor absoluto fica em cerca de 8%: maior que os 5% nominais, mas menor que os 9,75% de dois testes independentes.\n\n5% ignora a segunda chance de rejeitar. 10% soma os dois α. 2,5% corta α pela metade. E 9,75% = 1 − 0,95² trataria as duas verificações como independentes.",
  },
  {
    materia: "estatistica",
    tema: "Erros do tipo I e do tipo II",
    dificuldade: "dificil",
    enunciado:
      "Um teste tem poder de 0,8 contra um efeito que realmente existe. Em 5 estudos independentes sobre esse efeito, qual é a probabilidade de pelo menos um deles não rejeitar H0?",
    opcoes: [
      "≈ 0,33",
      "≈ 0,67",
      "0,2",
      "1",
      "0,8",
    ],
    correta: 1,
    explicacao:
      "Cada estudo rejeita H0 com probabilidade 0,8, e os 5 rejeitam juntos com probabilidade 0,8⁵ ≈ 0,33. A chance de pelo menos um falhar, com erro do tipo II, é 1 − 0,33 ≈ 0,67. Resultados não significativos em parte dos estudos são esperados, mesmo quando o efeito é real.\n\n0,33 é a probabilidade de todos rejeitarem. 0,2 é β de um estudo. 1 exageraria: todos podem rejeitar. E 0,8 é o poder de um estudo isolado.",
  },
  {
    materia: "estatistica",
    tema: "Erros do tipo I e do tipo II",
    dificuldade: "dificil",
    enunciado:
      "Uma estatística tem distribuição normal padrão sob H0 e normal com média 3 e desvio padrão 1 sob H1. Rejeita-se H0 quando ela passa de um valor c. Em que valor de c as probabilidades dos dois erros ficam iguais, e quanto elas valem?",
    opcoes: [
      "Em 1,645, com α = 0,05",
      "Em 3, com β = 0,5",
      "Em 1,5, com α = β ≈ 0,067",
      "Em 0, com α = 0,5",
      "Em 1,5, com α = β = 0,5",
    ],
    correta: 2,
    explicacao:
      "α = P(Z > c) sob H0 e β = P(X < c) sob H1, com X de média 3. Pela simetria das duas normais, os erros se igualam no ponto médio entre as médias, c = 1,5: α = P(Z > 1,5) ≈ 0,067 e β = P(X < 1,5) = P(Z < −1,5) ≈ 0,067.\n\nc = 1,645 dá α = 0,05, mas β ≈ 0,09, diferente. c = 3 deixa β = 0,5. c = 0 deixa α = 0,5. E, em c = 1,5, os erros valem cerca de 0,067, e não 0,5.",
  },
  {
    materia: "estatistica",
    tema: "Erros do tipo I e do tipo II",
    dificuldade: "dificil",
    enunciado:
      "Dois grupos de 50 pessoas são comparados num teste bilateral a 5%, e a diferença verdadeira entre as médias é de 0,2 desvio padrão. Usando Φ(−0,96) ≈ 0,169, qual é, aproximadamente, o poder do teste?",
    opcoes: [
      "≈ 50%",
      "≈ 17%",
      "≈ 80%",
      "5%",
      "≈ 84%",
    ],
    correta: 1,
    explicacao:
      "O erro padrão da diferença, em desvios padrão, é √(1/50 + 1/50) = 0,2, e a diferença verdadeira fica a 0,2/0,2 = 1 erro padrão de zero. O poder é P(Z > 1,96 − 1) + P(Z < −1,96 − 1) ≈ Φ(−0,96) + Φ(−2,96) ≈ 0,169 + 0,002 ≈ 17%. Com efeito pequeno e 50 pessoas por grupo, o estudo quase sempre deixa passar o efeito.\n\n50% é o poder quando o efeito fica exatamente no valor crítico. 80% é a meta usual, que exigiria cerca de 400 pessoas por grupo. 5% é α. E 84% é Φ(1), que esquece o valor crítico.",
  },
  {
    materia: "estatistica",
    tema: "Erros do tipo I e do tipo II",
    dificuldade: "dificil",
    enunciado:
      "A correção de Bonferroni, ao dividir α pelo número de testes, tem que efeito sobre o poder de cada teste?",
    opcoes: [
      "Não afeta o poder",
      "Aumenta o poder",
      "Zera o erro do tipo II",
      "Reduz o poder de cada teste",
      "Só afeta testes unilaterais",
    ],
    correta: 3,
    explicacao:
      "Com α menor em cada teste, a região crítica encolhe, e cada teste precisa de evidência mais forte para rejeitar. Isso controla o erro do tipo I do conjunto, mas aumenta β de cada teste. Com 10 testes, passar de α = 0,05 para 0,005 reduz, por exemplo, o poder contra um efeito de 3 erros padrão de cerca de 0,85 para cerca de 0,58 num teste bilateral.\n\nO poder é afetado, e diminui. Ele não aumenta. O erro do tipo II não some; fica maior. E o efeito vale para testes unilaterais e bilaterais.",
  },
  {
    materia: "estatistica",
    tema: "Erros do tipo I e do tipo II",
    dificuldade: "dificil",
    enunciado:
      "Numa população de 10.000 pessoas com 1% de doentes, um exame de triagem tem 5% de falsos positivos entre os sadios e detecta 90% dos doentes. Quantos falsos negativos e quantos falsos positivos se esperam?",
    opcoes: [
      "90 falsos negativos e 500 falsos positivos",
      "10 falsos negativos e 5 falsos positivos",
      "10 falsos negativos e 495 falsos positivos",
      "495 falsos negativos e 10 falsos positivos",
      "1 falso negativo e 50 falsos positivos",
    ],
    correta: 2,
    explicacao:
      "Há 100 doentes e 9.900 sadios. O exame detecta 90% dos doentes, e os 10% restantes, 10 pessoas, são falsos negativos, os erros do tipo II para H0: pessoa sadia. Entre os sadios, 5% dão positivo: 495 falsos positivos, os erros do tipo I. Com a doença rara, os falsos positivos superam muito os verdadeiros positivos, 90.\n\n90 é o número de doentes detectados, e 500 aplica 5% à população inteira. 5 falsos positivos aplicaria 5% aos doentes. A outra alternativa troca as duas contagens. E 1 e 50 usam 1% e 0,5%, sem base nos dados.",
  },
  {
    materia: "estatistica",
    tema: "Erros do tipo I e do tipo II",
    dificuldade: "dificil",
    enunciado:
      "Num teste bilateral para a média, com distribuição normal, como se comparam os poderes para os valores verdadeiros μ0 + δ e μ0 − δ?",
    opcoes: [
      "É maior para μ0 + δ",
      "São iguais",
      "É maior para μ0 − δ",
      "São zero nos dois casos",
      "São iguais a α nos dois casos",
    ],
    correta: 1,
    explicacao:
      "A região crítica do teste bilateral é simétrica em torno de μ0, e a distribuição da estatística também. Deslocar a média verdadeira δ para cima ou δ para baixo produz situações espelhadas, e o poder é o mesmo nos dois casos. É isso que torna o teste bilateral adequado quando qualquer direção de diferença interessa.\n\nNenhum dos lados é favorecido no teste bilateral. O poder não é zero, porque há efeito. E ele só vale α quando δ = 0.",
  },
];
