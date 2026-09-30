/* Rascunho — Estatística / Técnicas de amostragem.

   Onde há algo a calcular, a conferência refaz: intervalos e amostras
   sistemáticas por enumeração dos pontos de partida, alocações por busca
   exaustiva da menor variância, probabilidades de inclusão por produto de
   estágios e por simulação, e as comparações de precisão e de viés
   (estratos, conglomerados, periodicidade, cotas, duplicatas no cadastro)
   por simulação com semente fixa. As questões que só pedem o nome de uma
   técnica ou um conceito ficam sem conferência em código, para a revisão
   independente. */

import { unicoV, soma, qualNum, lerNum, sorteador } from "./_estatistica.mjs";
import { combinacoes, produto } from "./_contagem.mjs";

export const materia = "estatistica";
export const tema = "Técnicas de amostragem";
export const arquivo = "estatistica__tecnicas-de-amostragem";

const media = (xs) => soma(xs) / xs.length;
const variancia = (xs) => { const m = media(xs); return soma(xs.map((x) => (x - m) ** 2)) / xs.length; };
const gerador = (semente) => { const r = sorteador(semente); return (mu = 0, s = 1) => { let u = r(); while (u <= 0) u = r(); return mu + s * Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * r()); }; };
/* amostra aleatória simples de tamanho n de uma lista, por chaves aleatórias */
const aas = (r, lista, n) => lista.map((x) => [r(), x]).sort((a, b) => a[0] - b[0]).slice(0, n).map(([, x]) => x);
/* índices de uma amostra sistemática (1 a N) com intervalo k e início s */
const sistematica = (N, k, s) => { const a = []; for (let i = s; i <= N; i += k) a.push(i); return a; };
const fracao = (t) => { const [a, b] = t.split("/").map((s) => Number(s.replace(/\./g, ""))); return a / b; };
const numeros = (t) => t.replace(/…/g, "").split(/,\s*| e /).filter((s) => s.trim() !== "").map((s) => lerNum(s.trim()));

