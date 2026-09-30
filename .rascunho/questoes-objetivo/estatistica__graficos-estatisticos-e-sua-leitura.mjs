/* Rascunho — Estatística / Gráficos estatísticos e sua leitura.

   Os gráficos são descritos em texto (alturas, ângulos, limites da caixa,
   marcas do eixo), e a conferência refaz a leitura com contas: ângulos e
   proporções, áreas de barras, cercas do boxplot, percentis por
   interpolação, escalas logarítmicas, médias móveis; as leituras de forma
   (assimetria, sazonalidade, dois picos) são conferidas em dados gerados
   com semente fixa. Questões que só pedem a escolha do tipo de gráfico
   ficam sem conferência em código, para a revisão independente. */

import { unicoV, soma, qualNum, lerNum, sorteador } from "./_estatistica.mjs";

export const materia = "estatistica";
export const tema = "Gráficos estatísticos e sua leitura";
export const arquivo = "estatistica__graficos-estatisticos-e-sua-leitura";

const media = (xs) => soma(xs) / xs.length;
const ordena = (xs) => [...xs].sort((a, b) => a - b);
const mediana = (xs) => { const o = ordena(xs), n = o.length; return n % 2 ? o[(n - 1) / 2] : (o[n / 2 - 1] + o[n / 2]) / 2; };
/* quartis pela mediana de cada metade, sem a mediana quando n é ímpar */
const quartis = (xs) => { const o = ordena(xs), n = o.length, h = Math.floor(n / 2); return [mediana(o.slice(0, h)), mediana(o), mediana(o.slice(n - h))]; };
const cincoNumeros = (xs) => { const o = ordena(xs), [q1, md, q3] = quartis(o); return [o[0], q1, md, q3, o[o.length - 1]]; };
const gerador = (semente) => { const r = sorteador(semente); return (mu = 0, s = 1) => { let u = r(); while (u <= 0) u = r(); return mu + s * Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * r()); }; };
const exponencial = (semente) => { const r = sorteador(semente); return () => { let u = r(); while (u <= 0) u = r(); return -Math.log(u); }; };
const contagens = (xs, lim) => lim.slice(0, -1).map((a, k) => xs.filter((x) => x >= a && (x < lim[k + 1] || (k === lim.length - 2 && x <= lim[k + 1]))).length);
const lista = (t) => t.replace(/ e /g, ", ").split(", ").map((s) => lerNum(s));

