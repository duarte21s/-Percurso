import type { Metadata } from "next";
import { exigeSessao } from "@/lib/sessao";
import { leCronogramaSalvo } from "@/lib/cronograma-salvo";
import { Cronograma } from "@/components/secoes/Cronograma";

export const metadata: Metadata = {
  title: "Cronograma · Percurso",
  description:
    "Monte a sua semana de estudos e deixe-a salva na sua conta: diga quanto tempo tem e o que priorizar, e o cronograma distribui as matérias com revisão espaçada.",
};

export const dynamic = "force-dynamic";

/** Aceita a preferência do perfil só se ela couber nos controles da tela. */
function dentro(valor: unknown, min: number, max: number, padrao: number): number {
  return typeof valor === "number" && Number.isInteger(valor) && valor >= min && valor <= max
    ? valor
    : padrao;
}

export default async function PaginaCronograma() {
  // A página pública /cronograma explica o recurso; aqui é a ferramenta.
  const { supabase, user } = await exigeSessao("/app/cronograma");

  /* O cronograma salvo e, para quem ainda não tem um, as horas e os dias do
     perfil como ponto de partida do formulário. As duas leituras são
     independentes e vão juntas. */
  const [leitura, { data: perfil }] = await Promise.all([
    leCronogramaSalvo(supabase, user.id),
    supabase.from("perfis").select("horas_dia, dias_semana").eq("id", user.id).maybeSingle(),
  ]);

  const preferencias = {
    horas: dentro(perfil?.horas_dia, 1, 10, 4),
    dias: dentro(perfil?.dias_semana, 3, 7, 6),
  };

  return (
    <main style={{ paddingTop: 24 }}>
      <Cronograma leitura={leitura} preferencias={preferencias} />
    </main>
  );
}
