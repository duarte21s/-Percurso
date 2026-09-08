import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { CartaoAcesso } from "@/components/auth/CartaoAcesso";
import { usuarioAtual } from "@/lib/supabase/server";
import { ehVisitante, LIMITE_VISITANTE_MINUTOS } from "@/lib/sessao";
import css from "./entrar.module.css";
import { destinoInterno } from "@/lib/destino-seguro";

export const metadata: Metadata = {
  title: "Entrar · Percurso",
  description: "Acesse sua conta para salvar o progresso do simulado.",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

interface Props {
  searchParams: Promise<{
    modo?: string;
    proximo?: string;
    erro?: string;
    expirado?: string;
  }>;
}

/**
 * O que volta em ?erro= vem do Google ou do Supabase, em inglês.
 * Os dois casos previsíveis ganham texto próprio; o resto vira um recado
 * genérico — melhor que despejar "invalid_grant" na cara de quem só queria
 * entrar.
 */
function recadoDoRetorno(bruto?: string): string | undefined {
  if (!bruto) return undefined;
  const m = bruto.toLowerCase();

  if (m.includes("access_denied") || m.includes("cancel"))
    return "Você cancelou o acesso. Pode tentar de novo quando quiser.";
  if (m.includes("sem_supabase"))
    return "O Supabase ainda não foi configurado neste projeto.";
  if (m.includes("provider is not enabled") || m.includes("unsupported provider"))
    return "Esse acesso ainda não foi ligado no painel do Supabase, em Authentication → Sign In / Providers.";

  return "Não consegui completar o acesso. Tente novamente.";
}

export default async function PaginaEntrar({ searchParams }: Props) {
  const { modo, proximo, erro, expirado } = await searchParams;

  /* Conta de verdade não tem o que fazer aqui. VISITANTE tem, e a distinção
     é o que faz a promessa da tela ser verdade: é sobre a sessão anônima dele
     que `criarConta` roda `updateUser`, mantendo o mesmo id — e com ele os
     simulados, as respostas e as redações. Mandar o visitante para /painel
     tornava o ramo `if (atual && ehVisitante(atual))` de acoes.ts código
     morto: ele nunca chegava ao formulário. */
  const usuario = await usuarioAtual();
  if (usuario && !ehVisitante(usuario)) redirect("/app");

  const destino = destinoInterno(proximo);

  /* Chegou aqui porque o tempo de visitante acabou. Abre já em "criar conta":
     é o que a pessoa precisa fazer, e o progresso dela está esperando na
     sessão anônima que acabou de ser encerrada. */
  const tempoAcabou = expirado === "1";

  return (
    <main className={css.tela}>
      <aside className={css.arte}>
        {/* Arte gerada no Higgsfield para este projeto — o mesmo livro do
            hero, no mesmo tratamento de luz âmbar sobre fundo quase preto. */}
        <img
          className={css.arteImagem}
          src="/media/hero-open.png"
          alt=""
          aria-hidden="true"
        />
        <div className={css.arteTexto}>
          <p className={css.arteFrase}>
            {tempoAcabou ? (
              <>
                Seu tempo de visita <em>acabou</em>.
              </>
            ) : (
              <>
                A página vira quando você <em>decide</em> virar.
              </>
            )}
          </p>
          <p className={css.arteLegenda}>
            {tempoAcabou
              ? `A visita dura ${LIMITE_VISITANTE_MINUTOS} minutos. Nada do que você fez se perdeu: criando a conta com este mesmo navegador, os simulados, as respostas e as redações continuam na sua.`
              : "Nove matérias, banco de questões comentadas e um cronograma que respeita a sua semana. O progresso fica salvo — inclusive em qual questão você parou."}
          </p>
        </div>
      </aside>

      <section className={css.painel}>
        <CartaoAcesso
          modoInicial={tempoAcabou || modo === "criar" ? "criar" : "entrar"}
          proximo={destino}
          erroInicial={
            tempoAcabou
              ? "Seu tempo de visitante terminou. Crie a conta para continuar de onde parou."
              : recadoDoRetorno(erro)
          }
        />
      </section>
    </main>
  );
}
