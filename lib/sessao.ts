import { redirect } from "next/navigation";
import { criaClienteServidor } from "@/lib/supabase/server";
import type { SupabaseClient, User } from "@supabase/supabase-js";

/**
 * Quanto tempo o modo visitante dura, em minutos.
 *
 * Uma hora é o que dá para experimentar de verdade — um simulado inteiro, uma
 * prova começada, uma redação escrita — sem que a conta anônima vire a forma
 * normal de usar o site. Mexer aqui muda o limite em todo lugar: páginas, API
 * e o aviso na tela leem esta constante.
 */
export const LIMITE_VISITANTE_MINUTOS = 60;

/** Por quanto tempo o navegador fica sem poder pedir outro passe de visitante. */
export const ESPERA_NOVO_VISITANTE_HORAS = 24;

/** Nome do cookie que marca que este navegador já gastou o passe. */
export const COOKIE_VISITANTE = "percurso_visitante_usado";

/**
 * Sessão anônima? `is_anonymous` vem do próprio Supabase e é a fonte certa.
 * A checagem por e-mail fica de reserva para projetos antigos, em que o campo
 * ainda não existia.
 */
export function ehVisitante(user: User): boolean {
  if (typeof user.is_anonymous === "boolean") return user.is_anonymous;
  return !user.email && !user.phone;
}

/** Minutos que a conta de visitante já viveu. */
export function idadeEmMinutos(user: User): number {
  const nascimento = new Date(user.created_at).getTime();
  if (!Number.isFinite(nascimento)) return 0;
  return (Date.now() - nascimento) / 60_000;
}

/** Minutos que ainda restam. Zero quando acabou. */
export function minutosRestantes(user: User): number {
  if (!ehVisitante(user)) return Infinity;
  return Math.max(0, Math.ceil(LIMITE_VISITANTE_MINUTOS - idadeEmMinutos(user)));
}

/**
 * O relógio conta desde a criação da conta anônima, não desde o início da
 * aba. Fechar o navegador e voltar não reinicia nada — o `created_at` mora no
 * servidor, e é por isso que o limite não é contornável mexendo no relógio da
 * máquina ou limpando o `localStorage`.
 */
export function visitanteExpirou(user: User): boolean {
  return ehVisitante(user) && idadeEmMinutos(user) >= LIMITE_VISITANTE_MINUTOS;
}

/** Para onde mandar um visitante cujo tempo acabou. */
export function rotaDeExpiracao(destino: string): string {
  return `/visitante/expirou?proximo=${encodeURIComponent(destino)}`;
}

/**
 * Exige sessão para ver uma página. Sem ela, manda para o acesso e volta.
 *
 * O `?proximo=` é o que faz a viagem valer a pena: quem clicou em "Redação"
 * deslogado entra e cai na redação, não na home. Sem ele, o login vira um
 * beco — a pessoa se autentica e perde o que estava tentando fazer.
 *
 * Estas páginas passaram a exigir conta porque tudo o que elas fazem depende
 * de saber quem é: a prova grava o cronômetro, a redação sobe uma foto para
 * uma pasta privada, o simulado guarda de onde continuar. Servir isso a uma
 * sessão anônima significava progresso que some ao fechar a aba.
 */
export async function exigeSessao(
  destino: string
): Promise<{ supabase: SupabaseClient; user: User }> {
  const supabase = await criaClienteServidor();

  /* Sem Supabase configurado não há como autenticar ninguém. Vai para a home,
     que funciona só com o conteúdo estático. */
  if (!supabase) redirect("/");

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect(`/entrar?proximo=${encodeURIComponent(destino)}`);

  /* Encerrar a sessão precisa gravar cookie, e Server Component não pode.
     Por isso a expiração sai por um Route Handler em vez de acontecer aqui:
     ele desloga de verdade e só então manda para o acesso. Sem esse desvio, a
     sessão morta ficaria no navegador batendo neste mesmo redirect. */
  if (visitanteExpirou(user)) redirect(rotaDeExpiracao(destino));

  return { supabase, user };
}

/** O que uma rota de API precisa saber sobre quem chamou. */
export type ResultadoApi =
  | { ok: true; supabase: SupabaseClient; user: User }
  | { ok: false; erro: string; status: number; expirado?: true };

/**
 * Mesma regra da `exigeSessao`, para Route Handlers.
 *
 * Existe separada porque API não redireciona: devolve JSON com status, e o
 * cliente decide o que fazer. E precisa existir — sem ela, um visitante com o
 * tempo esgotado continuaria respondendo questão pela API mesmo sem conseguir
 * abrir a página. A porta da frente trancada não serve de nada com a dos
 * fundos aberta.
 */
export async function exigeSessaoApi(): Promise<ResultadoApi> {
  const supabase = await criaClienteServidor();
  if (!supabase) {
    return { ok: false, erro: "Supabase não configurado.", status: 503 };
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { ok: false, erro: "Faça login para continuar.", status: 401 };
  }

  if (visitanteExpirou(user)) {
    return {
      ok: false,
      erro: `Seu tempo de visitante acabou. Crie uma conta para continuar de onde parou — o progresso destes ${LIMITE_VISITANTE_MINUTOS} minutos fica salvo.`,
      status: 401,
      expirado: true,
    };
  }

  return { ok: true, supabase, user };
}

/**
 * Existe uma sessão de estudo AVULSA em andamento?
 *
 * `prova_id is null` é o que separa a sessão avulsa da prova do ENEM: as duas
 * moram em `simulados` com status 'em_andamento', e quem tem prova aberta não
 * tem o que continuar em /estudar — lá mora só a avulsa.
 *
 * Serve ao rótulo do botão da Chama, que antes decidia por `estudou_hoje`.
 * São fatos diferentes: dá para ter estudado hoje e não ter nada aberto (o
 * botão dizia "Continuar" e caía no seletor), e dá para não ter estudado hoje
 * e ter uma sessão abandonada (dizia "Estudar agora" e caía no meio dela).
 */
export async function temSessaoAvulsaAberta(
  supabase: SupabaseClient,
  uid: string
): Promise<boolean> {
  const { count } = await supabase
    .from("simulados")
    .select("id", { count: "exact", head: true })
    .eq("usuario_id", uid)
    .eq("status", "em_andamento")
    .is("prova_id", null);

  return (count ?? 0) > 0;
}
