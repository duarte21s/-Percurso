import type { Metadata } from "next";
import Link from "next/link";
import { FormularioNovaSenha } from "./FormularioNovaSenha";
import { usuarioAtual } from "@/lib/supabase/server";
import { ehVisitante } from "@/lib/sessao";
import css from "@/app/entrar/entrar.module.css";

export const metadata: Metadata = {
  title: "Nova senha · Percurso",
  description: "Escolha a senha nova da sua conta.",
  robots: { index: false, follow: false },
};

/* A sessão desta tela nasce do link do e-mail, momentos antes. Cachear a
   página tornaria a decisão abaixo — pode trocar ou não — velha na hora. */
export const dynamic = "force-dynamic";

/**
 * Segundo passo da recuperação. Só se chega aqui pelo /auth/callback, que já
 * trocou o código do e-mail por sessão.
 *
 * Visitante cai no mesmo aviso de quem não tem sessão: conta anônima não tem
 * senha para trocar, e `updateUser({ password })` nela criaria uma credencial
 * numa conta que ninguém consegue usar para entrar depois.
 */
export default async function PaginaNovaSenha() {
  const usuario = await usuarioAtual();
  const podeTrocar = Boolean(usuario && !ehVisitante(usuario));

  if (!podeTrocar) {
    return (
      <main className={css.telaSimples}>
        <div className={css.cartao}>
          <h1 className={css.titulo}>Esse link não vale mais.</h1>
          <p className={css.subtitulo}>
            O link de recuperação vale por uma hora e por um uso só. Peça outro
            e a troca continua de onde parou.
          </p>
          <div className={css.formularioSimples}>
            <Link
              href="/recuperar-senha"
              className={`btn btn-primary ${css.enviar}`}
            >
              Pedir outro link
              <span className="arrow">→</span>
            </Link>
          </div>
          <p className={css.legal}>
            <Link href="/entrar" className={css.elo}>
              Voltar para o acesso
            </Link>
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className={css.telaSimples}>
      <FormularioNovaSenha />
    </main>
  );
}
