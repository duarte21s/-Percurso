/* Rascunho — Estatística / Medidas de posição: quartis e percentis.

   Os enunciados dizem qual convenção usar (mediana de cada metade, ou
   posição p(n + 1) com interpolação), porque há mais de uma em uso. A
   conferência ordena os dados e aplica a convenção em código; para a
   normal e para distribuições contínuas, inverte a distribuição acumulada
   por bisseção, com a normal integrada por Simpson. Afirmações gerais são
   testadas em baterias de conjuntos de dados. */

import { unicoV, media, mediana, modas, ordena, desvio, variancia, expande, lerNum, qualNum, Phi, zDe, bissecao, sorteador } from "./_estatistica.mjs";

export const materia = "estatistica";
export const tema = "Medidas de posição: quartis e percentis";
export const arquivo = "estatistica__medidas-de-posicao-quartis-e-percentis";

/* quartis pela mediana de cada metade (com n ímpar, a mediana fica fora das metades) */
const quartis = (a) => { const o = ordena(a), n = o.length, h = Math.floor(n / 2); return [mediana(o.slice(0, h)), mediana(o), mediana(o.slice(n - h))]; };
/* percentil pela posição p(n + 1), com interpolação linear entre vizinhos */
const percentil = (a, p) => { const o = ordena(a), n = o.length, pos = p * (n + 1); if (pos <= 1) return o[0]; if (pos >= n) return o[n - 1]; const i = Math.floor(pos), f = pos - i; return o[i - 1] + f * (o[i] - o[i - 1]); };
/* percentil pela posição p(n − 1) + 1 */
const percentilInc = (a, p) => { const o = ordena(a), n = o.length, pos = p * (n - 1) + 1, i = Math.floor(pos), f = pos - i; return i >= n ? o[n - 1] : o[i - 1] + f * (o[i] - o[i - 1]); };
const aiq = (a) => { const [q1, , q3] = quartis(a); return q3 - q1; };
const grande = (semente, n, f) => { const r = sorteador(semente); return Array.from({ length: n }, () => f(r())); };

