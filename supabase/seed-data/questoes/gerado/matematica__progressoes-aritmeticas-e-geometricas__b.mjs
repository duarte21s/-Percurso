export const questoes = [
  {
    materia: "matematica",
    tema: "Progressões aritméticas e geométricas",
    dificuldade: "facil",
    enunciado:
      "Uma ONG de reflorestamento plantou 240 mudas na primeira semana de um mutirão e, em cada semana seguinte, plantou exatamente 60 mudas a mais do que na semana anterior. Mantido esse ritmo, quantas mudas serão plantadas na oitava semana do mutirão?",
    opcoes: ["660 mudas", "720 mudas", "780 mudas", "900 mudas", "3.600 mudas"],
    correta: 0,
    explicacao:
      "As quantidades semanais formam uma PA de primeiro termo 240 e razão 60. Pelo termo geral, a8 = a1 + 7r = 240 + 7 × 60 = 660 mudas. O valor 720 aparece em quem multiplica a razão por 8 em vez de 7, esquecendo que entre a primeira e a oitava semana existem apenas sete acréscimos. Já 3.600 é a soma dos oito primeiros termos, resposta de quem calcula o total do mutirão em vez do plantio de uma única semana. As opções 780 e 900 estendem o mesmo erro de contagem para nove e onze acréscimos.",
  },
  {
    materia: "matematica",
    tema: "Progressões aritméticas e geométricas",
    dificuldade: "facil",
    enunciado:
      "Em um mutirão de vacinação contra a gripe, uma unidade básica de saúde aplicou 150 doses no primeiro dia e, a cada dia seguinte, 20 doses a mais do que no dia anterior. O mutirão durou 10 dias seguidos. Quantas doses foram aplicadas ao todo nesse período?",
    opcoes: ["1.500 doses", "1.680 doses", "2.400 doses", "2.500 doses", "3.300 doses"],
    correta: 2,
    explicacao:
      "No décimo dia foram aplicadas a10 = 150 + 9 × 20 = 330 doses, e a soma da PA vale S10 = 10 × (150 + 330) / 2 = 2.400 doses. Quem responde 1.500 multiplica 150 por 10 e ignora o aumento diário, tratando a sequência como constante. Quem responde 3.300 multiplica o último dia por 10, como se todos os dias tivessem rendido 330 doses. O valor 2.500 vem de calcular a10 como 150 + 10 × 20 = 350, contando dez acréscimos em vez de nove, e 1.680 soma ao total sem variação apenas o último acréscimo.",
  },
  {
    materia: "matematica",
    tema: "Progressões aritméticas e geométricas",
    dificuldade: "media",
    enunciado:
      "Um vídeo de uma campanha de doação de sangue começou a circular nas redes sociais e teve 400 visualizações no primeiro dia. A equipe percebeu que o número de visualizações diárias vinha triplicando de um dia para o outro. Mantido esse comportamento, quantas visualizações o vídeo teve no sexto dia?",
    opcoes: ["7.200", "10.800", "32.400", "64.800", "97.200"],
    correta: 4,
    explicacao:
      "As visualizações diárias formam uma PG de primeiro termo 400 e razão 3, então a6 = 400 × 3^5 = 400 × 243 = 97.200. O valor 32.400 corresponde a 400 × 3^4 e é o erro de quem usa expoente 4, contando os dias em vez dos intervalos entre eles. O 7.200 sai de 400 × 3 × 6, tratando o crescimento como proporcional ao número de dias, ou seja, como uma PA. Já 10.800 é o total do quarto dia, e 64.800 supõe que o último salto tenha sido apenas o dobro, e não o triplo.",
  },
  {
    materia: "matematica",
    tema: "Progressões aritméticas e geométricas",
    dificuldade: "media",
    enunciado:
      "Uma empresa de energia solar instalou 4.000 painéis em 2020 e 324.000 painéis em 2024. Verificou-se que o número de painéis instalados por ano formou uma progressão geométrica ao longo desses cinco anos. Qual foi a razão dessa progressão?",
    opcoes: ["aproximadamente 2,4", "3", "9", "20,25", "81"],
    correta: 1,
    explicacao:
      "De 2020 a 2024 há cinco termos e, portanto, quatro multiplicações pela razão: 4.000 × q^4 = 324.000, o que dá q^4 = 81 e q = 3. Quem responde 81 confunde a razão anual com o crescimento total do período inteiro. Quem responde 9 extrai a raiz quadrada de 81, como se houvesse apenas dois intervalos entre os anos. O 20,25 vem de dividir 81 por 4, tratando um crescimento multiplicativo como se fosse aditivo, e o 2,4 usa cinco intervalos em vez de quatro.",
  },
  {
    materia: "matematica",
    tema: "Progressões aritméticas e geométricas",
    dificuldade: "dificil",
    enunciado:
      "Em um teste de laboratório, uma bola de borracha é solta de uma altura de 12 m sobre uma placa rígida. A cada choque com a placa ela sobe 3/5 da altura de que caiu, repetindo o movimento indefinidamente. Qual é a distância total percorrida pela bola até parar?",
    opcoes: ["30 m", "36 m", "42 m", "48 m", "60 m"],
    correta: 3,
    explicacao:
      "A queda inicial vale 12 m e, depois dela, cada altura alcançada é percorrida duas vezes, na subida e na descida. As subidas formam uma PG infinita de primeiro termo 12 × 3/5 = 7,2 e razão 3/5, cuja soma é 7,2 / (1 − 3/5) = 18 m. Logo a distância total é 12 + 2 × 18 = 48 m. Quem responde 30 soma apenas as subidas à queda inicial e esquece que a bola desce novamente de cada altura. Quem responde 36 calcula 2 × 18 mas deixa de fora a queda inicial de 12 m, enquanto 42 aparece em quem conta a altura inicial duas vezes.",
  },
  {
    materia: "matematica",
    tema: "Progressões aritméticas e geométricas",
    dificuldade: "media",
    enunciado:
      "O tratamento de um paciente prevê reduzir a dose diária de um medicamento de 480 mg, na primeira semana, até 60 mg, na sétima semana, diminuindo sempre a mesma quantidade de uma semana para a outra. Qual é a redução semanal prevista nesse plano?",
    opcoes: ["52,5 mg", "60 mg", "70 mg", "84 mg", "105 mg"],
    correta: 2,
    explicacao:
      "As doses formam uma PA com a1 = 480 e a7 = 60. Como a7 = a1 + 6r, temos 60 = 480 + 6r, logo r = −70, ou seja, uma redução de 70 mg por semana. Quem responde 60 divide a queda total de 420 mg por 7, confundindo o número de semanas com o número de intervalos entre elas, que é 6. Quem responde 84 divide por 5 e quem responde 105 divide por 4, ambos por contar mal os intervalos. O 52,5 vem de dividir por 8, um intervalo a mais do que existe.",
  },
  {
    materia: "matematica",
    tema: "Progressões aritméticas e geométricas",
    dificuldade: "media",
    enunciado:
      "Um medicamento injetável tem meia-vida de 6 horas no organismo, isto é, a cada 6 horas a quantidade presente no sangue cai pela metade. Um paciente recebeu uma dose única de 480 mg. Que quantidade do medicamento ainda estará no sangue 24 horas após a aplicação?",
    opcoes: ["30 mg", "60 mg", "80 mg", "120 mg", "240 mg"],
    correta: 0,
    explicacao:
      "Em 24 horas cabem 24 / 6 = 4 meias-vidas, e as quantidades formam uma PG de razão 1/2: 480 × (1/2)^4 = 480 / 16 = 30 mg. Quem responde 60 mg conta apenas três meias-vidas, o que corresponderia a 18 horas de espera. Quem responde 120 mg para na segunda meia-vida, e 240 mg é o valor logo após as primeiras 6 horas. Já 80 mg vem de dividir 480 por 6, confundindo o tempo de meia-vida com um divisor da dose.",
  },
  {
    materia: "matematica",
    tema: "Progressões aritméticas e geométricas",
    dificuldade: "media",
    enunciado:
      "Em um programa de reabilitação, um corredor amador percorreu 1.800 m na primeira sessão de treino e passou a acrescentar 250 m a cada sessão seguinte. Em qual sessão ele correrá, pela primeira vez, uma distância de pelo menos 5.000 m?",
    opcoes: ["na 11ª sessão", "na 12ª sessão", "na 13ª sessão", "na 14ª sessão", "na 20ª sessão"],
    correta: 3,
    explicacao:
      "A distância da sessão n é 1.800 + 250(n − 1). Exigindo 1.800 + 250(n − 1) ≥ 5.000, obtém-se n − 1 ≥ 12,8, ou seja, n ≥ 13,8, e a primeira sessão inteira que atende à meta é a 14ª, com 5.050 m. Quem responde a 13ª arredonda 12,8 para 13 e esquece de somar 1 para voltar à posição da sessão, ficando em 4.800 m. Quem responde a 12ª trunca o valor e comete o mesmo esquecimento. Já a 20ª vem de dividir 5.000 por 250, ignorando os 1.800 m de que ele já partia.",
  },
  {
    materia: "matematica",
    tema: "Progressões aritméticas e geométricas",
    dificuldade: "media",
    enunciado:
      "Uma cooperativa comprou uma colheitadeira por R$ 80.000,00. O contador informou que o equipamento perde 20% do seu valor a cada ano, sempre calculados sobre o valor do ano anterior. Qual será o valor da colheitadeira ao final de três anos de uso?",
    opcoes: ["R$ 32.000,00", "R$ 40.960,00", "R$ 48.000,00", "R$ 51.200,00", "R$ 64.000,00"],
    correta: 1,
    explicacao:
      "Perder 20% ao ano equivale a multiplicar o valor por 0,8 a cada ano, o que gera uma PG: 80.000 × 0,8^3 = 80.000 × 0,512 = R$ 40.960,00. Quem responde R$ 32.000,00 desconta sempre R$ 16.000,00, isto é, 20% do valor inicial, tratando a desvalorização como uma PA de razão fixa. Quem responde R$ 51.200,00 para no segundo ano e quem responde R$ 64.000,00 para no primeiro. O R$ 48.000,00 combina os dois erros, aplicando dois descontos fixos de R$ 16.000,00.",
  },
  {
    materia: "matematica",
    tema: "Progressões aritméticas e geométricas",
    dificuldade: "media",
    enunciado:
      "Uma campanha de arrecadação de agasalhos começou com 3 doadores no primeiro dia. Cada doador convidava outras pessoas, de modo que o número de novos doadores dobrava a cada dia. Considerando 8 dias de campanha, quantos doadores participaram no total?",
    opcoes: ["24 doadores", "192 doadores", "255 doadores", "384 doadores", "765 doadores"],
    correta: 4,
    explicacao:
      "É a soma de uma PG finita com a1 = 3, q = 2 e n = 8: S8 = 3 × (2^8 − 1) / (2 − 1) = 3 × 255 = 765 doadores. O valor 384 é apenas o oitavo termo, ou seja, os novos doadores do último dia, e não o acumulado da campanha. O 255 é (2^8 − 1) sem multiplicar pelo primeiro termo, erro de quem para no meio da fórmula. Já 24 vem de fazer 3 × 8, supondo crescimento constante como em uma PA, e 192 é o total de novos doadores do sétimo dia.",
  },
  {
    materia: "matematica",
    tema: "Progressões aritméticas e geométricas",
    dificuldade: "facil",
    enunciado:
      "Para pagar uma viagem de formatura, uma estudante guardou R$ 120,00 no primeiro mês e, em cada mês seguinte, guardou R$ 30,00 a mais do que no mês anterior. Quanto ela guardará no décimo mês desse plano de poupança?",
    opcoes: ["R$ 300,00", "R$ 330,00", "R$ 360,00", "R$ 390,00", "R$ 420,00"],
    correta: 3,
    explicacao:
      "Os valores mensais formam uma PA com a1 = 120 e r = 30, logo a10 = 120 + 9 × 30 = R$ 390,00. Quem responde R$ 420,00 usa 120 + 10 × 30, contando dez acréscimos quando entre o primeiro e o décimo mês existem apenas nove. Quem responde R$ 360,00 conta oito acréscimos, deslocando a posição no sentido contrário. As opções R$ 330,00 e R$ 300,00 repetem esse erro de contagem e correspondem, na verdade, ao oitavo e ao sétimo mês.",
  },
  {
    materia: "matematica",
    tema: "Progressões aritméticas e geométricas",
    dificuldade: "dificil",
    enunciado:
      "Uma padaria de bairro produziu 200 pães no primeiro dia de funcionamento e, a cada dia, passou a produzir 15 pães a mais do que no dia anterior. Quantos pães a padaria produziu no período que vai do 11º ao 20º dia, incluindo esses dois dias?",
    opcoes: ["3.500 pães", "4.175 pães", "4.850 pães", "6.850 pães", "8.350 pães"],
    correta: 1,
    explicacao:
      "No 11º dia a produção é 200 + 10 × 15 = 350 pães e no 20º dia é 200 + 19 × 15 = 485 pães. Esses dez dias formam uma PA cuja soma é 10 × (350 + 485) / 2 = 4.175 pães. Quem responde 6.850 calcula a soma dos 20 primeiros dias e esquece de descontar os dez primeiros. Quem responde 8.350 monta a soma correta mas não divide por 2, ignorando a metade na fórmula. As opções 3.500 e 4.850 vêm de multiplicar por 10 apenas o primeiro ou apenas o último dia do intervalo.",
  },
  {
    materia: "matematica",
    tema: "Progressões aritméticas e geométricas",
    dificuldade: "dificil",
    enunciado:
      "Um programa de eficiência energética de uma prefeitura promete uma economia de 900 kWh no primeiro ano. A cada ano seguinte, a economia adicional gerada pelo programa corresponde a um terço da economia do ano anterior. Mantido esse padrão indefinidamente, qual é a economia total acumulada que o programa pode gerar?",
    opcoes: ["1.350 kWh", "1.500 kWh", "1.800 kWh", "2.250 kWh", "2.700 kWh"],
    correta: 0,
    explicacao:
      "As economias anuais formam uma PG infinita de primeiro termo 900 e razão 1/3, cuja soma é S = a1 / (1 − q) = 900 / (2/3) = 1.350 kWh. Quem responde 2.700 divide 900 pela própria razão, 1/3, em vez de dividir por 1 − q, que é a expressão correta. Quem responde 1.800 usa 1 − q = 1/2, confundindo a razão 1/3 com 1/2. As opções 1.500 e 2.250 aparecem em quem arredonda o denominador da fórmula para 0,6 ou 0,4 no lugar de 2/3.",
  },
  {
    materia: "matematica",
    tema: "Progressões aritméticas e geométricas",
    dificuldade: "facil",
    enunciado:
      "Um técnico agrícola registrou dois conjuntos de dados semanais. Em A, o número de armadilhas para insetos instaladas por semana foi 3, 7, 11 e 15. Em B, o número de insetos capturados por semana foi 3, 6, 12 e 24. Sobre essas duas sequências, é correto afirmar que:",
    opcoes: [
      "A e B são progressões aritméticas, de razões 4 e 3.",
      "A e B são progressões geométricas, de razões 4 e 2.",
      "A é geométrica de razão 4 e B é aritmética de razão 2.",
      "A é aritmética de razão 3 e B é geométrica de razão 3.",
      "A é aritmética de razão 4 e B é geométrica de razão 2.",
    ],
    correta: 4,
    explicacao:
      "Em A cada termo é obtido somando 4 ao anterior (3, 7, 11, 15), o que define uma PA de razão 4. Em B cada termo é o dobro do anterior (3, 6, 12, 24), logo é uma PG de razão 2. Dizer que B é aritmética de razão 3 usa apenas a primeira diferença e ignora que as diferenças seguintes são 6 e 12, ou seja, não são constantes. Chamar A de geométrica de razão 4 troca a diferença constante por um quociente constante, mas 7 dividido por 3 não é 4. Também não cabe dizer que B é aritmética de razão 2, pois 2 é o quociente, não a diferença.",
  },
  {
    materia: "matematica",
    tema: "Progressões aritméticas e geométricas",
    dificuldade: "media",
    enunciado:
      "Depois de uma obra de contenção, o nível da água de um reservatório passou a subir 8 cm por dia. No primeiro dia de medição o nível era de 3,60 m, e a meta da operação é atingir 5,20 m. Em que dia de medição o nível chegará exatamente à meta?",
    opcoes: ["no 19º dia", "no 20º dia", "no 21º dia", "no 25º dia", "no 65º dia"],
    correta: 2,
    explicacao:
      "Os níveis formam uma PA com a1 = 3,60 m e razão 0,08 m. De 3,60 m até 5,20 m há 1,60 m, que dividido por 0,08 m dá 20 subidas; como o primeiro dia já é o primeiro termo, a meta cai no 21º dia. Quem marca o 20º dia conta apenas os intervalos e esquece que o dia inicial já entra na contagem. Quem marca o 65º dia divide 5,20 por 0,08 e ignora que o reservatório já partia de 3,60 m. As opções 19º e 25º repetem esse tipo de erro de contagem, por falta ou por excesso.",
  },
  {
    materia: "matematica",
    tema: "Progressões aritméticas e geométricas",
    dificuldade: "media",
    enunciado:
      "O anfiteatro de uma escola técnica tem 15 fileiras de cadeiras. A primeira fileira tem 18 cadeiras e cada fileira seguinte tem 4 cadeiras a mais do que a anterior. Qual é a capacidade total desse anfiteatro?",
    opcoes: ["270 lugares", "690 lugares", "1.110 lugares", "1.380 lugares", "2.220 lugares"],
    correta: 1,
    explicacao:
      "A última fileira tem a15 = 18 + 14 × 4 = 74 cadeiras, e a soma da PA vale S15 = 15 × (18 + 74) / 2 = 15 × 46 = 690 lugares. Quem responde 270 multiplica 18 por 15 e ignora o acréscimo de 4 cadeiras por fileira. Quem responde 1.110 multiplica a última fileira por 15, como se todas as fileiras tivessem 74 cadeiras. Já 1.380 é o resultado de 15 × 92 sem dividir por 2, isto é, esquecendo a metade na fórmula da soma, e 2.220 dobra esse mesmo descuido.",
  },
  {
    materia: "matematica",
    tema: "Progressões aritméticas e geométricas",
    dificuldade: "dificil",
    enunciado:
      "Um aplicativo de entregas lançou um programa de indicações. Na primeira rodada, 4 pessoas se cadastraram pelo programa e, em cada rodada seguinte, o número de novos cadastros foi o dobro do da rodada anterior. Ao final de 10 rodadas, quantos cadastros o programa gerou ao todo?",
    opcoes: ["40 cadastros", "512 cadastros", "1.023 cadastros", "2.048 cadastros", "4.092 cadastros"],
    correta: 4,
    explicacao:
      "A soma de uma PG finita é Sn = a1 × (q^n − 1) / (q − 1), então S10 = 4 × (2^10 − 1) / 1 = 4 × 1.023 = 4.092 cadastros. Quem responde 2.048 calcula apenas o décimo termo, ou seja, os cadastros da última rodada, e não o acumulado. Quem responde 1.023 chega a 2^10 − 1 mas esquece de multiplicar pelo primeiro termo. O 40 vem de fazer 4 × 10, supondo crescimento constante como em uma PA, e 512 corresponde ao total de uma rodada anterior.",
  },
  {
    materia: "matematica",
    tema: "Progressões aritméticas e geométricas",
    dificuldade: "facil",
    enunciado:
      "Nove lojas de uma rede de calçados venderam, em um mesmo dia, quantidades de pares que formam uma progressão aritmética crescente, da menor para a maior. Somadas, as nove lojas venderam 405 pares. Quantos pares vendeu a quinta loja dessa sequência?",
    opcoes: ["36 pares", "40 pares", "45 pares", "81 pares", "90 pares"],
    correta: 2,
    explicacao:
      "Em uma PA com número ímpar de termos, o termo do meio é igual à média de todos os termos. Como são 9 lojas e o total é 405, a média vale 405 / 9 = 45 pares, e a quinta loja é justamente o termo central. Quem responde 81 divide 405 por 5, confundindo a posição do termo com a quantidade de termos da progressão. Quem responde 90 dobra a média, imaginando que o termo central valha o dobro dela. As opções 36 e 40 supõem uma razão arbitrária sem usar a propriedade do termo central.",
  },
  {
    materia: "matematica",
    tema: "Progressões aritméticas e geométricas",
    dificuldade: "facil",
    enunciado:
      "O ônibus escolar de um município rural faz viagens em horários igualmente espaçados. A primeira saída do dia é às 6h10 e, a partir dela, há uma saída a cada 25 minutos. A que horas ocorre a quinta saída do dia?",
    opcoes: ["7h50", "7h55", "8h00", "8h15", "8h40"],
    correta: 0,
    explicacao:
      "Os horários formam uma PA de razão 25 minutos. Da primeira até a quinta saída há quatro intervalos, ou seja, 4 × 25 = 100 minutos, isto é, 1 hora e 40 minutos depois das 6h10, o que dá 7h50. Quem responde 8h15 conta cinco intervalos e esquece que a primeira saída já é o primeiro termo da progressão. Quem responde 8h40 conta seis intervalos, agravando o mesmo erro. As opções 7h55 e 8h00 vêm de somar minutos soltos ao horário sem fechar a conta dos intervalos.",
  },
  {
    materia: "matematica",
    tema: "Progressões aritméticas e geométricas",
    dificuldade: "media",
    enunciado:
      "O consumo mensal de energia elétrica de uma residência vem crescendo segundo uma progressão aritmética. No terceiro mês do ano foram consumidos 240 kWh e, no oitavo mês, 390 kWh. Qual foi o consumo dessa residência no primeiro mês do ano?",
    opcoes: ["150 kWh", "160 kWh", "170 kWh", "180 kWh", "190 kWh"],
    correta: 3,
    explicacao:
      "Entre o terceiro e o oitavo mês há cinco razões, logo 5r = 390 − 240 = 150 e r = 30 kWh. Voltando dois meses a partir do terceiro, a1 = 240 − 2 × 30 = 180 kWh. Quem responde 190 kWh divide 150 por 6, contando os meses em vez dos intervalos entre eles, e chega a uma razão de 25 kWh. Quem responde 150 kWh subtrai três razões, como se do primeiro ao terceiro mês houvesse três intervalos, quando há apenas dois. As opções 160 e 170 correspondem a razões de 40 e 35 kWh, também obtidas por contagens erradas de intervalos.",
  },
  {
    materia: "matematica",
    tema: "Progressões aritméticas e geométricas",
    dificuldade: "facil",
    enunciado:
      "Uma publicação de um coletivo cultural recebeu 50 compartilhamentos na primeira hora após ser postada. A cada hora seguinte, o número de compartilhamentos foi o dobro do registrado na hora anterior. Quantos compartilhamentos a publicação recebeu na sétima hora?",
    opcoes: ["350", "700", "800", "1.600", "3.200"],
    correta: 4,
    explicacao:
      "Os compartilhamentos por hora formam uma PG de a1 = 50 e q = 2, então a7 = 50 × 2^6 = 50 × 64 = 3.200. Quem responde 1.600 usa 2^5 e conta um dobramento a menos, pois entre a primeira e a sétima hora ocorrem seis dobramentos. Quem responde 350 faz 50 × 7, tratando o crescimento como uma PA de razão 50. O 800 é o valor da quinta hora e o 700 vem de dobrar o resultado de 50 × 7.",
  },
  {
    materia: "matematica",
    tema: "Progressões aritméticas e geométricas",
    dificuldade: "dificil",
    enunciado:
      "Um edital de cultura distribuiu bolsas entre três pontos de cultura de um município. As quantidades recebidas, do menor para o maior, formam uma progressão geométrica crescente. Ao todo foram 26 bolsas e o produto das três quantidades é 216. Quantas bolsas recebeu o ponto de cultura mais contemplado?",
    opcoes: ["9 bolsas", "12 bolsas", "16 bolsas", "18 bolsas", "24 bolsas"],
    correta: 3,
    explicacao:
      "Escrevendo os três termos como a/q, a e aq, o produto vale a³ = 216, logo o termo do meio é a = 6. Da soma, 6/q + 6 + 6q = 26, chega-se a 3q² − 10q + 3 = 0, cujas raízes são 3 e 1/3; como a PG é crescente, q = 3 e os termos são 2, 6 e 18. Quem responde 12 supõe razão 2 e obtém 3, 6 e 12, que até dão produto 216, mas somam 21, e não 26. Quem responde 9 supõe razão 1,5 e obtém 4, 6 e 9, cuja soma é 19. As opções 16 e 24 nem sequer mantêm o produto 216 com termo central 6.",
  },
  {
    materia: "matematica",
    tema: "Progressões aritméticas e geométricas",
    dificuldade: "media",
    enunciado:
      "Uma cooperativa de reciclagem recolheu material em cinco bairros de uma cidade. As quantidades recolhidas, na ordem da rota, formam uma progressão aritmética crescente. No primeiro bairro foram recolhidos 50 kg e, nos cinco bairros juntos, 350 kg. Quanto foi recolhido no quinto bairro?",
    opcoes: ["70 kg", "90 kg", "100 kg", "120 kg", "140 kg"],
    correta: 1,
    explicacao:
      "Pela soma da PA, 350 = 5 × (50 + a5) / 2, logo 50 + a5 = 140 e a5 = 90 kg. A rota fica 50, 60, 70, 80 e 90 kg, com razão 10 kg, e de fato soma 350 kg. Quem responde 70 kg calcula a média 350 / 5 e a confunde com o último termo, quando ela é o termo central da progressão. Quem responde 140 kg para no valor de 50 + a5 e esquece de subtrair o primeiro termo. As opções 100 e 120 supõem razões de 12,5 kg e 17,5 kg, que levariam a totais de 375 kg e 425 kg, incompatíveis com o enunciado.",
  },
  {
    materia: "matematica",
    tema: "Progressões aritméticas e geométricas",
    dificuldade: "dificil",
    enunciado:
      "Uma empresa de logística contratou 5 entregadores no primeiro mês de operação e, em cada mês seguinte, contratou 5 entregadores a mais do que no mês anterior. Em quantos meses o total acumulado de contratações chega a 275 entregadores?",
    opcoes: ["7 meses", "8 meses", "10 meses", "11 meses", "55 meses"],
    correta: 2,
    explicacao:
      "As contratações mensais formam a PA 5, 10, 15 e assim por diante, cuja soma até o mês n é Sn = 5n(n + 1) / 2. Igualando a 275, obtém-se n(n + 1) = 110, ou seja, n = 10, pois 10 × 11 = 110. Quem responde 55 iguala o termo geral 5n a 275 e encontra o mês em que se contratariam 275 pessoas de uma só vez, e não o acumulado. Quem responde 7 esquece de dividir por 2 na fórmula da soma e cai em n(n + 1) = 55. As opções 8 e 11 vêm de resolver por tentativa sem conferir o produto exato.",
  },
  {
    materia: "matematica",
    tema: "Progressões aritméticas e geométricas",
    dificuldade: "media",
    enunciado:
      "Uma estação de tratamento usa filtros em série: cada passagem pelo filtro reduz à metade a concentração de um poluente. A água entra no sistema com 640 mg/L desse poluente e só pode ser liberada quando a concentração ficar abaixo de 25 mg/L. Qual é o número mínimo de passagens pelo filtro?",
    opcoes: ["5 passagens", "6 passagens", "8 passagens", "13 passagens", "26 passagens"],
    correta: 0,
    explicacao:
      "As concentrações formam uma PG de razão 1/2: 320, 160, 80, 40 e 20 mg/L após a primeira, a segunda, a terceira, a quarta e a quinta passagens. Como 40 mg/L ainda não atende ao limite e 20 mg/L já é menor que 25 mg/L, bastam 5 passagens. Quem responde 6 conta a concentração de entrada como se fosse resultado de uma passagem, deslocando toda a contagem. Quem responde 26 divide 640 por 25 e supõe que o filtro retire sempre a mesma quantidade de poluente, trocando a PG por uma PA. As opções 8 e 13 misturam essas duas ideias.",
  },
]
