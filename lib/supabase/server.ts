import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import {
  SUPABASE_ANON_KEY,
  SUPABASE_CONFIGURADO,
  SUPABASE_URL,
} from "./config";

/**
 * Cliente Supabase para Server Components, Server Actions e Route Handlers.
 * Devolve null quando o projeto ainda não foi configurado — quem chama decide
 * o que mostrar no lugar.
 *
 * O `try/catch` no setAll não é preguiça: Server Components não podem escrever
 * cookies, e é esperado que a chamada falhe ali. Quando isso acontece, quem
 * renova a sessão é o proxy — por isso ele existe.
 */
export async function criaClienteServidor() {
  if (!SUPABASE_CONFIGURADO) return null;

  const jar = await cookies();

  return createServerClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    cookies: {
      getAll() {
        return jar.getAll();
      },
      setAll(cookiesParaGravar) {
        try {
          for (const { name, value, options } of cookiesParaGravar) {
            jar.set(name, value, options);
          }
        } catch {
          // Server Component: sem permissão de escrita. O proxy cobre.
        }
      },
    },
  });
}

/** Devolve o usuário logado, ou null. */
export async function usuarioAtual() {
  const supabase = await criaClienteServidor();
  if (!supabase) return null;
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
}