export const questoes = [
  /* ------------------------------------------------------------ fáceis --- */
  (() => {
    const o = ["A mediana", "A média", "A moda", "O valor máximo", "A amplitude"];
    return {
      d: "facil",
      e: "O segundo quartil, Q2, de um conjunto de dados corresponde a qual outra medida?",
      o,
      x: "Os quartis dividem os dados ordenados em quatro partes com a mesma quantidade de valores. O segundo quartil deixa metade dos dados abaixo e metade acima: é a mediana. O primeiro quartil deixa um quarto abaixo, e o terceiro, três quartos.\n\nA média só coincide com Q2 em distribuições simétricas. A moda depende das repetições, e não da posição. O valor máximo é o limite superior, o quarto quartil, se for preciso nomeá-lo. E a amplitude é uma medida de dispersão, a diferença entre o máximo e o mínimo.",
      v: {
        i: () => {
          const bateria = [[1, 1, 2, 3, 8, 9, 20], [4, 7, 7, 10, 12, 30], [2, 5, 5, 5, 9]];
          const medida = { "A mediana": mediana, "A média": media, "A moda": (a) => modas(a)[0], "O valor máximo": (a) => Math.max(...a), "A amplitude": (a) => Math.max(...a) - Math.min(...a) };
          return unicoV(o.map((t) => bateria.every((a) => Math.abs(quartis(a)[1] - medida[t](a)) < 1e-12)));
        },
      },
    };
  })(),
  (() => {
    const o = ["2,5", "2", "4,5", "3", "6,5"];
    return {
      d: "facil",
      e: "Pelo método da mediana de cada metade, qual é o primeiro quartil dos números 1, 2, 3, 4, 5, 6, 7 e 8?",
      o,
      x: "Com 8 valores, a metade inferior é 1, 2, 3, 4, e o primeiro quartil é a mediana dessa metade: (2 + 3)/2 = 2,5. Do mesmo modo, a metade superior, 5, 6, 7, 8, dá o terceiro quartil, 6,5.\n\n2 toma o valor da posição n/4 = 2 sem interpolar, outra convenção. 4,5 é a mediana do conjunto todo, o segundo quartil. 3 arredonda para o valor seguinte. E 6,5 é o terceiro quartil. Por isso o enunciado precisa dizer qual método usar.",
      v: { i: () => qualNum(quartis([1, 2, 3, 4, 5, 6, 7, 8])[0], o) },
    };
  })(),
  (() => {
    const o = ["18", "42", "21", "9", "30"];
    return {
      d: "facil",
      e: "Um conjunto de dados tem primeiro quartil 12 e terceiro quartil 30. Qual é a amplitude interquartil?",
      o,
      x: "A amplitude interquartil é a diferença entre o terceiro e o primeiro quartil: 30 − 12 = 18. Ela mede o espalhamento da metade central dos dados, sem ser afetada pelos valores extremos.\n\n42 soma os quartis. 21 é a média dos quartis, um ponto no meio da caixa, e não uma distância. 9 é a metade da amplitude interquartil, às vezes chamada de desvio quartil. E 30 é o terceiro quartil sozinho.",
      v: { i: () => { const a = [4, 10, 14, 20, 25, 30, 40], [q1, , q3] = quartis(a); if (q1 !== 10 || q3 !== 30) throw new Error("exemplo errado"); return qualNum(30 - 12, o); } },
    };
  })(),
  (() => {
    const o = ["Superou cerca de 90% dos candidatos", "Acertou 90% das questões", "Ficou entre os 90% piores", "Tirou nota 90", "Ficou em 90º lugar"];
    return {
      d: "facil",
      e: "Um candidato ficou no percentil 90 de uma prova. O que isso significa?",
      o,
      x: "O percentil 90 é o valor que deixa cerca de 90% das notas abaixo ou iguais a ele. Estar nesse percentil significa ter nota maior ou igual à de cerca de 90% dos candidatos: é uma posição relativa, e não uma quantidade de acertos.\n\nAcertar 90% das questões é uma nota, que pode corresponder a qualquer percentil, conforme o desempenho dos outros. Ficar entre os 90% piores inverte o sentido. Nota 90 confunde o percentil com a própria nota. E o 90º lugar é uma classificação, que depende do número de candidatos.",
      /* notas simuladas de 1000 candidatos numa prova de 100 questões */
      v: {
        i: () => {
          const notas = grande(11, 1000, (r) => 30 + 40 * r + 20 * r * r), p90 = percentilInc(notas, 0.9);
          const abaixo = notas.filter((x) => x <= p90).length / notas.length;
          const afirma = { "Superou cerca de 90% dos candidatos": Math.abs(abaixo - 0.9) < 0.02, "Acertou 90% das questões": p90 === 90, "Ficou entre os 90% piores": abaixo < 0.2, "Tirou nota 90": p90 === 90, "Ficou em 90º lugar": false };
          return unicoV(o.map((t) => afirma[t]));
        },
      },
    };
  })(),
  (() => {
    const o = ["12", "10", "11", "14", "8"];
    return {
      d: "facil",
      e: "Pelo método da mediana de cada metade, excluindo a mediana quando n é ímpar, qual é o terceiro quartil de 2, 4, 6, 8, 10, 12 e 14?",
      o,
      x: "Com 7 valores, a mediana é o 8, que fica de fora das metades. A metade superior é 10, 12, 14, e a sua mediana, 12, é o terceiro quartil. A metade inferior, 2, 4, 6, dá o primeiro quartil, 4.\n\n10 é o menor valor da metade superior. 11 faz a média entre 10 e 12, como se a metade tivesse quatro valores. 14 é o máximo. E 8 é a mediana do conjunto, o segundo quartil.",
      v: { i: () => qualNum(quartis([2, 4, 6, 8, 10, 12, 14])[2], o) },
    };
  })(),
  (() => {
    const o = ["A mediana", "A média", "O primeiro quartil", "A moda", "O desvio padrão"];
    return {
      d: "facil",
      e: "Num diagrama de caixa, o boxplot, o que marca a linha traçada dentro da caixa?",
      o,
      x: "O diagrama de caixa representa o resumo dos cinco números: mínimo, Q1, mediana, Q3 e máximo. A caixa vai de Q1 a Q3, e a linha dentro dela marca a mediana. Os bigodes se estendem até os extremos, ou até os limites de valores atípicos.\n\nA média não faz parte do resumo dos cinco números; alguns programas a marcam com outro símbolo. O primeiro quartil é a borda inferior da caixa, e não a linha interna. A moda e o desvio padrão não aparecem no diagrama.",
      /* o resumo de cinco números calculado; a linha interna é o terceiro elemento */
      v: {
        i: () => {
          const a = [1, 1, 3, 4, 6, 7, 9, 15, 30], [q1, me] = quartis(a), resumo = [Math.min(...a), q1, me, quartis(a)[2], Math.max(...a)], linha = resumo[2];
          const medida = { "A mediana": mediana(a), "A média": media(a), "O primeiro quartil": q1, "A moda": modas(a)[0], "O desvio padrão": desvio(a) };
          return unicoV(o.map((t) => Math.abs(medida[t] - linha) < 1e-12));
        },
      },
    };
  })(),
  (() => {
    const o = ["50%", "25%", "75%", "100%", "68%"];
    return {
      d: "facil",
      e: "Aproximadamente que porcentagem dos dados fica entre o primeiro e o terceiro quartil?",
      o,
      x: "Q1 deixa cerca de 25% dos dados abaixo dele, e Q3 deixa cerca de 75%. Entre os dois fica a diferença, cerca de 75% − 25% = 50%: a metade central dos dados, justamente a caixa do boxplot.\n\n25% é a fração entre dois quartis consecutivos, como entre Q1 e a mediana. 75% é a fração abaixo de Q3. 100% seria o intervalo do mínimo ao máximo. E 68% é a fração a menos de um desvio padrão da média, na distribuição normal.",
      v: { i: () => { const a = grande(5, 2001, (r) => Math.exp(2 * r)), [q1, , q3] = quartis(a); return qualNum(100 * (a.filter((x) => x > q1 && x < q3).length / a.length), o, 0.01); } },
    };
  })(),
  (() => {
    const o = ["8", "8,6", "10", "7", "43"];
    return {
      d: "facil",
      e: "Qual é o percentil 50 dos dados 3, 7, 8, 10 e 15?",
      o,
      x: "O percentil 50 deixa metade dos dados abaixo: é a mediana. Com cinco valores ordenados, 3, 7, 8, 10, 15, a mediana é o terceiro, 8. Pela posição p(n + 1) = 0,5 · 6 = 3, o resultado é o mesmo.\n\n8,6 é a média, 43/5. 10 e 7 são os vizinhos da mediana, o quarto e o segundo valores. E 43 é a soma. Em qualquer convenção, o percentil 50 coincide com a mediana.",
      v: { i: () => qualNum(percentil([3, 7, 8, 10, 15], 0.5), o) },
    };
  })(),
  (() => {
    const o = ["25%", "50%", "15%", "35%", "75%"];
    return {
      d: "facil",
      e: "Num conjunto de dados, o primeiro quartil é 20 e a mediana é 35. Aproximadamente que porcentagem dos dados fica entre 20 e 35?",
      o,
      x: "Até Q1 ficam cerca de 25% dos dados, e até a mediana, 50%. Entre os dois, a diferença: cerca de 25%. A porcentagem não depende dos números 20 e 35, só das posições que eles ocupam.\n\n50% é a fração entre Q1 e Q3. 15% subtrai os valores, 35 − 20, como se fossem porcentagens. 35% confunde o valor da mediana com uma fração. E 75% é a fração abaixo de Q3.",
      v: { i: () => { const a = grande(9, 2001, (r) => 20 * r * r), [q1, me] = quartis(a); return qualNum(100 * (a.filter((x) => x > q1 && x < me).length / a.length), o, 0.02); } },
    };
  })(),
  (() => {
    const o = ["Ao segundo quartil", "Ao primeiro quartil", "Ao terceiro quartil", "Ao quinto quartil", "A nenhum quartil"];
    return {
      d: "facil",
      e: "Os decis dividem os dados em dez partes. O quinto decil, D5, equivale a qual quartil?",
      o,
      x: "O quinto decil deixa 5/10 = 50% dos dados abaixo, a mesma posição do segundo quartil, que deixa 2/4 = 50%. Os dois coincidem com a mediana e com o percentil 50: D5 = Q2 = P50.\n\nO primeiro quartil corresponde a 25%, entre D2 e D3. O terceiro corresponde a 75%, entre D7 e D8. Não existe quinto quartil: os quartis são três. E D5 corresponde, sim, a um quartil.",
      v: { i: () => { const a = grande(3, 999, (r) => r * 50); const d5 = percentil(a, 0.5), q = [0.25, 0.5, 0.75].map((p) => percentil(a, p)); return unicoV(o.map((t, k) => k < 3 ? Math.abs(d5 - q[[1, 0, 2][k]]) < 1e-12 : false)); } },
    };
  })(),
  (() => {
    const o = ["36", "12", "15", "18", "44"];
    return {
      d: "facil",
      e: "O resumo de cinco números de um conjunto é: mínimo 4, Q1 10, mediana 15, Q3 22 e máximo 40. Qual é a amplitude total?",
      o,
      x: "A amplitude total é o máximo menos o mínimo: 40 − 4 = 36. Ela cobre todos os dados, dos bigodes de uma ponta à outra do boxplot, e por isso é sensível a valores extremos.\n\n12 é a amplitude interquartil, 22 − 10. 15 é a mediana. 18 subtrai o mínimo do terceiro quartil, 22 − 4. E 44 soma o mínimo e o máximo. O resumo de cinco números permite ler, de uma vez, a amplitude total e a interquartil.",
      v: { i: () => qualNum(40 - 4, o) },
    };
  })(),
  (() => {
    const o = ["4", "3", "25", "100", "10"];
    return {
      d: "facil",
      e: "Os três quartis de um conjunto dividem os dados ordenados em quantas partes com a mesma quantidade de valores?",
      o,
      x: "Três pontos de corte, Q1, Q2 e Q3, dividem a lista ordenada em quatro partes, cada uma com cerca de 25% dos dados: daí o nome quartil. Do mesmo modo, nove decis dividem em dez partes, e 99 percentis, em cem.\n\n3 é o número de quartis, e não de partes. 25 é a porcentagem em cada parte. 100 é o número de partes definidas pelos percentis. E 10, pelos decis.",
      v: { i: () => { const a = grande(21, 4000, (r) => r), q = quartis(a), cortes = [-Infinity, ...q, Infinity]; let partes = 0; for (let k = 0; k < 4; k++) { const f = a.filter((x) => x > cortes[k] && x <= cortes[k + 1]).length / a.length; if (Math.abs(f - 0.25) < 0.01) partes++; } return qualNum(partes, o); } },
    };
  })(),

  /* ------------------------------------------------------------ médias --- */
  (() => {
    const o = ["35", "30", "40", "25", "15"];
    return {
      d: "media",
      e: "Um conjunto tem Q1 = 10 e Q3 = 20. Pelo critério de 1,5 vez a amplitude interquartil, qual é o limite superior acima do qual um valor é considerado atípico?",
      o,
      x: "A amplitude interquartil é 20 − 10 = 10. O limite superior é Q3 + 1,5 · AIQ = 20 + 15 = 35; o inferior, Q1 − 1,5 · AIQ = 10 − 15 = −5. Valores acima de 35 são marcados como atípicos no boxplot.\n\n30 soma só uma AIQ a Q3. 40 soma duas. 25 soma meia AIQ. E 15 é o ponto médio da caixa, sem relação com o critério. O fator 1,5 é uma convenção proposta por Tukey, e não uma lei.",
      v: { i: () => { const a = [2, 8, 12, 14, 16, 18, 22, 40]; const [q1, , q3] = quartis(a); if (q1 !== 10 || q3 !== 20) throw new Error("exemplo errado"); return qualNum(q3 + 1.5 * (q3 - q1), o); } },
    };
  })(),
  (() => {
    const o = ["Só o 30", "O 2 e o 30", "Nenhum", "O 7 e o 30", "Só o 2"];
    return {
      d: "media",
      e: "Nos dados 2, 4, 5, 5, 6, 7 e 30, usando a mediana de cada metade e o critério de 1,5 · AIQ, quais valores são atípicos?",
      o,
      x: "A mediana é 5, a metade inferior é 2, 4, 5 e a superior, 6, 7, 30: Q1 = 4 e Q3 = 7, com AIQ = 3. Os limites são 4 − 4,5 = −0,5 e 7 + 4,5 = 11,5. Só o 30 passa de 11,5; nenhum valor fica abaixo de −0,5.\n\nO 2 está dentro dos limites, apesar de ser o menor. Nenhum ignora o 30, bem acima do limite. O 7 é o próprio Q3. E só o 2 inverte a conclusão.",
      v: {
        i: () => {
          const a = [2, 4, 5, 5, 6, 7, 30], [q1, , q3] = quartis(a), i = q3 - q1, fora = a.filter((x) => x < q1 - 1.5 * i || x > q3 + 1.5 * i);
          const leitura = { "Só o 30": [30], "O 2 e o 30": [2, 30], "Nenhum": [], "O 7 e o 30": [7, 30], "Só o 2": [2] };
          return unicoV(o.map((t) => JSON.stringify(leitura[t]) === JSON.stringify(fora)));
        },
      },
    };
  })(),
  (() => {
    const o = ["8", "9", "8,5", "5", "12"];
    return {
      d: "media",
      e: "Pela convenção da posição p(n + 1), qual é o percentil 25 dos dados 5, 8, 9, 12, 14, 18 e 21?",
      o,
      x: "Com n = 7, a posição do percentil 25 é 0,25 · (7 + 1) = 2. O segundo valor da lista ordenada é 8, e o percentil 25 é 8. Quando a posição não é inteira, interpola-se entre os dois vizinhos.\n\n9 é o terceiro valor, um a mais na contagem. 8,5 interpola sem motivo, porque a posição é exata. 5 é o mínimo. E 12 é a mediana. Outras convenções podem dar valores um pouco diferentes para o mesmo percentil.",
      v: { i: () => qualNum(percentil([5, 8, 9, 12, 14, 18, 21], 0.25), o) },
    };
  })(),
  (() => {
    const o = ["26", "20", "30", "24", "25"];
    return {
      d: "media",
      e: "Pela convenção da posição p(n − 1) + 1, com interpolação, qual é o percentil 40 de 10, 20, 30, 40 e 50?",
      o,
      x: "A posição é 0,4 · (5 − 1) + 1 = 2,6: entre o 2º valor, 20, e o 3º, 30, a 60% do caminho. O percentil 40 é 20 + 0,6 · 10 = 26. A interpolação linear preenche o espaço entre dois dados vizinhos.\n\n20 trunca a posição, ignorando a parte 0,6. 30 arredonda para cima. 24 interpola com 0,4 em vez de 0,6. E 25 toma o ponto médio entre 20 e 30. Essa convenção é a usada pela função de percentil de muitas planilhas.",
      v: { i: () => qualNum(percentilInc([10, 20, 30, 40, 50], 0.4), o) },
    };
  })(),
  (() => {
    const o = ["75", "30", "25", "80", "40"];
    return {
      d: "media",
      e: "Numa turma de 40 alunos, 30 tiraram nota menor que a de Ana, e ninguém empatou com ela. Em que percentil aproximado Ana está?",
      o,
      x: "O percentil de uma nota é a porcentagem de notas abaixo dela: 30 de 40 alunos, isto é, 30/40 = 75%. Ana está perto do percentil 75, o terceiro quartil da turma.\n\n30 é a quantidade de alunos abaixo dela, e não a porcentagem. 25 é a porcentagem acima dela, os 10 de 40 que tiraram mais. 80 soma, sem motivo, um décimo a mais. E 40 é o total de alunos.",
      v: { i: () => qualNum((100 * 30) / 40, o) },
    };
  })(),
  (() => {
    const o = ["A metade superior", "A metade inferior", "As duas igualmente", "Não dá para saber", "Nenhuma, os dados são simétricos"];
    return {
      d: "media",
      e: "Um boxplot tem mínimo 5, Q1 12, mediana 18, Q3 25 e máximo 50. Qual metade dos dados, abaixo ou acima da mediana, é mais espalhada?",
      o,
      x: "A metade inferior vai de 5 a 18, uma extensão de 13; a superior vai de 18 a 50, uma extensão de 32. Dentro da caixa, a parte de cima também é maior: 25 − 18 = 7 contra 18 − 12 = 6. A metade superior é a mais espalhada, sinal de assimetria à direita.\n\nA metade inferior tem a menor extensão. As duas igualmente e a simetria contradizem as distâncias. E dá para saber, sim: o resumo de cinco números é justamente para isso.",
      v: {
        i: () => {
          const [mi, q1, me, q3, ma] = [5, 12, 18, 25, 50], inf = me - mi, sup = ma - me;
          const afirma = { "A metade superior": sup > inf && q3 - me >= me - q1, "A metade inferior": inf > sup, "As duas igualmente": inf === sup, "Não dá para saber": false, "Nenhuma, os dados são simétricos": inf === sup && q3 - me === me - q1 };
          return unicoV(o.map((t) => afirma[t]));
        },
      },
    };
  })(),
  (() => {
    const o = ["Assimetria à direita", "Assimetria à esquerda", "Simetria", "Bimodalidade", "Nenhuma conclusão sobre a forma"];
    return {
      d: "media",
      e: "Um conjunto tem Q1 = 10, mediana 12 e Q3 = 20. O que essas medidas sugerem sobre a forma da distribuição?",
      o,
      x: "A distância da mediana a Q3, 20 − 12 = 8, é bem maior que a de Q1 à mediana, 12 − 10 = 2. Os dados se espalham mais acima da mediana: é o padrão da assimetria à direita, com cauda para os valores altos.\n\nAssimetria à esquerda teria a distância maior abaixo da mediana. Simetria teria as duas distâncias parecidas. Bimodalidade é a presença de dois picos, que os quartis não revelam. E dá para tirar uma conclusão, sim, comparando as duas distâncias.",
      v: {
        i: () => {
          const [q1, me, q3] = [10, 12, 20], baixo = me - q1, alto = q3 - me;
          const afirma = { "Assimetria à direita": alto > baixo, "Assimetria à esquerda": baixo > alto, "Simetria": baixo === alto, "Bimodalidade": false, "Nenhuma conclusão sobre a forma": false };
          return unicoV(o.map((t) => afirma[t]));
        },
      },
    };
  })(),
  (() => {
    const o = ["5", "4,5", "7", "3", "8"];
    return {
      d: "media",
      e: "Pelo método da mediana de cada metade, qual é a amplitude interquartil dos números de 1 a 10?",
      o,
      x: "Com 10 valores, a metade inferior é 1 a 5, com mediana Q1 = 3, e a superior é 6 a 10, com mediana Q3 = 8. A amplitude interquartil é 8 − 3 = 5: a metade central dos dados ocupa um intervalo de 5 unidades.\n\n4,5 subtrai o mínimo da mediana geral, 5,5 − 1, misturando medidas que não delimitam a metade central. 7 é a diferença entre 8 e 1. 3 é o próprio Q1. E 8 é o próprio Q3.",
      v: { i: () => qualNum(aiq([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), o) },
    };
  })(),
  (() => {
    const o = ["≈ 84", "≈ 68", "≈ 16", "≈ 97,5", "≈ 50"];
    return {
      d: "media",
      e: "Numa distribuição normal, a que percentil corresponde um valor com escore padronizado z = 1?",
      o,
      x: "O percentil é a fração da distribuição abaixo do valor: Φ(1) ≈ 0,8413. Um valor um desvio padrão acima da média está perto do percentil 84: metade da distribuição fica abaixo da média, e mais uns 34% entre a média e μ + σ.\n\n68 é a fração entre −1 e 1, e não abaixo de 1. 16 é a fração acima de 1. 97,5 corresponde a z ≈ 1,96. E 50 corresponde a z = 0, a própria média.",
      v: { i: () => qualNum(100 * Phi(1), o, 0.005) },
    };
  })(),
  (() => {
    const o = ["≈ 43,3", "40", "25", "≈ 56,7", "47,5"];
    return {
      d: "media",
      e: "Uma variável segue uma distribuição normal com média 50 e desvio padrão 10. Qual é, aproximadamente, o seu primeiro quartil?",
      o,
      x: "O primeiro quartil deixa 25% abaixo. Na normal padrão, isso acontece em z ≈ −0,674, porque Φ(−0,674) ≈ 0,25. Voltando à escala original: Q1 = 50 − 0,674 · 10 ≈ 43,3. O terceiro quartil, por simetria, é 50 + 6,74 ≈ 56,7.\n\n40 usa um desvio inteiro abaixo da média, que deixa só 16% abaixo. 25 confunde o quartil com a porcentagem. 56,7 é o terceiro quartil. E 47,5 é um palpite a um quarto de desvio da média.",
      v: { i: () => qualNum(50 + 10 * zDe(0.25), o, 0.002) },
    };
  })(),
  (() => {
    const o = ["≈ 13,5", "20", "10", "≈ 6,7", "25"];
    return {
      d: "media",
      e: "Qual é, aproximadamente, a amplitude interquartil de uma distribuição normal com desvio padrão 10?",
      o,
      x: "Na normal, os quartis ficam em μ ± 0,674σ, e a amplitude interquartil é 2 · 0,674σ ≈ 1,349σ. Com σ = 10: cerca de 13,5. A relação vale para qualquer normal e permite estimar σ pela AIQ, dividindo por 1,349.\n\n20 usa dois desvios inteiros. 10 é o próprio desvio padrão. 6,7 é a metade da AIQ, a distância de cada quartil à média. E 25 confunde a AIQ com a porcentagem abaixo de Q1.",
      v: { i: () => qualNum(10 * (zDe(0.75) - zDe(0.25)), o, 0.002) },
    };
  })(),
  (() => {
    const o = ["75", "150", "7", "25", "70"];
    return {
      d: "media",
      e: "Das 200 notas de um concurso, 150 são menores ou iguais a 7. Aproximadamente a que percentil corresponde a nota 7?",
      o,
      x: "A fração de notas até 7 é 150/200 = 0,75, ou 75%. A nota 7 corresponde, aproximadamente, ao percentil 75, que é também o terceiro quartil. O percentil se lê na frequência acumulada relativa.\n\n150 é a frequência acumulada absoluta, e não a porcentagem. 7 é a nota, e não o percentil. 25 é a fração acima de 7. E 70 multiplica a nota por 10, sem relação com as frequências.",
      v: { i: () => { const notas = [...Array(150).fill(6), ...Array(50).fill(8)]; return qualNum((100 * notas.filter((x) => x <= 7).length) / notas.length, o); } },
    };
  })(),
  (() => {
    const o = ["A amplitude interquartil", "A amplitude total", "O desvio padrão", "A variância", "O coeficiente de variação"];
    return {
      d: "media",
      e: "Qual medida de dispersão é menos afetada quando se acrescenta um valor extremo a um conjunto grande de dados?",
      o,
      x: "A amplitude interquartil depende só das posições de Q1 e Q3, que se movem pouco quando se acrescenta um único valor, mesmo enorme. Por isso é chamada de medida robusta. A amplitude total salta junto com o valor extremo, e o desvio padrão e a variância usam os desvios de todos os dados, inclusive o extremo.\n\nA amplitude total muda tanto quanto o próprio valor extremo. O desvio padrão e a variância crescem bastante. E o coeficiente de variação herda a sensibilidade do desvio padrão.",
      /* variação relativa de cada medida ao acrescentar um valor extremo */
      v: {
        i: () => {
          const a = grande(17, 200, (r) => 50 + 20 * (r - 0.5)), b = [...a, 5000];
          const medida = { "A amplitude interquartil": aiq, "A amplitude total": (x) => Math.max(...x) - Math.min(...x), "O desvio padrão": (x) => desvio(x), "A variância": (x) => variancia(x), "O coeficiente de variação": (x) => desvio(x) / media(x) };
          const muda = Object.fromEntries(Object.entries(medida).map(([k, f]) => [k, Math.abs(f(b) - f(a)) / f(a)]));
          const menor = Math.min(...Object.values(muda));
          return unicoV(o.map((t) => muda[t] === menor));
        },
      },
    };
  })(),
  (() => {
    const o = ["Não muda", "Aumenta 5", "Aumenta 10", "Dobra", "Diminui 5"];
    return {
      d: "media",
      e: "Somando 5 a todos os valores de um conjunto, o que acontece com a amplitude interquartil?",
      o,
      x: "Somar 5 desloca todos os valores e, com eles, os quartis: Q1 e Q3 aumentam 5 cada um. A diferença Q3 − Q1 continua a mesma. Como toda medida de dispersão, a amplitude interquartil não depende de onde os dados estão, só de como se espalham.\n\nAumentar 5 confunde o efeito sobre os quartis com o efeito sobre a diferença entre eles. Aumentar 10 soma o deslocamento dos dois quartis. Dobrar seria o efeito de multiplicar por 2. E diminuir não tem motivo.",
      v: {
        i: () => {
          const bat = [[1, 3, 4, 8, 9, 12], [2, 2, 5, 7, 11, 13, 20], [10, 20, 30, 40, 50, 60, 70, 80]];
          const antes = bat.map(aiq), depois = bat.map((a) => aiq(a.map((x) => x + 5)));
          const afirma = { "Não muda": antes.every((v, k) => v === depois[k]), "Aumenta 5": antes.every((v, k) => depois[k] === v + 5), "Aumenta 10": antes.every((v, k) => depois[k] === v + 10), "Dobra": antes.every((v, k) => depois[k] === 2 * v), "Diminui 5": antes.every((v, k) => depois[k] === v - 5) };
          return unicoV(o.map((t) => afirma[t]));
        },
      },
    };
  })(),
  (() => {
    const o = ["90,9", "90", "91", "90,5", "9"];
    return {
      d: "media",
      e: "Pela convenção da posição p(n + 1), com interpolação, qual é o percentil 90 dos números inteiros de 1 a 100?",
      o,
      x: "A posição é 0,9 · (100 + 1) = 90,9: entre o 90º valor, 90, e o 91º, 91, a 90% do caminho. O percentil 90 é 90 + 0,9 · 1 = 90,9. Com dados igualmente espaçados, o percentil acompanha a posição.\n\n90 trunca a posição. 91 arredonda para cima. 90,5 toma o ponto médio entre os vizinhos. E 9 confunde o percentil 90 com o nono decil lido de outra forma.",
      v: { i: () => qualNum(percentil([...Array(100).keys()].map((k) => k + 1), 0.9), o) },
    };
  })(),
  (() => {
    const o = ["Exatamente no meio entre Q1 e Q3", "Mais perto de Q1", "Mais perto de Q3", "Acima de Q3", "Abaixo de Q1"];
    return {
      d: "media",
      e: "Numa distribuição simétrica, onde fica a mediana em relação aos quartis Q1 e Q3?",
      o,
      x: "Na simetria, o que acontece de um lado da mediana se espelha do outro: a distância de Q1 à mediana é igual à da mediana a Q3. A mediana fica exatamente no meio da caixa do boxplot, e os bigodes também têm comprimentos parecidos.\n\nMais perto de Q1 indica assimetria à direita, com a caixa esticada para cima. Mais perto de Q3 indica assimetria à esquerda. E a mediana nunca fica fora do intervalo entre Q1 e Q3, em nenhuma distribuição.",
      v: {
        i: () => {
          const bat = [[1, 2, 3, 4, 5, 6, 7, 8, 9], [-10, -4, -1, 0, 1, 4, 10], [2, 4, 4, 6, 8, 8, 10]];
          const pos = bat.map((a) => { const [q1, me, q3] = quartis(a); return (me - q1) - (q3 - me); });
          const afirma = { "Exatamente no meio entre Q1 e Q3": pos.every((d) => Math.abs(d) < 1e-12), "Mais perto de Q1": pos.every((d) => d < 0), "Mais perto de Q3": pos.every((d) => d > 0), "Acima de Q3": false, "Abaixo de Q1": false };
          return unicoV(o.map((t) => afirma[t]));
        },
      },
    };
  })(),
  (() => {
    const o = ["4", "5", "9", "2", "7"];
    return {
      d: "media",
      e: "Com os dados repetidos 3, 5, 5, 6, 7, 7, 7, 9, 10 e 12, quanto mede a caixa do boxplot, isto é, Q3 − Q1 pela mediana de cada metade?",
      o,
      x: "Com 10 valores, a metade inferior é 3, 5, 5, 6, 7, com mediana Q1 = 5, e a superior é 7, 7, 9, 10, 12, com mediana Q3 = 9. A amplitude interquartil é 9 − 5 = 4. Valores repetidos contam cada um na sua posição.\n\n5 é o próprio Q1. 9 é o próprio Q3. 2 é a distância entre Q1 e a mediana geral, 7, que não fica simétrica. E 7 é a mediana do conjunto.",
      v: { i: () => qualNum(aiq([3, 5, 5, 6, 7, 7, 7, 9, 10, 12]), o) },
    };
  })(),
  (() => {
    const o = ["30", "20", "60", "10", "40"];
    return {
      d: "media",
      e: "Um aluno está no percentil 60 de uma turma de 50 estudantes, sem empates. Aproximadamente quantos colegas tiveram nota menor que a dele?",
      o,
      x: "Estar no percentil 60 significa ter nota acima de cerca de 60% da turma: 0,6 · 50 = 30 estudantes. Os outros 40%, cerca de 20, ficaram acima ou empatados com ele.\n\n20 é a quantidade acima dele. 60 é o percentil, e não uma contagem. 10 é um décimo da turma, sem relação com o percentil. E 40 é a porcentagem acima dele, lida como contagem. Percentil é sempre uma posição relativa ao grupo.",
      v: { i: () => qualNum(0.6 * 50, o) },
    };
  })(),
  (() => {
    const o = ["200", "100", "300", "20", "400"];
    return {
      d: "media",
      e: "Numa amostra de 400 observações, Q1 = 30 e Q3 = 50. Aproximadamente quantas observações ficam entre 30 e 50?",
      o,
      x: "Entre o primeiro e o terceiro quartil fica cerca de metade dos dados, 50%. Com 400 observações, são cerca de 200. A contagem não depende dos valores 30 e 50, só do fato de serem quartis.\n\n100 é um quarto da amostra, a quantidade entre dois quartis vizinhos. 300 é a quantidade abaixo de Q3. 20 é a diferença entre os quartis, lida como contagem. E 400 é a amostra inteira.",
      v: { i: () => { const a = grande(4, 400, (r) => 20 + 40 * r), [q1, , q3] = quartis(a); return qualNum(a.filter((x) => x > q1 && x < q3).length, o, 0.02); } },
    };
  })(),
  (() => {
    const o = ["Q1, mediana e Q3", "Q1, Q2 e Q4", "Mínimo, mediana e máximo", "Q1, média e Q3", "D2, D5 e D7"];
    return {
      d: "media",
      e: "Os percentis P25, P50 e P75 correspondem, respectivamente, a quais medidas?",
      o,
      x: "P25 deixa 25% abaixo, como o primeiro quartil; P50, 50%, como a mediana; P75, 75%, como o terceiro quartil. Os quartis são casos particulares dos percentis, e é por isso que se escreve Q1 = P25, Me = P50 e Q3 = P75.\n\nQ4 não é um quartil usual; o máximo é o limite superior. Mínimo e máximo correspondem a P0 e P100. A média só coincide com P50 em distribuições simétricas. E D2, D5 e D7 correspondem a P20, P50 e P70.",
      v: {
        i: () => {
          const a = grande(8, 1001, (r) => Math.exp(3 * r)), P = [0.25, 0.5, 0.75].map((p) => percentil(a, p)), ref = (x) => percentil(a, x);
          const trio = { "Q1, mediana e Q3": [ref(0.25), mediana(a), ref(0.75)], "Q1, Q2 e Q4": [ref(0.25), ref(0.5), Math.max(...a)], "Mínimo, mediana e máximo": [Math.min(...a), mediana(a), Math.max(...a)], "Q1, média e Q3": [ref(0.25), media(a), ref(0.75)], "D2, D5 e D7": [ref(0.2), ref(0.5), ref(0.7)] };
          return unicoV(o.map((t) => trio[t].every((v, k) => Math.abs(v - P[k]) < 1e-9)));
        },
      },
    };
  })(),
  (() => {
    const o = ["−5", "−15", "10", "25", "−45"];
    return {
      d: "media",
      e: "Um conjunto tem Q1 = 40 e Q3 = 70. Pelo critério de 1,5 · AIQ, qual é o limite inferior abaixo do qual um valor é atípico?",
      o,
      x: "A amplitude interquartil é 70 − 40 = 30, e 1,5 · 30 = 45. O limite inferior é Q1 − 45 = 40 − 45 = −5. Se a variável só assume valores positivos, como tempos ou pesos, nenhum valor será atípico por baixo.\n\n−15 usa duas AIQ inteiras, 40 − 60 + 5, com erro de conta. 10 subtrai só uma AIQ. 25 subtrai meia AIQ. E −45 é só o afastamento, sem partir de Q1.",
      v: { i: () => qualNum(40 - 1.5 * (70 - 40), o) },
    };
  })(),
  (() => {
    const o = ["Porque há mais de uma convenção de cálculo", "Porque um dos livros erra a conta", "Porque os quartis dependem da média", "Porque os dados mudam de livro para livro", "Porque só a mediana está bem definida"];
    return {
      d: "media",
      e: "Por que dois livros podem apresentar valores diferentes para o primeiro quartil dos mesmos dados?",
      o,
      x: "Não existe uma única definição de quartil para amostras pequenas: há a mediana de cada metade, com ou sem a mediana central, e as posições p(n + 1) e p(n − 1) + 1, com interpolação. Para os dados 1 a 8, por exemplo, uma dá Q1 = 2,5, e a posição p(n + 1) dá 2,25. As diferenças diminuem com amostras grandes.\n\nNenhum dos livros precisa estar errado. Os quartis não dependem da média, e sim da ordenação. Os dados são os mesmos, por hipótese. E a mediana também é um quartil, com a mesma definição em todas as convenções.",
      v: {
        i: () => {
          const a = [1, 2, 3, 4, 5, 6, 7, 8], m1 = quartis(a)[0], m2 = percentil(a, 0.25), m3 = percentilInc(a, 0.25);
          const afirma = { "Porque há mais de uma convenção de cálculo": new Set([m1, m2, m3]).size > 1, "Porque um dos livros erra a conta": false, "Porque os quartis dependem da média": false, "Porque os dados mudam de livro para livro": false, "Porque só a mediana está bem definida": false };
          return unicoV(o.map((t) => afirma[t]));
        },
      },
    };
  })(),
  (() => {
    const o = ["50%", "60%", "27%", "40%", "5%"];
    return {
      d: "media",
      e: "Nos dados 12, 15, 18, 21, 24, 27, 30, 33, 36 e 39, que porcentagem dos valores fica abaixo de 27?",
      o,
      x: "Os valores menores que 27 são 12, 15, 18, 21 e 24: cinco de dez, ou 50%. Com essa leitura, 27 está no percentil 50 do conjunto, o que confere com o fato de 27 ser um dos dois valores centrais.\n\n60% conta o próprio 27 entre os valores abaixo. 27% confunde o valor com a porcentagem. 40% esquece um dos valores. E 5% confunde a contagem com a porcentagem.",
      v: { i: () => { const a = [12, 15, 18, 21, 24, 27, 30, 33, 36, 39]; return qualNum((100 * a.filter((x) => x < 27).length) / a.length, o); } },
    };
  })(),
  (() => {
    const o = ["18,9", "18", "19", "9", "20"];
    return {
      d: "media",
      e: "Em 20 valores consecutivos, de 1 a 20, onde fica o nono decil pela posição p(n + 1), com interpolação?",
      o,
      x: "O nono decil é o percentil 90. A posição é 0,9 · (20 + 1) = 18,9: entre o 18º valor, 18, e o 19º, 19. Interpolando: 18 + 0,9 · 1 = 18,9. Cerca de 90% dos valores ficam abaixo desse ponto.\n\n18 trunca a posição. 19 arredonda para cima. 9 é o número do decil, e não o seu valor. E 20 é o máximo. A mesma conta, com p = 0,1, dá o primeiro decil, 2,1.",
      v: { i: () => qualNum(percentil([...Array(20).keys()].map((k) => k + 1), 0.9), o) },
    };
  })(),
  (() => {
    const o = ["≈ 16,7", "20", "≈ 11,7", "≈ 28,3", "10"];
    return {
      d: "media",
      e: "As classes [0, 10), [10, 20), [20, 30) e [30, 40) têm frequências 20, 30, 30 e 20. Supondo os dados uniformes em cada classe, qual é a amplitude interquartil?",
      o,
      x: "Com 100 observações, Q1 deixa 25 abaixo: a primeira classe tem 20, e faltam 5 das 30 da segunda, um sexto do caminho: Q1 = 10 + (5/30) · 10 ≈ 11,7. Q3 deixa 75: as duas primeiras somam 50, e faltam 25 das 30 da terceira: Q3 = 20 + (25/30) · 10 ≈ 28,3. A AIQ é 28,3 − 11,7 ≈ 16,7.\n\n20 usa os limites das classes, sem interpolar. 11,7 é só o Q1, e 28,3, só o Q3. E 10 é a amplitude de cada classe.",
      /* distribuição acumulada linear por trechos, invertida por bisseção */
      v: {
        i: () => {
          const lim = [0, 10, 20, 30, 40], f = [20, 30, 30, 20];
          const F = (x) => { let s = 0; for (let k = 0; k < 4; k++) { if (x >= lim[k + 1]) s += f[k]; else if (x > lim[k]) s += (f[k] * (x - lim[k])) / 10; } return s; };
          const q = (p) => bissecao((x) => F(x) - 100 * p, 0, 40);
          return qualNum(q(0.75) - q(0.25), o, 0.003);
        },
      },
    };
  })(),
  (() => {
    const o = ["Não mudam", "Aumentam dez vezes", "O Q3 aumenta muito", "Só o Q1 muda", "Todos os três mudam"];
    return {
      d: "media",
      e: "Num conjunto de 20 números distintos, o maior valor é trocado por outro dez vezes maior. O que acontece com os quartis, pela mediana de cada metade?",
      o,
      x: "Com 20 valores, Q1 usa o 5º e o 6º, a mediana usa o 10º e o 11º, e Q3 usa o 15º e o 16º, na lista ordenada. O maior valor ocupa a 20ª posição, e continua lá depois da troca: nenhum dos valores usados pelos quartis muda. Os três quartis ficam iguais, enquanto a média e o desvio padrão mudam.\n\nAumentar dez vezes aplica aos quartis uma mudança que só atingiu um valor. O Q3 não usa o maior valor. Só o Q1 mudar não tem motivo. E nenhum dos três muda.",
      v: {
        i: () => {
          const bat = [1, 2, 3].map((s) => { const a = new Set(); const r = sorteador(s); while (a.size < 20) a.add(Math.round(1 + 99 * r())); return ordena([...a]); });
          const muda = bat.map((a) => { const b = [...a]; b[19] = 10 * b[19]; return quartis(a).map((q, k) => q !== quartis(b)[k]); });
          const afirma = { "Não mudam": muda.every((m) => m.every((x) => !x)), "Aumentam dez vezes": false, "O Q3 aumenta muito": muda.every((m) => m[2]), "Só o Q1 muda": muda.every((m) => m[0] && !m[1] && !m[2]), "Todos os três mudam": muda.every((m) => m.every(Boolean)) };
          return unicoV(o.map((t) => afirma[t]));
        },
      },
    };
  })(),
  (() => {
    const o = ["O meio dos dados tem um só valor", "Todos os dados são iguais", "A mediana é zero", "Não há valores atípicos", "O desvio padrão é zero"];
    return {
      d: "media",
      e: "Num conjunto de dados, a amplitude interquartil é zero. O que se pode concluir?",
      o,
      x: "AIQ zero significa Q1 = Q3: os valores do meio da lista ordenada, entre o primeiro e o terceiro quartil, são todos iguais. Nada se afirma sobre as pontas: 1, 5, 5, 5, 5, 5, 5, 9 tem AIQ zero e valores diferentes nos extremos.\n\nTodos os dados iguais é mais forte do que a AIQ garante, como mostra o exemplo. A mediana pode ser qualquer valor, como 5. Pode haver valores atípicos: pelo critério de 1,5 · AIQ, qualquer valor diferente do central vira atípico. E o desvio padrão só zera se todos os dados forem iguais.",
      v: {
        i: () => {
          const bat = [[1, 5, 5, 5, 5, 5, 5, 9], [2, 7, 7, 7, 7, 7, 7, 7, 30], [4, 4, 4, 4, 4, 4]].filter((a) => aiq(a) === 0);
          const afirma = { "O meio dos dados tem um só valor": bat.every((a) => { const [q1, , q3] = quartis(a); return a.filter((x) => x >= q1 && x <= q3).length >= a.length / 2; }), "Todos os dados são iguais": bat.every((a) => a.every((x) => x === a[0])), "A mediana é zero": bat.every((a) => mediana(a) === 0), "Não há valores atípicos": bat.every((a) => { const [q1, , q3] = quartis(a); return a.every((x) => x >= q1 && x <= q3); }), "O desvio padrão é zero": bat.every((a) => desvio(a) === 0) };
          return unicoV(o.map((t) => afirma[t]));
        },
      },
    };
  })(),
  (() => {
    const o = ["Cerca de 10% dos bebês pesam menos", "Ele pesa 10% abaixo da média", "Ele está entre os 10% mais pesados", "Ele pesa um décimo da média", "Cerca de 90% dos bebês pesam menos que ele"];
    return {
      d: "media",
      e: "Na curva de crescimento, um recém-nascido está no percentil 10 de peso. O que isso significa?",
      o,
      x: "O percentil 10 é o valor que deixa cerca de 10% da população de referência abaixo dele. Estar nesse percentil significa que cerca de 10% dos bebês pesam menos, e 90% pesam mais: é uma posição relativa, e não uma porcentagem do peso.\n\n10% abaixo da média confunde percentil com variação percentual: numa normal, o percentil 10 fica cerca de 1,28 desvio padrão abaixo da média, e não 10%. Estar entre os mais pesados inverte o sentido. Um décimo da média é um peso impossível para um recém-nascido. E 90% abaixo corresponde ao percentil 90.",
      /* pesos simulados de referência, aproximadamente normais */
      v: {
        i: () => {
          const r = sorteador(31), pesos = Array.from({ length: 4000 }, () => 3.3 + 0.45 * zDe(0.001 + 0.998 * r())), p10 = percentilInc(pesos, 0.1), m = media(pesos);
          const abaixo = pesos.filter((x) => x < p10).length / pesos.length;
          const afirma = { "Cerca de 10% dos bebês pesam menos": Math.abs(abaixo - 0.1) < 0.01, "Ele pesa 10% abaixo da média": Math.abs(p10 - 0.9 * m) < 0.01, "Ele está entre os 10% mais pesados": abaixo > 0.9, "Ele pesa um décimo da média": Math.abs(p10 - 0.1 * m) < 0.01, "Cerca de 90% dos bebês pesam menos que ele": Math.abs(abaixo - 0.9) < 0.01 };
          return unicoV(o.map((t) => afirma[t]));
        },
      },
    };
  })(),

  /* ---------------------------------------------------------- difíceis --- */
  (() => {
    const o = ["Sim, pois passa do limite 27", "Não, pois fica abaixo de 36", "Não, pois está a menos de 2 desvios", "Sim, pois passa de Q3", "Não dá para saber sem a média"];
    return {
      d: "dificil",
      e: "Um conjunto tem Q1 = 12, Q3 = 18 e máximo 30. Pelo critério de 1,5 · AIQ, o máximo é um valor atípico?",
      o,
      x: "A AIQ é 18 − 12 = 6, e o limite superior é 18 + 1,5 · 6 = 27. Como 30 > 27, o máximo é atípico, e seria desenhado como um ponto isolado além do bigode do boxplot.\n\n36 soma três vezes a AIQ a Q3, um critério bem mais frouxo, usado às vezes para atípicos extremos, mas não o pedido. O critério não usa o desvio padrão. Passar de Q3 não basta: um quarto dos dados fica acima de Q3. E o critério não precisa da média.",
      v: { i: () => { const lim = 18 + 1.5 * (18 - 12), atipico = 30 > lim; return unicoV(o.map((t) => (t.startsWith("Sim, pois passa do limite 27") ? atipico && lim === 27 : false))); } },
    };
  })(),
  (() => {
    const o = ["Só a média e o desvio padrão", "Todas as cinco medidas", "Só a mediana", "Só os quartis", "Nenhuma delas"];
    return {
      d: "dificil",
      e: "Num conjunto de 11 valores distintos, o maior valor é aumentado muito. Entre média, mediana, Q1, Q3 e desvio padrão, quais medidas mudam?",
      o,
      x: "Com 11 valores, a mediana é o 6º; pela mediana de cada metade, Q1 é o 3º e Q3 é o 9º da lista ordenada. O maior valor, o 11º, não entra em nenhum deles, e continua sendo o maior depois do aumento. Já a média e o desvio padrão usam todos os valores, e mudam.\n\nTodas as cinco ignora a robustez das medidas de posição. Só a mediana, ou só os quartis, inverte a conclusão: são exatamente eles que não mudam. E nenhuma delas ignora o efeito sobre a média.",
      v: {
        i: () => {
          const a = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31], b = [...a.slice(0, 10), 3100];
          const f = { media, mediana, q1: (x) => quartis(x)[0], q3: (x) => quartis(x)[2], desvio: (x) => desvio(x) };
          const muda = Object.fromEntries(Object.entries(f).map(([k, g]) => [k, g(a) !== g(b)]));
          const afirma = { "Só a média e o desvio padrão": muda.media && muda.desvio && !muda.mediana && !muda.q1 && !muda.q3, "Todas as cinco medidas": Object.values(muda).every(Boolean), "Só a mediana": muda.mediana && !muda.media, "Só os quartis": muda.q1 && muda.q3 && !muda.media, "Nenhuma delas": !Object.values(muda).some(Boolean) };
          return unicoV(o.map((t) => afirma[t]));
        },
      },
    };
  })(),
  (() => {
    const o = ["≈ 38,4", "30", "≈ 19,2", "80", "≈ 49,3"];
    return {
      d: "dificil",
      e: "Numa distribuição normal com média 100 e desvio padrão 15, quantos pontos separam o percentil 10 do percentil 90?",
      o,
      x: "Na normal padrão, o percentil 90 fica em z ≈ 1,2816 e o percentil 10, por simetria, em z ≈ −1,2816. Na escala original, a distância entre eles é 2 · 1,2816 · 15 ≈ 38,4 pontos.\n\n30 usa um desvio inteiro para cada lado. 19,2 é a distância de cada percentil até a média, a metade da resposta. 80 subtrai os números dos percentis, 90 − 10. E 49,3 usa z ≈ 1,645, que corresponde aos percentis 5 e 95.",
      v: { i: () => qualNum(15 * (zDe(0.9) - zDe(0.1)), o, 0.002) },
    };
  })(),
  (() => {
    const o = ["99", "100", "101", "98", "199"];
    return {
      d: "dificil",
      e: "Pela convenção da posição p(n + 1), qual é o menor tamanho de amostra n para o qual a posição do percentil 99 é um número inteiro?",
      o,
      x: "A posição é 0,99 · (n + 1) = 99(n + 1)/100, que é inteira quando n + 1 é múltiplo de 100, porque 99 e 100 não têm fator comum. O menor caso é n + 1 = 100, isto é, n = 99, com posição 99: o percentil 99 é o 99º valor, o próprio máximo.\n\n100 dá posição 99,99. 101 dá 100,98. 98 dá 98,01. E 199 também serve, com posição 198, mas não é o menor.",
      /* busca direta pelo primeiro n */
      v: { i: () => qualNum([...Array(1000).keys()].map((k) => k + 1).find((n) => Math.abs((99 * (n + 1)) % 100) === 0), o) },
    };
  })(),
  (() => {
    const o = ["ln 3", "ln 4", "1", "ln(4/3)", "2 ln 2"];
    return {
      d: "dificil",
      e: "Para a distribuição exponencial com F(x) = 1 − e^(−x), para x ≥ 0, qual é a amplitude interquartil?",
      o,
      x: "Os quartis resolvem F(x) = p. Para Q1: 1 − e^(−x) = 0,25, e^(−x) = 0,75, x = ln(4/3). Para Q3: e^(−x) = 0,25, x = ln 4. A AIQ é ln 4 − ln(4/3) = ln(4 · 3/4) = ln 3 ≈ 1,10.\n\nln 4 é o próprio Q3. 1 é a média da distribuição. ln(4/3) é o Q1. E 2 ln 2 = ln 4, de novo o Q3. A mediana, pela mesma conta, é ln 2 ≈ 0,69, abaixo da média 1, como em toda distribuição com cauda à direita.",
      /* quartis pela inversão numérica da distribuição acumulada */
      v: { i: () => { const q = (p) => bissecao((x) => 1 - Math.exp(-x) - p, 0, 50); return unicoV(o.map((t) => Math.abs(lerFracaoSeg(t) - (q(0.75) - q(0.25))) < 1e-9)); } },
    };
  })(),
  (() => {
    const o = ["1", "0", "2", "3", "8"];
    return {
      d: "dificil",
      e: "Nos dados 11, 13, 14, 15, 16, 17, 19 e 35, usando a mediana de cada metade e o critério de 1,5 · AIQ, quantos valores são atípicos?",
      o,
      x: "A metade inferior é 11, 13, 14, 15, com Q1 = 13,5, e a superior é 16, 17, 19, 35, com Q3 = 18. A AIQ é 4,5, e os limites são 13,5 − 6,75 = 6,75 e 18 + 6,75 = 24,75. Só o 35 passa do limite superior: há 1 valor atípico.\n\n0 ignora o 35. 2 conta também o 11, que está dentro dos limites. 3 inclui ainda o 19. E 8 é o tamanho da amostra. No boxplot, o bigode superior pararia no 19, o maior valor dentro do limite.",
      v: { i: () => { const a = [11, 13, 14, 15, 16, 17, 19, 35], [q1, , q3] = quartis(a), i = q3 - q1; return qualNum(a.filter((x) => x < q1 - 1.5 * i || x > q3 + 1.5 * i).length, o); } },
    };
  })(),
  (() => {
    const o = ["≈ 89", "≈ 80", "≈ 11", "≈ 70", "≈ 95"];
    return {
      d: "dificil",
      e: "Numa distribuição normal com média 60 e desvio padrão 8, a que percentil aproximado corresponde o valor 70?",
      o,
      x: "O escore padronizado é z = (70 − 60)/8 = 1,25, e Φ(1,25) ≈ 0,894. O valor 70 está perto do percentil 89: cerca de 89% da distribuição fica abaixo dele.\n\n80 é um palpite sem a padronização. 11 é a fração acima de 70. 70 confunde o valor com o percentil. E 95 corresponde a z ≈ 1,645. Padronizar e consultar Φ é o caminho para qualquer percentil de uma normal.",
      v: { i: () => qualNum(100 * Phi((70 - 60) / 8), o, 0.005) },
    };
  })(),
  (() => {
    const o = ["Q1 = 50 e Q3 = 80", "Q1 = 80 e Q3 = 50", "Q1 = 20 e Q3 = 50", "Q1 = −20 e Q3 = −50", "Q1 = 50 e Q3 = 20"];
    return {
      d: "dificil",
      e: "Uma variável X tem Q1 = 20 e Q3 = 50. Quais são os quartis de Y = 100 − X?",
      o,
      x: "A transformação inverte a ordem: o que era baixo em X fica alto em Y. O terceiro quartil de X vira o primeiro de Y, 100 − 50 = 50, e o primeiro de X vira o terceiro de Y, 100 − 20 = 80. A AIQ continua 30.\n\nQ1 = 80 e Q3 = 50 esquece a inversão da ordem, e deixa Q1 maior que Q3. Q1 = 20 e Q3 = 50 ignora a transformação. Os valores negativos esquecem o 100. E Q1 = 50 e Q3 = 20 só troca a ordem, sem transformar.",
      v: {
        i: () => {
          const x = [10, 15, 25, 30, 40, 45, 55, 60], [q1, , q3] = quartis(x);
          if (q1 !== 20 || q3 !== 50) throw new Error("exemplo errado");
          const [r1, , r3] = quartis(x.map((v) => 100 - v));
          return unicoV(o.map((t) => { const m = t.match(/^Q1 = (\S+) e Q3 = (\S+)$/); return !!m && lerNum(m[1]) === r1 && lerNum(m[2]) === r3; }));
        },
      },
    };
  })(),
  (() => {
    const o = ["60%", "80%", "20%", "40%", "4,5%"];
    return {
      d: "dificil",
      e: "Numa turma, a nota do percentil 80 é 8,5 e a do percentil 20 é 4,0. Aproximadamente que fração dos alunos tirou nota entre 4,0 e 8,5?",
      o,
      x: "Até o percentil 80 ficam cerca de 80% das notas, e até o percentil 20, cerca de 20%. Entre os dois, a diferença: cerca de 60%. Os valores das notas não entram na conta, só as posições que elas marcam.\n\n80% é a fração abaixo de 8,5. 20% é a fração abaixo de 4,0, ou acima de 8,5. 40% soma as duas caudas. E 4,5% subtrai as notas, 8,5 − 4,0, como se fossem porcentagens.",
      v: { i: () => { const notas = grande(12, 2000, (r) => 10 * r), p20 = percentilInc(notas, 0.2), p80 = percentilInc(notas, 0.8); return qualNum(100 * (notas.filter((x) => x > p20 && x < p80).length / notas.length), o, 0.01); } },
    };
  })(),
  (() => {
    const o = ["2", "2,3", "3", "3,3", "1"];
    return {
      d: "dificil",
      e: "Pela convenção da posição p(n + 1), qual é o percentil 30 dos dados 1, 2, 2, 2, 2, 3, 4, 5, 6 e 7?",
      o,
      x: "A posição é 0,3 · (10 + 1) = 3,3: entre o 3º valor e o 4º. Os dois valem 2, e a interpolação dá 2 + 0,3 · (2 − 2) = 2. Com valores repetidos, a interpolação não tem o que ajustar.\n\n2,3 soma a parte decimal da posição ao valor, sem multiplicar pela diferença entre os vizinhos, que é zero. 3 é o sexto valor. 3,3 confunde a posição com o valor. E 1 é o mínimo.",
      v: { i: () => qualNum(percentil([1, 2, 2, 2, 2, 3, 4, 5, 6, 7], 0.3), o) },
    };
  })(),
];

/* leitura de "ln 3", "ln(4/3)", "2 ln 2" etc. pelas funções de Cálculo */
import { lerF } from "./_calculo.mjs";
function lerFracaoSeg(t) { try { return lerF(t)(0); } catch { return NaN; } }
