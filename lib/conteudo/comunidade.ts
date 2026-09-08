/* =========================================================================
   Comunidade — rótulos e utilidades de exibição.

   O acesso ao banco vive em `lib/comunidade.ts` (só servidor). Aqui ficam só
   as constantes de interface e os formatadores puros, que rodam nos dois
   lados. Datas chegam em ISO 8601 do banco; o "há 2 h" é montado na hora.
   ========================================================================= */

import { SUPABASE_URL } from "@/lib/supabase/config";
import type { AbaComunidade, Autor, TipoPost } from "@/lib/tipos";

/* ---------- rótulos ---------- */

export const TIPOS_DE_POST: {
  valor: TipoPost;
  rotulo: string;
  descricao: string;
}[] = [
  { valor: "pergunta", rotulo: "Pergunta", descricao: "Uma dúvida de estudo que alguém pode responder." },
  { valor: "discussao", rotulo: "Discussão", descricao: "Um assunto para a comunidade debater." },
  { valor: "compartilhamento", rotulo: "Compartilhamento", descricao: "Material, resumo ou experiência que ajudou você." },
  { valor: "dica", rotulo: "Dica", descricao: "Algo curto e prático que funciona." },
];

export const NOME_DO_TIPO: Record<TipoPost, string> = {
  pergunta: "Pergunta",
  discussao: "Discussão",
  compartilhamento: "Compartilhamento",
  dica: "Dica",
};

export const ABAS: { valor: AbaComunidade; rotulo: string; soLogado?: boolean }[] = [
  { valor: "recentes", rotulo: "Recentes" },
  { valor: "populares", rotulo: "Populares" },
  { valor: "perguntas", rotulo: "Perguntas" },
  { valor: "minhas", rotulo: "Meus posts", soLogado: true },
  { valor: "salvos", rotulo: "Salvos", soLogado: true },
];

/** Tags oferecidas no editor. Livre também é aceito (ver validaTags). */
export const TAGS_SUGERIDAS = [
  "matemática",
  "português",
  "redação",
  "física",
  "química",
  "biologia",
  "história",
  "geografia",
  "filosofia",
  "inglês",
  "enem",
  "vestibular",
  "concurso",
  "método",
];

/* ---------- utilidades de exibição ---------- */

/** "há 3 min", "há 2 h", "há 4 d". Curto porque vive dentro do cabeçalho.
 *  O componente TempoRelativo chama isto no cliente, depois da montagem, para
 *  não divergir entre servidor e cliente. */
export function tempoRelativo(iso: string, agora: Date = new Date()): string {
  const minutos = Math.max(
    0,
    Math.round((agora.getTime() - new Date(iso).getTime()) / 60_000)
  );
  if (minutos < 1) return "agora";
  if (minutos < 60) return `há ${minutos} min`;
  const horas = Math.round(minutos / 60);
  if (horas < 24) return `há ${horas} h`;
  const dias = Math.round(horas / 24);
  if (dias < 7) return `há ${dias} d`;
  const semanas = Math.round(dias / 7);
  return `há ${semanas} sem`;
}

/** Data completa, para o `title` do horário — o relativo perde precisão. */
export function dataCompleta(iso: string): string {
  return new Date(iso).toLocaleString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

/** 1.284 → "1,3 mil". Evita número comprido dentro do botão. */
export function compacto(n: number): string {
  if (n < 1000) return String(n);
  const mil = n / 1000;
  return `${mil.toFixed(mil < 10 ? 1 : 0).replace(".", ",")} mil`;
}

/** URL pública da foto de perfil a partir do `avatar_path` guardado no perfil.
 *  Bucket `avatares` é público; nenhuma chamada ao Supabase é necessária. */
export function urlAvatar(path: string | null | undefined): string | null {
  if (!path) return null;
  return `${SUPABASE_URL}/storage/v1/object/public/avatares/${path}`;
}

/* ---------- montagem de Autor ---------- */

/** Iniciais para o avatar tipográfico: até duas, maiúsculas. */
export function iniciaisDe(nome: string): string {
  const partes = nome.trim().split(/\s+/).filter(Boolean);
  if (partes.length === 0) return "?";
  if (partes.length === 1) return partes[0].slice(0, 2).toUpperCase();
  return (partes[0][0] + partes[partes.length - 1][0]).toUpperCase();
}

/** Matiz 0–360 estável a partir do id do perfil. Só para o avatar tipográfico. */
export function matizDe(id: string): number {
  let h = 0;
  for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) | 0;
  return Math.abs(h) % 360;
}

/** Linha de perfil vinda do banco (vw_perfil_publico, perfis, ou o join). */
export interface LinhaPerfil {
  id?: string | null;
  nome?: string | null;
  username?: string | null;
  verificado?: boolean | null;
  avatar_path?: string | null;
}

/**
 * Constrói o `Autor` que a interface consome a partir de uma linha de perfil.
 * Único ponto de montagem — servidor e rotas chamam daqui, para não divergirem
 * (foto faltando num lugar, fallback de nome diferente no outro).
 *
 * `primeiraPessoa` troca o fallback de nome de "Alguém" para "Você" (usado no
 * compositor e na rota /eu). O fallback de `username` é sempre `""` — a
 * interface só faz link para o perfil quando há um username de verdade.
 */
export function montarAutor(
  linha: LinhaPerfil | null | undefined,
  opcoes: { primeiraPessoa?: boolean; id?: string } = {}
): Autor {
  const p = linha ?? null;
  const id = opcoes.id ?? p?.id ?? "";
  const nome = p?.nome?.trim() || (opcoes.primeiraPessoa ? "Você" : "Alguém");
  return {
    id,
    nome,
    username: p?.username ?? "",
    iniciais: iniciaisDe(nome),
    matiz: matizDe(id),
    avatarUrl: urlAvatar(p?.avatar_path),
    verificado: Boolean(p?.verificado),
  };
}
