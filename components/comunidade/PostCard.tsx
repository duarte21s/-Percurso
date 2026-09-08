"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Avatar } from "./Avatar";
import { Comentarios } from "./Comentarios";
import { TempoRelativo } from "./TempoRelativo";
import { Icone } from "@/components/ui/Icone";
import { BotaoPressao } from "@/components/ui/BotaoPressao";
import { gsap } from "@/lib/gsap/registro";
import { EASE, DUR } from "@/lib/gsap/vocabulario";
import { usarPresenca } from "@/lib/gsap/usarPresenca";
import { usarTimelineAberto } from "@/lib/gsap/usarTimelineAberto";
import { tlMaterializa } from "@/lib/gsap/timelines";
import { NOME_DO_TIPO, compacto } from "@/lib/conteudo/comunidade";
import css from "./comunidade.module.css";
import type { Autor, Post } from "@/lib/tipos";

type AoDenunciar = (
  alvoTipo: "post" | "comentario",
  alvoId: string,
  motivo: string
) => Promise<string | null>;
type AoEditarPost = (id: string, texto: string, titulo: string | null) => Promise<string | null>;
type AoApagarPost = (id: string) => Promise<string | null>;
type AoResolver = (id: string, resolvido: boolean) => Promise<string | null>;
type AoAceitar = (idPost: string, idComentario: string) => Promise<string | null>;

interface Props {
  post: Post;
  /** Quem está logado, ou null. Null desliga os campos de escrever. */
  eu: Autor | null;
  tagAtiva: string | null;
  aoCurtir: (id: string) => void;
  aoSalvar: (id: string) => void;
  aoCurtirComentario: (idPost: string, idComentario: string) => void;
  aoComentar: (idPost: string, idPai: string | null, texto: string) => void;
  aoAbrirTag: (tag: string) => void;
  /** Ações do menu "⋯". Ausentes = menu não aparece (ex.: pré-visualização). */
  aoDenunciar?: AoDenunciar;
  aoEditarPost?: AoEditarPost;
  aoApagarPost?: AoApagarPost;
  aoResolver?: AoResolver;
  aoAceitar?: AoAceitar;
}

