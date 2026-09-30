/* Rascunho — Matemática · 6º ao 9º / Frações: operações e comparação.

   A conferência refaz as contas com frações exatas (pares [num, den]
   sempre reduzidos, em _matematica-fund.mjs) e lê as alternativas escritas
   como fração, número misto ou decimal, comparando o valor numérico com o
   resultado recalculado. Nas questões de fração irredutível, confere-se
   também que o numerador e o denominador não têm divisor comum. */

import { unicoV, lerFracao, mdc, fracao, somaFr, subFr, mulFr, divFr, fracaoParaNum } from "./_matematica-fund.mjs";

export const materia = "matematica-fund";
export const tema = "Frações: operações e comparação";
export const arquivo = "matematica-fund__fracoes-operacoes-e-comparacao";

/* "a/b", "n a/b" (misto), inteiro ou decimal com vírgula → valor numérico */
const lerMisto = (t) => {
  const m = String(t).trim().match(/^(\d+)\s+(\d+)\/(\d+)$/);
  if (m) return Number(m[1]) + Number(m[2]) / Number(m[3]);
  return lerFracao(t);
};
/* índice da única alternativa cujo valor coincide com o recalculado */
const qual = (valor, alt) => {
  const achados = alt.map((t) => { let v; try { v = lerMisto(t); } catch { return false; } return Math.abs(v - valor) < 1e-9; });
  return achados.filter(Boolean).length === 1 ? achados.indexOf(true) : -1;
};
/* igual a qual, mas exige fração irredutível ("a/b" com mdc 1, ou inteiro) */
const qualIrred = (valor, alt) => {
  const achados = alt.map((t) => {
    let v; try { v = lerMisto(t); } catch { return false; }
    const m = String(t).trim().match(/^(\d+)\/(\d+)$/);
    const irred = m ? mdc(Number(m[1]), Number(m[2])) === 1 : true;
    return Math.abs(v - valor) < 1e-9 && irred;
  });
  return achados.filter(Boolean).length === 1 ? achados.indexOf(true) : -1;
};
const num = (p) => fracaoParaNum(p);

