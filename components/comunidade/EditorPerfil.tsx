"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Avatar } from "./Avatar";
import { BotaoPressao } from "@/components/ui/BotaoPressao";
import { gsap, useGSAP } from "@/lib/gsap/registro";
import { EASE, DUR } from "@/lib/gsap/vocabulario";
import { MOVIMENTO_QUERY, REDUZIDO_QUERY } from "@/lib/gsap/preferencias";
import { urlAvatar } from "@/lib/conteudo/comunidade";
import css from "./estudos.module.css";
import type { Autor } from "@/lib/tipos";

const FOTO_MAX = 2 * 1024 * 1024; // 2 MB
const FOTO_TIPOS = ["image/jpeg", "image/png", "image/webp"];

interface Props {
  eu: Autor;
  bio: string;
  tituloAtivo: string | null;
  titulosDisponiveis: string[];
}

/** Edição do próprio perfil: foto, bio e título exibido. */
export function EditorPerfil({ eu, bio, tituloAtivo, titulosDisponiveis }: Props) {
  const router = useRouter();
  const [novaBio, setNovaBio] = useState(bio);
  const [titulo, setTitulo] = useState(tituloAtivo ?? "");
  const [avatarUrl, setAvatarUrl] = useState(eu.avatarUrl ?? null);
  const [salvando, setSalvando] = useState(false);
  const [aviso, setAviso] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const refFoto = useRef<HTMLDivElement>(null);

  /* A foto materializa quando cai uma nova (ou some): desfoca de leve,
     encolhe e assenta com `back.out` — lê como "a imagem chegou". `avatarUrl`
     nas deps refaz o tween a cada troca; sob reduced-motion, só aparece. */
  useGSAP(
    () => {
      const el = refFoto.current;
      if (!el) return;
      const mm = gsap.matchMedia();

      mm.add(MOVIMENTO_QUERY, () => {
        gsap.fromTo(
          el,
          { autoAlpha: 0, scale: 0.9, filter: "blur(6px)" },
          {
            autoAlpha: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: DUR.base,
            ease: EASE.assenta,
            clearProps: "filter,scale",
          }
        );
      });
      mm.add(REDUZIDO_QUERY, () => {
        gsap.set(el, { autoAlpha: 1 });
      });
    },
    { scope: refFoto, dependencies: [avatarUrl] }
  );

  async function salvar() {
    setSalvando(true);
    setAviso(null);
    try {
      const r = await fetch("/api/comunidade/perfil", {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ bio: novaBio, tituloAtivo: titulo || null }),
      });
      const d = await r.json().catch(() => ({}));
      if (!r.ok) {
        setAviso(d.erro ?? "Não consegui salvar.");
        return;
      }
      setAviso("Salvo.");
      router.refresh();
    } catch {
      setAviso("Falha de rede.");
    } finally {
      setSalvando(false);
    }
  }

  async function enviarFoto(file: File) {
    if (!FOTO_TIPOS.includes(file.type)) {
      setAviso("Use uma imagem JPG, PNG ou WEBP.");
      return;
    }
    if (file.size > FOTO_MAX) {
      setAviso("A imagem passou de 2 MB. Envie uma menor.");
      return;
    }
    setSalvando(true);
    setAviso(null);
    try {
      const fd = new FormData();
      fd.append("foto", file);
      const r = await fetch("/api/comunidade/avatar", { method: "POST", body: fd });
      const d = await r.json().catch(() => ({}));
      if (!r.ok) {
        setAviso(d.erro ?? "Não consegui enviar a imagem.");
        return;
      }
      // `d.path` é caminho de storage, não URL — resolve com urlAvatar e
      // acrescenta um cache-bust para o <img> não servir a versão antiga.
      setAvatarUrl(`${urlAvatar(d.path)}?t=${Date.now()}`);
      router.refresh();
    } catch {
      setAviso("Falha de rede.");
    } finally {
      setSalvando(false);
    }
  }

  async function removerFoto() {
    setSalvando(true);
    setAviso(null);
    try {
      const r = await fetch("/api/comunidade/avatar", { method: "DELETE" });
      if (!r.ok) {
        const d = await r.json().catch(() => ({}));
        setAviso(d.erro ?? "Não consegui remover a foto.");
        return;
      }
      setAvatarUrl(null);
      router.refresh();
    } catch {
      setAviso("Falha de rede.");
    } finally {
      setSalvando(false);
    }
  }

  return (
    <div className={css.editor}>
      <div className={css.editorFoto}>
        <div ref={refFoto}>
          <Avatar autor={{ ...eu, avatarUrl }} tamanho="grande" />
        </div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <input
            ref={fileRef}
            type="file"
            accept="image/jpeg,image/png,image/webp"
            hidden
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) enviarFoto(f);
            }}
          />
          <BotaoPressao
            className="btn btn-ghost"
            onClick={() => fileRef.current?.click()}
            disabled={salvando}
          >
            Trocar foto
          </BotaoPressao>
          {avatarUrl && (
            <BotaoPressao className="btn btn-ghost" onClick={removerFoto} disabled={salvando}>
              Remover
            </BotaoPressao>
          )}
          <span className="dim fine" style={{ flexBasis: "100%" }}>
            JPG, PNG ou WEBP, até 2 MB.
          </span>
        </div>
      </div>

      <label>
        <span className="dim fine" style={{ display: "block", marginBottom: 4 }}>
          Bio
        </span>
        <textarea
          value={novaBio}
          maxLength={280}
          rows={3}
          onChange={(e) => setNovaBio(e.target.value)}
          style={{
            width: "100%",
            padding: "10px 12px",
            borderRadius: "var(--r)",
            border: "1px solid var(--line)",
            background: "var(--surface-2)",
            color: "var(--text)",
            font: "inherit",
            resize: "vertical",
          }}
        />
        <span className="dim fine">{novaBio.length}/280</span>
      </label>

      {titulosDisponiveis.length > 0 && (
        <label>
          <span className="dim fine" style={{ display: "block", marginBottom: 4 }}>
            Título exibido
          </span>
          <select
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            style={{
              padding: "8px 12px",
              borderRadius: "var(--r)",
              border: "1px solid var(--line)",
              background: "var(--surface-2)",
              color: "var(--text)",
              font: "inherit",
            }}
          >
            <option value="">Nenhum</option>
            {titulosDisponiveis.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </label>
      )}

      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
        <BotaoPressao className="btn btn-primary" onClick={salvar} disabled={salvando}>
          {salvando ? "Salvando…" : "Salvar"}
        </BotaoPressao>
        <span className="dim fine" role="status" aria-live="polite">
          {aviso ?? ""}
        </span>
      </div>
    </div>
  );
}
