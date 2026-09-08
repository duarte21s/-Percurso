import type { SupabaseClient } from "@supabase/supabase-js";
import { montarAutor } from "@/lib/conteudo/comunidade";
import type { AbaComunidade, Autor, Comentario, Post } from "@/lib/tipos";

// Reexporta os puros para quem já importava daqui (rotas, páginas).
export { iniciaisDe, matizDe } from "@/lib/conteudo/comunidade";

/* =========================================================================
   Comunidade — acesso ao banco (só servidor).

   As rotas em app/api/comunidade/* e a página chamam daqui. Os componentes
   client nunca importam este arquivo: eles recebem `Post[]` já montado e
   falam com as rotas por fetch.

   Ver supabase/comunidade.sql para o esquema e o RLS. As travas de segurança
   moram lá; aqui é montagem de dados e validação amigável de entrada.
   ========================================================================= */

/* ---------- helpers de exibição ---------- */

interface PerfilRow {
  id: string;
  nome: string | null;
  username: string | null;
  verificado: boolean | null;
  avatar_path: string | null;
}

type PerfisMap = Map<string, PerfilRow>;

/** Monta o `Autor` de uma linha do feed. Usa o construtor único
 *  (`montarAutor` em lib/conteudo/comunidade) para não divergir das páginas. */
function montaAutor(id: string, perfis: PerfisMap): Autor {
  return montarAutor(perfis.get(id) ?? null, { id });
}

/* O RLS de `perfis` é "cada um lê o seu" — não dá para embutir o autor de um
   post alheio. `vw_perfil_publico` expõe só os campos públicos e roda sem RLS.
   Uma consulta cobre todos os autores do lote. */
async function buscarPerfis(
  supabase: SupabaseClient,
  ids: string[]
): Promise<PerfisMap> {
  const mapa: PerfisMap = new Map();
  const unicos = [...new Set(ids.filter(Boolean))];
  if (unicos.length === 0) return mapa;
  const { data } = await supabase
    .from("vw_perfil_publico")
    .select("id, nome, username, verificado, avatar_path")
    .in("id", unicos);
  for (const p of data ?? []) mapa.set(p.id as string, p as PerfilRow);
  return mapa;
}

/* ---------- validação de entrada (mensagens amigáveis) ---------- */

const RESERVADOS = new Set([
  "admin",
  "administrador",
  "suporte",
  "moderador",
  "moderacao",
  "equipe",
  "oficial",
  "staff",
  "percurso",
  "sistema",
  "root",
  "null",
]);

export function validaUsername(bruto: unknown): { ok: true; valor: string } | { ok: false; erro: string } {
  const s = String(bruto ?? "").trim().toLowerCase();
  if (!/^[a-z0-9_.]{3,20}$/.test(s)) {
    return {
      ok: false,
      erro: "O nome de usuário usa de 3 a 20 caracteres, só letras, números, ponto e sublinhado.",
    };
  }
  if (RESERVADOS.has(s) || s.startsWith("percurso")) {
    return { ok: false, erro: "Esse nome de usuário não está disponível." };
  }
  return { ok: true, valor: s };
}

export function validaTexto(
  bruto: unknown,
  max: number,
  oQue = "texto"
): { ok: true; valor: string } | { ok: false; erro: string } {
  const s = String(bruto ?? "").trim();
  if (s.length === 0) return { ok: false, erro: `Escreva o ${oQue}.` };
  if (s.length > max) {
    return { ok: false, erro: `O ${oQue} passou de ${max} caracteres. Encurte um pouco.` };
  }
  return { ok: true, valor: s };
}

export function validaTitulo(bruto: unknown): { ok: true; valor: string | null } | { ok: false; erro: string } {
  const s = String(bruto ?? "").trim();
  if (s.length === 0) return { ok: true, valor: null };
  if (s.length > 160) return { ok: false, erro: "O título passou de 160 caracteres." };
  return { ok: true, valor: s };
}

