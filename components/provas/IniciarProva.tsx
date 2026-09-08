"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import css from "./provas.module.css";

interface Props {
  provaId: string;
  totalQuestoes: number;
  tempoMinutos: number;
  /** Tema da redação daquele ano, quando existe. */
  temaRedacao: string | null;
}

/**
 * Abertura da prova: escolher a língua estrangeira e dar a partida.
 *
 * A escolha existe porque o ENEM aplica inglês e espanhol nas mesmas posições
 * 1 a 5 e cada candidato faz uma das duas — trazer as dez deixaria a prova com
 * 185 questões e dois enunciados no mesmo número.
 *
 * O relógio só começa a correr quando o simulado é criado no servidor, e não
 * quando a página abre. Alguém que abriu a aba para olhar não perde tempo por
 * isso.
 */
export function IniciarProva({
  provaId,
  totalQuestoes,
  tempoMinutos,
  temaRedacao,
}: Props) {
  const router = useRouter();
  const [idioma, setIdioma] = useState<"ingles" | "espanhol">("ingles");
  const [comRedacao, setComRedacao] = useState(true);
  const [indo, setIndo] = useState(false);
  const [erro, setErro] = useState<string | null>(null);

  async function comeca() {
    setIndo(true);
    setErro(null);
    try {
      const r = await fetch("/api/prova/iniciar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          provaId,
          idioma,
          comRedacao: Boolean(temaRedacao) && comRedacao,
        }),
      });
      const dados = await r.json();
      if (!r.ok) throw new Error(dados.erro ?? "Não consegui abrir a prova.");
      router.refresh();
    } catch (e) {
      setErro(e instanceof Error ? e.message : "Não consegui abrir a prova.");
      setIndo(false);
    }
  }

  const horas = Math.floor(tempoMinutos / 60);
  const minutos = tempoMinutos % 60;

  return (
    <div>
      <div className={css.aviso}>
        São <strong>{totalQuestoes} questões</strong> e{" "}
        <strong>
          {horas}h{minutos ? `${minutos}min` : ""}
        </strong>{" "}
        de relógio. Ele começa a correr quando você clicar em começar — não
        agora — e só para quando você entregar ou o tempo acabar. Pode fechar a
        aba no meio: tudo continua de onde parou.
      </div>

      <p className="dim" style={{ marginBottom: 10 }}>
        Qual língua estrangeira você faz?
      </p>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 22 }}>
        <button
          type="button"
          className={idioma === "ingles" ? "btn btn-primary" : "btn"}
          onClick={() => setIdioma("ingles")}
        >
          Inglês
        </button>
        <button
          type="button"
          className={idioma === "espanhol" ? "btn btn-primary" : "btn"}
          onClick={() => setIdioma("espanhol")}
        >
          Espanhol
        </button>
      </div>

      {/* A escolha de fazer a redação junto é feita aqui e fica gravada no
          simulado: quem fecha a aba e volta amanhã encontra a prova do jeito
          que montou, e não do jeito que o padrão manda. */}
      {temaRedacao && (
        <>
          <p className="dim" style={{ marginBottom: 10 }}>
            Quer fazer a redação junto?
          </p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 14 }}>
            <button
              type="button"
              className={comRedacao ? "btn btn-primary" : "btn"}
              onClick={() => setComRedacao(true)}
            >
              Com redação
            </button>
            <button
              type="button"
              className={!comRedacao ? "btn btn-primary" : "btn"}
              onClick={() => setComRedacao(false)}
            >
              Só as questões
            </button>
          </div>
          {comRedacao && (
            <p className="dim" style={{ fontSize: 12.5, marginBottom: 22, lineHeight: 1.65 }}>
              Tema deste ano: <em>{temaRedacao}</em>. Ela abre no topo da prova e
              você escreve quando quiser — não precisa ser antes das questões.
              Dá para digitar ou fotografar a folha.
            </p>
          )}
        </>
      )}

      {erro && <div className={css.aviso}>{erro}</div>}

      <button
        type="button"
        className="btn btn-primary"
        onClick={comeca}
        disabled={indo}
      >
        {indo ? "Abrindo a prova…" : "Começar a prova"}
        {!indo && <span className="arrow">→</span>}
      </button>
    </div>
  );
}