export function PostCard({
  post,
  eu,
  tagAtiva,
  aoCurtir,
  aoSalvar,
  aoCurtirComentario,
  aoComentar,
  aoAbrirTag,
  aoDenunciar,
  aoEditarPost,
  aoApagarPost,
  aoResolver,
  aoAceitar,
}: Props) {
  const [abertos, setAbertos] = useState(false);
  const [editando, setEditando] = useState(false);
  const [pulsando, setPulsando] = useState(false);
  const [avisoCopia, setAvisoCopia] = useState(false);

  /* O fio de comentários abre por altura: cresce de 0 com `power3.out`
     (chega e assenta), some com `power2.in` (sai com pressa). `usarPresenca`
     segura o unmount até a saída terminar — sem corte seco. */
  const { ref: refComentarios, montado: comentariosMontados } = usarPresenca<HTMLDivElement>(
    abertos,
    (el) =>
      gsap.from(el, {
        height: 0,
        autoAlpha: 0,
        duration: DUR.base,
        ease: EASE.entrada,
        onStart: () => {
          el.style.overflow = "hidden";
        },
        clearProps: "height,overflow,opacity,visibility",
      }),
    (el) =>
      gsap.to(el, {
        height: 0,
        autoAlpha: 0,
        duration: DUR.curta,
        ease: EASE.saida,
        onStart: () => {
          el.style.overflow = "hidden";
        },
      })
  );

  /* O pulso do coração é um estado temporário; sem limpar o timer, um clique
     seguido de desmontagem (troca de aba) atualizaria componente já morto. */
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);

  const souDono = Boolean(eu && eu.id === post.autor.id);
  const podeAceitar = Boolean(souDono && post.tipo === "pergunta" && aoAceitar);
  const temMenu =
    Boolean(eu) && (souDono ? Boolean(aoEditarPost) : Boolean(aoDenunciar));

  const totalComentarios =
    post.comentarios.length +
    post.comentarios.reduce((n, c) => n + c.respostas.length, 0);

  function curtir() {
    if (!post.curtidoPorMim) {
      setPulsando(true);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setPulsando(false), 340);
    }
    aoCurtir(post.id);
  }

  async function compartilhar() {
    const url = `${window.location.origin}/comunidade#${post.id}`;
    try {
      // Compartilhamento nativo no celular; área de transferência no desktop.
      if (navigator.share) {
        await navigator.share({ title: post.titulo ?? "Comunidade", url });
        return;
      }
      await navigator.clipboard.writeText(url);
      setAvisoCopia(true);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setAvisoCopia(false), 2200);
    } catch {
      /* Cancelar o menu nativo cai aqui e não é erro — nada a fazer. */
    }
  }

  return (
    <article className={css.post} id={post.id}>
      <header className={css.postTopo}>
        <div className={css.identidade}>
          <Avatar autor={post.autor} />
          <div className={css.nomes}>
            <IdentidadeAutor autor={post.autor} />
            <span className={css.arroba}>@{post.autor.username || "sem-nome"}</span>
            <span className={css.pontoSeparador}> · </span>
            <TempoRelativo iso={post.criadoEm} className={css.quando} />
          </div>
        </div>

        <span
          className={`${css.tipoEtiqueta} ${
            post.tipo === "pergunta" ? css.tipoPergunta : ""
          }`}
        >
          {NOME_DO_TIPO[post.tipo]}
        </span>

        {post.resolvido && (
          <span className={`${css.tipoEtiqueta} ${css.resolvido}`}>
            <Icone nome="check" style={{ width: 12, height: 12 }} />
            Resolvida
          </span>
        )}

        {temMenu && (
          <MenuPost
            post={post}
            souDono={souDono}
            aoDenunciar={aoDenunciar}
            aoApagarPost={aoApagarPost}
            aoResolver={aoResolver}
            aoEditarInline={() => setEditando(true)}
          />
        )}
      </header>

      {editando && aoEditarPost ? (
        <EdicaoInline
          post={post}
          aoSalvar={async (texto, titulo) => {
            const erro = await aoEditarPost(post.id, texto, titulo);
            if (!erro) setEditando(false);
            return erro;
          }}
          aoCancelar={() => setEditando(false)}
        />
      ) : (
        <>
          {post.titulo && <h3 className={css.titulo}>{post.titulo}</h3>}
          <p className={css.texto}>{post.texto}</p>
        </>
      )}

      {post.codigo && (
        <div className={css.bloco}>
          <div className={css.blocoTopo}>
            <Icone nome="codigo" />
            {post.codigo.linguagem}
          </div>
          <pre className={css.codigo}>
            <code>{post.codigo.conteudo}</code>
          </pre>
        </div>
      )}

      {post.link && (
        <div className={css.bloco}>
          <div className={css.blocoTopo}>
            <Icone nome="elo" />
            Link
          </div>
          <a
            className={css.elo}
            href={post.link.url}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <span className={css.eloTitulo}>{post.link.titulo}</span>
            <span className={css.eloDominio}>{post.link.dominio}</span>
          </a>
        </div>
      )}

      {post.tags.length > 0 && (
        <div className={css.tags}>
          {post.tags.map((t) => (
            <button
              key={t}
              className={`${css.tagBotao} ${tagAtiva === t ? css.tagAtiva : ""}`}
              onClick={() => aoAbrirTag(t)}
              aria-pressed={tagAtiva === t}
            >
              #{t}
            </button>
          ))}
        </div>
      )}

      <div className={css.acoes}>
        <BotaoPressao
          className={`${css.acao} ${post.curtidoPorMim ? css.acaoAtiva : ""} ${
            pulsando ? css.pulsa : ""
          }`}
          onClick={curtir}
          aria-pressed={post.curtidoPorMim}
          aria-label={post.curtidoPorMim ? "Descurtir" : "Curtir"}
        >
          <Icone
            nome="coracao"
            fill={post.curtidoPorMim ? "currentColor" : "none"}
          />
          <span className={css.acaoRotulo}>Curtir</span>
          {post.curtidas > 0 && compacto(post.curtidas)}
        </BotaoPressao>

        {/* O `aria-label` não é redundante com o texto ao lado: em telas de até
            720px o `.acaoRotulo` some com `display: none`, e `display: none`
            tira o texto da árvore de acessibilidade também. Sem o rótulo
            explícito, no celular este vira um botão só de ícone, sem nome.
            Curtir e Salvar já faziam isso; Comentar e Compartilhar não. */}
        <BotaoPressao
          className={css.acao}
          onClick={() => setAbertos((v) => !v)}
          aria-expanded={abertos}
          aria-controls={`comentarios-${post.id}`}
          aria-label={
            totalComentarios > 0
              ? `${abertos ? "Ocultar" : "Ver"} ${totalComentarios} ${
                  totalComentarios === 1 ? "comentário" : "comentários"
                }`
              : "Comentar"
          }
        >
          <Icone nome="balao" />
          <span className={css.acaoRotulo}>Comentar</span>
          {totalComentarios > 0 && totalComentarios}
        </BotaoPressao>

        <BotaoPressao
          className={css.acao}
          onClick={compartilhar}
          aria-label="Copiar link da publicação"
        >
          <Icone nome="compartilhar" />
          <span className={css.acaoRotulo}>
            {avisoCopia ? "Link copiado" : "Compartilhar"}
          </span>
        </BotaoPressao>

        <span className={css.espaco} />

        <BotaoPressao
          className={`${css.acao} ${post.salvoPorMim ? css.salvoAtivo : ""}`}
          onClick={() => aoSalvar(post.id)}
          aria-pressed={post.salvoPorMim}
          aria-label={post.salvoPorMim ? "Remover dos salvos" : "Salvar"}
        >
          <Icone
            nome="marcador"
            fill={post.salvoPorMim ? "currentColor" : "none"}
          />
          <span className={css.acaoRotulo}>
            {post.salvoPorMim ? "Salvo" : "Salvar"}
          </span>
        </BotaoPressao>
      </div>

      {/* Aviso textual do compartilhamento: cor sozinha não avisaria ninguém
          que usa leitor de tela. */}
      <span className="sr-only" role="status">
        {avisoCopia ? "Link da publicação copiado." : ""}
      </span>

      {comentariosMontados && (
        <div ref={refComentarios} id={`comentarios-${post.id}`}>
          <Comentarios
            comentarios={post.comentarios}
            eu={eu}
            podeAceitar={podeAceitar}
            aoCurtir={(idc) => aoCurtirComentario(post.id, idc)}
            aoResponder={(idPai, texto) => aoComentar(post.id, idPai, texto)}
            aoAceitar={
              podeAceitar && aoAceitar
                ? (idc) => aoAceitar(post.id, idc)
                : undefined
            }
          />
        </div>
      )}
    </article>
  );
}

