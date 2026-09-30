/* Rascunho — Exatas nível militar / Termodinâmica: ciclos e máquinas térmicas.

   A explicação usa as fórmulas prontas (W = pΔV, primeira lei, rendimento
   de Carnot 1 − Tf/Tq, pV^γ constante); a conferência chega ao número por
   outro caminho: trabalho como integral numérica de p dV ao longo do
   caminho, energia interna como função de estado ((f/2) · pV), adiabáticas
   obtidas passo a passo da primeira lei (dU = −p dV, Runge–Kutta) e o ciclo
   de Carnot montado trecho a trecho, com os volumes das adiabáticas achados
   por bisseção — o rendimento sai de W/Qq, sem usar 1 − Tf/Tq. */

import { unicoV, lerExpr, integra, simula, bissecao, resolve } from "./_exatas.mjs";

export const materia = "exatas-militar";
export const tema = "Termodinâmica: ciclos e máquinas térmicas";
export const arquivo = "exatas-militar__termodinamica-ciclos-e-maquinas-termicas";

const R = 8.31;
/* trabalho realizado pelo gás ao longo de p(V), de V1 a V2 */
const trabalho = (p, V1, V2, n = 20000) => integra(p, V1, V2, n);
/* energia interna de um gás ideal: (f/2) · pV (f = 3 monoatômico, f = 5 diatômico) */
const U = (p, V, f = 3) => (f / 2) * p * V;
/* adiabática pela primeira lei: dU = −p dV com U = (f/2) pV. Parametrizada por
   s de 0 a 1, com V = V1 · (V2/V1)^s; devolve a pressão final e o trabalho. */
const adiabatica = (p1, V1, V2, f = 3) => {
  const L = Math.log(V2 / V1);
  const r = simula((s, y) => { const V = V1 * Math.exp(s * L); return [-(1 + 2 / f) * y[0] * L, y[0] * V * L]; }, [p1, 0], 1e-4, (s) => s >= 1 - 1e-12);
  return { p: r.y[0], W: r.y[1] };
};
/* ciclo de Carnot com n mols: isoterma quente de V1 a V2, adiabática até Tf,
   isoterma fria e adiabática de volta a V1 */
const carnot = (Tq, Tf, V1 = 0.01, V2 = 0.02, n = 1, f = 3) => {
  const iso = (T, a, b) => trabalho((V) => (n * R * T) / V, a, b);
  const p1 = (n * R * Tq) / V1, p2 = (n * R * Tq) / V2;
  const Tfim = (p, a, b) => (adiabatica(p, a, b, f).p * b) / (n * R);
  const V3 = bissecao((V) => Tfim(p2, V2, V) - Tf, V2, V2 * 1e4, 60);
  const V4 = bissecao((V) => Tfim(p1, V1, V) - Tf, V1, V1 * 1e4, 60);
  const W12 = iso(Tq, V1, V2), W23 = adiabatica(p2, V2, V3, f).W, W34 = iso(Tf, V3, V4), W41 = adiabatica((n * R * Tf) / V4, V4, V1, f).W;
  const W = W12 + W23 + W34 + W41;
  return { Qq: W12, Qf: -W34, W, eta: W / W12 };
};

/* valor da alternativa: "4.000 J", "≈ 1,7 kJ", "40%", "1 · 10⁻⁷ J", "14 min" (em segundos) */
const SUP = { "⁰": "0", "¹": "1", "²": "2", "³": "3", "⁴": "4", "⁵": "5", "⁶": "6", "⁷": "7", "⁸": "8", "⁹": "9", "⁻": "-" };
const FATOR = { "J/K": 1, kJ: 1e3, kW: 1e3, atm: 1, min: 60, vezes: 1, J: 1, K: 1, W: 1, s: 1, "%": 0.01 };
const valor = (t) => {
  const m = String(t).trim().replace(/^≈\s*/, "").match(/^(.*?)\s*(J\/K|kJ|kW|atm|min|vezes|J|K|W|s|%)?$/);
  const s = m[1].replace(/10([⁻⁰¹²³⁴⁵⁶⁷⁸⁹]+)/g, (x, e) => `10**(${[...e].map((c) => SUP[c]).join("")})`).replace(/\.(?=\d{3})/g, "");
  return lerExpr(s) * (FATOR[m[2]] ?? 1);
};
/* índice da única alternativa com o valor x (tolerância relativa; zero só casa com zero) */
const qual = (x, alt, tol = 1e-6) => unicoV(alt.map((t) => { let v; try { v = valor(t); } catch { return false; } return x === 0 ? v === 0 : Math.abs(v - x) <= tol * Math.abs(x); }));