/** Link é só metadado digitado por quem posta. A URL nunca é acessada pelo
 *  servidor (sem unfurl, sem preview — evita SSRF). */
export function validaLink(bruto: unknown):
  | { ok: true; valor: { url: string; titulo: string; dominio: string } | null }
  | { ok: false; erro: string } {
  if (bruto == null || bruto === "") return { ok: true, valor: null };
  const o = bruto as Record<string, unknown>;
  const url = String(o.url ?? "").trim();
  if (!/^https?:\/\/[^\s]+$/i.test(url) || url.length > 500) {
    return { ok: false, erro: "O link precisa começar com http:// ou https://." };
  }
  let dominio = String(o.dominio ?? "").trim();
  if (!dominio) {
    try {
      dominio = new URL(url).hostname.replace(/^www\./, "");
    } catch {
      dominio = "";
    }
  }
  return {
    ok: true,
    valor: {
      url,
      titulo: String(o.titulo ?? "").trim().slice(0, 200),
      dominio: dominio.slice(0, 100),
    },
  };
}

export function validaCodigo(bruto: unknown):
  | { ok: true; valor: { linguagem: string; conteudo: string } | null }
  | { ok: false; erro: string } {
  if (bruto == null || bruto === "") return { ok: true, valor: null };
  const o = bruto as Record<string, unknown>;
  const conteudo = String(o.conteudo ?? "");
  if (conteudo.trim().length === 0) return { ok: true, valor: null };
  if (conteudo.length > 4000) {
    return { ok: false, erro: "O bloco de código passou de 4000 caracteres." };
  }
  return {
    ok: true,
    valor: {
      linguagem: String(o.linguagem ?? "texto").trim().slice(0, 30) || "texto",
      conteudo,
    },
  };
}

export function validaTags(bruto: unknown): string[] {
  if (!Array.isArray(bruto)) return [];
  return [
    ...new Set(
      bruto
        .map((t) => String(t).trim().toLowerCase())
        .filter((t) => /^[a-z0-9á-ú][a-z0-9á-ú \-]{0,24}$/i.test(t))
    ),
  ].slice(0, 5);
}

/* ---------- rate limit (provisório — ver com_uso em comunidade.sql) ---------- */

const TETO: Record<string, number> = {
  publicar: 10,
  comentar: 60,
  reagir: 300,
  salvar: 300,
  denunciar: 20,
};

/** Incrementa a contagem do dia via RPC atômico e diz se ainda está no teto. */
export async function checaLimite(
  supabase: SupabaseClient,
  acao: keyof typeof TETO
): Promise<{ ok: boolean; erro?: string }> {
  const { data, error } = await supabase.rpc("com_usar", { p_acao: acao });
  if (error) {
    // Falha no contador não deve travar a ação — o teto do banco (trigger)
    // ainda protege contra abuso.
    return { ok: true };
  }
  if (typeof data === "number" && data > TETO[acao]) {
    return {
      ok: false,
      erro: "Você atingiu o limite de hoje para essa ação. Volte amanhã.",
    };
  }
  return { ok: true };
}

/* ---------- montagem do feed ---------- */

const SEL_POST = `
  id, tipo, titulo, texto, tags, codigo, link, questao_id, resolvido, criado_em, editado_em, autor_id,
  comentarios:com_comentarios (
    id, pai_id, texto, aceito, criado_em, editado_em, autor_id
  )
`;

interface ComentarioRow {
  id: string;
  pai_id: string | null;
  texto: string;
  aceito: boolean;
  criado_em: string;
  editado_em: string | null;
  autor_id: string;
}

/** Um post salvo, com a data em que a pessoa salvou (para ordenar a aba). */
interface SalvoRow {
  post_id: string;
  criado_em: string;
}

