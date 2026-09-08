"use client";

import { useState } from "react";
import { DURACAO, ROTULO, formata, usarPomodoro } from "@/lib/foco/usarPomodoro";
import css from "./pomodoro.module.css";

/* Pomodoro na barra do topo.
 *
 * Fica aqui, e não numa página própria, porque um cronômetro de foco só serve
 * enquanto se estuda — numa página separada, ele obrigaria a pessoa a sair de
 * onde está estudando para olhar o tempo. Na barra ele acompanha a navegação
 * inteira: responde questão, troca de matéria, o relógio continua.
 *
 * Fechado é só o número. Aberto mostra a fase, os ciclos e os controles. O
 * anel em volta é a barra de progresso — em vez de mais uma barra ocupando
 * espaço, o próprio contorno do botão conta quanto falta.
 */
export function Pomodoro() {
  const { fase, restante, rodando, ciclos, pronto, alternar, zerar, pular, fracao } =
    usarPomodoro();
  const [aberto, setAberto] = useState(false);

  /* Enquanto não leu o localStorage, mostra o valor inicial — assim o HTML do
     servidor e o do cliente combinam e não há aviso de hidratação. */
  const texto = pronto ? formata(restante) : formata(DURACAO.foco);

  return (
    <div className={css.caixa}>
      <button
        type="button"
        className={`${css.gatilho}${rodando ? " " + css.correndo : ""}`}
        onClick={() => setAberto((v) => !v)}
        aria-expanded={aberto}
        aria-label={`${ROTULO[fase]}: ${texto} restantes`}
        /* O anel é desenhado por um gradiente cônico que lê esta variável. */
        style={{ ["--fracao" as string]: fracao }}
      >
        <span className={css.numero}>{texto}</span>
      </button>

      {aberto && (
        <>
          <div className={css.fundo} onClick={() => setAberto(false)} />
          <div className={css.painel}>
            <div className={css.fase}>
              <strong>{ROTULO[fase]}</strong>
              <span>
                {ciclos === 0
                  ? "nenhum ciclo ainda"
                  : `${ciclos} ${ciclos === 1 ? "ciclo" : "ciclos"} hoje`}
              </span>
            </div>

            <div className={css.grande}>{texto}</div>

            <div className={css.acoes}>
              <button
                type="button"
                className="btn btn-primary"
                onClick={alternar}
              >
                {rodando ? "Pausar" : "Começar"}
              </button>
              <button type="button" className="btn" onClick={zerar}>
                Zerar
              </button>
              <button type="button" className="btn" onClick={pular}>
                Pular fase
              </button>
            </div>

            <p className={css.nota}>
              25 minutos de foco, 5 de pausa. A cada quatro focos, uma pausa de
              15. O relógio conta pelo horário, então continua certo mesmo com a
              aba em segundo plano.
            </p>
          </div>
        </>
      )}
    </div>
  );
}
