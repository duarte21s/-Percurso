"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { PostCard } from "./PostCard";
import { Compositor } from "./Compositor";
import { Icone } from "@/components/ui/Icone";
import css from "./comunidade.module.css";
import type { Autor, Comentario, Post } from "@/lib/tipos";

interface Props {
  questaoId: string;
}

const LOGIN = "/entrar?proximo=/comunidade";

/**
 * Discussão ancorada numa questão. Aparece recolhida abaixo do gabarito no
 * Estudar e da correção nas provas; abre sob demanda para não puxar dado que
 * ninguém pediu. Busca a própria identidade (o Estudar/prova não a repassa).
 */
export function DiscussaoQuestao({ questaoId }: Props) {
  const router = useRouter();
  const [aberto, setAberto] = useState(false);
  const [carregou, setCarregou] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);
  const [eu, setEu] = useState<Autor | null>(null);
  const [carregando, setCarregando] = useState(false);
  const [aviso, setAviso] = useState<string | null>(null);

  async function carregar() {
    setCarregando(true);
    try {
      const [fp, fe] = await Promise.all([
        fetch(`/api/comunidade/questao/${questaoId}`),
        carregou ? Promise.resolve(null) : fetch("/api/comunidade/eu"),
      ]);
      const dados = await fp.json();
      setPosts(dados.posts ?? []);
      if (fe) {
        const de = await fe.json().catch(() => ({ eu: null }));
        setEu(de.eu ?? null);
      }
    } catch {
      setAviso("Não consegui carregar a discussão.");
    } finally {
      setCarregando(false);
      setCarregou(true);
    }
  }

  function abrir() {
    setAberto((v) => {
      const proximo = !v;
      if (proximo && !carregou) carregar();
      return proximo;
    });
  }

  function precisaLogin(): boolean {
    if (eu?.username) return false;
    if (eu) setAviso("Escolha um nome de usuário na Comunidade para participar.");
    else router.push(LOGIN);
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
      .catch(carregar);
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
    carregar();
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
    carregar();
    return null;
  }

  const total = posts.length;

  return (
    <div style={{ marginTop: 20 }}>
      <button
        className="btn btn-ghost"
        onClick={abrir}
        aria-expanded={aberto}
        style={{ display: "inline-flex", alignItems: "center", gap: 8 }}
      >
        <Icone nome="balao" />
        {total > 0 ? `Discussão da comunidade (${total})` : "Discutir esta questão"}
        <span className="arrow">{aberto ? "▴" : "▾"}</span>
      </button>

      {aberto && (
        <div style={{ marginTop: 14 }}>
          {aviso && (
            <p className={css.fine} role="status" style={{ color: "var(--err)", marginBottom: 10 }}>
              {aviso}
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
              <Link href={eu ? "/comunidade" : LOGIN}>
                {eu ? "Escolha um nome de usuário" : "Entre"}
              </Link>{" "}
              para perguntar sobre esta questão.
            </p>
          )}

          {carregando ? (
            <p className={css.fine}>Carregando…</p>
          ) : total === 0 ? (
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
