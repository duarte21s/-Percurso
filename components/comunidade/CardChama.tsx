import Link from "next/link";
import css from "./estudos.module.css";
import type { EstadoChama } from "@/lib/gamificacao";

const ICONE: Record<EstadoChama["estado"], string> = {
  ativa: "🔥",
  em_risco: "🟠",
  quase_apagando: "🔴",
  apagada: "💨",
};

/**
 * Cartão da Chama de Estudos. Recebe o estado já calculado no servidor
 * (`estadoChama` em lib/gamificacao). Sem interação além do link para estudar.
 *
 * `sessaoAberta` diz se existe uma sessão de estudo avulsa em andamento. O
 * rótulo do botão saía de `estudou_hoje`, que é outro fato: "fez alguma coisa
 * hoje" não é "tem sessão para retomar". Dava para o botão dizer "Continuar" e
 * cair no seletor, ou dizer "Estudar agora" e jogar no meio de uma sessão
 * largada. O destino é sempre /estudar; o que muda é o que te espera lá, e é
 * isso que o rótulo passa a anunciar.
 */
export function CardChama({
  estado,
  sessaoAberta = false,
}: {
  estado: EstadoChama;
  sessaoAberta?: boolean;
}) {
  const classe = [
    css.chama,
    estado.estado === "ativa" ? css.chamaAtiva : "",
    estado.estado === "em_risco" ? css.chamaRisco : "",
    estado.estado === "quase_apagando" ? css.chamaUrgente : "",
    estado.estado === "apagada" ? css.chamaApagada : "",
  ]
    .filter(Boolean)
    .join(" ");

  const mensagem =
    estado.estado === "ativa"
      ? estado.estudou_hoje
        ? "Chama acesa. Você estudou hoje."
        : "Chama protegida."
      : estado.estado === "em_risco"
        ? "Sua Chama ainda precisa ser alimentada hoje."
        : estado.estado === "quase_apagando"
          ? `Restam poucas horas para manter a sequência.`
          : estado.perdida > 0
            ? `Sua sequência de ${estado.perdida} ${estado.perdida === 1 ? "dia" : "dias"} acabou. Recomece hoje.`
            : "Comece uma sequência hoje.";

  const numero = estado.estado === "apagada" ? 0 : estado.atual;

  return (
    <div className={classe}>
      <span className={css.chamaIcone} aria-hidden="true">
        {ICONE[estado.estado]}
      </span>

      <div className={css.chamaCorpo}>
        <div className={css.chamaNum}>
          {numero} <span>{numero === 1 ? "dia" : "dias"}</span>
        </div>
        <p className={css.chamaMsg}>{mensagem}</p>
        <div className={css.chamaMeta}>
          <span>
            Melhor: <b>{estado.melhor}</b>
          </span>
          {estado.escudos > 0 && (
            <span>
              🛡️ <b>{estado.escudos}</b> {estado.escudos === 1 ? "escudo" : "escudos"}
            </span>
          )}
          <span>
            Estudou hoje: <b>{estado.estudou_hoje ? "sim" : "não"}</b>
          </span>
        </div>
      </div>

      <div className={css.chamaAcao}>
        <Link href="/app/questoes" className="btn btn-primary">
          {sessaoAberta ? "Continuar sessão" : "Escolher o que estudar"}
        </Link>
      </div>
    </div>
  );
}
