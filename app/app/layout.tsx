import { redirect } from "next/navigation";
import type { Metadata } from "next";
import { SidebarApp } from "@/components/layout/SidebarApp";
import { AvisoVisitante } from "@/components/auth/AvisoVisitante";
import { criaClienteServidor } from "@/lib/supabase/server";
import {
  LIMITE_VISITANTE_MINUTOS,
  ehVisitante,
  minutosRestantes,
} from "@/lib/sessao";
import css from "@/components/layout/sidebar-app.module.css";

/* Área individual, autenticada e sem conteúdo público para mecanismos de
   busca. Isso também evita indexar URLs de painel que dependem de sessão. */
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

/**
 * Casca da área de estudos. Vive fora do grupo (site): sem a Nav institucional
 * e sem o rodapé — aqui o topo é a plataforma em uso, com navegação própria
 * (a `SidebarApp`, fixa no desktop e em gaveta no mobile).
 *
 * O guarda de rota real é o proxy (redireciona /app/* sem sessão para
 * /login) somado ao `exigeSessao()` de cada página (que também derruba o
 * visitante cujo tempo acabou). Aqui só lemos o usuário para a navegação.
 */
export default async function LayoutApp({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await criaClienteServidor();
  if (!supabase) redirect("/");

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Sem sessão o proxy já teria redirecionado; isto é só a rede de baixo.
  if (!user) redirect("/entrar?proximo=/app");

  const { data: perfil } = await supabase
    .from("perfis")
    .select("nome")
    .eq("id", user.id)
    .maybeSingle();

  const nome = perfil?.nome || "Minha conta";
  const restamVisitante = ehVisitante(user) ? minutosRestantes(user) : null;

  return (
    <div className={css.wrap}>
      <SidebarApp nome={nome} />
      <div className={css.main}>
        {restamVisitante !== null && (
          <AvisoVisitante
            minutosIniciais={restamVisitante}
            limiteMinutos={LIMITE_VISITANTE_MINUTOS}
          />
        )}
        {children}
      </div>
    </div>
  );
}
