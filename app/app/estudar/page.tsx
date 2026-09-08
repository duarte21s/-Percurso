import { redirect } from "next/navigation";

/* "Estudar" foi renomeada para "Questões" — é a mesma ferramenta: escolher
   assunto e responder com o gabarito comentado. A rota fica como atalho. */
export default function PaginaEstudar() {
  redirect("/app/questoes");
}
