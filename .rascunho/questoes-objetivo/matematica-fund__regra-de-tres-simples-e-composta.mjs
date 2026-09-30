/* Rascunho — Matemática · 6º ao 9º / Regra de três simples e composta.

   A explicação resolve por produto cruzado e por proporção. A conferência
   refaz pelo caminho da taxa unitária: valor por unidade nas grandezas
   diretas, e quantidade total de trabalho (pessoas × horas × dias) nas
   inversas e nas compostas, calculando o que uma unidade produz e depois
   aplicando à nova situação. */

import { qualNum } from "./_matematica-fund.mjs";

export const materia = "matematica-fund";
export const tema = "Regra de três simples e composta";
export const arquivo = "matematica-fund__regra-de-tres-simples-e-composta";

export const questoes = [
  /* ------------------------------------------------------------ fáceis --- */
  (() => {
    const o = ["45", "36", "54", "135", "32"];
    return {
      d: "facil",
      e: "Três cadernos iguais custam R$ 27. Mantendo o mesmo preço por caderno, quanto custam 5 cadernos?",
      o,
      x: "As grandezas número de cadernos e preço são diretamente proporcionais: mais cadernos, maior o preço. Montando a regra de três, 3 cadernos estão para R$ 27 assim como 5 cadernos estão para x, então x = 27 × 5 ÷ 3 = 45. Pelo preço unitário, cada caderno custa 27 ÷ 3 = 9 reais, e 5 × 9 = 45.\n\n36 supõe 4 cadernos, e 54 supõe 6 cadernos. 135 multiplica 27 por 5, esquecendo de dividir por 3. E 32 soma 27 e 5, sem relação com a proporção.",
      v: { i: () => qualNum((27 / 3) * 5, o) },
    };
  })(),
  (() => {
    const o = ["15", "10", "9", "24", "36"];
    return {
      d: "facil",
      e: "Um carro gasta 6 litros de combustível para percorrer 60 km. Mantendo o consumo, quantos litros ele gasta em 150 km?",
      o,
      x: "Distância e combustível são diretamente proporcionais. Montando, 60 km estão para 6 L assim como 150 km estão para x, então x = 6 × 150 ÷ 60 = 15. Pelo consumo, o carro gasta 6 ÷ 60 = 0,1 L por km, e 150 × 0,1 = 15 litros.\n\n10 e 9 ficam perto, mas não mantêm a razão de 0,1 L por km. 24 multiplica 6 por 4 sem relação com a distância. E 36 multiplica 6 por 6, como se o consumo fosse de 0,24 L por km.",
      v: { i: () => qualNum((6 / 60) * 150, o) },
    };
  })(),
  (() => {
    const o = ["160", "8", "100", "45", "200"];
    return {
      d: "facil",
      e: "Uma máquina faz 40 peças em 5 minutos, trabalhando sempre no mesmo ritmo. Quantas peças ela faz em 20 minutos?",
      o,
      x: "Tempo e número de peças são diretamente proporcionais. Em 5 minutos saem 40 peças, então em 1 minuto saem 40 ÷ 5 = 8 peças, e em 20 minutos saem 20 × 8 = 160 peças. Pela regra de três, x = 40 × 20 ÷ 5 = 160.\n\n8 é a produção de um único minuto. 100 e 200 arredondam o resultado sem seguir a proporção. E 45 soma 40 e 5, sem relação com o problema.",
      v: { i: () => qualNum((40 / 5) * 20, o) },
    };
  })(),
  (() => {
    const o = ["2", "8", "1", "6", "24"];
    return {
      d: "facil",
      e: "Seis torneiras iguais enchem um tanque em 4 horas. Em quantas horas doze torneiras iguais enchem o mesmo tanque?",
      o,
      x: "Mais torneiras enchem o tanque mais depressa, então as grandezas são inversamente proporcionais: o produto torneiras × horas é constante, 6 × 4 = 24. Com 12 torneiras, o tempo é 24 ÷ 12 = 2 horas. Dobrando o número de torneiras, o tempo cai pela metade.\n\n8 dobra o tempo, como se mais torneiras demorassem mais, o erro de tratar a relação como direta. 1 divide o tempo por 4, e 6 mantém o número de torneiras original. E 24 é o total de torneira-horas, e não o tempo.",
      v: { i: () => qualNum((6 * 4) / 12, o) },
    };
  })(),
  (() => {
    const o = ["15", "12", "24", "9", "20"];
    return {
      d: "facil",
      e: "Uma receita para 4 porções leva 6 ovos. Mantendo as proporções, quantos ovos são necessários para 10 porções?",
      o,
      x: "Porções e ovos são diretamente proporcionais. Por porção, usam-se 6 ÷ 4 = 1,5 ovo, e para 10 porções, 10 × 1,5 = 15 ovos. Pela regra de três, x = 6 × 10 ÷ 4 = 15. Em termos de razão, 6 ovos para 4 porções é a mesma razão que 15 ovos para 10 porções, pois ambas valem 1,5 ovo por porção.\n\n12 supõe 8 porções, e 24 supõe 16 porções. 9 supõe 6 porções. E 20 soma 10 a 10, sem ligação com a proporção dos ovos.",
      v: { i: () => qualNum((6 / 4) * 10, o) },
    };
  })(),
  (() => {
    const o = ["75", "60", "150", "12", "45"];
    return {
      d: "facil",
      e: "Um ciclista percorre 30 km em 2 horas, com velocidade constante. Quantos quilômetros ele percorre em 5 horas?",
      o,
      x: "Tempo e distância são diretamente proporcionais. A velocidade é 30 ÷ 2 = 15 km/h, e em 5 horas o ciclista percorre 5 × 15 = 75 km. Pela regra de três, x = 30 × 5 ÷ 2 = 75. Conferindo, 75 km em 5 horas dá a mesma velocidade de 15 km/h do início.\n\n60 corresponde a 4 horas de pedal. 150 multiplica 30 por 5 sem dividir por 2. 12 soma 2, 5 e 5, sem relação. E 45 corresponde a 3 horas de pedal.",
      v: { i: () => qualNum((30 / 2) * 5, o) },
    };
  })(),
  (() => {
    const o = ["400", "450", "360", "50", "1.200"];
    return {
      d: "facil",
      e: "Um trabalhador recebe R$ 150 por 3 dias de serviço. Mantendo a mesma diária, quanto recebe por 8 dias?",
      o,
      x: "Dias trabalhados e pagamento são diretamente proporcionais. A diária é 150 ÷ 3 = 50 reais, e em 8 dias o trabalhador recebe 8 × 50 = 400 reais. Pela regra de três, x = 150 × 8 ÷ 3 = 400.\n\n450 corresponde a 9 dias. 360 corresponde a 7,2 dias e não confere com diárias de R$ 50. 50 é a diária de um único dia. E 1.200 multiplica 150 por 8 sem dividir por 3.",
      v: { i: () => qualNum((150 / 3) * 8, o) },
    };
  })(),
  (() => {
    const o = ["10", "22,5", "9", "20", "12"];
    return {
      d: "facil",
      e: "Doze operários terminam uma obra em 15 dias. Mantendo o mesmo ritmo, em quantos dias dezoito operários terminam a mesma obra?",
      o,
      x: "Mais operários terminam a obra em menos tempo, então as grandezas são inversamente proporcionais: o trabalho total é 12 × 15 = 180 operários-dia. Com 18 operários, o tempo é 180 ÷ 18 = 10 dias.\n\n22,5 trata a relação como direta, calculando 15 × 18 ÷ 12. 9 e 12 ficam perto, mas não mantêm o total de 180 operários-dia. E 20 é o tempo que levariam 9 operários, e não 18.",
      v: { i: () => qualNum((12 * 15) / 18, o) },
    };
  })(),
  (() => {
    const o = ["2.400", "1.350", "3.600", "600", "1.800"];
    return {
      d: "facil",
      e: "Um avião voa 900 km em 1,5 hora, com velocidade constante. Quantos quilômetros ele voa em 4 horas?",
      o,
      x: "Tempo e distância são diretamente proporcionais. A velocidade é 900 ÷ 1,5 = 600 km/h, e em 4 horas o avião voa 4 × 600 = 2.400 km. Pela regra de três, x = 900 × 4 ÷ 1,5 = 2.400.\n\n1.350 é o percurso de 2,25 horas. 3.600 multiplica 900 por 4 sem dividir por 1,5. 600 é a velocidade, em km por hora, e não a distância. E 1.800 é o percurso de 3 horas.",
      v: { i: () => qualNum((900 / 1.5) * 4, o) },
    };
  })(),
  (() => {
    const o = ["20", "18", "5", "50", "200"];
    return {
      d: "facil",
      e: "Uma torneira despeja 30 litros em 6 minutos, com vazão constante. Em quantos minutos ela despeja 100 litros?",
      o,
      x: "Volume e tempo são diretamente proporcionais. A vazão é 30 ÷ 6 = 5 litros por minuto, e para 100 litros o tempo é 100 ÷ 5 = 20 minutos. Pela regra de três, x = 6 × 100 ÷ 30 = 20. Conferindo, 20 minutos a 5 litros por minuto enchem exatamente 100 litros.\n\n18 é o tempo para 90 litros. 5 é a vazão por minuto, e não o tempo. 50 e 200 multiplicam números sem relação com o tempo necessário.",
      v: { i: () => qualNum(100 / (30 / 6), o) },
    };
  })(),
  (() => {
    const o = ["30", "24", "40", "32", "13"];
    return {
      d: "facil",
      e: "Oito canetas iguais custam R$ 20. Mantendo o preço por caneta, quanto custam 12 canetas?",
      o,
      x: "Canetas e preço são diretamente proporcionais. Cada caneta custa 20 ÷ 8 = 2,50 reais, e 12 canetas custam 12 × 2,50 = 30 reais. Pela regra de três, x = 20 × 12 ÷ 8 = 30. Conferindo, 30 reais divididos por 12 canetas dão os mesmos R$ 2,50 por caneta do início.\n\n24 e 32 supõem 9,6 e 12,8 canetas, sem relação com os 12 pedidos. 40 dobra o preço de 8 canetas. E 13 soma 12 a 1, sem ligação com o problema.",
      v: { i: () => qualNum((20 / 8) * 12, o) },
    };
  })(),
  (() => {
    const o = ["3", "5,3", "2", "6", "4"];
    return {
      d: "facil",
      e: "A 60 km/h, um carro faz certo percurso em 4 horas. Mantendo o mesmo percurso, quantas horas ele leva a 80 km/h?",
      o,
      x: "Mais velocidade significa menos tempo, então as grandezas são inversamente proporcionais: o percurso é 60 × 4 = 240 km. A 80 km/h, o tempo é 240 ÷ 80 = 3 horas. Conferindo, 240 km a 60 km/h levam 4 horas, e a 80 km/h levam 3 horas.\n\n5,3 trata a relação como direta, calculando 4 × 80 ÷ 60. 2 e 6 não conferem com um percurso de 240 km. E 4 é o tempo original, sem considerar o aumento de velocidade.",
      v: { i: () => qualNum((60 * 4) / 80, o) },
    };
  })(),

  /* ------------------------------------------------------------ médias --- */
  (() => {
    const o = ["10", "8", "12", "9", "15"];
    return {
      d: "media",
      e: "Uma fábrica produz 450 peças em 6 horas. Mantendo o ritmo, em quantas horas ela produz 750 peças?",
      o,
      x: "Peças e tempo são diretamente proporcionais. O ritmo é 450 ÷ 6 = 75 peças por hora, e para 750 peças o tempo é 750 ÷ 75 = 10 horas. Pela regra de três, x = 6 × 750 ÷ 450 = 10.\n\n8, 9 e 12 ficam perto, mas não conferem: a 75 peças por hora, 8 horas dão 600, 9 horas dão 675 e 12 horas dão 900. E 15 é o tempo para produzir 1.125 peças a 75 peças por hora.",
      v: { i: () => qualNum(750 / (450 / 6), o) },
    };
  })(),
  (() => {
    const o = ["7,5", "19,2", "6", "8", "9,6"];
    return {
      d: "media",
      e: "Cinco pintores levam 12 horas para pintar uma parede. Mantendo o ritmo de cada pintor, quantas horas oito pintores levam?",
      o,
      x: "Mais pintores pintam mais depressa, então as grandezas são inversamente proporcionais. O trabalho total é 5 × 12 = 60 pintores-hora, e com 8 pintores o tempo é 60 ÷ 8 = 7,5 horas.\n\n19,2 trata a relação como direta, calculando 12 × 8 ÷ 5. 6 e 8 ficam perto, mas 8 pintores em 6 horas fazem só 48 pintores-hora, e em 8 horas, 64. E 9,6 não sai de nenhuma conta correta com os dados.",
      v: { i: () => qualNum((5 * 12) / 8, o) },
    };
  })(),
  (() => {
    const o = ["52.500", "24.000", "54.000", "36.350", "60.000"];
    return {
      d: "media",
      e: "Um terreno de 240 m² custa R$ 36.000. Mantendo o mesmo preço por metro quadrado, quanto custa um terreno de 350 m²?",
      o,
      x: "Área e preço são diretamente proporcionais. O preço por metro quadrado é 36.000 ÷ 240 = 150 reais, e 350 m² custam 350 × 150 = 52.500 reais. Pela regra de três, x = 36.000 × 350 ÷ 240 = 52.500.\n\n24.000 é o preço de um terreno de 160 m². 54.000 é o de um terreno de 360 m². 36.350 soma 350 ao preço original, sem proporção. E 60.000 é o preço de 400 m².",
      v: { i: () => qualNum((36000 / 240) * 350, o) },
    };
  })(),
  (() => {
    const o = ["60", "27", "50", "90", "80"];
    return {
      d: "media",
      e: "Uma bomba esvazia 2.400 litros em 40 minutos, com vazão constante. Quantos minutos ela leva para esvaziar 3.600 litros?",
      o,
      x: "Volume e tempo são diretamente proporcionais. A vazão é 2.400 ÷ 40 = 60 litros por minuto, e para 3.600 litros o tempo é 3.600 ÷ 60 = 60 minutos. Pela regra de três, x = 40 × 3.600 ÷ 2.400 = 60. Conferindo, 60 minutos a 60 litros por minuto esvaziam exatamente 3.600 litros.\n\n27 divide 40 por 1,5 em vez de multiplicar. 50 e 80 não mantêm a vazão de 60 litros por minuto. E 90 é o tempo para 5.400 litros.",
      v: { i: () => qualNum(3600 / (2400 / 40), o) },
    };
  })(),
  (() => {
    const o = ["120", "213", "100", "150", "80"];
    return {
      d: "media",
      e: "A 90 km/h, um carro faz um percurso em 2 horas e 40 minutos. Quantos minutos ele leva para fazer o mesmo percurso a 120 km/h?",
      o,
      x: "Mais velocidade, menos tempo: grandezas inversamente proporcionais. Em minutos, 2 h 40 min = 160 min, e o percurso corresponde a 90 × 160 = 14.400 unidades de velocidade-minuto. A 120 km/h, o tempo é 14.400 ÷ 120 = 120 minutos, isto é, 2 horas.\n\n213 trata a relação como direta, calculando 160 × 120 ÷ 90. 100 e 150 não mantêm o produto de 14.400. E 80 é o tempo a 180 km/h, e não a 120 km/h.",
      v: { i: () => qualNum((90 * 160) / 120, o) },
    };
  })(),
  (() => {
    const o = ["25", "24", "22,5", "18", "30"];
    return {
      d: "media",
      e: "Com R$ 120, compram-se 15 quilos de feijão. Mantendo o preço por quilo, quantos quilos se compram com R$ 200?",
      o,
      x: "Dinheiro e quantidade são diretamente proporcionais. O quilo custa 120 ÷ 15 = 8 reais, e com R$ 200 compram-se 200 ÷ 8 = 25 quilos. Pela regra de três, x = 15 × 200 ÷ 120 = 25. Conferindo, 25 quilos a R$ 8 o quilo custam exatamente os R$ 200 disponíveis.\n\n24 e 22,5 ficam perto, mas custariam R$ 192 e R$ 180 a 8 reais o quilo. 18 corresponde a R$ 144. E 30 corresponde a R$ 240.",
      v: { i: () => qualNum(200 / (120 / 15), o) },
    };
  })(),
  (() => {
    const o = ["12", "6,75", "10", "15", "13,5"];
    return {
      d: "media",
      e: "Oito máquinas iguais fazem um serviço em 9 dias. Em quantos dias seis dessas máquinas fazem o mesmo serviço?",
      o,
      x: "Menos máquinas demoram mais, então as grandezas são inversamente proporcionais. O serviço equivale a 8 × 9 = 72 máquinas-dia, e com 6 máquinas o tempo é 72 ÷ 6 = 12 dias.\n\n6,75 trata a relação como direta, calculando 9 × 6 ÷ 8. 10 e 15 não mantêm o total de 72 máquinas-dia. E 13,5 é o tempo de quatro máquinas e meia, que não corresponde ao enunciado.",
      v: { i: () => qualNum((8 * 9) / 6, o) },
    };
  })(),
  (() => {
    const o = ["960", "720", "640", "1.200", "540"];
    return {
      d: "media",
      e: "Quatro máquinas, trabalhando 6 horas por dia, produzem 480 peças em 5 dias. Quantas peças produzem seis máquinas trabalhando 8 horas por dia durante 5 dias?",
      o,
      x: "Cada máquina produz, por hora, 480 ÷ (4 × 6 × 5) = 4 peças. Com 6 máquinas, 8 horas por dia e 5 dias, são 6 × 8 × 5 = 240 máquinas-hora, e 240 × 4 = 960 peças. Na regra de três composta, as duas grandezas, máquinas e horas por dia, são diretamente proporcionais à produção.\n\n720 considera só o aumento das máquinas e mantém as horas por dia em 6. 640 considera só o aumento das horas por dia. 1.200 multiplica por um fator errado, e 540 subestima a produção.",
      v: { i: () => qualNum((480 / (4 * 6 * 5)) * (6 * 8 * 5), o) },
    };
  })(),
  (() => {
    const o = ["16", "20", "12", "24", "30"];
    return {
      d: "media",
      e: "Dez operários, trabalhando 8 horas por dia, constroem 200 metros de estrada em 20 dias. Em quantos dias 25 operários, trabalhando 6 horas por dia, constroem 300 metros?",
      o,
      x: "Para 200 m, o trabalho é 10 × 8 × 20 = 1.600 operários-hora, isto é, 8 operários-hora por metro. Para 300 m, são 300 × 8 = 2.400 operários-hora. Com 25 operários e 6 horas por dia, são 150 operários-hora por dia, e 2.400 ÷ 150 = 16 dias.\n\n20 ignora as mudanças e mantém o prazo original. 12, 24 e 30 não saem do cálculo de 2.400 operários-hora divididos por 150 operários-hora por dia.",
      v: { i: () => qualNum(((10 * 8 * 20) / 200) * 300 / (25 * 6), o) },
    };
  })(),
  (() => {
    const o = ["225", "64", "240", "180", "200"];
    return {
      d: "media",
      e: "Uma impressora imprime 120 páginas em 8 minutos. Mantendo a velocidade, quantas páginas ela imprime em 15 minutos?",
      o,
      x: "Tempo e páginas são diretamente proporcionais. A velocidade é 120 ÷ 8 = 15 páginas por minuto, e em 15 minutos saem 15 × 15 = 225 páginas. Pela regra de três, x = 120 × 15 ÷ 8 = 225.\n\n64 divide 120 por um número errado, sem relação com os 15 minutos. 240 é a produção de 16 minutos. 180 é a de 12 minutos. E 200 arredonda o valor sem conferir.",
      v: { i: () => qualNum((120 / 8) * 15, o) },
    };
  })(),
  (() => {
    const o = ["9", "4", "8,4", "7,5", "10"];
    return {
      d: "media",
      e: "Uma tábua de 2,4 metros de comprimento pesa 6 quilos. Do mesmo material e com a mesma seção, quanto pesa uma tábua de 3,6 metros?",
      o,
      x: "Comprimento e peso são diretamente proporcionais. Cada metro pesa 6 ÷ 2,4 = 2,5 kg, e 3,6 metros pesam 3,6 × 2,5 = 9 kg. Pela regra de três, x = 6 × 3,6 ÷ 2,4 = 9. Conferindo, 3,6 metros é 1,5 vez 2,4 metros, e 1,5 vez 6 kg dá os mesmos 9 kg, já que comprimento e peso crescem na mesma razão.\n\n4 divide 6 por 1,5, invertendo a proporção. 8,4 soma 2,4 a 6, sem relação. 7,5 e 10 não mantêm os 2,5 kg por metro.",
      v: { i: () => qualNum((6 / 2.4) * 3.6, o) },
    };
  })(),
  (() => {
    const o = ["840", "560", "700", "600", "480"];
    return {
      d: "media",
      e: "Em 4 dias, 5 cozinheiros preparam 400 refeições. Mantendo o ritmo de cada um, quantas refeições 7 cozinheiros preparam em 6 dias?",
      o,
      x: "Cada cozinheiro prepara, por dia, 400 ÷ (5 × 4) = 20 refeições. Com 7 cozinheiros em 6 dias, são 7 × 6 = 42 cozinheiros-dia, e 42 × 20 = 840 refeições. As duas grandezas, cozinheiros e dias, são diretamente proporcionais às refeições.\n\n560 considera só o aumento de cozinheiros, 7 × 4 × 20. 600 considera só o aumento de dias, 5 × 6 × 20. 700 e 480 não saem de nenhuma combinação correta dos dados.",
      v: { i: () => qualNum((400 / (5 * 4)) * (7 * 6), o) },
    };
  })(),
  (() => {
    const o = ["6", "4,17", "7,2", "5,5", "8"];
    return {
      d: "media",
      e: "Um ônibus leva 5 horas para fazer uma viagem a 72 km/h. Mantendo o mesmo percurso, quantas horas ele leva a 60 km/h?",
      o,
      x: "Menos velocidade, mais tempo: grandezas inversamente proporcionais. O percurso é 72 × 5 = 360 km, e a 60 km/h o tempo é 360 ÷ 60 = 6 horas. Conferindo, 6 horas a 60 km/h percorrem 360 km, o mesmo percurso de 5 horas a 72 km/h, e quanto menor a velocidade, maior o tempo para cobrir a mesma distância.\n\n4,17 trata a relação como direta, calculando 5 × 60 ÷ 72. 7,2 é o tempo para 432 km. 5,5 e 8 não mantêm o percurso de 360 km.",
      v: { i: () => qualNum((72 * 5) / 60, o) },
    };
  })(),
  (() => {
    const o = ["15", "12", "18", "13,5", "10"];
    return {
      d: "media",
      e: "Nove pessoas plantam 270 mudas em 3 horas. Mantendo o ritmo individual e o mesmo tempo, quantas pessoas plantam 450 mudas em 3 horas?",
      o,
      x: "Cada pessoa planta, por hora, 270 ÷ (9 × 3) = 10 mudas. Para 450 mudas em 3 horas, são necessárias 450 ÷ (3 × 10) = 15 pessoas. Pela regra de três direta, 9 pessoas estão para 270 mudas assim como x está para 450, e x = 9 × 450 ÷ 270 = 15.\n\n12 e 18 ficam perto, mas plantariam 360 e 540 mudas. 13,5 é a média entre 12 e 15, sem justificativa. E 10 plantaria 300 mudas.",
      v: { i: () => qualNum(450 / 3 / (270 / (9 * 3)), o) },
    };
  })(),
  (() => {
    const o = ["12", "33,3", "15", "10", "8"];
    return {
      d: "media",
      e: "Três ralos iguais esvaziam um aquário em 20 minutos. Mantendo a capacidade de cada ralo, em quantos minutos cinco ralos esvaziam o mesmo aquário?",
      o,
      x: "Mais ralos esvaziam mais depressa, então as grandezas são inversamente proporcionais. O trabalho é 3 × 20 = 60 ralos-minuto, e com 5 ralos o tempo é 60 ÷ 5 = 12 minutos. Nesse caso, o tempo cai de 20 para 12 minutos.\n\n33,3 trata a relação como direta, calculando 20 × 5 ÷ 3. 15 e 10 não mantêm o total de 60 ralos-minuto. E 8 é o tempo de 7,5 ralos, que não corresponde ao enunciado.",
      v: { i: () => qualNum((3 * 20) / 5, o) },
    };
  })(),
  (() => {
    const o = ["6", "10,7", "5", "7", "4"];
    return {
      d: "media",
      e: "Um livro de 240 páginas é lido em 8 dias, lendo 30 páginas por dia. Em quantos dias ele é lido lendo 40 páginas por dia?",
      o,
      x: "Mais páginas por dia, menos dias: grandezas inversamente proporcionais. O livro tem 240 páginas, então com 40 páginas por dia o tempo é 240 ÷ 40 = 6 dias. Pelo produto constante, 30 × 8 = 240 = 40 × x, e x = 6.\n\n10,7 trata a relação como direta, calculando 8 × 40 ÷ 30. 5 e 7 não mantêm o total de 240 páginas. E 4 corresponderia a 60 páginas por dia.",
      v: { i: () => qualNum((30 * 8) / 40, o) },
    };
  })(),
  (() => {
    const o = ["45", "30", "36", "60", "22,5"];
    return {
      d: "media",
      e: "Três costureiras fazem 18 camisas em 4 horas. Mantendo o ritmo de cada uma, quantas camisas cinco costureiras fazem em 6 horas?",
      o,
      x: "Cada costureira faz, por hora, 18 ÷ (3 × 4) = 1,5 camisa. Com 5 costureiras em 6 horas, são 5 × 6 = 30 costureiras-hora, e 30 × 1,5 = 45 camisas. Na composta, as duas grandezas, costureiras e horas, são diretamente proporcionais à produção.\n\n30 considera só o aumento de costureiras, 5 × 4 × 1,5, sem o aumento de horas. 36 e 60 não saem de nenhuma combinação correta dos dados. E 22,5 é metade do resultado correto.",
      v: { i: () => qualNum((18 / (3 * 4)) * (5 * 6), o) },
    };
  })(),
  (() => {
    const o = ["105", "34,3", "90", "100", "110"];
    return {
      d: "media",
      e: "Numa festa, 40 pessoas tomam 60 litros de suco. Mantendo o consumo por pessoa, quantos litros são necessários para 70 pessoas?",
      o,
      x: "Pessoas e litros são diretamente proporcionais. Cada pessoa toma 60 ÷ 40 = 1,5 litro, e 70 pessoas tomam 70 × 1,5 = 105 litros. Pela regra de três, x = 60 × 70 ÷ 40 = 105. Conferindo, 105 litros divididos por 70 pessoas dão os mesmos 1,5 litro por pessoa do enunciado, e 60 litros divididos por 40 pessoas também dão 1,5.\n\n34,3 divide 60 por 1,75, invertendo a proporção. 90 corresponde a 60 pessoas. 100 e 110 arredondam o consumo sem conferir.",
      v: { i: () => qualNum((60 / 40) * 70, o) },
    };
  })(),
  (() => {
    const o = ["72", "12", "120", "24", "90"];
    return {
      d: "media",
      e: "Uma torneira pinga 3 gotas a cada 10 segundos, em ritmo constante. Quantas gotas pinga em 4 minutos?",
      o,
      x: "Quatro minutos são 240 segundos, que contêm 240 ÷ 10 = 24 períodos de 10 segundos. Em cada um caem 3 gotas, então são 24 × 3 = 72 gotas. Pela regra de três, x = 3 × 240 ÷ 10 = 72.\n\n12 é o número de gotas em 40 segundos. 120 usa 4 minutos como se fossem 400 segundos. 24 é o número de períodos, e não de gotas. E 90 corresponde a 300 segundos.",
      v: { i: () => qualNum((3 / 10) * (4 * 60), o) },
    };
  })(),
  (() => {
    const o = ["8", "12", "9", "10", "6"];
    return {
      d: "media",
      e: "Oito operários, trabalhando 6 horas por dia, terminam uma obra em 15 dias. Em quantos dias 10 operários, trabalhando 9 horas por dia, terminam a mesma obra?",
      o,
      x: "A obra equivale a 8 × 6 × 15 = 720 operários-hora. Com 10 operários e 9 horas por dia, são 90 operários-hora por dia, e o prazo é 720 ÷ 90 = 8 dias. Na composta, mais operários e mais horas por dia diminuem o prazo, então ambas as grandezas são inversamente proporcionais aos dias.\n\n12 considera só o aumento de operários, 15 × 8 ÷ 10, e 10 considera só o aumento de horas, 15 × 6 ÷ 9. 9 e 6 não mantêm o total de 720 operários-hora.",
      v: { i: () => qualNum((8 * 6 * 15) / (10 * 9), o) },
    };
  })(),
  (() => {
    const o = ["27,5", "22", "30", "26,4", "24"];
    return {
      d: "media",
      e: "Um carro faz 12 quilômetros por litro de combustível. Mantendo o consumo, quantos litros são necessários para percorrer 330 quilômetros?",
      o,
      x: "Distância e litros são diretamente proporcionais. O número de litros é a distância dividida pelo rendimento: 330 ÷ 12 = 27,5 litros. Pela regra de três, 12 km estão para 1 L assim como 330 km estão para x, e x = 330 ÷ 12 = 27,5.\n\n22 e 30 são aproximações que correspondem a 264 km e 360 km. 26,4 divide 330 por 12,5, um rendimento que não é o do enunciado. E 24 corresponderia a 288 km.",
      v: { i: () => qualNum(330 / 12, o) },
    };
  })(),
  (() => {
    const o = ["72", "48", "60", "36", "90"];
    return {
      d: "media",
      e: "Cinco operários fazem 30 peças em 2 horas. Mantendo o ritmo de cada um, quantas peças oito operários fazem em 3 horas?",
      o,
      x: "Cada operário faz, por hora, 30 ÷ (5 × 2) = 3 peças. Com 8 operários em 3 horas, são 8 × 3 = 24 operários-hora, e 24 × 3 = 72 peças. Na composta, operários e horas são diretamente proporcionais à produção. Conferindo, 8 operários em 3 horas somam 24 operários-hora de trabalho, e a 3 peças por operário-hora dão 72 peças.\n\n48 considera só o aumento de operários, 8 × 2 × 3. 60, 36 e 90 não saem de nenhuma combinação correta dos dados.",
      v: { i: () => qualNum((30 / (5 * 2)) * (8 * 3), o) },
    };
  })(),
  (() => {
    const o = ["12", "7,5", "15", "8", "33"];
    return {
      d: "media",
      e: "Uma mistura de tinta leva 3 latas de azul para cada 5 latas de branco. Mantendo a proporção, quantas latas de azul são necessárias para 20 latas de branco?",
      o,
      x: "Azul e branco são diretamente proporcionais. Pela razão 3 para 5, 20 latas de branco são 4 vezes 5, e o azul é 4 vezes 3 = 12 latas. Pela regra de três, x = 3 × 20 ÷ 5 = 12. Conferindo, 12 latas de azul para 20 de branco têm a mesma razão de 3 para 5 do enunciado.\n\n7,5 divide 60 por 8, somando 3 e 5 como divisor, sem manter a razão. 15 supõe 25 latas de branco. 8 soma 3 e 5. E 33 soma 3 e 30, sem relação com a proporção.",
      v: { i: () => qualNum((3 / 5) * 20, o) },
    };
  })(),
  (() => {
    const o = ["30", "10,8", "36", "25", "20"];
    return {
      d: "media",
      e: "A 18 km/h, uma bicicleta faz um trajeto em 50 minutos. A que velocidade, em km/h, ela faz o mesmo trajeto em 30 minutos?",
      o,
      x: "Menos tempo exige mais velocidade: grandezas inversamente proporcionais. O trajeto corresponde a 18 × 50 = 900 unidades de km/h × minuto, e em 30 minutos a velocidade é 900 ÷ 30 = 30 km/h. O trajeto mede 15 km, e 15 km em meia hora dá 30 km/h.\n\n10,8 trata a relação como direta, calculando 18 × 30 ÷ 50. 36 e 25 não mantêm o trajeto de 15 km. E 20 é a velocidade para um tempo de 45 minutos.",
      v: { i: () => qualNum((18 * 50) / 30, o) },
    };
  })(),
  (() => {
    const o = ["10", "22,5", "9", "12", "8"];
    return {
      d: "media",
      e: "Quatro bombas iguais enchem um reservatório de 6.000 litros em 15 horas. Em quantas horas seis dessas bombas enchem o mesmo reservatório?",
      o,
      x: "Mais bombas enchem mais depressa, então as grandezas são inversamente proporcionais. O trabalho é 4 × 15 = 60 bombas-hora, e com 6 bombas o tempo é 60 ÷ 6 = 10 horas. Conferindo, 6 bombas em 10 horas fazem 60 bombas-hora, o mesmo total das 4 bombas em 15 horas.\n\n22,5 trata a relação como direta, calculando 15 × 6 ÷ 4. 9 e 12 não mantêm o total de 60 bombas-hora. E 8 corresponde a 7,5 bombas, que não é o número do enunciado.",
      v: { i: () => qualNum((4 * 15) / 6, o) },
    };
  })(),
  (() => {
    const o = ["12", "16", "10,7", "11", "14"];
    return {
      d: "media",
      e: "Se dois terços de um trabalho foram feitos em 8 dias, em quantos dias, no mesmo ritmo, o trabalho inteiro fica pronto?",
      o,
      x: "Tempo e parte do trabalho são diretamente proporcionais. Se 2/3 do trabalho levam 8 dias, 1/3 leva 4 dias, e o trabalho inteiro, que são 3/3, leva 3 × 4 = 12 dias. Pela regra de três, x = 8 ÷ (2/3) = 12.\n\n16 multiplica 8 por 2 em vez de dividir por 2/3. 10,7 divide 8 por 3/4, como se tivessem sido feitos três quartos do trabalho. 11 e 14 não mantêm o ritmo de um terço do trabalho a cada 4 dias.",
      v: { i: () => qualNum(8 / (2 / 3), o) },
    };
  })(),
  (() => {
    const o = ["245", "315", "210", "35", "225"];
    return {
      d: "media",
      e: "Uma loja vende 3 camisas por R$ 105, sempre com o mesmo preço unitário. Quanto custam 7 camisas?",
      o,
      x: "Camisas e preço são diretamente proporcionais. Cada camisa custa 105 ÷ 3 = 35 reais, e 7 camisas custam 7 × 35 = 245 reais. Pela regra de três, x = 105 × 7 ÷ 3 = 245. Conferindo, 245 reais divididos por 7 camisas dão os mesmos R$ 35 por camisa do início, o que confirma a proporção.\n\n315 é o preço de 9 camisas. 210 é o de 6 camisas. 35 é o preço de uma só camisa. E 225 subestima o preço, não mantendo os 35 reais por camisa.",
      v: { i: () => qualNum((105 / 3) * 7, o) },
    };
  })(),
  (() => {
    const o = ["84", "12", "42", "18", "60"];
    return {
      d: "media",
      e: "Um relógio adianta 6 minutos por dia, de forma constante. Quantos minutos ele adianta em duas semanas?",
      o,
      x: "Tempo e adiantamento são diretamente proporcionais. Duas semanas têm 14 dias, e o adiantamento é 14 × 6 = 84 minutos. Pela regra de três, 1 dia está para 6 min assim como 14 dias estão para x, e x = 84.\n\n12 supõe 2 dias, ou seja, usa as semanas como se fossem dias. 42 corresponde a 7 dias, uma semana. 18 corresponde a 3 dias. E 60 corresponde a 10 dias.",
      v: { i: () => qualNum(6 * (2 * 7), o) },
    };
  })(),

  /* ---------------------------------------------------------- difíceis --- */
  (() => {
    const o = ["20", "15", "24", "18", "30"];
    return {
      d: "dificil",
      e: "Para fazer 360 metros de estrada em 12 dias, 15 homens trabalham 8 horas por dia. Quantos homens são necessários para fazer 540 metros em 18 dias, trabalhando 6 horas por dia?",
      o,
      x: "Para 360 m, o trabalho é 15 × 8 × 12 = 1.440 homens-hora, isto é, 4 homens-hora por metro. Para 540 m, são 540 × 4 = 2.160 homens-hora. Em 18 dias com 6 horas por dia, cada homem trabalha 18 × 6 = 108 horas, e o número de homens é 2.160 ÷ 108 = 20.\n\n15 ignora o aumento do comprimento. 24 e 30 superestimam o número de homens, como se o prazo maior exigisse mais gente. E 18 considera só parte das mudanças de prazo e de jornada.",
      v: { i: () => qualNum((((15 * 8 * 12) / 360) * 540) / (18 * 6), o) },
    };
  })(),
  (() => {
    const o = ["12", "8", "15", "10", "18"];
    return {
      d: "dificil",
      e: "Oito máquinas iguais, trabalhando 10 horas por dia, produzem 4.800 peças em 6 dias. Quantas dessas máquinas são necessárias para produzir 7.200 peças em 5 dias, trabalhando 12 horas por dia?",
      o,
      x: "Cada máquina produz, por hora, 4.800 ÷ (8 × 10 × 6) = 10 peças. Para 7.200 peças, são necessárias 7.200 ÷ 10 = 720 máquinas-hora. Em 5 dias com 12 horas por dia, cada máquina trabalha 60 horas, e o número de máquinas é 720 ÷ 60 = 12.\n\n8 mantém o número de máquinas original. 15 e 18 superestimam a quantidade. E 10 considera só parte do aumento de produção, sem a mudança de prazo e de jornada.",
      v: { i: () => qualNum((7200 / (4800 / (8 * 10 * 6))) / (5 * 12), o) },
    };
  })(),
  (() => {
    const o = ["6", "2", "8", "12", "3"];
    return {
      d: "dificil",
      e: "A torneira A enche um tanque em 12 horas, a torneira B, em 4 horas, e o ralo C o esvazia em 6 horas. Com as três abertas ao mesmo tempo, em quantas horas o tanque fica cheio?",
      o,
      x: "Por hora, A enche 1/12 do tanque, B enche 1/4 e C esvazia 1/6. O saldo é 1/12 + 1/4 − 1/6 = 1/12 + 3/12 − 2/12 = 2/12 = 1/6 do tanque por hora. Então o tanque fica cheio em 6 horas. Conferindo, em 6 horas, A enche 1/2, B enche 3/2 e o ralo esvazia 1, e 1/2 + 3/2 − 1 = 1 tanque cheio.\n\n2 despreza o ralo e ainda erra a soma. 8 e 12 são os tempos de outras combinações das torneiras. E 3 soma só B e o ralo, sem A.",
      v: { i: () => qualNum(1 / (1 / 12 + 1 / 4 - 1 / 6), o) },
    };
  })(),
  (() => {
    const o = ["5", "4", "6", "7", "3"];
    return {
      d: "dificil",
      e: "Um ciclista percorre 120 km em 4 dias, pedalando 5 horas por dia. Mantendo o ritmo, em quantos dias percorre 210 km, pedalando 7 horas por dia?",
      o,
      x: "A velocidade é 120 ÷ (4 × 5) = 6 km por hora de pedal. Para 210 km, são 210 ÷ 6 = 35 horas de pedal, e com 7 horas por dia o prazo é 35 ÷ 7 = 5 dias. Conferindo, 5 dias com 7 horas por dia são 35 horas de pedal, e 35 horas a 6 km por hora dão exatamente 210 km.\n\n4 é o prazo original, sem considerar o aumento da distância. 6 e 7 não mantêm a velocidade de 6 km por hora. E 3 considera só o aumento de horas por dia.",
      v: { i: () => qualNum(210 / (120 / (4 * 5)) / 7, o) },
    };
  })(),
  (() => {
    const o = ["30", "20", "24", "18", "36"];
    return {
      d: "dificil",
      e: "Três pessoas digitam 12 páginas em 2 horas. Mantendo o ritmo de cada pessoa, quantas páginas cinco pessoas digitam em 3 horas?",
      o,
      x: "Cada pessoa digita, por hora, 12 ÷ (3 × 2) = 2 páginas. Com 5 pessoas em 3 horas, são 5 × 3 = 15 pessoas-hora, e 15 × 2 = 30 páginas. Na composta, pessoas e horas são diretamente proporcionais à produção.\n\n20 considera só o aumento de pessoas, 5 × 2 × 2. 18 considera só o aumento de horas, 3 × 3 × 2. 24 e 36 não saem de nenhuma combinação correta dos dados.",
      v: { i: () => qualNum((12 / (3 * 2)) * (5 * 3), o) },
    };
  })(),
  (() => {
    const o = ["37,5", "30", "40", "45", "32,5"];
    return {
      d: "dificil",
      e: "Uma obra tem 30 operários e prazo de 40 dias. Depois de 10 dias de trabalho, 6 operários deixam a obra. Em quantos dias adicionais, no mesmo ritmo, o restante da obra é concluído pelos operários que ficaram?",
      o,
      x: "O trabalho total é 30 × 40 = 1.200 operários-dia. Em 10 dias, 30 operários fazem 300 operários-dia, restando 900. Com 24 operários, os dias adicionais são 900 ÷ 24 = 37,5. Isso dá um prazo final de 10 + 37,5 = 47,5 dias, 7,5 dias além do original.\n\n30 é o prazo que faltava para 30 operários, e não o novo. 40 é o prazo original. 45 e 32,5 não saem da divisão do trabalho restante pelos 24 operários que ficaram.",
      v: { i: () => qualNum((30 * 40 - 30 * 10) / (30 - 6), o) },
    };
  })(),
  (() => {
    const o = ["80", "64", "50", "100", "40"];
    return {
      d: "dificil",
      e: "Cinco pessoas bebem 20 litros de água em 4 dias. Mantendo o consumo de cada pessoa, quantos litros oito pessoas bebem em 10 dias?",
      o,
      x: "Cada pessoa bebe, por dia, 20 ÷ (5 × 4) = 1 litro. Com 8 pessoas em 10 dias, são 8 × 10 = 80 pessoas-dia, e 80 × 1 = 80 litros. Na composta, pessoas e dias são diretamente proporcionais ao consumo. Conferindo, 20 pessoas-dia consomem 20 litros, e 80 pessoas-dia mantêm a mesma razão de 1 litro por pessoa por dia.\n\n64 considera 8 pessoas em 8 dias. 50 considera só o aumento de dias. 100 e 40 combinam os efeitos de forma errada.",
      v: { i: () => qualNum((20 / (5 * 4)) * (8 * 10), o) },
    };
  })(),
  (() => {
    const o = ["6", "5", "7", "8", "4"];
    return {
      d: "dificil",
      e: "A 80 km/h, trabalhando 6 horas por dia, um motorista termina uma viagem em 5 dias. A 50 km/h, dirigindo 8 horas por dia, em quantos dias termina a mesma viagem?",
      o,
      x: "A viagem mede 80 × 6 × 5 = 2.400 km. A 50 km/h, dirigindo 8 horas por dia, o motorista faz 50 × 8 = 400 km por dia, e leva 2.400 ÷ 400 = 6 dias. Conferindo, 6 dias a 400 km por dia percorrem 2.400 km, o mesmo percurso dos 5 dias a 480 km por dia.\n\n5 é o prazo original, sem considerar que a velocidade caiu e a jornada aumentou. 7 e 8 superestimam o prazo, e 4 o subestima, sem manter o percurso de 2.400 km.",
      v: { i: () => qualNum((80 * 6 * 5) / (50 * 8), o) },
    };
  })(),
  (() => {
    const o = ["120", "60", "180", "90", "30"];
    return {
      d: "dificil",
      e: "Uma bomba esvazia uma piscina de 90 m³ em 6 horas. Mantendo a capacidade de cada bomba, quantos m³ duas bombas esvaziam em 4 horas?",
      o,
      x: "Cada bomba esvazia 90 ÷ 6 = 15 m³ por hora. Duas bombas em 4 horas somam 2 × 4 = 8 bombas-hora, e 8 × 15 = 120 m³. Na composta, bombas e horas são diretamente proporcionais ao volume.\n\n60 considera uma bomba em 4 horas. 180 considera duas bombas em 6 horas. 90 é o volume da piscina, e não do que as bombas esvaziam. E 30 é o volume de uma bomba em 2 horas.",
      v: { i: () => qualNum((90 / 6) * (2 * 4), o) },
    };
  })(),
  (() => {
    const o = ["1.200", "900", "1.000", "1.500", "1.080"];
    return {
      d: "dificil",
      e: "Para alimentar 12 cavalos por 15 dias, são necessários 900 quilos de ração. Mantendo o consumo por cavalo, quantos quilos de ração são necessários para 20 cavalos por 12 dias?",
      o,
      x: "Cada cavalo come, por dia, 900 ÷ (12 × 15) = 5 kg. Para 20 cavalos em 12 dias, são 20 × 12 = 240 cavalos-dia, e 240 × 5 = 1.200 kg. Na composta, cavalos e dias são diretamente proporcionais à ração.\n\n900 é a ração do enunciado original. 1.000 e 1.500 arredondam o valor sem conferir. E 1.080 considera 18 cavalos por 12 dias, um número de cavalos diferente do pedido.",
      v: { i: () => qualNum((900 / (12 * 15)) * (20 * 12), o) },
    };
  })(),
];
