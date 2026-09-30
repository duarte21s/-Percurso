/* Rascunho — Exatas nível militar / Eletromagnetismo e indução.

   µ₀ = 4π · 10⁻⁷ T·m/A. A explicação usa as fórmulas prontas (campo do
   fio, da espira e do solenoide, F = qvB, ε = BLv, lei de Faraday); a
   conferência chega ao número por outro caminho: campos pela lei de
   Biot–Savart integrada numericamente ao longo dos condutores, forças
   pelo produto vetorial, trajetórias de partículas simuladas passo a passo
   (Runge–Kutta), fluxos por integral sobre a superfície e forças
   eletromotrizes pela derivada numérica do fluxo. As alternativas são
   lidas com a notação científica (4 · 10⁻³ N) e as unidades. */

import { unicoV, lerExpr, integra, deriva, simula, bissecao, perto } from "./_exatas.mjs";

export const materia = "exatas-militar";
export const tema = "Eletromagnetismo e indução";
export const arquivo = "exatas-militar__eletromagnetismo-e-inducao";

const MU0 = 4 * Math.PI * 1e-7;
const soma = (a, b) => a.map((x, i) => x + b[i]);
const menos = (a, b) => a.map((x, i) => x - b[i]);
const vezes = (k, a) => a.map((x) => k * x);
const cruz = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const escalar = (a, b) => a.reduce((s, x, i) => s + x * b[i], 0);
const norma = (a) => Math.hypot(...a);

/* Biot–Savart: campo no ponto P de uma corrente I ao longo da curva r(t),
   de derivada dr(t), com t de t0 a t1. */
const biot = (r, dr, t0, t1, I, P, n = 2000) =>
  [0, 1, 2].map((k) => ((MU0 * I) / (4 * Math.PI)) * integra((t) => { const s = menos(P, r(t)); return cruz(dr(t), s)[k] / norma(s) ** 3; }, t0, t1, n));
/* fio retilíneo infinito, com corrente I no sentido do vetor unitário u,
   passando pelo ponto A. A curva é parametrizada pelo ângulo visto de P
   (t entre −π/2 e π/2), para que a integral seja finita. */
const fio = (A, u, I, P) => {
  const pe = soma(A, vezes(escalar(menos(P, A), u), u)), d = norma(menos(P, pe));
  const lim = Math.PI / 2 - 1e-4;
  return biot((t) => soma(pe, vezes(d * Math.tan(t), u)), (t) => vezes(d / Math.cos(t) ** 2, u), -lim, lim, I, P, 4000);
};
/* espira circular de raio R no plano z = C[2], centro C, corrente no sentido anti-horário visto de +z */
const espira = (C, R, I, P, n = 2000) =>
  biot((t) => soma(C, [R * Math.cos(t), R * Math.sin(t), 0]), (t) => [-R * Math.sin(t), R * Math.cos(t), 0], 0, 2 * Math.PI, I, P, n);
/* partícula de carga q e massa m em campos uniformes E e B; estado [x, y, z, vx, vy, vz] */
const lorentz = (q, m, E, B) => (t, y) => { const v = y.slice(3); return [...v, ...vezes(q / m, soma(E, cruz(v, B)))]; };

/* direções no plano da página: x para a direita, y para cima, z saindo da página */
const DIRECOES = [["para a direita", [1, 0, 0]], ["para a esquerda", [-1, 0, 0]], ["para cima", [0, 1, 0]], ["para baixo", [0, -1, 0]], ["saindo da página", [0, 0, 1]], ["entrando na página", [0, 0, -1]]];
const direcao = (v) => { const u = vezes(1 / norma(v), v); const d = DIRECOES.find(([, w]) => escalar(w, u) > 1 - 1e-6); return d ? d[0] : null; };

/* valor da alternativa em unidades do SI: "4 · 10⁻³ N", "π · 10⁻⁵ T", "≈ 0,14 s", "8,3 mm" */
const SUP = { "⁰": "0", "¹": "1", "²": "2", "³": "3", "⁴": "4", "⁵": "5", "⁶": "6", "⁷": "7", "⁸": "8", "⁹": "9", "⁻": "-" };
const FATOR = { "N·m": 1, "m/s": 1, Wb: 1, Hz: 1, mm: 1e-3, cm: 1e-2, T: 1, N: 1, A: 1, V: 1, s: 1, m: 1, W: 1, J: 1, "%": 0.01, "°": 1 };
const valor = (t) => {
  const m = String(t).trim().replace(/^≈\s*/, "").match(/^(.*?)\s*(N·m|m\/s|Wb|Hz|mm|cm|T|N|A|V|s|m|W|J|%|°)?$/);
  const s = m[1].replace(/10([⁻⁰¹²³⁴⁵⁶⁷⁸⁹]+)/g, (x, e) => `10**(${[...e].map((c) => SUP[c]).join("")})`).replace(/\.(?=\d{3})/g, "");
  return lerExpr(s) * (FATOR[m[2]] ?? 1);
};
/* índice da única alternativa com o valor x (tolerância relativa; zero só casa com zero) */
const qual = (x, alt, tol = 1e-6) => unicoV(alt.map((t) => { let v; try { v = valor(t); } catch { return false; } return x === 0 ? v === 0 : Math.abs(v - x) <= tol * Math.abs(x); }));

