/* Estimação e intervalo de confiança (50 questões) — estatistica.

   Autorais, escritas por Claude (Anthropic) em 2026-09-30 seguindo as cinco
   regras de CONTINUAR-MATERIAS-POR-OBJETIVO.md. Nenhuma é atribuída a banca
   ou a prova real.

   Conferência do gabarito: 50 de 50 recalculadas por código que chega à
   resposta por outro caminho (ver .rascunho/questoes-objetivo/estatistica__estimacao-e-intervalo-de-confianca.mjs);
   nenhuma ficou sem conferência em código.

   Montado por scripts/montar-questoes-objetivo.mjs; gabarito redistribuído
   por scripts/rebalancear-gabarito.mjs. Relatório em
   _relatorios/estatistica__estimacao-e-intervalo-de-confianca.json. */

export const questoes = [
  {
    materia: "estatistica",
    tema: "Estimação e intervalo de confiança",
    dificuldade: "facil",
    enunciado:
      "Numa pesquisa, a renda média de 500 entrevistados foi R$ 2.300. Como se classifica esse valor em relação à renda média de toda a população?",
    opcoes: [
      "Uma estimativa pontual do parâmetro",
      "A média populacional exata",
      "Um intervalo de confiança",
      "O erro padrão da média",
      "Um parâmetro conhecido",
    ],
    correta: 0,
    explicacao:
      "A média da amostra é uma estatística: um número calculado com os dados, que estima o parâmetro desconhecido, a média de toda a população. Outra amostra de 500 pessoas daria outro valor, próximo mas diferente. Por isso ela é uma estimativa pontual, um único número usado como palpite para μ.\n\nA média populacional exata só seria conhecida com um censo. Um intervalo de confiança tem dois limites. O erro padrão mede quanto a média amostral varia. E o parâmetro é justamente o que não se conhece.",
  },
  {
    materia: "estatistica",
    tema: "Estimação e intervalo de confiança",
    dificuldade: "facil",
    enunciado:
      "Uma população tem desvio padrão 20. Qual é o erro padrão da média de uma amostra aleatória de 100 observações?",
    opcoes: [
      "0,2",
      "20",
      "200",
      "2",
      "0,02",
    ],
    correta: 3,
    explicacao:
      "O erro padrão da média é σ/√n = 20/√100 = 20/10 = 2. Ele mede quanto a média amostral costuma variar de uma amostra para outra: bem menos que as observações individuais, que variam com desvio padrão 20. Com amostras maiores, o erro padrão diminui, mas só na proporção da raiz de n.\n\n0,2 divide por n = 100 em vez de √n. 20 é o desvio padrão de uma observação. 200 multiplica por √n. E 0,02 divide por n e ainda por 10.",
  },
  {
    materia: "estatistica",
    tema: "Estimação e intervalo de confiança",
    dificuldade: "facil",
    enunciado:
      "Uma amostra de 25 observações teve média 50. Sabendo que o desvio padrão da população é 10 e usando z = 1,96, qual é o intervalo de 95% de confiança para a média?",
    opcoes: [
      "De 30,4 a 69,6",
      "De 46,08 a 53,92",
      "De 49,22 a 50,78",
      "De 48 a 52",
      "De 40 a 60",
    ],
    correta: 1,
    explicacao:
      "O erro padrão é σ/√n = 10/√25 = 2, e a margem de erro é z · σ/√n = 1,96 · 2 = 3,92. O intervalo é 50 ± 3,92, isto é, de 46,08 a 53,92. Cerca de 95% dos intervalos construídos assim, em amostras repetidas, conteriam a média da população.\n\n30,4 a 69,6 usa σ sem dividir por √n. 49,22 a 50,78 divide σ por n, e não por √n. 48 a 52 esquece o fator 1,96 e usa só um erro padrão. E 40 a 60 soma e subtrai o desvio padrão da população.",
  },
  {
    materia: "estatistica",
    tema: "Estimação e intervalo de confiança",
    dificuldade: "facil",
    enunciado:
      "O que significa dizer que um intervalo para a média foi construído com 95% de confiança?",
    opcoes: [
      "Há 95% de chance de μ mudar de valor",
      "95% dos dados estão dentro do intervalo",
      "A média amostral tem 95% de chance de estar no intervalo",
      "O intervalo contém 95% das médias populacionais",
      "Cerca de 95% dos intervalos assim construídos contêm μ",
    ],
    correta: 4,
    explicacao:
      "A confiança descreve o método: se o processo de amostrar e calcular o intervalo fosse repetido muitas vezes, cerca de 95% dos intervalos obtidos conteriam a média verdadeira μ. μ é fixo; o que varia de uma amostra para outra é o intervalo.\n\nμ não muda de valor. O intervalo é para a média, e contém uma fração bem menor dos dados individuais. A média amostral está sempre no centro do seu próprio intervalo. E existe uma única média populacional.",
  },
  {
    materia: "estatistica",
    tema: "Estimação e intervalo de confiança",
    dificuldade: "facil",
    enunciado:
      "Com a mesma amostra, o que acontece com o intervalo de confiança para a média ao passar de 95% para 99% de confiança?",
    opcoes: [
      "Fica mais estreito",
      "Não muda",
      "Desloca-se para a direita",
      "Deixa de conter a média amostral",
      "Fica mais largo",
    ],
    correta: 4,
    explicacao:
      "Mais confiança exige um valor crítico maior: z = 2,576 para 99%, contra 1,96 para 95%. Com o mesmo erro padrão, a margem de erro cresce cerca de 31%, e o intervalo fica mais largo. Ganha-se segurança de cobrir μ, e perde-se precisão.\n\nFicar mais estreito seria o efeito de reduzir a confiança. A largura muda, sim. O centro continua na média amostral, sem deslocamento. E a média amostral continua no centro do intervalo.",
  },
  {
    materia: "estatistica",
    tema: "Estimação e intervalo de confiança",
    dificuldade: "facil",
    enunciado:
      "Qual é a margem de erro de um intervalo de 95% para a média, com desvio padrão populacional 12, amostra de 36 observações e z = 1,96?",
    opcoes: [
      "2",
      "7,84",
      "3,92",
      "23,52",
      "0,65",
    ],
    correta: 2,
    explicacao:
      "A margem de erro é z · σ/√n = 1,96 · 12/√36 = 1,96 · 2 = 3,92. Ela é a metade da largura do intervalo, que vai da média amostral menos 3,92 até a média amostral mais 3,92.\n\n2 é o erro padrão, sem o fator 1,96. 7,84 é a largura total do intervalo, o dobro da margem. 23,52 multiplica 1,96 por 12, sem dividir por √n. E 0,65 divide 1,96 · 12 por 36, e não por 6.",
  },
  {
    materia: "estatistica",
    tema: "Estimação e intervalo de confiança",
    dificuldade: "facil",
    enunciado:
      "Um intervalo de confiança para a média vai de 42 a 58. Quais são a estimativa pontual e a margem de erro?",
    opcoes: [
      "Estimativa 50 e margem 16",
      "Estimativa 42 e margem 16",
      "Estimativa 58 e margem 8",
      "Estimativa 50 e margem 8",
      "Estimativa 8 e margem 50",
    ],
    correta: 3,
    explicacao:
      "O intervalo usual é simétrico em torno da estimativa pontual: estimativa ± margem. O centro é (42 + 58)/2 = 50, e a margem é a metade da largura, (58 − 42)/2 = 8. Conferindo: 50 − 8 = 42 e 50 + 8 = 58. Lido assim, um intervalo publicado revela a média amostral e, dividindo a margem pelo valor crítico, o erro padrão.\n\nMargem 16 é a largura inteira, e não a metade. 42 e 58 são os limites, e não o centro. E trocar estimativa e margem inverte os papéis dos dois números.",
  },
  {
    materia: "estatistica",
    tema: "Estimação e intervalo de confiança",
    dificuldade: "facil",
    enunciado:
      "Numa amostra de 400 pessoas, 140 aprovam um projeto. Qual é a estimativa pontual da proporção de aprovação na população?",
    opcoes: [
      "140",
      "0,35",
      "0,65",
      "0,5",
      "≈ 2,86",
    ],
    correta: 1,
    explicacao:
      "A proporção amostral p̂ = 140/400 = 0,35 estima a proporção populacional p. Como toda estimativa, ela varia de amostra para amostra, e um intervalo de confiança mostra quanto: aqui, a margem de 95% seria de cerca de 0,047.\n\n140 é a contagem de aprovações, e não a proporção. 0,65 é a proporção de quem não aprova. 0,5 é um palpite sem os dados. E 2,86 inverte a divisão, 400/140.",
  },
  {
    materia: "estatistica",
    tema: "Estimação e intervalo de confiança",
    dificuldade: "facil",
    enunciado:
      "Em estatística, o que significa dizer que um estimador é não viesado?",
    opcoes: [
      "Ele acerta o parâmetro em toda amostra",
      "Ele tem variância zero",
      "Ele só usa amostras grandes",
      "Ele sempre superestima o parâmetro",
      "Sua média, em muitas amostras, é igual ao parâmetro",
    ],
    correta: 4,
    explicacao:
      "Um estimador é não viesado quando seu valor esperado é o parâmetro: em muitas amostras, as estimativas se distribuem em torno do valor verdadeiro, sem erro sistemático para cima ou para baixo. A média amostral é não viesada para μ, embora cada amostra dê um valor um pouco diferente.\n\nAcertar em toda amostra exigiria variância zero, o que não acontece com dados aleatórios. O tamanho da amostra não define viés. E superestimar sempre é justamente um viés.",
  },
  {
    materia: "estatistica",
    tema: "Estimação e intervalo de confiança",
    dificuldade: "facil",
    enunciado:
      "Para construir um intervalo para a média de uma população normal, com σ desconhecido e amostra pequena, que distribuição fornece o valor crítico?",
    opcoes: [
      "t de Student com n − 1 graus de liberdade",
      "Normal padrão com n graus de liberdade",
      "Binomial com n ensaios",
      "Qui-quadrado com n graus de liberdade",
      "Uniforme entre −1 e 1",
    ],
    correta: 0,
    explicacao:
      "Trocando σ pelo desvio padrão amostral s, a estatística (x̄ − μ)/(s/√n) não é mais normal padrão: segue a t de Student com n − 1 graus de liberdade, que tem caudas mais pesadas. O valor crítico t é maior que o z e compensa a incerteza de estimar σ com poucos dados.\n\nA normal padrão não tem graus de liberdade, e usá-la com s em amostras pequenas dá intervalos curtos demais. A binomial conta sucessos. A qui-quadrado aparece em intervalos para a variância. E a uniforme não se aplica aqui.",
  },
  {
    materia: "estatistica",
    tema: "Estimação e intervalo de confiança",
    dificuldade: "facil",
    enunciado:
      "Numa amostra de 100 pessoas, a proporção de respostas sim foi 0,5. Com z = 1,96, qual é a margem de erro de 95% para a proporção?",
    opcoes: [
      "≈ 4,9 pontos percentuais",
      "≈ 0,98 ponto percentual",
      "≈ 19,6 pontos percentuais",
      "50 pontos percentuais",
      "≈ 9,8 pontos percentuais",
    ],
    correta: 4,
    explicacao:
      "O erro padrão da proporção é √(p̂(1 − p̂)/n) = √(0,25/100) = 0,05, e a margem é 1,96 · 0,05 ≈ 0,098, ou cerca de 9,8 pontos percentuais. Com só 100 entrevistas, a incerteza é grande: o intervalo vai de cerca de 40% a 60%.\n\n4,9 pontos é a metade da margem. 0,98 ponto divide √(p̂(1 − p̂)) por n, e não por √n. 19,6 pontos é a largura total do intervalo. E 50 pontos confunde a margem com a própria proporção.",
  },
  {
    materia: "estatistica",
    tema: "Estimação e intervalo de confiança",
    dificuldade: "facil",
    enunciado:
      "No intervalo x̄ ± z · σ/√n para a média, qual destes fatores não afeta a largura do intervalo?",
    opcoes: [
      "O nível de confiança",
      "O valor da média amostral",
      "O tamanho da amostra",
      "O desvio padrão da população",
      "O valor crítico z",
    ],
    correta: 1,
    explicacao:
      "A largura é 2 · z · σ/√n: depende do nível de confiança, que define z, do desvio padrão e do tamanho da amostra. A média amostral só define onde o intervalo fica centrado, e não o seu tamanho: com x̄ = 10 ou x̄ = 50, a largura é a mesma.\n\nO nível de confiança muda o valor de z. O tamanho da amostra aparece no denominador. O desvio padrão aparece no numerador. E o valor crítico z multiplica a margem diretamente.",
  },
  {
    materia: "estatistica",
    tema: "Estimação e intervalo de confiança",
    dificuldade: "media",
    enunciado:
      "Uma amostra de 16 observações de uma população normal teve média 20 e desvio padrão amostral 4. Usando t = 2,131, com 15 graus de liberdade, qual é o intervalo de 95% para a média?",
    opcoes: [
      "De 18,04 a 21,96",
      "De 11,48 a 28,52",
      "De 19,47 a 20,53",
      "De 17,87 a 22,13",
      "De 16 a 24",
    ],
    correta: 3,
    explicacao:
      "O erro padrão estimado é s/√n = 4/√16 = 1, e a margem é t · s/√n = 2,131 · 1 = 2,131. O intervalo é 20 ± 2,131, de 17,87 a 22,13. Com σ desconhecido e n pequeno, usa-se t no lugar de z.\n\n18,04 a 21,96 usa z = 1,96, que deixa o intervalo curto demais para n = 16. 11,48 a 28,52 esquece de dividir s por √n. 19,47 a 20,53 divide s por n. E 16 a 24 soma e subtrai o desvio padrão amostral.",
  },
  {
    materia: "estatistica",
    tema: "Estimação e intervalo de confiança",
    dificuldade: "media",
    enunciado:
      "Numa amostra de 500 clientes, 150 disseram preferir entrega em casa. Usando z = 1,96, qual é o intervalo de 95% para a proporção de clientes com essa preferência?",
    opcoes: [
      "De 0,280 a 0,320",
      "De 0,298 a 0,302",
      "De 0,266 a 0,334",
      "De 0,260 a 0,340",
      "De 0,220 a 0,380",
    ],
    correta: 3,
    explicacao:
      "A proporção amostral é p̂ = 150/500 = 0,3, e o erro padrão é √(p̂(1 − p̂)/n) = √(0,21/500) ≈ 0,0205. A margem é 1,96 · 0,0205 ≈ 0,040, e o intervalo vai de 0,260 a 0,340. Com 500 entrevistas, a estimativa é precisa a cerca de 4 pontos percentuais.\n\n0,280 a 0,320 esquece o 1,96 e usa um erro padrão só. 0,298 a 0,302 divide por n fora da raiz. 0,266 a 0,334 usa z = 1,645, de 90% de confiança. E 0,220 a 0,380 usa a largura inteira como margem.",
  },
  {
    materia: "estatistica",
    tema: "Estimação e intervalo de confiança",
    dificuldade: "media",
    enunciado:
      "Deseja-se estimar a média de uma população com desvio padrão 15, com margem de erro de no máximo 3 e 95% de confiança (z = 1,96). Qual é o menor tamanho de amostra?",
    opcoes: [
      "96",
      "10",
      "97",
      "25",
      "68",
    ],
    correta: 2,
    explicacao:
      "A margem é z · σ/√n ≤ 3, e então √n ≥ 1,96 · 15/3 = 9,8, ou n ≥ 9,8² = 96,04. Como n é inteiro e 96 ainda dá margem um pouco acima de 3, o menor tamanho é 97. Arredonda-se sempre para cima.\n\n96 arredonda para baixo e não garante a margem. 10 é a raiz de n arredondada, sem elevar ao quadrado. 25 = (15/3)² esquece o 1,96. E 68 usa z = 1,645, que corresponde a 90% de confiança.",
  },
  {
    materia: "estatistica",
    tema: "Estimação e intervalo de confiança",
    dificuldade: "media",
    enunciado:
      "Uma pesquisa quer estimar uma proporção com margem de erro de 5 pontos percentuais e 95% de confiança (z = 1,96), sem nenhuma ideia prévia do valor de p. Qual é o menor tamanho de amostra?",
    opcoes: [
      "384",
      "271",
      "385",
      "400",
      "20",
    ],
    correta: 2,
    explicacao:
      "Sem informação sobre p, usa-se p = 0,5, que maximiza p(1 − p) e garante a margem em qualquer caso. Então n ≥ z² · p(1 − p)/E² = 1,96² · 0,25/0,05² = 3,8416 · 0,25/0,0025 = 384,16, e o menor inteiro é 385.\n\n384 arredonda para baixo. 271 usa z = 1,645, de 90% de confiança. 400 = 1/0,05² ignora z² e p(1 − p). E 20 = 1/0,05 esquece o quadrado.",
  },
  {
    materia: "estatistica",
    tema: "Estimação e intervalo de confiança",
    dificuldade: "media",
    enunciado:
      "Um intervalo de 95% para a média, calculado com σ conhecido, z = 1,96 e n = 36, foi de 47,06 a 52,94. Qual é o desvio padrão da população?",
    opcoes: [
      "2,94",
      "9",
      "1,5",
      "17,64",
      "18",
    ],
    correta: 1,
    explicacao:
      "A margem é a metade da largura: (52,94 − 47,06)/2 = 2,94. Como 2,94 = 1,96 · σ/√36 = 1,96 · σ/6, tem-se σ = 2,94 · 6/1,96 = 9. O erro padrão é 9/6 = 1,5. Refazendo a conta com σ = 9, o intervalo é 50 ± 2,94, o que confere com os limites dados.\n\n2,94 é a margem de erro. 1,5 é o erro padrão, σ/√n. 17,64 = 2,94 · 6 esquece de dividir pelo 1,96. E 18 usa a largura inteira, 5,88, no lugar da margem.",
  },
  {
    materia: "estatistica",
    tema: "Estimação e intervalo de confiança",
    dificuldade: "media",
    enunciado:
      "O valor crítico t de 95% diminui à medida que o tamanho da amostra aumenta: é 2,776 com 4 graus de liberdade e 2,045 com 29. Para que valor ele tende quando n cresce muito?",
    opcoes: [
      "0",
      "2,776",
      "1,645",
      "1,96",
      "Cresce sem limite",
    ],
    correta: 3,
    explicacao:
      "Com muitos graus de liberdade, s estima σ com precisão, e a distribuição t se aproxima da normal padrão. O valor crítico de 95% tende ao da normal, 1,96. Com 100 graus de liberdade, já é cerca de 1,98.\n\n0 seria um intervalo sem largura. 2,776 é o valor para 4 graus de liberdade, o ponto de partida. 1,645 é o valor da normal para 90% de confiança. E o valor diminui, e não cresce.",
  },
  {
    materia: "estatistica",
    tema: "Estimação e intervalo de confiança",
    dificuldade: "media",
    enunciado:
      "Com o mesmo desvio padrão populacional, a amostra A tem n = 50 e intervalo de 90% (z = 1,645), e a amostra B tem n = 200 e intervalo de 95% (z = 1,96). Qual intervalo é mais estreito?",
    opcoes: [
      "O de A",
      "Os dois têm a mesma largura",
      "Depende da média amostral",
      "Não dá para comparar níveis diferentes",
      "O de B",
    ],
    correta: 4,
    explicacao:
      "A largura é proporcional a z/√n. Para A: 1,645/√50 ≈ 0,233; para B: 1,96/√200 ≈ 0,139. O intervalo de B é mais estreito, apesar da confiança maior: quadruplicar a amostra reduz a largura à metade, o que mais do que compensa o aumento de z.\n\nA tem menos observações e fica mais largo. As larguras são diferentes. A média amostral não afeta a largura. E a comparação é possível, porque as duas larguras são calculadas pela mesma fórmula.",
  },
  {
    materia: "estatistica",
    tema: "Estimação e intervalo de confiança",
    dificuldade: "media",
    enunciado:
      "Numa amostra de 200 peças, 2 foram defeituosas. Aplicando o intervalo usual p̂ ± 1,96 · √(p̂(1 − p̂)/n), o que acontece?",
    opcoes: [
      "O limite inferior sai negativo",
      "O intervalo fica perfeito",
      "O limite superior passa de 1",
      "O intervalo tem largura zero",
      "A margem fica maior que 50%",
    ],
    correta: 0,
    explicacao:
      "Com p̂ = 0,01, o erro padrão é √(0,01 · 0,99/200) ≈ 0,0070, e a margem, 1,96 · 0,0070 ≈ 0,0138. O intervalo vai de −0,004 a 0,024, com limite inferior negativo, o que é impossível para uma proporção. O problema é a aproximação normal, ruim quando há poucos sucessos: aqui n · p̂ = 2, bem abaixo de 5.\n\nO resultado não é adequado. O limite superior fica perto de 0,024, longe de 1. A largura não é zero. E a margem é de cerca de 1,4 ponto percentual.",
  },
  {
    materia: "estatistica",
    tema: "Estimação e intervalo de confiança",
    dificuldade: "media",
    enunciado:
      "Numa pesquisa eleitoral com 1.000 entrevistados, um candidato teve 40% das intenções de voto. Com z = 1,96, qual é a margem de erro de 95%?",
    opcoes: [
      "≈ 1,5 ponto",
      "≈ 6,1 pontos",
      "≈ 0,03 ponto",
      "≈ 3,0 pontos",
      "40 pontos",
    ],
    correta: 3,
    explicacao:
      "O erro padrão é √(0,4 · 0,6/1.000) = √0,00024 ≈ 0,0155, e a margem é 1,96 · 0,0155 ≈ 0,030, cerca de 3 pontos percentuais. É o valor típico divulgado em pesquisas com mil entrevistas.\n\n1,5 ponto é o erro padrão, sem o 1,96. 6,1 pontos é a largura total do intervalo. 0,03 ponto confunde a escala: 0,030 é uma proporção, que equivale a 3 pontos percentuais. E 40 pontos é a própria estimativa.",
  },
  {
    materia: "estatistica",
    tema: "Estimação e intervalo de confiança",
    dificuldade: "media",
    enunciado:
      "Duas populações têm desvios padrão conhecidos, 6 e 8. Amostras independentes de 36 e 64 observações deram médias com diferença de 5. Usando z = 1,96, qual é o intervalo de 95% para a diferença entre as médias populacionais?",
    opcoes: [
      "De 1,08 a 8,92",
      "De 3,04 a 6,96",
      "De −14,6 a 24,6",
      "De 2,67 a 7,33",
      "De 2,23 a 7,77",
    ],
    correta: 4,
    explicacao:
      "O erro padrão da diferença soma as variâncias das duas médias: √(6²/36 + 8²/64) = √(1 + 1) ≈ 1,414. A margem é 1,96 · 1,414 ≈ 2,77, e o intervalo é 5 ± 2,77, de 2,23 a 7,77.\n\n1,08 a 8,92 soma os dois erros padrão, 1 + 1 = 2, em vez das variâncias. 3,04 a 6,96 usa um erro padrão só. −14,6 a 24,6 esquece de dividir as variâncias pelos tamanhos das amostras. E 2,67 a 7,33 usa z = 1,645.",
  },
  {
    materia: "estatistica",
    tema: "Estimação e intervalo de confiança",
    dificuldade: "media",
    enunciado:
      "Numa cidade com 20.000 domicílios, uma amostra de 400 teve média de 2,5 moradores por domicílio, com margem de erro de 0,1 morador. Qual é o intervalo correspondente para o total de moradores da cidade?",
    opcoes: [
      "De 48.000 a 52.000",
      "De 960 a 1.040",
      "De 49.800 a 50.200",
      "De 2,4 a 2,6",
      "De 40.000 a 60.000",
    ],
    correta: 0,
    explicacao:
      "O total é o número de domicílios vezes a média por domicílio. Multiplicando o intervalo da média, de 2,4 a 2,6, por 20.000, obtém-se de 48.000 a 52.000 moradores. A margem também é multiplicada: 0,1 · 20.000 = 2.000.\n\n960 a 1.040 multiplica pelo tamanho da amostra, 400, e não da população. 49.800 a 50.200 multiplica só a média e soma a margem sem multiplicá-la. 2,4 a 2,6 é o intervalo da média, e não do total. E 40.000 a 60.000 usa uma margem de 0,5 morador.",
  },
  {
    materia: "estatistica",
    tema: "Estimação e intervalo de confiança",
    dificuldade: "media",
    enunciado:
      "Mantidos o tamanho da amostra e o nível de confiança, o que acontece com a margem de erro de um intervalo t para a média se o desvio padrão amostral dobrar?",
    opcoes: [
      "Quadruplica",
      "Cai pela metade",
      "Dobra",
      "Não muda",
      "Aumenta cerca de 41%",
    ],
    correta: 2,
    explicacao:
      "A margem é t · s/√n, proporcional a s: dobrando s, a margem dobra. O valor t depende só dos graus de liberdade e do nível de confiança, que não mudaram. Dados mais dispersos produzem estimativas menos precisas da média.\n\nQuadruplicar seria o efeito sobre a variância, s². Cair pela metade inverte a relação. A margem muda, sim. E aumentar cerca de 41% corresponderia a multiplicar por √2, o efeito de dobrar a variância, e não o desvio padrão.",
  },
  {
    materia: "estatistica",
    tema: "Estimação e intervalo de confiança",
    dificuldade: "media",
    enunciado:
      "Uma pesquisa com 250 pessoas teve margem de erro de 6 pontos percentuais. Mantidos a confiança e a proporção estimada, quantas pessoas, aproximadamente, seriam necessárias para uma margem de 3 pontos?",
    opcoes: [
      "500",
      "125",
      "2.000",
      "750",
      "1.000",
    ],
    correta: 4,
    explicacao:
      "A margem é proporcional a 1/√n. Para reduzi-la à metade, √n precisa dobrar, e n precisa quadruplicar: 4 · 250 = 1.000 pessoas. Ganhar precisão custa caro: cada vez que a margem cai à metade, a amostra precisa ser quatro vezes maior.\n\n500 dobra a amostra, o que reduziria a margem só para cerca de 4,2 pontos. 125 vai no sentido contrário e aumenta a margem. 2.000 é mais do que o necessário, com margem de cerca de 2,1 pontos. E 750 dá margem de cerca de 3,5 pontos.",
  },
  {
    materia: "estatistica",
    tema: "Estimação e intervalo de confiança",
    dificuldade: "media",
    enunciado:
      "Com uma amostra de 400 observações e σ desconhecido, usar o valor t, com 399 graus de liberdade, em vez de z = 1,96 muda muito o intervalo de 95%?",
    opcoes: [
      "Sim: t dá o dobro da margem",
      "Sim: z não pode ser usado com s",
      "Não, porque t e z são sempre iguais",
      "Sim: t é bem menor que z",
      "Quase nada: t fica muito perto de 1,96",
    ],
    correta: 4,
    explicacao:
      "Com 399 graus de liberdade, a distribuição t praticamente coincide com a normal, e o valor crítico de 95% é cerca de 1,966, contra 1,96. A margem muda menos de 0,5%. Em amostras grandes, usar z com s é uma aproximação excelente.\n\nO valor t não chega perto do dobro de z. Com n grande, z com s é aceitável. t e z não são sempre iguais: com poucos graus de liberdade, a diferença é grande. E t é sempre um pouco maior que z, nunca menor.",
  },
  {
    materia: "estatistica",
    tema: "Estimação e intervalo de confiança",
    dificuldade: "media",
    enunciado:
      "Os tempos, em minutos, de 5 atendimentos foram 12, 15, 18, 13 e 17. Supondo população normal e usando t = 2,776, com 4 graus de liberdade, qual é o intervalo de 95% para o tempo médio?",
    opcoes: [
      "De 12,77 a 17,23",
      "De 7,92 a 22,08",
      "De 11,83 a 18,17",
      "De 12,17 a 17,83",
      "De 12,45 a 17,55",
    ],
    correta: 2,
    explicacao:
      "A média é 75/5 = 15. Os desvios são −3, 0, 3, −2 e 2, com soma dos quadrados 26, e s = √(26/4) ≈ 2,55. O erro padrão é 2,55/√5 ≈ 1,140, e a margem, 2,776 · 1,140 ≈ 3,165. O intervalo é 15 ± 3,165, de 11,83 a 18,17.\n\n12,77 a 17,23 usa z = 1,96 com só 5 observações. 7,92 a 22,08 esquece de dividir s por √n. 12,17 a 17,83 calcula s dividindo por n, e não por n − 1. E 12,45 a 17,55 soma e subtrai s.",
  },
  {
    materia: "estatistica",
    tema: "Estimação e intervalo de confiança",
    dificuldade: "media",
    enunciado:
      "Uma pesquisa anterior indicou uma proporção próxima de 20%. Para estimá-la com margem de 3 pontos percentuais e 95% de confiança (z = 1,96), qual é o menor tamanho de amostra?",
    opcoes: [
      "1.068",
      "683",
      "682",
      "178",
      "482",
    ],
    correta: 1,
    explicacao:
      "Usando a estimativa prévia p ≈ 0,2: n ≥ z² · p(1 − p)/E² = 1,96² · 0,16/0,03² = 3,8416 · 0,16/0,0009 ≈ 682,95, e o menor inteiro é 683. Uma boa estimativa prévia de p reduz bastante a amostra necessária.\n\n1.068 usa p = 0,5, o caso mais desfavorável, sem aproveitar a informação prévia. 682 arredonda para baixo. 178 esquece o fator z². E 482 usa z = 1,645, de 90% de confiança.",
  },
  {
    materia: "estatistica",
    tema: "Estimação e intervalo de confiança",
    dificuldade: "media",
    enunciado:
      "Um pesquisador constrói 200 intervalos de 95% de confiança, cada um com uma amostra independente, todos para o mesmo parâmetro. Quantos deles, aproximadamente, devem conter o valor verdadeiro?",
    opcoes: [
      "Todos os 200",
      "Cerca de 95",
      "Cerca de 10",
      "Cerca de 195",
      "Cerca de 190",
    ],
    correta: 4,
    explicacao:
      "Cada intervalo contém o parâmetro com probabilidade 0,95, e o número esperado de acertos é 200 · 0,95 = 190. Cerca de 10 intervalos, em média, deixam o parâmetro de fora, sem que se saiba quais. O número de acertos é binomial, com n = 200 e p = 0,95, e costuma ficar entre 184 e 196.\n\nTodos os 200 exigiria 100% de confiança. 95 confunde a porcentagem com a contagem. 10 é o número esperado de intervalos que falham. E 195 corresponderia a 97,5% de confiança.",
  },
  {
    materia: "estatistica",
    tema: "Estimação e intervalo de confiança",
    dificuldade: "media",
    enunciado:
      "O estimador A é não viesado e tem variância 4; o estimador B tem viés 1 e variância 1. Qual tem o menor erro quadrático médio, EQM = variância + viés²?",
    opcoes: [
      "B, com EQM 2 contra 4",
      "A, por ser não viesado",
      "Os dois têm o mesmo EQM",
      "B, com EQM 1",
      "A, com EQM 2",
    ],
    correta: 0,
    explicacao:
      "Para A: EQM = 4 + 0² = 4. Para B: EQM = 1 + 1² = 2. B erra, em média, menos que A, apesar do viés: sua variância pequena compensa o erro sistemático. Ausência de viés, sozinha, não faz de um estimador o melhor.\n\nA ser não viesado não garante o menor erro total. Os EQM são diferentes. EQM 1 para B esquece o viés ao quadrado. E EQM 2 para A atribui a A o valor que é de B.",
  },
  {
    materia: "estatistica",
    tema: "Estimação e intervalo de confiança",
    dificuldade: "media",
    enunciado:
      "Um intervalo de 95% para a média, com σ conhecido, foi de 8,2 a 11,8. Com a mesma amostra e z = 2,576, qual seria o intervalo de 99%?",
    opcoes: [
      "De 7,63 a 12,37",
      "De 8,12 a 11,88",
      "De 8,63 a 11,37",
      "De 7,42 a 12,58",
      "De 8,2 a 11,8",
    ],
    correta: 0,
    explicacao:
      "O centro é 10 e a margem de 95% é 1,8, de modo que o erro padrão é 1,8/1,96 ≈ 0,918. A margem de 99% é 2,576 · 0,918 ≈ 2,37, e o intervalo vai de 7,63 a 12,37: mais confiança, mais largura.\n\n8,12 a 11,88 aumenta a margem na proporção 99/95, sem usar os valores de z. 8,63 a 11,37 inverte a razão entre os z e estreita o intervalo. 7,42 a 12,58 usa o próprio z = 2,576 como margem. E 8,2 a 11,8 repete o intervalo de 95%.",
  },
  {
    materia: "estatistica",
    tema: "Estimação e intervalo de confiança",
    dificuldade: "media",
    enunciado:
      "Uma amostra de 36 tempos de espera teve média 30 min, e o desvio padrão da população é 6 min. Usando z = 1,645, qual é o limite superior de confiança unilateral de 95% para o tempo médio?",
    opcoes: [
      "≈ 32,0 min",
      "≈ 28,4 min",
      "36 min",
      "≈ 31,6 min",
      "≈ 39,9 min",
    ],
    correta: 3,
    explicacao:
      "Um limite unilateral põe todo o risco de 5% num lado só, e usa z = 1,645 em vez de 1,96. Com erro padrão 6/√36 = 1, o limite superior é 30 + 1,645 · 1 ≈ 31,6 min: com 95% de confiança, o tempo médio não passa disso.\n\n32,0 usa z = 1,96, do intervalo bilateral. 28,4 é o limite inferior unilateral. 36 soma o desvio padrão da população. E 39,9 soma 1,645 · 6, sem dividir por √n.",
  },
  {
    materia: "estatistica",
    tema: "Estimação e intervalo de confiança",
    dificuldade: "media",
    enunciado:
      "Uma população tem distribuição bem assimétrica, com cauda longa à direita. Com amostras de 100 observações, o intervalo x̄ ± 1,96 · s/√n ainda funciona razoavelmente?",
    opcoes: [
      "Não: só vale para populações normais",
      "Sim: a média amostral fica aproximadamente normal",
      "Sim: os dados individuais ficam normais",
      "Não: seria preciso n maior que 1.000",
      "Sim, mas só com σ conhecido",
    ],
    correta: 1,
    explicacao:
      "Pelo teorema central do limite, a média de 100 observações independentes tem distribuição aproximadamente normal, mesmo que a população seja assimétrica. Por isso o intervalo cobre a média com probabilidade próxima de 95%; com populações muito assimétricas e amostras pequenas, a cobertura piora.\n\nA normalidade da população não é exigida com n grande. Os dados individuais continuam assimétricos: é a média que fica normal. Cem observações costumam bastar. E o intervalo com s funciona sem precisar conhecer σ.",
  },
  {
    materia: "estatistica",
    tema: "Estimação e intervalo de confiança",
    dificuldade: "media",
    enunciado:
      "No intervalo para a média, por que se usa s/√n, e não s, para medir a incerteza?",
    opcoes: [
      "Para deixar o intervalo mais largo",
      "Porque s já é o erro da média",
      "Porque n é sempre grande",
      "A média varia menos que uma observação",
      "Para corrigir o viés de s",
    ],
    correta: 3,
    explicacao:
      "O intervalo estima a média, e a média de n observações independentes varia bem menos que uma observação isolada: seu desvio padrão é σ/√n, estimado por s/√n. Usar s mediria a dispersão dos dados, e não a incerteza sobre a média.\n\nDividir por √n estreita o intervalo, e não o alarga. s mede a dispersão das observações, e não o erro da média. O fator √n aparece para qualquer tamanho de amostra. E s/√n não corrige o viés de s.",
  },
  {
    materia: "estatistica",
    tema: "Estimação e intervalo de confiança",
    dificuldade: "media",
    enunciado:
      "Num intervalo de confiança de 90% construído com a normal, quanta probabilidade fica em cada cauda, fora do intervalo?",
    opcoes: [
      "10% em cada cauda",
      "2,5% em cada cauda",
      "90% em cada cauda",
      "5% em cada cauda",
      "45% em cada cauda",
    ],
    correta: 3,
    explicacao:
      "Os 10% que ficam fora do intervalo se dividem igualmente entre as duas caudas: 5% abaixo e 5% acima. Por isso o valor crítico é z = 1,645, que deixa 95% abaixo dele. Num intervalo de 99%, pelo mesmo raciocínio, ficam 0,5% em cada cauda, e o valor crítico sobe para 2,576.\n\n10% em cada cauda somaria 20% fora, com 80% de confiança. 2,5% em cada cauda é o caso de 95%. 90% é a área central, e não a de uma cauda. E 45% é a área entre a média e cada limite.",
  },
  {
    materia: "estatistica",
    tema: "Estimação e intervalo de confiança",
    dificuldade: "media",
    enunciado:
      "Depois de calculado, um intervalo de 95% para a média deu de 12 a 18. Na interpretação usual, qual é a probabilidade de a média populacional estar entre 12 e 18?",
    opcoes: [
      "Exatamente 0,95",
      "0,5",
      "Depende da média amostral",
      "0,05",
      "É 0 ou 1; os 95% se referem ao método",
    ],
    correta: 4,
    explicacao:
      "Na interpretação frequentista, μ é um número fixo, e o intervalo calculado também: ou μ está entre 12 e 18, ou não está. A confiança de 95% descreve o procedimento, que acerta em 95% das amostras, e não este intervalo específico, que não tem mais nada de aleatório.\n\nDizer 0,95 transfere a propriedade do método para o intervalo já calculado. 0,5 não tem justificativa. A média amostral já foi usada, e o intervalo está fixado. E 0,05 é a taxa de erro do método.",
  },
  {
    materia: "estatistica",
    tema: "Estimação e intervalo de confiança",
    dificuldade: "media",
    enunciado:
      "À medida que o tamanho da amostra cresce, o que acontece com a distribuição da média amostral?",
    opcoes: [
      "Fica cada vez mais espalhada",
      "Concentra-se cada vez mais em torno de μ",
      "Aproxima-se da distribuição dos dados",
      "Afasta-se de μ",
      "Não muda",
    ],
    correta: 1,
    explicacao:
      "A média amostral tem valor esperado μ e desvio padrão σ/√n, que vai a zero quando n cresce. A distribuição se concentra cada vez mais perto de μ: a média amostral é um estimador consistente. É a lei dos grandes números vista pelo lado da estimação.\n\nO espalhamento diminui, e não aumenta. A distribuição da média fica mais estreita que a dos dados, e não igual a ela. O centro continua em μ. E a distribuição muda, sim, com n.",
  },
  {
    materia: "estatistica",
    tema: "Estimação e intervalo de confiança",
    dificuldade: "media",
    enunciado:
      "Com 95% de confiança (z = 1,96), qual é o menor tamanho de amostra para que a margem de erro da média seja no máximo 5% do desvio padrão populacional?",
    opcoes: [
      "1.536",
      "40",
      "1.537",
      "1.083",
      "400",
    ],
    correta: 2,
    explicacao:
      "A condição é 1,96 · σ/√n ≤ 0,05σ, e σ se cancela: √n ≥ 1,96/0,05 = 39,2, ou n ≥ 1.536,64. O menor inteiro é 1.537. A resposta não depende do valor de σ, só da margem expressa em desvios padrão.\n\n1.536 arredonda para baixo e deixa a margem um pouco acima de 5%. 40 é a raiz de n arredondada, sem elevar ao quadrado. 1.083 usa z = 1,645, de 90% de confiança. E 400 = 1/0,05² esquece o fator 1,96².",
  },
  {
    materia: "estatistica",
    tema: "Estimação e intervalo de confiança",
    dificuldade: "media",
    enunciado:
      "Para manter a mesma margem de erro, por quanto se multiplica o tamanho da amostra ao passar de 95% (z = 1,96) para 99% (z = 2,576) de confiança?",
    opcoes: [
      "≈ 1,31",
      "≈ 1,73",
      "≈ 1,04",
      "2",
      "≈ 3,0",
    ],
    correta: 1,
    explicacao:
      "O tamanho de amostra é proporcional a z²: n = (z · σ/E)². A razão é (2,576/1,96)² ≈ 1,314² ≈ 1,73. Subir de 95% para 99% de confiança exige cerca de 73% mais observações: é o preço de reduzir o risco de erro de 5% para 1% sem perder precisão.\n\n1,31 é a razão entre os valores de z, sem elevar ao quadrado. 1,04 é a razão 99/95 entre os níveis. 2 supõe que a amostra dobra. E 3,0 não sai das contas.",
  },
  {
    materia: "estatistica",
    tema: "Estimação e intervalo de confiança",
    dificuldade: "media",
    enunciado:
      "Uma pesquisa com 1.000 entrevistas é feita numa cidade de 100 mil habitantes, e outra, também com 1.000 entrevistas, num país de 10 milhões. Com a mesma proporção estimada, como se comparam as margens de erro?",
    opcoes: [
      "A do país é bem menor",
      "A da cidade é bem menor",
      "São praticamente iguais",
      "A do país é 100 vezes maior",
      "Não dá para calcular sem o censo",
    ],
    correta: 2,
    explicacao:
      "A margem depende do tamanho da amostra, e quase nada do tamanho da população, desde que a amostra seja uma fração pequena dela. O fator de correção para população finita, √((N − n)/(N − 1)), vale cerca de 0,995 para N = 100 mil e 0,99995 para 10 milhões: diferença de meio por cento.\n\nA margem do país não fica menor, nem 100 vezes maior. A da cidade é só levemente menor. E a margem é calculada com a amostra, sem precisar de censo.",
  },
  {
    materia: "estatistica",
    tema: "Estimação e intervalo de confiança",
    dificuldade: "dificil",
    enunciado:
      "Numa pesquisa, 120 de 200 homens e 100 de 200 mulheres aprovam uma proposta. Usando z = 1,96, qual é o intervalo de 95% para a diferença entre as proporções de homens e de mulheres?",
    opcoes: [
      "De 0,003 a 0,197",
      "De 0,051 a 0,149",
      "De −0,037 a 0,237",
      "De 0,031 a 0,169",
      "De 0,019 a 0,181",
    ],
    correta: 0,
    explicacao:
      "As proporções são 0,6 e 0,5, com diferença 0,1. As variâncias das duas proporções se somam: √(0,6 · 0,4/200 + 0,5 · 0,5/200) = √0,00245 ≈ 0,0495. A margem é 1,96 · 0,0495 ≈ 0,097, e o intervalo vai de 0,003 a 0,197: a diferença é positiva, mas pode ser bem pequena.\n\n0,051 a 0,149 esquece o 1,96. −0,037 a 0,237 soma os erros padrão, em vez das variâncias. 0,031 a 0,169 divide pelo total, 400, e não por 200 em cada grupo. E 0,019 a 0,181 usa z = 1,645.",
  },
  {
    materia: "estatistica",
    tema: "Estimação e intervalo de confiança",
    dificuldade: "dificil",
    enunciado:
      "Um pesquisador usa, por engano, x̄ ± 1,96 · s/√n com amostras de 5 observações de uma população normal. Qual é, aproximadamente, a cobertura real desses intervalos?",
    opcoes: [
      "Exatamente 95%",
      "Cerca de 99%",
      "Cerca de 88%",
      "Cerca de 50%",
      "100%",
    ],
    correta: 2,
    explicacao:
      "Com σ estimado por s e n = 5, a estatística (x̄ − μ)/(s/√n) segue a t com 4 graus de liberdade, de caudas mais pesadas que a normal. A probabilidade de ela ficar entre −1,96 e 1,96 é só cerca de 0,88. O intervalo correto usaria t = 2,776 e seria cerca de 42% mais largo.\n\nA cobertura não é 95%, porque 1,96 é o valor da normal, e não da t com 4 graus de liberdade. Ela fica abaixo de 95%, e não acima. 50% subestima muito. E nenhum intervalo desse tipo cobre sempre.",
  },
  {
    materia: "estatistica",
    tema: "Estimação e intervalo de confiança",
    dificuldade: "dificil",
    enunciado:
      "Para dados normais e amostras grandes, a variância da mediana amostral é cerca de π/2 ≈ 1,57 vez a variância da média amostral. Quantas observações a mediana precisa para ter a mesma precisão que a média com 100 observações?",
    opcoes: [
      "100",
      "≈ 157",
      "≈ 126",
      "≈ 64",
      "≈ 247",
    ],
    correta: 1,
    explicacao:
      "As duas variâncias são inversamente proporcionais ao tamanho da amostra: a da média é σ²/n e a da mediana, cerca de 1,57 · σ²/n. Para igualar σ²/100, a mediana precisa de n = 1,57 · 100 ≈ 157 observações. A média é mais eficiente para dados normais; a mediana compensa com resistência a valores extremos.\n\n100 ignora a diferença de eficiência. 126 = √1,57 · 100 compara desvios padrão, e não variâncias. 64 divide em vez de multiplicar. E 247 multiplica por 1,57 duas vezes.",
  },
  {
    materia: "estatistica",
    tema: "Estimação e intervalo de confiança",
    dificuldade: "dificil",
    enunciado:
      "Para estimar μ a partir de uma amostra de 20 observações, compara-se a média de todas as 20 com a média só das 2 primeiras. O que se pode afirmar sobre esses dois estimadores?",
    opcoes: [
      "Os dois são não viesados; a das 20 varia menos",
      "Só a média das 20 é não viesada",
      "Só a média das 2 é não viesada",
      "Os dois têm a mesma variância",
      "Nenhum dos dois é não viesado",
    ],
    correta: 0,
    explicacao:
      "Qualquer média de observações da amostra tem valor esperado μ, e por isso os dois estimadores são não viesados. A diferença está na variância: σ²/20 para a média das 20 e σ²/2 para a das 2, dez vezes maior. Entre estimadores não viesados, prefere-se o de menor variância, que desperdiça menos informação.\n\nA média das 2 primeiras também é não viesada, e a das 20 também. As variâncias diferem por um fator 10. E os dois têm valor esperado igual a μ.",
  },
  {
    materia: "estatistica",
    tema: "Estimação e intervalo de confiança",
    dificuldade: "dificil",
    enunciado:
      "Em 25 pacientes, a diferença entre a pressão antes e depois de um tratamento teve média 2,5 e desvio padrão 6. Usando t = 2,064, com 24 graus de liberdade, qual é o intervalo de 95% para a redução média?",
    opcoes: [
      "De 0,02 a 4,98",
      "De 0,15 a 4,85",
      "De −9,88 a 14,88",
      "De 2,00 a 3,00",
      "De −3,5 a 8,5",
    ],
    correta: 0,
    explicacao:
      "Com dados pareados, analisam-se as diferenças de cada paciente como uma única amostra. O erro padrão é 6/√25 = 1,2, e a margem é 2,064 · 1,2 ≈ 2,48. O intervalo é 2,5 ± 2,48, de 0,02 a 4,98: fica todo acima de zero, mas por pouco.\n\n0,15 a 4,85 usa z = 1,96 com só 25 pares. −9,88 a 14,88 esquece de dividir o desvio padrão por √n. 2,00 a 3,00 divide por n, e não por √n. E −3,5 a 8,5 soma e subtrai o desvio padrão das diferenças.",
  },
  {
    materia: "estatistica",
    tema: "Estimação e intervalo de confiança",
    dificuldade: "dificil",
    enunciado:
      "Um intervalo de 95% para a média, construído com a normal, foi de 51 a 57. Num teste bilateral de H0: μ = 50 ao nível de 5%, com os mesmos dados, qual é a conclusão?",
    opcoes: [
      "Não se rejeita H0",
      "Rejeita-se H0 só ao nível de 1%",
      "Rejeita-se H0, pois 50 fica fora do intervalo",
      "Não dá para concluir sem o valor p",
      "Aceita-se que μ = 54",
    ],
    correta: 2,
    explicacao:
      "Um intervalo de 95% reúne os valores de μ que um teste bilateral de 5% não rejeitaria. Como 50 está fora do intervalo, H0: μ = 50 é rejeitada. Conferindo: com centro 54 e margem 3, o erro padrão é 3/1,96 ≈ 1,53, e z = (54 − 50)/1,53 ≈ 2,61, além de 1,96.\n\nNão rejeitar contraria a correspondência entre intervalo e teste. A rejeição não se limita a 1%: ela já ocorre a 5%. O intervalo basta para decidir. E rejeitar H0 não prova que μ seja exatamente 54.",
  },
  {
    materia: "estatistica",
    tema: "Estimação e intervalo de confiança",
    dificuldade: "dificil",
    enunciado:
      "Com apenas 2 observações e σ desconhecido, o valor t de 95% é cerca de 12,7, com 1 grau de liberdade. Por que ele é tão maior que 1,96?",
    opcoes: [
      "Porque a amostra é normal",
      "s é muito instável com 1 grau de liberdade",
      "Porque 12,7 é um erro de tabela",
      "Porque se usa n em vez de n − 1",
      "Porque t cresce quando n cresce",
    ],
    correta: 1,
    explicacao:
      "Com 2 observações, o desvio padrão amostral se baseia num único grau de liberdade e varia enormemente de uma amostra para outra: às vezes as duas observações ficam quase iguais, e s sai perto de zero. A distribuição t com 1 grau de liberdade tem caudas muito pesadas, e o valor crítico de 95% sobe para cerca de 12,7, para manter a cobertura.\n\nA normalidade da população é uma hipótese, e não a causa. 12,7 é o valor correto. O cálculo usa n − 1 = 1 grau de liberdade. E t diminui, e não cresce, quando n aumenta.",
  },
  {
    materia: "estatistica",
    tema: "Estimação e intervalo de confiança",
    dificuldade: "dificil",
    enunciado:
      "Com 600 entrevistas e proporção estimada 0,5, a margem de erro de 95% é de cerca de 4 pontos percentuais. Com a mesma amostra, qual nível de confiança corresponde a uma margem de 3 pontos?",
    opcoes: [
      "≈ 86%",
      "≈ 71%",
      "90%",
      "≈ 97%",
      "75%",
    ],
    correta: 0,
    explicacao:
      "O erro padrão é √(0,25/600) ≈ 0,0204. Uma margem de 0,03 corresponde a z = 0,03/0,0204 ≈ 1,47, e a área entre −1,47 e 1,47 na normal padrão é cerca de 0,86. Com a mesma amostra, só se estreita o intervalo abrindo mão de confiança.\n\n71% reduz o nível na mesma proporção da margem, 95% · 3/4, sem passar pela normal. 90% exigiria z = 1,645, com margem de cerca de 3,4 pontos. 97% seria um nível maior, com margem maior. E 75% toma 3/4 como o próprio nível de confiança.",
  },
  {
    materia: "estatistica",
    tema: "Estimação e intervalo de confiança",
    dificuldade: "dificil",
    enunciado:
      "São construídos 20 intervalos de 95% de confiança, com amostras independentes, para 20 parâmetros diferentes. Qual é a probabilidade de todos eles conterem os respectivos parâmetros?",
    opcoes: [
      "95%",
      "5%",
      "≈ 64%",
      "≈ 36%",
      "100%",
    ],
    correta: 3,
    explicacao:
      "Cada intervalo acerta com probabilidade 0,95, de forma independente, e a probabilidade de os 20 acertarem é 0,95²⁰ ≈ 0,358, cerca de 36%. A chance de pelo menos um falhar é de cerca de 64%: quando se fazem muitas estimativas, é quase certo que alguma erre.\n\n95% vale para cada intervalo isolado, e não para o conjunto. 5% é a chance de falha de um intervalo. 64% é a chance de pelo menos um falhar. E 100% exigiria intervalos que nunca falham.",
  },
  {
    materia: "estatistica",
    tema: "Estimação e intervalo de confiança",
    dificuldade: "dificil",
    enunciado:
      "O desvio padrão amostral s, calculado com divisor n − 1, é um estimador não viesado de σ?",
    opcoes: [
      "Sim: o divisor n − 1 elimina todo viés",
      "Não: em média, s fica acima de σ",
      "Não: em média, s fica um pouco abaixo de σ",
      "Sim, para qualquer tamanho de amostra",
      "Só quando n = 1",
    ],
    correta: 2,
    explicacao:
      "O divisor n − 1 torna s² não viesado para σ², mas a raiz quadrada não preserva essa propriedade: como a raiz é côncava, a média de s fica abaixo da raiz da média de s². Com n = 5 de uma normal, s vale, em média, cerca de 94% de σ. O viés diminui quando n cresce.\n\nO divisor n − 1 elimina o viés de s², e não o de s. s tende a subestimar σ, e não a superestimar. O viés existe para todo n finito. E com n = 1 nem se calcula s.",
  },
];
