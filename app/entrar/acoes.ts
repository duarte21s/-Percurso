"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { criaClienteServidor } from "@/lib/supabase/server";
import { origemDoSite } from "@/lib/supabase/origem";
import { destinoInterno } from "@/lib/destino-seguro";
import {
  COOKIE_VISITANTE,
  ESPERA_NOVO_VISITANTE_HORAS,
  LIMITE_VISITANTE_MINUTOS,
  ehVisitante,
} from "@/lib/sessao";
import type { EstadoAuth } from "./estado";

/**
 * Traduz o erro do Supabase, que vem em inglês e às vezes técnico demais.
 * Cair no genérico é aceitável; mostrar "AuthApiError: invalid_grant" não é.
 */
function traduz(mensagem: string): string {
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

  return "Não consegui completar agora. Tente novamente em instantes.";
}

/* A checagem mora em lib/destino-seguro.ts: a versão anterior, feita aqui com
   startsWith, deixava passar `/\evil.com`. */
const destinoSeguro = (bruto: FormDataEntryValue | null) => destinoInterno(bruto);

export async function entrar(
  _anterior: EstadoAuth,
  dados: FormData
): Promise<EstadoAuth> {
  const supabase = await criaClienteServidor();
  if (!supabase) {
    return { erro: "O Supabase ainda não foi configurado neste projeto." };
  }

  const email = String(dados.get("email") ?? "").trim();
  const senha = String(dados.get("senha") ?? "");

  if (!email || !senha) {
    return { erro: "Preencha e-mail e senha." };
  }

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password: senha,
  });

  if (error) return { erro: traduz(error.message) };

  revalidatePath("/", "layout");
  redirect(destinoSeguro(dados.get("proximo")));
}

export async function criarConta(
  _anterior: EstadoAuth,
  dados: FormData
): Promise<EstadoAuth> {
  const supabase = await criaClienteServidor();
  if (!supabase) {
    return { erro: "O Supabase ainda não foi configurado neste projeto." };
  }

  const nome = String(dados.get("nome") ?? "").trim();
  const email = String(dados.get("email") ?? "").trim();
  const senha = String(dados.get("senha") ?? "");

  if (!nome) return { erro: "Como podemos te chamar?" };
  if (!email || !senha) return { erro: "Preencha e-mail e senha." };
  if (senha.length < 6) {
    return { erro: "A senha precisa de pelo menos 6 caracteres." };
  }

  /* --- visitante virando conta de verdade ---------------------------------
     Quem já está numa sessão anônima NÃO passa por signUp. `signUp` criaria
     um usuário novo, com id novo, e abandonaria no banco tudo o que a pessoa
     fez como visitante: simulados, respostas, redações. `updateUser` promove
     a conta que já existe, mantendo o mesmo id — e é por isso que o aviso na
     tela pode prometer que o progresso continua. */
  const {
    data: { user: atual },
  } = await supabase.auth.getUser();

  if (atual && ehVisitante(atual)) {
    const { data: promovido, error: erroPromocao } = await supabase.auth.updateUser({
      email,
      password: senha,
      data: { nome },
    });

    if (erroPromocao) return { erro: traduz(erroPromocao.message) };

    // O trigger handle_novo_usuario só roda na criação; o nome vai na mão.
    await supabase.from("perfis").update({ nome }).eq("id", atual.id);

    /* Com confirmação de e-mail ligada, o endereço fica pendente até o clique
       no link e a conta segue anônima até lá. Dizer isso importa: a pessoa
       precisa saber que ainda falta um passo. */
    if (promovido.user?.is_anonymous !== false) {
      return {
        aviso:
          "Quase lá: confirme o e-mail que enviamos para a conta virar definitiva. Tudo o que você fez como visitante já está guardado nela.",
      };
    }

    revalidatePath("/", "layout");
    redirect(destinoSeguro(dados.get("proximo")));
  }

  const { data, error } = await supabase.auth.signUp({
    email,
    password: senha,
    // O trigger handle_novo_usuario lê `nome` daqui para montar o perfil.
    options: { data: { nome } },
  });

  if (error) return { erro: traduz(error.message) };

  // Com confirmação de e-mail ligada no projeto, signUp não devolve sessão:
  // a pessoa precisa clicar no link antes de entrar.
  if (!data.session) {
    return {
      aviso:
        "Conta criada. Confirme o e-mail que enviamos e depois entre por aqui.",
    };
  }

  revalidatePath("/", "layout");
  redirect(destinoSeguro(dados.get("proximo")));
}

