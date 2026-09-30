/* Rascunho — Matemática · 6º ao 9º / Ângulos e retas paralelas.

   A explicação usa os teoremas (correspondentes são iguais, colaterais
   somam 180°, e assim por diante). A conferência mede: monta duas retas
   paralelas (y = 0 e y = 1) cortadas por uma transversal de inclinação
   qualquer, calcula cada um dos oito ângulos pelo produto escalar dos
   vetores das semirretas, e só então lê os pares pelo nome (posição),
   sem supor nenhuma igualdade. Os ponteiros do relógio têm as posições
   calculadas em graus (0,5° por minuto da hora, 6° por minuto do minuto). */

import { unicoV, qualNum } from "./_matematica-fund.mjs";

export const materia = "matematica-fund";
export const tema = "Ângulos e retas paralelas";
export const arquivo = "matematica-fund__angulos-e-retas-paralelas";

const rad = (g) => (g * Math.PI) / 180;
const angEntre = (u, v) => (Math.acos(Math.max(-1, Math.min(1, (u[0] * v[0] + u[1] * v[1]) / (Math.hypot(...u) * Math.hypot(...v))))) * 180) / Math.PI;
/* as quatro regiões em cada ponto (P0 em r, P1 em s), medidas pelos vetores das semirretas */
const regioes = (theta) => {
  const E = [1, 0], W = [-1, 0], T = [Math.cos(rad(theta)), Math.sin(rad(theta))], B = [-T[0], -T[1]];
  const reg = { NE: angEntre(E, T), NW: angEntre(T, W), SW: angEntre(W, B), SE: angEntre(B, E) };
  return { P0: { ...reg }, P1: { ...reg } };
};
/* pares por nome: [região em P0, região em P1] */
const PARES = {
  correspondentes: [["NE", "NE"], ["NW", "NW"], ["SW", "SW"], ["SE", "SE"]],
  alternosInternos: [["NE", "SW"], ["NW", "SE"]],
  alternosExternos: [["SW", "NE"], ["SE", "NW"]],
  colateraisInternos: [["NE", "SE"], ["NW", "SW"]],
  colateraisExternos: [["SE", "NE"], ["SW", "NW"]],
};
/* dado um ângulo (graus) numa região de P0, mede o parceiro no outro ponto, por tipo de par */
const parceiro = (tipo, dado) => {
  for (const theta of [dado, 180 - dado]) {
    const R = regioes(theta);
    for (const [a, b] of PARES[tipo]) if (Math.abs(R.P0[a] - dado) < 1e-9) return Math.round(R.P1[b] * 1e6) / 1e6;
  }
  return NaN;
};
const grau = (t) => parseFloat(String(t).replace(",", "."));
const qualGr = (v, alt, tol = 1e-6) => qualNum(v, alt.map((t) => String(t).replace(/[°']/g, "")), tol);
/* ponteiros: ângulo menor entre a hora h e o minuto m */
const relogio = (h, m) => { const d = Math.abs((30 * (h % 12) + 0.5 * m) - 6 * m) % 360; return Math.min(d, 360 - d); };

export const questoes = [
  /* ------------------------------------------------------------ fáceis --- */
  (() => {
    const o = ["55°", "145°", "35°", "65°", "125°"];
    return {
      d: "facil",
      e: "Dois ângulos são complementares quando somam 90°. Qual é o complemento de um ângulo de 35°?",
      o,
      x: "O complemento é o que falta para completar 90°: 90° − 35° = 55°. Conferindo, 35° + 55° = 90°, o que forma um ângulo reto. O complemento é sempre menor que 90°, e quanto maior o ângulo, menor o seu complemento, pois os dois precisam completar um ângulo reto.\n\n145° é o suplemento de 35°, que completa 180° e não 90°. 35° repete o próprio ângulo. 65° e 125° não somam 90° com 35°: 35° + 65° = 100° e 35° + 125° = 160°.",
      v: { i: () => qualGr(90 - 35, o) },
    };
  })(),
  (() => {
    const o = ["60°", "30°", "240°", "90°", "180°"];
    return {
      d: "facil",
      e: "Um ângulo de 120° é somado a outro ângulo para formar um ângulo raso. Quanto mede esse outro ângulo?",
      o,
      x: "O suplemento é o que falta para completar 180°: 180° − 120° = 60°. Conferindo, 120° + 60° = 180°, o que forma um ângulo raso, isto é, uma reta.\n\n30° é o complemento de 60°, e não o suplemento de 120°. 240° soma 120° com 120° e passa de 180°. 90° seria o suplemento de outro 90°. E 180° é o total que os dois ângulos devem somar, e não o suplemento.",
      v: { i: () => qualGr(180 - 120, o) },
    };
  })(),
  (() => {
    const o = ["90°", "45°", "180°", "60°", "360°"];
    return {
      d: "facil",
      e: "Uma volta completa tem 360°. Quantos graus tem um quarto de volta?",
      o,
      x: "Um quarto de volta é 360° ÷ 4 = 90°, que é o ângulo reto, como o canto de uma folha de papel. Conferindo, quatro ângulos de 90° completam 4 × 90° = 360°. Essa divisão é a base da leitura de ângulos em relógios e esquadros: cada quarto de volta é um ângulo reto, e quatro deles fecham a circunferência inteira.\n\n45° é um oitavo de volta. 180° é meia volta. 60° é um sexto de volta. E 360° é a volta completa.",
      v: { i: () => qualGr(360 / 4, o) },
    };
  })(),
  (() => {
    const o = ["50°", "130°", "40°", "310°", "100°"];
    return {
      d: "facil",
      e: "Quando duas retas se cortam, os ângulos opostos pelo vértice são iguais. Se um deles mede 50°, quanto mede o ângulo oposto a ele pelo vértice?",
      o,
      x: "Os ângulos opostos pelo vértice têm a mesma medida, pois ambos são suplementos do mesmo ângulo vizinho: 180° − 130° = 50°. O ângulo oposto também mede 50°.\n\n130° é a medida de cada um dos ângulos vizinhos, que são suplementares e não opostos. 40° é o complemento de 50°. 310° é o que falta para 360°. E 100° é o dobro, sem relação com o vértice.",
      v: { i: () => { const R = regioes(50); return qualGr(R.P0.SW, o); } },
    };
  })(),
  (() => {
    const o = ["110°", "70°", "20°", "290°", "90°"];
    return {
      d: "facil",
      e: "Duas retas se cortam e formam um ângulo de 70°. Quanto mede o ângulo adjacente a ele, isto é, o vizinho que divide um lado com o primeiro?",
      o,
      x: "Os ângulos adjacentes formados por duas retas que se cortam são suplementares, pois juntos formam uma reta: 180° − 70° = 110°. Conferindo, 70° + 110° = 180°.\n\n70° é a medida do ângulo oposto pelo vértice, e não do adjacente. 20° é o complemento de 70°. 290° é o que falta para 360°. E 90° divide igualmente o ângulo raso, o que não ocorre aqui.",
      v: { i: () => { const R = regioes(70); return qualGr(R.P0.NW, o); } },
    };
  })(),
  (() => {
    const o = ["140°", "120°", "180°", "160°", "80°"];
    return {
      d: "facil",
      e: "Em torno de um ponto, os ângulos completam 360°. Se três ângulos em torno de um ponto medem 100°, 120° e x, quanto vale x?",
      o,
      x: "A soma dos três ângulos deve ser 360°: 100° + 120° + x = 360°, então x = 360° − 220° = 140°. Conferindo, 100° + 120° + 140° = 360°. Em torno de um ponto, sempre se completa uma volta inteira, por isso a soma é 360°.\n\n120° repete um dos ângulos dados. 180° é o que falta para uma reta, e não para a volta. 160° e 80° não completam 360°: 100° + 120° + 160° = 380° e 100° + 120° + 80° = 300°.",
      v: { i: () => qualGr(360 - 100 - 120, o) },
    };
  })(),
  (() => {
    const o = ["Obtuso", "Agudo", "Reto", "Raso", "Completo"];
    return {
      d: "facil",
      e: "Os ângulos se classificam pela medida: agudo, menor que 90°; reto, igual a 90°; obtuso, maior que 90° e menor que 180°. Como se classifica um ângulo de 135°?",
      o,
      x: "Como 90° < 135° < 180°, o ângulo de 135° é obtuso. Ele é maior que um ângulo reto, mas ainda não chega a formar uma reta. O ângulo obtuso é maior que o reto, mas menor que o raso, e 135° fica a meio caminho entre 90° e 180°.\n\nAgudo exigiria uma medida menor que 90°. Reto exigiria exatamente 90°. Raso é o ângulo de 180°, que forma uma reta. E completo é o de 360°, que é uma volta inteira.",
      v: { i: () => { const cls = (g) => (g < 90 ? "Agudo" : g === 90 ? "Reto" : g < 180 ? "Obtuso" : g === 180 ? "Raso" : "Completo"); return unicoV(o.map((t) => t === cls(135))); } },
    };
  })(),
  (() => {
    const o = ["Raso", "Reto", "Obtuso", "Agudo", "Completo"];
    return {
      d: "facil",
      e: "Duas semirretas opostas, de mesma origem, formam uma reta. Como se chama o ângulo de 180°, que tem essa forma?",
      o,
      x: "O ângulo de 180° tem os dois lados alinhados, formando uma reta, e se chama ângulo raso. Ele equivale a meia volta, pois 360° ÷ 2 = 180°. Como o ângulo raso mede 180°, os dois ângulos adjacentes formados por uma reta somam sempre 180°, o que explica a palavra suplementares.\n\nO ângulo reto mede 90°. O obtuso está entre 90° e 180°. O agudo é menor que 90°. E o completo mede 360°, uma volta inteira.",
      v: { i: () => { const cls = (g) => (g < 90 ? "Agudo" : g === 90 ? "Reto" : g < 180 ? "Obtuso" : g === 180 ? "Raso" : "Completo"); return unicoV(o.map((t) => t === cls(180))); } },
    };
  })(),
  (() => {
    const o = ["75°", "105°", "15°", "85°", "180°"];
    return {
      d: "facil",
      e: "Duas retas paralelas são cortadas por uma transversal. Um ângulo mede 75°. Quanto mede o ângulo correspondente a ele na outra reta?",
      o,
      x: "Ângulos correspondentes ocupam a mesma posição em cada uma das paralelas, e por isso têm a mesma medida: o correspondente também mede 75°. Se as retas não fossem paralelas, essa igualdade não valeria.\n\n105° é o suplemento de 75°, medida de um ângulo adjacente. 15° é o complemento de 75°. 85° não tem relação com os dados. E 180° é a soma de um ângulo com o seu adjacente.",
      v: { i: () => qualGr(parceiro("correspondentes", 75), o) },
    };
  })(),
  (() => {
    const o = ["62°", "118°", "28°", "90°", "124°"];
    return {
      d: "facil",
      e: "Entre duas retas paralelas cortadas por uma transversal, um ângulo alterno interno mede 62°. Quanto mede o seu par alterno interno?",
      o,
      x: "Ângulos alternos internos ficam entre as paralelas, em lados opostos da transversal, e são iguais quando as retas são paralelas. O outro também mede 62°. Os alternos internos ficam em lados opostos da transversal, e por isso a igualdade só vale para retas paralelas.\n\n118° é o suplemento de 62°, medida de um ângulo colateral interno. 28° é o complemento de 62°. 90° não tem relação com os dados. E 124° é o dobro de 62°.",
      v: { i: () => qualGr(parceiro("alternosInternos", 62), o) },
    };
  })(),
  (() => {
    const o = ["70°", "110°", "20°", "180°", "90°"];
    return {
      d: "facil",
      e: "Entre duas retas paralelas cortadas por uma transversal, um dos ângulos colaterais internos mede 110°. Qual é a medida do outro?",
      o,
      x: "Ângulos colaterais internos ficam entre as paralelas e do mesmo lado da transversal, e são suplementares: somam 180°. O outro mede 180° − 110° = 70°.\n\n110° repete o ângulo dado, como se os colaterais fossem iguais, o que vale para alternos e correspondentes. 20° é o complemento de 70°. 180° é a soma, e não a medida de um dos ângulos. E 90° dividiria o ângulo raso em partes iguais.",
      v: { i: () => qualGr(parceiro("colateraisInternos", 110), o) },
    };
  })(),
  (() => {
    const o = ["180°", "90°", "360°", "270°", "60°"];
    return {
      d: "facil",
      e: "O ponteiro dos minutos de um relógio gira meia volta enquanto passam 30 minutos. Quantos graus ele percorre nesse tempo?",
      o,
      x: "Meia volta equivale a 360° ÷ 2 = 180°. Como o ponteiro dos minutos dá uma volta completa em 60 minutos, ele percorre 360° ÷ 60 = 6° por minuto, e em 30 minutos, 30 × 6° = 180°.\n\n90° é um quarto de volta, o que corresponde a 15 minutos. 360° é a volta completa, em 60 minutos. 270° corresponde a três quartos de volta, 45 minutos. E 60° corresponde a 10 minutos.",
      v: { i: () => qualGr(30 * 6, o) },
    };
  })(),

  /* ------------------------------------------------------------ médias --- */
  (() => {
    const o = ["36°", "144°", "45°", "30°", "72°"];
    return {
      d: "media",
      e: "Dois ângulos são suplementares, e um deles é o quádruplo do outro. Quanto mede o menor deles?",
      o,
      x: "Chamando o menor de x, o maior é 4x, e a soma é x + 4x = 5x = 180°, então x = 36°. O maior mede 144°. Conferindo, 36° + 144° = 180°, e 144° = 4 × 36°. Nesse tipo de problema, as partes somam 5 vezes o menor ângulo, já que o maior é 4 vezes o menor e o total é 180°.\n\n144° é o maior ângulo. 45° e 30° não satisfazem a condição: 45° e 180° − 45° = 135° não têm razão 4, e 30° e 150° têm razão 5. E 72° é o dobro do menor correto.",
      v: { i: () => { for (let x = 1; x < 90; x++) if (x + 4 * x === 180) return qualGr(x, o); return -1; } },
    };
  })(),
  (() => {
    const o = ["55°", "35°", "45°", "70°", "65°"];
    return {
      d: "media",
      e: "Dois ângulos são complementares, e um deles mede 20° a mais que o outro. Quanto mede o maior?",
      o,
      x: "Chamando o menor de x, o maior é x + 20°, e a soma é x + (x + 20°) = 90°, então 2x = 70° e x = 35°. O maior mede 55°. Conferindo, 35° + 55° = 90°, e 55° − 35° = 20°. Esse é um problema de soma e diferença: os dois ângulos somam 90° e diferem de 20°.\n\n35° é o menor ângulo. 45° é a metade de 90°, que só valeria se fossem iguais. 70° e 65° passam de 55° e não deixam os dois ângulos somarem 90° com diferença 20°.",
      v: { i: () => { for (let x = 1; x < 90; x++) if (x + (x + 20) === 90) return qualGr(x + 20, o); return -1; } },
    };
  })(),
  (() => {
    const o = ["50", "40", "60", "30", "70"];
    return {
      d: "media",
      e: "Os ângulos (2x + 10)° e (x + 20)° são suplementares. Qual é o valor de x?",
      o,
      x: "Como são suplementares, (2x + 10) + (x + 20) = 180, isto é, 3x + 30 = 180, então 3x = 150 e x = 50. Conferindo, os ângulos medem 110° e 70°, e 110° + 70° = 180°. A condição de suplementares é o ponto de partida: os dois ângulos juntos formam uma reta, e por isso a soma deles é 180°.\n\n40, 60, 30 e 70 não satisfazem a condição: por exemplo, para x = 40, os ângulos medem 90° e 60°, que somam 150°, e não 180°.",
      v: { i: () => { for (let x = 0; x <= 100; x++) if (2 * x + 10 + x + 20 === 180) return qualNum(x, o); return -1; } },
    };
  })(),
  (() => {
    const o = ["25", "15", "30", "20", "50"];
    return {
      d: "media",
      e: "Dois ângulos opostos pelo vértice medem (3x − 10)° e (x + 40)°. Qual é o valor de x?",
      o,
      x: "Ângulos opostos pelo vértice são iguais, então 3x − 10 = x + 40, isto é, 2x = 50 e x = 25. Conferindo, os dois ângulos medem 65°, pois 3 × 25 − 10 = 65 e 25 + 40 = 65. A condição de opostos pelo vértice é a igualdade, e por isso se igualam as duas expressões do enunciado.\n\n15, 30, 20 e 50 não deixam os ângulos iguais: por exemplo, para x = 30, os ângulos medem 80° e 70°. E 50 é o dobro da solução, o valor de 2x.",
      v: { i: () => { for (let x = 0; x <= 100; x++) if (3 * x - 10 === x + 40) return qualNum(x, o); return -1; } },
    };
  })(),
  (() => {
    const o = ["42°", "84°", "168°", "21°", "48°"];
    return {
      d: "media",
      e: "A bissetriz de um ângulo o divide em dois ângulos iguais. Se o ângulo mede 84°, quanto mede cada parte?",
      o,
      x: "Cada parte é metade do ângulo: 84° ÷ 2 = 42°. Conferindo, 42° + 42° = 84°, e os dois ângulos formados são iguais. A bissetriz é a semirreta que passa pelo interior do ângulo e forma duas partes iguais com os lados dele.\n\n84° é o ângulo inteiro, sem dividir. 168° é o dobro do ângulo. 21° é um quarto do ângulo, como se a bissetriz o dividisse em quatro partes. E 48° não tem relação com a divisão ao meio.",
      v: { i: () => qualGr(84 / 2, o) },
    };
  })(),
  (() => {
    const o = ["4", "2", "8", "6", "1"];
    return {
      d: "media",
      e: "Duas retas paralelas são cortadas por uma transversal, formando oito ângulos. Se um deles mede 40°, quantos dos oito ângulos medem 40°?",
      o,
      x: "Os oito ângulos se dividem em dois grupos: os agudos, iguais a 40°, e os obtusos, iguais a 140°. Como metade deles é aguda, são 4 ângulos de 40° e 4 de 140°. Conferindo, em cada ponto de cruzamento, dois ângulos medem 40° e dois medem 140°.\n\n2 conta só os ângulos de um dos dois pontos de cruzamento. 8 supõe que todos são iguais. 6 e 1 não correspondem à divisão em agudos e obtusos.",
      v: { i: () => { const R = regioes(40); const todos = [...Object.values(R.P0), ...Object.values(R.P1)]; return qualNum(todos.filter((a) => Math.abs(a - 40) < 1e-9).length, o); } },
    };
  })(),
  (() => {
    const o = ["32", "36", "40", "28", "20"];
    return {
      d: "media",
      e: "Os colaterais internos de um par de paralelas cortadas por uma transversal medem 3x e (2x + 20)°. Qual é o valor de x?",
      o,
      x: "Colaterais internos são suplementares: 3x + (2x + 20) = 180, isto é, 5x + 20 = 180, então 5x = 160 e x = 32. Conferindo, os ângulos medem 96° e 84°, e 96° + 84° = 180°.\n\n36, 40, 28 e 20 não os tornam suplementares: por exemplo, para x = 36, os ângulos medem 108° e 92°, que somam 200°. E se fossem alternos internos, a condição seria de igualdade, e não de soma.",
      v: { i: () => { for (let x = 0; x <= 100; x++) if (3 * x + 2 * x + 20 === 180) return qualNum(x, o); return -1; } },
    };
  })(),
  (() => {
    const o = ["25", "50", "10", "35", "20"];
    return {
      d: "media",
      e: "Dois ângulos alternos internos, formados por paralelas cortadas por uma transversal, medem (5x − 20)° e (3x + 30)°. Qual é o valor de x?",
      o,
      x: "Alternos internos são iguais: 5x − 20 = 3x + 30, isto é, 2x = 50 e x = 25. Conferindo, os dois ângulos medem 105°, pois 5 × 25 − 20 = 105 e 3 × 25 + 30 = 105. A condição de alternos internos é a igualdade, e por isso as duas expressões do enunciado devem ser iguais.\n\n50 é o dobro da solução, o valor de 2x. 10, 35 e 20 não os tornam iguais: por exemplo, para x = 35, os ângulos medem 155° e 135°.",
      v: { i: () => { for (let x = 0; x <= 100; x++) if (5 * x - 20 === 3 * x + 30) return qualNum(x, o); return -1; } },
    };
  })(),
  (() => {
    const o = ["90°", "60°", "120°", "180°", "30°"];
    return {
      d: "media",
      e: "Às 3 horas em ponto, qual é o ângulo menor formado entre o ponteiro das horas e o dos minutos?",
      o,
      x: "Às 3 h, o ponteiro dos minutos está no 12, a 0°, e o das horas está no 3, a 3 × 30° = 90°, já que cada hora equivale a 360° ÷ 12 = 30°. O ângulo entre eles é 90°, um ângulo reto. Cada hora no mostrador vale 30°, pois 360° ÷ 12 = 30°, e cada minuto vale 6°.\n\n60° corresponde às 2 h, e 120° às 4 h. 180° corresponde às 6 h, quando os ponteiros ficam opostos. E 30° corresponde à 1 h.",
      v: { i: () => qualGr(relogio(3, 0), o) },
    };
  })(),
  (() => {
    const o = ["15°", "0°", "30°", "45°", "180°"];
    return {
      d: "media",
      e: "Uma reunião começa às 6 h 30 min. Nesse instante, quanto mede o menor ângulo entre os ponteiros do relógio da sala?",
      o,
      x: "Às 6 h 30 min, o ponteiro dos minutos está no 6, a 6 × 30° = 180°. O das horas avançou meia hora desde as 6 h, a 180° + 15° = 195°, pois o ponteiro das horas anda 0,5° por minuto. A diferença é 195° − 180° = 15°.\n\n0° ocorreria se os ponteiros coincidissem, o que não acontece aqui. 30° supõe que o ponteiro das horas avançou uma hora inteira. 45° e 180° ignoram o avanço do ponteiro das horas, tratando as 6 h 30 min como outra configuração.",
      v: { i: () => qualGr(relogio(6, 30), o) },
    };
  })(),
  (() => {
    const o = ["60°", "30°", "120°", "90°", "45°"];
    return {
      d: "media",
      e: "Uma volta completa em torno de um ponto é dividida em 6 ângulos iguais. Quanto mede cada um deles?",
      o,
      x: "Cada ângulo mede 360° ÷ 6 = 60°. Conferindo, seis ângulos de 60° completam 6 × 60° = 360°. Esses ângulos são os de um relógio com marcações a cada 2 horas. Essa divisão vale para qualquer polígono regular de 6 lados: o ângulo central do hexágono regular, isto é, o ângulo entre dois vértices vizinhos vistos do centro, mede 60°.\n\n30° dividiria a volta em 12 partes. 120° dividiria em 3. 90° dividiria em 4. E 45° dividiria em 8.",
      v: { i: () => qualGr(360 / 6, o) },
    };
  })(),
  (() => {
    const o = ["36°", "30°", "40°", "45°", "72°"];
    return {
      d: "media",
      e: "Em torno de um ponto, quatro ângulos medem x, 2x, 3x e 4x. Quanto vale x?",
      o,
      x: "A soma dos ângulos em torno de um ponto é 360°: x + 2x + 3x + 4x = 10x = 360°, então x = 36°. Conferindo, os ângulos medem 36°, 72°, 108° e 144°, e 36 + 72 + 108 + 144 = 360. Como os quatro ângulos estão em torno de um mesmo ponto, eles completam uma volta de 360°.\n\n30° e 40° não completam 360°: com x = 30, a soma é 300°, e com x = 40, é 400°. 45° dá 450°. E 72° é o valor de 2x.",
      v: { i: () => { for (let x = 1; x <= 90; x++) if (x + 2 * x + 3 * x + 4 * x === 360) return qualGr(x, o); return -1; } },
    };
  })(),
  (() => {
    const o = ["120°", "60°", "150°", "90°", "30°"];
    return {
      d: "media",
      e: "Qual é o suplemento do complemento de um ângulo de 30°?",
      o,
      x: "O complemento de 30° é 90° − 30° = 60°. O suplemento de 60° é 180° − 60° = 120°. Conferindo, 60° + 120° = 180°, e 30° + 60° = 90°. A ordem das operações importa: primeiro se calcula o complemento e, sobre o resultado, o suplemento.\n\n60° é só o complemento de 30°, sem calcular o suplemento. 150° é o suplemento de 30°, sem passar pelo complemento. 90° e 30° não resultam das duas operações em sequência.",
      v: { i: () => qualGr(180 - (90 - 30), o) },
    };
  })(),
  (() => {
    const o = ["45°", "30°", "60°", "15°", "75°"];
    return {
      d: "media",
      e: "O suplemento de um ângulo é o triplo do complemento desse mesmo ângulo. Quanto mede o ângulo?",
      o,
      x: "Chamando o ângulo de x, o suplemento é 180° − x e o complemento é 90° − x. A condição é 180 − x = 3(90 − x), isto é, 180 − x = 270 − 3x, então 2x = 90 e x = 45°. Conferindo, o suplemento é 135°, o complemento é 45°, e 135° = 3 × 45°.\n\n30°, 60°, 15° e 75° não satisfazem a condição: para 30°, o suplemento é 150° e o complemento é 60°, e 150° não é o triplo de 60°.",
      v: { i: () => { for (let x = 1; x < 90; x++) if (180 - x === 3 * (90 - x)) return qualGr(x, o); return -1; } },
    };
  })(),
  (() => {
    const o = ["50", "65", "100", "57,5", "25"];
    return {
      d: "media",
      e: "Duas retas paralelas são cortadas por uma transversal. Os ângulos correspondentes (2x + 15)° e 115° são iguais. Qual é o valor de x?",
      o,
      x: "Correspondentes são iguais, então 2x + 15 = 115, isto é, 2x = 100 e x = 50. Conferindo, 2 × 50 + 15 = 115. A condição de correspondentes é a igualdade, o que só vale quando as retas cortadas pela transversal são paralelas.\n\n65 é o suplemento de 115°, e não o valor de x. 100 é o valor de 2x, e não de x. 57,5 divide 115 por 2, sem subtrair o 15 antes. E 25 é a metade da solução.",
      v: { i: () => { for (let x = 0; x <= 200; x += 0.5) if (2 * x + 15 === 115) return qualNum(x, o); return -1; } },
    };
  })(),
  (() => {
    const o = ["40", "60", "35", "20", "80"];
    return {
      d: "media",
      e: "Duas paralelas são cortadas por uma transversal. Os colaterais internos (x + 40)° e (2x + 20)° somam 180°. Qual é o valor de x?",
      o,
      x: "A soma é (x + 40) + (2x + 20) = 180, isto é, 3x + 60 = 180, então 3x = 120 e x = 40. Conferindo, os ângulos medem 80° e 100°, e 80° + 100° = 180°. A condição de colaterais internos é a soma de 180°, e por isso os dois ângulos não são iguais, e sim suplementares.\n\n60, 35, 20 e 80 não fecham a soma de 180°: por exemplo, para x = 60, os ângulos medem 100° e 140°, que somam 240°.",
      v: { i: () => { for (let x = 0; x <= 100; x++) if (x + 40 + 2 * x + 20 === 180) return qualNum(x, o); return -1; } },
    };
  })(),
  (() => {
    const o = ["60°", "45°", "30°", "120°", "135°"];
    return {
      d: "media",
      e: "Um ângulo mede dois terços de um ângulo reto. Quantos graus ele tem?",
      o,
      x: "Um ângulo reto mede 90°, e dois terços dele são 2/3 × 90° = 60°. Por partes, um terço de 90° é 30°, e dois terços, 60°. Conferindo, 60° + 30° = 90°. Uma fração de um ângulo reto se calcula multiplicando a fração por 90°, e dois terços de 90° ficam abaixo do ângulo reto.\n\n45° é metade de 90°. 30° é apenas um terço. 120° e 135° passam de 90°, o que não combina com uma fração menor que 1 do ângulo reto.",
      v: { i: () => qualGr((2 / 3) * 90, o) },
    };
  })(),
  (() => {
    const o = ["90°", "89°", "91°", "90°30'", "80°"];
    return {
      d: "media",
      e: "Somando medidas de ângulos em graus e minutos, sabendo que 60 minutos formam 1 grau, quanto vale 72°30' + 17°30'?",
      o,
      x: "Somam-se os minutos, 30' + 30' = 60', que formam 1°, e somam-se os graus, 72° + 17° = 89°. Então 89° + 1° = 90°. Conferindo em graus decimais, 72,5° + 17,5° = 90°. Nas somas de graus e minutos, o vai-um ocorre quando os minutos chegam a 60, e não a 100 como nas somas decimais.\n\n89° esquece de converter os 60' em 1°. 91° soma um grau a mais. 90°30' soma os minutos e ainda deixa 30' sobrando. E 80° erra a soma dos graus.",
      v: { i: () => qualGr(72.5 + 17.5, o.map((t) => (t === "90°30'" ? "90,5" : t))) },
    };
  })(),
  (() => {
    const o = ["15'", "25'", "45'", "30'", "4'"];
    return {
      d: "media",
      e: "Um grau tem 60 minutos. Quantos minutos tem um quarto de grau?",
      o,
      x: "Um quarto de grau é 60' ÷ 4 = 15'. Conferindo, 4 × 15' = 60', que é 1°. A conversão entre graus e minutos segue a mesma lógica das horas e minutos: 1 grau tem 60 minutos, e uma fração de grau é multiplicada por 60 para virar minutos. Por isso, meio grau são 30 minutos, um terço de grau são 20 minutos e um quarto de grau são 15 minutos, sem precisar de fórmulas.\n\n25' e 45' não dividem 60 em quatro partes iguais. 30' é meio grau. E 4' é o número de partes, e não a medida de uma delas.",
      v: { i: () => qualGr(60 / 4, o) },
    };
  })(),
  (() => {
    const o = ["50,4°", "50,24°", "50,6°", "50,04°", "50,2°"];
    return {
      d: "media",
      e: "Escrevendo 50°24' como um número decimal de graus, sabendo que 60 minutos formam 1 grau, qual é o resultado?",
      o,
      x: "Os 24 minutos valem 24 ÷ 60 = 0,4 grau. Então 50°24' = 50° + 0,4° = 50,4°. Conferindo, 0,4 × 60 = 24 minutos. Para converter minutos em fração de grau, divide-se o número de minutos por 60.\n\n50,24° lê os minutos como casas decimais do grau, o que confunde minuto com centésimo. 50,6° arredonda os 24 minutos para 36. 50,04° desloca a vírgula uma casa a mais. E 50,2° usa 12 minutos.",
      v: { i: () => qualGr(50 + 24 / 60, o) },
    };
  })(),
  (() => {
    const o = ["150°", "120°", "180°", "135°", "210°"];
    return {
      d: "media",
      e: "Um relógio de parede marca exatamente 5 horas. Que ângulo menor os ponteiros formam?",
      o,
      x: "Às 5 h, o ponteiro dos minutos está no 12, a 0°, e o das horas está no 5, a 5 × 30° = 150°. O ângulo menor entre eles é 150°, pois 150° < 210°, que é o outro ângulo, 360° − 150°. Por isso, o ângulo entre os ponteiros nas horas cheias é sempre um múltiplo de 30°.\n\n120° corresponde às 4 h, e 180° às 6 h. 135° não corresponde a uma hora cheia. E 210° é o ângulo maior entre os ponteiros, e não o menor.",
      v: { i: () => qualGr(relogio(5, 0), o) },
    };
  })(),
  (() => {
    const o = ["40°", "50°", "20°", "80°", "10°"];
    return {
      d: "media",
      e: "O dobro do complemento de um ângulo é 100°. Quanto mede o ângulo?",
      o,
      x: "Se o dobro do complemento é 100°, o complemento é 50°, e o ângulo é 90° − 50° = 40°. Pela equação, 2(90° − x) = 100°, então 90° − x = 50° e x = 40°. O complemento de um ângulo é o que falta para 90°, e por isso o dobro dele fixa o ângulo.\n\n50° é o complemento, e não o ângulo. 20° e 10° usam números que não satisfazem a condição: para 20°, o dobro do complemento é 140°. E 80° é o dobro do ângulo correto.",
      v: { i: () => { for (let x = 1; x < 90; x++) if (2 * (90 - x) === 100) return qualGr(x, o); return -1; } },
    };
  })(),
  (() => {
    const o = ["110°", "70°", "100°", "90°", "130°"];
    return {
      d: "media",
      e: "Um ângulo excede o seu suplemento em 40°. Quanto mede esse ângulo?",
      o,
      x: "Chamando o ângulo de x, o suplemento é 180° − x, e a condição é x − (180° − x) = 40°, isto é, 2x = 220° e x = 110°. Conferindo, o suplemento é 70°, e 110° − 70° = 40°. O suplemento de 110° é 70°, que é menor.\n\n70° é o suplemento, e não o ângulo. 100° e 130° não deixam a diferença em 40°: 100° − 80° = 20° e 130° − 50° = 80°. E 90° tem diferença 0 para o seu suplemento.",
      v: { i: () => { for (let x = 1; x < 180; x++) if (x - (180 - x) === 40) return qualGr(x, o); return -1; } },
    };
  })(),
  (() => {
    const o = ["17", "14", "20", "13", "34"];
    return {
      d: "media",
      e: "A bissetriz de um ângulo de (4x + 6)° forma partes de (x + 20)° cada uma. Qual é o valor de x?",
      o,
      x: "Como a bissetriz divide o ângulo em duas partes iguais, (4x + 6) = 2(x + 20), isto é, 4x + 6 = 2x + 40, então 2x = 34 e x = 17. Conferindo, o ângulo mede 74°, e cada parte, 37°, pois 17 + 20 = 37. Como a bissetriz divide o ângulo ao meio, o ângulo inteiro vale o dobro de uma das partes, o que dá a equação do enunciado.\n\n14, 20 e 13 não igualam os dois lados. E 34 é o valor de 2x, e não de x.",
      v: { i: () => { for (let x = 0; x <= 100; x++) if (4 * x + 6 === 2 * (x + 20)) return qualNum(x, o); return -1; } },
    };
  })(),
  (() => {
    const o = ["30", "35", "25", "40", "20"];
    return {
      d: "media",
      e: "Duas retas paralelas são cortadas por uma transversal. Os ângulos alternos externos (4x + 10)° e 130° são iguais. Qual é o valor de x?",
      o,
      x: "Alternos externos são iguais quando as retas são paralelas, então 4x + 10 = 130, isto é, 4x = 120 e x = 30. Conferindo, 4 × 30 + 10 = 130. A condição de alternos externos é a igualdade, e eles ficam fora das paralelas e em lados opostos da transversal.\n\n35, 25, 40 e 20 não dão 130°: por exemplo, para x = 35, o ângulo mede 150°. Se os ângulos fossem colaterais, a condição seria de soma 180°, e x seria 15.",
      v: { i: () => { for (let x = 0; x <= 100; x++) if (4 * x + 10 === 130) return qualNum(x, o); return -1; } },
    };
  })(),
  (() => {
    const o = ["20", "15", "25", "30", "10"];
    return {
      d: "media",
      e: "Dois ângulos adjacentes formam um ângulo raso e medem (5x + 10)° e (3x + 10)°. Qual é o valor de x?",
      o,
      x: "Juntos formam 180°: (5x + 10) + (3x + 10) = 180, isto é, 8x + 20 = 180, então 8x = 160 e x = 20. Conferindo, os ângulos medem 110° e 70°, e 110° + 70° = 180°. Ângulos adjacentes que formam um ângulo raso são suplementares, e por isso somam 180°, sem serem iguais.\n\n15, 25, 30 e 10 não fecham 180°: por exemplo, para x = 25, os ângulos medem 135° e 85°, que somam 220°.",
      v: { i: () => { for (let x = 0; x <= 100; x++) if (5 * x + 10 + 3 * x + 10 === 180) return qualNum(x, o); return -1; } },
    };
  })(),
  (() => {
    const o = ["72°", "60°", "90°", "36°", "45°"];
    return {
      d: "media",
      e: "Quantos graus tem um ângulo que corresponde a um quinto de uma volta completa?",
      o,
      x: "Um quinto de volta é 360° ÷ 5 = 72°. Conferindo, cinco ângulos de 72° completam 5 × 72° = 360°. É o ângulo central de um pentágono regular. Esse ângulo aparece, por exemplo, no pentágono regular, em que os vértices estão a 72° uns dos outros vistos do centro, já que cinco ângulos iguais completam uma volta e cada um deles vale, portanto, a quinta parte de 360°, isto é, 72°.\n\n60° é um sexto de volta. 90° é um quarto. 36° é um décimo. E 45° é um oitavo.",
      v: { i: () => qualGr(360 / 5, o) },
    };
  })(),
  (() => {
    const o = ["60°", "90°", "30°", "120°", "45°"];
    return {
      d: "media",
      e: "Dois ângulos β e γ formam juntos um ângulo raso, e β é o dobro de γ. Quanto mede γ?",
      o,
      x: "Como β + γ = 180° e β = 2γ, tem-se 3γ = 180° e γ = 60°. Então β = 120°. Conferindo, 120° + 60° = 180°, e 120° é o dobro de 60°. Como β e γ formam um ângulo raso, somam 180°, e como β é o dobro de γ, o total corresponde a 3 partes iguais.\n\n90° dividiria o ângulo raso em duas partes iguais. 30° dá β = 60° e soma apenas 90°. 120° é o valor de β, e não de γ. E 45° dá β = 90° e soma 135°.",
      v: { i: () => { for (let g = 1; g < 180; g++) if (g + 2 * g === 180) return qualGr(g, o); return -1; } },
    };
  })(),

  /* ---------------------------------------------------------- difíceis --- */
  (() => {
    const o = ["52°", "60°", "72°", "40°", "48°"];
    return {
      d: "dificil",
      e: "Em torno de um ponto, cinco ângulos medem x, x + 10°, x + 20°, x + 30° e x + 40°. Quanto mede o menor deles?",
      o,
      x: "A soma dos cinco ângulos é 360°: 5x + (10 + 20 + 30 + 40) = 5x + 100 = 360, então 5x = 260 e x = 52°. Os ângulos medem 52°, 62°, 72°, 82° e 92°. Conferindo, 52 + 62 + 72 + 82 + 92 = 360. Os ângulos formam uma progressão de 10 em 10, e por isso o do meio, 72°, é a média dos cinco.\n\n60° daria soma 400°. 72° é o ângulo do meio, e não o menor. 40° e 48° dão somas de 300° e 340°, abaixo de 360°.",
      v: { i: () => { for (let x = 1; x <= 100; x++) if (x + (x + 10) + (x + 20) + (x + 30) + (x + 40) === 360) return qualGr(x, o); return -1; } },
    };
  })(),
  (() => {
    const o = ["100°", "80°", "90°", "120°", "144°"];
    return {
      d: "dificil",
      e: "Dois ângulos suplementares estão na razão de 5 para 4. Quanto mede o maior deles?",
      o,
      x: "Chamando os ângulos de 5k e 4k, a soma é 9k = 180°, então k = 20° e o maior é 5 × 20° = 100°. Conferindo, o menor mede 80°, e 100° + 80° = 180°, com razão 100/80 = 5/4. Por isso, o maior ângulo vale 5 partes das 9 em que o ângulo raso foi dividido.\n\n80° é o menor ângulo. 90° e 120° não têm razão 5 para 4 com o suplemento: 90° e 90° têm razão 1, e 120° e 60° têm razão 2. E 144° tem razão 4 para 1 com 36°.",
      v: { i: () => { for (let k = 1; k <= 40; k++) if (5 * k + 4 * k === 180) return qualGr(5 * k, o); return -1; } },
    };
  })(),
  (() => {
    const o = ["70°", "80°", "60°", "75°", "85°"];
    return {
      d: "dificil",
      e: "Um ângulo excede em 10° o triplo do seu complemento. Quanto mede esse ângulo?",
      o,
      x: "Chamando o ângulo de x, o complemento é 90° − x, e a condição é x = 3(90° − x) + 10°, isto é, x = 280° − 3x, então 4x = 280° e x = 70°. Conferindo, o complemento é 20°, o triplo é 60°, e 60° + 10° = 70°. Esse problema combina a ideia de complemento com a de múltiplo.\n\n80°, 60°, 75° e 85° não satisfazem a condição: para 80°, o complemento é 10°, o triplo é 30°, e 30° + 10° = 40°, e não 80°.",
      v: { i: () => { for (let x = 1; x < 90; x++) if (x === 3 * (90 - x) + 10) return qualGr(x, o); return -1; } },
    };
  })(),
  (() => {
    const o = ["115°", "125°", "105°", "120°", "100°"];
    return {
      d: "dificil",
      e: "Ao marcar 10 h 10 min, o relógio mostra os ponteiros separados por um ângulo menor de quantos graus?",
      o,
      x: "Às 10 h 10 min, o ponteiro dos minutos está no 2, a 6 × 10 = 60°. O das horas está a 10 × 30° + 10 × 0,5° = 305°. A diferença é 305° − 60° = 245°, que é maior que 180°, então o ângulo menor é 360° − 245° = 115°.\n\n120° ignora o avanço de 5° do ponteiro das horas nos 10 minutos. 125° e 105° erram o sinal desse avanço ou a posição do ponteiro dos minutos. E 100° não corresponde a nenhuma das contas feitas de forma correta.",
      v: { i: () => qualGr(relogio(10, 10), o) },
    };
  })(),
  (() => {
    const o = ["100°", "80°", "110°", "70°", "90°"];
    return {
      d: "dificil",
      e: "Duas paralelas são cortadas por uma transversal. Os alternos internos (2x + 20)° e (3x − 10)° são iguais. Quanto mede o colateral interno a um deles?",
      o,
      x: "Igualando, 2x + 20 = 3x − 10, então x = 30, e cada alterno interno mede 2 × 30 + 20 = 80°. Um colateral interno é suplementar a ele: 180° − 80° = 100°. O colateral interno é sempre o suplemento do alterno interno.\n\n80° é a medida dos próprios alternos internos, que são iguais, e não a do colateral. 110°, 70° e 90° não resultam de 180° − 80°. O suplemento de um ângulo de 80° é sempre 100°.",
      v: { i: () => { for (let x = 0; x <= 100; x++) if (2 * x + 20 === 3 * x - 10) return qualGr(parceiro("colateraisInternos", 2 * x + 20), o); return -1; } },
    };
  })(),
  (() => {
    const o = ["90°", "60°", "30°", "120°", "45°"];
    return {
      d: "dificil",
      e: "Três ângulos consecutivos medem x, 2x e 3x e, juntos, formam um ângulo raso. Quanto mede o maior deles?",
      o,
      x: "A soma é 180°: x + 2x + 3x = 6x = 180°, então x = 30°. Os ângulos medem 30°, 60° e 90°, e o maior é 90°. Conferindo, 30° + 60° + 90° = 180°. Como os três ângulos formam um ângulo raso, somam 180°, e a condição de serem múltiplos de x leva a uma equação simples com uma só incógnita, que se resolve dividindo 180° por 6.\n\n60° é o ângulo do meio. 30° é o menor. 120° e 45° não aparecem entre os três ângulos, que são 30°, 60° e 90°.",
      v: { i: () => { for (let x = 1; x <= 60; x++) if (x + 2 * x + 3 * x === 180) return qualGr(3 * x, o); return -1; } },
    };
  })(),
  (() => {
    const o = ["210°", "175°", "35°", "180°", "245°"];
    return {
      d: "dificil",
      e: "O ponteiro dos minutos de um relógio gira 6° a cada minuto. Quantos graus ele percorre em 35 minutos?",
      o,
      x: "Em 60 minutos, o ponteiro dá uma volta de 360°, então percorre 360° ÷ 60 = 6° por minuto. Em 35 minutos, são 35 × 6° = 210°. Conferindo, 35 minutos são 7/12 de uma hora, e 7/12 de 360° é 210°. Como o ponteiro dos minutos gira 6° a cada minuto, o ângulo percorrido é sempre 6 vezes o número de minutos.\n\n175° usa 5° por minuto. 35° confunde os minutos com os graus. 180° corresponde a 30 minutos. E 245° usa 7° por minuto.",
      v: { i: () => qualGr(35 * (360 / 60), o) },
    };
  })(),
  (() => {
    const o = ["30", "15", "60", "45", "90"];
    return {
      d: "dificil",
      e: "O ponteiro das horas de um relógio gira 0,5° por minuto. Em quantos minutos ele percorre 15°?",
      o,
      x: "Em 12 horas, o ponteiro das horas dá uma volta de 360°, o que dá 360° ÷ 720 minutos = 0,5° por minuto. Para percorrer 15°, leva 15° ÷ 0,5° = 30 minutos. Conferindo, em 30 minutos, 30 × 0,5° = 15°. O ponteiro das horas é 12 vezes mais lento que o dos minutos, o que explica os 0,5° por minuto.\n\n15 supõe 1° por minuto. 60 corresponde a 30°, uma hora inteira. 45 corresponde a 22,5°. E 90 corresponde a 45°.",
      v: { i: () => qualNum(15 / (360 / 720), o) },
    };
  })(),
  (() => {
    const o = ["≈ 16,4", "15", "18", "20", "16"];
    return {
      d: "dificil",
      e: "Às 12 horas, os ponteiros estão juntos. Depois de quantos minutos, aproximadamente, eles formam um ângulo de 90° pela primeira vez?",
      o,
      x: "O ponteiro dos minutos gira 6° por minuto e o das horas, 0,5°, então o ângulo entre eles cresce 5,5° por minuto. Para chegar a 90°, leva 90 ÷ 5,5 ≈ 16,36 minutos, isto é, cerca de 16,4 min, ou 16 minutos e 22 segundos.\n\n15 supõe que os ponteiros formam 90° às 12 h 15 min, como se o ponteiro das horas ficasse parado, o que dá 82,5°. 18 e 20 passam do ângulo de 90°. E 16 é uma aproximação inteira, que dá 88°.",
      v: { i: () => { for (let m = 0; m < 60; m += 0.001) if (6 * m - 0.5 * m >= 90) return qualNum(m, o.map((t) => t.replace("≈ ", "")), 0.005); return -1; } },
    };
  })(),
  (() => {
    const o = ["140°", "40°", "120°", "126°", "100°"];
    return {
      d: "dificil",
      e: "Dois ângulos colaterais internos, formados por paralelas cortadas por uma transversal, estão na razão de 2 para 7. Quanto mede o maior deles?",
      o,
      x: "Colaterais internos somam 180°, e as partes da razão somam 2 + 7 = 9. Cada parte vale 180° ÷ 9 = 20°, então os ângulos medem 40° e 140°, e o maior é 140°. Conferindo, 40° + 140° = 180°, e 40/140 = 2/7.\n\n40° é o menor ângulo. 120° e 126° não têm razão 2 para 7 com o seu suplemento: 120° e 60° têm razão 2 para 1, e 126° e 54° têm razão 7 para 3. E 100° e 80° têm razão 5 para 4.",
      v: { i: () => { for (let k = 1; k <= 40; k++) if (2 * k + 7 * k === 180) return qualGr(7 * k, o); return -1; } },
    };
  })(),
];
