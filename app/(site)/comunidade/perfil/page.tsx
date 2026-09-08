import { redirect } from "next/navigation";
import { criaClienteServidor } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

/**
 * `/comunidade/perfil` sem username = "meu perfil". Resolve o username da
 * sessão e manda para a página pública dele, em modo de edição. Sem conta, vai
 * para o acesso; sem username escolhido ainda, volta para a Comunidade (onde
 * mora o passo de escolher um).
 */
export default async function MeuPerfil() {
  const supabase = await criaClienteServidor();
  if (!supabase) redirect("/comunidade");

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/entrar?proximo=/comunidade/perfil");

  const { data: p } = await supabase
    .from("perfis")
    .select("username")
    .eq("id", user.id)
    .maybeSingle();

  if (!p?.username) redirect("/comunidade");
  redirect(`/comunidade/perfil/${p.username}?editar=1`);
}
