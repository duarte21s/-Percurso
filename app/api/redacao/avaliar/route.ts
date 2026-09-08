import { NextResponse } from "next/server";
import { exigeSessaoApi } from "@/lib/sessao";
import { ErroGeracao } from "@/lib/anthropic";
import { corrigeRedacao, mensagemParaAluno } from "@/lib/ia";
import { registrarAtividade } from "@/lib/gamificacao";

export const dynamic = "force-dynamic";
// Transcrever uma folha manuscrita e justificar cinco competências demora.
export const maxDuration = 300;

const TIPOS_ACEITOS = ["image/jpeg", "image/png", "image/webp"];
const TAMANHO_MAXIMO = 8 * 1024 * 1024;

/**
 * POST /api/redacao/avaliar — corrige uma redação e devolve as cinco notas.
 *
 * Aceita multipart/form-data:
 *   temaId    obrigatório
 *   texto     quando digitada
 *   foto      quando manuscrita (jpeg, png ou webp, até 8 MB)
 *   simuladoId  opcional, para amarrar à prova em que foi escrita
 *
 * A foto é gravada num bucket privado, em pasta com o id de quem enviou. As
 * políticas de storage garantem que ninguém alcança a pasta de outra pessoa —
 * é a letra e o texto dela.
 */
export async function POST(request: Request) {
  const sessao = await exigeSessaoApi();
  if (!sessao.ok) {
    return NextResponse.json(
      { erro: sessao.erro, expirado: sessao.expirado },
      { status: sessao.status }
    );
  }
  const { supabase, user } = sessao;

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return NextResponse.json({ erro: "Envio inválido." }, { status: 400 });
  }

  const temaId = String(form.get("temaId") ?? "");
  const texto = String(form.get("texto") ?? "").trim();
  const simuladoId = String(form.get("simuladoId") ?? "") || null;
  const foto = form.get("foto");

  if (!temaId) {
    return NextResponse.json({ erro: "Tema não informado." }, { status: 400 });
  }

  const { data: tema } = await supabase
    .from("temas_redacao")
    .select("id, ano, tema")
    .eq("id", temaId)
    .maybeSingle();

  if (!tema) {
    return NextResponse.json({ erro: "Tema não encontrado." }, { status: 404 });
  }

  const ehFoto = foto instanceof File && foto.size > 0;

  if (!ehFoto && texto.length < 200) {
    return NextResponse.json(
      {
        erro:
          "O texto está curto demais para corrigir. Uma redação do ENEM tem entre 7 e 30 linhas.",
      },
      { status: 400 }
    );
  }

  let imagemBase64: string | undefined;
  let imagemTipo: string | undefined;
  let imagemPath = "";

  if (ehFoto) {
    const arquivo = foto as File;

    if (!TIPOS_ACEITOS.includes(arquivo.type)) {
      return NextResponse.json(
        { erro: "Mande a foto em JPG, PNG ou WEBP." },
        { status: 400 }
      );
    }
    if (arquivo.size > TAMANHO_MAXIMO) {
      return NextResponse.json(
        { erro: "A foto passou de 8 MB. Tire com resolução menor." },
        { status: 400 }
      );
    }

    const bytes = Buffer.from(await arquivo.arrayBuffer());
    imagemBase64 = bytes.toString("base64");
    imagemTipo = arquivo.type;

    /* A pasta é o id de quem enviou: é isso que a política de storage confere.
       O nome usa o carimbo do servidor, não o do arquivo original, que pode
       vir com qualquer coisa dentro. */
    const extensao = arquivo.type.split("/")[1] ?? "jpg";
    imagemPath = `${user.id}/${Date.now()}-${temaId}.${extensao}`;

    const { error: erroUpload } = await supabase.storage
      .from("redacoes")
      .upload(imagemPath, bytes, { contentType: arquivo.type, upsert: false });

    if (erroUpload) {
      /* Guardar a foto é desejável, corrigir é o que a pessoa pediu. Se o
         upload falhar, segue a correção e a foto simplesmente não fica. */
      imagemPath = "";
    }
  }

  let corrigida;
  try {
    corrigida = await corrigeRedacao({
      tema: tema.tema as string,
      ano: tema.ano as number,
      texto: ehFoto ? undefined : texto,
      imagemBase64,
      imagemTipo,
    });
  } catch (e) {
    console.error("[avaliar redação] falha de geração:", e);
    const status = e instanceof ErroGeracao ? e.status : 502;
    return NextResponse.json(
      { erro: mensagemParaAluno(e, "correções") },
      { status }
    );
  }
  const { nota, provedor } = corrigida;

  const { data: gravada, error } = await supabase
    .from("redacoes")
    .insert({
      usuario_id: user.id,
      tema_id: temaId,
      simulado_id: simuladoId,
      modo: ehFoto ? "foto" : "digitada",
      texto: ehFoto ? "" : texto,
      imagem_path: imagemPath,
      transcricao: nota.transcricao,
      c1: nota.c1,
      c2: nota.c2,
      c3: nota.c3,
      c4: nota.c4,
      c5: nota.c5,
      total: nota.total,
      comentarios: nota.comentarios,
      parecer: nota.parecer,
      status: "avaliada",
      avaliado_em: new Date().toISOString(),
    })
    .select("id")
    .single();

  if (error) {
    // A correção existe; não gravá-la não é motivo para escondê-la.
    return NextResponse.json({
      ...nota,
      id: null,
      avisoGravacao: error.message,
      provedor,
    });
  }

  // Corrigir redação alimenta a Chama de Estudos.
  const recompensa = await registrarAtividade(supabase, "redacao");

  return NextResponse.json({ ...nota, id: gravada.id, provedor, recompensa });
}
