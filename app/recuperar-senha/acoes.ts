"use server";

import { criaClienteServidor } from "@/lib/supabase/server";
import { origemDoSite } from "@/lib/supabase/origem";
import { traduz } from "@/lib/auth/mensagens";
import type { EstadoRecuperacao } from "./estado";

/**
 * Pede ao Supabase o e-mail com o link de recuperação.
 *
 * O link volta para `/auth/callback?proximo=/nova-senha` — a mesma rota que
 * já fecha o fluxo do Google. Ela troca o `?code=` por sessão no servidor e
 * só então manda para a tela da senha nova. É por isso que a recuperação não
 * precisou de rota própria de retorno: o callback nunca foi específico do
 * OAuth, ele só troca código por sessão.
 */
export async function pedirRecuperacao(
  _anterior: EstadoRecuperacao,
  dados: FormData
): Promise<EstadoRecuperacao> {
  const supabase = await criaClienteServidor();
  if (!supabase) {
    return { erro: "O Supabase ainda não foi configurado neste projeto." };
  }

  const email = String(dados.get("email") ?? "").trim();
  if (!email) return { erro: "Preencha o e-mail." };

  const origem = await origemDoSite();

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${origem}/auth/callback?proximo=${encodeURIComponent("/nova-senha")}`,
  });

  /* "Esse e-mail não tem conta" NÃO chega aqui, e é assim que precisa ser: o
     Supabase responde igual para endereço cadastrado e endereço desconhecido.
     Se respondesse diferente, esta tela viraria um verificador de quem estuda
     no Percurso — bastaria ir tentando endereços e ler a resposta. O que
     sobra são falhas de verdade: limite de envio estourado, e-mail malformado,
     SMTP fora do ar. */
  if (error) return { erro: traduz(error.message) };

  return { enviado: true };
}
