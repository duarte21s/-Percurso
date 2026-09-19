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
  /** Havia mais de uma página no feed servido junto com a casca? */
  temMaisInicial: boolean;
  /** Quem está logado, ou null. */
  eu: Autor | null;
  /** Logado, mas ainda sem nome de usuário escolhido. */
  precisaUsername: boolean;
}

const LOGIN = "/entrar?proximo=/comunidade";

export function Comunidade({
  feedInicial,
  temMaisInicial,
  eu,
  precisaUsername,
}: Props) {
  const router = useRouter();

  const [aba, setAba] = useState<AbaComunidade>("recentes");
  const [tag, setTag] = useState<string | null>(null);
  const [posts, setPosts] = useState<Post[]>(feedInicial);
  /* O que está DIGITADO e o que já foi PROCURADO são dois estados, não um.
     O primeiro acompanha cada tecla; o segundo só muda quando a digitação
     assenta. Fundir os dois dispararia uma consulta por caractere. */
  const [digitado, setDigitado] = useState("");
  const [busca, setBusca] = useState("");
  const [pagina, setPagina] = useState(0);
  const [temMais, setTemMais] = useState(temMaisInicial);
  const [carregando, setCarregando] = useState(false);
  /* Separado de `carregando`: "Carregar mais" não pode trocar o feed inteiro
     pelo esqueleto de carregamento — o que já está lido fica na tela. */
  const [carregandoMais, setCarregandoMais] = useState(false);
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

  /* A última busca disparada. Resposta de uma busca já abandonada não pode
     sobrescrever a atual: sem isto, digitar rápido deixa na tela o resultado
     de um termo que a pessoa já apagou, porque a ordem de chegada das
     respostas não é a ordem dos pedidos. */
  const pedido = useRef(0);

  async function carregar(
    a: AbaComunidade = aba,
    t: string | null = tag,
    b: string = busca,
    p = 0
  ) {
    const meu = ++pedido.current;
    const acrescentando = p > 0;
    if (acrescentando) setCarregandoMais(true);
    else setCarregando(true);
    setErroFeed(false);
    try {
      const qs = new URLSearchParams({ aba: a });
      if (t) qs.set("tag", t);
      if (b) qs.set("busca", b);
      if (p) qs.set("pagina", String(p));
      const r = await fetch(`/api/comunidade/feed?${qs}`);
      if (!r.ok) throw new Error();
      const dados = await r.json();
      if (meu !== pedido.current) return; // chegou atrasada: descarta
      const novos: Post[] = dados.posts ?? [];
      /* Acrescentar pode repetir um post que entrou no topo entre uma página
         e a seguinte — a janela do banco desliza. Sem esta guarda, o React
         acusaria chave repetida e o post apareceria duas vezes. */
      setPosts((atuais) => {
        if (!acrescentando) return novos;
        const vistos = new Set(atuais.map((x) => x.id));
        return [...atuais, ...novos.filter((x) => !vistos.has(x.id))];
      });
      setTemMais(Boolean(dados.temMais));
      setPagina(p);
      setFeedRev((n) => n + 1);
    } catch {
      if (meu === pedido.current) setErroFeed(true);
    } finally {
      if (meu === pedido.current) {
        setCarregando(false);
        setCarregandoMais(false);
      }
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
    carregar(aba, tag, busca, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [aba, tag, busca, logado]);

  /* Espera a digitação assentar antes de virar busca. 350ms é o intervalo em
     que uma pausa ainda parece parte de digitar; abaixo disso a tela pisca a
     cada tecla, acima disso a busca parece travada. */
  useEffect(() => {
    if (digitado.trim() === busca) return;
    const t = setTimeout(() => setBusca(digitado.trim()), 350);
    return () => clearTimeout(t);
  }, [digitado, busca]);

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
    /* A busca também é zerada: publicar e continuar vendo um feed filtrado por
       um termo antigo faria o post recém-criado parecer perdido. */
    setDigitado("");
    setBusca("");
    // Se nada disso mudou de fato, o efeito não dispara — recarrega à mão.
    if (aba === "recentes" && !tag && !busca) carregar("recentes", null, "", 0);
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

      {/* A busca vem ANTES das abas porque atravessa todas: procurar em
          "Salvos" é procurar dentro do que você salvou, e o resultado continua
          obedecendo a aba e a tag ativas. */}
      <div className={css.busca}>
        <label htmlFor="busca-comunidade" className="sr-only">
          Procurar na comunidade
        </label>
        <input
          id="busca-comunidade"
          type="search"
          className={css.buscaCampo}
          placeholder="Procurar por palavra no título ou no texto…"
          value={digitado}
          onChange={(e) => setDigitado(e.target.value)}
          autoComplete="off"
        />
        {busca && (
          <button
            type="button"
            className="btn btn-ghost"
            onClick={() => {
              setDigitado("");
              setBusca("");
            }}
          >
            Limpar
          </button>
        )}
      </div>

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
            busca
              ? `Nada encontrado para "${busca}"`
              : aba === "sem_resposta"
                ? "Nenhuma pergunta esperando"
                : aba === "minhas"
                  ? "Você ainda não publicou nada"
                  : aba === "salvos"
                    ? "Você ainda não salvou nada"
                    : "Nada por aqui ainda"
          }
          texto={
            busca
              ? "Tente outra palavra, ou limpe a busca para ver o feed inteiro."
              : aba === "sem_resposta"
                ? "Toda pergunta em aberto já recebeu pelo menos uma resposta. É um bom sinal."
                : aba === "minhas"
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

      {/* Só depois do feed, e só quando há próxima página. O feed tinha um
          teto de 40 posts sem nenhuma continuação: o 41º era inalcançável por
          qualquer caminho do produto. */}
      {!carregando && !erroFeed && temMais && posts.length > 0 && (
        <div className={css.maisLinha}>
          <button
            type="button"
            className="btn btn-ghost"
            onClick={() => carregar(aba, tag, busca, pagina + 1)}
            disabled={carregandoMais}
          >
            {carregandoMais ? "Carregando…" : "Carregar mais"}
          </button>
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
