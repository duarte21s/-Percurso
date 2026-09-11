/* =========================================================================
   Tradução dos erros de autenticação.

   O Supabase responde em inglês e às vezes técnico demais. Cair no recado
   genérico é aceitável; despejar "AuthApiError: invalid_grant" na cara de
   quem só queria entrar, não.

   Mora aqui, e não junto das Server Actions que a usam, porque um arquivo
   "use server" só pode exportar funções async — e três telas precisam desta
   função: entrar, recuperar-senha e nova-senha.
   ========================================================================= */

export function traduz(mensagem: string): string {
  const m = mensagem.toLowerCase();

  if (m.includes("invalid login credentials"))
    return "E-mail ou senha incorretos.";
  if (m.includes("user already registered") || m.includes("already been registered"))
    return "Já existe uma conta com esse e-mail. Tente entrar.";
  if (m.includes("password should be at least"))
    return "A senha precisa de pelo menos 6 caracteres.";
  if (m.includes("email not confirmed"))
    return "Confirme seu e-mail antes de entrar. Veja a caixa de entrada.";
  if (m.includes("unable to validate email") || m.includes("invalid email"))
    return "Esse e-mail não parece válido.";
  if (m.includes("anonymous sign-ins are disabled"))
    return "O acesso de visitante está desligado no projeto. Ative Anonymous sign-ins no painel do Supabase.";
  if (m.includes("rate limit") || m.includes("too many"))
    return "Muitas tentativas seguidas. Espere um minuto e tente de novo.";
  if (m.includes("provider is not enabled") || m.includes("unsupported provider"))
    return "Esse acesso ainda não foi ligado no painel do Supabase, em Authentication → Sign In / Providers.";

  /* --- recuperação de senha ---------------------------------------------
     O link do e-mail vale uma vez e por tempo limitado. Quando vence, o
     Supabase reclama de sessão ausente ou de token inválido — e o recado
     precisa dizer o que fazer, não o que quebrou. */
  if (m.includes("new password should be different"))
    return "A senha nova precisa ser diferente da anterior.";
  if (
    m.includes("auth session missing") ||
    m.includes("session_not_found") ||
    m.includes("token has expired") ||
    m.includes("invalid or has expired")
  )
    return "O link de recuperação venceu ou já foi usado. Peça outro e tente de novo.";
  if (m.includes("same_password"))
    return "A senha nova precisa ser diferente da anterior.";

  return "Não consegui completar agora. Tente novamente em instantes.";
}
