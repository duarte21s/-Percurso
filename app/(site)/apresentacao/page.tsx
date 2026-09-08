import { redirect } from "next/navigation";
import { PRIMEIRO } from "@/lib/conteudo/apresentacao";

/* /apresentacao sozinho não é um lugar — é a intenção de começar. Manda para o
   primeiro passo em vez de mostrar um índice que ninguém pediu. */
export default function EntradaApresentacao() {
  redirect(`/apresentacao/${PRIMEIRO}`);
}
