/* Correlação e regressão linear (50 questões) — estatistica.

   Autorais, escritas por Claude (Anthropic) em 2026-09-30 seguindo as cinco
   regras de CONTINUAR-MATERIAS-POR-OBJETIVO.md. Nenhuma é atribuída a banca
   ou a prova real.

   Conferência do gabarito: 50 de 50 recalculadas por código que chega à
   resposta por outro caminho (ver .rascunho/questoes-objetivo/estatistica__correlacao-e-regressao-linear.mjs);
   nenhuma ficou sem conferência em código.

   Montado por scripts/montar-questoes-objetivo.mjs; gabarito redistribuído
   por scripts/rebalancear-gabarito.mjs. Relatório em
   _relatorios/estatistica__correlacao-e-regressao-linear.json. */

export const questoes = [
  {
    materia: "estatistica",
    tema: "Correlação e regressão linear",
    dificuldade: "facil",
    enunciado:
      "Qual destes valores não pode ser um coeficiente de correlação de Pearson?",
    opcoes: [
      "−0,9",
      "0",
      "1",
      "1,2",
      "−1",
    ],
    correta: 3,
    explicacao:
      "O coeficiente de correlação de Pearson fica sempre entre −1 e 1: é uma medida padronizada, sem unidade, que atinge ±1 só quando os pontos estão exatamente sobre uma reta. A limitação vem da desigualdade de Cauchy-Schwarz: a covariância nunca passa do produto dos desvios padrão. Um valor de 1,2 é impossível e indicaria erro de conta.\n\n−0,9 indica associação linear negativa forte. 0 indica ausência de associação linear. 1 corresponde a pontos alinhados numa reta crescente, e −1, numa reta decrescente.",
  },
  {
    materia: "estatistica",
    tema: "Correlação e regressão linear",
    dificuldade: "facil",
    enunciado:
      "Entre estudantes, a correlação entre horas diárias de televisão e nota média foi r = −0,8. O que esse valor indica?",
    opcoes: [
      "Associação linear forte e negativa",
      "Associação linear fraca",
      "Que a televisão causa notas baixas",
      "Associação linear positiva",
      "Nenhuma associação",
    ],
    correta: 0,
    explicacao:
      "O sinal negativo indica que, em geral, mais horas de televisão acompanham notas menores, e o módulo 0,8, próximo de 1, indica que os pontos ficam bem perto de uma reta decrescente: uma associação linear forte e negativa.\n\nUm |r| de 0,8 não é fraco. Correlação não demonstra causa: outros fatores, como o tempo de estudo, podem explicar os dois comportamentos. O sinal é negativo, e não positivo. E r = −0,8 está longe de indicar ausência de associação.",
  },
  {
    materia: "estatistica",
    tema: "Correlação e regressão linear",
    dificuldade: "facil",
    enunciado:
      "A reta de regressão ajustada a um conjunto de dados é ŷ = 2 + 3x. Qual é o valor previsto de y para x = 4?",
    opcoes: [
      "20",
      "14",
      "9",
      "12",
      "5",
    ],
    correta: 1,
    explicacao:
      "Basta substituir x = 4 na equação: ŷ = 2 + 3 · 4 = 2 + 12 = 14. O intercepto 2 é o valor previsto para x = 0, e cada unidade a mais em x soma 3 à previsão. A previsão é uma média estimada: pontos reais com x = 4 costumam ficar acima ou abaixo de 14, a distâncias que são os resíduos.\n\n20 soma 2 e 3 antes de multiplicar por 4. 9 soma os três números. 12 esquece o intercepto. E 5 é o valor previsto para x = 1.",
  },
  {
    materia: "estatistica",
    tema: "Correlação e regressão linear",
    dificuldade: "facil",
    enunciado:
      "Numa turma, a reta ŷ = 50 + 2,5x relaciona horas semanais de estudo, x, com a nota prevista, y. O que significa o número 2,5?",
    opcoes: [
      "Cada hora a mais eleva a nota prevista em 2,5",
      "A nota de quem não estuda é 2,5",
      "A nota máxima é 2,5",
      "A correlação entre as variáveis é 2,5",
      "O erro das previsões é 2,5",
    ],
    correta: 0,
    explicacao:
      "A inclinação é a variação da nota prevista para cada unidade a mais em x: comparando alunos com uma hora de diferença de estudo semanal, a reta prevê 2,5 pontos a mais para o que estuda mais. É uma relação média, e não uma garantia para cada aluno.\n\nA nota prevista para quem não estuda é o intercepto, 50. A reta não fixa nota máxima. A correlação fica entre −1 e 1 e não pode valer 2,5. E o erro das previsões é medido pelos resíduos, e não pela inclinação.",
  },
  {
    materia: "estatistica",
    tema: "Correlação e regressão linear",
    dificuldade: "facil",
    enunciado:
      "O custo de produção de um lote é estimado por C = 200 + 15n, em reais, em que n é o número de peças. O que representa o número 200?",
    opcoes: [
      "O custo de cada peça",
      "O número de peças do lote",
      "O custo de 15 peças",
      "O custo previsto sem nenhuma peça",
      "A correlação entre custo e peças",
    ],
    correta: 3,
    explicacao:
      "O intercepto é o valor previsto quando a variável explicativa vale zero: com n = 0, C = 200. Na prática, representa um custo fixo, que não depende da quantidade produzida, como o aluguel de uma máquina. Cada peça a mais acrescenta R$ 15.\n\nO custo de cada peça é a inclinação, 15. n é o número de peças, e não 200. O custo de 15 peças seria 200 + 15 · 15 = 425. E 200 não é uma correlação, que ficaria entre −1 e 1.",
  },
  {
    materia: "estatistica",
    tema: "Correlação e regressão linear",
    dificuldade: "facil",
    enunciado:
      "Em várias cidades, o número de sorvetes vendidos e o de afogamentos em praias sobem e descem juntos, com correlação alta. Qual é a interpretação mais adequada?",
    opcoes: [
      "Tomar sorvete causa afogamentos",
      "Afogamentos aumentam a venda de sorvetes",
      "A correlação alta prova uma relação de causa",
      "Um fator comum, como o calor, pode explicar as duas",
      "A correlação deve ser um erro de cálculo",
    ],
    correta: 3,
    explicacao:
      "Uma terceira variável pode explicar a correlação: em dias quentes, vende-se mais sorvete e mais gente vai à praia, e por isso há mais afogamentos. Sorvete e afogamento variam juntos sem que um cause o outro. Correlação indica associação, e não causa.\n\nNem o sorvete causa afogamentos, nem os afogamentos aumentam a venda de sorvetes. Uma correlação alta, sozinha, não prova causa. E a correlação pode estar correta: ela só precisa ser bem interpretada.",
  },
  {
    materia: "estatistica",
    tema: "Correlação e regressão linear",
    dificuldade: "facil",
    enunciado:
      "Numa regressão linear simples, o coeficiente de correlação foi r = 0,9. Que fração da variação de y é explicada pela reta?",
    opcoes: [
      "90%",
      "19%",
      "10%",
      "95%",
      "81%",
    ],
    correta: 4,
    explicacao:
      "A fração explicada é o coeficiente de determinação, r² = 0,9² = 0,81: a reta explica 81% da variação de y em torno de sua média, e os resíduos ficam com os 19% restantes. Mesmo uma correlação alta deixa parte da variação sem explicação.\n\n90% usa r, e não r². 19% é a parte não explicada, 1 − r². 10% é 1 − r. E 95% usa a raiz de r, em vez do quadrado.",
  },
  {
    materia: "estatistica",
    tema: "Correlação e regressão linear",
    dificuldade: "facil",
    enunciado:
      "A reta de regressão de mínimos quadrados, com intercepto, passa sempre por qual ponto?",
    opcoes: [
      "A origem, (0, 0)",
      "O primeiro ponto dos dados",
      "O ponto das médias, (x̄, ȳ)",
      "O ponto de maior valor de y",
      "O ponto (0, ȳ)",
    ],
    correta: 2,
    explicacao:
      "O intercepto de mínimos quadrados é a = ȳ − b · x̄, e substituindo x = x̄ na reta: ŷ = a + b · x̄ = ȳ. A reta passa sempre pelo ponto das médias, qualquer que seja a inclinação. Por isso a soma dos resíduos é zero.\n\nA origem só está na reta por coincidência, quando a = 0. A reta não precisa passar por nenhum ponto dos dados. O ponto de maior y também não tem papel especial. E (0, ȳ) só está na reta se a inclinação for zero ou se x̄ = 0.",
  },
  {
    materia: "estatistica",
    tema: "Correlação e regressão linear",
    dificuldade: "facil",
    enunciado:
      "Os pontos (1, 2), (2, 4), (3, 6) e (4, 8) estão num plano cartesiano. Qual é o coeficiente de correlação de Pearson entre x e y?",
    opcoes: [
      "2",
      "0",
      "−1",
      "0,5",
      "1",
    ],
    correta: 4,
    explicacao:
      "Os quatro pontos estão exatamente sobre a reta crescente y = 2x. Quando todos os pontos ficam numa reta de inclinação positiva, a correlação atinge o máximo, r = 1, qualquer que seja a inclinação.\n\n2 é a inclinação da reta, e não a correlação, que nunca passa de 1. 0 indicaria ausência de associação linear. −1 exigiria uma reta decrescente. E 0,5 é o inverso da inclinação.",
  },
  {
    materia: "estatistica",
    tema: "Correlação e regressão linear",
    dificuldade: "facil",
    enunciado:
      "Numa regressão, x é o peso, em kg, e y é a altura, em cm. Em que unidade se mede a inclinação da reta?",
    opcoes: [
      "kg por cm",
      "cm",
      "kg",
      "cm por kg",
      "Não tem unidade",
    ],
    correta: 3,
    explicacao:
      "A inclinação é a variação de y por unidade de x: quantos centímetros a altura prevista muda para cada quilograma a mais. Sua unidade é, portanto, cm por kg. O intercepto, por sua vez, fica em cm, a unidade de y.\n\nkg por cm inverte a razão. cm é a unidade do intercepto e das previsões. kg é a unidade de x. E quem não tem unidade é o coeficiente de correlação, e não a inclinação.",
  },
  {
    materia: "estatistica",
    tema: "Correlação e regressão linear",
    dificuldade: "facil",
    enunciado:
      "Mudando a medida da altura de centímetros para metros, o que acontece com a correlação entre altura e peso?",
    opcoes: [
      "Fica 100 vezes menor",
      "Não muda",
      "Fica 100 vezes maior",
      "Muda de sinal",
      "Passa a valer 1",
    ],
    correta: 1,
    explicacao:
      "A correlação é calculada com as variáveis padronizadas, e padronizar elimina as unidades: dividir todas as alturas por 100 divide também a média e o desvio padrão por 100, e os escores z ficam iguais. Por isso r não muda com mudanças de escala positivas nem com a soma de constantes.\n\nr não é multiplicado nem dividido por 100. O sinal só mudaria se a escala fosse invertida, multiplicando por um número negativo. E a correlação não vira 1 por causa de uma mudança de unidade.",
  },
  {
    materia: "estatistica",
    tema: "Correlação e regressão linear",
    dificuldade: "facil",
    enunciado:
      "A reta ajustada é ŷ = 3 + 3x. Qual é o resíduo do ponto observado (5, 20)?",
    opcoes: [
      "−2",
      "18",
      "20",
      "3",
      "2",
    ],
    correta: 4,
    explicacao:
      "O resíduo é o valor observado menos o previsto: e = y − ŷ. Para x = 5, ŷ = 3 + 3 · 5 = 18, e o resíduo é 20 − 18 = 2. O ponto fica 2 unidades acima da reta. Resíduos positivos indicam pontos acima da reta; negativos, pontos abaixo; e, no ajuste por mínimos quadrados, eles somam zero.\n\n−2 inverte a subtração, ŷ − y. 18 é o valor previsto. 20 é o valor observado. E 3 é o intercepto, que também é a inclinação desta reta.",
  },
  {
    materia: "estatistica",
    tema: "Correlação e regressão linear",
    dificuldade: "media",
    enunciado:
      "Para os pontos (1, 2), (2, 1), (3, 4), (4, 3) e (5, 7), qual é, aproximadamente, o coeficiente de correlação de Pearson?",
    opcoes: [
      "1,2",
      "≈ 0,82",
      "≈ 0,68",
      "12",
      "≈ 0,57",
    ],
    correta: 1,
    explicacao:
      "Com x̄ = 3 e ȳ = 3,4, as somas de produtos são Sxy = Σ(x − x̄)(y − ȳ) = 12, Sxx = 10 e Syy = 21,2. Então r = Sxy/√(Sxx · Syy) = 12/√212 ≈ 0,82: associação linear positiva e forte. A divisão por √(Sxx · Syy) padroniza a medida e elimina as unidades.\n\n1,2 = Sxy/Sxx é a inclinação da reta, e não a correlação. 0,68 é r², a fração explicada. 12 é a soma dos produtos, sem padronizar. E 0,57 = Sxy/Syy é a inclinação da regressão de x em y.",
  },
  {
    materia: "estatistica",
    tema: "Correlação e regressão linear",
    dificuldade: "media",
    enunciado:
      "Num estudo, x tem média 10 e desvio padrão 2, y tem média 30 e desvio padrão 5, e a correlação é 0,6. Qual é a reta de regressão de y em x?",
    opcoes: [
      "ŷ = 24 + 0,6x",
      "ŷ = 30 + 1,5x",
      "ŷ = 15 + 1,5x",
      "ŷ = 27,6 + 0,24x",
      "ŷ = 10 + 1,5x",
    ],
    correta: 2,
    explicacao:
      "A inclinação é b = r · sy/sx = 0,6 · 5/2 = 1,5, e o intercepto é a = ȳ − b · x̄ = 30 − 1,5 · 10 = 15. A reta ŷ = 15 + 1,5x passa pelo ponto das médias, (10, 30), como deve.\n\n24 + 0,6x usa a própria correlação como inclinação. 30 + 1,5x usa ȳ como intercepto, e a reta não passaria por (10, 30). 27,6 + 0,24x inverte a razão dos desvios, r · sx/sy. E 10 + 1,5x usa x̄ como intercepto.",
  },
  {
    materia: "estatistica",
    tema: "Correlação e regressão linear",
    dificuldade: "media",
    enunciado:
      "Qual critério define a reta de regressão de mínimos quadrados?",
    opcoes: [
      "Anular a soma dos resíduos",
      "Minimizar a soma dos quadrados dos resíduos verticais",
      "Minimizar as distâncias perpendiculares à reta",
      "Minimizar o maior resíduo",
      "Passar pelo maior número de pontos",
    ],
    correta: 1,
    explicacao:
      "A reta de mínimos quadrados escolhe a e b que tornam mínima a soma dos quadrados dos resíduos, Σ(y − ŷ)², medidos na vertical, na direção de y. Elevar ao quadrado impede que resíduos positivos e negativos se cancelem e dá peso maior aos grandes erros.\n\nAnular a soma dos resíduos não basta: qualquer reta que passe pelo ponto das médias faz isso. Distâncias perpendiculares definem outro método, que trata x e y de forma simétrica. Minimizar o maior resíduo é outro critério. E a reta pode não passar por ponto nenhum.",
  },
  {
    materia: "estatistica",
    tema: "Correlação e regressão linear",
    dificuldade: "media",
    enunciado:
      "Numa regressão linear simples com intercepto, ajustada por mínimos quadrados, quanto vale a soma dos resíduos?",
    opcoes: [
      "1",
      "O número de pontos",
      "A soma dos quadrados dos resíduos",
      "Depende dos dados",
      "0",
    ],
    correta: 4,
    explicacao:
      "Uma das equações que definem o ajuste é Σ(y − a − bx) = 0, obtida ao derivar a soma dos quadrados em relação ao intercepto. Por isso os resíduos positivos e negativos se compensam exatamente, e a soma é zero em qualquer conjunto de dados, o que equivale à reta passar pelo ponto das médias.\n\n1 e o número de pontos não têm justificativa. A soma dos quadrados é positiva, e não a soma simples. E o resultado não depende dos dados, desde que o modelo tenha intercepto.",
  },
  {
    materia: "estatistica",
    tema: "Correlação e regressão linear",
    dificuldade: "media",
    enunciado:
      "Os pontos (−2, 4), (−1, 1), (0, 0), (1, 1) e (2, 4) seguem exatamente a relação y = x². Quanto vale o coeficiente de correlação de Pearson entre x e y?",
    opcoes: [
      "1, pois y depende de x",
      "0, embora haja uma relação exata",
      "−1",
      "0,5",
      "Não é possível calcular",
    ],
    correta: 1,
    explicacao:
      "Com x̄ = 0 e ȳ = 2, os produtos (x − x̄)(y − ȳ) são (−2)(2), (−1)(−1), 0, (1)(−1) e (2)(2): −4 + 1 + 0 − 1 + 4 = 0. A correlação é zero, embora y seja função exata de x. O coeficiente de Pearson mede só associação linear, e a parábola simétrica não tem tendência linear.\n\nr = 1 exigiria uma relação linear crescente, e −1, linear decrescente. 0,5 não sai da conta. E o cálculo é possível, porque x e y variam.",
  },
  {
    materia: "estatistica",
    tema: "Correlação e regressão linear",
    dificuldade: "media",
    enunciado:
      "Os pontos (1, 1), (2, 2), (3, 3) e (4, 4) têm correlação r = 1. Se for acrescentado o ponto (5, −10), o que acontece com r?",
    opcoes: [
      "Continua igual a 1",
      "Cai só um pouco, para cerca de 0,9",
      "Vira exatamente 0",
      "Passa a ser negativo, cerca de −0,55",
      "Não se altera, pois é um ponto só",
    ],
    correta: 3,
    explicacao:
      "Com o novo ponto, x̄ = 3 e ȳ = 0. A soma dos produtos passa a Sxy = −20, com Sxx = 10 e Syy = 130, e r = −20/√1.300 ≈ −0,55. Um único ponto muito afastado inverteu o sinal da correlação: r é muito sensível a valores atípicos.\n\nr deixa de ser 1, porque os pontos não estão mais alinhados. A queda é muito maior que para 0,9. O valor não é exatamente 0. E um único ponto discrepante pode dominar a conta, como aqui.",
  },
  {
    materia: "estatistica",
    tema: "Correlação e regressão linear",
    dificuldade: "media",
    enunciado:
      "A regressão de y em x deu ŷ = 2 + 0,5x, com correlação 0,6. Para prever x a partir de y, basta isolar x nessa equação?",
    opcoes: [
      "Sim: x = 2y − 4",
      "Sim, sempre que r for positivo",
      "Só se r for 0",
      "Só se as médias forem zero",
      "Não: a regressão de x em y é outra reta",
    ],
    correta: 4,
    explicacao:
      "A regressão de y em x minimiza os erros verticais, na direção de y; a de x em y minimiza os erros horizontais. As duas inclinações satisfazem b(y em x) · b(x em y) = r², e só descrevem a mesma reta quando r = ±1. Aqui, isolar x daria inclinação 2, mas a regressão de x em y tem inclinação r²/0,5 = 0,72.\n\nx = 2y − 4 é a inversão algébrica, que só vale com correlação perfeita. O sinal positivo não resolve. Com r = 0, as duas retas ficam perpendiculares. E médias nulas não tornam as retas iguais.",
  },
  {
    materia: "estatistica",
    tema: "Correlação e regressão linear",
    dificuldade: "media",
    enunciado:
      "Numa regressão linear simples, a correlação entre x e y é 0,6. Que fração da variação de y a reta deixa sem explicar?",
    opcoes: [
      "40%",
      "36%",
      "60%",
      "16%",
      "64%",
    ],
    correta: 4,
    explicacao:
      "A reta explica r² = 0,6² = 0,36, ou 36% da variação de y, e a parte não explicada é 1 − r² = 0,64, ou 64%, que fica nos resíduos. Uma correlação de 0,6 parece razoável, mas a reta deixa a maior parte da variação sem explicação.\n\n40% é 1 − r, sem elevar ao quadrado. 36% é a parte explicada. 60% é o próprio r. E 16% eleva 1 − r ao quadrado.",
  },
  {
    materia: "estatistica",
    tema: "Correlação e regressão linear",
    dificuldade: "media",
    enunciado:
      "A correlação entre as alturas de pais e de filhos adultos é 0,5, com médias e desvios padrão iguais nas duas gerações. Para pais 2 desvios padrão acima da média, qual é a altura prevista dos filhos?",
    opcoes: [
      "1 desvio padrão acima da média",
      "2 desvios padrão acima da média",
      "0,5 desvio padrão acima da média",
      "Exatamente na média",
      "4 desvios padrão acima da média",
    ],
    correta: 0,
    explicacao:
      "Em unidades padronizadas, a reta de regressão é ẑy = r · zx. Com zx = 2 e r = 0,5, a previsão é ẑy = 1: os filhos de pais muito altos tendem a ser altos, mas menos extremos. É a regressão à média, que aparece sempre que a correlação não é perfeita.\n\n2 desvios padrão exigiria r = 1. 0,5 desvio é o próprio r, sem multiplicar por 2. Na média exigiria r = 0. E 4 desvios padrão multiplicaria em vez de reduzir.",
  },
  {
    materia: "estatistica",
    tema: "Correlação e regressão linear",
    dificuldade: "media",
    enunciado:
      "Uma reta ajustada a crianças de 2 a 10 anos relaciona idade e altura. Aplicada a um adulto de 40 anos, ela prevê cerca de 250 cm. Qual é o problema?",
    opcoes: [
      "Extrapolou muito além dos dados usados",
      "A correlação deveria ser negativa",
      "A inclinação deveria ser zero",
      "O intercepto foi calculado errado",
      "Nenhum: a reta vale para qualquer idade",
    ],
    correta: 0,
    explicacao:
      "A reta descreve a relação só na faixa observada, de 2 a 10 anos, em que o crescimento é aproximadamente linear. Aos 40 anos, fora dessa faixa, o crescimento já parou, e a relação linear não vale mais. Usar a reta tão longe dos dados é extrapolar.\n\nNa infância, altura e idade crescem juntas, e a correlação é positiva. Uma inclinação zero contrariaria os dados. O intercepto pode estar certo para a faixa estudada. E nenhuma reta ajustada vale automaticamente fora da faixa dos dados.",
  },
  {
    materia: "estatistica",
    tema: "Correlação e regressão linear",
    dificuldade: "media",
    enunciado:
      "Qual é a reta de mínimos quadrados para os pontos (1, 3), (2, 5), (3, 6) e (4, 10)?",
    opcoes: [
      "ŷ = 6 + 2,2x",
      "ŷ = 0,67 + 2,33x",
      "ŷ = 4,94 + 0,42x",
      "ŷ = 0,5 + 2,2x",
      "ŷ = −0,88 + 2,75x",
    ],
    correta: 3,
    explicacao:
      "Com x̄ = 2,5 e ȳ = 6: Sxy = (−1,5)(−3) + (−0,5)(−1) + (0,5)(0) + (1,5)(4) = 11 e Sxx = 5. A inclinação é b = 11/5 = 2,2, e o intercepto, a = 6 − 2,2 · 2,5 = 0,5. Conferindo: a reta passa por (2,5; 6).\n\n6 + 2,2x usa ȳ como intercepto. 0,67 + 2,33x passa pelos pontos extremos, (1, 3) e (4, 10), sem usar os do meio. 4,94 + 0,42x usa Sxy/Syy, a inclinação da regressão de x em y. E −0,88 + 2,75x divide Sxy por n, e não por Sxx.",
  },
  {
    materia: "estatistica",
    tema: "Correlação e regressão linear",
    dificuldade: "media",
    enunciado:
      "Numa regressão linear simples, a inclinação da reta de mínimos quadrados é negativa. O que se pode afirmar sobre o coeficiente de correlação?",
    opcoes: [
      "r é positivo",
      "r é zero",
      "r é negativo",
      "r é exatamente −1",
      "Nada se pode afirmar",
    ],
    correta: 2,
    explicacao:
      "A inclinação é b = r · sy/sx, e os desvios padrão são positivos. Então b e r têm sempre o mesmo sinal: inclinação negativa implica r negativo, e vice-versa. O valor de r, porém, pode estar em qualquer ponto entre −1 e 0.\n\nr positivo daria inclinação positiva. r = 0 daria inclinação zero. r = −1 exigiria pontos exatamente alinhados, o que a inclinação sozinha não garante. E o sinal, pelo menos, fica determinado.",
  },
  {
    materia: "estatistica",
    tema: "Correlação e regressão linear",
    dificuldade: "media",
    enunciado:
      "Se cada valor de y for substituído por 10 − 2y, o que acontece com a correlação entre x e y?",
    opcoes: [
      "Muda de sinal e mantém o valor absoluto",
      "Não muda",
      "Fica duas vezes maior",
      "Fica igual a −2 vezes o valor original",
      "Vira zero",
    ],
    correta: 0,
    explicacao:
      "Somar uma constante não altera a correlação, e multiplicar por um número positivo também não. Multiplicar por −2 inverte a ordem dos valores de y: pontos antes acima da média ficam abaixo. Os escores z de y trocam de sinal, e r também, mantendo o mesmo valor absoluto.\n\nA correlação muda, sim, de sinal. O fator 2 não aparece em r, que não depende da escala. −2 vezes r poderia passar de 1 em valor absoluto, o que é impossível. E a associação linear continua tão forte quanto antes.",
  },
  {
    materia: "estatistica",
    tema: "Correlação e regressão linear",
    dificuldade: "media",
    enunciado:
      "Numa faculdade, a correlação entre a nota de ingresso e o desempenho no curso foi calculada apenas entre os aprovados. Como ela tende a se comparar com a correlação que se obteria com todos os candidatos?",
    opcoes: [
      "Maior, pela faixa restrita de notas",
      "Igual",
      "Sempre negativa",
      "Exatamente zero",
      "Menor, pela faixa restrita de notas",
    ],
    correta: 4,
    explicacao:
      "Os aprovados formam uma faixa estreita de notas de ingresso. Com pouca variação em x, a parte da variação de y ligada a x encolhe, enquanto a variação individual continua, e a correlação cai. Esse efeito de restrição de faixa faz a nota de ingresso parecer menos útil do que é.\n\nA restrição não aumenta r, e em geral não o deixa igual. O sinal não precisa mudar. E r não vai exatamente a zero, a não ser em casos extremos.",
  },
  {
    materia: "estatistica",
    tema: "Correlação e regressão linear",
    dificuldade: "media",
    enunciado:
      "Numa amostra de 18 pares, a correlação foi r = 0,5. No teste de H0: ρ = 0, bilateral a 5%, com t crítico 2,120 para 16 graus de liberdade, qual é o resultado?",
    opcoes: [
      "t = 2; a correlação não é significativa",
      "t = 0,5; a correlação não é significativa",
      "t = 8; a correlação é significativa",
      "t ≈ 2,45; a correlação é significativa",
      "t ≈ 2,31 > 2,120; a correlação é significativa",
    ],
    correta: 4,
    explicacao:
      "A estatística é t = r · √(n − 2)/√(1 − r²) = 0,5 · √16/√0,75 = 2/0,866 ≈ 2,31, com n − 2 = 16 graus de liberdade. Como 2,31 > 2,120, rejeita-se ρ = 0: há evidência de correlação na população.\n\nt = 2 esquece o denominador √(1 − r²). t = 0,5 usa o próprio r como estatística. t = 8 multiplica r por n − 2, sem a raiz. E 2,45 usa n = 18 no lugar de n − 2 = 16.",
  },
  {
    materia: "estatistica",
    tema: "Correlação e regressão linear",
    dificuldade: "media",
    enunciado:
      "O gráfico dos resíduos de uma regressão linear contra x mostra um padrão em forma de U: resíduos positivos nas pontas e negativos no meio. O que isso indica?",
    opcoes: [
      "Que o ajuste é perfeito",
      "Que a correlação é 1",
      "Que os dados não têm erro",
      "Que a inclinação é zero",
      "Que a relação entre x e y não é linear",
    ],
    correta: 4,
    explicacao:
      "Num bom ajuste linear, os resíduos se espalham sem padrão em torno de zero. Um U indica curvatura: a reta passa acima dos pontos no meio e abaixo deles nas pontas, sinal de que a relação é curva, como uma parábola. Um modelo com termo quadrático ou uma transformação das variáveis pode ser mais adequado.\n\nUm ajuste perfeito teria todos os resíduos iguais a zero. Com resíduos sistemáticos, r não é 1. O padrão fala do modelo, e não de erros de medida. E a inclinação pode ser diferente de zero mesmo com curvatura.",
  },
  {
    materia: "estatistica",
    tema: "Correlação e regressão linear",
    dificuldade: "media",
    enunciado:
      "Numa regressão, a soma dos quadrados total de y é 200, e a soma dos quadrados dos resíduos é 50. Qual é o coeficiente de determinação R²?",
    opcoes: [
      "0,25",
      "4",
      "0,75",
      "150",
      "≈ 0,87",
    ],
    correta: 2,
    explicacao:
      "R² = 1 − SQres/SQtot = 1 − 50/200 = 0,75: a reta explica 75% da variação de y. A parte explicada é 200 − 50 = 150, e 150/200 = 0,75 dá o mesmo. Na regressão simples, R² coincide com o quadrado do coeficiente de correlação.\n\n0,25 é a fração não explicada. 4 inverte a razão, 200/50. 150 é a soma de quadrados explicada, sem dividir pela total. E 0,87 é a raiz de 0,75, que corresponde ao valor absoluto de r.",
  },
  {
    materia: "estatistica",
    tema: "Correlação e regressão linear",
    dificuldade: "media",
    enunciado:
      "Numa regressão linear simples, R² = 0,49 e a inclinação da reta é negativa. Qual é o coeficiente de correlação?",
    opcoes: [
      "0,7",
      "0,49",
      "−0,49",
      "−0,7",
      "0,24",
    ],
    correta: 3,
    explicacao:
      "Na regressão simples, R² = r², e então |r| = √0,49 = 0,7. O sinal de r é o mesmo da inclinação: como ela é negativa, r = −0,7. Conhecer só R² nunca basta para o sinal: é a inclinação, ou o gráfico, que diz se a associação é crescente ou decrescente.\n\n0,7 ignora o sinal da inclinação. 0,49 e −0,49 são o próprio R², sem tirar a raiz. E 0,24 eleva 0,49 ao quadrado de novo.",
  },
  {
    materia: "estatistica",
    tema: "Correlação e regressão linear",
    dificuldade: "media",
    enunciado:
      "Uma reta de regressão prevê ŷ = 70 para x = 5. O que esse valor representa?",
    opcoes: [
      "O valor exato de todo y com x = 5",
      "O maior valor possível de y com x = 5",
      "A média estimada de y quando x = 5",
      "A correlação entre x e y",
      "O resíduo do ponto com x = 5",
    ],
    correta: 2,
    explicacao:
      "A reta estima a média de y para cada valor de x. Indivíduos com x = 5 têm valores de y espalhados em torno de 70, alguns acima e outros abaixo, e as distâncias até a reta são os resíduos. Quanto menor a dispersão dos pontos em torno da reta, mais próximos de 70 ficam os valores individuais.\n\nNem todo y com x = 5 vale 70: há variação individual. 70 não é um máximo. A correlação é um número entre −1 e 1, que não se confunde com uma previsão. E o resíduo é a diferença entre o observado e o previsto, e não o previsto.",
  },
  {
    materia: "estatistica",
    tema: "Correlação e regressão linear",
    dificuldade: "media",
    enunciado:
      "Uma regressão do peso, em kg, sobre a altura, em cm, deu inclinação de 0,9 kg por cm. Se a altura for medida em metros, qual passa a ser a inclinação?",
    opcoes: [
      "0,009 kg por metro",
      "0,9 kg por metro",
      "90 kg por metro",
      "9 kg por metro",
      "900 kg por metro",
    ],
    correta: 2,
    explicacao:
      "Um metro tem 100 centímetros, e subir um metro na altura equivale a subir 100 cm. A variação prevista no peso é, portanto, 100 vezes maior por unidade de x: 0,9 · 100 = 90 kg por metro. O ajuste é o mesmo; só a unidade da inclinação mudou.\n\n0,009 divide por 100 em vez de multiplicar. 0,9 ignora a mudança de unidade. 9 e 900 usam fatores 10 e 1.000, que não correspondem à conversão entre centímetros e metros.",
  },
  {
    materia: "estatistica",
    tema: "Correlação e regressão linear",
    dificuldade: "media",
    enunciado:
      "Numa tabela, cada valor de y é calculado exatamente como y = 50 − 3x, para vários valores diferentes de x. Qual é o coeficiente de correlação entre x e y?",
    opcoes: [
      "−3",
      "1",
      "0",
      "−1",
      "50",
    ],
    correta: 3,
    explicacao:
      "Todos os pontos ficam exatamente sobre uma reta decrescente, e a correlação atinge o valor extremo −1. O valor de r não depende da inclinação, −3, mas só de os pontos estarem perfeitamente alinhados e do sentido da reta: qualquer reta decrescente, com inclinação −0,1 ou −100, daria o mesmo r = −1.\n\n−3 é a inclinação. 1 corresponderia a uma reta crescente. 0 indicaria ausência de associação linear. E 50 é o intercepto, sem relação com r.",
  },
  {
    materia: "estatistica",
    tema: "Correlação e regressão linear",
    dificuldade: "media",
    enunciado:
      "A covariância entre x e y é 12, o desvio padrão de x é 3 e o de y é 5. Qual é o coeficiente de correlação?",
    opcoes: [
      "0,8",
      "12",
      "1,25",
      "0,48",
      "≈ 0,27",
    ],
    correta: 0,
    explicacao:
      "A correlação é a covariância padronizada: r = cov(x, y)/(sx · sy) = 12/(3 · 5) = 12/15 = 0,8. Dividir pelos desvios padrão elimina as unidades e coloca a medida entre −1 e 1.\n\n12 é a covariância, que depende das unidades. 1,25 inverte a divisão, 15/12, e passa de 1. 0,48 divide por 25, a variância de y. E 0,27 divide por 45, o produto da variância de x, 9, pelo desvio padrão de y, 5.",
  },
  {
    materia: "estatistica",
    tema: "Correlação e regressão linear",
    dificuldade: "media",
    enunciado:
      "Se x e y forem substituídos pelos seus escores padronizados, qual passa a ser a inclinação da reta de regressão de y em x?",
    opcoes: [
      "1",
      "r²",
      "O coeficiente de correlação r",
      "sy/sx",
      "0",
    ],
    correta: 2,
    explicacao:
      "A inclinação é b = r · sy/sx, e depois da padronização os dois desvios padrão valem 1. Então b = r: em escores z, a reta é ẑy = r · zx, e o intercepto é zero, porque as duas médias são zero. Essa forma explica a regressão à média: como |r| < 1, a previsão padronizada fica mais perto de zero que o valor de x.\n\n1 só valeria com correlação perfeita. r² é a fração explicada. sy/sx vale 1 depois da padronização, mas falta o fator r. E 0 só se r = 0.",
  },
  {
    materia: "estatistica",
    tema: "Correlação e regressão linear",
    dificuldade: "media",
    enunciado:
      "Numa regressão de y em x, soma-se 10 a todos os valores de x, e o ajuste é refeito. O que acontece com a reta?",
    opcoes: [
      "A inclinação aumenta 10, e o intercepto fica igual",
      "A inclinação fica igual, e o intercepto cai 10b",
      "A inclinação e o intercepto ficam iguais",
      "A inclinação fica igual, e o intercepto sobe 10",
      "A inclinação cai à metade, e o intercepto dobra",
    ],
    correta: 1,
    explicacao:
      "Deslocar todos os x por uma constante não muda o formato da nuvem de pontos, e a inclinação b continua a mesma. Mas, para o mesmo ponto, o valor de x agora é 10 unidades maior, e o intercepto precisa compensar: a nova reta é ŷ = (a − 10b) + bx. Assim, as previsões para os mesmos pontos não mudam.\n\nA inclinação não depende de deslocamentos e não aumenta 10. O intercepto muda, e por isso os dois não ficam iguais. Ele diminui 10b, e não sobe 10. E nenhum dos dois é dividido ou dobrado.",
  },
  {
    materia: "estatistica",
    tema: "Correlação e regressão linear",
    dificuldade: "media",
    enunciado:
      "Num conjunto de dados, todos os valores de y são iguais a 7, enquanto x varia. O que se pode dizer do coeficiente de correlação de Pearson?",
    opcoes: [
      "Vale 0",
      "Não está definido, pois y não varia",
      "Vale 1",
      "Vale 7",
      "Vale −1",
    ],
    correta: 1,
    explicacao:
      "A correlação divide a covariância pelo produto dos desvios padrão, e o desvio padrão de y é zero. A covariância também é zero, e a razão 0/0 não tem valor definido. A reta de regressão existe, horizontal em y = 7, mas a correlação não.\n\n0 é um valor tentador, mas a fórmula não produz número nenhum. 1 e −1 exigiriam variação em y. E 7 é o valor de y, e não uma correlação.",
  },
  {
    materia: "estatistica",
    tema: "Correlação e regressão linear",
    dificuldade: "media",
    enunciado:
      "Qual destes coeficientes de correlação indica a associação linear mais forte?",
    opcoes: [
      "r = 0,85",
      "r = −0,92",
      "r = 0,30",
      "r = −0,50",
      "r = 0,01",
    ],
    correta: 1,
    explicacao:
      "A força da associação linear é dada pelo valor absoluto de r, e o sinal indica só o sentido. Entre os valores, |−0,92| = 0,92 é o maior: os pontos ficam mais próximos de uma reta, decrescente, do que em qualquer outro caso. Em termos de fração explicada, 0,92² ≈ 0,85, contra 0,85² ≈ 0,72.\n\n0,85 é forte, mas menos que 0,92. 0,30 e −0,50 indicam associações de moderadas a fracas. E 0,01 indica praticamente nenhuma associação linear.",
  },
  {
    materia: "estatistica",
    tema: "Correlação e regressão linear",
    dificuldade: "media",
    enunciado:
      "Para os pontos (0, 1), (1, 3) e (2, 2), qual destas retas tem a menor soma dos quadrados dos resíduos: ŷ = 1,5 + 0,5x, ŷ = 1 + x ou ŷ = 2?",
    opcoes: [
      "ŷ = 1,5 + 0,5x, com soma 1,5",
      "ŷ = 1 + x, com soma 2",
      "ŷ = 2, com soma 2",
      "As três empatam",
      "ŷ = 1 + x, com soma 0",
    ],
    correta: 0,
    explicacao:
      "Para ŷ = 1,5 + 0,5x, os resíduos são −0,5, 1 e −0,5, com soma dos quadrados 0,25 + 1 + 0,25 = 1,5. Para ŷ = 1 + x, são 0, 1 e −1, com soma 2; para ŷ = 2, são −1, 1 e 0, também 2. A primeira é a reta de mínimos quadrados: b = Sxy/Sxx = 1/2 e a = 2 − 0,5 · 1 = 1,5.\n\nAs retas ŷ = 1 + x e ŷ = 2 têm soma 2, maior. As três não empatam. E a soma zero de ŷ = 1 + x é a dos resíduos simples, 0 + 1 − 1, e não a dos quadrados.",
  },
  {
    materia: "estatistica",
    tema: "Correlação e regressão linear",
    dificuldade: "media",
    enunciado:
      "Uma correlação calculada com as médias de cada estado, e não com os indivíduos, tende a ser como, em comparação com a correlação entre os indivíduos?",
    opcoes: [
      "Menor, porque há menos pontos",
      "Igual",
      "Maior, sem a variação individual",
      "Sempre zero",
      "Sempre negativa",
    ],
    correta: 2,
    explicacao:
      "Ao tirar médias por estado, a variação individual, que é grande e não segue a tendência, se cancela em boa parte, e as médias ficam mais alinhadas. A correlação entre médias costuma ser bem maior que entre indivíduos, e usá-la para concluir sobre pessoas é a falácia ecológica.\n\nMenos pontos não reduzem a correlação por si. Os dois valores costumam ser diferentes. E nada força a correlação entre médias a ser zero ou negativa.",
  },
  {
    materia: "estatistica",
    tema: "Correlação e regressão linear",
    dificuldade: "dificil",
    enunciado:
      "A regressão de y em x tem inclinação 0,8, e a de x em y tem inclinação 0,45. Qual é o coeficiente de correlação entre x e y?",
    opcoes: [
      "0,36",
      "0,625",
      "≈ 0,56",
      "0,6",
      "≈ 1,78",
    ],
    correta: 3,
    explicacao:
      "As duas inclinações são r · sy/sx e r · sx/sy, e seu produto é r² = 0,8 · 0,45 = 0,36. Então |r| = 0,6, e o sinal é o das inclinações, positivo: r = 0,6. As duas inclinações só são inversas uma da outra quando r = ±1, e aí as duas retas coincidem.\n\n0,36 é r², sem tirar a raiz. 0,625 é a média simples das inclinações. 0,56 é a razão 0,45/0,8. E 1,78 é a razão inversa, maior que 1, impossível para uma correlação.",
  },
  {
    materia: "estatistica",
    tema: "Correlação e regressão linear",
    dificuldade: "dificil",
    enunciado:
      "Numa prova e em seu reteste, as notas têm média 100 e desvio padrão 15, e a correlação entre as duas aplicações é 0,5. Um aluno tirou 130 na primeira. Qual é a nota prevista para ele no reteste?",
    opcoes: [
      "130",
      "100",
      "107,5",
      "115",
      "145",
    ],
    correta: 3,
    explicacao:
      "A nota 130 está 2 desvios padrão acima da média, z = (130 − 100)/15 = 2. A previsão padronizada é r · z = 0,5 · 2 = 1, isto é, 1 desvio padrão acima: 100 + 15 = 115. Parte do bom desempenho na primeira prova se deve a fatores que não se repetem, e a previsão regride em direção à média.\n\n130 supõe correlação perfeita. 100 supõe correlação nula. 107,5 aplica r duas vezes, 0,5 · 0,5 · 30. E 145 afasta a previsão da média, em vez de aproximá-la.",
  },
  {
    materia: "estatistica",
    tema: "Correlação e regressão linear",
    dificuldade: "dificil",
    enunciado:
      "Os pontos (0, 0), (1, 1), (0, 1) e (1, 0) têm correlação zero. Se for acrescentado o ponto (10, 10), qual é, aproximadamente, o novo coeficiente de correlação?",
    opcoes: [
      "≈ 0,99",
      "0",
      "≈ 0,2",
      "−1",
      "0,5",
    ],
    correta: 0,
    explicacao:
      "Com o novo ponto, x̄ = ȳ = 2,4. O ponto (10, 10) fica muito longe dos outros e domina as somas: Sxy = 72,2 e Sxx = Syy = 73,2, e r = 72,2/73,2 ≈ 0,99. Um único ponto extremo criou uma correlação quase perfeita onde não havia associação.\n\nr deixa de ser zero por causa do ponto novo. 0,2 subestima muito a influência do ponto afastado. −1 teria o sinal errado. E 0,5 não sai da conta. O exemplo mostra por que é preciso olhar o gráfico antes de interpretar r.",
  },
  {
    materia: "estatistica",
    tema: "Correlação e regressão linear",
    dificuldade: "dificil",
    enunciado:
      "Forçando a reta a passar pela origem, ŷ = bx, qual inclinação minimiza a soma dos quadrados dos resíduos para os pontos (1, 2), (2, 3) e (3, 7)?",
    opcoes: [
      "2,5",
      "2",
      "≈ 2,33",
      "≈ 0,48",
      "≈ 2,07",
    ],
    correta: 4,
    explicacao:
      "Sem intercepto, a soma dos quadrados é Σ(y − bx)², e sua derivada se anula em b = Σxy/Σx² = (2 + 6 + 21)/(1 + 4 + 9) = 29/14 ≈ 2,07. Esse valor difere da inclinação com intercepto, 2,5, porque a restrição de passar pela origem muda o ajuste.\n\n2,5 é a inclinação da reta com intercepto, ŷ = −1 + 2,5x. 2 é a razão y/x do primeiro ponto. 2,33 é a razão do último ponto, 7/3. E 0,48 inverte a fórmula, Σx²/Σxy.",
  },
  {
    materia: "estatistica",
    tema: "Correlação e regressão linear",
    dificuldade: "dificil",
    enunciado:
      "Os dados seguem exatamente y = 3 · 2ˣ, para x = 0, 1, 2, 3, 4 e 5. Qual é a correlação entre x e log y?",
    opcoes: [
      "Menor que 1, porque a relação é exponencial",
      "0",
      "1, porque log y é função linear de x",
      "−1",
      "Igual a log 2",
    ],
    correta: 2,
    explicacao:
      "Tomando logaritmos, log y = log 3 + x · log 2: log y é uma função linear crescente de x, com inclinação log 2 > 0. Os pontos (x, log y) ficam exatamente numa reta crescente, e a correlação é 1. É por isso que transformações logarítmicas linearizam relações exponenciais.\n\nA correlação entre x e o próprio y é menor que 1, mas a pergunta é sobre log y. 0 e −1 contrariam o crescimento. E log 2 é a inclinação da reta, e não a correlação.",
  },
  {
    materia: "estatistica",
    tema: "Correlação e regressão linear",
    dificuldade: "dificil",
    enunciado:
      "Com amostras de 5 pares de uma população em que as variáveis são independentes, com correlação zero, com que frequência aproximada se obtém |r| ≥ 0,7?",
    opcoes: [
      "Menos de 1% das amostras",
      "Cerca de 19% das amostras",
      "Nunca",
      "Cerca de 70% das amostras",
      "Exatamente 5% das amostras",
    ],
    correta: 1,
    explicacao:
      "Com n = 5, o coeficiente amostral varia muito. A estatística t = r · √(n − 2)/√(1 − r²) segue a t com 3 graus de liberdade quando ρ = 0, e |r| ≥ 0,7 corresponde a |t| ≥ 1,70, o que acontece em cerca de 19% das amostras. Correlações altas em amostras pequenas podem surgir só por acaso.\n\nMenos de 1% subestima muito a variação de r com 5 pares. Nunca é falso: a chance é considerável. 70% confunde r com uma probabilidade. E 5% seria o caso de um valor crítico, que para n = 5 é bem maior, cerca de 0,88.",
  },
  {
    materia: "estatistica",
    tema: "Correlação e regressão linear",
    dificuldade: "dificil",
    enunciado:
      "Na regressão, por que o intervalo para um valor individual de y, num dado x, é mais largo que o intervalo para a média de y nesse mesmo x?",
    opcoes: [
      "Soma a dispersão dos indivíduos em torno da reta",
      "Porque usa menos dados no cálculo",
      "Porque a reta muda de inclinação",
      "Porque o valor individual não depende de x",
      "Os dois intervalos têm a mesma largura",
    ],
    correta: 0,
    explicacao:
      "O intervalo para a média só leva em conta a incerteza na estimação da reta, que diminui com n. O valor individual tem essa incerteza e mais a variação dos indivíduos em torno da reta, a variância σ² do erro, que não diminui com n. Por isso o intervalo de previsão é sempre mais largo, e não encolhe a zero mesmo com amostras enormes.\n\nOs dois intervalos usam os mesmos dados. A reta é a mesma nos dois casos. O valor individual depende de x, pela reta, mas também varia em torno dela. E as larguras são diferentes.",
  },
  {
    materia: "estatistica",
    tema: "Correlação e regressão linear",
    dificuldade: "dificil",
    enunciado:
      "Se a variável x for medida com erro aleatório, independente de tudo o mais, o que tende a acontecer com a inclinação estimada da regressão de y em x?",
    opcoes: [
      "Tende a diminuir em valor absoluto",
      "Tende a aumentar",
      "Não muda, em média",
      "Muda de sinal",
      "Fica igual a 1",
    ],
    correta: 0,
    explicacao:
      "O erro de medida aumenta a variância de x sem aumentar a covariância com y. Como a inclinação é cov(x, y)/var(x), ela fica menor em valor absoluto: é a atenuação. Se o erro tiver a mesma variância que o x verdadeiro, a inclinação cai, em média, à metade.\n\nA inclinação não aumenta, porque o denominador cresce. Ela muda, em média, e não por acaso. O sinal se mantém, porque a covariância não muda de sinal. E nada a força a valer 1.",
  },
  {
    materia: "estatistica",
    tema: "Correlação e regressão linear",
    dificuldade: "dificil",
    enunciado:
      "X e Y são independentes e têm a mesma variância. Qual é o coeficiente de correlação entre X e a soma X + Y?",
    opcoes: [
      "0,5",
      "1",
      "≈ 0,71",
      "0",
      "≈ 1,41",
    ],
    correta: 2,
    explicacao:
      "cov(X, X + Y) = var(X) + cov(X, Y) = var(X), porque X e Y são independentes. E var(X + Y) = 2 · var(X). Então r = var(X)/[√var(X) · √(2 · var(X))] = 1/√2 ≈ 0,71. A soma herda metade da sua variância de X, e r² = 0,5.\n\n0,5 é r², a fração da variância da soma explicada por X. 1 exigiria Y constante. 0 ignoraria que X faz parte da soma. E 1,41 = √2 passa de 1.",
  },
  {
    materia: "estatistica",
    tema: "Correlação e regressão linear",
    dificuldade: "dificil",
    enunciado:
      "Dois conjuntos de dados têm a mesma correlação, cerca de 0,82, e a mesma reta de regressão, mas no gráfico um deles forma uma nuvem em torno de uma reta e o outro, uma curva quase perfeita. O que isso ensina?",
    opcoes: [
      "Que r descreve completamente os dados",
      "Que é preciso olhar o gráfico, e não só r",
      "Que a reta é adequada nos dois casos",
      "Que r = 0,82 garante relação linear",
      "Que os dois conjuntos são iguais",
    ],
    correta: 1,
    explicacao:
      "O coeficiente de correlação e a reta resumem os dados em poucos números, e conjuntos muito diferentes podem ter os mesmos resumos. No conjunto em forma de curva, a reta deixa resíduos sistemáticos, e um modelo curvo descreveria os dados quase perfeitamente. Por isso o gráfico de dispersão deve ser examinado antes de interpretar r.\n\nr não descreve a forma da relação. A reta não é adequada para o conjunto curvo. Um r alto não garante linearidade. E os conjuntos são diferentes, apesar dos resumos iguais.",
  },
];
