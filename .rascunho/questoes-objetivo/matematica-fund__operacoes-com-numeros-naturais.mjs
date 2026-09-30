/* Rascunho — Matemática · 6º ao 9º / Operações com números naturais.

   A conferência refaz cada conta a partir dos mesmos números do enunciado,
   mas por um caminho independente do texto da explicação: aritmética
   direta em código, varredura de permutações para os problemas de
   algarismos, e testes de propriedade (elemento neutro, paridade) sobre
   várias amostras, em vez de repetir a fórmula da explicação. */

import { unicoV, qualNum } from "./_matematica-fund.mjs";

export const materia = "matematica-fund";
export const tema = "Operações com números naturais";
export const arquivo = "matematica-fund__operacoes-com-numeros-naturais";

const permutacoes = (arr) => {
  if (arr.length <= 1) return [arr];
  const r = [];
  arr.forEach((x, i) => { const resto = [...arr.slice(0, i), ...arr.slice(i + 1)]; permutacoes(resto).forEach((p) => r.push([x, ...p])); });
  return r;
};

export const questoes = [
  /* ------------------------------------------------------------ fáceis --- */
  (() => {
    const o = ["394", "384", "404", "484", "118"];
    return {
      d: "facil",
      e: "Uma loja vendeu 138 camisetas na segunda-feira e 256 camisetas na terça-feira. Quantas camisetas ela vendeu nesses dois dias?",
      o,
      x: "O total dos dois dias é a soma das vendas: 138 + 256. Somando unidade a unidade, com os \"vai um\" corretos, 8 + 6 = 14 (fica 4, vai 1), 3 + 5 + 1 = 9, 1 + 2 = 3, o que dá 394 camisetas.\n\n384 e 404 vêm de erros ao somar as dezenas ou as centenas, esquecendo ou duplicando o \"vai um\". 484 soma errado uma centena a mais. E 118 é a diferença entre os dois valores, 256 − 138, e não a soma pedida.",
      v: { i: () => qualNum(138 + 256, o) },
    };
  })(),
  (() => {
    const o = ["334", "344", "434", "690"];
    o.push("314");
    return {
      d: "facil",
      e: "Um estacionamento tinha 512 vagas ocupadas pela manhã. Ao meio-dia, 178 carros saíram. Quantas vagas continuaram ocupadas?",
      o,
      x: "O número de vagas ocupadas depois da saída é 512 − 178. Como 2 é menor que 8, empresta-se uma dezena: 12 − 8 = 4; nas dezenas, 0 (depois de emprestar) menos 7 exige emprestar da centena: 10 − 7 = 3; e nas centenas, 4 − 1 = 3. O resultado é 334 vagas ocupadas.\n\n344 e 434 vêm de esquecer um dos dois empréstimos na subtração. 690 é a soma dos dois números, e não a diferença. E 314 erra a centena do resultado.",
      v: { i: () => qualNum(512 - 178, o) },
    };
  })(),
  (() => {
    const o = ["84", "74", "96", "64", "20"];
    return {
      d: "facil",
      e: "Uma van escolar faz 6 viagens por dia, levando 14 alunos em cada uma. Quantos alunos ela transporta ao todo em um dia, contando as repetições?",
      o,
      x: "O total transportado é 6 vezes 14, já que cada viagem leva 14 alunos e há 6 viagens: 6 × 14 = 6 × 10 + 6 × 4 = 60 + 24 = 84 alunos ao todo no dia, somando as viagens uma a uma.\n\n74 e 96 vêm de erros na multiplicação, arredondando a mais ou a menos uma das parcelas. 64 esquece uma das seis viagens. E 20 soma 6 + 14 em vez de multiplicar, confundindo as duas operações.",
      v: { i: () => qualNum(6 * 14, o) },
    };
  })(),
  (() => {
    const o = ["117", "107", "127", "116", "118"];
    return {
      d: "facil",
      e: "Uma editora imprimiu 936 livros para distribuir em partes iguais entre 8 escolas. Quantos livros cada escola recebeu?",
      o,
      x: "Cada escola recebe 936 dividido por 8. Dividindo por partes: 800 ÷ 8 = 100, e os 136 restantes dão mais 17, porque 8 × 17 = 136. Somando, 100 + 17 = 117 livros por escola, e 8 × 117 = 936 confirma a conta.\n\n107 e 127 erram a dezena do quociente. 116 e 118 ficam a apenas 1 do valor certo, o tipo de erro que surge ao dividir apressadamente sem conferir pela multiplicação inversa.",
      v: { i: () => qualNum(936 / 8, o) },
    };
  })(),
  (() => {
    const o = ["5.000", "5.001", "4.998", "4.990", "5.010"];
    return {
      d: "facil",
      e: "Na sequência dos números naturais, qual é o sucessor do número 4.999?",
      o,
      x: "O sucessor de um número natural é o número seguinte, obtido somando 1 a ele: 4.999 + 1 = 5.000. Como todos os algarismos de 4.999 são 9, somar 1 faz cada um deles virar 0 e \"empurra\" um novo algarismo para a casa de milhar, criando o 5.000.\n\n5.001 soma 2 em vez de 1. 4.998 subtrai 1 em vez de somar, confundindo sucessor com antecessor. 4.990 e 5.010 erram a casa em que o 1 deveria ser somado.",
      v: { i: () => qualNum(4999 + 1, o) },
    };
  })(),
  (() => {
    const o = ["9.999", "9.998", "10.001", "9.990", "9.900"];
    return {
      d: "facil",
      e: "O contador de um estacionamento marca exatamente 10.000 veículos no momento em que Ana entra. Qual era a marcação exibida imediatamente antes da entrada dela?",
      o,
      x: "A marcação anterior é o antecessor de 10.000, obtido subtraindo 1: 10.000 − 1 = 9.999. Como 10.000 tem só um algarismo diferente de zero, subtrair 1 transforma o 1 da casa de milhar em 0 e todos os zeros seguintes em 9.\n\n9.998 subtrai 2 em vez de 1. 10.001 soma em vez de subtrair, trocando antecessor por sucessor. 9.990 e 9.900 erram a casa em que o 1 deveria ser subtraído.",
      v: { i: () => qualNum(10000 - 1, o) },
    };
  })(),
  (() => {
    const o = ["54", "64", "46", "144", "14"];
    return {
      d: "facil",
      e: "Numa gincana escolar, a equipe Azul somou 3.482 pontos e a equipe Verde somou 3.428 pontos. Quantos pontos a mais a equipe Azul fez?",
      o,
      x: "A diferença de pontos é 3.482 − 3.428. As centenas e milhares são iguais nos dois números, então a diferença está nas dezenas e unidades: 82 − 28 = 54 pontos a mais para a equipe Azul.\n\n64 e 46 trocam algarismos da diferença de lugar. 144 soma em vez de subtrair, ou erra uma casa na subtração. E 14 esquece a dezena, calculando só 8 − 2 nas unidades sem considerar as dezenas corretamente.",
      v: { i: () => qualNum(3482 - 3428, o) },
    };
  })(),
  (() => {
    const o = ["27", "75", "60", "51", "20"];
    return {
      d: "facil",
      e: "Sem usar parênteses, qual é o resultado de 12 + 3 × 5, seguindo a ordem correta das operações?",
      o,
      x: "Na ordem das operações, a multiplicação é feita antes da adição, mesmo sem parênteses: primeiro 3 × 5 = 15, e depois 12 + 15 = 27.\n\n75 vem de somar 12 + 3 antes de multiplicar por 5, invertendo a prioridade. 60 é só 12 × 5, ignorando o 3. 51 soma todos os números em outra combinação errada. E 20 soma 12 + 3 + 5, tratando tudo como adição.",
      v: { i: () => qualNum(12 + 3 * 5, o) },
    };
  })(),
  (() => {
    const o = ["1", "0", "2", "10", "100"];
    return {
      d: "facil",
      e: "Qual número, multiplicado por qualquer número natural, sempre resulta nesse mesmo número?",
      o,
      x: "O número 1 é o elemento neutro da multiplicação: multiplicar qualquer número natural por 1 não o altera, porque 1 vez uma quantidade é a própria quantidade. Por exemplo, 7 × 1 = 7, e 250 × 1 = 250, para qualquer valor testado.\n\n0 multiplicado por qualquer número dá sempre 0, e não o número original — é o elemento absorvente, não o neutro. 2, 10 e 100 alteram o valor de qualquer número diferente de zero, então não servem para todo número natural.",
      v: {
        i: () => {
          const cands = [1, 0, 2, 10, 100], ns = [3, 7, 12, 25, 100];
          return unicoV(cands.map((c) => ns.every((n) => c * n === n)));
        },
      },
    };
  })(),
  (() => {
    const o = ["Par", "Ímpar", "Às vezes par, às vezes ímpar", "Sempre primo", "Depende do maior deles"];
    return {
      d: "facil",
      e: "O produto de dois números pares é sempre um número de que tipo?",
      o,
      x: "Um número par é sempre um múltiplo de 2, então o produto de dois pares tem pelo menos dois fatores 2 dentro dele e é, por isso, sempre par. Por exemplo, 4 × 6 = 24, 10 × 8 = 80, e 2 × 2 = 4: em nenhum caso o resultado deixa de ser par.\n\nNão é sempre ímpar, nem varia entre par e ímpar: o resultado é par em todos os casos, sem exceção. Não é sempre primo — pelo contrário, um produto de dois números maiores que 1 quase nunca é primo. E o resultado não depende de qual dos dois é maior, só de ambos serem pares.",
      v: {
        i: () => {
          const evens = []; for (let k = 0; k <= 200; k += 2) evens.push(k);
          const todosPares = evens.every((a) => evens.slice(0, 30).every((b) => (a * b) % 2 === 0));
          return unicoV([todosPares, false, false, false, false]);
        },
      },
    };
  })(),
  (() => {
    const o = ["6.480", "6.490", "6.500", "6.400", "6.482"];
    return {
      d: "facil",
      e: "Ao arredondar o número 6.482 para a dezena mais próxima, qual valor se obtém?",
      o,
      x: "Para arredondar à dezena, olha-se o algarismo das unidades: em 6.482, é o 2. Como 2 é menor que 5, a dezena não sobe, e o número vira 6.480, mantendo as centenas e milhares e zerando as unidades.\n\n6.490 arredondaria como se o algarismo das unidades fosse 5 ou mais. 6.500 arredonda para a centena, indo longe demais. 6.400 erra para baixo, como se a dezena também tivesse que descer. E 6.482 não é um arredondamento: é o número original, sem arredondar.",
      v: { i: () => qualNum(Math.round(6482 / 10) * 10, o) },
    };
  })(),
  (() => {
    const o = ["7", "8", "6", "29", "4"];
    return {
      d: "facil",
      e: "Uma professora tem 29 balas para distribuir em partes iguais entre 4 alunos, guardando o que sobrar para depois. Quantas balas cada aluno recebe?",
      o,
      x: "Dividindo 29 por 4: 4 × 7 = 28, que é o maior múltiplo de 4 que não passa de 29, e sobra 1 bala. Então cada aluno recebe 7 balas, e a professora guarda a que sobrou.\n\n8 passaria de 29, porque 4 × 8 = 32. 6 deixa balas demais sem distribuir, já que 4 × 6 = 24 sobrariam 5, mais do que o necessário. 29 é o total de balas, não a parte de cada aluno. E 4 é o número de alunos, não a quantidade de balas de cada um.",
      v: { i: () => qualNum(Math.floor(29 / 4), o) },
    };
  })(),

  /* ------------------------------------------------------------ médias --- */
  (() => {
    const o = ["18", "22", "50", "86", "26"];
    return {
      d: "media",
      e: "Numa expressão com parênteses, quanto vale 8 + 2 × (9 − 4)?",
      o,
      x: "Resolve-se primeiro o que está dentro dos parênteses: 9 − 4 = 5. Depois, a multiplicação: 2 × 5 = 10. Por fim, a adição: 8 + 10 = 18.\n\n22 vem de ignorar os parênteses e fazer 2 × 9 − 4 antes de somar o 8. 50 surge de somar 8 + 2 antes de multiplicar por 5, invertendo a prioridade entre soma e multiplicação. E 86 faz 8 + 2 = 10, depois 10 × 9 = 90, e só então subtrai 4, resolvendo tudo na ordem errada.",
      v: { i: () => qualNum(8 + 2 * (9 - 4), o) },
    };
  })(),
  (() => {
    const o = ["138", "128", "148", "118", "158"];
    return {
      d: "media",
      e: "Uma forma de calcular 23 × 6 é separar 23 em 20 + 3 e multiplicar cada parte por 6. Seguindo essa ideia, quanto vale 23 × 6?",
      o,
      x: "Separando 23 em 20 + 3, a propriedade distributiva dá 23 × 6 = (20 × 6) + (3 × 6) = 120 + 18 = 138. É a mesma técnica usada para multiplicar de cabeça números com duas ou mais casas.\n\n128 e 148 vêm de errar uma das duas multiplicações parciais, 120 × 6 ou 3 × 6. 118 fica 20 a menos do valor certo, como se só uma parte tivesse sido somada corretamente. E 158 soma 20 a mais, invertendo algum dos passos.",
      v: { i: () => qualNum(20 * 6 + 3 * 6, o) },
    };
  })(),
  (() => {
    const o = ["289", "279", "299", "199", "309"];
    return {
      d: "media",
      e: "Num depósito, chegaram primeiro 145 caixas, depois mais 89 e depois mais 55. Como a ordem da soma não muda o resultado, quantas caixas chegaram ao todo?",
      o,
      x: "A propriedade associativa garante que 145 + 89 + 55 dá o mesmo total em qualquer ordem de soma. Somando 145 + 89 = 234, e depois 234 + 55 = 289 caixas ao todo. Somar primeiro 89 + 55 = 144, e depois 145 + 144, também dá 289.\n\n279 e 299 vêm de um erro de 10 numa das somas parciais. 199 esquece uma das três entregas na conta. E 309 soma 20 a mais do que deveria, um erro comum ao somar em outra ordem sem cuidado.",
      v: { i: () => qualNum(145 + 89 + 55, o) },
    };
  })(),
  (() => {
    const o = ["4", "3", "5", "6", "7"];
    return {
      d: "media",
      e: "Uma escola vai levar 172 alunos a um museu, em ônibus de 45 lugares cada. Quantos ônibus completos e incompletos são necessários para que nenhum aluno fique sem vaga?",
      o,
      x: "Dividindo 172 por 45, o quociente é 3 e sobram 172 − 3 × 45 = 172 − 135 = 37 alunos. Esses 37 alunos ainda precisam de um ônibus, mesmo que ele não fique cheio, então são necessários 3 + 1 = 4 ônibus ao todo.\n\n3 ônibus levariam só 135 alunos, deixando 37 de fora. 5, 6 e 7 pedem mais ônibus do que o necessário: depois do quarto ônibus, todos os 172 alunos já cabem, sem sobrar ninguém para justificar um quinto veículo.",
      v: { i: () => qualNum(Math.ceil(172 / 45), o) },
    };
  })(),
  (() => {
    const o = ["804", "794", "814", "904", "530"];
    return {
      d: "media",
      e: "Numa conta de subtração, 804 − 267 = 537. Qual soma confirma que essa subtração foi feita corretamente?",
      o,
      x: "Toda subtração pode ser conferida invertendo a operação: se 804 − 267 = 537, então 537 + 267 deve dar de volta 804. Somando, 537 + 267 = 804, confirmando a conta original. Essa conferência pela operação inversa é chamada de prova real.\n\n794 e 814 ficam perto de 804, mas vêm de um erro de 10 na soma de conferência. 904 erra a centena. E 530 nem chega perto do valor original, sinal de um erro grande na soma.",
      v: { i: () => qualNum(537 + 267, o) },
    };
  })(),
  (() => {
    const o = ["2.430", "2.420", "2.440", "2.350", "1.070"];
    return {
      d: "media",
      e: "Uma fábrica tinha 3.200 peças em estoque, vendeu 1.450 e depois produziu mais 680. Quantas peças ela tem agora?",
      o,
      x: "Seguindo a ordem dos acontecimentos: 3.200 − 1.450 = 1.750 depois da venda, e 1.750 + 680 = 2.430 depois da nova produção. O estoque final é 2.430 peças.\n\n2.420 e 2.440 vêm de um pequeno erro numa das duas contas. 2.350 erra por 80 a mais na subtração. E 1.070 soma 1.450 e 680 e subtrai o total de 3.200, invertendo a ordem das operações do problema.",
      v: { i: () => qualNum(3200 - 1450 + 680, o) },
    };
  })(),
  (() => {
    const o = ["2.000", "1.900", "2.100", "1.800", "1.750"];
    return {
      d: "media",
      e: "Quebrando 16 em 8 × 2, quanto vale 125 × 16?",
      o,
      x: "Como 16 = 8 × 2, o produto vira 125 × 8 × 2. Primeiro, 125 × 8 = 1.000, e depois 1.000 × 2 = 2.000. Quebrar o segundo fator em partes menores costuma simplificar a multiplicação de cabeça.\n\n1.900 e 2.100 vêm de um erro de 100 numa das duas multiplicações da cadeia. 1.800 fica 200 abaixo do valor certo. E 1.750 corresponderia a 125 × 14, usando o fator errado.",
      v: { i: () => qualNum(125 * 8 * 2, o) },
    };
  })(),
  (() => {
    const o = ["900", "890", "910", "800", "1.000"];
    return {
      d: "media",
      e: "Arredondando 398 e 512 cada um para a centena mais próxima antes de somar, qual valor aproximado se obtém para 398 + 512?",
      o,
      x: "398 arredonda para 400, porque a dezena 9 já empurra para a centena seguinte, e 512 arredonda para 500, porque a dezena 1 é menor que 5. Somando os arredondados, 400 + 500 = 900, uma estimativa próxima do valor exato, 910.\n\n890 e 910 usam arredondamentos incompletos, misturando um número arredondado com o outro exato. 800 arredonda os dois números para baixo, o que não é a regra usual. E 1.000 arredondaria os dois para cima, mesmo quando a regra manda o 512 descer para 500.",
      v: { i: () => qualNum(Math.round(398 / 100) * 100 + Math.round(512 / 100) * 100, o) },
    };
  })(),
  (() => {
    const o = ["91", "81", "101", "84", "94"];
    return {
      d: "media",
      e: "Uma gráfica imprimiu 2.184 folhetos, empacotados em maços de 24. Quantos maços exatos foram formados?",
      o,
      x: "O número de maços é 2.184 dividido por 24. Como 24 × 90 = 2.160 e ainda faltam 24 para completar 2.184, soma-se mais um maço: 90 + 1 = 91. Conferindo, 24 × 91 = 2.184, batendo exatamente.\n\n81 e 101 erram a dezena do quociente. 84 e 94 ficam perto do valor certo, mas não conferem com 24 × 84 = 2.016 nem com 24 × 94 = 2.256, que não batem com 2.184.",
      v: { i: () => qualNum(2184 / 24, o) },
    };
  })(),
  (() => {
    const o = ["700", "7.000", "70", "7", "7.060"];
    return {
      d: "media",
      e: "No número 48.706, qual é o valor posicional do algarismo 7?",
      o,
      x: "Em 48.706, contando da direita para a esquerda, o 7 ocupa a casa das centenas. Seu valor posicional é, por isso, 7 × 100 = 700, e não apenas o algarismo isolado.\n\n7.000 tomaria o 7 como se estivesse na casa dos milhares, onde na verdade está o 8. 70 e 7 tratam o algarismo como se estivesse na dezena ou na unidade. E 7.060 confunde o valor do 7 com um trecho do número inteiro, incluindo algarismos vizinhos.",
      v: {
        i: () => {
          const s = "48706", idx = s.indexOf("7"), valor = 7 * 10 ** (s.length - 1 - idx);
          return qualNum(valor, o);
        },
      },
    };
  })(),
  (() => {
    const o = ["1.145", "1.135", "1.155", "1.045", "1.245"];
    return {
      d: "media",
      e: "A adição 356 + 789 dá o mesmo resultado que 789 + 356, pela propriedade comutativa. Qual é esse resultado?",
      o,
      x: "Somando 356 + 789: unidades 6 + 9 = 15 (fica 5, vai 1); dezenas 5 + 8 + 1 = 14 (fica 4, vai 1); centenas 3 + 7 + 1 = 11. O resultado é 1.145, e a soma na ordem inversa, 789 + 356, chega ao mesmo valor.\n\n1.135 e 1.155 vêm de um erro de 10 ao somar as dezenas. 1.045 erra a centena por 100 a menos. E 1.245 erra por 100 a mais, um deslize comum ao arrastar o \"vai um\" para a casa errada.",
      v: { i: () => qualNum(356 + 789, o) },
    };
  })(),
  (() => {
    const o = ["0", "1", "10", "100", "2"];
    return {
      d: "media",
      e: "Qual é o resultado de multiplicar qualquer número natural por zero?",
      o,
      x: "Multiplicar por zero sempre dá zero, porque multiplicar por n significa somar uma quantidade n vezes, e somar zero vezes nada resulta em nada: 3 × 0 = 0, 250 × 0 = 0, e assim para qualquer número. O zero é o elemento absorvente da multiplicação.\n\n1, 10, 100 e 2 seriam os resultados de multiplicar por esses números, e não por zero: só valem para o número específico que está sendo multiplicado, e não para todo número natural ao ser multiplicado por zero.",
      v: {
        i: () => {
          const cands = [0, 1, 10, 100, 2], ns = [3, 7, 12, 25, 100];
          return unicoV(cands.map((c) => ns.every((n) => n * c === 0)));
        },
      },
    };
  })(),
  (() => {
    const o = ["46", "41", "56", "31", "50"];
    return {
      d: "media",
      e: "Marcos comprou 3 cadernos de R$ 12 e 2 canetas de R$ 5. Quanto ele gastou no total?",
      o,
      x: "Os cadernos custam 3 × 12 = 36 reais, e as canetas custam 2 × 5 = 10 reais. Somando os dois gastos, 36 + 10 = 46 reais foi o total gasto por Marcos nessa compra.\n\n41 e 56 vêm de um erro numa das duas multiplicações antes de somar. 31 esquece uma das canetas na conta. E 50 arredonda o total para um número redondo, em vez de somar os valores exatos.",
      v: { i: () => qualNum(3 * 12 + 2 * 5, o) },
    };
  })(),
  (() => {
    const o = ["40", "25", "16", "52", "60"];
    return {
      d: "media",
      e: "Usando colchetes, quanto vale 5 × [20 − (3 × 4)]?",
      o,
      x: "Resolve-se de dentro para fora: primeiro os parênteses, 3 × 4 = 12; depois os colchetes, 20 − 12 = 8; e por fim a multiplicação, 5 × 8 = 40.\n\n25 vem de calcular 5 × 5, como se o colchete valesse 5 em vez de 8. 16 esquece a multiplicação por 5 e só repete o valor de dentro dos colchetes duas vezes. 52 soma em vez de multiplicar na etapa final. E 60 multiplica 5 pelo 12 dos parênteses, ignorando a subtração pelo 20.",
      v: { i: () => qualNum(5 * (20 - 3 * 4), o) },
    };
  })(),
  (() => {
    const o = ["9.741", "9.714", "7.941", "1.479", "9.174"];
    return {
      d: "media",
      e: "Usando uma vez cada um dos algarismos 4, 7, 1 e 9, qual é o maior número de quatro algarismos que se pode formar?",
      o,
      x: "Para formar o maior número possível, colocam-se os algarismos em ordem decrescente, do maior para o menor: 9, 7, 4, 1, formando 9.741. Qualquer outra ordem produziria um número menor, porque a casa de milhar pesa mais que todas as outras juntas.\n\n9.714, 7.941, 1.479 e 9.174 usam os mesmos quatro algarismos, mas em ordens que não maximizam o valor, trocando a posição de pelo menos dois deles.",
      v: {
        i: () => {
          const max = Math.max(...permutacoes([4, 7, 1, 9]).map((p) => Number(p.join(""))));
          return qualNum(max, o);
        },
      },
    };
  })(),
  (() => {
    const o = ["2.058", "2.085", "2.508", "2.580", "5.028"];
    return {
      d: "media",
      e: "Usando uma vez cada um dos algarismos 0, 5, 2 e 8, sem começar por zero, qual é o menor número de quatro algarismos que se pode formar?",
      o,
      x: "Para o menor número, o algarismo das unidades de milhar não pode ser 0, então usa-se ali o menor algarismo diferente de zero, que é 2. Os demais algarismos, incluindo o 0, entram em ordem crescente nas casas seguintes: 0, 5, 8. O número fica 2.058.\n\n2.085, 2.508, 2.580 e 5.028 usam os mesmos algarismos, mas não na ordem que minimiza o valor: em cada um, pelo menos dois algarismos estão trocados de posição em relação ao arranjo mínimo.",
      v: {
        i: () => {
          const digitos = [0, 5, 2, 8], validos = permutacoes(digitos).filter((p) => p[0] !== 0).map((p) => Number(p.join("")));
          return qualNum(Math.min(...validos), o);
        },
      },
    };
  })(),
  (() => {
    const o = ["24", "23", "25", "22", "26"];
    return {
      d: "media",
      e: "Qual é a soma dos algarismos do número 47.382?",
      o,
      x: "Somando cada algarismo separadamente: 4 + 7 + 3 + 8 + 2. Agrupando, 4 + 7 = 11, 11 + 3 = 14, 14 + 8 = 22, e 22 + 2 = 24. A soma dos algarismos é 24.\n\n23 e 25 vêm de esquecer ou duplicar um dos algarismos na soma. 22 para um passo antes do fim, esquecendo o último algarismo. E 26 soma 2 a mais do que deveria, um deslize comum ao somar de cabeça sem conferir.",
      v: {
        i: () => {
          const soma = "47382".split("").reduce((s, d) => s + Number(d), 0);
          return qualNum(soma, o);
        },
      },
    };
  })(),
  (() => {
    const o = ["7", "13", "8", "2", "5"];
    return {
      d: "media",
      e: "Uma caixa comporta 15 latas. Guardando 202 latas nessas caixas, quantas latas sobram depois de formar o maior número possível de caixas cheias?",
      o,
      x: "Como 15 × 13 = 195, e 15 × 14 já passaria de 202, o maior número de caixas cheias é 13, usando 195 latas. As latas que sobram são 202 − 195 = 7, poucas demais para formar mais uma caixa cheia.\n\n13 é o número de caixas cheias, e não a sobra. 8, 2 e 5 são restos de contas com outro divisor ou com um erro na multiplicação 15 × 13, que não conferem com 202 − 195 = 7.",
      v: { i: () => qualNum(202 - 15 * Math.floor(202 / 15), o) },
    };
  })(),
  (() => {
    const o = ["3.110", "3.100", "3.360", "2.860", "3.120"];
    return {
      d: "media",
      e: "Uma fábrica produz 480 parafusos por hora. Depois de 7 horas de produção, 250 parafusos foram descartados por defeito. Quantos parafusos bons restaram?",
      o,
      x: "A produção total em 7 horas é 480 × 7 = 3.360 parafusos. Descartando os 250 com defeito, restam 3.360 − 250 = 3.110 parafusos bons, prontos para embalar e vender.\n\n3.100 e 3.120 vêm de um pequeno erro na subtração final. 3.360 é a produção total, antes do descarte, sem subtrair nada. E 2.860 subtrai 500 em vez de 250, dobrando por engano o número de descartes.",
      v: { i: () => qualNum(480 * 7 - 250, o) },
    };
  })(),
  (() => {
    const o = ["16", "4", "24", "8", "96"];
    return {
      d: "media",
      e: "Quando multiplicação e divisão aparecem juntas, sem parênteses, resolve-se da esquerda para a direita. Seguindo essa regra, quanto vale 48 ÷ 6 × 2?",
      o,
      x: "Da esquerda para a direita: primeiro 48 ÷ 6 = 8, e depois 8 × 2 = 16. Multiplicação e divisão têm a mesma prioridade, então a ordem em que aparecem no texto é que decide qual se faz primeiro.\n\n4 vem de fazer 6 × 2 = 12 primeiro e depois 48 ÷ 12, invertendo a ordem correta. 24 é só metade de 48, ignorando o × 2. 8 para no meio da conta, esquecendo de multiplicar por 2. E 96 multiplica 48 × 2 antes de dividir, também na ordem errada.",
      v: { i: () => qualNum((48 / 6) * 2, o) },
    };
  })(),
  (() => {
    const o = ["126", "116", "136", "96", "146"];
    return {
      d: "media",
      e: "Sabendo que 9 × 14 pode ser calculado como 9 × 10 + 9 × 4, quanto vale 9 × 14?",
      o,
      x: "Pela propriedade distributiva, 9 × 14 = 9 × 10 + 9 × 4 = 90 + 36 = 126. Separar o 14 em 10 + 4 facilita multiplicar de cabeça, porque 9 × 10 é imediato.\n\n116 e 136 vêm de errar uma das duas multiplicações parciais antes de somar. 96 fica bem abaixo do valor certo, como se uma das parcelas tivesse sido esquecida. E 146 soma 20 a mais do que deveria na etapa final.",
      v: { i: () => qualNum(9 * 10 + 9 * 4, o) },
    };
  })(),
  (() => {
    const o = ["144", "154", "134", "244", "164"];
    return {
      d: "media",
      e: "Uma pessoa pagou uma compra de R$ 356 com uma nota de R$ 500. Quanto ela recebeu de troco?",
      o,
      x: "O troco é a diferença entre o valor pago e o valor da compra: 500 − 356 = 144 reais. Conferindo pela soma inversa, 144 + 356 = 500, o valor exato da nota usada no pagamento.\n\n154 e 134 vêm de um erro de 10 na subtração. 244 erra por 100 a mais, como se a compra custasse 256 em vez de 356. E 164 erra por 20, um deslize ao emprestar dezena na subtração.",
      v: { i: () => qualNum(500 - 356, o) },
    };
  })(),
  (() => {
    const o = ["100", "125", "75", "90", "120"];
    return {
      d: "media",
      e: "Um ônibus sai a cada 25 minutos. Contando o primeiro no minuto 0, em que minuto sai o 5º ônibus?",
      o,
      x: "O 1º ônibus sai no minuto 0, e cada ônibus seguinte sai 25 minutos depois do anterior. Até o 5º ônibus, passam-se 4 intervalos de 25 minutos: 4 × 25 = 100. Ele sai, portanto, no minuto 100.\n\n125 conta 5 intervalos em vez de 4, como se o 1º ônibus já tivesse saído no minuto 25. 75 e 90 contam apenas 3 intervalos, ou erram a multiplicação por 25. E 120 soma um valor a mais aos 100 minutos corretos.",
      v: { i: () => qualNum(4 * 25, o) },
    };
  })(),
  (() => {
    const o = ["12.000", "1.200", "1.120", "3.400", "7.000"];
    return {
      d: "media",
      e: "Multiplicando dois números redondos, quanto é 300 × 40?",
      o,
      x: "Multiplicando os algarismos diferentes de zero, 3 × 4 = 12, e depois juntando os três zeros das duas parcelas (dois de 300, um de 40), o resultado é 12.000.\n\n1.200 perde um zero na hora de juntar os zeros das duas parcelas. 1.120 troca a ordem dos algarismos do resultado. 3.400 apenas justapõe os números originais, sem multiplicar de fato. E 7.000 viria de uma soma disfarçada de multiplicação.",
      v: { i: () => qualNum(300 * 40, o) },
    };
  })(),
  (() => {
    const o = ["72", "62", "82", "71", "73"];
    return {
      d: "media",
      e: "Dividindo 4.032 por 56, obtém-se um número exato. Qual é esse quociente?",
      o,
      x: "Como 56 × 70 = 3.920, e ainda restam 4.032 − 3.920 = 112 para dividir, e 56 × 2 = 112, o quociente completo é 70 + 2 = 72. Conferindo, 56 × 72 = 4.032, batendo exatamente com o total dado.\n\n62 e 82 erram a dezena do quociente. 71 e 73 ficam a 1 do valor certo, mas não conferem: 56 × 71 = 3.976 e 56 × 73 = 4.088, nenhum dos dois igual a 4.032.",
      v: { i: () => qualNum(4032 / 56, o) },
    };
  })(),
  (() => {
    const o = ["12", "16", "10", "22", "18"];
    return {
      d: "media",
      e: "Respeitando a ordem das operações, quanto vale (50 − 20) ÷ 5 + 3 × 2?",
      o,
      x: "Primeiro o parêntese, 50 − 20 = 30. Depois, na ordem de prioridade, a divisão e a multiplicação: 30 ÷ 5 = 6, e 3 × 2 = 6. Por fim, a adição: 6 + 6 = 12.\n\n16 vem de somar 30 ÷ 5 = 6 com 3 × 2 calculado errado. 10 esquece uma das duas parcelas antes de somar. 22 soma 20 a mais do que deveria em alguma etapa. E 18 multiplicaria 6 × 3 em vez de somar 6 + 6, trocando adição por multiplicação no final.",
      v: { i: () => qualNum((50 - 20) / 5 + 3 * 2, o) },
    };
  })(),
  (() => {
    const o = ["8", "4", "12", "41", "2"];
    return {
      d: "media",
      e: "Uma padaria fez 500 pães e quer embalar em sacos de 12 pães, vendendo apenas os sacos completos. Quantos pães sobram fora dos sacos completos?",
      o,
      x: "Como 12 × 41 = 492, esse é o maior múltiplo de 12 que não passa de 500. Os pães que sobram são 500 − 492 = 8, avulsos, fora dos sacos completos e vendidos separadamente.\n\n4, 12 e 2 são restos de contas com um divisor ou um múltiplo diferente do correto. E 41 é o número de sacos completos formados, e não a quantidade de pães que sobra fora deles.",
      v: { i: () => qualNum(500 - 12 * Math.floor(500 / 12), o) },
    };
  })(),
  (() => {
    const o = ["60", "50", "48", "80", "68"];
    return {
      d: "media",
      e: "Seguindo a ordem das operações, quanto vale 6 × (8 + 2)?",
      o,
      x: "Resolve-se primeiro o parêntese: 8 + 2 = 10. Depois, a multiplicação: 6 × 10 = 60, respeitando a ordem correta das operações.\n\n50 vem de calcular 6 × 8 e só depois somar 2, ignorando o parêntese. 48 é só 6 × 8, esquecendo a soma completamente. 80 multiplicaria por um número maior que 10. E 68 soma 6 × 8 = 48 com mais 20, uma conta que não corresponde à expressão dada.",
      v: { i: () => qualNum(6 * (8 + 2), o) },
    };
  })(),

  /* ---------------------------------------------------------- difíceis --- */
  (() => {
    const o = ["43", "53", "33", "83", "23"];
    return {
      d: "dificil",
      e: "Usando parênteses e colchetes, quanto vale 3 + 2 × [10 − (4 + 2)] × 5?",
      o,
      x: "De dentro para fora: primeiro o parêntese, 4 + 2 = 6; depois o colchete, 10 − 6 = 4. Na sequência, as multiplicações: 2 × 4 = 8, e 8 × 5 = 40. Por fim, a adição: 3 + 40 = 43.\n\n53 vem de somar 3 ao colchete antes de multiplicar, invertendo a ordem. 33 esquece o 3 inicial. 83 dobraria por engano uma das multiplicações. E 23 faz as contas numa ordem que subtrai em vez de somar em alguma etapa.",
      v: { i: () => qualNum(3 + 2 * (10 - (4 + 2)) * 5, o) },
    };
  })(),
  (() => {
    const o = ["14", "13", "15", "12", "133"];
    return {
      d: "dificil",
      e: "Uma transportadora precisa enviar 3.658 caixas, usando caminhões que levam no máximo 275 caixas cada. Quantos caminhões completos são necessários, no mínimo, para não deixar nenhuma caixa de fora?",
      o,
      x: "Dividindo 3.658 por 275: 275 × 13 = 3.575, e ainda sobram 3.658 − 3.575 = 83 caixas. Como essas 83 caixas também precisam de transporte, é necessário mais um caminhão, mesmo que ele não vá cheio: 13 + 1 = 14 caminhões.\n\n13 caminhões deixariam 83 caixas de fora. 15 e 12 pedem um número de caminhões que não corresponde à divisão feita. E 133 é um valor absurdo para o contexto, sinal de um erro grosseiro na divisão.",
      v: { i: () => qualNum(Math.ceil(3658 / 275), o) },
    };
  })(),
  (() => {
    const o = ["9.614", "9.641", "9.461", "6.941", "9.416"];
    return {
      d: "dificil",
      e: "Um número de quatro algarismos usa uma vez cada um dos algarismos 1, 4, 6 e 9. Ele deve ser par e o maior número possível nessas condições. Qual é esse número?",
      o,
      x: "O algarismo das unidades de milhar deve ser o maior disponível, 9, já que ele é ímpar e por isso não poderia ocupar as unidades, reservadas a um algarismo par. Restam 1, 4 e 6 para as outras três casas. Testando a unidade como 4, sobram 1 e 6 para centena e dezena, e colocando o maior primeiro, o número fica 9.614. Testando a unidade como 6, sobram 1 e 4, dando 9.416, menor que 9.614. A resposta é 9.614.\n\n9.641 termina em algarismo ímpar, descumprindo a condição de ser par. 9.461 troca de lugar a centena e a dezena do número correto. 9.416 usa a unidade 6 em vez de 4, um arranjo par válido, mas menor que o máximo. E 6.941 desperdiça o 9 numa casa de menor valor, quando ele deveria abrir o número.",
      v: {
        i: () => {
          const validos = permutacoes([1, 4, 6, 9]).filter((p) => p[3] % 2 === 0).map((p) => Number(p.join("")));
          return qualNum(Math.max(...validos), o);
        },
      },
    };
  })(),
  (() => {
    const o = ["75", "70", "80", "60", "90"];
    return {
      d: "dificil",
      e: "Dois números naturais somam 100, e o maior é o triplo do menor. Qual é o maior desses dois números?",
      o,
      x: "Chamando o menor de x, o maior é 3x, e a soma dá x + 3x = 4x = 100, logo x = 25. O maior número é 3 × 25 = 75. Conferindo, 25 + 75 = 100, e 75 é de fato o triplo de 25, como pedia o enunciado.\n\n70, 80, 60 e 90 não formam, com seu terço correspondente, uma soma de 100 e um fator de exatamente 3: por exemplo, o terço de 90 seria 30, e 90 + 30 = 120, não 100.",
      v: { i: () => qualNum(3 * (100 / 4), o) },
    };
  })(),
  (() => {
    const o = ["250", "245", "260", "255", "225"];
    return {
      d: "dificil",
      e: "Uma cooperativa colheu 8.400 kg de laranjas, separou 2.150 kg para suco e embalou o restante em caixas de 25 kg. Quantas caixas completas foram formadas?",
      o,
      x: "O que sobra para embalar é 8.400 − 2.150 = 6.250 kg. Dividindo por 25 kg por caixa: 6.250 ÷ 25 = 250 caixas completas, sem sobra, já que 25 × 250 = 6.250.\n\n245 e 255 vêm de um pequeno erro na divisão final. 260 usaria um valor maior que 6.250 kg para dividir. E 225 corresponderia a dividir por 25 um total menor, como se a separação para suco tivesse sido maior do que os 2.150 kg informados.",
      v: { i: () => qualNum((8400 - 2150) / 25, o) },
    };
  })(),
  (() => {
    const o = ["82", "76", "88", "70", "94"];
    return {
      d: "dificil",
      e: "Seguindo a ordem correta das operações, quanto vale 100 − 4 × (15 − 9) + 2 × 3?",
      o,
      x: "Primeiro o parêntese: 15 − 9 = 6. Depois as multiplicações: 4 × 6 = 24, e 2 × 3 = 6. Por fim, da esquerda para a direita: 100 − 24 = 76, e 76 + 6 = 82.\n\n76 para no meio da conta, esquecendo de somar a última parcela. 88 e 70 vêm de trocar a ordem entre a subtração e a soma finais. E 94 surge de um erro numa das multiplicações intermediárias, como calcular 4 × 6 como 18 em vez de 24.",
      v: { i: () => qualNum(100 - 4 * (15 - 9) + 2 * 3, o) },
    };
  })(),
  (() => {
    const o = ["160", "150", "170", "140", "180"];
    return {
      d: "dificil",
      e: "Uma família comprou 4 pacotes de arroz a R$ 23 cada e 6 pacotes de feijão a R$ 8 cada, pagando com três notas de R$ 100. Quanto sobrou de troco?",
      o,
      x: "O gasto com arroz foi 4 × 23 = 92 reais, e com feijão, 6 × 8 = 48 reais, somando 92 + 48 = 140 reais gastos. As três notas de R$ 100 somam 300 reais, e o troco é 300 − 140 = 160 reais.\n\n150 e 170 vêm de um pequeno erro numa das multiplicações antes de somar o total gasto. 140 é o valor gasto, e não o troco. E 180 subtrai um total menor do que os 140 reais realmente gastos.",
      v: { i: () => qualNum(300 - (4 * 23 + 6 * 8), o) },
    };
  })(),
  (() => {
    const o = ["4", "3", "5", "12", "6"];
    return {
      d: "dificil",
      e: "Uma gráfica tem 1.000 folhas de papel, usa 38 folhas para cada cartaz e faz o maior número possível de cartazes inteiros. As folhas que sobrarem são divididas em partes iguais entre 3 ajudantes. Quantas folhas cada ajudante recebe?",
      o,
      x: "Como 38 × 26 = 988, esse é o maior múltiplo de 38 que não passa de 1.000, e sobram 1.000 − 988 = 12 folhas. Dividindo essas 12 folhas entre os 3 ajudantes, cada um recebe 12 ÷ 3 = 4 folhas, sem sobra.\n\n3 e 5 não correspondem à divisão exata de 12 por 3. 12 é o total de folhas que sobrou, antes de dividir entre os ajudantes, e não a parte de cada um. E 6 corresponderia a dividir por apenas 2 ajudantes, não 3.",
      v: {
        i: () => {
          const resto = 1000 - 38 * Math.floor(1000 / 38);
          return resto % 3 === 0 ? qualNum(resto / 3, o) : -1;
        },
      },
    };
  })(),
  (() => {
    const o = ["11", "10", "12", "15", "9"];
    return {
      d: "dificil",
      e: "Depois de multiplicar um número por 7 e somar 15 ao resultado, obteve-se 92. Qual era o número original?",
      o,
      x: "Desfazendo as operações na ordem inversa: subtraindo o 15 que foi somado por último, 92 − 15 = 77; depois, desfazendo a multiplicação por 7, 77 ÷ 7 = 11. Conferindo: 11 × 7 = 77, e 77 + 15 = 92.\n\n10 e 12 ficam a 1 do valor certo, mas não conferem: 10 × 7 + 15 = 85, e 12 × 7 + 15 = 99, nenhum dos dois igual a 92. 15 é o valor que foi somado, não o número original. E 9 vem de dividir 92 por 7 direto, sem primeiro subtrair o 15.",
      v: { i: () => qualNum((92 - 15) / 7, o) },
    };
  })(),
  (() => {
    const o = ["24", "23", "25", "22", "26"];
    return {
      d: "dificil",
      e: "Um ônibus roda em média 420 km por dia. Rodando essa média todos os dias, quantos dias completos são necessários para ultrapassar 10.000 km rodados?",
      o,
      x: "Dividindo 10.000 por 420, o quociente é aproximadamente 23,8: em 23 dias, o ônibus roda 23 × 420 = 9.660 km, ainda abaixo de 10.000. Só no 24º dia, com 24 × 420 = 10.080 km, o total ultrapassa 10.000 km.\n\n23 dias não bastam, como mostra a conta acima. 25, 22 e 26 pedem mais ou menos dias do que o necessário: com 24 dias o total já passa de 10.000 km, tornando qualquer dia a mais desnecessário e qualquer dia a menos insuficiente.",
      v: { i: () => qualNum(Math.ceil(10000 / 420), o) },
    };
  })(),
];
