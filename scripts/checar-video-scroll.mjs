import assert from "node:assert/strict";
import { conectarVideoAoScroll } from "../lib/movimento/video-scroll.ts";

const fila = new Map();
let id = 0;
globalThis.requestAnimationFrame = (fn) => { fila.set(++id, fn); return id; };
globalThis.cancelAnimationFrame = (quadro) => fila.delete(quadro);
function quadro() {
  const pendentes = [...fila.values()];
  fila.clear();
  pendentes.forEach((fn) => fn());
}

class Video extends EventTarget {
  duration = 5;
  readyState = 2;
  seeking = false;
  tempo = 0;
  buscas = [];
  get currentTime() { return this.tempo; }
  set currentTime(valor) {
    assert.equal(this.seeking, false, "Não pode iniciar duas buscas ao mesmo tempo");
    this.seeking = true;
    this.tempo = valor;
    this.buscas.push(valor);
  }
  concluir() {
    this.seeking = false;
    this.dispatchEvent(new Event("seeked"));
  }
}

const video = new Video();
let exibicoes = 0;
const controle = conectarVideoAoScroll(video, { aoMostrar: () => exibicoes++, aoFalhar: () => assert.fail("Falha inesperada") });
quadro();
assert.equal(exibicoes, 1, "Vídeo em cache deve aparecer sem aguardar novo evento");
controle.definirProgresso(0.3);
quadro();
controle.definirProgresso(0.8);
quadro();
controle.definirProgresso(1);
quadro();
assert.equal(video.buscas.length, 1);
video.concluir();
quadro();
assert.equal(video.buscas.length, 2);
assert.ok(Math.abs(video.currentTime - (5 - 1 / 60)) < 0.00001, "Deve alcançar o último quadro sem depender de mais scroll");
video.concluir();
quadro();
assert.equal(fila.size, 0, "Deve parar de pedir quadros em repouso");

controle.definirProgresso(0);
quadro();
video.concluir();
quadro();
assert.equal(video.currentTime, 0, "Voltar ao topo deve fechar o livro");
controle.suspender(true);
controle.definirProgresso(0.5);
quadro();
assert.equal(video.currentTime, 0);
controle.suspender(false);
quadro();
assert.ok(video.currentTime > 2, "Retomar a aba deve aplicar o progresso pendente");
video.concluir();
quadro();
controle.dispose();
video.dispatchEvent(new Event("loadeddata"));
assert.equal(fila.size, 0, "Desmontar deve remover ouvintes e quadros pendentes");

const lento = new Video();
lento.readyState = 0;
const carregamento = conectarVideoAoScroll(lento, { aoMostrar() {}, aoFalhar() {} });
carregamento.definirProgresso(0.7);
quadro();
assert.equal(lento.buscas.length, 0);
lento.readyState = 2;
lento.dispatchEvent(new Event("loadeddata"));
quadro();
assert.ok(lento.currentTime > 3, "Carregamento tardio deve respeitar a posição atual da rolagem");
carregamento.dispose();
console.log("ok: cache, carregamento tardio, busca única, último quadro, reversão, suspensão e limpeza");
