"use client";

import { useState } from "react";
import { Avatar } from "./Avatar";
import { Icone } from "@/components/ui/Icone";
import { TIPOS_DE_POST, TAGS_SUGERIDAS } from "@/lib/conteudo/comunidade";
import css from "./comunidade.module.css";
import type { Autor, TipoPost } from "@/lib/tipos";

/* ======================= escolher nome de usuário ======================= */

export function EscolherUsername({ onPronto }: { onPronto: (username: string) => void }) {
  const [valor, setValor] = useState("");
  const [erro, setErro] = useState<string | null>(null);
  const [enviando, setEnviando] = useState(false);

  async function enviar() {
    const u = valor.trim().toLowerCase();
    if (!u) return;
    setEnviando(true);
    setErro(null);
    try {
      const r = await fetch("/api/comunidade/username", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ username: u }),
      });
      const dados = await r.json().catch(() => ({}));
      if (!r.ok) {
        setErro(dados.erro ?? "Não consegui salvar.");
        return;
      }
      onPronto(dados.username ?? u);
    } catch {
      setErro("Falha de rede. Tente de novo.");
    } finally {
      setEnviando(false);
    }
  }

  return (
    <div className={css.painel} style={{ marginBottom: 20 }}>
      <p className={css.painelTitulo}>
        <Icone nome="pessoas" /> Escolha seu nome de usuário
      </p>
      <p className={css.fine} style={{ marginBottom: 12 }}>
        É como as pessoas vão te ver na comunidade. De 3 a 20 caracteres: letras,
        números, ponto e sublinhado.
      </p>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        <input
          className={css.campoTitulo}
          style={{ flex: 1, minWidth: 200 }}
          placeholder="ex.: joana.silva"
          value={valor}
          maxLength={20}
          onChange={(e) => setValor(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && enviar()}
          aria-label="Nome de usuário"
        />
        <button className="btn btn-primary" onClick={enviar} disabled={enviando || !valor.trim()}>
          {enviando ? "Salvando…" : "Confirmar"}
        </button>
      </div>
      {erro && (
        <p className={css.fine} role="alert" style={{ color: "var(--err)", marginTop: 8 }}>
          {erro}
        </p>
      )}
    </div>
  );
}

/* ============================ compositor ============================ */

const COM_TITULO: TipoPost[] = ["pergunta", "discussao"];
const MAX_TEXTO = 5000;

interface Props {
  eu: Autor;
  aoPublicar: () => void;
  /** Quando presente, o post nasce ancorado numa questão (Fase 2). */
  questaoId?: string;
}

