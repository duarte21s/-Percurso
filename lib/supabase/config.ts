export const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
export const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

/**
 * O projeto roda sem Supabase configurado — a landing continua de pé com o
 * conteúdo estático, e só as partes que dependem de banco (números reais,
 * amostra de questões, login, simulado salvo) ficam indisponíveis.
 *
 * Isso existe para que clonar o repositório e rodar `npm run dev` mostre algo
 * em vez de uma tela de erro.
 */
export const SUPABASE_CONFIGURADO =
  SUPABASE_URL.length > 0 && SUPABASE_ANON_KEY.length > 0;
