import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import { SUPABASE_ANON_KEY, SUPABASE_CONFIGURADO, SUPABASE_URL } from "./config";

/**
 * Renova a sessão do Supabase a cada request e repassa os cookies atualizados.
 *
 * Duas regras que parecem detalhe e não são:
 *
 * 1. `supabase.auth.getUser()` tem que ser chamado. É ele que revalida o token
 *    com o servidor de auth. Sem essa chamada, a sessão expira em silêncio.
 * 2. A resposta devolvida tem que ser a mesma que recebeu os cookies. Criar um
 *    NextResponse novo no fim descartaria a renovação e derrubaria o usuário
 *    de forma aleatória.
 */
export async function atualizaSessao(
  request: NextRequest,
  cabecalhosDaRequisicao = request.headers
) {
  let resposta = NextResponse.next({
    request: { headers: cabecalhosDaRequisicao },
  });

  // Sem Supabase configurado não há sessão para renovar nem rota para proteger.
  if (!SUPABASE_CONFIGURADO) return resposta;

  const supabase = createServerClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesParaGravar) {
          for (const { name, value } of cookiesParaGravar) {
            request.cookies.set(name, value);
          }
          resposta = NextResponse.next({
            request: { headers: cabecalhosDaRequisicao },
          });
          for (const { name, value, options } of cookiesParaGravar) {
            resposta.cookies.set(name, value, options);
          }
        },
      },
    }
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Toda a área de estudos vive sob /app e exige login. O site público
  // (/, /cronograma, /faculdades, /duvidas, /comunidade…) fica de fora.
  const protegidas = ["/app"];
  const caminho = request.nextUrl.pathname;

  if (!user && protegidas.some((r) => caminho === r || caminho.startsWith(r + "/"))) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    url.searchParams.set("proximo", caminho);
    return NextResponse.redirect(url);
  }

  return resposta;
}
