/* Verifica lib/movimento/sequencia-cinematica.ts fora do navegador.
 *
 *   npm run checar-cinema
 */
import assert from "node:assert/strict";
import pacote from "gsap/dist/gsap.js";
import { iniciarCinema, CENAS, RESGATE_MS } from "../lib/movimento/sequencia-cinematica.ts";

const { gsap } = pacote;
const documentoAnterior = globalThis.document;
globalThis.document = Object.assign(new EventTarget(), { hidden: false });

class Video extends EventTarget {
  duration = 10;
  currentTime = 0;
  paused = true;
  src = "";
  preload = "none";
  opacity = 0;
  scale = 1;
  zIndex = 0;
  disponivel = true;
  bloqueado = false;
  cargas = 0;
  load() { this.cargas++; }
  removeAttribute(nome) { if (nome === "src") this.src = ""; }
  pause() { this.paused = true; }
  async play() {
    if (this.bloqueado) throw new DOMException("Autoplay bloqueado", "NotAllowedError");
    this.paused = false;
    if (this.disponivel) this.dispatchEvent(new Event("playing"));
  }
  avancar(tempo) {
    this.currentTime = tempo;
    this.dispatchEvent(new Event("timeupdate"));
  }
}

function montar({ reduzido = false, configurar = () => {} } = {}) {
  const videos = CENAS.map(() => new Video());
  configurar(videos);
  const botao = { opacity: 0, y: 70 };
  let revelacoes = 0;
  const limpar = iniciarCinema({ videos, botao, animador: gsap, reduzido, aoRevelar: () => revelacoes++ });
  return { videos, botao, limpar, get revelacoes() { return revelacoes; } };
}

/** Completa as timelines pausadas sem esperar o relógio real. Usado onde a
 *  subida corre no GSAP (resgate, autoplay bloqueado) em vez de na mídia. */
function adiantarSubida() {
  gsap.globalTimeline.getChildren().filter((t) => t.vars.onComplete).forEach((t) => t.progress(1));
}

