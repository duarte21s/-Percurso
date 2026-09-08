import type { Metadata } from "next";
import { NaoEncontrado } from "@/components/secoes/NaoEncontrado";

export const metadata: Metadata = {
  title: "Página não encontrada · Percurso",
};

/** Boundary 404 da RAIZ: atende endereço que não casa com rota nenhuma.
 *
 *  Sem ele, o Next serve a própria tela padrão — "404 · This page could not be
 *  found", em inglês e sem nada da identidade do site. O boundary de `(site)`
 *  não cobria esse caso: ele só vale para quem chamou `notFound()` dentro do
 *  grupo. Aqui não há Nav nem rodapé, porque estes vivem no layout de `(site)`
 *  e a raiz não passa por ele — daí a marca vir no conteúdo. */
export default function NaoEncontradoRaiz() {
  return <NaoEncontrado comMarca />;
}
