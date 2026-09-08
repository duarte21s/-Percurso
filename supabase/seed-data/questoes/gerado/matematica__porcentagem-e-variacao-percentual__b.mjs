/* Porcentagem e variação percentual — parte B (25 questões).
   Aplicações em pesquisas, folha de pagamento, impostos, estoques e
   percentuais sucessivos. Ver fisica.mjs para o formato. */

export const questoes = [
  {
    materia: "matematica",
    tema: "Porcentagem e variação percentual",
    dificuldade: "media",
    enunciado:
      "Em uma eleição para representante de turma foram registrados 250 votos válidos, dos quais 90 foram para determinado candidato. O percentual de votos obtido por esse candidato foi de:",
    opcoes: ["25%", "30%", "40%", "36%", "45%"],
    correta: 3,
    explicacao:
      "O cálculo é 90/250 = 0,36 = 36%. A alternativa 30% corresponderia a 75 votos. Um caminho mental: 10% de 250 são 25, então 90 votos ficam entre 30% (75 votos) e 40% (100 votos), mais perto do limite superior.",
  },
  {
    materia: "matematica",
    tema: "Porcentagem e variação percentual",
    dificuldade: "facil",
    enunciado:
      "Uma conta de energia elétrica que era de R$ 180,00 sofreu um reajuste de 20%. O novo valor dessa conta passou a ser de:",
    opcoes: ["R$ 200,00", "R$ 216,00", "R$ 210,00", "R$ 220,00", "R$ 240,00"],
    correta: 1,
    explicacao:
      "O aumento é 0,20 · 180 = R$ 36,00, e o novo valor é R$ 216,00. Multiplicar por 1,20 leva ao mesmo resultado. A alternativa R$ 200,00 arredonda o valor sem corresponder ao percentual informado.",
  },
  {
    materia: "matematica",
    tema: "Porcentagem e variação percentual",
    dificuldade: "media",
    enunciado:
      "Um curso teve 1.200 inscritos, mas 15% deles desistiram antes do início das aulas. O número de participantes que efetivamente iniciaram o curso foi:",
    opcoes: ["180", "1.185", "1.080", "900", "1.020"],
    correta: 4,
    explicacao:
      "As desistências somam 0,15 · 1 200 = 180 pessoas, restando 1 200 − 180 = 1 020 participantes. O caminho direto é multiplicar por 0,85, o complemento do percentual de desistência. A alternativa 180 é o número de desistentes, não o de participantes.",
  },
  {
    materia: "matematica",
    tema: "Porcentagem e variação percentual",
    dificuldade: "media",
    enunciado:
      "Sobre um salário bruto de R$ 2.500,00 incidem descontos que totalizam 12% do valor. O salário líquido recebido pelo trabalhador é de:",
    opcoes: ["R$ 2.200,00", "R$ 2.300,00", "R$ 2.250,00", "R$ 2.100,00", "R$ 2.000,00"],
    correta: 0,
    explicacao:
      "Os descontos somam 0,12 · 2 500 = R$ 300,00, e o líquido é R$ 2.200,00. Equivalentemente, o líquido é 88% do bruto: 0,88 · 2 500 = 2 200. A alternativa R$ 2.250,00 corresponderia a 10% de desconto.",
  },
  {
    materia: "matematica",
    tema: "Porcentagem e variação percentual",
    dificuldade: "dificil",
    enunciado:
      "Em determinada cidade, 45% da população é composta por homens, e o número de mulheres é de 22.000. A população total dessa cidade é de:",
    opcoes: ["48.889", "44.000", "40.000", "50.000", "36.000"],
    correta: 2,
    explicacao:
      "Se os homens são 45%, as mulheres são 55% do total: 0,55 · T = 22 000, logo T = 40 000 habitantes. A alternativa 44 000 usaria 50% como base. O passo decisivo é perceber que o dado fornecido corresponde ao complemento do percentual citado.",
  },
  {
    materia: "matematica",
    tema: "Porcentagem e variação percentual",
    dificuldade: "facil",
    enunciado:
      "Uma meta de vendas foi estabelecida em 250 unidades, e a equipe atingiu 80% dessa meta. O número de unidades efetivamente vendidas foi:",
    opcoes: ["180", "190", "200", "220", "240"],
    correta: 2,
    explicacao:
      "O cálculo é 0,80 · 250 = 200 unidades. A alternativa 240 corresponderia a 96% da meta. Um atalho: 10% de 250 são 25, e 80% equivalem a oito vezes isso, ou seja, 200.",
  },
  {
    materia: "matematica",
    tema: "Porcentagem e variação percentual",
    dificuldade: "facil",
    enunciado:
      "Em um simulado com 60 questões, um estudante acertou 45. O percentual de aproveitamento desse estudante no simulado foi de:",
    opcoes: ["60%", "65%", "70%", "80%", "75%"],
    correta: 4,
    explicacao:
      "O cálculo é 45/60 = 0,75 = 75%. A alternativa 80% corresponderia a 48 acertos. Simplificar a fração antes ajuda: 45/60 reduz para 3/4, que é imediatamente reconhecível como 75%.",
  },
  {
    materia: "matematica",
    tema: "Porcentagem e variação percentual",
    dificuldade: "dificil",
    enunciado:
      "Um produto foi vendido por R$ 84,00 após receber um desconto de 30% sobre o preço de etiqueta. O preço de etiqueta desse produto era de:",
    opcoes: ["R$ 120,00", "R$ 110,00", "R$ 100,00", "R$ 140,00", "R$ 109,20"],
    correta: 0,
    explicacao:
      "Pagando 70% do preço, tem-se 0,70 · P = 84, logo P = 84/0,70 = R$ 120,00. A alternativa R$ 109,20 acrescentaria 30% ao valor pago, caminho incorreto, porque 30% de 84 não é o mesmo que 30% de 120. Para desfazer um desconto, divide-se pelo fator, nunca se soma o percentual.",
  },
  {
    materia: "matematica",
    tema: "Porcentagem e variação percentual",
    dificuldade: "media",
    enunciado:
      "Em uma linha de produção, verifica-se que 4% das peças fabricadas apresentam algum defeito. Em um lote de 2.500 peças, o número esperado de peças defeituosas é:",
    opcoes: ["40", "25", "250", "100", "400"],
    correta: 3,
    explicacao:
      "O cálculo é 0,04 · 2 500 = 100 peças. A alternativa 250 corresponderia a 10%. Um caminho mental: 1% de 2 500 são 25, e 4% equivalem a quatro vezes esse valor, ou seja, 100.",
  },
  {
    materia: "matematica",
    tema: "Porcentagem e variação percentual",
    dificuldade: "dificil",
    enunciado:
      "Um investimento perdeu 10% de seu valor em um mês e, no mês seguinte, ganhou 10% sobre o valor reduzido. Ao final dos dois meses, esse investimento vale, em relação ao valor inicial:",
    opcoes: ["100%", "99%", "101%", "90%", "110%"],
    correta: 1,
    explicacao:
      "Os fatores se multiplicam: 0,90 · 1,10 = 0,99, ou seja, 99% do valor inicial. Houve perda líquida de 1%, porque o ganho de 10% incidiu sobre uma base menor que a original. Essa assimetria explica por que uma queda seguida de alta de mesmo percentual nunca devolve o valor de partida.",
  },
  {
    materia: "matematica",
    tema: "Porcentagem e variação percentual",
    dificuldade: "dificil",
    enunciado:
      "Um preço sofreu dois aumentos sucessivos: primeiro de 25% e, depois, de 20% sobre o valor já reajustado. Em relação ao preço original, o aumento acumulado foi de:",
    opcoes: ["50%", "45%", "55%", "5%", "2,5%"],
    correta: 0,
    explicacao:
      "Os fatores se multiplicam: 1,25 · 1,20 = 1,50, o que corresponde a um aumento total de 50%. A alternativa 45% soma os dois percentuais, esquecendo que o segundo incide sobre um preço já maior. Nesse caso específico, o efeito composto acrescenta 5 pontos percentuais ao resultado da soma simples.",
  },
  {
    materia: "matematica",
    tema: "Porcentagem e variação percentual",
    dificuldade: "media",
    enunciado:
      "Um automóvel anunciado por R$ 45.000,00 recebeu um desconto de 12% para pagamento à vista. O valor à vista desse automóvel é de:",
    opcoes: ["R$ 5.400,00", "R$ 40.000,00", "R$ 33.600,00", "R$ 39.600,00", "R$ 42.300,00"],
    correta: 3,
    explicacao:
      "O desconto é 0,12 · 45 000 = R$ 5.400,00, e o valor à vista é R$ 39.600,00. Multiplicar por 0,88 dá o mesmo resultado. A alternativa R$ 5.400,00 é apenas o desconto, e R$ 42.300,00 corresponderia a 6%.",
  },
  {
    materia: "matematica",
    tema: "Porcentagem e variação percentual",
    dificuldade: "media",
    enunciado:
      "Sabe-se que 60% dos integrantes de um grupo correspondem a 90 pessoas. O número total de integrantes desse grupo é:",
    opcoes: ["54", "150", "135", "120", "180"],
    correta: 1,
    explicacao:
      "De 0,60 · T = 90 vem T = 90/0,60 = 150 pessoas. A alternativa 54 calcularia 60% de 90, invertendo o sentido da operação. A conferência é imediata: 60% de 150 são 90, e os 40% restantes correspondem a 60 pessoas.",
  },
  {
    materia: "matematica",
    tema: "Porcentagem e variação percentual",
    dificuldade: "media",
    enunciado:
      "Uma cidade tem 20.000 habitantes e sua população cresce à taxa de 3% ao ano. Ao final de um ano, mantida essa taxa, a população passará a ser de:",
    opcoes: ["20.300", "23.000", "20.600", "20.060", "26.000"],
    correta: 2,
    explicacao:
      "O acréscimo é 0,03 · 20 000 = 600 habitantes, então a população chega a 20 600. A alternativa 23 000 usaria 15%, e 20 060 erraria uma casa decimal. Multiplicar por 1,03 resolve em uma única operação.",
  },
  {
    materia: "matematica",
    tema: "Porcentagem e variação percentual",
    dificuldade: "media",
    enunciado:
      "Em cálculos de desconto, é comum encontrar o percentual de 12,5%. Esse percentual corresponde exatamente à fração:",
    opcoes: ["1/12", "1/4", "1/5", "1/16", "1/8"],
    correta: 4,
    explicacao:
      "Dividindo 1 por 8 obtém-se 0,125, ou seja, 12,5%. A alternativa 1/12 apenas repete o número do percentual. Vale guardar as frações de referência: 1/8 é 12,5%, 1/4 é 25%, 3/8 é 37,5% e 5/8 é 62,5%.",
  },
  {
    materia: "matematica",
    tema: "Porcentagem e variação percentual",
    dificuldade: "media",
    enunciado:
      "Sobre um rendimento tributável de R$ 4.000,00 incide uma alíquota de 27,5%. O valor do imposto correspondente a essa alíquota é de:",
    opcoes: ["R$ 275,00", "R$ 1.000,00", "R$ 1.200,00", "R$ 900,00", "R$ 1.100,00"],
    correta: 4,
    explicacao:
      "O cálculo é 0,275 · 4 000 = R$ 1.100,00. Decompondo: 25% de 4 000 são 1 000 e 2,5% são 100, somando 1 100. A alternativa R$ 275,00 confunde o percentual com o valor absoluto, erro comum quando o número da alíquota se parece com um valor monetário.",
  },
  {
    materia: "matematica",
    tema: "Porcentagem e variação percentual",
    dificuldade: "dificil",
    enunciado:
      "Em uma escola com 800 estudantes, 35% praticam algum esporte e, entre esses praticantes, 20% escolheram natação. O número de estudantes que praticam natação é:",
    opcoes: ["160", "280", "56", "44", "112"],
    correta: 2,
    explicacao:
      "Primeiro, 0,35 · 800 = 280 praticantes de esporte; em seguida, 0,20 · 280 = 56 nadadores. A alternativa 160 aplicaria os 20% sobre o total da escola, ignorando que o segundo percentual incide apenas sobre o subgrupo. Identificar a base de cada percentual é o que resolve a questão.",
  },
  {
    materia: "matematica",
    tema: "Porcentagem e variação percentual",
    dificuldade: "facil",
    enunciado:
      "Em uma projeção de metas, uma equipe precisa atingir um valor equivalente a 150% de 40 unidades. Esse valor corresponde a:",
    opcoes: ["40", "50", "55", "60", "140"],
    correta: 3,
    explicacao:
      "O cálculo é 1,50 · 40 = 60 unidades, ou seja, as 40 originais mais metade delas. A alternativa 140 soma 100 ao valor, confundindo percentual com quantidade. Percentuais acima de 100% indicam que o resultado supera a referência.",
  },
  {
    materia: "matematica",
    tema: "Porcentagem e variação percentual",
    dificuldade: "facil",
    enunciado:
      "Uma compra de R$ 3.000,00 recebeu 5% de desconto no pagamento à vista. O valor efetivamente pago pelo cliente foi de:",
    opcoes: ["R$ 2.950,00", "R$ 2.850,00", "R$ 2.700,00", "R$ 2.995,00", "R$ 2.800,00"],
    correta: 1,
    explicacao:
      "O desconto é 0,05 · 3 000 = R$ 150,00, então o valor pago é R$ 2.850,00. A alternativa R$ 2.995,00 subtrairia apenas 5 reais. Um atalho: 10% de 3 000 são 300, e metade disso, 150, corresponde aos 5%.",
  },
  {
    materia: "matematica",
    tema: "Porcentagem e variação percentual",
    dificuldade: "facil",
    enunciado:
      "O preço de determinado produto caiu 40% em uma liquidação. Em relação ao preço anterior, o novo preço corresponde a:",
    opcoes: ["60% do preço anterior", "40% do preço anterior", "140% do preço anterior", "160% do preço anterior", "20% do preço anterior"],
    correta: 0,
    explicacao:
      "Se 40% foram retirados, restam 100% − 40% = 60% do preço. A alternativa 40% confunde o percentual retirado com o percentual restante. Trabalhar com o fator complementar, aqui 0,60, é o caminho mais direto para calcular o preço final em uma única multiplicação.",
  },
  {
    materia: "matematica",
    tema: "Porcentagem e variação percentual",
    dificuldade: "facil",
    enunciado:
      "Em um restaurante, a conta de R$ 90,00 recebe o acréscimo opcional de 10% referente ao serviço. O valor total a ser pago com esse acréscimo é de:",
    opcoes: ["R$ 100,00", "R$ 99,00", "R$ 91,00", "R$ 108,00", "R$ 95,00"],
    correta: 1,
    explicacao:
      "O acréscimo é 0,10 · 90 = R$ 9,00, totalizando R$ 99,00. A alternativa R$ 100,00 arredonda o resultado sem corresponder ao cálculo. Calcular 10% é sempre imediato: basta deslocar a vírgula uma casa à esquerda.",
  },
  {
    materia: "matematica",
    tema: "Porcentagem e variação percentual",
    dificuldade: "facil",
    enunciado:
      "Em uma pesquisa com 50 participantes, apenas 2% deles não responderam a determinada questão. O número de participantes que deixaram a questão em branco foi:",
    opcoes: ["1", "2", "2,5", "0,5", "5"],
    correta: 0,
    explicacao:
      "O cálculo é 0,02 · 50 = 1 participante. A alternativa 2 confunde o percentual com a contagem de pessoas. Como o resultado precisa ser um número inteiro de pessoas, valores como 2,5 ou 0,5 já podem ser descartados de imediato.",
  },
  {
    materia: "matematica",
    tema: "Porcentagem e variação percentual",
    dificuldade: "media",
    enunciado:
      "Ao converter a fração 1/3 para a forma percentual, obtém-se um valor com dízima periódica. Arredondado para uma casa decimal, esse valor é:",
    opcoes: ["13%", "30%", "33,3%", "3%", "3,33%"],
    correta: 2,
    explicacao:
      "Dividindo 1 por 3 obtém-se 0,333…, que corresponde a 33,3% aproximadamente. A alternativa 30% arredonda demais e distorce cálculos encadeados. É por isso que percentuais como 33,3% e 66,7% costumam aparecer com casas decimais em pesquisas: eles não têm representação exata.",
  },
  {
    materia: "matematica",
    tema: "Porcentagem e variação percentual",
    dificuldade: "facil",
    enunciado:
      "Uma loja tinha 400 unidades de um produto em estoque e vendeu 25% delas em uma semana. O número de unidades que permaneceram em estoque foi:",
    opcoes: ["100", "375", "320", "250", "300"],
    correta: 4,
    explicacao:
      "As vendas somam 0,25 · 400 = 100 unidades, restando 300 em estoque. O caminho direto é calcular 75% do total: 0,75 · 400 = 300. A alternativa 100 responde quantas foram vendidas, e não quantas sobraram.",
  },
  {
    materia: "matematica",
    tema: "Porcentagem e variação percentual",
    dificuldade: "dificil",
    enunciado:
      "Uma reportagem afirma que determinado indicador 'subiu 3 pontos percentuais'. Essa forma de expressar a variação é apropriada somente quando:",
    opcoes: [
      "o indicador é medido em unidades monetárias.",
      "a variação foi calculada sobre o valor final.",
      "o indicador cresceu mais de 100% no período.",
      "o próprio indicador já é expresso em porcentagem.",
      "não se conhece o valor inicial do indicador.",
    ],
    correta: 3,
    explicacao:
      "Ponto percentual é a unidade da diferença entre dois percentuais: faz sentido dizer que uma taxa de juros passou de 9% para 12%, mas não que um preço em reais subiu 3 pontos percentuais. Quando o indicador é uma quantidade comum, a variação se expressa em unidades ou em porcentagem, nunca em pontos percentuais.",
  },
];
