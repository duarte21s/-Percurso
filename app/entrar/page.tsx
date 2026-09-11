import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";
import { CartaoAcesso } from "@/components/auth/CartaoAcesso";
import { usuarioAtual } from "@/lib/supabase/server";
import { ehVisitante } from "@/lib/sessao";
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
      <div className={css.cenario} aria-hidden="true">
        <Image
          src="/media/login-luz-natural.webp"
          alt=""
          fill
          sizes="100vw"
          preload
          className={css.fotograma}
        />
      </div>
      <header className={css.cabecalho}>
        <Link href="/" className={css.marca} aria-label="Percurso — início">Percurso<span aria-hidden="true">.</span></Link>
        <Link href="/" className={css.retorno}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M20 12H4m6-6-6 6 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Voltar ao início
        </Link>
      </header>
      <div className={css.conteudo}>
        <aside className={css.atmosfera} aria-label="Seu tempo de aprender">
          <span className={css.legenda}>Seu tempo de aprender</span>
          <p className={css.frase}>Um novo dia.<br />Um passo adiante.</p>
          <span className={css.traco} aria-hidden="true" />
        </aside>
        <section className={css.painel} aria-label="Acesso ao Percurso">
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
      </div>
    </main>
  );
}
