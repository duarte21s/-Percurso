/* Verifica a física de lib/movimento/mola.ts fora do navegador.
 *
 * O preview do editor congela o requestAnimationFrame, então olhar a mola na
 * tela não prova nada. Aqui ela roda num relógio determinístico: mesmo dt,
 * mesma sequência, resultado reprodutível.
 *
 *   node scripts/checar-mola.mjs
 */

import { Mola, projetar, elastico, Velocimetro } from "../lib/movimento/mola.ts";

/* Relógio falso. A Mola pede requestAnimationFrame e performance.now(); aqui
   os dois avançam em passos fixos de 1/60 s, sob nosso controle. */
let agora = 0;
const fila = [];
globalThis.requestAnimationFrame = (fn) => fila.push(fn) && fila.length;
globalThis.cancelAnimationFrame = () => fila.splice(0, fila.length);
const relogioReal = performance.now.bind(performance);
performance.now = () => agora;

function rodar(mola, segundos, aoQuadro) {
  const passo = 1000 / 60;
  const quadros = Math.round((segundos * 1000) / passo);
  for (let i = 0; i < quadros; i++) {
    agora += passo;
    const pendentes = fila.splice(0, fila.length);
    for (const fn of pendentes) fn(agora);
    aoQuadro?.(mola.posicao, mola.velocidade);
    if (!mola.correndo) break;
  }
}

let falhas = 0;
function conferir(nome, condicao, detalhe = "") {
  if (condicao) {
    console.log(`  ok    ${nome}${detalhe ? " — " + detalhe : ""}`);
  } else {
    console.log(`  FALHA ${nome}${detalhe ? " — " + detalhe : ""}`);
    falhas++;
  }
}

console.log("\nMOLA");

/* 1 — amortecimento crítico não ultrapassa o alvo. É o padrão da interface:
   um painel que apareceu e quicou parece defeito. */
{
  let maximo = -Infinity;
  const m = new Mola({
    valor: -400,
    alvo: 0,
    amortecimento: 1,
    resposta: 0.34,
    aoQuadro: (v) => (maximo = Math.max(maximo, v)),
  });
  m.iniciar();
  rodar(m, 3);
  conferir("crítico assenta no alvo", Math.abs(m.posicao) < 0.1, `${m.posicao.toFixed(3)}px`);
  conferir("crítico não ultrapassa", maximo <= 0.5, `pico ${maximo.toFixed(3)}px`);
}

/* 2 — subamortecido ultrapassa. Só se usa depois de um arremesso, onde o
   quique é a leitura do momento que o dedo entregou. */
{
  let maximo = -Infinity;
  const m = new Mola({
    valor: -400,
    alvo: 0,
    amortecimento: 0.82,
    resposta: 0.3,
    aoQuadro: (v) => (maximo = Math.max(maximo, v)),
  });
  m.iniciar();
  rodar(m, 3);
  /* A solução exata dá 4,44px de ultrapassagem para 400px de deslocamento
     com amortecimento 0.82. O integrador entrega ~94% disso; abaixo de 3px
     significa que o passo voltou a ser grosso e o quique some. */
  conferir("0.82 ultrapassa o alvo", maximo > 3, `pico ${maximo.toFixed(2)}px, exato 4.44px`);
  conferir("0.82 volta e assenta", Math.abs(m.posicao) < 0.1, `${m.posicao.toFixed(3)}px`);
}

/* 3 — a velocidade de entrada é respeitada: é a costura entre gesto e
   animação. Sem ela, o dedo solta a 2000px/s e a animação começa parada. */
{
  const parado = new Mola({ valor: -200, alvo: 0, aoQuadro: () => {} });
  parado.iniciar();
  rodar(parado, 0.1);
  const semImpulso = parado.posicao;

  const lancado = new Mola({
    valor: -200,
    alvo: 0,
    velocidade: 1200,
    aoQuadro: () => {},
  });
  lancado.iniciar();
  rodar(lancado, 0.1);

  /* Em amortecimento crítico o atrito come um impulso rápido — 1200px/s por
     100ms adianta ~18px, não 120px. O que se verifica aqui é que a velocidade
     ENTRA no sistema, não que ela sobreviva inteira. */
  conferir(
    "velocidade inicial adianta o movimento",
    lancado.posicao > semImpulso + 10,
    `${lancado.posicao.toFixed(1)}px vs ${semImpulso.toFixed(1)}px em 100ms`
  );
}

