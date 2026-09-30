/* Rascunho — Estatística / Média, mediana e moda.

   A explicação usa as fórmulas (média ponderada, posição da mediana,
   interpolação); a conferência recalcula sobre a lista de dados: expande
   tabelas de frequência, ordena e conta, e para as afirmações gerais usa
   baterias de conjuntos de dados. Problemas inversos (valor que falta,
   frequência desconhecida) são resolvidos por busca direta. */

import { unicoV, media, mediana, modas, ordena, soma, expande, lerNum, qualNum, lerFracao, bissecao, sorteador } from "./_estatistica.mjs";

export const materia = "estatistica";
export const tema = "Média, mediana e moda";
export const arquivo = "estatistica__media-mediana-e-moda";

/* "3 e 5" → [3, 5]; "4" → [4] */
const lista = (t) => t.split(/\s+e\s+/).map(lerNum);
const mesmaLista = (a, b) => a.length === b.length && a.every((v, k) => Math.abs(v - b[k]) < 1e-9);

export const questoes = [
  /* ------------------------------------------------------------ fáceis --- */
  (() => {
    const o = ["7", "6", "35", "7,5", "5"];
    return {
      d: "facil",
      e: "Qual é a média aritmética dos valores 3, 5, 6, 9 e 12?",
      o,
      x: "A média aritmética é a soma dos valores dividida pela quantidade: (3 + 5 + 6 + 9 + 12)/5 = 35/5 = 7. É o valor que, repetido cinco vezes, daria a mesma soma, o ponto de equilíbrio dos dados.\n\n6 é a mediana, o valor do meio dos dados ordenados. 35 é a soma, sem dividir pela quantidade. 7,5 é a média só dos extremos, (3 + 12)/2. E 5 é a quantidade de valores, e não a média.",
      v: { i: () => qualNum(media([3, 5, 6, 9, 12]), o) },
    };
  })(),
  (() => {
    const o = ["5", "4", "5,4", "9", "2"];
    return {
      d: "facil",
      e: "Qual é a mediana dos valores 2, 9, 4, 7 e 5, apresentados fora de ordem?",
      o,
      x: "A mediana é o valor central depois de ordenar os dados: 2, 4, 5, 7, 9. Com cinco valores, o central é o terceiro, 5. Ordenar é o passo que não pode ser pulado.\n\n4 é o terceiro valor da lista original, sem ordenar. 5,4 é a média, 27/5. 9 é o maior valor, e 2, o menor, que só coincidiriam com a mediana em casos muito especiais. Ordenados, dois valores ficam abaixo de 5 e dois acima, como a mediana exige.",
      v: { i: () => qualNum(mediana([2, 9, 4, 7, 5]), o) },
    };
  })(),
  (() => {
    const o = ["8", "5", "3", "6,5", "7"];
    return {
      d: "facil",
      e: "Qual é a moda do conjunto 3, 5, 5, 6, 8, 8, 8, 9?",
      o,
      x: "A moda é o valor que aparece mais vezes. O 8 aparece três vezes, o 5 aparece duas e os demais, uma. A moda é 8.\n\n5 é o segundo valor mais frequente, e não o primeiro. 3 é o número de vezes que o 8 aparece: confunde a moda com a sua frequência. 6,5 é a média, 52/8. E 7 é a mediana, a média dos dois valores centrais, 6 e 8. As três medidas podem ser bem diferentes no mesmo conjunto.",
      v: { i: () => { const m = modas([3, 5, 5, 6, 8, 8, 8, 9]); return m.length === 1 ? qualNum(m[0], o) : -1; } },
    };
  })(),
  (() => {
    const o = ["6", "4", "8", "6,33", "3,5"];
    return {
      d: "facil",
      e: "Qual é a mediana dos valores 1, 3, 4, 8, 10 e 12?",
      o,
      x: "Com uma quantidade par de valores, não há um único valor central: a mediana é a média dos dois centrais. Os dados já estão em ordem, e os centrais são o 3º e o 4º, 4 e 8. A mediana é (4 + 8)/2 = 6.\n\n4 e 8 são os dois centrais, cada um sozinho. 6,33 é a média, 38/6. E 3,5 é a posição da mediana, (n + 1)/2 com n = 6, e não o seu valor: a mediana fica entre a 3ª e a 4ª posição.",
      v: { i: () => qualNum(mediana([1, 3, 4, 8, 10, 12]), o) },
    };
  })(),
  (() => {
    const o = ["11", "13", "10", "13,2", "26"];
    return {
      d: "facil",
      e: "A média de cinco números é 10. Acrescentando o número 16 ao conjunto, qual é a nova média?",
      o,
      x: "A média 10 com cinco números significa soma 5 · 10 = 50. Acrescentando o 16, a soma vai a 66 e a quantidade, a 6. A nova média é 66/6 = 11. O valor novo, acima da média antiga, puxa a média para cima, mas pouco, porque se dilui entre seis números.\n\n13 faz a média entre a média antiga e o valor novo, (10 + 16)/2, como se os dois tivessem o mesmo peso. 10 ignora o valor acrescentado. 13,2 divide a nova soma pela quantidade antiga, 66/5. E 26 soma a média com o novo valor.",
      /* um conjunto concreto com média 10, acrescido de 16 */
      v: { i: () => { const a = [4, 8, 10, 12, 16]; if (media(a) !== 10) throw new Error("conjunto errado"); return qualNum(media([...a, 16]), o); } },
    };
  })(),
  (() => {
    const o = ["Azul", "Verde", "Vermelho", "3", "Não há moda em dados qualitativos"];
    return {
      d: "facil",
      e: "Numa enquete sobre cor preferida, as respostas foram: azul, verde, azul, vermelho, verde e azul. Qual é a moda?",
      o,
      x: "A moda é a categoria mais frequente: azul aparece três vezes, verde duas e vermelho uma. A moda é azul. Das três medidas de tendência central, a moda é a única que faz sentido para dados qualitativos nominais, como cores, que não têm ordem nem permitem contas.\n\nVerde é a segunda categoria mais frequente. Vermelho é a menos frequente. 3 é a frequência da moda, e não a moda. E dados qualitativos têm moda, sim; o que não têm é média.",
      v: { i: () => { const m = modas(["azul", "verde", "azul", "vermelho", "verde", "azul"]); return unicoV(o.map((t) => m.length === 1 && t.toLowerCase() === m[0])); } },
    };
  })(),
  (() => {
    const o = ["A média", "A mediana", "A moda", "Nenhuma delas", "As três igualmente"];
    return {
      d: "facil",
      e: "Qual medida de tendência central é mais afetada quando se acrescenta um valor extremo, muito maior que os demais?",
      o,
      x: "A média usa o valor de todos os dados, e um valor extremo entra inteiro na soma: acrescentar 100 a 2, 3, 3, 4 e 5 leva a média de 3,4 a 19,5. A mediana só depende da posição central, e a moda, das repetições; nenhuma das duas se move muito com um único valor extremo, que é por isso chamado de atípico.\n\nA mediana, nesse exemplo, passa de 3 para 3,5. A moda continua 3. Nenhuma delas e as três igualmente contradizem o exemplo.",
      /* bateria: variação de cada medida ao acrescentar um valor extremo */
      v: {
        i: () => {
          const conjuntos = [[2, 3, 3, 4, 5], [10, 12, 12, 13, 15, 16], [1, 1, 2, 3, 4, 5, 5, 5]];
          const variacao = (f) => conjuntos.map((a) => Math.abs(f([...a, 1000]) - f(a)));
          const medida = { "A média": variacao(media), "A mediana": variacao(mediana), "A moda": variacao((a) => modas(a)[0]) };
          const maior = conjuntos.map((_, k) => Object.entries(medida).sort((p, q) => q[1][k] - p[1][k])[0][0]);
          return unicoV(o.map((t) => maior.every((m) => m === t)));
        },
      },
    };
  })(),
  (() => {
    const o = ["7,2", "7", "36", "6,8", "14"];
    return {
      d: "facil",
      e: "Um aluno tirou 6 numa prova de peso 2 e 8 numa prova de peso 3. Qual é a sua média ponderada?",
      o,
      x: "Na média ponderada, cada nota é multiplicada pelo seu peso, e a soma é dividida pela soma dos pesos: (6 · 2 + 8 · 3)/(2 + 3) = (12 + 24)/5 = 36/5 = 7,2. A nota de peso maior, 8, puxa a média para o seu lado.\n\n7 é a média simples, que ignora os pesos. 36 é a soma ponderada, sem dividir pela soma dos pesos. 6,8 troca os pesos: (6 · 3 + 8 · 2)/5. E 14 é a soma das notas.",
      /* a média ponderada é a média simples da lista com cada nota repetida conforme o peso */
      v: { i: () => qualNum(media(expande([6, 8], [2, 3])), o) },
    };
  })(),
  (() => {
    const o = ["7", "6,5", "6,57", "5", "9"];
    return {
      d: "facil",
      e: "Qual é a mediana do conjunto 5, 5, 6, 7, 7, 7, 9?",
      o,
      x: "Os sete valores já estão em ordem, e o central é o 4º: 5, 5, 6, 7, 7, 7, 9. A mediana é 7. Valores repetidos contam cada um na sua posição; não se apagam as repetições antes de achar o meio.\n\n6,5 calcula a mediana só dos valores distintos, 5, 6, 7 e 9. 6,57 é a média, 46/7. 5 é o menor valor, e 9, o maior. Aqui mediana e moda coincidem, as duas iguais a 7.",
      v: { i: () => qualNum(mediana([5, 5, 6, 7, 7, 7, 9]), o) },
    };
  })(),
  (() => {
    const o = ["5", "45", "4,5", "9", "10"];
    return {
      d: "facil",
      e: "Qual é a média aritmética dos números inteiros de 1 a 9?",
      o,
      x: "A soma de 1 a 9 é 45, e há 9 números: a média é 45/9 = 5. Em qualquer sequência de números igualmente espaçados, a média é igual à média do primeiro com o último: (1 + 9)/2 = 5, que também é a mediana.\n\n45 é a soma, sem dividir. 4,5 divide a soma por 10, como se houvesse dez números. 9 é a quantidade de números, ou o maior deles. E 10 é a soma do primeiro com o último, sem dividir por 2.",
      v: { i: () => qualNum(media([1, 2, 3, 4, 5, 6, 7, 8, 9]), o) },
    };
  })(),
  (() => {
    const o = ["3 e 5", "4", "3", "5", "Não há moda"];
    return {
      d: "facil",
      e: "Qual é a moda do conjunto 2, 3, 3, 4, 5, 5, 6?",
      o,
      x: "O 3 e o 5 aparecem duas vezes cada, e os outros valores, uma. As duas categorias empatam na maior frequência, e o conjunto é bimodal: as modas são 3 e 5.\n\n4 é a mediana e também a média, 28/7. 3 sozinho e 5 sozinho esquecem o empate: não há razão para escolher um deles. E há moda, sim: não haveria se todos os valores aparecessem o mesmo número de vezes.",
      v: { i: () => { const m = modas([2, 3, 3, 4, 5, 5, 6]); return unicoV(o.map((t) => (/^Não há/.test(t) ? m.length === 0 : mesmaLista(lista(t), m)))); } },
    };
  })(),
  (() => {
    const o = ["11", "12", "12,5", "36", "1"];
    return {
      d: "facil",
      e: "A média de três números é 12, e dois deles são 10 e 15. Qual é o terceiro número?",
      o,
      x: "Média 12 com três números significa soma 3 · 12 = 36. Os dois conhecidos somam 25, e o terceiro é 36 − 25 = 11. Conferindo: (10 + 15 + 11)/3 = 12.\n\n12 supõe que o terceiro número é a própria média. 12,5 é a média dos dois conhecidos, (10 + 15)/2. 36 é a soma dos três, e não o número que falta. E 1 subtrai a média de cada número conhecido e soma os desvios, 10 − 12 + 15 − 12, sem completar a conta, que daria 11.",
      /* busca direta do terceiro valor */
      v: { i: () => qualNum(bissecao((x) => media([10, 15, x]) - 12, -100, 100), o) },
    };
  })(),

  /* ------------------------------------------------------------ médias --- */
  (() => {
    const o = ["2,25", "2,5", "5", "11,25", "3"];
    return {
      d: "media",
      e: "Numa tabela de frequências, os valores 1, 2, 3 e 4 aparecem, respectivamente, 5, 8, 4 e 3 vezes. Qual é a média?",
      o,
      x: "Cada valor pesa pela sua frequência: (1 · 5 + 2 · 8 + 3 · 4 + 4 · 3)/(5 + 8 + 4 + 3) = (5 + 16 + 12 + 12)/20 = 45/20 = 2,25.\n\n2,5 é a média simples dos valores 1, 2, 3 e 4, que ignora as frequências. 5 é a média das frequências. 11,25 divide a soma ponderada por 4, o número de valores distintos, e não por 20. E 3 é um palpite pelo meio da tabela.",
      v: { i: () => qualNum(media(expande([1, 2, 3, 4], [5, 8, 4, 3])), o) },
    };
  })(),
  (() => {
    const o = ["2", "2,5", "2,25", "8", "10,5"];
    return {
      d: "media",
      e: "Na tabela em que os valores 1, 2, 3 e 4 têm frequências 5, 8, 4 e 3, qual é a mediana?",
      o,
      x: "São 20 observações, e a mediana é a média da 10ª e da 11ª, depois de ordenar. Pelas frequências acumuladas, as posições de 1 a 5 têm o valor 1, e as de 6 a 13, o valor 2. A 10ª e a 11ª são ambas 2, e a mediana é 2.\n\n2,5 é a mediana dos valores distintos, sem as frequências. 2,25 é a média. 8 é a maior frequência, e não um valor da variável. E 10,5 é a posição central, (20 + 1)/2, e não o valor que está nela.",
      v: { i: () => qualNum(mediana(expande([1, 2, 3, 4], [5, 8, 4, 3])), o) },
    };
  })(),
  (() => {
    const o = ["2", "8", "4", "2,25", "1"];
    return {
      d: "media",
      e: "Na mesma tabela, com valores 1, 2, 3 e 4 e frequências 5, 8, 4 e 3, qual é a moda?",
      o,
      x: "A moda é o valor de maior frequência: o 2, que aparece 8 vezes. Numa tabela, basta procurar a maior frequência e ler o valor correspondente.\n\n8 é a própria maior frequência, e não o valor. 4 é o maior valor da variável, sem relação com a frequência. 2,25 é a média. E 1 é o primeiro valor da tabela. Aqui, moda e mediana coincidem em 2, enquanto a média, puxada pelos valores 3 e 4, fica um pouco acima.",
      v: { i: () => { const m = modas(expande([1, 2, 3, 4], [5, 8, 4, 3])); return m.length === 1 ? qualNum(m[0], o) : -1; } },
    };
  })(),
  (() => {
    const o = ["14", "15", "10", "140", "16"];
    return {
      d: "media",
      e: "Dados agrupados em classes [0, 10), [10, 20) e [20, 30) têm frequências 3, 5 e 2. Usando os pontos médios, qual é a média estimada?",
      o,
      x: "Com dados agrupados, cada classe é representada pelo seu ponto médio: 5, 15 e 25. A média é (5 · 3 + 15 · 5 + 25 · 2)/(3 + 5 + 2) = (15 + 75 + 50)/10 = 140/10 = 14. É uma estimativa, porque os valores exatos dentro das classes não são conhecidos.\n\n15 é o ponto médio da classe mais frequente, e não a média. 10 é o limite entre as duas primeiras classes. 140 é a soma ponderada, sem dividir por 10. E 16 usa os limites superiores menos 4, sem critério.",
      v: { i: () => qualNum(media(expande([5, 15, 25], [3, 5, 2])), o) },
    };
  })(),
  (() => {
    const o = ["17 e 15", "17 e 10", "12 e 15", "60 e 50", "17 e 17"];
    return {
      d: "media",
      e: "Um conjunto tem média 12 e mediana 10. Somando 5 a cada valor, quais são a nova média e a nova mediana, nessa ordem?",
      o,
      x: "Somar uma constante a todos os valores desloca todo o conjunto: a média e a mediana aumentam exatamente 5. A nova média é 12 + 5 = 17, e a nova mediana, 10 + 5 = 15. A ordem dos valores não muda, e o do meio continua sendo o mesmo, só que 5 unidades acima.\n\n17 e 10 esquece que a mediana também se desloca. 12 e 15 esquece que a média se desloca. 60 e 50 multiplica por 5 em vez de somar. E 17 e 17 supõe que média e mediana passam a coincidir.",
      /* conjuntos concretos com média 12 e mediana 10, deslocados de 5 */
      v: {
        i: () => {
          const bateria = [[5, 10, 21], [2, 8, 10, 12, 28], [6, 7, 10, 10, 15, 24]].filter((a) => media(a) === 12 && mediana(a) === 10);
          if (bateria.length !== 3) throw new Error("bateria errada");
          const r = bateria.map((a) => `${media(a.map((x) => x + 5))} e ${mediana(a.map((x) => x + 5))}`);
          if (new Set(r).size !== 1) throw new Error("depende do conjunto");
          return unicoV(o.map((t) => mesmaLista(lista(t), lista(r[0]))));
        },
      },
    };
  })(),
  (() => {
    const o = ["24", "8", "11", "8/3", "72"];
    return {
      d: "media",
      e: "A média de um conjunto de números é 8. Multiplicando cada número por 3, qual passa a ser a média?",
      o,
      x: "Multiplicar todos os valores por uma constante multiplica a soma pela mesma constante, e a quantidade não muda: a média também fica multiplicada por 3. A nova média é 8 · 3 = 24. O mesmo acontece com a mediana e com a moda.\n\n8 supõe que a média não muda. 11 soma 3 em vez de multiplicar. 8/3 divide em vez de multiplicar. E 72 multiplica por 9, como se o efeito fosse ao quadrado, o que acontece com a variância, e não com a média.",
      v: { i: () => { const r = [[4, 8, 12], [1, 7, 16], [8, 8, 8, 8]].map((a) => media(a.map((x) => 3 * x))); if (new Set(r).size !== 1) throw new Error("depende"); return qualNum(r[0], o); } },
    };
  })(),
  (() => {
    const o = ["7,2", "7", "7,5", "360", "6,8"];
    return {
      d: "media",
      e: "Numa escola, uma turma de 20 alunos tem média 6 e outra, de 30 alunos, tem média 8. Qual é a média dos 50 alunos juntos?",
      o,
      x: "A média conjunta pondera cada média pelo tamanho da turma: (20 · 6 + 30 · 8)/(20 + 30) = (120 + 240)/50 = 360/50 = 7,2. A turma maior puxa o resultado para perto da sua média.\n\n7 é a média simples das duas médias, que só serviria se as turmas tivessem o mesmo tamanho. 7,5 é um palpite. 360 é a soma de todas as notas, sem dividir por 50. E 6,8 troca os tamanhos das turmas.",
      /* duas turmas concretas com essas médias, juntadas */
      v: { i: () => { const a = [...Array(10).fill(5), ...Array(10).fill(7)], b = [...Array(15).fill(7), ...Array(15).fill(9)]; if (media(a) !== 6 || media(b) !== 8) throw new Error("turmas erradas"); return qualNum(media([...a, ...b]), o); } },
    };
  })(),
  (() => {
    const o = ["Média ≈ 8,14 mil e mediana 3 mil", "Média 3 mil e mediana ≈ 8,14 mil", "Média e mediana iguais a 3 mil", "Média ≈ 8,14 mil e mediana 40 mil", "Média 57 mil e mediana 3 mil"];
    return {
      d: "media",
      e: "Numa pequena empresa, os salários mensais, em milhares de reais, são 2, 2, 3, 3, 3, 4 e 40. Quais são a média e a mediana?",
      o,
      x: "A média é 57/7 ≈ 8,14 mil reais, e a mediana, o 4º dos sete valores ordenados, é 3 mil. O salário de 40 mil, muito acima dos outros, puxa a média para cima: seis dos sete funcionários ganham menos que ela. Por isso a mediana costuma representar melhor o salário típico.\n\nTrocar média e mediana inverte os papéis. Média e mediana iguais a 3 mil ignoram o efeito do valor extremo na média. Mediana 40 mil toma o maior valor como central. E média 57 mil é a soma, sem dividir por 7.",
      v: {
        i: () => {
          const a = [2, 2, 3, 3, 3, 4, 40], m = media(a), me = mediana(a);
          const le = (t) => { const r = t.match(/^Média (?:≈ )?([\d,]+)(?: mil)? e mediana (?:≈ )?([\d,]+) mil$/); return r ? [lerNum(r[1]), lerNum(r[2])] : null; };
          const par = (t) => (/^Média e mediana iguais a ([\d,]+) mil$/.test(t) ? [lerNum(t.match(/([\d,]+) mil$/)[1]), lerNum(t.match(/([\d,]+) mil$/)[1])] : le(t));
          return unicoV(o.map((t) => { const p = par(t); return !!p && Math.abs(p[0] - m) < 0.006 && Math.abs(p[1] - me) < 1e-9; }));
        },
      },
    };
  })(),
  (() => {
    const o = ["12", "10", "38", "9", "11"];
    return {
      d: "media",
      e: "Os números 3, 8, x, 12 e 15 estão em ordem crescente e têm média 10. Qual é o valor de x?",
      o,
      x: "Média 10 com cinco números significa soma 50. Os quatro conhecidos somam 3 + 8 + 12 + 15 = 38, e x = 50 − 38 = 12. O valor respeita a ordem dada, porque 8 ≤ 12 ≤ 12. Repetir o valor vizinho não quebra a ordem crescente.\n\n10 supõe que o valor do meio é a própria média. 38 é a soma dos conhecidos, e não x. 9 e 11 são palpites entre os vizinhos 8 e 12; com eles, a média seria 9,4 ou 9,8.",
      v: { i: () => { const x = bissecao((v) => media([3, 8, v, 12, 15]) - 10, -100, 100); if (!(x >= 8 && x <= 12)) throw new Error("fora da ordem"); return qualNum(x, o); } },
    };
  })(),
  (() => {
    const o = ["[5, 10)", "[10, 15)", "[0, 5)", "9", "7,5"];
    return {
      d: "media",
      e: "Uma tabela agrupada tem as classes [0, 5), [5, 10) e [10, 15), com frequências 4, 9 e 6. Qual é a classe modal?",
      o,
      x: "A classe modal é a de maior frequência: [5, 10), com 9 observações. Em dados agrupados, a moda se localiza nessa classe; um valor exato exigiria uma fórmula de interpolação, como a de Czuber.\n\n[10, 15) é a segunda classe mais frequente. [0, 5) é a menos frequente. 9 é a frequência da classe modal, e não a classe. E 7,5 é o ponto médio da classe modal, que serve de estimativa grosseira da moda, mas não é a classe pedida.",
      v: { i: () => { const f = [4, 9, 6], rot = ["[0, 5)", "[5, 10)", "[10, 15)"]; return unicoV(o.map((t) => t === rot[f.indexOf(Math.max(...f))])); } },
    };
  })(),
  (() => {
    const o = ["Continua 20", "Aumenta", "Diminui", "Passa a 50,5", "Não dá para saber"];
    return {
      d: "media",
      e: "Oito números inteiros distintos, todos entre 10 e 30, têm mediana 20. Acrescentando os números 1 e 100, o que acontece com a mediana?",
      o,
      x: "Com os oito valores ordenados, a mediana é a média do 4º e do 5º. O 1 entra abaixo de todos e o 100 acima de todos, porque os oito estão entre 10 e 30. Com dez valores, a mediana é a média do 5º e do 6º, que são exatamente o antigo 4º e o antigo 5º: a mediana continua 20. A média, ao contrário, muda.\n\nAumentar ou diminuir exigiria que os novos valores entrassem do mesmo lado. 50,5 é a média de 1 e 100. E dá para saber, sim: a posição dos novos valores está garantida pelo enunciado.",
      /* bateria de conjuntos sorteados com as condições do enunciado */
      v: {
        i: () => {
          const rnd = sorteador(7), conjuntos = [];
          while (conjuntos.length < 40) { const s = new Set(); while (s.size < 8) s.add(10 + Math.floor(rnd() * 21)); const a = ordena([...s]); if (mediana(a) === 20) conjuntos.push(a); }
          const depois = conjuntos.map((a) => mediana([...a, 1, 100]));
          const afirma = { "Continua 20": depois.every((m) => m === 20), "Aumenta": depois.every((m) => m > 20), "Diminui": depois.every((m) => m < 20), "Passa a 50,5": depois.every((m) => m === 50.5), "Não dá para saber": new Set(depois).size > 1 };
          return unicoV(o.map((t) => afirma[t]));
        },
      },
    };
  })(),
  (() => {
    const o = ["24", "1", "15", "14", "29"];
    return {
      d: "media",
      e: "A média de dez números é 15. Retirando um deles, a média dos nove restantes passa a 14. Qual número foi retirado?",
      o,
      x: "Os dez números somam 10 · 15 = 150, e os nove restantes, 9 · 14 = 126. O número retirado é a diferença: 150 − 126 = 24. Faz sentido que ele esteja acima da média: tirá-lo fez a média cair. Quem sai acima da média puxa a média para baixo; quem sai abaixo, para cima.\n\n1 é a diferença entre as médias, 15 − 14. 15 e 14 são as próprias médias. E 29 soma as médias, sem usar as quantidades.",
      v: { i: () => qualNum(bissecao((x) => (150 - x) / 9 - 14, -1000, 1000), o) },
    };
  })(),
  (() => {
    const o = ["48 km/h", "50 km/h", "100 km/h", "49 km/h", "24 km/h"];
    return {
      d: "media",
      e: "Um carro vai de uma cidade a outra a 60 km/h e volta pelo mesmo caminho a 40 km/h. Qual é a velocidade média na viagem completa?",
      o,
      x: "Velocidade média é a distância total dividida pelo tempo total. Com a distância d em cada sentido, os tempos são d/60 e d/40, e a média é 2d/(d/60 + d/40) = 2/(1/60 + 1/40) = 48 km/h. É a média harmônica das velocidades, e fica abaixo de 50 porque o carro passa mais tempo no trecho lento.\n\n50 km/h é a média aritmética das velocidades, que só valeria com tempos iguais nos dois trechos. 100 km/h soma as velocidades. 49 km/h é um palpite entre as duas médias. E 24 km/h é a metade da resposta certa.",
      /* simulação com uma distância qualquer: 120 km em cada sentido */
      v: { i: () => { const d = 120, t = d / 60 + d / 40; return qualNum((2 * d) / t, o); } },
    };
  })(),
  (() => {
    const o = ["≈ 14,9%", "15%", "30%", "32%", "≈ 16,2%"];
    return {
      d: "media",
      e: "Uma aplicação rendeu 10% num ano e 20% no seguinte. Qual taxa anual constante daria o mesmo resultado nos dois anos?",
      o,
      x: "Os fatores de crescimento se multiplicam: 1,10 · 1,20 = 1,32. A taxa constante r precisa dar (1 + r)² = 1,32, ou 1 + r = √1,32 ≈ 1,149, isto é, r ≈ 14,9%. É a média geométrica dos fatores, e fica um pouco abaixo da média aritmética das taxas.\n\n15% é a média aritmética das taxas; com ela, o resultado seria 1,15² = 1,3225, um pouco acima de 1,32. 30% soma as taxas. 32% é o crescimento total nos dois anos. E 16,2% não vem de nenhuma conta com esses dados.",
      /* a taxa constante é achada por bisseção, comparando o crescimento em dois anos */
      v: { i: () => qualNum(100 * bissecao((r) => (1 + r) ** 2 - 1.1 * 1.2, 0, 1), o, 0.004) },
    };
  })(),
  (() => {
    const o = ["Moda < mediana < média", "Média < mediana < moda", "Média = mediana = moda", "Mediana < moda < média", "Moda < média < mediana"];
    return {
      d: "media",
      e: "Numa distribuição com assimetria à direita, com uma cauda longa de valores altos, qual é a ordem usual das medidas de tendência central?",
      o,
      x: "A cauda de valores altos puxa a média para a direita, porque ela usa o valor de todos os dados. A mediana, que depende só da posição, se desloca menos, e a moda fica no pico, à esquerda. A ordem usual é moda < mediana < média. É o caso típico de renda e de tempo de espera.\n\nA ordem inversa ocorre na assimetria à esquerda. A igualdade das três é típica de distribuições simétricas e unimodais. As outras duas ordens misturam as posições, e não aparecem nesse tipo de distribuição.",
      /* bateria de distribuições com cauda à direita */
      v: {
        i: () => {
          const bateria = [expande([1, 2, 3, 4, 5, 8, 12], [5, 9, 6, 4, 2, 1, 1]), expande([10, 20, 30, 50, 90], [12, 8, 6, 3, 1]), [1, 1, 1, 2, 2, 3, 4, 6, 9, 15]];
          const ordem = (a) => { const mo = modas(a)[0], me = mediana(a), mu = media(a); return { mo, me, mu }; };
          const rel = { "Moda < mediana < média": ({ mo, me, mu }) => mo < me && me < mu, "Média < mediana < moda": ({ mo, me, mu }) => mu < me && me < mo, "Média = mediana = moda": ({ mo, me, mu }) => mo === me && me === mu, "Mediana < moda < média": ({ mo, me, mu }) => me < mo && mo < mu, "Moda < média < mediana": ({ mo, me, mu }) => mo < mu && mu < me };
          return unicoV(o.map((t) => bateria.every((a) => rel[t](ordem(a)))));
        },
      },
    };
  })(),
  (() => {
    const o = ["6", "4", "3", "8", "2"];
    return {
      d: "media",
      e: "Quantos números iguais a 20 precisam ser acrescentados ao conjunto {4, 8, 12} para que a média passe a ser 16?",
      o,
      x: "Com k números iguais a 20, a soma fica 24 + 20k e a quantidade, 3 + k. A condição é (24 + 20k)/(3 + k) = 16, isto é, 24 + 20k = 48 + 16k, ou 4k = 24, e k = 6. Conferindo: (24 + 120)/9 = 144/9 = 16.\n\n4 dá média 104/7 ≈ 14,9. 3 dá 84/6 = 14. 8 dá 184/11 ≈ 16,7, passando do alvo. E 2 dá 64/5 = 12,8. Cada número 20 acrescentado aproxima a média de 20, sem nunca chegar lá.",
      /* busca direta pelo número de acréscimos */
      v: { i: () => { const k = [...Array(50).keys()].find((j) => Math.abs(media([4, 8, 12, ...Array(j).fill(20)]) - 16) < 1e-12); return qualNum(k, o); } },
    };
  })(),
  (() => {
    const o = ["17", "16", "16,5", "25,5", "18"];
    return {
      d: "media",
      e: "As idades de 51 estudantes estão numa tabela: 15 anos (10 estudantes), 16 anos (14), 17 anos (18) e 18 anos (9). Qual é a mediana das idades?",
      o,
      x: "Com 51 observações, a mediana é a 26ª, depois de ordenar. Pelas frequências acumuladas, as posições de 1 a 10 têm 15 anos, de 11 a 24 têm 16 anos e de 25 a 42 têm 17 anos. A 26ª está nesse último grupo: a mediana é 17 anos.\n\n16 é a idade da 24ª posição, erro de contagem na acumulada. 16,5 é a média das idades distintas centrais, 16 e 17, sem as frequências. 25,5 é a metade de 51, confundida com a mediana. E 18 é a idade mais alta.",
      v: { i: () => qualNum(mediana(expande([15, 16, 17, 18], [10, 14, 18, 9])), o) },
    };
  })(),
  (() => {
    const o = ["6,6", "7", "7,4", "14", "5,4"];
    return {
      d: "media",
      e: "A nota final de uma disciplina pondera a prova em 60% e o trabalho em 40%. Com 5 na prova e 9 no trabalho, qual é a nota final?",
      o,
      x: "Com pesos em porcentagem, a média ponderada é 0,6 · 5 + 0,4 · 9 = 3 + 3,6 = 6,6. Os pesos já somam 100%, e não é preciso dividir por mais nada. A nota fica mais perto de 5 porque a prova pesa mais.\n\n7 é a média simples, que ignora os pesos. 7,4 troca os pesos: 0,4 · 5 + 0,6 · 9. 14 soma as notas. E 5,4 fica só com a parcela 0,6 · 9, misturando o peso de uma nota com a outra.",
      v: { i: () => qualNum(media(expande([5, 9], [60, 40])), o) },
    };
  })(),
  (() => {
    const o = ["4, 4, 5, 8, 9", "4, 5, 6, 7, 8", "4, 4, 6, 8, 8", "5, 5, 6, 6, 8", "4, 4, 5, 6, 6"];
    return {
      d: "media",
      e: "Qual dos conjuntos tem, ao mesmo tempo, média 6, mediana 5 e moda 4?",
      o,
      x: "Em 4, 4, 5, 8, 9: a soma é 30, e a média, 30/5 = 6; o valor central é 5; e o 4 é o único que se repete, a moda. As três condições valem.\n\n4, 5, 6, 7, 8 tem média 6, mas mediana 6 e nenhuma moda. 4, 4, 6, 8, 8 tem média 6, mas mediana 6 e duas modas, 4 e 8. 5, 5, 6, 6, 8 tem média 6, mas mediana 6 e modas 5 e 6. E 4, 4, 5, 6, 6 tem mediana 5, mas média 5 e duas modas.",
      v: { i: () => unicoV(o.map((t) => { const a = t.split(", ").map(Number), m = modas(a); return media(a) === 6 && mediana(a) === 5 && m.length === 1 && m[0] === 4; })) },
    };
  })(),
  (() => {
    const o = ["29,1", "30,9", "30", "21", "39"];
    return {
      d: "media",
      e: "A média de dez números é 30, mas um deles foi digitado como 54 quando o certo era 45. Qual é a média correta?",
      o,
      x: "A soma registrada é 10 · 30 = 300. Trocar o 54 pelo 45 diminui a soma em 9, que passa a 291. A média correta é 291/10 = 29,1. O erro de 9 unidades num valor muda a média em 9/10.\n\n30,9 soma a diferença em vez de subtrair. 30 ignora a correção. 21 subtrai 9 da média, sem dividir pela quantidade. E 39 soma 9 à média, sem dividir e com o sinal errado.",
      v: { i: () => { const a = [54, ...Array(9).fill(246 / 9)]; if (Math.abs(media(a) - 30) > 1e-9) throw new Error("conjunto errado"); return qualNum(media([45, ...a.slice(1)]), o); } },
    };
  })(),
  (() => {
    const o = ["51", "50", "2550", "101", "25,5"];
    return {
      d: "media",
      e: "Qual é a média aritmética dos números pares de 2 a 100?",
      o,
      x: "Os pares de 2 a 100 formam uma progressão aritmética de 50 termos. A média de números igualmente espaçados é a média do primeiro com o último: (2 + 100)/2 = 51. A soma é 50 · 51 = 2550.\n\n50 é a quantidade de termos. 2550 é a soma, sem dividir. 101 é 1 + 100, a soma dos extremos de 1 a 100, sem dividir por 2 e usando o 1, que nem é par. E 25,5 divide a média por 2 sem motivo.",
      v: { i: () => qualNum(media([...Array(50).keys()].map((k) => 2 * (k + 1))), o) },
    };
  })(),
  (() => {
    const o = ["50,5", "50", "51", "5050", "25,25"];
    return {
      d: "media",
      e: "Qual é a mediana dos 100 primeiros números inteiros positivos, de 1 a 100?",
      o,
      x: "Com 100 valores, a mediana é a média do 50º e do 51º, depois de ordenar. Os números já estão em ordem, e esses termos são 50 e 51: a mediana é (50 + 51)/2 = 50,5. Como os valores são igualmente espaçados, a média também é 50,5.\n\n50 e 51 são os dois centrais, cada um sozinho. 5050 é a soma de 1 a 100. E 25,25 é a metade da mediana, sem motivo.",
      v: { i: () => qualNum(mediana([...Array(100).keys()].map((k) => k + 1)), o) },
    };
  })(),
  (() => {
    const o = ["11", "10", "2", "22", "7"];
    return {
      d: "media",
      e: "A média de cinco números é 8, e a média dos três primeiros é 6. Qual é a média dos dois últimos?",
      o,
      x: "Os cinco somam 5 · 8 = 40, e os três primeiros, 3 · 6 = 18. Os dois últimos somam 40 − 18 = 22, e a sua média é 22/2 = 11. Faz sentido que fique acima de 8, para compensar os três primeiros, abaixo de 8.\n\n10 extrapola a diferença entre as médias, 8 + 2. 2 é a diferença entre as médias. 22 é a soma dos dois últimos, sem dividir. E 7 faz a média entre 6 e 8.",
      v: { i: () => { const a = [5, 6, 7], b = [10, 12]; if (media([...a, ...b]) !== 8 || media(a) !== 6) throw new Error("exemplo errado"); return qualNum(media(b), o); } },
    };
  })(),
  (() => {
    const o = ["68 °F", "36 °F", "52 °F", "20 °F", "−6,7 °F"];
    return {
      d: "media",
      e: "A temperatura média de uma semana foi 20 °C. Convertendo cada medida para Fahrenheit, com F = 1,8 · C + 32, qual é a média em °F?",
      o,
      x: "Uma transformação do tipo F = a · C + b aplicada a todos os valores transforma a média da mesma maneira: a média em °F é 1,8 · 20 + 32 = 36 + 32 = 68 °F. Não é preciso converter cada medida, basta converter a média.\n\n36 °F multiplica por 1,8, mas esquece de somar 32. 52 °F soma 32, mas esquece de multiplicar. 20 °F não converte. E −6,7 °F aplica a conversão inversa, (20 − 32)/1,8, de Fahrenheit para Celsius.",
      v: { i: () => { const c = [14, 18, 19, 20, 21, 23, 25]; if (media(c) !== 20) throw new Error("semana errada"); return qualNum(media(c.map((t) => 1.8 * t + 32)), o); } },
    };
  })(),
  (() => {
    const o = ["x + 4", "x + 20", "5x + 20", "x + 5", "x"];
    return {
      d: "media",
      e: "Qual é a média aritmética dos cinco números x, x + 2, x + 4, x + 6 e x + 8?",
      o,
      x: "A soma é 5x + (0 + 2 + 4 + 6 + 8) = 5x + 20, e a média, (5x + 20)/5 = x + 4. Como os números são igualmente espaçados, a média é o termo do meio, x + 4, que também é a mediana.\n\nx + 20 esquece de dividir o 20 por 5. 5x + 20 é a soma, sem dividir. x + 5 usa o número de termos no lugar do deslocamento médio. E x é só o primeiro termo. Conferindo com x = 1: os números 1, 3, 5, 7 e 9 têm média 5 = 1 + 4.",
      v: { i: () => unicoV(o.map((t) => [0, 1.5, -3, 10].every((x) => { const alvo = media([x, x + 2, x + 4, x + 6, x + 8]); return Math.abs(lerFracao(t.replace(/x/g, `(${x})`)) - alvo) < 1e-9; }))) },
    };
  })(),
  (() => {
    const o = ["10", "7", "9", "8", "28"];
    return {
      d: "media",
      e: "Um aluno tem notas 5, 7 e 6. Que nota ele precisa tirar na quarta prova para ficar com média 7?",
      o,
      x: "Média 7 em quatro provas exige soma 4 · 7 = 28. As três primeiras somam 18, e a quarta precisa ser 28 − 18 = 10. Conferindo: (5 + 7 + 6 + 10)/4 = 7.\n\n7 supõe que basta tirar a média desejada. 9 e 8 ficam abaixo do necessário: dariam médias 6,75 e 6,5. A nota que falta sempre sai da soma exigida menos o que já foi obtido. E 28 é a soma necessária, e não a nota da quarta prova.",
      v: { i: () => qualNum(bissecao((x) => media([5, 7, 6, x]) - 7, -100, 100), o) },
    };
  })(),
  (() => {
    const o = ["Média > mediana > moda", "Média = mediana = moda", "Moda > mediana > média", "Mediana > média", "Não há moda"];
    return {
      d: "media",
      e: "Para os dados 1, 1, 2, 3 e 8, qual relação entre as medidas de tendência central é verdadeira?",
      o,
      x: "A moda é 1, o valor repetido. A mediana é 2, o terceiro dos cinco valores. A média é 15/5 = 3. Então média > mediana > moda: o valor 8, bem acima dos outros, puxa a média para cima, típico de assimetria à direita.\n\nA igualdade das três valeria para dados simétricos. A ordem inversa seria a de uma cauda à esquerda. Mediana maior que a média contradiz o cálculo. E há moda, sim: o 1 se repete.",
      v: {
        i: () => {
          const a = [1, 1, 2, 3, 8], mo = modas(a), me = mediana(a), mu = media(a);
          const afirma = { "Média > mediana > moda": mo.length === 1 && mu > me && me > mo[0], "Média = mediana = moda": mo.length === 1 && mu === me && me === mo[0], "Moda > mediana > média": mo.length === 1 && mo[0] > me && me > mu, "Mediana > média": me > mu, "Não há moda": mo.length === 0 };
          return unicoV(o.map((t) => afirma[t]));
        },
      },
    };
  })(),
  (() => {
    const o = ["Há rendas altas que puxam a média para cima", "Metade das pessoas ganha mais de R$ 3.500", "A moda é R$ 3.500", "A distribuição é simétrica", "Ninguém ganha menos de R$ 2.000"];
    return {
      d: "media",
      e: "Numa pesquisa, a renda mediana é R$ 2.000 e a renda média é R$ 3.500. O que se pode concluir?",
      o,
      x: "A média bem acima da mediana indica assimetria à direita: há rendas altas, acima da maioria, que puxam a média para cima sem mover muito a mediana. Metade das pessoas ganha até R$ 2.000, e a maioria ganha menos que a média.\n\nMetade ganha mais que a mediana, e não que a média. A moda não é dada, e em rendas costuma ficar abaixo da mediana. Numa distribuição simétrica, média e mediana seriam próximas. E a mediana de R$ 2.000 diz justamente que metade ganha até esse valor, não que ninguém ganhe menos.",
      /* bateria de rendas com mediana 2000 e média 3500 */
      v: {
        i: () => {
          const bateria = [[1000, 1500, 2000, 2000, 11000], [800, 1200, 1800, 2000, 2200, 2600, 13900], [1500, 2000, 7000]].filter((a) => mediana(a) === 2000 && Math.abs(media(a) - 3500) < 1e-9);
          if (bateria.length !== 3) throw new Error("bateria errada");
          const afirma = {
            "Há rendas altas que puxam a média para cima": bateria.every((a) => Math.max(...a) - mediana(a) > mediana(a) - Math.min(...a)),
            "Metade das pessoas ganha mais de R$ 3.500": bateria.every((a) => a.filter((x) => x > 3500).length >= a.length / 2),
            "A moda é R$ 3.500": bateria.every((a) => modas(a)[0] === 3500),
            "A distribuição é simétrica": bateria.every((a) => Math.abs(media(a) - mediana(a)) < 1e-9),
            "Ninguém ganha menos de R$ 2.000": bateria.every((a) => Math.min(...a) >= 2000),
          };
          return unicoV(o.map((t) => afirma[t]));
        },
      },
    };
  })(),

  /* ---------------------------------------------------------- difíceis --- */
  (() => {
    const o = ["27", "30", "12", "15", "33"];
    return {
      d: "dificil",
      e: "A média de vinte números é 15. Cada número é multiplicado por 2 e, depois, diminuído de 3. Qual é a nova média?",
      o,
      x: "A transformação y = 2x − 3, aplicada a todos os valores, age sobre a média do mesmo jeito: a nova média é 2 · 15 − 3 = 27. A multiplicação muda a escala, e a subtração desloca tudo.\n\n30 esquece de subtrair 3. 12 subtrai 3 e esquece de multiplicar. 15 supõe que a média não muda. E 33 soma 3 em vez de subtrair. A mesma regra vale para a mediana, que também passa a ser 2 · Me − 3.",
      v: { i: () => { const a = [...Array(10).fill(10), ...Array(10).fill(20)]; if (media(a) !== 15) throw new Error("conjunto errado"); return qualNum(media(a.map((x) => 2 * x - 3)), o); } },
    };
  })(),
  (() => {
    const o = ["Depende de como os dados se distribuem", "É sempre 15", "É sempre 10", "É sempre 20", "É sempre 30"];
    return {
      d: "dificil",
      e: "Dois grupos do mesmo tamanho têm medianas 10 e 20. O que se pode dizer da mediana do grupo formado pela união dos dois?",
      o,
      x: "A mediana da união depende de como os valores dos dois grupos se intercalam, e não só das duas medianas. Com os grupos {1, 10, 11} e {19, 20, 21}, a união ordenada é 1, 10, 11, 19, 20, 21, e a mediana é (11 + 19)/2 = 15. Com {10, 10, 10} e {1, 20, 20}, a união é 1, 10, 10, 10, 20, 20, e a mediana é 10. Os mesmos dados de partida levam a respostas diferentes.\n\nPor isso, nenhum valor fixo, como 15, 10, 20 ou 30, vale sempre: cada um só aparece em casos particulares, ou nem isso. Médias se combinam por ponderação, usando os tamanhos dos grupos; medianas, não.",
      /* pares de grupos com essas medianas e medianas da união diferentes */
      v: {
        i: () => {
          const pares = [[[1, 10, 11], [19, 20, 21]], [[10, 10, 10], [1, 20, 20]], [[5, 10, 12], [18, 20, 40]]].filter(([a, b]) => mediana(a) === 10 && mediana(b) === 20);
          if (pares.length !== 3) throw new Error("pares errados");
          const uniao = pares.map(([a, b]) => mediana([...a, ...b]));
          const varia = new Set(uniao).size > 1;
          return unicoV(o.map((t) => (/^Depende/.test(t) ? varia : !varia && uniao[0] === lerNum(t.replace(/^É sempre /, "")))));
        },
      },
    };
  })(),
  (() => {
    const o = ["6", "7,2", "20", "1", "10,5"];
    return {
      d: "dificil",
      e: "Para os dados 1, 2, 6, 7 e 20, qual valor c torna mínima a soma das distâncias |x − c| a todos os dados?",
      o,
      x: "A soma das distâncias absolutas é mínima na mediana. Com c à esquerda da mediana, mais dados ficam à direita do que à esquerda, e mover c para a direita diminui a soma; o equilíbrio está no valor central, 6. A média, 7,2, é o que minimiza a soma dos quadrados das distâncias, outro critério.\n\n7,2 é a média, que responde a outra pergunta. 20 e 1 são os extremos, onde a soma é máxima entre os dados. E 10,5 é o ponto médio entre o menor e o maior valor.",
      /* varredura fina da soma das distâncias */
      v: { i: () => { const a = [1, 2, 6, 7, 20]; let melhor = 0, m = Infinity; for (let k = 0; k <= 200000; k++) { const c = -5 + (30 * k) / 200000, s = soma(a.map((x) => Math.abs(x - c))); if (s < m - 1e-12) { m = s; melhor = c; } } return qualNum(melhor, o, 1e-4); } },
    };
  })(),
  (() => {
    const o = ["x = 7", "x = 6", "x = 8", "x = 4", "Nenhum valor serve"];
    return {
      d: "dificil",
      e: "Para que valor de x a mediana do conjunto {2, 5, 9, x} é igual a 6?",
      o,
      x: "Com quatro valores, a mediana é a média dos dois centrais. Se x ≤ 2, os centrais são 2 e 5, e a mediana é 3,5. Se 2 < x ≤ 5, são x e 5, com mediana (x + 5)/2 < 5. Se 5 < x < 9, são 5 e x, e (5 + x)/2 = 6 dá x = 7. Se x ≥ 9, são 5 e 9, e a mediana é 7. Só x = 7 funciona.\n\nx = 6 supõe que x precisa ser a própria mediana, mas daria (5 + 6)/2 = 5,5. x = 8 daria 6,5. x = 4 daria 4,5. E há um valor, sim: x = 7.",
      /* varredura de x com passo pequeno */
      v: { i: () => { const ok = []; for (let k = -2000; k <= 2000; k++) { const x = k / 100; if (Math.abs(mediana([2, 5, 9, x]) - 6) < 1e-12) ok.push(x); } return unicoV(o.map((t) => (/^Nenhum/.test(t) ? ok.length === 0 : ok.length === 1 && Math.abs(ok[0] - lerNum(t.replace(/^x = /, ""))) < 1e-9))); } },
    };
  })(),
  (() => {
    const o = ["10", "5", "8", "12", "20"];
    return {
      d: "dificil",
      e: "Os valores 1, 2 e 3 aparecem com frequências 4, k e 6, e a média é 2,1. Qual é o valor de k?",
      o,
      x: "A média é (1 · 4 + 2 · k + 3 · 6)/(4 + k + 6) = (22 + 2k)/(10 + k). Igualando a 2,1: 22 + 2k = 21 + 2,1k, e 0,1k = 1, ou k = 10. Conferindo: (22 + 20)/20 = 2,1.\n\nk = 5 dá 32/15 ≈ 2,13. k = 8 dá 38/18 ≈ 2,11. k = 12 dá 46/22 ≈ 2,09. E k = 20 dá 62/30 ≈ 2,07. Como a média se aproxima de 2 quando k cresce, só um valor dá exatamente 2,1. Frequências desconhecidas se acham sempre pela mesma equação da média ponderada.",
      /* busca direta pela frequência */
      v: { i: () => qualNum([...Array(200).keys()].find((k) => Math.abs(media(expande([1, 2, 3], [4, k, 6])) - 2.1) < 1e-12), o) },
    };
  })(),
  (() => {
    const o = ["75 km/h", "83,3 km/h", "66,7 km/h", "150 km/h", "100 km/h"];
    return {
      d: "dificil",
      e: "Um carro percorre 100 km a 50 km/h e, em seguida, 200 km a 100 km/h. Qual é a velocidade média no percurso total?",
      o,
      x: "Distância total: 300 km. Tempo total: 100/50 + 200/100 = 2 + 2 = 4 h. Velocidade média: 300/4 = 75 km/h. Os tempos nos dois trechos são iguais, e por isso o resultado coincide com a média aritmética das velocidades, ponderada pelo tempo.\n\n83,3 km/h pondera as velocidades pelas distâncias, (100 · 50 + 200 · 100)/300, o que não corresponde a nenhuma grandeza física aqui. 66,7 km/h é a média harmônica das duas velocidades, que valeria para distâncias iguais. 150 km/h soma as velocidades. E 100 km/h é a do trecho mais longo.",
      v: { i: () => qualNum(300 / (100 / 50 + 200 / 100), o) },
    };
  })(),
  (() => {
    const o = ["6,4", "8", "9", "12,8", "7,2"];
    return {
      d: "dificil",
      e: "Dois números positivos têm média aritmética 10 e média geométrica 8. Qual é a sua média harmônica?",
      o,
      x: "Com os números a e b: a + b = 20 e ab = 64. A média harmônica é 2ab/(a + b) = 128/20 = 6,4. Vale a relação geral G² = A · H, que dá o mesmo: 64 = 10 · 6,4. Os números são 4 e 16, e a ordem H ≤ G ≤ A se confirma. A igualdade entre as três só aconteceria com os dois números iguais.\n\n8 é a própria média geométrica. 9 é a média entre A e G. 12,8 dobra o resultado. E 7,2 é um palpite entre H e G.",
      /* os números são achados por bisseção a partir da soma e do produto */
      v: { i: () => { const a = bissecao((x) => x * (20 - x) - 64, 0, 10), b = 20 - a; return qualNum(2 / (1 / a + 1 / b), o); } },
    };
  })(),
  (() => {
    const o = ["≈ 23,3", "25", "20", "≈ 26,7", "30"];
    return {
      d: "dificil",
      e: "As classes [0, 10), [10, 20), [20, 30) e [30, 40) têm frequências 5, 10, 15 e 10. Supondo os dados uniformes dentro de cada classe, qual é a mediana?",
      o,
      x: "Com 40 observações, a mediana deixa 20 abaixo dela. As duas primeiras classes acumulam 15, e faltam 5 das 15 da terceira. Supondo uniformidade, a mediana fica 5/15 do caminho dentro de [20, 30): 20 + (5/15) · 10 ≈ 23,3. É a fórmula Me = L + ((n/2 − F)/f) · h.\n\n25 é o ponto médio da classe mediana, sem interpolar. 20 é o limite inferior dessa classe. 26,7 interpola a partir do outro lado, usando 10/15. E 30 é o limite superior.",
      /* distribuição acumulada linear por trechos, invertida por bisseção */
      v: {
        i: () => {
          const lim = [0, 10, 20, 30, 40], f = [5, 10, 15, 10], n = soma(f);
          const F = (x) => { let s = 0; for (let k = 0; k < 4; k++) { if (x >= lim[k + 1]) s += f[k]; else if (x > lim[k]) s += (f[k] * (x - lim[k])) / (lim[k + 1] - lim[k]); } return s; };
          return qualNum(bissecao((x) => F(x) - n / 2, 0, 40), o, 0.002);
        },
      },
    };
  })(),
  (() => {
    const o = ["50", "49", "2500", "51", "25"];
    return {
      d: "dificil",
      e: "Qual é a média aritmética dos 50 primeiros números ímpares positivos, de 1 a 99?",
      o,
      x: "A soma dos n primeiros ímpares é n², e aqui dá 50² = 2500. A média é 2500/50 = 50. Pela simetria da progressão, também é a média do primeiro com o último, (1 + 99)/2 = 50, mesmo sem nenhum ímpar ser igual a 50.\n\n49 e 51 são os ímpares centrais, o 25º e o 26º, cada um sozinho. 2500 é a soma, sem dividir. E 25 é a posição central, e não o valor médio.",
      v: { i: () => qualNum(media([...Array(50).keys()].map((k) => 2 * k + 1)), o) },
    };
  })(),
  (() => {
    const o = ["3", "4", "5", "8", "1"];
    return {
      d: "dificil",
      e: "Cinco números inteiros positivos têm média 10, mediana 12 e moda única 15. Qual é o maior valor possível para o menor deles?",
      o,
      x: "Ordenados, a ≤ b ≤ 12 ≤ d ≤ e, com soma 50. Para 15 ser a moda única, ele precisa aparecer ao menos duas vezes, e só cabe acima da mediana: d = e = 15. Então a + b = 50 − 12 − 30 = 8. Se a = b = 4, o 4 também apareceria duas vezes, e a moda não seria única; logo a < b, e o maior a possível é 3, com b = 5.\n\n4 empata a moda com o 15. 5 e 8 obrigariam b a ser 3 ou 0, menor que a ou fora dos positivos. E 1 é possível, mas não é o maior.",
      /* busca exaustiva nas quíntuplas ordenadas de inteiros positivos */
      v: {
        i: () => {
          let melhor = -1;
          for (let a = 1; a <= 50; a++) for (let b = a; b <= 50; b++) for (let c = b; c <= 50; c++) for (let d = c; d <= 50; d++) { const e = 50 - a - b - c - d; if (e < d) continue; const x = [a, b, c, d, e], m = modas(x); if (mediana(x) === 12 && m.length === 1 && m[0] === 15 && a > melhor) melhor = a; }
          return qualNum(melhor, o);
        },
      },
    };
  })(),
];