export const questoes = [
  /* ------------------------------------------------------------ fáceis --- */
  (() => {
    const o = ["4.000 J", "6.000 J", "2.000 J", "8.000 J", "1 · 10⁻⁷ J"];
    return {
      d: "facil",
      e: "Um gás se expande sob pressão constante de 2 · 10⁵ Pa, passando de 0,01 m³ para 0,03 m³. Qual é o trabalho realizado pelo gás?",
      o,
      x: "Sob pressão constante, o trabalho realizado pelo gás é W = p · ΔV = 2 · 10⁵ · (0,03 − 0,01) = 2 · 10⁵ · 0,02 = 4.000 J. No diagrama pV, é a área do retângulo sob a reta horizontal, entre os dois volumes. Como o gás se expande, o trabalho é positivo: o gás empurra a vizinhança.\n\n6.000 J usa o volume final em vez da variação. 2.000 J usa o volume inicial. 8.000 J soma os dois volumes. E 1 · 10⁻⁷ J divide a variação de volume pela pressão.",
      v: { i: () => qual(trabalho(() => 2e5, 0.01, 0.03), o) },
    };
  })(),
  (() => {
    const o = ["300 J", "700 J", "−300 J", "200 J", "500 J"];
    return {
      d: "facil",
      e: "Um gás recebe 500 J de calor e, ao mesmo tempo, realiza 200 J de trabalho sobre a vizinhança. Qual é a variação da sua energia interna?",
      o,
      x: "Pela primeira lei da termodinâmica, Q = ΔU + W, em que Q é o calor recebido e W o trabalho realizado pelo gás. Então ΔU = Q − W = 500 − 200 = 300 J: dos 500 J que entram como calor, 200 J saem como trabalho, e o restante fica no gás, aumentando a sua energia interna (e a sua temperatura, se for um gás ideal).\n\n700 J soma o trabalho ao calor, como se o gás o tivesse recebido. −300 J inverte o sinal, como se o gás perdesse energia. 200 J é o trabalho, e 500 J, o calor recebido; nenhum dos dois é a variação da energia interna.",
      /* exemplo concreto: gás monoatômico aquecido a 1 · 10⁵ Pa até receber 500 J; confere que o trabalho é 200 J e mede ΔU pela função de estado */
      v: { i: () => {
        const Q = (V) => U(1e5, V) - U(1e5, 0.01) + trabalho(() => 1e5, 0.01, V);
        const V2 = bissecao((V) => Q(V) - 500, 0.01, 0.1);
        if (Math.abs(trabalho(() => 1e5, 0.01, V2) - 200) > 1e-6) throw new Error("o exemplo não realiza 200 J");
        return qual(U(1e5, V2) - U(1e5, 0.01), o, 1e-6);
      } },
    };
  })(),
  (() => {
    const o = ["40%", "88%", "60%", "67%", "100%"];
    return {
      d: "facil",
      e: "Uma máquina de Carnot opera entre uma fonte quente a 227 °C e uma fonte fria a 27 °C. Qual é o seu rendimento?",
      o,
      x: "O rendimento de Carnot, o máximo possível entre duas temperaturas, é η = 1 − Tf/Tq, com as temperaturas em kelvin: Tq = 227 + 273 = 500 K e Tf = 27 + 273 = 300 K. Então η = 1 − 300/500 = 0,4 = 40%. Nenhuma máquina operando entre essas fontes consegue converter em trabalho mais de 40% do calor que recebe.\n\n88% usa as temperaturas em graus Celsius, 1 − 27/227. 60% é a razão Tf/Tq, a fração do calor que vai para a fonte fria. 67% divide a diferença de temperaturas pela temperatura fria em vez da quente. E 100% é impossível para qualquer máquina térmica, mesmo ideal.",
      v: { i: () => qual(carnot(500, 300).eta, o, 1e-5) },
    };
  })(),
  (() => {
    const o = ["800 J", "0 J", "1.600 J", "400 J", "−800 J"];
    return {
      d: "facil",
      e: "Um gás ideal se expande isotermicamente e, nesse processo, recebe 800 J de calor. Qual é o trabalho realizado pelo gás?",
      o,
      x: "A energia interna de um gás ideal depende só da temperatura; numa transformação isotérmica, ela não varia: ΔU = 0. Pela primeira lei, Q = ΔU + W, e então W = Q = 800 J. Todo o calor recebido sai como trabalho, e é por isso que o gás consegue se expandir sem esfriar.\n\n0 J confunde a variação nula da energia interna com trabalho nulo. 1.600 J soma calor e trabalho como se fossem parcelas independentes. 400 J divide o calor entre trabalho e energia interna, o que acontece em outros processos, e não no isotérmico. E −800 J inverte o sinal: numa expansão, o gás realiza trabalho positivo.",
      /* 1 mol a 300 K: expande pela isoterma até receber 800 J (ΔU pela função de estado + trabalho integrado) */
      v: { i: () => { const T = 300, V1 = 0.01, p = (V) => (R * T) / V; const Q = (V2) => U(p(V2), V2) - U(p(V1), V1) + trabalho(p, V1, V2); const V2 = bissecao((V) => Q(V) - 800, V1, 1); return qual(trabalho(p, V1, V2), o, 1e-6); } },
    };
  })(),
  (() => {
    const o = ["4 atm", "3 atm", "2,67 atm", "14,1 atm", "1,78 atm"];
    return {
      d: "facil",
      e: "Um gás ideal ocupa 6 L a 27 °C, sob pressão de 2 atm. Se ele for aquecido até 127 °C e comprimido até 4 L, qual será a sua pressão?",
      o,
      x: "Com a quantidade de gás constante, p · V/T se conserva, com T em kelvin: 300 K e 400 K. Então p₂ = p₁ · (V₁/V₂) · (T₂/T₁) = 2 · (6/4) · (400/300) = 2 · 1,5 · 1,33 = 4 atm. A compressão sozinha levaria a 3 atm, e o aquecimento aumenta a pressão em mais um terço.\n\n3 atm considera só a mudança de volume. 2,67 atm considera só a de temperatura. 14,1 atm usa as temperaturas em graus Celsius (127/27). E 1,78 atm inverte a razão dos volumes.",
      /* quantidade de gás pelo estado inicial (em atm·L, com R qualquer); pressão final pela equação de estado */
      v: { i: () => { const Rl = 0.082, n = (2 * 6) / (Rl * 300); return qual((n * Rl * 400) / 4, o, 1e-9); } },
    };
  })(),
  (() => {
    const o = ["800 J", "400 J", "600 J", "200 J", "3 J"];
    return {
      d: "facil",
      e: "A cada ciclo, um refrigerador retira 600 J de calor do seu interior, consumindo 200 J de trabalho do motor. Quanto calor ele libera no ambiente externo por ciclo?",
      o,
      x: "Num ciclo, o fluido refrigerante volta ao estado inicial, e a sua energia interna não varia. Toda a energia que entra precisa sair: os 600 J retirados do interior e os 200 J de trabalho são liberados no ambiente, 600 + 200 = 800 J. É por isso que a parte de trás de uma geladeira esquenta. A eficiência do refrigerador é 600/200 = 3.\n\n400 J subtrai o trabalho em vez de somar. 600 J esquece o trabalho do motor. 200 J é só o trabalho consumido. E 3 é a eficiência, um número sem unidade, e não uma quantidade de calor.",
      /* balanço de um ciclo: a variação da energia interna é nula, então o que sai iguala o que entra */
      v: { i: () => { const dUciclo = U(2e5, 0.01) - U(2e5, 0.01); return qual(600 + 200 - dUciclo, o); } },
    };
  })(),
  (() => {
    const o = [
      "Nenhuma máquina térmica que opere em ciclos converte em trabalho todo o calor que recebe da fonte quente",
      "Uma máquina térmica ideal, sem atrito, pode ter rendimento de 100%",
      "O calor pode passar espontaneamente de um corpo frio para um corpo quente, se o frio tiver mais massa",
      "A energia total de um sistema isolado diminui com o tempo",
      "Um refrigerador pode transferir calor do interior para fora sem consumir trabalho",
    ];
    return {
      d: "facil",
      e: "Qual das afirmações a seguir está de acordo com a segunda lei da termodinâmica?",
      o,
      x: "A segunda lei, no enunciado de Kelvin e Planck, diz que é impossível uma máquina que, operando em ciclos, transforme integralmente em trabalho o calor recebido de uma fonte: parte do calor precisa ser rejeitada para uma fonte fria. Mesmo a máquina ideal de Carnot tem rendimento 1 − Tf/Tq, menor que 100% sempre que a fonte fria está acima do zero absoluto.\n\nA máquina ideal com 100% contradiz exatamente esse enunciado. O calor flui espontaneamente do quente para o frio, qualquer que seja a massa dos corpos (enunciado de Clausius). A energia de um sistema isolado se conserva, pela primeira lei; o que aumenta é a entropia. E o refrigerador só transfere calor do frio para o quente consumindo trabalho.",
      /* testes numéricos de cada afirmação */
      v: { i: () => {
        const c = carnot(500, 300);
        /* dois corpos trocando calor (lei de Newton): o frio tem capacidade térmica 10 vezes maior */
        const Cf = 10, Cq = 1; let quenteSobe = false, T0 = null;
        const r = simula((t, y) => [(y[1] - y[0]) / Cf, (y[0] - y[1]) / Cq], [300, 400], 1e-3, (t, y) => { if (T0 !== null && y[1] > T0 + 1e-12) quenteSobe = true; T0 = y[1]; return t >= 20; });
        const energiaCai = Cf * r.y[0] + Cq * r.y[1] < Cf * 300 + Cq * 400 - 1e-6;
        const trabalhoRefrigerador = c.Qf / (c.Qf / c.W); /* W = Qf/COP */
        return unicoV([c.eta < 1, c.eta >= 1, quenteSobe, energiaCai, trabalhoRefrigerador <= 0]);
      } },
    };
  })(),
  (() => {
    const o = ["30%", "70%", "43%", "143%", "Não é possível calcular sem as temperaturas das fontes"];
    return {
      d: "facil",
      e: "Uma máquina térmica recebe 1.000 J de calor da fonte quente e rejeita 700 J para a fonte fria a cada ciclo. Qual é o seu rendimento?",
      o,
      x: "Num ciclo, a energia interna da substância de trabalho volta ao valor inicial; então o trabalho é a diferença entre o calor recebido e o rejeitado: W = 1.000 − 700 = 300 J. O rendimento é a fração do calor recebido que vira trabalho: η = 300/1.000 = 0,3 = 30%.\n\n70% é a fração rejeitada, 700/1.000. 43% divide o trabalho pelo calor rejeitado em vez do recebido. 143% divide o calor recebido pelo rejeitado; um rendimento acima de 100% é impossível. E as temperaturas seriam necessárias para o rendimento máximo, de Carnot, mas não para o rendimento real, que sai direto dos calores.",
      v: { i: () => { const W = bissecao((w) => 1000 - 700 - w, 0, 1000); return qual(W / 1000, o, 1e-9); } },
    };
  })(),
  (() => {
    const o = ["831 J", "1.246,5 J", "2.077,5 J", "415,5 J", "0 J"];
    return {
      d: "facil",
      e: "Dois mols de um gás ideal são aquecidos sob pressão constante, e a sua temperatura aumenta 50 K. Com R = 8,31 J/(mol·K), qual é o trabalho realizado pelo gás?",
      o,
      x: "Sob pressão constante, W = p · ΔV, e, pela equação dos gases ideais, p · ΔV = n · R · ΔT. Então W = 2 · 8,31 · 50 = 831 J. O trabalho não depende da pressão escolhida nem do tipo de gás, só da quantidade de gás e da variação de temperatura.\n\n1.246,5 J é (3/2) · n · R · ΔT, a variação da energia interna de um gás monoatômico. 2.077,5 J é (5/2) · n · R · ΔT, o calor recebido por esse gás. 415,5 J considera um mol só. E 0 J supõe que o trabalho seja nulo, o que vale para volume constante.",
      /* a 1 · 10⁵ Pa, de 300 K a 350 K: volumes pela equação de estado, trabalho integrado */
      v: { i: () => { const p = 1e5, V1 = (2 * R * 300) / p, V2 = (2 * R * 350) / p; return qual(trabalho(() => p, V1, V2), o, 1e-9); } },
    };
  })(),
  (() => {
    const o = ["Trabalho nulo e ΔU = 400 J", "Trabalho de 400 J e ΔU = 0", "Trabalho de 200 J e ΔU = 200 J", "Trabalho nulo e ΔU = 0", "Trabalho de 400 J e ΔU = 400 J"];
    return {
      d: "facil",
      e: "Um gás recebe 400 J de calor numa transformação a volume constante. Quais são o trabalho realizado por ele e a variação da sua energia interna?",
      o,
      x: "Sem variação de volume, o gás não empurra nada, e o trabalho é nulo: W = p · ΔV = 0. Pela primeira lei, ΔU = Q − W = 400 − 0 = 400 J: todo o calor recebido fica no gás como energia interna, e a sua temperatura e a sua pressão aumentam.\n\n“Trabalho de 400 J e ΔU = 0” descreve uma transformação isotérmica. “200 J e 200 J” divide o calor sem justificativa. “Trabalho nulo e ΔU = 0” esquece o calor recebido. E “400 J e 400 J” conta o calor duas vezes, violando a conservação da energia.",
      v: { i: () => { const W = trabalho(() => 3e5, 0.01, 0.01, 10), dU = 400 - W; return unicoV(o.map((t) => { const m = t.match(/^Trabalho (?:nulo|de (\d+) J) e ΔU = (\d+)(?: J)?$/); return (m[1] ? Number(m[1]) : 0) === W && Number(m[2]) === dU; })); } },
    };
  })(),
  (() => {
    const o = ["600 J", "1.500 J", "900 J", "300 J", "0 J"];
    return {
      d: "facil",
      e: "Um gás percorre, no sentido horário do diagrama pV, um ciclo retangular com pressões de 1 · 10⁵ Pa e 3 · 10⁵ Pa e volumes de 2 L e 5 L. Qual é o trabalho líquido realizado pelo gás em cada ciclo?",
      o,
      x: "O trabalho líquido num ciclo é a área que ele encerra no diagrama pV, positiva quando o ciclo é percorrido no sentido horário. O retângulo tem altura 3 · 10⁵ − 1 · 10⁵ = 2 · 10⁵ Pa e largura 5 − 2 = 3 L = 3 · 10⁻³ m³: W = 2 · 10⁵ · 3 · 10⁻³ = 600 J. Na expansão, sob a pressão maior, o gás realiza 900 J; na compressão, sob a menor, recebe 300 J.\n\n1.500 J multiplica a pressão maior pelo volume maior. 900 J é só o trabalho da expansão. 300 J é só o da compressão. E 0 J supõe que, por voltar ao estado inicial, o gás não realize trabalho líquido; o que se anula num ciclo é a variação da energia interna.",
      /* soma dos quatro trechos: sobe a 2 L, expande a 3 · 10⁵ Pa, desce a 5 L, comprime a 1 · 10⁵ Pa */
      v: { i: () => qual(trabalho(() => 3e5, 2e-3, 2e-3, 10) + trabalho(() => 3e5, 2e-3, 5e-3) + trabalho(() => 1e5, 5e-3, 5e-3, 10) + trabalho(() => 1e5, 5e-3, 2e-3), o, 1e-9) },
    };
  })(),
  (() => {
    const o = ["Aumenta, porque o trabalho realizado sobre o gás aumenta a sua energia interna", "Diminui, porque o gás perde calor para o ambiente", "Não muda, porque não há troca de calor", "Aumenta, porque o gás recebe calor do ambiente", "Não muda, porque a compressão é isotérmica"];
    return {
      d: "facil",
      e: "Numa compressão adiabática rápida, como a do ar numa bomba de encher pneus, o que acontece com a temperatura do gás?",
      o,
      x: "Numa transformação adiabática, não há troca de calor: Q = 0. Pela primeira lei, ΔU = Q − W = −W; na compressão, o trabalho realizado pelo gás é negativo (é a vizinhança que realiza trabalho sobre ele), e então ΔU > 0. Num gás ideal, energia interna maior significa temperatura maior. É por isso que a bomba de encher pneus esquenta na ponta.\n\n“Perde calor” e “recebe calor” contradizem a própria definição de adiabática. “Não muda, porque não há troca de calor” confunde calor com temperatura: a energia interna pode variar por trabalho. E a compressão rápida não é isotérmica: não dá tempo de o gás trocar calor e manter a temperatura.",
      /* comprime adiabaticamente pela metade e compara pV (proporcional à temperatura) */
      v: { i: () => { const a = adiabatica(1e5, 1e-3, 0.5e-3); const sobe = a.p * 0.5e-3 > 1e5 * 1e-3 * (1 + 1e-9); return unicoV(o.map((_, i) => i === (sobe ? 0 : 2))); } },
    };
  })(),

  /* ------------------------------------------------------------- médias --- */
  (() => {
    const o = ["≈ 1,7 kJ", "≈ 2,5 kJ", "≈ 0,75 kJ", "0 J", "≈ 5,0 kJ"];
    return {
      d: "media",
      e: "Um mol de gás ideal se expande isotermicamente a 300 K até dobrar de volume. Com R = 8,31 J/(mol·K) e ln 2 ≅ 0,69, qual é o trabalho realizado pelo gás?",
      o,
      x: "Na isoterma, a pressão cai à medida que o volume cresce, p = nRT/V, e o trabalho é a área sob essa curva: W = n · R · T · ln(V₂/V₁) = 1 · 8,31 · 300 · ln 2 ≅ 2.493 · 0,69 ≅ 1.720 J ≅ 1,7 kJ. Como a energia interna não varia, o gás recebe exatamente esse calor da vizinhança.\n\n2,5 kJ é n · R · T, sem o logaritmo. 0,75 kJ usa o logaritmo decimal de 2 (≅ 0,30) no lugar do natural. 0 J confunde a energia interna constante com trabalho nulo. E 5,0 kJ multiplica n · R · T pela razão dos volumes, 2, em vez de pelo seu logaritmo.",
      v: { i: () => qual(trabalho((V) => (R * 300) / V, 0.01, 0.02), o, 0.03) },
    };
  })(),
  (() => {
    const o = ["32 vezes", "8 vezes", "64 vezes", "13,3 vezes", "4 vezes"];
    return {
      d: "media",
      e: "Um gás ideal monoatômico (γ = 5/3) é comprimido adiabaticamente até 1/8 do volume inicial. Por quanto fica multiplicada a sua pressão?",
      o,
      x: "Numa adiabática, p · V^γ é constante: p₂/p₁ = (V₁/V₂)^γ = 8^(5/3) = (8^(1/3))⁵ = 2⁵ = 32. A pressão sobe mais do que numa compressão isotérmica porque, sem trocar calor, o gás também esquenta: a temperatura fica multiplicada por 8^(2/3) = 4, e 8 · 4 = 32.\n\n8 vezes é o resultado isotérmico, da lei de Boyle. 64 vezes eleva 8 ao quadrado. 13,3 vezes multiplica 8 por γ em vez de elevar. E 4 vezes é o fator da temperatura, e não o da pressão.",
      v: { i: () => qual(adiabatica(1, 1, 1 / 8).p, o, 1e-6) },
    };
  })(),
  (() => {
    const o = ["9", "10", "0,9", "0,1", "1/9"];
    return {
      d: "media",
      e: "Um refrigerador de Carnot retira calor de um congelador a −3 °C e o descarrega num ambiente a 27 °C. Qual é a sua eficiência, isto é, a razão entre o calor retirado do congelador e o trabalho consumido?",
      o,
      x: "Para um refrigerador de Carnot, Qf/Qq = Tf/Tq, com as temperaturas em kelvin: 270 K e 300 K. A eficiência é Qf/W = Qf/(Qq − Qf) = Tf/(Tq − Tf) = 270/30 = 9: cada joule de trabalho retira 9 J do congelador. Quanto menor a diferença de temperatura, maior a eficiência.\n\n10 é Tq/(Tq − Tf), a eficiência de uma bomba de calor, que conta o calor entregue ao ambiente. 0,9 é Tf/Tq. 0,1 é a diferença de temperaturas dividida por Tq, o rendimento de uma máquina de Carnot entre as mesmas fontes. E 1/9 inverte a razão.",
      /* o ciclo de Carnot percorrido ao contrário troca os sinais, mas mantém Qf e W */
      v: { i: () => { const c = carnot(300, 270); return qual(c.Qf / c.W, o, 1e-5); } },
    };
  })(),
  (() => {
    const o = ["200 J", "150 J", "800 J", "2.400 J", "450 J"];
    return {
      d: "media",
      e: "Uma máquina térmica tem rendimento de 25% e rejeita 600 J de calor para a fonte fria a cada ciclo. Qual é o trabalho que ela realiza por ciclo?",
      o,
      x: "Se a máquina converte 25% do calor recebido em trabalho, os outros 75% são rejeitados: 0,75 · Qq = 600 J, e Qq = 800 J. O trabalho é W = 0,25 · 800 = 200 J, que também sai de W = Qq − Qf = 800 − 600.\n\n150 J aplica os 25% ao calor rejeitado, e não ao recebido. 800 J é o calor recebido. 2.400 J divide o calor rejeitado pelo rendimento. E 450 J aplica 75% ao calor rejeitado.",
      /* sistema: W = 0,25 Qq e Qq − W = 600 */
      v: { i: () => { const [W] = resolve([[1, -0.25], [-1, 1]], [0, 600]); return qual(W, o, 1e-9); } },
    };
  })(),
  (() => {
    const o = ["Não: o rendimento máximo entre essas temperaturas é de 50%, e a máquina teria 60%", "Sim: 60% é menor que 100%", "Sim, desde que a máquina não tenha atrito", "Não: o rendimento máximo é de 50%, e a máquina teria 40%", "Sim: o rendimento máximo entre essas temperaturas é de 67%"];
    return {
      d: "media",
      e: "Um inventor afirma que a sua máquina, operando entre fontes a 400 K e a 200 K, recebe 1.000 J e realiza 600 J de trabalho por ciclo. A afirmação é possível?",
      o,
      x: "Nenhuma máquina operando entre duas fontes supera o rendimento de Carnot: ηmáx = 1 − Tf/Tq = 1 − 200/400 = 0,5 = 50%. A máquina anunciada teria η = 600/1.000 = 60%, acima do limite: a afirmação viola a segunda lei da termodinâmica.\n\nSer menor que 100% não basta: o limite é o de Carnot. Nem uma máquina sem atrito, que é justamente a de Carnot, passaria de 50%. 40% é a fração rejeitada, e não o rendimento anunciado. E 67% calcula o limite como (Tq − Tf)/Tf, dividindo pela temperatura errada.",
      v: { i: () => { const lim = carnot(400, 200).eta; if (Math.abs(lim - 0.5) > 1e-4) throw new Error("limite de Carnot"); return unicoV(o.map((_, i) => i === (600 / 1000 > lim ? 0 : 1))); } },
    };
  })(),
  (() => {
    const o = ["400 J", "800 J", "1.200 J", "200 J", "0 J"];
    return {
      d: "media",
      e: "Um gás percorre um ciclo triangular no diagrama pV, passando pelos estados A (2 L; 1 · 10⁵ Pa), B (2 L; 3 · 10⁵ Pa) e C (6 L; 1 · 10⁵ Pa), nessa ordem, e voltando a A. Qual é o trabalho líquido realizado pelo gás em cada ciclo?",
      o,
      x: "O trabalho líquido é a área do triângulo encerrado pelo ciclo. A base, sobre a isobárica de 1 · 10⁵ Pa, vai de 2 L a 6 L: 4 · 10⁻³ m³. A altura, de A até B, é 2 · 10⁵ Pa. Área = (4 · 10⁻³ · 2 · 10⁵)/2 = 400 J. O sentido A → B → C → A é horário (sobe, desce pela diagonal para a direita e volta pela base), e por isso o trabalho é positivo.\n\n800 J esquece a divisão por 2; é também a área sob o trecho B → C, que inclui a região abaixo do ciclo. 1.200 J multiplica a pressão máxima pela variação total de volume. 200 J divide a área por 2 duas vezes. E 0 J supõe que o trabalho de um ciclo seja nulo.",
      /* A → B a volume constante; B → C em linha reta no diagrama; C → A a pressão constante */
      v: { i: () => qual(trabalho(() => 1e5, 2e-3, 2e-3, 10) + trabalho((V) => 3e5 - (2e5 / 4e-3) * (V - 2e-3), 2e-3, 6e-3) + trabalho(() => 1e5, 6e-3, 2e-3), o, 1e-9) },
    };
  })(),
  (() => {
    const o = ["≈ 5,8 kJ", "≈ 4,2 kJ", "≈ 1,7 kJ", "≈ 2,5 kJ", "≈ 7,5 kJ"];
    return {
      d: "media",
      e: "Dois mols de um gás ideal diatômico são aquecidos sob pressão constante, de 300 K para 400 K. Com R = 8,31 J/(mol·K), quanto calor o gás recebe?",
      o,
      x: "Num gás diatômico, a energia interna é (5/2) · n · R · T; o aumento é ΔU = (5/2) · 2 · 8,31 · 100 ≅ 4.155 J. Sob pressão constante, o gás ainda realiza W = n · R · ΔT = 2 · 8,31 · 100 = 1.662 J. Pela primeira lei, Q = ΔU + W ≅ 5.817 J ≅ 5,8 kJ, o mesmo que (7/2) · n · R · ΔT.\n\n4,2 kJ é só a variação da energia interna, como se o volume fosse constante. 1,7 kJ é só o trabalho. 2,5 kJ usa (3/2) · n · R · ΔT, a variação da energia interna de um gás monoatômico. E 7,5 kJ usa (9/2) · n · R · ΔT, somando o trabalho duas vezes.",
      v: { i: () => { const p = 1e5, V1 = (2 * R * 300) / p, V2 = (2 * R * 400) / p; return qual(U(p, V2, 5) - U(p, V1, 5) + trabalho(() => p, V1, V2), o, 0.02); } },
    };
  })(),
  (() => {
    const o = ["≈ 15 kJ", "≈ 10 kJ", "≈ 25 kJ", "≈ 4,7 kJ", "≈ 5 kJ"];
    return {
      d: "media",
      e: "Com R = 8,31 J/(mol·K), qual é a energia interna de 3 mols de um gás ideal monoatômico a 127 °C?",
      o,
      x: "A energia interna de um gás ideal monoatômico é a energia cinética de translação das suas moléculas: U = (3/2) · n · R · T, com T em kelvin, 127 + 273 = 400 K. Então U = 1,5 · 3 · 8,31 · 400 ≅ 14.958 J ≅ 15 kJ. Ela depende só da temperatura e da quantidade de gás, e não da pressão ou do volume separadamente.\n\n10 kJ é n · R · T, sem o fator 3/2. 25 kJ usa 5/2, o fator de um gás diatômico. 4,7 kJ usa a temperatura em graus Celsius, 127. E 5 kJ considera um mol só.",
      /* calor recebido a volume constante, de 0 K a 400 K: integral de dU/dT, com U tirada da função de estado */
      v: { i: () => { const V = 0.05; const Q = integra((T) => (U((3 * R * (T + 1e-3)) / V, V) - U((3 * R * T) / V, V)) / 1e-3, 0, 400, 400); return qual(Q, o, 0.02); } },
    };
  })(),
  (() => {
    const o = ["A pressão final é menor na adiabática, porque o gás também esfria", "A pressão final é maior na adiabática, porque o gás não perde calor", "As pressões finais são iguais, porque o volume final é o mesmo", "A pressão final é menor na isotérmica, porque o gás recebe calor", "Na adiabática, a pressão não muda, porque não há troca de calor"];
    return {
      d: "media",
      e: "Um gás ideal monoatômico, a partir de um mesmo estado inicial, dobra de volume numa expansão isotérmica e, em outra experiência, numa expansão adiabática. Como se comparam as pressões finais?",
      o,
      x: "Na isotérmica, a temperatura se mantém e a pressão cai à metade (lei de Boyle). Na adiabática, o gás realiza trabalho sem receber calor e gasta energia interna: a temperatura cai, e a pressão cai mais do que na isotérmica, para 2^(−5/3) ≅ 0,31 da inicial, contra 0,5. No diagrama pV, a adiabática é mais inclinada que a isoterma que passa pelo mesmo ponto.\n\n“Maior na adiabática” ignora o resfriamento. “Iguais” esquece que a pressão depende também da temperatura, e não só do volume. “Menor na isotérmica” inverte o resultado: receber calor é justamente o que mantém mais alta a pressão da isotérmica. E a pressão da adiabática muda bastante: cai com o volume e com a temperatura.",
      v: { i: () => { const p1 = 1e5, V1 = 1e-3; const pIso = (p1 * V1) / (2 * V1), pAd = adiabatica(p1, V1, 2 * V1).p; return unicoV(o.map((_, i) => i === (pAd < pIso - 1e-9 ? 0 : pAd > pIso + 1e-9 ? 1 : 2))); } },
    };
  })(),
  (() => {
    const o = ["+200 J", "−200 J", "+400 J", "−400 J", "0 J"];
    return {
      d: "media",
      e: "Um gás é comprimido, recebendo 300 J de trabalho da vizinhança, e ao mesmo tempo libera 100 J de calor. Qual é a variação da sua energia interna?",
      o,
      x: "Com a convenção Q = ΔU + W, em que Q é o calor recebido e W o trabalho realizado pelo gás: o gás libera calor, Q = −100 J, e recebe trabalho, W = −300 J. Então ΔU = Q − W = −100 − (−300) = +200 J. Em palavras: entram 300 J como trabalho e saem 100 J como calor, e ficam 200 J a mais no gás.\n\n−200 J troca os sinais dos dois termos. +400 J soma os valores, como se o gás também recebesse calor. −400 J soma as saídas, como se o gás também realizasse trabalho. E 0 J supõe que calor e trabalho se compensem.",
      /* balanço de energia: entradas menos saídas */
      v: { i: () => { const entra = [300], sai = [100]; return qual(entra.reduce((s, x) => s + x, 0) - sai.reduce((s, x) => s + x, 0), o); } },
    };
  })(),
  (() => {
    const o = ["O gás libera ≈ 1,15 kJ", "O gás recebe ≈ 1,15 kJ", "O gás não troca calor, porque a temperatura não varia", "O gás libera ≈ 1,66 kJ", "O gás libera ≈ 0,50 kJ"];
    return {
      d: "media",
      e: "Meio mol de gás ideal é comprimido isotermicamente, a 400 K, até metade do volume. Com R = 8,31 J/(mol·K) e ln 2 ≅ 0,69, o que acontece com o calor nesse processo?",
      o,
      x: "Numa isoterma de gás ideal, ΔU = 0, e o calor trocado é igual ao trabalho: Q = W = n · R · T · ln(V₂/V₁) = 0,5 · 8,31 · 400 · ln(1/2) ≅ −1.662 · 0,69 ≅ −1.150 J. O sinal negativo indica que o gás libera cerca de 1,15 kJ: a energia que ele recebe como trabalho na compressão sai como calor, e por isso a temperatura se mantém.\n\n“Recebe” erra o sinal. “Não troca calor” confunde temperatura constante com ausência de calor. 1,66 kJ é n · R · T, sem o logaritmo. E 0,50 kJ usa o logaritmo decimal de 2 (≅ 0,30) no lugar do natural.",
      v: { i: () => { const n = 0.5, T = 400, V1 = 0.01, p = (V) => (n * R * T) / V; const Q = U(p(V1 / 2), V1 / 2) - U(p(V1), V1) + trabalho(p, V1, V1 / 2); return unicoV(o.map((t) => { const m = t.match(/^O gás (libera|recebe) ≈ ([\d,]+) kJ$/); if (!m) return Math.abs(Q) < 1e-9; const q = valor(m[2]) * 1e3 * (m[1] === "libera" ? -1 : 1); return Math.abs(q - Q) <= 0.02 * Math.abs(Q); })); } },
    };
  })(),
  (() => {
    const o = ["1.500 J", "2.000 J", "375 J", "500 J", "≈ 135 J"];
    return {
      d: "media",
      e: "Uma máquina de Carnot opera entre 127 °C e 27 °C e realiza 500 J de trabalho por ciclo. Quanto calor ela rejeita para a fonte fria em cada ciclo?",
      o,
      x: "O rendimento é η = 1 − Tf/Tq = 1 − 300/400 = 0,25. O calor recebido é Qq = W/η = 500/0,25 = 2.000 J, e o rejeitado, Qf = Qq − W = 2.000 − 500 = 1.500 J. Confere com a relação de Carnot, Qf/Qq = Tf/Tq = 300/400 = 0,75.\n\n2.000 J é o calor recebido da fonte quente. 375 J aplica a fração 0,75 ao trabalho, e não ao calor recebido. 500 J supõe o calor rejeitado igual ao trabalho. E 135 J usa as temperaturas em graus Celsius, o que daria um rendimento de 79%.",
      v: { i: () => { const c = carnot(400, 300); return qual(500 / c.eta - 500, o, 1e-4); } },
    };
  })(),
  (() => {
    const o = ["Não muda, porque não há calor nem trabalho", "Diminui, porque o gás realiza trabalho ao se expandir", "Aumenta, porque as moléculas ganham mais espaço", "Cai à metade, porque o volume dobra", "Diminui, porque a pressão cai à metade"];
    return {
      d: "media",
      e: "Um gás ideal está num lado de um recipiente de paredes isolantes e rígidas; o outro lado, de mesmo volume, está vazio. Retira-se a divisória, e o gás se espalha pelo recipiente inteiro. O que acontece com a sua temperatura?",
      o,
      x: "As paredes isolantes impedem a troca de calor (Q = 0), e o gás se expande contra o vácuo, sem empurrar nada: não realiza trabalho (W = 0). Pela primeira lei, ΔU = 0, e, num gás ideal, a energia interna depende só da temperatura, que fica a mesma. A pressão cai à metade, mas por causa do volume dobrado, com a temperatura constante.\n\n“Realiza trabalho” esquece que não há nada do outro lado para ser empurrado. “Ganham mais espaço” não altera a energia das moléculas. “Cai à metade” aplica uma proporção entre temperatura e volume que só vale sob pressão constante. E a queda da pressão não implica queda de temperatura: aqui ela vem só do volume maior.",
      /* pressão externa nula: trabalho nulo; energia interna conservada; nova pressão pela função de estado */
      v: { i: () => { const V = 0.01, p1 = 2e5; const W = trabalho(() => 0, V, 2 * V); const p2 = (U(p1, V) - W) / (1.5 * 2 * V); const razaoT = (p2 * 2 * V) / (p1 * V); return unicoV(o.map((_, i) => i === (Math.abs(razaoT - 1) < 1e-12 ? 0 : razaoT < 1 ? 1 : 2))); } },
    };
  })(),
  (() => {
    const o = ["40%", "60%", "100%", "67%", "29%"];
    return {
      d: "media",
      e: "Um gás ideal monoatômico recebe calor sob pressão constante. Que fração desse calor é convertida em trabalho realizado pelo gás?",
      o,
      x: "Sob pressão constante, o trabalho é W = p · ΔV = n · R · ΔT, e a variação da energia interna do gás monoatômico é ΔU = (3/2) · n · R · ΔT. O calor recebido é a soma: Q = (5/2) · n · R · ΔT. A fração que vira trabalho é W/Q = 1/(5/2) = 2/5 = 40%; os outros 60% aumentam a energia interna.\n\n60% é a fração que fica como energia interna. 100% vale para a isotérmica, em que a energia interna não varia. 67% é a razão entre o trabalho e a variação da energia interna, 2/3, e não entre o trabalho e o calor. E 29% (2/7) seria a fração para um gás diatômico.",
      v: { i: () => { const p = 1e5, W = trabalho(() => p, 0.01, 0.02), dU = U(p, 0.02) - U(p, 0.01); return qual(W / (dU + W), o, 1e-9); } },
    };
  })(),
  (() => {
    const o = ["10 kW úteis e 30 kJ rejeitados por segundo", "30 kW úteis e 10 kJ rejeitados por segundo", "10 kW úteis e 40 kJ rejeitados por segundo", "40 kW úteis e nenhum calor rejeitado", "25 kW úteis e 15 kJ rejeitados por segundo"];
    return {
      d: "media",
      e: "O motor de um automóvel tem rendimento de 25% e queima combustível que libera 40 kJ de calor por segundo. Quais são a potência útil do motor e o calor que ele rejeita por segundo?",
      o,
      x: "A potência útil é a fração do calor liberado por segundo que vira trabalho: 0,25 · 40 kJ/s = 10 kJ/s = 10 kW. O restante, 40 − 10 = 30 kJ por segundo, sai como calor, pelo escapamento e pelo radiador. A soma do trabalho com o calor rejeitado tem de ser igual ao calor liberado pelo combustível.\n\n“30 kW e 10 kJ” troca as duas parcelas, como se o rendimento fosse de 75%. “10 kW e 40 kJ” esquece que a energia que vira trabalho não sai como calor. “40 kW e nenhum calor” supõe um motor de rendimento 100%, impossível. E “25 kW e 15 kJ” toma o rendimento, 25%, como se fosse a potência.",
      /* balanço de energia em 1 s */
      v: { i: () => { const W = integra(() => 0.25 * 40e3, 0, 1, 10), Q = 40e3 - W; return unicoV(o.map((t) => { const m = t.match(/^(\d+) kW úteis e (?:(\d+) kJ rejeitados|nenhum calor rejeitado)/); return Number(m[1]) * 1e3 === W && (m[2] ? Number(m[2]) * 1e3 : 0) === Q; })); } },
    };
  })(),
  (() => {
    const o = ["60%", "50%", "30%", "15%", "167%"];
    return {
      d: "media",
      e: "Uma máquina térmica real, operando entre 600 K e 300 K, tem rendimento de 30%. Que fração do rendimento de uma máquina de Carnot entre as mesmas fontes ela alcança?",
      o,
      x: "O rendimento de Carnot entre essas fontes é ηC = 1 − 300/600 = 0,5 = 50%, o máximo possível. A máquina real alcança 30%, que é 0,30/0,50 = 0,6 = 60% do rendimento máximo. A diferença se deve a atritos, perdas de calor e processos irreversíveis, que a máquina ideal não tem.\n\n50% é o próprio rendimento de Carnot. 30% é o rendimento da máquina real. 15% multiplica os dois rendimentos em vez de dividir. E 167% inverte a divisão, 0,5/0,3.",
      v: { i: () => qual(0.3 / carnot(600, 300).eta, o, 1e-4) },
    };
  })(),
  (() => {
    const o = ["900 J", "0 J", "1.500 J", "1.200 J", "300 J"];
    return {
      d: "media",
      e: "Um gás vai do estado A (1 L; 1 · 10⁵ Pa) ao estado C (4 L; 4 · 10⁵ Pa) por dois caminhos: no primeiro, a pressão sobe a volume constante e depois o gás se expande sob 4 · 10⁵ Pa; no segundo, ele se expande sob 1 · 10⁵ Pa e depois a pressão sobe a volume constante. Qual é a diferença entre os trabalhos realizados pelo gás nos dois caminhos?",
      o,
      x: "Nos trechos a volume constante não há trabalho. No primeiro caminho, a expansão acontece sob 4 · 10⁵ Pa: W₁ = 4 · 10⁵ · 3 · 10⁻³ = 1.200 J. No segundo, sob 1 · 10⁵ Pa: W₂ = 1 · 10⁵ · 3 · 10⁻³ = 300 J. A diferença é de 900 J. O trabalho depende do caminho, e não só dos estados inicial e final; já a variação da energia interna é a mesma nos dois.\n\n0 J supõe que o trabalho, como a energia interna, dependa só dos estados inicial e final. 1.500 J soma os dois trabalhos. 1.200 J e 300 J são os trabalhos de cada caminho, e não a diferença.",
      v: { i: () => { const W1 = trabalho(() => 1e5, 1e-3, 1e-3, 10) + trabalho(() => 4e5, 1e-3, 4e-3); const W2 = trabalho(() => 1e5, 1e-3, 4e-3) + trabalho(() => 4e5, 4e-3, 4e-3, 10); return qual(W1 - W2, o, 1e-9); } },
    };
  })(),
  (() => {
    const o = ["300 J e zero", "300 J e 300 J", "1.500 J e zero", "Zero e 300 J", "900 J e −600 J"];
    return {
      d: "media",
      e: "Num ciclo completo, um gás absorve 900 J de calor e rejeita 600 J. Quais são o trabalho líquido realizado pelo gás e a variação da sua energia interna no ciclo?",
      o,
      x: "Ao fim de um ciclo, o gás volta ao estado inicial, e a energia interna, que é função do estado, também volta ao valor inicial: ΔU = 0. Pela primeira lei aplicada ao ciclo, o trabalho líquido é igual ao calor líquido: W = 900 − 600 = 300 J. É exatamente o que faz uma máquina térmica: converte em trabalho a diferença entre o calor absorvido e o rejeitado.\n\n“300 J e 300 J” esquece que a energia interna volta ao valor inicial. “1.500 J e zero” soma os calores em vez de subtrair. “Zero e 300 J” descreveria um gás que não realiza trabalho e não volta ao estado inicial. E “900 J e −600 J” toma os calores como se fossem o trabalho e a variação de energia.",
      /* a energia interna é função de estado: no mesmo estado, o mesmo valor */
      v: { i: () => { const dU = U(2e5, 0.01) - U(2e5, 0.01), W = 900 - 600 - dU; const num = (s) => (/^zero$/i.test(s.trim()) ? 0 : valor(s)); return unicoV(o.map((t) => { const [a, b] = t.split(" e "); return num(a) === W && num(b) === dU; })); } },
    };
  })(),
  (() => {
    const o = ["≈ 1,25 kJ", "≈ 0,83 kJ", "≈ 2,08 kJ", "0 J", "≈ −1,25 kJ"];
    return {
      d: "media",
      e: "Um mol de gás ideal monoatômico se expande adiabaticamente, e a sua temperatura cai de 400 K para 300 K. Com R = 8,31 J/(mol·K), qual é o trabalho realizado pelo gás?",
      o,
      x: "Numa adiabática, Q = 0, e a primeira lei dá W = −ΔU: o trabalho realizado pelo gás sai inteiramente da sua energia interna. Com ΔU = (3/2) · n · R · ΔT = 1,5 · 8,31 · (−100) ≅ −1.246 J, o trabalho é W ≅ +1.246 J ≅ 1,25 kJ. É por isso que o gás esfria ao se expandir sem receber calor.\n\n0,83 kJ é n · R · ΔT, sem o fator 3/2. 2,08 kJ usa 5/2, o fator de um gás diatômico. 0 J confunde ausência de calor com ausência de trabalho. E −1,25 kJ é o sinal da variação da energia interna: o gás, ao se expandir, realiza trabalho positivo.",
      /* expande pela adiabática até pV/R = 300 K e integra p dV */
      v: { i: () => { const V1 = 0.01, p1 = (R * 400) / V1; const T = (V) => (adiabatica(p1, V1, V).p * V) / R; const V2 = bissecao((V) => T(V) - 300, V1, 1, 60); return qual(adiabatica(p1, V1, V2).W, o, 0.01); } },
    };
  })(),
  (() => {
    const o = ["2 kW", "18 kW", "6 kW", "4 kW", "1,5 kW"];
    return {
      d: "media",
      e: "Uma bomba de calor com eficiência 3, que entrega à casa 3 J de calor para cada joule de energia elétrica consumida, precisa fornecer 6 kW de aquecimento. Qual é a potência elétrica consumida?",
      o,
      x: "Se a bomba entrega 3 J de calor para cada joule elétrico, a potência elétrica é 6/3 = 2 kW. Os outros 4 kW não são criados: vêm do ar externo, do qual a bomba retira calor. A energia se conserva: 2 kW elétricos mais 4 kW retirados de fora são os 6 kW entregues.\n\n18 kW multiplica pela eficiência em vez de dividir. 6 kW seria o consumo de um aquecedor elétrico comum, de resistência. 4 kW é o calor retirado do ar externo. E 1,5 kW trata o 3 como a eficiência de refrigeração, o que daria 4 J entregues por joule elétrico.",
      v: { i: () => qual(bissecao((P) => 3 * P - 6e3, 0, 1e5), o, 1e-9) },
    };
  })(),
  (() => {
    const o = ["75%", "100%", "50%", "25%", "Não dá para saber sem as quantidades de calor"];
    return {
      d: "media",
      e: "Duas máquinas de Carnot funcionam em série: a primeira opera entre 800 K e 400 K e rejeita todo o seu calor para a segunda, que opera entre 400 K e 200 K. Qual é o rendimento do conjunto?",
      o,
      x: "Cada máquina tem rendimento de 50%: 1 − 400/800 e 1 − 200/400. Se a primeira recebe Q, realiza 0,5Q e rejeita 0,5Q, que a segunda recebe; esta realiza 0,25Q e rejeita 0,25Q a 200 K. O trabalho total é 0,75Q, e o rendimento, 75%, igual ao de uma única máquina de Carnot entre 800 K e 200 K: 1 − 200/800.\n\n100% soma os rendimentos, que se aplicam a calores diferentes. 50% é o rendimento de cada máquina isolada. 25% multiplica os rendimentos, o que dá só o trabalho da segunda máquina como fração de Q. E as quantidades de calor não são necessárias: o resultado vale para qualquer Q.",
      v: { i: () => { const c1 = carnot(800, 400), c2 = carnot(400, 200); return qual(c1.eta + (1 - c1.eta) * c2.eta, o, 1e-4); } },
    };
  })(),
  (() => {
    const o = ["4,5 atm", "5 atm", "9 atm", "5,6 atm", "−0,56 atm"];
    return {
      d: "media",
      e: "Um cilindro rígido contém gás a 27 °C e 10 atm. Metade do gás escapa, e a temperatura do que restou cai para −3 °C. Qual é a pressão final?",
      o,
      x: "Com o volume constante, a pressão é proporcional ao número de mols e à temperatura absoluta: p₂ = p₁ · (n₂/n₁) · (T₂/T₁) = 10 · (1/2) · (270/300) = 10 · 0,5 · 0,9 = 4,5 atm. A perda de metade do gás, sozinha, levaria a 5 atm; o resfriamento reduz mais 10%.\n\n5 atm considera só a perda de gás. 9 atm considera só o resfriamento. 5,6 atm inverte a razão das temperaturas. E −0,56 atm usa as temperaturas em graus Celsius, o que dá uma pressão negativa, impossível.",
      /* mols pelo estado inicial (em atm·L), metade deles, e a pressão pela equação de estado */
      v: { i: () => { const Rl = 0.082, V = 5, n1 = (10 * V) / (Rl * 300); return qual(((n1 / 2) * Rl * 270) / V, o, 1e-9); } },
    };
  })(),
  (() => {
    const o = ["500 J", "700 J", "200 J", "420 J", "300 J"];
    return {
      d: "media",
      e: "Um gás ideal diatômico recebe 700 J de calor sob pressão constante. Qual é o aumento da sua energia interna?",
      o,
      x: "Num gás diatômico sob pressão constante, o calor recebido é Q = (7/2) · n · R · ΔT, a energia interna aumenta ΔU = (5/2) · n · R · ΔT, e o trabalho é W = n · R · ΔT. A fração que fica como energia interna é 5/7: ΔU = 700 · 5/7 = 500 J, e o gás realiza 200 J de trabalho.\n\n700 J supõe que todo o calor fique no gás, o que só vale a volume constante. 200 J é o trabalho realizado. 420 J usa a fração 3/5, a de um gás monoatômico. E 300 J usa a fração 3/7, com o fator do monoatômico no numerador.",
      /* a 1 · 10⁵ Pa, acha o volume final em que o calor recebido chega a 700 J */
      v: { i: () => { const p = 1e5, V1 = 0.01; const Q = (V) => U(p, V, 5) - U(p, V1, 5) + trabalho(() => p, V1, V); const V2 = bissecao((V) => Q(V) - 700, V1, 0.1); return qual(U(p, V2, 5) - U(p, V1, 5), o, 1e-6); } },
    };
  })(),
  (() => {
    const o = ["≈ 111 kJ", "334 kJ", "1.002 kJ", "≈ 83,5 kJ", "≈ 445 kJ"];
    return {
      d: "media",
      e: "Um freezer com eficiência 3, que retira 3 J de calor para cada joule de trabalho, congela 1 kg de água que já está a 0 °C. Com calor latente de fusão de 334 kJ/kg, quanta energia elétrica ele consome nesse processo?",
      o,
      x: "Para congelar a água, o freezer precisa retirar dela Q = m · L = 1 · 334 = 334 kJ. Com eficiência 3, o trabalho necessário é W = Q/3 ≅ 111 kJ. O calor liberado no ambiente é a soma, 334 + 111 ≅ 445 kJ.\n\n334 kJ é o calor retirado da água, e não a energia consumida. 1.002 kJ multiplica pela eficiência em vez de dividir. 83,5 kJ divide por 4, somando 1 à eficiência, como se ela fosse a de uma bomba de calor. E 445 kJ é o calor que o freezer libera no ambiente.",
      v: { i: () => qual(bissecao((W) => 3 * W - 1 * 334e3, 0, 1e6), o, 0.01) },
    };
  })(),
  (() => {
    const o = ["≈ 909 K", "4.800 K", "1.200 K", "300 K", "≈ 1.900 K"];
    return {
      d: "media",
      e: "No motor a diesel, o ar (γ = 1,4) é comprimido adiabaticamente até 1/16 do volume inicial, partindo de 300 K. Com 16^0,4 ≅ 3,03, qual é a temperatura do ar ao fim da compressão?",
      o,
      x: "Numa adiabática, T · V^(γ − 1) é constante: T₂ = T₁ · (V₁/V₂)^(γ − 1) = 300 · 16^0,4 ≅ 300 · 3,03 ≅ 909 K, cerca de 636 °C. É essa temperatura, acima do ponto de ignição do óleo diesel, que dispensa a vela: o combustível injetado queima sozinho.\n\n4.800 K multiplica a temperatura pela razão de volumes inteira, 16. 1.200 K usa o expoente 1/2 (√16 = 4). 300 K supõe que, sem troca de calor, a temperatura não mude. E 1.900 K usa o expoente de um gás monoatômico, 2/3.",
      /* ar como gás diatômico (f = 5, γ = 1,4): adiabática pela primeira lei, temperatura por pV/(nR) */
      v: { i: () => { const V1 = 0.016, p1 = (R * 300) / V1, V2 = V1 / 16; return qual((adiabatica(p1, V1, V2, 5).p * V2) / R, o, 0.01); } },
    };
  })(),
  (() => {
    const o = ["−300 J; funciona como refrigerador", "+300 J; funciona como motor", "−300 J; funciona como motor", "0 J; o ciclo volta ao estado inicial", "+600 J; funciona como motor"];
    return {
      d: "media",
      e: "Um gás percorre, no sentido anti-horário do diagrama pV, um ciclo retangular entre as pressões de 1 · 10⁵ Pa e 2 · 10⁵ Pa e os volumes de 1 L e 4 L. Qual é o trabalho líquido realizado pelo gás, e como funciona um dispositivo que opere nesse ciclo?",
      o,
      x: "O módulo do trabalho é a área do retângulo: (2 · 10⁵ − 1 · 10⁵) · (4 − 1) · 10⁻³ = 300 J. No sentido anti-horário, a expansão acontece sob a pressão menor e a compressão sob a maior: o gás recebe mais trabalho do que realiza, e o líquido é −300 J. Um ciclo que consome trabalho é o de um refrigerador (ou de uma bomba de calor), que usa esse trabalho para levar calor da fonte fria para a quente.\n\n+300 J e “motor” valeriam no sentido horário. −300 J com “motor” contradiz o sinal: um motor realiza trabalho líquido positivo. 0 J confunde trabalho com energia interna, que é a grandeza que volta ao valor inicial. E +600 J multiplica a pressão maior pela variação de volume.",
      /* anti-horário: expande por baixo (1 · 10⁵ Pa) e comprime por cima (2 · 10⁵ Pa) */
      v: { i: () => { const W = trabalho(() => 1e5, 1e-3, 4e-3) + trabalho(() => 2e5, 4e-3, 1e-3); const tipo = W < 0 ? "refrigerador" : "motor"; return unicoV(o.map((t) => { const [n, resto] = t.split("; "); return Math.abs(valor(n) - W) < 1e-6 && resto.endsWith(tipo); })); } },
    };
  })(),
  (() => {
    const o = ["Libera 750 J", "Libera 300 J", "Libera 450 J", "Recebe 750 J", "Libera 150 J"];
    return {
      d: "media",
      e: "Um gás ideal monoatômico é comprimido sob pressão constante de 1 · 10⁵ Pa, de 5 L para 2 L. Nesse processo, o gás recebe ou libera calor, e quanto?",
      o,
      x: "O trabalho realizado pelo gás é W = p · ΔV = 1 · 10⁵ · (−3 · 10⁻³) = −300 J: ele recebe 300 J de trabalho. A energia interna varia ΔU = (3/2) · p · ΔV = −450 J: o gás esfria, porque a temperatura cai junto com o volume. Pela primeira lei, Q = ΔU + W = −450 − 300 = −750 J, e o gás libera 750 J de calor.\n\n300 J é só o trabalho. 450 J é só a variação da energia interna. “Recebe” erra o sinal: o gás perde energia interna e ainda recebe trabalho, e por isso precisa liberar calor. E 150 J subtrai as duas parcelas em vez de somá-las.",
      v: { i: () => { const W = trabalho(() => 1e5, 5e-3, 2e-3), Q = U(1e5, 2e-3) - U(1e5, 5e-3) + W; return unicoV(o.map((t) => { const acao = t.split(" ")[0]; return Math.abs(valor(t.slice(acao.length + 1)) * (acao === "Libera" ? -1 : 1) - Q) < 1e-6; })); } },
    };
  })(),
  (() => {
    const o = ["800 J", "≈ 267 J", "1.200 J", "400 J", "Não é possível saber sem o calor recebido da fonte quente"];
    return {
      d: "media",
      e: "Uma máquina de Carnot opera entre 327 °C e −73 °C e rejeita 400 J para a fonte fria a cada ciclo. Qual é o trabalho que ela realiza por ciclo?",
      o,
      x: "Numa máquina de Carnot, os calores trocados são proporcionais às temperaturas absolutas das fontes: Qq/Qf = Tq/Tf = 600/200 = 3. Então Qq = 3 · 400 = 1.200 J, e o trabalho é W = Qq − Qf = 1.200 − 400 = 800 J. Confere com o rendimento, 1 − 200/600 = 2/3, e 2/3 · 1.200 = 800 J.\n\n267 J aplica o rendimento de 2/3 ao calor rejeitado, e não ao recebido. 1.200 J é o calor recebido da fonte quente. 400 J supõe o trabalho igual ao calor rejeitado. E o calor recebido não precisa ser dado: na máquina de Carnot, ele sai da razão entre as temperaturas.",
      v: { i: () => { const c = carnot(600, 200); const Qq = (400 * c.Qq) / c.Qf; return qual(Qq - 400, o, 1e-4); } },
    };
  })(),

  /* ----------------------------------------------------------- difíceis --- */
  (() => {
    const o = ["≈ 22%", "≈ 89%", "≈ 27%", "100%", "≈ 78%"];
    return {
      d: "dificil",
      e: "Um gás ideal monoatômico percorre, no sentido horário, um ciclo retangular no diagrama pV, entre as pressões de 1 · 10⁵ Pa e 3 · 10⁵ Pa e os volumes de 1 L e 3 L. Qual é o rendimento desse ciclo?",
      o,
      x: "O trabalho líquido é a área do retângulo: 2 · 10⁵ · 2 · 10⁻³ = 400 J. O calor é recebido em dois trechos: no aumento de pressão a 1 L, Q = (3/2) · V · Δp = 1,5 · 10⁻³ · 2 · 10⁵ = 300 J; na expansão a 3 · 10⁵ Pa, Q = (5/2) · p · ΔV = 2,5 · 3 · 10⁵ · 2 · 10⁻³ = 1.500 J. No total, o gás recebe 1.800 J, e η = 400/1.800 ≅ 0,22 = 22%. Nos outros dois trechos, ele rejeita 1.400 J.\n\n89% é o rendimento de Carnot entre a maior e a menor temperatura do ciclo (1 − 100/900, pela razão entre os produtos pV), um limite que o ciclo retangular não alcança. 27% divide o trabalho só pelo calor da expansão. 100% divide o trabalho pelo calor líquido, que é igual a ele. E 78% é a fração rejeitada, 1.400/1.800.",
      /* em cada trecho: trabalho integrado, ΔU pela função de estado, Q = ΔU + W; soma os Q positivos */
      v: { i: () => { const pts = [[1e-3, 1e5], [1e-3, 3e5], [3e-3, 3e5], [3e-3, 1e5], [1e-3, 1e5]]; let W = 0, Qin = 0; for (let k = 0; k < 4; k++) { const [Va, pa] = pts[k], [Vb, pb] = pts[k + 1]; const w = Va === Vb ? 0 : trabalho(() => pa, Va, Vb); const q = U(pb, Vb) - U(pa, Va) + w; W += w; if (q > 0) Qin += q; } return qual(W / Qin, o, 0.02); } },
    };
  })(),
  (() => {
    const o = ["≈ 1,15 kJ", "≈ 2,88 kJ", "≈ 1,73 kJ", "≈ 1,66 kJ", "0 J"];
    return {
      d: "dificil",
      e: "Um mol de gás ideal monoatômico percorre um ciclo de Carnot entre 500 K e 300 K; na expansão isotérmica, o volume dobra. Com R = 8,31 J/(mol·K) e ln 2 ≅ 0,69, qual é o trabalho líquido por ciclo?",
      o,
      x: "Na expansão isotérmica a 500 K, o gás recebe Qq = n · R · Tq · ln 2 = 8,31 · 500 · 0,69 ≅ 2.870 J. O rendimento de Carnot é 1 − 300/500 = 0,4, e o trabalho líquido é W = 0,4 · Qq ≅ 1.150 J ≅ 1,15 kJ. Equivalentemente, W = n · R · (Tq − Tf) · ln 2: os trabalhos das duas adiabáticas se cancelam, e a compressão isotérmica a 300 K também reduz o volume à metade.\n\n2,88 kJ é o calor recebido, e não o trabalho. 1,73 kJ multiplica esse calor por Tf/Tq = 0,6, o que dá o calor rejeitado. 1,66 kJ é n · R · (Tq − Tf), sem o logaritmo. E 0 J confunde o trabalho de um ciclo com a variação da energia interna, que é nula.",
      v: { i: () => qual(carnot(500, 300, 0.01, 0.02).W, o, 0.01) },
    };
  })(),
  (() => {
    const o = ["≈ 303 K", "200 K", "400 K", "≈ 252 K", "≈ 283 K"];
    return {
      d: "dificil",
      e: "Um gás ideal diatômico (γ = 1,4), a 400 K, se expande adiabaticamente até dobrar de volume. Com 2^0,4 ≅ 1,32, qual é a temperatura final?",
      o,
      x: "Numa adiabática, T · V^(γ − 1) é constante: T₂ = T₁ · (V₁/V₂)^(γ − 1) = 400/2^0,4 ≅ 400/1,32 ≅ 303 K. O gás esfria porque realiza trabalho sem receber calor, gastando a própria energia interna; mas esfria menos do que sugeriria uma proporção direta com o volume.\n\n200 K divide a temperatura pela razão dos volumes, como se T fosse inversamente proporcional a V. 400 K supõe que, sem troca de calor, a temperatura não mude. 252 K usa o expoente de um gás monoatômico, 2/3. E 283 K usa o expoente 1/2, dividindo por √2.",
      v: { i: () => { const V1 = 0.01, p1 = (R * 400) / V1; return qual((adiabatica(p1, V1, 2 * V1, 5).p * 2 * V1) / R, o, 0.01); } },
    };
  })(),
  (() => {
    const o = ["≈ 18,3 J/K", "0 J/K", "≈ 7,9 J/K", "≈ 16,6 J/K", "≈ 33,2 J/K"];
    return {
      d: "dificil",
      e: "Dois mols de gás ideal se expandem isotermicamente até triplicar de volume. Com R = 8,31 J/(mol·K) e ln 3 ≅ 1,10, qual é a variação da entropia do gás?",
      o,
      x: "Num processo reversível, ΔS = ∫dQ/T. Na isoterma, T é constante e o calor recebido é igual ao trabalho, n · R · T · ln(V₂/V₁); então ΔS = n · R · ln(V₂/V₁) = 2 · 8,31 · ln 3 ≅ 16,62 · 1,10 ≅ 18,3 J/K. A entropia do gás aumenta: ele se espalha por um volume maior. A temperatura nem precisa ser conhecida.\n\n0 J/K supõe que, com a temperatura constante, a entropia não mude, esquecendo o calor recebido. 7,9 J/K usa o logaritmo decimal de 3 (≅ 0,48). 16,6 J/K esquece o logaritmo. E 33,2 J/K usa V₂/V₁ − 1 = 2 no lugar de ln 3.",
      /* a 300 K (qualquer): dQ = dU + p dV, com dU = 0 na isoterma; integra dQ/T */
      v: { i: () => { const n = 2, T = 300, V1 = 0.01; return qual(integra((V) => (n * R * T) / V / T, V1, 3 * V1), o, 0.01); } },
    };
  })(),
  (() => {
    const o = ["14 min", "56 min", "11,2 min", "7 min", "3,5 min"];
    return {
      d: "dificil",
      e: "Um freezer com eficiência 4, que retira 4 J de calor para cada joule elétrico, tem motor de 200 W. Quanto tempo ele leva, no mínimo, para congelar 2 kg de água que já está a 0 °C, com calor latente de fusão de 336 kJ/kg?",
      o,
      x: "O calor a retirar da água é Q = m · L = 2 · 336 = 672 kJ. Com eficiência 4 e 200 W de potência elétrica, o freezer retira 4 · 200 = 800 J por segundo. O tempo é 672.000/800 = 840 s = 14 min, desprezando outras entradas de calor no freezer.\n\n56 min divide o calor pela potência elétrica, como se o freezer retirasse só 200 J por segundo. 11,2 min usa 1.000 J por segundo, somando a potência elétrica ao calor retirado. 7 min considera só 1 kg de água. E 3,5 min divide ainda pela eficiência, como se ela reduzisse o calor a retirar.",
      v: { i: () => qual(bissecao((t) => 4 * 200 * t - 2 * 336e3, 0, 1e5), o, 1e-9) },
    };
  })(),
  (() => {
    const o = ["≈ 13%", "50%", "≈ 28%", "100%", "≈ 87%"];
    return {
      d: "dificil",
      e: "Um mol de gás ideal monoatômico percorre um ciclo: expansão isotérmica a 400 K até dobrar de volume; compressão a pressão constante até o volume inicial; e aquecimento a volume constante de volta ao estado inicial. Com R = 8,31 J/(mol·K) e ln 2 ≅ 0,69, qual é o rendimento do ciclo?",
      o,
      x: "Na isoterma, o gás recebe Q₁ = R · 400 · ln 2 ≅ 2.290 J e realiza esse mesmo trabalho. Na compressão isobárica, a pressão é a metade da inicial e a temperatura cai de 400 K para 200 K: o trabalho é −R · 200 ≅ −1.662 J, e o gás libera (5/2) · R · 200 ≅ 4.155 J. No aquecimento a volume constante, de 200 K para 400 K, recebe (3/2) · R · 200 ≅ 2.493 J. O trabalho líquido é ≅ 2.290 − 1.662 ≅ 630 J; o calor recebido, ≅ 2.290 + 2.493 ≅ 4.780 J; e η ≅ 630/4.780 ≅ 13%.\n\n50% é o rendimento de Carnot entre 400 K e 200 K, um limite que esse ciclo não atinge. 28% divide o trabalho só pelo calor da isoterma, esquecendo o do aquecimento. 100% divide o trabalho pelo calor líquido, que é igual a ele. E 87% é a fração rejeitada, 4.155/4.780.",
      /* A (V0, T = 400 K) → B (2V0) isoterma; B → C (V0) a pressão constante; C → A a volume constante */
      v: { i: () => {
        const V0 = 0.01, pA = (R * 400) / V0, pB = pA / 2;
        const trechos = [
          { w: trabalho((V) => (R * 400) / V, V0, 2 * V0), dU: U(pB, 2 * V0) - U(pA, V0) },
          { w: trabalho(() => pB, 2 * V0, V0), dU: U(pB, V0) - U(pB, 2 * V0) },
          { w: 0, dU: U(pA, V0) - U(pB, V0) },
        ];
        const W = trechos.reduce((s, t) => s + t.w, 0), Qin = trechos.reduce((s, t) => s + Math.max(0, t.dU + t.w), 0);
        return qual(W / Qin, o, 0.04);
      } },
    };
  })(),
  (() => {
    const o = ["300 J", "120 J", "180 J", "250 J", "20 J"];
    return {
      d: "dificil",
      e: "Um cilindro vertical, fechado por um êmbolo de 20 kg e 0,01 m² de área que desliza sem atrito, contém um gás ideal monoatômico; a pressão atmosférica é de 1 · 10⁵ Pa, e g = 10 m/s². O gás é aquecido lentamente, e o êmbolo sobe 10 cm. Quanto calor o gás recebe?",
      o,
      x: "Em equilíbrio, a pressão do gás sustenta a atmosfera e o peso do êmbolo: p = 1 · 10⁵ + (20 · 10)/0,01 = 1,2 · 10⁵ Pa, constante durante a subida. O volume aumenta 0,01 · 0,1 = 10⁻³ m³, e o trabalho é W = p · ΔV = 120 J. A energia interna do gás monoatômico aumenta (3/2) · p · ΔV = 180 J. O calor recebido é Q = 180 + 120 = 300 J.\n\n120 J é só o trabalho. 180 J é só a variação da energia interna. 250 J usa só a pressão atmosférica, esquecendo o peso do êmbolo. E 20 J é só o aumento da energia potencial do êmbolo, m · g · h.",
      /* pressão pelo equilíbrio de forças no êmbolo; trabalho integrado e ΔU pela função de estado */
      v: { i: () => { const A = 0.01, p = bissecao((x) => x * A - 1e5 * A - 20 * 10, 0, 1e7), V1 = 2e-3, V2 = V1 + A * 0.1; return qual(U(p, V2) - U(p, V1) + trabalho(() => p, V1, V2), o, 1e-6); } },
    };
  })(),
  (() => {
    const o = ["100 W", "3.000 W", "≈ 97 W", "≈ 1.111 W", "90.000 W"];
    return {
      d: "dificil",
      e: "Um condicionador de ar ideal, que funciona como um refrigerador de Carnot, mantém uma sala a 27 °C quando lá fora faz 37 °C, retirando da sala 3.000 J de calor por segundo. Qual é a potência elétrica mínima de que ele precisa?",
      o,
      x: "Para um refrigerador de Carnot, a eficiência é Tf/(Tq − Tf), com as temperaturas em kelvin: 300/(310 − 300) = 30. Cada joule de trabalho retira 30 J da sala; para retirar 3.000 J por segundo, bastam 3.000/30 = 100 W. É o mínimo: um aparelho real, com perdas, consome mais.\n\n3.000 W supõe o trabalho igual ao calor retirado. 97 W usa a eficiência de uma bomba de calor, Tq/(Tq − Tf) = 31. 1.111 W usa as temperaturas em graus Celsius, 27/10 = 2,7. E 90.000 W multiplica o calor pela eficiência em vez de dividir.",
      v: { i: () => { const c = carnot(310, 300); return qual(3000 / (c.Qf / c.W), o, 1e-4); } },
    };
  })(),
  (() => {
    const o = ["Baixar a fria: o rendimento vai a 60%, contra 50% ao elevar a quente", "Elevar a quente: o rendimento vai a 60%, contra 50% ao baixar a fria", "Tanto faz: nos dois casos o rendimento vai a 50%", "Tanto faz, porque a diferença entre as temperaturas fica igual", "Elevar a quente: o rendimento vai a 50%, contra 40% ao baixar a fria"];
    return {
      d: "dificil",
      e: "Uma máquina de Carnot opera entre 500 K e 300 K. Para aumentar o seu rendimento, é mais eficaz elevar a temperatura da fonte quente em 100 K ou baixar a da fonte fria em 100 K?",
      o,
      x: "O rendimento inicial é 1 − 300/500 = 40%. Elevando a fonte quente a 600 K: 1 − 300/600 = 50%. Baixando a fonte fria a 200 K: 1 − 200/500 = 60%. Baixar a fria é mais eficaz porque, em η = 1 − Tf/Tq, a temperatura fria está no numerador: reduzi-la diminui diretamente a fração rejeitada, enquanto aumentar Tq só dilui essa fração.\n\n“Elevar a quente” troca os dois resultados. “Tanto faz, 50%” calcula só um dos casos e o repete para o outro. “Tanto faz, porque a diferença fica igual” supõe que o rendimento dependa só de Tq − Tf; ele depende também de Tq, que está no denominador. E “50% contra 40%” mantém o rendimento inicial, 40%, como se ele não mudasse ao baixar a fria.",
      v: { i: () => { const q = carnot(600, 300).eta, f = carnot(500, 200).eta; if (Math.abs(q - 0.5) > 1e-4 || Math.abs(f - 0.6) > 1e-4) throw new Error("rendimentos"); return unicoV(o.map((_, i) => i === (f > q ? 0 : 1))); } },
    };
  })(),
  (() => {
    const o = ["≈ 2,0 kJ", "≈ 1,73 kJ", "≈ 1,2 kJ", "0 J", "≈ 6,2 kJ"];
    return {
      d: "dificil",
      e: "Um mol de gás ideal diatômico (γ = 1,4), a 300 K, é comprimido adiabaticamente até metade do volume. Com R = 8,31 J/(mol·K) e 2^0,4 ≅ 1,32, qual é o trabalho realizado sobre o gás?",
      o,
      x: "A temperatura final é T₂ = 300 · 2^0,4 ≅ 300 · 1,32 ≅ 396 K. Sem troca de calor, todo o trabalho recebido vira energia interna: W = ΔU = (5/2) · n · R · ΔT ≅ 2,5 · 8,31 · 96 ≅ 1.994 J ≅ 2,0 kJ. É mais do que numa compressão isotérmica até o mesmo volume, em que parte da energia sairia como calor.\n\n1,73 kJ é o trabalho de uma compressão isotérmica, n · R · T · ln 2. 1,2 kJ usa 3/2, o fator de um gás monoatômico, com a variação de temperatura do diatômico. 0 J confunde ausência de calor com ausência de trabalho. E 6,2 kJ usa a temperatura inicial em vez da variação, (5/2) · n · R · T₁.",
      /* trabalho sobre o gás = −(trabalho do gás) ao longo da adiabática */
      v: { i: () => { const V1 = 0.01, p1 = (R * 300) / V1; return qual(-adiabatica(p1, V1, V1 / 2, 5).W, o, 0.02); } },
    };
  })(),
];
