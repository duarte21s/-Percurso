/* Estatística: média, mediana e desvio — parte A (25 questões).
   Medidas de tendência central, medidas de dispersão e leitura de conjuntos
   numéricos. Ver fisica.mjs para o formato. */

export const questoes = [
  {
    materia: "matematica",
    tema: "Estatística: média, mediana e desvio",
    dificuldade: "facil",
    enunciado:
      "Durante cinco dias seguidos, uma padaria registrou a venda de 4, 6, 8, 10 e 12 caixas de pão de queijo. A média aritmética dessas quantidades diárias é:",
    opcoes: ["6", "7", "8", "9", "10"],
    correta: 2,
    explicacao:
      "A média é a soma dividida pela quantidade de valores: (4 + 6 + 8 + 10 + 12)/5 = 40/5 = 8. A alternativa 10 confunde média com o valor central da última posição. Em um conjunto com valores igualmente espaçados, como este, a média coincide com o valor do meio — o que serve de conferência rápida.",
  },
  {
    materia: "matematica",
    tema: "Estatística: média, mediana e desvio",
    dificuldade: "facil",
    enunciado:
      "Em uma pesquisa foram anotados os seguintes números de acessos diários a um site: 7, 2, 9, 4 e 5. A mediana desse conjunto de dados é:",
    opcoes: ["5", "7", "4", "9", "5,4"],
    correta: 0,
    explicacao:
      "A mediana exige que os dados sejam ordenados primeiro: 2, 4, 5, 7, 9. Com cinco valores, o termo central é o terceiro, que vale 5. A alternativa 5,4 é a média aritmética, não a mediana — as duas coincidem só em distribuições simétricas. Já 7 seria o resultado de quem toma o valor do meio sem ordenar a lista.",
  },
  {
    materia: "matematica",
    tema: "Estatística: média, mediana e desvio",
    dificuldade: "facil",
    enunciado:
      "Os números de gols marcados por um time em sete partidas foram 2, 3, 3, 5, 7, 3 e 8. A moda desse conjunto de dados é:",
    opcoes: ["5", "2", "8", "4,4", "3"],
    correta: 4,
    explicacao:
      "A moda é o valor que mais se repete, e o 3 aparece três vezes, mais que qualquer outro. A alternativa 4,4 é aproximadamente a média do conjunto, e 5 é a mediana depois de ordenar. Como a moda não depende de conta, basta contar repetições — e é a única medida de tendência central que também vale para dados não numéricos, como cor preferida.",
  },
  {
    materia: "matematica",
    tema: "Estatística: média, mediana e desvio",
    dificuldade: "media",
    enunciado:
      "Em uma disciplina, a nota do trabalho tem peso 2 e a nota da prova tem peso 3. Um estudante obteve 6,0 no trabalho e 9,0 na prova. Sua média ponderada é:",
    opcoes: ["7,5", "7,8", "8,0", "7,2", "8,5"],
    correta: 1,
    explicacao:
      "A média ponderada é (6 · 2 + 9 · 3)/(2 + 3) = (12 + 27)/5 = 39/5 = 7,8. A alternativa 7,5 é a média simples entre 6 e 9, que ignora os pesos. Como a prova pesa mais e teve nota maior, a média ponderada tem de ficar acima de 7,5 — essa comparação confere o resultado sem refazer a conta.",
  },
  {
    materia: "matematica",
    tema: "Estatística: média, mediana e desvio",
    dificuldade: "facil",
    enunciado:
      "Foram registradas as seguintes temperaturas, em graus Celsius, ao longo de quatro dias: 12, 4, 19 e 7. A amplitude desse conjunto de dados é:",
    opcoes: ["19", "12", "7", "15", "23"],
    correta: 3,
    explicacao:
      "A amplitude é a diferença entre o maior e o menor valor: 19 − 4 = 15. A alternativa 23 soma os dois extremos em vez de subtrair, e 19 apenas repete o maior valor. A amplitude é a medida de dispersão mais simples, mas também a mais frágil: depende exclusivamente dos dois extremos e ignora tudo o que acontece entre eles.",
  },
  {
    materia: "matematica",
    tema: "Estatística: média, mediana e desvio",
    dificuldade: "media",
    enunciado:
      "Considere o conjunto de dados formado pelos valores 2, 4, 6 e 10, já organizados em ordem crescente. A mediana desse conjunto é:",
    opcoes: ["4", "6", "5,5", "5", "4,5"],
    correta: 3,
    explicacao:
      "Com uma quantidade par de valores, a mediana é a média dos dois termos centrais: (4 + 6)/2 = 5. A alternativa 4 ou 6 escolheria apenas um dos dois centrais, o que deixaria a definição incompleta. Note que 5 não aparece no conjunto original — a mediana não precisa ser um dos dados, ao contrário da moda.",
  },
  {
    materia: "matematica",
    tema: "Estatística: média, mediana e desvio",
    dificuldade: "media",
    enunciado:
      "Um conjunto de dados tem média aritmética igual a 20. Acrescenta-se a esse conjunto um novo valor, também igual a 20. Em relação à média do conjunto original, a nova média:",
    opcoes: [
      "aumenta em 20 unidades.",
      "permanece exatamente igual a 20.",
      "diminui, porque há mais elementos.",
      "passa a ser o dobro da anterior.",
      "torna-se igual a zero.",
    ],
    correta: 1,
    explicacao:
      "Acrescentar um valor idêntico à média não desloca o centro de equilíbrio dos dados: a soma cresce exatamente na proporção da quantidade de elementos. A alternativa que prevê queda confunde 'mais elementos' com 'média menor', o que só aconteceria se o valor acrescentado fosse inferior à média. Valores acima da média a puxam para cima; abaixo, para baixo; iguais, não a movem.",
  },
  {
    materia: "matematica",
    tema: "Estatística: média, mediana e desvio",
    dificuldade: "media",
    enunciado:
      "Ao analisar um conjunto de dados numéricos, um pesquisador verificou que o desvio padrão calculado é igual a zero. Essa informação permite concluir que:",
    opcoes: [
      "todos os valores do conjunto são iguais entre si.",
      "os valores estão bastante espalhados em torno da média.",
      "a média aritmética do conjunto é zero.",
      "a mediana do conjunto é necessariamente zero.",
      "o conjunto contém exatamente dois valores distintos.",
    ],
    correta: 0,
    explicacao:
      "O desvio padrão mede o afastamento típico dos dados em relação à média. Ele só zera quando nenhum valor se afasta, ou seja, quando todos são idênticos. A alternativa que fala em média zero confunde o valor da medida de dispersão com o da medida de posição: um conjunto formado só por 7, por exemplo, tem média 7 e desvio padrão 0.",
  },
  {
    materia: "matematica",
    tema: "Estatística: média, mediana e desvio",
    dificuldade: "dificil",
    enunciado:
      "Considere o conjunto de dados 2, 4 e 6. Calculando a variância desse conjunto pela média dos quadrados dos desvios em relação à média aritmética, obtém-se:",
    opcoes: ["2", "4", "8", "1,33", "8/3"],
    correta: 4,
    explicacao:
      "A média é (2 + 4 + 6)/3 = 4. Os desvios são −2, 0 e 2, e seus quadrados são 4, 0 e 4. A variância é (4 + 0 + 4)/3 = 8/3 ≈ 2,67. A alternativa 8 para na soma dos quadrados sem dividir pela quantidade de dados. Elevar os desvios ao quadrado é o que impede que os afastamentos positivos e negativos se anulem.",
  },
  {
    materia: "matematica",
    tema: "Estatística: média, mediana e desvio",
    dificuldade: "media",
    enunciado:
      "Em um conjunto formado pelos valores 1, 2, 2, 3 e 10, o último dado é bem mais alto que os demais. Comparando o efeito desse valor sobre as medidas de tendência central, é correto afirmar que a medida mais afetada é:",
    opcoes: [
      "a moda, que passa a valer 10.",
      "a mediana, que passa a valer 10.",
      "a média, que é puxada para cima pelo valor extremo.",
      "as três medidas, igualmente afetadas.",
      "nenhuma delas, pois um único dado não altera medidas.",
    ],
    correta: 2,
    explicacao:
      "A média usa todos os valores na soma, então um dado muito alto a desloca: aqui ela vale 3,6, acima de quase todos os dados. A mediana continua sendo 2 e a moda também é 2, porque ambas dependem da posição ou da frequência, não da magnitude. É por isso que rendimentos e preços de imóveis costumam ser divulgados pela mediana: ela resiste a valores extremos.",
  },
  {
    materia: "matematica",
    tema: "Estatística: média, mediana e desvio",
    dificuldade: "facil",
    enunciado:
      "Um estudante obteve cinco notas ao longo do semestre e sua média aritmética final foi exatamente 7,0. A soma dessas cinco notas é igual a:",
    opcoes: ["35", "12", "7", "5", "70"],
    correta: 0,
    explicacao:
      "Da definição de média, soma = média × quantidade de valores = 7 · 5 = 35. A alternativa 12 soma média e quantidade em vez de multiplicar. Essa inversão da fórmula é a chave de muitas questões: sempre que a média e o número de dados são conhecidos, a soma total fica determinada.",
  },
  {
    materia: "matematica",
    tema: "Estatística: média, mediana e desvio",
    dificuldade: "media",
    enunciado:
      "A média aritmética de quatro números é 10, e sabe-se que um deles é igual a 4. A soma dos outros três números é:",
    opcoes: ["30", "40", "24", "6", "36"],
    correta: 4,
    explicacao:
      "A soma dos quatro números é 10 · 4 = 40. Retirando o valor conhecido, 40 − 4 = 36 é a soma dos três restantes. A alternativa 40 esquece de descontar o número dado, e 30 subtrairia 10 em vez de 4. Note que a média dos três restantes seria 12, acima de 10, porque o valor retirado estava abaixo da média.",
  },
  {
    materia: "matematica",
    tema: "Estatística: média, mediana e desvio",
    dificuldade: "facil",
    enunciado:
      "Um conjunto de dados numéricos foi analisado e verificou-se que nenhum valor se repete: todos aparecem uma única vez. A respeito da moda desse conjunto, é correto afirmar que:",
    opcoes: [
      "ela é igual ao maior valor do conjunto.",
      "ela coincide com a média aritmética.",
      "não existe moda: o conjunto é amodal.",
      "ela é igual ao menor valor do conjunto.",
      "ela é sempre igual à mediana.",
    ],
    correta: 2,
    explicacao:
      "A moda é o valor de maior frequência; se todas as frequências são iguais a 1, nenhum valor se destaca e o conjunto é chamado de amodal. As alternativas que apontam o maior ou o menor valor confundem moda com extremos. Um conjunto também pode ter duas modas (bimodal) ou mais, ao contrário da média e da mediana, que são sempre únicas.",
  },
  {
    materia: "matematica",
    tema: "Estatística: média, mediana e desvio",
    dificuldade: "media",
    enunciado:
      "Um conjunto com 9 valores numéricos foi colocado em ordem crescente para o cálculo da mediana. Nessas condições, a mediana desse conjunto corresponde a:",
    opcoes: [
      "o quarto valor da sequência ordenada.",
      "a média entre o quarto e o quinto valores.",
      "a soma do quarto com o quinto valores.",
      "o quinto valor da sequência ordenada.",
      "o maior valor da sequência ordenada.",
    ],
    correta: 3,
    explicacao:
      "Com uma quantidade ímpar de dados, existe um único termo central, na posição (9 + 1)/2 = 5. A alternativa da média entre dois termos vale apenas para quantidades pares de dados. Essa posição central deixa exatamente quatro valores abaixo e quatro acima, que é o significado da mediana: o valor que divide o conjunto ordenado ao meio.",
  },
  {
    materia: "matematica",
    tema: "Estatística: média, mediana e desvio",
    dificuldade: "dificil",
    enunciado:
      "Todos os valores de um conjunto de dados recebem um acréscimo de 3 unidades. Comparando o novo conjunto com o original, é correto afirmar que:",
    opcoes: [
      "a média e o desvio padrão aumentam 3 unidades cada.",
      "a média aumenta 3 unidades e o desvio padrão não se altera.",
      "nem a média nem o desvio padrão se alteram.",
      "a média não se altera e o desvio padrão aumenta 3 unidades.",
      "a média e o desvio padrão ficam multiplicados por 3.",
    ],
    correta: 1,
    explicacao:
      "Somar a mesma constante a todos os dados desloca o conjunto inteiro sem mudar as distâncias internas entre os valores. A média, que é uma medida de posição, acompanha o deslocamento; o desvio padrão, que mede espalhamento, permanece igual. Já multiplicar todos os dados por uma constante afetaria as duas medidas, cada uma multiplicada pelo mesmo fator.",
  },
  {
    materia: "matematica",
    tema: "Estatística: média, mediana e desvio",
    dificuldade: "media",
    enunciado:
      "Em uma pequena empresa, três funcionários recebem R$ 2.000,00 cada um e dois funcionários recebem R$ 4.500,00 cada um. O salário médio dessa empresa é de:",
    opcoes: ["R$ 3.250,00", "R$ 3.000,00", "R$ 2.900,00", "R$ 3.500,00", "R$ 2.750,00"],
    correta: 1,
    explicacao:
      "A folha total é 3 · 2 000 + 2 · 4 500 = 6 000 + 9 000 = 15 000, dividida por 5 funcionários dá R$ 3.000,00. A alternativa R$ 3.250,00 é a média simples entre 2 000 e 4 500, que ignora quantas pessoas recebem cada valor. Como há mais gente na faixa mais baixa, a média ponderada tem de ficar abaixo do ponto médio.",
  },
  {
    materia: "matematica",
    tema: "Estatística: média, mediana e desvio",
    dificuldade: "media",
    enunciado:
      "Um estudante já obteve as notas 5,0, 7,0 e 6,0 em três avaliações. Para que sua média aritmética nas quatro avaliações do semestre seja exatamente 7,0, a nota que ele precisa obter na quarta avaliação é:",
    opcoes: ["8,0", "9,0", "10,0", "7,0", "6,0"],
    correta: 2,
    explicacao:
      "A soma necessária para média 7,0 em quatro notas é 7 · 4 = 28. Ele já tem 5 + 7 + 6 = 18, então precisa de 28 − 18 = 10,0. A alternativa 9,0 levaria a uma soma de 27 e média 6,75. Sempre que a pergunta é 'quanto falta', o caminho é comparar a soma exigida com a soma já obtida.",
  },
  {
    materia: "matematica",
    tema: "Estatística: média, mediana e desvio",
    dificuldade: "facil",
    enunciado:
      "Em uma pesquisa realizada com 200 pessoas, 60 delas declararam preferir o produto A. O percentual de entrevistados que prefere esse produto é de:",
    opcoes: ["60%", "20%", "40%", "30%", "3%"],
    correta: 3,
    explicacao:
      "A frequência relativa é 60/200 = 0,3, ou seja, 30%. A alternativa 60% confunde a frequência absoluta com o percentual — 60 é a contagem, não a porcentagem. Para converter, basta dividir pelo total e multiplicar por 100; conferir se a fração é maior ou menor que a metade também ajuda: 60 é menos que 100, então o resultado tem de ficar abaixo de 50%.",
  },
  {
    materia: "matematica",
    tema: "Estatística: média, mediana e desvio",
    dificuldade: "media",
    enunciado:
      "A variância e o desvio padrão são as duas principais medidas de dispersão de um conjunto de dados. Sobre a relação entre elas, é correto afirmar que:",
    opcoes: [
      "o desvio padrão é expresso na mesma unidade dos dados originais.",
      "a variância é expressa na mesma unidade dos dados originais.",
      "as duas medidas são sempre adimensionais.",
      "o desvio padrão pode assumir valores negativos.",
      "a variância pode assumir valores negativos.",
    ],
    correta: 0,
    explicacao:
      "O desvio padrão é a raiz quadrada da variância, e essa operação desfaz o quadrado aplicado aos desvios, devolvendo a unidade original dos dados. Se os dados estão em reais, a variância vem em reais ao quadrado e o desvio padrão em reais — daí a preferência pelo desvio padrão em relatórios. Nenhuma das duas pode ser negativa, porque partem de uma soma de quadrados.",
  },
  {
    materia: "matematica",
    tema: "Estatística: média, mediana e desvio",
    dificuldade: "media",
    enunciado:
      "Os tempos de espera, em minutos, registrados em um guichê foram 2, 4, 4, 4, 5, 5, 7 e 9. A média aritmética desses tempos é:",
    opcoes: ["4", "4,5", "5,5", "6", "5"],
    correta: 4,
    explicacao:
      "A soma dos oito valores é 2 + 4 + 4 + 4 + 5 + 5 + 7 + 9 = 40, e 40/8 = 5 minutos. A alternativa 4 é a moda do conjunto, e 4,5 é a mediana. Ter as três medidas com valores diferentes é o caso mais comum: elas só coincidem em distribuições perfeitamente simétricas e unimodais.",
  },
  {
    materia: "matematica",
    tema: "Estatística: média, mediana e desvio",
    dificuldade: "media",
    enunciado:
      "Considerando os mesmos tempos de espera 2, 4, 4, 4, 5, 5, 7 e 9, já ordenados de forma crescente, a mediana desse conjunto é:",
    opcoes: ["4", "5", "5,5", "4,25", "4,5"],
    correta: 4,
    explicacao:
      "São oito valores, quantidade par, então a mediana é a média dos dois centrais, que ocupam a quarta e a quinta posições: (4 + 5)/2 = 4,5 minutos. A alternativa 5 escolheria apenas o quinto valor, e 4 apenas o quarto. Como a média do conjunto é 5 e a mediana é 4,5, os dados são levemente puxados para cima pelos tempos de 7 e 9 minutos.",
  },
  {
    materia: "matematica",
    tema: "Estatística: média, mediana e desvio",
    dificuldade: "facil",
    enunciado:
      "Ainda em relação ao conjunto de tempos de espera 2, 4, 4, 4, 5, 5, 7 e 9, o valor que se repete com maior frequência, ou seja, a moda, é:",
    opcoes: ["5", "2", "9", "4", "4,5"],
    correta: 3,
    explicacao:
      "O valor 4 aparece três vezes, enquanto o 5 aparece duas e os demais apenas uma. Logo a moda é 4 minutos. A alternativa 5 é a média do conjunto, e 4,5 é a mediana — ter as três medidas próximas, mas distintas, é o retrato de uma distribuição levemente assimétrica.",
  },
  {
    materia: "matematica",
    tema: "Estatística: média, mediana e desvio",
    dificuldade: "facil",
    enunciado:
      "Ao analisar a distribuição de frequências de um conjunto de dados, um estatístico observou que dois valores distintos apresentam exatamente a mesma frequência máxima. Esse conjunto é classificado como:",
    opcoes: ["amodal", "bimodal", "unimodal", "trimodal", "simétrico"],
    correta: 1,
    explicacao:
      "Duas modas caracterizam um conjunto bimodal. Amodal é o conjunto sem valor repetido; unimodal, o que tem uma única moda; trimodal, três. A existência de duas modas costuma indicar que os dados reúnem dois grupos com comportamentos diferentes — por exemplo, uma turma com dois padrões distintos de desempenho.",
  },
  {
    materia: "matematica",
    tema: "Estatística: média, mediana e desvio",
    dificuldade: "dificil",
    enunciado:
      "A média das idades de 10 pessoas presentes em uma sala é 30 anos. Uma décima primeira pessoa, com 41 anos, entra na sala. A nova média de idade do grupo passa a ser:",
    opcoes: ["30,5 anos", "35,5 anos", "31 anos", "30 anos", "32 anos"],
    correta: 2,
    explicacao:
      "A soma das idades iniciais é 30 · 10 = 300. Com a nova pessoa, a soma vai a 341 e o total passa a 11 pessoas: 341/11 = 31 anos. A alternativa 35,5 é a média entre 30 e 41, que ignora o peso das 10 pessoas já presentes. Como o novo integrante está 11 anos acima da média antiga, o efeito se dilui entre os 11 e a média sobe apenas 1 ano.",
  },
  {
    materia: "matematica",
    tema: "Estatística: média, mediana e desvio",
    dificuldade: "media",
    enunciado:
      "Duas turmas fizeram a mesma prova. A turma A obteve média 6,0 com desvio padrão 0,5, e a turma B obteve média 6,0 com desvio padrão 2,5. Comparando as duas distribuições, conclui-se que:",
    opcoes: [
      "as notas da turma B são mais heterogêneas que as da turma A.",
      "as duas turmas têm exatamente a mesma dispersão de notas.",
      "as notas da turma A são mais heterogêneas que as da turma B.",
      "a turma B teve desempenho médio superior ao da turma A.",
      "o desvio padrão não traz informação sobre a dispersão dos dados.",
    ],
    correta: 0,
    explicacao:
      "Com médias iguais, o desvio padrão é o que distingue as turmas: quanto maior, mais espalhadas estão as notas em torno da média. Na turma A as notas se concentram perto de 6,0; na B, há tanto notas bem baixas quanto bem altas. A alternativa sobre desempenho superior confunde dispersão com posição — as médias são idênticas, logo o desempenho médio é o mesmo.",
  },
];
