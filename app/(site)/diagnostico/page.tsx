import type { Metadata } from "next";
import { SidebarApp } from "@/components/layout/SidebarApp";
import { EscolherConteudo } from "@/components/estudo/EscolherConteudo";
import { TODAS_AS_MATERIAS } from "@/lib/conteudo/materias";
import { contagensPorTema } from "@/lib/temas";
import { criaClienteServidor } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Diagnóstico · Percurso",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

/* TEMPORÁRIO: reproduz a composição EXATA de /app/questoes — a barra do topo
   (com Pomodoro e trilha) mais o seletor — fora do login, para poder clicar. */
export default async function PaginaDiagnostico() {
  const supabase = await criaClienteServidor();
  const contagens = supabase ? await contagensPorTema(supabase) : {};
  return (
    <>
      <SidebarApp nome="profissa" />
      <main className="section" style={{ paddingTop: 40 }}>
        <div className="wrap">
          <EscolherConteudo materias={TODAS_AS_MATERIAS} contagens={contagens} />
        </div>
      </main>
    </>
  );
}
