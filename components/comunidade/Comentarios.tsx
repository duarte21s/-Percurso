"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { Avatar } from "./Avatar";
import { TempoRelativo } from "./TempoRelativo";
import { Icone } from "@/components/ui/Icone";
import css from "./comunidade.module.css";
import type { Autor, Comentario } from "@/lib/tipos";

interface Props {
  comentarios: Comentario[];
  /** Quem está logado, ou null. Null troca o campo de escrever por um convite. */
  eu: Autor | null;
  /** O visitante é o dono de uma pergunta e pode aceitar uma resposta. */
  podeAceitar?: boolean;
  aoCurtir: (idComentario: string) => void;
  aoResponder: (idComentario: string | null, texto: string) => void;
  /** Aceita um comentário raiz como resposta. Só quando `podeAceitar`. */
  aoAceitar?: (idComentario: string) => Promise<string | null>;
}

export function Comentarios({
  comentarios,
  eu,
  podeAceitar = false,
  aoCurtir,
  aoResponder,
  aoAceitar,
}: Props) {
  const [respondendo, setRespondendo] = useState<string | null>(null);

  return (
    <div className={css.comentarios}>
      {comentarios.map((c) => (
        <Fio
          key={c.id}
          comentario={c}
          eu={eu}
          podeAceitar={podeAceitar}
          respondendo={respondendo}
          setRespondendo={setRespondendo}
          aoCurtir={aoCurtir}
          aoResponder={aoResponder}
          aoAceitar={aoAceitar}
        />
      ))}

      {eu ? (
        <CampoResposta
          eu={eu}
          rotulo="Escrever um comentário"
          placeholder="Escreva um comentário…"
          aoEnviar={(texto) => aoResponder(null, texto)}
        />
      ) : (
        <p className={css.fine} style={{ padding: "12px 0 4px" }}>
          <Link href="/entrar?proximo=/comunidade">Entre</Link> para comentar.
        </p>
      )}
    </div>
  );
}

function Fio({
  comentario: c,
  eu,
  podeAceitar = false,
  respondendo,
  setRespondendo,
  aoCurtir,
  aoResponder,
  aoAceitar,
  aninhado = false,
}: {
  comentario: Comentario;
  eu: Autor | null;
  podeAceitar?: boolean;
  respondendo: string | null;
  setRespondendo: (id: string | null) => void;
  aoCurtir: (id: string) => void;
  aoResponder: (id: string | null, texto: string) => void;
  aoAceitar?: (id: string) => Promise<string | null>;
  aninhado?: boolean;
}) {
  const aberto = respondendo === c.id;
  const [aceitando, setAceitando] = useState(false);
  const [erroAceite, setErroAceite] = useState<string | null>(null);

  async function aceitar() {
    if (!aoAceitar) return;
    setAceitando(true);
    setErroAceite(null);
    const e = await aoAceitar(c.id);
    setAceitando(false);
    if (e) setErroAceite(e);
  }

  return (
    <>
      <article className={`${css.comentario} ${c.aceito ? css.comentarioAceito : ""}`}>
        <Avatar autor={c.autor} tamanho="pequeno" />
        <div className={css.comentarioCorpo}>
          <div className={css.nome}>
            {c.autor.username ? (
              <Link
                href={`/comunidade/perfil/${c.autor.username}`}
                className={css.autorLink}
                aria-label={`Ver o perfil de ${c.autor.nome}`}
              >
                {c.autor.nome}
              </Link>
            ) : (
              c.autor.nome
            )}
            {c.autor.verificado && (
              <Icone
                nome="check"
                className={css.selo}
                aria-label="Perfil verificado"
                role="img"
              />
            )}
            <span className={css.arroba}>@{c.autor.username || "sem-nome"}</span>
            <span className={css.pontoSeparador}>·</span>
            <TempoRelativo iso={c.criadoEm} className={css.quando} />
            {c.aceito && (
              <span className={css.marcaAceito}>
                <Icone nome="check" style={{ width: 12, height: 12 }} />
                Resposta aceita
              </span>
            )}
          </div>

          <p className={css.comentarioTexto}>{c.texto}</p>

          <div className={css.comentarioAcoes}>
            <button
              className={`${css.miniAcao} ${c.curtidoPorMim ? css.acaoAtiva : ""}`}
              onClick={() => aoCurtir(c.id)}
              aria-pressed={c.curtidoPorMim}
              aria-label={
                c.curtidoPorMim
                  ? `Descurtir comentário de ${c.autor.nome}`
                  : `Curtir comentário de ${c.autor.nome}`
              }
            >
              <Icone nome="coracao" fill={c.curtidoPorMim ? "currentColor" : "none"} />
              {c.curtidas > 0 && c.curtidas}
            </button>

            {/* Só o primeiro nível abre resposta: um fio aninhado que ainda
                aninha vira conversa impossível de ler no celular. */}
            {!aninhado && eu && (
              <button
                className={css.miniAcao}
                onClick={() => setRespondendo(aberto ? null : c.id)}
                aria-expanded={aberto}
              >
                <Icone nome="balao" />
                Responder
              </button>
            )}

            {/* O dono da pergunta aceita uma resposta (só comentários raiz). */}
            {!aninhado && podeAceitar && aoAceitar && !c.aceito && (
              <button
                className={css.miniAcao}
                onClick={aceitar}
                disabled={aceitando}
              >
                <Icone nome="check" />
                {aceitando ? "Aceitando…" : "Aceitar resposta"}
              </button>
            )}
          </div>

          {erroAceite && (
            <p className={css.fine} role="alert" style={{ color: "var(--err)" }}>
              {erroAceite}
            </p>
          )}

          {aberto && eu && (
            <CampoResposta
              eu={eu}
              rotulo={`Responder a ${c.autor.nome}`}
              placeholder={`Responder a @${c.autor.username}…`}
              focoAutomatico
              aoEnviar={(texto) => {
                aoResponder(c.id, texto);
                setRespondendo(null);
              }}
              aoCancelar={() => setRespondendo(null)}
            />
          )}

          {c.respostas.length > 0 && (
            <div className={css.respostas}>
              {c.respostas.map((r) => (
                <Fio
                  key={r.id}
                  comentario={r}
                  eu={eu}
                  respondendo={respondendo}
                  setRespondendo={setRespondendo}
                  aoCurtir={aoCurtir}
                  aoResponder={aoResponder}
                  aninhado
                />
              ))}
            </div>
          )}
        </div>
      </article>
    </>
  );
}