export function Compositor({ eu, aoPublicar, questaoId }: Props) {
  const [aberto, setAberto] = useState(Boolean(questaoId));
  const [tipo, setTipo] = useState<TipoPost>(questaoId ? "pergunta" : "dica");
  const [titulo, setTitulo] = useState("");
  const [texto, setTexto] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [usarCodigo, setUsarCodigo] = useState(false);
  const [codigo, setCodigo] = useState("");
  const [linguagem, setLinguagem] = useState("texto");
  const [usarLink, setUsarLink] = useState(false);
  const [link, setLink] = useState("");
  const [enviando, setEnviando] = useState(false);
  const [erro, setErro] = useState<string | null>(null);

  const excedeu = texto.length > MAX_TEXTO;
  const podeEnviar = texto.trim().length > 0 && !excedeu && !enviando;

  function alternaTag(t: string) {
    setTags((atual) =>
      atual.includes(t) ? atual.filter((x) => x !== t) : atual.length < 5 ? [...atual, t] : atual
    );
  }

  function limpa() {
    setTitulo("");
    setTexto("");
    setTags([]);
    setUsarCodigo(false);
    setCodigo("");
    setUsarLink(false);
    setLink("");
    setErro(null);
    if (!questaoId) setAberto(false);
  }

  async function publicar() {
    if (!podeEnviar) return;
    setEnviando(true);
    setErro(null);
    try {
      const r = await fetch("/api/comunidade/posts", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          tipo,
          titulo: COM_TITULO.includes(tipo) ? titulo : "",
          texto,
          tags,
          codigo: usarCodigo && codigo.trim() ? { linguagem, conteudo: codigo } : null,
          link: usarLink && link.trim() ? { url: link.trim() } : null,
          questaoId,
        }),
      });
      const dados = await r.json().catch(() => ({}));
      if (!r.ok) {
        setErro(dados.erro ?? "Não consegui publicar.");
        return;
      }
      limpa();
      aoPublicar();
    } catch {
      setErro("Falha de rede. Tente de novo.");
    } finally {
      setEnviando(false);
    }
  }

  if (!aberto) {
    return (
      <button
        className={css.painel}
        onClick={() => setAberto(true)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: 12,
          cursor: "pointer",
          textAlign: "left",
          marginBottom: 20,
        }}
      >
        <Avatar autor={eu} tamanho="pequeno" />
        <span className={css.fine}>Compartilhar uma dúvida, uma dica ou um material…</span>
      </button>
    );
  }

  return (
    <div className={css.painel} style={{ marginBottom: 20 }}>
      {!questaoId && (
        <div className={css.editorTipos}>
          {TIPOS_DE_POST.map((o) => (
            <button
              key={o.valor}
              className={`${css.tipoOpcao} ${tipo === o.valor ? css.tipoOpcaoAtiva : ""}`}
              onClick={() => setTipo(o.valor)}
              aria-pressed={tipo === o.valor}
            >
              <span className={css.tipoOpcaoNome}>{o.rotulo}</span>
              <span className={css.tipoOpcaoDesc}>{o.descricao}</span>
            </button>
          ))}
        </div>
      )}

      {COM_TITULO.includes(tipo) && (
        <div className={css.grupoCampo}>
          <label className={css.rotulo} htmlFor="com-titulo">
            Título
          </label>
          <input
            id="com-titulo"
            className={css.campoTitulo}
            placeholder={tipo === "pergunta" ? "Qual é a sua dúvida?" : "Sobre o que quer discutir?"}
            value={titulo}
            maxLength={160}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>
      )}

      <div className={css.grupoCampo}>
        <label className={css.rotulo} htmlFor="com-texto">
          {questaoId ? "Sua dúvida sobre esta questão" : "Texto"}
        </label>
        <textarea
          id="com-texto"
          className={css.campoTexto}
          placeholder="Escreva com suas palavras. Quanto mais claro o contexto, melhor a resposta."
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        />
      </div>

      {usarCodigo && (
        <div className={css.grupoCampo}>
          <label className={css.rotulo} htmlFor="com-codigo">
            Bloco de código
          </label>
          <input
            className={css.campoTitulo}
            style={{ marginBottom: 8 }}
            placeholder="linguagem (ex.: python)"
            value={linguagem}
            maxLength={30}
            onChange={(e) => setLinguagem(e.target.value)}
            aria-label="Linguagem do código"
          />
          <textarea
            id="com-codigo"
            className={css.campoTexto}
            style={{ fontFamily: "var(--mono)", minHeight: 110 }}
            value={codigo}
            onChange={(e) => setCodigo(e.target.value)}
          />
        </div>
      )}

      {usarLink && (
        <div className={css.grupoCampo}>
          <label className={css.rotulo} htmlFor="com-link">
            Link
          </label>
          <input
            id="com-link"
            className={css.campoTitulo}
            placeholder="https://…"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>
      )}

      {!questaoId && (
        <>
          <div className={css.anexos}>
            <button
              className={`${css.anexo} ${usarCodigo ? css.anexoAtivo : ""}`}
              onClick={() => setUsarCodigo((v) => !v)}
              aria-pressed={usarCodigo}
            >
              <Icone nome="codigo" /> Código
            </button>
            <button
              className={`${css.anexo} ${usarLink ? css.anexoAtivo : ""}`}
              onClick={() => setUsarLink((v) => !v)}
              aria-pressed={usarLink}
            >
              <Icone nome="elo" /> Link
            </button>
          </div>

          <div className={css.tags} style={{ marginTop: 0, marginBottom: 8 }}>
            {TAGS_SUGERIDAS.map((t) => (
              <button
                key={t}
                className={`${css.tagBotao} ${tags.includes(t) ? css.tagAtiva : ""}`}
                onClick={() => alternaTag(t)}
                aria-pressed={tags.includes(t)}
              >
                #{t}
              </button>
            ))}
          </div>
        </>
      )}

      {erro && (
        <p className={css.fine} role="alert" style={{ color: "var(--err)", marginBottom: 8 }}>
          {erro}
        </p>
      )}

      <div className={css.editorRodape}>
        <span className={`${css.contagem} ${excedeu ? css.excedeu : ""}`}>
          {texto.length} / {MAX_TEXTO}
        </span>
        <button className="btn btn-ghost" onClick={limpa} disabled={enviando}>
          {questaoId ? "Limpar" : "Cancelar"}
        </button>
        <button className="btn btn-primary" onClick={publicar} disabled={!podeEnviar}>
          {enviando ? "Publicando…" : "Publicar"}
        </button>
      </div>
    </div>
  );
}
