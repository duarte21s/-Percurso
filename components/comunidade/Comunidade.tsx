"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { PostCard } from "./PostCard";
import { Compositor, EscolherUsername } from "./Compositor";
import { CarregandoFeed, DeuErro, SemNada } from "./Estados";
import { gsap, useGSAP } from "@/lib/gsap/registro";
import { EASE, DUR, STAGGER } from "@/lib/gsap/vocabulario";
import { MOVIMENTO_QUERY, REDUZIDO_QUERY } from "@/lib/gsap/preferencias";
import { ABAS } from "@/lib/conteudo/comunidade";
import css from "./comunidade.module.css";
import type { AbaComunidade, Autor, Comentario, Post } from "@/lib/tipos";

interface Props {
  feedInicial: Post[];
  /** Quem está logado, ou null. */
  eu: Autor | null;
  /** Logado, mas ainda sem nome de usuário escolhido. */
  precisaUsername: boolean;
}

const LOGIN = "/entrar?proximo=/comunidade";

export function Comunidade({ feedInicial, eu, precisaUsername }: Props) {
  const router = useRouter();

  const [aba, setAba] = useState<AbaComunidade>("recentes");
  const [tag, setTag] = useState<string | null>(null);
  const [posts, setPosts] = useState<Post[]>(feedInicial);
  const [carregando, setCarregando] = useState(false);
  const [erroFeed, setErroFeed] = useState(false);
  const [aviso, setAviso] = useState<string | null>(null);
  /* Sobe a cada feed novo carregado (não a cada curtida) — é o gatilho da
     entrada em cascata dos cards. */
  const [feedRev, setFeedRev] = useState(0);

  const [meuUsername, setMeuUsername] = useState<string | null>(
    eu && !precisaUsername ? eu.username : null
  );
  const euEfetivo: Autor | null =
    eu && meuUsername ? { ...eu, username: meuUsername } : null;
  const logado = Boolean(euEfetivo);

  const primeira = useRef(true);
  const refAbas = useRef<HTMLDivElement>(null);
  const refSublinhado = useRef<HTMLSpanElement>(null);
  const refFeed = useRef<HTMLDivElement>(null);

  /* O sublinhado da aba ativa é UM elemento no container que desliza até a
     aba selecionada. Mede a posição (offsetLeft/Width) e anima só transformas:
     `x` posiciona a borda esquerda, `scaleX` estica a barra de 1px até a
     largura-alvo — nada de layout por frame. Se ainda não tem posição (barra
     em repouso, scaleX 1), posiciona na hora com `set` — sem flash. Se já
     estava em alguma aba, glisa com `travessia` (power1.inOut); `overwrite`
     re-mira do ponto atual se a aba mudar no meio do trajeto. */
  useGSAP(
    () => {
      const cont = refAbas.current;
      const linha = refSublinhado.current;
      if (!cont || !linha) return;
      const ativo = cont.querySelector<HTMLElement>('[role="tab"][aria-selected="true"]');
      if (!ativo) return;
      const x = ativo.offsetLeft + 12;
      const larguraAlvo = Math.max(1, ativo.offsetWidth - 24);

      const mm = gsap.matchMedia();
      mm.add(MOVIMENTO_QUERY, () => {
        const jaPosicionado = Number(gsap.getProperty(linha, "scaleX")) > 1.5;
        if (jaPosicionado) {
          gsap.to(linha, {
            x,
            scaleX: larguraAlvo,
            autoAlpha: 1,
            duration: DUR.base,
            ease: EASE.travessia,
            overwrite: "auto",
          });
        } else {
          gsap.set(linha, { x, scaleX: larguraAlvo, autoAlpha: 1 });
        }
      });
      mm.add(REDUZIDO_QUERY, () => {
        gsap.set(linha, { x, scaleX: larguraAlvo, autoAlpha: 1 });
      });
    },
    { dependencies: [aba, logado], scope: refAbas }
  );

  /* Feed em cascata: cada card sobe 18px, escalonado com `power3.out` — o
     stagger do GSAP dá o ritmo de "a lista chegou", muito melhor que N
     animações idênticas ao mesmo tempo (era o que o `@keyframes entra` fazia).
     Só transforma, sem opacidade: se o JS falhar, o feed aparece igual — é o
     conteúdo principal da página, não pode depender do tween. `feedRev` refaz
     a cascata só quando o feed muda (troca de aba/tag), nunca numa curtida. */
  useGSAP(
    () => {
      const el = refFeed.current;
      if (!el) return;
      const cards = Array.from(el.children) as HTMLElement[];
      if (!cards.length) return;
      const mm = gsap.matchMedia();
      mm.add(MOVIMENTO_QUERY, () => {
        const t = gsap.from(cards, {
          y: 18,
          duration: DUR.base,
          ease: EASE.entrada,
          stagger: STAGGER.lista,
          clearProps: "transform",
        });
        return () => t.kill();
      });
    },
    { dependencies: [feedRev], scope: refFeed }
  );

  async function carregar(a: AbaComunidade = aba, t: string | null = tag) {
    setCarregando(true);
    setErroFeed(false);
    try {
      const qs = new URLSearchParams({ aba: a });
      if (t) qs.set("tag", t);
      const r = await fetch(`/api/comunidade/feed?${qs}`);
      if (!r.ok) throw new Error();
      const dados = await r.json();
      setPosts(dados.posts ?? []);
      setFeedRev((n) => n + 1);
    } catch {
      setErroFeed(true);
    } finally {
      setCarregando(false);
    }
  }

  useEffect(() => {
    // "Meus posts" e "Salvos" só existem logado; se a sessão sumir, volta.
    if (!logado && (aba === "minhas" || aba === "salvos")) {
      setAba("recentes");
      return;
    }
    // O feed inicial já cobre "recentes" sem tag — não refaz na montagem.
    if (primeira.current) {
      primeira.current = false;
      return;
    }
    carregar(aba, tag);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [aba, tag, logado]);

  function exigeLogin(): boolean {
    if (euEfetivo) return false;
    if (eu) {
      setAviso("Escolha um nome de usuário para participar.");
    } else {
      router.push(LOGIN);
    }
    return true;
  }

  function trocaTag(t: string) {
    setTag((atual) => (atual === t ? null : t));
  }

  /* ---------- mutações otimistas ---------- */

  function aoCurtir(id: string) {
    if (exigeLogin()) return;
    const alvo = posts.find((p) => p.id === id);
    if (!alvo) return;
    const ativo = !alvo.curtidoPorMim;
    setPosts((ps) =>
      ps.map((p) =>
        p.id === id
          ? { ...p, curtidoPorMim: ativo, curtidas: p.curtidas + (ativo ? 1 : -1) }
          : p
      )
    );
    fetch("/api/comunidade/reacoes", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ alvoTipo: "post", alvoId: id, ativo }),
    })
      .then((r) => {
        if (!r.ok) throw new Error();
      })
      .catch(() =>
        setPosts((ps) =>
          ps.map((p) =>
            p.id === id
              ? { ...p, curtidoPorMim: !ativo, curtidas: p.curtidas + (ativo ? -1 : 1) }
              : p
          )
        )
      );
  }

  function aoSalvar(id: string) {
    if (exigeLogin()) return;
    const alvo = posts.find((p) => p.id === id);
    if (!alvo) return;
    const ativo = !alvo.salvoPorMim;
    setPosts((ps) =>
      ps.map((p) => (p.id === id ? { ...p, salvoPorMim: ativo } : p))
    );
    fetch("/api/comunidade/salvos", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ postId: id, ativo }),
    })
      .then((r) => {
        if (!r.ok) throw new Error();
      })
      .catch(() =>
        setPosts((ps) =>
          ps.map((p) => (p.id === id ? { ...p, salvoPorMim: !ativo } : p))
        )
      );
  }

  function aoCurtirComentario(idPost: string, idComentario: string) {
    if (exigeLogin()) return;
    setPosts((ps) =>
      ps.map((p) =>
        p.id === idPost
          ? { ...p, comentarios: mapComentario(p.comentarios, idComentario, alternaCurtida) }
          : p
      )
    );
    const reverter = () =>
      setPosts((ps) =>
        ps.map((p) =>
          p.id === idPost
            ? { ...p, comentarios: mapComentario(p.comentarios, idComentario, alternaCurtida) }
            : p
        )
      );
    fetch("/api/comunidade/reacoes", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ alvoTipo: "comentario", alvoId: idComentario }),
    })
      .then((r) => {
        if (!r.ok) throw new Error();
      })
      .catch(reverter);
  }

  async function aoComentar(idPost: string, idPai: string | null, texto: string) {
    if (exigeLogin()) return;
    const r = await fetch("/api/comunidade/comentarios", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ postId: idPost, paiId: idPai, texto }),
    });
    const dados = await r.json().catch(() => ({}));
    if (!r.ok) {
      setAviso(dados.erro ?? "Não consegui comentar agora.");
      return;
    }
    carregar();
  }

  /* ---------- moderação e resolução (via menu do post) ---------- */

  async function aoDenunciar(
    alvoTipo: "post" | "comentario",
    alvoId: string,
    motivo: string
  ): Promise<string | null> {
    if (exigeLogin()) return "Entre para denunciar.";
    const r = await fetch("/api/comunidade/denuncias", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ alvoTipo, alvoId, motivo }),
    });
    if (!r.ok) {
      const d = await r.json().catch(() => ({}));
      return d.erro ?? "Não consegui registrar a denúncia.";
    }
    return null;
  }

  async function aoEditarPost(
    id: string,
    texto: string,
    titulo: string | null
  ): Promise<string | null> {
    const r = await fetch("/api/comunidade/posts", {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ id, texto, titulo: titulo ?? "" }),
    });
    const d = await r.json().catch(() => ({}));
    if (!r.ok) return d.erro ?? "Não consegui salvar a edição.";
    setPosts((ps) =>
      ps.map((p) => (p.id === id ? { ...p, texto, titulo: titulo ?? undefined } : p))
    );
    return null;
  }

  async function aoApagarPost(id: string): Promise<string | null> {
    const r = await fetch(`/api/comunidade/posts?id=${encodeURIComponent(id)}`, {
      method: "DELETE",
    });
    if (!r.ok) {
      const d = await r.json().catch(() => ({}));
      return d.erro ?? "Não consegui apagar.";
    }
    setPosts((ps) => ps.filter((p) => p.id !== id));
    return null;
  }

  async function aoResolver(id: string, resolvido: boolean): Promise<string | null> {
    const r = await fetch(`/api/comunidade/posts/${id}/resolver`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ resolvido }),
    });
    if (!r.ok) {
      const d = await r.json().catch(() => ({}));
      return d.erro ?? "Não consegui atualizar.";
    }
    setPosts((ps) => ps.map((p) => (p.id === id ? { ...p, resolvido } : p)));
    return null;
  }

  async function aoAceitar(idPost: string, idComentario: string): Promise<string | null> {
    const r = await fetch(`/api/comunidade/comentarios/${idComentario}/aceitar`, {
      method: "POST",
    });
    if (!r.ok) {
      const d = await r.json().catch(() => ({}));
      return d.erro ?? "Não consegui aceitar a resposta.";
    }
    carregar();
    return null;
  }

  function aoPublicar() {
    setAba("recentes");
    setTag(null);
    // Se já estava em "recentes" sem tag, o efeito não dispara — recarrega à mão.
    if (aba === "recentes" && !tag) carregar("recentes", null);
  }

  /* ---------- render ---------- */

  return (
    <div>
      {aviso && (
        <p className={css.fine} role="status" style={{ color: "var(--err)", marginBottom: 12 }}>
          {aviso}
        </p>
      )}

      {eu && !meuUsername && (
        <EscolherUsername
          onPronto={(u) => {
            setMeuUsername(u);
            setAviso(null);
          }}
        />
      )}

      {euEfetivo ? (
        <Compositor eu={euEfetivo} aoPublicar={aoPublicar} />
      ) : (
        !eu && (
          <div className={css.aviso} style={{ padding: "28px 24px", marginBottom: 20 }}>
            <p className={css.avisoTitulo}>Entre para participar</p>
            <p className={css.avisoTexto}>
              Ler a comunidade é aberto. Para perguntar, comentar ou curtir,{" "}
              <Link href={LOGIN}>crie uma conta</Link>.
            </p>
          </div>
        )
      )}

      <div
        className={css.abas}
        role="tablist"
        aria-label="Filtros do feed"
        ref={refAbas}
      >
        {ABAS.filter((a) => !a.soLogado || euEfetivo).map((a) => (
          <button
            key={a.valor}
            role="tab"
            aria-selected={aba === a.valor}
            className={`${css.aba} ${aba === a.valor ? css.abaAtiva : ""}`}
            onClick={() => setAba(a.valor)}
          >
            {a.rotulo}
          </button>
        ))}
        <span
          className={css.abaSublinhado}
          ref={refSublinhado}
          aria-hidden="true"
        />
      </div>

      {tag && (
        <p className={css.fine} style={{ marginBottom: 14 }}>
          Filtrando por <strong>#{tag}</strong>{" "}
          <button className="btn btn-ghost" onClick={() => setTag(null)} style={{ marginLeft: 6 }}>
            limpar
          </button>
        </p>
      )}

      {carregando ? (
        <CarregandoFeed />
      ) : erroFeed ? (
        <DeuErro aoTentar={() => carregar()} />
      ) : posts.length === 0 ? (
        <SemNada
          titulo={
            aba === "minhas"
              ? "Você ainda não publicou nada"
              : aba === "salvos"
                ? "Você ainda não salvou nada"
                : "Nada por aqui ainda"
          }
          texto={
            aba === "minhas"
              ? "O que você publicar aparece aqui."
              : aba === "salvos"
                ? "Toque em Salvar num post para guardá-lo aqui e ler depois."
                : "Os primeiros posts são da Equipe Percurso. Publique o seu — a comunidade está começando."
          }
        />
      ) : (
        <div className={css.feed} ref={refFeed}>
          {posts.map((p) => (
            <PostCard
              key={p.id}
              post={p}
              eu={euEfetivo}
              tagAtiva={tag}
              aoCurtir={aoCurtir}
              aoSalvar={aoSalvar}
              aoCurtirComentario={aoCurtirComentario}
              aoComentar={aoComentar}
              aoAbrirTag={trocaTag}
              aoDenunciar={aoDenunciar}
              aoEditarPost={aoEditarPost}
              aoApagarPost={aoApagarPost}
              aoResolver={aoResolver}
              aoAceitar={aoAceitar}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/* ---------- helpers de comentário (1 nível) ---------- */

function alternaCurtida(c: Comentario): Comentario {
  return {
    ...c,
    curtidoPorMim: !c.curtidoPorMim,
    curtidas: c.curtidas + (c.curtidoPorMim ? -1 : 1),
  };
}

function mapComentario(
  lista: Comentario[],
  id: string,
  fn: (c: Comentario) => Comentario
): Comentario[] {
  return lista.map((c) => {
    if (c.id === id) return fn(c);
    if (c.respostas.length) {
      return { ...c, respostas: c.respostas.map((r) => (r.id === id ? fn(r) : r)) };
    }
    return c;
  });
}