/* ---------- identidade clicável ---------- */

function IdentidadeAutor({ autor }: { autor: Autor }) {
  const conteudo = (
    <>
      {autor.nome}
      {autor.verificado && (
        <Icone
          nome="check"
          className={css.selo}
          role="img"
          aria-label="Perfil verificado"
        />
      )}
    </>
  );
  if (!autor.username) return <span className={css.nome}>{conteudo}</span>;
  return (
    <Link
      href={`/comunidade/perfil/${autor.username}`}
      className={`${css.nome} ${css.autorLink}`}
      aria-label={`Ver o perfil de ${autor.nome}`}
    >
      {conteudo}
    </Link>
  );
}

/* ---------- menu de ações do post ---------- */

function MenuPost({
  post,
  souDono,
  aoDenunciar,
  aoApagarPost,
  aoResolver,
  aoEditarInline,
}: {
  post: Post;
  souDono: boolean;
  aoDenunciar?: AoDenunciar;
  aoApagarPost?: AoApagarPost;
  aoResolver?: AoResolver;
  aoEditarInline: () => void;
}) {
  const [aberto, setAberto] = useState(false);
  const [denunciando, setDenunciando] = useState(false);
  const [motivo, setMotivo] = useState("");
  const [aviso, setAviso] = useState<string | null>(null);
  const [ocupado, setOcupado] = useState(false);
  const envolveRef = useRef<HTMLDivElement>(null);
  const refMenu = useRef<HTMLDivElement>(null);

  /* O menu materializa a partir do canto superior direito (o botão "⋯"):
     desfoca + encolhe + fade, coreografados num respiro só pelo
     `tlMaterializa`. A mesma timeline reverte ao fechar — velocidade
     preservada se abrir/fechar em sequência rápida. */
  usarTimelineAberto(refMenu, (el) => tlMaterializa(el, { origem: "100% 0%" }), aberto);

  useEffect(() => {
    if (!aberto) return;
    function fora(e: MouseEvent) {
      if (envolveRef.current && !envolveRef.current.contains(e.target as Node)) {
        setAberto(false);
        setDenunciando(false);
      }
    }
    function tecla(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setAberto(false);
        setDenunciando(false);
      }
    }
    document.addEventListener("mousedown", fora);
    document.addEventListener("keydown", tecla);
    return () => {
      document.removeEventListener("mousedown", fora);
      document.removeEventListener("keydown", tecla);
    };
  }, [aberto]);

  function fecha() {
    setAberto(false);
    setDenunciando(false);
    setMotivo("");
    setAviso(null);
  }

  async function roda(fn: () => Promise<string | null>) {
    setOcupado(true);
    setAviso(null);
    const erro = await fn();
    setOcupado(false);
    if (erro) setAviso(erro);
    else fecha();
  }

  return (
    <div className={css.menuEnvolve} ref={envolveRef}>
      <button
        className={css.miniAcao}
        aria-label={`Mais opções da publicação de ${post.autor.nome}`}
        aria-haspopup="menu"
        aria-expanded={aberto}
        title="Mais opções"
        onClick={() => setAberto((v) => !v)}
      >
        <Icone nome="reticencias" />
      </button>

      <div className={css.menu} role="menu" ref={refMenu}>
          {denunciando ? (
            <div className={css.menuMotivo}>
              <label className={css.rotulo} htmlFor={`den-${post.id}`}>
                Motivo (opcional)
              </label>
              <textarea
                id={`den-${post.id}`}
                className={css.campoComentario}
                rows={2}
                value={motivo}
                maxLength={500}
                placeholder="O que há de errado com esta publicação?"
                onChange={(e) => setMotivo(e.target.value)}
              />
              <div className={css.menuMotivoAcoes}>
                <button
                  className="btn btn-ghost"
                  onClick={() => setDenunciando(false)}
                  disabled={ocupado}
                >
                  Voltar
                </button>
                <button
                  className="btn btn-primary"
                  disabled={ocupado || !aoDenunciar}
                  onClick={() =>
                    aoDenunciar && roda(() => aoDenunciar("post", post.id, motivo.trim()))
                  }
                >
                  {ocupado ? "Enviando…" : "Enviar denúncia"}
                </button>
              </div>
            </div>
          ) : (
            <>
              {souDono ? (
                <>
                  <button
                    className={css.menuItem}
                    role="menuitem"
                    onClick={() => {
                      aoEditarInline();
                      fecha();
                    }}
                  >
                    Editar
                  </button>
                  {post.tipo === "pergunta" && aoResolver && (
                    <button
                      className={css.menuItem}
                      role="menuitem"
                      disabled={ocupado}
                      onClick={() =>
                        roda(() => aoResolver(post.id, !post.resolvido))
                      }
                    >
                      {post.resolvido
                        ? "Reabrir a pergunta"
                        : "Marcar como resolvida"}
                    </button>
                  )}
                  {aoApagarPost && (
                    <button
                      className={`${css.menuItem} ${css.menuPerigo}`}
                      role="menuitem"
                      disabled={ocupado}
                      onClick={() => {
                        if (
                          window.confirm(
                            "Apagar esta publicação? Isso não pode ser desfeito."
                          )
                        ) {
                          roda(() => aoApagarPost(post.id));
                        }
                      }}
                    >
                      Apagar
                    </button>
                  )}
                </>
              ) : (
                <button
                  className={css.menuItem}
                  role="menuitem"
                  onClick={() => setDenunciando(true)}
                >
                  Denunciar
                </button>
              )}
            </>
          )}

          {aviso && (
            <p className={css.menuAviso} role="alert">
              {aviso}
            </p>
          )}
      </div>
    </div>
  );
}

