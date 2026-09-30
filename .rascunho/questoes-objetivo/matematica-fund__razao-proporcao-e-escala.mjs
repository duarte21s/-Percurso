/* Rascunho — Matemática · 6º ao 9º / Razão, proporção e escala.

   A conferência recalcula cada problema por outro caminho que o da
   explicação: taxa por unidade em vez de produto cruzado, conversão de
   escalas passo a passo em centímetros, partilha proporcional somando as
   partes, e varredura de valores para as propriedades gerais (razão entre
   o perímetro e o lado do quadrado). As razões escritas como fração são
   lidas como valor numérico, e nas de forma irredutível confere-se também
   que numerador e denominador não têm divisor comum. */

import { unicoV, lerNum, lerFracao, mdc } from "./_matematica-fund.mjs";

export const materia = "matematica-fund";
export const tema = "Razão, proporção e escala";
export const arquivo = "matematica-fund__razao-proporcao-e-escala";

const valor = (t) => { const s = String(t).trim(); const m = s.match(/^1:([\d.]+)$/); if (m) return lerNum(m[1]); return lerFracao(s); };
const qual = (v, alt) => { const ach = alt.map((t) => { let x; try { x = valor(t); } catch { return false; } return Math.abs(x - v) < 1e-9 * Math.max(1, Math.abs(v)); }); return ach.filter(Boolean).length === 1 ? ach.indexOf(true) : -1; };
const qualIrred = (v, alt) => { const ach = alt.map((t) => { let x; try { x = valor(t); } catch { return false; } const m = String(t).trim().match(/^(\d+)\/(\d+)$/); return Math.abs(x - v) < 1e-9 && (m ? mdc(Number(m[1]), Number(m[2])) === 1 : true); }); return ach.filter(Boolean).length === 1 ? ach.indexOf(true) : -1; };

