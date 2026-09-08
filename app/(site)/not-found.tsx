import type { Metadata } from "next";
import { NaoEncontrado } from "@/components/secoes/NaoEncontrado";

export const metadata: Metadata = {
  title: "Página não encontrada · Percurso",
};

/** Boundary 404 do grupo (site): herda Nav e rodapé do layout. Cobre, entre
 *  outras, o perfil de um username que não existe
 *  (/comunidade/perfil/[username]). O endereço que não casa com rota nenhuma
 *  cai no boundary da raiz, em app/not-found.tsx. */
export default function NaoEncontradoSite() {
  return <NaoEncontrado />;
}
