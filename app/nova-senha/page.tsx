import type { Metadata } from "next";
import { FormularioNovaSenha } from "./FormularioNovaSenha";
import { RecuperacaoPeloLink } from "./RecuperacaoPeloLink";
import { usuarioAtual } from "@/lib/supabase/server";
import { ehVisitante } from "@/lib/sessao";
import { motivoDoErro } from "@/lib/auth/recuperacao";
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
 * Segundo passo da recuperação.
 *
 * O caminho normal chega pelo /auth/callback, que já trocou o código do
 * e-mail por sessão: o servidor vê a conta e a página nasce com o
 * formulário. Quando o servidor não vê sessão, isso ainda não quer dizer
 * link inválido — o token pode estar no fragmento da URL, que só o navegador
 * lê. Aí quem decide é `RecuperacaoPeloLink`, no navegador. Se o callback já
 * falhou, ele manda o motivo em `?erro=` e a tela explica em vez de reler.
 *
 * Visitante não troca senha: conta anônima não tem senha, e
 * `updateUser({ password })` nela criaria uma credencial numa conta que
 * ninguém consegue usar para entrar depois.
 */
export default async function PaginaNovaSenha({
  searchParams,
}: {
  searchParams: Promise<{ erro?: string }>;
}) {
  const { erro } = await searchParams;
  const usuario = await usuarioAtual();
  const podeTrocar = Boolean(usuario && !ehVisitante(usuario));

  return (
    <main className={css.telaSimples}>
      {podeTrocar ? (
        <FormularioNovaSenha />
      ) : (
        <RecuperacaoPeloLink motivoDoServidor={erro ? motivoDoErro(erro) : null} />
      )}
    </main>
  );
}
