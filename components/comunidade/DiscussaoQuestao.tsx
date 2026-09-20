"use client";

import { useCallback, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { PostCard } from "./PostCard";
import { Compositor } from "./Compositor";
import { Icone } from "@/components/ui/Icone";
import css from "./comunidade.module.css";
import type { Autor, Comentario, Post } from "@/lib/tipos";

interface Props {
  questaoId: string;
}

/* Havia aqui um `LOGIN = "/entrar?proximo=/comunidade"` cravado. Quem estava
   no meio de uma sessão de estudo e tocava em curtir voltava do acesso na
   Comunidade, sem a questão, sem a sessão e sem o lugar onde parou. O destino
   agora é a página de onde a pessoa saiu — ver `voltarPara` abaixo. */

/**
 * Discussão ancorada numa questão. Aparece recolhida abaixo do gabarito no
 * Estudar e da correção nas provas; abre sob demanda para não puxar dado que
 * ninguém pediu. Busca a própria identidade (o Estudar/prova não a repassa).
 */
export function DiscussaoQuestao({ questaoId }: Props) {
  const router = useRouter();
  const caminho = usePathname();
  const busca = useSearchParams();
  const [aberto, setAberto] = useState(false);
  const [carregou, setCarregou] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);
  const [eu, setEu] = useState<Autor | null>(null);
  const [carregando, setCarregando] = useState(false);
  const [aviso, setAviso] = useState<string | null>(null);
  const [falhou, setFalhou] = useState(false);
  const refBotao = useRef<HTMLButtonElement>(null);
  const refPainel = useRef<HTMLDivElement>(null);

  /** Para onde o acesso devolve a pessoa: exatamente onde ela estava, com a
   *  querystring inteira — é ela que carrega `?sessao=…` no Estudar. */
  const voltarPara = `/entrar?proximo=${encodeURIComponent(
    busca?.toString() ? `${caminho}?${busca}` : caminho
  )}`;

  const carregar = useCallback(
    async (primeira = false) => {
      setCarregando(true);
      setFalhou(false);
      try {
        const [fp, fe] = await Promise.all([
          fetch(`/api/comunidade/questao/${questaoId}`),
          primeira ? fetch("/api/comunidade/eu") : Promise.resolve(null),
        ]);
        /* `fetch` não lança em 4xx/5xx. Sem este `fp.ok`, um 400 ou 500 caía
           no `dados.posts ?? []` e a tela dizia "ninguém comentou ainda" —
           um vazio falso, indistinguível de uma questão sem discussão. */
        if (!fp.ok) {
          const d = await fp.json().catch(() => ({}));
          setAviso(d?.erro ?? "Não consegui carregar a discussão.");
          setFalhou(true);
          return;
        }
        const dados = await fp.json().catch(() => ({}));
        setPosts(dados.posts ?? []);
        setAviso(null);
        if (fe) {
          const de = await fe.json().catch(() => ({ eu: null }));
          setEu(de.eu ?? null);
        }
      } catch {
        setAviso("Falha de rede ao carregar a discussão.");
        setFalhou(true);
      } finally {
        setCarregando(false);
        setCarregou(true);
      }
    },
    [questaoId]
  );

  function abrir() {
    const proximo = !aberto;
    setAberto(proximo);

    if (!proximo) {
      // Fechou: devolve o foco ao botão, para quem navega por teclado.
      refBotao.current?.focus();
      return;
    }

    if (!carregou) void carregar(true);

    /* O painel abre logo abaixo do gabarito, no fim de uma questão longa. Na
       medição em 1440×900 ele nascia com o topo em 915px — abaixo da dobra,
       com 0% visível, e nada rolava. Clicar parecia não fazer nada. Trazer o
       painel para a tela é o que torna o clique perceptível. */
    requestAnimationFrame(() => {
      const el = refPainel.current;
      if (!el) return;
      const suave = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      el.scrollIntoView({ behavior: suave ? "smooth" : "auto", block: "nearest" });
    });
  }

  function precisaLogin(): boolean {
    if (eu?.username) return false;
    if (eu) setAviso("Escolha um nome de usuário na Comunidade para participar.");
    else router.push(voltarPara);
    return true;
  }

  function aoCurtir(id: string) {
    if (precisaLogin()) return;
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
    if (precisaLogin()) return;
    const alvo = posts.find((p) => p.id === id);
    if (!alvo) return;
    const ativo = !alvo.salvoPorMim;
    setPosts((ps) => ps.map((p) => (p.id === id ? { ...p, salvoPorMim: ativo } : p)));
    fetch("/api/comunidade/salvos", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ postId: id, ativo }),
    })
      .then((r) => {
        if (!r.ok) throw new Error();
      })
      .catch(() =>
        setPosts((ps) => ps.map((p) => (p.id === id ? { ...p, salvoPorMim: !ativo } : p)))
      );
  }

  function aoCurtirComentario(idPost: string, idComentario: string) {
    if (precisaLogin()) return;
    setPosts((ps) =>
      ps.map((p) =>
        p.id === idPost
          ? { ...p, comentarios: mapC(p.comentarios, idComentario) }
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
      .catch(() => void carregar());
  }

  async function aoComentar(idPost: string, idPai: string | null, texto: string) {
    if (precisaLogin()) return;
    const r = await fetch("/api/comunidade/comentarios", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ postId: idPost, paiId: idPai, texto }),
    });
    const dados = await r.json().catch(() => ({}));
    if (!r.ok) {
      setAviso(dados.erro ?? "Não consegui comentar.");
      return;
    }
    void carregar();
  }

  async function aoDenunciar(
    alvoTipo: "post" | "comentario",
    alvoId: string,
    motivo: string
  ): Promise<string | null> {
    if (precisaLogin()) return "Entre para denunciar.";
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
    void carregar();
    return null;
  }

  const total = posts.length;

  return (
    <div style={{ marginTop: 20 }}>
      <button
        ref={refBotao}
        type="button"
        className="btn btn-ghost"
        onClick={abrir}
        aria-expanded={aberto}
        aria-controls={`discussao-${questaoId}`}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          minHeight: 44,
        }}
      >
        <Icone nome="balao" />
        {total > 0 ? `Discussão da comunidade (${total})` : "Discutir esta questão"}
        <span className="arrow">{aberto ? "▴" : "▾"}</span>
      </button>

      {aberto && (
        <div id={`discussao-${questaoId}`} ref={refPainel} style={{ marginTop: 14 }}>
          {aviso && (
            <p
              className={css.fine}
              role="alert"
              style={{ color: "var(--err)", marginBottom: 10 }}
            >
              {aviso}{" "}
              {falhou && (
                <button
                  type="button"
                  onClick={() => void carregar(!carregou)}
                  style={{
                    border: 0,
                    background: "none",
                    padding: 0,
                    font: "inherit",
                    color: "var(--accent-2)",
                    cursor: "pointer",
                    textDecoration: "underline",
                  }}
                >
                  Tentar de novo
                </button>
              )}
            </p>
          )}

          {eu?.username ? (
            <Compositor
              eu={eu}
              questaoId={questaoId}
              aoPublicar={() => {
                setAviso(null);
                carregar();
              }}
            />
          ) : (
            <p className={css.fine} style={{ marginBottom: 14 }}>
              <Link href={eu ? "/comunidade" : voltarPara}>
                {eu ? "Escolha um nome de usuário" : "Entre"}
              </Link>{" "}
              para perguntar sobre esta questão.
            </p>
          )}

          {carregando ? (
            <p className={css.fine} role="status">
              Carregando…
            </p>
          ) : falhou ? null : total === 0 ? (
            /* Só diz "ninguém comentou" quando a busca voltou de verdade.
               Com `falhou`, quem fala é o aviso acima — um vazio falso depois
               de um 500 é pior que uma mensagem de erro. */
            <p className={css.fine}>
              Ninguém comentou esta questão ainda. Seja a primeira pessoa.
            </p>
          ) : (
            <div className={css.feed}>
              {posts.map((p) => (
                <PostCard
                  key={p.id}
                  post={p}
                  eu={eu?.username ? eu : null}
                  tagAtiva={null}
                  aoCurtir={aoCurtir}
                  aoSalvar={aoSalvar}
                  aoCurtirComentario={aoCurtirComentario}
                  aoComentar={aoComentar}
                  aoAbrirTag={() => {}}
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
      )}
    </div>
  );
}

function mapC(lista: Comentario[], id: string): Comentario[] {
  const toggle = (c: Comentario): Comentario => ({
    ...c,
    curtidoPorMim: !c.curtidoPorMim,
    curtidas: c.curtidas + (c.curtidoPorMim ? -1 : 1),
  });
  return lista.map((c) =>
    c.id === id
      ? toggle(c)
      : c.respostas.length
        ? { ...c, respostas: c.respostas.map((r) => (r.id === id ? toggle(r) : r)) }
        : c
  );
}
