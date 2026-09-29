/* Rascunho — Raciocínio lógico / Análise combinatória aplicada.

   A explicação resolve pela fórmula (princípio multiplicativo, arranjo,
   combinação, permutação com repetição, bolinhas e divisórias); a
   conferência lista os objetos um a um — filas, comissões, senhas,
   caminhos — e conta. As duas vias precisam dar o mesmo número. */

import { unicoV, intervalo, fmt, permutacoes, combinacoes, produto, distintos, algarismos, anagramas, rodas } from "./_contagem.mjs";

export const materia = "raciocinio-logico";
export const tema = "Análise combinatória aplicada";
export const arquivo = "raciocinio-logico__analise-combinatoria-aplicada";

const D = intervalo(0, 9);
const vizinhos = (p, a, b) => Math.abs(p.indexOf(a) - p.indexOf(b)) === 1;

export const questoes = [
  (() => {
    const alt = [24, 9, 12, 8, 6];
    return {
      d: "facil",
      e: "Uma pessoa tem 4 camisas, 3 calças e 2 pares de sapatos. Quantos trajes diferentes, formados por uma camisa, uma calça e um par de sapatos, ela pode montar?",
      o: alt.map(fmt),
      x: "Cada traje combina uma camisa, uma calça e um par de sapatos. Pelo princípio multiplicativo, as escolhas independentes se multiplicam: 4 × 3 × 2 = 24 trajes diferentes.\n\n9 soma as quantidades (4 + 3 + 2), como se fosse escolher uma única peça. 12, 8 e 6 esquecem uma das três escolhas — os sapatos, as calças ou as camisas, respectivamente. Quando as escolhas são feitas todas juntas, uma de cada tipo, multiplica-se; soma-se só quando se escolhe uma coisa ou outra.",
      v: { n: () => produto(intervalo(1, 4), intervalo(1, 3), intervalo(1, 2)).length, o: alt },
    };
  })(),
  (() => {
    const alt = [10000, 5040, 40, 9999, 1000];
    return {
      d: "facil",
      e: "Quantas senhas de 4 algarismos (de 0 a 9) podem ser formadas, se os algarismos podem se repetir?",
      o: alt.map(fmt),
      x: "Cada uma das 4 posições pode receber qualquer um dos 10 algarismos, inclusive repetidos. Como cada posição é uma escolha independente das outras, as possibilidades se multiplicam: 10 × 10 × 10 × 10 = 10⁴ = 10.000 senhas, de 0000 a 9999.\n\n5.040 proíbe a repetição (10 × 9 × 8 × 7), o que o enunciado não faz. 40 soma 10 quatro vezes em vez de multiplicar. 9.999 esquece a senha 0000. E 1.000 conta senhas de 3 algarismos.",
      v: { n: () => produto(D, D, D, D).length, o: alt },
    };
  })(),
  (() => {
    const alt = [5040, 10000, 210, 3024, 4536];
    return {
      d: "media",
      e: "Quantas senhas de 4 algarismos (de 0 a 9) podem ser formadas sem repetir nenhum algarismo?",
      o: alt.map(fmt),
      x: "Há 10 escolhas para o primeiro algarismo, 9 para o segundo (não pode repetir o primeiro), 8 para o terceiro e 7 para o quarto: 10 × 9 × 8 × 7 = 5.040. É um arranjo de 10 algarismos tomados 4 a 4, porque a ordem importa — 1234 e 4321 são senhas diferentes.\n\n10.000 permite repetição. 210 é a combinação C(10, 4), que ignora a ordem. 3.024 começa com 9 escolhas, esquecendo o zero, que numa senha pode vir primeiro. E 4.536 proíbe o zero só na primeira posição, como se a senha fosse um número de 4 algarismos.",
      v: { n: () => produto(D, D, D, D).filter(distintos).length, o: alt },
    };
  })(),
  (() => {
    const alt = [648, 720, 504, 900, 729];
    return {
      d: "media",
      e: "Quantos números de três algarismos (de 100 a 999) têm os três algarismos diferentes entre si?",
      o: alt.map(fmt),
      x: "O primeiro algarismo não pode ser 0: são 9 escolhas (1 a 9). O segundo pode ser qualquer algarismo diferente do primeiro, incluindo o 0: 9 escolhas. O terceiro, diferente dos dois: 8. Total: 9 × 9 × 8 = 648.\n\n720 (10 × 9 × 8) conta também as sequências que começam com 0, que não são números de três algarismos. 504 (9 × 8 × 7) tira o 0 de todas as posições. 900 conta todos os números de 100 a 999, com ou sem repetição. E 729 (9 × 9 × 9) permite repetir algarismos.",
      v: { n: () => intervalo(100, 999).filter((k) => distintos(algarismos(k))).length, o: alt },
    };
  })(),
  (() => {
    const alt = [328, 360, 320, 450, 256];
    return {
      d: "media",
      e: "Quantos números pares de três algarismos (de 100 a 999) têm os três algarismos diferentes entre si?",
      o: alt.map(fmt),
      x: "Separando pelo último algarismo: terminando em 0, o primeiro tem 9 escolhas (1 a 9) e o do meio, 8 — são 72. Terminando em 2, 4, 6 ou 8 (4 opções), o primeiro não pode ser 0 nem igual ao último: 8 escolhas; o do meio, qualquer um dos 8 restantes — 4 × 8 × 8 = 256. Total: 72 + 256 = 328.\n\n360 multiplica 9 × 8 × 5, sem separar o caso do 0. 320 usa 8 × 8 × 5, tratando o 0 como os outros pares. 450 conta todos os pares de três algarismos, com repetição. E 256 esquece os terminados em 0.",
      v: { n: () => intervalo(100, 999).filter((k) => k % 2 === 0 && distintos(algarismos(k))).length, o: alt },
    };
  })(),
  (() => {
    const alt = [676000, 468000, 67600, 6760000, 1676];
    return {
      d: "media",
      e: "Uma placa de identificação tem 2 letras (entre as 26 do alfabeto) seguidas de 3 algarismos (de 0 a 9), podendo repetir letras e algarismos. Quantas placas diferentes podem ser formadas?",
      o: alt.map(fmt),
      x: "Cada letra tem 26 possibilidades e cada algarismo, 10, com repetição permitida. Pelo princípio multiplicativo: 26 × 26 × 10 × 10 × 10 = 676 × 1.000 = 676.000 placas.\n\n468.000 proíbe repetições (26 × 25 × 10 × 9 × 8), o que o enunciado permite. 67.600 usa só 2 algarismos, e 6.760.000 usa 4. E 1.676 soma as possibilidades das letras e dos algarismos (676 + 1.000) em vez de multiplicar.",
      v: { n: () => { let n = 0; for (let a = 0; a < 26; a++) for (let b = 0; b < 26; b++) for (let c = 0; c < 1000; c++) n++; return n; }, o: alt },
    };
  })(),
  (() => {
    const alt = [72, 144, 132, 12, 6];
    return {
      d: "media",
      e: "Entre as cidades A e B há 3 estradas, e entre B e C há 4 estradas. Uma pessoa vai de A até C, passando por B, e volta de C até A, também passando por B, sem usar na volta nenhuma estrada que usou na ida. De quantas maneiras ela pode fazer a viagem de ida e volta?",
      o: alt.map(fmt),
      x: "Na ida, são 3 × 4 = 12 caminhos. Na volta, de C para B não pode usar a estrada da ida: sobram 3; de B para A, também não: sobram 2. São 3 × 2 = 6 voltas para cada ida. Total: 12 × 6 = 72.\n\n144 permite repetir estradas na volta (12 × 12). 132 proíbe só repetir o caminho inteiro (12 × 11), deixando voltar por uma das estradas já usadas. 12 conta só a ida, e 6 só a volta. Ida e volta são etapas sucessivas: multiplicam-se.",
      v: { n: () => produto(intervalo(1, 3), intervalo(1, 4), intervalo(1, 4), intervalo(1, 3)).filter(([ab, bc, cb, ba]) => cb !== bc && ba !== ab).length, o: alt },
    };
  })(),
  (() => {
    const alt = [60, 10, 125, 12, 120];
    return {
      d: "facil",
      e: "Quantas sequências de 3 letras diferentes podem ser formadas com as letras A, B, C, D e E, considerando que a ordem das letras importa?",
      o: alt.map(fmt),
      x: "A primeira letra tem 5 possibilidades, a segunda 4 (não pode repetir) e a terceira 3: 5 × 4 × 3 = 60. É um arranjo de 5 elementos tomados 3 a 3 — ABC e CBA contam como sequências diferentes.\n\n10 é a combinação C(5, 3), que ignoraria a ordem. 125 (5 × 5 × 5) permite repetir letras. 12 soma 5 + 4 + 3. E 120 é 5!, a ordenação de todas as cinco letras, e não de três.",
      v: { n: () => { const L = ["A", "B", "C", "D", "E"]; return produto(L, L, L).filter(distintos).length; }, o: alt },
    };
  })(),
  (() => {
    const alt = [320, 120, 625, 256, 500];
    return {
      d: "media",
      e: "Uma bandeira tem 4 listras horizontais, e cada listra pode ser pintada com uma de 5 cores. Listras vizinhas não podem ter a mesma cor, mas listras não vizinhas podem. Quantas bandeiras diferentes podem ser pintadas?",
      o: alt.map(fmt),
      x: "A primeira listra tem 5 cores possíveis. Cada listra seguinte só precisa ser diferente da listra logo acima: 4 possibilidades. Total: 5 × 4 × 4 × 4 = 320.\n\n120 (5 × 4 × 3 × 2) proíbe repetir qualquer cor, inclusive em listras não vizinhas. 625 (5⁴) ignora a restrição. 256 (4⁴) aplica a restrição também à primeira listra, que não tem vizinha acima. E 500 (5 × 5 × 5 × 4) aplica a restrição a uma só listra.",
      v: { n: () => { const C = intervalo(1, 5); return produto(C, C, C, C).filter((b) => b.every((c, i) => i === 0 || c !== b[i - 1])).length; }, o: alt },
    };
  })(),
  (() => {
    const alt = [4464, 4536, 9000, 5040, 3024];
    return {
      d: "dificil",
      e: "Quantos números de quatro algarismos (de 1.000 a 9.999) têm pelo menos um algarismo repetido?",
      o: alt.map(fmt),
      x: "É mais fácil contar o complemento. Números de quatro algarismos: de 1.000 a 9.999, são 9.000. Com os quatro algarismos distintos: 9 × 9 × 8 × 7 = 4.536 (o primeiro não pode ser 0). Os que têm pelo menos um algarismo repetido são 9.000 − 4.536 = 4.464.\n\n4.536 são os de algarismos todos distintos — o oposto do pedido. 9.000 é o total. 5.040 (10 × 9 × 8 × 7) conta sequências que começam com 0. E 3.024 (9 × 8 × 7 × 6) tira o 0 de todas as posições. Quando a condição é “pelo menos um”, subtrair do total os casos sem nenhum costuma ser o caminho mais curto.",
      v: { n: () => intervalo(1000, 9999).filter((k) => !distintos(algarismos(k))).length, o: alt },
    };
  })(),
  (() => {
    const alt = [24, 4, 16, 12, 256];
    return {
      d: "facil",
      e: "Quantos anagramas tem a palavra AMOR, contando a própria palavra?",
      o: alt.map(fmt),
      x: "AMOR tem 4 letras, todas diferentes. Os anagramas são as ordenações dessas letras: 4! = 4 × 3 × 2 × 1 = 24, contando a própria palavra AMOR.\n\n4 conta só as posições da primeira letra. 16 (4 × 4) e 256 (4⁴) permitem repetir letras, o que um anagrama não faz — cada letra é usada exatamente uma vez. E 12 é metade de 24, como se houvesse letras repetidas a descontar.",
      v: { n: () => anagramas("AMOR").length, o: alt },
    };
  })(),
  (() => {
    const alt = [60, 720, 120, 360, 20];
    return {
      d: "media",
      e: "Quantos anagramas tem a palavra BANANA, contando a própria palavra?",
      o: alt.map(fmt),
      x: "BANANA tem 6 letras: três letras A, duas letras N e um B. Se as letras fossem todas diferentes, seriam 6! = 720 ordenações; mas trocar os A entre si (3! = 6 maneiras) ou os N entre si (2! = 2) não gera palavra nova. O número de anagramas é 720 ÷ (6 × 2) = 60.\n\n720 não desconta nenhuma repetição. 120 (720 ÷ 6) desconta só os A, e 360 (720 ÷ 2), só os N. E 20 divide por 3! × 3!, como se houvesse três letras N.",
      v: { n: () => anagramas("BANANA").length, o: alt },
    };
  })(),
  (() => {
    const alt = [12, 24, 6, 8, 48];
    return {
      d: "facil",
      e: "Quantos anagramas da palavra CAFE começam por vogal?",
      o: alt.map(fmt),
      x: "As vogais de CAFE são A e E: 2 escolhas para a primeira letra. As outras 3 letras ocupam as posições restantes em 3! = 6 ordens. Total: 2 × 6 = 12.\n\n24 é o total de anagramas, sem a restrição. 6 fixa uma única vogal no começo. 8 (2 × 4) usa 4 ordens para as letras restantes, em vez de 3! = 6. E 48 (2 × 4!) volta a permutar as quatro letras depois de fixar a primeira.",
      v: { n: () => anagramas("CAFE").filter((p) => "AE".includes(p[0])).length, o: alt },
    };
  })(),
  (() => {
    const alt = [48, 24, 120, 72, 12];
    return {
      d: "media",
      e: "Quantos anagramas da palavra LIVRO têm as duas vogais juntas, uma ao lado da outra?",
      o: alt.map(fmt),
      x: "As vogais de LIVRO são I e O. Colando as duas num bloco, ficam 4 “peças” para ordenar — L, V, R e o bloco —: 4! = 24 ordens. Dentro do bloco, as vogais podem aparecer como IO ou OI: 2 ordens. Total: 24 × 2 = 48.\n\n24 esquece que o bloco pode ser IO ou OI. 120 é o total de anagramas, sem restrição. 72 é o número de anagramas com as vogais separadas (120 − 48). E 12 divide por 2 em vez de multiplicar.",
      v: { n: () => anagramas("LIVRO").filter((p) => Math.abs(p.indexOf("I") - p.indexOf("O")) === 1).length, o: alt },
    };
  })(),
  (() => {
    const alt = [240, 360, 120, 600, 480];
    return {
      d: "dificil",
      e: "Quantos anagramas da palavra SAPATO não têm as duas letras A juntas, uma ao lado da outra?",
      o: alt.map(fmt),
      x: "SAPATO tem 6 letras, com o A repetido duas vezes: o total de anagramas é 6! ÷ 2! = 360. Com os dois A juntos, o par AA funciona como uma peça só: 5 peças diferentes, 5! = 120 ordens (e trocar os A de lugar não gera nada novo). Com os A separados: 360 − 120 = 240.\n\n360 é o total, sem a restrição. 120 são os anagramas com os A juntos — o oposto do pedido. 600 (720 − 120) usa 6! como total, esquecendo que os A são iguais. E 480 multiplica por 2 a contagem certa, como se os dois A fossem distintos.",
      v: { n: () => anagramas("SAPATO").filter((p) => !p.includes("AA")).length, o: alt },
    };
  })(),
  (() => {
    const alt = [48, 24, 120, 72, 96];
    return {
      d: "media",
      e: "De quantas maneiras 5 pessoas, entre elas Ana e Bia, podem formar uma fila de modo que Ana e Bia fiquem lado a lado?",
      o: alt.map(fmt),
      x: "Juntando Ana e Bia num bloco, há 4 “peças” para ordenar: o bloco e as outras três pessoas, em 4! = 24 ordens. Dentro do bloco, Ana pode estar antes ou depois de Bia: 2 ordens. Total: 24 × 2 = 48.\n\n24 esquece a ordem dentro do bloco. 120 é o total de filas, sem restrição. 72 é o número de filas com Ana e Bia separadas. E 96 multiplica por 4 em vez de 2, como se o bloco tivesse quatro arrumações internas.",
      v: { n: () => permutacoes(["Ana", "Bia", "C", "D", "E"]).filter((p) => vizinhos(p, "Ana", "Bia")).length, o: alt },
    };
  })(),
  (() => {
    const alt = [480, 240, 720, 600, 360];
    return {
      d: "media",
      e: "De quantas maneiras 6 pessoas, entre elas Caio e Davi, podem formar uma fila de modo que Caio e Davi não fiquem lado a lado?",
      o: alt.map(fmt),
      x: "O total de filas com 6 pessoas é 6! = 720. As filas em que Caio e Davi ficam juntos: tratando os dois como um bloco, 5! = 120 ordens, vezes 2 ordens dentro do bloco = 240. Filas com os dois separados: 720 − 240 = 480.\n\n240 é o número de filas com os dois juntos — o oposto do pedido. 720 ignora a restrição. 600 (720 − 120) esquece que o bloco tem duas ordens internas. E 360 é a metade do total, como se juntos e separados fossem igualmente frequentes.",
      v: { n: () => permutacoes(["Caio", "Davi", "C", "D", "E", "F"]).filter((p) => !vizinhos(p, "Caio", "Davi")).length, o: alt },
    };
  })(),
  (() => {
    const alt = [72, 36, 720, 144, 12];
    return {
      d: "media",
      e: "De quantas maneiras 3 homens e 3 mulheres podem formar uma fila alternando homem e mulher?",
      o: alt.map(fmt),
      x: "Numa fila alternada de 6 pessoas, os lugares de homens e de mulheres se intercalam: ou H, M, H, M, H, M, ou M, H, M, H, M, H — 2 padrões. Em cada padrão, os 3 homens ocupam seus 3 lugares em 3! = 6 ordens, e as 3 mulheres também: 6 × 6 = 36. Total: 2 × 36 = 72.\n\n36 esquece que a fila pode começar por homem ou por mulher. 720 é o total, sem alternância. 144 conta os dois padrões duas vezes. E 12 (2 × 3!) ordena só um dos grupos.",
      v: { n: () => permutacoes(["H1", "H2", "H3", "M1", "M2", "M3"]).filter((p) => p.every((x, i) => i === 0 || x[0] !== p[i - 1][0])).length, o: alt },
    };
  })(),
  (() => {
    const alt = [24, 120, 12, 5, 25];
    return {
      d: "media",
      e: "De quantas maneiras 5 pessoas podem se sentar em volta de uma mesa redonda com 5 lugares, considerando iguais as arrumações que diferem apenas por uma rotação?",
      o: alt.map(fmt),
      x: "Numa mesa redonda, duas arrumações que diferem só por uma rotação são a mesma: cada pessoa continua com os mesmos vizinhos, nos mesmos lados. Fixando uma pessoa num lugar para eliminar as rotações, as outras 4 se arrumam em 4! = 24 ordens. Em geral, n pessoas em volta de uma mesa: (n − 1)!.\n\n120 (5!) conta como diferentes arrumações que são só rotações umas das outras. 12 divide também por 2, o que só valeria se as arrumações espelhadas fossem consideradas iguais — o que não é o caso aqui. 5 conta só os lugares de uma pessoa. E 25 (5 × 5) permite repetir pessoas.",
      v: { n: () => rodas(["A", "B", "C", "D", "E"]).length, o: alt },
    };
  })(),
  (() => {
    const alt = [48, 120, 240, 24, 96];
    return {
      d: "dificil",
      e: "Seis pessoas, entre elas um casal, vão se sentar em volta de uma mesa redonda com 6 lugares. Considerando iguais as arrumações que diferem apenas por uma rotação, de quantas maneiras podem se sentar de modo que o casal fique lado a lado?",
      o: alt.map(fmt),
      x: "Juntando o casal num bloco, há 5 “peças” em volta da mesa: o bloco e as outras 4 pessoas. Numa mesa redonda, 5 peças se arrumam em (5 − 1)! = 4! = 24 maneiras. Dentro do bloco, o casal pode trocar de lugar: 2 ordens. Total: 24 × 2 = 48.\n\n120 é o total de arrumações de 6 pessoas na mesa, (6 − 1)!, sem a restrição. 240 (5! × 2) trata a mesa como fila. 24 esquece a troca dentro do casal. E 96 conta o bloco como se tivesse quatro arrumações internas.",
      v: { n: () => rodas(["X", "Y", "C", "D", "E", "F"]).filter((r) => { const i = r.indexOf("X"), j = r.indexOf("Y"); return (i - j + 6) % 6 === 1 || (j - i + 6) % 6 === 1; }).length, o: alt },
    };
  })(),
  (() => {
    const alt = [35, 210, 21, 343, 7];
    return {
      d: "facil",
      e: "De quantas maneiras se pode formar uma comissão de 3 pessoas escolhidas entre 7?",
      o: alt.map(fmt),
      x: "Numa comissão, a ordem de escolha não importa: {Ana, Bia, Caio} é a mesma comissão que {Caio, Ana, Bia}. É uma combinação: C(7, 3) = (7 × 6 × 5) ÷ (3 × 2 × 1) = 210 ÷ 6 = 35.\n\n210 é o arranjo (7 × 6 × 5), que contaria cada comissão 6 vezes, uma para cada ordem dos três membros. 21 é C(7, 2), comissões de 2. 343 (7³) permite repetir pessoas. E 7 conta só a escolha de uma pessoa.",
      v: { n: () => combinacoes(intervalo(1, 7), 3).length, o: alt },
    };
  })(),
  (() => {
    const alt = [60, 126, 16, 10, 36];
    return {
      d: "media",
      e: "Um grupo tem 5 homens e 4 mulheres. Quantas comissões de 4 pessoas, com exatamente 2 homens e 2 mulheres, podem ser formadas?",
      o: alt.map(fmt),
      x: "Escolhem-se os homens e as mulheres separadamente e multiplica-se: C(5, 2) = 10 duplas de homens e C(4, 2) = 6 duplas de mulheres. Cada dupla de homens pode se juntar a cada dupla de mulheres: 10 × 6 = 60 comissões.\n\n126 é C(9, 4), comissões de 4 pessoas quaisquer, sem exigir 2 de cada grupo. 16 soma 10 + 6 em vez de multiplicar. 10 conta só as duplas de homens. E 36 usa 6 × 6, como se houvesse 4 homens.",
      v: { n: () => combinacoes(["H1", "H2", "H3", "H4", "H5", "M1", "M2", "M3", "M4"], 4).filter((c) => c.filter((x) => x[0] === "H").length === 2).length, o: alt },
    };
  })(),
  (() => {
    const alt = [45, 90, 100, 10, 55];
    return {
      d: "facil",
      e: "Numa reunião com 10 pessoas, cada uma apertou a mão de cada uma das outras exatamente uma vez. Quantos apertos de mão aconteceram?",
      o: alt.map(fmt),
      x: "Cada aperto de mão envolve um par de pessoas, e o par (Ana, Bia) é o mesmo que (Bia, Ana). O número de apertos é o número de pares: C(10, 2) = (10 × 9) ÷ 2 = 45.\n\n90 (10 × 9) conta cada aperto duas vezes, uma para cada pessoa do par. 100 (10 × 10) inclui cada pessoa apertando a própria mão e ainda conta os pares duas vezes. 10 conta pessoas, não apertos. E 55 soma 1 + 2 + … + 10, incluindo um termo a mais.",
      v: { n: () => combinacoes(intervalo(1, 10), 2).length, o: alt },
    };
  })(),
  (() => {
    const alt = [28, 56, 64, 8, 36];
    return {
      d: "media",
      e: "Num plano há 8 pontos, e três deles nunca estão alinhados. Quantas retas diferentes passam por dois desses pontos?",
      o: alt.map(fmt),
      x: "Cada reta fica determinada por um par de pontos, e, como três pontos nunca estão alinhados, pares diferentes dão retas diferentes. O número de retas é C(8, 2) = (8 × 7) ÷ 2 = 28.\n\n56 (8 × 7) conta cada reta duas vezes, uma para cada ordem dos pontos. 64 (8 × 8) inclui “pares” de um ponto com ele mesmo. 8 conta pontos, não retas. E 36 é C(9, 2), que usaria 9 pontos.",
      v: { n: () => combinacoes(intervalo(1, 8), 2).length, o: alt },
    };
  })(),
  (() => {
    const alt = [20, 120, 15, 216, 6];
    return {
      d: "media",
      e: "Sobre uma circunferência estão marcados 6 pontos. Quantos triângulos diferentes têm os três vértices entre esses pontos?",
      o: alt.map(fmt),
      x: "Três pontos quaisquer de uma circunferência nunca estão alinhados, então cada trio de pontos forma um triângulo. O número de trios é C(6, 3) = (6 × 5 × 4) ÷ (3 × 2 × 1) = 20.\n\n120 (6 × 5 × 4) conta cada triângulo 6 vezes, uma para cada ordem dos vértices. 15 é C(6, 2), que conta segmentos, não triângulos. 216 (6³) permite repetir vértices. E 6 conta os pontos.",
      v: { n: () => combinacoes(intervalo(1, 6), 3).length, o: alt },
    };
  })(),
  (() => {
    const alt = [70, 84, 80, 74, 40];
    return {
      d: "dificil",
      e: "Numa reta r estão marcados 5 pontos, e numa reta s, paralela a r, estão marcados 4 pontos. Quantos triângulos têm os três vértices entre esses 9 pontos?",
      o: alt.map(fmt),
      x: "Com 9 pontos, os trios possíveis são C(9, 3) = 84. Mas trios com os três pontos na mesma reta não formam triângulo: são C(5, 3) = 10 na reta r e C(4, 3) = 4 na reta s. Triângulos: 84 − 10 − 4 = 70.\n\n84 não desconta os trios alinhados. 80 desconta só os da reta s, e 74, só os da reta r. E 40 conta só os triângulos com dois vértices em r e um em s (10 × 4), esquecendo os 30 com dois vértices em s e um em r — somados, dão os mesmos 70.",
      v: { n: () => { const pts = [...intervalo(1, 5).map((i) => `r${i}`), ...intervalo(1, 4).map((i) => `s${i}`)]; return combinacoes(pts, 3).filter((t) => new Set(t.map((p) => p[0])).size > 1).length; }, o: alt },
    };
  })(),
  (() => {
    const alt = [35, 70, 56, 21, 140];
    return {
      d: "media",
      e: "De uma turma de 8 alunos será escolhida uma comissão de 4, e um aluno específico, o representante da turma, precisa estar nela. Quantas comissões são possíveis?",
      o: alt.map(fmt),
      x: "Se o representante já está garantido, falta escolher 3 membros entre os outros 7: C(7, 3) = 35.\n\n70 é C(8, 4), o total de comissões, com ou sem o representante. 56 é C(8, 3), que escolhe os 3 restantes entre 8, incluindo o próprio representante de novo. 21 é C(7, 2), que escolhe só mais dois. E 140 multiplica 35 por 4, como se importasse a posição do representante na comissão.",
      v: { n: () => combinacoes(intervalo(1, 8), 4).filter((c) => c.includes(1)).length, o: alt },
    };
  })(),
  (() => {
    const alt = [55, 70, 15, 40, 35];
    return {
      d: "media",
      e: "De um grupo de 8 pessoas será escolhida uma comissão de 4. Duas dessas pessoas, Lia e Rui, não podem participar juntas da mesma comissão. Quantas comissões são possíveis?",
      o: alt.map(fmt),
      x: "O total de comissões de 4 entre 8 é C(8, 4) = 70. As que têm Lia e Rui juntos: com os dois garantidos, faltam 2 entre os outros 6 — C(6, 2) = 15. As comissões em que os dois não estão juntos: 70 − 15 = 55.\n\n70 ignora a restrição. 15 são as comissões com os dois juntos, o oposto do pedido. 40 conta só as comissões com exatamente um dos dois (2 × C(6, 3) = 40), esquecendo as 15 sem nenhum deles — somadas, dão 55. E 35 é C(7, 3), que fixa uma pessoa e escolhe as outras três.",
      v: { n: () => combinacoes(["Lia", "Rui", "a", "b", "c", "d", "e", "f"], 4).filter((c) => !(c.includes("Lia") && c.includes("Rui"))).length, o: alt },
    };
  })(),
  (() => {
    const alt = [100, 120, 144, 20, 60];
    return {
      d: "dificil",
      e: "Um grupo tem 6 homens e 4 mulheres. Quantas comissões de 3 pessoas com pelo menos uma mulher podem ser formadas?",
      o: alt.map(fmt),
      x: "O total de comissões de 3 pessoas entre 10 é C(10, 3) = 120. As que não têm nenhuma mulher são formadas só por homens: C(6, 3) = 20. As que têm pelo menos uma mulher: 120 − 20 = 100.\n\n120 ignora a exigência. 20 são as comissões só de homens, o oposto do pedido. 60 conta só as comissões com exatamente uma mulher (4 × C(6, 2)), esquecendo as com duas ou três. E 144 (4 × C(9, 2)) escolhe “a mulher obrigatória” e depois outras duas pessoas quaisquer — o que conta mais de uma vez as comissões com duas ou três mulheres.",
      v: { n: () => combinacoes(["H1", "H2", "H3", "H4", "H5", "H6", "M1", "M2", "M3", "M4"], 3).filter((c) => c.some((x) => x[0] === "M")).length, o: alt },
    };
  })(),
  (() => {
    const alt = [210, 151200, 60, 1000000, 120];
    return {
      d: "media",
      e: "Numa loteria, o apostador escolhe 6 números diferentes entre 10 números disponíveis, e a ordem da escolha não importa. Quantas apostas diferentes são possíveis?",
      o: alt.map(fmt),
      x: "Como a ordem não importa, é uma combinação: C(10, 6) = 10! ÷ (6! × 4!) = (10 × 9 × 8 × 7) ÷ (4 × 3 × 2 × 1) = 5.040 ÷ 24 = 210. Escolher os 6 números que entram é o mesmo que escolher os 4 que ficam de fora, por isso C(10, 6) = C(10, 4).\n\n151.200 é o arranjo (10 × 9 × 8 × 7 × 6 × 5), que contaria cada aposta 720 vezes. 1.000.000 (10⁶) permite repetir números e considera a ordem. 60 multiplica 10 × 6. E 120 é C(10, 3), que corresponde a outra quantidade de números escolhidos.",
      v: { n: () => combinacoes(intervalo(1, 10), 6).length, o: alt },
    };
  })(),
  (() => {
    const alt = [30, 56, 720, 15, 17];
    return {
      d: "media",
      e: "Um técnico precisa escalar um time de futsal com 1 goleiro e 4 jogadores de linha. Ele tem 2 goleiros e 6 jogadores de linha disponíveis, e cada jogador só atua na sua posição. Quantas escalações diferentes são possíveis?",
      o: alt.map(fmt),
      x: "Escolhe-se o goleiro entre 2 (2 maneiras) e, independentemente, os 4 jogadores de linha entre 6: C(6, 4) = 15. Pelo princípio multiplicativo: 2 × 15 = 30.\n\n56 é C(8, 5), que mistura goleiros e jogadores de linha como se todos jogassem em qualquer posição. 720 (2 × 6 × 5 × 4 × 3) ordena os jogadores de linha, o que não muda a escalação. 15 esquece a escolha do goleiro. E 17 soma 2 + 15 em vez de multiplicar.",
      v: { n: () => produto(["G1", "G2"], combinacoes(intervalo(1, 6), 4)).length, o: alt },
    };
  })(),
  (() => {
    const alt = [15, 30, 36, 12, 6];
    return {
      d: "facil",
      e: "Uma sorveteria oferece 6 sabores. De quantas maneiras se pode escolher uma casquinha com 2 sabores diferentes, sem importar a ordem das bolas?",
      o: alt.map(fmt),
      x: "Uma casquinha com chocolate e morango é a mesma que com morango e chocolate: a ordem não importa. O número de pares de sabores diferentes é C(6, 2) = (6 × 5) ÷ 2 = 15.\n\n30 (6 × 5) conta cada par duas vezes. 36 (6 × 6) conta pares ordenados e ainda permite repetir o sabor. 12 dobra o número de sabores. E 6 conta só os sabores, um de cada vez.",
      v: { n: () => combinacoes(intervalo(1, 6), 2).length, o: alt },
    };
  })(),
  (() => {
    const alt = [336, 56, 512, 21, 40320];
    return {
      d: "media",
      e: "Oito corredores disputam uma prova, e os três primeiros sobem ao pódio (1º, 2º e 3º lugares). Quantos pódios diferentes são possíveis, sem empates?",
      o: alt.map(fmt),
      x: "No pódio, a ordem importa: ser 1º e ser 2º são resultados diferentes. Há 8 possibilidades para o 1º lugar, 7 para o 2º e 6 para o 3º: 8 × 7 × 6 = 336 — um arranjo de 8 tomados 3 a 3.\n\n56 é a combinação C(8, 3), que só diria quem subiu ao pódio, sem a ordem. 512 (8³) permite o mesmo corredor em mais de um lugar. 21 soma 8 + 7 + 6 em vez de multiplicar. E 40.320 é 8!, a ordem de chegada de todos os corredores.",
      v: { n: () => { const C = intervalo(1, 8); return produto(C, C, C).filter(distintos).length; }, o: alt },
    };
  })(),
  (() => {
    const alt = ["Escolher presidente, vice e secretário entre 5 pessoas", "Escolher uma comissão de 3 pessoas entre 5", "Escolher 2 pessoas para uma dupla entre 5", "Ordenar 5 pessoas numa fila", "Escolher presidente e vice entre 5 pessoas"];
    return {
      d: "media",
      e: "Qual das escolhas abaixo tem exatamente 60 resultados possíveis?",
      o: alt,
      x: "Presidente, vice e secretário são cargos diferentes, então a ordem importa: 5 × 4 × 3 = 60.\n\nUma comissão de 3 entre 5 ignora a ordem: C(5, 3) = 10. Uma dupla entre 5 também: C(5, 2) = 10. Ordenar as 5 pessoas numa fila dá 5! = 120. E presidente e vice entre 5 dá 5 × 4 = 20. A diferença entre arranjo e combinação é exatamente a pergunta “trocar a ordem gera um resultado novo?” — nos cargos, gera; na comissão, não.",
      v: { i: () => { const P = intervalo(1, 5); const n = [produto(P, P, P).filter(distintos).length, combinacoes(P, 3).length, combinacoes(P, 2).length, permutacoes(P).length, produto(P, P).filter(distintos).length]; return unicoV(n.map((k) => k === 60)); } },
    };
  })(),
  (() => {
    const alt = [16, 8, 4, 24, 32];
    return {
      d: "facil",
      e: "Uma moeda é lançada 4 vezes seguidas, e anota-se a sequência de caras e coroas obtida. Quantas sequências diferentes são possíveis?",
      o: alt.map(fmt),
      x: "Cada lançamento tem 2 resultados (cara ou coroa), e os lançamentos são independentes. Pelo princípio multiplicativo: 2 × 2 × 2 × 2 = 2⁴ = 16 sequências possíveis.\n\n8 (2³) conta só três lançamentos, e 32 (2⁵), cinco. 4 conta os lançamentos em vez de multiplicar as possibilidades de cada um. E 24 (4!) ordena os lançamentos, o que não tem relação com os resultados de cada um.",
      v: { n: () => produto(["C", "K"], ["C", "K"], ["C", "K"], ["C", "K"]).length, o: alt },
    };
  })(),
  (() => {
    const alt = [28, 21, 10, 36, 216];
    return {
      d: "media",
      e: "Quantas soluções, com x, y e z inteiros maiores ou iguais a zero, tem a equação x + y + z = 6?",
      o: alt.map(fmt),
      x: "Uma forma de contar: imagine 6 bolinhas e 2 divisórias em fila; cada arrumação separa as bolinhas em três grupos (x, y e z), inclusive vazios. São 8 posições, das quais 2 são divisórias: C(8, 2) = 28 soluções.\n\n21 é C(7, 2), que usaria 7 posições. 10 é C(5, 2), o número de soluções em inteiros positivos (x, y, z ≥ 1). 36 (6 × 6) e 216 (6³) contam escolhas independentes de valores, sem exigir soma 6.",
      v: { n: () => { const V = intervalo(0, 6); return produto(V, V, V).filter(([x, y, z]) => x + y + z === 6).length; }, o: alt },
    };
  })(),
  (() => {
    const alt = [10, 28, 20, 3, 15];
    return {
      d: "dificil",
      e: "De quantas maneiras 6 balas iguais podem ser distribuídas entre 3 crianças, de modo que cada criança receba pelo menos uma bala?",
      o: alt.map(fmt),
      x: "Dando primeiro 1 bala a cada criança, sobram 3 balas para distribuir livremente entre as 3 — o que equivale às soluções de a + b + c = 3 com a, b, c ≥ 0: C(5, 2) = 10. Outra forma: 6 balas em fila têm 5 espaços entre si; escolher 2 desses espaços para dividir em três grupos não vazios dá C(5, 2) = 10.\n\n28 permite crianças sem bala (C(8, 2)). 20 é C(6, 3), sem relação com a divisão. 3 conta as divisões sem considerar qual criança recebe cada parte ({4, 1, 1}, {3, 2, 1} e {2, 2, 2}). E 15 é C(6, 2), que escolhe 2 das 6 balas, como se elas fossem diferentes.",
      v: { n: () => { const V = intervalo(1, 6); return produto(V, V, V).filter(([a, b, c]) => a + b + c === 6).length; }, o: alt },
    };
  })(),
  (() => {
    const alt = [15, 81, 12, 64, 20];
    return {
      d: "media",
      e: "Numa sorveteria com 3 sabores, uma pessoa vai comprar 4 picolés, podendo repetir sabores. Se só importa quantos picolés de cada sabor ela leva, quantas compras diferentes são possíveis?",
      o: alt.map(fmt),
      x: "Uma compra fica determinada por quantos picolés de cada sabor foram escolhidos: a + b + c = 4, com a, b, c ≥ 0. Pelo método das bolinhas e divisórias, são 4 bolinhas e 2 divisórias em 6 posições: C(6, 2) = 15.\n\n81 (3⁴) considera a ordem em que os picolés foram escolhidos. 12 multiplica 4 × 3. 64 (4³) troca os papéis de sabores e picolés. E 20 é C(6, 3), que usa três divisórias em vez de duas — as divisórias são sempre uma a menos que o número de sabores.",
      v: { n: () => { const V = intervalo(0, 4); return produto(V, V, V).filter(([a, b, c]) => a + b + c === 4).length; }, o: alt },
    };
  })(),
  (() => {
    const alt = [10, 6, 5, 32, 120];
    return {
      d: "media",
      e: "Numa malha de ruas quadriculada, uma pessoa sai de um cruzamento e quer chegar a outro que fica 3 quarteirões a leste e 2 quarteirões ao norte, andando só para leste ou para norte. Quantos caminhos diferentes ela pode fazer?",
      o: alt.map(fmt),
      x: "Todo caminho tem 5 quarteirões: 3 para leste (L) e 2 para norte (N), em alguma ordem. Um caminho é uma sequência como L, N, L, L, N; basta escolher em quais 2 das 5 posições vão os N: C(5, 2) = 10.\n\n6 (3 × 2) multiplica os quarteirões de cada direção. 5 conta os quarteirões de um caminho. 32 (2⁵) deixa cada quarteirão escolher livremente a direção, sem garantir a chegada ao destino. E 120 (5!) trata os quarteirões como diferentes entre si, sem descontar as trocas entre os L e entre os N.",
      v: { n: () => produto(...Array(5).fill(["L", "N"])).filter((c) => c.filter((x) => x === "L").length === 3).length, o: alt },
    };
  })(),
  (() => {
    const alt = [18, 35, 9, 24, 12];
    return {
      d: "dificil",
      e: "Numa malha quadriculada, uma pessoa vai de um cruzamento A até um cruzamento B, situado 4 quarteirões a leste e 3 ao norte de A, andando só para leste ou para norte. Ela precisa passar pelo cruzamento P, que fica 2 quarteirões a leste e 1 ao norte de A. Quantos caminhos diferentes ela pode fazer?",
      o: alt.map(fmt),
      x: "De A até P são 2 quarteirões para leste e 1 para norte: C(3, 1) = 3 caminhos. De P até B faltam 2 para leste e 2 para norte: C(4, 2) = 6 caminhos. Cada caminho do primeiro trecho combina com cada um do segundo: 3 × 6 = 18.\n\n35 é C(7, 3), o total de caminhos de A a B, sem passar obrigatoriamente por P. 9 soma 3 + 6 em vez de multiplicar. 24 e 12 erram o número de caminhos de A até P (4 ou 2, em vez de 3) e multiplicam pelos 6 do segundo trecho.",
      v: { n: () => produto(...Array(7).fill(["L", "N"])).filter((c) => c.filter((x) => x === "L").length === 4).filter((c) => { let x = 0, y = 0; for (const p of c) { if (x === 2 && y === 1) return true; if (p === "L") x++; else y++; } return x === 2 && y === 1; }).length, o: alt },
    };
  })(),
  (() => {
    const alt = [27, 9, 18, 28, 30];
    return {
      d: "media",
      e: "Quantos números inteiros de 1 a 1.000 têm todos os seus algarismos iguais?",
      o: alt.map(fmt),
      x: "Com um algarismo, todos contam: de 1 a 9, são 9. Com dois algarismos iguais: 11, 22, …, 99, são 9. Com três: 111, 222, …, 999, são 9. O 1.000 tem algarismos diferentes. Total: 9 + 9 + 9 = 27.\n\n9 conta só um dos tamanhos. 18 esquece os de um algarismo — que também têm “todos os algarismos iguais”. 28 inclui o 1.000 por engano. E 30 conta 10 números em cada tamanho, incluindo 0, 00 e 000, que não estão entre 1 e 1.000 como números de um, dois ou três algarismos.",
      v: { n: () => intervalo(1, 1000).filter((k) => new Set(algarismos(k)).size === 1).length, o: alt },
    };
  })(),
  (() => {
    const alt = [54, 55, 63, 66, 45];
    return {
      d: "dificil",
      e: "Quantos números de três algarismos (de 100 a 999) têm a soma dos algarismos igual a 10?",
      o: alt.map(fmt),
      x: "Chamando os algarismos de a (centena), b e c, procura-se a + b + c = 10, com a de 1 a 9 e b, c de 0 a 9. Para cada a, a soma b + c = 10 − a tem 11 − a soluções, sempre com b e c dentro do limite: para a = 1, são 10; para a = 2, 9; … ; para a = 9, 2. Somando: 10 + 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 = 54.\n\n55 esquece que a centena não pode passar de 9 (a “solução” a = 10, b = c = 0 não existe). 63 permite centena 0, contando sequências como 055, que não são números de três algarismos. 66 ignora os dois limites. E 45 conta uma solução a menos para cada centena.",
      v: { n: () => intervalo(100, 999).filter((k) => algarismos(k).reduce((s, d) => s + d, 0) === 10).length, o: alt },
    };
  })(),
  (() => {
    const alt = [24, 12, 120, 72, 10];
    return {
      d: "media",
      e: "De quantas maneiras 3 livros diferentes de matemática e 2 livros diferentes de física podem ser arrumados lado a lado numa estante, de modo que os livros de uma mesma matéria fiquem juntos?",
      o: alt.map(fmt),
      x: "Cada matéria forma um bloco. Os dois blocos podem ficar em 2! = 2 ordens (matemática antes ou depois). Dentro do bloco de matemática, os 3 livros se arrumam em 3! = 6 ordens; no de física, os 2 em 2! = 2. Total: 2 × 6 × 2 = 24.\n\n12 esquece a troca de posição entre os blocos. 120 (5!) ignora a exigência de livros da mesma matéria juntos. 72 multiplica por 3! em vez de 2! na ordem dos blocos. E 10 é C(5, 2), sem relação com a arrumação.",
      v: { n: () => { const juntos = (p, m) => { const i = p.map((x, k) => (x[0] === m ? k : -1)).filter((k) => k >= 0); return i.at(-1) - i[0] === i.length - 1; }; return permutacoes(["M1", "M2", "M3", "F1", "F2"]).filter((p) => juntos(p, "M") && juntos(p, "F")).length; }, o: alt },
    };
  })(),
  (() => {
    const alt = [6, 24, 120, 3, 12];
    return {
      d: "facil",
      e: "Quantos anagramas da palavra PROVA começam com P e terminam com A?",
      o: alt.map(fmt),
      x: "Com P fixado na primeira posição e A na última, sobram as letras R, O e V para as três posições do meio: 3! = 6 anagramas (PROVA, PRVOA, PORVA, POVRA, PVROA, PVORA).\n\n24 (4!) fixa só uma das pontas. 120 (5!) é o total, sem restrição. 3 conta as letras do meio, não suas ordens. E 12 dobra o resultado, como se P e A pudessem trocar de ponta — o que o enunciado não permite.",
      v: { n: () => anagramas("PROVA").filter((p) => p[0] === "P" && p[4] === "A").length, o: alt },
    };
  })(),
  (() => {
    const alt = [8315, 17576, 9261, 3380, 10140];
    return {
      d: "dificil",
      e: "Quantas senhas de 3 letras, escolhidas entre as 26 do alfabeto e podendo repetir, têm pelo menos uma vogal (A, E, I, O ou U)?",
      o: alt.map(fmt),
      x: "Senhas de 3 letras, com repetição: 26³ = 17.576. As que não têm nenhuma vogal usam só as 21 consoantes: 21³ = 9.261. As que têm pelo menos uma vogal: 17.576 − 9.261 = 8.315.\n\n17.576 é o total, sem a exigência. 9.261 são as senhas sem vogal — o oposto do pedido. 3.380 (5 × 26 × 26) exige a vogal na primeira posição. E 10.140 (3 × 5 × 26 × 26) escolhe a posição da vogal “obrigatória” e deixa as outras livres, o que conta mais de uma vez as senhas com duas ou três vogais.",
      v: { n: () => { const L = intervalo(0, 25).map((k) => String.fromCharCode(65 + k)); return produto(L, L, L).filter((s) => s.some((c) => "AEIOU".includes(c))).length; }, o: alt },
    };
  })(),
  (() => {
    const alt = [20, 30, 10, 15, 25];
    return {
      d: "media",
      e: "Um estacionamento tem 6 vagas em fila, numeradas de 1 a 6, todas vazias. Dois carros diferentes vão estacionar. De quantas maneiras eles podem ocupar as vagas sem ficar em vagas vizinhas?",
      o: alt.map(fmt),
      x: "Os dois carros podem ocupar 6 × 5 = 30 pares ordenados de vagas (o carro A numa vaga, o carro B em outra). Os pares de vagas vizinhas são 5 (1-2, 2-3, 3-4, 4-5, 5-6), e cada um pode receber os carros em 2 ordens: 10 ocupações com os carros lado a lado. Sem ficar lado a lado: 30 − 10 = 20.\n\n30 ignora a restrição. 10 são as ocupações com os carros lado a lado. 15 é C(6, 2), que esquece que os carros são diferentes e não tira os pares vizinhos. E 25 desconta só os 5 pares de vagas vizinhas, sem as duas ordens.",
      v: { n: () => { const V = intervalo(1, 6); return produto(V, V).filter(([a, b]) => a !== b && Math.abs(a - b) !== 1).length; }, o: alt },
    };
  })(),
  (() => {
    const alt = [90, 190, 45, 100, 110];
    return {
      d: "media",
      e: "De quantas maneiras se podem escolher dois números diferentes entre 1 e 20, sem importar a ordem, de modo que a soma deles seja par?",
      o: alt.map(fmt),
      x: "A soma de dois números é par quando os dois são pares ou os dois são ímpares. Entre 1 e 20 há 10 pares e 10 ímpares. Duplas de números pares: C(10, 2) = 45; duplas de ímpares: também 45. Total: 45 + 45 = 90.\n\n190 é C(20, 2), o total de duplas, sem a exigência. 45 conta só um dos dois casos. 100 (10 × 10) conta as duplas com um número par e outro ímpar — cuja soma é ímpar, o oposto do pedido. E 110 soma 45 + 45 + 20, contando também “duplas” de um número com ele mesmo.",
      v: { n: () => combinacoes(intervalo(1, 20), 2).filter(([a, b]) => (a + b) % 2 === 0).length, o: alt },
    };
  })(),
  (() => {
    const alt = [2520, 4536, 2016, 3600, 5000];
    return {
      d: "dificil",
      e: "Quantos números de quatro algarismos distintos são maiores que 5.000?",
      o: alt.map(fmt),
      x: "Um número de quatro algarismos maior que 5.000 começa com 5, 6, 7, 8 ou 9: 5 escolhas. Os outros três algarismos, distintos entre si e do primeiro, podem incluir o 0: 9 × 8 × 7 = 504 para cada início. Total: 5 × 504 = 2.520. (O próprio 5.000 tem zeros repetidos e nem entra na conta.)\n\n4.536 conta todos os números de quatro algarismos distintos. 2.016 (4 × 504) começa só de 6 a 9, esquecendo os que começam com 5 — todos maiores que 5.000. 3.600 (5 × 10 × 9 × 8) esquece que o algarismo inicial não pode reaparecer. E 5.000 conta todos os números de 5.000 a 9.999, com ou sem repetição.",
      v: { n: () => intervalo(5001, 9999).filter((k) => distintos(algarismos(k))).length, o: alt },
    };
  })(),
  (() => {
    const alt = [6, 2, 3, 21, 216];
    return {
      d: "media",
      e: "Três dados comuns, de cores diferentes, são lançados. Em quantos dos resultados possíveis a soma das faces é 5?",
      o: alt.map(fmt),
      x: "As somas 5 com três dados, cada um de 1 a 6, vêm de dois tipos de resultado: {1, 1, 3} e {1, 2, 2}. Como os dados são distinguíveis pela cor, cada tipo aparece em 3 ordens: o número diferente pode estar em qualquer um dos três dados. Total: 3 + 3 = 6.\n\n2 conta só os tipos, sem as ordens. 3 conta as ordens de um único tipo. 21 é C(7, 2), que conta as soluções de a + b + c = 5 admitindo o 0, que não existe num dado. E 216 é o total de resultados de três dados.",
      v: { n: () => { const F = intervalo(1, 6); return produto(F, F, F).filter(([a, b, c]) => a + b + c === 5).length; }, o: alt },
    };
  })(),
  (() => {
    const alt = [3, 2, 8, 4, 6];
    return {
      d: "facil",
      e: "Três moedas diferentes são lançadas. Em quantos dos resultados possíveis aparecem exatamente duas caras?",
      o: alt.map(fmt),
      x: "Com três moedas distinguíveis, os resultados com exatamente duas caras são CCK, CKC e KCC (C = cara, K = coroa): a coroa pode estar em qualquer uma das três moedas. São 3 — que é C(3, 2), a escolha de quais 2 moedas dão cara.\n\n2 conta o número de caras, não os resultados. 8 é o total de resultados (2³). 4 conta os resultados com pelo menos duas caras, incluindo CCC. E 6 conta as ordens como se as duas caras fossem diferentes entre si.",
      v: { n: () => produto(["C", "K"], ["C", "K"], ["C", "K"]).filter((r) => r.filter((x) => x === "C").length === 2).length, o: alt },
    };
  })(),
];
