"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/* Pomodoro — o cronômetro de foco.
 *
 * A CONTA É DE INSTANTES, NÃO DE TIQUES. O erro clássico é guardar "faltam 900
 * segundos" e descontar um por segundo: numa aba em segundo plano o navegador
 * estrangula o `setInterval`, e o relógio atrasa exatamente enquanto a pessoa
 * está fora — que é quando ele mais precisa estar certo. Aqui grava-se o
 * INSTANTE em que a fase termina, e o que resta é sempre `fim - agora`. O
 * intervalo de um segundo só serve para redesenhar; se ele perder cem tiques,
 * o número continua certo no tique seguinte.
 *
 * O estado mora no `localStorage`, e não no servidor, de propósito: aqui não há
 * nada a proteger. Ninguém trapaceia no próprio descanso — ao contrário da
 * prova, onde o tempo é do sistema porque burlá-lo dá vantagem. Guardar isso no
 * banco custaria latência e privacidade sem comprar nada.
 */

export type Fase = "foco" | "pausa" | "pausaLonga";

export const DURACAO: Record<Fase, number> = {
  foco: 25 * 60,
  pausa: 5 * 60,
  /* A cada quatro focos, uma pausa maior. O ciclo original prevê isso porque
     quatro blocos seguidos cansam mais do que quatro blocos avulsos. */
  pausaLonga: 15 * 60,
};

export const ROTULO: Record<Fase, string> = {
  foco: "Foco",
  pausa: "Pausa",
  pausaLonga: "Pausa longa",
};

const CHAVE = "pomodoro";

interface Gravado {
  fase: Fase;
  /** Instante em que a fase acaba. Ausente quando está pausado. */
  fimEm?: number;
  /** Segundos restantes quando foi pausado. */
  restanteCongelado?: number;
  ciclos: number;
}

function ler(): Gravado | null {
  try {
    const cru = localStorage.getItem(CHAVE);
    return cru ? (JSON.parse(cru) as Gravado) : null;
  } catch {
    /* Aba anônima ou site data bloqueado: o cronômetro funciona na sessão e
       simplesmente não sobrevive ao recarregar. Melhor que quebrar. */
    return null;
  }
}

function gravar(g: Gravado | null) {
  try {
    if (g) localStorage.setItem(CHAVE, JSON.stringify(g));
    else localStorage.removeItem(CHAVE);
  } catch {
    /* idem */
  }
}

export function usarPomodoro() {
  const [fase, setFase] = useState<Fase>("foco");
  const [restante, setRestante] = useState(DURACAO.foco);
  const [rodando, setRodando] = useState(false);
  const [ciclos, setCiclos] = useState(0);
  const [pronto, setPronto] = useState(false);
  const fimEm = useRef<number | null>(null);

  /* Restaura o que estava valendo. Roda uma vez, depois da montagem, para o
     HTML do servidor e o do cliente combinarem. */
  useEffect(() => {
    const g = ler();
    if (g) {
      setFase(g.fase);
      setCiclos(g.ciclos);
      if (g.fimEm) {
        const falta = Math.max(0, Math.round((g.fimEm - Date.now()) / 1000));
        fimEm.current = g.fimEm;
        setRestante(falta);
        setRodando(falta > 0);
      } else {
        setRestante(g.restanteCongelado ?? DURACAO[g.fase]);
      }
    }
    setPronto(true);
  }, []);

  const persistir = useCallback(
    (f: Fase, c: number, correndo: boolean, resta: number) => {
      gravar(
        correndo
          ? { fase: f, ciclos: c, fimEm: Date.now() + resta * 1000 }
          : { fase: f, ciclos: c, restanteCongelado: resta }
      );
    },
    []
  );

  /** Avança para a fase seguinte do ciclo. */
  const proximaFase = useCallback((atual: Fase, ciclosFeitos: number) => {
    if (atual !== "foco") return { fase: "foco" as Fase, ciclos: ciclosFeitos };
    const c = ciclosFeitos + 1;
    return { fase: (c % 4 === 0 ? "pausaLonga" : "pausa") as Fase, ciclos: c };
  }, []);

  /* Um tique por segundo, só para redesenhar. A conta vem do instante-fim. */
  useEffect(() => {
    if (!rodando || fimEm.current === null) return;

    const bater = () => {
      const falta = Math.max(0, Math.round((fimEm.current! - Date.now()) / 1000));
      setRestante(falta);
      if (falta === 0) {
        setRodando(false);
        fimEm.current = null;
        /* Encerrou: um toque curto, só neste momento. Retorno espalhado por
           toda interação ensina a ignorá-lo. */
        navigator.vibrate?.([90, 60, 90]);
        setFase((f) => {
          setCiclos((c) => {
            const seg = proximaFase(f, c);
            persistir(seg.fase, seg.ciclos, false, DURACAO[seg.fase]);
            setRestante(DURACAO[seg.fase]);
            return seg.ciclos;
          });
          return proximaFase(f, ciclos).fase;
        });
      }
    };

    bater();
    const id = window.setInterval(bater, 1000);
    /* Voltar para a aba recalcula na hora, sem esperar o próximo segundo. */
    const aoVoltar = () => {
      if (document.visibilityState === "visible") bater();
    };
    document.addEventListener("visibilitychange", aoVoltar);
    return () => {
      window.clearInterval(id);
      document.removeEventListener("visibilitychange", aoVoltar);
    };
  }, [rodando, ciclos, proximaFase, persistir]);

  const alternar = useCallback(() => {
    setRodando((estava) => {
      if (estava) {
        const falta = Math.max(0, Math.round((fimEm.current! - Date.now()) / 1000));
        fimEm.current = null;
        setRestante(falta);
        persistir(fase, ciclos, false, falta);
        return false;
      }
      fimEm.current = Date.now() + restante * 1000;
      persistir(fase, ciclos, true, restante);
      return true;
    });
  }, [fase, ciclos, restante, persistir]);

  const zerar = useCallback(() => {
    fimEm.current = null;
    setRodando(false);
    setRestante(DURACAO[fase]);
    persistir(fase, ciclos, false, DURACAO[fase]);
  }, [fase, ciclos, persistir]);

  const pular = useCallback(() => {
    const seg = proximaFase(fase, ciclos);
    fimEm.current = null;
    setRodando(false);
    setFase(seg.fase);
    setCiclos(seg.ciclos);
    setRestante(DURACAO[seg.fase]);
    persistir(seg.fase, seg.ciclos, false, DURACAO[seg.fase]);
  }, [fase, ciclos, proximaFase, persistir]);

  return {
    fase,
    restante,
    rodando,
    ciclos,
    pronto,
    alternar,
    zerar,
    pular,
    /** 0 a 1. Serve para desenhar o anel. */
    fracao: 1 - restante / DURACAO[fase],
  };
}

export function formata(segundos: number) {
  const m = Math.floor(segundos / 60);
  const s = segundos % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}
