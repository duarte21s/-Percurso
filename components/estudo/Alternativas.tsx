"use client";

import { BotaoPressao } from "@/components/ui/BotaoPressao";

const LETRAS = "ABCDE";

interface Props {
  opcoes: string[];
  /** Índice marcado pela pessoa, ou null se ainda não respondeu. */
  marcada: number | null;
  /** Gabarito. Só existe no resultado, depois da sessão finalizada. */
  correta: number | null;
  onEscolher: (indice: number) => void;
  ocupado?: boolean;
  /**
   * Resposta registrada, mas ainda sem correção: a questão trava e a marcação
   * aparece neutra — nem o verde de acerto nem o vermelho de erro, porque o
   * resultado só sai quando a sessão inteira for finalizada.
   */
  travada?: boolean;
}

/**
 * As cinco alternativas.
 *
 * Depois de respondida, a questão trava: os botões ficam disabled. Isso não é
 * só estética — o banco tem unique(simulado_id, questao_id), então uma segunda
 * resposta seria rejeitada de qualquer forma. Travar aqui evita a pessoa
 * descobrir isso por uma mensagem de erro.
 */
export function Alternativas({
  opcoes,
  marcada,
  correta,
  onEscolher,
  ocupado = false,
  travada = false,
}: Props) {
  const corrigida = correta !== null;

  return (
    <div className="q-options">
      {opcoes.map((texto, i) => {
        let estado = "";
        if (corrigida) {
          if (i === correta) estado = " is-right";
          else if (i === marcada) estado = " is-wrong";
        } else if (i === marcada) {
          estado = " is-marked";
        }

        return (
          <BotaoPressao
            key={i}
            className={`q-opt${estado}`}
            onClick={() => onEscolher(i)}
            disabled={corrigida || travada || ocupado}
            aria-pressed={marcada === i}
          >
            <span className="q-letter">{LETRAS[i]}</span>
            <span>{texto}</span>
          </BotaoPressao>
        );
      })}
    </div>
  );
}

export { LETRAS };
