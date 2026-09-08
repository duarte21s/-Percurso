import { NextResponse } from "next/server";
import { exigeSessaoApi } from "@/lib/sessao";

export const dynamic = "force-dynamic";

const TIPOS: Record<string, string> = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
};
const MAX = 2 * 1024 * 1024; // 2 MB

/** POST multipart (campo `foto`) — troca a foto de perfil. */
export async function POST(request: Request) {
  const sessao = await exigeSessaoApi();
  if (!sessao.ok) {
    return NextResponse.json({ erro: sessao.erro }, { status: sessao.status });
  }
  const { supabase, user } = sessao;

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return NextResponse.json({ erro: "Envio inválido." }, { status: 400 });
  }

  const foto = form.get("foto");
  if (!(foto instanceof File) || foto.size === 0) {
    return NextResponse.json({ erro: "Escolha uma imagem." }, { status: 400 });
  }
  const ext = TIPOS[foto.type];
  if (!ext) {
    return NextResponse.json({ erro: "Use JPG, PNG ou WEBP." }, { status: 400 });
  }
  if (foto.size > MAX) {
    return NextResponse.json(
      { erro: "A imagem passou de 2 MB. Envie uma menor." },
      { status: 400 }
    );
  }

  // caminho anterior, para apagar depois de subir o novo
  const { data: perfil } = await supabase
    .from("perfis")
    .select("avatar_path")
    .eq("id", user.id)
    .maybeSingle();

  const caminho = `${user.id}/${Date.now()}.${ext}`;
  const bytes = Buffer.from(await foto.arrayBuffer());

  const { error: erroUp } = await supabase.storage
    .from("avatares")
    .upload(caminho, bytes, { contentType: foto.type, upsert: false });
  if (erroUp) {
    return NextResponse.json(
      { erro: "Não consegui enviar a imagem agora." },
      { status: 502 }
    );
  }

  const { error: erroSet } = await supabase.rpc("definir_avatar", { p_path: caminho });
  if (erroSet) {
    await supabase.storage.from("avatares").remove([caminho]);
    return NextResponse.json({ erro: erroSet.message }, { status: 400 });
  }

  const anterior = perfil?.avatar_path;
  if (anterior && anterior !== caminho) {
    await supabase.storage.from("avatares").remove([anterior]);
  }

  return NextResponse.json({ ok: true, path: caminho });
}

/** DELETE — remove a foto, volta pro avatar de iniciais. */
export async function DELETE() {
  const sessao = await exigeSessaoApi();
  if (!sessao.ok) {
    return NextResponse.json({ erro: sessao.erro }, { status: sessao.status });
  }
  const { supabase, user } = sessao;

  const { data: perfil } = await supabase
    .from("perfis")
    .select("avatar_path")
    .eq("id", user.id)
    .maybeSingle();

  await supabase.rpc("definir_avatar", { p_path: null });
  if (perfil?.avatar_path) {
    await supabase.storage.from("avatares").remove([perfil.avatar_path]);
  }
  return NextResponse.json({ ok: true });
}
