import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { BarraLeitura } from "@/components/layout/BarraLeitura";
import { AvisoVisitante } from "@/components/auth/AvisoVisitante";
import { criaClienteServidor } from "@/lib/supabase/server";
import {
  LIMITE_VISITANTE_MINUTOS,
  ehVisitante,
  minutosRestantes,
} from "@/lib/sessao";

/** Casca do site: barra de leitura, nav e rodapé. */
export default async function LayoutSite({
  children,
}: {
  children: React.ReactNode;
}) {
  // getUser() revalida o token com o servidor de auth — mais lento que ler o
  // cookie, e é o certo: o cookie sozinho pode estar expirado ou forjado.
  const supabase = await criaClienteServidor();

  let nome: string | null = null;
  let restamVisitante: number | null = null;

  if (supabase) {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (user) {
      const { data: perfil } = await supabase
        .from("perfis")
        .select("nome")
        .eq("id", user.id)
        .maybeSingle();
      nome = perfil?.nome || "Meu painel";

      /* O contador é calculado aqui, no servidor, a partir do created_at da
         conta. O cliente só exibe e decrementa — ele nunca é a fonte. */
      if (ehVisitante(user)) restamVisitante = minutosRestantes(user);
    }
  }

  return (
    <>
      <BarraLeitura />
      <Nav nome={nome} />
      {restamVisitante !== null && (
        <AvisoVisitante
          minutosIniciais={restamVisitante}
          limiteMinutos={LIMITE_VISITANTE_MINUTOS}
        />
      )}
      {children}
      <Footer />
    </>
  );
}
