/** Originais de Downloads, conferidos byte a byte. Todos são 16:9 (720p).
 * Plano geral → manuscritos → caderno → livro aberto e luz da janela. */
export const CENAS = [
  { arquivo: "/media/vitrine-1-comeco.mp4", original: "video.mp4" },
  { arquivo: "/media/vitrine-2-repeticao.mp4", original: "video(1).mp4" },
  { arquivo: "/media/vitrine-3-tempo.mp4", original: "video(2).mp4" },
  { arquivo: "/media/vitrine-4-vista.mp4", original: "video(3).mp4" },
] as const;

const DISSOLUCAO = 0.9;

/**
 * Janela, em segundos do PRIMEIRO plano, em que o bloco de texto sobe.
 *
 * A subida ficava presa aos últimos 2,4s do QUARTO plano. Com quatro vídeos de
 * ~6s cada, o título e os dois botões só apareciam por volta dos 22 segundos, e
 * até lá a abertura não dizia o que o site é. A janela continua a mesma; mudou
 * de ponta. O vídeo segue tocando os quatro planos como antes.
 */
const ABERTURA = 2.4;

/**
 * Teto de relógio para a subida do texto.
 *
 * Quem cronometra a subida é o `currentTime` do primeiro plano — mídia travada
 * trava o fade junto, que é o comportamento certo no meio da sequência. Na
 * abertura não: rede parada não pode deixar a página sem uma palavra. Passado
 * este tempo sem o primeiro plano ter corrido, o texto sobe no relógio do GSAP,
 * por cima do poster.
 */
export const RESGATE_MS = 2500;

interface Opcoes {
  videos: HTMLVideoElement[];
  botao: HTMLElement;
  animador: typeof import("gsap").gsap;
  reduzido: boolean;
  /** Chamado UMA vez, quando o texto termina de subir e passa a ser clicável. */
  aoRevelar: () => void;
}

/** GSAP desenha; currentTime é o relógio. Travar a mídia também trava o fade.
 * O animador é recebido do registro central do app, permitindo testar os
 * eventos de mídia sem depender de rede, decodificador ou relógio simulado. */
