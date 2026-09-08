interface OpcoesVideo {
  aoMostrar: () => void;
  aoFalhar: () => void;
}

/** Mantém uma busca por vez e sempre termina no último quadro solicitado. */
export function conectarVideoAoScroll(video: HTMLVideoElement, opcoes: OpcoesVideo) {
  let progresso = 0;
  let quadro = 0;
  let buscando = false;
  let visivel = false;
  let suspenso = false;
  let encerrado = false;
  const tolerancia = 1 / 120;

  function agendar() {
    if (!encerrado && !suspenso && !quadro) quadro = requestAnimationFrame(atualizar);
  }

  function mostrar() {
    if (!visivel && video.readyState >= 2) {
      visivel = true;
      opcoes.aoMostrar();
    }
  }

  function atualizar() {
    quadro = 0;
    if (encerrado || suspenso || video.readyState < 2 || buscando || video.seeking) return;
    if (!Number.isFinite(video.duration) || video.duration <= 0) return;
    const alvo = progresso * Math.max(0, video.duration - 1 / 60);
    if (Math.abs(video.currentTime - alvo) <= tolerancia) {
      mostrar();
      return;
    }
    buscando = true;
    try {
      video.currentTime = alvo;
    } catch {
      buscando = false;
      opcoes.aoFalhar();
    }
  }

  function aoBuscar() {
    buscando = false;
    mostrar();
    // Mesmo que a mola já tenha parado, aplica o alvo que chegou durante o seek.
    agendar();
  }

  function aoErro() {
    buscando = false;
    visivel = false;
    opcoes.aoFalhar();
  }

  video.addEventListener("loadeddata", agendar);
  video.addEventListener("canplay", agendar);
  video.addEventListener("seeked", aoBuscar);
  video.addEventListener("error", aoErro);
  agendar();

  return {
    definirProgresso(valor: number) {
      progresso = Number.isFinite(valor) ? Math.min(1, Math.max(0, valor)) : 0;
      agendar();
    },
    suspender(valor: boolean) {
      suspenso = valor;
      if (suspenso) {
        cancelAnimationFrame(quadro);
        quadro = 0;
      } else agendar();
    },
    dispose() {
      encerrado = true;
      cancelAnimationFrame(quadro);
      video.removeEventListener("loadeddata", agendar);
      video.removeEventListener("canplay", agendar);
      video.removeEventListener("seeked", aoBuscar);
      video.removeEventListener("error", aoErro);
    },
  };
}