try {
  const cena = montar();
  try {
    assert.ok(cena.videos[0].src && cena.videos[1].src, "Pré-carrega a próxima cena");
    assert.equal(cena.videos[2].src, "", "Não baixa os quatro arquivos de uma vez");

    // O texto sobe sobre o PRIMEIRO plano, não sobre o último.
    cena.videos[0].avancar(0.5);
    assert.equal(cena.videos[0].opacity, 1);
    assert.equal(cena.botao.opacity, 0, "Nada sobe durante o atraso de 0,7s");
    cena.videos[0].avancar(1.5);
    assert.ok(cena.botao.opacity > 0 && cena.botao.opacity < 1, "Sobe já no primeiro plano");
    assert.ok(cena.botao.y > 0 && cena.botao.y < 70);
    assert.equal(cena.revelacoes, 0, "Só é clicável quando termina de subir");
    cena.videos[0].avancar(2.4);
    assert.equal(cena.botao.opacity, 1, "Texto inteiro no ar em 2,4s do primeiro plano");
    assert.equal(cena.botao.y, 0);
    assert.equal(cena.revelacoes, 1);

    cena.videos[0].avancar(9.2);
    assert.equal(cena.videos[1].paused, false);
    cena.videos[1].avancar(0.45);
    assert.ok(cena.videos[1].opacity > 0 && cena.videos[1].opacity < 1);
    assert.equal(cena.videos[0].opacity, 1, "Mantém imagem por baixo do crossfade");
    cena.videos[1].avancar(1);
    assert.equal(cena.videos[0].paused, true);
    assert.equal(cena.videos[0].opacity, 0);
    cena.videos[1].avancar(9.2);
    cena.videos[2].avancar(9.2);
    cena.videos[3].duration = 18; // Duração diferente dos arquivos atuais.
    cena.videos[3].dispatchEvent(new Event("loadedmetadata"));
    cena.videos[3].avancar(17);
    assert.equal(cena.botao.opacity, 1, "O texto não volta a se mexer no fim da sequência");
    assert.equal(cena.revelacoes, 1, "Nem revela de novo a cada plano");
    cena.videos[3].dispatchEvent(new Event("ended"));
    assert.equal(cena.videos[3].opacity, 1, "Preserva a última cena no final, sem dissolver o vídeo");
    assert.ok(cena.videos.every((video) => video.paused), "A sequência para no último quadro");
    assert.equal(cena.botao.opacity, 1);
    assert.equal(cena.botao.y, 0);
    cena.videos[3].dispatchEvent(new Event("ended"));
    assert.equal(cena.revelacoes, 1, "Revela uma única vez; não reinicia em loop");
  } finally { cena.limpar(); }
  assert.ok(cena.videos.every((video) => video.paused && !video.src));

  const reduzida = montar({ reduzido: true });
  try {
    assert.ok(reduzida.videos.every((video) => !video.src && video.paused && video.cargas === 0));
    assert.equal(reduzida.botao.y, 0);
    assert.equal(reduzida.botao.opacity, 1);
    assert.equal(reduzida.revelacoes, 1);
  } finally { reduzida.limpar(); }

  const lenta = montar({ configurar: (videos) => { videos[1].disponivel = false; } });
  try {
    lenta.videos[0].avancar(10);
    lenta.videos[0].dispatchEvent(new Event("ended"));
    assert.equal(lenta.videos[0].opacity, 1, "Rede lenta preserva o último quadro disponível");
    assert.equal(lenta.videos[1].opacity, 0);
    lenta.videos[1].dispatchEvent(new Event("playing"));
    lenta.videos[1].avancar(1);
    assert.equal(lenta.videos[1].opacity, 1);
  } finally { lenta.limpar(); }

  const falha = montar();
  try {
    falha.videos[1].dispatchEvent(new Event("error"));
    falha.videos[0].avancar(9.2);
    assert.equal(falha.videos[2].paused, false, "Pula mídia que falhou no pré-carregamento");
  } finally { falha.limpar(); }

  const oculta = montar();
  try {
    document.hidden = true;
    document.dispatchEvent(new Event("visibilitychange"));
    assert.ok(oculta.videos.every((video) => video.paused));
    document.hidden = false;
    document.dispatchEvent(new Event("visibilitychange"));
    assert.equal(oculta.videos[0].paused, false);
  } finally { document.hidden = false; oculta.limpar(); }

  const bloqueada = montar({ configurar: (videos) => { videos[0].bloqueado = true; } });
  try {
    await Promise.resolve();
    adiantarSubida();
    assert.equal(bloqueada.revelacoes, 1, "Autoplay bloqueado não impede o acesso ao login");
  } finally { bloqueada.limpar(); }

  // Rede parada: nenhum plano chega a tocar, e mesmo assim o texto sobe.
  const parada = montar({ configurar: (videos) => { videos[0].disponivel = false; } });
  try {
    assert.equal(parada.botao.opacity, 0, "Sem mídia correndo, a subida ainda não começou");
    await new Promise((ok) => setTimeout(ok, RESGATE_MS + 150));
    adiantarSubida();
    assert.equal(parada.revelacoes, 1, "O resgate não deixa a página sem texto");
  } finally { parada.limpar(); }

  /* A folha do menu NÃO pausa mais o filme. O contrato que vale hoje é só o da
     aba oculta, coberto logo acima; não há caso de menu aqui porque não há
     mais nada no código que o observe. Ver `usarFolha.ts`. */

  const desmontada = montar();
  desmontada.limpar();
  desmontada.videos[3].dispatchEvent(new Event("ended"));
  desmontada.videos[0].dispatchEvent(new Event("playing"));
  assert.equal(desmontada.revelacoes, 0, "Listeners removidos não reagem após desmontar");

  console.log("Cinema: subida na abertura, resgate por relógio, crossfades, fim da sequência, rede lenta, erros, autoplay, aba oculta, movimento reduzido e cleanup OK.");
} finally {
  gsap.ticker.sleep();
  if (documentoAnterior === undefined) delete globalThis.document;
  else globalThis.document = documentoAnterior;
}