/**
 * Acesso via Google.
 *
 * Aqui não se digita senha nenhuma: o Supabase devolve a URL do provedor, a
 * pessoa autentica lá, e o provedor manda o navegador de volta para
 * /auth/callback com um código de uso único. Só esse callback é que troca o
 * código por sessão.
 *
 * O verificador PKCE é gravado em cookie por esta chamada — e é por isso que
 * ela precisa ser uma Server Action e não um Server Component: só a Action
 * tem permissão de escrever cookie. Sem ele, o callback não consegue fechar
 * a troca.
 */
export async function entrarComProvedor(
  _anterior: EstadoAuth,
  dados: FormData
): Promise<EstadoAuth> {
  const supabase = await criaClienteServidor();
  if (!supabase) {
    return { erro: "O Supabase ainda não foi configurado neste projeto." };
  }

  /* Lista fechada de propósito: o valor vem de um campo do formulário, e
     repassá-lo cru para o Supabase deixaria o cliente escolher o provedor.
     Só o Google está aqui — a Apple exige o Apple Developer Program pago.
     Para acrescentá-la depois, basta somar "apple" a esta checagem e o botão
     correspondente no CartaoAcesso; o callback já serve os dois. */
  const bruto = String(dados.get("provedor") ?? "");
  if (bruto !== "google") {
    return { erro: "Forma de acesso desconhecida." };
  }

  const destino = destinoSeguro(dados.get("proximo"));
  const origem = await origemDoSite();

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: bruto,
    options: {
      redirectTo: `${origem}/auth/callback?proximo=${encodeURIComponent(destino)}`,
    },
  });

  if (error) return { erro: traduz(error.message) };
  if (!data.url) {
    return { erro: "Não consegui abrir a tela do provedor. Tente de novo." };
  }

  redirect(data.url);
}

/**
 * Acesso de visitante, por tempo limitado.
 *
 * O passe dura {@link LIMITE_VISITANTE_MINUTOS} minutos contados da criação da
 * conta anônima no servidor — e é aqui que o navegador fica marcado, no
 * começo e não no fim. Marcar no fim deixaria a saída aberta: bastava sair aos
 * 59 minutos e pedir outro passe para reiniciar o relógio à vontade.
 *
 * O cookie não é uma tranca. Quem limpar os cookies ou abrir uma aba anônima
 * ganha outro passe, e não há como impedir isso sem exigir conta — que é
 * justamente o que o modo visitante existe para adiar. O que ele resolve é o
 * caso comum: renovar o passe no clique seguinte ao aviso de tempo esgotado.
 */
export async function entrarComoVisitante(
  _anterior: EstadoAuth,
  dados: FormData
): Promise<EstadoAuth> {
  const supabase = await criaClienteServidor();
  if (!supabase) {
    return { erro: "O Supabase ainda não foi configurado neste projeto." };
  }

  const jar = await cookies();
  const usadoEm = Number(jar.get(COOKIE_VISITANTE)?.value ?? 0);
  const horasDesde = (Date.now() - usadoEm) / 3_600_000;

  if (usadoEm > 0 && horasDesde < ESPERA_NOVO_VISITANTE_HORAS) {
    const faltam = Math.ceil(ESPERA_NOVO_VISITANTE_HORAS - horasDesde);
    return {
      erro: `Você já usou o acesso de visitante deste navegador. Crie uma conta para continuar agora — ou volte em ${faltam}h.`,
    };
  }

  const { error } = await supabase.auth.signInAnonymously();
  if (error) return { erro: traduz(error.message) };

  jar.set(COOKIE_VISITANTE, String(Date.now()), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: ESPERA_NOVO_VISITANTE_HORAS * 60 * 60,
  });

  revalidatePath("/", "layout");
  redirect(destinoSeguro(dados.get("proximo")));
}

export async function sair() {
  const supabase = await criaClienteServidor();
  if (supabase) await supabase.auth.signOut();
  revalidatePath("/", "layout");
  redirect("/");
}