export function iniciarCinema({ videos, botao, animador: gsap, reduzido, aoRevelar }: Opcoes) {
  let desmontado = false;
  /** A sequência inteira acabou: último plano terminou, nada mais toca. */
  let concluido = false;
  /** O texto terminou de subir. Independente de `concluido`: agora ele sobe no
   *  começo, e os outros três planos continuam correndo depois disso. */
  let revelado = false;
  /** A subida passou a correr no relógio do GSAP, não no da mídia. */
  let subidaLivre = false;
  let contingencia = false;
  let ativo = -1;
  let solicitado = -1;
  let transicao: { anterior: number; inicio: number; timeline: gsap.core.Timeline } | null = null;
  let vigia: ReturnType<typeof setTimeout> | undefined;
  let resgate: ReturnType<typeof setTimeout> | undefined;
  let ultimoTempo = -1;
  const carregados = new Set<number>();
  const indisponiveis = new Set<number>();
  const removerListeners: (() => void)[] = [];
  const timelines: gsap.core.Timeline[] = [];
  const retomar = new Set<number>();

  function pararVigia() {
    clearTimeout(vigia);
    vigia = undefined;
  }

  function pararResgate() {
    clearTimeout(resgate);
    resgate = undefined;
  }

  function revelar() {
    if (revelado || desmontado) return;
    revelado = true;
    pararResgate();
    aoRevelar();
  }

  /** Fim da sequência: o último plano acabou. O texto já subiu há muito no
   *  caminho normal; o `progress(1)` cobre mídia curta demais para a janela. */
  function concluir() {
    if (concluido || desmontado) return;
    concluido = true;
    pararVigia();
    pararResgate();
    videos.forEach((video) => video.pause());
    subida.progress(1);
  }

  gsap.set(botao, { opacity: 0, y: 70 });
  videos.forEach((video, i) => gsap.set(video, { opacity: 0, scale: 1, zIndex: i }));

  // Somente o texto sobe. Os vídeos seguem em cross-fade por baixo dele, e o
  // último permanece visível no seu quadro final quando a sequência acaba.
  const subida = gsap.timeline({ paused: true, onComplete: revelar })
    .to(botao, { opacity: 1, y: 0, duration: 1.7, ease: "power3.out" }, 0.7);
  timelines.push(subida);

  /** Troca o relógio da subida: da mídia para o do GSAP. Só para quando não há
   *  plano correndo que a cronometre — autoplay recusado, rede parada, resgate. */
  function soltarSubida() {
    if (subidaLivre || revelado || desmontado) return;
    subidaLivre = true;
    subida.play();
  }

  function resgatar() {
    resgate = undefined;
    if (desmontado || concluido || contingencia) return;
    soltarSubida();
  }

  function mostrarAcesso() {
    if (desmontado || concluido || contingencia) return;
    contingencia = true;
    pararVigia();
    videos.forEach((video) => video.pause());
    soltarSubida();
  }

  function armarVigia() {
    pararVigia();
    if (document.hidden || concluido || contingencia) return;
    // Somente contingência para rede parada: nunca troca cenas por timeout.
    vigia = setTimeout(mostrarAcesso, 15000);
  }

  function preparar(i: number) {
    if (i >= videos.length || carregados.has(i)) return;
    carregados.add(i);
    const video = videos[i];
    video.muted = true;
    video.preload = "auto";
    video.src = CENAS[i].arquivo;
    video.load();
  }

  function reproduzir(i: number) {
    videos[i].play().catch((erro: unknown) => {
      if (desmontado || concluido || contingencia || document.hidden) return;
      if (erro instanceof Error && erro.name === "NotAllowedError") mostrarAcesso();
      else if (!(erro instanceof Error) || erro.name !== "AbortError") falhou(i);
      // AbortError pode ser um load/seek ou uma pausa; a vigia cobre a falta de progresso.
    });
  }

  function solicitar(i: number) {
    if (desmontado || concluido || contingencia) return;
    while (indisponiveis.has(i)) i++;
    if (i >= videos.length) {
      mostrarAcesso();
      return;
    }
    if (solicitado === i) return;
    solicitado = i;
    preparar(i);
    preparar(i + 1);
    armarVigia();
    if (!document.hidden) reproduzir(i);
    else retomar.add(i);
  }

  function entrar(i: number) {
    if (desmontado || concluido || contingencia || i !== solicitado || ativo === i) return;
    if (transicao) {
      transicao.timeline.progress(1);
      if (transicao.anterior >= 0) {
        gsap.set(videos[transicao.anterior], { opacity: 0 });
        videos[transicao.anterior].pause();
      }
    }
    const anterior = ativo;
    ativo = i;
    ultimoTempo = -1;
    const timeline = gsap.timeline({ paused: true })
      .to(videos[i], { opacity: 1, duration: anterior < 0 ? 0.5 : DISSOLUCAO, ease: "sine.inOut" });
    timelines.push(timeline);
    // O plano anterior permanece opaco por baixo até a dissolução terminar.
    // Dissolver ambos simultaneamente exporia o fundo entre os planos.
    transicao = { anterior, inicio: videos[i].currentTime, timeline };
    preparar(i + 1);
    atualizar();
  }

  function falhou(i: number) {
    if (desmontado || concluido || contingencia) return;
    indisponiveis.add(i);
    if (i === ativo || i === solicitado) solicitar(i + 1);
  }

  function atualizar() {
    if (desmontado || concluido || contingencia || document.hidden || ativo < 0) return;
    const video = videos[ativo];
    const tempo = video.currentTime;
    const duracao = video.duration;
    if (tempo !== ultimoTempo) {
      ultimoTempo = tempo;
      armarVigia();
    }
    if (transicao) {
      const progresso = Math.min(1, Math.max(0, (tempo - transicao.inicio) / transicao.timeline.duration()));
      transicao.timeline.progress(progresso);
      if (progresso === 1) {
        if (transicao.anterior >= 0) {
          gsap.set(videos[transicao.anterior], { opacity: 0 });
          videos[transicao.anterior].pause();
        }
        transicao = null;
      }
    }
    // O texto sobe no relógio do PRIMEIRO plano. Fica antes da checagem de
    // duração porque `currentTime` já corre enquanto os metadados não chegaram.
    if (ativo === 0 && !subidaLivre) {
      subida.progress(Math.min(1, Math.max(0, tempo / ABERTURA)));
    }
    if (!Number.isFinite(duracao) || duracao <= 0) return;
    // Zoom mínimo, proporcional à mídia; sem deformar os arquivos 16:9.
    gsap.set(video, { scale: 1 + 0.025 * Math.min(1, tempo / duracao) });
    if (ativo < videos.length - 1 && duracao - tempo <= DISSOLUCAO && solicitado === ativo) {
      solicitar(ativo + 1);
    }
  }

  function terminou(i: number) {
    if (desmontado || concluido || contingencia || ativo !== i) return;
    if (i === videos.length - 1) concluir();
    else if (solicitado === ativo) solicitar(i + 1);
  }

  function visibilidade() {
    if (concluido || contingencia) return;
    if (document.hidden) {
      pararVigia();
      videos.forEach((video, i) => {
        if (!video.paused) {
          retomar.add(i);
          video.pause();
        }
      });
    } else {
      armarVigia();
      retomar.forEach(reproduzir);
      retomar.clear();
    }
  }

  if (reduzido) {
    // Sem download/autoplay, deslocamento ou imagens substitutas.
    subida.progress(1);
  } else {
    videos.forEach((video, i) => {
      const eventos: [string, () => void][] = [
        ["loadedmetadata", atualizar],
        ["timeupdate", atualizar],
        ["playing", () => entrar(i)],
        ["ended", () => terminou(i)],
        ["error", () => falhou(i)],
      ];
      eventos.forEach(([nome, listener]) => {
        video.addEventListener(nome, listener);
        removerListeners.push(() => video.removeEventListener(nome, listener));
      });
    });
    document.addEventListener("visibilitychange", visibilidade);
    gsap.ticker.add(atualizar);
    resgate = setTimeout(resgatar, RESGATE_MS);
    solicitar(0);
  }

  return () => {
    desmontado = true;
    pararVigia();
    pararResgate();
    gsap.ticker.remove(atualizar);
    document.removeEventListener("visibilitychange", visibilidade);
    removerListeners.forEach((remover) => remover());
    timelines.forEach((timeline) => timeline.kill());
    retomar.clear();
    videos.forEach((video) => {
      video.pause();
      video.removeAttribute("src");
      video.load();
    });
  };
}