interface PostRow {
  id: string;
  tipo: Post["tipo"];
  titulo: string | null;
  texto: string;
  tags: string[] | null;
  codigo: Post["codigo"] | null;
  link: Post["link"] | null;
  questao_id: string | null;
  resolvido: boolean;
  criado_em: string;
  editado_em: string | null;
  autor_id: string;
  comentarios: ComentarioRow[] | null;
}

/** curtidas por alvo + o que ESTE usuário curtiu/salvou, para um lote de ids. */
async function contexto(
  supabase: SupabaseClient,
  postIds: string[],
  comentarioIds: string[],
  uid: string | null
) {
  const ids = [...postIds, ...comentarioIds];
  const curtidas = new Map<string, number>();
  const curtiMeu = new Set<string>();
  const salvei = new Set<string>();
  if (ids.length === 0) return { curtidas, curtiMeu, salvei };

  const { data: cont } = await supabase
    .from("vw_com_contagens")
    .select("alvo_id, curtidas")
    .in("alvo_id", ids);
  for (const r of cont ?? []) curtidas.set(r.alvo_id as string, r.curtidas as number);

  if (uid) {
    const [{ data: reacoes }, { data: salvos }] = await Promise.all([
      supabase.from("com_reacoes").select("alvo_id").eq("usuario_id", uid).in("alvo_id", ids),
      postIds.length
        ? supabase.from("com_salvos").select("post_id").eq("usuario_id", uid).in("post_id", postIds)
        : Promise.resolve({ data: [] as { post_id: string }[] }),
    ]);
    for (const r of reacoes ?? []) curtiMeu.add(r.alvo_id as string);
    for (const r of salvos ?? []) salvei.add(r.post_id as string);
  }

  return { curtidas, curtiMeu, salvei };
}

function montaComentarios(
  rows: ComentarioRow[],
  ctx: { curtidas: Map<string, number>; curtiMeu: Set<string> },
  perfis: PerfisMap
): Comentario[] {
  const base = (r: ComentarioRow): Comentario => ({
    id: r.id,
    autor: montaAutor(r.autor_id, perfis),
    texto: r.texto,
    criadoEm: r.criado_em,
    curtidas: ctx.curtidas.get(r.id) ?? 0,
    curtidoPorMim: ctx.curtiMeu.has(r.id),
    aceito: Boolean(r.aceito),
    respostas: [],
  });

  const porId = new Map<string, Comentario>();
  const raizes: Comentario[] = [];
  const ordenado = [...rows].sort((a, b) => a.criado_em.localeCompare(b.criado_em));

  for (const r of ordenado) {
    const c = base(r);
    porId.set(r.id, c);
    if (!r.pai_id) raizes.push(c);
  }
  for (const r of ordenado) {
    if (r.pai_id && porId.has(r.pai_id)) {
      porId.get(r.pai_id)!.respostas.push(porId.get(r.id)!);
    }
  }
  return raizes;
}

function montaPost(
  row: PostRow,
  ctx: { curtidas: Map<string, number>; curtiMeu: Set<string>; salvei: Set<string> },
  perfis: PerfisMap
): Post {
  return {
    id: row.id,
    autor: montaAutor(row.autor_id, perfis),
    tipo: row.tipo,
    titulo: row.titulo ?? undefined,
    texto: row.texto,
    tags: Array.isArray(row.tags) ? row.tags : [],
    codigo: row.codigo ?? undefined,
    link: row.link ?? undefined,
    questaoId: row.questao_id ?? undefined,
    criadoEm: row.criado_em,
    curtidas: ctx.curtidas.get(row.id) ?? 0,
    curtidoPorMim: ctx.curtiMeu.has(row.id),
    salvoPorMim: ctx.salvei.has(row.id),
    comentarios: montaComentarios(row.comentarios ?? [], ctx, perfis),
    resolvido: row.resolvido || undefined,
  };
}