export const questoes = [
  /* ------------------------------------------------------------ fáceis --- */
  (() => {
    const o = ["2/3", "3/2", "12/18", "2/5", "3/5"];
    return {
      d: "facil",
      e: "Numa sala há 12 meninas e 18 meninos. Qual é a razão entre o número de meninas e o de meninos, na forma irredutível?",
      o,
      x: "A razão entre meninas e meninos é 12 para 18, isto é, 12/18. Para deixá-la irredutível, divide-se numerador e denominador pelo maior divisor comum, 6: 12 ÷ 6 = 2 e 18 ÷ 6 = 3, o que dá 2/3. Isso quer dizer que, para cada 2 meninas, há 3 meninos.\n\n3/2 inverte a razão, comparando meninos com meninas. 12/18 tem o mesmo valor, mas ainda pode ser simplificada. 2/5 e 3/5 comparam uma das partes com o total de 5 em cada grupo de 5 alunos, e não as meninas com os meninos.",
      v: { i: () => qualIrred(12 / 18, o) },
    };
  })(),
  (() => {
    const o = ["9/12", "9/16", "6/9", "3/8", "12/9"];
    return {
      d: "facil",
      e: "Duas razões formam uma proporção quando têm o mesmo valor. Qual destas razões forma uma proporção com 3/4?",
      o,
      x: "Uma razão forma proporção com 3/4 quando é equivalente a ela. Multiplicando numerador e denominador de 3/4 por 3, obtém-se 9/12, então 3/4 = 9/12. Conferindo pelo produto cruzado, 3 × 12 = 36 e 4 × 9 = 36, que são iguais.\n\n9/16 tem o mesmo numerador que 9/12, mas o denominador errado, e 9/16 vale só 0,5625. 6/9 vale 2/3. 3/8 vale 0,375, metade de 3/4. E 12/9 inverte 9/12, valendo 4/3.",
      v: { i: () => unicoV(o.map((t) => { const [a, b] = t.split("/").map(Number); return a * 4 === 3 * b; })) },
    };
  })(),
  (() => {
    const o = ["12", "15", "8", "7", "100"];
    return {
      d: "facil",
      e: "Completando a proporção 3/5 = x/20, qual é o valor de x?",
      o,
      x: "Numa proporção, o produto dos meios é igual ao produto dos extremos: 3 × 20 = 5 × x, então 60 = 5x e x = 12. Outra forma é notar que o denominador foi multiplicado por 4, de 5 para 20, então o numerador também: 3 × 4 = 12.\n\n15 multiplica 3 por 5, e 8 subtrai 12 do denominador, ambos sem manter a proporção. 7 soma 3 + 4. E 100 multiplica 5 por 20, sem chegar ao valor do numerador.",
      v: { i: () => qual((3 * 20) / 5, o) },
    };
  })(),
  (() => {
    const o = ["60", "540", "177", "6", "30"];
    return {
      d: "facil",
      e: "Um carro percorre 180 km em 3 horas. Qual é a velocidade média dele, em km/h, sendo a razão entre a distância e o tempo?",
      o,
      x: "A velocidade média é a razão entre a distância percorrida e o tempo gasto: 180 km ÷ 3 h = 60 km/h. Isso significa que, em cada hora, o carro anda em média 60 km.\n\n540 multiplica a distância pelo tempo, em vez de dividir. 177 subtrai 3 de 180, sem relação com a razão. 6 erra a divisão 180 ÷ 3 por uma casa. E 30 divide a distância por 6, usando um tempo errado.",
      v: { i: () => qual(180 / 3, o) },
    };
  })(),
  (() => {
    const o = ["50", "500", "5.000", "5", "0,05"];
    return {
      d: "facil",
      e: "Um mapa tem escala 1:1.000. Uma rua mede 5 cm no mapa. Quantos metros ela mede na realidade?",
      o,
      x: "A escala 1:1.000 indica que 1 cm no mapa representa 1.000 cm na realidade. Uma rua de 5 cm no mapa mede 5 × 1.000 = 5.000 cm reais. Como 100 cm = 1 m, isso dá 5.000 ÷ 100 = 50 metros.\n\n500 converte errado de centímetros para metros, dividindo por 10. 5.000 é o valor em centímetros, sem converter. 5 é a medida no mapa, sem aplicar a escala. E 0,05 divide em vez de multiplicar.",
      v: { i: () => qual((5 * 1000) / 100, o) },
    };
  })(),
  (() => {
    const o = ["0,75", "0,34", "1,33", "0,43", "3,4"];
    return {
      d: "facil",
      e: "Se 3 de cada 4 alunos de uma escola vão à excursão, que número decimal representa essa razão de 3 para 4?",
      o,
      x: "A razão de 3 para 4 é 3/4, que indica a divisão 3 ÷ 4. Dividindo, 3 ÷ 4 = 0,75. Conferindo, 0,75 × 4 = 3. Em outras palavras, 3 de cada 4 corresponde a 75 de cada 100, isto é, a 75%, o que combina com o decimal 0,75.\n\n0,34 e 0,43 apenas juntam os algarismos 3 e 4 depois da vírgula. 1,33 é a razão inversa, 4 ÷ 3, aproximada. E 3,4 coloca a vírgula entre os dois números sem fazer a divisão.",
      v: { i: () => qual(3 / 4, o) },
    };
  })(),
  (() => {
    const o = ["3", "75", "10", "20", "0,33"];
    return {
      d: "facil",
      e: "Um time fez 15 gols em 5 jogos. Qual é a razão entre o número de gols e o número de jogos?",
      o,
      x: "A razão entre gols e jogos é 15/5 = 3, isto é, 3 gols por jogo em média. Conferindo, 3 × 5 = 15. Em razões entre grandezas diferentes, a unidade do resultado traz a palavra por: aqui, gols por jogo, e não apenas um número solto.\n\n75 multiplica 15 por 5 em vez de dividir. 10 subtrai os dois números. 20 os soma. E 0,33 é a razão inversa, 5 ÷ 15, que compara os jogos com os gols e não o contrário.",
      v: { i: () => qual(15 / 5, o) },
    };
  })(),
  (() => {
    const o = ["15", "12", "18", "30", "10"];
    return {
      d: "facil",
      e: "Duas canetas iguais custam R$ 6. Mantendo o mesmo preço por caneta, quanto custam 5 canetas?",
      o,
      x: "O preço de uma caneta é 6 ÷ 2 = 3 reais, e 5 canetas custam 5 × 3 = 15 reais. Como a razão entre o preço e o número de canetas é constante, vale a proporção 6/2 = 15/5. Por isso, 5 canetas custam mais que o dobro do preço de 2 canetas.\n\n12 supõe 4 canetas, e 18 supõe 6 canetas. 30 multiplica 6 por 5, como se o preço de duas canetas se repetisse cinco vezes. E 10 soma 6 e 4, sem relação com a proporção.",
      v: { i: () => qual((6 / 2) * 5, o) },
    };
  })(),
  (() => {
    const o = ["30", "10", "21", "11", "90"];
    return {
      d: "facil",
      e: "Na proporção 2/5 = 6/15, o produto dos meios é igual ao produto dos extremos. Quanto vale esse produto?",
      o,
      x: "Numa proporção a/b = c/d, os extremos são a e d, e os meios são b e c. Aqui, os extremos são 2 e 15, e os meios são 5 e 6. O produto dos extremos é 2 × 15 = 30, e o dos meios é 5 × 6 = 30, que são iguais.\n\n10 é 2 × 5, misturando um extremo com um meio. 21 e 11 somam os números em vez de multiplicar. E 90 é 6 × 15, também misturando termos.",
      v: { i: () => qual(2 * 15, o) },
    };
  })(),
  (() => {
    const o = ["60", "6", "600", "1.500", "0,6"];
    return {
      d: "facil",
      e: "Uma maquete tem escala 1:50. Um prédio real tem 30 m de altura. Quantos centímetros tem a altura na maquete?",
      o,
      x: "Na escala 1:50, cada medida real é dividida por 50 na maquete. A altura real é 30 m = 3.000 cm, e 3.000 ÷ 50 = 60 cm. Por isso, o prédio de 30 m, que parece enorme, cabe numa maquete de menos de um metro.\n\n6 esquece de converter metros em centímetros corretamente. 600 divide 3.000 por 5 em vez de 50. 1.500 multiplica a altura em metros por 50. E 0,6 está em metros, e não em centímetros.",
      v: { i: () => qual((30 * 100) / 50, o) },
    };
  })(),
  (() => {
    const o = ["1/4", "4/1", "10/40", "1/5", "1/3"];
    return {
      d: "facil",
      e: "Ana tem 10 anos e sua mãe tem 40. Qual é a razão entre a idade de Ana e a idade da mãe, na forma irredutível?",
      o,
      x: "A razão entre a idade de Ana e a da mãe é 10/40. Dividindo numerador e denominador por 10, o maior divisor comum, obtém-se 1/4. Isso significa que Ana tem um quarto da idade da mãe.\n\n4/1 inverte a razão, comparando a mãe com Ana. 10/40 vale o mesmo, mas ainda pode ser simplificada. 1/5 e 1/3 têm outros valores, como se a mãe tivesse 50 ou 30 anos.",
      v: { i: () => qualIrred(10 / 40, o) },
    };
  })(),
  (() => {
    const o = ["5", "4", "16", "80", "24"];
    return {
      d: "facil",
      e: "Um suco é feito com 1 parte de concentrado para 4 partes de água. Usando 20 copos de água, quantos copos de concentrado são necessários?",
      o,
      x: "A razão entre concentrado e água é 1 para 4. Para 20 copos de água, que são 5 vezes 4, usam-se 5 vezes 1 = 5 copos de concentrado. Conferindo, 5/20 = 1/4. A proporção se mantém porque 1/4 e 5/20 são frações equivalentes, ambas iguais a 0,25.\n\n4 é a quantidade de água da razão original, sem ampliar. 16 subtrai 4 de 20. 80 multiplica 20 por 4. E 24 soma 20 e 4, sem relação com a proporção.",
      v: { i: () => qual((20 * 1) / 4, o) },
    };
  })(),

  /* ------------------------------------------------------------ médias --- */
  (() => {
    const o = ["1:500.000", "1:5", "1:10", "1:50.000", "1:5.000.000"];
    return {
      d: "media",
      e: "Num mapa, 2 cm representam 10 km na realidade. Qual é a escala do mapa, na forma 1:n?",
      o,
      x: "Convertendo 10 km para centímetros, 10 km = 10.000 m = 1.000.000 cm. A escala compara a medida no mapa com a real, na mesma unidade: 2 cm para 1.000.000 cm, isto é, 1 cm para 500.000 cm. A escala é 1:500.000.\n\n1:5 e 1:10 não convertem os quilômetros em centímetros. 1:50.000 converte mal, como se 10 km fossem 100.000 cm. E 1:5.000.000 usa 10.000.000 cm, um zero a mais.",
      v: { i: () => qual((10 * 1000 * 100) / 2, o) },
    };
  })(),
  (() => {
    const o = ["15", "150", "1,5", "1.500", "25"];
    return {
      d: "media",
      e: "Num mapa na escala 1:250.000, a distância entre duas cidades é de 6 cm. Qual é a distância real, em quilômetros?",
      o,
      x: "Cada centímetro do mapa representa 250.000 cm reais, então 6 cm representam 6 × 250.000 = 1.500.000 cm. Como 1 km = 100.000 cm, a distância é 1.500.000 ÷ 100.000 = 15 km.\n\n150 e 1,5 erram uma casa na conversão de centímetros para quilômetros. 1.500 é o valor em metros, sem converter para quilômetros. E 25 divide 6 por 0,24, sem relação com a escala.",
      v: { i: () => qual((6 * 250000) / 100000, o) },
    };
  })(),
  (() => {
    const o = ["45", "72", "40", "7,2", "180"];
    return {
      d: "media",
      e: "Uma torneira despeja 18 litros de água em 4 minutos, com vazão constante. Quantos litros ela despeja em 10 minutos?",
      o,
      x: "A vazão é 18 ÷ 4 = 4,5 litros por minuto. Em 10 minutos, despeja 4,5 × 10 = 45 litros. Pela proporção, 18/4 = x/10, então x = 18 × 10 ÷ 4 = 45.\n\n72 multiplica 18 por 4 em vez de dividir. 40 supõe 4 litros por minuto, arredondando a vazão. 7,2 divide 18 por 2,5 sem justificativa. E 180 multiplica 18 por 10, esquecendo de dividir pelos 4 minutos.",
      v: { i: () => qual((18 / 4) * 10, o) },
    };
  })(),
  (() => {
    const o = ["450", "750", "400", "600", "240"];
    return {
      d: "media",
      e: "Dois sócios dividem R$ 1.200 de lucro em partes proporcionais a 3 e 5. Quanto recebe o sócio que tem a menor parte?",
      o,
      x: "As partes somam 3 + 5 = 8, e cada parte vale 1.200 ÷ 8 = 150 reais. O sócio da menor parte, 3, recebe 3 × 150 = 450 reais, e o outro, 5 × 150 = 750 reais. Conferindo, 450 + 750 = 1.200.\n\n750 é a parte do sócio que recebe mais. 400 e 240 dividem o lucro por 3 ou por 5 sem considerar a soma das partes. E 600 é a divisão igual, metade para cada sócio, que ignora a proporção.",
      v: { i: () => qual((1200 / (3 + 5)) * 3, o) },
    };
  })(),
  (() => {
    const o = ["30", "20", "10", "36", "15"];
    return {
      d: "media",
      e: "Três irmãos dividem 60 balas em partes proporcionais a 1, 2 e 3. Quantas balas recebe o que fica com a maior parte?",
      o,
      x: "As partes somam 1 + 2 + 3 = 6, e cada parte vale 60 ÷ 6 = 10 balas. O irmão com a maior parte, 3, recebe 3 × 10 = 30 balas, e os outros recebem 10 e 20. Conferindo, 10 + 20 + 30 = 60. Como a maior parte é o triplo da menor, o irmão que fica com a maior parte recebe o triplo do que recebe o menor.\n\n20 e 10 são as partes dos outros irmãos. 36 divide 60 por 5, errando a soma das partes. E 15 divide 60 por 4, também errando a soma.",
      v: { i: () => qual((60 / (1 + 2 + 3)) * 3, o) },
    };
  })(),
  (() => {
    const o = ["5", "4", "6", "1,8", "45"];
    return {
      d: "media",
      e: "Completando a proporção x/12 = 15/36, qual é o valor de x?",
      o,
      x: "Pelo produto cruzado, x × 36 = 12 × 15 = 180, então x = 180 ÷ 36 = 5. Outra forma é simplificar 15/36 = 5/12, e comparar com x/12: x = 5.\n\n4 e 6 ficam perto, mas não mantêm a proporção: 4/12 vale 1/3 e 6/12 vale 1/2, e 15/36 vale 5/12. 1,8 divide 15 por 12 e multiplica por 36 de modo errado. E 45 multiplica 15 por 3 sem relação com a proporção.",
      v: { i: () => qual((12 * 15) / 36, o) },
    };
  })(),
  (() => {
    const o = ["5/6", "6/5", "15/18", "3/4", "4/5"];
    return {
      d: "media",
      e: "Uma criança mede 1,5 m de altura e um adulto mede 1,8 m. Qual é a razão entre a altura da criança e a do adulto, na forma irredutível?",
      o,
      x: "A razão é 1,5 para 1,8, que vale o mesmo que 15/18 multiplicando ambos por 10. Dividindo por 3, o maior divisor comum de 15 e 18, obtém-se 5/6.\n\n6/5 inverte a razão, comparando o adulto com a criança. 15/18 vale o mesmo, mas ainda pode ser simplificada. 3/4 e 4/5 têm outros valores: 3/4 corresponderia a 1,35 m e 4/5, a 1,44 m para o adulto de 1,8 m.",
      v: { i: () => qualIrred(1.5 / 1.8, o) },
    };
  })(),
  (() => {
    const o = ["37,5", "30", "45", "17,5", "7,5"];
    return {
      d: "media",
      e: "Um ciclista mantém a velocidade constante de 15 km/h. Quantos quilômetros ele percorre em 2 horas e 30 minutos?",
      o,
      x: "Duas horas e 30 minutos são 2,5 horas. A distância é velocidade × tempo: 15 × 2,5 = 37,5 km. Por partes, em 2 horas anda 30 km, e em meia hora, 7,5 km, somando 37,5 km. Conferindo por outro caminho, 2,5 h × 15 km/h dá o mesmo que 5 × 7,5 km.\n\n30 considera só as 2 horas, esquecendo os 30 minutos. 45 considera 3 horas. 17,5 soma 15 + 2,5 em vez de multiplicar. E 7,5 é só o percurso de meia hora.",
      v: { i: () => qual(15 * 2.5, o) },
    };
  })(),
  (() => {
    const o = ["2,5", "0,4", "300", "700", "100.000"];
    return {
      d: "media",
      e: "Um bloco de 500 g ocupa um volume de 200 cm³. Qual é a razão entre a massa e o volume, em g/cm³?",
      o,
      x: "A razão entre a massa e o volume, chamada densidade, é 500 ÷ 200 = 2,5 g/cm³. Isso significa que cada centímetro cúbico do bloco tem 2,5 g. A densidade indica quanta massa cabe em cada unidade de volume e, por isso, é uma razão entre duas grandezas de tipos diferentes, massa e volume.\n\n0,4 é a razão inversa, 200 ÷ 500, que compara o volume com a massa. 300 subtrai os valores. 700 os soma. E 100.000 os multiplica, em vez de dividir.",
      v: { i: () => qual(500 / 200, o) },
    };
  })(),
  (() => {
    const o = ["750", "450", "900", "500", "1.800"];
    return {
      d: "media",
      e: "Uma receita de bolo para 6 pessoas usa 300 g de farinha. Mantendo as proporções, quantos gramas de farinha são necessários para 15 pessoas?",
      o,
      x: "Por pessoa, usam-se 300 ÷ 6 = 50 g de farinha. Para 15 pessoas, são 15 × 50 = 750 g. Pela proporção, 300/6 = x/15, e x = 300 × 15 ÷ 6 = 750. Como 15 pessoas é 2,5 vezes 6 pessoas, a quantidade de farinha também é 2,5 vezes 300 g, o que dá os mesmos 750 g.\n\n450 considera 9 pessoas. 900 considera 18 pessoas. 500 arredonda a quantidade sem fazer a conta. E 1.800 multiplica 300 por 6, em vez de aplicar a proporção.",
      v: { i: () => qual((300 / 6) * 15, o) },
    };
  })(),
  (() => {
    const o = ["12", "600", "24", "1.200", "48"];
    return {
      d: "media",
      e: "Numa planta na escala 1:50, um cômodo mede 8 cm por 6 cm. Qual é a área real desse cômodo, em metros quadrados?",
      o,
      x: "Na escala 1:50, cada medida real é 50 vezes a da planta. Os lados reais são 8 × 50 = 400 cm = 4 m e 6 × 50 = 300 cm = 3 m. A área real é 4 × 3 = 12 m².\n\n600 multiplica a área de 12 m² pelo fator 50, aplicando a escala à área sem justificativa. 24 duplica a área, e 48 a quadruplica. 1.200 usa o valor em decímetros quadrados, sem converter para m².",
      v: { i: () => qual(((8 * 50) / 100) * ((6 * 50) / 100), o) },
    };
  })(),
  (() => {
    const o = ["2/5", "14/35", "3/5", "5/2", "2/7"];
    return {
      d: "media",
      e: "Numa turma, 14 dos 35 alunos são meninos. Qual é a razão entre o número de meninos e o total de alunos, na forma irredutível?",
      o,
      x: "A razão entre meninos e o total é 14/35. O maior divisor comum de 14 e 35 é 7, e 14 ÷ 7 = 2, 35 ÷ 7 = 5, o que dá 2/5. Em outras palavras, 2 em cada 5 alunos são meninos.\n\n14/35 vale o mesmo, mas ainda pode ser simplificada. 3/5 é a razão entre as meninas e o total. 5/2 inverte a razão. E 2/7 compara meninos com um número de alunos diferente do total.",
      v: { i: () => qualIrred(14 / 35, o) },
    };
  })(),
  (() => {
    const o = ["10", "9", "12", "160", "13"];
    return {
      d: "media",
      e: "Um operário faz 12 peças em 3 horas. Mantendo o mesmo ritmo, em quantas horas ele faz 40 peças?",
      o,
      x: "O ritmo é 12 ÷ 3 = 4 peças por hora. Para 40 peças, o tempo é 40 ÷ 4 = 10 horas. Pela proporção, 12/3 = 40/x, e x = 40 × 3 ÷ 12 = 10. Em 3 horas o operário faz 12 peças, e em 10 horas faz 40 peças, mantendo sempre 4 peças por hora.\n\n9 e 12 ficam perto do valor correto, mas não mantêm o ritmo de 4 peças por hora. 160 multiplica 40 por 4 em vez de dividir. E 13 soma 40 e 12 e divide por 4, sem justificativa.",
      v: { i: () => qual(40 / (12 / 3), o) },
    };
  })(),
  (() => {
    const o = ["3", "12", "2", "4", "24"];
    return {
      d: "media",
      e: "Quatro pedreiros, trabalhando com o mesmo ritmo, constroem um muro em 6 dias. Em quantos dias oito pedreiros construiriam o mesmo muro?",
      o,
      x: "O trabalho total é 4 × 6 = 24 pedreiros-dia. Com 8 pedreiros, o tempo é 24 ÷ 8 = 3 dias. Nesse caso, as grandezas são inversamente proporcionais: dobrando o número de pedreiros, o tempo cai pela metade.\n\n12 dobra o tempo, como se mais pedreiros demorassem mais. 2 e 4 não mantêm o total de 24 pedreiros-dia. E 24 é esse total de trabalho, e não o tempo.",
      v: { i: () => qual((4 * 6) / 8, o) },
    };
  })(),
  (() => {
    const o = ["32", "3,2", "320", "200", "0,32"];
    return {
      d: "media",
      e: "Um rio tem 8 km de extensão real. Quantos centímetros ele mede num mapa de escala 1:25.000?",
      o,
      x: "Convertendo 8 km para centímetros, 8 × 100.000 = 800.000 cm. Na escala 1:25.000, o comprimento no mapa é 800.000 ÷ 25.000 = 32 cm. Em resumo, transforma-se o comprimento real para centímetros, que é a unidade da escala, e depois divide-se pelo denominador da escala, que é 25.000 nesse caso.\n\n3,2 e 320 erram uma casa na divisão. 200 divide 800.000 por 4.000, um valor errado. E 0,32 erra duas casas decimais.",
      v: { i: () => qual((8 * 100000) / 25000, o) },
    };
  })(),
  (() => {
    const o = ["11,20", "12,00", "8,40", "6,00", "13,30"];
    return {
      d: "media",
      e: "O pacote A tem 500 g e custa R$ 6,00. O pacote B tem 750 g e custa R$ 8,40. Qual é o menor preço por quilo entre os dois, em reais?",
      o,
      x: "O preço por quilo do pacote A é 6,00 ÷ 0,5 = R$ 12,00. O do pacote B é 8,40 ÷ 0,75 = R$ 11,20. O menor dos dois é 11,20. Comparar os preços por quilo, e não os preços dos pacotes, é o que permite decidir qual compensa mais.\n\n12,00 é o preço por quilo do pacote A, o maior dos dois. 8,40 e 6,00 são os preços dos pacotes, sem dividir pela massa. E 13,30 não corresponde a nenhuma das contas feitas corretamente.",
      v: { i: () => qual(Math.min(6 / 0.5, 8.4 / 0.75), o) },
    };
  })(),
  (() => {
    const o = ["10", "9", "14", "63", "3"];
    return {
      d: "media",
      e: "Qual é o termo que falta na proporção 7/x = 21/30?",
      o,
      x: "Pelo produto cruzado, 7 × 30 = 21 × x, então 210 = 21x e x = 10. Outra forma é notar que 21 = 7 × 3, então 30 = x × 3, e x = 10. Verificando, 7/10 = 0,7 e 21/30 = 0,7, então as duas razões são iguais e formam de fato uma proporção.\n\n9 e 14 ficam perto, mas não mantêm a proporção: 7/9 não vale 21/30. 63 multiplica 21 por 3. E 3 é o fator de proporcionalidade, e não o termo procurado.",
      v: { i: () => qual((7 * 30) / 21, o) },
    };
  })(),
  (() => {
    const o = ["65", "52", "60", "70", "78"];
    return {
      d: "media",
      e: "Em 8 jogos, um atleta fez 20 gols. Mantendo a mesma razão de gols por jogo, quantos gols ele faz em 26 jogos?",
      o,
      x: "A razão é 20 ÷ 8 = 2,5 gols por jogo. Em 26 jogos, são 26 × 2,5 = 65 gols. Pela proporção, 20/8 = x/26, e x = 20 × 26 ÷ 8 = 65. Em 26 jogos, que é 3,25 vezes 8 jogos, o número de gols também é 3,25 vezes 20 gols, isto é, 65 gols.\n\n52 e 60 arredondam a razão para 2 ou para 2,3 gols por jogo. 70 e 78 a arredondam para cima. Só 2,5 gols por jogo dá exatamente 65 em 26 jogos.",
      v: { i: () => qual((20 / 8) * 26, o) },
    };
  })(),
  (() => {
    const o = ["6", "9", "5", "10", "7,5"];
    return {
      d: "media",
      e: "Uma tinta é feita misturando 2 partes de azul para 3 partes de branco. Em 15 litros dessa tinta, quantos litros são de azul?",
      o,
      x: "As partes somam 2 + 3 = 5, e cada parte vale 15 ÷ 5 = 3 litros. O azul ocupa 2 partes, isto é, 2 × 3 = 6 litros, e o branco, 9 litros. Conferindo, 6 + 9 = 15. Como 2 + 3 = 5, o azul é 2/5 da tinta, e 2/5 de 15 litros dá os mesmos 6 litros.\n\n9 é a quantidade de branco. 5 é o número total de partes. 10 divide 15 em duas partes de 2 e 3 sem a proporção. E 7,5 é a divisão da tinta em partes iguais.",
      v: { i: () => qual((15 / (2 + 3)) * 2, o) },
    };
  })(),
  (() => {
    const o = ["4", "2", "1/4", "16", "8"];
    return {
      d: "media",
      e: "Qual é a razão entre o perímetro de um quadrado e o seu lado, qualquer que seja o tamanho do quadrado?",
      o,
      x: "O perímetro de um quadrado de lado L é L + L + L + L = 4L. A razão entre o perímetro e o lado é 4L ÷ L = 4, um valor constante, independente de L. Por exemplo, lado 3 dá 12/3 = 4, e lado 10 dá 40/10 = 4.\n\n2 seria a razão para um segmento dobrado. 1/4 é a razão inversa, entre o lado e o perímetro. 16 é o quadrado de 4. E 8 é o dobro de 4, como seria para um retângulo com um lado 2L.",
      v: { i: () => { const r = [1, 3, 7, 10, 25].map((L) => (4 * L) / L); return qual(r[0], o) >= 0 && r.every((x) => x === r[0]) ? qual(r[0], o) : -1; } },
    };
  })(),
  (() => {
    const o = ["5", "20", "8", "2,5", "40"];
    return {
      d: "media",
      e: "Numa escala gráfica de um mapa, 4 cm representam 2 km. Quantos quilômetros representam 10 cm?",
      o,
      x: "Cada centímetro representa 2 ÷ 4 = 0,5 km. Para 10 cm, são 10 × 0,5 = 5 km. Pela proporção, 4/2 = 10/x, e x = 2 × 10 ÷ 4 = 5. Comparando, 10 cm é 2,5 vezes 4 cm, e 2,5 vezes 2 km também dá 5 km, o que confirma a conta.\n\n20 multiplica 2 por 10 e esquece de dividir por 4. 8 é o dobro de 4, sem relação. 2,5 é a distância de 5 cm. E 40 multiplica 4 por 10, usando a razão inversa.",
      v: { i: () => qual((2 / 4) * 10, o) },
    };
  })(),
  (() => {
    const o = ["2,25", "0,44", "4,5", "36", "5"];
    return {
      d: "media",
      e: "Numa gangorra, um lado tem 9 unidades de peso e o outro tem 4. Escrita como decimal, qual é a razão entre o lado mais pesado e o mais leve?",
      o,
      x: "A razão de 9 para 4 é 9/4 = 9 ÷ 4 = 2,25. Conferindo, 2,25 × 4 = 9. Como o numerador é maior que o denominador, a razão é maior que 1. Como o numerador é maior que o denominador, a razão é maior que 1, e o resultado decimal passa de 2.\n\n0,44 é a razão inversa, 4 ÷ 9, aproximada. 4,5 é 9 ÷ 2, dividindo por um número errado. 36 multiplica os dois números. E 5 é apenas uma aproximação da parte inteira.",
      v: { i: () => qual(9 / 4, o) },
    };
  })(),
  (() => {
    const o = ["25", "15", "10", "20", "30"];
    return {
      d: "media",
      e: "Três números são proporcionais a 2, 3 e 5 e somam 50. Qual é o maior desses números?",
      o,
      x: "As partes somam 2 + 3 + 5 = 10, e cada parte vale 50 ÷ 10 = 5. Os números são 2 × 5 = 10, 3 × 5 = 15 e 5 × 5 = 25. O maior é 25. Conferindo, 10 + 15 + 25 = 50. Para dividir um total em partes proporcionais, basta somar as partes, achar o valor de cada uma e multiplicar pelo número de partes de cada um.\n\n15 e 10 são os outros dois números. 20 e 30 não aparecem na divisão proporcional de 50 por 2, 3 e 5.",
      v: { i: () => qual((50 / (2 + 3 + 5)) * 5, o) },
    };
  })(),
  (() => {
    const o = ["30", "20", "60", "15", "50"];
    return {
      d: "media",
      e: "Um terreno retangular tem os lados na razão 3 para 2 e perímetro de 100 m. Qual é a medida do maior lado?",
      o,
      x: "Chamando os lados de 3x e 2x, o perímetro é 2 × (3x + 2x) = 10x = 100, então x = 10. O maior lado é 3x = 30 m, e o menor é 20 m. Conferindo, 2 × (30 + 20) = 100. O perímetro de um retângulo soma os quatro lados, então vale o dobro da soma de dois lados vizinhos.\n\n20 é o lado menor. 60 é o dobro do maior lado. 15 é a metade do lado maior, sem relação com o perímetro dado. E 50 é a metade do perímetro, isto é, a soma dos dois lados.",
      v: { i: () => qual(3 * (100 / 2 / (3 + 2)), o) },
    };
  })(),
  (() => {
    const o = ["68", "65", "70", "60", "75"];
    return {
      d: "media",
      e: "Um trem anda 240 km em 3 horas e depois 100 km em 2 horas. Qual é a velocidade média no percurso todo, em km/h?",
      o,
      x: "A velocidade média é a distância total dividida pelo tempo total: (240 + 100) ÷ (3 + 2) = 340 ÷ 5 = 68 km/h. Conferindo por partes, no primeiro trecho o trem anda a 80 km/h e no segundo a 50 km/h, mas como passa mais tempo no primeiro, a média fica mais perto de 80 do que de 50.\n\n65 é a média simples das duas velocidades parciais, (80 + 50) ÷ 2, que só valeria se o tempo gasto em cada trecho fosse igual. 70, 60 e 75 são aproximações que não saem da divisão da distância total pelo tempo total.",
      v: { i: () => qual((240 + 100) / (3 + 2), o) },
    };
  })(),
  (() => {
    const o = ["48", "1.200", "245", "45", "50"];
    return {
      d: "media",
      e: "Se 5 reais valem 1 dólar, quantos dólares valem 240 reais?",
      o,
      x: "A cada 5 reais, tem-se 1 dólar, então 240 reais valem 240 ÷ 5 = 48 dólares. Pela proporção, 5/1 = 240/x, e x = 240 ÷ 5 = 48. Conferindo, 48 dólares × 5 reais por dólar dão 240 reais, que é o valor inicial, o que confirma a conversão.\n\n1.200 multiplica 240 por 5, em vez de dividir. 245 soma 5 a 240. 45 e 50 ficam perto de 48, mas não conferem: 45 × 5 = 225 e 50 × 5 = 250, nenhum dos dois igual a 240.",
      v: { i: () => qual(240 / 5, o) },
    };
  })(),
  (() => {
    const o = ["3", "12", "4", "6", "2"];
    return {
      d: "media",
      e: "Uma torneira enche um tanque em 6 horas. Com duas torneiras iguais, enchendo juntas, em quantas horas o tanque fica cheio?",
      o,
      x: "Cada torneira enche 1/6 do tanque por hora, e duas juntas enchem 2/6 = 1/3 por hora. Então o tanque fica cheio em 3 horas. Como as grandezas são inversamente proporcionais, dobrando o número de torneiras o tempo cai pela metade.\n\n12 dobra o tempo, como se mais torneiras demorassem mais. 4 e 2 não conferem com a taxa de 1/3 do tanque por hora. E 6 é o tempo de uma torneira sozinha.",
      v: { i: () => qual(1 / (2 / 6), o) },
    };
  })(),
  (() => {
    const o = ["50", "5.000", "500", "5", "0,5"];
    return {
      d: "media",
      e: "Numa planta na escala 1:100, uma sala tem 50 cm² de área no desenho. Qual é a área real da sala, em metros quadrados?",
      o,
      x: "Na escala 1:100, cada comprimento real é 100 vezes o do desenho, e a área real é 100² = 10.000 vezes a do desenho. Então a área é 50 × 10.000 = 500.000 cm², e como 1 m² = 10.000 cm², isso dá 50 m². Na prática, áreas crescem com o quadrado do fator de escala, por isso o fator 100 vira 10.000.\n\n5.000 e 500 erram a conversão de cm² para m². 5 e 0,5 aplicam o fator da escala só uma vez, sem elevar ao quadrado para áreas.",
      v: { i: () => qual((50 * 100 * 100) / 10000, o) },
    };
  })(),

  /* ---------------------------------------------------------- difíceis --- */
  (() => {
    const o = ["15", "25", "30", "10", "7,5"];
    return {
      d: "dificil",
      e: "Num mapa de escala 1:200.000, dois pontos estão a 7,5 cm um do outro. Um carro a 60 km/h faz esse trajeto em quantos minutos?",
      o,
      x: "A distância real é 7,5 × 200.000 = 1.500.000 cm = 15 km. A 60 km/h, o tempo é 15 ÷ 60 = 0,25 h, isto é, 15 minutos. Conferindo, 60 km/h equivalem a 1 km por minuto, então 15 km levam os mesmos 15 minutos.\n\n25 e 30 erram a conversão do tempo de horas para minutos ou a distância. 10 calcula o tempo para 10 km. E 7,5 usa a distância no mapa, em centímetros, como se fosse o tempo.",
      v: { i: () => qual(((7.5 * 200000) / 100000 / 60) * 60, o) },
    };
  })(),
  (() => {
    const o = ["32", "24", "56", "16", "40"];
    return {
      d: "dificil",
      e: "A razão entre dois números é 3/7 e a soma deles é 80. Qual é a diferença entre o maior e o menor?",
      o,
      x: "As partes somam 3 + 7 = 10, e cada parte vale 80 ÷ 10 = 8. Os números são 3 × 8 = 24 e 7 × 8 = 56, e a diferença é 56 − 24 = 32. Conferindo, 24/56 = 3/7 e 24 + 56 = 80. Conferindo, 24 + 56 = 80, e a razão 24/56 simplificada por 8 é 3/7, como no enunciado.\n\n24 e 56 são os próprios números. 16 é a diferença entre as partes vezes 4. E 40 é a metade da soma, isto é, a média dos dois números.",
      v: { i: () => qual((80 / 10) * 7 - (80 / 10) * 3, o) },
    };
  })(),
  (() => {
    const o = ["6", "10", "12", "8", "5"];
    return {
      d: "dificil",
      e: "Uma liga de 30 kg tem cobre e zinco na razão 3 para 2. Quantos quilos de zinco puro devem ser adicionados para que a razão entre cobre e zinco passe a ser 1 para 1?",
      o,
      x: "Nos 30 kg, as partes somam 3 + 2 = 5, e cada parte vale 6 kg: são 18 kg de cobre e 12 kg de zinco. Para a razão ficar 1 para 1, o zinco precisa igualar o cobre, 18 kg, então faltam 18 − 12 = 6 kg de zinco puro.\n\n10 e 12 adicionariam zinco demais, deixando o zinco maior que o cobre. 8 e 5 deixariam o zinco menor que o cobre, com a razão ainda diferente de 1 para 1.",
      v: { i: () => { const cobre = (30 / 5) * 3, zinco = (30 / 5) * 2; return qual(cobre - zinco, o); } },
    };
  })(),
  (() => {
    const o = ["14", "7", "21", "10", "35"];
    return {
      d: "dificil",
      e: "A razão entre as idades de um pai e de seu filho é 7 para 2, e a diferença entre elas é 35 anos. Qual é a idade do filho?",
      o,
      x: "Chamando as idades de 7k e 2k, a diferença é 7k − 2k = 5k = 35, então k = 7. O filho tem 2 × 7 = 14 anos, e o pai, 7 × 7 = 49 anos. Conferindo, 49 − 14 = 35 e 49/14 = 7/2. Dentro da razão 7 para 2, o pai tem 7 partes e o filho, 2 partes, e a diferença corresponde a 5 partes.\n\n7 é o valor de k, e não a idade. 21 e 10 não mantêm a razão de 7 para 2 com a diferença de 35. E 35 é a própria diferença entre as idades.",
      v: { i: () => qual(2 * (35 / (7 - 2)), o) },
    };
  })(),
  (() => {
    const o = ["1/8", "1/4", "1/2", "1/80", "8"];
    return {
      d: "dificil",
      e: "Numa trilha representada num mapa de escala 1:40.000, o trecho mede 12 cm e sobe 600 m de altitude. Qual é a razão entre a subida e o comprimento real do trecho?",
      o,
      x: "O comprimento real é 12 × 40.000 = 480.000 cm = 4.800 m. A razão entre a subida e o comprimento é 600/4.800 = 1/8, isto é, sobe-se 1 m a cada 8 m percorridos. Essa razão é a inclinação média da trilha, e uma razão de 1/8 equivale a uma subida de 12,5% do percurso.\n\n1/4 e 1/2 erram a conversão do comprimento real. 1/80 erra uma casa. E 8 é a razão inversa, entre o comprimento e a subida.",
      v: { i: () => qualIrred(600 / ((12 * 40000) / 100), o) },
    };
  })(),
  (() => {
    const o = ["8/15", "6/5", "2/5", "5/6", "3/4"];
    return {
      d: "dificil",
      e: "Se x/y = 2/3 e y/z = 4/5, qual é o valor da razão x/z?",
      o,
      x: "A razão x/z é o produto das razões: x/z = (x/y) × (y/z) = (2/3) × (4/5) = 8/15, pois o y se cancela. Conferindo com números, y = 3, x = 2, z = 15/4, e x/z = 2 ÷ 15/4 = 8/15.\n\n6/5, 2/5, 5/6 e 3/4 misturam os números 2, 3, 4 e 5 de modo que não corresponde ao produto (2/3) × (4/5), seja invertendo as razões, seja multiplicando só parte dos termos.",
      v: { i: () => qualIrred((2 / 3) * (4 / 5), o) },
    };
  })(),
  (() => {
    const o = ["100", "50", "150", "25", "75"];
    return {
      d: "dificil",
      e: "Numa corrida, A corre 100 m em 12 s e B corre 100 m em 15 s, ambos com velocidade constante. Em 60 s, quantos metros A corre a mais que B?",
      o,
      x: "Em 60 s, A corre 60 ÷ 12 = 5 vezes os 100 m, isto é, 500 m, e B corre 60 ÷ 15 = 4 vezes os 100 m, isto é, 400 m. A diferença é 500 − 400 = 100 m. A razão entre as velocidades de A e B é 100/12 para 100/15, que simplifica para 15/12 = 5/4, isto é, A corre 25% mais rápido que B.\n\n50 e 25 subestimam a diferença. 150 e 75 a superestimam, como se A corresse mais ou menos que os 500 m calculados.",
      v: { i: () => qual((60 / 12) * 100 - (60 / 15) * 100, o) },
    };
  })(),
  (() => {
    const o = ["5/4", "9/5", "1", "2", "3/2"];
    return {
      d: "dificil",
      e: "Uma receita para 12 bolinhos usa 3/4 de xícara de açúcar. Quantas xícaras de açúcar são necessárias para 20 bolinhos?",
      o,
      x: "Por bolinho, usa-se (3/4) ÷ 12 = 3/48 = 1/16 de xícara. Para 20 bolinhos, são 20 × 1/16 = 20/16 = 5/4 de xícara, isto é, 1 xícara e um quarto. Pela proporção, 3/4 está para 12 assim como x está para 20. Em decimais, 5/4 de xícara é o mesmo que 1,25 xícara.\n\n9/5 e 3/2 são resultados de multiplicar 3/4 por números errados. 1 e 2 arredondam a quantidade, sem efetuar a proporção.",
      v: { i: () => qualIrred(((3 / 4) / 12) * 20, o) },
    };
  })(),
  (() => {
    const o = ["4", "2", "6", "10", "20"];
    return {
      d: "dificil",
      e: "Uma parede real de 6 m é desenhada numa planta 1:50 e em outra 1:75. Quantos centímetros o desenho da primeira é maior que o da segunda?",
      o,
      x: "A parede mede 600 cm. Na escala 1:50, o desenho mede 600 ÷ 50 = 12 cm, e na 1:75, mede 600 ÷ 75 = 8 cm. A diferença é 12 − 8 = 4 cm. Quanto menor o denominador da escala, maior o desenho, por isso a planta 1:50 é maior que a 1:75.\n\n2 e 6 erram uma das duas divisões. 10 e 20 não correspondem a nenhum dos dois desenhos nem à diferença entre eles, pois não saem da divisão de 600 cm pelos denominadores das escalas.",
      v: { i: () => qual((6 * 100) / 50 - (6 * 100) / 75, o) },
    };
  })(),
  (() => {
    const o = ["1:200.000", "1:400.000", "1:100.000", "1:40.000", "1:2.000.000"];
    return {
      d: "dificil",
      e: "Num mapa, uma região de 3 cm² representa 12 km² na realidade. Qual é a escala do mapa, na forma 1:n?",
      o,
      x: "Convertendo, 12 km² = 12 × 10¹⁰ cm² = 1,2 × 10¹¹ cm². A razão entre as áreas é 1,2 × 10¹¹ ÷ 3 = 4 × 10¹⁰, e a razão entre os comprimentos é a raiz quadrada dela: √(4 × 10¹⁰) = 2 × 10⁵ = 200.000. A escala é 1:200.000.\n\n1:400.000 usa a razão das áreas sem tirar a raiz quadrada de 4. 1:100.000 e 1:40.000 erram a raiz. E 1:2.000.000 tem um zero a mais.",
      v: { i: () => qual(Math.sqrt((12 * 1e10) / 3), o) },
    };
  })(),
];
