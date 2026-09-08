import css from "./comunidade.module.css";
import type { Autor } from "@/lib/tipos";

interface Props {
  autor: Autor;
  tamanho?: "pequeno" | "normal" | "grande";
}

/**
 * Avatar da pessoa: a foto de perfil quando há uma, senão as iniciais sobre
 * um fundo derivado do `matiz` (estável por usuário). A saturação fica baixa
 * de propósito para não brigar com o âmbar, o único acento do produto.
 */
export function Avatar({ autor, tamanho = "normal" }: Props) {
  const classe =
    tamanho === "pequeno"
      ? `${css.avatar} ${css.avatarPequeno}`
      : tamanho === "grande"
        ? `${css.avatar} ${css.avatarGrande}`
        : css.avatar;

  if (autor.avatarUrl) {
    return (
      <img
        src={autor.avatarUrl}
        alt=""
        className={classe}
        style={{ objectFit: "cover" }}
        loading="lazy"
        aria-hidden="true"
      />
    );
  }

  return (
    <span
      className={classe}
      style={{
        background: `hsl(${autor.matiz} 26% 21%)`,
        borderColor: `hsl(${autor.matiz} 24% 30%)`,
        color: `hsl(${autor.matiz} 34% 82%)`,
      }}
      aria-hidden="true"
    >
      {autor.iniciais}
    </span>
  );
}
