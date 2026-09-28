"use client";

import Link from "next/link";
import { useState } from "react";
import { Alternativas } from "./Alternativas";
import { Gabarito } from "./Gabarito";
import { DiscussaoQuestao } from "@/components/comunidade/DiscussaoQuestao";
import type { ResultadoSessao as Resultado } from "@/lib/tipos";
import css from "./resultado.module.css";

interface Props {
  resultado: Resultado;
  /** Rótulo do recorte: matéria, ou os temas escolhidos. */
  recorte: string;
}

const dois = (n: number) => String(n).padStart(2, "0");

/**
 * O resultado completo de uma sessão de estudo, que só existe depois de
 * finalizada: a nota, e questão por questão a resposta marcada, a certa e o
 * comentário. É o único lugar da sessão onde o gabarito aparece.
 *
 * Sem animação de entrada de propósito: é o conteúdo principal da tela, e um
 * efeito de opacidade que não rodasse deixaria o resultado invisível.
 */
export function ResultadoSessao({ resultado, recorte }: Props) {
  const [soErradas, setSoErradas] = useState(false);
  const [discussao, setDiscussao] = useState<string | null>(null);

  const { acertos, erros, total, percentual } = resultado;
  const itens = soErradas ? resultado.itens.filter((i) => !i.acertou) : resultado.itens;

  return (
    <div className="quiz">
      <div className="quiz-body">
        <div className="quiz-result">
          <div className="big">
            {acertos}
            <span>/{total}</span>
          </div>
          <p className="lede" style={{ margin: "18px auto 0" }}>
            {percentual}% de acertos em {recorte}.{" "}
            {erros === 0
              ? "Você acertou todas."
              : `${erros === 1 ? "Uma questão" : `${erros} questões`} para revisar.`}{" "}
            O resultado entrou no seu histórico.
          </p>
        </div>
      </div>

      <div className="quiz-foot">
        <div className={css.filtro} role="group" aria-label="Quais questões mostrar">
          <button
            type="button"
            className={`btn ${soErradas ? "btn-ghost" : "btn-primary"}`}
            aria-pressed={!soErradas}
            onClick={() => setSoErradas(false)}
          >
            Todas ({total})
          </button>
          <button
            type="button"
            className={`btn ${soErradas ? "btn-primary" : "btn-ghost"}`}
            aria-pressed={soErradas}
            onClick={() => setSoErradas(true)}
            disabled={erros === 0}
          >
            Revisar as erradas ({erros})
          </button>
        </div>
        <div className="quiz-foot-acoes">
          <Link href="/app/desempenho" className="btn btn-ghost">
            Ver meu histórico
          </Link>
          <Link href="/app/questoes" className="btn btn-primary">
            Estudar outro conteúdo <span className="arrow">→</span>
          </Link>
        </div>
      </div>

      <ol className={css.lista}>
        {itens.map((item) => (
          <li key={item.questaoId} className={css.item}>
            <div className={css.cabeca}>
              <span className="q-source">
                Questão {dois(item.numero)}
                {item.fonte ? ` · ${item.fonte}` : ""}
              </span>
              <span className={item.acertou ? css.acertou : css.errou}>
                {item.acertou ? "Acertou" : "Errou"}
              </span>
            </div>
            <p className="q-text">{item.enunciado}</p>

            <Alternativas
              opcoes={item.opcoes}
              marcada={item.marcada}
              correta={item.correta}
              onEscolher={() => {}}
            />

            <Gabarito
              acertou={item.acertou}
              correta={item.correta}
              marcada={item.marcada}
              explicacao={item.explicacao}
              animar={false}
            />

            <button
              type="button"
              className={css.discutir}
              aria-expanded={discussao === item.questaoId}
              onClick={() =>
                setDiscussao((atual) => (atual === item.questaoId ? null : item.questaoId))
              }
            >
              {discussao === item.questaoId ? "Fechar a discussão" : "Ver a discussão desta questão"}
            </button>
            {discussao === item.questaoId && <DiscussaoQuestao questaoId={item.questaoId} />}
          </li>
        ))}
      </ol>
    </div>
  );
}