/** Todos os autor_id de um lote de posts, incluindo os dos comentários. */
function autoresDe(rows: PostRow[]): string[] {
  return [
    ...rows.map((r) => r.autor_id),
    ...rows.flatMap((r) => (r.comentarios ?? []).map((c) => c.autor_id)),
  ];
}

const LIMITE_FEED = 40;

/** Feed: "recentes"/"populares"/"perguntas" mostram o mural geral (sem
 *  `questao_id`); "minhas" é o que a pessoa publicou; "salvos" é o que ela
 *  guardou (aí sim inclui dúvida ancorada em questão). */
export async function buscarFeed(
  supabase: SupabaseClient,
  opcoes: { aba: AbaComunidade; tag?: string | null; uid: string | null }
): Promise<Post[]> {
  const { aba, tag, uid } = opcoes;

  if ((aba === "minhas" || aba === "salvos") && !uid) return [];

  // "Salvos" parte da lista de ids em com_salvos, na ordem em que foram salvos.
  let idsSalvos: string[] = [];
  if (aba === "salvos") {
    const { data: salvos } = await supabase
      .from("com_salvos")
      .select("post_id, criado_em")
      .eq("usuario_id", uid as string)
      .order("criado_em", { ascending: false })
      .limit(LIMITE_FEED);
    idsSalvos = ((salvos as SalvoRow[] | null) ?? []).map((s) => s.post_id);
    if (idsSalvos.length === 0) return [];
  }

  let q = supabase.from("com_posts").select(SEL_POST).eq("oculto", false);

  if (aba === "salvos") {
    q = q.in("id", idsSalvos);
  } else {
    q = q.is("questao_id", null);
    if (aba === "perguntas") q = q.eq("tipo", "pergunta");
    if (aba === "minhas") q = q.eq("autor_id", uid as string);
  }
  if (tag) q = q.contains("tags", [tag]);

  // Popular ordena depois, por curtidas; as outras já saem ordenadas do banco.
  q = q.order("criado_em", { ascending: false }).limit(aba === "populares" ? 80 : LIMITE_FEED);

  const { data, error } = await q;
  if (error || !data) return [];

  const rows = data as unknown as PostRow[];
  const postIds = rows.map((r) => r.id);
  const comentarioIds = rows.flatMap((r) => (r.comentarios ?? []).map((c) => c.id));
  const [ctx, perfis] = await Promise.all([
    contexto(supabase, postIds, comentarioIds, uid),
    buscarPerfis(supabase, autoresDe(rows)),
  ]);

  let posts = rows.map((r) => montaPost(r, ctx, perfis));
  if (aba === "populares") {
    posts = posts
      .sort((a, b) => b.curtidas - a.curtidas || b.criadoEm.localeCompare(a.criadoEm))
      .slice(0, LIMITE_FEED);
  }
  if (aba === "salvos") {
    const ordem = new Map(idsSalvos.map((id, i) => [id, i]));
    posts = posts.sort(
      (a, b) => (ordem.get(a.id) ?? 99) - (ordem.get(b.id) ?? 99)
    );
  }
  return posts;
}

/** Dúvidas ancoradas numa questão. Fio: mais antigo primeiro. */
export async function buscarDiscussaoQuestao(
  supabase: SupabaseClient,
  questaoId: string,
  uid: string | null
): Promise<Post[]> {
  const { data, error } = await supabase
    .from("com_posts")
    .select(SEL_POST)
    .eq("questao_id", questaoId)
    .eq("oculto", false)
    .order("criado_em", { ascending: true })
    .limit(50);

  if (error || !data) return [];
  const rows = data as unknown as PostRow[];
  const [ctx, perfis] = await Promise.all([
    contexto(
      supabase,
      rows.map((r) => r.id),
      rows.flatMap((r) => (r.comentarios ?? []).map((c) => c.id)),
      uid
    ),
    buscarPerfis(supabase, autoresDe(rows)),
  ]);
  return rows.map((r) => montaPost(r, ctx, perfis));
}
