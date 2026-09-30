/* Rascunho — Estatística / Tabelas de frequência.

   A explicação lê a tabela (frequências absolutas, relativas, acumuladas,
   classes, pontos médios); a conferência reconstrói os dados: expande a
   tabela em lista e conta direto, classifica valores nas classes pelo
   critério [a, b), espalha os dados dentro das classes para estimar médias,
   inverte a ogiva por bisseção e resolve os problemas inversos por busca. */

import { unicoV, media, mediana, variancia, soma, expande, qualNum, bissecao } from "./_estatistica.mjs";

export const materia = "estatistica";
export const tema = "Tabelas de frequência";
export const arquivo = "estatistica__tabelas-de-frequencia";

/* índice da classe [lim[k], lim[k + 1]) que contém x (−1 se nenhuma) */
const classe = (x, lim) => lim.findIndex((a, k) => k < lim.length - 1 && x >= a && x < lim[k + 1]);
/* dados sintéticos: fᵢ valores espalhados por igual dentro de cada classe, simétricos em torno do ponto médio */
const espalha = (lim, f) => f.flatMap((n, k) => Array.from({ length: n }, (_, j) => lim[k] + ((j + 0.5) * (lim[k + 1] - lim[k])) / n));
/* ogiva: quantos dados ficam abaixo de x, interpolando linearmente dentro de cada classe */
const ogiva = (lim, f) => (x) => {
  let s = 0;
  for (let k = 0; k < f.length; k++) {
    const a = lim[k], b = lim[k + 1];
    if (x >= b) s += f[k];
    else if (x > a) s += (f[k] * (x - a)) / (b - a);
  }
  return s;
};