function CampoResposta({
  eu,
  rotulo,
  placeholder,
  aoEnviar,
  aoCancelar,
  focoAutomatico = false,
}: {
  eu: Autor;
  rotulo: string;
  placeholder: string;
  aoEnviar: (texto: string) => void;
  aoCancelar?: () => void;
  focoAutomatico?: boolean;
}) {
  /* O id vinha de `resp-${rotulo}`, e `rotulo` é uma frase: virava
     id="resp-Responder a João" — com espaço, o que não é id válido — e
     REPETIA sempre que a mesma pessoa tinha dois comentários no fio ou dois
     autores homônimos apareciam. Com id duplicado, clicar no rótulo põe o
     foco no campo errado. `useId` resolve os dois de uma vez e é estável
     entre servidor e cliente. */
  const idCampo = useId();
  const [texto, setTexto] = useState("");
  const vazio = texto.trim().length === 0;

  function enviar() {
    if (vazio) return;
    aoEnviar(texto.trim());
    setTexto("");
  }

  return (
    <div className={css.responder}>
      <Avatar autor={eu} tamanho="pequeno" />
      <div style={{ flex: 1, minWidth: 0 }}>
        <label className="sr-only" htmlFor={idCampo}>
          {rotulo}
        </label>
        <textarea
          id={idCampo}
          className={css.campoComentario}
          placeholder={placeholder}
          value={texto}
          rows={1}
          autoFocus={focoAutomatico}
          onChange={(e) => setTexto(e.target.value)}
          onKeyDown={(e) => {
            // Enter envia; Shift+Enter quebra linha, como em qualquer chat.
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              enviar();
            }
            if (e.key === "Escape" && aoCancelar) aoCancelar();
          }}
        />
        <div className={css.comentarioAcoes} style={{ justifyContent: "flex-end" }}>
          {aoCancelar && (
            <button className={css.miniAcao} onClick={aoCancelar}>
              Cancelar
            </button>
          )}
          <button className="btn btn-ghost" onClick={enviar} disabled={vazio}>
            Comentar
          </button>
        </div>
      </div>
    </div>
  );
}
