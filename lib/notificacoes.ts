import type { SupabaseClient } from "@supabase/supabase-js";
import { estadoChama, type EstadoChama } from "@/lib/gamificacao";

/* =========================================================================
   Notificações.

   O projeto não tem cron. O lembrete da chama é gerado na leitura: quando a
   pessoa abre /comunidade ou /app no fim do dia sem ter estudado, cria-se
   uma notificação — uma por dia, no máximo. O sino que lista tudo é Fase F;
   aqui nasce só a infra e o lembrete da chama.
   ========================================================================= */

/** Data de hoje no fuso de São Paulo, como "YYYY-MM-DD". */
function diaSaoPaulo(): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Sao_Paulo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}

/**
 * Cria o lembrete da chama se fizer sentido. Chamada nas páginas server que a
 * pessoa costuma abrir. Silenciosa e barata: no máximo duas queries e só
 * escreve uma vez por dia.
 */
export async function checaLembreteChama(
  supabase: SupabaseClient,
  uid: string,
  chamaPreCalculada?: EstadoChama
): Promise<void> {
  try {
    // Preferência: se a pessoa desligou o lembrete da chama, não faz nada.
    const { data: prefs } = await supabase
      .from("notificacao_prefs")
      .select("chama")
      .eq("usuario_id", uid)
      .maybeSingle();
    if (prefs && prefs.chama === false) return;

    const chama = chamaPreCalculada ?? (await estadoChama(supabase, uid));
    if (chama.estudou_hoje) return;
    if (chama.hora_sp < 18) return;
    if (chama.estado === "apagada") return; // já foi; não adianta cobrar
    if (chama.atual < 1) return; // não há sequência para proteger

    // Dedupe por dia via índice único (notificacoes_dedupe): uma só por dia,
    // sem check-then-act. 23505 = já existe hoje → nada a fazer.
    const urgente = chama.estado === "quase_apagando";
    const { error } = await supabase.from("notificacoes").insert({
      usuario_id: uid,
      tipo: "chama_risco",
      titulo: urgente
        ? `Restam poucas horas para manter sua sequência de ${chama.atual} dias`
        : "Sua Chama de Estudos ainda precisa ser alimentada hoje",
      corpo:
        "Responda pelo menos uma questão para manter a sequência. Leva cinco minutos.",
      link: "/app/questoes",
      dia_ref: diaSaoPaulo(),
    });
    if (error && error.code !== "23505") throw error;
  } catch {
    /* notificação é acessório; não propaga */
  }
}

/* O sino que lista as notificações (e o tipo `Notificacao`, já reservado em
   lib/tipos.ts) é da Fase F. Aqui fica só a criação lazy do lembrete da
   chama — a infra da tabela nasce na Fase A, a leitura vem depois. */
