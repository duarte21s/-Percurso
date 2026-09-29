/* Rascunho — Exatas nível militar / Dinâmica com corpos vinculados.

   Em todas as questões, g = 10 m/s², fios e polias ideais. A explicação
   resolve pelo atalho (o sistema como um todo, a fórmula da máquina de
   Atwood etc.); a conferência escreve a 2ª lei de Newton para cada corpo
   separadamente, com trações, normais e atritos como incógnitas, e resolve
   o sistema linear por eliminação. Tempos e velocidades saem de simulação
   do movimento; limiares (atrito estático, equilíbrio) saem de busca. */

import { unicoV, intervalo, lerExpr, resolve, simula, perto } from "./_exatas.mjs";

export const materia = "exatas-militar";
export const tema = "Dinâmica com corpos vinculados";
export const arquivo = "exatas-militar__dinamica-com-corpos-vinculados";

const g = 10;
const S30 = 0.5, C30 = Math.sqrt(3) / 2, S37 = 0.6, C37 = 0.8, S60 = Math.sqrt(3) / 2;
/* valor da alternativa, sem a unidade */
const valor = (t) => lerExpr(String(t).replace(/\s*(m\/s²|m\/s|rad\/s|N|kg|s|m|°)\s*$/, "").replace(/\.(?=\d{3})/g, ""));
const qual = (x, alt, tol = 1e-9) => unicoV(alt.map((t) => Math.abs(valor(t) - x) <= tol * Math.max(1, Math.abs(x))));