/* ---------- edição inline do próprio post ---------- */

function EdicaoInline({
  post,
  aoSalvar,
  aoCancelar,
}: {
  post: Post;
  aoSalvar: (texto: string, titulo: string | null) => Promise<string | null>;
  aoCancelar: () => void;
}) {
  const temTitulo = post.tipo === "pergunta" || post.tipo === "discussao";
  const [texto, setTexto] = useState(post.texto);
  const [titulo, setTitulo] = useState(post.titulo ?? "");
  const [salvando, setSalvando] = useState(false);
  const [erro, setErro] = useState<string | null>(null);

  const excedeu = texto.length > 5000;
  const podeSalvar = texto.trim().length > 0 && !excedeu && !salvando;

  async function salvar() {
    if (!podeSalvar) return;
    setSalvando(true);
    setErro(null);
    const e = await aoSalvar(texto.trim(), temTitulo ? titulo.trim() || null : null);
    setSalvando(false);
    if (e) setErro(e);
  }

  return (
    <div className={css.edicao}>
      {temTitulo && (
        <input
          className={css.campoTitulo}
          value={titulo}
          maxLength={160}
          placeholder="Título"
          onChange={(e) => setTitulo(e.target.value)}
          aria-label="Título"
        />
      )}
      <textarea
        className={css.campoTexto}
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        aria-label="Texto da publicação"
      />
      {erro && (
        <p className={css.fine} role="alert" style={{ color: "var(--err)" }}>
          {erro}
        </p>
      )}
      <div className={css.editorRodape}>
        <span className={`${css.contagem} ${excedeu ? css.excedeu : ""}`}>
          {texto.length} / 5000
        </span>
        <button className="btn btn-ghost" onClick={aoCancelar} disabled={salvando}>
          Cancelar
        </button>
        <button className="btn btn-primary" onClick={salvar} disabled={!podeSalvar}>
          {salvando ? "Salvando…" : "Salvar"}
        </button>
      </div>
    </div>
  );
}