export const questoes = [
  /* ------------------------------------------------------------ fáceis --- */
  (() => {
    const o = ["Toda amostra de n elementos tem a mesma chance", "Os primeiros da lista têm mais chance", "Cada grupo entra com a mesma quantidade", "O pesquisador escolhe os mais representativos", "Só entram os elementos que se oferecem"];
    return {
      d: "facil",
      e: "Na amostragem aleatória simples de n elementos, qual afirmação é verdadeira?",
      o,
      x: "Na amostragem aleatória simples, o sorteio dá a todas as amostras possíveis de tamanho n a mesma probabilidade, e, em consequência, cada elemento tem a mesma chance de entrar, n/N. É o modelo de referência para as fórmulas de erro padrão e margem de erro.\n\nNenhuma posição na lista é favorecida. Garantir a mesma quantidade por grupo é característica da estratificação ou das cotas. A escolha do pesquisador tornaria a amostra intencional. E quem se oferece forma uma amostra voluntária, não aleatória.",
      v: {
        i: () => {
          /* sorteios de 2 entre 5: as 10 duplas aparecem com a mesma frequência, e o primeiro da lista não é favorecido */
          const r = sorteador(1), cont = new Map(), R = 50000; let primeiro = 0;
          for (let k = 0; k < R; k++) { const a = aas(r, [1, 2, 3, 4, 5], 2).sort().join("-"); cont.set(a, (cont.get(a) ?? 0) + 1); if (a.startsWith("1-")) primeiro++; }
          const uniforme = cont.size === 10 && [...cont.values()].every((c) => Math.abs(c / R - 0.1) < 0.006);
          return unicoV([uniforme, primeiro / R > 0.45, false, false, false]);
        },
      },
    };
  })(),
  (() => {
    const o = ["20", "60", "1.200", "72.000", "0,05"];
    return {
      d: "facil",
      e: "Numa lista de 1.200 clientes, quer-se uma amostra sistemática de 60. Qual deve ser o intervalo de seleção?",
      o,
      x: "O intervalo é k = N/n = 1.200/60 = 20: sorteia-se um ponto de partida entre 1 e 20 e, a partir dele, toma-se um cliente a cada 20 posições. Assim se obtêm exatamente 60 clientes, espalhados pela lista inteira, e cada cliente tem chance 1/20 de ser incluído, a mesma da fração amostral.\n\n60 é o tamanho da amostra. 1.200 é o tamanho da população. 72.000 multiplica os dois. E 0,05 é a fração amostral, n/N, e não o intervalo.",
      v: { i: () => { const k = 1200 / 60; return [1, 7, 20].every((s) => sistematica(1200, k, s).length === 60) ? qualNum(k, o) : -1; } },
    };
  })(),
  (() => {
    const o = ["30 e 20", "25 e 25", "600 e 400", "20 e 30", "3 e 2"];
    return {
      d: "facil",
      e: "Uma escola tem 600 alunos no turno da manhã e 400 no da tarde. Numa amostra estratificada proporcional de 50 alunos, quantos devem vir de cada turno?",
      o,
      x: "Na alocação proporcional, cada estrato recebe a mesma fração que tem na população. A manhã tem 600/1.000 = 60% dos alunos, e a tarde, 40%. Então a manhã contribui com 0,6 · 50 = 30 alunos, e a tarde, com 0,4 · 50 = 20. Com essa alocação, cada aluno da escola tem a mesma chance, 5%, de ser sorteado.\n\n25 e 25 é a alocação igual, que não segue os tamanhos. 600 e 400 são os tamanhos dos turnos. 20 e 30 inverte os turnos. E 3 e 2 é só a razão entre eles.",
      v: { i: () => { const n = [600, 400].map((N) => (50 * N) / 1000); return unicoV(o.map((t) => { const [a, b] = t.split(" e ").map(Number); return a === n[0] && b === n[1] && a / 600 === b / 400; })); } },
    };
  })(),
  (() => {
    const o = ["Amostragem por conglomerados", "Amostragem estratificada", "Amostragem sistemática", "Amostragem por conveniência", "Amostragem por cotas"];
    return {
      d: "facil",
      e: "Para estudar os alunos de uma rede de ensino, sorteiam-se 10 turmas, e todos os alunos dessas turmas são entrevistados. Que técnica de amostragem é essa?",
      o,
      x: "As turmas são grupos naturais de alunos, os conglomerados. Sorteia-se um conjunto de turmas, e todos os alunos das turmas sorteadas entram na amostra: é a amostragem por conglomerados em um estágio. Ela barateia a coleta, porque concentra as entrevistas em poucos lugares.\n\nNa estratificada, seriam sorteados alunos dentro de todos os grupos. Na sistemática, um a cada k de uma lista. Na de conveniência, os mais fáceis de alcançar, sem sorteio. E nas cotas, preenchem-se números fixos por grupo, sem sorteio.",
      /* identificação da técnica: fica para a revisão independente */
    };
  })(),
  (() => {
    const o = ["Por conveniência", "Aleatória simples", "Estratificada", "Sistemática", "Por conglomerados"];
    return {
      d: "facil",
      e: "Um pesquisador entrevista as pessoas que passam num shopping numa tarde de sábado, até completar 200 entrevistas. Que tipo de amostra é essa?",
      o,
      x: "Os entrevistados são os que estavam à mão, no lugar e na hora escolhidos, sem sorteio: é uma amostra por conveniência, não probabilística. Ela não representa a população, porque exclui quem não frequenta shoppings ou não estava lá naquela tarde, e não permite calcular a margem de erro.\n\nA aleatória simples exigiria sortear da população inteira. A estratificada, sortear dentro de grupos. A sistemática, um a cada k de uma lista. E a por conglomerados, sortear grupos inteiros.",
      /* identificação da técnica: fica para a revisão independente */
    };
  })(),
  (() => {
    const o = ["Amostragem estratificada proporcional", "Amostragem por conglomerados", "Amostragem por cotas", "Amostragem sistemática", "Amostragem por conveniência"];
    return {
      d: "facil",
      e: "Uma pesquisa divide a população por faixa etária e sorteia, em cada faixa, um número de pessoas proporcional ao tamanho dela. Que técnica é essa?",
      o,
      x: "Dividir a população em grupos, os estratos, e sortear dentro de cada um é amostragem estratificada; como o número sorteado em cada faixa é proporcional ao seu tamanho, a alocação é proporcional. Todos os estratos ficam representados, e a precisão costuma melhorar.\n\nNos conglomerados, sorteiam-se grupos inteiros, e não elementos dentro de todos os grupos. Nas cotas, o número por grupo é fixado, mas não há sorteio. A sistemática usa um intervalo fixo numa lista. E a de conveniência não tem sorteio.",
      /* identificação da técnica: fica para a revisão independente */
    };
  })(),
  (() => {
    const o = ["4, 14, 24, 34, …", "4, 8, 12, 16, …", "10, 20, 30, 40, …", "4, 40, 400, …", "1, 11, 21, 31, …"];
    return {
      d: "facil",
      e: "Numa amostragem sistemática com intervalo 10, o ponto de partida sorteado foi o elemento 4. Quais elementos entram na amostra?",
      o,
      x: "A partir do ponto de partida, soma-se o intervalo repetidamente: 4, 4 + 10 = 14, 24, 34, e assim por diante, até o fim da lista. O sorteio do início, entre 1 e 10, é o único passo aleatório, e cada elemento da lista tem chance de 1/10.\n\n4, 8, 12… usa o ponto de partida como intervalo. 10, 20, 30… ignora o início sorteado. 4, 40, 400… multiplica em vez de somar. E 1, 11, 21… começa no 1, e não no 4 sorteado.",
      v: { i: () => { const a = sistematica(1000, 10, 4).slice(0, 4); return unicoV(o.map((t) => { const v = numeros(t); return v.length >= 3 && v.every((x, k) => x === a[k]); })); } },
    };
  })(),
  (() => {
    const o = ["Cadastro, ou base de amostragem", "Estrato", "Conglomerado", "Parâmetro", "Censo"];
    return {
      d: "facil",
      e: "Como se chama a lista de todos os elementos da população da qual a amostra é sorteada?",
      o,
      x: "O cadastro, também chamado de base de amostragem, é a lista usada para o sorteio, como o registro de alunos de uma escola ou a relação de domicílios de um bairro. Se o cadastro deixar de fora parte da população, a amostra herda essa falha, um erro de cobertura que nenhum sorteio corrige.\n\nEstratos e conglomerados são grupos em que a população pode ser dividida. Parâmetro é uma medida da população. E censo é a observação de todos os elementos, e não a lista deles.",
      /* definição conceitual: fica para a revisão independente */
    };
  })(),
  (() => {
    const o = ["5%", "20%", "2%", "50%", "0,5%"];
    return {
      d: "facil",
      e: "Numa amostragem sistemática com intervalo 20 e ponto de partida sorteado entre 1 e 20, qual é a chance de um elemento específico da lista ser incluído?",
      o,
      x: "Cada elemento pertence a exatamente uma das 20 amostras sistemáticas possíveis, uma para cada ponto de partida. Como o ponto de partida é sorteado com chances iguais, a probabilidade de inclusão é 1/20 = 5%, a mesma da fração amostral. Embora cada elemento tenha 5% de chance, só 20 amostras diferentes são possíveis, muito menos que numa amostragem aleatória simples.\n\n20% lê o intervalo como porcentagem. 2% e 0,5% não saem da conta. E 50% supõe duas possibilidades, entrar ou não, igualmente prováveis.",
      v: { i: () => { const contem = [...Array(20).keys()].map((s) => sistematica(1200, 20, s + 1).includes(137)).filter(Boolean).length; return qualNum((100 * contem) / 20, o); } },
    };
  })(),
  (() => {
    const o = ["Não há probabilidades de seleção conhecidas", "A amostra é sempre pequena demais", "A margem sempre dá zero", "O cálculo exige estratos", "A população é sempre desconhecida"];
    return {
      d: "facil",
      e: "Por que não se calcula a margem de erro de uma amostra por conveniência?",
      o,
      x: "A margem de erro se apoia nas probabilidades com que cada amostra pode ser sorteada. Numa amostra por conveniência, ninguém sabe essas probabilidades: alguns grupos têm chance alta de entrar, outros nenhuma. Sem esse modelo, a fórmula da margem não vale, e o erro pode incluir um viés de tamanho desconhecido.\n\nO problema não é o tamanho: amostras grandes por conveniência continuam sem base probabilística. A margem não é zero. Estratos não são exigidos. E a população pode ser bem conhecida, sem que isso resolva a falta de sorteio.",
      /* justificativa conceitual: fica para a revisão independente */
    };
  })(),
  (() => {
    const o = ["14", "15", "30", "12", "16"];
    return {
      d: "facil",
      e: "Uma população tem dois estratos, com 60% e 40% dos elementos. As médias amostrais nos estratos foram 10 e 20. Qual é a estimativa da média da população?",
      o,
      x: "A média estratificada pondera a média de cada estrato pela sua participação na população: 0,6 · 10 + 0,4 · 20 = 6 + 8 = 14. O estrato maior pesa mais, e a estimativa fica mais perto de 10 que de 20.\n\n15 é a média simples das duas médias, que ignora os tamanhos dos estratos. 30 soma as médias. 12 corresponderia a pesos 0,8 e 0,2, e 16, a pesos 0,4 e 0,6, trocados. A ponderação correta vem dos tamanhos dos estratos na população, e não dos tamanhos das amostras.",
      v: { i: () => { const pop = [...Array(600).fill(10), ...Array(400).fill(20)]; return qualNum(media(pop), o, 1e-9); } },
    };
  })(),
  (() => {
    const o = ["37, 5 e 64", "37, 92 e 5", "37, 5 e 37", "92, 5 e 64", "37, 64 e 5"];
    return {
      d: "facil",
      e: "Numa lista numerada de 01 a 80, usa-se a sequência de números aleatórios 37, 92, 05, 37 e 64, descartando os valores fora da lista e as repetições. Quais são os três primeiros sorteados, em ordem?",
      o,
      x: "Lendo a sequência: 37 entra; 92 é descartado, porque passa de 80; 05, isto é, 5, entra; o segundo 37 é descartado, porque já foi sorteado; e 64 entra. Os três primeiros são 37, 5 e 64, nessa ordem.\n\n37, 92 e 5 aceita um número fora da lista. 37, 5 e 37 repete o 37, o que não se faz num sorteio sem reposição. 92, 5 e 64 aceita o 92 e perde o 37. E 37, 64 e 5 muda a ordem de leitura.",
      v: {
        i: () => {
          const seq = [37, 92, 5, 37, 64], sort = []; for (const x of seq) if (x >= 1 && x <= 80 && !sort.includes(x) && sort.length < 3) sort.push(x);
          return unicoV(o.map((t) => numeros(t).join(",") === sort.join(",")));
        },
      },
    };
  })(),

  /* ------------------------------------------------------------ médias --- */
  (() => {
    const o = ["Estratos homogêneos por dentro e diferentes entre si", "Estratos parecidos entre si e variados por dentro", "Estratos de tamanhos iguais", "Sempre, qualquer que seja a divisão", "Nunca: a aleatória simples é sempre melhor"];
    return {
      d: "media",
      e: "Em que situação a amostragem estratificada dá estimativas mais precisas que uma amostragem aleatória simples do mesmo tamanho?",
      o,
      x: "A estratificação elimina da estimativa a variação entre os estratos, porque cada um é amostrado separadamente e ponderado pelo seu tamanho. O ganho é grande quando os estratos são internamente homogêneos e diferentes entre si, como faixas de renda numa pesquisa de consumo.\n\nCom estratos parecidos entre si, não há variação entre eles a eliminar, e o ganho some. O tamanho igual dos estratos não é o que importa. Uma divisão sem relação com a variável estudada não ajuda. E, com alocação proporcional, a estratificação praticamente nunca é pior.",
      v: {
        i: () => {
          /* razão entre as variâncias da média (aleatória simples ÷ estratificada) em duas populações */
          const g = gerador(2), r = sorteador(3), razao = (m1, m2, s) => {
            const e1 = Array.from({ length: 2000 }, () => g(m1, s)), e2 = Array.from({ length: 2000 }, () => g(m2, s)), pop = [...e1, ...e2], a = [], b = [];
            for (let k = 0; k < 3000; k++) { a.push(media(aas(r, pop, 40))); b.push((media(aas(r, e1, 20)) + media(aas(r, e2, 20))) / 2); }
            return variancia(a) / variancia(b);
          };
          const diferentes = razao(10, 30, 5), iguais = razao(20, 20, 11.2);
          return unicoV([diferentes > 3 && Math.abs(iguais - 1) < 0.2, false, false, false, diferentes < 1]);
        },
      },
    };
  })(),
  (() => {
    const o = ["Elementos do mesmo grupo se parecem", "Os conglomerados são sorteados", "Há mais elementos na amostra", "A aleatória simples usa cadastro", "Os conglomerados são todos iguais"];
    return {
      d: "media",
      e: "Por que a amostragem por conglomerados costuma ser menos precisa que uma amostragem aleatória simples com o mesmo número de elementos?",
      o,
      x: "Elementos de um mesmo conglomerado, como moradores de um quarteirão ou alunos de uma turma, costumam ser parecidos entre si. Entrevistar muitos deles repete informação, e a amostra se comporta como se fosse menor. Com o mesmo número de entrevistas, a precisão fica abaixo da de uma amostra aleatória simples.\n\nO sorteio dos conglomerados não causa a perda. O número de elementos é o mesmo, por hipótese. O uso de cadastro não é a diferença relevante. E se os conglomerados fossem iguais entre si e variados por dentro, a perda seria pequena.",
      v: {
        i: () => {
          /* 200 turmas de 20 alunos com efeito de turma; 5 turmas inteiras contra 100 alunos sorteados um a um */
          const g = gerador(4), r = sorteador(5), turmas = Array.from({ length: 200 }, () => { const ef = g(0, 1); return Array.from({ length: 20 }, () => 50 + ef + g(0, 1)); }), todos = turmas.flat(), a = [], b = [];
          for (let k = 0; k < 3000; k++) { a.push(media(aas(r, turmas, 5).flat())); b.push(media(aas(r, todos, 100))); }
          return unicoV([variancia(a) > 3 * variancia(b), false, false, false, false]);
        },
      },
    };
  })(),
  (() => {
    const o = ["Reduzir custos, concentrando a coleta em poucos grupos", "Aumentar a precisão em relação à aleatória simples", "Eliminar a necessidade de sorteio", "Garantir todos os grupos na amostra", "Dispensar o planejamento"];
    return {
      d: "media",
      e: "Qual é a principal vantagem prática da amostragem por conglomerados?",
      o,
      x: "Sorteando poucos grupos, como escolas ou quarteirões, as entrevistas ficam concentradas em poucos lugares, o que reduz deslocamentos e custos. Além disso, basta ter a lista dos grupos, e não de todos os elementos da população, que às vezes nem existe.\n\nA precisão costuma ser menor, e não maior, que a de uma aleatória simples do mesmo tamanho. O sorteio continua necessário, agora dos grupos. Nem todos os grupos entram: esse é o caso da estratificação. E o planejamento continua indispensável.",
      /* vantagem prática, conceitual: fica para a revisão independente */
    };
  })(),
  (() => {
    const o = ["Todos os dias sorteados caem no mesmo dia da semana", "A amostra fica aleatória demais", "O intervalo 7 é pequeno demais", "Nenhum, pois o início foi sorteado", "A amostra fica maior que a população"];
    return {
      d: "media",
      e: "Para estimar as vendas diárias médias de uma loja, escolhe-se um dia a cada 7, a partir de uma segunda-feira sorteada. Qual é o problema dessa amostra sistemática?",
      o,
      x: "Com intervalo 7, a amostra percorre sempre o mesmo dia da semana: começando numa segunda-feira, só entram segundas. Se as vendas variam ao longo da semana, com picos no fim de semana, a estimativa fica enviesada. É o perigo da periodicidade: um intervalo que coincide com um ciclo dos dados.\n\nO problema é o oposto de aleatoriedade demais. O tamanho do intervalo não é o defeito, e sim coincidir com o ciclo. O sorteio da segunda-feira de partida não resolve, porque todas as segundas se parecem. E a amostra continua bem menor que a população.",
      v: {
        i: () => {
          /* um ano de vendas com padrão semanal; o dia 0 é uma segunda-feira */
          const g = gerador(6), efeito = [-10, -8, -5, 0, 8, 25, 15], vendas = Array.from({ length: 364 }, (_, d) => 100 + efeito[d % 7] + g(0, 5)), real = media(vendas);
          const est = media(vendas.filter((_, d) => d % 7 === 0)), mesmoDia = new Set(vendas.map((_, d) => d).filter((d) => d % 7 === 0).map((d) => d % 7)).size === 1;
          return unicoV([mesmoDia && Math.abs(est - real) > 5, false, false, Math.abs(est - real) < 2, false]);
        },
      },
    };
  })(),
  (() => {
    const o = ["Nas cotas, não há sorteio dentro dos grupos", "Nas cotas, os grupos têm tamanhos proporcionais", "Na estratificada, não há grupos", "Nas cotas, a amostra é sempre maior", "Não há diferença"];
    return {
      d: "media",
      e: "Qual é a diferença essencial entre a amostragem por cotas e a amostragem estratificada?",
      o,
      x: "Nas duas, a população é dividida em grupos, e cada grupo recebe um número de elementos na amostra. Na estratificada, esses elementos são sorteados dentro de cada estrato; nas cotas, o entrevistador escolhe quem entrevistar até completar a cota, sem sorteio. Por isso as cotas são não probabilísticas e podem ter viés.\n\nAs cotas também costumam ser proporcionais: essa não é a diferença. A estratificada tem grupos, os estratos. O tamanho da amostra não distingue as técnicas. E a diferença, o sorteio, é decisiva.",
      /* distinção conceitual: fica para a revisão independente */
    };
  })(),
  (() => {
    const o = ["26%", "35%", "70%", "20%", "50%"];
    return {
      d: "media",
      e: "Uma cidade tem 8.000 domicílios urbanos e 2.000 rurais. Sortearam-se 100 de cada, e as proporções com acesso à internet por fibra foram 20% e 50%. Qual é a estimativa para a cidade?",
      o,
      x: "Com o mesmo número de domicílios sorteado em estratos de tamanhos diferentes, a amostra não é proporcional, e é preciso ponderar pelos tamanhos: os urbanos são 80% da cidade, e os rurais, 20%. A estimativa é 0,8 · 20% + 0,2 · 50% = 16% + 10% = 26%.\n\n35% é a média simples das duas proporções, que daria peso igual aos rurais, super-representados na amostra. 70% soma as proporções. 20% considera só os urbanos. E 50%, só os rurais.",
      v: {
        i: () => {
          /* cidade com essas proporções exatas: a estimativa ponderada coincide com a proporção real */
          const cidade = [...Array(1600).fill(1), ...Array(6400).fill(0), ...Array(1000).fill(1), ...Array(1000).fill(0)], real = 100 * media(cidade), pond = 0.8 * 20 + 0.2 * 50;
          return Math.abs(real - pond) < 1e-9 ? qualNum(real, o, 1e-9) : -1;
        },
      },
    };
  })(),
  (() => {
    const o = ["20 e 60", "40 e 40", "60 e 20", "8 e 72", "30 e 50"];
    return {
      d: "media",
      e: "Dois estratos têm o mesmo tamanho, mas desvios padrão 10 e 30. Pela alocação ótima de Neyman, proporcional ao tamanho vezes o desvio padrão, como dividir uma amostra de 80 elementos?",
      o,
      x: "Na alocação de Neyman, cada estrato recebe uma parte proporcional a Nₕ · σₕ. Com tamanhos iguais, a divisão segue os desvios padrão, 10 e 30, na razão 1 : 3: o primeiro estrato recebe 80 · 1/4 = 20, e o segundo, 80 · 3/4 = 60. O estrato mais variável precisa de mais observações para a mesma precisão.\n\n40 e 40 é a alocação proporcional, ótima só com desvios iguais. 60 e 20 inverte a lógica. 8 e 72 usa as variâncias, 100 e 900, em vez dos desvios. E 30 e 50 não sai de nenhuma regra.",
      v: {
        i: () => {
          /* busca exaustiva da divisão que minimiza a variância da média estratificada */
          const W = [0.5, 0.5], s2 = [100, 900]; let melhor = null, vmin = Infinity;
          for (let n1 = 1; n1 < 80; n1++) { const v = (W[0] ** 2 * s2[0]) / n1 + (W[1] ** 2 * s2[1]) / (80 - n1); if (v < vmin) { vmin = v; melhor = n1; } }
          return unicoV(o.map((t) => { const [a, b] = t.split(" e ").map(Number); return a === melhor && b === 80 - melhor; }));
        },
      },
    };
  })(),
  (() => {
    const o = ["Amostragem bola de neve", "Amostragem estratificada", "Amostragem sistemática", "Amostragem aleatória simples", "Amostragem por conglomerados"];
    return {
      d: "media",
      e: "Para estudar uma população difícil de localizar, como trabalhadores de um serviço informal, cada entrevistado indica outros participantes. Como se chama essa técnica?",
      o,
      x: "Na bola de neve, a amostra cresce por indicações: os primeiros participantes apontam outros, que apontam outros. É útil quando não existe cadastro e os membros se conhecem entre si, mas é não probabilística: pessoas com muitos contatos têm mais chance de entrar, e grupos isolados podem ficar de fora.\n\nAs demais técnicas exigem sorteio a partir de um cadastro ou de grupos definidos, justamente o que falta nesse tipo de população.",
      /* identificação da técnica: fica para a revisão independente */
    };
  })(),
  (() => {
    const o = ["1,5%", "20%", "7,5%", "27,5%", "0,15%"];
    return {
      d: "media",
      e: "Uma rede tem 100 escolas com 200 alunos cada. Sorteiam-se 20 escolas e, em cada uma, 15 alunos. Qual é a probabilidade de um aluno específico entrar na amostra?",
      o,
      x: "O aluno precisa que sua escola seja sorteada, com probabilidade 20/100 = 0,2, e depois ser sorteado entre os 200 da escola, com probabilidade 15/200 = 0,075. Como os dois sorteios se encadeiam, a probabilidade é o produto: 0,2 · 0,075 = 0,015, ou 1,5%. Conferindo: 300 alunos entre 20.000 dão os mesmos 1,5%.\n\n20% é só o primeiro estágio. 7,5% é só o segundo. 27,5% soma as duas probabilidades. E 0,15% erra a casa decimal.",
      v: {
        i: () => {
          /* aluno 0 da escola 0, em sorteios de dois estágios repetidos */
          const r = sorteador(7), R = 60000; let entra = 0;
          for (let k = 0; k < R; k++) { if (aas(r, [...Array(100).keys()], 20).includes(0) && r() < 15 / 200) entra++; }
          return qualNum((100 * entra) / R, o, 0.08);
        },
      },
    };
  })(),
  (() => {
    const o = ["Quem não tem telefone fixo fica fora do cadastro", "O sorteio de números é sempre enviesado", "A amostra fica grande demais", "Telefones impedem perguntas abertas", "Não há problema algum"];
    return {
      d: "media",
      e: "Uma pesquisa sorteia números de telefone fixo para estimar hábitos de toda a população. Qual é o principal problema?",
      o,
      x: "O cadastro, a lista de telefones fixos, não cobre toda a população: quem só tem celular, ou nenhum telefone, não tem chance de ser sorteado. Se esses grupos têm hábitos diferentes, a estimativa fica enviesada, um erro de cobertura que o sorteio não corrige.\n\nO sorteio em si pode ser perfeito. O tamanho da amostra não é o problema. O meio de coleta não impede perguntas abertas. E há, sim, um problema sério de cobertura.",
      /* erro de cobertura, conceitual: fica para a revisão independente */
    };
  })(),
  (() => {
    const o = ["Sim: todos os elementos têm o mesmo peso", "Não: é sempre preciso ponderar", "Só se os estratos tiverem médias iguais", "Só se houver dois estratos", "Não: a média simples é sempre enviesada"];
    return {
      d: "media",
      e: "Numa amostra estratificada com alocação proporcional, a média simples de todos os elementos da amostra estima corretamente a média da população?",
      o,
      x: "Com alocação proporcional, cada estrato tem na amostra a mesma fração que tem na população, e cada elemento representa o mesmo número de elementos da população. A média ponderada pelos tamanhos dos estratos coincide com a média simples da amostra: o plano é autoponderado.\n\nA ponderação explícita só é necessária quando a alocação não é proporcional. A igualdade vale mesmo com médias diferentes nos estratos. O número de estratos não importa. E, nesse plano, a média simples não é enviesada.",
      v: {
        i: () => {
          /* três estratos de médias diferentes, alocação proporcional 30 : 50 : 20 */
          const g = gerador(8), Ns = [3000, 5000, 2000], ns = [30, 50, 20], amostras = [10, 25, 60].map((m, h) => Array.from({ length: ns[h] }, () => g(m, 4)));
          const pond = soma(amostras.map((a, h) => (Ns[h] / 10000) * media(a))), simples = media(amostras.flat());
          return unicoV([Math.abs(pond - simples) < 1e-9, false, false, false, false]);
        },
      },
    };
  })(),
  (() => {
    const o = ["20", "60", "1.200", "1", "24.000"];
    return {
      d: "media",
      e: "Numa lista de 1.200 elementos, uma amostra sistemática usa intervalo 20 e ponto de partida sorteado entre 1 e 20. Quantas amostras diferentes são possíveis?",
      o,
      x: "A amostra fica inteiramente determinada pelo ponto de partida: cada início, de 1 a 20, gera uma amostra diferente de 60 elementos. Há, portanto, só 20 amostras possíveis, número muito menor que o de uma aleatória simples de 60 elementos, que seria enorme. Por isso a sistemática é simples de executar, mas sensível a padrões periódicos na lista.\n\n60 é o tamanho de cada amostra. 1.200 é o tamanho da população. 1 ignora o sorteio do início. E 24.000 multiplica 1.200 por 20.",
      v: { i: () => qualNum(new Set([...Array(20).keys()].map((s) => sistematica(1200, 20, s + 1).join(","))).size, o) },
    };
  })(),
  (() => {
    const o = ["O bairro, que costuma se associar à renda", "A cor dos olhos do chefe da família", "O dia do mês do nascimento", "A letra inicial do sobrenome", "O último dígito do telefone"];
    return {
      d: "media",
      e: "Para estimar a renda média das famílias de uma cidade, qual destas variáveis seria mais útil para formar os estratos?",
      o,
      x: "A estratificação só aumenta a precisão se os estratos forem diferentes entre si quanto à variável estudada. Bairros costumam concentrar famílias de renda parecida, e renda média diferente de um bairro para outro: estratos internamente homogêneos e distintos entre si.\n\nCor dos olhos, dia do nascimento, inicial do sobrenome e dígito do telefone não se relacionam com a renda: estratos formados por eles teriam médias parecidas, e a estratificação não traria ganho.",
      /* escolha conceitual da variável de estratificação: fica para a revisão independente */
    };
  })(),
  (() => {
    const o = ["52, 31 e 17", "33, 33 e 34", "52, 31 e 16", "50, 30 e 20", "523, 311 e 166"];
    return {
      d: "media",
      e: "Três estratos têm 523, 311 e 166 elementos. Para uma amostra proporcional de 100, arredondando de modo que a soma dê exatamente 100, quantos elementos vêm de cada estrato?",
      o,
      x: "As cotas exatas são 52,3, 31,1 e 16,6, que somam 100. Arredondando para o inteiro mais próximo, obtêm-se 52, 31 e 17, que também somam 100. Quando o arredondamento simples não fecha a soma, ajusta-se o estrato com a maior parte fracionária.\n\n33, 33 e 34 divide a amostra igualmente, sem proporção. 52, 31 e 16 trunca todos os valores e soma só 99. 50, 30 e 20 arredonda grosseiramente e distorce as proporções. E 523, 311 e 166 são os tamanhos dos estratos.",
      v: {
        i: () => {
          /* maiores restos: parte inteira de cada cota e as unidades que faltam para os maiores restos */
          const N = [523, 311, 166], q = N.map((x) => (100 * x) / 1000), base = q.map(Math.floor); let falta = 100 - soma(base);
          [...q.keys()].sort((a, b) => (q[b] - base[b]) - (q[a] - base[a])).forEach((h) => { if (falta > 0) { base[h]++; falta--; } });
          return unicoV(o.map((t) => numeros(t).join(",") === base.join(",")));
        },
      },
    };
  })(),
  (() => {
    const o = ["Maior, como numa estratificação implícita", "Sempre menor", "Nula, porque a amostra fica enviesada", "Igual em qualquer caso", "Impossível de avaliar"];
    return {
      d: "media",
      e: "Se a lista usada numa amostragem sistemática estiver ordenada pela própria variável estudada, como tende a ser a precisão, em comparação com uma aleatória simples de mesmo tamanho?",
      o,
      x: "Com a lista ordenada, a amostra sistemática percorre todas as faixas de valores, pegando um elemento de cada trecho de k posições. É como uma estratificação em que cada trecho é um estrato, e a média amostral varia menos que numa aleatória simples. O perigo está em listas com padrão periódico, e não em listas ordenadas.\n\nA precisão não fica menor nesse caso. A amostra não é enviesada, porque o início é sorteado. A igualdade vale para listas em ordem aleatória. E a precisão pode ser avaliada por simulação ou por fórmulas.",
      v: {
        i: () => {
          const g = gerador(9), r = sorteador(10), pop = Array.from({ length: 1000 }, () => g(50, 10)).sort((a, b) => a - b);
          const sis = [...Array(20).keys()].map((s) => media(sistematica(1000, 20, s + 1).map((i) => pop[i - 1]))), simples = Array.from({ length: 4000 }, () => media(aas(r, pop, 50)));
          const vS = variancia(sis), vA = variancia(simples), semVies = Math.abs(media(sis) - media(pop)) < 0.5;
          return unicoV([vS < vA / 10 && semVies, vS > vA, !semVies, Math.abs(vS / vA - 1) < 0.1, false]);
        },
      },
    };
  })(),
  (() => {
    const o = ["É não probabilística e pode ter viés de seleção", "É equivalente à estratificada", "Garante representatividade perfeita", "Permite calcular a margem de erro exata", "Elimina o erro amostral"];
    return {
      d: "media",
      e: "Na amostragem por cotas, o entrevistador escolhe livremente quem entrevistar até completar o número exigido em cada grupo. Qual é a consequência?",
      o,
      x: "As cotas garantem a composição da amostra por sexo, idade ou outros grupos, mas dentro de cada cota o entrevistador escolhe quem abordar. Ele tende a escolher pessoas mais acessíveis, que podem diferir das demais na variável estudada, e a estimativa fica enviesada. Sem sorteio, não há probabilidades de seleção conhecidas.\n\nA falta de sorteio a separa da estratificada. Composição correta por grupos não garante representatividade. A margem de erro exige amostragem probabilística. E nenhum plano elimina o erro amostral.",
      v: {
        i: () => {
          /* dentro de cada cota, o entrevistador aborda os mais acessíveis, e acessibilidade se liga à variável */
          const g = gerador(11), grupos = [0, 1].map((h) => Array.from({ length: 5000 }, () => { const aces = g(); return { aces, y: 50 + 10 * h + 4 * aces + g(0, 3) }; }));
          const real = media(grupos.flat().map((p) => p.y)), cota = grupos.flatMap((gr) => [...gr].sort((a, b) => b.aces - a.aces).slice(0, 50)), est = media(cota.map((p) => p.y));
          return unicoV([est - real > 3, false, false, false, false]);
        },
      },
    };
  })(),
  (() => {
    const o = ["≈ 37%", "10%", "0%", "≈ 63%", "1%"];
    return {
      d: "media",
      e: "Numa urna com 100 fichas, sorteiam-se 10 com reposição. Qual é, aproximadamente, a probabilidade de alguma ficha sair repetida?",
      o,
      x: "A chance de as 10 fichas serem todas diferentes é (100 · 99 · 98 · … · 91)/100¹⁰ ≈ 0,63. Logo, a chance de alguma repetição é cerca de 1 − 0,63 = 0,37. É o mesmo raciocínio do problema dos aniversários: repetições surgem mais cedo do que a intuição sugere.\n\n10% é a fração da urna sorteada. 0% seria o caso sem reposição. 63% é a chance de não haver repetição. E 1% é a chance de uma ficha específica sair na primeira retirada.",
      v: { i: () => { const r = sorteador(12), R = 100000; let rep = 0; for (let k = 0; k < R; k++) { const s = new Set(); for (let j = 0; j < 10; j++) s.add(Math.floor(r() * 100)); if (s.size < 10) rep++; } return qualNum((100 * rep) / R, o, 0.02); } },
    };
  })(),
  (() => {
    const o = ["Sim: toda amostra de 50 tem a mesma chance", "Não: favorece as primeiras fichas", "Não: é uma amostragem sistemática", "Só se os números forem inteiros", "Não: é uma amostragem por conglomerados"];
    return {
      d: "media",
      e: "Para sortear 50 de 1.000 fichas, atribui-se a cada ficha um número aleatório entre 0 e 1 e escolhem-se as 50 fichas com os menores números. Esse procedimento produz uma amostra aleatória simples?",
      o,
      x: "Os números aleatórios colocam as fichas numa ordem ao acaso, e todas as ordens são igualmente prováveis. Escolher as 50 primeiras dessa ordem dá a cada subconjunto de 50 fichas a mesma chance: é uma amostra aleatória simples, muito usada em planilhas.\n\nA posição original das fichas não interfere. Não há intervalo fixo, como na sistemática. Números contínuos funcionam, e empates praticamente não ocorrem. E não há sorteio de grupos, como nos conglomerados.",
      v: {
        i: () => {
          /* frequência de inclusão da primeira e da última ficha, e uniformidade das duplas num caso pequeno */
          const r = sorteador(13), R = 20000, lista = [...Array(1000).keys()]; let prim = 0, ult = 0;
          for (let k = 0; k < R; k++) { const a = new Set(aas(r, lista, 50)); if (a.has(0)) prim++; if (a.has(999)) ult++; }
          const cont = new Map(); for (let k = 0; k < 30000; k++) { const d = aas(r, [1, 2, 3, 4], 2).sort().join(); cont.set(d, (cont.get(d) ?? 0) + 1); }
          const ok = Math.abs(prim / R - 0.05) < 0.006 && Math.abs(ult / R - 0.05) < 0.006 && cont.size === 6 && [...cont.values()].every((c) => Math.abs(c / 30000 - 1 / 6) < 0.012);
          return unicoV([ok, prim > 2 * ult, false, false, false]);
        },
      },
    };
  })(),
  (() => {
    const o = ["Todos os estratos entram; só alguns conglomerados", "Estratos são sempre maiores", "Conglomerados são sempre homogêneos por dentro", "Não há diferença prática", "Estratos dispensam sorteio"];
    return {
      d: "media",
      e: "Qual é a diferença entre estratos e conglomerados num plano amostral?",
      o,
      x: "Na estratificação, todos os estratos entram na amostra, e sorteiam-se elementos dentro de cada um; o ideal são estratos homogêneos por dentro e diferentes entre si. Nos conglomerados, sorteiam-se só alguns grupos, e observam-se os seus elementos; o ideal são grupos variados por dentro e parecidos entre si, como miniaturas da população.\n\nO tamanho dos grupos não define a técnica. Conglomerados homogêneos por dentro são, ao contrário, o pior caso. A diferença prática é grande. E a estratificação exige sorteio dentro de cada estrato.",
      /* distinção conceitual: fica para a revisão independente */
    };
  })(),
  (() => {
    const o = ["O dobro", "A mesma", "A metade", "Nenhuma", "O quádruplo"];
    return {
      d: "media",
      e: "Num cadastro de telefones, as pessoas com dois números aparecem duas vezes. Num sorteio de números, que chance essas pessoas têm de ser escolhidas, em relação às que têm um só número?",
      o,
      x: "Cada número do cadastro tem a mesma chance de ser sorteado, e quem tem dois números tem duas entradas na lista: a chance dessa pessoa é praticamente o dobro. Se ter dois telefones se relaciona com a variável estudada, como renda, a estimativa fica enviesada, a menos que se corrija com pesos. A correção usual dá a essas pessoas metade do peso das demais.\n\nA chance não é a mesma, porque o cadastro tem duplicatas. Não cai à metade nem some. E o quádruplo exigiria quatro entradas.",
      v: {
        i: () => {
          /* 1.000 pessoas, as 300 primeiras com dois números; sorteios de 1 número entre 1.300 */
          const cad = [...[...Array(1000).keys()], ...[...Array(300).keys()]], r = sorteador(14), R = 400000; let duas = 0, uma = 0;
          for (let k = 0; k < R; k++) { const p = cad[Math.floor(r() * cad.length)]; if (p === 0) duas++; if (p === 999) uma++; }
          const razao = duas / uma; return unicoV([Math.abs(razao - 2) < 0.2, Math.abs(razao - 1) < 0.2, Math.abs(razao - 0.5) < 0.1, razao === 0, Math.abs(razao - 4) < 0.3]);
        },
      },
    };
  })(),
  (() => {
    const o = ["482", "500", "475", "507", "457"];
    return {
      d: "media",
      e: "Numa lista de 500 elementos, faz-se uma amostra sistemática com intervalo 25 e ponto de partida 7. Qual é o último elemento sorteado?",
      o,
      x: "Os sorteados são 7, 32, 57 e assim por diante, somando 25 a cada passo: 7 + 25 · j. O maior valor que não passa de 500 é obtido com j = 19: 7 + 475 = 482. A amostra tem 20 elementos, de 7 a 482, sempre a mesma distância de 25 um do outro.\n\n500 é o fim da lista, que não é sorteado. 475 = 25 · 19 esquece o ponto de partida. 507 passa do fim da lista. E 457 para um passo antes.",
      v: { i: () => { const a = sistematica(500, 25, 7); return a.length === 20 ? qualNum(a[a.length - 1], o) : -1; } },
    };
  })(),
  (() => {
    const o = ["Os de B, com 25% contra 5%", "Os de A, com 5% contra 25%", "Todos, com 50/1.200", "Todos, com 10%", "Os de A, por ser o maior estrato"];
    return {
      d: "media",
      e: "Numa amostra estratificada, sortearam-se 50 elementos de um estrato A de 1.000 e 50 de um estrato B de 200. Os elementos de qual estrato tiveram mais chance de ser sorteados?",
      o,
      x: "A chance de inclusão em cada estrato é o tamanho da amostra dividido pelo tamanho do estrato: 50/1.000 = 5% em A e 50/200 = 25% em B. Com alocação igual em estratos de tamanhos diferentes, o estrato menor fica super-representado, e as estimativas gerais precisam de pesos para compensar.\n\nA tem chance menor, e não maior. As chances não são iguais para todos, porque a alocação não é proporcional. 10% não corresponde a nenhum estrato. E ser o maior estrato reduz, e não aumenta, a chance de cada elemento.",
      v: {
        i: () => {
          const r = sorteador(15), R = 20000; let a = 0, b = 0;
          for (let k = 0; k < R; k++) { if (aas(r, [...Array(1000).keys()], 50).includes(0)) a++; if (aas(r, [...Array(200).keys()], 50).includes(0)) b++; }
          const pa = (100 * a) / R, pb = (100 * b) / R, ok = Math.abs(pa - 5) < 0.5 && Math.abs(pb - 25) < 1;
          return unicoV([ok && pb > pa, pa > pb, Math.abs(pa - pb) < 0.5, false, pa > pb]);
        },
      },
    };
  })(),
  (() => {
    const o = ["Não: reduz a variação, mas não o viés", "Sim: amostras grandes eliminam o viés", "Sim, se passar de 1.000 pessoas", "Não: aumenta o viés", "Sim, se a coleta durar vários dias"];
    return {
      d: "media",
      e: "Aumentar muito o tamanho de uma amostra por conveniência resolve o seu viés?",
      o,
      x: "Com mais observações, a estimativa varia menos de uma amostra para outra, mas continua centrada no valor errado, porque a forma de seleção favorece certos grupos. O viés é sistemático e não diminui com o tamanho: uma amostra enorme e enviesada só dá uma estimativa errada com muita confiança.\n\nNenhum tamanho elimina o viés de seleção. O limite de 1.000 não tem papel especial. O viés não aumenta com n; ele permanece. E estender a coleta no tempo não substitui o sorteio.",
      v: {
        i: () => {
          /* conveniência: quem tem a característica tem o triplo de chance de ser alcançado; 30% na população */
          const r = sorteador(16), coleta = (n) => { let c = 0, t = 0; while (t < n) { const tem = r() < 0.3; if (r() < (tem ? 0.3 : 0.1)) { t++; if (tem) c++; } } return c / n; };
          const peq = Array.from({ length: 300 }, () => coleta(100)), grd = Array.from({ length: 30 }, () => coleta(10000));
          const viesPersiste = media(grd) - 0.3 > 0.15, variaMenos = variancia(grd) < variancia(peq) / 10;
          return unicoV([viesPersiste && variaMenos, !viesPersiste, !viesPersiste, media(grd) - 0.3 > media(peq) - 0.3 + 0.05, false]);
        },
      },
    };
  })(),
  (() => {
    const o = ["200", "800", "400", "20", "1.600"];
    return {
      d: "media",
      e: "Um plano por conglomerados tem efeito do plano igual a 2: sua variância é o dobro da de uma aleatória simples de mesmo tamanho. Uma amostra de 400 pessoas nesse plano equivale, em precisão, a uma aleatória simples de quantas pessoas?",
      o,
      x: "O tamanho efetivo é o tamanho da amostra dividido pelo efeito do plano: 400/2 = 200. Com variância dobrada, as 400 entrevistas por conglomerados dão a mesma precisão que 200 entrevistas sorteadas individualmente. A economia de custo dos conglomerados precisa compensar essa perda.\n\n800 multiplica em vez de dividir. 400 ignora o efeito do plano. 20 é a raiz de 400. E 1.600 multiplica por 4.",
      v: { i: () => { const s2 = 7.3, vConglom = (2 * s2) / 400; let n = 1; while (s2 / n > vConglom + 1e-15) n++; return qualNum(n, o); } },
    };
  })(),
  (() => {
    const o = ["48.000", "1.200", "4.800", "120", "480.000"];
    return {
      d: "media",
      e: "Um bairro tem 400 quarteirões. Sorteiam-se 10 quarteirões e contam-se todos os seus moradores: 1.200 pessoas. Qual é a estimativa do total de moradores do bairro?",
      o,
      x: "Os 10 quarteirões sorteados são 10/400 = 1/40 dos quarteirões, e cada um representa 40 quarteirões do bairro. A estimativa do total é 1.200 · 40 = 48.000 moradores. Equivalentemente, a média de 120 moradores por quarteirão, multiplicada por 400, dá o mesmo total.\n\n1.200 é o total da amostra, sem expandir. 4.800 multiplica por 4. 120 é a média por quarteirão. E 480.000 multiplica 1.200 por 400.",
      v: {
        i: () => {
          /* o estimador expandido é não viesado: média das estimativas em muitos sorteios ≈ total real */
          const r = sorteador(17), g = gerador(18), qs = Array.from({ length: 400 }, () => Math.max(0, Math.round(g(120, 30)))), real = soma(qs), ests = Array.from({ length: 5000 }, () => soma(aas(r, qs, 10)) * 40);
          return Math.abs(media(ests) / real - 1) < 0.01 ? qualNum(1200 * (400 / 10), o) : -1;
        },
      },
    };
  })(),
  (() => {
    const o = ["O sorteio evita o viés da escolha do pesquisador", "Porque sortear dá sempre amostras maiores", "Porque o pesquisador nunca conhece a população", "Porque escolher é proibido", "Porque o sorteio elimina o erro amostral"];
    return {
      d: "media",
      e: "Por que, em vez de o pesquisador escolher os elementos que considera mais típicos, recomenda-se sortear a amostra?",
      o,
      x: "Quando o pesquisador escolhe os elementos que julga típicos, suas expectativas entram na amostra, e os resultados tendem a confirmar o que ele já pensava. O sorteio impede essa interferência e ainda permite medir a incerteza, com probabilidades de seleção conhecidas.\n\nO sorteio não aumenta o tamanho da amostra. O pesquisador pode conhecer bem a população, e ainda assim errar ao escolher. Amostras intencionais são permitidas, mas não probabilísticas. E o sorteio não elimina o erro amostral: apenas o torna mensurável.",
      /* justificativa conceitual: fica para a revisão independente */
    };
  })(),
  (() => {
    const o = ["1/1.140", "3/20", "1/20", "1/6.840", "1/8.000"];
    return {
      d: "media",
      e: "Numa amostra aleatória simples de 3 elementos, sem reposição, de uma população de 20, qual é a probabilidade de sair uma amostra específica, fixada de antemão?",
      o,
      x: "Há C(20, 3) = (20 · 19 · 18)/(3 · 2 · 1) = 1.140 subconjuntos de 3 elementos, todos igualmente prováveis na amostragem aleatória simples. A chance de sair uma amostra específica é 1/1.140.\n\n3/20 é a chance de um elemento específico entrar na amostra. 1/20 é a chance de ele sair na primeira retirada. 1/6.840 conta as sequências ordenadas, 20 · 19 · 18, e não os subconjuntos. E 1/8.000 = 1/20³ supõe sorteio com reposição e com ordem.",
      v: { i: () => { const p = 1 / combinacoes([...Array(20).keys()], 3).length; return unicoV(o.map((t) => Math.abs(fracao(t) - p) < 1e-12)); } },
    };
  })(),
  (() => {
    const o = ["130", "3", "≈ 43,3", "55", "40"];
    return {
      d: "media",
      e: "Numa amostragem por conglomerados em um estágio, sortearam-se 3 escolas, com 40, 55 e 35 alunos. Quantos alunos entram na amostra?",
      o,
      x: "Em um estágio, todos os elementos dos conglomerados sorteados entram na amostra: 40 + 55 + 35 = 130 alunos. O tamanho da amostra depende do tamanho dos conglomerados sorteados e, por isso, pode variar de um sorteio para outro. Num plano em dois estágios, seria sorteado também um número fixo de alunos em cada escola.\n\n3 é o número de escolas, e não de alunos. 43,3 é a média de alunos por escola sorteada. 55 é a maior escola. E 40 é só a primeira.",
      v: { i: () => qualNum(soma([40, 55, 35]), o) },
    };
  })(),

  /* ---------------------------------------------------------- difíceis --- */
  (() => {
    const o = ["5", "2", "25", "1", "≈ 2,24"];
    return {
      d: "dificil",
      e: "Uma população tem dois estratos de mesmo tamanho, com médias 10 e 30 e desvio padrão 5 dentro de cada um. Comparando uma amostra estratificada proporcional de 50 com uma aleatória simples de 50, quantas vezes menor é a variância da média estratificada?",
      o,
      x: "A variância total da população soma a variação dentro dos estratos, 5² = 25, com a variação entre as médias: cada estrato fica 10 unidades da média geral, e isso acrescenta 10² = 100. Na aleatória simples, a variância da média é 125/50 = 2,5. Na estratificada proporcional, só a variação dentro dos estratos conta: 25/50 = 0,5. A razão é 2,5/0,5 = 5.\n\n2 conta dois estratos. 25 é a variância dentro dos estratos. 1 ignora o ganho da estratificação. E 2,24 = √5 compara desvios padrão, e não variâncias.",
      v: {
        i: () => {
          const g = gerador(19), r = sorteador(20), e1 = Array.from({ length: 5000 }, () => g(10, 5)), e2 = Array.from({ length: 5000 }, () => g(30, 5)), pop = [...e1, ...e2], a = [], b = [];
          for (let k = 0; k < 4000; k++) { a.push(media(aas(r, pop, 50))); b.push((media(aas(r, e1, 25)) + media(aas(r, e2, 25))) / 2); }
          return qualNum(variancia(a) / variancia(b), o, 0.08);
        },
      },
    };
  })(),
  (() => {
    const o = ["Metade do peso das demais", "O dobro do peso", "O mesmo peso", "Peso zero", "Um quarto do peso"];
    return {
      d: "dificil",
      e: "Num cadastro, as pessoas com dois telefones aparecem duas vezes e, por isso, têm o dobro de chance de sorteio. Para que a estimativa não fique enviesada, que peso essas pessoas devem receber, em relação às demais?",
      o,
      x: "O peso de cada entrevistado deve ser o inverso da sua probabilidade de seleção. Quem tem chance dupla recebe metade do peso: assim, cada grupo contribui para a estimativa na proporção em que existe na população, e a super-representação no sorteio é compensada.\n\nO dobro do peso agravaria a distorção. O mesmo peso deixaria o viés como está. Peso zero excluiria um grupo real da população. E um quarto do peso corrigiria demais.",
      v: {
        i: () => {
          /* 30% com dois números e característica em 80% deles; 70% com um número e característica em 30%: proporção real 45% */
          const r = sorteador(21), pessoas = Array.from({ length: 10000 }, (_, i) => { const dois = i < 3000; return { k: dois ? 2 : 1, y: r() < (dois ? 0.8 : 0.3) ? 1 : 0 }; });
          const real = media(pessoas.map((p) => p.y)), cad = pessoas.flatMap((p) => Array(p.k).fill(p));
          const est = (wDois) => { let num = 0, den = 0; for (let t = 0; t < 40000; t++) { const p = cad[Math.floor(r() * cad.length)], w = p.k === 2 ? wDois : 1; num += w * p.y; den += w; } return num / den; };
          return unicoV([0.5, 2, 1, 0, 0.25].map((w, j) => (j === 3 ? false : Math.abs(est(w) - real) < 0.01)));
        },
      },
    };
  })(),
  (() => {
    const o = ["40 e 80", "80 e 40", "60 e 60", "24 e 96", "13 e 107"];
    return {
      d: "dificil",
      e: "Dois estratos têm 2.000 e 1.000 elementos, com desvios padrão 5 e 20. Pela alocação de Neyman, proporcional a Nₕ · σₕ, como dividir uma amostra de 120?",
      o,
      x: "Os produtos Nₕ · σₕ são 2.000 · 5 = 10.000 e 1.000 · 20 = 20.000, na razão 1 : 2. O primeiro estrato recebe 120 · 1/3 = 40, e o segundo, 120 · 2/3 = 80. O estrato menor, porém muito mais variável, recebe mais observações.\n\n80 e 40 é a alocação proporcional, que só olha os tamanhos. 60 e 60 é a alocação igual. 24 e 96 só olha os desvios padrão. E 13 e 107 usa as variâncias no lugar dos desvios.",
      v: {
        i: () => {
          const W = [2 / 3, 1 / 3], s2 = [25, 400]; let melhor = 0, vmin = Infinity;
          for (let n1 = 1; n1 < 120; n1++) { const v = (W[0] ** 2 * s2[0]) / n1 + (W[1] ** 2 * s2[1]) / (120 - n1); if (v < vmin) { vmin = v; melhor = n1; } }
          return unicoV(o.map((t) => { const [a, b] = t.split(" e ").map(Number); return a === melhor && b === 120 - melhor; }));
        },
      },
    };
  })(),
  (() => {
    const o = ["2", "1,05", "21", "0,05", "1"];
    return {
      d: "dificil",
      e: "Numa amostra por conglomerados, cada turma sorteada contribui com 21 alunos, e a correlação intraclasse da variável estudada é 0,05. Usando efeito do plano = 1 + (m − 1) · ρ, quanto ele vale?",
      o,
      x: "Com m = 21 alunos por turma e ρ = 0,05, o efeito do plano é 1 + 20 · 0,05 = 1 + 1 = 2: a variância fica o dobro da de uma aleatória simples do mesmo tamanho. Mesmo uma correlação pequena pesa quando os conglomerados são grandes, porque ela se multiplica pelo número de colegas de cada aluno.\n\n1,05 soma só ρ. 21 é o tamanho do conglomerado. 0,05 é a própria correlação. E 1 seria o caso sem correlação dentro das turmas.",
      v: {
        i: () => {
          /* efeito de turma com variância 0,05 e individual com 0,95: correlação intraclasse 0,05 */
          const g = gerador(22), r = sorteador(23), turmas = Array.from({ length: 2000 }, () => { const ef = g(0, Math.sqrt(0.05)); return Array.from({ length: 21 }, () => ef + g(0, Math.sqrt(0.95))); }), todos = turmas.flat(), a = [], b = [];
          for (let k = 0; k < 4000; k++) { a.push(media(aas(r, turmas, 10).flat())); b.push(media(aas(r, todos, 210))); }
          return qualNum(variancia(a) / variancia(b), o, 0.08);
        },
      },
    };
  })(),
  (() => {
    const o = ["4.000", "60", "20%", "300", "900"];
    return {
      d: "dificil",
      e: "Numa amostra em dois estágios, cada aluno tinha probabilidade de 1,5% de ser sorteado. Entre os 300 sorteados, 60 praticam esporte. Qual é a estimativa do total de alunos que praticam esporte na rede?",
      o,
      x: "Cada aluno sorteado representa 1/0,015 ≈ 66,7 alunos da rede, o inverso da sua probabilidade de seleção. A estimativa do total é 60 · 66,7 = 4.000. Pela proporção, dá o mesmo: 60/300 = 20% dos 20.000 alunos da rede, que é 300/0,015.\n\n60 é a contagem na amostra, sem expandir. 20% é a proporção, e não o total. 300 é o tamanho da amostra. E 900 multiplica 60 por 15.",
      v: { i: () => { const peso = 1 / 0.015, N = 300 * peso; return Math.abs((60 / 300) * N - 60 * peso) < 1e-6 ? qualNum(60 * peso, o, 1e-6) : -1; } },
    };
  })(),
  (() => {
    const o = ["Como estratos, amostrando em todos", "Como conglomerados, sorteando alguns bairros inteiros", "Tanto faz a forma de usá-los", "Ignorar os bairros no sorteio", "Sortear um único bairro inteiro"];
    return {
      d: "dificil",
      e: "Numa cidade, os bairros são muito diferentes entre si quanto à renda, mas homogêneos por dentro. Para estimar a renda média com boa precisão, como é melhor usar os bairros no plano amostral?",
      o,
      x: "Bairros diferentes entre si e homogêneos por dentro são o caso ideal para estratos: amostrando em todos, a variação entre bairros sai da estimativa, e a precisão aumenta muito. Como conglomerados, seria o pior caso: sorteando só alguns bairros, a estimativa dependeria de quais bairros saíram, ricos ou pobres.\n\nA forma de usá-los faz grande diferença. Ignorar os bairros desperdiça uma informação útil. E um único bairro representaria só uma faixa de renda.",
      v: {
        i: () => {
          /* 20 bairros de 500 famílias, médias espalhadas e pouca variação interna; 100 entrevistas em cada plano */
          const g = gerador(24), r = sorteador(25), bairros = Array.from({ length: 20 }, (_, b) => Array.from({ length: 500 }, () => 1000 + 300 * b + g(0, 100))), todos = bairros.flat(), estr = [], cong = [], simp = [];
          for (let k = 0; k < 3000; k++) { estr.push(media(bairros.map((b) => media(aas(r, b, 5))))); cong.push(media(aas(r, bairros, 2).map((b) => media(aas(r, b, 50))))); simp.push(media(aas(r, todos, 100))); }
          const [ve, vc, vs] = [estr, cong, simp].map(variancia);
          return unicoV([ve < vs && vs < vc, vc < ve, Math.abs(ve / vc - 1) < 0.2, vs < ve, false]);
        },
      },
    };
  })(),
  (() => {
    const o = ["1/110", "1/100", "1/10", "1/4.950", "1/55"];
    return {
      d: "dificil",
      e: "Numa amostra aleatória simples de 10 pessoas, sem reposição, de uma população de 100, qual é a probabilidade de duas pessoas específicas entrarem ambas na amostra?",
      o,
      x: "A primeira pessoa entra com probabilidade 10/100. Dado que ela entrou, restam 9 vagas entre 99 pessoas, e a segunda entra com probabilidade 9/99. O produto é (10/100) · (9/99) = 90/9.900 = 1/110. Pela contagem, C(98, 8)/C(100, 10) dá o mesmo valor.\n\n1/100 = (1/10)² trataria as duas inclusões como independentes, o que valeria com reposição. 1/10 é a chance de uma só pessoa. 1/4.950 é a chance de a amostra ser exatamente esse par, se o tamanho fosse 2. E 1/55 conta duas vezes a mesma dupla.",
      v: {
        i: () => {
          /* C(98, 8)/C(100, 10) fator a fator */
          let p = 1; for (let k = 0; k < 8; k++) p *= (98 - k) / (100 - k); p *= (10 * 9) / ((100 - 8) * (100 - 9));
          return unicoV(o.map((t) => Math.abs(fracao(t) - p) < 1e-12));
        },
      },
    };
  })(),
  (() => {
    const o = ["100 ou 101, conforme o início", "Sempre 100", "Sempre 101", "Sempre 1.003", "Sempre 10"];
    return {
      d: "dificil",
      e: "Numa lista de 1.003 elementos, faz-se uma amostra sistemática com intervalo 10 e ponto de partida sorteado entre 1 e 10. Qual pode ser o tamanho da amostra?",
      o,
      x: "Com início s, os sorteados são s, s + 10, …, até 1.003. Para s = 1, 2 ou 3, o último é 1.001, 1.002 ou 1.003, e a amostra tem 101 elementos; para s de 4 a 10, o último fica abaixo de 1.003, e a amostra tem 100. Quando N não é múltiplo de k, o tamanho da amostra sistemática varia com o início.\n\nNão é sempre 100 nem sempre 101. 1.003 é o tamanho da lista. E 10 é o intervalo.",
      v: {
        i: () => {
          const tam = [...new Set([...Array(10).keys()].map((s) => sistematica(1003, 10, s + 1).length))].sort((a, b) => a - b);
          return unicoV([tam.join() === "100,101", tam.join() === "100", tam.join() === "101", tam.join() === "1003", tam.join() === "10"]);
        },
      },
    };
  })(),
  (() => {
    const o = ["60%", "≈ 33,3%", "20%", "50%", "100%"];
    return {
      d: "dificil",
      e: "Três escolas têm 100, 300 e 600 alunos. Sorteia-se uma escola com probabilidade proporcional ao seu número de alunos. Qual é a probabilidade de sair a maior escola?",
      o,
      x: "Na seleção com probabilidade proporcional ao tamanho, cada escola tem chance igual ao seu número de alunos dividido pelo total: 600/1.000 = 60%. Uma forma de fazer isso é sortear um aluno ao acaso entre todos e tomar a escola dele.\n\n33,3% daria chances iguais às três escolas. 20% é 1/5, sem base no problema. 50% trata o sorteio como sim ou não. E 100% ignora as outras escolas.",
      v: {
        i: () => {
          /* sorteio de um aluno ao acaso entre os 1.000, tomando a escola dele */
          const escolas = [...Array(100).fill(0), ...Array(300).fill(1), ...Array(600).fill(2)], r = sorteador(26), R = 100000; let maior = 0;
          for (let k = 0; k < R; k++) if (escolas[Math.floor(r() * 1000)] === 2) maior++;
          return qualNum((100 * maior) / R, o, 0.01);
        },
      },
    };
  })(),
  (() => {
    const o = ["1/3", "2/3", "1/6", "1/2", "1"];
    return {
      d: "dificil",
      e: "Da população {1, 2, 3}, retiram-se amostras de 2 elementos com reposição. Considerando as 9 amostras ordenadas, igualmente prováveis, qual é a variância da média amostral?",
      o,
      x: "A população tem média 2 e variância σ² = [(1 − 2)² + 0 + (3 − 2)²]/3 = 2/3. Com reposição, a variância da média de n observações é σ²/n = (2/3)/2 = 1/3. Pelas 9 amostras: as médias 1, 1,5, 2, 1,5, 2, 2,5, 2, 2,5 e 3 têm média 2 e variância 3/9 = 1/3.\n\n2/3 é a variância da população, sem dividir por n. 1/6 é a variância da média sem reposição, com as 3 amostras de elementos distintos. 1/2 usa a variância com divisor n − 1, igual a 1, e divide por 2. E 1 é essa variância com divisor n − 1, sem dividir por n.",
      v: {
        i: () => {
          const pop = [1, 2, 3], com = produto(pop, pop).map(media), sem = combinacoes(pop, 2).map(media), v = variancia(com);
          return Math.abs(variancia(sem) - 1 / 6) < 1e-12 ? unicoV(o.map((t) => Math.abs(fracao(t.includes("/") ? t : `${t}/1`) - v) < 1e-12)) : -1;
        },
      },
    };
  })(),
];
