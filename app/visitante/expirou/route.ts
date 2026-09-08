import { NextResponse } from "next/server";
import { criaClienteServidor } from "@/lib/supabase/server";
import {
  COOKIE_VISITANTE,
  ESPERA_NOVO_VISITANTE_HORAS,
  ehVisitante,
} from "@/lib/sessao";
import { destinoInterno } from "@/lib/destino-seguro";

export const dynamic = "force-dynamic";

/**
 * GET /visitante/expirou — encerra a sessão de visitante que passou do tempo.
 *
 * Isto é um Route Handler, e não um pedaço da `exigeSessao`, por um motivo
 * concreto: só Route Handler e Server Action podem gravar cookie no Next. Um
 * Server Component que chamasse `signOut()` veria a escrita falhar em
 * silêncio, a sessão continuaria no navegador e a pessoa ficaria presa num
 * laço de redirecionamento — sem acesso e sem deslogar.
 *
 * A conta anônima em si não é apagada. O progresso dela continua no banco,
 * amarrado ao mesmo id, e é isso que permite recuperar tudo se a pessoa criar
 * uma conta de verdade a partir da mesma sessão.
 */
export async function GET(request: Request) {
  const url = new URL(request.url);
  const proximo = destinoInterno(url.searchParams.get("proximo"), "/");

  const supabase = await criaClienteServidor();

  let eraVisitante = false;
  if (supabase) {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    eraVisitante = Boolean(user && ehVisitante(user));
    /* NÃO desloga. A sessão anônima é o ÚNICO vínculo com o que a pessoa fez,
       e é sobre ela que `criarConta` roda `updateUser` para promover a conta
       mantendo o id. Deslogar aqui fazia a tela de acesso prometer "nada do
       que você fez se perdeu" e, na hora de criar a conta, `getUser()` voltar
       nulo: nascia uma conta nova e o progresso ficava órfão no id antigo.

       O laço de redirecionamento que o signOut evitava foi fechado do outro
       lado: /entrar agora deixa o visitante passar para o formulário em vez de
       devolvê-lo a /painel. Sessão expirada continua sem acesso a nada — todo
       Server Component passa por `exigeSessao` e toda rota por
       `exigeSessaoApi`, e as duas barram por `visitanteExpirou`. */
  }

  const destino = new URL("/entrar", url.origin);
  destino.searchParams.set("expirado", "1");
  destino.searchParams.set("proximo", proximo);

  const resposta = NextResponse.redirect(destino, { status: 303 });

  /* Marca o navegador para o passe de visitante não ser renovável na hora.
     Não é à prova de nada: limpar cookies contorna, e uma aba anônima
     contorna. Mas segura o caso comum — clicar em "visitante" de novo assim
     que o tempo acaba — que é justamente o que esvaziaria o limite. */
  if (eraVisitante) {
    resposta.cookies.set(COOKIE_VISITANTE, String(Date.now()), {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: ESPERA_NOVO_VISITANTE_HORAS * 60 * 60,
    });
  }

  return resposta;
}
