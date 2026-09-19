"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { criaClienteServidor } from "@/lib/supabase/server";

/** Salva os campos de estudo do perfil (nome + preferências do cronograma).
 *  O perfil público da comunidade (foto, bio, título) é editado em outro lugar. */
export async function salvarPerfil(formData: FormData) {
  const supabase = await criaClienteServidor();
  if (!supabase) redirect("/app/perfil?erro=sem_supabase");

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/entrar?proximo=/app/perfil");

  const nome = String(formData.get("nome") ?? "").trim();
  const horasDia = Number(formData.get("horas_dia"));
  const diasSemana = Number(formData.get("dias_semana"));

  if (!nome) redirect("/app/perfil?erro=nome");
  if (!Number.isInteger(horasDia) || horasDia < 1 || horasDia > 10) {
    redirect("/app/perfil?erro=horas");
  }
  if (!Number.isInteger(diasSemana) || diasSemana < 3 || diasSemana > 7) {
    redirect("/app/perfil?erro=dias");
  }

  const { error } = await supabase
    .from("perfis")
    /* `objetivo` saiu do update junto com o campo que o alimentava. A coluna
       continua no banco, com o valor que a conta já tinha — apagar isso é uma
       migração, não um efeito colateral de salvar o nome. */
    .update({
      nome,
      horas_dia: horasDia,
      dias_semana: diasSemana,
    })
    .eq("id", user.id);

  if (error) redirect("/app/perfil?erro=salvar");

  revalidatePath("/app/perfil");
  revalidatePath("/app", "layout");
  redirect("/app/perfil?salvo=1");
}
