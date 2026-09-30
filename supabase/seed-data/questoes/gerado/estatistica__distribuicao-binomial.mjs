/* Distribuição binomial (50 questões) — estatistica.

   Autorais, escritas por Claude (Anthropic) em 2026-09-30 seguindo as cinco
   regras de CONTINUAR-MATERIAS-POR-OBJETIVO.md. Nenhuma é atribuída a banca
   ou a prova real.

   Conferência do gabarito: 49 de 50 recalculadas por código que chega à
   resposta por outro caminho (ver .rascunho/questoes-objetivo/estatistica__distribuicao-binomial.mjs);
   1 conceituais aguardam a revisão independente listada no relatório.

   Montado por scripts/montar-questoes-objetivo.mjs; gabarito redistribuído
   por scripts/rebalancear-gabarito.mjs. Relatório em
   _relatorios/estatistica__distribuicao-binomial.json. */

export const questoes = [
  {
    materia: "estatistica",
    tema: "Distribuição binomial",
    dificuldade: "facil",
    enunciado:
      "Qual destas situações pode ser modelada por uma distribuição binomial?",
    opcoes: [
      "O número de caras em 10 lançamentos de uma moeda",
      "O número de lançamentos até sair a primeira cara",
      "A altura de um aluno sorteado",
      "O tempo de espera numa fila",
      "A soma dos pontos de dois dados",
    ],
    correta: 0,
    explicacao:
      "A binomial conta sucessos em um número fixo de ensaios independentes, cada um com dois resultados e a mesma probabilidade de sucesso. O número de caras em 10 lançamentos cumpre tudo: n = 10, cada lançamento dá cara ou coroa, e p = 1/2 em todos.\n\nO número de lançamentos até a primeira cara não tem n fixo: é a distribuição geométrica. Altura e tempo de espera são medidas contínuas, e não contagens de sucessos. E a soma de dois dados vai de 2 a 12, sem a estrutura de sucessos e fracassos.",
  },
  {
    materia: "estatistica",
    tema: "Distribuição binomial",
    dificuldade: "facil",
    enunciado:
      "Quatro moedas honestas são lançadas juntas. Qual é a probabilidade de saírem exatamente 3 caras?",
    opcoes: [
      "1/4",
      "3/4",
      "1/16",
      "3/16",
      "1/2",
    ],
    correta: 0,
    explicacao:
      "O número de caras segue uma binomial com n = 4 e p = 1/2. P(X = 3) = C(4, 3) · (1/2)³ · (1/2)¹ = 4/16 = 1/4. As quatro sequências favoráveis diferem só na posição da coroa: no primeiro, segundo, terceiro ou quarto lançamento.\n\n3/4 lê 3 caras em 4 moedas como proporção. 1/16 é a probabilidade de uma sequência específica, sem o fator C(4, 3) = 4. 3/16 usa 3 no lugar de C(4, 3), confundindo a contagem. E 1/2 é a probabilidade de uma única moeda dar cara.",
  },
  {
    materia: "estatistica",
    tema: "Distribuição binomial",
    dificuldade: "facil",
    enunciado:
      "Um vendedor fecha negócio em 30% das visitas, de forma independente. Em 20 visitas, qual é o número esperado de negócios fechados?",
    opcoes: [
      "6",
      "0,3",
      "20",
      "4,2",
      "14",
    ],
    correta: 0,
    explicacao:
      "O número de negócios é binomial com n = 20 e p = 0,3, e a média é E(X) = n · p = 20 · 0,3 = 6. Em média, 30% das 20 visitas dão negócio. Isso não garante 6 negócios em cada período de 20 visitas: é o valor em torno do qual os resultados se distribuem.\n\n0,3 é a probabilidade de fechar em uma visita. 20 é o número de visitas. 4,2 é a variância, n · p · (1 − p). E 14 é o número esperado de visitas sem negócio, n · (1 − p).",
  },
  {
    materia: "estatistica",
    tema: "Distribuição binomial",
    dificuldade: "facil",
    enunciado:
      "Uma variável binomial tem n = 50 e p = 0,2. Qual é a sua variância?",
    opcoes: [
      "8",
      "10",
      "40",
      "≈ 2,83",
      "0,16",
    ],
    correta: 0,
    explicacao:
      "A variância da binomial é n · p · (1 − p) = 50 · 0,2 · 0,8 = 8. Cada ensaio contribui com p · (1 − p) = 0,16, e as contribuições se somam porque os ensaios são independentes. Com p perto de 0 ou de 1, a variância fica pequena, porque quase todos os ensaios dão o mesmo resultado.\n\n10 é a média, n · p. 40 é o número esperado de fracassos. 2,83 é o desvio padrão, a raiz de 8. E 0,16 é a variância de um único ensaio.",
  },
  {
    materia: "estatistica",
    tema: "Distribuição binomial",
    dificuldade: "facil",
    enunciado:
      "Para X binomial com n = 5 e p = 0,4, qual expressão calcula P(X = 2)?",
    opcoes: [
      "C(5, 2) · 0,4² · 0,6³",
      "0,4² · 0,6³",
      "C(5, 2) · 0,4³ · 0,6²",
      "C(5, 2) · 0,4²",
      "5 · 0,4 · 2",
    ],
    correta: 0,
    explicacao:
      "P(X = k) = C(n, k) · pᵏ · (1 − p)ⁿ⁻ᵏ. Com n = 5, k = 2 e p = 0,4: C(5, 2) · 0,4² · 0,6³ = 10 · 0,16 · 0,216 ≈ 0,346. O fator C(5, 2) = 10 conta as posições possíveis dos 2 sucessos entre os 5 ensaios, e cada sequência tem probabilidade 0,4² · 0,6³.\n\n0,4² · 0,6³ é a probabilidade de uma única sequência, sem contar as posições. Trocar os expoentes dá a probabilidade de 3 sucessos. Omitir 0,6³ ignora que os outros 3 ensaios precisam fracassar. E 5 · 0,4 · 2 não tem relação com a fórmula.",
  },
  {
    materia: "estatistica",
    tema: "Distribuição binomial",
    dificuldade: "facil",
    enunciado:
      "Cada peça de um lote tem probabilidade 0,1 de ser defeituosa, independentemente das outras. Sorteando 4 peças, qual é a probabilidade de nenhuma ser defeituosa?",
    opcoes: [
      "0,6561",
      "0,0001",
      "0,4",
      "0,3439",
      "0,9",
    ],
    correta: 0,
    explicacao:
      "Nenhuma defeituosa significa X = 0 numa binomial com n = 4 e p = 0,1: P(X = 0) = 0,9⁴ = 0,6561. Cada peça é boa com probabilidade 0,9, e a independência permite multiplicar.\n\n0,0001 = 0,1⁴ é a probabilidade de as quatro serem defeituosas. 0,4 soma 0,1 quatro vezes, como se fosse a chance de alguma defeituosa. 0,3439 é a probabilidade de pelo menos uma defeituosa, 1 − 0,6561. E 0,9 considera uma peça só.",
  },
  {
    materia: "estatistica",
    tema: "Distribuição binomial",
    dificuldade: "facil",
    enunciado:
      "A distribuição binomial com n = 6 e p = 1/2 é simétrica. P(X = 2) é igual a P(X = k) para qual outro valor de k?",
    opcoes: [
      "4",
      "2",
      "3",
      "6",
      "5",
    ],
    correta: 0,
    explicacao:
      "Com p = 1/2, sucesso e fracasso têm a mesma chance, e a distribuição é simétrica em torno de n/2 = 3: P(X = k) = P(X = n − k). Então P(X = 2) = P(X = 4) = 15/64, porque C(6, 2) = C(6, 4) = 15.\n\n2 é o próprio valor, e não outro. 3 é o centro, o valor mais provável, com 20/64. 6 corresponde a C(6, 6) = 1, uma só sequência. E 5 corresponde a C(6, 5) = 6 sequências.",
  },
  {
    materia: "estatistica",
    tema: "Distribuição binomial",
    dificuldade: "facil",
    enunciado:
      "Para um número de ensaios n fixo, qual valor de p torna máxima a variância de uma binomial?",
    opcoes: [
      "1/2",
      "1",
      "0",
      "1/4",
      "Depende de n",
    ],
    correta: 0,
    explicacao:
      "A variância é n · p · (1 − p), e o produto p · (1 − p) é máximo quando p = 1/2, com valor 1/4. É o caso de maior incerteza: sucesso e fracasso igualmente prováveis. Longe de 1/2, um dos resultados domina, e o número de sucessos varia menos.\n\nCom p = 1 ou p = 0, todos os ensaios dão o mesmo resultado, e a variância é zero. 1/4 é o valor máximo de p · (1 − p), e não o p que o produz. E o p ótimo não depende de n, que só multiplica a variância.",
  },
  {
    materia: "estatistica",
    tema: "Distribuição binomial",
    dificuldade: "facil",
    enunciado:
      "Um aluno chuta todas as 20 questões de uma prova, cada uma com 5 alternativas e uma só correta. Qual é o número esperado de acertos?",
    opcoes: [
      "4",
      "5",
      "20",
      "0,2",
      "16",
    ],
    correta: 0,
    explicacao:
      "O número de acertos é binomial com n = 20 e p = 1/5 = 0,2, e a média é n · p = 20 · 0,2 = 4 acertos. Chutando, espera-se acertar uma em cada cinco questões. O resultado varia de aluno para aluno: o desvio padrão é a raiz de 20 · 0,2 · 0,8 = 3,2, cerca de 1,8 acerto.\n\n5 é o número de alternativas. 20 é o total de questões. 0,2 é a probabilidade de acertar uma questão. E 16 é o número esperado de erros, 20 · 0,8.",
  },
  {
    materia: "estatistica",
    tema: "Distribuição binomial",
    dificuldade: "facil",
    enunciado:
      "Numa distribuição binomial com n = 8 ensaios, quais são os valores possíveis da variável X?",
    opcoes: [
      "Os inteiros de 0 a 8",
      "Os inteiros de 1 a 8",
      "Qualquer número real entre 0 e 8",
      "Só 0 e 8",
      "Os inteiros de 0 a 7",
    ],
    correta: 0,
    explicacao:
      "X conta os sucessos em 8 ensaios e pode ir de nenhum sucesso, X = 0, até todos, X = 8, passando por todos os inteiros intermediários. Com 0 < p < 1, cada um desses nove valores tem probabilidade positiva.\n\nExcluir o 0 esquece o caso em que todos os ensaios fracassam. X é uma contagem e não assume valores fracionários. Os valores intermediários também são possíveis. E excluir o 8 esquece o caso em que todos os ensaios dão sucesso.",
  },
  {
    materia: "estatistica",
    tema: "Distribuição binomial",
    dificuldade: "facil",
    enunciado:
      "Um atleta converte 80% dos pênaltis, de forma independente. Em 3 cobranças, qual é a probabilidade de converter todas?",
    opcoes: [
      "0,8",
      "0,512",
      "2,4",
      "0,008",
      "0,488",
    ],
    correta: 1,
    explicacao:
      "Converter todas significa X = 3 numa binomial com n = 3 e p = 0,8: P(X = 3) = 0,8³ = 0,512. Mesmo com 80% de acerto em cada cobrança, a chance de acertar três seguidas é pouco mais que metade.\n\n0,8 considera uma cobrança só. 2,4 é o número esperado de gols, 3 · 0,8, e não uma probabilidade. 0,008 = 0,2³ é a probabilidade de errar as três. E 0,488 é a de errar pelo menos uma, 1 − 0,512.",
  },
  {
    materia: "estatistica",
    tema: "Distribuição binomial",
    dificuldade: "facil",
    enunciado:
      "Numa distribuição binomial, o que representa o parâmetro p?",
    opcoes: [
      "O número de ensaios",
      "A probabilidade de sucesso em cada ensaio",
      "A proporção de sucessos observada",
      "A probabilidade de todos os ensaios darem sucesso",
      "O número médio de sucessos",
    ],
    correta: 1,
    explicacao:
      "O parâmetro p é a probabilidade de sucesso em cada ensaio, a mesma em todos eles; n é o número de ensaios. Juntos, n e p determinam toda a distribuição, e a média é n · p.\n\nO número de ensaios é n. A proporção observada, X/n, varia de amostra para amostra e só se aproxima de p em média. A probabilidade de todos darem sucesso é pⁿ. E o número médio de sucessos é n · p, que só coincide com p quando n = 1.",
  },
  {
    materia: "estatistica",
    tema: "Distribuição binomial",
    dificuldade: "media",
    enunciado:
      "Numa linha de montagem, 30% das peças precisam de ajuste. Sorteando 5 peças, independentes, qual é a probabilidade de exatamente 2 precisarem de ajuste?",
    opcoes: [
      "0,0309",
      "0,3087",
      "0,09",
      "0,1323",
      "0,6",
    ],
    correta: 1,
    explicacao:
      "O número de peças com ajuste é binomial com n = 5 e p = 0,3. P(X = 2) = C(5, 2) · 0,3² · 0,7³ = 10 · 0,09 · 0,343 = 0,3087. O fator 10 conta as maneiras de escolher quais 2 das 5 peças precisam de ajuste.\n\n0,0309 esquece o fator C(5, 2) e calcula uma única sequência. 0,09 = 0,3² ignora as outras três peças. 0,1323 troca os expoentes, 10 · 0,3³ · 0,7², e dá a probabilidade de 3 peças com ajuste. E 0,6 soma 0,3 duas vezes.",
  },
  {
    materia: "estatistica",
    tema: "Distribuição binomial",
    dificuldade: "media",
    enunciado:
      "Uma vacina provoca febre em 20% das pessoas. Entre 4 vacinados, independentes, qual é a probabilidade de no máximo um ter febre?",
    opcoes: [
      "0,4096",
      "0,8192",
      "0,1808",
      "0,9728",
      "0,2",
    ],
    correta: 1,
    explicacao:
      "P(X ≤ 1) = P(X = 0) + P(X = 1) = 0,8⁴ + 4 · 0,2 · 0,8³ = 0,4096 + 0,4096 = 0,8192. No máximo um inclui o caso de ninguém ter febre, que não pode ser esquecido.\n\n0,4096 é só P(X = 0), ou só P(X = 1), que aqui coincidem. 0,1808 é a probabilidade do complementar, dois ou mais com febre. 0,9728 é P(X ≤ 2), que inclui também o caso de dois com febre. E 0,2 é a probabilidade para uma pessoa.",
  },
  {
    materia: "estatistica",
    tema: "Distribuição binomial",
    dificuldade: "media",
    enunciado:
      "Em cada dia, a chance de um servidor apresentar falha é de 10%, independente dos outros dias. Numa semana de 5 dias úteis, qual é a probabilidade de haver falha em pelo menos 2 dias?",
    opcoes: [
      "≈ 0,4095",
      "≈ 0,0815",
      "≈ 0,0729",
      "≈ 0,9185",
      "0,2",
    ],
    correta: 1,
    explicacao:
      "Pelo complementar: P(X ≥ 2) = 1 − P(X = 0) − P(X = 1) = 1 − 0,9⁵ − 5 · 0,1 · 0,9⁴ = 1 − 0,59049 − 0,32805 ≈ 0,0815. Passar ao complementar evita somar os casos de 2, 3, 4 e 5 dias com falha.\n\n0,4095 = 1 − 0,9⁵ é a probabilidade de pelo menos um dia com falha. 0,0729 é só P(X = 2). 0,9185 é P(X ≤ 1), o complementar. E 0,2 multiplica 0,1 por 2.",
  },
  {
    materia: "estatistica",
    tema: "Distribuição binomial",
    dificuldade: "media",
    enunciado:
      "Uma jogadora acerta 40% dos arremessos de três pontos, de forma independente. Em 10 arremessos, qual é a probabilidade de ela acertar exatamente 5?",
    opcoes: [
      "50%",
      "≈ 20,1%",
      "≈ 1,0%",
      "≈ 24,6%",
      "40%",
    ],
    correta: 1,
    explicacao:
      "O número de acertos é binomial com n = 10 e p = 0,4: P(X = 5) = C(10, 5) · 0,4⁵ · 0,6⁵ = 252 · 0,01024 · 0,07776 ≈ 0,2007, ou cerca de 20,1%. O valor mais provável é 4, a média, com cerca de 25%.\n\n50% lê 5 em 10 como proporção. 1,0% = 0,4⁵ esquece os fracassos e as posições. 24,6% = 252/1.024 usa p = 1/2, como numa moeda. E 40% é a taxa de acerto de um arremesso.",
  },
  {
    materia: "estatistica",
    tema: "Distribuição binomial",
    dificuldade: "media",
    enunciado:
      "Sabe-se que uma distribuição binomial tem média 6 e variância 4,2. Quais são n e p?",
    opcoes: [
      "n = 6 e p = 0,7",
      "n = 20 e p = 0,3",
      "n = 20 e p = 0,7",
      "n = 10 e p = 0,6",
      "n = 14 e p = 0,3",
    ],
    correta: 1,
    explicacao:
      "Da média, n · p = 6; da variância, n · p · (1 − p) = 4,2. Dividindo, 1 − p = 4,2/6 = 0,7, e p = 0,3. Então n = 6/0,3 = 20. Conferindo: 20 · 0,3 = 6 e 20 · 0,3 · 0,7 = 4,2.\n\nn = 6 e p = 0,7 toma a média como número de ensaios e 1 − p como p. n = 20 e p = 0,7 dá média 14. n = 10 e p = 0,6 dá média 6, mas variância 2,4. E n = 14 e p = 0,3 dá média 4,2.",
  },
  {
    materia: "estatistica",
    tema: "Distribuição binomial",
    dificuldade: "media",
    enunciado:
      "Qual é o valor mais provável de uma variável binomial com 12 ensaios e probabilidade de sucesso 0,35?",
    opcoes: [
      "4,2",
      "4",
      "5",
      "6",
      "0",
    ],
    correta: 1,
    explicacao:
      "Comparando probabilidades vizinhas, P(X = k + 1)/P(X = k) = [(n − k)/(k + 1)] · [p/(1 − p)], a distribuição cresce enquanto essa razão passa de 1 e decresce depois. Isso leva à regra: a moda é a parte inteira de (n + 1) · p = 13 · 0,35 = 4,55, isto é, 4, com P(X = 4) ≈ 0,237.\n\n4,2 é a média, n · p, que não precisa ser um valor possível de X. 5 e 6 ficam à direita da moda, com probabilidades menores. E 0 tem probabilidade 0,65¹² ≈ 0,006.",
  },
  {
    materia: "estatistica",
    tema: "Distribuição binomial",
    dificuldade: "media",
    enunciado:
      "Retiram-se 3 cartas de um baralho, sem reposição, e conta-se o número de ases. Por que essa contagem não segue exatamente uma distribuição binomial?",
    opcoes: [
      "O número de retiradas não é fixo",
      "As retiradas não são independentes",
      "Há mais de dois resultados por carta",
      "A probabilidade de ás é pequena demais",
      "O número de ases pode ser zero",
    ],
    correta: 1,
    explicacao:
      "Sem reposição, cada retirada muda o baralho: a primeira carta é ás com probabilidade 4/52, mas, se ela foi ás, a segunda é ás com probabilidade 3/51, e não 4/52. Os ensaios não são independentes, e a probabilidade de sucesso muda. A contagem segue a distribuição hipergeométrica.\n\nO número de retiradas é fixo, 3. Cada carta é ás ou não é, dois resultados. Uma probabilidade pequena não impede a binomial. E X = 0 é um valor possível em qualquer binomial.",
  },
  {
    materia: "estatistica",
    tema: "Distribuição binomial",
    dificuldade: "media",
    enunciado:
      "X e Y são independentes, X binomial com n = 5 e p = 0,4, e Y binomial com n = 7 e p = 0,4. Qual é a distribuição de X + Y?",
    opcoes: [
      "Binomial com n = 12 e p = 0,8",
      "Binomial com n = 12 e p = 0,4",
      "Binomial com n = 35 e p = 0,4",
      "Binomial com n = 12 e p = 0,16",
      "Não é binomial",
    ],
    correta: 1,
    explicacao:
      "X conta sucessos em 5 ensaios e Y, em outros 7, todos independentes e com a mesma probabilidade 0,4. X + Y conta os sucessos nos 12 ensaios juntos, e é binomial com n = 12 e p = 0,4. A média confere: 2 + 2,8 = 4,8 = 12 · 0,4.\n\nSomar as probabilidades, 0,8, ou multiplicá-las, 0,16, não faz sentido: p é a chance em cada ensaio, que continua 0,4. Multiplicar os números de ensaios, 35, também não. E a soma é binomial justamente porque o p é o mesmo nos dois grupos.",
  },
  {
    materia: "estatistica",
    tema: "Distribuição binomial",
    dificuldade: "media",
    enunciado:
      "Numa binomial com n = 2, a probabilidade de nenhum sucesso é 0,01. Qual é a probabilidade de sucesso em cada ensaio?",
    opcoes: [
      "0,1",
      "0,99",
      "0,9",
      "0,01",
      "0,995",
    ],
    correta: 2,
    explicacao:
      "P(X = 0) = (1 − p)² = 0,01, e então 1 − p = 0,1 e p = 0,9. Conferindo: com p = 0,9, os dois ensaios fracassam com probabilidade 0,1 · 0,1 = 0,01. Ao inverter uma fórmula, substituir o resultado de volta evita erros desse tipo.\n\n0,1 é a probabilidade de fracasso, 1 − p. 0,99 é a probabilidade de pelo menos um sucesso, 1 − 0,01. 0,01 confunde P(X = 0) com o próprio p. E 0,995 divide 0,01 por 2, como se as chances de fracasso se somassem.",
  },
  {
    materia: "estatistica",
    tema: "Distribuição binomial",
    dificuldade: "media",
    enunciado:
      "Uma campanha por telefone converte 20% das ligações, de forma independente. Qual é o menor número de ligações para que a probabilidade de pelo menos uma conversão seja de 95% ou mais?",
    opcoes: [
      "13",
      "5",
      "14",
      "20",
      "15",
    ],
    correta: 2,
    explicacao:
      "P(pelo menos uma conversão) = 1 − 0,8ⁿ ≥ 0,95 exige 0,8ⁿ ≤ 0,05. Com n = 13, 0,8¹³ ≈ 0,055, ainda acima; com n = 14, 0,8¹⁴ ≈ 0,044, abaixo. O menor número é 14, o que também sai de n ≥ log 0,05/log 0,8 ≈ 13,4, arredondado para cima.\n\n13 trunca 13,4 e dá só cerca de 94,5%. 5 é o inverso de 0,2, o número médio de ligações até a primeira conversão. 20 é o inverso de 0,05. E 15 também serve, mas não é o menor.",
  },
  {
    materia: "estatistica",
    tema: "Distribuição binomial",
    dificuldade: "media",
    enunciado:
      "Numa população, 25% apoiam uma proposta. Numa amostra aleatória de 400 pessoas, qual é o desvio padrão da proporção amostral de apoiadores?",
    opcoes: [
      "≈ 8,66",
      "0,1875",
      "≈ 0,0217",
      "75",
      "≈ 0,433",
    ],
    correta: 2,
    explicacao:
      "O número de apoiadores X é binomial com n = 400 e p = 0,25, e a proporção amostral é X/400. Seu desvio padrão é a raiz de p(1 − p)/n = 0,25 · 0,75/400 = 0,00046875, isto é, cerca de 0,0217, pouco mais de 2 pontos percentuais.\n\n8,66 é o desvio padrão do número de apoiadores, a raiz de 400 · 0,25 · 0,75 = 75, sem dividir por n. 0,1875 é p(1 − p), a variância de uma única resposta. 75 é a variância de X. E 0,433 é a raiz de 0,1875, o desvio padrão de uma única resposta.",
  },
  {
    materia: "estatistica",
    tema: "Distribuição binomial",
    dificuldade: "media",
    enunciado:
      "Três juízes decidem de forma independente, e cada um aprova um recurso com probabilidade 0,6. O recurso é aceito com pelo menos 2 aprovações. Qual é a probabilidade de ser aceito?",
    opcoes: [
      "0,432",
      "0,216",
      "0,648",
      "0,6",
      "0,352",
    ],
    correta: 2,
    explicacao:
      "P(X ≥ 2) = P(X = 2) + P(X = 3) = 3 · 0,6² · 0,4 + 0,6³ = 0,432 + 0,216 = 0,648. O fator 3 conta qual dos três juízes nega, no caso de exatamente duas aprovações. A decisão por maioria é mais confiável que um juiz sozinho: 0,648 contra 0,6.\n\n0,432 é só P(X = 2), sem o caso das três aprovações. 0,216 é só P(X = 3). 0,6 é a probabilidade de um juiz. E 0,352 é a probabilidade de o recurso ser negado, 1 − 0,648.",
  },
  {
    materia: "estatistica",
    tema: "Distribuição binomial",
    dificuldade: "media",
    enunciado:
      "Com n fixo, o que acontece com a variância de uma binomial quando p passa de 0,2 para 0,8?",
    opcoes: [
      "Quadruplica",
      "Cai pela metade",
      "Não muda",
      "Dobra",
      "Fica igual à média",
    ],
    correta: 2,
    explicacao:
      "A variância é n · p · (1 − p), e o produto p · (1 − p) é o mesmo para p e 1 − p: 0,2 · 0,8 = 0,8 · 0,2 = 0,16. Trocar p por 1 − p só troca os papéis de sucesso e fracasso, e o número de fracassos varia tanto quanto o de sucessos.\n\nQuadruplicar, cair pela metade ou dobrar supõe que a variância acompanhe p, o que só acontece com a média, n · p, que de fato quadruplica. E a variância, n · 0,16, fica abaixo da média n · 0,8.",
  },
  {
    materia: "estatistica",
    tema: "Distribuição binomial",
    dificuldade: "media",
    enunciado:
      "Um teste tem 6 questões de verdadeiro ou falso, e um aluno responde todas no chute. Qual é a probabilidade de ele acertar exatamente metade?",
    opcoes: [
      "1/2",
      "15/64",
      "5/16",
      "1/64",
      "21/32",
    ],
    correta: 2,
    explicacao:
      "O número de acertos é binomial com n = 6 e p = 1/2. P(X = 3) = C(6, 3)/2⁶ = 20/64 = 5/16 ≈ 0,31. Embora 3 seja o valor mais provável, acertar exatamente metade acontece em menos de um terço das vezes.\n\n1/2 lê metade dos acertos como probabilidade. 15/64 é P(X = 2), ou P(X = 4). 1/64 é a probabilidade de uma sequência específica de respostas. E 21/32 é a probabilidade de acertar pelo menos metade, P(X ≥ 3).",
  },
  {
    materia: "estatistica",
    tema: "Distribuição binomial",
    dificuldade: "media",
    enunciado:
      "Em 15 tentativas independentes, cada uma com probabilidade 0,4 de sucesso, quais são a média e a variância do número de fracassos?",
    opcoes: [
      "Média 6 e variância 3,6",
      "Média 9 e variância 9",
      "Média 9 e variância 3,6",
      "Média 15 e variância 3,6",
      "Média 9 e variância ≈ 1,9",
    ],
    correta: 2,
    explicacao:
      "O número de fracassos, 15 − X, também é binomial, com n = 15 e probabilidade de fracasso 0,6. A média é 15 · 0,6 = 9, e a variância é 15 · 0,6 · 0,4 = 3,6, a mesma do número de sucessos, porque os dois variam juntos, em sentidos opostos.\n\nMédia 6 é a do número de sucessos. Variância 9 repete a média, o que valeria para uma distribuição de Poisson, e não para a binomial. Média 15 é o número de tentativas. E 1,9 é o desvio padrão, a raiz de 3,6, e não a variância.",
  },
  {
    materia: "estatistica",
    tema: "Distribuição binomial",
    dificuldade: "media",
    enunciado:
      "Um aluno faz uma prova de 10 questões, umas muito fáceis e outras muito difíceis para ele. Por que o número de acertos pode não seguir uma distribuição binomial?",
    opcoes: [
      "O número de questões não é fixo",
      "Cada questão tem só dois resultados",
      "A chance de acerto varia entre as questões",
      "As questões são independentes",
      "O número de acertos pode ser zero",
    ],
    correta: 2,
    explicacao:
      "A binomial exige a mesma probabilidade de sucesso em todos os ensaios. Se as questões têm dificuldades muito diferentes, o aluno pode ter 95% de chance numa e 20% em outra, e a contagem de acertos tem outra distribuição, em geral com variância menor que a de uma binomial com a mesma média.\n\nO número de questões é fixo, 10. Ter dois resultados, certo ou errado, é justamente uma exigência da binomial. A independência também é exigida, e não a impede. E zero acertos é um valor possível em qualquer binomial.",
  },
  {
    materia: "estatistica",
    tema: "Distribuição binomial",
    dificuldade: "media",
    enunciado:
      "Um site tem 5% de chance de estar fora do ar em cada verificação, de forma independente. Em 20 verificações, qual é a probabilidade de o site estar no ar em todas?",
    opcoes: [
      "0",
      "0,05",
      "≈ 0,358",
      "≈ 0,642",
      "0,95",
    ],
    correta: 2,
    explicacao:
      "Estar no ar em todas é X = 0 falhas numa binomial com n = 20 e p = 0,05: P(X = 0) = 0,95²⁰ ≈ 0,358. Mesmo com 95% de disponibilidade em cada verificação, a chance de 20 verificações seguidas sem falha fica abaixo de 36%.\n\n0 supõe que alguma falha é certa, porque 20 · 0,05 = 1, mas uma média de 1 falha não garante falhas. 0,05 é a probabilidade de falha numa verificação. 0,642 é a de pelo menos uma falha. E 0,95 considera uma verificação só.",
  },
  {
    materia: "estatistica",
    tema: "Distribuição binomial",
    dificuldade: "media",
    enunciado:
      "Num jogo, cada rodada tem probabilidade 0,1 de acerto, e cada acerto paga R$ 10. Em 30 rodadas independentes, qual é o valor esperado do prêmio total?",
    opcoes: [
      "R$ 3",
      "R$ 300",
      "R$ 30",
      "R$ 10",
      "R$ 27",
    ],
    correta: 2,
    explicacao:
      "O número de acertos é binomial com n = 30 e p = 0,1, com média 3. O prêmio é 10 vezes o número de acertos, e a média se multiplica pela mesma constante: E(10X) = 10 · E(X) = 10 · 3 = R$ 30.\n\nR$ 3 é o número esperado de acertos, sem converter em reais. R$ 300 supõe que todas as rodadas pagam. R$ 10 é o valor de um acerto. E R$ 27 usa 10 · n · p · (1 − p) = 10 · 2,7, que mistura a variância com a média.",
  },
  {
    materia: "estatistica",
    tema: "Distribuição binomial",
    dificuldade: "media",
    enunciado:
      "Cinco sócios votam uma proposta de forma independente, cada um com probabilidade 1/2 de aprovar. Qual é a probabilidade de a proposta obter maioria, isto é, 3 votos ou mais?",
    opcoes: [
      "5/16",
      "3/5",
      "13/16",
      "1/2",
      "1/32",
    ],
    correta: 3,
    explicacao:
      "Com p = 1/2 e n = 5 ímpar, a distribuição é simétrica e não há empate: cada resultado com 3 ou mais aprovações corresponde a um com 2 ou menos, trocando aprovações por rejeições. Por isso P(X ≥ 3) = 1/2. Pela conta: (10 + 5 + 1)/32 = 16/32.\n\n5/16 é só P(X = 3), 10/32. 3/5 lê 3 votos em 5 como probabilidade. 13/16 é P(X ≥ 2), 26/32. E 1/32 é a probabilidade de aprovação unânime.",
  },
  {
    materia: "estatistica",
    tema: "Distribuição binomial",
    dificuldade: "media",
    enunciado:
      "Para aproximar uma binomial pela normal, uma regra prática exige n · p ≥ 5 e n · (1 − p) ≥ 5. Qual destes casos atende às duas condições?",
    opcoes: [
      "n = 20 e p = 0,1",
      "n = 100 e p = 0,02",
      "n = 8 e p = 0,5",
      "n = 50 e p = 0,2",
      "n = 30 e p = 0,9",
    ],
    correta: 3,
    explicacao:
      "Com n = 50 e p = 0,2, n · p = 10 e n · (1 − p) = 40, os dois pelo menos 5. Nesse caso, a distribuição fica razoavelmente simétrica e em forma de sino, e a aproximação normal funciona bem.\n\nCom n = 20 e p = 0,1, n · p = 2. Com n = 100 e p = 0,02, n · p = 2: mesmo com n grande, um p pequeno deixa a distribuição assimétrica. Com n = 8 e p = 0,5, n · p = 4. E com n = 30 e p = 0,9, n · (1 − p) = 3.",
  },
  {
    materia: "estatistica",
    tema: "Distribuição binomial",
    dificuldade: "media",
    enunciado:
      "Em quatro ensaios com p = 1/2, compare a probabilidade da sequência específica sucesso, sucesso, fracasso, fracasso com a de exatamente 2 sucessos em qualquer ordem. Quais são os valores?",
    opcoes: [
      "3/8 e 3/8",
      "1/16 e 1/16",
      "1/4 e 3/8",
      "1/16 e 3/8",
      "1/16 e 1/4",
    ],
    correta: 3,
    explicacao:
      "Uma sequência específica de 4 resultados tem probabilidade (1/2)⁴ = 1/16. Exatamente 2 sucessos em qualquer ordem reúne C(4, 2) = 6 sequências, cada uma com 1/16: total 6/16 = 3/8. O coeficiente binomial é justamente o número de ordens possíveis.\n\nDar 3/8 às duas confunde a sequência com o evento. Dar 1/16 às duas esquece as outras cinco ordens. 1/4 para a sequência não sai de nenhuma conta. E 1/4 para 2 sucessos conta só 4 ordens, em vez de 6.",
  },
  {
    materia: "estatistica",
    tema: "Distribuição binomial",
    dificuldade: "media",
    enunciado:
      "Uma moeda honesta é lançada 400 vezes. Quais são a média e o desvio padrão do número de caras?",
    opcoes: [
      "Média 200 e desvio padrão 100",
      "Média 400 e desvio padrão 20",
      "Média 200 e desvio padrão 20",
      "Média 200 e desvio padrão 10",
      "Média 100 e desvio padrão 10",
    ],
    correta: 3,
    explicacao:
      "Com n = 400 e p = 1/2, a média é n · p = 200, e a variância, n · p · (1 − p) = 100. O desvio padrão é a raiz da variância, 10. Na prática, resultados entre 180 e 220 caras, a dois desvios padrão da média, são os mais comuns.\n\nDesvio padrão 100 é a variância, sem tirar a raiz. Média 400 é o número de lançamentos. Desvio padrão 20 é a raiz de 400, esquecendo o fator p · (1 − p). E média 100 usa p = 1/4.",
  },
  {
    materia: "estatistica",
    tema: "Distribuição binomial",
    dificuldade: "media",
    enunciado:
      "Quantas sequências diferentes de 10 ensaios, cada um sucesso ou fracasso, têm exatamente 3 sucessos?",
    opcoes: [
      "30",
      "720",
      "1.024",
      "120",
      "10",
    ],
    correta: 3,
    explicacao:
      "Uma sequência com 3 sucessos fica determinada pela escolha das 3 posições dos sucessos entre as 10, sem importar a ordem da escolha: C(10, 3) = (10 · 9 · 8)/(3 · 2 · 1) = 120. Esse é o coeficiente que aparece na fórmula binomial para P(X = 3).\n\n30 multiplica 10 por 3. 720 = 10 · 9 · 8 conta as escolhas ordenadas, e cada conjunto de posições aparece 6 vezes. 1.024 = 2¹⁰ é o total de sequências. E 10 é o número de ensaios.",
  },
  {
    materia: "estatistica",
    tema: "Distribuição binomial",
    dificuldade: "media",
    enunciado:
      "Um candidato acerta cada questão de uma prova de 8 questões com probabilidade 0,7, de forma independente. Qual é a probabilidade de ele acertar pelo menos 7?",
    opcoes: [
      "≈ 0,198",
      "≈ 0,058",
      "0,7",
      "≈ 0,255",
      "≈ 0,745",
    ],
    correta: 3,
    explicacao:
      "P(X ≥ 7) = P(X = 7) + P(X = 8) = 8 · 0,7⁷ · 0,3 + 0,7⁸ ≈ 0,1977 + 0,0576 ≈ 0,255. O fator 8 conta em qual das 8 questões está o único erro, no caso de 7 acertos. Somar as duas probabilidades é permitido porque os eventos X = 7 e X = 8 são disjuntos.\n\n0,198 é só P(X = 7). 0,058 é só P(X = 8), acertar todas. 0,7 é a probabilidade de acertar uma questão. E 0,745 é P(X ≤ 6), o complementar.",
  },
  {
    materia: "estatistica",
    tema: "Distribuição binomial",
    dificuldade: "media",
    enunciado:
      "Qual relação entre a média e a variância vale para toda distribuição binomial?",
    opcoes: [
      "A variância é sempre igual à média",
      "A variância é sempre maior que a média",
      "A variância é o quadrado da média",
      "A variância nunca passa da média",
      "A média nunca passa de 1",
    ],
    correta: 3,
    explicacao:
      "A variância é n · p · (1 − p) = média · (1 − p). Como 1 − p fica entre 0 e 1, a variância é sempre menor ou igual à média, com igualdade só no caso limite p = 0, em que as duas são zero.\n\nVariância igual à média caracteriza a distribuição de Poisson, que aproxima a binomial quando p é pequeno. A variância nunca supera a média. O quadrado da média não aparece na fórmula. E a média n · p passa de 1 sempre que se esperam vários sucessos.",
  },
  {
    materia: "estatistica",
    tema: "Distribuição binomial",
    dificuldade: "media",
    enunciado:
      "Para passar num teste de 5 questões, cada uma com 4 alternativas e uma só correta, é preciso acertar pelo menos 4. Chutando todas, qual é a probabilidade de passar?",
    opcoes: [
      "15/1024",
      "1/1024",
      "1/4",
      "1/64",
      "5/256",
    ],
    correta: 3,
    explicacao:
      "Com n = 5 e p = 1/4: P(X = 4) = 5 · (1/4)⁴ · (3/4) = 15/1.024 e P(X = 5) = (1/4)⁵ = 1/1.024. Somando, P(X ≥ 4) = 16/1.024 = 1/64 ≈ 1,6%. Os casos de 4 e de 5 acertos são disjuntos, e por isso as probabilidades se somam. Chutar dá uma chance muito pequena de passar.\n\n15/1.024 é só P(X = 4). 1/1.024 é só acertar todas. 1/4 é a chance de acertar uma questão. E 5/256 = 5 · (1/4)⁴ esquece o fator 3/4 da questão errada.",
  },
  {
    materia: "estatistica",
    tema: "Distribuição binomial",
    dificuldade: "media",
    enunciado:
      "Numa população, 45% das pessoas têm sangue tipo O. Sorteando 6 pessoas, independentes, qual é a probabilidade de pelo menos 2 terem sangue tipo O?",
    opcoes: [
      "≈ 0,972",
      "≈ 0,136",
      "≈ 0,164",
      "≈ 0,836",
      "0,9",
    ],
    correta: 3,
    explicacao:
      "Pelo complementar: P(X ≥ 2) = 1 − P(X = 0) − P(X = 1) = 1 − 0,55⁶ − 6 · 0,45 · 0,55⁵ ≈ 1 − 0,0277 − 0,1359 ≈ 0,836. Usar o complementar evita somar as cinco probabilidades, de 2 a 6 pessoas com tipo O.\n\n0,972 = 1 − 0,55⁶ é a probabilidade de pelo menos uma pessoa com tipo O. 0,136 é só P(X = 1). 0,164 é P(X ≤ 1), o complementar. E 0,9 multiplica 0,45 por 2, o número de pessoas pedido.",
  },
  {
    materia: "estatistica",
    tema: "Distribuição binomial",
    dificuldade: "media",
    enunciado:
      "Numa pesquisa, a proporção amostral de sucessos tem desvio padrão igual à raiz de p(1 − p)/n. Ao quadruplicar o tamanho da amostra, o que acontece com esse desvio padrão?",
    opcoes: [
      "Cai a um quarto",
      "Dobra",
      "Não muda",
      "Cai pela metade",
      "Quadruplica",
    ],
    correta: 3,
    explicacao:
      "O desvio padrão da proporção é a raiz de p(1 − p)/n. Multiplicar n por 4 divide o que está dentro da raiz por 4, e a raiz, por 2: o desvio padrão cai pela metade. Por isso, dobrar a precisão de uma pesquisa exige quatro vezes mais entrevistas.\n\nCair a um quarto esqueceria a raiz. Dobrar ou quadruplicar inverte o efeito do tamanho da amostra. E o desvio padrão muda, sim, com n.",
  },
  {
    materia: "estatistica",
    tema: "Distribuição binomial",
    dificuldade: "dificil",
    enunciado:
      "Uma companhia aérea vende 102 passagens para um voo de 100 lugares, e cada passageiro comparece com probabilidade 0,95, de forma independente. Qual é, aproximadamente, a probabilidade de faltar lugar?",
    opcoes: [
      "≈ 0,5%",
      "≈ 2,9%",
      "5%",
      "≈ 95%",
      "≈ 3,4%",
    ],
    correta: 4,
    explicacao:
      "Falta lugar se comparecerem 101 ou 102 passageiros. Com X binomial, n = 102 e p = 0,95: P(X = 102) = 0,95¹⁰² ≈ 0,0053 e P(X = 101) = 102 · 0,95¹⁰¹ · 0,05 ≈ 0,0287. Somando, cerca de 0,034, ou 3,4%. Contar as faltas, 102 − X, binomial com p = 0,05, ajuda a enxergar: falta lugar quando há no máximo 1 ausência.\n\n0,5% considera só o caso de todos comparecerem. 2,9% considera só o caso de 101. 5% é a probabilidade de um passageiro faltar. E 95% é a de um passageiro comparecer.",
  },
  {
    materia: "estatistica",
    tema: "Distribuição binomial",
    dificuldade: "dificil",
    enunciado:
      "Um componente falha com probabilidade 0,002, e um lote tem 1.000 componentes independentes. Qual é, aproximadamente, a probabilidade de exatamente 2 falharem?",
    opcoes: [
      "≈ 0,135",
      "0,002",
      "≈ 0,541",
      "≈ 0,865",
      "≈ 0,271",
    ],
    correta: 4,
    explicacao:
      "X é binomial com n = 1.000 e p = 0,002, média 2. Com n grande e p pequeno, a binomial fica muito próxima da distribuição de Poisson de média 2: P(X = 2) ≈ e⁻² · 2²/2! ≈ 0,1353 · 2 ≈ 0,271. A conta binomial exata, C(1.000, 2) · 0,002² · 0,998⁹⁹⁸, dá praticamente o mesmo valor.\n\n0,135 é P(X = 0), e⁻². 0,002 é a probabilidade de um componente falhar. 0,541 esquece o 2! do denominador. E 0,865 é a probabilidade de pelo menos uma falha, 1 − e⁻².",
  },
  {
    materia: "estatistica",
    tema: "Distribuição binomial",
    dificuldade: "dificil",
    enunciado:
      "Numa binomial com n = 4 e p = 1/2, qual é a média de X entre os resultados com pelo menos um sucesso, isto é, a esperança de X dado X ≥ 1?",
    opcoes: [
      "2",
      "15/8",
      "5/2",
      "4",
      "32/15",
    ],
    correta: 4,
    explicacao:
      "Como X = 0 contribui com zero para a soma dos k · P(X = k), E(X | X ≥ 1) = E(X)/P(X ≥ 1) = 2/(15/16) = 32/15 ≈ 2,13. Excluir o caso de nenhum sucesso puxa a média para cima, um pouco acima de 2.\n\n2 é a média sem a condição. 15/8 = 2 · 15/16 multiplica pela probabilidade da condição em vez de dividir. 5/2 é a média dos valores de 1 a 4, sem os pesos das probabilidades. E 4 é o valor máximo de X.",
  },
  {
    materia: "estatistica",
    tema: "Distribuição binomial",
    dificuldade: "dificil",
    enunciado:
      "Um lote de 10 peças é aprovado se tiver no máximo 1 peça defeituosa, e cada peça é defeituosa com probabilidade 0,1, de forma independente. Qual é a probabilidade de os próximos 5 lotes serem todos aprovados?",
    opcoes: [
      "≈ 0,736",
      "≈ 0,349",
      "≈ 0,590",
      "≈ 0,005",
      "≈ 0,216",
    ],
    correta: 4,
    explicacao:
      "Para um lote: P(no máximo 1 defeituosa) = 0,9¹⁰ + 10 · 0,1 · 0,9⁹ ≈ 0,3487 + 0,3874 ≈ 0,7361. Os lotes são independentes, e o número de lotes aprovados em 5 é, por sua vez, binomial com p ≈ 0,7361: P(todos aprovados) ≈ 0,7361⁵ ≈ 0,216.\n\n0,736 é a probabilidade de um lote só. 0,349 é a de um lote sem nenhuma defeituosa. 0,590 = 0,9⁵ confunde lotes com peças. E 0,005 ≈ 0,349⁵ exige cinco lotes sem nenhuma defeituosa.",
  },
  {
    materia: "estatistica",
    tema: "Distribuição binomial",
    dificuldade: "dificil",
    enunciado:
      "Em 10 ensaios independentes de mesma probabilidade p, observaram-se 3 sucessos. Qual valor de p torna esse resultado mais provável, isto é, maximiza P(X = 3)?",
    opcoes: [
      "0,5",
      "0,03",
      "3/7",
      "0,7",
      "0,3",
    ],
    correta: 4,
    explicacao:
      "P(X = 3) = C(10, 3) · p³ · (1 − p)⁷. Derivando p³(1 − p)⁷ e igualando a zero: 3p²(1 − p)⁷ = 7p³(1 − p)⁶, ou 3(1 − p) = 7p, e p = 3/10 = 0,3. É a estimativa de máxima verossimilhança, que coincide com a proporção observada de sucessos.\n\n0,5 é o p de maior variância, sem relação com os dados. 0,03 erra a escala. 3/7 divide os sucessos pelos fracassos, e não pelo total de ensaios. E 0,7 é a proporção de fracassos.",
  },
  {
    materia: "estatistica",
    tema: "Distribuição binomial",
    dificuldade: "dificil",
    enunciado:
      "Para uma binomial de 3 ensaios, a probabilidade de nenhum sucesso é igual à de exatamente um sucesso. Quanto vale p?",
    opcoes: [
      "1/3",
      "1/2",
      "3/4",
      "1/8",
      "1/4",
    ],
    correta: 4,
    explicacao:
      "P(X = 0) = (1 − p)³ e P(X = 1) = 3p(1 − p)². Igualando e dividindo por (1 − p)², que não é zero: 1 − p = 3p, e p = 1/4. Conferindo: (3/4)³ = 27/64 e 3 · (1/4) · (3/4)² = 27/64. A solução é única, porque a razão P(X = 1)/P(X = 0) = 3p/(1 − p) cresce com p.\n\n1/2 esquece o fator 3 de P(X = 1) e resolve 1 − p = p. 1/3 toma p como 1/n. 3/4 é a probabilidade de fracasso, 1 − p. E 1/8 não satisfaz a igualdade.",
  },
  {
    materia: "estatistica",
    tema: "Distribuição binomial",
    dificuldade: "dificil",
    enunciado:
      "Uma moeda honesta é lançada 100 vezes. Qual é o desvio padrão da diferença entre o número de caras e o de coroas?",
    opcoes: [
      "5",
      "0",
      "50",
      "100",
      "10",
    ],
    correta: 4,
    explicacao:
      "Com X caras, a diferença é X − (100 − X) = 2X − 100. A variância de X é 100 · 0,5 · 0,5 = 25, e multiplicar por 2 multiplica a variância por 4: Var(2X − 100) = 100. O desvio padrão é 10. A constante 100 só desloca a distribuição, sem mudar a dispersão.\n\n5 é o desvio padrão do número de caras, sem o fator 2. 0 é a média da diferença, e não o desvio padrão. 50 é a média do número de caras. E 100 é a variância da diferença, sem tirar a raiz.",
  },
  {
    materia: "estatistica",
    tema: "Distribuição binomial",
    dificuldade: "dificil",
    enunciado:
      "Cada componente de um sistema falha com probabilidade 0,01, de forma independente, e o sistema só funciona se nenhum falhar. Qual é o maior número de componentes que mantém a probabilidade de funcionamento em pelo menos 90%?",
    opcoes: [
      "11",
      "90",
      "9",
      "100",
      "10",
    ],
    correta: 4,
    explicacao:
      "Com n componentes, P(nenhuma falha) = 0,99ⁿ. Com n = 10, 0,99¹⁰ ≈ 0,904, ainda acima de 90%; com n = 11, 0,99¹¹ ≈ 0,895, abaixo. O maior número é 10, o que também sai de n ≤ log 0,9/log 0,99 ≈ 10,5, arredondado para baixo.\n\n11 arredonda 10,5 para cima e fica abaixo dos 90%. 90 supõe que 90 · 0,01 = 0,9 seja a chance de funcionar. 9 também serve, mas não é o maior. E 100 é o inverso de 0,01, o número médio de componentes até a primeira falha.",
  },
  {
    materia: "estatistica",
    tema: "Distribuição binomial",
    dificuldade: "dificil",
    enunciado:
      "Com dados honestos, qual destes eventos é o mais provável: pelo menos um 6 em 6 lançamentos, pelo menos dois 6 em 12 lançamentos, ou pelo menos três 6 em 18 lançamentos?",
    opcoes: [
      "Pelo menos dois 6 em 12 lançamentos",
      "Pelo menos três 6 em 18 lançamentos",
      "Os três são igualmente prováveis",
      "Depende da ordem dos lançamentos",
      "Pelo menos um 6 em 6 lançamentos",
    ],
    correta: 4,
    explicacao:
      "Os números de 6 são binomiais com p = 1/6 e médias 1, 2 e 3, e as probabilidades são 1 − (5/6)⁶ ≈ 0,665, P(X ≥ 2) com n = 12 ≈ 0,619 e P(X ≥ 3) com n = 18 ≈ 0,597. O primeiro evento é o mais provável. Em cada caso, o evento pede pelo menos a média, e a chance de alcançá-la diminui à medida que n cresce.\n\nAs três probabilidades são diferentes, embora as proporções pareçam iguais. E a ordem dos lançamentos não importa para contagens de sucessos em ensaios independentes.",
  },
  {
    materia: "estatistica",
    tema: "Distribuição binomial",
    dificuldade: "dificil",
    enunciado:
      "Com X binomial, n = 5 e p = 0,3, qual é a probabilidade de o número de sucessos ser par, contando o zero como par?",
    opcoes: [
      "0,5",
      "≈ 0,495",
      "0,3",
      "≈ 0,010",
      "≈ 0,505",
    ],
    correta: 4,
    explicacao:
      "Somando P(X = 0), P(X = 2) e P(X = 4): 0,16807 + 0,3087 + 0,02835 ≈ 0,5051. Há um atalho: P(X par) = [1 + (1 − 2p)ⁿ]/2 = (1 + 0,4⁵)/2 = (1 + 0,01024)/2 ≈ 0,505, que vem de expandir (q + p)ⁿ e (q − p)ⁿ, com q = 1 − p, e somar.\n\n0,5 supõe que par e ímpar são sempre igualmente prováveis, o que só vale com p = 1/2. 0,495 é a probabilidade de X ímpar. 0,3 é o p. E 0,010 = 0,4⁵ é só o termo de correção da fórmula.",
  },
];