export const questoes = [
  /* ------------------------------------------------------------ fáceis --- */
  (() => {
    const o = ["4 · 10⁻³ N", "4 · 10³ N", "2,5 · 10⁻² N", "1,6 · 10⁻¹⁰ N", "0 N"];
    return {
      d: "facil",
      e: "Uma partícula com carga de 2 µC se move a 5 · 10³ m/s, perpendicularmente a um campo magnético uniforme de 0,4 T. Qual é a intensidade da força magnética sobre ela?",
      o,
      x: "A força magnética sobre uma carga em movimento é F = |q| · v · B · sen θ, em que θ é o ângulo entre a velocidade e o campo. Com θ = 90°, sen θ = 1: F = 2 · 10⁻⁶ · 5 · 10³ · 0,4 = 4 · 10⁻³ N. A força é perpendicular à velocidade e ao campo ao mesmo tempo; por isso muda a direção do movimento, mas não a rapidez.\n\n4 · 10³ N esquece o prefixo micro da carga. 2,5 · 10⁻² N divide pelo campo em vez de multiplicar. 1,6 · 10⁻¹⁰ N divide pela velocidade. E 0 N seria a resposta para uma carga que se move na direção do campo, e não perpendicularmente a ele.",
      v: { i: () => qual(norma(vezes(2e-6, cruz([5e3, 0, 0], [0, 0.4, 0]))), o) },
    };
  })(),
  (() => {
    const o = ["0 N", "3 · 10⁻² N", "6 · 10⁻² N", "1,2 · 10⁻¹ N", "1,5 · 10⁻² N"];
    return {
      d: "facil",
      e: "Uma partícula com carga de 3 µC se move a 2 · 10⁴ m/s na mesma direção e no mesmo sentido de um campo magnético uniforme de 0,5 T. Qual é a intensidade da força magnética sobre ela?",
      o,
      x: "Em F = |q| · v · B · sen θ, o ângulo entre a velocidade e o campo é θ = 0°, e sen 0° = 0: a força magnética é nula. A partícula segue em linha reta, com velocidade constante, como se o campo não existisse. O campo magnético só age sobre a componente da velocidade perpendicular a ele.\n\n3 · 10⁻² N é o produto q · v · B, que seria a força se a velocidade fosse perpendicular ao campo. 6 · 10⁻² N multiplica só a carga pela velocidade. 1,2 · 10⁻¹ N divide q · v pelo campo. E 1,5 · 10⁻² N é metade da força máxima, como se o ângulo fosse de 30°.",
      v: { i: () => qual(norma(vezes(3e-6, cruz([2e4, 0, 0], [0.5, 0, 0]))), o) },
    };
  })(),
  (() => {
    const o = ["0,5 N", "1 N", "12,5 N", "0,02 N", "0,25 N"];
    return {
      d: "facil",
      e: "Um trecho de 0,5 m de um fio retilíneo, percorrido por uma corrente de 5 A, está num campo magnético uniforme de 0,2 T, perpendicular ao fio. Qual é a intensidade da força magnética sobre esse trecho?",
      o,
      x: "A força sobre um fio retilíneo percorrido por corrente é F = B · I · L · sen θ, com θ o ângulo entre o fio e o campo. Com o fio perpendicular ao campo, sen θ = 1: F = 0,2 · 5 · 0,5 = 0,5 N. A força é perpendicular ao fio e ao campo, com o sentido dado pela regra da mão direita.\n\n1 N esquece o comprimento do fio e multiplica só B · I. 12,5 N divide I · L pelo campo. 0,02 N divide B · L pela corrente. E 0,25 N é metade do valor certo, como se o fio formasse 30° com o campo.",
      /* F = I L × B */
      v: { i: () => qual(norma(cruz(vezes(5, [0.5, 0, 0]), [0, 0.2, 0])), o) },
    };
  })(),
  (() => {
    const o = ["1 · 10⁻⁵ T", "2 · 10⁻⁵ T", "4 · 10⁻⁷ T", "3,14 · 10⁻⁵ T", "2 · 10⁻⁶ T"];
    return {
      d: "facil",
      e: "Com µ₀ = 4π · 10⁻⁷ T·m/A, qual é a intensidade do campo magnético a 20 cm de um fio retilíneo muito longo percorrido por uma corrente de 10 A?",
      o,
      x: "O campo de um fio longo, a uma distância d, é B = µ₀I/(2πd). Com d = 0,2 m: B = 4π · 10⁻⁷ · 10/(2π · 0,2) = 2 · 10⁻⁷ · 10/0,2 = 1 · 10⁻⁵ T. As linhas de campo são circunferências em torno do fio, e o campo diminui na proporção inversa da distância.\n\n2 · 10⁻⁵ T esquece o 2 do denominador. 4 · 10⁻⁷ T multiplica pela distância em vez de dividir. 3,14 · 10⁻⁵ T usa a fórmula do centro de uma espira circular, µ₀I/(2R). E 2 · 10⁻⁶ T esquece de dividir pela distância.",
      v: { i: () => qual(norma(fio([0, 0, 0], [0, 0, 1], 10, [0.2, 0, 0])), o, 1e-5) },
    };
  })(),
  (() => {
    const o = ["π · 10⁻⁵ T", "2π · 10⁻⁵ T", "1 · 10⁻⁵ T", "π · 10⁻⁷ T", "0,5π · 10⁻⁵ T"];
    return {
      d: "facil",
      e: "Com µ₀ = 4π · 10⁻⁷ T·m/A, qual é a intensidade do campo magnético no centro de uma espira circular de 10 cm de raio percorrida por uma corrente de 5 A?",
      o,
      x: "No centro de uma espira circular, B = µ₀I/(2R). Com R = 0,1 m: B = 4π · 10⁻⁷ · 5/(2 · 0,1) = 4π · 10⁻⁷ · 25 = π · 10⁻⁵ T ≅ 3,14 · 10⁻⁵ T. Todos os trechos da espira contribuem com campo no mesmo sentido no centro, perpendicular ao plano dela.\n\n2π · 10⁻⁵ T esquece o 2 do denominador. 1 · 10⁻⁵ T usa a fórmula do fio retilíneo longo, µ₀I/(2πd). π · 10⁻⁷ T usa o raio em centímetros, 10 em vez de 0,1. E 0,5π · 10⁻⁵ T é o campo no centro de uma semicircunferência, metade da espira.",
      v: { i: () => qual(norma(espira([0, 0, 0], 0.1, 5, [0, 0, 0])), o, 1e-6) },
    };
  })(),
  (() => {
    const o = ["0,1 Wb", "2,5 Wb", "0,4 Wb", "0 Wb", "0,05 Wb"];
    return {
      d: "facil",
      e: "Uma superfície plana de 0,2 m² está num campo magnético uniforme de 0,5 T, perpendicular a ela. Qual é o fluxo magnético através da superfície?",
      o,
      x: "O fluxo magnético é Φ = B · A · cos θ, em que θ é o ângulo entre o campo e a normal (a reta perpendicular) à superfície. Com o campo perpendicular à superfície, ele é paralelo à normal: θ = 0°, cos θ = 1, e Φ = 0,5 · 0,2 = 0,1 Wb. O fluxo mede quantas linhas de campo atravessam a superfície.\n\n2,5 Wb divide o campo pela área. 0,4 Wb divide a área pelo campo. 0 Wb confunde o campo perpendicular à superfície com o campo paralelo a ela, que não a atravessa. E 0,05 Wb multiplica por cos 60°, um ângulo que não aparece na situação.",
      /* integral do campo normal sobre um retângulo de 0,4 m × 0,5 m */
      v: { i: () => qual(integra(() => integra(() => 0.5, 0, 0.5, 20), 0, 0.4, 20), o, 1e-9) },
    };
  })(),
  (() => {
    const o = ["200 V", "4 V", "400 V", "2 V", "20 V"];
    return {
      d: "facil",
      e: "O fluxo magnético através de cada espira de uma bobina de 50 espiras cai uniformemente de 0,6 Wb para 0,2 Wb em 0,1 s. Qual é a intensidade da força eletromotriz média induzida na bobina?",
      o,
      x: "Pela lei de Faraday, a força eletromotriz induzida é ε = N · |ΔΦ|/Δt. A variação do fluxo em cada espira é 0,6 − 0,2 = 0,4 Wb, e então ε = 50 · 0,4/0,1 = 200 V. Pela lei de Lenz, a corrente induzida tem o sentido que se opõe à queda do fluxo, tentando mantê-lo.\n\n4 V esquece o número de espiras. 400 V soma os fluxos inicial e final (0,8 Wb) em vez de subtrair. 2 V multiplica pelo intervalo de tempo em vez de dividir. E 20 V esquece de dividir pelo tempo.",
      v: { i: () => qual(50 * Math.abs(deriva((t) => 0.6 - (0.4 * t) / 0.1, 0.05)), o, 1e-6) },
    };
  })(),
  (() => {
    const o = ["11 V", "4.400 V", "220 V", "5.500 V", "8,8 V"];
    return {
      d: "facil",
      e: "Um transformador ideal tem 500 espiras no primário e 25 no secundário. Se o primário é ligado a uma tensão alternada de 220 V, qual é a tensão no secundário?",
      o,
      x: "Num transformador ideal, as tensões são proporcionais ao número de espiras: Us/Up = Ns/Np. Então Us = 220 · 25/500 = 220/20 = 11 V. Com menos espiras no secundário, o transformador é abaixador de tensão, e a corrente no secundário fica maior que a do primário, na mesma proporção.\n\n4.400 V inverte a razão, como num transformador elevador. 220 V supõe que o transformador não altere a tensão. 5.500 V multiplica a tensão pelo número de espiras do secundário. E 8,8 V divide a tensão pelas espiras do secundário, sem usar as do primário.",
      /* o mesmo fluxo senoidal atravessa as duas bobinas: amplitude fixada pelo primário (220 V eficazes, 60 Hz);
         a tensão eficaz do secundário sai da integral de (Ns · dΦ/dt)² num período */
      v: { i: () => { const w = 120 * Math.PI, T = 1 / 60; const F0 = (220 * Math.SQRT2) / (500 * w); const fl = (t) => F0 * Math.sin(w * t); return qual(Math.sqrt(integra((t) => (25 * deriva(fl, t, 1e-7)) ** 2, 0, T, 4000) / T), o, 1e-5); } },
    };
  })(),
  (() => {
    const o = ["4 cm", "2 cm", "1 cm", "8 cm", "25 m"];
    return {
      d: "facil",
      e: "Um próton, de massa 1,6 · 10⁻²⁷ kg e carga 1,6 · 10⁻¹⁹ C, entra com velocidade de 2 · 10⁶ m/s perpendicularmente às linhas de um campo magnético uniforme de 0,5 T. Qual é o raio da trajetória circular que ele descreve?",
      o,
      x: "A força magnética faz o papel de resultante centrípeta: q · v · B = m · v²/r, e daí r = m · v/(q · B) = 1,6 · 10⁻²⁷ · 2 · 10⁶/(1,6 · 10⁻¹⁹ · 0,5) = 3,2 · 10⁻²¹/(8 · 10⁻²⁰) = 0,04 m = 4 cm. Quanto mais rápida ou mais pesada a partícula, maior o raio; quanto mais forte o campo, menor.\n\n2 cm esquece o campo no denominador. 1 cm multiplica pelo campo em vez de dividir. 8 cm é o diâmetro da trajetória, e não o raio. E 25 m inverte a fração, calculando q · B/(m · v).",
      /* simula uma volta e mede a maior distância ao ponto de entrada, que é o diâmetro */
      v: { i: () => { let mx = 0; simula(lorentz(1.6e-19, 1.6e-27, [0, 0, 0], [0, 0, 0.5]), [0, 0, 0, 2e6, 0, 0], 1e-11, (t, y) => { mx = Math.max(mx, Math.hypot(y[0], y[1])); return t > 1.3e-7; }); return qual(mx / 2, o, 1e-5); } },
    };
  })(),
  (() => {
    const o = ["Para cima, no plano da página", "Para baixo, no plano da página", "Para a direita", "Para a esquerda", "Saindo da página"];
    return {
      d: "facil",
      e: "Uma partícula com carga positiva se move para a direita, no plano da página, dentro de um campo magnético uniforme que entra na página. Qual é a direção e o sentido da força magnética sobre ela nesse instante?",
      o,
      x: "A força é F = q · v × B. Pela regra da mão direita, os dedos apontam no sentido da velocidade (para a direita) e se curvam no sentido do campo (para dentro da página); o polegar indica v × B, que aponta para cima, no plano da página. Como a carga é positiva, a força tem esse mesmo sentido; com carga negativa, apontaria para baixo.\n\n“Para baixo” é o sentido da força numa carga negativa, ou o resultado de inverter a ordem do produto vetorial. “Para a direita” e “para a esquerda” estão na direção da velocidade, e a força magnética é sempre perpendicular a ela. E “saindo da página” está na direção do campo, e a força também é perpendicular ao campo.",
      v: { i: () => { const d = direcao(vezes(+1, cruz([1, 0, 0], [0, 0, -1]))); return unicoV(o.map((t) => t.toLowerCase().startsWith(d))); } },
    };
  })(),
  (() => {
    const o = [
      "Surge no anel uma corrente que forma um polo norte voltado para o ímã, e o anel repele o ímã",
      "Surge no anel uma corrente que forma um polo sul voltado para o ímã, e o anel atrai o ímã",
      "Não surge corrente, porque o ímã não chega a tocar o anel",
      "Surge corrente só depois que o ímã para, já dentro do anel",
      "O anel é atraído, porque o cobre é atraído por ímãs como o ferro",
    ];
    return {
      d: "facil",
      e: "O polo norte de um ímã em barra é aproximado de um anel de cobre, ao longo do eixo do anel. O que acontece enquanto o ímã se aproxima?",
      o,
      x: "Pela lei de Lenz, a corrente induzida se opõe à variação que a produz. Com o polo norte se aproximando, o fluxo através do anel aumenta; a corrente induzida cria um campo contrário, o que equivale a formar um polo norte na face do anel voltada para o ímã. Polos iguais se repelem, e o anel freia a aproximação. É preciso realizar trabalho para empurrar o ímã, e essa energia vira calor no anel.\n\nO polo sul e a atração descreveriam o afastamento do ímã. A indução não exige contato, só variação de fluxo. Com o ímã parado, o fluxo não varia e não há corrente. E o cobre não é atraído por ímãs como o ferro: a força aparece só por causa da corrente induzida.",
      /* ímã = dipolo com momento em −x (polo norte voltado para o anel, que fica na origem, com normal +x);
         sinal da fem induzida pela derivada do fluxo → sentido do momento magnético do anel */
      v: { i: () => {
        const m = [-1, 0, 0];
        const Bdip = (P, X) => { const r = menos(P, [X, 0, 0]), d = norma(r), u = vezes(1 / d, r); return vezes(1 / d ** 3, menos(vezes(3 * escalar(m, u), u), m)); };
        const fluxo = (X) => integra((s) => 2 * Math.PI * s * Bdip([0, s, 0], X)[0], 0, 0.05, 400);
        const eps = -deriva((t) => fluxo(0.3 - 0.5 * t), 0.2);
        /* fem positiva → corrente anti-horária vista de +x → momento do anel em +x, apontando para o ímã (face norte voltada para ele) */
        const efeito = eps > 0 ? 0 : eps < 0 ? 1 : 2;
        return unicoV(o.map((_, i) => i === efeito));
      } },
    };
  })(),
  (() => {
    const o = ["0,4 V", "1,6 V", "10 V", "0,1 V", "0,8 V"];
    return {
      d: "facil",
      e: "Uma barra condutora de 0,5 m se desloca a 4 m/s num campo magnético uniforme de 0,2 T, com a barra, a velocidade e o campo perpendiculares entre si. Qual é a força eletromotriz induzida entre as extremidades da barra?",
      o,
      x: "Os elétrons livres da barra sofrem força magnética ao longo dela e se acumulam numa das pontas, até que o campo elétrico criado equilibre essa força. A força eletromotriz resultante é ε = B · L · v = 0,2 · 0,5 · 4 = 0,4 V. É o mesmo resultado da lei de Faraday: a barra varre uma área L · v a cada segundo, e o fluxo varia B · L · v por segundo.\n\n1,6 V divide B · v pelo comprimento. 10 V divide L · v pelo campo. 0,1 V esquece a velocidade. E 0,8 V esquece o comprimento da barra, multiplicando só B · v.",
      /* integral de (v × B) · dl ao longo da barra */
      v: { i: () => qual(Math.abs(integra(() => escalar(cruz([4, 0, 0], [0, 0, 0.2]), [0, 1, 0]), 0, 0.5, 20)), o, 1e-9) },
    };
  })(),

  /* ------------------------------------------------------------- médias --- */
  (() => {
    const o = ["4 · 10⁻⁴ N, de atração", "4 · 10⁻⁴ N, de repulsão", "8 · 10⁻⁴ N, de atração", "4 · 10⁻⁶ N, de atração", "6 · 10⁻⁵ N, de atração"];
    return {
      d: "media",
      e: "Dois fios retilíneos longos e paralelos, separados por 10 cm, são percorridos por correntes de 10 A e 20 A no mesmo sentido. Com µ₀ = 4π · 10⁻⁷ T·m/A, qual é a força magnética em cada metro de fio, e ela é de atração ou de repulsão?",
      o,
      x: "O primeiro fio cria, na posição do segundo, o campo B = µ₀I₁/(2πd) = 2 · 10⁻⁷ · 10/0,1 = 2 · 10⁻⁵ T. A força sobre cada metro do segundo fio é F = B · I₂ · L = 2 · 10⁻⁵ · 20 · 1 = 4 · 10⁻⁴ N. Pela regra da mão direita, correntes no mesmo sentido se atraem, e correntes em sentidos opostos se repelem. Pela 3ª lei de Newton, o primeiro fio sofre uma força igual e oposta.\n\nA repulsão valeria para correntes opostas. 8 · 10⁻⁴ N esquece o 2 do denominador de µ₀I/(2πd). 4 · 10⁻⁶ N usa a distância em centímetros. E 6 · 10⁻⁵ N soma as correntes, como se calculasse um campo, e não uma força.",
      /* campo do fio 1 (na origem) sobre o fio 2 (em x = 0,1 m) por Biot–Savart; força em 1 m do fio 2 */
      v: { i: () => { const B = fio([0, 0, 0], [0, 0, 1], 10, [0.1, 0, 0]); const F = cruz(vezes(20, [0, 0, 1]), B); const atrai = escalar(F, menos([0, 0, 0], [0.1, 0, 0])) > 0; return unicoV(o.map((t) => { const [n, tipo] = t.split(", de "); return Math.abs(valor(n) - norma(F)) <= 1e-5 * norma(F) && (tipo === "atração") === atrai; })); } },
    };
  })(),
  (() => {
    const o = ["2 · 10⁻⁵ T", "0 T", "1 · 10⁻⁵ T", "5 · 10⁻⁶ T", "4 · 10⁻⁵ T"];
    return {
      d: "media",
      e: "Dois fios retilíneos longos e paralelos, a 20 cm um do outro, são percorridos por correntes de 5 A em sentidos opostos. Com µ₀ = 4π · 10⁻⁷ T·m/A, qual é a intensidade do campo magnético no ponto médio entre eles?",
      o,
      x: "Cada fio está a 0,1 m do ponto médio e cria ali um campo de µ₀I/(2πd) = 2 · 10⁻⁷ · 5/0,1 = 1 · 10⁻⁵ T. Com correntes opostas, a regra da mão direita mostra que, entre os fios, os dois campos apontam no mesmo sentido: somam-se, e o campo resultante é 2 · 10⁻⁵ T. Se as correntes tivessem o mesmo sentido, os campos no ponto médio se anulariam.\n\n0 T seria o resultado para correntes no mesmo sentido. 1 · 10⁻⁵ T considera só um dos fios. 5 · 10⁻⁶ T também considera um fio só e ainda usa a distância entre os fios, 20 cm, em vez da distância ao ponto médio. E 4 · 10⁻⁵ T esquece o 2 do denominador de µ₀I/(2πd).",
      v: { i: () => qual(norma(soma(fio([-0.1, 0, 0], [0, 0, 1], 5, [0, 0, 0]), fio([0.1, 0, 0], [0, 0, -1], 5, [0, 0, 0]))), o, 1e-5) },
    };
  })(),
  (() => {
    const o = ["1,6π · 10⁻³ T", "0,4π · 10⁻³ T", "0,8π · 10⁻³ T", "3,2π · 10⁻³ T", "1,6 · 10⁻³ T"];
    return {
      d: "media",
      e: "Um solenoide de 50 cm de comprimento tem 1.000 espiras e é percorrido por uma corrente de 2 A. Com µ₀ = 4π · 10⁻⁷ T·m/A, qual é a intensidade do campo magnético no seu interior, longe das extremidades?",
      o,
      x: "No interior de um solenoide longo, o campo é praticamente uniforme e vale B = µ₀ · (N/L) · I, em que N/L é o número de espiras por metro. Aqui N/L = 1.000/0,5 = 2.000 espiras por metro, e B = 4π · 10⁻⁷ · 2.000 · 2 = 1,6π · 10⁻³ T ≅ 5,0 · 10⁻³ T. O campo não depende do raio das espiras, desde que o solenoide seja longo comparado com ele.\n\n0,4π · 10⁻³ T multiplica pelo comprimento em vez de dividir. 0,8π · 10⁻³ T esquece de dividir pelo comprimento. 3,2π · 10⁻³ T dobra o resultado, dividindo por 25 cm. E 1,6 · 10⁻³ T esquece o π de µ₀.",
      /* soma, no centro, os campos de 1.000 espiras de 1 mm de raio distribuídas ao longo de 0,5 m (Biot–Savart em cada uma) */
      v: { i: () => { let B = [0, 0, 0]; for (let k = 0; k < 1000; k++) B = soma(B, espira([0, 0, -0.25 + (k + 0.5) * 0.0005], 0.001, 2, [0, 0, 0], 64)); return qual(norma(B), o, 1e-4); } },
    };
  })(),
  (() => {
    const o = ["2 · 10⁵ m/s", "2 · 10³ m/s", "5 · 10⁻⁶ m/s", "2 · 10⁴ m/s", "2 · 10⁵ m/s, mas só para cargas positivas"];
    return {
      d: "media",
      e: "Num seletor de velocidades, um campo elétrico de 2 · 10⁴ V/m e um campo magnético de 0,1 T são perpendiculares entre si e à velocidade das partículas. Qual é a velocidade das partículas que atravessam o seletor sem sofrer desvio?",
      o,
      x: "Uma partícula passa sem desvio quando a força elétrica e a força magnética se equilibram: q · E = q · v · B, e então v = E/B = 2 · 10⁴/0,1 = 2 · 10⁵ m/s. A carga se cancela: o resultado não depende do sinal nem do valor dela, nem da massa. Numa carga negativa, as duas forças se invertem juntas e continuam se equilibrando. Partículas mais rápidas são desviadas no sentido da força magnética; mais lentas, no da força elétrica.\n\n2 · 10³ m/s multiplica E por B. 5 · 10⁻⁶ m/s inverte a razão, B/E. 2 · 10⁴ m/s ignora o campo magnético. E a restrição às cargas positivas não existe, como mostra o cancelamento da carga.",
      /* bisseção na velocidade até o desvio transversal simulado se anular; depois, testa uma carga negativa */
      v: { i: () => {
        const desvio = (q, v) => simula(lorentz(q, 1.6e-27, [0, 2e4, 0], [0, 0, 0.1]), [0, 0, 0, v, 0, 0], 1e-10, (t) => t >= 1e-7).y[1];
        const v = bissecao((u) => desvio(1.6e-19, u), 1e4, 1e6);
        const negativaDesvia = Math.abs(desvio(-1.6e-19, v)) > 1e-9;
        return unicoV(o.map((t) => { const [n, resto] = t.split(", mas "); return Math.abs(valor(n) - v) <= 1e-6 * v && Boolean(resto) === negativaDesvia; }));
      } },
    };
  })(),
  (() => {
    const o = ["5π · 10⁻⁷ s", "2,5 · 10⁻⁷ s", "5π · 10⁻² s", "5π · 10⁻¹² s", "2,5π · 10⁻⁷ s"];
    return {
      d: "media",
      e: "Uma partícula de massa 4 · 10⁻²⁶ kg e carga 3,2 · 10⁻¹⁹ C é lançada com velocidade de 10⁵ m/s perpendicularmente a um campo magnético uniforme de 0,5 T. Qual é o período do seu movimento circular?",
      o,
      x: "A força magnética é a resultante centrípeta: q · v · B = m · v²/r, e r = m · v/(q · B). O período é o tempo de uma volta, T = 2πr/v = 2πm/(q · B) = 2π · 4 · 10⁻²⁶/(3,2 · 10⁻¹⁹ · 0,5) = 2π · 2,5 · 10⁻⁷ = 5π · 10⁻⁷ s ≅ 1,6 · 10⁻⁶ s. A velocidade não entra no resultado: partículas mais rápidas descrevem círculos maiores, no mesmo tempo. É esse fato que permite o funcionamento do cíclotron.\n\n2,5 · 10⁻⁷ s esquece o fator 2π. 5π · 10⁻² s é o comprimento da circunferência, em metros, tomado como tempo. 5π · 10⁻¹² s divide ainda pela velocidade. E 2,5π · 10⁻⁷ s é o tempo de meia volta.",
      /* simula e mede o tempo até a velocidade girar 2π */
      v: { i: () => {
        let ang = 0, prev = 0, tAnt = 0, tVolta = null;
        simula(lorentz(3.2e-19, 4e-26, [0, 0, 0], [0, 0, 0.5]), [0, 0, 0, 1e5, 0, 0], 1e-10, (t, y) => {
          const a = Math.atan2(y[4], y[3]); let da = a - prev;
          if (da > Math.PI) da -= 2 * Math.PI; if (da < -Math.PI) da += 2 * Math.PI;
          const novo = ang + Math.abs(da);
          if (novo >= 2 * Math.PI && tVolta === null) tVolta = tAnt + ((2 * Math.PI - ang) / (novo - ang)) * (t - tAnt);
          ang = novo; prev = a; tAnt = t;
          return tVolta !== null;
        });
        return qual(tVolta, o, 1e-5);
      } },
    };
  })(),
  (() => {
    const o = ["0,08 N", "0,2 N", "0,32 N", "0,8 N", "0 N"];
    return {
      d: "media",
      e: "Uma barra condutora de 0,5 m desliza a 2 m/s, com velocidade constante, sobre dois trilhos paralelos ligados por um resistor de 4 Ω, num campo magnético uniforme de 0,8 T perpendicular ao plano dos trilhos. Desprezando o atrito e as demais resistências, qual é a força externa necessária para manter a velocidade da barra?",
      o,
      x: "A força eletromotriz induzida é ε = B · L · v = 0,8 · 0,5 · 2 = 0,8 V, e a corrente é I = ε/R = 0,8/4 = 0,2 A. A barra, percorrida por essa corrente dentro do campo, sofre uma força magnética F = B · I · L = 0,8 · 0,2 · 0,5 = 0,08 N, que se opõe ao movimento (lei de Lenz). Para manter a velocidade constante, a força externa precisa equilibrá-la: 0,08 N. A potência dessa força, 0,08 · 2 = 0,16 W, é a mesma dissipada no resistor, R · I² = 4 · 0,04.\n\n0,2 N é o valor da corrente tomado como força. 0,32 N usa a velocidade no lugar do comprimento, B · I · v. 0,8 N é o valor da força eletromotriz. E 0 N esquece a força magnética de frenagem, que existe mesmo sem atrito e retira energia do movimento.",
      /* balanço de energia: fem pela derivada do fluxo B · L · x(t); força = potência dissipada / velocidade */
      v: { i: () => { const eps = deriva((t) => 0.8 * 0.5 * (1 + 2 * t), 1); return qual(eps ** 2 / 4 / 2, o, 1e-6); } },
    };
  })(),
  (() => {
    const o = ["100 V", "1 V", "63,7 V", "70,7 V", "628 V"];
    return {
      d: "media",
      e: "Uma bobina de 100 espiras, cada uma com área de 0,02 m², gira com velocidade angular de 100 rad/s num campo magnético uniforme de 0,5 T, em torno de um eixo perpendicular ao campo. Qual é o valor máximo da força eletromotriz induzida?",
      o,
      x: "O fluxo em cada espira varia como Φ = B · A · cos(ωt). Pela lei de Faraday, ε = −N · dΦ/dt = N · B · A · ω · sen(ωt), cujo valor máximo é εmáx = N · B · A · ω = 100 · 0,5 · 0,02 · 100 = 100 V. A fem máxima ocorre quando o plano da bobina está paralelo ao campo: o fluxo é nulo nesse instante, mas é quando ele varia mais depressa.\n\n1 V esquece o número de espiras. 63,7 V é o valor médio da fem ao longo de meia volta, 2/π do máximo. 70,7 V é o valor eficaz, o máximo dividido por √2. E 628 V toma 100 como frequência em hertz e multiplica por 2π.",
      v: { i: () => { const fl = (t) => 0.5 * 0.02 * Math.cos(100 * t); let mx = 0; for (let k = 0; k <= 20000; k++) mx = Math.max(mx, Math.abs(-100 * deriva(fl, (k / 20000) * ((2 * Math.PI) / 100), 1e-7))); return qual(mx, o, 1e-5); } },
    };
  })(),
  (() => {
    const o = ["0,2 A", "20 A", "2 A", "24 A", "0,02 A"];
    return {
      d: "media",
      e: "Um transformador ideal é ligado a 120 V no primário e fornece 12 V no secundário, onde uma carga consome 2 A. Qual é a corrente no primário?",
      o,
      x: "Num transformador ideal, não há perda de energia: a potência entregue ao primário é igual à consumida no secundário. No secundário, P = 12 · 2 = 24 W. No primário, 120 · Ip = 24, e Ip = 0,2 A. A corrente se transforma na razão inversa da tensão: a tensão cai 10 vezes do primário para o secundário, e a corrente sobe 10 vezes.\n\n20 A aplica a razão de tensões no sentido errado. 2 A supõe que a corrente seja a mesma dos dois lados. 24 A confunde a potência, 24 W, com a corrente. E 0,02 A divide a corrente pela razão de tensões duas vezes, como se ela entrasse ao quadrado.",
      /* potências médias num ciclo (tensão e corrente senoidais em fase, valores eficazes dados) */
      v: { i: () => { const w = 120 * Math.PI, T = 1 / 60; const pot = (U, I) => integra((t) => 2 * U * I * Math.sin(w * t) ** 2, 0, T, 2000) / T; const Ps = pot(12, 2); return qual(bissecao((ip) => pot(120, ip) - Ps, 0, 100), o, 1e-6); } },
    };
  })(),
  (() => {
    const o = ["0,05 A", "0,1 A", "0,067 A", "0,015 A", "0,2 A"];
    return {
      d: "media",
      e: "Uma espira de 0,05 m² e resistência de 2 Ω está num campo magnético perpendicular ao seu plano, que cresce uniformemente de 0,2 T para 0,8 T em 0,3 s. Qual é a corrente induzida na espira durante esse intervalo?",
      o,
      x: "A variação do fluxo é ΔΦ = A · ΔB = 0,05 · (0,8 − 0,2) = 0,03 Wb, e a força eletromotriz induzida é ε = ΔΦ/Δt = 0,03/0,3 = 0,1 V. A corrente é I = ε/R = 0,1/2 = 0,05 A, constante enquanto o campo cresce no mesmo ritmo. Pela lei de Lenz, ela circula no sentido que cria um campo oposto ao aumento.\n\n0,1 A é o valor da força eletromotriz tomado como corrente. 0,067 A usa só o campo final, 0,8 T, como se o inicial fosse nulo. 0,015 A esquece de dividir pelo tempo. E 0,2 A multiplica a força eletromotriz pela resistência em vez de dividir.",
      /* fluxo = integral do campo sobre a espira (quadrado de mesma área); fem pela derivada */
      v: { i: () => { const lado = Math.sqrt(0.05); const fl = (t) => integra(() => integra(() => 0.2 + (0.6 * t) / 0.3, 0, lado, 10), 0, lado, 10); return qual(Math.abs(deriva(fl, 0.15)) / 2, o, 1e-6); } },
    };
  })(),
  (() => {
    const o = ["0,4 N·m", "0 N·m", "0,008 N·m", "0,2 N·m", "0,8 N·m"];
    return {
      d: "media",
      e: "Uma bobina quadrada de 50 espiras, cada uma com área de 0,01 m², é percorrida por uma corrente de 2 A num campo magnético uniforme de 0,4 T. Qual é o torque sobre ela quando o plano das espiras está paralelo às linhas de campo?",
      o,
      x: "O torque sobre uma bobina é τ = N · B · I · A · sen θ, em que θ é o ângulo entre o campo e a normal ao plano das espiras. Com o plano paralelo ao campo, a normal é perpendicular a ele: θ = 90°, e o torque é máximo, τ = 50 · 0,4 · 2 · 0,01 = 0,4 N·m. É esse torque que faz girar o rotor de um motor elétrico.\n\n0 N·m é o torque na posição em que o plano das espiras fica perpendicular ao campo, a de equilíbrio. 0,008 N·m esquece o número de espiras. 0,2 N·m multiplica por sen 30°, um ângulo que não aparece na situação. E 0,8 N·m soma os torques dos dois lados usando a largura inteira da espira como braço de alavanca, em vez da metade.",
      /* soma de r × F nos quatro lados (0,1 m cada), com F = N I L × B e o campo em x, no plano da bobina */
      v: { i: () => { const lados = [[[0, -0.05, 0], [0.1, 0, 0]], [[0.05, 0, 0], [0, 0.1, 0]], [[0, 0.05, 0], [-0.1, 0, 0]], [[-0.05, 0, 0], [0, -0.1, 0]]]; const tau = lados.reduce((s, [c, L]) => soma(s, cruz(c, cruz(vezes(50 * 2, L), [0.4, 0, 0]))), [0, 0, 0]); return qual(norma(tau), o, 1e-9); } },
    };
  })(),
  (() => {
    const o = ["45°", "90°", "0°", "30°", "60°"];
    return {
      d: "media",
      e: "Uma bússola está 10 cm abaixo de um fio horizontal longo, alinhado na direção norte–sul. Sem corrente, a agulha aponta para o norte, sob a componente horizontal do campo terrestre, de 2 · 10⁻⁵ T. Com µ₀ = 4π · 10⁻⁷ T·m/A, de quanto a agulha se desvia quando o fio é percorrido por 10 A?",
      o,
      x: "O fio cria, na posição da bússola, um campo B = µ₀I/(2πd) = 2 · 10⁻⁷ · 10/0,1 = 2 · 10⁻⁵ T. Como o fio está alinhado na direção norte–sul, esse campo é horizontal e aponta na direção leste–oeste, perpendicular ao campo terrestre. A agulha se alinha com a soma dos dois: com componentes iguais, tg θ = 1, e θ = 45°. Foi uma montagem assim que Ørsted usou para mostrar que a corrente elétrica produz campo magnético.\n\n90° supõe que o campo do fio domine completamente o terrestre. 0° supõe que o fio não afete a bússola. E 30° e 60° corresponderiam a campos em razão 1 : √3, o que não é o caso: aqui os dois campos são iguais.",
      /* fio 10 cm acima da bússola, na direção norte (y); campo terrestre horizontal para o norte */
      v: { i: () => { const B = soma(fio([0, 0, 0.1], [0, 1, 0], 10, [0, 0, 0]), [0, 2e-5, 0]); return qual((Math.atan2(Math.abs(B[0]), B[1]) * 180) / Math.PI, o, 1e-4); } },
    };
  })(),
  (() => {
    const o = ["0,3 N", "0,52 N", "0,6 N", "0,15 N", "2,4 N"];
    return {
      d: "media",
      e: "Um fio retilíneo de 0,3 m, percorrido por uma corrente de 4 A, forma um ângulo de 30° com as linhas de um campo magnético uniforme de 0,5 T. Qual é a intensidade da força magnética sobre o fio?",
      o,
      x: "A força sobre o fio é F = B · I · L · sen θ, em que θ é o ângulo entre o fio e o campo: só a componente do campo perpendicular ao fio produz força. Com θ = 30°: F = 0,5 · 4 · 0,3 · 0,5 = 0,3 N. A força é perpendicular ao plano formado pelo fio e pelo campo, com o sentido dado pela regra da mão direita.\n\n0,52 N usa o cosseno de 30° no lugar do seno. 0,6 N ignora o ângulo, como se o fio fosse perpendicular ao campo. 0,15 N aplica o seno de 30° duas vezes. E 2,4 N divide I · L pelo campo em vez de multiplicar.",
      v: { i: () => qual(norma(cruz(vezes(4 * 0.3, [Math.cos(Math.PI / 6), Math.sin(Math.PI / 6), 0]), [0.5, 0, 0])), o, 1e-9) },
    };
  })(),
  (() => {
    const o = ["0,9 J", "1,8 J", "0,3 J", "0,6 J", "0,45 J"];
    return {
      d: "media",
      e: "Um indutor de 0,2 H é percorrido por uma corrente de 3 A. Qual é a energia armazenada no campo magnético do indutor?",
      o,
      x: "A energia armazenada num indutor é E = L · I²/2 = 0,2 · 3²/2 = 0,2 · 9/2 = 0,9 J. Ela corresponde ao trabalho que a fonte realiza contra a força eletromotriz autoinduzida, ε = L · ΔI/Δt, enquanto a corrente cresce de zero até 3 A. Quando a corrente é interrompida, essa energia volta ao circuito, às vezes na forma de uma faísca na chave.\n\n1,8 J esquece a divisão por 2. 0,3 J usa L · I/2, sem elevar a corrente ao quadrado. 0,6 J usa L · I. E 0,45 J divide por 4 em vez de 2.",
      /* trabalho da fonte contra a fem autoinduzida enquanto a corrente sobe de 0 a 3 A: integral de L (di/dt) i dt */
      v: { i: () => qual(integra((t) => 0.2 * deriva((s) => 3 * s, t) * 3 * t, 0, 1, 200), o, 1e-6) },
    };
  })(),
  (() => {
    const o = ["≈ 1,90 A", "3 A", "≈ 1,10 A", "1,5 A", "≈ 0,66 A"];
    return {
      d: "media",
      e: "Um circuito tem uma fonte de 12 V, um resistor de 4 Ω e um indutor de 2 H, ligados em série. Qual é a corrente 0,5 s depois que a chave é fechada?",
      o,
      x: "Ao fechar a chave, o indutor se opõe ao crescimento da corrente, que sobe gradualmente: I(t) = (ε/R) · (1 − e^(−t/τ)), com constante de tempo τ = L/R = 2/4 = 0,5 s e corrente final ε/R = 3 A. Em t = 0,5 s = τ: I = 3 · (1 − e⁻¹) ≅ 3 · 0,632 ≅ 1,90 A. Em uma constante de tempo, a corrente atinge cerca de 63% do valor final.\n\n3 A é a corrente final, alcançada só depois de várias constantes de tempo. 1,10 A é 3 · e⁻¹, a parte que ainda falta para chegar ao valor final. 1,5 A é metade da corrente final, atingida antes, em t = τ · ln 2 ≅ 0,35 s. E 0,66 A inverte a constante de tempo, usando τ = R/L = 2 s.",
      /* simula L di/dt = ε − R i e arredonda a corrente em t = 0,5 s */
      v: { i: () => { const r = simula((t, y) => [(12 - 4 * y[0]) / 2], [0], 1e-5, (t) => t >= 0.5 - 1e-12); return qual(Math.round(r.y[0] * 100) / 100, o, 1e-9); } },
    };
  })(),
  (() => {
    const o = ["0,6 A e zero", "0,6 A nos dois casos", "Zero e 0,6 A", "0,12 A e zero", "1,2 A e zero"];
    return {
      d: "media",
      e: "Uma espira quadrada de 0,2 m de lado e resistência de 0,5 Ω entra, com velocidade constante de 3 m/s, numa região de campo magnético uniforme de 0,5 T, perpendicular ao plano da espira. Qual é a corrente induzida enquanto a espira está entrando e depois que ela está inteiramente dentro da região?",
      o,
      x: "Enquanto a espira entra, a área dentro do campo cresce L · v = 0,2 · 3 = 0,6 m² por segundo, e o fluxo cresce B · L · v = 0,5 · 0,6 = 0,3 Wb/s: a força eletromotriz é 0,3 V, e a corrente, 0,3/0,5 = 0,6 A. Depois que a espira está inteiramente dentro da região, o fluxo fica constante (B vezes a área toda), e a corrente cessa, mesmo com a espira ainda em movimento.\n\n“0,6 A nos dois casos” supõe que bastaria o movimento dentro do campo para induzir corrente. “Zero e 0,6 A” inverte as duas fases. 0,12 A usa a área da espira, 0,04 m², no lugar do lado. E 1,2 A conta dois lados cortando as linhas de campo, quando, na entrada, só o lado da frente está dentro da região.",
      /* fem = circulação de (v × B) · dl ao longo dos quatro lados, com o campo só em x > 0 */
      v: { i: () => {
        const B = (x) => (x > 0 ? [0, 0, -0.5] : [0, 0, 0]);
        const fem = (xf) => { const c = [[xf - 0.2, 0], [xf, 0], [xf, 0.2], [xf - 0.2, 0.2]]; let s = 0; for (let k = 0; k < 4; k++) { const a = c[k], b = c[(k + 1) % 4]; const dl = [b[0] - a[0], b[1] - a[1], 0]; s += integra((u) => escalar(cruz([3, 0, 0], B(a[0] + u * dl[0])), dl), 0, 1, 2000); } return Math.abs(s); };
        const i1 = fem(0.1) / 0.5, i2 = fem(0.4) / 0.5;
        return unicoV(o.map((t) => { const m = t.match(/^([\d,]+) A e zero$/); if (m) return perto(valor(m[1]), i1, 1e-9) && Math.abs(i2) < 1e-12; if (/nos dois casos/.test(t)) return perto(valor(t.split(" A")[0]), i1, 1e-9) && perto(i2, i1, 1e-9); if (/^Zero e/.test(t)) return i1 < 1e-12; return false; }));
      } },
    };
  })(),
  (() => {
    const o = ["Anti-horário", "Horário", "Não há corrente, porque o campo é uniforme", "Horário enquanto o campo cresce e anti-horário quando ele se estabiliza", "Depende da resistência da espira"];
    return {
      d: "media",
      e: "Uma espira circular está no plano da página, num campo magnético uniforme que entra na página e cuja intensidade aumenta com o tempo. Para quem olha a página de frente, qual é o sentido da corrente induzida na espira?",
      o,
      x: "O fluxo que entra na página está aumentando. Pela lei de Lenz, a corrente induzida cria um campo que se opõe a esse aumento, isto é, um campo que sai da página no interior da espira. Pela regra da mão direita, uma corrente que produz campo saindo da página, no centro da espira, circula no sentido anti-horário para quem olha de frente.\n\nO sentido horário reforçaria o campo que entra, o que aconteceria se ele estivesse diminuindo. O campo ser uniforme não impede a indução: o que importa é o fluxo variar. Quando o campo se estabiliza, a corrente simplesmente cessa, sem inverter. E a resistência muda a intensidade da corrente, mas não o seu sentido.",
      /* normal da espira saindo da página (+z); campo −(1 + t) em z; fem positiva = anti-horário visto de +z */
      v: { i: () => { const fl = (t) => integra((s) => 2 * Math.PI * s * -(1 + t), 0, 0.1, 100); const eps = -deriva(fl, 1); return unicoV(o.map((_, i) => i === (eps > 0 ? 0 : eps < 0 ? 1 : 2))); } },
    };
  })(),
  (() => {
    const o = ["90%", "10%", "111%", "9,1%", "100%"];
    return {
      d: "media",
      e: "Um transformador recebe 2 A a 220 V no primário e fornece 19,8 A a 20 V no secundário. Qual é o seu rendimento?",
      o,
      x: "O rendimento é a razão entre a potência útil, entregue pelo secundário, e a potência recebida pelo primário. No primário: 220 · 2 = 440 W. No secundário: 20 · 19,8 = 396 W. Então η = 396/440 = 0,9 = 90%. Os 44 W restantes se perdem principalmente como calor, nos enrolamentos (efeito Joule) e no núcleo (correntes de Foucault e histerese).\n\n10% é a fração perdida, e não o rendimento. 111% inverte a razão, 440/396; um rendimento acima de 100% violaria a conservação da energia. 9,1% compara só as tensões, 20/220. E 100% é o rendimento de um transformador ideal, o que não é o caso, já que as potências diferem.",
      /* energias em 1 s, com tensão e corrente senoidais em fase (valores eficazes dados) */
      v: { i: () => { const w = 120 * Math.PI; const energia = (U, I) => integra((t) => 2 * U * I * Math.sin(w * t) ** 2, 0, 1, 20000); return qual(energia(20, 19.8) / energia(220, 2), o, 1e-6); } },
    };
  })(),
  (() => {
    const o = ["3,2 · 10⁻¹⁸ N, afastando-o do fio", "3,2 · 10⁻¹⁸ N, aproximando-o do fio", "6,4 · 10⁻¹⁸ N, afastando-o do fio", "3,2 · 10⁻¹³ N, afastando-o do fio", "Zero, porque o elétron se move paralelamente ao fio"];
    return {
      d: "media",
      e: "Um elétron se move a 2 · 10⁶ m/s a 10 cm de um fio retilíneo longo, paralelamente a ele e no mesmo sentido da corrente de 5 A que o percorre. Com µ₀ = 4π · 10⁻⁷ T·m/A e carga elementar de 1,6 · 10⁻¹⁹ C, qual é a força magnética sobre o elétron?",
      o,
      x: "O fio cria, na posição do elétron, um campo B = µ₀I/(2πd) = 2 · 10⁻⁷ · 5/0,1 = 1 · 10⁻⁵ T, perpendicular à velocidade. A força tem intensidade F = e · v · B = 1,6 · 10⁻¹⁹ · 2 · 10⁶ · 10⁻⁵ = 3,2 · 10⁻¹⁸ N. Uma carga positiva movendo-se no sentido da corrente seria atraída pelo fio, como dois fios com correntes no mesmo sentido; o elétron, de carga negativa, sofre a força oposta e é afastado.\n\n“Aproximando-o” vale para uma carga positiva. 6,4 · 10⁻¹⁸ N esquece o 2 do denominador de µ₀I/(2πd). 3,2 · 10⁻¹³ N multiplica a carga pela velocidade e esquece o campo. E a força não é nula: o campo do fio circula em torno dele e é perpendicular à velocidade, e não paralelo a ela.",
      /* fio no eixo x com corrente em +x; elétron em y = 0,1 m com velocidade em +x */
      v: { i: () => { const P = [0, 0.1, 0]; const F = vezes(-1.6e-19, cruz([2e6, 0, 0], fio([0, 0, 0], [1, 0, 0], 5, P))); const afasta = escalar(F, P) > 0; return unicoV(o.map((t) => { const [n, resto] = t.split(", "); let v; try { v = valor(n); } catch { return false; } return Math.abs(v - norma(F)) <= 1e-5 * norma(F) && resto.startsWith("afastando") === afasta; })); } },
    };
  })(),
  (() => {
    const o = ["10 V", "0 V", "0,05 V", "20 V", "15,7 V"];
    return {
      d: "media",
      e: "Uma bobina de 200 espiras, cada uma com 0,01 m², está com o plano perpendicular a um campo magnético uniforme de 0,5 T. Ela gira 90° com velocidade angular constante, em 0,1 s, até ficar com o plano paralelo ao campo. Qual é a força eletromotriz média induzida nesse intervalo?",
      o,
      x: "No início, o fluxo em cada espira é máximo, B · A = 0,5 · 0,01 = 0,005 Wb; no fim, com o plano paralelo ao campo, é nulo. A força eletromotriz média é ε = N · |ΔΦ|/Δt = 200 · 0,005/0,1 = 10 V. Ao longo do giro, a fem instantânea varia como um seno, mas a média só depende da variação total do fluxo.\n\n0 V confunde o fluxo final nulo com ausência de variação. 0,05 V esquece o número de espiras. 20 V considera meia volta, em que o fluxo se inverte e varia 2 · B · A. E 15,7 V é o valor máximo da fem, N · B · A · ω, com ω = (π/2)/0,1 rad/s, e não a média.",
      /* média temporal de |−N dΦ/dt| no quarto de volta */
      v: { i: () => { const w = Math.PI / 2 / 0.1; const fl = (t) => 0.5 * 0.01 * Math.cos(w * t); return qual(integra((t) => Math.abs(-200 * deriva(fl, t, 1e-7)), 0, 0.1, 2000) / 0.1, o, 1e-6); } },
    };
  })(),
  (() => {
    const o = ["1,6π · 10⁻³ V", "1,6π · 10⁻⁵ V", "3,2π · 10⁻⁵ V", "4π V", "0 V"];
    return {
      d: "media",
      e: "Com µ₀ = 4π · 10⁻⁷ T·m/A, considere um solenoide longo com 2.000 espiras por metro e seção de 4 · 10⁻⁴ m², envolvido por uma bobina de 100 espiras. Se a corrente no solenoide cresce à taxa de 50 A/s, qual é a força eletromotriz induzida na bobina?",
      o,
      x: "O campo no interior do solenoide é B = µ₀ · n · I, e o fluxo em cada espira da bobina externa é Φ = B · A = µ₀ · n · A · I (fora do solenoide, o campo é desprezível). A fem induzida é ε = N · dΦ/dt = N · µ₀ · n · A · dI/dt = 100 · 4π · 10⁻⁷ · 2.000 · 4 · 10⁻⁴ · 50 = 1,6π · 10⁻³ V ≅ 5 · 10⁻³ V. É a indução mútua, o princípio do transformador.\n\n1,6π · 10⁻⁵ V esquece as 100 espiras da bobina. 3,2π · 10⁻⁵ V é o fluxo total na bobina quando a corrente vale 1 A, sem a taxa de variação. 4π V esquece a área da seção. E 0 V supõe que, sem contato elétrico entre os enrolamentos, não surja tensão; a indução acontece pelo campo magnético.",
      /* campo no centro de um solenoide de 2 m (4.000 espiras, Biot–Savart em cada uma) por ampère; fem = N · dΦ/dt */
      v: { i: () => { const R = Math.sqrt(4e-4 / Math.PI); let B = [0, 0, 0]; for (let k = 0; k < 4000; k++) B = soma(B, espira([0, 0, -1 + (k + 0.5) / 2000], R, 1, [0, 0, 0], 64)); return qual(100 * B[2] * 4e-4 * 50, o, 1e-3); } },
    };
  })(),
  (() => {
    const o = ["0,9 J", "0,6 J", "1,8 J", "0 J", "0,3 J"];
    return {
      d: "media",
      e: "Uma barra condutora de 0,2 kg é lançada a 3 m/s sobre trilhos horizontais sem atrito, ligados por um resistor, numa região de campo magnético vertical. A corrente induzida freia a barra até ela parar. Quanta energia é dissipada no resistor ao longo de todo o processo?",
      o,
      x: "A única força horizontal sobre a barra é a força magnética de frenagem, que surge da corrente induzida. Toda a energia cinética inicial é convertida em calor no resistor: E = m · v²/2 = 0,2 · 3²/2 = 0,9 J. O resultado não depende do campo, do comprimento da barra nem da resistência: eles só mudam quanto tempo a barra leva para parar e a distância que ela percorre.\n\n0,6 J é a quantidade de movimento inicial, m · v, tomada como energia. 1,8 J esquece a divisão por 2 na energia cinética. 0 J supõe que a frenagem não dissipe energia. E 0,3 J divide m · v por 2, sem elevar a velocidade ao quadrado.",
      /* simula com B = 0,5 T, L = 0,4 m e R = 0,1 Ω (valores quaisquer): fem, corrente, força e calor R · i² acumulado */
      v: { i: () => { const B = 0.5, L = 0.4, R = 0.1, m = 0.2; const r = simula((t, y) => { const i = (B * L * y[0]) / R; return [(-B * i * L) / m, i * i * R]; }, [3, 0], 1e-4, (t) => t >= 20); return qual(r.y[1], o, 1e-6); } },
    };
  })(),
  (() => {
    const o = ["10 cm", "20 cm", "5 cm", "31,4 cm", "0,8 cm"];
    return {
      d: "media",
      e: "Com µ₀ = 4π · 10⁻⁷ T·m/A, a que distância de um fio retilíneo longo, percorrido por uma corrente de 20 A, o campo magnético vale 4 · 10⁻⁵ T?",
      o,
      x: "Do campo do fio, B = µ₀I/(2πd), isola-se a distância: d = µ₀I/(2πB) = 4π · 10⁻⁷ · 20/(2π · 4 · 10⁻⁵) = 2 · 10⁻⁷ · 20/(4 · 10⁻⁵) = 4 · 10⁻⁶/(4 · 10⁻⁵) = 0,1 m = 10 cm. Mais perto que isso, o campo é mais intenso; mais longe, mais fraco, na proporção inversa da distância.\n\n20 cm esquece o 2 do denominador. 5 cm divide por 4π em vez de 2π. 31,4 cm usa a fórmula do centro de uma espira, µ₀I/(2R). E 0,8 cm usa µ₀ = 10⁻⁷, esquecendo o fator 4π.",
      /* bisseção na distância com o campo calculado por Biot–Savart */
      v: { i: () => qual(bissecao((d) => norma(fio([0, 0, 0], [0, 0, 1], 20, [d, 0, 0])) - 4e-5, 0.01, 1, 60), o, 1e-5) },
    };
  })(),
  (() => {
    const o = ["Anti-horário, e a espira é atraída pelo fio", "Horário, e a espira é repelida pelo fio", "Anti-horário, e a espira é repelida pelo fio", "Horário, e a espira é atraída pelo fio", "Não há corrente induzida, porque a espira não se move"];
    return {
      d: "media",
      e: "Um fio retilíneo longo, no plano da página, é percorrido por uma corrente para a direita, que está diminuindo. Uma espira retangular está no mesmo plano, logo acima do fio, com dois lados paralelos a ele. Para quem olha a página de frente, qual é o sentido da corrente induzida na espira, e qual é o efeito da força resultante sobre ela?",
      o,
      x: "Acima de um fio com corrente para a direita, o campo sai da página (regra da mão direita). Com a corrente diminuindo, esse fluxo diminui, e, pela lei de Lenz, a corrente induzida tenta mantê-lo, criando campo saindo da página dentro da espira: sentido anti-horário. Nesse sentido, o lado de baixo da espira, mais próximo do fio, tem corrente para a direita, a favor da corrente do fio, e é atraído; o lado de cima tem corrente oposta e é repelido, mas está mais longe, onde o campo é mais fraco. A resultante é de atração, como prevê Lenz: a espira tende a ir para onde o fluxo é maior.\n\nO sentido horário corresponderia à corrente do fio aumentando, caso em que a espira seria repelida. As outras duas combinações misturam o sentido de um caso com a força do outro. E a indução não exige movimento: basta que o fluxo varie, e aqui ele varia porque a corrente muda.",
      /* fio no eixo x; espira com y de 0,05 a 0,15 m e x de 0 a 0,2 m; I(t) = 10 − 20t; normal da espira em +z */
      v: { i: () => {
        const campo = (y, I) => vezes(I, fio([0, 0, 0], [1, 0, 0], 1, [0.1, y, 0]));
        const phi1 = 0.2 * integra((y) => campo(y, 1)[2], 0.05, 0.15, 100);
        const I = (t) => 10 - 20 * t;
        const i = -deriva((t) => I(t) * phi1, 0.1); /* resistência de 1 Ω: só o sinal importa; positivo = anti-horário */
        const Fy = cruz(vezes(i, [0.2, 0, 0]), campo(0.05, I(0.1)))[1] + cruz(vezes(i, [-0.2, 0, 0]), campo(0.15, I(0.1)))[1];
        const sentido = i > 0 ? "Anti-horário" : "Horário", efeito = Fy < 0 ? "atraída" : "repelida";
        return unicoV(o.map((t) => t.startsWith(sentido + ",") && t.endsWith(efeito + " pelo fio")));
      } },
    };
  })(),
  (() => {
    const o = ["≈ 120 V e 60 Hz", "170 V e 60 Hz", "≈ 120 V e 120 Hz", "85 V e 60 Hz", "≈ 120 V e 377 Hz"];
    return {
      d: "media",
      e: "Um gerador produz a força eletromotriz ε(t) = 170 · sen(120πt), em volts, com t em segundos. Quais são o valor eficaz dessa tensão e a sua frequência?",
      o,
      x: "Numa tensão senoidal, o valor eficaz é o máximo dividido por √2: 170/√2 ≅ 120 V. É o valor que produz num resistor a mesma potência média que uma tensão contínua de 120 V, e é o número que aparece nas tomadas. A frequência sai da frequência angular, ω = 120π rad/s: f = ω/(2π) = 60 Hz.\n\n170 V é o valor máximo, de pico. 120 Hz toma o coeficiente de π como frequência, esquecendo o 2π. 85 V divide o pico por 2 em vez de √2. E 377 Hz é a própria frequência angular, 120π ≅ 377 rad/s, que não se mede em hertz.",
      /* período pelas passagens ascendentes por zero; valor eficaz pela integral de ε² num período */
      v: { i: () => {
        const e = (t) => 170 * Math.sin(120 * Math.PI * t);
        const sobe = []; let ant = e(1e-6);
        for (let k = 1; k <= 5000 && sobe.length < 2; k++) { const t = 1e-6 + k * 1e-5, cur = e(t); if (ant < 0 && cur >= 0) sobe.push(bissecao(e, t - 1e-5, t)); ant = cur; }
        const T = sobe[1] - sobe[0], f = 1 / T, ef = Math.sqrt(integra((t) => e(t) ** 2, 0, T, 4000) / T);
        return unicoV(o.map((t) => { const [a, b] = t.split(" e "); return Math.abs(valor(a) - ef) <= 0.01 * ef && Math.abs(valor(b) - f) <= 1e-6 * f; }));
      } },
    };
  })(),
  (() => {
    const o = ["0,1 Wb", "0,173 Wb", "0,2 Wb", "0 Wb", "0,4 Wb"];
    return {
      d: "media",
      e: "Numa região de campo magnético uniforme de 0,4 T, uma placa plana de 0,5 m² fica inclinada de modo que as linhas de campo formam 30° com a sua face. Que fluxo magnético atravessa a placa?",
      o,
      x: "Na fórmula Φ = B · A · cos θ, o ângulo θ é medido entre o campo e a normal à superfície, e não entre o campo e o plano. Se as linhas formam 30° com o plano, formam 60° com a normal: Φ = 0,4 · 0,5 · cos 60° = 0,2 · 0,5 = 0,1 Wb. De forma equivalente, só a componente do campo perpendicular à superfície, B · sen 30°, a atravessa.\n\n0,173 Wb usa cos 30°, tomando o ângulo com o plano como se fosse com a normal. 0,2 Wb ignora a inclinação, como se o campo fosse perpendicular à superfície. 0 Wb supõe que um campo inclinado não atravesse a superfície. E 0,4 Wb divide pelo seno em vez de multiplicar.",
      /* superfície no plano xy (retângulo de 1 m × 0,5 m); campo a 30° do plano; integral de B · n */
      v: { i: () => { const B = vezes(0.4, [Math.cos(Math.PI / 6), 0, Math.sin(Math.PI / 6)]); return qual(integra(() => integra(() => escalar(B, [0, 0, 1]), 0, 0.5, 10), 0, 1, 10), o, 1e-9); } },
    };
  })(),
  (() => {
    const o = ["A 10 cm do fio de 2 A, entre os fios", "A 20 cm do fio de 2 A, entre os fios", "No ponto médio, a 15 cm de cada fio", "A 30 cm do fio de 2 A, do lado de fora", "Em nenhum ponto dessa reta"];
    return {
      d: "media",
      e: "Dois fios retilíneos longos e paralelos, a 30 cm um do outro, são percorridos por correntes de 2 A e 4 A no mesmo sentido. Em que ponto da reta perpendicular que liga os fios o campo magnético resultante é nulo?",
      o,
      x: "Com correntes no mesmo sentido, entre os fios os dois campos têm sentidos opostos e podem se anular. O campo de cada fio é proporcional a I/d: com x a distância ao fio de 2 A, 2/x = 4/(30 − x), e então 60 − 2x = 4x, x = 10 cm. O ponto fica mais perto do fio de menor corrente, cujo campo precisa de uma distância menor para igualar o do outro.\n\n20 cm inverte a proporção, pondo o ponto mais perto do fio de maior corrente. O ponto médio só serviria para correntes iguais. 30 cm do lado de fora é a resposta para correntes em sentidos opostos. E o ponto de campo nulo existe: entre os fios, os campos se opõem, e em algum ponto têm a mesma intensidade.",
      /* fio de 2 A em x = 0 e de 4 A em x = 0,3 m; zeros da componente y do campo em cada trecho da reta, evitando os fios */
      v: { i: () => {
        const By = (x) => soma(fio([0, 0, 0], [0, 0, 1], 2, [x, 0, 0]), fio([0.3, 0, 0], [0, 0, 1], 4, [x, 0, 0]))[1];
        const nulos = [];
        for (const [a, b] of [[-1, -0.001], [0.001, 0.299], [0.301, 1.3]]) { let xa = a, fa = By(a); for (let k = 1; k <= 200; k++) { const xb = a + ((b - a) * k) / 200, fb = By(xb); if (fa * fb < 0) nulos.push(bissecao(By, xa, xb, 60)); xa = xb; fa = fb; } }
        const descreve = (x) => (Math.abs(x - 0.15) < 1e-6 ? "No ponto médio, a 15 cm de cada fio" : x > 0 && x < 0.3 ? `A ${Math.round(x * 100)} cm do fio de 2 A, entre os fios` : `A ${Math.round(Math.abs(x) * 100)} cm do fio de 2 A, do lado de fora`);
        const certo = nulos.length === 0 ? "Em nenhum ponto dessa reta" : nulos.length === 1 ? descreve(nulos[0]) : null;
        return unicoV(o.map((t) => t === certo));
      } },
    };
  })(),
  (() => {
    const o = ["0,2 N", "0,314 N", "0 N", "0,1 N", "0,628 N"];
    return {
      d: "media",
      e: "Um fio em forma de semicircunferência, de raio 0,1 m, é percorrido por uma corrente de 2 A num campo magnético uniforme de 0,5 T, perpendicular ao plano do fio. Qual é a intensidade da força magnética resultante sobre o fio?",
      o,
      x: "Cada pedacinho do fio sofre uma força perpendicular a ele, no plano da semicircunferência. Somando essas forças, as componentes paralelas ao diâmetro se cancelam por simetria, e as perpendiculares se somam. O resultado é o mesmo de um fio reto que ligasse as duas pontas: F = B · I · (2R) = 0,5 · 2 · 0,2 = 0,2 N. Em campo uniforme, a força sobre um fio de qualquer formato depende só do segmento que liga as suas extremidades.\n\n0,314 N usa o comprimento do arco, πR, como se todas as forças fossem paralelas. 0 N supõe que as forças se cancelem totalmente, o que só acontece numa espira fechada. 0,1 N usa o raio no lugar do diâmetro. E 0,628 N usa o comprimento de uma circunferência inteira.",
      /* integral de I dl × B ao longo da semicircunferência */
      v: { i: () => { const F = [0, 1, 2].map((k) => integra((t) => cruz(vezes(2, [-0.1 * Math.sin(t), 0.1 * Math.cos(t), 0]), [0, 0, 0.5])[k], 0, Math.PI, 2000)); return qual(norma(F), o, 1e-9); } },
    };
  })(),
  (() => {
    const o = ["≈ 8,3 mm", "≈ 4,2 mm", "≈ 41,5 mm", "≈ 91,3 mm", "0 mm"];
    return {
      d: "media",
      e: "Num espectrômetro de massa, íons de carga 1,6 · 10⁻¹⁹ C entram a 10⁵ m/s num campo magnético de 0,5 T, descrevem meia volta e atingem uma placa. Com 1 u = 1,66 · 10⁻²⁷ kg, qual é a distância, na placa, entre os pontos atingidos por íons de 20 u e de 22 u?",
      o,
      x: "Cada íon descreve meia circunferência de raio r = m · v/(q · B) e atinge a placa a uma distância 2r do ponto de entrada. Para 20 u: r = 20 · 1,66 · 10⁻²⁷ · 10⁵/(1,6 · 10⁻¹⁹ · 0,5) = 3,32 · 10⁻²¹/(8 · 10⁻²⁰) ≅ 0,0415 m. Para 22 u, o raio é 22/20 disso, ≅ 0,0457 m. A distância entre os pontos de impacto é 2 · (0,0457 − 0,0415) ≅ 0,0083 m ≅ 8,3 mm. É assim que o espectrômetro separa isótopos: com a mesma carga e a mesma velocidade, os raios são proporcionais às massas.\n\n4,2 mm é a diferença entre os raios, sem considerar que cada íon percorre um diâmetro até a placa. 41,5 mm é o raio da trajetória do íon mais leve. 91,3 mm é o diâmetro da trajetória do mais pesado. E 0 mm supõe que íons de mesma carga e mesma velocidade sigam o mesmo caminho, ignorando a massa.",
      /* simula meia volta de cada íon e mede o ponto mais afastado da entrada, que é o de impacto */
      v: { i: () => { const alcance = (u) => { let mx = 0; simula(lorentz(1.6e-19, u * 1.66e-27, [0, 0, 0], [0, 0, 0.5]), [0, 0, 0, 0, 1e5, 0], 1e-10, (t, y) => { mx = Math.max(mx, Math.abs(y[0])); return t > 0 && y[1] < 0; }); return mx; }; return qual(Math.abs(alcance(22) - alcance(20)), o, 1e-3); } },
    };
  })(),

  /* ----------------------------------------------------------- difíceis --- */
  (() => {
    const o = ["0,1π m", "0,1√3π m", "0,2π m", "0,05 m", "0,05π m"];
    return {
      d: "dificil",
      e: "Um próton, de massa 1,6 · 10⁻²⁷ kg e carga 1,6 · 10⁻¹⁹ C, entra num campo magnético uniforme de 0,2 T com velocidade de 2 · 10⁶ m/s, formando 60° com as linhas de campo, e passa a descrever uma hélice. Qual é o passo dessa hélice, isto é, a distância que ele avança ao longo do campo a cada volta?",
      o,
      x: "Decompõe-se a velocidade: a componente paralela ao campo, v · cos 60° = 10⁶ m/s, não sofre força e se mantém; a perpendicular, v · sen 60° = √3 · 10⁶ m/s, produz o movimento circular. O período da volta não depende da velocidade: T = 2πm/(q · B) = 2π · 10⁻⁸/0,2 = π · 10⁻⁷ s. O passo é a distância percorrida ao longo do campo nesse tempo: p = v∥ · T = 10⁶ · π · 10⁻⁷ = 0,1π m ≅ 0,31 m.\n\n0,1√3π m usa a componente perpendicular (sen 60°) no lugar da paralela. 0,2π m usa a velocidade inteira, sem decompor. 0,05 m esquece o fator 2π do período. E 0,05π m usa o tempo de meia volta.",
      /* simula em 3D e mede o avanço ao longo do campo quando a velocidade transversal completa uma volta */
      v: { i: () => {
        let ang = 0, prev = 0, zAnt = 0, passo = null;
        simula(lorentz(1.6e-19, 1.6e-27, [0, 0, 0], [0, 0, 0.2]), [0, 0, 0, 2e6 * Math.sin(Math.PI / 3), 0, 2e6 * Math.cos(Math.PI / 3)], 1e-11, (t, y) => {
          const a = Math.atan2(y[4], y[3]); let da = a - prev;
          if (da > Math.PI) da -= 2 * Math.PI; if (da < -Math.PI) da += 2 * Math.PI;
          const novo = ang + Math.abs(da);
          if (novo >= 2 * Math.PI && passo === null) passo = zAnt + ((2 * Math.PI - ang) / (novo - ang)) * (y[2] - zAnt);
          ang = novo; prev = a; zAnt = y[2];
          return passo !== null;
        });
        return qual(passo, o, 1e-5);
      } },
    };
  })(),
  (() => {
    const o = ["8 m/s", "4 m/s", "2 m/s", "0,125 m/s", "Não há velocidade limite: a barra cai com aceleração g"];
    return {
      d: "dificil",
      e: "Uma barra condutora de 0,1 kg e 0,5 m de comprimento cai sem atrito, deslizando entre dois trilhos verticais ligados na parte de cima por um resistor de 2 Ω, numa região de campo magnético horizontal de 1 T, perpendicular ao plano dos trilhos. Desprezando as demais resistências e com g = 10 m/s², qual é a velocidade limite da barra?",
      o,
      x: "Ao cair com velocidade v, a barra gera ε = B · L · v, e a corrente I = B · L · v/R produz sobre ela uma força magnética para cima, F = B · I · L = B² · L² · v/R, que cresce com a velocidade. A velocidade limite é atingida quando essa força equilibra o peso: B² · L² · v/R = m · g, e v = m · g · R/(B² · L²) = 0,1 · 10 · 2/(1 · 0,25) = 8 m/s. A partir daí, toda a energia potencial perdida vira calor no resistor.\n\n4 m/s esquece de elevar B · L ao quadrado. 2 m/s põe a resistência no denominador. 0,125 m/s inverte a fração. E a barra não cai em queda livre: a corrente induzida cria uma força que se opõe ao movimento, como prevê a lei de Lenz.",
      /* simula a queda: fem, corrente e força magnética a cada passo, por 30 s */
      v: { i: () => { const B = 1, L = 0.5, R = 2, m = 0.1; const r = simula((t, y) => { const I = (B * L * y[0]) / R; return [10 - (B * I * L) / m]; }, [0], 1e-4, (t) => t >= 30); return qual(r.y[0], o, 1e-6); } },
    };
  })(),
  (() => {
    const o = ["1 V", "2 V", "4 V", "0 V", "0,5 V"];
    return {
      d: "dificil",
      e: "Presa por uma das pontas a um eixo, uma haste metálica de 0,5 m gira a 40 rad/s, varrendo um plano perpendicular às linhas de um campo magnético uniforme de 0,2 T. Que diferença de potencial se estabelece entre o eixo e a ponta livre?",
      o,
      x: "Cada ponto da barra, a uma distância r do eixo, tem velocidade ω · r e contribui com B · ω · r por unidade de comprimento. Como a velocidade cresce linearmente ao longo da barra, a fem é a que se obtém com a velocidade do ponto médio, ω · L/2: ε = B · L · (ω · L/2) = B · ω · L²/2 = 0,2 · 40 · 0,25/2 = 1 V. Pela lei de Faraday, o resultado é o mesmo: a barra varre a área L²/2 por radiano, e o fluxo varia B · ω · L²/2 por segundo.\n\n2 V usa a velocidade da ponta, ω · L, para a barra inteira. 4 V é B · ω · L, que nem tem unidade de tensão: falta um fator de comprimento. 0 V supõe que as contribuições se cancelem, mas todas têm o mesmo sentido. E 0,5 V considera só metade da barra, com a velocidade do ponto médio.",
      /* integral de (v × B) · dl ao longo da barra, com v = ω r perpendicular a ela */
      v: { i: () => qual(Math.abs(integra((r) => escalar(cruz([0, 40 * r, 0], [0, 0, 0.2]), [1, 0, 0]), 0, 0.5, 200)), o, 1e-9) },
    };
  })(),
  (() => {
    const o = ["≈ 3,5 · 10⁻⁵ V", "5 · 10⁻⁵ V", "2,5 · 10⁻⁵ V", "≈ 6,9 · 10⁻⁷ V", "Zero, porque o fio e a espira estão no mesmo plano"];
    return {
      d: "dificil",
      e: "Um fio retilíneo longo e uma espira retangular estão no mesmo plano. A espira tem 0,5 m de lado paralelo ao fio e ocupa a faixa entre 0,1 m e 0,2 m de distância dele. Com µ₀ = 4π · 10⁻⁷ T·m/A, se a corrente no fio cai uniformemente de 10 A a zero em 0,02 s, qual é a força eletromotriz média induzida na espira?",
      o,
      x: "O campo do fio não é uniforme sobre a espira: vale µ₀I/(2πr) e diminui com a distância r. O fluxo se obtém somando faixas finas, paralelas ao fio: Φ = (µ₀ · I · ℓ/2π) · ln(b/a) = 2 · 10⁻⁷ · 10 · 0,5 · ln 2 ≅ 6,9 · 10⁻⁷ Wb. Com a corrente caindo a zero em 0,02 s, o fluxo cai desse valor a zero, e a fem média é ε = 6,9 · 10⁻⁷/0,02 ≅ 3,5 · 10⁻⁵ V.\n\n5 · 10⁻⁵ V supõe o campo uniforme e igual ao do lado mais próximo, a 0,1 m. 2,5 · 10⁻⁵ V usa o campo do lado mais distante, a 0,2 m. 6,9 · 10⁻⁷ V é o fluxo inicial, sem dividir pelo tempo. E estar no mesmo plano é justamente o que faz o campo do fio atravessar a espira perpendicularmente.",
      /* fluxo = integral do campo de Biot–Savart sobre a espira; fem pela derivada com I(t) = 10 − 500t */
      v: { i: () => { const phi1 = 0.5 * integra((r) => fio([0, 0, 0], [1, 0, 0], 1, [0.25, r, 0])[2], 0.1, 0.2, 100); return qual(Math.abs(deriva((t) => (10 - 500 * t) * phi1, 0.01)), o, 0.02); } },
    };
  })(),
  (() => {
    const o = ["2 · 10⁻¹² J", "4 · 10⁻¹² J", "8 · 10⁻¹² J", "5 · 10⁷ J", "8 · 10⁻²⁰ J"];
    return {
      d: "dificil",
      e: "Num cíclotron de raio máximo 0,5 m, com campo magnético de 1 T, prótons são acelerados em órbitas cada vez maiores. Com a massa do próton igual a 1,6 · 10⁻²⁷ kg e a sua carga igual a 1,6 · 10⁻¹⁹ C, qual é a energia cinética máxima com que eles saem do aparelho?",
      o,
      x: "Na órbita de raio máximo, r = m · v/(q · B), e a velocidade é v = q · B · r/m = 1,6 · 10⁻¹⁹ · 1 · 0,5/1,6 · 10⁻²⁷ = 5 · 10⁷ m/s. A energia cinética é m · v²/2 = 1,6 · 10⁻²⁷ · 25 · 10¹⁴/2 = 2 · 10⁻¹² J, cerca de 12,5 MeV. Em forma geral, Ec = q² · B² · r²/(2m): a energia final é limitada pelo tamanho do aparelho e pela intensidade do campo, e não pela tensão entre os dês, que só define quantas voltas o próton dá.\n\n4 · 10⁻¹² J esquece o fator 1/2 da energia cinética. 8 · 10⁻¹² J usa o diâmetro, 1 m, como raio. 5 · 10⁷ J toma a velocidade máxima, em m/s, como energia. E 8 · 10⁻²⁰ J é a quantidade de movimento, q · B · r, tomada como energia.",
      /* bisseção na velocidade até a órbita simulada ter 0,5 m de raio */
      v: { i: () => { const raio = (v) => { let mx = 0; simula(lorentz(1.6e-19, 1.6e-27, [0, 0, 0], [0, 0, 1]), [0, 0, 0, v, 0, 0], 1e-11, (t, y) => { mx = Math.max(mx, Math.hypot(y[0], y[1])); return t > 0 && y[3] < 0 && y[4] > 0; }); return mx / 2; }; const v = bissecao((u) => raio(u) - 0.5, 1e6, 1e9, 60); return qual((1.6e-27 * v * v) / 2, o, 1e-4); } },
    };
  })(),
  (() => {
    const o = ["≈ 0,14 s", "0,2 s", "0,1 s", "≈ 0,69 s", "≈ 3,47 s"];
    return {
      d: "dificil",
      e: "Num circuito RL em série, com resistor de 2 Ω, indutor de 0,4 H e uma bateria ideal, a chave é fechada no instante zero. Em quanto tempo a corrente atinge metade do seu valor final?",
      o,
      x: "A corrente cresce como I(t) = I∞ · (1 − e^(−t/τ)), com τ = L/R = 0,4/2 = 0,2 s. Na metade do valor final, 1 − e^(−t/τ) = 1/2, isto é, e^(−t/τ) = 1/2, e t = τ · ln 2 ≅ 0,2 · 0,693 ≅ 0,14 s. O resultado não depende da tensão da bateria: ela muda o valor final, mas não o ritmo da subida.\n\n0,2 s é a própria constante de tempo, em que a corrente chega a cerca de 63% do valor final, e não a 50%. 0,1 s supõe que a corrente cresça em linha reta até o valor final em τ, passando pela metade em τ/2. 0,69 s é ln 2 sem multiplicar por τ. E 3,47 s inverte a constante de tempo, usando R/L = 5 s⁻¹ como se fosse um tempo.",
      /* simula com 10 V (valor qualquer) e interpola o instante em que a corrente passa por metade de 5 A */
      v: { i: () => { let tAnt = 0, iAnt = 0, tMeio = null; simula((t, y) => [(10 - 2 * y[0]) / 0.4], [0], 1e-5, (t, y) => { if (tMeio === null && y[0] >= 2.5) tMeio = tAnt + ((2.5 - iAnt) / (y[0] - iAnt)) * (t - tAnt); tAnt = t; iAnt = y[0]; return tMeio !== null; }); return qual(Math.round(tMeio * 100) / 100, o, 1e-9); } },
    };
  })(),
  (() => {
    const o = ["Diminui 100 vezes", "Diminui 10 vezes", "Aumenta 100 vezes", "Diminui 1.000 vezes", "Não muda"];
    return {
      d: "dificil",
      e: "Uma usina entrega 100 kW a uma cidade por uma linha de transmissão de resistência total 10 Ω. Se a tensão de transmissão passa de 5 kV para 50 kV, mantida a potência entregue, o que acontece com a potência perdida na linha?",
      o,
      x: "Para entregar a mesma potência, a corrente na linha é I = P/U: 100.000/5.000 = 20 A no primeiro caso e 100.000/50.000 = 2 A no segundo. A perda na linha é R · I²: 10 · 400 = 4.000 W, e depois 10 · 4 = 40 W. Com a tensão 10 vezes maior, a corrente fica 10 vezes menor, e a perda, que depende do quadrado da corrente, cai 100 vezes. É por isso que se transmite energia em alta tensão, com transformadores elevando e abaixando a tensão nas pontas da linha.\n\n“Diminui 10 vezes” supõe a perda proporcional à corrente. “Aumenta 100 vezes” aplica U²/R com a tensão de transmissão, mas essa tensão não fica toda sobre a resistência da linha: a queda na linha é só R · I. “Diminui 1.000 vezes” usa o cubo da razão. E “não muda” esquece que a corrente depende da tensão de transmissão.",
      /* corrente que entrega 100 kW em cada tensão; perda R · I² */
      v: { i: () => { const perda = (U) => { const I = bissecao((i) => U * i - 1e5, 0, 1e4); return 10 * I * I; }; const r = perda(5e3) / perda(5e4); return unicoV(o.map((t) => { const m = t.match(/^Diminui ([\d.]+) vezes$/); if (m) return Math.abs(Number(m[1].replace(".", "")) - r) < 1e-6 * r; if (/^Aumenta/.test(t)) return r < 1 - 1e-9; return Math.abs(r - 1) < 1e-9; })); } },
    };
  })(),
  (() => {
    const o = ["0,2 s, em sentidos opostos na entrada e na saída", "0,2 s, no mesmo sentido na entrada e na saída", "0,35 s, todo o tempo em que alguma parte da espira está no campo", "0,25 s, o tempo de atravessar a largura da faixa", "0,15 s, enquanto a espira está inteiramente dentro do campo"];
    return {
      d: "dificil",
      e: "Uma espira quadrada de 0,2 m de lado atravessa, com velocidade constante de 2 m/s, uma faixa de 0,5 m de largura onde há um campo magnético uniforme perpendicular ao plano da espira; fora da faixa, não há campo. Durante quanto tempo, no total, circula corrente induzida na espira?",
      o,
      x: "Só há corrente enquanto o fluxo varia. Na entrada, a espira leva 0,2/2 = 0,1 s para ficar inteiramente dentro da faixa, e o fluxo cresce. Depois, por (0,5 − 0,2)/2 = 0,15 s, a espira está toda dentro do campo: o fluxo é constante e não há corrente. Na saída, mais 0,1 s com o fluxo diminuindo. No total, 0,2 s de corrente. Na entrada, ela se opõe ao aumento do fluxo e, na saída, à diminuição; por isso tem sentidos opostos nas duas fases.\n\n“No mesmo sentido” ignora que o fluxo cresce numa fase e decresce na outra. 0,35 s inclui o intervalo em que a espira está toda dentro do campo, sem variação de fluxo. 0,25 s é o tempo de percorrer a largura da faixa, que não coincide com as fases de variação. E 0,15 s é justamente o intervalo sem corrente.",
      /* fem pela força magnética nos lados verticais que estão dentro da faixa (0 < x < 0,5); varredura no tempo */
      v: { i: () => {
        const dentro = (x) => x > 0 && x < 0.5, vxB = cruz([2, 0, 0], [0, 0, -1]);
        const fem = (t) => { const xf = 2 * t, xb = xf - 0.2; return (dentro(xf) ? escalar(vxB, [0, 0.2, 0]) : 0) + (dentro(xb) ? escalar(vxB, [0, -0.2, 0]) : 0); };
        const dt = 1e-5; let total = 0; for (let k = 0; k < 50000; k++) if (Math.abs(fem((k + 0.5) * dt)) > 1e-12) total += dt;
        const opostos = fem(0.05) !== 0 && Math.sign(fem(0.05)) === -Math.sign(fem(0.3));
        const T = Math.round(total * 100) / 100;
        return unicoV(o.map((txt) => { const [n, resto] = txt.split(", "); return Math.abs(valor(n) - T) < 1e-9 && (resto.startsWith("em sentidos opostos") ? opostos : resto.startsWith("no mesmo sentido") ? !opostos : false); }));
      } },
    };
  })(),
  (() => {
    const o = ["30°", "60°", "90°", "45°", "0°"];
    return {
      d: "dificil",
      e: "Um próton, de massa 1,6 · 10⁻²⁷ kg e carga 1,6 · 10⁻¹⁹ C, entra a 10⁶ m/s, perpendicularmente às bordas, numa região limitada por dois planos paralelos distantes 2,5 cm, onde há um campo magnético uniforme de 0,2 T paralelo a esses planos e perpendicular à velocidade. De que ângulo a direção do seu movimento é desviada quando ele sai da região?",
      o,
      x: "Dentro da região, o próton descreve um arco de circunferência de raio r = m · v/(q · B) = 1,6 · 10⁻²⁷ · 10⁶/(1,6 · 10⁻¹⁹ · 0,2) = 0,05 m = 5 cm. Ele entra perpendicularmente à borda, com o centro da circunferência sobre ela; ao avançar a largura d = 2,5 cm, o ângulo girado θ satisfaz sen θ = d/r = 2,5/5 = 0,5, e θ = 30°. Como a velocidade é sempre tangente ao arco, a direção do movimento gira desses mesmos 30°.\n\n60° usa cos θ = d/r em vez do seno. 90° supõe um quarto de volta, o que só aconteceria se a largura fosse igual ao raio. 45° supõe o desvio proporcional à largura, metade de 90°. E 0° confunde a rapidez, que o campo magnético não altera, com a direção, que ele altera.",
      /* simula até o próton atravessar os 2,5 cm e mede o ângulo da velocidade */
      v: { i: () => { const r = simula(lorentz(1.6e-19, 1.6e-27, [0, 0, 0], [0, 0, 0.2]), [0, 0, 0, 1e6, 0, 0], 1e-12, (t, y) => y[0] >= 0.025); return qual((Math.atan2(Math.abs(r.y[4]), r.y[3]) * 180) / Math.PI, o, 1e-3); } },
    };
  })(),
  (() => {
    const o = ["500 W", "1.000 W", "250 W", "707 W", "0,05 W"];
    return {
      d: "dificil",
      e: "Uma bobina de 50 espiras, cada uma com área de 0,04 m², gira a 100 rad/s num campo magnético uniforme de 0,5 T e alimenta um resistor de 10 Ω; a resistência da bobina é desprezível. Qual é a potência média dissipada no resistor?",
      o,
      x: "A fem máxima é εmáx = N · B · A · ω = 50 · 0,5 · 0,04 · 100 = 100 V. A potência instantânea no resistor é ε²/R = (εmáx²/R) · sen²(ωt), e a média de sen² ao longo de um ciclo é 1/2: P = εmáx²/(2R) = 10.000/20 = 500 W. Dá o mesmo usar o valor eficaz, εmáx/√2 ≅ 70,7 V: P = 70,7²/10 ≅ 500 W.\n\n1.000 W é a potência de pico, εmáx²/R, atingida só nos instantes de fem máxima. 250 W usa a metade da fem máxima como valor eficaz. 707 W divide por √2 em vez de 2, como se só a tensão fosse tomada pelo valor eficaz, e a corrente não. E 0,05 W esquece a velocidade angular no cálculo da fem.",
      /* média, num período, de ε²/R com ε = −dΛ/dt (Λ = N · B · A · cos ωt) */
      v: { i: () => { const w = 100, T = (2 * Math.PI) / w; const fl = (t) => 50 * 0.5 * 0.04 * Math.cos(w * t); return qual(integra((t) => deriva(fl, t, 1e-7) ** 2 / 10, 0, T, 4000) / T, o, 1e-6); } },
    };
  })(),
];
