/* Distribuição normal (50 questões) — estatistica.

   Autorais, escritas por Claude (Anthropic) em 2026-09-30 seguindo as cinco
   regras de CONTINUAR-MATERIAS-POR-OBJETIVO.md. Nenhuma é atribuída a banca
   ou a prova real.

   Conferência do gabarito: 50 de 50 recalculadas por código que chega à
   resposta por outro caminho (ver .rascunho/questoes-objetivo/estatistica__distribuicao-normal.mjs);
   nenhuma ficou sem conferência em código.

   Montado por scripts/montar-questoes-objetivo.mjs; gabarito redistribuído
   por scripts/rebalancear-gabarito.mjs. Relatório em
   _relatorios/estatistica__distribuicao-normal.json. */

export const questoes = [
  {
    materia: "estatistica",
    tema: "Distribuição normal",
    dificuldade: "facil",
    enunciado:
      "Numa distribuição normal padrão, qual é a probabilidade de Z ser maior que 0?",
    opcoes: [
      "0,5",
      "0",
      "1",
      "≈ 0,68",
      "≈ 0,399",
    ],
    correta: 0,
    explicacao:
      "A normal padrão é simétrica em torno de 0, sua média. Metade da área sob a curva fica à direita de 0 e metade à esquerda, e P(Z > 0) = 0,5. A mesma simetria faz a média coincidir com a mediana.\n\n0 seria a probabilidade de um valor isolado, como Z = 0 exatamente. 1 é a área total. 0,68 é a probabilidade de Z ficar entre −1 e 1. E 0,399 é a altura da densidade em 0, que não é uma probabilidade.",
  },
  {
    materia: "estatistica",
    tema: "Distribuição normal",
    dificuldade: "facil",
    enunciado:
      "Numa distribuição normal, como se relacionam a média, a mediana e a moda?",
    opcoes: [
      "As três são iguais",
      "A média é maior que a mediana",
      "A moda é maior que a média",
      "A mediana é sempre zero",
      "A normal não tem moda",
    ],
    correta: 0,
    explicacao:
      "A curva normal é simétrica e tem um único pico, no centro. O pico é a moda; o ponto que divide a área ao meio é a mediana; e, pela simetria, o centro de massa, a média, está no mesmo lugar. As três medidas coincidem em μ.\n\nMédia maior que a mediana indica assimetria à direita, e moda maior que a média, assimetria à esquerda, o que não acontece na normal. A mediana só é zero na normal padrão. E o pico da curva é justamente a moda.",
  },
  {
    materia: "estatistica",
    tema: "Distribuição normal",
    dificuldade: "facil",
    enunciado:
      "Numa distribuição normal, aproximadamente que porcentagem dos valores fica a menos de um desvio padrão da média?",
    opcoes: [
      "68%",
      "95%",
      "99,7%",
      "50%",
      "34%",
    ],
    correta: 0,
    explicacao:
      "Pela regra empírica, cerca de 68% dos valores de uma normal ficam entre μ − σ e μ + σ, cerca de 95% entre μ − 2σ e μ + 2σ, e cerca de 99,7% entre μ − 3σ e μ + 3σ. Pela tabela, P(−1 < Z < 1) = 2 · 0,8413 − 1 ≈ 0,6827.\n\n95% corresponde a dois desvios padrão, e 99,7%, a três. 50% é a metade da distribuição, de um lado da média. E 34% é só um dos lados, entre μ e μ + σ.",
  },
  {
    materia: "estatistica",
    tema: "Distribuição normal",
    dificuldade: "facil",
    enunciado:
      "Uma variável normal tem média 70 e desvio padrão 5. Qual é o escore padronizado z do valor 80?",
    opcoes: [
      "2",
      "10",
      "16",
      "0,5",
      "−2",
    ],
    correta: 0,
    explicacao:
      "O escore z mede a distância até a média em desvios padrão: z = (x − μ)/σ = (80 − 70)/5 = 2. O valor 80 está dois desvios padrão acima da média, e a tabela da normal padrão passa a valer para ele: P(X < 80) = Φ(2).\n\n10 é a diferença x − μ, sem dividir por σ. 16 divide 80 por 5. 0,5 inverte a divisão, 5/10. E −2 troca o sinal, como se 80 estivesse abaixo da média.",
  },
  {
    materia: "estatistica",
    tema: "Distribuição normal",
    dificuldade: "facil",
    enunciado:
      "As alturas de um grupo seguem uma normal com média 170 cm e desvio padrão 10 cm. Aproximadamente que porcentagem tem altura entre 150 cm e 190 cm?",
    opcoes: [
      "95%",
      "68%",
      "99,7%",
      "90%",
      "47,5%",
    ],
    correta: 0,
    explicacao:
      "150 e 190 estão a dois desvios padrão da média: 170 − 2 · 10 e 170 + 2 · 10. Pela regra empírica, cerca de 95% dos valores de uma normal ficam nesse intervalo; o valor exato é cerca de 95,4%.\n\n68% corresponde a um desvio padrão, de 160 cm a 180 cm. 99,7% corresponde a três, de 140 cm a 200 cm. 90% não sai da regra. E 47,5% é só a metade, de 170 cm a 190 cm.",
  },
  {
    materia: "estatistica",
    tema: "Distribuição normal",
    dificuldade: "facil",
    enunciado:
      "Para uma variável normal, que é contínua, qual é a probabilidade de X ser exatamente igual à média?",
    opcoes: [
      "0",
      "0,5",
      "1",
      "≈ 0,399",
      "Depende do desvio padrão",
    ],
    correta: 0,
    explicacao:
      "Numa variável contínua, probabilidades são áreas sob a curva de densidade, e a área sobre um único ponto é zero. Por isso P(X = μ) = 0, como para qualquer outro valor isolado. Faz sentido perguntar pela chance de X cair num intervalo, como entre μ − 1 e μ + 1.\n\n0,5 é P(X < μ) ou P(X > μ). 1 é a área total. 0,399 é a altura da densidade padrão no centro, que não é uma probabilidade. E o resultado é zero para qualquer desvio padrão.",
  },
  {
    materia: "estatistica",
    tema: "Distribuição normal",
    dificuldade: "facil",
    enunciado:
      "Qual é a área total sob a curva de densidade de uma distribuição normal?",
    opcoes: [
      "1",
      "0,5",
      "Depende do desvio padrão",
      "√(2π)",
      "100",
    ],
    correta: 0,
    explicacao:
      "Toda densidade de probabilidade tem área total 1, porque a probabilidade de X assumir algum valor é 1. Na normal, a constante 1/(σ√(2π)) da fórmula existe justamente para ajustar a área a 1, qualquer que seja σ: curvas mais espalhadas ficam mais baixas, e a área se mantém.\n\n0,5 é a área de cada lado da média. A área não depende do desvio padrão. √(2π) aparece na constante da fórmula, e não é a área. E 100 confunde a área com a porcentagem, 100%, escrita em outra escala.",
  },
  {
    materia: "estatistica",
    tema: "Distribuição normal",
    dificuldade: "facil",
    enunciado:
      "Duas curvas normais têm a mesma média, e a segunda tem desvio padrão maior. Como a segunda curva se compara com a primeira?",
    opcoes: [
      "É mais baixa e mais espalhada",
      "É mais alta e mais estreita",
      "Está deslocada para a direita",
      "Tem área total maior",
      "É assimétrica",
    ],
    correta: 0,
    explicacao:
      "O desvio padrão controla a dispersão: com σ maior, os valores se espalham mais em torno da média, e a curva fica mais larga. Como a área total continua 1, a curva precisa ficar mais baixa: a altura do pico, 1/(σ√(2π)), diminui quando σ aumenta.\n\nMais alta e mais estreita é o efeito de um σ menor. O deslocamento depende da média, que é a mesma. A área total é sempre 1. E toda normal é simétrica.",
  },
  {
    materia: "estatistica",
    tema: "Distribuição normal",
    dificuldade: "facil",
    enunciado:
      "Sabendo que Φ(1) ≈ 0,8413, em que Φ é a função de distribuição da normal padrão, qual é a probabilidade de Z ser maior que 1?",
    opcoes: [
      "≈ 0,1587",
      "≈ 0,8413",
      "≈ 0,3413",
      "0,5",
      "≈ 0,6826",
    ],
    correta: 0,
    explicacao:
      "Φ(1) = P(Z < 1) ≈ 0,8413. O evento Z > 1 é o complementar, e P(Z > 1) = 1 − 0,8413 = 0,1587. Cerca de 16% dos valores de uma normal ficam mais de um desvio padrão acima da média, e, pela simetria, outros 16% ficam mais de um desvio padrão abaixo.\n\n0,8413 é P(Z < 1), sem passar ao complementar. 0,3413 é a área entre 0 e 1, Φ(1) − 0,5. 0,5 é P(Z > 0). E 0,6826 é a área entre −1 e 1.",
  },
  {
    materia: "estatistica",
    tema: "Distribuição normal",
    dificuldade: "facil",
    enunciado:
      "Pela simetria da normal padrão, e com Φ(2) ≈ 0,9772, quanto vale P(Z < −2)?",
    opcoes: [
      "≈ 0,0228",
      "≈ 0,9772",
      "−0,9772",
      "≈ 0,4772",
      "0,5",
    ],
    correta: 0,
    explicacao:
      "A curva é simétrica em torno de 0, e a cauda à esquerda de −2 tem a mesma área que a cauda à direita de 2: P(Z < −2) = P(Z > 2) = 1 − 0,9772 = 0,0228. Pouco mais de 2% dos valores ficam dois desvios padrão abaixo da média, ou mais.\n\n0,9772 é P(Z < 2). −0,9772 troca só o sinal, e probabilidade nunca é negativa. 0,4772 é a área entre 0 e 2. E 0,5 é a área de toda a metade esquerda.",
  },
  {
    materia: "estatistica",
    tema: "Distribuição normal",
    dificuldade: "facil",
    enunciado:
      "Numa normal com média 100 e desvio padrão 15, qual valor está exatamente dois desvios padrão acima da média?",
    opcoes: [
      "115",
      "130",
      "102",
      "200",
      "70",
    ],
    correta: 1,
    explicacao:
      "Dois desvios padrão acima da média é μ + 2σ = 100 + 2 · 15 = 130. Em escore padronizado, esse valor tem z = 2, e cerca de 2,3% dos valores de uma normal ficam acima dele. A conversão inversa, x = μ + z · σ, transforma escores padronizados em valores da escala original.\n\n115 está um desvio padrão acima. 102 soma 2 à média, sem multiplicar pelo desvio padrão. 200 dobra a média. E 70 está dois desvios padrão abaixo.",
  },
  {
    materia: "estatistica",
    tema: "Distribuição normal",
    dificuldade: "facil",
    enunciado:
      "Se X é normal com média 20 e desvio padrão 4, qual é a distribuição de Y = X + 10?",
    opcoes: [
      "Normal com média 30 e desvio padrão 14",
      "Normal com média 30 e desvio padrão 4",
      "Normal com média 20 e desvio padrão 4",
      "Normal com média 200 e desvio padrão 40",
      "Deixa de ser normal",
    ],
    correta: 1,
    explicacao:
      "Somar uma constante desloca a distribuição inteira, sem mudar sua forma nem sua dispersão. Y continua normal, com média 20 + 10 = 30 e o mesmo desvio padrão, 4: todas as distâncias entre valores permanecem iguais.\n\nSomar 10 ao desvio padrão confunde deslocamento com dispersão. Manter a média 20 ignora a soma. Multiplicar por 10 seria o efeito de Y = 10X, e não de X + 10. E transformações lineares de uma normal continuam normais.",
  },
  {
    materia: "estatistica",
    tema: "Distribuição normal",
    dificuldade: "media",
    enunciado:
      "O tempo de uma tarefa segue uma normal com média 70 min e desvio padrão 10 min. Usando Φ(1,5) ≈ 0,9332, qual é a probabilidade de a tarefa levar menos de 85 min?",
    opcoes: [
      "≈ 0,0668",
      "≈ 0,9332",
      "≈ 0,4332",
      "0,85",
      "1,5",
    ],
    correta: 1,
    explicacao:
      "Padronizando: z = (85 − 70)/10 = 1,5. Então P(X < 85) = P(Z < 1,5) = Φ(1,5) ≈ 0,9332, e cerca de 93% das tarefas terminam em menos de 85 minutos. Padronizar é o que permite usar uma única tabela, a da normal padrão, para qualquer média e qualquer desvio padrão.\n\n0,0668 é P(X > 85), o complementar. 0,4332 é a área entre a média e 85, Φ(1,5) − 0,5. 0,85 lê o valor 85 como probabilidade. E 1,5 é o escore z, e não uma probabilidade.",
  },
  {
    materia: "estatistica",
    tema: "Distribuição normal",
    dificuldade: "media",
    enunciado:
      "Uma variável normal tem média 70 e desvio padrão 8. Usando Φ(1,25) ≈ 0,8944, qual é a probabilidade de X ficar entre 60 e 80?",
    opcoes: [
      "≈ 0,894",
      "≈ 0,789",
      "≈ 0,394",
      "≈ 0,211",
      "≈ 0,683",
    ],
    correta: 1,
    explicacao:
      "Os limites padronizados são z = (60 − 70)/8 = −1,25 e z = (80 − 70)/8 = 1,25. Pela simetria, P(−1,25 < Z < 1,25) = 2 · Φ(1,25) − 1 = 2 · 0,8944 − 1 = 0,7888. O intervalo é simétrico em torno da média, e por isso basta um valor da tabela.\n\n0,894 é só P(Z < 1,25). 0,394 é a área de um dos lados, entre 0 e 1,25. 0,211 é a probabilidade de ficar fora do intervalo. E 0,683 é a área entre −1 e 1, que corresponderia a um desvio padrão de 10.",
  },
  {
    materia: "estatistica",
    tema: "Distribuição normal",
    dificuldade: "media",
    enunciado:
      "Num exame, as notas seguem uma normal com média 500 e desvio padrão 100. Usando z = 1,645 para P(Z < z) = 0,95, qual nota separa os 5% melhores?",
    opcoes: [
      "≈ 696",
      "≈ 664,5",
      "600",
      "≈ 335,5",
      "≈ 516,5",
    ],
    correta: 1,
    explicacao:
      "Os 5% melhores ficam acima do percentil 95. Na normal padrão, esse ponto é z = 1,645, e na escala das notas, x = μ + z · σ = 500 + 1,645 · 100 = 664,5. Quem tira mais que isso supera 95% dos candidatos.\n\n696 usa z = 1,96, que deixa 2,5% acima, e não 5%. 600 está só um desvio padrão acima, com cerca de 16% acima dele. 335,5 é o percentil 5, na cauda de baixo. E 516,5 soma 16,45, como se o desvio padrão fosse 10.",
  },
  {
    materia: "estatistica",
    tema: "Distribuição normal",
    dificuldade: "media",
    enunciado:
      "Ana tirou 80 numa prova com média 70 e desvio padrão 5; Bruno tirou 85 em outra prova, com média 75 e desvio padrão 10. Supondo notas normais, quem se saiu melhor em relação à própria turma?",
    opcoes: [
      "Bruno, por ter a nota maior",
      "Ana, com z = 2 contra z = 1 de Bruno",
      "Os dois igualmente, 10 pontos acima da média",
      "Bruno, com z = 2 contra z = 1 de Ana",
      "Não dá para comparar provas diferentes",
    ],
    correta: 1,
    explicacao:
      "Os escores padronizados colocam as duas provas na mesma escala: Ana tem z = (80 − 70)/5 = 2, e Bruno, z = (85 − 75)/10 = 1. Ana ficou dois desvios padrão acima da média da turma dela, superando cerca de 98% dos colegas; Bruno, um desvio padrão acima, supera cerca de 84%.\n\nA nota bruta de Bruno é maior, mas a prova dele tinha média maior. Os dois ficaram 10 pontos acima da média, mas o espalhamento das turmas é diferente. Os valores de z estão trocados na outra alternativa sobre Bruno. E a padronização serve justamente para comparar provas diferentes.",
  },
  {
    materia: "estatistica",
    tema: "Distribuição normal",
    dificuldade: "media",
    enunciado:
      "Uma variável normal tem média 50, e 15,87% dos valores passam de 60. Sabendo que Φ(1) ≈ 0,8413, qual é o desvio padrão?",
    opcoes: [
      "1",
      "10",
      "15,87",
      "5",
      "60",
    ],
    correta: 1,
    explicacao:
      "Se 15,87% passam de 60, então P(X < 60) = 0,8413 = Φ(1), e 60 corresponde a z = 1. Pela padronização, (60 − 50)/σ = 1, e σ = 10. O valor 60 está exatamente um desvio padrão acima da média.\n\n1 é o escore z, e não o desvio padrão. 15,87 lê a porcentagem como desvio padrão. 5 corresponderia a z = 2, com só 2,3% acima de 60. E 60 é o valor da variável.",
  },
  {
    materia: "estatistica",
    tema: "Distribuição normal",
    dificuldade: "media",
    enunciado:
      "Uma variável normal tem desvio padrão 4, e 97,72% dos valores ficam abaixo de 20. Sabendo que Φ(2) ≈ 0,9772, qual é a média?",
    opcoes: [
      "28",
      "12",
      "20",
      "16",
      "18",
    ],
    correta: 1,
    explicacao:
      "P(X < 20) = 0,9772 = Φ(2) indica que 20 está dois desvios padrão acima da média: (20 − μ)/4 = 2, e μ = 20 − 8 = 12. Conferindo: com média 12 e desvio padrão 4, o valor 20 tem z = (20 − 12)/4 = 2.\n\n28 soma 8 em vez de subtrair, e deixaria 20 abaixo da média. 20 é o valor dado, e não a média. 16 corresponde a z = 1, com só 84% abaixo de 20. E 18 subtrai só 2, confundindo z com a distância na escala original.",
  },
  {
    materia: "estatistica",
    tema: "Distribuição normal",
    dificuldade: "media",
    enunciado:
      "Os tempos de duas tarefas independentes são normais, com desvios padrão de 3 min e 4 min. Qual é o desvio padrão, em minutos, do tempo total das duas tarefas?",
    opcoes: [
      "7",
      "5",
      "25",
      "1",
      "12",
    ],
    correta: 1,
    explicacao:
      "Para tempos independentes, as variâncias se somam: Var(total) = 3² + 4² = 9 + 16 = 25. O desvio padrão é a raiz, 5 min. Desvios padrão não se somam diretamente: parte das variações de uma tarefa compensa as da outra. O total também é normal, com média igual à soma das médias.\n\n7 soma os desvios padrão, o que só valeria se os tempos fossem perfeitamente correlacionados. 25 é a variância, sem tirar a raiz. 1 subtrai os desvios. E 12 os multiplica.",
  },
  {
    materia: "estatistica",
    tema: "Distribuição normal",
    dificuldade: "media",
    enunciado:
      "O tempo de entrega segue uma normal com média 30 min e desvio padrão 5 min. Pela regra empírica 68–95–99,7, aproximadamente que porcentagem das entregas demora mais de 40 min?",
    opcoes: [
      "5%",
      "≈ 2,5%",
      "95%",
      "≈ 16%",
      "≈ 0,15%",
    ],
    correta: 1,
    explicacao:
      "40 min está dois desvios padrão acima da média. Pela regra empírica, 95% dos valores ficam entre μ − 2σ e μ + 2σ; os 5% restantes se dividem igualmente entre as duas caudas, e cerca de 2,5% ficam acima de 40. O valor exato pela tabela é 2,28%.\n\n5% junta as duas caudas. 95% é o miolo da distribuição. 16% é a cauda acima de um desvio padrão, 35 min. E 0,15% é a cauda acima de três desvios padrão, 45 min.",
  },
  {
    materia: "estatistica",
    tema: "Distribuição normal",
    dificuldade: "media",
    enunciado:
      "Uma moeda honesta é lançada 100 vezes. Usando a aproximação normal com correção de continuidade, e Φ(1,1) ≈ 0,8643, qual é a probabilidade de sair no máximo 55 caras?",
    opcoes: [
      "≈ 0,841",
      "≈ 0,5",
      "≈ 0,864",
      "0,55",
      "≈ 0,136",
    ],
    correta: 2,
    explicacao:
      "O número de caras é binomial com média 100 · 0,5 = 50 e desvio padrão √(100 · 0,5 · 0,5) = 5. Com a correção de continuidade, no máximo 55 vira X < 55,5, e z = (55,5 − 50)/5 = 1,1. Então P ≈ Φ(1,1) ≈ 0,864, muito perto do valor exato da binomial, cerca de 0,8644.\n\n0,841 = Φ(1) omite a correção e usa 55 no lugar de 55,5. 0,5 é a probabilidade até a média. 0,55 lê 55 caras em 100 como probabilidade. E 0,136 é a probabilidade do complementar, mais de 55 caras.",
  },
  {
    materia: "estatistica",
    tema: "Distribuição normal",
    dificuldade: "media",
    enunciado:
      "Usando Φ(1) ≈ 0,8413 e Φ(2) ≈ 0,9772, qual é a probabilidade de a normal padrão ficar entre −1 e 2?",
    opcoes: [
      "≈ 0,9545",
      "≈ 0,6827",
      "≈ 0,8185",
      "≈ 0,1359",
      "≈ 0,8413",
    ],
    correta: 2,
    explicacao:
      "P(−1 < Z < 2) = Φ(2) − Φ(−1). Pela simetria, Φ(−1) = 1 − Φ(1) = 0,1587, e a probabilidade é 0,9772 − 0,1587 = 0,8185. Graficamente, é a área de −1 a 0, cerca de 0,3413, mais a de 0 a 2, cerca de 0,4772, e as duas partes somam o mesmo valor.\n\n0,9545 é a área entre −2 e 2. 0,6827 é a área entre −1 e 1. 0,1359 é a área entre 1 e 2. E 0,8413 é Φ(1), que usa só um dos limites.",
  },
  {
    materia: "estatistica",
    tema: "Distribuição normal",
    dificuldade: "media",
    enunciado:
      "Numa normal com desvio padrão 10, os quartis ficam em μ − 0,674σ e μ + 0,674σ. Qual é a amplitude interquartil?",
    opcoes: [
      "≈ 6,7",
      "20",
      "≈ 13,5",
      "10",
      "≈ 27",
    ],
    correta: 2,
    explicacao:
      "A amplitude interquartil é Q3 − Q1 = (μ + 0,674σ) − (μ − 0,674σ) = 1,348σ ≈ 13,5. Os 50% centrais de uma normal ocupam um intervalo de cerca de 1,35 desvio padrão, menor que o intervalo μ ± σ, que contém 68%.\n\n6,7 é a distância de cada quartil até a média, sem dobrar. 20 é a largura de μ − σ a μ + σ. 10 é o desvio padrão. E 27 dobra a amplitude interquartil.",
  },
  {
    materia: "estatistica",
    tema: "Distribuição normal",
    dificuldade: "media",
    enunciado:
      "As notas de 200 alunos seguem, aproximadamente, uma normal com média 6 e desvio padrão 1. Usando Φ(2) ≈ 0,9772, quantos alunos devem ter nota acima de 8?",
    opcoes: [
      "Cerca de 32",
      "Cerca de 9",
      "Cerca de 5",
      "Cerca de 50",
      "Nenhum",
    ],
    correta: 2,
    explicacao:
      "8 está dois desvios padrão acima da média, e P(X > 8) = 1 − 0,9772 = 0,0228. Em 200 alunos, espera-se 200 · 0,0228 ≈ 4,6, ou cerca de 5 alunos.\n\n32 usa a cauda acima de um desvio padrão, 15,87%. 9 soma as duas caudas, acima de 8 e abaixo de 4. 50 corresponde a um quarto da turma, sem base na normal. E nenhum supõe que valores a dois desvios padrão da média sejam impossíveis, o que não é verdade.",
  },
  {
    materia: "estatistica",
    tema: "Distribuição normal",
    dificuldade: "media",
    enunciado:
      "A temperatura em uma cidade, em graus Celsius, segue uma normal com média 20 e desvio padrão 3. Convertendo para Fahrenheit por F = 1,8 · C + 32, quais são a média e o desvio padrão?",
    opcoes: [
      "Média 68 °F e desvio padrão 37,4 °F",
      "Média 36 °F e desvio padrão 5,4 °F",
      "Média 68 °F e desvio padrão 5,4 °F",
      "Média 68 °F e desvio padrão 3 °F",
      "Média 52 °F e desvio padrão 35 °F",
    ],
    correta: 2,
    explicacao:
      "Numa transformação linear, a média sofre a mesma transformação: 1,8 · 20 + 32 = 68 °F. O desvio padrão é multiplicado só pelo fator de escala, 1,8, porque a constante 32 desloca todos os valores igualmente: 1,8 · 3 = 5,4 °F. A distribuição continua normal.\n\n37,4 soma 32 ao desvio padrão, como se o deslocamento aumentasse a dispersão. 36 esquece de somar 32 à média. 3 °F ignora a mudança de escala. E 52 e 35 somam 32 sem multiplicar por 1,8.",
  },
  {
    materia: "estatistica",
    tema: "Distribuição normal",
    dificuldade: "media",
    enunciado:
      "O peso de um pacote segue uma normal com média 500 g e desvio padrão 10 g. Usando Φ(1) ≈ 0,8413, qual é a probabilidade de, em 3 pacotes independentes, nenhum pesar menos de 490 g?",
    opcoes: [
      "≈ 0,841",
      "≈ 0,004",
      "≈ 0,596",
      "≈ 0,476",
      "≈ 0,524",
    ],
    correta: 2,
    explicacao:
      "Para um pacote, 490 g corresponde a z = −1, e P(X ≥ 490) = Φ(1) ≈ 0,8413. Com 3 pacotes independentes, P(nenhum abaixo) = 0,8413³ ≈ 0,596. A normal dá a probabilidade de cada pacote, e a independência permite multiplicar.\n\n0,841 considera um pacote só. 0,004 = 0,1587³ é a probabilidade de os três ficarem abaixo. 0,476 soma 0,1587 três vezes, uma aproximação ruim da chance de algum ficar abaixo. E 0,524 é 1 − 0,476, que herda o mesmo erro.",
  },
  {
    materia: "estatistica",
    tema: "Distribuição normal",
    dificuldade: "media",
    enunciado:
      "Uma variável normal tem média 80 e desvio padrão 12. Para a média de uma amostra aleatória de 16 observações, e usando Φ(2) ≈ 0,9772, qual é a probabilidade de a média amostral passar de 86?",
    opcoes: [
      "≈ 0,3085",
      "≈ 0,9772",
      "≈ 0,0228",
      "0,5",
      "Praticamente 0",
    ],
    correta: 2,
    explicacao:
      "A média de 16 observações independentes de uma normal também é normal, com média 80 e desvio padrão 12/√16 = 3. Então z = (86 − 80)/3 = 2, e P(média > 86) = 1 − 0,9772 = 0,0228. Médias variam bem menos que observações isoladas.\n\n0,3085 usa o desvio padrão de uma observação, 12, e dá z = 0,5. 0,9772 é P(média < 86). 0,5 seria a resposta para 80, a própria média. E praticamente 0 vem de dividir 12 por 16, e não por √16, o que dá z = 8.",
  },
  {
    materia: "estatistica",
    tema: "Distribuição normal",
    dificuldade: "media",
    enunciado:
      "Qual valor z deixa exatamente 2,5% da área da normal padrão em cada cauda, isto é, P(−z < Z < z) = 0,95?",
    opcoes: [
      "≈ 1,645",
      "2,5",
      "≈ 1,96",
      "≈ 2,58",
      "0,025",
    ],
    correta: 2,
    explicacao:
      "Se 2,5% ficam em cada cauda, P(Z < z) = 0,975, e a tabela dá z ≈ 1,96. É o valor usado em intervalos de 95% de confiança. A regra empírica arredonda esse número para 2.\n\n1,645 deixa 5% em uma cauda só, o que dá 90% no centro. 2,5 lê a porcentagem como z. 2,58 deixa 0,5% em cada cauda, com 99% no centro. E 0,025 é a área de uma cauda, e não o ponto.",
  },
  {
    materia: "estatistica",
    tema: "Distribuição normal",
    dificuldade: "media",
    enunciado:
      "Sabendo que Φ(1,645) ≈ 0,95, qual é a probabilidade de a normal padrão ficar a mais de 1,645 de zero, em qualquer direção?",
    opcoes: [
      "≈ 0,05",
      "≈ 0,95",
      "≈ 0,10",
      "≈ 0,90",
      "≈ 0,025",
    ],
    correta: 2,
    explicacao:
      "Cada cauda, abaixo de −1,645 e acima de 1,645, tem área 1 − 0,95 = 0,05. As duas juntas somam 0,10. Esse z é o usado em intervalos de 90% de confiança e em testes unilaterais de 5%, e a soma das duas caudas é o que se compara com um nível de significância bilateral.\n\n0,05 é uma cauda só. 0,95 é P(Z < 1,645). 0,90 é a área central, entre −1,645 e 1,645. E 0,025 é a área de cada cauda para z = 1,96.",
  },
  {
    materia: "estatistica",
    tema: "Distribuição normal",
    dificuldade: "media",
    enunciado:
      "As notas de uma turma seguem uma normal com média 6 e desvio padrão 1,5. Usando Φ(1) ≈ 0,8413, que porcentagem dos alunos tirou entre 6 e 7,5?",
    opcoes: [
      "≈ 68,3%",
      "50%",
      "≈ 34,1%",
      "≈ 84,1%",
      "≈ 15,9%",
    ],
    correta: 2,
    explicacao:
      "Os limites padronizados são z = 0 e z = (7,5 − 6)/1,5 = 1. A área entre a média e um desvio padrão acima é Φ(1) − 0,5 = 0,3413, ou cerca de 34,1% dos alunos. Pela simetria, a mesma porcentagem tirou entre 4,5 e 6.\n\n68,3% é a área de um desvio padrão para cada lado da média, de 4,5 a 7,5. 50% é tudo acima da média. 84,1% é Φ(1), todos abaixo de 7,5. E 15,9% são os que ficaram acima de 7,5.",
  },
  {
    materia: "estatistica",
    tema: "Distribuição normal",
    dificuldade: "media",
    enunciado:
      "Em que pontos a curva de densidade de uma normal com média μ e desvio padrão σ muda de concavidade?",
    opcoes: [
      "Só em μ",
      "Em μ − 2σ e μ + 2σ",
      "Em μ − 3σ e μ + 3σ",
      "Em μ − σ e μ + σ",
      "Ela não muda de concavidade",
    ],
    correta: 3,
    explicacao:
      "A segunda derivada da densidade é proporcional a [(x − μ)² − σ²] vezes uma exponencial positiva. Ela muda de sinal quando (x − μ)² = σ², isto é, em x = μ ± σ. Entre esses pontos, a curva é côncava para baixo, formando o sino; fora deles, é côncava para cima, formando as caudas.\n\nEm μ, a curva tem o máximo, e não uma inflexão. Os pontos a 2σ e a 3σ da média estão nas caudas, onde a concavidade já é para cima. E a curva muda de concavidade duas vezes.",
  },
  {
    materia: "estatistica",
    tema: "Distribuição normal",
    dificuldade: "media",
    enunciado:
      "Uma máquina enche garrafas com volume normal de desvio padrão 4 mL. Usando z = 1,96, em que média ela deve ser regulada para que só 2,5% das garrafas tenham menos de 500 mL?",
    opcoes: [
      "≈ 492,2 mL",
      "504 mL",
      "≈ 506,6 mL",
      "≈ 507,8 mL",
      "510 mL",
    ],
    correta: 3,
    explicacao:
      "Para que só 2,5% fiquem abaixo de 500, esse valor precisa estar 1,96 desvio padrão abaixo da média: (500 − μ)/4 = −1,96. Então μ = 500 + 1,96 · 4 = 507,84 mL. Regular a média um pouco acima do volume nominal é o que protege o consumidor.\n\n492,2 subtrai em vez de somar, e deixaria a maioria das garrafas abaixo de 500. 504 usa só um desvio padrão, com cerca de 16% abaixo. 506,6 usa z = 1,645, que deixa 5% abaixo. E 510 é um arredondamento sem base na normal.",
  },
  {
    materia: "estatistica",
    tema: "Distribuição normal",
    dificuldade: "media",
    enunciado:
      "Numa prova com notas aproximadamente normais, um aluno obteve escore padronizado z = −1,5. O que isso significa?",
    opcoes: [
      "Tirou nota −1,5",
      "Ficou 1,5 ponto abaixo da média",
      "Superou cerca de 85% da turma",
      "Ficou 1,5 desvio padrão abaixo da média",
      "Ficou acima da média da turma",
    ],
    correta: 3,
    explicacao:
      "O escore z mede a posição em desvios padrão: z = −1,5 indica que a nota ficou 1,5 desvio padrão abaixo da média. Numa distribuição normal, só cerca de 6,7% dos alunos ficam abaixo desse ponto, e cerca de 93% ficam acima.\n\nO z não é a nota, e notas negativas nem existem em muitas provas. A distância em pontos depende do desvio padrão: com σ = 2, são 3 pontos. Superar 85% corresponderia a z ≈ 1. E o sinal negativo indica posição abaixo da média.",
  },
  {
    materia: "estatistica",
    tema: "Distribuição normal",
    dificuldade: "media",
    enunciado:
      "A duração de uma bateria segue uma normal com média 10 h e desvio padrão 1,5 h. O fabricante troca as baterias que durarem menos que t. Usando z = −2,326 para 1%, qual t faz trocar só 1% das baterias?",
    opcoes: [
      "≈ 13,5 h",
      "8,5 h",
      "≈ 7,1 h",
      "≈ 6,5 h",
      "≈ 7,5 h",
    ],
    correta: 3,
    explicacao:
      "O limite t deve deixar 1% abaixo, e na normal padrão esse ponto é z = −2,326. Na escala das horas, t = μ + z · σ = 10 − 2,326 · 1,5 ≈ 6,51 h. Só baterias muito abaixo da média são trocadas.\n\n13,5 h usa z positivo e fica na cauda de cima. 8,5 h está um desvio padrão abaixo, com cerca de 16% das baterias abaixo dela. 7,1 h usa z = −1,96, que deixa 2,5% abaixo. E 7,5 h usa z = −1,645, que deixa 5% abaixo.",
  },
  {
    materia: "estatistica",
    tema: "Distribuição normal",
    dificuldade: "media",
    enunciado:
      "A altura de uma criança está no percentil 84 para a idade, numa distribuição aproximadamente normal. A quantos desvios padrão acima da média, aproximadamente, ela está?",
    opcoes: [
      "0,84",
      "84",
      "2",
      "1",
      "0,16",
    ],
    correta: 3,
    explicacao:
      "O percentil 84 deixa 84% abaixo, e na normal padrão isso corresponde a Φ(z) = 0,84, com z ≈ 1: pela regra empírica, 50% ficam abaixo da média e mais 34% entre a média e um desvio padrão acima. A criança está cerca de um desvio padrão acima da média.\n\n0,84 é a proporção abaixo dela, e não o escore z. 84 é o próprio percentil. 2 corresponderia ao percentil 97,7. E 0,16 é a proporção acima dela.",
  },
  {
    materia: "estatistica",
    tema: "Distribuição normal",
    dificuldade: "media",
    enunciado:
      "A densidade da normal padrão em z = 0 vale cerca de 0,399. Isso significa que P(Z = 0) = 0,399?",
    opcoes: [
      "Sim: é a probabilidade de Z valer 0",
      "Não: P(Z = 0) = 0,5",
      "Sim, mas só para a normal padrão",
      "Não: é uma densidade, e P(Z = 0) = 0",
      "Não: P(Z = 0) = 1",
    ],
    correta: 3,
    explicacao:
      "Numa variável contínua, a densidade não é uma probabilidade: probabilidades são áreas sob a curva. A área sobre um único ponto é zero, e P(Z = 0) = 0. O valor 0,399 indica que, perto de 0, a probabilidade de um intervalo curto é aproximadamente 0,399 vezes o seu comprimento: P(−0,01 < Z < 0,01) ≈ 0,008.\n\nA densidade não é a probabilidade de um valor, na normal padrão ou em qualquer outra. 0,5 é P(Z < 0). E 1 é a área total.",
  },
  {
    materia: "estatistica",
    tema: "Distribuição normal",
    dificuldade: "media",
    enunciado:
      "Uma variável normal tem média 50, e P(X < 42) = 0,3. Qual é P(X > 58)?",
    opcoes: [
      "0,7",
      "0,4",
      "0,6",
      "0,3",
      "0,15",
    ],
    correta: 3,
    explicacao:
      "42 e 58 estão à mesma distância da média, 8 unidades para cada lado. Pela simetria da normal, a cauda abaixo de 42 e a cauda acima de 58 têm a mesma área: P(X > 58) = P(X < 42) = 0,3. Não é preciso conhecer o desvio padrão.\n\n0,7 é P(X > 42), o complementar da cauda dada. 0,4 é a área entre 42 e 58, 1 − 0,3 − 0,3. 0,6 junta as duas caudas. E 0,15 divide a cauda ao meio sem motivo.",
  },
  {
    materia: "estatistica",
    tema: "Distribuição normal",
    dificuldade: "media",
    enunciado:
      "O peso de uma maçã segue uma normal com média 150 g e desvio padrão 20 g. Uma caixa leva 4 maçãs independentes. Qual é o desvio padrão do peso total?",
    opcoes: [
      "80 g",
      "20 g",
      "10 g",
      "40 g",
      "1.600 g",
    ],
    correta: 3,
    explicacao:
      "As variâncias de variáveis independentes se somam: Var(total) = 4 · 20² = 1.600, e o desvio padrão é √1.600 = 40 g. Em geral, a soma de n valores independentes tem desvio padrão σ√n, e não nσ: as variações para cima e para baixo se compensam em parte.\n\n80 g soma os desvios padrão, como se as maçãs variassem sempre juntas. 20 g é o de uma maçã. 10 g divide por √4, o que seria o desvio padrão da média das 4 maçãs. E 1.600 é a variância do total.",
  },
  {
    materia: "estatistica",
    tema: "Distribuição normal",
    dificuldade: "media",
    enunciado:
      "Sabendo que Φ(0,84) ≈ 0,80, qual é o valor z tal que P(Z > z) = 0,20?",
    opcoes: [
      "≈ −0,84",
      "0,20",
      "0,80",
      "≈ 0,84",
      "≈ 1,28",
    ],
    correta: 3,
    explicacao:
      "P(Z > z) = 0,20 equivale a P(Z < z) = 0,80, e a tabela dá z ≈ 0,84. É o ponto acima do qual ficam os 20% maiores valores, o percentil 80 da normal padrão. Esse passo, de probabilidade para z, é o inverso da consulta usual à tabela; na escala original, o ponto é μ + 0,84σ.\n\n−0,84 deixa 20% abaixo dele, e não acima. 0,20 e 0,80 são probabilidades, e não pontos da escala z. E 1,28 deixa só 10% acima, o percentil 90.",
  },
  {
    materia: "estatistica",
    tema: "Distribuição normal",
    dificuldade: "media",
    enunciado:
      "A máquina A enche pacotes com peso normal de média 500 g e desvio padrão 5 g; a máquina B, com média 502 g e desvio padrão 10 g. Qual delas produz maior fração de pacotes abaixo de 490 g?",
    opcoes: [
      "A máquina A, por ter média menor",
      "As duas produzem a mesma fração",
      "Nenhuma produz pacotes abaixo de 490 g",
      "A máquina B, apesar da média maior",
      "Não dá para comparar sem o tamanho das amostras",
    ],
    correta: 3,
    explicacao:
      "Para A, 490 g corresponde a z = (490 − 500)/5 = −2, com cerca de 2,3% abaixo. Para B, z = (490 − 502)/10 = −1,2, com cerca de 11,5% abaixo. A máquina B, mais variável, produz mais pacotes leves, embora sua média seja maior.\n\nA média menor de A é compensada pelo desvio padrão pequeno. As frações são diferentes. As duas produzem alguns pacotes abaixo de 490 g, porque a normal não tem limite inferior. E as frações vêm das distribuições, sem depender de amostras.",
  },
  {
    materia: "estatistica",
    tema: "Distribuição normal",
    dificuldade: "dificil",
    enunciado:
      "X e Y são normais independentes, X com média 100 e desvio padrão 6, e Y com média 90 e desvio padrão 8. Usando Φ(1) ≈ 0,8413, qual é a probabilidade de X ser maior que Y?",
    opcoes: [
      "0,5",
      "≈ 0,762",
      "≈ 0,952",
      "≈ 0,1587",
      "≈ 0,8413",
    ],
    correta: 4,
    explicacao:
      "A diferença D = X − Y é normal, com média 100 − 90 = 10 e variância 6² + 8² = 100, isto é, desvio padrão 10: na diferença, as variâncias também se somam. Então P(X > Y) = P(D > 0) = P(Z > −1) = Φ(1) ≈ 0,8413.\n\n0,5 ignora a diferença entre as médias. 0,762 soma os desvios padrão, 6 + 8 = 14, em vez das variâncias. 0,952 usa só o desvio padrão de X. E 0,1587 é P(Y > X), o complementar.",
  },
  {
    materia: "estatistica",
    tema: "Distribuição normal",
    dificuldade: "dificil",
    enunciado:
      "Numa variável normal de média 100, 25% dos valores passam de 110. Sabendo que P(Z < 0,674) ≈ 0,75, que porcentagem dos valores passa de 120?",
    opcoes: [
      "12,5%",
      "≈ 6,25%",
      "≈ 2,3%",
      "≈ 15,9%",
      "≈ 8,9%",
    ],
    correta: 4,
    explicacao:
      "Se 25% passam de 110, então 110 é o terceiro quartil, e (110 − 100)/σ = 0,674, o que dá σ ≈ 14,8. O valor 120 fica em z = 20/14,8 ≈ 1,35, e a tabela dá P(Z > 1,35) ≈ 0,089, cerca de 8,9%.\n\n12,5% supõe que dobrar a distância à média divide a cauda por 2. 6,25% eleva 25% ao quadrado. 2,3% supõe σ = 10, com 120 a dois desvios padrão. E 15,9% supõe σ = 20, com 120 a um desvio padrão.",
  },
  {
    materia: "estatistica",
    tema: "Distribuição normal",
    dificuldade: "dificil",
    enunciado:
      "Sabendo que Φ(1) ≈ 0,8413 e Φ(2) ≈ 0,9772, qual é a probabilidade de a normal padrão passar de 2, dado que passou de 1?",
    opcoes: [
      "≈ 0,0228",
      "0,5",
      "≈ 0,1587",
      "≈ 0,0036",
      "≈ 0,144",
    ],
    correta: 4,
    explicacao:
      "Como Z > 2 implica Z > 1, a interseção é o próprio evento Z > 2, e P(Z > 2 | Z > 1) = P(Z > 2)/P(Z > 1) = 0,0228/0,1587 ≈ 0,144. Entre os valores que passam de um desvio padrão, só cerca de 14% passam de dois: a cauda da normal diminui muito depressa.\n\n0,0228 é P(Z > 2) sem a condição. 0,5 supõe que a cauda se divide ao meio. 0,1587 é a probabilidade da condição. E 0,0036 multiplica as duas probabilidades, como se os eventos fossem independentes.",
  },
  {
    materia: "estatistica",
    tema: "Distribuição normal",
    dificuldade: "dificil",
    enunciado:
      "A nota final é 0,4 · P1 + 0,6 · P2, em que P1 e P2 são normais independentes, P1 com desvio padrão 2 e P2 com desvio padrão 1. Qual é o desvio padrão da nota final?",
    opcoes: [
      "1,4",
      "≈ 1,48",
      "≈ 2,24",
      "2,2",
      "1",
    ],
    correta: 4,
    explicacao:
      "Para uma combinação aX + bY de variáveis independentes, a variância é a² · Var(X) + b² · Var(Y). Aqui: 0,4² · 4 + 0,6² · 1 = 0,64 + 0,36 = 1, e o desvio padrão é 1. Os pesos entram ao quadrado porque a variância é medida em unidades ao quadrado.\n\n1,4 combina os desvios padrão linearmente, 0,4 · 2 + 0,6 · 1. 2,2 aplica os pesos às variâncias sem elevá-los ao quadrado, e 1,48 é a raiz desse valor. E 2,24 = √5 ignora os pesos.",
  },
  {
    materia: "estatistica",
    tema: "Distribuição normal",
    dificuldade: "dificil",
    enunciado:
      "Numa variável normal, 15,87% dos valores ficam abaixo de 40 e 97,72% ficam abaixo de 70. Usando Φ(1) ≈ 0,8413 e Φ(2) ≈ 0,9772, quais são a média e o desvio padrão?",
    opcoes: [
      "Média 55 e desvio padrão 15",
      "Média 50 e desvio padrão 30",
      "Média 40 e desvio padrão 10",
      "Média 55 e desvio padrão 10",
      "Média 50 e desvio padrão 10",
    ],
    correta: 4,
    explicacao:
      "15,87% abaixo de 40 põe o valor 40 em z = −1, e 97,72% abaixo de 70 põe 70 em z = 2. Então μ − σ = 40 e μ + 2σ = 70. Subtraindo, 3σ = 30, σ = 10 e μ = 50.\n\nMédia 55 toma o ponto médio entre 40 e 70, como se os dois valores estivessem à mesma distância da média. Desvio padrão 30 é a distância entre os dois valores, que corresponde a 3σ. Média 40 confunde o primeiro valor com a média. E desvio padrão 15 divide 30 por 2, e não por 3.",
  },
  {
    materia: "estatistica",
    tema: "Distribuição normal",
    dificuldade: "dificil",
    enunciado:
      "Usando 1/√(2π) ≈ 0,399, qual é a altura máxima da curva de densidade de uma normal com desvio padrão 0,2?",
    opcoes: [
      "≈ 0,399",
      "1",
      "≈ 0,080",
      "0,2",
      "≈ 1,99",
    ],
    correta: 4,
    explicacao:
      "O máximo da densidade fica na média e vale 1/(σ√(2π)) = 0,399/0,2 ≈ 1,99. Uma densidade pode passar de 1: ela não é uma probabilidade, e o que precisa valer 1 é a área total. Com σ = 0,2, a curva é estreita e, para ter área 1, precisa ser alta.\n\n0,399 é a altura da normal padrão, com σ = 1. 1 supõe, sem motivo, que a densidade não passa de 1. 0,080 multiplica por σ em vez de dividir. E 0,2 é o próprio desvio padrão.",
  },
  {
    materia: "estatistica",
    tema: "Distribuição normal",
    dificuldade: "dificil",
    enunciado:
      "Lançam-se 100 dados honestos. Sabendo que cada dado tem média 3,5 e variância 35/12, e usando Φ(1,2) ≈ 0,885, qual é, aproximadamente, a probabilidade de a soma passar de 370?",
    opcoes: [
      "≈ 5%",
      "≈ 50%",
      "≈ 88,5%",
      "≈ 2,3%",
      "≈ 11,5%",
    ],
    correta: 4,
    explicacao:
      "A soma tem média 100 · 3,5 = 350 e variância 100 · 35/12 ≈ 291,7, com desvio padrão ≈ 17,1. Pelo teorema central do limite, ela é aproximadamente normal. Com correção de continuidade, passar de 370 é S ≥ 370,5, e z = (370,5 − 350)/17,1 ≈ 1,2. Então P ≈ 1 − 0,885 = 0,115, cerca de 11,5%.\n\n5% usaria z = 1,645. 50% seria a chance de passar da média. 88,5% é a probabilidade do complementar, não passar de 370. E 2,3% usa √100 = 10 como desvio padrão, esquecendo a variância de cada dado.",
  },
  {
    materia: "estatistica",
    tema: "Distribuição normal",
    dificuldade: "dificil",
    enunciado:
      "Um processo tem duas etapas independentes, com durações normais de médias 30 min e 20 min e desvios padrão 4 min e 3 min. Usando z = 1,645, qual duração total só é superada em 5% dos casos?",
    opcoes: [
      "≈ 61,5 min",
      "≈ 59,8 min",
      "55 min",
      "≈ 41,8 min",
      "≈ 58,2 min",
    ],
    correta: 4,
    explicacao:
      "A duração total é normal, com média 30 + 20 = 50 e variância 4² + 3² = 25, isto é, desvio padrão 5. O ponto que só é superado em 5% dos casos é μ + 1,645σ = 50 + 1,645 · 5 ≈ 58,2 min.\n\n61,5 soma os desvios padrão, 4 + 3 = 7, em vez das variâncias. 59,8 usa z = 1,96, que deixa 2,5% acima. 55 está só um desvio padrão acima, com cerca de 16% acima dele. E 41,8 é o ponto da cauda de baixo, superado em 95% dos casos.",
  },
  {
    materia: "estatistica",
    tema: "Distribuição normal",
    dificuldade: "dificil",
    enunciado:
      "Num boxplot, são marcados como discrepantes os valores além de Q1 − 1,5 · AIQ e de Q3 + 1,5 · AIQ. Para dados normais, com quartis em μ ± 0,674σ, que porcentagem dos valores fica entre essas cercas?",
    opcoes: [
      "95%",
      "50%",
      "≈ 99,7%",
      "75%",
      "≈ 99,3%",
    ],
    correta: 4,
    explicacao:
      "A amplitude interquartil é AIQ = 1,348σ, e as cercas ficam em μ − 0,674σ − 1,5 · 1,348σ = μ − 2,696σ e, simetricamente, em μ + 2,696σ. A probabilidade de uma normal ficar entre ±2,696σ é cerca de 0,993: só uns 0,7% dos valores são marcados como discrepantes, mesmo sem nada de anormal nos dados.\n\n95% corresponderia a cercas em ±1,96σ. 50% é a proporção entre os quartis, dentro da caixa. 99,7% corresponde a ±3σ, um pouco além das cercas. E 75% é a proporção abaixo do terceiro quartil.",
  },
  {
    materia: "estatistica",
    tema: "Distribuição normal",
    dificuldade: "dificil",
    enunciado:
      "As notas de um exame seguem uma normal com média 500 e desvio padrão 100. Para a normal padrão, a média dos valores acima de 1 é φ(1)/[1 − Φ(1)] ≈ 1,525. Qual é a nota média dos candidatos que passaram de 600?",
    opcoes: [
      "600",
      "≈ 700",
      "≈ 550",
      "≈ 752,5",
      "≈ 652,5",
    ],
    correta: 4,
    explicacao:
      "Padronizando, passar de 600 é Z > 1, e a média condicional de Z nessa região é cerca de 1,525. Voltando à escala das notas: 500 + 1,525 · 100 ≈ 652,5. O grupo selecionado tem média acima do corte, porque inclui notas bem maiores que 600.\n\n600 é o próprio corte, que é o menor valor do grupo. 700 supõe que a média do grupo fica dois desvios padrão acima, sem base. 550 é o ponto médio entre a média geral e o corte. E 752,5 soma 152,5 ao corte, e não à média.",
  },
];
