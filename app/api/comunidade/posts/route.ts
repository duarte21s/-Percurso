import { NextResponse } from "next/server";
import type { SupabaseClient } from "@supabase/supabase-js";
import { exigeSessaoApi } from "@/lib/sessao";
import {
  checaLimite,
  validaCodigo,
  validaLink,
  validaTags,
  validaTexto,
  validaTitulo,
} from "@/lib/comunidade";
import type { TipoPost } from "@/lib/tipos";

export const dynamic = "force-dynamic";

const TIPOS: TipoPost[] = ["pergunta", "discussao", "compartilhamento", "dica"];

/** Garante que o perfil já escolheu um username. Sem ele, não publica. */
async function temUsername(supabase: SupabaseClient, uid: string): Promise<boolean> {
  const { data } = await supabase
    .from("perfis")
    .select("username")
    .eq("id", uid)
    .maybeSingle();
  return Boolean(data?.username);
}

/** POST — publica um post. */
export async function POST(request: Request) {
  const sessao = await exigeSessaoApi();
  if (!sessao.ok) {
    return NextResponse.json(
      { erro: sessao.erro, expirado: sessao.expirado },
      { status: sessao.status }
    );
  }
  const { supabase, user } = sessao;

  if (!(await temUsername(supabase, user.id))) {
    return NextResponse.json(
      { erro: "Escolha um nome de usuário antes de publicar.", precisaUsername: true },
      { status: 409 }
    );
  }

  const corpo = await request.json().catch(() => null);
  const tipo: TipoPost = TIPOS.includes(corpo?.tipo) ? corpo.tipo : "discussao";

  const texto = validaTexto(corpo?.texto, 5000, "texto");
  if (!texto.ok) return NextResponse.json({ erro: texto.erro }, { status: 400 });

  const titulo = validaTitulo(corpo?.titulo);
  if (!titulo.ok) return NextResponse.json({ erro: titulo.erro }, { status: 400 });

  const codigo = validaCodigo(corpo?.codigo);
  if (!codigo.ok) return NextResponse.json({ erro: codigo.erro }, { status: 400 });

  const link = validaLink(corpo?.link);
  if (!link.ok) return NextResponse.json({ erro: link.erro }, { status: 400 });

  const tags = validaTags(corpo?.tags);

  let questaoId: string | null = null;
  if (typeof corpo?.questaoId === "string" && /^[0-9a-f-]{36}$/i.test(corpo.questaoId)) {
    const { data: q } = await supabase
      .from("questoes")
      .select("id")
      .eq("id", corpo.questaoId)
      .maybeSingle();
    if (!q) return NextResponse.json({ erro: "Questão não encontrada." }, { status: 404 });
    questaoId = corpo.questaoId;
  }

  const limite = await checaLimite(supabase, "publicar");
  if (!limite.ok) return NextResponse.json({ erro: limite.erro }, { status: 429 });

  const { data, error } = await supabase
    .from("com_posts")
    .insert({
      autor_id: user.id,
      tipo,
      titulo: titulo.valor,
      texto: texto.valor,
      tags,
      codigo: codigo.valor,
      link: link.valor,
      questao_id: questaoId,
    })
    .select("id")
    .single();

  if (error) {
    // Os triggers do banco (limite diário, pode_publicar) sobem como erro.
    return NextResponse.json(
      { erro: "Não consegui publicar agora. Tente de novo em instantes." },
      { status: 400 }
    );
  }

  return NextResponse.json({ ok: true, id: data.id });
}

/** PATCH — edita o próprio post (texto e título). */
export async function PATCH(request: Request) {
  const sessao = await exigeSessaoApi();
  if (!sessao.ok) {
    return NextResponse.json({ erro: sessao.erro }, { status: sessao.status });
  }
  const { supabase, user } = sessao;

  const corpo = await request.json().catch(() => null);
  const id: string | undefined = corpo?.id;
  if (!id) return NextResponse.json({ erro: "Post não informado." }, { status: 400 });

  const texto = validaTexto(corpo?.texto, 5000, "texto");
  if (!texto.ok) return NextResponse.json({ erro: texto.erro }, { status: 400 });
  const titulo = validaTitulo(corpo?.titulo);
  if (!titulo.ok) return NextResponse.json({ erro: titulo.erro }, { status: 400 });

  // O RLS restringe a autor_id = auth.uid(); o filtro aqui é redundante e
  // deixa a intenção explícita.
  const { error, count } = await supabase
    .from("com_posts")
    .update(
      { texto: texto.valor, titulo: titulo.valor, editado_em: new Date().toISOString() },
      { count: "exact" }
    )
    .eq("id", id)
    .eq("autor_id", user.id);

  if (error) return NextResponse.json({ erro: error.message }, { status: 400 });
  if (!count) return NextResponse.json({ erro: "Post não encontrado." }, { status: 404 });
  return NextResponse.json({ ok: true });
}

/** DELETE — apaga o próprio post. */
export async function DELETE(request: Request) {
  const sessao = await exigeSessaoApi();
  if (!sessao.ok) {
    return NextResponse.json({ erro: sessao.erro }, { status: sessao.status });
  }
  const { supabase, user } = sessao;

  const url = new URL(request.url);
  const id = url.searchParams.get("id");
  if (!id) return NextResponse.json({ erro: "Post não informado." }, { status: 400 });

  const { error, count } = await supabase
    .from("com_posts")
    .delete({ count: "exact" })
    .eq("id", id)
    .eq("autor_id", user.id);

  if (error) return NextResponse.json({ erro: error.message }, { status: 400 });
  if (!count) return NextResponse.json({ erro: "Post não encontrado." }, { status: 404 });
  return NextResponse.json({ ok: true });
}