export const questoes = [
  /* ------------------------------------------------------------ fáceis --- */
  (() => {
    const o = ["4 m/s²", "10 m/s²", "6,67 m/s²", "100 m/s²", "0,25 m/s²"];
    return {
      d: "facil",
      e: "Dois blocos, A de 2 kg e B de 3 kg, estão encostados sobre uma superfície horizontal sem atrito. Uma força horizontal de 20 N empurra A, que empurra B. Qual é a aceleração do conjunto?",
      o,
      x: "Os dois blocos se movem juntos, com a mesma aceleração. Para o conjunto, a única força horizontal externa é a de 20 N, e a massa total é 5 kg: a = F/(mA + mB) = 20/5 = 4 m/s². As forças de contato entre A e B são internas ao conjunto e se cancelam aos pares.\n\n10 m/s² divide a força só pela massa de A. 6,67 m/s² divide só pela massa de B. 100 m/s² multiplica a força pela massa em vez de dividir. E 0,25 m/s² inverte a divisão, massa sobre força.",
      /* A: 20 − C = 2a; B: C = 3a (incógnitas a e C) */
      v: { i: () => qual(resolve([[2, 1], [3, -1]], [20, 0])[0], o) },
    };
  })(),
  (() => {
    const o = ["12 N", "20 N", "8 N", "4 N", "0 N"];
    return {
      d: "facil",
      e: "Dois blocos, A de 2 kg e B de 3 kg, encostados sobre uma superfície horizontal sem atrito, são empurrados por uma força horizontal de 20 N aplicada em A. Qual é a intensidade da força que A exerce sobre B?",
      o,
      x: "O conjunto acelera a 20/5 = 4 m/s². A única força horizontal sobre B é a que A exerce, e ela precisa dar a B essa aceleração: C = mB · a = 3 · 4 = 12 N. Conferindo em A: atuam os 20 N e a reação de B, 12 N, em sentido oposto; a resultante, 8 N, dá 8/2 = 4 m/s².\n\n20 N supõe que a força se transmita inteira, o que só aconteceria se A não tivesse massa. 8 N é a força resultante sobre A. 4 N é o valor numérico da aceleração, e não uma força. E 0 N supõe que, sem atrito, um bloco não precise empurrar o outro — mas B só acelera porque A o empurra.",
      v: { i: () => qual(resolve([[2, 1], [3, -1]], [20, 0])[1], o) },
    };
  })(),
  (() => {
    const o = ["12 N", "30 N", "18 N", "3 N", "15 N"];
    return {
      d: "facil",
      e: "Os blocos A, de 4 kg, e B, de 6 kg, estão ligados por um fio ideal sobre uma mesa sem atrito. Uma força horizontal de 30 N puxa B, e B arrasta A pelo fio. Qual é a tração no fio?",
      o,
      x: "O conjunto tem 10 kg e acelera a 30/10 = 3 m/s². O fio é a única força horizontal sobre A e precisa dar a ele essa aceleração: T = mA · a = 4 · 3 = 12 N. Conferindo em B: 30 − 12 = 18 N = 6 · 3, a mesma aceleração.\n\n30 N supõe que o fio transmita a força inteira, como se B não tivesse massa. 18 N é a força resultante sobre B, e não a tração. 3 N é o valor numérico da aceleração. E 15 N divide a força igualmente entre os blocos, sem considerar as massas.",
      /* A: T = 4a; B: 30 − T = 6a (incógnitas a e T) */
      v: { i: () => qual(resolve([[4, -1], [6, 1]], [0, 30])[1], o) },
    };
  })(),
  (() => {
    const o = ["2 m/s²", "10 m/s²", "5 m/s²", "0,2 m/s²", "3,33 m/s²"];
    return {
      d: "facil",
      e: "Numa máquina de Atwood ideal, dois corpos de 3 kg e 2 kg estão pendurados nas pontas de um fio que passa por uma polia fixa. Qual é a aceleração dos corpos?",
      o,
      x: "O corpo mais pesado desce e o mais leve sobe, com acelerações de mesmo módulo. A força que move o sistema é a diferença dos pesos, 30 − 20 = 10 N, e a massa acelerada é a soma das massas, 5 kg: a = 10/5 = 2 m/s².\n\n10 m/s² é a aceleração da gravidade, que valeria só em queda livre. 5 m/s² divide a diferença dos pesos pela massa do corpo de 2 kg, e 3,33 m/s², pela do corpo de 3 kg. E 0,2 m/s² divide a diferença das massas pela soma, esquecendo de multiplicar por g.",
      /* 3 kg desce: 30 − T = 3a; 2 kg sobe: T − 20 = 2a */
      v: { i: () => qual(resolve([[3, 1], [2, -1]], [30, -20])[0], o) },
    };
  })(),
  (() => {
    const o = ["4 m/s²", "10 m/s²", "6,67 m/s²", "2 m/s²", "6 m/s²"];
    return {
      d: "facil",
      e: "Um bloco de 3 kg está sobre uma mesa horizontal sem atrito, ligado por um fio que passa por uma polia na borda da mesa a um corpo de 2 kg pendurado. Qual é a aceleração do sistema?",
      o,
      x: "Só o peso do corpo pendurado, 2 · 10 = 20 N, move o sistema: o peso do bloco sobre a mesa é equilibrado pela normal. A massa acelerada é a dos dois corpos, 5 kg: a = 20/5 = 4 m/s².\n\n10 m/s² supõe o corpo pendurado em queda livre, sem o bloco da mesa. 6,67 m/s² divide 20 N só pela massa do bloco da mesa. 2 m/s² trata o sistema como uma máquina de Atwood, como se o bloco de 3 kg também estivesse pendurado. E 6 m/s² usa o peso do bloco da mesa, 30 N, como força motora.",
      /* mesa: T = 3a; pendurado: 20 − T = 2a */
      v: { i: () => qual(resolve([[3, -1], [2, 1]], [0, 20])[0], o) },
    };
  })(),
  (() => {
    const o = ["720 N", "600 N", "480 N", "120 N", "1.200 N"];
    return {
      d: "facil",
      e: "Uma pessoa de 60 kg está sobre uma balança dentro de um elevador que sobe acelerando a 2 m/s². Qual é a intensidade da força normal que a balança exerce sobre a pessoa?",
      o,
      x: "Sobre a pessoa atuam o peso, 600 N para baixo, e a normal N, para cima. Como ela acelera para cima junto com o elevador, a resultante aponta para cima: N − 600 = 60 · 2 = 120, e N = 720 N. É o que a balança marca: a pessoa se sente mais pesada.\n\n600 N é o peso, que a balança marcaria em repouso ou com velocidade constante. 480 N é o que ela marcaria com o elevador acelerando para baixo a 2 m/s². 120 N é só a força resultante. E 1.200 N multiplica g por a em vez de somar.",
      v: { i: () => qual(resolve([[1]], [600 + 60 * 2])[0], o) },
    };
  })(),
  (() => {
    const o = ["2 m/s²", "12 m/s²", "6 m/s²", "4 m/s²", "72 m/s²"];
    return {
      d: "facil",
      e: "Três blocos de 1 kg, 2 kg e 3 kg estão enfileirados e encostados sobre um piso horizontal sem atrito. Uma força horizontal de 12 N empurra o bloco de 1 kg. Qual é a aceleração do conjunto?",
      o,
      x: "Os três blocos se movem juntos. A única força horizontal externa sobre o conjunto é a de 12 N, e a massa total é 1 + 2 + 3 = 6 kg: a = 12/6 = 2 m/s². As forças de contato entre os blocos são internas e se cancelam aos pares.\n\n12 m/s² divide a força só pela massa do bloco empurrado. 6 m/s² divide pela massa do bloco do meio. 4 m/s² divide só pela massa do último bloco. E 72 m/s² multiplica a força pela massa total.",
      /* incógnitas a, C12, C23: 12 − C12 = a; C12 − C23 = 2a; C23 = 3a */
      v: { i: () => qual(resolve([[1, 1, 0], [2, -1, 1], [3, 0, -1]], [12, 0, 0])[0], o) },
    };
  })(),
  (() => {
    const o = ["120 N", "100 N", "80 N", "20 N", "102 N"];
    return {
      d: "facil",
      e: "Um cabo ergue verticalmente uma carga de 10 kg com aceleração de 2 m/s² para cima. Qual é a tração no cabo?",
      o,
      x: "Sobre a carga atuam a tração T, para cima, e o peso, 100 N, para baixo. Com aceleração para cima: T − 100 = 10 · 2 = 20, e T = 120 N. O cabo precisa sustentar o peso e ainda fornecer a força que acelera a carga.\n\n100 N é o peso, que seria a tração em repouso ou com velocidade constante. 80 N é a tração com a carga acelerando para baixo. 20 N é só a força resultante. E 102 N soma a aceleração ao peso, misturando grandezas diferentes.",
      v: { i: () => qual(resolve([[1]], [100 + 10 * 2])[0], o) },
    };
  })(),
  (() => {
    const o = ["4 m/s²", "6 m/s²", "2 m/s²", "5,8 m/s²", "8 m/s²"];
    return {
      d: "facil",
      e: "Um bloco de 5 kg é puxado sobre um piso horizontal por uma força horizontal de 30 N. O coeficiente de atrito cinético entre o bloco e o piso é 0,2. Qual é a aceleração do bloco?",
      o,
      x: "A normal é igual ao peso, 50 N, porque o piso e a força são horizontais. O atrito cinético vale μN = 0,2 · 50 = 10 N, contra o movimento. A resultante é 30 − 10 = 20 N, e a = 20/5 = 4 m/s².\n\n6 m/s² ignora o atrito (30/5). 2 m/s² desconta o atrito duas vezes (30 − 20). 5,8 m/s² calcula o atrito como μ · m = 1 N, esquecendo o g. E 8 m/s² soma o atrito à força em vez de subtrair.",
      /* incógnitas a, N, f: 30 − f = 5a; N = 50; f = 0,2N */
      v: { i: () => qual(resolve([[5, 0, 1], [0, 1, 0], [0, -0.2, 1]], [30, 50, 0])[0], o) },
    };
  })(),
  (() => {
    const o = ["5 m/s²", "10 m/s²", "8,66 m/s²", "2,5 m/s²", "20 m/s²"];
    return {
      d: "facil",
      e: "Um bloco desliza, a partir do repouso, por um plano inclinado de 30° sem atrito. Qual é a aceleração do bloco ao longo do plano?",
      o,
      x: "O peso se decompõe em uma componente perpendicular ao plano, equilibrada pela normal, e uma paralela ao plano, mg · sen 30°, que acelera o bloco. Então a = g · sen 30° = 10 · 0,5 = 5 m/s², qualquer que seja a massa.\n\n10 m/s² é a queda livre, como se o plano fosse vertical. 8,66 m/s² usa o cosseno de 30° no lugar do seno — seria a componente que a normal equilibra. 2,5 m/s² usa sen 30° duas vezes. E 20 m/s² divide g por sen 30° em vez de multiplicar.",
      /* bloco de 2 kg (a massa se cancela): ao longo, 20 · sen30 = 2a; perpendicular, N = 20 · cos30 */
      v: { i: () => qual(resolve([[2, 0], [0, 1]], [20 * S30, 20 * C30])[0], o) },
    };
  })(),
  (() => {
    const o = ["40 N", "80 N", "20 N", "0 N", "4 N"];
    return {
      d: "facil",
      e: "Dois corpos de 4 kg cada estão pendurados nas pontas de um fio que passa por uma polia fixa ideal e se movem com velocidade constante. Qual é a tração no fio?",
      o,
      x: "Com velocidade constante, a resultante sobre cada corpo é nula (1ª lei de Newton). Em cada um, a tração, para cima, equilibra o peso, 40 N, para baixo: T = 40 N. O movimento não exige força resultante; só a variação da velocidade exige.\n\n80 N soma os dois pesos, como se cada ponta do fio sustentasse os dois corpos. 20 N divide o peso ao meio entre as pontas. 0 N supõe que os pesos iguais se anulem dentro do fio. E 4 N confunde a massa com o peso.",
      v: { i: () => qual(resolve([[1]], [40 - 4 * 0])[0], o) },
    };
  })(),
  (() => {
    const o = ["5 m/s²", "10 m/s²", "8,66 m/s²", "2,5 m/s²", "13,66 m/s²"];
    return {
      d: "facil",
      e: "Um bloco de 2 kg, sobre um piso horizontal sem atrito, é puxado por uma força de 20 N inclinada 60° acima da horizontal, sem se descolar do piso. Qual é a aceleração do bloco?",
      o,
      x: "Só a componente horizontal da força acelera o bloco: F · cos 60° = 20 · 0,5 = 10 N. A aceleração é 10/2 = 5 m/s². A componente vertical, 20 · sen 60° ≅ 17,3 N, é menor que o peso (20 N) e apenas diminui a normal.\n\n10 m/s² usa a força inteira, 20/2. 8,66 m/s² usa o seno no lugar do cosseno. 2,5 m/s² usa o cosseno duas vezes. E 13,66 m/s² soma as componentes horizontal e vertical e divide pela massa, (10 + 17,32)/2.",
      /* incógnitas a e N: horizontal, 20 · cos60 = 2a; vertical, N + 20 · sen60 = 20 */
      v: { i: () => { const [a, N] = resolve([[2, 0], [0, 1]], [20 * 0.5, 20 - 20 * S60]); if (N <= 0) throw new Error("descola"); return qual(a, o); } },
    };
  })(),

  /* ------------------------------------------------------------- médias --- */
  (() => {
    const o = ["16 N", "25 N", "10 N", "40 N", "30 N"];
    return {
      d: "media",
      e: "Na máquina de Atwood com corpos de 4 kg e 1 kg pendurados numa polia fixa ideal, qual é a tração no fio enquanto os corpos se movem?",
      o,
      x: "A aceleração é (40 − 10)/5 = 6 m/s². No corpo de 1 kg, que sobe: T − 10 = 1 · 6, e T = 16 N. Conferindo no de 4 kg, que desce: 40 − T = 4 · 6, e T = 16 N. A tração fica entre os dois pesos, porque um corpo sobe acelerando e o outro desce acelerando.\n\n25 N é a média dos pesos, que não leva em conta a aceleração de cada corpo. 10 N e 40 N são os pesos, que seriam a tração se cada corpo estivesse parado, sustentado sozinho. E 30 N é a diferença dos pesos, a força que acelera o sistema.",
      v: { i: () => qual(resolve([[4, 1], [1, -1]], [40, -10])[1], o) },
    };
  })(),
  (() => {
    const o = ["2,8 m/s²", "4 m/s²", "2 m/s²", "3,88 m/s²", "7 m/s²"];
    return {
      d: "media",
      e: "Sobre uma mesa áspera, com coeficiente de atrito cinético 0,2, um bloco de 3 kg é arrastado por um fio que desce pela borda, passando por uma polia, e sustenta um corpo de 2 kg. Qual é a aceleração do sistema?",
      o,
      x: "O peso do corpo pendurado, 20 N, puxa o sistema; o atrito no bloco da mesa, μN = 0,2 · 30 = 6 N, se opõe. A resultante é 20 − 6 = 14 N, e a massa acelerada é 5 kg: a = 14/5 = 2,8 m/s².\n\n4 m/s² ignora o atrito. 2 m/s² calcula o atrito com a massa total, 0,2 · 50 = 10 N, como se o corpo pendurado também raspasse na mesa. 3,88 m/s² calcula o atrito como 0,2 · 3 = 0,6 N, esquecendo o g. E 7 m/s² divide a resultante só pela massa do corpo pendurado.",
      /* mesa: T − 6 = 3a; pendurado: 20 − T = 2a */
      v: { i: () => qual(resolve([[3, -1], [2, 1]], [-6, 20])[0], o) },
    };
  })(),
  (() => {
    const o = ["15 N", "20 N", "5 N", "60 N", "2,5 N"];
    return {
      d: "media",
      e: "Um carrinho de 6 kg, sobre um trilho horizontal sem atrito, é puxado por um fio que passa por uma polia e sustenta, na outra ponta, um corpo de 2 kg. Qual é a tração no fio enquanto o sistema se move?",
      o,
      x: "A aceleração é 20/8 = 2,5 m/s². O fio é a única força horizontal sobre o carrinho: T = 6 · 2,5 = 15 N. Conferindo no corpo pendurado: 20 − 15 = 5 N = 2 · 2,5. A tração é menor que o peso do corpo pendurado, porque ele desce acelerando.\n\n20 N é o peso do corpo pendurado, que seria a tração só com o sistema parado. 5 N é a resultante sobre o corpo pendurado. 60 N é o peso do carrinho, que a normal equilibra. E 2,5 N é o valor numérico da aceleração.",
      v: { i: () => qual(resolve([[6, -1], [2, 1]], [0, 20])[1], o) },
    };
  })(),
  (() => {
    const o = ["2,5 m/s²", "5 m/s²", "0 m/s²", "7,5 m/s²", "0,67 m/s²"];
    return {
      d: "media",
      e: "Um bloco de 4 kg está num plano inclinado de 30° sem atrito, ligado por um fio que passa por uma polia no alto do plano a outro corpo de 4 kg, pendurado. Qual é a aceleração do sistema?",
      o,
      x: "O corpo pendurado puxa com o seu peso, 40 N; a componente do peso do bloco ao longo do plano, 40 · sen 30° = 20 N, puxa no sentido contrário. A resultante é 40 − 20 = 20 N, e a massa acelerada é 8 kg: a = 20/8 = 2,5 m/s², com o corpo pendurado descendo.\n\n5 m/s² divide a resultante só pela massa de um dos corpos. 0 m/s² supõe que massas iguais se equilibrem, o que só aconteceria com os dois corpos pendurados. 7,5 m/s² soma as forças em vez de subtrair. E 0,67 m/s² usa o cosseno de 30° no lugar do seno, (40 − 34,6)/8.",
      /* bloco sobe o plano: T − 40 · sen30 = 4a; pendurado desce: 40 − T = 4a */
      v: { i: () => qual(resolve([[4, -1], [4, 1]], [-40 * S30, 40])[0], o) },
    };
  })(),
  (() => {
    const o = ["35 N", "10 N", "25 N", "60 N", "15 N"];
    return {
      d: "media",
      e: "Uma força paralela a um plano inclinado de 30°, sem atrito, empurra para cima um bloco de 5 kg, que sobe com aceleração de 2 m/s². Qual é a intensidade dessa força?",
      o,
      x: "Ao longo do plano atuam a força F, para cima, e a componente do peso, 50 · sen 30° = 25 N, para baixo. Com aceleração de 2 m/s² para cima: F − 25 = 5 · 2 = 10, e F = 35 N.\n\n10 N é só a resultante, esquecendo a componente do peso. 25 N é a componente do peso, que apenas manteria o bloco em equilíbrio. 60 N soma à resultante o peso inteiro, 50 + 10, sem decompor o peso. E 15 N subtrai a resultante da componente do peso em vez de somar.",
      v: { i: () => qual(resolve([[1]], [50 * S30 + 5 * 2])[0], o) },
    };
  })(),
  (() => {
    const o = ["30 N", "10 N", "60 N", "20 N", "50 N"];
    return {
      d: "media",
      e: "Três blocos, A (2 kg), B (4 kg) e C (6 kg), estão ligados por fios, nessa ordem, sobre uma mesa sem atrito. Uma força horizontal de 60 N puxa o bloco C, que arrasta os outros. Qual é a tração no fio entre B e C?",
      o,
      x: "O conjunto tem 12 kg e acelera a 60/12 = 5 m/s². O fio entre B e C puxa os blocos A e B juntos, 6 kg, então T = 6 · 5 = 30 N. O fio entre A e B puxa só A: 2 · 5 = 10 N.\n\n10 N é a tração no fio entre A e B. 60 N supõe que a força se transmita inteira ao longo dos fios. 20 N usa só a massa de B, 4 · 5, esquecendo que esse fio também arrasta A. E 50 N usa as massas de B e C, os blocos que esse fio liga, em vez das massas que ele arrasta.",
      /* incógnitas a, T1 (A–B), T2 (B–C): T1 = 2a; T2 − T1 = 4a; 60 − T2 = 6a */
      v: { i: () => qual(resolve([[2, -1, 0], [4, 1, -1], [6, 0, 1]], [0, 0, 60])[2], o) },
    };
  })(),
  (() => {
    const o = ["40 N", "50 N", "10 N", "0 N", "90 N"];
    return {
      d: "media",
      e: "Um bloco de 10 kg está em repouso sobre um piso horizontal, com coeficiente de atrito estático 0,5. Uma pessoa o empurra horizontalmente com 40 N, e ele continua parado. Qual é a intensidade da força de atrito sobre o bloco?",
      o,
      x: "O atrito estático se ajusta à força aplicada, até o limite μe · N = 0,5 · 100 = 50 N. Como 40 N não chega a esse limite, o bloco fica parado, e o atrito equilibra a força: 40 N, no sentido oposto ao empurrão. O valor 50 N é o máximo que o atrito estático pode alcançar, e não o seu valor em qualquer situação.\n\n50 N supõe que o atrito estático sempre valha μe · N. 10 N é a diferença 50 − 40. 0 N supõe que, sem movimento, não haja atrito. E 90 N soma a força ao atrito máximo.",
      /* equilíbrio: 40 − f = 0, com a condição f ≤ μe · N */
      v: { i: () => { const [f] = resolve([[1]], [40]); if (f > 0.5 * 100) throw new Error("escorrega"); return qual(f, o); } },
    };
  })(),
  (() => {
    const o = ["20 N", "8 N", "12 N", "50 N", "4 N"];
    return {
      d: "media",
      e: "Um bloco de 2 kg está apoiado sobre outro de 3 kg, que desliza sem atrito sobre o piso. O coeficiente de atrito estático entre os dois blocos é 0,4. Qual é a maior força horizontal que pode ser aplicada ao bloco de baixo sem que o de cima escorregue?",
      o,
      x: "O bloco de cima só acelera por causa do atrito com o de baixo, que vale no máximo 0,4 · 20 = 8 N. A maior aceleração que ele consegue acompanhar é 8/2 = 4 m/s². Para o conjunto, de 5 kg, ter essa aceleração, a força precisa ser F = 5 · 4 = 20 N.\n\n8 N é o atrito máximo, que acelera só o bloco de cima. 12 N é a força que daria 4 m/s² só ao bloco de baixo. 50 N é o peso do conjunto. E 4 N é o valor numérico da aceleração máxima.",
      /* varre F: com os blocos juntos, o de cima precisa de atrito 2 · F/5, que não pode passar de 8 N */
      v: { i: () => { let Fmax = 0; for (let k = 0; k <= 10000; k++) { const F = k / 100; const [a, f] = resolve([[5, 0], [2, -1]], [F, 0]); if (f <= 0.4 * 20 + 1e-12) Fmax = F; if (a < 0) throw new Error("a"); } return qual(Fmax, o); } },
    };
  })(),
  (() => {
    const o = ["600 N", "400 N", "500 N", "100 N", "1.000 N"];
    return {
      d: "media",
      e: "Um elevador desce e vai freando, com aceleração de módulo 2 m/s². Qual é a indicação de uma balança, dentro dele, sob uma pessoa de 50 kg?",
      o,
      x: "Descendo e freando, a velocidade para baixo diminui: a aceleração aponta para cima. Então N − 500 = 50 · 2, e N = 600 N. A balança marca mais que o peso, como num elevador que sobe acelerando — o que importa é o sentido da aceleração, e não o da velocidade.\n\n400 N supõe aceleração para baixo, confundindo o sentido do movimento com o da aceleração. 500 N é o peso, que a balança marcaria em repouso ou com velocidade constante. 100 N é só a resultante. E 1.000 N multiplica g pela aceleração em vez de somar.",
      /* velocidade para baixo diminuindo: aceleração para cima (+2) */
      v: { i: () => qual(resolve([[1]], [500 + 50 * 2])[0], o) },
    };
  })(),
  (() => {
    const o = ["37°", "53°", "45°", "48,6°", "0°"];
    return {
      d: "media",
      e: "Um pêndulo pende do teto de um vagão que acelera horizontalmente a 7,5 m/s². Em relação ao vagão, o fio fica inclinado e parado. Qual é o ângulo entre o fio e a vertical?",
      o,
      x: "No referencial do chão, a tração tem uma componente vertical, que equilibra o peso (T · cos θ = mg), e uma horizontal, que acelera o corpo junto com o vagão (T · sen θ = ma). Dividindo: tg θ = a/g = 7,5/10 = 0,75, e θ = 37° (sen 37° = 0,6 e cos 37° = 0,8).\n\n53° inverte a razão, tg θ = g/a. 45° supõe a = g. 48,6° usa sen θ = a/g = 0,75, no lugar da tangente. E 0° supõe o fio vertical, esquecendo que o corpo acelera junto com o vagão.",
      /* componentes da tração (massa 1 kg): horizontal = m · a; vertical = m · g */
      v: { i: () => { const [Tx, Ty] = resolve([[1, 0], [0, 1]], [7.5, 10]); const th = (Math.atan2(Tx, Ty) * 180) / Math.PI; return unicoV(o.map((t) => Math.abs(valor(t) - th) < 0.5)); } },
    };
  })(),
  (() => {
    const o = ["2 m/s²", "6 m/s²", "10 m/s²", "4 m/s²", "0 m/s²"];
    return {
      d: "media",
      e: "Um bloco é abandonado num plano inclinado de 37°, com coeficiente de atrito (estático e cinético) igual a 0,5. Usando sen 37° = 0,6 e cos 37° = 0,8, qual é a aceleração com que ele desce?",
      o,
      x: "Por unidade de massa, a componente do peso ao longo do plano é g · sen 37° = 6 N/kg, e o atrito vale μ · g · cos 37° = 0,5 · 8 = 4 N/kg. O bloco desce porque 6 supera o atrito máximo, 4, e a resultante dá a = 6 − 4 = 2 m/s², qualquer que seja a massa.\n\n6 m/s² ignora o atrito. 10 m/s² é a queda livre. 4 m/s² é a contribuição do atrito, e não a resultante. E 0 m/s² supõe que o atrito segure o bloco, o que exigiria μ ≥ tg 37° = 0,75.",
      /* bloco de 3 kg: 30 · sen37 − f = 3a; N = 30 · cos37; f = 0,5N (incógnitas a, N, f) */
      v: { i: () => { if (0.5 * C37 >= S37) throw new Error("não desliza"); return qual(resolve([[3, 0, 1], [0, 1, 0], [0, -0.5, 1]], [30 * S37, 30 * C37, 0])[0], o); } },
    };
  })(),
  (() => {
    const o = ["√3/3", "1/2", "√3/2", "√3", "1"];
    return {
      d: "media",
      e: "Qual é o menor coeficiente de atrito estático que mantém um bloco em repouso sobre um plano inclinado de 30°?",
      o,
      x: "No limite, o atrito estático máximo equilibra a componente do peso ao longo do plano: μ · mg · cos 30° = mg · sen 30°. A massa e o g se cancelam, e μ = tg 30° = √3/3 ≅ 0,58. Com um coeficiente menor, o bloco escorrega.\n\n1/2 é o seno de 30°. √3/2 é o cosseno de 30°. √3 é a tangente de 60°, que inverte a razão. E 1 é a tangente de 45°. O resultado não depende da massa: blocos leves e pesados começam a escorregar no mesmo ângulo.",
      /* varre μ: o bloco fica parado se μ · N ≥ componente do peso */
      v: { i: () => { let m = 0; for (let k = 0; k <= 200000; k++) { const mu = k / 100000; if (mu * 10 * C30 >= 10 * S30 - 1e-12) { m = mu; break; } } return unicoV(o.map((t) => Math.abs(valor(t) - m) < 2e-5)); } },
    };
  })(),
  (() => {
    const o = ["200 N", "400 N", "800 N", "100 N", "133 N"];
    return {
      d: "media",
      e: "Uma carga de 400 N pende de uma polia móvel ideal, sustentada por um fio cujas pontas sobem pelos dois lados: uma presa ao teto e a outra puxada por uma pessoa. Qual é a força que a pessoa faz para erguer a carga com velocidade constante?",
      o,
      x: "Os dois trechos do fio que sustentam a polia móvel têm a mesma tração T e puxam para cima. Com velocidade constante, a resultante é nula: 2T = 400 N, e T = 200 N — é a força que a pessoa aplica. Em compensação, ela precisa puxar o dobro de fio para cada metro que a carga sobe.\n\n400 N ignora o segundo trecho do fio. 800 N soma as duas trações ao peso. 100 N divide o peso por quatro, como se houvesse duas polias móveis. E 133 N divide o peso por três.",
      v: { i: () => qual(resolve([[2]], [400])[0], o) },
    };
  })(),
  (() => {
    const o = ["50 N", "20 N", "30 N", "10 N", "25 N"];
    return {
      d: "media",
      e: "Dois blocos pendem do teto, em repouso, um abaixo do outro: o fio de cima sustenta um bloco de 2 kg, e deste sai outro fio que sustenta um bloco de 3 kg. Qual é a tração no fio de cima?",
      o,
      x: "O fio de cima sustenta tudo o que está abaixo dele: o bloco de 2 kg e, através do fio de baixo, o de 3 kg. Em repouso, T = (2 + 3) · 10 = 50 N. O fio de baixo sustenta só o bloco de 3 kg: 30 N.\n\n20 N é só o peso do bloco de cima. 30 N é a tração no fio de baixo. 10 N é a diferença dos pesos. E 25 N divide o peso total entre os dois fios. Em qualquer ponto de uma corrente de corpos pendurados em repouso, a tração é igual ao peso de tudo o que está abaixo.",
      /* incógnitas T1 (de cima) e T2: bloco de 2 kg, T1 − T2 − 20 = 0; bloco de 3 kg, T2 − 30 = 0 */
      v: { i: () => qual(resolve([[1, -1], [0, 1]], [20, 30])[0], o) },
    };
  })(),
  (() => {
    const o = ["1.000 N", "3.000 N", "2.000 N", "500 N", "1.500 N"];
    return {
      d: "media",
      e: "Um carro de 1.000 kg reboca um trailer de 500 kg numa estrada horizontal, acelerando a 2 m/s². Desprezando atritos sobre o trailer, qual é a força que o engate exerce sobre o trailer?",
      o,
      x: "O engate é a única força horizontal sobre o trailer e precisa dar a ele a aceleração do conjunto: F = 500 · 2 = 1.000 N. O carro, por sua vez, precisa de uma força de tração total de 1.500 · 2 = 3.000 N, para acelerar a si mesmo e ao trailer.\n\n3.000 N é a força total sobre o conjunto. 2.000 N usa a massa do carro. 500 N toma a massa do trailer como se fosse a força. E 1.500 N toma a massa do conjunto como se fosse a força.",
      v: { i: () => qual(resolve([[1]], [500 * 2])[0], o) },
    };
  })(),
  (() => {
    const o = ["18 N", "12 N", "30 N", "6 N", "22 N"];
    return {
      d: "media",
      e: "Sobre um piso áspero, com coeficiente de atrito cinético 0,2, uma força horizontal de 30 N empurra um bloco A de 2 kg, que empurra um bloco B de 3 kg encostado nele. Qual é a força de contato entre A e B?",
      o,
      x: "Os atritos valem 0,2 · 20 = 4 N em A e 0,2 · 30 = 6 N em B. Para o conjunto: 30 − 4 − 6 = 5a, e a = 4 m/s². Em B, a força de contato C precisa vencer o atrito e ainda acelerar o bloco: C − 6 = 3 · 4, e C = 18 N. Dá o mesmo que sem atrito, 30 · 3/5 = 18 N, porque o atrito é proporcional à massa de cada bloco.\n\n12 N esquece o atrito sobre B (só 3 · 4). 30 N supõe a força transmitida inteira. 6 N é só o atrito sobre B. E 22 N desconta de 30 N apenas mA · a, esquecendo o atrito sobre A.",
      /* A: 30 − C − 4 = 2a; B: C − 6 = 3a (incógnitas a e C) */
      v: { i: () => qual(resolve([[2, 1], [3, -1]], [26, -6])[1], o) },
    };
  })(),
  (() => {
    const o = ["36 N", "12 N", "18 N", "20 N", "9 N"];
    /* movimento circular uniforme: aceleração medida por diferenças finitas da posição */
    const r = 0.5, v = 3;
    const pos = (t) => [r * Math.cos((v * t) / r), r * Math.sin((v * t) / r)];
    return {
      d: "media",
      e: "Um corpo de 2 kg, preso a um fio de 0,5 m cuja outra ponta está fixa no centro de uma mesa lisa, gira em movimento circular uniforme a 3 m/s. Qual é a tração no fio?",
      o,
      x: "O fio fornece a força centrípeta, a única força horizontal sobre o corpo: T = mv²/r = 2 · 9/0,5 = 36 N. O peso é equilibrado pela normal da mesa.\n\n12 N usa v no lugar de v² (2 · 3/0,5). 18 N esquece de dividir pelo raio (2 · 9). 20 N é o peso, que a mesa equilibra. E 9 N é v², tomado como se fosse a força. Se o fio se rompesse, o corpo seguiria em linha reta, tangente à circunferência, a 3 m/s.",
      v: { i: () => { const h = 1e-4, t = 0.37; const ac = [0, 1].map((k) => (pos(t + h)[k] - 2 * pos(t)[k] + pos(t - h)[k]) / (h * h)); return qual(2 * Math.hypot(...ac), o, 1e-5); } },
    };
  })(),
  (() => {
    const o = ["4 s", "2√2 s", "8 s", "16 s", "2 s"];
    return {
      d: "media",
      e: "Um bloco parte do repouso no alto de uma rampa de 40 m de comprimento, inclinada 30°, e desce sem atrito. Quanto tempo leva para chegar ao pé da rampa?",
      o,
      x: "A aceleração ao longo da rampa é g · sen 30° = 5 m/s². Com velocidade inicial nula, d = at²/2: 40 = 5t²/2, t² = 16 e t = 4 s. Ao chegar, a velocidade é 5 · 4 = 20 m/s.\n\n2√2 s usa a aceleração da queda livre (40 = 10t²/2), ou esquece o fator 1/2 da fórmula — os dois enganos dão o mesmo número. 8 s usa d = a · t. 16 s é t², sem a raiz. E 2 s divide 40 por 2a = 10 e tira a raiz, invertendo a posição do fator 2.",
      /* simulação: s'' = g · sen30 até percorrer 40 m */
      v: { i: () => qual(simula((t, y) => [y[1], g * S30], [0, 0], 1e-4, (t, y) => y[0] >= 40, 100).t, o, 1e-3) },
    };
  })(),
  (() => {
    const o = ["5 m/s", "20 m/s", "8 m/s", "13,3 m/s", "2,5 m/s"];
    return {
      d: "media",
      e: "Dois corpos, de 5 kg e 3 kg, pendurados nas pontas de um fio que passa por uma polia fixa ideal, são soltos do repouso. Que velocidade eles têm 2 s depois?",
      o,
      x: "A aceleração é a diferença dos pesos sobre a massa total: (50 − 30)/8 = 2,5 m/s². Partindo do repouso com aceleração constante, v = at = 2,5 · 2 = 5 m/s.\n\n20 m/s é a velocidade de um corpo em queda livre depois de 2 s. 8 m/s divide a diferença dos pesos só pela massa de 5 kg (a = 4 m/s²). 13,3 m/s divide só pela massa de 3 kg (a ≅ 6,67 m/s²). E 2,5 m/s é o valor da aceleração, e não o da velocidade.",
      /* aceleração pelas equações de cada corpo; velocidade por simulação */
      v: { i: () => { const [a] = resolve([[5, 1], [3, -1]], [50, -30]); const r = simula((t, y) => [a], [0], 1e-4, (t) => t >= 2 - 1e-9, 10); return qual(r.y[0], o, 1e-6); } },
    };
  })(),
  (() => {
    const o = ["2 kg", "4 kg", "8 kg", "0,5 kg", "20 kg"];
    return {
      d: "media",
      e: "Um bloco A de 4 kg, sobre uma mesa com coeficiente de atrito estático 0,5, está ligado por um fio que passa por uma polia na borda a um corpo B pendurado. Qual é a maior massa de B para que o sistema continue em repouso?",
      o,
      x: "Em repouso, a tração é igual ao peso de B, e o atrito estático em A equilibra essa tração. O atrito máximo é 0,5 · 40 = 20 N, então o peso de B pode chegar a 20 N: mB = 2 kg. Com uma massa maior, o atrito não dá conta, e o sistema começa a se mover.\n\n4 kg iguala as massas, como se o atrito sempre acompanhasse o peso de A. 8 kg divide a massa de A pelo coeficiente. 0,5 kg toma o próprio coeficiente como massa. E 20 kg toma o atrito máximo, em newtons, como se fosse a massa.",
      /* varre mB: equilíbrio possível enquanto o atrito necessário (mB · g) não passa do máximo */
      v: { i: () => { let mx = 0; for (let k = 0; k <= 10000; k++) { const m = k / 1000; if (m * g <= 0.5 * 4 * g + 1e-12) mx = m; } return qual(mx, o); } },
    };
  })(),
  (() => {
    const o = ["6 N", "15 N", "9 N", "0 N", "20 N"];
    return {
      d: "media",
      e: "Um bloco de 2 kg está sobre outro de 3 kg, que é puxado por uma força horizontal de 15 N sobre um piso sem atrito. Os blocos se movem juntos, sem escorregar. Qual é a força de atrito que o bloco de baixo exerce sobre o de cima?",
      o,
      x: "O conjunto, de 5 kg, acelera a 15/5 = 3 m/s². O bloco de cima só é acelerado pelo atrito com o de baixo: f = 2 · 3 = 6 N, no sentido do movimento. Sobre o bloco de baixo, esse atrito aparece em sentido contrário: 15 − 6 = 9 N = 3 · 3.\n\n15 N é a força aplicada, que não chega inteira ao bloco de cima. 9 N é a resultante sobre o bloco de baixo. 0 N supõe que, sem escorregamento, não haja atrito — mas é justamente o atrito estático que arrasta o bloco de cima. E 20 N é o peso do bloco de cima, que a normal equilibra.",
      /* de cima: f = 2a; de baixo: 15 − f = 3a */
      v: { i: () => qual(resolve([[2, -1], [3, 1]], [0, 15])[1], o) },
    };
  })(),
  (() => {
    const o = ["5 N", "20 N", "15 N", "10 N", "40 N"];
    return {
      d: "media",
      e: "Um dinamômetro ideal, de massa desprezível, liga dois carrinhos sobre um trilho horizontal sem atrito: um de 3 kg, puxado por uma força de 20 N, e outro de 1 kg, que vem atrás. Qual é a leitura do dinamômetro?",
      o,
      x: "O conjunto, de 4 kg, acelera a 20/4 = 5 m/s². O dinamômetro mede a tração no ponto em que está, e essa tração é a única força horizontal sobre o carrinho de 1 kg: T = 1 · 5 = 5 N.\n\n20 N supõe que a força aplicada passe inteira pelo dinamômetro. 15 N é a resultante sobre o carrinho de 3 kg. 10 N divide a força ao meio. E 40 N soma a força aplicada com a sua reação, como se o dinamômetro medisse as duas pontas somadas.",
      /* carrinho de 3 kg: 20 − T = 3a; de 1 kg: T = a */
      v: { i: () => qual(resolve([[3, 1], [1, -1]], [20, 0])[1], o) },
    };
  })(),
  (() => {
    const o = ["8 m/s²", "4 m/s²", "6 m/s²", "2 m/s²", "10 m/s²"];
    return {
      d: "media",
      e: "Um bloco é lançado para cima ao longo de um plano inclinado de 37°, com coeficiente de atrito cinético 0,25. Com sen 37° = 0,6 e cos 37° = 0,8, qual é o módulo da desaceleração enquanto ele sobe?",
      o,
      x: "Subindo, tanto a componente do peso ao longo do plano (g · sen 37° = 6 m/s², por unidade de massa) quanto o atrito (μ · g · cos 37° = 0,25 · 8 = 2 m/s²) apontam para baixo do plano. As duas se somam: a = 6 + 2 = 8 m/s².\n\n4 m/s² subtrai o atrito em vez de somar (6 − 2), o que valeria na descida. 6 m/s² ignora o atrito. 2 m/s² considera só o atrito. E 10 m/s² é a gravidade, como se o bloco subisse na vertical.",
      /* bloco de 1 kg subindo (positivo para cima do plano): −(10 · sen37) − f = a; N = 10 · cos37; f = 0,25N */
      v: { i: () => qual(Math.abs(resolve([[1, 0, 1], [0, 1, 0], [0, -0.25, 1]], [-10 * S37, 10 * C37, 0])[0]), o) },
    };
  })(),
  (() => {
    const o = ["2 m/s², para cima", "2 m/s², para baixo", "12 m/s², para cima", "0 m/s²", "1,2 m/s², para cima"];
    /* aceleração com sinal: para cima é positiva */
    const comSinal = (t) => valor(t.replace(/,\s*para (cima|baixo)$/, "")) * (/para baixo/.test(t) ? -1 : 1);
    return {
      d: "media",
      e: "Uma pessoa de 75 kg está num elevador, sobre uma balança que marca 900 N. Qual é a aceleração do elevador?",
      o,
      x: "O peso da pessoa é 750 N, e a balança marca a normal, 900 N. A resultante é 900 − 750 = 150 N, para cima, e a aceleração é 150/75 = 2 m/s², para cima. O elevador pode estar subindo e acelerando ou descendo e freando — a balança só informa o sentido da aceleração.\n\n“2 m/s², para baixo” erra o sentido: a balança marca mais que o peso. 12 m/s² divide a indicação da balança pela massa, sem descontar o peso. 0 m/s² supõe que a balança marque sempre o peso. E 1,2 m/s² divide 900 N por 750, misturando as grandezas.",
      v: { i: () => { const [a] = resolve([[75]], [900 - 750]); return unicoV(o.map((t) => perto(comSinal(t), a, 1e-9))); } },
    };
  })(),
  (() => {
    const o = ["80 N", "200 N", "8 N", "50 N", "120 N"];
    return {
      d: "media",
      e: "Qual é a menor força horizontal capaz de pôr em movimento um caixote de 20 kg parado sobre um piso com coeficiente de atrito estático 0,4?",
      o,
      x: "O caixote começa a se mover quando a força supera o atrito estático máximo, μe · N. Com o piso horizontal, N = 200 N, e o limite é 0,4 · 200 = 80 N. Abaixo disso, o atrito se ajusta e equilibra a força; a partir desse valor, o caixote fica na iminência de escorregar.\n\n200 N é o peso, que a normal equilibra. 8 N usa a massa no lugar do peso (0,4 · 20). 50 N divide o peso por 4, confundindo 0,4 com 1/4. E 120 N subtrai o atrito máximo do peso.",
      /* varre F: o menor valor em que o atrito necessário (F) atinge o máximo μ · N */
      v: { i: () => { let F = 0; while (F < 0.4 * 200 - 1e-9) F += 0.01; return qual(Math.round(F * 100) / 100, o); } },
    };
  })(),
  (() => {
    const o = ["10√3 N", "15 N", "30 N", "15√3/2 N", "20√3 N"];
    return {
      d: "media",
      e: "Um lustre de 3 kg está pendurado em repouso por dois fios iguais, que formam, cada um, um ângulo de 60° com o teto horizontal. Qual é a tração em cada fio?",
      o,
      x: "Na horizontal, as componentes das duas trações se cancelam, por simetria. Na vertical, as componentes T · sen 60° somadas equilibram o peso: 2T · sen 60° = 30, isto é, 2T · √3/2 = 30, e T = 30/√3 = 10√3 ≅ 17,3 N.\n\n15 N divide o peso entre os fios sem decompor as trações, como se os fios fossem verticais. 30 N supõe que cada fio sustente o peso inteiro. 15√3/2 N multiplica pelo seno em vez de dividir. E 20√3 N atribui a cada fio o peso inteiro dividido pelo seno, 30/sen 60°.",
      /* incógnitas T1 e T2: horizontal, T1 · cos60 − T2 · cos60 = 0; vertical, (T1 + T2) · sen60 = 30 */
      v: { i: () => qual(resolve([[0.5, -0.5], [S60, S60]], [0, 30])[0], o) },
    };
  })(),
  (() => {
    const o = ["0 N", "20 N", "40 N", "10 N", "−20 N"];
    return {
      d: "media",
      e: "Um corpo de 2 kg está pendurado numa balança de mola presa ao teto de um elevador. Se o cabo do elevador se rompe e o elevador passa a cair livremente, quanto a balança indica?",
      o,
      x: "Em queda livre, o elevador, a balança e o corpo caem todos com aceleração g. Para o corpo, tomando para baixo como positivo: P − F = m · g, e 20 − F = 2 · 10, então F = 0. A mola não precisa sustentar nada, e a balança indica zero. É a “imponderabilidade” dos astronautas em órbita, que também estão em queda livre.\n\n20 N é o peso, que a balança marcaria com o elevador parado. 40 N dobra o peso, como numa aceleração g para cima. 10 N supõe metade do peso. E −20 N não faz sentido para uma balança de mola, que só pode ser esticada.",
      v: { i: () => qual(resolve([[1]], [20 - 2 * g])[0], o) },
    };
  })(),
  (() => {
    const o = ["5 kg", "10 kg", "8,66 kg", "20 kg", "0 kg"];
    return {
      d: "media",
      e: "Um bloco de 10 kg sobe, com velocidade constante, um plano inclinado de 30° sem atrito, puxado por um fio que passa por uma polia no alto e sustenta um corpo pendurado. Qual é a massa desse corpo?",
      o,
      x: "Com velocidade constante, a resultante sobre cada corpo é nula. No corpo pendurado, a tração é igual ao peso, mg. No bloco, a tração equilibra a componente do peso ao longo do plano, 100 · sen 30° = 50 N. Então mg = 50 N, e m = 5 kg. A mesma massa manteria o bloco parado ou descendo com velocidade constante.\n\n10 kg iguala as massas, esquecendo a decomposição do peso no plano. 8,66 kg usa o cosseno no lugar do seno. 20 kg divide por sen 30° em vez de multiplicar. E 0 kg supõe que, sem atrito, nada seja necessário para manter a velocidade — mas o peso do bloco o puxa para baixo do plano.",
      /* incógnitas T e m: bloco, T − 100 · sen30 = 0; pendurado, 10m − T = 0 */
      v: { i: () => qual(resolve([[1, 0], [-1, 10]], [100 * S30, 0])[1], o) },
    };
  })(),

  /* ----------------------------------------------------------- difíceis --- */
  (() => {
    const o = ["0 m/s²", "2 m/s²", "3 m/s²", "5 m/s²", "10 m/s²"];
    return {
      d: "dificil",
      e: "Um bloco de 5 kg sobe um plano inclinado de 37°, puxado por um fio que passa por uma polia no alto e sustenta um corpo de 5 kg pendurado. O coeficiente de atrito cinético entre o bloco e o plano é 0,5, e o sistema já está em movimento. Com sen 37° = 0,6 e cos 37° = 0,8, qual é a aceleração do sistema?",
      o,
      x: "O corpo pendurado puxa com 50 N. Contra o movimento atuam a componente do peso do bloco, 50 · 0,6 = 30 N, e o atrito cinético, 0,5 · 50 · 0,8 = 20 N, que somam 50 N. A resultante é nula: o sistema segue em movimento uniforme, com aceleração 0.\n\n2 m/s² ignora o atrito, (50 − 30)/10. 3 m/s² ignora a componente do peso, (50 − 20)/10. 5 m/s² divide a força do corpo pendurado pela massa total, sem descontar nada. E 10 m/s² supõe o corpo pendurado em queda livre.",
      /* incógnitas a, T, N, f: bloco, T − 50 · sen37 − f = 5a; N = 50 · cos37; f = 0,5N; pendurado, 50 − T = 5a */
      v: { i: () => qual(resolve([[5, -1, 0, 1], [0, 0, 1, 0], [0, 0, -0.5, 1], [5, 1, 0, 0]], [-50 * S37, 50 * C37, 0, 50])[0], o) },
    };
  })(),
  (() => {
    const o = ["2,5 m/s²", "1,25 m/s²", "1,43 m/s²", "5 m/s²", "10 m/s²"];
    return {
      d: "dificil",
      e: "Um corpo A de 4 kg pende de uma polia móvel ideal. O fio que passa por ela tem uma ponta presa ao teto; a outra passa por uma polia fixa e sustenta um corpo B de 3 kg. Solto do repouso, B desce. Qual é a aceleração de B?",
      o,
      x: "Para cada metro que B desce, A sobe meio metro, porque o fio se divide entre os dois lados da polia móvel: aB = 2aA. Com a tração T no fio: em B, 30 − T = 3aB; em A, 2T − 40 = 4aA. Substituindo aB = 2aA: T = 30 − 6aA, e 2(30 − 6aA) − 40 = 4aA, isto é, 20 = 16aA. Então aA = 1,25 m/s² e aB = 2,5 m/s².\n\n1,25 m/s² é a aceleração de A. 1,43 m/s² trata o sistema como uma máquina de Atwood simples, (40 − 30)/7, esquecendo a polia móvel. 5 m/s² dobra a aceleração de B. E 10 m/s² supõe B em queda livre.",
      /* incógnitas T, aA, aB: 3aB + T = 30; 4aA − 2T = −40; aB − 2aA = 0 */
      v: { i: () => qual(resolve([[1, 0, 3], [-2, 4, 0], [0, -2, 1]], [30, -40, 0])[2], o) },
    };
  })(),
  (() => {
    const o = ["2,5 m/s²", "5 m/s²", "10 m/s²", "7,5 m/s²", "0 m/s²"];
    return {
      d: "dificil",
      e: "Um bloco de 2 kg está sobre outro de 4 kg, que pode deslizar sem atrito sobre o piso. O coeficiente de atrito entre os blocos é 0,5 (estático e cinético). Uma força horizontal de 30 N é aplicada ao bloco de cima. Qual é a aceleração do bloco de baixo?",
      o,
      x: "Se os blocos andassem juntos, a aceleração seria 30/6 = 5 m/s², e o bloco de baixo precisaria de um atrito de 4 · 5 = 20 N. Mas o atrito entre os blocos vale no máximo 0,5 · 20 = 10 N: o de cima escorrega. Então o atrito é cinético, 10 N, e é a única força horizontal sobre o bloco de baixo: a = 10/4 = 2,5 m/s². O de cima acelera a (30 − 10)/2 = 10 m/s².\n\n5 m/s² supõe que os blocos andem juntos. 10 m/s² é a aceleração do bloco de cima. 7,5 m/s² divide a força aplicada pela massa do bloco de baixo, como se ela agisse nele. E 0 m/s² supõe que, sem atrito com o piso, o bloco de baixo fique parado — mas o atrito com o de cima o arrasta.",
      /* testa primeiro o movimento conjunto; se o atrito necessário passa do máximo, usa o atrito cinético */
      v: { i: () => { const [a, f] = resolve([[6, 0], [4, -1]], [30, 0]); const aBaixo = f <= 0.5 * 20 ? a : (0.5 * 20) / 4; return qual(aBaixo, o); } },
    };
  })(),
  (() => {
    const o = ["7,5 m/s²", "6 m/s²", "8 m/s²", "13,3 m/s²", "10 m/s²"];
    return {
      d: "dificil",
      e: "Usando sen 37° = 0,6 e cos 37° = 0,8, com que aceleração horizontal uma cunha de face inclinada 37°, sem atrito, deve ser empurrada para que um bloco apoiado nessa face não escorregue em relação a ela?",
      o,
      x: "Parado em relação à cunha, o bloco tem a mesma aceleração horizontal a. Sobre ele atuam só o peso e a normal N, perpendicular à face. Na vertical, N · cos 37° = mg; na horizontal, N · sen 37° = ma. Dividindo: a = g · tg 37° = 10 · 0,75 = 7,5 m/s².\n\n6 m/s² usa g · sen 37°, a aceleração com que o bloco desceria a rampa parada. 8 m/s² usa g · cos 37°. 13,3 m/s² usa g/tg 37°, invertendo a razão. E 10 m/s² supõe tg 37° = 1.",
      /* bloco de 1 kg, incógnitas N e a: vertical, N · cos37 = 10; horizontal, N · sen37 − a = 0 */
      v: { i: () => qual(resolve([[C37, 0], [S37, -1]], [10, 0])[1], o) },
    };
  })(),
  (() => {
    const o = ["20 N", "25 N", "15 N", "12,5 N", "10 N"];
    /* a corda vira 40 pedaços de 0,05 kg ligados por elos sem massa; o bloco fica na ponta de trás */
    const tracoes = () => { const n = 40, mp = 2 / n; const massas = [3, ...Array(n).fill(mp)]; const k = massas.length; const A = [], b = []; for (let i = 0; i < k; i++) { const lin = Array(k).fill(0); lin[0] = massas[i]; if (i < k - 1) lin[i + 1] = -1; if (i > 0) lin[i] = (lin[i] ?? 0) + 1; A.push(lin); b.push(i === k - 1 ? 25 : 0); } return { x: resolve(A, b), n }; };
    return {
      d: "dificil",
      e: "Uma corda homogênea de 2 kg e 4 m de comprimento puxa um bloco de 3 kg sobre um piso sem atrito: uma força de 25 N é aplicada na ponta livre, e a outra ponta está presa ao bloco. Qual é a tração no ponto médio da corda?",
      o,
      x: "O conjunto, bloco e corda, tem 5 kg e acelera a 25/5 = 5 m/s². No ponto médio, a corda puxa tudo o que está atrás dele: o bloco e metade da corda, 3 + 1 = 4 kg. Então T = 4 · 5 = 20 N. Numa corda com massa, a tração cai ao longo do comprimento: 25 N na ponta puxada e 15 N na ponta presa ao bloco.\n\n25 N supõe a corda sem massa, com a mesma tração em todos os pontos. 15 N é a tração na ponta do bloco. 12,5 N divide a força ao meio. E 10 N considera só a massa da corda, esquecendo o bloco.",
      /* incógnitas: a e as tensões nos elos; a tensão no meio da corda é a do elo 20 */
      v: { i: () => { const { x, n } = tracoes(); const Tmeio = x[1 + n / 2]; return qual(Tmeio, o, 1e-6); } },
    };
  })(),
  (() => {
    const o = ["5√2/2 rad/s", "√10 rad/s", "√7,5 rad/s", "√(50/3) rad/s", "12,5 rad/s"];
    return {
      d: "dificil",
      e: "Um pêndulo cônico tem fio de 1 m e gira com o fio formando 37° com a vertical. Usando sen 37° = 0,6 e cos 37° = 0,8, qual é a velocidade angular do movimento?",
      o,
      x: "A componente vertical da tração equilibra o peso, T · cos 37° = mg, e a horizontal é a força centrípeta, T · sen 37° = mω²r, com r = L · sen 37° = 0,6 m. Dividindo: tg 37° = ω²r/g, e ω² = g · tg 37°/r = 10 · 0,75/0,6 = 12,5. Então ω = √12,5 = 5√2/2 ≅ 3,54 rad/s. Direto: ω² = g/(L · cos θ) = 10/0,8.\n\n√10 rad/s usa ω² = g/L, que vale para as pequenas oscilações de um pêndulo simples, e não para o pêndulo cônico. √7,5 rad/s usa r = L em vez de r = L · sen 37°. √(50/3) rad/s usa g/r, esquecendo a tangente. E 12,5 rad/s é ω², sem a raiz.",
      /* massa 1 kg, incógnitas T e ω²: T · cos37 = 10; T · sen37 − ω² · (1 · sen37) = 0 */
      v: { i: () => qual(Math.sqrt(resolve([[C37, 0], [S37, -S37]], [10, 0])[1]), o) },
    };
  })(),
  (() => {
    const o = ["36 N", "30 N", "24 N", "60 N", "72 N"];
    return {
      d: "dificil",
      e: "Uma máquina de Atwood, com corpos de 6 kg e 2 kg, está presa ao teto de um elevador que sobe com aceleração de 2 m/s². Qual é a tração no fio?",
      o,
      x: "No referencial do elevador, tudo se passa como se a gravidade fosse g + a = 12 m/s². A aceleração relativa dos corpos é (6 − 2) · 12/8 = 6 m/s², e a tração é 2 · 6 · 2 · 12/(6 + 2) = 36 N. Conferindo no referencial do chão: o corpo de 2 kg sobe com 2 + 6 = 8 m/s², e T − 20 = 2 · 8, T = 36 N.\n\n30 N é a tração com o elevador parado. 24 N usa g − a = 8 m/s², como num elevador que acelera para baixo. 60 N é o peso do corpo mais pesado. E 72 N é o peso aparente desse corpo no elevador, 6 · 12.",
      /* referencial do chão, para cima positivo; incógnitas ar (relativa) e T: 6 kg, T − 60 = 6(2 − ar); 2 kg, T − 20 = 2(2 + ar) */
      v: { i: () => qual(resolve([[6, 1], [-2, 1]], [12 + 60, 4 + 20])[1], o) },
    };
  })(),
  (() => {
    const o = ["Entre 4,4 kg e 7,6 kg", "Entre 6 kg e 7,6 kg", "Exatamente 6 kg", "Entre 4,4 kg e 6 kg", "Qualquer valor até 7,6 kg"];
    const lerFaixa = (t) => { const n = [...t.replace(/,(\d)/g, ".$1").matchAll(/\d+(?:\.\d+)?/g)].map((m) => Number(m[0])); return /Exatamente/.test(t) ? [n[0], n[0]] : /Qualquer/.test(t) ? [0, n[0]] : n; };
    return {
      d: "dificil",
      e: "Um bloco de 10 kg está num plano inclinado de 37°, com coeficiente de atrito estático 0,2, ligado por um fio que passa por uma polia no alto do plano a um corpo pendurado de massa m. Usando sen 37° = 0,6 e cos 37° = 0,8, para que valores de m o sistema pode ficar em repouso?",
      o,
      x: "A componente do peso do bloco ao longo do plano é 100 · 0,6 = 60 N, e o atrito estático pode valer até 0,2 · 100 · 0,8 = 16 N, em qualquer dos dois sentidos. Se o corpo pendurado puxa pouco, o bloco tende a descer, e o atrito o segura: mg ≥ 60 − 16 = 44 N. Se puxa muito, o bloco tende a subir, e o atrito o segura no outro sentido: mg ≤ 60 + 16 = 76 N. Então 4,4 kg ≤ m ≤ 7,6 kg.\n\n“Entre 6 kg e 7,6 kg” considera só a tendência de subir. “Exatamente 6 kg” ignora o atrito. “Entre 4,4 kg e 6 kg” considera só a tendência de descer. E “qualquer valor até 7,6 kg” esquece que, com pouca massa, o bloco escorrega para baixo.",
      /* varre m: equilíbrio possível se o atrito necessário (|mg − 60|) não passa de 16 N */
      v: { i: () => { const ok = intervalo(0, 1500).map((k) => k / 100).filter((m) => Math.abs(m * g - 100 * S37) <= 0.2 * 100 * C37 + 1e-9); const faixa = [Math.min(...ok), Math.max(...ok)]; return unicoV(o.map((t) => { const [a, b] = lerFaixa(t); return perto(a, faixa[0], 1e-9) && perto(b, faixa[1], 1e-9); })); } },
    };
  })(),
  (() => {
    const o = ["40 N", "10 N", "20 N", "1 N", "0 N"];
    return {
      d: "dificil",
      e: "Um bloco de 2 kg é mantido parado contra uma parede vertical por uma força horizontal que o empurra contra ela. Se o coeficiente de atrito estático entre o bloco e a parede é 0,5, qual é a menor força que mantém o bloco parado?",
      o,
      x: "A força horizontal F é equilibrada pela normal da parede, N = F. Quem segura o bloco na vertical é o atrito estático, que vale no máximo μN = 0,5F. Para não escorregar, 0,5F ≥ 20 N, o peso, e F ≥ 40 N. Quanto maior o coeficiente de atrito, menor a força necessária.\n\n10 N multiplica o peso pelo coeficiente, como se a normal fosse o peso. 20 N iguala a força ao peso, esquecendo o coeficiente. 1 N multiplica o coeficiente pela massa. E 0 N supõe que o atrito segure o bloco sem força normal — mas sem normal não há atrito.",
      /* varre F: o menor valor com atrito máximo 0,5 · F ≥ peso */
      v: { i: () => { let F = 0; while (0.5 * F < 20 - 1e-9) F += 0.01; return qual(Math.round(F * 100) / 100, o); } },
    };
  })(),
  (() => {
    const o = ["5(√3 − 1)/2 m/s²", "5(√3 − 1) m/s²", "5 m/s²", "5(√3 + 1)/2 m/s²", "0 m/s²"];
    return {
      d: "dificil",
      e: "Dois blocos de 2 kg, ligados por um fio que passa por uma polia no topo, estão em dois planos inclinados sem atrito, de 30° e de 60°, apoiados costas com costas. Qual é a aceleração do sistema?",
      o,
      x: "Cada bloco é puxado ao longo do seu plano pela componente do próprio peso: 20 · sen 60° = 10√3 N no plano de 60° e 20 · sen 30° = 10 N no de 30°. O bloco do plano mais inclinado desce, e a resultante é 10√3 − 10 = 10(√3 − 1) N, que acelera 4 kg: a = 10(√3 − 1)/4 = 5(√3 − 1)/2 ≅ 1,83 m/s².\n\n5(√3 − 1) m/s² divide a resultante pela massa de um só bloco. 5 m/s² usa só a componente de um bloco. 5(√3 + 1)/2 m/s² soma as componentes, como se as duas puxassem no mesmo sentido. E 0 m/s² supõe que massas iguais se equilibrem, o que não vale em planos diferentes.",
      /* bloco do plano de 60° desce: 20 · sen60 − T = 2a; o de 30° sobe: T − 20 · sen30 = 2a */
      v: { i: () => qual(resolve([[2, 1], [2, -1]], [20 * S60, -20 * S30])[0], o) },
    };
  })(),
];
