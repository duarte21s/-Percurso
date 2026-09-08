import { redirect } from "next/navigation";

/* Neste projeto, "plano de estudos" e "cronograma" são a mesma ferramenta: o
   gerador que distribui a semana por matéria com revisão espaçada. Enquanto
   não houver um plano persistido e distinto do cronograma, a rota encaminha
   para /app/cronograma — mantendo o item no menu sem duplicar a ferramenta. */
export default function PaginaPlanoDeEstudos() {
  redirect("/app/cronograma");
}
