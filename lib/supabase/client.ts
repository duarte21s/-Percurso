import { createBrowserClient } from "@supabase/ssr";
import {
  SUPABASE_ANON_KEY,
  SUPABASE_CONFIGURADO,
  SUPABASE_URL,
} from "./config";

/**
 * Cliente Supabase para componentes que rodam no browser.
 * Usa a anon key — o que ela pode fazer é exatamente o que as políticas de
 * RLS permitem, então expor no bundle é seguro por construção.
 *
 * Devolve null se o projeto não estiver configurado.
 *
 * Ainda sem uso: a Comunidade fala com o banco pelas rotas (`fetch`). Entra
 * em cena na Fase G (tempo real), quando chat de sala e presença trocam o
 * polling por canais Supabase Realtime — `criaClienteBrowser().channel(...)`.
 */
export function criaClienteBrowser() {
  if (!SUPABASE_CONFIGURADO) return null;
  return createBrowserClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}
