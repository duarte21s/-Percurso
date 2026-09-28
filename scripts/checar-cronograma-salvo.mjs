// Regressão local, sem credenciais nem acesso ao banco real.
//
// O cronograma salvo depende de três travas que moram em lugares diferentes:
// as políticas de RLS e as permissões por coluna (supabase/cronogramas.sql) e
// o app nunca mandar o dono no corpo da gravação (app/app/cronograma/acoes.ts).
// Tirar qualquer uma delas não quebra o build nem a tela — o cronograma
// continua salvando —, então esta checagem existe para a regressão aparecer.
//
// O comportamento das políticas no Postgres é testado pela seção 3 do próprio
// SQL, que roda dentro de uma transação desfeita. Aqui o teste é do texto.
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const raiz = fileURLToPath(new URL("..", import.meta.url));
const ler = (caminho) => readFileSync(raiz + caminho, "utf8");
const semComentarioSql = (s) => s.replace(/--[^\n]*/g, "").replace(/\s+/g, " ");

// Só a migração (seção 1): as seções de teste mexem em permissões de propósito.
const sqlInteiro = ler("supabase/cronogramas.sql");
const migracao = semComentarioSql(
  sqlInteiro.slice(sqlInteiro.indexOf("1. MIGRAÇÃO"), sqlInteiro.indexOf("2. VERIFICAÇÃO"))
);

const dono = "\\(\\(select auth\\.uid\\(\\)\\) = usuario_id\\)";
const exigencias = [
  [/usuario_id uuid not null default auth\.uid\(\)/, "o dono nasce de auth.uid()"],
  [/constraint cronogramas_um_por_usuario unique \(usuario_id\)/, "um cronograma por conta"],
  [/alter table public\.cronogramas enable row level security/, "RLS ligado"],
  [new RegExp(`for select to authenticated using ${dono}`), "SELECT só do próprio"],
  [new RegExp(`for insert to authenticated with check ${dono}`), "INSERT exige usuario_id = auth.uid()"],
  [new RegExp(`for update to authenticated using ${dono} with check ${dono}`), "UPDATE só do próprio, sem trocar o dono"],
  [new RegExp(`for delete to authenticated using ${dono}`), "DELETE só do próprio"],
  [/revoke all on public\.cronogramas from public, anon, authenticated/, "revoke do que o Supabase concede por padrão"],
  [/grant insert \(horas_dia, dias_semana, selecao, plano\) on public\.cronogramas to authenticated/, "INSERT por coluna, sem usuario_id"],
  [/grant update \(horas_dia, dias_semana, selecao, plano\) on public\.cronogramas to authenticated/, "UPDATE por coluna, sem usuario_id"],
  [/raise exception 'O dono do cronograma não pode ser trocado\.'/, "gatilho que barra troca de dono"],
];
for (const [padrao, regra] of exigencias) {
  assert.match(migracao, padrao, `supabase/cronogramas.sql perdeu: ${regra}`);
}
assert.doesNotMatch(
  migracao,
  /grant [^;]* on public\.cronogramas to [^;]*\banon\b/,
  "supabase/cronogramas.sql concede algo a anon: sem login não deveria tocar na tabela"
);
assert.doesNotMatch(
  migracao,
  /grant (insert|update|all)(?! \()[^;]* on public\.cronogramas to [^;]*authenticated/,
  "INSERT/UPDATE para authenticated precisa ser por coluna; na tabela inteira libera usuario_id"
);
console.log("ok: políticas e permissões de public.cronogramas");

// O app grava sem dizer quem é o dono.
const acoes = ler("app/app/cronograma/acoes.ts");
const corpoUpsert = acoes.match(/\.upsert\(\s*\{([\s\S]*?)\}\s*,/);
assert.ok(corpoUpsert, "app/app/cronograma/acoes.ts não grava com upsert: salvar de novo criaria duplicado");
assert.doesNotMatch(
  corpoUpsert[1],
  /usuario_id/,
  "o corpo do upsert manda usuario_id: o dono tem de vir de auth.uid() no banco"
);
assert.match(acoes, /onConflict: "usuario_id"/, "o upsert precisa resolver o conflito pelo dono");
assert.match(acoes, /auth\.getUser\(\)/, "as ações precisam conferir a sessão no servidor");
console.log("ok: o app grava sem mandar o dono e atualiza em vez de duplicar");

// A tela não monta o plano nem conhece o dono.
const tela = ler("components/secoes/Cronograma.tsx");
assert.doesNotMatch(tela, /geraCronograma/, "a tela voltou a gerar o plano: quem gera é o servidor, ao salvar");
assert.doesNotMatch(tela, /usuario_id|user\.id/, "a tela não deveria conhecer o dono do cronograma");
console.log("ok: a tela só manda horas, dias e matérias");
