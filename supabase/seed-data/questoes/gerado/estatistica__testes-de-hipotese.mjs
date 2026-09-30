/* Testes de hipótese (50 questões) — estatistica.

   Autorais, escritas por Claude (Anthropic) em 2026-09-30 seguindo as cinco
   regras de CONTINUAR-MATERIAS-POR-OBJETIVO.md. Nenhuma é atribuída a banca
   ou a prova real.

   Conferência do gabarito: 50 de 50 recalculadas por código que chega à
   resposta por outro caminho (ver .rascunho/questoes-objetivo/estatistica__testes-de-hipotese.mjs);
   nenhuma ficou sem conferência em código.

   Montado por scripts/montar-questoes-objetivo.mjs; gabarito redistribuído
   por scripts/rebalancear-gabarito.mjs. Relatório em
   _relatorios/estatistica__testes-de-hipotese.json. */

export const questoes = [
  {
    materia: "estatistica",
    tema: "Testes de hipótese",
    dificuldade: "facil",
    enunciado:
      "Um fabricante afirma que seus pacotes têm, em média, 500 g, e um órgão fiscal suspeita que a média seja menor. Quais são as hipóteses do teste?",
    opcoes: [
      "H0: μ = 500 e H1: μ < 500",
      "H0: μ < 500 e H1: μ = 500",
      "H0: μ = 500 e H1: μ > 500",
      "H0: μ ≠ 500 e H1: μ = 500",
      "H0: x̄ = 500 e H1: x̄ < 500",
    ],
    correta: 0,
    explicacao:
      "A hipótese nula representa a afirmação a ser testada, com a igualdade: μ = 500. A alternativa traduz a suspeita que se quer demonstrar, média menor: μ < 500. O teste só conclui a favor de H1 se os dados trouxerem evidência forte contra H0.\n\nTrocar as hipóteses põe a suspeita no lugar da afirmação. μ > 500 aponta a desconfiança na direção errada. H0 com ≠ não fixa um valor para calcular probabilidades. E hipóteses são sobre o parâmetro μ, e não sobre a média amostral x̄, que já é conhecida.",
  },
  {
    materia: "estatistica",
    tema: "Testes de hipótese",
    dificuldade: "facil",
    enunciado:
      "Num teste com nível de significância de 5%, o valor p foi 0,03. Qual é a decisão?",
    opcoes: [
      "Rejeita-se H0",
      "Não se rejeita H0",
      "Aceita-se H0 como verdadeira",
      "Prova-se que H1 é verdadeira",
      "O teste é inconclusivo",
    ],
    correta: 0,
    explicacao:
      "A regra é comparar o valor p com α: se p ≤ α, rejeita-se H0. Como 0,03 < 0,05, os dados são pouco compatíveis com H0 ao nível escolhido, e H0 é rejeitada. Se o nível fosse 1%, a decisão seria outra.\n\nNão rejeitar seria a decisão com p > 0,05. Aceitar H0 como verdadeira nunca é a conclusão de um teste. Rejeitar H0 não prova H1: há sempre o risco de um erro, controlado por α. E o teste chegou a uma decisão clara.",
  },
  {
    materia: "estatistica",
    tema: "Testes de hipótese",
    dificuldade: "facil",
    enunciado:
      "Um teste deu valor p igual a 0,40. Qual é a conclusão adequada, com nível de significância de 5%?",
    opcoes: [
      "Não há evidência suficiente contra H0",
      "H0 foi provada verdadeira",
      "H1 foi provada falsa",
      "H0 tem 40% de chance de ser verdadeira",
      "Rejeita-se H0",
    ],
    correta: 0,
    explicacao:
      "Com p = 0,40, bem acima de 0,05, os dados são compatíveis com H0, e ela não é rejeitada. Isso não prova H0: pode haver um efeito real que a amostra não teve tamanho ou precisão para detectar. A conclusão correta é a ausência de evidência suficiente contra H0.\n\nNão rejeitar não é provar H0 verdadeira, nem provar H1 falsa. O valor p não é a probabilidade de H0 ser verdadeira. E rejeitar H0 exigiria p ≤ 0,05.",
  },
  {
    materia: "estatistica",
    tema: "Testes de hipótese",
    dificuldade: "facil",
    enunciado:
      "Para testar H0: μ = 50, com σ = 8 conhecido, uma amostra de 64 observações teve média 52. Qual é o valor da estatística z?",
    opcoes: [
      "2",
      "0,25",
      "16",
      "0,03",
      "−2",
    ],
    correta: 0,
    explicacao:
      "A estatística é z = (x̄ − μ0)/(σ/√n) = (52 − 50)/(8/√64) = 2/1 = 2. Ela mede quantos erros padrão a média amostral está afastada do valor da hipótese nula. Um z = 2 indica um afastamento considerável, que um teste bilateral a 5% já rejeitaria.\n\n0,25 divide pelo desvio padrão, 8, sem o √n. 16 divide σ por n, e não por √n. 0,03 multiplica σ por √n em vez de dividir. E −2 inverte a subtração, μ0 − x̄.",
  },
  {
    materia: "estatistica",
    tema: "Testes de hipótese",
    dificuldade: "facil",
    enunciado:
      "Num teste bilateral com α = 5% baseado na normal padrão, quais são os valores críticos de z?",
    opcoes: [
      "−1,96 e 1,96",
      "−1,645 e 1,645",
      "0 e 1,96",
      "−2,576 e 2,576",
      "−0,05 e 0,05",
    ],
    correta: 0,
    explicacao:
      "No teste bilateral, os 5% de α se dividem entre as duas caudas, 2,5% em cada. Os valores que deixam 2,5% em cada cauda são −1,96 e 1,96, e rejeita-se H0 se |z| > 1,96.\n\n±1,645 deixa 5% em cada cauda, com α total de 10%, e corresponde ao teste unilateral de 5%. 0 e 1,96 põe toda a região crítica de um lado. ±2,576 corresponde a α = 1%. E ±0,05 confunde α com os valores críticos.",
  },
  {
    materia: "estatistica",
    tema: "Testes de hipótese",
    dificuldade: "facil",
    enunciado:
      "Para H1: μ > μ0 e nível de significância de 5%, a partir de que valor de z se rejeita H0?",
    opcoes: [
      "1,645",
      "1,96",
      "−1,645",
      "2,326",
      "0,05",
    ],
    correta: 0,
    explicacao:
      "No teste unilateral à direita, toda a região crítica fica na cauda superior, com 5% de área. O ponto que deixa 5% acima é z = 1,645, e rejeita-se H0 se z > 1,645. O teste unilateral é mais sensível na direção prevista, e cego na oposta.\n\n1,96 é o valor do teste bilateral, com 2,5% em cada cauda. −1,645 serviria para H1: μ < μ0. 2,326 corresponde a α = 1% unilateral. E 0,05 é o nível, e não o valor crítico.",
  },
  {
    materia: "estatistica",
    tema: "Testes de hipótese",
    dificuldade: "facil",
    enunciado:
      "O que é o valor p de um teste de hipóteses?",
    opcoes: [
      "A chance, sob H0, de um resultado tão extremo",
      "A probabilidade de H0 ser verdadeira",
      "A probabilidade de H1 ser verdadeira",
      "O nível de significância escolhido",
      "A probabilidade de o resultado se repetir",
    ],
    correta: 0,
    explicacao:
      "O valor p é a probabilidade, calculada supondo H0 verdadeira, de obter um resultado tão extremo quanto o observado, ou mais, na direção de H1. Quanto menor o valor p, menos compatíveis os dados são com H0.\n\nO valor p não é a probabilidade de H0 nem de H1 ser verdadeira: ele supõe H0 verdadeira desde o início do cálculo. O nível de significância é escolhido antes, e o valor p vem dos dados. E ele não mede a chance de o resultado se repetir.",
  },
  {
    materia: "estatistica",
    tema: "Testes de hipótese",
    dificuldade: "facil",
    enunciado:
      "Em que situação se usa um teste bilateral?",
    opcoes: [
      "Quando H1 é μ ≠ μ0",
      "Quando H1 é μ > μ0",
      "Quando H1 é μ < μ0",
      "Quando H0 é μ ≠ μ0",
      "Quando a amostra é grande",
    ],
    correta: 0,
    explicacao:
      "O teste bilateral é usado quando a alternativa admite diferença em qualquer direção, H1: μ ≠ μ0. A região crítica fica dividida entre as duas caudas, porque tanto médias muito acima quanto muito abaixo de μ0 contam como evidência contra H0.\n\nμ > μ0 e μ < μ0 levam a testes unilaterais, com a região crítica numa só cauda. A desigualdade fica em H1, e não em H0. E o tamanho da amostra não decide entre teste unilateral e bilateral.",
  },
  {
    materia: "estatistica",
    tema: "Testes de hipótese",
    dificuldade: "facil",
    enunciado:
      "Para testar H0: p = 0,5, uma amostra de 100 pessoas teve proporção 0,58 de respostas sim. Qual é o valor da estatística z?",
    opcoes: [
      "1,6",
      "0,08",
      "8",
      "0,16",
      "16",
    ],
    correta: 0,
    explicacao:
      "Sob H0, o erro padrão da proporção é √(p0(1 − p0)/n) = √(0,25/100) = 0,05. Então z = (p̂ − p0)/0,05 = 0,08/0,05 = 1,6. O erro padrão usa p0, porque o cálculo supõe H0 verdadeira.\n\n0,08 é a diferença p̂ − p0, sem dividir pelo erro padrão. 8 divide pela variância, 0,01, sem tirar a raiz. 0,16 divide 0,08 por √(p0(1 − p0)) = 0,5, sem o √n. E 16 divide por 0,005, isto é, 0,5/n em vez de 0,5/√n.",
  },
  {
    materia: "estatistica",
    tema: "Testes de hipótese",
    dificuldade: "facil",
    enunciado:
      "Com uma amostra de um milhão de pessoas, uma diferença de 0,1 ponto no QI médio, cujo desvio padrão é 15, foi estatisticamente significativa. Isso indica uma diferença importante na prática?",
    opcoes: [
      "Não: significância não mede o tamanho do efeito",
      "Sim: todo resultado significativo é importante",
      "Sim: p pequeno indica efeito grande",
      "Não: com n grande, nenhum teste é válido",
      "Só se o valor p for exatamente 0,05",
    ],
    correta: 0,
    explicacao:
      "Com n enorme, o erro padrão fica minúsculo, 15/√1.000.000 = 0,015, e até uma diferença de 0,1 ponto gera z ≈ 6,7 e valor p quase nulo. Mas 0,1 ponto é menos de 1% do desvio padrão: o efeito é real e desprezível ao mesmo tempo. Significância estatística indica que o efeito dificilmente é zero, e não que é grande.\n\nNem todo resultado significativo tem importância prática. Um valor p pequeno pode vir de efeito pequeno com amostra enorme. O teste continua válido com n grande. E o valor exato de p não mede a relevância.",
  },
  {
    materia: "estatistica",
    tema: "Testes de hipótese",
    dificuldade: "facil",
    enunciado:
      "Num teste bilateral com α = 5%, a estatística calculada foi z = 2,3. Qual é a decisão?",
    opcoes: [
      "Não se rejeita H0, pois z < 2,576",
      "Rejeita-se H0, pois |z| > 1,96",
      "Rejeita-se H1",
      "Aceita-se H0",
      "Nada se conclui sem o valor de x̄",
    ],
    correta: 1,
    explicacao:
      "No teste bilateral a 5%, a região crítica é |z| > 1,96. Como 2,3 > 1,96, o resultado cai na região crítica e H0 é rejeitada. O valor p correspondente é cerca de 0,021, menor que 0,05.\n\n2,576 é o valor crítico para α = 1%; a 5%, o limite é 1,96. Um teste não rejeita H1: decide apenas se rejeita H0 ou não. Aceitar H0 contraria o resultado. E a estatística z já resume a informação necessária.",
  },
  {
    materia: "estatistica",
    tema: "Testes de hipótese",
    dificuldade: "facil",
    enunciado:
      "Na formulação usual de um teste de hipóteses, qual das hipóteses contém o sinal de igualdade?",
    opcoes: [
      "A hipótese alternativa",
      "A hipótese nula",
      "As duas hipóteses",
      "Nenhuma das duas",
      "Depende do valor p",
    ],
    correta: 1,
    explicacao:
      "A hipótese nula fixa um valor para o parâmetro, como μ = 50 ou p = 0,5, e é essa igualdade que permite calcular a distribuição da estatística de teste e o valor p. A alternativa contém a desigualdade: ≠, > ou <.\n\nA alternativa descreve o que se quer demonstrar, sem fixar um valor. As duas não podem conter a igualdade, pois seriam a mesma hipótese. Sem igualdade em H0, não haveria distribuição de referência. E as hipóteses são formuladas antes de calcular o valor p.",
  },
  {
    materia: "estatistica",
    tema: "Testes de hipótese",
    dificuldade: "media",
    enunciado:
      "Num teste bilateral, a estatística foi z = 2. Usando Φ(2) ≈ 0,9772, qual é o valor p?",
    opcoes: [
      "≈ 0,023",
      "≈ 0,046",
      "≈ 0,977",
      "0,05",
      "≈ 0,954",
    ],
    correta: 1,
    explicacao:
      "No teste bilateral, o valor p soma as duas caudas além de |z|: P(Z > 2) + P(Z < −2) = 2 · (1 − 0,9772) = 0,0456. Resultados tão extremos quanto z = 2, em qualquer direção, ocorreriam em cerca de 4,6% das amostras se H0 fosse verdadeira.\n\n0,023 é uma cauda só, o valor p unilateral. 0,977 é Φ(2), a área abaixo de 2. 0,05 é o nível de significância usual, e não o valor p. E 0,954 é a área central, entre −2 e 2.",
  },
  {
    materia: "estatistica",
    tema: "Testes de hipótese",
    dificuldade: "media",
    enunciado:
      "Num teste com H1: μ > μ0, a estatística foi z = 1,5. Usando Φ(1,5) ≈ 0,9332, qual é o valor p?",
    opcoes: [
      "≈ 0,134",
      "≈ 0,067",
      "≈ 0,933",
      "1,5",
      "0,05",
    ],
    correta: 1,
    explicacao:
      "No teste unilateral à direita, o valor p é a cauda acima do valor observado: P(Z > 1,5) = 1 − 0,9332 = 0,0668. Como é maior que 0,05, H0 não é rejeitada a 5%, embora o resultado aponte na direção de H1.\n\n0,134 soma as duas caudas, o que seria o valor p bilateral. 0,933 é a área abaixo de 1,5. 1,5 é a própria estatística. E 0,05 é o nível de significância.",
  },
  {
    materia: "estatistica",
    tema: "Testes de hipótese",
    dificuldade: "media",
    enunciado:
      "Uma máquina deveria encher pacotes com média 500 g, e σ = 10 g. Uma amostra de 25 pacotes teve média 496 g. Num teste bilateral a 5%, qual é a conclusão?",
    opcoes: [
      "Não se rejeita H0, pois z = −0,4",
      "Rejeita-se H0, pois |z| = 2 > 1,96",
      "Não se rejeita H0, pois z = −2 é negativo",
      "Rejeita-se H0, pois z = −10",
      "Não se rejeita H0, pois 496 está perto de 500",
    ],
    correta: 1,
    explicacao:
      "O erro padrão é 10/√25 = 2, e z = (496 − 500)/2 = −2. No teste bilateral, o que importa é |z| = 2, maior que 1,96: a média está afastada demais de 500 para ser atribuída ao acaso, e H0 é rejeitada. A máquina parece estar enchendo pouco.\n\nz = −0,4 divide pelo desvio padrão, sem o √n. O sinal negativo só indica a direção, e no teste bilateral as duas caudas contam. z = −10 divide σ por n, e não por √n. E 4 g de diferença é muito ou pouco conforme o erro padrão, e não a olho.",
  },
  {
    materia: "estatistica",
    tema: "Testes de hipótese",
    dificuldade: "media",
    enunciado:
      "Uma amostra de 16 observações de uma população normal teve média 53 e desvio padrão amostral 8. Num teste bilateral de H0: μ = 50 a 5%, com t crítico 2,131 para 15 graus de liberdade, qual é a conclusão?",
    opcoes: [
      "Rejeita-se H0, pois t = 6 > 2,131",
      "Não se rejeita H0, pois |t| = 1,5 < 2,131",
      "Rejeita-se H0, pois x̄ é maior que 50",
      "Não se rejeita H0, pois t = 0,375",
      "Rejeita-se H0, pois t = 1,5 > 1,341",
    ],
    correta: 1,
    explicacao:
      "O erro padrão estimado é 8/√16 = 2, e t = (53 − 50)/2 = 1,5. Como 1,5 < 2,131, a estatística não entra na região crítica, e H0 não é rejeitada: uma diferença de 3 unidades é compatível com o acaso, dada a variabilidade e o tamanho da amostra.\n\nt = 6 divide s por n, e não por √n. Uma média amostral maior que 50 sempre pode ocorrer por acaso. t = 0,375 divide pela dispersão das observações, sem o √n. E 1,341 é o valor crítico de um teste unilateral a 10%, que não é o teste pedido.",
  },
  {
    materia: "estatistica",
    tema: "Testes de hipótese",
    dificuldade: "media",
    enunciado:
      "Uma moeda foi lançada 100 vezes e deu 62 caras. Num teste bilateral de H0: p = 0,5 a 5%, usando a aproximação normal, qual é a conclusão?",
    opcoes: [
      "Não se rejeita H0: 62 está perto de 50",
      "Rejeita-se H0: z = 2,4 e p ≈ 0,016",
      "Rejeita-se H0: z = 12",
      "Não se rejeita H0: z = 0,24",
      "Não se rejeita H0: p ≈ 0,99",
    ],
    correta: 1,
    explicacao:
      "Sob H0, o erro padrão de p̂ é √(0,25/100) = 0,05, e z = (0,62 − 0,5)/0,05 = 2,4. O valor p bilateral é 2 · P(Z > 2,4) ≈ 0,016, menor que 0,05: há evidência de que a moeda não é honesta. A conta binomial exata dá valor p de cerca de 0,021, com a mesma conclusão.\n\n62 caras em 100 parece pouco diferente de 50, mas passa de 2 erros padrão. z = 12 usa 0,01 como erro padrão, sem a raiz. z = 0,24 divide 0,12 por 0,5, sem o √n. E 0,99 é a área abaixo de z, e não o valor p.",
  },
  {
    materia: "estatistica",
    tema: "Testes de hipótese",
    dificuldade: "media",
    enunciado:
      "Um teste deu valor p igual a 0,03. Em quais destes níveis de significância H0 seria rejeitada: 1%, 5% e 10%?",
    opcoes: [
      "Só a 1%",
      "A 5% e a 10%, mas não a 1%",
      "Nos três níveis",
      "Em nenhum deles",
      "Só a 10%",
    ],
    correta: 1,
    explicacao:
      "Rejeita-se H0 sempre que o valor p é menor ou igual ao nível de significância. Com p = 0,03: 0,03 ≤ 0,05 e 0,03 ≤ 0,10, mas 0,03 > 0,01. Então há rejeição a 5% e a 10%, e não a 1%. O valor p é o menor nível em que H0 seria rejeitada.\n\nA 1% seria preciso p ≤ 0,01. Nos três níveis exigiria o mesmo. Em nenhum ignora que 0,03 está abaixo de 0,05. E só a 10% esquece o nível de 5%.",
  },
  {
    materia: "estatistica",
    tema: "Testes de hipótese",
    dificuldade: "media",
    enunciado:
      "Duas turmas de 50 alunos, com desvio padrão conhecido de 10 pontos em cada uma, tiveram médias 52 e 48. Num teste bilateral de igualdade das médias a 5%, qual é o resultado?",
    opcoes: [
      "z = 4; rejeita-se H0 a 5%",
      "z = 2; rejeita-se H0 a 5%",
      "z ≈ 1,41; não se rejeita H0",
      "z = 0,4; não se rejeita H0",
      "z = 2; não se rejeita H0 a 5%",
    ],
    correta: 1,
    explicacao:
      "O erro padrão da diferença soma as variâncias das duas médias: √(10²/50 + 10²/50) = √4 = 2. Então z = (52 − 48)/2 = 2, maior que 1,96, e H0 é rejeitada a 5%, com valor p de cerca de 0,046.\n\nz = 4 trata as 100 notas como uma só amostra, com erro padrão 10/√100 = 1. z ≈ 1,41 soma os dois erros padrão, 1,41 + 1,41, em vez das variâncias. z = 0,4 divide a diferença pelo desvio padrão das notas. E, com z = 2, a decisão correta a 5% é rejeitar.",
  },
  {
    materia: "estatistica",
    tema: "Testes de hipótese",
    dificuldade: "media",
    enunciado:
      "Num estudo com 25 pacientes, a diferença entre as medidas depois e antes de um tratamento teve média 2 e desvio padrão 5. Num teste bilateral a 5%, com t crítico 2,064 para 24 graus de liberdade, qual é o resultado?",
    opcoes: [
      "t = 2; rejeita-se H0, pois 2 > 1,96",
      "t = 2; não se rejeita H0, pois 2 < 2,064",
      "t = 10; rejeita-se H0",
      "t = 0,4; não se rejeita H0",
      "t = 2; rejeita-se H0, pois p < 0,01",
    ],
    correta: 1,
    explicacao:
      "Com dados pareados, analisam-se as diferenças como uma amostra: erro padrão 5/√25 = 1 e t = 2/1 = 2. Com 24 graus de liberdade, o valor crítico é 2,064, e t = 2 fica logo abaixo dele: H0 não é rejeitada, por pouco. O valor p é cerca de 0,057.\n\nComparar com 1,96 usa a normal, inadequada com σ estimado e 25 pares; ela levaria à rejeição indevida. t = 10 divide o desvio padrão por n. t = 0,4 divide pela dispersão das diferenças, sem o √n. E o valor p não é menor que 0,01.",
  },
  {
    materia: "estatistica",
    tema: "Testes de hipótese",
    dificuldade: "media",
    enunciado:
      "Num teste com α = 5%, a estatística foi z = 1,8, na direção prevista pela hipótese alternativa. O que acontece se o teste for unilateral e se for bilateral?",
    opcoes: [
      "Rejeita nos dois",
      "Não rejeita em nenhum",
      "Rejeita no unilateral, mas não no bilateral",
      "Rejeita no bilateral, mas não no unilateral",
      "Depende do tamanho da amostra",
    ],
    correta: 2,
    explicacao:
      "No unilateral, o valor crítico é 1,645, e 1,8 > 1,645 leva à rejeição; o valor p é cerca de 0,036. No bilateral, o valor crítico é 1,96, e 1,8 < 1,96 não rejeita; o valor p dobra, para cerca de 0,072. A escolha entre os dois testes precisa ser feita antes de ver os dados.\n\nRejeitar nos dois exigiria |z| > 1,96. Não rejeitar em nenhum ignora que 1,8 passa de 1,645. O bilateral é o mais exigente dos dois. E o tamanho da amostra já está embutido no valor de z.",
  },
  {
    materia: "estatistica",
    tema: "Testes de hipótese",
    dificuldade: "media",
    enunciado:
      "Um estudo relata valor p igual a 0,03. Qual interpretação desse número é correta?",
    opcoes: [
      "H0 tem 3% de probabilidade de ser verdadeira",
      "H1 tem 97% de probabilidade de ser verdadeira",
      "Sob H0, resultados tão extremos ocorrem em 3% das amostras",
      "O efeito observado é de 3%",
      "Há 3% de chance de o resultado ser um erro de medida",
    ],
    correta: 2,
    explicacao:
      "O valor p é calculado supondo H0 verdadeira: se ela fosse verdadeira, resultados tão extremos quanto o observado, ou mais, apareceriam em cerca de 3% das amostras. É uma medida da incompatibilidade entre os dados e H0.\n\nO valor p não é a probabilidade de H0 ser verdadeira, nem 1 − p é a de H1: essas probabilidades exigiriam outras informações, como a plausibilidade prévia das hipóteses. O valor p não mede o tamanho do efeito. E ele não fala de erros de medida.",
  },
  {
    materia: "estatistica",
    tema: "Testes de hipótese",
    dificuldade: "media",
    enunciado:
      "Um dado foi lançado 60 vezes, e as faces de 1 a 6 saíram 8, 9, 12, 11, 6 e 14 vezes. No teste qui-quadrado de aderência ao dado honesto, com valor crítico 11,07 para 5 graus de liberdade a 5%, qual é o resultado?",
    opcoes: [
      "χ² = 42; rejeita-se H0",
      "χ² = 4,2; rejeita-se H0",
      "χ² = 4,2; não se rejeita H0",
      "Rejeita-se H0, pois as frequências diferem de 10",
      "χ² = 0; não se rejeita H0",
    ],
    correta: 2,
    explicacao:
      "Com dado honesto, cada face tem frequência esperada 60/6 = 10. A estatística é a soma de (O − E)²/E: (4 + 1 + 4 + 1 + 16 + 16)/10 = 42/10 = 4,2. Como 4,2 < 11,07, as diferenças são compatíveis com o acaso, e não se rejeita que o dado seja honesto.\n\n42 esquece de dividir cada termo pela frequência esperada. Com 4,2 abaixo do valor crítico, a decisão não pode ser rejeitar. Diferenças em relação a 10 são esperadas por acaso. E 0 é a soma das diferenças sem elevar ao quadrado, que sempre se cancelam.",
  },
  {
    materia: "estatistica",
    tema: "Testes de hipótese",
    dificuldade: "media",
    enunciado:
      "Numa pesquisa, 30 de 50 homens e 20 de 50 mulheres aprovaram uma proposta. No teste qui-quadrado de independência, com valor crítico 3,84 para 1 grau de liberdade a 5%, qual é o resultado?",
    opcoes: [
      "χ² = 2; não se rejeita a independência",
      "χ² = 100; rejeita-se a independência",
      "χ² = 4 > 3,84; rejeita-se a independência",
      "χ² = 0; não se rejeita a independência",
      "χ² = 1; não se rejeita a independência",
    ],
    correta: 2,
    explicacao:
      "Sob independência, a proporção de aprovação seria a geral, 50/100 = 0,5, e as frequências esperadas são 25 em cada uma das quatro células. Cada célula contribui com (±5)²/25 = 1, e χ² = 4. Como 4 > 3,84, rejeita-se a independência: a aprovação parece depender do sexo, com valor p de cerca de 0,046.\n\n2 usa só as células de aprovação, esquecendo as de rejeição. 100 esquece de dividir por 25. 0 soma as diferenças sem elevá-las ao quadrado. E 1 considera uma célula só.",
  },
  {
    materia: "estatistica",
    tema: "Testes de hipótese",
    dificuldade: "media",
    enunciado:
      "Com a mesma diferença x̄ − μ0 = 1 e o mesmo σ = 10, uma amostra de 100 observações dá z = 1. Qual seria o z com 400 observações?",
    opcoes: [
      "4",
      "1",
      "2",
      "0,5",
      "≈ 1,41",
    ],
    correta: 2,
    explicacao:
      "z = (x̄ − μ0)/(σ/√n) cresce com √n: com n = 400, o erro padrão cai de 1 para 10/20 = 0,5, e z = 1/0,5 = 2. A mesma diferença, que não era significativa com 100 observações, passa a ser a 5% com 400.\n\n4 supõe que z cresce na proporção de n, e não de √n. 1 ignora o efeito do tamanho da amostra. 0,5 inverte o efeito. E 1,41 = √2 corresponderia a dobrar n.",
  },
  {
    materia: "estatistica",
    tema: "Testes de hipótese",
    dificuldade: "media",
    enunciado:
      "Para testar H0: μ = 100 com σ = 15 e n = 36, num teste bilateral a 5% (z = 1,96), para que valores da média amostral H0 é rejeitada?",
    opcoes: [
      "Fora de 70,6 a 129,4",
      "Fora de 97,5 a 102,5",
      "Fora de 95,1 a 104,9",
      "Fora de 95,9 a 104,1",
      "Fora de 99,2 a 100,8",
    ],
    correta: 2,
    explicacao:
      "O erro padrão é 15/√36 = 2,5, e a região de não rejeição vai de 100 − 1,96 · 2,5 a 100 + 1,96 · 2,5, isto é, de 95,1 a 104,9. Médias amostrais fora desse intervalo levam à rejeição de H0.\n\n70,6 a 129,4 usa σ sem dividir por √n. 97,5 a 102,5 usa só um erro padrão, sem o 1,96. 95,9 a 104,1 usa z = 1,645, de um teste de 10%. E 99,2 a 100,8 divide σ por n, e não por √n.",
  },
  {
    materia: "estatistica",
    tema: "Testes de hipótese",
    dificuldade: "media",
    enunciado:
      "Para testar H0: μ = 30 contra H1: μ < 30, com σ = 6 conhecido, uma amostra de 36 observações teve média 28,5. Usando Φ(1,5) ≈ 0,9332, qual é o resultado a 5%?",
    opcoes: [
      "z = 1,5; p ≈ 0,067; rejeita-se H0",
      "z = −1,5; rejeita-se H0, pois z < 0",
      "z = −1,5; p ≈ 0,067; não se rejeita H0",
      "z = −0,25; não se rejeita H0",
      "z = −9; rejeita-se H0",
    ],
    correta: 2,
    explicacao:
      "O erro padrão é 6/√36 = 1, e z = (28,5 − 30)/1 = −1,5. No teste unilateral à esquerda, o valor p é P(Z < −1,5) = 1 − 0,9332 ≈ 0,067, maior que 0,05: H0 não é rejeitada, embora a média observada esteja abaixo de 30.\n\nz = 1,5 troca o sinal e ainda decide errado, porque 0,067 > 0,05. z < 0 só indica a direção; a rejeição exigiria z < −1,645. z = −0,25 divide pelo desvio padrão, sem o √n. E z = −9 divide σ por n.",
  },
  {
    materia: "estatistica",
    tema: "Testes de hipótese",
    dificuldade: "media",
    enunciado:
      "Num teste bilateral baseado na normal, o que acontece com a região crítica ao reduzir o nível de significância de 5% para 1%?",
    opcoes: [
      "Aumenta, e rejeitar H0 fica mais fácil",
      "Não muda",
      "Diminui, e rejeitar H0 fica mais difícil",
      "Passa a incluir z = 0",
      "Desaparece",
    ],
    correta: 2,
    explicacao:
      "Com α = 5%, rejeita-se H0 quando |z| > 1,96; com α = 1%, só quando |z| > 2,576. A região crítica encolhe, e é preciso evidência mais forte para rejeitar H0. Em troca, cai a chance de rejeitar H0 quando ela é verdadeira.\n\nA região não aumenta: fica mais afastada do centro. Ela muda, sim, de 1,96 para 2,576. z = 0 nunca está na região crítica de um teste bilateral. E a região continua existindo, só menor.",
  },
  {
    materia: "estatistica",
    tema: "Testes de hipótese",
    dificuldade: "media",
    enunciado:
      "Numa campanha, 60 de 200 clientes da loja A e 45 de 200 da loja B aceitaram uma oferta. No teste bilateral de igualdade das proporções a 5%, com a proporção combinada no erro padrão, qual é o resultado?",
    opcoes: [
      "z ≈ 1,70; rejeita-se H0 a 5%",
      "z ≈ 3,41; rejeita-se H0",
      "z ≈ 1,70; não se rejeita H0 a 5%",
      "z ≈ 0,075; não se rejeita H0",
      "z ≈ 2,41; rejeita-se H0",
    ],
    correta: 2,
    explicacao:
      "As proporções são 0,30 e 0,225, com diferença 0,075. Sob H0, usa-se a proporção combinada, 105/400 = 0,2625, e o erro padrão é √(0,2625 · 0,7375 · (1/200 + 1/200)) ≈ 0,044. Então z ≈ 0,075/0,044 ≈ 1,70, abaixo de 1,96: não se rejeita H0 a 5%, com valor p de cerca de 0,09.\n\nCom 1,70 < 1,96, a rejeição a 5% não se justifica. 3,41 usa √(p(1 − p)/400), como se as 400 respostas formassem uma só amostra. 0,075 é a diferença, sem dividir pelo erro padrão. E 2,41 usa 400 em cada termo, e não 200.",
  },
  {
    materia: "estatistica",
    tema: "Testes de hipótese",
    dificuldade: "media",
    enunciado:
      "Um novo remédio só deve substituir o atual se houver evidência de que é melhor. Como se formulam as hipóteses do teste?",
    opcoes: [
      "H0: o novo é melhor; H1: não é",
      "H0: os dois são diferentes; H1: são iguais",
      "H0: o novo não é melhor; H1: o novo é melhor",
      "H0: o novo é pior; H1: é igual ao atual",
      "Não é preciso formular hipóteses",
    ],
    correta: 2,
    explicacao:
      "O teste exige evidência forte para concluir H1, e por isso H1 deve conter o que se quer demonstrar: que o novo é melhor. H0 fica com o status quo, o novo não é melhor, e só é rejeitada se os dados forem pouco compatíveis com ela. Assim, a troca só acontece com evidência.\n\nPôr a superioridade em H0 inverte o ônus da prova: o novo seria adotado sem evidência. Diferença em H0 e igualdade em H1 também inverte os papéis. Pior contra igual deixa de fora o caso de interesse. E sem hipóteses não há teste.",
  },
  {
    materia: "estatistica",
    tema: "Testes de hipótese",
    dificuldade: "media",
    enunciado:
      "Num teste de H0: μ = 50 contra H1: μ > 50, a estatística foi z = −2,1. Qual é a conclusão a 5%?",
    opcoes: [
      "Rejeita-se H0, pois |z| > 1,645",
      "Rejeita-se H0, pois |z| > 1,96",
      "Conclui-se que μ < 50 com 5% de significância",
      "Não se rejeita H0: z está no lado oposto",
      "O teste é inválido",
    ],
    correta: 3,
    explicacao:
      "Com H1: μ > 50, só valores altos de z são evidência contra H0. Um z negativo aponta na direção contrária à de H1, e o valor p é P(Z > −2,1) ≈ 0,98: não se rejeita H0. O teste unilateral foi montado para detectar aumento, e não diminuição.\n\nUsar |z| trata o teste como bilateral. Concluir que μ < 50 mudaria a hipótese depois de ver os dados, o que invalida o nível de significância. E o teste é válido: apenas não encontrou evidência a favor de H1.",
  },
  {
    materia: "estatistica",
    tema: "Testes de hipótese",
    dificuldade: "media",
    enunciado:
      "Um jogador acertou 9 de 10 lances livres, e sua taxa histórica é de 50%. No teste de H0: p = 0,5 contra H1: p > 0,5, qual é o valor p exato, pela binomial?",
    opcoes: [
      "≈ 0,0098",
      "0,9",
      "≈ 0,001",
      "≈ 0,011",
      "≈ 0,055",
    ],
    correta: 3,
    explicacao:
      "O valor p é a probabilidade, sob H0, de um resultado tão extremo ou mais: P(X ≥ 9) = P(X = 9) + P(X = 10) = (10 + 1)/1.024 = 11/1.024 ≈ 0,011. Com cerca de 1% de chance, o resultado seria bem incomum se a taxa continuasse em 50%.\n\n0,0098 considera só P(X = 9), esquecendo o resultado ainda mais extremo, X = 10. 0,9 é a proporção de acertos. 0,001 é só P(X = 10). E 0,055 é P(X ≥ 8), que inclui um resultado menos extremo que o observado.",
  },
  {
    materia: "estatistica",
    tema: "Testes de hipótese",
    dificuldade: "media",
    enunciado:
      "O que significa dizer que um resultado foi estatisticamente significativo ao nível de 5%?",
    opcoes: [
      "O efeito é de pelo menos 5%",
      "Há 95% de chance de H1 ser verdadeira",
      "A amostra tem mais de 5% da população",
      "O valor p ficou abaixo de 0,05",
      "O erro de medida é menor que 5%",
    ],
    correta: 3,
    explicacao:
      "Significativo a 5% quer dizer que o valor p ficou abaixo de 0,05, e por isso H0 foi rejeitada a esse nível. Se H0 fosse verdadeira, um resultado tão extremo teria menos de 5% de chance de aparecer. O mesmo resultado pode deixar de ser significativo a 1%, se o valor p estiver entre 0,01 e 0,05.\n\nO nível não diz nada sobre o tamanho do efeito. Não se atribui probabilidade a H1 com esse raciocínio. O tamanho da amostra relativo à população não entra na definição. E erro de medida é outro assunto.",
  },
  {
    materia: "estatistica",
    tema: "Testes de hipótese",
    dificuldade: "media",
    enunciado:
      "Com a mesma diferença x̄ − μ0 e o mesmo tamanho de amostra, o que acontece com o valor p se os dados forem mais dispersos, com σ maior?",
    opcoes: [
      "Diminui",
      "Não muda",
      "Fica sempre igual a 0,05",
      "Aumenta",
      "Fica negativo",
    ],
    correta: 3,
    explicacao:
      "Com σ maior, o erro padrão σ/√n cresce, e a mesma diferença corresponde a um z menor em valor absoluto. Um z menor deixa mais área nas caudas, e o valor p aumenta: dados mais ruidosos dão menos evidência contra H0.\n\nO valor p só diminuiria com σ menor. Ele muda, porque depende de z. Não há relação com o nível usual de 0,05. E probabilidades nunca são negativas.",
  },
  {
    materia: "estatistica",
    tema: "Testes de hipótese",
    dificuldade: "media",
    enunciado:
      "Num teste qui-quadrado de independência com uma tabela de 3 linhas e 4 colunas, quantos graus de liberdade tem a estatística?",
    opcoes: [
      "12",
      "7",
      "11",
      "6",
      "5",
    ],
    correta: 3,
    explicacao:
      "Os graus de liberdade são (linhas − 1) · (colunas − 1) = 2 · 3 = 6. Fixados os totais de linhas e colunas, basta preencher 6 células: as demais ficam determinadas pelos totais. Com mais graus de liberdade, o valor crítico cresce: para 6 graus, a 5%, ele é 12,59, e não 3,84.\n\n12 é o número de células, sem descontar as restrições. 7 soma 3 + 4. 11 desconta só o total geral. E 5 subtrai um grau a mais.",
  },
  {
    materia: "estatistica",
    tema: "Testes de hipótese",
    dificuldade: "media",
    enunciado:
      "Dois grupos de 10 observações tiveram médias com diferença 3 e desvio padrão combinado 3. No teste t bilateral a 5%, com valor crítico 2,101 para 18 graus de liberdade, qual é o resultado?",
    opcoes: [
      "t = 1; não se rejeita H0",
      "t ≈ 4,47; rejeita-se H0",
      "t ≈ 2,24 < 2,262; não se rejeita H0",
      "t ≈ 2,24 > 2,101; rejeita-se H0",
      "t ≈ 3,16; rejeita-se H0",
    ],
    correta: 3,
    explicacao:
      "O erro padrão da diferença é s · √(1/10 + 1/10) = 3 · √0,2 ≈ 1,342, e t = 3/1,342 ≈ 2,24. Com 10 + 10 − 2 = 18 graus de liberdade, o valor crítico é 2,101, e 2,24 > 2,101: rejeita-se a igualdade das médias.\n\nt = 1 divide a diferença pelo desvio padrão, sem o fator √(1/10 + 1/10). 4,47 trata as 20 observações como uma única amostra. 2,262 é o valor crítico para 9 graus de liberdade, de um só grupo, e leva à decisão errada. E 3,16 usa só 1/10 na raiz, como se uma das médias fosse conhecida sem erro.",
  },
  {
    materia: "estatistica",
    tema: "Testes de hipótese",
    dificuldade: "media",
    enunciado:
      "Numa tabela de contingência com total geral 200, a linha A soma 40 e a coluna X soma 60. Sob a hipótese de independência, qual é a frequência esperada da célula da linha A com a coluna X?",
    opcoes: [
      "2.400",
      "50",
      "24",
      "12",
      "0,06",
    ],
    correta: 3,
    explicacao:
      "Sob independência, P(A e X) = P(A) · P(X) = (40/200) · (60/200) = 0,2 · 0,3 = 0,06, e a frequência esperada é 200 · 0,06 = 12. Em fórmula: total da linha · total da coluna/total geral = 40 · 60/200 = 12.\n\n2.400 multiplica os totais sem dividir pelo total geral. 50 é a média dos dois totais, sem relação com a independência. 24 divide por 100, e não pelo total geral, 200. E 0,06 é a probabilidade da célula, e não a frequência esperada.",
  },
  {
    materia: "estatistica",
    tema: "Testes de hipótese",
    dificuldade: "media",
    enunciado:
      "Com uma amostra de apenas 5 observações, um teste não rejeitou H0. Isso mostra que H0 é verdadeira?",
    opcoes: [
      "Sim: não rejeitar prova H0",
      "Sim, se o valor p passar de 0,5",
      "Não: o teste foi inválido",
      "Não: com n pequeno, o teste detecta pouco",
      "Sim: H1 foi refutada",
    ],
    correta: 3,
    explicacao:
      "Com poucas observações, o erro padrão é grande, e diferenças reais podem passar despercebidas. Se a média verdadeira estivesse meio desvio padrão acima de μ0, um teste bilateral a 5% com n = 5 rejeitaria H0 em apenas cerca de 20% das amostras. Não rejeitar indica falta de evidência, e não prova de H0.\n\nNenhum valor p, por maior que seja, prova H0. O teste é válido; só tem pouca sensibilidade. E H1 não é refutada: pode ser verdadeira sem ter sido detectada.",
  },
  {
    materia: "estatistica",
    tema: "Testes de hipótese",
    dificuldade: "media",
    enunciado:
      "Um fabricante garante no máximo 5% de peças defeituosas. Numa amostra de 200, há 16 defeituosas. No teste de H0: p = 0,05 contra H1: p > 0,05 a 5%, qual é o resultado?",
    opcoes: [
      "z ≈ 1,95 < 1,96; não se rejeita H0",
      "z ≈ 0,03; não se rejeita H0",
      "z ≈ 1,56; não se rejeita H0",
      "z ≈ 1,95 > 1,645; rejeita-se H0",
      "z ≈ 0,14; não se rejeita H0",
    ],
    correta: 3,
    explicacao:
      "A proporção amostral é 16/200 = 0,08. Sob H0, o erro padrão usa p0: √(0,05 · 0,95/200) ≈ 0,0154, e z = (0,08 − 0,05)/0,0154 ≈ 1,95. No teste unilateral a 5%, o valor crítico é 1,645, e H0 é rejeitada: há evidência de que a taxa de defeitos passa de 5%.\n\nComparar com 1,96 trata o teste como bilateral. 0,03 é a diferença, sem dividir pelo erro padrão. 1,56 usa p̂ = 0,08 no erro padrão, em vez do valor de H0. E 0,14 divide por √(p0(1 − p0)), sem o √n.",
  },
  {
    materia: "estatistica",
    tema: "Testes de hipótese",
    dificuldade: "media",
    enunciado:
      "Qual procedimento é o adequado para testar, de uma só vez, se as médias de quatro grupos independentes são iguais?",
    opcoes: [
      "Seis testes t, um para cada par, sem ajuste",
      "O qui-quadrado de aderência",
      "O coeficiente de correlação entre os grupos",
      "A análise de variância, com a estatística F",
      "O teste z de uma proporção",
    ],
    correta: 3,
    explicacao:
      "A análise de variância compara, numa só estatística F, a variação entre as médias dos grupos com a variação dentro dos grupos. Se as médias forem iguais, as duas variações devem ser parecidas, e F fica perto de 1; F grande indica diferença entre as médias.\n\nSeis testes t sem ajuste, cada um a 5%, elevam muito a chance de algum rejeitar por acaso: com testes independentes, seria 1 − 0,95⁶ ≈ 26%. O qui-quadrado de aderência compara frequências. A correlação mede associação entre duas variáveis numéricas. E o teste de uma proporção não compara médias.",
  },
  {
    materia: "estatistica",
    tema: "Testes de hipótese",
    dificuldade: "dificil",
    enunciado:
      "Se H0 é verdadeira e a estatística do teste tem distribuição contínua, como se distribui o valor p em amostras repetidas?",
    opcoes: [
      "Concentrado perto de 0",
      "Concentrado perto de 1",
      "Normal em torno de 0,5",
      "Sempre igual a 0,05",
      "Uniforme entre 0 e 1",
    ],
    correta: 4,
    explicacao:
      "Sob H0, a probabilidade de o valor p ficar abaixo de qualquer número a é exatamente a: é isso que faz a regra p ≤ α errar com probabilidade α. Uma variável com P(p ≤ a) = a para todo a é uniforme entre 0 e 1. Por isso, valores p pequenos aparecem de vez em quando mesmo sem efeito nenhum: em 5% das vezes, abaixo de 0,05.\n\nConcentrar-se perto de 0 é o que acontece quando H1 é verdadeira. Perto de 1 não tem justificativa. A distribuição não tem forma de sino. E o valor p varia de amostra para amostra.",
  },
  {
    materia: "estatistica",
    tema: "Testes de hipótese",
    dificuldade: "dificil",
    enunciado:
      "Uma teoria genética prevê a proporção 3:1 entre fenótipos dominante e recessivo. Em 400 plantas, observaram-se 290 dominantes e 110 recessivas. No teste qui-quadrado, com valor crítico 3,84 para 1 grau de liberdade a 5%, qual é o resultado?",
    opcoes: [
      "χ² ≈ 1,33; rejeita-se a razão 3:1",
      "χ² = 200; rejeita-se a razão 3:1",
      "χ² ≈ 0,67; não se rejeita a razão 3:1",
      "χ² = 20; rejeita-se a razão 3:1",
      "χ² ≈ 1,33; não se rejeita a razão 3:1",
    ],
    correta: 4,
    explicacao:
      "As frequências esperadas são 300 e 100. Então χ² = (290 − 300)²/300 + (110 − 100)²/100 = 100/300 + 100/100 ≈ 0,33 + 1 = 1,33. Como 1,33 < 3,84, os dados são compatíveis com a razão 3:1, e ela não é rejeitada.\n\nCom χ² abaixo do valor crítico, rejeitar seria errado. 200 soma os quadrados das diferenças sem dividir pelas esperadas. 0,67 divide os dois termos por 300. E 20 soma as diferenças absolutas, sem elevar ao quadrado.",
  },
  {
    materia: "estatistica",
    tema: "Testes de hipótese",
    dificuldade: "dificil",
    enunciado:
      "Os valores 10, 12, 9, 14, 13 e 12 vieram de uma população normal. No teste de H0: μ = 10 contra H1: μ > 10 a 5%, com t crítico 2,015 para 5 graus de liberdade, qual é o resultado?",
    opcoes: [
      "t ≈ 2,19 < 2,571; não se rejeita H0",
      "t ≈ 5,37; rejeita-se H0",
      "t ≈ 0,90; não se rejeita H0",
      "t ≈ 2,40; rejeita-se H0",
      "t ≈ 2,19 > 2,015; rejeita-se H0",
    ],
    correta: 4,
    explicacao:
      "A média é 70/6 ≈ 11,67, e a soma dos quadrados dos desvios é cerca de 17,33, com s = √(17,33/5) ≈ 1,86. O erro padrão é 1,86/√6 ≈ 0,76, e t = (11,67 − 10)/0,76 ≈ 2,19. No teste unilateral, 2,19 > 2,015, e H0 é rejeitada.\n\n2,571 é o valor crítico bilateral, que não corresponde a H1: μ > 10. 5,37 divide s por n. 0,90 divide pela dispersão das observações, sem o √n. E 2,40 calcula s dividindo por n, e não por n − 1.",
  },
  {
    materia: "estatistica",
    tema: "Testes de hipótese",
    dificuldade: "dificil",
    enunciado:
      "Três pacientes tiveram medidas 10, 12 e 14 antes de um tratamento e 11, 13 e 15 depois: cada um aumentou exatamente 1. Comparando um teste t pareado com um teste t para amostras independentes, o que se observa?",
    opcoes: [
      "Os dois dão o mesmo resultado",
      "O independente detecta; o pareado, não",
      "Nenhum dos dois detecta",
      "Não se pode fazer teste com 3 pacientes",
      "O pareado detecta a diferença; o independente, não",
    ],
    correta: 4,
    explicacao:
      "No teste pareado, as diferenças são 1, 1 e 1, sem nenhuma variação: o desvio padrão das diferenças é zero, e a estatística t fica infinitamente grande, com evidência máxima de aumento. No teste para amostras independentes, a diferença de médias, 1, é comparada com a grande variação entre pacientes, desvio padrão 2 em cada grupo, e t = 1/√(4/3 + 4/3) ≈ 0,61, sem significância.\n\nOs resultados diferem muito, porque o pareamento remove a variação entre pacientes. O independente é o que falha. E testes com amostras pequenas são possíveis, desde que o modelo seja adequado.",
  },
  {
    materia: "estatistica",
    tema: "Testes de hipótese",
    dificuldade: "dificil",
    enunciado:
      "Na comparação de duas proporções, 30 de 50 contra 20 de 50, a estatística z, com proporção combinada, vale 2. Qual é o qui-quadrado de independência da tabela 2 × 2 correspondente?",
    opcoes: [
      "2",
      "≈ 1,41",
      "8",
      "0,5",
      "4",
    ],
    correta: 4,
    explicacao:
      "Para uma tabela 2 × 2, o qui-quadrado de independência é exatamente o quadrado do z do teste de duas proporções com proporção combinada: χ² = z² = 4. As esperadas são 25 em cada célula, e χ² = 4 · 5²/25 = 4. Os dois testes são o mesmo teste, e o valor crítico 3,84 é 1,96².\n\n2 repete o z, sem elevar ao quadrado. 1,41 é a raiz de z. 8 dobra o quadrado. E 0,5 divide em vez de elevar.",
  },
  {
    materia: "estatistica",
    tema: "Testes de hipótese",
    dificuldade: "dificil",
    enunciado:
      "Três grupos tiveram os valores 2, 4, 6, 8; 4, 6, 8, 10; e 6, 8, 10, 12. Na análise de variância, com valor crítico F = 4,26 para 2 e 9 graus de liberdade a 5%, qual é o resultado?",
    opcoes: [
      "F = 2,4; rejeita-se H0",
      "F = 16; rejeita-se H0",
      "F ≈ 0,42; não se rejeita H0",
      "F ≈ 0,53; não se rejeita H0",
      "F = 2,4 < 4,26; não se rejeita H0",
    ],
    correta: 4,
    explicacao:
      "As médias são 5, 7 e 9, e a média geral é 7. Entre grupos: 4 · [(5 − 7)² + 0² + (9 − 7)²] = 32, com 2 graus de liberdade, e quadrado médio 16. Dentro dos grupos, cada um tem soma de quadrados 20, total 60, com 9 graus de liberdade, e quadrado médio 60/9 ≈ 6,67. Então F = 16/6,67 = 2,4 < 4,26: a variação entre as médias é compatível com o acaso.\n\nCom F abaixo do valor crítico, rejeitar seria errado. 16 é só o quadrado médio entre grupos. 0,42 inverte a razão. E 0,53 divide as somas de quadrados, 32/60, sem os graus de liberdade.",
  },
  {
    materia: "estatistica",
    tema: "Testes de hipótese",
    dificuldade: "dificil",
    enunciado:
      "Numa pesquisa com 100 homens e 100 mulheres, as preferências pelas opções X, Y e Z foram 20, 30 e 50 entre os homens e 30, 30 e 40 entre as mulheres. No teste de independência, com valor crítico 5,99 para 2 graus de liberdade a 5%, qual é o resultado?",
    opcoes: [
      "χ² ≈ 3,11; rejeita-se a independência",
      "χ² = 100; rejeita-se a independência",
      "χ² ≈ 1,56; não se rejeita a independência",
      "χ² = 0; não se rejeita a independência",
      "χ² ≈ 3,11; não se rejeita a independência",
    ],
    correta: 4,
    explicacao:
      "Os totais das colunas são 50, 60 e 90, e as esperadas em cada linha são 25, 30 e 45. Na linha dos homens: 5²/25 + 0 + 5²/45 ≈ 1 + 0,56 = 1,56; nas mulheres, o mesmo. Então χ² ≈ 3,11, abaixo de 5,99: as diferenças são compatíveis com o acaso, e não se rejeita a independência.\n\nCom 3,11 < 5,99, a rejeição não se justifica. 100 soma os quadrados das diferenças sem dividir pelas esperadas. 1,56 considera só uma das linhas. E 0 soma as diferenças sem elevá-las ao quadrado.",
  },
  {
    materia: "estatistica",
    tema: "Testes de hipótese",
    dificuldade: "dificil",
    enunciado:
      "Com uma amostra de 25 observações e desvio padrão amostral 5, qual é a menor diferença |x̄ − μ0| que um teste t bilateral a 5% considera significativa, com t crítico 2,064 para 24 graus de liberdade?",
    opcoes: [
      "≈ 1,96",
      "≈ 10,32",
      "≈ 0,41",
      "5",
      "≈ 2,06",
    ],
    correta: 4,
    explicacao:
      "Rejeita-se H0 quando |x̄ − μ0|/(s/√n) > 2,064. Com erro padrão 5/√25 = 1, isso exige |x̄ − μ0| > 2,064 · 1 ≈ 2,06. Diferenças menores, com essa amostra, não se distinguem do acaso a 5%.\n\n1,96 usa o valor da normal, que não se aplica com σ estimado e n = 25. 10,32 multiplica 2,064 pelo desvio padrão, sem dividir por √n. 0,41 divide s por n, e não por √n. E 5 é o próprio desvio padrão.",
  },
  {
    materia: "estatistica",
    tema: "Testes de hipótese",
    dificuldade: "dificil",
    enunciado:
      "Em 12 pares de produtos avaliados às cegas, 10 provadores preferiram a marca nova. No teste do sinal bilateral, com H0: as duas marcas são igualmente preferidas, qual é o valor p exato?",
    opcoes: [
      "≈ 0,019",
      "≈ 0,016",
      "≈ 0,146",
      "≈ 0,83",
      "≈ 0,039",
    ],
    correta: 4,
    explicacao:
      "Sob H0, o número de preferências pela marca nova é binomial com n = 12 e p = 1/2. Uma cauda é P(X ≥ 10) = [C(12, 10) + C(12, 11) + C(12, 12)]/4.096 = (66 + 12 + 1)/4.096 ≈ 0,0193. No teste bilateral, dobra-se: p ≈ 0,039, abaixo de 0,05.\n\n0,019 é só a cauda superior, o valor p unilateral. 0,016 é só P(X = 10). 0,146 dobra P(X ≥ 9), que inclui um resultado menos extremo que o observado. E 0,83 é a proporção 10/12, e não uma probabilidade.",
  },
  {
    materia: "estatistica",
    tema: "Testes de hipótese",
    dificuldade: "dificil",
    enunciado:
      "Num teste bilateral, a estatística foi z = 1,5. Usando Φ(1,5) ≈ 0,9332, para quais níveis de significância H0 não seria rejeitada?",
    opcoes: [
      "Para qualquer α menor que cerca de 6,7%",
      "Só para α = 5%",
      "Para qualquer α maior que cerca de 13,4%",
      "Para nenhum α",
      "Para qualquer α menor que cerca de 13,4%",
    ],
    correta: 4,
    explicacao:
      "O valor p bilateral é 2 · (1 − 0,9332) = 0,1336. H0 é rejeitada quando α ≥ p e mantida quando α < p. Assim, a decisão é não rejeitar para qualquer nível abaixo de cerca de 13,4%, o que inclui os usuais 1%, 5% e 10%.\n\n6,7% é o valor p unilateral, que não corresponde a este teste. A não rejeição vale para muitos níveis, e não só para 5%. Acima de 13,4%, H0 seria rejeitada. E há, sim, níveis em que H0 é mantida.",
  },
];
