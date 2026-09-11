"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { criaClienteServidor } from "@/lib/supabase/server";
import { traduz } from "@/lib/auth/mensagens";
import type { EstadoAuth } from "@/app/entrar/estado";

/**
 * Fecha a recuperação: grava a senha nova na conta que o link do e-mail
 * autenticou.
 *
 * Não existe campo de "senha atual" aqui, e é de propósito — quem está nesta
 * tela chegou por um link de uso único enviado ao e-mail da conta, e a prova
 * de identidade é justamente ter recebido esse e-mail. Pedir a senha antiga
 * seria pedir exatamente o que a pessoa não tem.
 */
export async function definirNovaSenha(
  _anterior: EstadoAuth,
  dados: FormData
): Promise<EstadoAuth> {
  const senha = String(dados.get("senha") ?? "");
  const confirmacao = String(dados.get("confirmacao") ?? "");

  if (senha.length < 6) {
    return { erro: "A senha precisa de pelo menos 6 caracteres." };
  }
  if (senha !== confirmacao) {
    return { erro: "As duas senhas não são iguais." };
  }

  const supabase = await criaClienteServidor();
  if (!supabase) {
    return { erro: "O Supabase ainda não foi configurado neste projeto." };
  }

  /* A sessão que autoriza a troca é a que o /auth/callback abriu com o código
     do e-mail. `getUser()` revalida esse token com o servidor de auth em vez
     de acreditar no cookie — sem essa checagem aqui, a página poderia ter
     dito "pode trocar" e a Action gravaria mesmo assim numa sessão que expirou
     no meio do caminho. */
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return {
      erro: "O link de recuperação venceu ou já foi usado. Peça outro e tente de novo.",
    };
  }

  const { error } = await supabase.auth.updateUser({ password: senha });
  if (error) return { erro: traduz(error.message) };

  revalidatePath("/", "layout");
  redirect("/app");
}