export const questoes = [
  /* ------------------------------------------------------------ fáceis --- */
  (() => {
    const o = ["90°", "25°", "45°", "180°", "100°"];
    return {
      d: "facil",
      e: "Num gráfico de setores, uma categoria corresponde a 25% do total. Qual é o ângulo do seu setor?",
      o,
      x: "O círculo inteiro tem 360°, que correspondem a 100% dos dados. Cada setor recebe a mesma fração do círculo que a categoria tem do total: 25% de 360° = 0,25 · 360° = 90°, um quarto do círculo. O mesmo cálculo, feito ao contrário, transforma um ângulo medido no gráfico em porcentagem: 72°, por exemplo, são 72/360 = 20% do total.\n\n25° lê a porcentagem como ângulo. 45° corresponderia a 12,5%. 180° é metade do círculo, 50%. E 100° não sai da proporção.",
      v: { i: () => qualNum((25 / 100) * 360, o, 1e-9) },
    };
  })(),
  (() => {
    const o = ["360", "150", "120", "270", "90"];
    return {
      d: "facil",
      e: "Num gráfico de barras das vendas de um trimestre, as barras de janeiro, fevereiro e março marcam 120, 150 e 90 unidades. Qual foi o total vendido no trimestre?",
      o,
      x: "O total é a soma das alturas das três barras: 120 + 150 + 90 = 360 unidades. Num gráfico de barras, cada barra mostra o valor de uma categoria, e a comparação entre alturas mostra as diferenças: fevereiro foi o melhor mês, e março, o pior. A média mensal do trimestre é 360/3 = 120 unidades.\n\n150 é a maior barra, a de fevereiro. 120 é janeiro. 270 soma só janeiro e fevereiro. E 90 é março.",
      v: { i: () => qualNum(soma([120, 150, 90]), o) },
    };
  })(),
  (() => {
    const o = ["Um gráfico de linhas", "Um gráfico de setores", "Um boxplot único com os 12 meses", "Um pictograma de termômetros", "Uma tabela de frequências das temperaturas"];
    return {
      d: "facil",
      e: "Para mostrar a evolução mensal da temperatura média de uma cidade ao longo de um ano, qual tipo de gráfico é o mais adequado?",
      o,
      x: "Dados medidos ao longo do tempo formam uma série temporal, e o gráfico de linhas, com os meses no eixo horizontal, mostra a evolução, a tendência e a sazonalidade. A ligação entre pontos consecutivos destaca as subidas e as descidas de um mês para o outro.\n\nO gráfico de setores mostra partes de um todo, e temperaturas não somam um total com sentido. Um boxplot único resume a distribuição, mas perde a ordem dos meses. Um pictograma dificulta a leitura de valores precisos. E uma tabela de frequências também descarta a ordem temporal.",
      /* escolha conceitual do tipo de gráfico: fica para a revisão independente */
    };
  })(),
  (() => {
    const o = ["5%", "95%", "0%", "20%", "15%"];
    return {
      d: "facil",
      e: "Num gráfico de setores, os setores de três categorias marcam 40%, 35% e 20%. Qual é a porcentagem do setor que falta, a quarta e última categoria?",
      o,
      x: "Num gráfico de setores, as porcentagens de todas as categorias somam 100%, porque o círculo representa o total. Então o setor que falta tem 100% − (40% + 35% + 20%) = 100% − 95% = 5%, com um ângulo de 0,05 · 360° = 18°.\n\n95% é a soma dos três setores conhecidos. 0% ignoraria a quarta categoria. 20% repete o menor setor dado. E 15% é a diferença entre 35% e 20%.",
      v: { i: () => qualNum(100 - soma([40, 35, 20]), o) },
    };
  })(),
  (() => {
    const o = ["De 160 a 170 cm", "De 150 a 160 cm", "De 170 a 180 cm", "De 150 a 180 cm", "Não há classe modal"];
    return {
      d: "facil",
      e: "Num histograma de alturas com classes de mesma largura, as barras de 150 a 160 cm, de 160 a 170 cm e de 170 a 180 cm representam 8, 15 e 12 pessoas. Qual classe é a modal?",
      o,
      x: "Com classes de mesma largura, a barra mais alta indica a classe com mais observações, a classe modal. A barra de 160 a 170 cm, com 15 pessoas, é a mais alta. É uma leitura direta do histograma, sem contas.\n\n150 a 160 cm tem a menor barra, 8 pessoas. 170 a 180 cm tem 12. 150 a 180 cm junta as três classes e não é uma classe do histograma. E há, sim, uma classe modal, porque as frequências não são todas iguais.",
      v: { i: () => { const f = [8, 15, 12], rot = ["De 150 a 160 cm", "De 160 a 170 cm", "De 170 a 180 cm"], k = f.indexOf(Math.max(...f)); return unicoV(o.map((t) => t === rot[k])); } },
    };
  })(),
  (() => {
    const o = ["Associação linear positiva e forte", "Associação linear negativa e forte", "Associação positiva e fraca", "Nenhuma associação", "Associação não linear em forma de U"];
    return {
      d: "facil",
      e: "Num diagrama de dispersão, os pontos sobem da esquerda para a direita, formando uma faixa estreita em torno de uma reta. Que tipo de associação isso indica?",
      o,
      x: "Pontos que sobem da esquerda para a direita indicam que valores maiores de x acompanham valores maiores de y: associação positiva. Uma faixa estreita em torno de uma reta indica que os pontos se afastam pouco dessa tendência: associação linear forte, com correlação próxima de 1.\n\nAssociação negativa teria pontos descendo. Associação fraca formaria uma nuvem larga. Sem associação, os pontos não mostrariam tendência. E um U exigiria pontos descendo e depois subindo.",
      v: {
        i: () => {
          /* pontos numa faixa estreita em torno de uma reta crescente */
          const g = gerador(1), xs = Array.from({ length: 200 }, (_, i) => i / 10), ys = xs.map((x) => 5 + 2 * x + g(0, 1));
          const mx = media(xs), my = media(ys), r = soma(xs.map((x, i) => (x - mx) * (ys[i] - my))) / Math.sqrt(soma(xs.map((x) => (x - mx) ** 2)) * soma(ys.map((y) => (y - my) ** 2)));
          return unicoV([r > 0.9, r < -0.9, r > 0 && r < 0.4, Math.abs(r) < 0.1, false]);
        },
      },
    };
  })(),
  (() => {
    const o = ["32, 35, 35 e 38", "3, 2, 5, 5 e 8", "23, 53, 53 e 83", "3,2; 3,5; 3,5 e 3,8", "30, 32, 35 e 38"];
    return {
      d: "facil",
      e: "Num diagrama de ramo e folhas, o ramo indica as dezenas e a folha, as unidades. O ramo 3 tem as folhas 2, 5, 5 e 8. Quais valores essa linha representa?",
      o,
      x: "Cada folha, combinada com o ramo, forma um valor: ramo 3 com folha 2 é 32, com folha 5 é 35, e assim por diante. A linha representa 32, 35, 35 e 38, quatro observações, com o 35 repetido. O diagrama guarda os valores individuais e, ao mesmo tempo, mostra a forma da distribuição.\n\n3, 2, 5, 5 e 8 lê ramo e folhas como valores separados. 23, 53, 53 e 83 inverte dezenas e unidades. 3,2; 3,5… usaria o ramo como unidade, contrariando a legenda. E 30, 32, 35 e 38 inventa um 30 e perde um dos 35.",
      v: { i: () => { const valores = [2, 5, 5, 8].map((f) => 3 * 10 + f).join(","); return unicoV(o.map((t) => !t.includes(";") && lista(t).join(",") === valores)); } },
    };
  })(),
  (() => {
    const o = ["15", "28", "35", "55", "7,5"];
    return {
      d: "facil",
      e: "Num boxplot, a caixa vai de 20 a 35, e a linha interna fica em 28. Qual é a amplitude interquartil?",
      o,
      x: "A caixa vai do primeiro quartil, 20, ao terceiro, 35, e a amplitude interquartil é a sua largura: 35 − 20 = 15. Ela mede a dispersão dos 50% centrais dos dados e não é afetada por valores extremos. Nos boxplots usuais, ela também define as cercas: valores a mais de 1,5 · 15 = 22,5 da caixa são marcados como discrepantes.\n\n28 é a mediana, a linha interna da caixa. 35 é o terceiro quartil. 55 soma os quartis. E 7,5 é a metade da amplitude interquartil.",
      v: { i: () => qualNum(35 - 20, o) },
    };
  })(),
  (() => {
    const o = ["25%", "10%", "20%", "50%", "125%"];
    return {
      d: "facil",
      e: "Num gráfico de linhas, o preço de um produto passa de R$ 40 para R$ 50. Qual foi o aumento percentual?",
      o,
      x: "O aumento percentual compara a variação com o valor inicial: (50 − 40)/40 = 10/40 = 0,25, ou 25%. No gráfico, a subida da linha mostra a variação absoluta, de R$ 10; para a variação relativa, é preciso dividir pelo ponto de partida.\n\n10% lê a variação de R$ 10 como porcentagem. 20% divide pelo valor final, 10/50. 50% não sai da conta. E 125% é o novo preço como porcentagem do antigo, 50/40.",
      v: { i: () => qualNum((100 * (50 - 40)) / 40, o) },
    };
  })(),
  (() => {
    const o = ["375", "350", "400", "57,5", "7,5"];
    return {
      d: "facil",
      e: "Num pictograma, cada ícone representa 50 pessoas, e uma linha tem sete ícones inteiros e mais meio ícone. Quantas pessoas essa linha representa?",
      o,
      x: "Os sete ícones inteiros representam 7 · 50 = 350 pessoas, e o meio ícone, 25. O total é 350 + 25 = 375. Num pictograma, a legenda com o valor de cada ícone é indispensável para a leitura. Pictogramas funcionam bem para leituras aproximadas; valores exatos pedem uma tabela ou um gráfico de barras com escala.\n\n350 esquece o meio ícone. 400 arredonda o meio ícone para um inteiro. 57,5 soma 50 e 7,5. E 7,5 é o número de ícones, e não de pessoas.",
      v: { i: () => qualNum(7.5 * 50, o) },
    };
  })(),
  (() => {
    const o = ["40", "72", "20", "144", "36"];
    return {
      d: "facil",
      e: "Num gráfico de setores sobre 200 entrevistados, o setor da resposta sim mede 72°. Quantas pessoas responderam sim?",
      o,
      x: "O setor de 72° corresponde a 72/360 = 0,2 do círculo, isto é, 20% dos entrevistados. Com 200 pessoas, são 0,2 · 200 = 40 respostas sim. Converter ângulo em fração do total é o passo essencial na leitura de um gráfico de setores.\n\n72 lê o ângulo como contagem. 20 é a porcentagem, e não o número de pessoas. 144 multiplica 72 por 2. E 36 divide 72 por 2.",
      v: { i: () => qualNum((72 / 360) * 200, o, 1e-9) },
    };
  })(),
  (() => {
    const o = ["70", "60", "80", "65", "3,5"];
    return {
      d: "facil",
      e: "Num gráfico de barras, o eixo vertical vai de 0 a 100, com marcas de 20 em 20, e a barra da categoria B termina exatamente no meio entre as marcas 60 e 80. Qual é o valor de B?",
      o,
      x: "Entre as marcas 60 e 80 há 20 unidades, e o meio desse intervalo fica 10 unidades acima de 60: o valor de B é 70. A leitura de um gráfico depende de identificar a escala do eixo e interpolar entre as marcas. Quando a leitura exige precisão, os gráficos costumam trazer o valor escrito sobre a barra.\n\n60 e 80 são as marcas vizinhas, e não o valor. 65 fica a um quarto do intervalo, e não no meio. E 3,5 conta as marcas, e não o valor da escala.",
      v: { i: () => qualNum(60 + 0.5 * (80 - 60), o) },
    };
  })(),

  /* ------------------------------------------------------------ médias --- */
  (() => {
    const o = ["Parece o dobro, mas vendeu só cerca de 2% a mais", "Parece o dobro e vendeu o dobro", "Parece 2% maior e vendeu o dobro", "As duas barras parecem iguais", "Parece quatro vezes maior e vendeu 4% a mais"];
    return {
      d: "media",
      e: "Num gráfico de barras, as vendas de duas lojas são 102 e 104, mas o eixo vertical começa em 100. Quantas vezes a segunda barra parece maior que a primeira, e quanto a segunda loja vendeu a mais, de fato?",
      o,
      x: "Com o eixo começando em 100, as barras mostram só o trecho acima de 100: 2 unidades para a primeira loja e 4 para a segunda. Visualmente, a segunda parece o dobro. Mas as vendas reais, 104 contra 102, diferem só 104/102 ≈ 1,02, cerca de 2%. Truncar o eixo de um gráfico de barras exagera as diferenças.\n\nAs vendas não dobraram. A impressão visual é de dobro, e não de 2%. As barras não parecem iguais, justamente por causa do corte. E quatro vezes não corresponde nem à impressão nem aos dados.",
      v: {
        i: () => {
          const visual = (104 - 100) / (102 - 100), real = 104 / 102;
          return unicoV([visual === 2 && Math.abs(real - 1.02) < 0.001, visual === 2 && real === 2, false, visual === 1, visual === 4]);
        },
      },
    };
  })(),
  (() => {
    const o = ["Sugere o quádruplo, pela área", "Sugere exatamente o dobro", "Sugere metade", "Sugere o triplo", "Não distorce, porque só a altura conta"];
    return {
      d: "media",
      e: "Para mostrar que as vendas dobraram, um pictograma desenha o segundo ícone com o dobro da altura e o dobro da largura do primeiro. Que impressão visual isso causa?",
      o,
      x: "O olho compara áreas, e dobrar altura e largura multiplica a área por 2 · 2 = 4. O ícone maior sugere vendas quatro vezes maiores, embora elas tenham só dobrado. Para representar o dobro sem distorção, basta repetir o ícone ou ampliar só uma das dimensões.\n\nO dobro exigiria área dobrada, com cada dimensão multiplicada por √2 ≈ 1,41. Metade e triplo não correspondem à figura. E a percepção não se limita à altura: a figura inteira fica maior.",
      v: { i: () => { const area = (2 * 2) / (1 * 1), certa = Math.SQRT2 ** 2; return unicoV([area === 4 && Math.abs(certa - 2) < 1e-12, area === 2, area === 0.5, area === 3, false]); } },
    };
  })(),
  (() => {
    const o = ["1,6", "16", "3,2", "10", "0,16"];
    return {
      d: "media",
      e: "Num histograma em que a área de cada barra é proporcional à frequência, a classe de 5 a 15 tem 16 observações. Qual deve ser a altura da sua barra, em observações por unidade?",
      o,
      x: "Quando as classes podem ter larguras diferentes, a altura é a densidade: frequência dividida pela amplitude da classe. A classe de 5 a 15 tem amplitude 10, e a altura é 16/10 = 1,6. Assim, a área da barra, altura vezes largura, volta a ser 16. Com essa convenção, classes largas não parecem ter mais dados só por ocuparem mais espaço.\n\n16 é a frequência, que distorceria o histograma numa classe larga. 3,2 divide pela metade da amplitude, 5. 10 é a amplitude. E 0,16 divide por 100.",
      v: { i: () => { const h = 16 / (15 - 5); return Math.abs(h * (15 - 5) - 16) < 1e-12 ? qualNum(h, o, 1e-9) : -1; } },
    };
  })(),
  (() => {
    const o = ["60", "55", "50", "0", "40"];
    return {
      d: "media",
      e: "Num boxplot, o primeiro quartil é 20 e o terceiro é 35, e os valores além de 1,5 amplitude interquartil da caixa são marcados como discrepantes. Qual destes valores seria marcado?",
      o,
      x: "A amplitude interquartil é 35 − 20 = 15, e 1,5 · 15 = 22,5. As cercas ficam em 20 − 22,5 = −2,5 e 35 + 22,5 = 57,5. Entre os valores dados, só 60 passa de 57,5 e seria marcado como discrepante. Ser marcado não quer dizer erro: o valor apenas merece uma verificação, porque destoa do centro da distribuição.\n\n55 e 50 ficam abaixo da cerca superior. 0 fica acima da cerca inferior, −2,5. E 40 está logo acima da caixa, dentro das cercas.",
      v: { i: () => { const aiq = 35 - 20, lo = 20 - 1.5 * aiq, hi = 35 + 1.5 * aiq; return unicoV(o.map((t) => { const v = lerNum(t); return v < lo || v > hi; })); } },
    };
  })(),
  (() => {
    const o = ["Assimétrica à direita", "Assimétrica à esquerda", "Simétrica", "Bimodal com certeza", "Uniforme"];
    return {
      d: "media",
      e: "Num boxplot, a mediana fica bem perto do primeiro quartil, e o bigode superior é muito mais longo que o inferior. Como é a distribuição dos dados?",
      o,
      x: "Com a mediana perto do primeiro quartil, os 25% de dados entre Q1 e a mediana estão concentrados, enquanto os 25% entre a mediana e Q3 se espalham mais. O bigode superior longo mostra valores altos distantes. Tudo indica uma cauda à direita: assimetria positiva, com média acima da mediana.\n\nAssimetria à esquerda teria a cauda do lado de baixo. Numa distribuição simétrica, a mediana ficaria no meio da caixa e os bigodes seriam parecidos. O boxplot não mostra se há dois picos. E uma distribuição uniforme teria a mediana no centro.",
      v: {
        i: () => {
          /* dados de cauda direita geram exatamente esse desenho: mediana perto de Q1 e bigode de cima longo */
          const e = exponencial(2), xs = Array.from({ length: 2000 }, e), [mn, q1, md, q3, mx] = cincoNumeros(xs), assim = media(xs.map((x) => (x - media(xs)) ** 3));
          const desenho = md - q1 < q3 - md && mx - q3 > q1 - mn;
          return unicoV([desenho && assim > 0, desenho && assim < 0, !desenho, false, false]);
        },
      },
    };
  })(),
  (() => {
    const o = ["A média é maior que a mediana", "A média é menor que a mediana", "As duas são iguais", "A mediana fica na cauda", "Não dá para comparar pelo histograma"];
    return {
      d: "media",
      e: "Um histograma tem o pico à esquerda e uma cauda longa à direita. Como se comparam a média e a mediana desses dados?",
      o,
      x: "Os valores altos da cauda puxam a média para a direita, porque ela usa o valor de cada observação. A mediana depende só da posição central e é pouco afetada pelos extremos. Por isso, em distribuições com cauda à direita, como renda, a média fica acima da mediana.\n\nMédia menor que a mediana é o caso de cauda à esquerda. As duas só coincidem em distribuições simétricas. A mediana fica perto do pico, e não na cauda. E a forma do histograma já indica a relação entre as duas.",
      v: { i: () => { const e = exponencial(3), xs = Array.from({ length: 5000 }, e), m = media(xs), md = mediana(xs); return unicoV([m > md, m < md, Math.abs(m - md) < 1e-9, false, false]); } },
    };
  })(),
  (() => {
    const o = ["As porcentagens somam mais de 100%", "As porcentagens somam menos de 50%", "Há poucas categorias", "O gráfico de setores só serve para números", "As opções não têm ordem"];
    return {
      d: "media",
      e: "Numa pesquisa, cada pessoa podia marcar várias opções de lazer. Por que um gráfico de setores não serve para mostrar as porcentagens de cada opção?",
      o,
      x: "Com respostas múltiplas, uma mesma pessoa aparece em várias categorias, e as porcentagens, calculadas sobre o total de pessoas, somam mais de 100%. O gráfico de setores divide um todo em partes que não se sobrepõem, e não comporta essa soma. Um gráfico de barras, com uma barra por opção, resolve.\n\nA soma não fica abaixo de 50% por causa das respostas múltiplas. O número de categorias não é o problema. O gráfico de setores serve justamente para categorias. E a falta de ordem não impede o seu uso.",
      v: {
        i: () => {
          /* 300 pessoas marcando de 1 a 3 de 5 opções */
          const r = sorteador(4), marcas = new Array(5).fill(0);
          for (let p = 0; p < 300; p++) { const k = 1 + Math.floor(r() * 3), esc = new Set(); while (esc.size < k) esc.add(Math.floor(r() * 5)); esc.forEach((j) => marcas[j]++); }
          const somaPct = soma(marcas.map((m) => (100 * m) / 300));
          return unicoV([somaPct > 100, somaPct < 50, false, false, false]);
        },
      },
    };
  })(),
  (() => {
    const o = ["23", "20", "28", "≈ 22,6", "2"];
    return {
      d: "media",
      e: "Um diagrama de ramo e folhas, com o ramo nas dezenas, tem as linhas 1 | 2 5 7, 2 | 0 3 3 8 e 3 | 1 4. Qual é a mediana dos dados?",
      o,
      x: "Os valores, já em ordem, são 12, 15, 17, 20, 23, 23, 28, 31 e 34: nove observações. A mediana é a quinta, 23. O diagrama de ramo e folhas facilita isso, porque já apresenta os dados ordenados. Com número par de observações, a mediana seria a média das duas centrais.\n\n20 é a quarta observação. 28 é a sétima. 22,6 é a média, 203/9. E 2 é o ramo do meio, e não um valor dos dados.",
      v: { i: () => { const linhas = [[1, [2, 5, 7]], [2, [0, 3, 3, 8]], [3, [1, 4]]], xs = linhas.flatMap(([r, fs]) => fs.map((f) => 10 * r + f)); return qualNum(mediana(xs), o, 1e-9); } },
    };
  })(),
  (() => {
    const o = ["25%", "2%", "20%", "10%", "80%"];
    return {
      d: "media",
      e: "Num gráfico de linhas, a taxa de desemprego passa de 8% para 10%. Qual foi o aumento relativo da taxa, em porcentagem do valor inicial?",
      o,
      x: "A taxa subiu 10 − 8 = 2 pontos percentuais. Em termos relativos, o aumento é 2/8 = 0,25, ou 25% do valor inicial. Confundir pontos percentuais com variação percentual é um erro comum na leitura de gráficos de taxas.\n\n2% é a variação em pontos percentuais, escrita como se fosse relativa. 20% divide pelo valor final, 2/10. 10% é a taxa final. E 80% é a taxa inicial como fração da final, 8/10.",
      v: { i: () => qualNum((100 * (10 - 8)) / 8, o) },
    };
  })(),
  (() => {
    const o = ["Como uma reta crescente", "Como uma curva cada vez mais inclinada", "Como uma reta horizontal", "Como uma curva que se achata", "Como uma parábola"];
    return {
      d: "media",
      e: "Num gráfico com eixo vertical em escala logarítmica, as marcas 10, 100 e 1.000 ficam igualmente espaçadas. Como aparece uma série que cresce 10% ao mês?",
      o,
      x: "Na escala logarítmica, distâncias iguais correspondem a razões iguais. Uma série que cresce 10% ao mês é multiplicada por 1,1 a cada mês, e seu logaritmo aumenta sempre a mesma quantidade, log 1,1. No gráfico, os pontos sobem por degraus iguais e formam uma reta crescente.\n\nA curva cada vez mais inclinada é como o crescimento exponencial aparece na escala comum. Uma reta horizontal indicaria valores constantes. Uma curva que se achata indicaria taxas de crescimento caindo. E uma parábola não corresponde a crescimento percentual constante.",
      v: {
        i: () => {
          const v = Array.from({ length: 24 }, (_, t) => 100 * 1.1 ** t), passosLog = v.slice(1).map((x, t) => Math.log10(x) - Math.log10(v[t])), passos = v.slice(1).map((x, t) => x - v[t]);
          const reta = passosLog.every((p) => Math.abs(p - passosLog[0]) < 1e-12) && passosLog[0] > 0, curvaComum = passos.every((p, t) => t === 0 || p > passos[t - 1]);
          return unicoV([reta, !reta && curvaComum, false, false, false]);
        },
      },
    };
  })(),
  (() => {
    const o = ["A de A, com 5 por mil contra 2", "A de B, com 80 contra 50", "As duas ficam iguais", "A de B, com 5 por mil contra 2", "Não dá para comparar"];
    return {
      d: "media",
      e: "A cidade A teve 50 acidentes para 10.000 carros, e a cidade B, 80 acidentes para 40.000 carros. Num gráfico de barras de acidentes por mil carros, qual barra fica mais alta?",
      o,
      x: "Por mil carros: A tem 50/10 = 5 acidentes, e B, 80/40 = 2. A barra de A fica mais alta. Em números absolutos, B tem mais acidentes, mas também tem quatro vezes mais carros; a taxa corrige a diferença de tamanho. Gráficos que comparam grupos de tamanhos diferentes devem usar taxas ou porcentagens.\n\n80 contra 50 compara contagens, e não taxas. As taxas não são iguais. Atribuir 5 por mil a B troca as cidades. E a comparação é possível justamente por causa da taxa.",
      v: { i: () => { const a = (1000 * 50) / 10000, b = (1000 * 80) / 40000; return unicoV([a > b && a === 5 && b === 2, b > a, a === b, b === 5, false]); } },
    };
  })(),
  (() => {
    const o = ["50%", "80%", "30%", "110%", "20%"];
    return {
      d: "media",
      e: "Numa ogiva de tempos de atendimento, a curva de frequência acumulada passa por 30% em 20 minutos e por 80% em 40 minutos. Que porcentagem dos atendimentos durou entre 20 e 40 minutos?",
      o,
      x: "A ogiva mostra, para cada tempo, a porcentagem de atendimentos até ele. Até 40 minutos há 80%, e até 20 minutos, 30%; a diferença, 80% − 30% = 50%, corresponde aos atendimentos entre 20 e 40 minutos. A inclinação da ogiva num trecho mostra quão concentrados estão os dados ali.\n\n80% inclui também os atendimentos de menos de 20 minutos. 30% é só a parte abaixo de 20 minutos. 110% soma as duas leituras e passa de 100%. E 20% é a porcentagem acima de 40 minutos.",
      v: { i: () => { const tempos = [...Array(30).fill(10), ...Array(50).fill(30), ...Array(20).fill(50)]; return qualNum(tempos.filter((t) => t > 20 && t <= 40).length, o); } },
    };
  })(),
  (() => {
    const o = ["35%", "80%", "45%", "20%", "55%"];
    return {
      d: "media",
      e: "Numa barra empilhada de 100%, o segmento da resposta sim vai de 0% a 45%, o da resposta não vai de 45% a 80%, e o restante é da resposta não sabe. Qual é a porcentagem de respostas não?",
      o,
      x: "Num gráfico empilhado, cada segmento vale a diferença entre o seu fim e o seu início. O segmento não vai de 45% a 80%, e vale 80% − 45% = 35%. O não sabe vai de 80% a 100%, com 20%, e o sim, com 45%, completa o total.\n\n80% é onde o segmento termina, e não o seu tamanho. 45% é o sim, ou o início do segmento. 20% é o não sabe. E 55% é tudo o que não é sim.",
      v: { i: () => { const cortes = [0, 45, 80, 100], seg = cortes.slice(1).map((c, k) => c - cortes[k]); return soma(seg) === 100 ? qualNum(seg[1], o) : -1; } },
    };
  })(),
  (() => {
    const o = ["Parece mais inclinada; os dados não mudam", "Fica mais suave e menos inclinada", "Continua com a mesma aparência", "Passa a apontar no sentido oposto", "Os dados passam a crescer três vezes mais"];
    return {
      d: "media",
      e: "Num gráfico de linhas, o eixo vertical é esticado, de modo que cada unidade passa a ocupar o triplo da altura. O que acontece com a aparência da tendência?",
      o,
      x: "A inclinação que se vê no papel é a variação vertical desenhada dividida pela horizontal. Triplicando a escala vertical, cada variação é desenhada três vezes mais alta, e a linha parece três vezes mais inclinada. Os valores e a taxa real de crescimento continuam os mesmos: só a impressão muda.\n\nA linha fica mais íngreme, e não mais suave. A aparência muda, sim. O sentido da tendência se mantém. E os dados não mudam com a escala do desenho.",
      v: {
        i: () => {
          const dados = [10, 12, 15, 17], taxa = (d) => (d[3] - d[0]) / 3, desenho = (d, k) => d.map((v) => k * v), incl = (d, k) => (desenho(d, k)[3] - desenho(d, k)[0]) / 3;
          return unicoV([Math.abs(incl(dados, 3) / incl(dados, 1) - 3) < 1e-12 && taxa(dados) === (17 - 10) / 3, false, false, Math.sign(incl(dados, 3)) !== Math.sign(incl(dados, 1)), false]);
        },
      },
    };
  })(),
  (() => {
    const o = ["As medianas são iguais, e B é mais disperso", "A tem mediana maior", "B tem mediana maior", "Os dois têm a mesma dispersão", "A é mais disperso"];
    return {
      d: "media",
      e: "Num boxplot, o grupo A tem mínimo 10, quartis 20 e 30, mediana 25 e máximo 40; o grupo B tem mínimo 5, quartis 15 e 35, mediana 25 e máximo 45. O que se pode concluir?",
      o,
      x: "As duas linhas internas estão em 25: as medianas são iguais. A caixa de B vai de 15 a 35, com amplitude interquartil 20, contra 10 em A; e a amplitude total de B, 40, também supera a de A, 30. B tem o mesmo centro, mas dados mais espalhados.\n\nAs medianas não diferem. A dispersão de B é maior, e não igual ou menor. Comparar boxplots lado a lado permite ver centro e dispersão ao mesmo tempo.",
      v: {
        i: () => {
          const A = [10, 20, 25, 30, 40], B = [5, 15, 25, 35, 45], aiq = (c) => c[3] - c[1], amp = (c) => c[4] - c[0];
          const maisB = aiq(B) > aiq(A) && amp(B) > amp(A);
          return unicoV([A[2] === B[2] && maisB, A[2] > B[2], B[2] > A[2], aiq(A) === aiq(B), aiq(A) > aiq(B)]);
        },
      },
    };
  })(),
  (() => {
    const o = ["1,3", "1,5", "5", "26", "1"];
    return {
      d: "media",
      e: "Num gráfico de barras, o número de filhos 0, 1, 2 e 3 tem barras de altura 4, 8, 6 e 2 famílias. Qual é o número médio de filhos por família?",
      o,
      x: "Cada barra dá quantas famílias têm aquele número de filhos. O total de filhos é 0 · 4 + 1 · 8 + 2 · 6 + 3 · 2 = 26, em 4 + 8 + 6 + 2 = 20 famílias, e a média é 26/20 = 1,3. A média fica entre a moda, 1, e o valor 2, puxada pelas famílias com mais filhos.\n\n1,5 é a média simples dos valores 0, 1, 2 e 3, sem pesar pelas alturas das barras. 5 é a média das alturas, 20/4. 26 é o total de filhos, sem dividir. E 1 é a moda, o valor da barra mais alta.",
      v: { i: () => { const fam = [0, 1, 2, 3].flatMap((v, k) => Array([4, 8, 6, 2][k]).fill(v)); return qualNum(media(fam), o, 1e-9); } },
    };
  })(),
  (() => {
    const o = ["Tendência de alta com sazonalidade anual", "Queda nas vendas ao longo dos anos", "Vendas constantes, sem padrão", "Sazonalidade sem tendência", "Tendência de alta sem sazonalidade"];
    return {
      d: "media",
      e: "Um gráfico de linhas das vendas mensais de uma loja mostra picos em todo mês de dezembro e, ao longo dos anos, uma subida lenta do nível geral. O que o gráfico revela?",
      o,
      x: "A subida lenta do nível geral ao longo dos anos é a tendência, aqui de alta. Os picos que se repetem todo dezembro formam um padrão com período de um ano: a sazonalidade, ligada ao Natal. O gráfico mostra os dois componentes juntos. Separar esses componentes ajuda, por exemplo, a comparar dezembros entre si, e não dezembro com janeiro.\n\nO nível geral sobe, e não cai. Há padrão, e não vendas constantes. Sem a subida lenta, haveria só sazonalidade. E, sem os picos de dezembro, só tendência.",
      v: {
        i: () => {
          /* série com esses dois traços: médias anuais sobem, e dezembro fica bem acima dos outros meses */
          const g = gerador(5), serie = Array.from({ length: 60 }, (_, t) => 100 + 1.5 * t + (t % 12 === 11 ? 40 : 0) + g(0, 3));
          const anos = [0, 1, 2, 3, 4].map((a) => media(serie.slice(12 * a, 12 * a + 12))), sobe = anos.every((m, a) => a === 0 || m > anos[a - 1]);
          const dez = media(serie.filter((_, t) => t % 12 === 11)) - media(serie.filter((_, t) => t % 12 === 10)), sazonal = dez > 20;
          return unicoV([sobe && sazonal, !sobe, !sobe && !sazonal, sazonal && !sobe, sobe && !sazonal]);
        },
      },
    };
  })(),
  (() => {
    const o = ["3", "2", "4", "1", "5"];
    return {
      d: "media",
      e: "Num gráfico de Pareto dos defeitos de uma fábrica, as causas A, B, C e D respondem por 45%, 25%, 15% e 10% dos defeitos, e as demais, por 5%. Quantas causas, no mínimo, explicam pelo menos 80% dos defeitos?",
      o,
      x: "No gráfico de Pareto, as causas vêm em ordem decrescente, com uma linha de porcentagem acumulada. Acumulando: A dá 45%, A e B dão 70%, e A, B e C dão 85%. São precisas 3 causas para passar de 80%: atacar essas três resolve a maior parte do problema.\n\n2 causas somam só 70%. 4 causas também passam de 80%, mas não são o mínimo. 1 causa explica 45%. E 5 causas incluiriam o grupo das demais.",
      v: { i: () => { const p = [45, 25, 15, 10, 5]; let acc = 0; for (let k = 0; k < p.length; k++) { acc += p[k]; if (acc >= 80) return qualNum(k + 1, o); } return -1; } },
    };
  })(),
  (() => {
    const o = ["187,5", "200", "175", "250", "150"];
    return {
      d: "media",
      e: "Num gráfico de linhas, um índice cai de 200 para 150 e, depois, sobe 25%. A que valor ele chega?",
      o,
      x: "A queda foi de 50/200 = 25%. A subida de 25% é calculada sobre o novo valor, 150: 150 · 1,25 = 187,5. Uma queda e uma subida de mesma porcentagem não se anulam, porque as bases são diferentes: para voltar a 200, seria preciso subir 33,3%.\n\n200 supõe que as duas variações se compensam. 175 soma 25 unidades, em vez de 25%. 250 aplica os 25% sobre 200, o valor original. E 150 ignora a subida.",
      v: { i: () => qualNum(150 * 1.25, o, 1e-9) },
    };
  })(),
  (() => {
    const o = ["Caixa de 5 a 11, com mediana 8", "Caixa de 3 a 14, com mediana 8", "Caixa de 5 a 11, com mediana 8,1", "Caixa de 6 a 12, com mediana 8", "Caixa de 7 a 9, com mediana 8"];
    return {
      d: "media",
      e: "Para os dados 3, 5, 7, 8, 9, 11 e 14, usando como quartis as medianas das metades inferior e superior, sem a mediana, quais são os limites da caixa e a mediana de um boxplot?",
      o,
      x: "Com sete valores ordenados, a mediana é o quarto, 8. A metade inferior, 3, 5 e 7, tem mediana 5, o primeiro quartil; a superior, 9, 11 e 14, tem mediana 11, o terceiro. A caixa vai de 5 a 11, com a linha da mediana em 8, e os bigodes vão até 3 e 14.\n\n3 a 14 são o mínimo e o máximo, os extremos dos bigodes. 8,1 é a média dos dados, 57/7 ≈ 8,14, e não a mediana. 6 a 12 não corresponde a nenhum quartil. E 7 a 9 são só os vizinhos da mediana.",
      v: {
        i: () => {
          const [q1, md, q3] = quartis([3, 5, 7, 8, 9, 11, 14]);
          return unicoV(o.map((t) => { const [a, b, m] = t.match(/^Caixa de (\d+) a (\d+), com mediana ([\d,]+)$/).slice(1).map(lerNum); return a === q1 && b === q3 && m === md; }));
        },
      },
    };
  })(),
  (() => {
    const o = ["Barras agrupadas por marca e sexo", "Um único gráfico de setores com todas as respostas", "Um histograma das marcas", "Um diagrama de dispersão", "Uma ogiva das preferências"];
    return {
      d: "media",
      e: "Para comparar a preferência por três marcas entre homens e mulheres, qual gráfico permite a comparação mais direta?",
      o,
      x: "Em barras agrupadas, cada marca ganha um par de barras, uma para homens e outra para mulheres, lado a lado. A comparação entre os sexos, marca a marca, fica imediata; usar porcentagens dentro de cada sexo corrige diferenças no número de entrevistados.\n\nUm único gráfico de setores mistura os dois grupos e esconde a comparação. O histograma é para variáveis numéricas contínuas, e marca é categoria. O diagrama de dispersão exige duas variáveis numéricas. E a ogiva acumula frequências de dados ordenados.",
      /* escolha conceitual do tipo de gráfico: fica para a revisão independente */
    };
  })(),
  (() => {
    const o = ["Um diagrama de dispersão", "Um gráfico de setores", "Um gráfico de barras das notas", "Um pictograma", "Um gráfico de linhas das notas em ordem alfabética"];
    return {
      d: "media",
      e: "Para investigar se o tempo de estudo semanal se relaciona com a nota final, com os dados de cada aluno, qual gráfico é o mais adequado?",
      o,
      x: "Com duas variáveis numéricas medidas nos mesmos indivíduos, o diagrama de dispersão põe cada aluno como um ponto, com o tempo de estudo num eixo e a nota no outro. A forma da nuvem mostra se há tendência, se ela é linear e se existem pontos atípicos.\n\nO gráfico de setores mostra partes de um todo. Barras das notas mostram uma variável só. O pictograma serve para contagens simples. E ligar notas em ordem alfabética cria uma linha sem significado, porque a ordem dos nomes não é uma escala.",
      /* escolha conceitual do tipo de gráfico: fica para a revisão independente */
    };
  })(),
  (() => {
    const o = ["2 vezes", "4 vezes", "16 vezes", "√2 vezes", "O raio deve ser igual"];
    return {
      d: "media",
      e: "Num gráfico de bolhas, a área de cada bolha é proporcional ao valor representado. Se um valor é 4 vezes maior que outro, quantas vezes maior deve ser o raio da sua bolha?",
      o,
      x: "A área de um círculo é proporcional ao quadrado do raio. Para a área ficar 4 vezes maior, o raio deve ficar √4 = 2 vezes maior. Se o raio fosse multiplicado por 4, a área seria 16 vezes maior, e a bolha exageraria muito a diferença.\n\n4 vezes no raio dá área 16 vezes maior. 16 vezes no raio dá área 256 vezes maior. √2 vezes no raio só dobraria a área. E raios iguais apagariam a diferença.",
      v: {
        i: () => {
          const razaoArea = (k) => (Math.PI * k * k) / Math.PI, fatores = { "2 vezes": 2, "4 vezes": 4, "16 vezes": 16, "√2 vezes": Math.SQRT2, "O raio deve ser igual": 1 };
          return unicoV(o.map((t) => Math.abs(razaoArea(fatores[t]) - 4) < 1e-12));
        },
      },
    };
  })(),
  (() => {
    const o = ["Que a mediana é cerca de 34", "Que a média é 34", "Que 34% dos dados ficam abaixo de 50", "Que a moda é 34", "Que o terceiro quartil é 34"];
    return {
      d: "media",
      e: "Numa ogiva de uma variável contínua, a curva de porcentagem acumulada cruza o nível de 50% no valor 34. O que isso indica?",
      o,
      x: "A ogiva dá, para cada valor, a porcentagem de dados até ele. O ponto em que ela atinge 50% deixa metade dos dados abaixo e metade acima: é a mediana, cerca de 34. Do mesmo modo, os níveis de 25% e 75% dão os quartis.\n\nA média não se lê diretamente na ogiva. 34% abaixo de 50 inverte os eixos. A moda corresponde ao trecho mais inclinado da ogiva, e não ao nível de 50%. E o terceiro quartil está no nível de 75%.",
      v: {
        i: () => {
          /* dados assimétricos cuja ogiva empírica cruza 50% em 34: esse ponto é a mediana, e não a média nem o Q3 */
          const e = exponencial(6), xs = Array.from({ length: 4001 }, () => 34 * e() / Math.LN2), o2 = ordena(xs), cruza = o2[Math.ceil(0.5 * o2.length) - 1];
          const [, , q3] = quartis(xs);
          return unicoV([Math.abs(cruza - mediana(xs)) < 1e-9, Math.abs(media(xs) - cruza) < 0.5, false, false, Math.abs(q3 - cruza) < 0.5]);
        },
      },
    };
  })(),
  (() => {
    const o = ["45%", "50%", "100%", "40%", "60%"];
    return {
      d: "media",
      e: "Numa pesquisa, 60% dos 50 homens e 40% das 150 mulheres aprovaram uma proposta. Num gráfico com a porcentagem geral de aprovação, qual valor deve aparecer?",
      o,
      x: "A porcentagem geral é o total de aprovações sobre o total de pessoas: 0,6 · 50 = 30 homens e 0,4 · 150 = 60 mulheres, 90 aprovações em 200 pessoas, isto é, 45%. Como há três vezes mais mulheres, o resultado geral fica mais perto dos 40% delas.\n\n50% é a média simples de 60% e 40%, que ignora os tamanhos dos grupos. 100% soma as porcentagens. 40% considera só as mulheres. E 60%, só os homens.",
      v: { i: () => { const pessoas = [...Array(30).fill(1), ...Array(20).fill(0), ...Array(60).fill(1), ...Array(90).fill(0)]; return qualNum(100 * media(pessoas), o, 1e-9); } },
    };
  })(),
  (() => {
    const o = ["50 toneladas", "200 toneladas", "40 toneladas", "100 toneladas", "150 toneladas"];
    return {
      d: "media",
      e: "Num gráfico de linhas, a produção de uma fábrica sobe de 400 toneladas em 2018 para 600 toneladas em 2022. Qual foi o aumento médio por ano?",
      o,
      x: "O aumento total é 600 − 400 = 200 toneladas, distribuído por 4 intervalos anuais: de 2018 a 2019, de 2019 a 2020, de 2020 a 2021 e de 2021 a 2022. O aumento médio é 200/4 = 50 toneladas por ano, a inclinação média da linha. Contar intervalos, e não anos, é o cuidado principal nesse tipo de leitura.\n\n200 é o aumento total. 40 divide por 5, contando os anos, e não os intervalos. 100 divide por 2. E 150 não sai da conta.",
      v: { i: () => { const anos = [2018, 2019, 2020, 2021, 2022]; return qualNum((600 - 400) / (anos.length - 1), o); } },
    };
  })(),
  (() => {
    const o = ["4", "3", "8", "3,875", "6"];
    return {
      d: "media",
      e: "Num gráfico de pontos, os valores 2, 3, 3, 4, 4, 4, 5 e 6 aparecem como colunas de pontos empilhados. Qual é a moda?",
      o,
      x: "A moda é o valor mais frequente, e no gráfico de pontos corresponde à coluna mais alta. O 4 tem três pontos, mais que qualquer outro valor. O gráfico de pontos mostra cada observação e deixa a moda visível de imediato. A mediana, média das duas observações centrais, 4 e 4, também vale 4 aqui.\n\n3 tem só dois pontos. 8 é o número de observações. 3,875 é a média, 31/8. E 6 é o maior valor.",
      v: { i: () => { const xs = [2, 3, 3, 4, 4, 4, 5, 6], c = new Map(); xs.forEach((x) => c.set(x, (c.get(x) ?? 0) + 1)); const m = Math.max(...c.values()), modas = [...c].filter(([, k]) => k === m); return modas.length === 1 ? qualNum(modas[0][0], o) : -1; } },
    };
  })(),
  (() => {
    const o = ["O histograma esconde os dois picos dentro das classes", "Os dois picos ficam ainda mais visíveis", "O histograma passa a mostrar uma distribuição normal", "Aparecem classes vazias", "O histograma muda os dados"];
    return {
      d: "media",
      e: "Um conjunto de dados tem dois grupos bem separados, em torno de 20 e de 60. Num histograma com só duas classes, de 0 a 40 e de 40 a 80, o que acontece?",
      o,
      x: "Com classes tão largas, cada grupo cai inteiro numa classe, e o histograma mostra só duas barras, sem revelar onde os dados se concentram dentro delas. Com classes estreitas, de 10 em 10, por exemplo, apareceriam dois picos separados, em 20 e em 60, e um vale entre eles. A escolha das classes pode mudar muito a impressão que o histograma dá.\n\nOs picos ficam menos visíveis, e não mais. Duas barras não formam uma curva normal. Com duas classes, nenhuma fica vazia. E o histograma resume os dados sem alterá-los.",
      v: {
        i: () => {
          const g = gerador(7), xs = [...Array.from({ length: 500 }, () => g(20, 4)), ...Array.from({ length: 500 }, () => g(60, 4))].filter((x) => x >= 0 && x < 80);
          const duas = contagens(xs, [0, 40, 80]), finas = contagens(xs, [0, 10, 20, 30, 40, 50, 60, 70, 80]);
          const picos = finas.filter((c, k) => (k === 0 || c > finas[k - 1]) && (k === finas.length - 1 || c >= finas[k + 1]) && c > 50).length;
          return unicoV([duas.length === 2 && picos === 2, false, false, duas.some((c) => c === 0), false]);
        },
      },
    };
  })(),

  /* ---------------------------------------------------------- difíceis --- */
  (() => {
    const o = ["10", "2", "1,1", "100", "0,1"];
    return {
      d: "dificil",
      e: "Num gráfico, uma grandeza que aumentou 10% é representada por uma barra que ficou 100% mais alta, por causa do corte no eixo. Qual é o fator de distorção, a razão entre a variação mostrada e a variação real?",
      o,
      x: "O fator de distorção compara o tamanho do efeito no desenho com o tamanho do efeito nos dados: 100%/10% = 10. O gráfico exagera a variação dez vezes. Um gráfico fiel tem fator perto de 1; valores muito acima de 1 indicam exagero, e valores muito abaixo de 1, que o gráfico esconde uma mudança real.\n\n2 é a razão entre as alturas das barras, 200%/100%. 1,1 é a razão entre os valores, 110%/100%. 100 é a variação mostrada, em porcentagem. E 0,1 inverte a razão.",
      v: {
        i: () => {
          /* valores 100 e 110 desenhados com o eixo cortado em 90: as barras vão de 10 a 20 */
          const corte = 90, a = 100, b = 110, mostrada = (b - corte) / (a - corte) - 1, real = b / a - 1;
          return Math.abs(mostrada - 1) < 1e-12 ? qualNum(mostrada / real, o, 1e-9) : -1;
        },
      },
    };
  })(),
  (() => {
    const o = ["≈ 1,8 cm", "10 cm", "3 cm", "12 cm", "≈ 0,6 cm"];
    return {
      d: "dificil",
      e: "Num eixo em escala logarítmica, a distância entre as marcas 10 e 100 é de 3 cm. Qual é a distância entre as marcas 100 e 400?",
      o,
      x: "Na escala logarítmica, a distância é proporcional à diferença dos logaritmos. De 10 a 100, log 100 − log 10 = 1, que ocupa 3 cm. De 100 a 400, log 400 − log 100 = log 4 ≈ 0,602, e a distância é 3 · 0,602 ≈ 1,8 cm.\n\n10 cm usaria a escala comum, em que 90 unidades valem 3 cm. 3 cm trata o intervalo como mais uma década, de razão 10. 12 cm multiplica 3 pela razão 4. E 0,6 cm é log 4, sem converter para centímetros.",
      v: { i: () => { const cmPorDecada = 3 / (Math.log10(100) - Math.log10(10)); return qualNum(cmPorDecada * (Math.log10(400) - Math.log10(100)), o, 0.01); } },
    };
  })(),
  (() => {
    const o = ["0,2", "0,05", "0,0125", "0,8", "0,7"];
    return {
      d: "dificil",
      e: "Num histograma de densidade, em que a área de cada barra é a proporção de dados na classe, a barra da classe de 10 a 14 tem altura 0,05. Que proporção dos dados está nessa classe?",
      o,
      x: "A proporção é a área da barra: altura vezes largura. A classe de 10 a 14 tem largura 4, e a proporção é 0,05 · 4 = 0,2, isto é, 20% dos dados. Num histograma de densidade, a soma das áreas de todas as barras é 1.\n\n0,05 é a altura, que só coincide com a proporção se a largura for 1. 0,0125 divide pela largura em vez de multiplicar. 0,8 é a proporção fora da classe. E 0,7 usa 14 como largura.",
      v: {
        i: () => {
          /* 200 dados, 40 deles na classe de 10 a 14: a altura de densidade sai 0,05 e a área, 0,2 */
          const n = 200, naClasse = 40, altura = naClasse / n / (14 - 10);
          return Math.abs(altura - 0.05) < 1e-12 ? qualNum(altura * (14 - 10), o, 1e-9) : -1;
        },
      },
    };
  })(),
  (() => {
    const o = ["O tamanho de cada amostra", "A mediana", "Os quartis", "A amplitude", "A assimetria aproximada"];
    return {
      d: "dificil",
      e: "Dois grupos, um com 10 pessoas e outro com 1.000, têm exatamente o mesmo mínimo, os mesmos quartis, a mesma mediana e o mesmo máximo. O que os seus boxplots não conseguem mostrar?",
      o,
      x: "O boxplot desenha só cinco números: mínimo, primeiro quartil, mediana, terceiro quartil e máximo, além dos pontos discrepantes. Dois grupos com o mesmo resumo produzem desenhos idênticos, tenham 10 ou 1.000 observações. Por isso é comum escrever o tamanho da amostra ao lado de cada boxplot.\n\nMediana, quartis e amplitude estão justamente no desenho. E a posição da mediana na caixa e o tamanho dos bigodes dão uma ideia da assimetria.",
      v: {
        i: () => {
          /* grupo pequeno e grupo grande com o mesmo resumo de cinco números */
          const peq = [2, 4, 5, 6, 7, 8, 9, 10, 12, 20], [mn, q1, md, q3, mx] = cincoNumeros(peq);
          const grande = [...Array(100).fill(0).flatMap(() => peq)], mesmo = cincoNumeros(grande).every((v, k) => v === [mn, q1, md, q3, mx][k]);
          return mesmo && grande.length !== peq.length ? unicoV([true, false, false, false, false]) : -1;
        },
      },
    };
  })(),
  (() => {
    const o = ["Um histograma com classes estreitas", "Outro boxplot com os mesmos dados", "Um gráfico de setores das classes", "Um pictograma com os totais", "Um gráfico de colunas só com a mediana"];
    return {
      d: "dificil",
      e: "Um conjunto de dados tem dois picos, e outro é espalhado de modo uniforme, mas os dois têm o mesmo boxplot. Que gráfico revelaria a diferença entre eles?",
      o,
      x: "O boxplot resume os dados em cinco números e não mostra como os valores se distribuem dentro da caixa e dos bigodes: dois picos e uma distribuição plana podem ter os mesmos quartis. Um histograma com classes estreitas mostra a forma, e os dois picos aparecem como duas barras altas separadas por barras baixas.\n\nOutro boxplot dos mesmos dados repetiria o mesmo desenho. Um gráfico de setores das classes mostraria partes do todo, sem a forma ao longo da escala. Um pictograma dos totais esconde a distribuição. E a mediana sozinha é igual nos dois conjuntos.",
      v: {
        i: () => {
          const plano = [0, 12.5, 25, 37.5, 50, 62.5, 75, 87.5, 100], picos = [0, 17.5, 20, 22.5, 50, 77.5, 80, 82.5, 100];
          const mesmoBox = cincoNumeros(plano).every((v, k) => v === cincoNumeros(picos)[k]), lim = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100.001];
          const hp = contagens(picos, lim), hu = contagens(plano, lim), revela = Math.max(...hp) > Math.max(...hu);
          return mesmoBox && revela ? unicoV([true, false, false, false, mediana(plano) !== mediana(picos)]) : -1;
        },
      },
    };
  })(),
  (() => {
    const o = ["13, 16 e 18", "10, 16 e 13", "13, 16, 18 e 22", "39, 48 e 54", "16, 19 e 22"];
    return {
      d: "dificil",
      e: "As vendas de cinco meses consecutivos foram 10, 16, 13, 19 e 22. Quais são os valores da média móvel de 3 meses, usada para suavizar o gráfico?",
      o,
      x: "Cada média móvel de 3 meses é a média de três valores consecutivos: (10 + 16 + 13)/3 = 13, (16 + 13 + 19)/3 = 16 e (13 + 19 + 22)/3 = 18. A série suavizada, 13, 16 e 18, mostra a tendência de alta com menos oscilação que os dados originais.\n\n10, 16 e 13 são os três primeiros dados, sem média. 13, 16, 18 e 22 acrescenta o último dado, que não tem três valores para a média. 39, 48 e 54 são as somas, sem dividir por 3. E 16, 19 e 22 são os três últimos dados.",
      v: { i: () => { const v = [10, 16, 13, 19, 22], mm = v.slice(2).map((_, k) => (v[k] + v[k + 1] + v[k + 2]) / 3).join(","); return unicoV(o.map((t) => lista(t).join(",") === mm)); } },
    };
  })(),
  (() => {
    const o = ["150", "120", "40", "≈ 66,7", "140"];
    return {
      d: "dificil",
      e: "Os preços de um produto em quatro anos foram 80, 90, 100 e 120 reais. Num gráfico de números-índice com base 100 no primeiro ano, qual é o índice do último ano?",
      o,
      x: "O número-índice é o valor do ano dividido pelo valor do ano-base, vezes 100: 120/80 · 100 = 150. O índice 150 indica que o preço ficou 50% acima do ano-base. Gráficos de índices permitem comparar séries de escalas diferentes a partir de um ponto comum.\n\n120 é o preço, e não o índice. 40 é a variação absoluta, em reais. 66,7 inverte a divisão, 80/120 · 100. E 140 soma 40 a 100, como se cada real valesse um ponto.",
      v: { i: () => { const p = [80, 90, 100, 120], idx = p.map((x) => (100 * x) / p[0]); return idx[0] === 100 ? qualNum(idx[3], o, 1e-9) : -1; } },
    };
  })(),
  (() => {
    const o = ["Crescem na mesma taxa percentual", "Crescem na mesma quantidade absoluta", "A de cima cresce ao dobro da taxa", "Nenhuma das duas cresce", "As taxas dependem do nível de cada uma"];
    return {
      d: "dificil",
      e: "Num gráfico com eixo vertical logarítmico, as linhas de duas séries são paralelas, embora uma esteja sempre bem acima da outra. O que isso indica sobre o crescimento das duas?",
      o,
      x: "Na escala logarítmica, a inclinação da linha corresponde à taxa de crescimento percentual. Linhas paralelas têm a mesma inclinação, e as séries crescem na mesma taxa, mesmo com níveis diferentes; a distância constante entre elas indica que uma é sempre um múltiplo fixo da outra.\n\nNa mesma quantidade absoluta, a série menor cresceria em porcentagem mais depressa, e as linhas convergiriam no gráfico logarítmico. Taxas diferentes dariam inclinações diferentes. Linhas subindo indicam crescimento. E a taxa, aqui, não depende do nível.",
      v: {
        i: () => {
          const t = [...Array(10).keys()], dist = (a, b) => t.map((k) => Math.log10(a[k]) - Math.log10(b[k])), constante = (d) => d.every((v) => Math.abs(v - d[0]) < 1e-12);
          const mesmaTaxa = constante(dist(t.map((k) => 500 * 1.07 ** k), t.map((k) => 20 * 1.07 ** k))), mesmaQtd = constante(dist(t.map((k) => 500 + 30 * k), t.map((k) => 20 + 30 * k)));
          return unicoV([mesmaTaxa, mesmaQtd, false, false, false]);
        },
      },
    };
  })(),
  (() => {
    const o = ["O número de observações", "1", "A amplitude total dos dados", "A maior frequência", "A soma das alturas"];
    return {
      d: "dificil",
      e: "Num histograma de frequência, em que a altura de cada barra é a frequência da classe dividida pela sua amplitude, quanto vale a área total das barras?",
      o,
      x: "A área de cada barra é altura vezes largura: (frequência/amplitude) · amplitude = frequência. Somando todas as barras, a área total é a soma das frequências, isto é, o número de observações. Se as alturas fossem divididas também por n, a área total seria 1, e o histograma seria de densidade.\n\n1 é a área do histograma de densidade. A amplitude total é a largura do desenho, e não a área. A maior frequência é a área de uma só barra, no máximo. E a soma das alturas não leva em conta as larguras.",
      v: {
        i: () => {
          const lim = [0, 2, 6, 10, 20], f = [7, 12, 9, 4], larg = lim.slice(1).map((b, k) => b - lim[k]), alt = f.map((x, k) => x / larg[k]), area = soma(alt.map((h, k) => h * larg[k])), n = soma(f);
          return unicoV([Math.abs(area - n) < 1e-12, Math.abs(area - 1) < 1e-12, Math.abs(area - 20) < 1e-12, Math.abs(area - Math.max(...f)) < 1e-12, Math.abs(area - soma(alt)) < 1e-12]);
        },
      },
    };
  })(),
  (() => {
    const o = ["40", "37,5", "60", "42", "45"];
    return {
      d: "dificil",
      e: "Numa ogiva formada por segmentos de reta, a curva passa por 40% em 30 e por 70% em 45. Estimando por interpolação linear, qual é o percentil 60?",
      o,
      x: "Entre 30 e 45, a porcentagem acumulada sobe de 40% para 70%, isto é, 30 pontos em 15 unidades, 2 pontos por unidade. Para chegar a 60%, faltam 20 pontos acima dos 40%, o que exige 20/2 = 10 unidades: o percentil 60 é 30 + 10 = 40.\n\n37,5 é o ponto médio entre 30 e 45, que corresponderia a 55%. 60 confunde a porcentagem com o valor. 42 não sai da interpolação. E 45 é o valor que corresponde a 70%.",
      v: {
        i: () => {
          /* a ogiva no trecho como função linear; o percentil 60 é o ponto em que ela vale 60 */
          const F = (x) => 40 + ((70 - 40) * (x - 30)) / (45 - 30); let a = 30, b = 45;
          for (let k = 0; k < 100; k++) { const m = (a + b) / 2; if (F(m) < 60) a = m; else b = m; }
          return qualNum((a + b) / 2, o, 1e-9);
        },
      },
    };
  })(),
];
