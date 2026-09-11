import type { Metadata } from "next";
import { FormularioRecuperacao } from "./FormularioRecuperacao";
import css from "@/app/entrar/entrar.module.css";

export const metadata: Metadata = {
  title: "Recuperar senha · Percurso",
  description: "Receba um link para criar uma senha nova.",
  robots: { index: false, follow: false },
};

/** Primeiro passo da recuperação: pedir o link. O segundo é /nova-senha. */
export default function PaginaRecuperarSenha() {
  return (
    <main className={css.telaSimples}>
      <FormularioRecuperacao />
    </main>
  );
}
