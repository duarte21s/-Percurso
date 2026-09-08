"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { criaClienteServidor } from "@/lib/supabase/server";

/** Liga/desliga o lembrete diário da Chama de Estudos.
 *  Grava em notificacao_prefs (upsert por usuario_id). */
export async function salvarNotificacoes(formData: FormData) {
  const supabase = await criaClienteServidor();
  if (!supabase) redirect("/app/configuracoes?erro=sem_supabase");

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login?proximo=/app/configuracoes");

  const chama = formData.get("chama") === "on";

  const { error } = await supabase
    .from("notificacao_prefs")
    .upsert({ usuario_id: user.id, chama }, { onConflict: "usuario_id" });

  if (error) redirect("/app/configuracoes?erro=salvar");

  revalidatePath("/app/configuracoes");
  redirect("/app/configuracoes?salvo=1");
}