export const questoes = [
  /* ------------------------------------------------------------ fáceis --- */
  (() => {
    const o = ["5/10", "1/10", "2/10", "4/10", "6/10"];
    return {
      d: "facil",
      e: "Qual fração com denominador 10 é equivalente à fração 1/2?",
      o,
      x: "Frações equivalentes representam a mesma parte do todo. Para manter o valor, multiplicam-se numerador e denominador pelo mesmo número: como 2 × 5 = 10, multiplica-se também o numerador por 5, e 1 × 5 = 5, o que dá 5/10. Conferindo, dividindo 5/10 pelo fator comum 5, volta-se a 1/2.\n\n1/10, 2/10, 4/10 e 6/10 mudam o denominador para 10, mas não ajustam o numerador de modo a manter o valor: 1/10 vale só um décimo, e 6/10 passa da metade, já que a metade de 10 é 5, e não 6.",
      v: { i: () => qual(1 / 2, o) },
    };
  })(),
  (() => {
    const o = ["3/4", "2/3", "6/4", "1/2", "3/8"];
    return {
      d: "facil",
      e: "Simplificando a fração 6/8 ao máximo, qual é a fração irredutível obtida?",
      o,
      x: "Simplificar é dividir numerador e denominador pelo mesmo número. O maior divisor comum de 6 e 8 é 2, e 6 ÷ 2 = 3, 8 ÷ 2 = 4, o que dá 3/4. Como 3 e 4 não têm nenhum divisor comum além de 1, a fração não pode ser simplificada de novo: é irredutível.\n\n2/3 e 1/2 têm valores diferentes de 6/8, pois não preservam a proporção entre numerador e denominador. 6/4 só divide o numerador por 1 e o denominador por 2. E 3/8 só divide o numerador, deixando o denominador intacto, o que altera o valor da fração.",
      v: { i: () => qualIrred(6 / 8, o) },
    };
  })(),
  (() => {
    const o = ["5/7", "5/14", "1/7", "6/7", "6/14"];
    return {
      d: "facil",
      e: "Somando frações de mesmo denominador, quanto vale 3/7 + 2/7?",
      o,
      x: "Quando as frações têm o mesmo denominador, somam-se apenas os numeradores e mantém-se o denominador: 3/7 + 2/7 = (3 + 2)/7 = 5/7. Cada parte é um sétimo do todo, e juntar três sétimos com dois sétimos dá cinco sétimos.\n\n5/14 soma também os denominadores, 7 + 7 = 14, um erro comum: o tamanho de cada parte não muda ao somar. 1/7 subtrai em vez de somar. 6/7 soma um numerador a mais do que deveria. E 6/14 comete dois erros ao mesmo tempo: soma os denominadores e erra o numerador.",
      v: { i: () => qual(num(somaFr([3, 7], [2, 7])), o) },
    };
  })(),
  (() => {
    const o = ["5/11", "13/11", "5/22", "4/11", "36/11"];
    return {
      d: "facil",
      e: "Subtraindo frações de mesmo denominador, quanto vale 9/11 − 4/11?",
      o,
      x: "Com denominadores iguais, subtraem-se os numeradores e mantém-se o denominador: 9/11 − 4/11 = (9 − 4)/11 = 5/11. Cada parte continua sendo um onze avos, e de nove partes retiram-se quatro, sobrando cinco partes.\n\n13/11 soma os numeradores em vez de subtrair. 5/22 subtrai os numeradores mas soma os denominadores, como se o tamanho das partes mudasse. 4/11 é só a fração que foi subtraída. E 36/11 multiplica os numeradores em vez de subtraí-los.",
      v: { i: () => qual(num(subFr([9, 11], [4, 11])), o) },
    };
  })(),
  (() => {
    const o = ["24", "8", "120", "200", "13"];
    return {
      d: "facil",
      e: "Calculando uma fração de uma quantidade, quanto é 3/5 de 40?",
      o,
      x: "Para achar 3/5 de 40, divide-se 40 em 5 partes iguais, 40 ÷ 5 = 8, e tomam-se 3 dessas partes: 3 × 8 = 24. Em uma só conta, 3/5 × 40 = 120/5 = 24.\n\n8 é apenas um quinto de 40, faltando multiplicar por 3. 120 multiplica 40 por 3 e esquece de dividir por 5. 200 multiplica 40 por 5, o denominador, em vez de dividir. E 13 subtrai e soma números sem relação com a operação pedida, sem chegar a nenhuma fração de 40.",
      v: { i: () => qual((3 / 5) * 40, o) },
    };
  })(),
  (() => {
    const o = ["7/8", "3/8", "5/8", "1/8", "2/8"];
    return {
      d: "facil",
      e: "Entre as frações 3/8, 5/8, 1/8, 7/8 e 2/8, qual é a maior?",
      o,
      x: "Quando as frações têm o mesmo denominador, a maior é a que tem o maior numerador, pois todas dividem o todo em partes do mesmo tamanho, e quem tem mais partes tem mais do todo. Entre os numeradores 3, 5, 1, 7 e 2, o maior é 7, logo 7/8 é a maior fração.\n\n5/8 e 3/8 são maiores que 1/8 e 2/8, mas ainda menores que 7/8. 1/8 tem o menor numerador, sendo a menor de todas, e 2/8 é a segunda menor. Nenhuma delas supera 7/8.",
      v: { i: () => qual(Math.max(3 / 8, 5 / 8, 1 / 8, 7 / 8, 2 / 8), o) },
    };
  })(),
  (() => {
    const o = ["3/8", "8/3", "5/8", "3/5", "1/3"];
    return {
      d: "facil",
      e: "Uma pizza foi dividida em 8 fatias iguais, e Ana comeu 3 fatias. Que fração da pizza ela comeu?",
      o,
      x: "A fração que representa parte de um todo tem no numerador o número de partes consideradas e no denominador o total de partes iguais. Ana comeu 3 das 8 fatias, então comeu 3/8 da pizza.\n\n8/3 inverte numerador e denominador, resultando numa fração maior que 1, impossível para parte de um todo. 5/8 é a fração que sobrou, e não a que ela comeu. 3/5 compara as fatias comidas com as que sobraram, e não com o total. E 1/3 não corresponde a nenhuma contagem das fatias.",
      v: { i: () => qual(3 / 8, o) },
    };
  })(),
  (() => {
    const o = ["9/4", "3/4", "7/4", "21/4", "8/4"];
    return {
      d: "facil",
      e: "Escrevendo o número misto 2 1/4 como fração imprópria, qual é o resultado?",
      o,
      x: "Para converter um número misto em fração imprópria, multiplica-se a parte inteira pelo denominador e soma-se o numerador: 2 × 4 + 1 = 9, mantendo o denominador 4. Assim, 2 1/4 = 9/4. Conferindo, 9/4 = 8/4 + 1/4 = 2 + 1/4.\n\n3/4 só soma 2 com 1 sobre 4, sem multiplicar a parte inteira pelo denominador. 7/4 subtrai em vez de somar o numerador. 21/4 apenas junta os algarismos 2 e 1. E 8/4 equivale a 2, sem o quarto que sobra.",
      v: { i: () => qual(2 + 1 / 4, o) },
    };
  })(),
  (() => {
    const o = ["2 3/4", "2 1/4", "3 3/4", "2 1/2", "3 1/4"];
    return {
      d: "facil",
      e: "Uma corda mede 11/4 de metro. Como fica esse comprimento escrito em metros inteiros e fração, na forma mista?",
      o,
      x: "Divide-se o numerador pelo denominador: 11 ÷ 4 dá quociente 2 e resto 3. A parte inteira do número misto é o quociente, 2, e a parte fracionária é o resto sobre o denominador, 3/4. Assim, 11/4 = 2 3/4. Conferindo, 2 × 4 + 3 = 11.\n\n2 1/4 erra o resto, usando 1 em vez de 3. 3 3/4 e 3 1/4 usam o quociente 3, o que já passaria de 11 quartos. E 2 1/2 simplifica o resto 3/4 de forma errada, pois ele já está na forma irredutível.",
      v: { i: () => qual(11 / 4, o) },
    };
  })(),
  (() => {
    const o = ["1/6", "5/6", "2/5", "1/5", "2/3"];
    return {
      d: "facil",
      e: "Multiplicando duas frações, quanto vale 1/2 × 1/3?",
      o,
      x: "Multiplicam-se numerador com numerador e denominador com denominador: 1/2 × 1/3 = (1 × 1)/(2 × 3) = 1/6. Em termos de quantidade, é a metade de um terço, que fica um sexto do todo.\n\n5/6 é a soma 1/2 + 1/3, e não o produto. 2/5 soma numeradores e denominadores separadamente, o que não corresponde a nenhuma das duas operações. 1/5 também não vem de nenhuma conta correta com esses dois números. E 2/3 é o dobro de 1/3, sem relação com o produto pedido.",
      v: { i: () => qual(num(mulFr([1, 2], [1, 3])), o) },
    };
  })(),
  (() => {
    const o = ["3/8", "3/2", "1/4", "1/2", "5/8"];
    return {
      d: "facil",
      e: "Dividindo uma fração em duas partes iguais, qual é a metade de 3/4?",
      o,
      x: "A metade de um número é esse número dividido por 2, ou multiplicado por 1/2. Para frações, basta multiplicar o denominador por 2: 3/4 ÷ 2 = 3/(4 × 2) = 3/8. Em partes do todo, dividir cada um dos três quartos ao meio gera três oitavos.\n\n3/2 dobra a fração em vez de dividi-la. 1/4 é a metade de 1/2, e não de 3/4. 1/2 é a diferença 3/4 − 1/4, sem relação com a metade. E 5/8 soma partes sem respeitar a divisão por 2.",
      v: { i: () => qual(num(divFr([3, 4], [2, 1])), o) },
    };
  })(),
  (() => {
    const o = ["15", "25", "4", "30", "45"];
    return {
      d: "facil",
      e: "Quantos minutos correspondem a 1/4 de hora, sabendo que uma hora tem 60 minutos?",
      o,
      x: "Uma hora tem 60 minutos, e 1/4 de hora é 60 ÷ 4 = 15 minutos. Como 4 × 15 = 60, quatro períodos de 15 minutos completam exatamente a hora, e cada um deles é um quarto dela.\n\n25 e 45 não dividem 60 em quatro partes iguais: 4 × 25 = 100 e 4 × 45 = 180, ambos passando muito de 60. 4 é o denominador da fração, e não o número de minutos. E 30 equivale a meia hora, o dobro do valor pedido.",
      v: { i: () => qual(60 / 4, o) },
    };
  })(),

  /* ------------------------------------------------------------ médias --- */
  (() => {
    const o = ["5/6", "2/5", "1/5", "2/6", "3/5"];
    return {
      d: "media",
      e: "Somando frações de denominadores diferentes, quanto vale 1/2 + 1/3?",
      o,
      x: "Para somar frações com denominadores diferentes, primeiro se encontra um denominador comum. O menor múltiplo comum de 2 e 3 é 6: 1/2 = 3/6 e 1/3 = 2/6. Somando, 3/6 + 2/6 = 5/6.\n\n2/5 soma numeradores e denominadores separadamente, 1 + 1 e 2 + 3, um erro muito comum que ignora o tamanho das partes. 1/5 e 3/5 também não vêm de nenhuma conta válida. E 2/6 só soma os numeradores sobre um denominador que não combina com as parcelas originais.",
      v: { i: () => qual(num(somaFr([1, 2], [1, 3])), o) },
    };
  })(),
  (() => {
    const o = ["11/12", "4/10", "10/12", "13/12", "5/12"];
    return {
      d: "media",
      e: "Quanto vale a soma 3/4 + 1/6, dando o resultado em fração?",
      o,
      x: "O menor múltiplo comum de 4 e 6 é 12. Escrevendo 3/4 = 9/12 e 1/6 = 2/12, a soma é 9/12 + 2/12 = 11/12. Como 11 é primo e não divide 12, a fração já está na forma irredutível.\n\n4/10 soma numeradores e denominadores separadamente, erro comum que ignora que as partes têm tamanhos diferentes. 10/12 esquece uma unidade no numerador. 13/12 acrescenta uma unidade a mais. E 5/12 é a diferença das duas frações, e não a soma delas.",
      v: { i: () => qual(num(somaFr([3, 4], [1, 6])), o) },
    };
  })(),
  (() => {
    const o = ["7/12", "4/2", "1/2", "8/12", "5/12"];
    return {
      d: "media",
      e: "Subtraindo frações de denominadores diferentes, quanto vale 5/6 − 1/4?",
      o,
      x: "O menor múltiplo comum de 6 e 4 é 12. Escrevendo 5/6 = 10/12 e 1/4 = 3/12, a diferença é 10/12 − 3/12 = 7/12. Como 7 é primo e não divide 12, a fração já está na forma irredutível.\n\n4/2 subtrai numeradores e denominadores separadamente, 5 − 1 e 6 − 4, o que dá um resultado maior que 1 para uma diferença de duas frações menores que 1. 1/2 e 8/12 erram a conversão para o denominador comum. E 5/12 esquece de subtrair o numerador da segunda fração convertida.",
      v: { i: () => qual(num(subFr([5, 6], [1, 4])), o) },
    };
  })(),
  (() => {
    const o = ["16", "20", "4", "18", "31"];
    return {
      d: "media",
      e: "Numa turma de 36 alunos, 5/9 são meninas. Quantos meninos há nessa turma?",
      o,
      x: "Se 5/9 da turma são meninas, os meninos são 1 − 5/9 = 4/9 dos alunos. Calculando 4/9 de 36: 36 ÷ 9 = 4, e 4 × 4 = 16 meninos. Conferindo, 5/9 de 36 = 20 meninas, e 20 + 16 = 36.\n\n20 é o número de meninas, e não de meninos. 4 é só um nono da turma, faltando multiplicar por 4. 18 é metade da turma, sem relação com as frações dadas. E 31 subtrai 5 de 36, como se 5 fosse um número de alunos, e não uma parte do numerador.",
      v: { i: () => qual((1 - 5 / 9) * 36, o) },
    };
  })(),
  (() => {
    const o = ["3/5", "11/30", "2/5", "4/5", "1/5"];
    return {
      d: "media",
      e: "Multiplicando e simplificando o resultado, quanto vale 2/3 × 9/10?",
      o,
      x: "Multiplicando numeradores e denominadores, 2/3 × 9/10 = 18/30. Dividindo numerador e denominador por 6, o maior divisor comum, obtém-se 3/5. Outra forma é simplificar antes: o 9 e o 3 se dividem por 3, e o 2 e o 10 se dividem por 2, sobrando 1 × 3 sobre 1 × 5, isto é, 3/5.\n\n11/30 soma numeradores e denominadores em vez de multiplicar. 2/5, 4/5 e 1/5 têm o denominador certo, mas erram o numerador ao simplificar.",
      v: { i: () => qualIrred(num(mulFr([2, 3], [9, 10])), o) },
    };
  })(),
  (() => {
    const o = ["2", "9/32", "1/2", "4", "1"];
    return {
      d: "media",
      e: "Dividindo frações, quanto vale 3/4 ÷ 3/8?",
      o,
      x: "Dividir por uma fração é multiplicar pelo seu inverso: 3/4 ÷ 3/8 = 3/4 × 8/3 = 24/12 = 2. Outra forma é comparar: 3/4 equivale a 6/8, e 6/8 contém duas vezes 3/8.\n\n9/32 multiplica as frações sem inverter a segunda. 1/2 inverte a divisão, calculando 3/8 ÷ 3/4. 4 erra ao simplificar o produto. E 1 só aconteceria se as duas frações fossem iguais, o que não é o caso aqui.",
      v: { i: () => qual(num(divFr([3, 4], [3, 8])), o) },
    };
  })(),
  (() => {
    const o = ["12", "3/4", "7", "1", "4"];
    return {
      d: "media",
      e: "Quantas garrafas de 1/4 de litro são necessárias para encher exatamente 3 litros?",
      o,
      x: "Cada litro cabe em 4 garrafas de 1/4 de litro. Para 3 litros, o total é 3 ÷ 1/4 = 3 × 4 = 12 garrafas. Conferindo, 12 × 1/4 = 12/4 = 3 litros.\n\n3/4 multiplica 3 por 1/4, em vez de dividir, calculando o volume de uma garrafa repetido 3 vezes. 7 soma 3 e 4, sem relação com o problema. 1 e 4 usam só um dos dois números, ignorando que são necessárias várias garrafas para cada litro.",
      v: { i: () => qual(num(divFr([3, 1], [1, 4])), o) },
    };
  })(),
  (() => {
    const o = ["3/4", "5/7", "7/10", "8/11", "2/3"];
    return {
      d: "media",
      e: "Entre as frações 7/10, 5/7, 3/4, 8/11 e 2/3, qual é a maior?",
      o,
      x: "Escrevendo cada fração como decimal, 7/10 = 0,700, 5/7 ≈ 0,714, 3/4 = 0,750, 8/11 ≈ 0,727 e 2/3 ≈ 0,667. O maior valor é 0,750, que corresponde a 3/4. Outra forma é comparar cada fração com 3/4 por produtos cruzados, por exemplo 5 × 4 = 20 contra 3 × 7 = 21.\n\nAs demais frações são parecidas com 3/4, mas ficam um pouco abaixo dele, e por isso nenhuma delas é a maior do grupo.",
      v: { i: () => qual(Math.max(7 / 10, 5 / 7, 3 / 4, 8 / 11, 2 / 3), o) },
    };
  })(),
  (() => {
    const o = ["1/2", "2/5", "7/10", "3/10", "3/4"];
    return {
      d: "media",
      e: "Colocando as frações 1/2, 2/5, 3/4, 3/10 e 7/10 em ordem crescente, qual delas fica no meio da lista?",
      o,
      x: "Escrevendo todas com denominador 20: 1/2 = 10/20, 2/5 = 8/20, 3/4 = 15/20, 3/10 = 6/20 e 7/10 = 14/20. Em ordem crescente, os numeradores ficam 6, 8, 10, 14, 15, isto é, 3/10, 2/5, 1/2, 7/10, 3/4. A fração do meio é 1/2.\n\n2/5 e 7/10 são vizinhas de 1/2, uma de cada lado, mas ocupam a segunda e a quarta posições. 3/10 é a menor da lista e 3/4 é a maior.",
      v: { i: () => { const fr = [1 / 2, 2 / 5, 3 / 4, 3 / 10, 7 / 10].sort((a, b) => a - b); return qual(fr[2], o); } },
    };
  })(),
  (() => {
    const o = ["3/2", "3/8", "3/4", "5/4", "9/4"];
    return {
      d: "media",
      e: "Uma receita pede 3/4 de xícara de farinha. Para fazer o dobro da receita, quantas xícaras de farinha são necessárias?",
      o,
      x: "O dobro da quantidade é 2 × 3/4 = 6/4 = 3/2 de xícara, isto é, uma xícara e meia. Conferindo, 3/4 + 3/4 = 6/4 = 3/2.\n\n3/8 é a metade da quantidade, e não o dobro. 3/4 é a quantidade da receita original, sem dobrar. 5/4 soma 2/4 em vez de dobrar, e 9/4 é o triplo de 3/4. Dobrar uma fração multiplica o numerador por 2 e mantém o denominador, ou divide o denominador por 2 quando isso é possível.",
      v: { i: () => qual(num(mulFr([2, 1], [3, 4])), o) },
    };
  })(),
  (() => {
    const o = ["5/12", "7/12", "2/7", "1/12", "11/12"];
    return {
      d: "media",
      e: "Marcos gastou 1/3 do salário com aluguel e 1/4 do salário com alimentação. Que fração do salário sobrou?",
      o,
      x: "A fração gasta é 1/3 + 1/4 = 4/12 + 3/12 = 7/12 do salário. O que sobrou é o restante do todo: 1 − 7/12 = 12/12 − 7/12 = 5/12.\n\n7/12 é a fração gasta, e não a que sobrou. 2/7 soma os numeradores 1 + 1 e os denominadores 3 + 4 como se fosse uma soma de frações. 1/12 é a diferença entre 1/3 e 1/4, e não o que sobrou do salário. E 11/12 só desconta uma das duas despesas.",
      v: { i: () => qual(num(subFr([1, 1], somaFr([1, 3], [1, 4]))), o) },
    };
  })(),
  (() => {
    const o = ["60", "50", "70", "40", "30"];
    return {
      d: "media",
      e: "Ana tinha R$ 120. Gastou 1/3 e, do que sobrou, gastou 1/4. Quanto dinheiro ainda tem?",
      o,
      x: "Primeiro gastou 1/3 de 120 = 40, sobrando 120 − 40 = 80. Depois gastou 1/4 de 80 = 20, sobrando 80 − 20 = 60. Ana ainda tem R$ 60.\n\n50 e 70 erram uma das duas contas intermediárias. 40 é o valor do primeiro gasto, e não o que sobrou no final. E 30 calcularia 1/4 do valor original, em vez de 1/4 do que sobrou depois do primeiro gasto, somando tudo errado.",
      v: { i: () => { const r1 = 120 - 120 / 3; return qual(r1 - r1 / 4, o); } },
    };
  })(),
  (() => {
    const o = ["3 5/6", "3 2/5", "4", "3 1/6", "3 2/3"];
    return {
      d: "media",
      e: "Somando números mistos, quanto vale 1 1/2 + 2 1/3?",
      o,
      x: "Somam-se as partes inteiras, 1 + 2 = 3, e as partes fracionárias, 1/2 + 1/3 = 3/6 + 2/6 = 5/6. O resultado é 3 5/6. Em forma de fração imprópria, 3/2 + 7/3 = 9/6 + 14/6 = 23/6, que é o mesmo valor.\n\n3 2/5 soma numeradores e denominadores das partes fracionárias separadamente. 4 arredonda o resultado. 3 1/6 erra o numerador da soma das frações. E 3 2/3 escolhe um dos dois números mistos sem somar.",
      v: { i: () => qual(1 + 1 / 2 + 2 + 1 / 3, o) },
    };
  })(),
  (() => {
    const o = ["2/5", "10/9", "5/8", "1/5", "6/5"];
    return {
      d: "media",
      e: "Calculando uma fração de outra fração, quanto é 2/3 de 3/5?",
      o,
      x: "Achar 2/3 de 3/5 é multiplicar: 2/3 × 3/5 = 6/15 = 2/5. Simplificando antes, o 3 do numerador e o 3 do denominador se cancelam, sobrando 2/5 direto.\n\n10/9 é o produto dos inversos, 3/2 × 5/3 sem simplificar. 5/8 soma numeradores e denominadores. 1/5 divide em vez de multiplicar. E 6/5 multiplica só os numeradores, esquecendo de multiplicar os denominadores 3 e 5.",
      v: { i: () => qual(num(mulFr([2, 3], [3, 5])), o) },
    };
  })(),
  (() => {
    const o = ["2/3", "24/36", "1/2", "12/18", "3/4"];
    return {
      d: "media",
      e: "Simplificando a fração 48/72 ao máximo, qual é a fração irredutível?",
      o,
      x: "O maior divisor comum de 48 e 72 é 24, e 48 ÷ 24 = 2, 72 ÷ 24 = 3, o que dá 2/3. Como 2 e 3 não têm divisor comum além de 1, a fração não pode ser simplificada mais.\n\n24/36 e 12/18 valem o mesmo que 48/72, mas ainda podem ser simplificadas, pois 24 e 36 têm divisor comum 12, e 12 e 18 têm divisor comum 6. Elas não são irredutíveis. 1/2 e 3/4 têm valores diferentes da fração original.",
      v: { i: () => qualIrred(48 / 72, o) },
    };
  })(),
  (() => {
    const o = ["21", "15", "18", "8", "35"];
    return {
      d: "media",
      e: "Que numerador torna a igualdade 3/5 = ?/35 verdadeira?",
      o,
      x: "Para passar o denominador de 5 para 35, multiplicou-se por 7, e o numerador deve ser multiplicado pelo mesmo fator: 3 × 7 = 21. Conferindo, 21/35 dividido por 7 dá 3/5.\n\n15 e 18 não mantêm a proporção com 35. 8 soma 5 ao numerador, como se a equivalência fosse aditiva. E 35 é o denominador, e não o numerador procurado, que tornaria a fração igual a 1.",
      v: { i: () => qual((3 / 5) * 35, o) },
    };
  })(),
  (() => {
    const o = ["30", "28", "58", "2", "20"];
    return {
      d: "media",
      e: "Qual é o valor da maior entre as quantidades 3/5 de 50 e 2/3 de 42?",
      o,
      x: "Calculando cada uma: 3/5 de 50 = 50 ÷ 5 × 3 = 30, e 2/3 de 42 = 42 ÷ 3 × 2 = 28. Comparando, 30 é maior que 28, então o valor da maior quantidade é 30.\n\n28 é o valor da outra quantidade, a menor das duas. 58 soma os dois resultados, sem indicar o maior. 2 é a diferença entre eles. E 20 não corresponde a nenhuma das duas contas feitas de forma correta.",
      v: { i: () => qual(Math.max((3 / 5) * 50, (2 / 3) * 42), o) },
    };
  })(),
  (() => {
    const o = ["90", "150", "30", "24", "120"];
    return {
      d: "media",
      e: "Um tanque de 240 litros está com 5/8 da sua capacidade cheia. Quantos litros faltam para encher o tanque?",
      o,
      x: "Se o tanque está com 5/8 da capacidade, faltam 1 − 5/8 = 3/8. Calculando 3/8 de 240: 240 ÷ 8 = 30, e 3 × 30 = 90 litros. Conferindo, 5/8 de 240 = 150 litros já no tanque, e 240 − 150 = 90.\n\n150 é o volume que já está no tanque, e não o que falta. 30 é só um oitavo da capacidade. 24 divide 240 por 10, sem relação com as frações dadas. E 120 é a metade da capacidade, e não 3/8.",
      v: { i: () => qual(240 - (5 / 8) * 240, o) },
    };
  })(),
  (() => {
    const o = ["8", "4", "6", "7", "10"];
    return {
      d: "media",
      e: "Quantos pedaços de 3/4 de metro podem ser cortados de uma corda de 6 metros?",
      o,
      x: "O número de pedaços é 6 ÷ 3/4 = 6 × 4/3 = 24/3 = 8. Conferindo, 8 pedaços de 3/4 de metro somam 8 × 3/4 = 6 metros, usando a corda inteira sem sobra.\n\n4 divide 6 por 3/2, e não por 3/4. 6 esquece de dividir e repete o comprimento da corda. 7 e 10 erram a conta de 24 ÷ 3. Cada pedaço é menor que 1 metro, então o número de pedaços tem de ser maior que 6.",
      v: { i: () => qual(num(divFr([6, 1], [3, 4])), o) },
    };
  })(),
  (() => {
    const o = ["13/5", "1/5", "7/5", "3/5", "17/5"];
    return {
      d: "media",
      e: "Subtraindo uma fração de um número inteiro, quanto vale 3 − 2/5, escrito como fração?",
      o,
      x: "Escreve-se 3 como fração de denominador 5: 3 = 15/5. Então 3 − 2/5 = 15/5 − 2/5 = 13/5, que é o mesmo que 2 3/5 em número misto. Conferindo, 13/5 é um pouco menos que 3, pois tira-se 2/5 de 3 inteiros.\n\n1/5 subtrai 2 de 3 e mantém o denominador 5, como se o 3 também fosse fração. 7/5 subtrai em vez de converter o 3 corretamente. 3/5 só lembra o numerador original. E 17/5 soma 2/5 em vez de subtrair.",
      v: { i: () => qual(3 - 2 / 5, o) },
    };
  })(),
  (() => {
    const o = ["1/4", "1/6", "1/3", "1/2", "3/4"];
    return {
      d: "media",
      e: "Que fração de um dia de 24 horas representam 6 horas?",
      o,
      x: "A fração é 6 sobre 24. Dividindo numerador e denominador por 6, o maior divisor comum, obtém-se 1/4. Em outras palavras, 6 horas são um quarto do dia, pois 4 × 6 = 24, e quatro períodos de 6 horas completam as 24 horas.\n\n1/6 e 1/3 têm denominadores que não conferem com 24 ÷ 6 = 4. 1/2 corresponderia a 12 horas, metade do dia. E 3/4 corresponderia a 18 horas, três quartos do dia.",
      v: { i: () => qualIrred(6 / 24, o) },
    };
  })(),
  (() => {
    const o = ["1", "3/11", "1/6", "11/6", "2"];
    return {
      d: "media",
      e: "Somando três frações, quanto vale 1/2 + 1/3 + 1/6?",
      o,
      x: "O menor múltiplo comum de 2, 3 e 6 é 6. Escrevendo 1/2 = 3/6, 1/3 = 2/6 e 1/6 = 1/6, a soma é 3/6 + 2/6 + 1/6 = 6/6 = 1. As três frações juntas formam exatamente o todo, sem faltar nem sobrar nada.\n\n3/11 soma numeradores e denominadores separadamente, erro comum. 1/6 é só a última parcela. 11/6 soma 11 em vez de 6 no numerador. E 2 dobra o valor correto.",
      v: { i: () => qual(num(somaFr(somaFr([1, 2], [1, 3]), [1, 6])), o) },
    };
  })(),
  (() => {
    const o = ["3/4", "5/8", "1/4", "11/12", "1/2"];
    return {
      d: "media",
      e: "Seguindo a ordem das operações, quanto vale 1/2 + 1/3 × 3/4?",
      o,
      x: "A multiplicação vem antes da adição: 1/3 × 3/4 = 3/12 = 1/4. Depois, 1/2 + 1/4 = 2/4 + 1/4 = 3/4.\n\n5/8 é o resultado de somar primeiro, (1/2 + 1/3) × 3/4 = 5/6 × 3/4 = 5/8, invertendo a prioridade entre soma e multiplicação. 1/4 é só o resultado da multiplicação, sem somar o 1/2. 11/12 soma com uma fração errada. E 1/2 é a primeira parcela, sem a segunda.",
      v: { i: () => qual(num(somaFr([1, 2], mulFr([1, 3], [3, 4]))), o) },
    };
  })(),
  (() => {
    const o = ["32", "40", "36", "24", "20"];
    return {
      d: "media",
      e: "Dos 60 candidatos de uma prova, 1/5 faltaram e 2/3 dos que compareceram foram aprovados. Quantos candidatos foram aprovados?",
      o,
      x: "Faltaram 1/5 de 60 = 12 candidatos, e compareceram 60 − 12 = 48. Foram aprovados 2/3 de 48: 48 ÷ 3 = 16, e 2 × 16 = 32 aprovados.\n\n40 aplica 2/3 a um valor que não é o de 48, arredondando as contas. 36 e 24 calculam frações do total de 60, sem descontar os que faltaram. E 20 é só o número de candidatos que compareceram e não foram aprovados, somado com outro valor errado.",
      v: { i: () => qual((2 / 3) * (60 - 60 / 5), o) },
    };
  })(),
  (() => {
    const o = ["24", "40", "16", "30", "20"];
    return {
      d: "media",
      e: "Um ciclista percorreu 3/8 de uma trilha de 64 km pela manhã e 1/4 da trilha à tarde. Quantos quilômetros ainda faltam?",
      o,
      x: "Pela manhã, 3/8 de 64 = 24 km. À tarde, 1/4 de 64 = 16 km. Percorreu 24 + 16 = 40 km, e faltam 64 − 40 = 24 km. Como fração, 3/8 + 1/4 = 5/8 foi percorrido, e faltam 3/8 da trilha, que são os mesmos 24 km.\n\n40 é o que ele já percorreu, e não o que falta. 16 é só o trecho da tarde. 30 e 20 não vêm de nenhuma combinação correta das frações dadas.",
      v: { i: () => qual(64 - ((3 / 8) * 64 + (1 / 4) * 64), o) },
    };
  })(),
  (() => {
    const o = ["1/4", "9/4", "1/3", "1/12", "3/7"];
    return {
      d: "media",
      e: "Se 3/4 de um bolo forem divididos igualmente entre 3 pessoas, que fração do bolo cada uma recebe?",
      o,
      x: "Dividir 3/4 do bolo entre 3 pessoas é calcular 3/4 ÷ 3 = 3/4 × 1/3 = 3/12 = 1/4. Cada pessoa recebe um quarto do bolo inteiro, e, de fato, 3 × 1/4 = 3/4.\n\n9/4 multiplica 3/4 por 3, em vez de dividir. 1/3 é a fração do pedaço que cada um recebe, e não do bolo inteiro. 1/12 divide por 3 duas vezes. E 3/7 soma numeradores e denominadores de forma errada.",
      v: { i: () => qual(num(divFr([3, 4], [3, 1])), o) },
    };
  })(),
  (() => {
    const o = ["2/5", "2/3", "3/5", "12/30", "1/2"];
    return {
      d: "media",
      e: "Numa caixa há 12 bolas vermelhas e 18 bolas azuis. Que fração das bolas é vermelha, na forma irredutível?",
      o,
      x: "No total há 12 + 18 = 30 bolas, e as vermelhas são 12 delas: 12/30. Dividindo numerador e denominador por 6, o maior divisor comum, obtém-se 2/5, que não pode ser simplificada mais.\n\n2/3 compara vermelhas com azuis, 12/18, e não com o total. 3/5 é a fração de bolas azuis. 12/30 vale o mesmo que 2/5, mas ainda não está simplificada. E 1/2 não corresponde a nenhuma contagem das bolas.",
      v: { i: () => qualIrred(12 / 30, o) },
    };
  })(),
  (() => {
    const o = ["1/2", "1/3", "2/3", "3/8", "5/8"];
    return {
      d: "media",
      e: "Na reta numérica, qual fração está exatamente no meio entre 1/4 e 3/4?",
      o,
      x: "O ponto do meio é a média dos dois valores: (1/4 + 3/4) ÷ 2 = 1 ÷ 2 = 1/2. Outra forma é notar que 1/4 e 3/4 ficam a 1/4 de distância de 1/2, um de cada lado, e que 1/2 está exatamente entre eles na reta numérica.\n\n1/3 e 3/8 ficam mais perto de 1/4, e 2/3 e 5/8 ficam mais perto de 3/4. Nenhuma delas é equidistante das duas extremidades, como o ponto médio deve ser.",
      v: { i: () => qual((1 / 4 + 3 / 4) / 2, o) },
    };
  })(),

  /* ---------------------------------------------------------- difíceis --- */
  (() => {
    const o = ["11/4", "11/36", "3/4", "5/8", "13/4"];
    return {
      d: "dificil",
      e: "Resolvendo primeiro os parênteses, quanto vale (2/3 + 1/4) ÷ (5/6 − 1/2)?",
      o,
      x: "Primeiro parêntese: 2/3 + 1/4 = 8/12 + 3/12 = 11/12. Segundo parêntese: 5/6 − 1/2 = 5/6 − 3/6 = 2/6 = 1/3. Dividindo, 11/12 ÷ 1/3 = 11/12 × 3 = 33/12 = 11/4, já simplificada.\n\n11/36 multiplica as frações em vez de dividir. 3/4 e 5/8 erram algum dos parênteses. E 13/4 erra o numerador do primeiro parêntese ao somar as frações com denominadores diferentes.",
      v: { i: () => qual(num(divFr(somaFr([2, 3], [1, 4]), subFr([5, 6], [1, 2]))), o) },
    };
  })(),
  (() => {
    const o = ["2/5", "4/15", "7/15", "1/5", "3/5"];
    return {
      d: "dificil",
      e: "Num reservatório cheio, consumiu-se 2/5 da água no primeiro dia e 1/3 do que restou no segundo. Que fração do reservatório ainda tem água?",
      o,
      x: "Depois do primeiro dia, restam 1 − 2/5 = 3/5. No segundo dia, consome-se 1/3 do que restou: 1/3 × 3/5 = 1/5 do reservatório. O que sobra é 3/5 − 1/5 = 2/5.\n\n4/15 e 7/15 misturam frações do total com frações do restante sem ajustar as bases. 1/5 é só o consumo do segundo dia. E 3/5 é o que restou depois do primeiro dia, antes do consumo do segundo.",
      v: { i: () => qual(num(subFr([3, 5], mulFr([1, 3], [3, 5]))), o) },
    };
  })(),
  (() => {
    const o = ["120", "17", "135", "360", "30"];
    return {
      d: "dificil",
      e: "Se 3/8 de um número valem 45, qual é esse número?",
      o,
      x: "Se 3/8 do número valem 45, então 1/8 vale 45 ÷ 3 = 15, e o número inteiro vale 8 × 15 = 120. Conferindo, 3/8 de 120 = 120 ÷ 8 × 3 = 15 × 3 = 45, como pedia o enunciado.\n\n17 subtrai 45 − 28 sem relação com as frações. 135 multiplica 45 por 3, em vez de dividir por 3 e multiplicar por 8. 360 multiplica 45 por 8 sem dividir por 3. E 30 corresponderia a 1/4 de 120, e não a 3/8.",
      v: { i: () => qual(45 / (3 / 8), o) },
    };
  })(),
  (() => {
    const o = ["3/5", "1/2", "7/16", "1", "35/48"];
    return {
      d: "dificil",
      e: "Qual é o valor do maior produto entre 3/4 × 4/5, 5/6 × 3/5 e 7/8 × 1/2?",
      o,
      x: "Calculando cada produto: 3/4 × 4/5 = 12/20 = 3/5; 5/6 × 3/5 = 15/30 = 1/2; e 7/8 × 1/2 = 7/16. Comparando os valores decimais 0,6, 0,5 e 0,4375, o maior é 3/5, que é o produto da primeira multiplicação, depois de simplificar os fatores comuns.\n\n1/2 é o valor do segundo produto, e 7/16 é o do terceiro, ambos menores que 3/5. 1 e 35/48 não correspondem a nenhum dos três produtos calculados corretamente.",
      v: { i: () => qual(Math.max(num(mulFr([3, 4], [4, 5])), num(mulFr([5, 6], [3, 5])), num(mulFr([7, 8], [1, 2]))), o) },
    };
  })(),
  (() => {
    const o = ["1/3", "1/6", "1/2", "2/3", "5/6"];
    return {
      d: "dificil",
      e: "Numa herança, metade foi para o filho mais velho, 1/3 do restante para a filha e o que sobrou para o caçula. Que fração da herança coube ao caçula?",
      o,
      x: "Depois do filho mais velho, restam 1 − 1/2 = 1/2 da herança. A filha recebe 1/3 desse restante: 1/3 × 1/2 = 1/6 do total. O caçula fica com o que sobrou: 1/2 − 1/6 = 3/6 − 1/6 = 2/6 = 1/3.\n\n1/6 é só a parte da filha. 1/2 é o que restou depois do mais velho, antes da divisão entre filha e caçula. 2/3 aplica 1/3 ao total em vez de ao restante. E 5/6 soma partes que não pertencem ao caçula.",
      v: { i: () => { const resto = subFr([1, 1], [1, 2]); return qual(num(subFr(resto, mulFr([1, 3], resto))), o); } },
    };
  })(),
  (() => {
    const o = ["15", "2,4", "12", "30", "3"];
    return {
      d: "dificil",
      e: "Uma torneira enche 2/5 de um tanque em 6 minutos. Mantendo a mesma vazão, em quantos minutos ela enche o tanque inteiro?",
      o,
      x: "Se 2/5 do tanque levam 6 minutos, então 1/5 leva 3 minutos, e o tanque todo, 5 × 3 = 15 minutos. Pela divisão de frações, 6 ÷ 2/5 = 6 × 5/2 = 30/2 = 15, o mesmo resultado pelos dois caminhos.\n\n2,4 multiplica 6 por 2/5 em vez de dividir. 12 e 30 dobram ou quintuplicam o tempo dado sem proporção. E 3 é o tempo para encher um quinto do tanque, e não o tanque inteiro.",
      v: { i: () => qual(num(divFr([6, 1], [2, 5])), o) },
    };
  })(),
  (() => {
    const o = ["2/3", "5/6", "1/3", "4/3", "3/2"];
    return {
      d: "dificil",
      e: "A soma de duas frações é 7/6, e uma delas é 1/2. Qual é a outra fração?",
      o,
      x: "A outra fração é a diferença 7/6 − 1/2. Escrevendo 1/2 = 3/6, tem-se 7/6 − 3/6 = 4/6 = 2/3, simplificando por 2. Conferindo, 1/2 + 2/3 = 3/6 + 4/6 = 7/6, exatamente a soma dada no enunciado.\n\n5/6 subtrai só 2 do numerador. 1/3 subtrai 1/2 de 5/6. 4/3 e 3/2 somam em vez de subtrair, resultando em valores maiores que a soma dada, o que é impossível para uma das parcelas.",
      v: { i: () => qual(num(subFr([7, 6], [1, 2])), o) },
    };
  })(),
  (() => {
    const o = ["1", "1/4", "1/2", "3/2", "2"];
    return {
      d: "dificil",
      e: "Dividindo uma fração pela soma de outras duas, quanto vale (1/2) ÷ (1/3 + 1/6)?",
      o,
      x: "Primeiro, o divisor da expressão: 1/3 + 1/6 = 2/6 + 1/6 = 3/6 = 1/2. Então a expressão vira 1/2 ÷ 1/2 = 1, já que todo número não nulo dividido por ele mesmo dá 1. Conferindo pelo inverso, 1/2 × 2/1 = 2/2 = 1.\n\n1/4 multiplica 1/2 por 1/2 em vez de dividir. 1/2 esquece de dividir pela soma, repetindo o numerador. 3/2 e 2 erram a soma do divisor.",
      v: { i: () => qual(num(divFr([1, 2], somaFr([1, 3], [1, 6]))), o) },
    };
  })(),
  (() => {
    const o = ["3", "2 1/10", "3 1/2", "2 1/5", "4"];
    return {
      d: "dificil",
      e: "Multiplicando números mistos, quanto vale 2 1/2 × 1 1/5?",
      o,
      x: "Convertendo para frações impróprias, 2 1/2 = 5/2 e 1 1/5 = 6/5. O produto é 5/2 × 6/5 = 30/10 = 3. Simplificando antes, o 5 e o 5 se cancelam, e 6/2 = 3.\n\n2 1/10 multiplica partes inteiras entre si e partes fracionárias entre si, 2 × 1 e 1/2 × 1/5, um erro comum com números mistos. 3 1/2 e 2 1/5 misturam partes dos dois números. E 4 arredonda o resultado.",
      v: { i: () => qual((2 + 1 / 2) * (1 + 1 / 5), o) },
    };
  })(),
  (() => {
    const o = ["2", "4,5", "3", "9", "1"];
    return {
      d: "dificil",
      e: "Ana pinta uma parede em 3 horas e Bia pinta a mesma parede em 6 horas. Trabalhando juntas, em quantas horas elas pintam a parede?",
      o,
      x: "Em uma hora, Ana pinta 1/3 da parede e Bia pinta 1/6. Juntas, pintam 1/3 + 1/6 = 2/6 + 1/6 = 3/6 = 1/2 da parede por hora. Para a parede inteira, levam 1 ÷ 1/2 = 2 horas.\n\n4,5 é a média entre 3 e 6, que não considera que trabalhar juntas reduz o tempo. 3 é o tempo de Ana sozinha. 9 soma os dois tempos. E 1 supõe que a soma das velocidades completa a parede em uma hora, o que só aconteceria se as duas pintassem juntas toda a parede por hora.",
      v: { i: () => qual(1 / (1 / 3 + 1 / 6), o) },
    };
  })(),
];