/* 4 — interrupção: trocar o alvo no meio não zera posição nem velocidade.
   É a diferença entre redirecionar e recomeçar. */
{
  const m = new Mola({ valor: -400, alvo: 0, resposta: 0.34, aoQuadro: () => {} });
  m.iniciar();
  rodar(m, 0.12);
  const posNoMeio = m.posicao;
  const velNoMeio = m.velocidade;
  conferir("está em voo ao interromper", m.correndo && velNoMeio > 0, `v=${velNoMeio.toFixed(0)}px/s`);

  m.mirar(-400);
  conferir(
    "inverter preserva a posição",
    Math.abs(m.posicao - posNoMeio) < 0.001,
    "sem salto"
  );
  conferir(
    "inverter preserva a velocidade",
    Math.abs(m.velocidade - velNoMeio) < 0.001,
    "sem parede de tijolos"
  );
  rodar(m, 3);
  conferir("volta ao novo alvo", Math.abs(m.posicao + 400) < 0.1, `${m.posicao.toFixed(2)}px`);
}

/* 5 — independência de taxa de quadros. A 60Hz e a 144Hz o resultado tem de
   ser o mesmo, senão a interface se comporta diferente por monitor. */
{
  function assentaEm(hz) {
    const m = new Mola({ valor: -400, alvo: 0, resposta: 0.34, aoQuadro: () => {} });
    m.iniciar();
    const passo = 1000 / hz;
    let t = 0;
    while (m.correndo && t < 5000) {
      agora += passo;
      t += passo;
      const pendentes = fila.splice(0, fila.length);
      for (const fn of pendentes) fn(agora);
    }
    return t;
  }
  const a60 = assentaEm(60);
  const a144 = assentaEm(144);
  const diferenca = Math.abs(a60 - a144);
  conferir(
    "assenta igual em 60Hz e 144Hz",
    diferenca < 40,
    `${a60.toFixed(0)}ms vs ${a144.toFixed(0)}ms`
  );
}

console.log("\nPROJEÇÃO DE MOMENTO");
{
  conferir("parado projeta zero", projetar(0) === 0);
  const curto = projetar(300);
  const longo = projetar(1500);
  conferir("mais rápido projeta mais longe", longo > curto, `${curto.toFixed(0)}px vs ${longo.toFixed(0)}px`);
  conferir("respeita o sinal", projetar(-800) < 0, `${projetar(-800).toFixed(0)}px`);
  /* Entrada pequena, saída grande: 500px/s viaja bem mais que 500px. */
  conferir("peteleco curto viaja longe", projetar(500) > 200, `${projetar(500).toFixed(0)}px`);
}

console.log("\nELÁSTICO NA BORDA");
{
  const d = 400;
  const a = elastico(50, d);
  const b = elastico(200, d);
  const c = elastico(800, d);
  conferir("sempre menor que o excesso", a < 50 && b < 200 && c < 800, `${a.toFixed(0)}, ${b.toFixed(0)}, ${c.toFixed(0)}`);
  const taxa1 = (b - a) / 150;
  const taxa2 = (c - b) / 600;
  conferir(
    "cresce mas desacelera",
    b > a && c > b && taxa2 < taxa1,
    `taxa ${taxa1.toFixed(2)} depois ${taxa2.toFixed(2)} px por px de excesso`
  );
  conferir("zero não move", elastico(0, d) === 0);
}

console.log("\nVELOCÍMETRO");
{
  const v = new Velocimetro();
  /* 100px em 100ms = 1000px/s. */
  for (let i = 0; i <= 10; i++) v.registrar(i * 10, i * 10);
  conferir("mede px/s", Math.abs(v.velocidade - 1000) < 1, `${v.velocidade.toFixed(0)}px/s`);
  v.limpar();
  conferir("limpa", v.velocidade === 0);
}

performance.now = relogioReal;
console.log(falhas === 0 ? "\nMola íntegra.\n" : `\n${falhas} reprovação(ões).\n`);
process.exit(falhas === 0 ? 0 : 1);