export const questoes = [
  /* ------------------------------------------------------------ fáceis --- */
  (() => {
    const o = ["0,2", "8", "0,8", "5", "32"];
    return {
      d: "facil",
      e: "Numa pesquisa com 40 pessoas, 8 escolheram o sabor morango. Qual é a frequência relativa do sabor morango?",
      o,
      x: "A frequência relativa é a frequência absoluta dividida pelo total: 8/40 = 0,2, ou 20%. Ela indica a fração do total que cada categoria representa e permite comparar pesquisas de tamanhos diferentes.\n\n8 é a frequência absoluta, a contagem. 0,8 erra a vírgula, ou divide 8 por 10. 5 inverte a divisão: 40/8. E 32 é a quantidade de pessoas que não escolheram morango.",
      v: { i: () => { const r = [...Array(8).fill("morango"), ...Array(32).fill("outro")]; return qualNum(r.filter((x) => x === "morango").length / r.length, o); } },
    };
  })(),
  (() => {
    const o = ["16", "5", "20", "11", "9"];
    return {
      d: "facil",
      e: "Numa tabela de idades, 15 anos tem frequência 4, 16 anos tem 7, 17 anos tem 5 e 18 anos tem 4. Qual é a frequência acumulada até 17 anos?",
      o,
      x: "A frequência acumulada soma as frequências até a linha pedida: 4 + 7 + 5 = 16. Ela responde quantos têm até 17 anos, isto é, 17 anos ou menos.\n\n5 é a frequência simples de 17 anos, sem acumular. 20 é o total da tabela, que inclui os de 18 anos. 11 acumula só até 16 anos. E 9 soma as frequências de 17 e 18 anos, o acumulado no sentido inverso.",
      v: { i: () => { const d = expande([15, 16, 17, 18], [4, 7, 5, 4]); return qualNum(d.filter((x) => x <= 17).length, o); } },
    };
  })(),
  (() => {
    const o = ["20", "4", "9", "5", "40"];
    return {
      d: "facil",
      e: "Uma tabela de frequências tem quatro linhas, com frequências absolutas 3, 5, 9 e 3. Quantas observações foram feitas?",
      o,
      x: "O total de observações é a soma das frequências absolutas: 3 + 5 + 9 + 3 = 20. Numa tabela completa, a última frequência acumulada também é igual a esse total. Ele é o denominador de todas as frequências relativas: a primeira linha, por exemplo, representa 3/20 = 15% das observações.\n\n4 é o número de linhas, ou de categorias, e não de observações. 9 é a maior frequência. 5 é a média das frequências. E 40 dobra o total, sem motivo.",
      v: { i: () => qualNum(expande(["a", "b", "c", "d"], [3, 5, 9, 3]).length, o) },
    };
  })(),
  (() => {
    const o = ["Ônibus, com 45%", "Ônibus, com 18%", "A pé, com 25%", "Carro, com 17,5%", "Bicicleta, com 12,5%"];
    return {
      d: "facil",
      e: "Dos 40 alunos de uma turma, 18 vão à escola de ônibus, 7 de carro, 5 de bicicleta e 10 a pé. Qual meio de transporte tem a maior frequência relativa, e qual é ela?",
      o,
      x: "A frequência relativa é a contagem dividida pelo total de 40 alunos. A maior contagem é a do ônibus, 18, e 18/40 = 0,45, ou 45%. Como todas as categorias têm o mesmo denominador, a maior frequência relativa é sempre a da maior frequência absoluta.\n\n18% lê a contagem como porcentagem. A pé tem 25%, carro tem 17,5% e bicicleta tem 12,5%: são valores certos, mas menores que os 45% do ônibus.",
      v: {
        i: () => {
          const cat = ["Ônibus", "Carro", "Bicicleta", "A pé"], f = [18, 7, 5, 10], n = soma(f), k = f.indexOf(Math.max(...f));
          return unicoV(o.map((t) => { const m = t.match(/^(.+), com ([\d,]+)%$/); return m[1] === cat[k] && Math.abs(Number(m[2].replace(",", ".")) - (100 * f[k]) / n) < 1e-9; }));
        },
      },
    };
  })(),
  (() => {
    const o = ["25", "20", "30", "10", "50"];
    return {
      d: "facil",
      e: "Qual é o ponto médio da classe [20, 30) numa tabela de dados agrupados?",
      o,
      x: "O ponto médio é a média dos limites da classe: (20 + 30)/2 = 25. Ele representa todos os valores da classe no cálculo de médias e variâncias de dados agrupados, supondo que os dados se distribuam de modo equilibrado dentro dela.\n\n20 é o limite inferior e 30, o superior. 10 é a amplitude da classe. E 50 é a soma dos limites, sem dividir por 2.",
      v: { i: () => qualNum(media(espalha([20, 30], [10])), o) },
    };
  })(),
  (() => {
    const o = ["5", "10", "15", "12,5", "25"];
    return {
      d: "facil",
      e: "Qual é a amplitude da classe [10, 15) numa tabela de dados agrupados?",
      o,
      x: "A amplitude de uma classe é a diferença entre o limite superior e o inferior: 15 − 10 = 5. Em tabelas com classes de mesma amplitude, esse valor é o passo de um limite ao seguinte: depois de [10, 15) vêm [15, 20), [20, 25), e assim por diante. Não se confunde com a amplitude total dos dados, que é o maior valor menos o menor.\n\n10 é o limite inferior da classe, e 15, o superior. 12,5 é o ponto médio, (10 + 15)/2. E 25 soma os limites em vez de subtraí-los.",
      v: { i: () => qualNum(15 - 10, o) },
    };
  })(),
  (() => {
    const o = ["5", "1", "0,5", "10", "3"];
    return {
      d: "facil",
      e: "Numa pesquisa sobre o número de irmãos, as respostas foram 0, 1, 1, 2, 0, 1, 3, 1, 2 e 1. Qual é a frequência absoluta do valor 1?",
      o,
      x: "A frequência absoluta é a contagem de vezes que o valor aparece. O 1 aparece na 2ª, 3ª, 6ª, 8ª e 10ª respostas: cinco vezes. Na tabela, a linha do valor 1 teria frequência 5 e frequência relativa 5/10 = 0,5. Montar a tabela é exatamente isso: contar, valor por valor, quantas vezes cada um aparece.\n\n1 é o próprio valor, e não a contagem. 0,5 é a frequência relativa. 10 é o total de respostas. E 3 é o maior valor da variável.",
      v: { i: () => qualNum([0, 1, 1, 2, 0, 1, 3, 1, 2, 1].filter((x) => x === 1).length, o) },
    };
  })(),
  (() => {
    const o = ["1", "n, o número de observações", "0", "0,5", "Depende da tabela"];
    return {
      d: "facil",
      e: "Numa tabela de frequências completa, quanto vale a soma das frequências relativas de todas as linhas?",
      o,
      x: "Cada frequência relativa é fᵢ/n, e a soma das frequências absolutas é n. Então a soma das relativas é n/n = 1, ou 100% quando se usam porcentagens. É uma boa verificação para achar erros de conta numa tabela.\n\nn é a soma das frequências absolutas, e não das relativas. 0 e 0,5 não têm justificativa. E a soma não depende da tabela: é sempre 1, por construção.",
      v: {
        i: () => {
          const tabelas = [[3, 5, 9, 3], [10, 20], [1, 1, 1, 1, 1, 7]];
          const somas = tabelas.map((f) => soma(f.map((x) => x / soma(f))));
          const afirma = { "1": somas.every((s) => Math.abs(s - 1) < 1e-12), "n, o número de observações": somas.every((s, k) => Math.abs(s - soma(tabelas[k])) < 1e-12), "0": somas.every((s) => s === 0), "0,5": somas.every((s) => s === 0.5), "Depende da tabela": new Set(somas.map((s) => s.toFixed(9))).size > 1 };
          return unicoV(o.map((t) => afirma[t]));
        },
      },
    };
  })(),
  (() => {
    const o = ["75%", "37,5%", "30%", "25%", "15%"];
    return {
      d: "facil",
      e: "Uma tabela tem quatro classes com frequências 5, 10, 15 e 10. Qual é a frequência relativa acumulada até a terceira classe?",
      o,
      x: "O total é 5 + 10 + 15 + 10 = 40, e o acumulado até a terceira classe é 5 + 10 + 15 = 30. A frequência relativa acumulada é 30/40 = 0,75, ou 75%: três quartos das observações estão nas três primeiras classes.\n\n37,5% é a frequência relativa só da terceira classe, 15/40. 30% lê a contagem acumulada como porcentagem. 25% é a fração que sobra na última classe. E 15% lê a frequência da terceira classe como porcentagem.",
      v: { i: () => { const d = expande([1, 2, 3, 4], [5, 10, 15, 10]); return qualNum((100 * d.filter((x) => x <= 3).length) / d.length, o); } },
    };
  })(),
  (() => {
    const o = ["Não: o 4 fica na classe [4, 6)", "Sim: fica nas duas classes", "Sim: fica só em [2, 4)", "Não fica em nenhuma classe", "Depende da frequência da classe"];
    return {
      d: "facil",
      e: "Uma tabela usa as classes [2, 4) e [4, 6). O valor 4 é contado na classe [2, 4)?",
      o,
      x: "A notação [2, 4) indica um intervalo fechado em 2 e aberto em 4: inclui o 2 e todos os valores até o 4, sem incluir o 4. O valor 4 é o limite inferior da classe seguinte, [4, 6), e é contado nela. Assim, cada valor cai em exatamente uma classe.\n\nFicar nas duas classes contaria o mesmo dado duas vezes. Ficar só em [2, 4) contraria o parêntese aberto. Não ficar em nenhuma deixaria o dado de fora da tabela. E a classificação não depende das frequências, só dos limites.",
      v: { i: () => { const dentro = [[2, 4], [4, 6]].map(([a, b]) => 4 >= a && 4 < b); return unicoV([!dentro[0] && dentro[1], dentro[0] && dentro[1], dentro[0] && !dentro[1], !dentro[0] && !dentro[1], false]); } },
    };
  })(),
  (() => {
    const o = ["6", "5", "32", "3", "5,97"];
    return {
      d: "facil",
      e: "Pela regra de Sturges, k = 1 + 3,3 · log n, arredondado para o inteiro mais próximo, quantas classes deve ter uma tabela com n = 32 observações?",
      o,
      x: "Com n = 32, log 32 ≈ 1,505, e k = 1 + 3,3 · 1,505 ≈ 5,97, que arredonda para 6 classes. A regra equivale a k = 1 + log₂ n, que dá exatamente 1 + 5 = 6. É uma sugestão prática: com poucas classes, a tabela esconde a forma dos dados; com muitas, sobram classes quase vazias.\n\n5 trunca 5,97 em vez de arredondar, ou esquece o 1 da fórmula. 32 é o número de observações. 3 esquece o fator 3,3. E 5,97 não foi arredondado: o número de classes precisa ser inteiro.",
      v: { i: () => { const k = Math.round(1 + 3.3 * Math.log10(32)); if (k !== 1 + Math.log2(32)) throw new Error("Sturges"); return qualNum(k, o); } },
    };
  })(),
  (() => {
    const o = ["25%", "75%", "15%", "30%", "45%"];
    return {
      d: "facil",
      e: "Os alunos de uma escola estudam em três turnos. As frequências relativas da manhã e da tarde são 45% e 30%. Qual é a frequência relativa da noite?",
      o,
      x: "As frequências relativas de todas as categorias de uma variável somam 100%, porque cada aluno está em exatamente um turno. Então a noite tem 100% − 45% − 30% = 25%. A mesma soma serve para conferir tabelas: se as porcentagens passassem de 100%, além do que o arredondamento explica, haveria erro.\n\n75% é a soma da manhã com a tarde, e não o que falta. 15% é a diferença entre manhã e tarde. 30% e 45% repetem as porcentagens dos outros turnos.",
      v: { i: () => qualNum(bissecao((c) => 45 + 30 + c - 100, -100, 200), o) },
    };
  })(),

  /* ------------------------------------------------------------ médias --- */
  (() => {
    const o = ["15", "35", "12", "50", "8"];
    return {
      d: "media",
      e: "Uma tabela com 50 observações tem quatro linhas, com frequências 12, x, 15 e 8. Qual é o valor de x?",
      o,
      x: "As frequências de todas as linhas somam o total: 12 + x + 15 + 8 = 50. Então x = 50 − 35 = 15. Esse tipo de problema aparece quando uma tabela chega com uma frequência apagada: o total, ou a última frequência acumulada, permite recuperá-la. Com x = 15, as acumuladas ficam 12, 27, 42 e 50.\n\n35 é a soma das frequências conhecidas, e não a que falta. 12 repete a primeira frequência. 50 é o total. E 8 repete a última frequência.",
      v: { i: () => qualNum(bissecao((x) => 12 + x + 15 + 8 - 50, -100, 100), o) },
    };
  })(),
  (() => {
    const o = ["≈ 36,7%", "≈ 83,3%", "25%", "11%", "≈ 46,7%"];
    return {
      d: "media",
      e: "As frequências acumuladas de uma tabela são 6, 14, 25 e 30. Qual é a frequência relativa da terceira classe?",
      o,
      x: "A frequência simples da terceira classe é a diferença entre acumuladas: 25 − 14 = 11. O total é a última acumulada, 30. A frequência relativa é 11/30 ≈ 0,367, ou cerca de 36,7%.\n\n83,3% é a relativa acumulada até a terceira classe, 25/30. 25% lê a acumulada como porcentagem. 11% lê a frequência simples como porcentagem. E 46,7% é 14/30, a relativa acumulada até a segunda.",
      v: { i: () => { const ac = [6, 14, 25, 30], f = ac.map((a, k) => a - (ac[k - 1] ?? 0)); return qualNum((100 * f[2]) / ac[3], o, 0.002); } },
    };
  })(),
  (() => {
    const o = ["9", "8", "35", "4", "10"];
    return {
      d: "media",
      e: "Os dados vão de 12 a 47. Qual é a menor amplitude inteira para 4 classes iguais, começando em 12 e na forma [a, b), que cubra todos os dados?",
      o,
      x: "As 4 classes, de amplitude h, cobrem de 12 até 12 + 4h, sem incluir esse limite. Para incluir o 47, é preciso 12 + 4h > 47, isto é, h > 8,75. A menor amplitude inteira é 9, com classes [12, 21), [21, 30), [30, 39) e [39, 48).\n\n8 cobriria só até 44, deixando de fora os dados entre 44 e 47. 35 é a amplitude total dos dados. 4 é o número de classes. E 10 também serve, mas não é a menor.",
      v: { i: () => qualNum([...Array(100).keys()].find((h) => h > 0 && 12 + 4 * h > 47), o) },
    };
  })(),
  (() => {
    const o = ["12", "15", "0,15", "65", "5,3"];
    return {
      d: "media",
      e: "Numa amostra de 80 pessoas, a frequência relativa de uma categoria é 0,15. Quantas pessoas estão nessa categoria?",
      o,
      x: "A frequência absoluta é a relativa vezes o total: 0,15 · 80 = 12 pessoas. Conferindo: 12/80 = 0,15. A relação fᵢ = frᵢ · n vale nos dois sentidos: com a contagem e o total, obtém-se a relativa; com a relativa e o total, obtém-se a contagem.\n\n15 lê a relativa como contagem, a partir de 15%. 0,15 é a própria frequência relativa. 65 é o complemento em pessoas, 80 − 15, com o mesmo erro. E 5,3 divide o total pela porcentagem, 80/15.",
      v: { i: () => qualNum(bissecao((f) => f / 80 - 0.15, 0, 80), o) },
    };
  })(),
  (() => {
    const o = ["[20, 30)", "[10, 20)", "[30, 40)", "[40, 50)", "[0, 10)"];
    return {
      d: "media",
      e: "As classes [0, 10), [10, 20), [20, 30), [30, 40) e [40, 50) têm frequências 5, 12, 18, 10 e 5. Em qual classe está a mediana?",
      o,
      x: "Com 50 observações, a mediana fica entre a 25ª e a 26ª, na ordem. As frequências acumuladas são 5, 17, 35, 45 e 50: até [10, 20) há 17 observações, e até [20, 30), 35. A 25ª e a 26ª estão em [20, 30), a classe mediana.\n\n[10, 20) acumula só 17, antes da posição central. [30, 40) começa depois da 35ª observação. [40, 50) e [0, 10) são as classes extremas, bem longe do centro.",
      v: { i: () => { const lim = [0, 10, 20, 30, 40, 50], d = espalha(lim, [5, 12, 18, 10, 5]), k = classe(mediana(d), lim), rot = ["[0, 10)", "[10, 20)", "[20, 30)", "[30, 40)", "[40, 50)"]; return unicoV(o.map((t) => t === rot[k])); } },
    };
  })(),
  (() => {
    const o = ["Bom", "Regular", "Ótimo", "Ruim", "Não existe mediana para respostas em categorias"];
    return {
      d: "media",
      e: "Numa pesquisa de satisfação com 100 clientes, 10 responderam ruim, 25 regular, 40 bom e 25 ótimo. Qual é a mediana das respostas?",
      o,
      x: "A variável é qualitativa ordinal: as categorias têm ordem, de ruim a ótimo, e isso basta para definir a mediana. Com 100 respostas, a mediana fica entre a 50ª e a 51ª, na ordem. As acumuladas são 10, 35, 75 e 100: as posições de 36 a 75 são todas bom, e a mediana é bom.\n\nRegular termina na 35ª posição, antes do centro. Ótimo começa na 76ª. Ruim ocupa só as dez primeiras. E a mediana existe, sim, para categorias ordenadas; só não existe para categorias sem ordem, como cores.",
      v: {
        i: () => {
          const rot = ["Ruim", "Regular", "Bom", "Ótimo"], m = mediana(expande([1, 2, 3, 4], [10, 25, 40, 25]));
          return unicoV(o.map((t) => Number.isInteger(m) && t === rot[m - 1]));
        },
      },
    };
  })(),
  (() => {
    const o = ["18", "9", "21", "30", "12"];
    return {
      d: "media",
      e: "Numa loja, foram registradas 12 compras de 1 item, 9 de 2 itens, 6 de 3 itens e 3 de 4 itens. Em quantas compras havia 2 itens ou mais?",
      o,
      x: "Somam-se as frequências de 2, 3 e 4 itens: 9 + 6 + 3 = 18 compras. É a frequência acumulada no sentido decrescente, do maior valor para o menor. Pelo complemento, o resultado é o mesmo: o total é 30, e só as 12 compras de 1 item ficam de fora, 30 − 12 = 18.\n\n9 fica só com as compras de 2 itens. 21 acumula no sentido crescente, até 2 itens. 30 é o total de compras. E 12 é o complemento, as compras de 1 item.",
      v: { i: () => qualNum(expande([1, 2, 3, 4], [12, 9, 6, 3]).filter((x) => x >= 2).length, o) },
    };
  })(),
  (() => {
    const o = ["25%", "15%", "10%", "75%", "60%"];
    return {
      d: "media",
      e: "Numa pesquisa sobre tempo de espera, 40% esperaram até 5 minutos, 35% entre 5 e 10, 15% entre 10 e 15 e 10% mais de 15. Que porcentagem esperou 10 minutos ou mais?",
      o,
      x: "As duas últimas faixas correspondem a 10 minutos ou mais: 15% + 10% = 25%. Também dá para pensar no complemento: 100% − (40% + 35%) = 25%. Como as faixas não se sobrepõem, as porcentagens de faixas diferentes podem ser somadas.\n\n15% fica só com a faixa de 10 a 15 minutos. 10% fica só com a faixa acima de 15. 75% é a porcentagem que esperou menos de 10 minutos. E 60% soma as três últimas faixas, incluindo a de 5 a 10 minutos, que não serve.",
      v: { i: () => { const d = expande([3, 7, 12, 20], [40, 35, 15, 10]); return qualNum((100 * d.filter((x) => x >= 10).length) / d.length, o); } },
    };
  })(),
  (() => {
    const o = ["≈ 46,7%", "≈ 66,7%", "≈ 33,3%", "14%", "50%"];
    return {
      d: "media",
      e: "Numa turma de 12 meninas e 18 meninos, 8 meninas e 6 meninos usam óculos. Que porcentagem da turma usa óculos?",
      o,
      x: "Numa tabela de dupla entrada, o total de quem usa óculos é 8 + 6 = 14, e o total da turma, 12 + 18 = 30. A porcentagem é 14/30 ≈ 46,7%. É o total da coluna de quem usa óculos dividido pelo total geral, porque a pergunta é sobre a turma inteira.\n\n66,7% é a porcentagem entre as meninas, 8/12. 33,3% é a porcentagem entre os meninos, 6/18. 14% lê a contagem como porcentagem. E 50% supõe metade sem fazer a conta.",
      v: { i: () => { const turma = [...Array(8).fill("F1"), ...Array(4).fill("F0"), ...Array(6).fill("M1"), ...Array(12).fill("M0")]; return qualNum((100 * turma.filter((x) => x.endsWith("1")).length) / turma.length, o, 0.002); } },
    };
  })(),
  (() => {
    const o = ["60%", "36%", "≈ 54,5%", "66%", "75%"];
    return {
      d: "media",
      e: "Numa pesquisa com 50 clientes, 20 compraram na loja física e 30 pelo site. Ficaram satisfeitos 15 clientes da loja e 18 do site. Entre os clientes do site, que porcentagem ficou satisfeita?",
      o,
      x: "A pergunta fixa o grupo de referência: os 30 clientes do site. Destes, 18 ficaram satisfeitos, e 18/30 = 0,6, ou 60%. Numa tabela de dupla entrada, o denominador pode ser o total da linha, o da coluna ou o total geral, e cada escolha responde a uma pergunta diferente.\n\n36% divide pelo total geral, 18/50. 54,5% responde a outra pergunta: entre os satisfeitos, que fração comprou pelo site, 18/33. 66% é a porcentagem de satisfeitos no total, 33/50. E 75% é a porcentagem de satisfeitos na loja física, 15/20.",
      v: {
        i: () => {
          const clientes = [...Array(15).fill("loja+"), ...Array(5).fill("loja-"), ...Array(18).fill("site+"), ...Array(12).fill("site-")], site = clientes.filter((c) => c.startsWith("site"));
          return qualNum((100 * site.filter((c) => c.endsWith("+")).length) / site.length, o);
        },
      },
    };
  })(),
  (() => {
    const o = ["3, 8, 6, 12", "3, 8, 8, 12", "0, 5, 9, 12", "3, 3, 3, 12", "1, 2, 3, 4"];
    return {
      d: "media",
      e: "Qual destas sequências não pode ser a coluna de frequências acumuladas de uma tabela de frequências?",
      o,
      x: "A frequência acumulada soma as frequências até cada linha, e frequências nunca são negativas. Por isso, a coluna das acumuladas nunca diminui de uma linha para a seguinte: pode crescer, ou ficar igual quando uma classe está vazia. Em 3, 8, 6, 12, a queda de 8 para 6 exigiria uma frequência igual a −2.\n\nAs outras sequências são possíveis. Em 3, 8, 8, 12, a terceira classe está vazia. Em 0, 5, 9, 12, a vazia é a primeira. Em 3, 3, 3, 12, a segunda e a terceira estão vazias. E 1, 2, 3, 4 tem uma observação por classe.",
      v: { i: () => unicoV(o.map((t) => { const s = t.split(", ").map(Number); return !s.every((x, k) => x >= 0 && (k === 0 || x >= s[k - 1])); })) },
    };
  })(),
  (() => {
    const o = ["10", "7", "16", "3", "13"];
    return {
      d: "media",
      e: "As classes [0, 5), [5, 10), [10, 15) e [15, 20) têm frequências 3, 7, 6 e 4. Quantos valores são menores que 10?",
      o,
      x: "Os valores menores que 10 estão nas classes [0, 5) e [5, 10), porque a segunda é aberta em 10. A soma é 3 + 7 = 10: é a frequência acumulada até a segunda classe. Como 10 coincide com um limite de classe, a resposta sai exata, sem precisar estimar como os dados se espalham dentro das classes.\n\n7 fica só com a segunda classe. 16 acumula até a terceira, incluindo valores de 10 a 15. 3 fica só com a primeira. E 13 soma a primeira e a terceira, sem motivo.",
      v: { i: () => { const lim = [0, 5, 10, 15, 20]; return qualNum(espalha(lim, [3, 7, 6, 4]).filter((x) => x < 10).length, o); } },
    };
  })(),
  (() => {
    const o = ["A classe de maior frequência", "A classe de maior amplitude", "A classe que contém a média", "A classe que contém a mediana", "A última classe da tabela"];
    return {
      d: "media",
      e: "Num histograma com classes de mesma amplitude, o que representa a barra mais alta?",
      o,
      x: "Com classes de mesma largura, a altura de cada barra é proporcional à frequência da classe. A barra mais alta é a classe de maior frequência, a classe modal. Com classes de larguras diferentes, seria preciso usar a densidade, frequência dividida pela amplitude.\n\nA amplitude é igual para todas as classes, por hipótese. A classe da média e a da mediana podem ser outras, como numa distribuição assimétrica. E a última classe só é a mais alta por coincidência.",
      v: {
        i: () => {
          /* tabela assimétrica em que a classe modal não é a da média, nem a da mediana, nem a última */
          const lim = [0, 10, 20, 30, 40, 50], f = [20, 6, 5, 5, 14], d = espalha(lim, f);
          const amp = f.map((_, k) => lim[k + 1] - lim[k]), altura = f.map((x, k) => x / amp[k]), alta = altura.indexOf(Math.max(...altura));
          return unicoV([alta === f.indexOf(Math.max(...f)), new Set(amp).size > 1 && amp.indexOf(Math.max(...amp)) === alta, classe(media(d), lim) === alta, classe(mediana(d), lim) === alta, alta === f.length - 1]);
        },
      },
    };
  })(),
  (() => {
    const o = ["24", "25", "≈ 6,67", "20", "19"];
    return {
      d: "media",
      e: "Uma pesquisa agrupou idades nas classes [10, 20), [20, 30) e [30, 40), com frequências 6, 10 e 4. Usando os pontos médios, qual é a idade média estimada?",
      o,
      x: "Em dados agrupados, cada classe é representada pelo ponto médio: 15, 25 e 35. A média é ponderada pelas frequências: (6 · 15 + 10 · 25 + 4 · 35)/20 = (90 + 250 + 140)/20 = 480/20 = 24. É uma estimativa: supõe que, dentro de cada classe, os valores se equilibrem em torno do ponto médio.\n\n25 é a média simples dos pontos médios, sem pesar pelas frequências. 6,67 é a média das frequências, 20/3, que não é uma idade. 20 é o total de observações. E 19 usa os limites inferiores das classes no lugar dos pontos médios.",
      v: { i: () => qualNum(media(espalha([10, 20, 30, 40], [6, 10, 4])), o) },
    };
  })(),
  (() => {
    const o = ["9 minutos", "8 minutos", "12 minutos", "≈ 8,7 minutos", "5 minutos"];
    return {
      d: "media",
      e: "As durações de 30 ligações, em minutos, foram agrupadas nas classes [0, 4), [4, 8), [8, 12) e [12, 16), com frequências 4, 8, 12 e 6. Interpolando dentro da classe mediana, qual é a mediana estimada?",
      o,
      x: "Com 30 ligações, a mediana deixa 15 abaixo dela. As acumuladas são 4, 12, 24 e 30: a 15ª posição cai em [8, 12), que começa com 12 observações abaixo. Faltam 3 das 12 observações da classe, um quarto dela, e a interpolação dá 8 + (3/12) · 4 = 9 minutos.\n\n8 e 12 são os limites da classe mediana. 8,7 é a média estimada pelos pontos médios, outra medida. E 5 usa na fórmula a acumulada da própria classe, 24, no lugar da anterior, 12: 8 + (15 − 24)/12 · 4 = 5.",
      v: { i: () => { const lim = [0, 4, 8, 12, 16], f = [4, 8, 12, 6]; return qualNum(bissecao((x) => ogiva(lim, f)(x) - soma(f) / 2, lim[0], lim.at(-1)), o); } },
    };
  })(),
  (() => {
    const o = ["[0, 10), com 2 por unidade", "[10, 30), com 1,5 por unidade", "As duas têm a mesma densidade", "[10, 30), por ter mais observações", "Não dá para comparar"];
    return {
      d: "media",
      e: "A classe [0, 10) tem 20 observações e a classe [10, 30) tem 30. Qual delas tem maior densidade de frequência, observações por unidade de amplitude?",
      o,
      x: "A densidade é a frequência dividida pela amplitude: 20/10 = 2 para [0, 10) e 30/20 = 1,5 para [10, 30). A primeira classe é a mais densa, embora tenha menos observações. Num histograma com classes de larguras diferentes, as alturas das barras devem ser as densidades.\n\nA densidade de [10, 30) é menor, 1,5. As duas não são iguais. Ter mais observações não basta, porque a classe é o dobro mais larga. E dá para comparar, sim, dividindo pela amplitude.",
      v: {
        i: () => {
          const f = [20, 30], amp = [10, 20], dens = f.map((x, k) => x / amp[k]), k = dens.indexOf(Math.max(...dens));
          return unicoV([k === 0 && dens[0] === 2, k === 1 && dens[1] === 1.5, dens[0] === dens[1], k === f.indexOf(Math.max(...f)), false]);
        },
      },
    };
  })(),
  (() => {
    const o = ["Continuam as mesmas", "Dobram", "Caem pela metade", "Passam a somar 2", "Só a maior delas dobra"];
    return {
      d: "media",
      e: "Se todas as frequências absolutas de uma tabela forem multiplicadas por 2, o que acontece com as frequências relativas?",
      o,
      x: "A frequência relativa de cada linha é fᵢ/n. Multiplicando todas as frequências por 2, o total também dobra, e cada relativa vira 2fᵢ/2n = fᵢ/n: nada muda. Por isso a frequência relativa descreve a forma da distribuição, independentemente do tamanho da amostra, e permite comparar pesquisas de tamanhos diferentes.\n\nDobrar ou cair pela metade ignoraria que o total também dobra. As relativas continuam somando 1, e não 2. E nenhuma linha muda de peso em relação às outras.",
      v: {
        i: () => {
          const f = [3, 5, 9, 3], g = f.map((x) => 2 * x), r = f.map((x) => x / soma(f)), s = g.map((x) => x / soma(g)), k = f.indexOf(Math.max(...f));
          const igual = (a, b) => a.every((x, j) => Math.abs(x - b[j]) < 1e-12);
          return unicoV([igual(r, s), igual(s, r.map((x) => 2 * x)), igual(s, r.map((x) => x / 2)), Math.abs(soma(s) - 2) < 1e-12, igual(s, r.map((x, j) => (j === k ? 2 * x : x)))]);
        },
      },
    };
  })(),
  (() => {
    const o = ["15%", "85%", "70%", "155%", "30%"];
    return {
      d: "media",
      e: "Numa empresa, 70% dos salários são menores que R$ 3.000 e 85% são menores que R$ 4.000. Que porcentagem dos salários está entre R$ 3.000 e R$ 4.000?",
      o,
      x: "As duas informações são frequências relativas acumuladas. A diferença entre elas dá a faixa intermediária: 85% − 70% = 15% dos salários estão entre R$ 3.000 e R$ 4.000.\n\n85% é a porcentagem abaixo de R$ 4.000, e inclui os de menos de R$ 3.000. 70% é a porcentagem abaixo de R$ 3.000. 155% soma as acumuladas, passando de 100%. E 30% é a porcentagem acima de R$ 3.000.",
      v: { i: () => { const s = [...Array(70).fill(2500), ...Array(15).fill(3500), ...Array(15).fill(6000)]; return qualNum(s.filter((x) => x >= 3000 && x < 4000).length, o); } },
    };
  })(),
  (() => {
    const o = ["5", "8", "39", "4", "6"];
    return {
      d: "media",
      e: "Os dados de uma pesquisa vão de 10 a 49, e as classes, na forma [a, b), terão amplitude 8, começando em 10. Quantas classes são necessárias para cobrir todos os dados?",
      o,
      x: "As classes [10, 18), [18, 26), [26, 34), [34, 42) e [42, 50) cobrem de 10 até pouco antes de 50, e o maior dado, 49, cai na última. Com 4 classes, a cobertura pararia antes de 42, deixando de fora os dados de 42 a 49. Em geral, divide-se a amplitude total pela amplitude de classe, 39/8 ≈ 4,9, e arredonda-se para cima.\n\n8 é a amplitude de cada classe. 39 é a amplitude total dos dados. 4 trunca 4,9 em vez de arredondar para cima. E 6 acrescenta uma classe desnecessária.",
      v: { i: () => qualNum([...Array(100).keys()].find((k) => k > 0 && 10 + 8 * k > 49), o) },
    };
  })(),
  (() => {
    const o = ["Pelo ponto (15, 7)", "Pelo ponto (10, 7)", "Pelo ponto (20, 7)", "Pelo ponto (7, 15)", "Pelo ponto (15, 10)"];
    return {
      d: "media",
      e: "Num polígono de frequências, qual ponto representa a classe [10, 20), que tem frequência 7?",
      o,
      x: "O polígono de frequências liga pontos cuja abscissa é o ponto médio de cada classe e cuja ordenada é a frequência. Para [10, 20), o ponto médio é (10 + 20)/2 = 15, e o ponto do polígono é (15, 7). Costuma-se fechar o polígono no eixo horizontal, com classes de frequência zero antes da primeira e depois da última.\n\n(10, 7) e (20, 7) usam os limites da classe, e não o meio. (7, 15) troca os eixos. E (15, 10) usa a amplitude da classe como altura.",
      v: {
        i: () => {
          const alvo = [media(espalha([10, 20], [7])), 7];
          return unicoV(o.map((t) => { const [x, y] = t.match(/\((\d+), (\d+)\)/).slice(1).map(Number); return Math.abs(x - alvo[0]) < 1e-9 && y === alvo[1]; }));
        },
      },
    };
  })(),
  (() => {
    const o = ["3", "2", "4", "1", "5"];
    return {
      d: "media",
      e: "Os dados 3, 7, 12, 15, 18, 22, 25, 28, 31 e 35 são agrupados nas classes [0, 10), [10, 20), [20, 30) e [30, 40). Qual é a frequência absoluta da classe [10, 20)?",
      o,
      x: "Os valores com 10 ≤ x < 20 são 12, 15 e 18: três observações. As outras classes ficam com 2 (3 e 7), 3 (22, 25 e 28) e 2 (31 e 35), somando 10. O critério [a, b) decide os casos de fronteira: um 20, se houvesse, iria para [20, 30).\n\n2 é a frequência das classes extremas. 4 inclui um valor a mais, como o 22. 1 conta só um dos valores. E 5 é a frequência acumulada até [10, 20), que inclui também o 3 e o 7.",
      v: { i: () => { const lim = [0, 10, 20, 30, 40]; return qualNum([3, 7, 12, 15, 18, 22, 25, 28, 31, 35].filter((x) => classe(x, lim) === 1).length, o); } },
    };
  })(),
  (() => {
    const o = ["40", "5", "0,625", "8", "125"];
    return {
      d: "media",
      e: "Numa tabela, uma classe tem frequência relativa 0,125 e frequência absoluta 5. Qual é o total de observações?",
      o,
      x: "A frequência relativa é fᵢ/n, e então n = fᵢ/0,125 = 5/0,125 = 40. Conferindo: 5/40 = 0,125. A mesma relação serve para qualquer linha: com a frequência relativa e a absoluta de uma única classe, recupera-se o tamanho da amostra inteira.\n\n5 é a frequência absoluta da classe. 0,625 multiplica em vez de dividir, 5 · 0,125. 8 é o inverso de 0,125: diz quantas vezes a classe cabe no total, e não o total. E 125 lê a relativa sem a vírgula.",
      v: { i: () => qualNum(bissecao((n) => 5 / n - 0.125, 1, 1000), o) },
    };
  })(),
  (() => {
    const o = ["A terceira, com 8", "A quinta, com 30", "A quarta, com 24", "A segunda, com 6", "A primeira, com 4"];
    return {
      d: "media",
      e: "As frequências acumuladas de uma tabela são 4, 10, 18, 24 e 30. Qual classe tem a maior frequência absoluta?",
      o,
      x: "As frequências simples são as diferenças entre acumuladas consecutivas: 4, 10 − 4 = 6, 18 − 10 = 8, 24 − 18 = 6 e 30 − 24 = 6. A maior é a da terceira classe, 8. A maior acumulada é sempre a da última classe, e isso não diz nada sobre qual classe tem mais observações.\n\nA quinta tem acumulada 30, mas frequência simples 6. A quarta tem acumulada 24, e simples 6. A segunda tem 6. E a primeira tem 4, a menor de todas.",
      v: { i: () => { const ac = [4, 10, 18, 24, 30], f = ac.map((a, k) => a - (ac[k - 1] ?? 0)), m = f.indexOf(Math.max(...f)); return unicoV(o.map((t, j) => [2, 4, 3, 1, 0][j] === m && Math.max(...f) === 8)); } },
    };
  })(),
  (() => {
    const o = ["O efeito dos arredondamentos", "Um erro de contagem", "Um dado contado duas vezes", "Uma frequência negativa", "Uma categoria faltando"];
    return {
      d: "media",
      e: "Numa tabela, as porcentagens das categorias, arredondadas para inteiros, somam 101%. O que isso indica?",
      o,
      x: "Cada porcentagem arredondada pode ficar até meio ponto acima ou abaixo do valor exato, e os erros podem se acumular na mesma direção. Com três categorias de 1, 1 e 4 casos em 6, as porcentagens exatas são 16,7%, 16,7% e 66,7%, que viram 17%, 17% e 67%, somando 101%, sem erro nenhum na tabela.\n\nUm erro de contagem ou um dado duplicado mudaria as frequências absolutas, e não só a soma das porcentagens. Frequências negativas não existem. E uma categoria faltando faria a soma ficar abaixo de 100%.",
      v: {
        i: () => {
          /* procura uma tabela correta (frequências inteiras positivas somando n) cujas porcentagens arredondadas somem 101 */
          let ex = null;
          for (let n = 3; n <= 12 && !ex; n++) for (let a = 1; a < n && !ex; a++) for (let b = 1; a + b < n && !ex; b++) { const f = [a, b, n - a - b]; if (soma(f.map((x) => Math.round((100 * x) / n))) === 101) ex = f; }
          if (!ex) return -1;
          /* a tabela achada não tem erro de contagem, duplicação, frequência negativa nem categoria faltando: só arredondamento */
          return unicoV([Math.abs(soma(ex.map((x) => (100 * x) / soma(ex))) - 100) < 1e-9, false, false, false, false]);
        },
      },
    };
  })(),
  (() => {
    const o = ["22", "15", "16", "13", "30"];
    return {
      d: "media",
      e: "Numa tabela de notas, 5 tem frequência 3, 6 tem 7, 7 tem 9, 8 tem 6 e 9 tem 5. Quantos alunos tiraram de 6 a 8, inclusive?",
      o,
      x: "Somam-se as frequências das notas 6, 7 e 8: 7 + 9 + 6 = 22 alunos. O total da turma é 3 + 7 + 9 + 6 + 5 = 30, e os outros 8 tiraram 5 ou 9. Como a pergunta inclui os extremos, as notas 6 e 8 entram na soma junto com o 7.\n\n15 esquece a nota 6 e soma só 9 + 6. 16 esquece a nota 8 e soma só 7 + 9. 13 esquece a nota 7 e soma só 7 + 6. E 30 é a turma inteira, incluindo as notas 5 e 9.",
      v: { i: () => qualNum(expande([5, 6, 7, 8, 9], [3, 7, 9, 6, 5]).filter((x) => x >= 6 && x <= 8).length, o) },
    };
  })(),
  (() => {
    const o = ["1,65", "1,5", "5", "2", "33"];
    return {
      d: "media",
      e: "Num campeonato, 3 partidas terminaram sem gols, 5 tiveram 1 gol, 8 tiveram 2 gols e 4 tiveram 3 gols. Qual é a média de gols por partida?",
      o,
      x: "Cada valor é multiplicado pela sua frequência: 0 · 3 + 1 · 5 + 2 · 8 + 3 · 4 = 0 + 5 + 16 + 12 = 33 gols, em 3 + 5 + 8 + 4 = 20 partidas. A média é 33/20 = 1,65 gol por partida. É a média ponderada pelas frequências, que equivale a somar os 20 valores um a um.\n\n1,5 é a média simples dos valores 0, 1, 2 e 3, sem pesar pelas frequências. 5 é a média das frequências, 20/4. 2 é a moda, o número de gols mais frequente. E 33 é o total de gols, sem dividir pelo número de partidas.",
      v: { i: () => qualNum(media(expande([0, 1, 2, 3], [3, 5, 8, 4])), o) },
    };
  })(),
  (() => {
    const o = ["Os valores individuais de cada observação", "O número total de observações", "A frequência de cada classe", "A frequência acumulada até cada limite", "A proporção de dados em cada classe"];
    return {
      d: "media",
      e: "Quando dados brutos são resumidos numa tabela de classes, qual destas informações deixa de estar disponível?",
      o,
      x: "A tabela guarda quantas observações caem em cada classe, mas não quais são. Os conjuntos 1, 3, 12, 14, 17, 25 e 2, 4, 11, 15, 16, 29, por exemplo, geram a mesma tabela com as classes [0, 10), [10, 20) e [20, 30). Por isso a média e a mediana calculadas pela tabela são estimativas.\n\nO total, as frequências de cada classe, as acumuladas e as proporções continuam na tabela: são justamente o que ela registra, e dois conjuntos com a mesma tabela coincidem em todas elas.",
      v: {
        i: () => {
          const lim = [0, 10, 20, 30], d1 = [1, 3, 12, 14, 17, 25], d2 = [2, 4, 11, 15, 16, 29];
          const tabela = (d) => lim.slice(0, -1).map((_, k) => d.filter((x) => classe(x, lim) === k).length);
          const acum = (t) => t.map((_, k) => soma(t.slice(0, k + 1))), prop = (t) => t.map((x) => x / soma(t));
          const iguais = (a, b) => a.length === b.length && a.every((x, k) => Math.abs(x - b[k]) < 1e-12);
          const t1 = tabela(d1), t2 = tabela(d2), mesma = iguais(t1, t2);
          /* "deixa de estar disponível" = dois conjuntos com a mesma tabela podem diferir nesse aspecto */
          return unicoV([mesma && !iguais(d1, d2), mesma && d1.length !== d2.length, mesma && !iguais(t1, t2), mesma && !iguais(acum(t1), acum(t2)), mesma && !iguais(prop(t1), prop(t2))]);
        },
      },
    };
  })(),
  (() => {
    const o = ["A escola X, com 40%", "A escola Y, com 30%", "A escola Y, por ter 15 premiados", "As duas, com a mesma proporção", "Nenhuma: grupos de tamanhos diferentes não se comparam"];
    return {
      d: "media",
      e: "Na escola X, 12 dos 30 inscritos numa olimpíada foram premiados; na escola Y, 15 dos 50 inscritos. Qual escola teve a maior proporção de premiados?",
      o,
      x: "Para comparar grupos de tamanhos diferentes, usam-se frequências relativas. Na escola X, 12/30 = 0,4, ou 40%; na escola Y, 15/50 = 0,3, ou 30%. A escola X tem a maior proporção de premiados, embora tenha menos premiados em número absoluto.\n\nA escola Y tem 30%, abaixo dos 40% da X. Ter 15 premiados não basta, porque a escola Y inscreveu mais alunos. As proporções são diferentes. E as frequências relativas existem justamente para permitir essa comparação.",
      v: { i: () => { const pX = 12 / 30, pY = 15 / 50; return unicoV([pX > pY && Math.abs(100 * pX - 40) < 1e-9, pY > pX, pY > pX, pX === pY, false]); } },
    };
  })(),

  /* ---------------------------------------------------------- difíceis --- */
  (() => {
    const o = ["≈ 52,6%", "50%", "40%", "20%", "38%"];
    return {
      d: "dificil",
      e: "Numa empresa, 60% dos funcionários são homens. Têm pós-graduação 30% dos homens e 50% das mulheres. Entre os pós-graduados, que porcentagem são mulheres?",
      o,
      x: "Pensando em 100 funcionários: 60 homens, dos quais 18 pós-graduados, e 40 mulheres, das quais 20 pós-graduadas. Os pós-graduados somam 38, e as mulheres são 20/38 ≈ 52,6% deles. A tabela de dupla entrada organiza as contas.\n\n50% é a porcentagem de pós-graduadas entre as mulheres, a pergunta inversa. 40% é a porcentagem de mulheres na empresa. 20% é a porcentagem de mulheres pós-graduadas no total. E 38% é a porcentagem de pós-graduados no total.",
      v: { i: () => { const pessoas = [...Array(18).fill("H1"), ...Array(42).fill("H0"), ...Array(20).fill("M1"), ...Array(20).fill("M0")], pos = pessoas.filter((p) => p.endsWith("1")); return qualNum((100 * pos.filter((p) => p.startsWith("M")).length) / pos.length, o, 0.002); } },
    };
  })(),
  (() => {
    const o = ["5", "20", "10", "2,5", "4"];
    return {
      d: "dificil",
      e: "As classes [0, 2), [2, 6) e [6, 10) têm frequências 10, 20 e 10. Num histograma com área proporcional à frequência, qual é a altura, em observações por unidade, da barra de [2, 6)?",
      o,
      x: "Com classes de larguras diferentes, a altura é a densidade: frequência dividida pela amplitude. Para [2, 6): 20/4 = 5 observações por unidade. As outras barras têm alturas 10/2 = 5 e 10/4 = 2,5. Assim, a área de cada barra, altura vezes largura, é a frequência.\n\n20 é a frequência, que distorceria o gráfico por usar uma classe mais larga. 10 é a frequência das outras classes. 2,5 é a altura da última barra. E 4 é a amplitude de [2, 6).",
      v: { i: () => { const lim = [0, 2, 6, 10], f = [10, 20, 10], h = f.map((x, k) => x / (lim[k + 1] - lim[k])); if (Math.abs(soma(h.map((y, k) => y * (lim[k + 1] - lim[k]))) - 40) > 1e-12) throw new Error("área errada"); return qualNum(h[1], o); } },
    };
  })(),
  (() => {
    const o = ["a = 5 e b = 10", "a = 10 e b = 5", "a = 7 e b = 8", "a = 5 e b = 5", "a = 15 e b = 0"];
    return {
      d: "dificil",
      e: "Os valores 1, 2 e 3 têm frequências a, 5 e b. Sabendo que há 20 observações e que a média é 2,25, quais são a e b?",
      o,
      x: "O total dá a + 5 + b = 20, ou a + b = 15. A média dá (a + 10 + 3b)/20 = 2,25, ou a + 3b = 35. Subtraindo as equações: 2b = 20, b = 10, e a = 5. Conferindo: (5 + 10 + 30)/20 = 45/20 = 2,25. Duas frequências desconhecidas pedem duas informações independentes sobre a tabela.\n\na = 10 e b = 5 troca os valores e dá média 1,75. a = 7 e b = 8 dá 2,05. a = 5 e b = 5 dá só 15 observações. E a = 15 e b = 0 dá média 1,25.",
      v: { i: () => unicoV(o.map((t) => { const m = t.match(/^a = (\d+) e b = (\d+)$/), d = expande([1, 2, 3], [Number(m[1]), 5, Number(m[2])]); return d.length === 20 && Math.abs(media(d) - 2.25) < 1e-12; })) },
    };
  })(),
  (() => {
    const o = ["80", "≈ 14,1", "60", "180", "100"];
    return {
      d: "dificil",
      e: "As frequências relativas acumuladas das cinco classes de uma tabela são 0,15; 0,40; 0,70; 0,85 e 1. Se a quarta classe tem 12 observações, qual é o total de observações?",
      o,
      x: "A frequência relativa da quarta classe é a diferença entre acumuladas: 0,85 − 0,70 = 0,15. Como 0,15 · n = 12, o total é n = 12/0,15 = 80. Conferindo: as classes têm 12, 20, 24, 12 e 12 observações, e as acumuladas relativas voltam a ser 0,15; 0,40; 0,70; 0,85 e 1.\n\n14,1 divide 12 pela acumulada, 0,85, e não pela frequência da classe. 60 supõe cinco classes iguais, 5 · 12. 180 lê 0,15 como 15 e multiplica. E 100 supõe, sem motivo, um total de 100.",
      v: {
        i: () => {
          const ac = [0.15, 0.4, 0.7, 0.85, 1], n = bissecao((m) => (ac[3] - ac[2]) * m - 12, 1, 1000);
          /* reconstrói a tabela com esse total e confere as acumuladas */
          const f = ac.map((a, k) => Math.round((a - (ac[k - 1] ?? 0)) * n)), d = expande([1, 2, 3, 4, 5], f);
          const volta = [1, 2, 3, 4, 5].map((c) => d.filter((x) => x <= c).length / d.length);
          if (!volta.every((x, k) => Math.abs(x - ac[k]) < 1e-9) || f[3] !== 12) throw new Error("tabela não fecha");
          return qualNum(n, o);
        },
      },
    };
  })(),
  (() => {
    const o = ["60", "40", "80", "50", "20"];
    return {
      d: "dificil",
      e: "As classes [0, 10), [10, 20), [20, 30) e [30, 40) têm frequências 10, 30, 40 e 20. Supondo os dados uniformes em cada classe, quantos valores, aproximadamente, são menores que 25?",
      o,
      x: "As duas primeiras classes, inteiras, têm 10 + 30 = 40 valores. Na terceira, de 20 a 30, o 25 está no meio, e a uniformidade dá metade dos 40 valores dessa classe abaixo dele: 20. O total estimado é 40 + 20 = 60. É a leitura da ogiva, a curva de frequências acumuladas.\n\n40 conta só as classes inteiras. 80 inclui a terceira classe inteira. 50 é a metade das observações, sem conta. E 20 é só a parte da terceira classe.",
      v: { i: () => qualNum(espalha([0, 10, 20, 30, 40], [10, 30, 40, 20]).filter((x) => x < 25).length, o) },
    };
  })(),
  (() => {
    const o = ["≈ 0,467", "0,36", "0,56", "≈ 0,533", "0,5"];
    return {
      d: "dificil",
      e: "Numa pesquisa com 250 pessoas, a frequência relativa de respostas sim é 0,36. Depois, mais 50 pessoas respondem, todas sim. Qual é a nova frequência relativa de sim?",
      o,
      x: "Na primeira rodada, os sim são 0,36 · 250 = 90. Com os 50 novos, passam a 140, num total de 300. A nova frequência relativa é 140/300 ≈ 0,467. As frequências relativas não se somam diretamente quando os totais mudam; é preciso voltar às contagens.\n\n0,36 ignora as novas respostas. 0,56 soma 0,36 com 50/250 = 0,2. 0,533 é a fração de não, 160/300. E 0,5 é um palpite.",
      v: { i: () => { const r = [...Array(90).fill(1), ...Array(160).fill(0), ...Array(50).fill(1)]; return qualNum(soma(r) / r.length, o, 0.002); } },
    };
  })(),
  (() => {
    const o = ["0,2", "0,3", "0,6", "0,15", "0,4"];
    return {
      d: "dificil",
      e: "As frequências relativas das quatro classes de uma tabela são 0,2; x; 2x e 0,2. Quanto vale x?",
      o,
      x: "As frequências relativas somam 1: 0,2 + x + 2x + 0,2 = 1, ou 3x = 0,6, e x = 0,2. As classes do meio ficam com 0,2 e 0,4, e a soma confere: 0,2 + 0,2 + 0,4 + 0,2 = 1. Tabelas com frequências escritas em função de uma incógnita se resolvem por essa condição, ou pela soma das absolutas igual a n.\n\n0,3 dá soma 1,3. 0,6 é o valor de 3x, sem dividir. 0,15 dá soma 0,85. E 0,4 é o valor de 2x.",
      v: { i: () => qualNum(bissecao((x) => 0.2 + x + 2 * x + 0.2 - 1, 0, 1), o) },
    };
  })(),
  (() => {
    const o = ["34%", "32,5%", "65%", "17%", "40%"];
    return {
      d: "dificil",
      e: "A turma A tem 20 alunos, dos quais 25% tiraram nota 7 ou mais; a turma B tem 30 alunos, com 40%. Juntando as duas, que porcentagem tirou 7 ou mais?",
      o,
      x: "Voltando às contagens: 25% de 20 são 5 alunos, e 40% de 30 são 12. Juntas, as turmas têm 17 alunos com nota 7 ou mais, de 50: 17/50 = 34%. A média simples das porcentagens, 32,5%, só valeria com turmas do mesmo tamanho.\n\n32,5% ignora os tamanhos das turmas. 65% soma as porcentagens. 17% lê a contagem como porcentagem. E 40% fica só com a turma B.",
      v: { i: () => { const alunos = [...Array(5).fill(1), ...Array(15).fill(0), ...Array(12).fill(1), ...Array(18).fill(0)]; return qualNum((100 * soma(alunos)) / alunos.length, o); } },
    };
  })(),
  (() => {
    const o = ["8", "100", "16", "40", "3"];
    return {
      d: "dificil",
      e: "Numa pesquisa, as respostas sim e não representaram, exatamente, 37,5% e 62,5% dos entrevistados. Qual é o menor número possível de entrevistados?",
      o,
      x: "Se s pessoas disseram sim, s/n = 0,375 = 3/8, com s inteiro. A fração 3/8 já está simplificada, então n precisa ser múltiplo de 8, e o menor é 8: 3 disseram sim e 5 disseram não. Qualquer múltiplo de 8 também serve, como 16 ou 40.\n\n100 supõe que porcentagens vêm sempre de 100 pessoas. 16 e 40 são possíveis, mas não são os menores. E 3 é o número de respostas sim com 8 entrevistados, e não o total.",
      v: { i: () => qualNum([...Array(1000).keys()].find((n) => n > 0 && (375 * n) % 1000 === 0 && (625 * n) % 1000 === 0), o) },
    };
  })(),
  (() => {
    const o = ["50", "≈ 52,6", "≈ 7,07", "100", "15"];
    return {
      d: "dificil",
      e: "Uma variável foi agrupada em três classes de amplitude 10, a partir de zero, com 5, 10 e 5 observações. Representando cada classe pelo seu ponto médio, qual é a variância populacional?",
      o,
      x: "Os pontos médios são 5, 15 e 25, e a média ponderada é (5 · 5 + 10 · 15 + 5 · 25)/20 = 300/20 = 15. A variância populacional pondera os quadrados dos desvios: [5 · (5 − 15)² + 10 · 0² + 5 · (25 − 15)²]/20 = (500 + 0 + 500)/20 = 50.\n\n52,6 divide por 19, que seria a variância amostral. 7,07 é a raiz de 50, o desvio padrão, e não a variância. 100 é o quadrado do desvio de uma classe extrema, sem ponderar pelas frequências. E 15 é a média.",
      v: { i: () => { const lim = [0, 10, 20, 30], pm = lim.slice(0, -1).map((a, k) => (a + lim[k + 1]) / 2); return qualNum(variancia(expande(pm, [5, 10, 5])), o); } },
    };
  })(),
];
