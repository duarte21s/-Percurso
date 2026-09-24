// Regressão local, sem credenciais nem alterações no banco real.
//
// O caminho do link de recuperação de senha até o formulário: a leitura da
// URL (lib/auth/recuperacao.ts), o /auth/callback e o desvio da home no
// proxy — que é o que resgata o link quando o Supabase manda para o Site URL.
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { runInNewContext } from "node:vm";
import ts from "typescript";

const require = createRequire(import.meta.url);
function carregar(arquivo, dependencias) {
  const codigo = ts.transpileModule(
    readFileSync(new URL(`../${arquivo}`, import.meta.url), "utf8"),
    { compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX } }
  ).outputText;
  const exports = {};
  runInNewContext(codigo, {
    exports, console, process, Buffer, crypto: globalThis.crypto,
    URL, URLSearchParams, Headers,
    require: (nome) => dependencias[nome] ?? require(nome),
  });
  return exports;
}

const recuperacao = carregar("lib/auth/recuperacao.ts", {});
const destinoSeguro = carregar("lib/destino-seguro.ts", {});
const { lerLinkDeRecuperacao, motivoDoErro, TELA_DO_MOTIVO } = recuperacao;

/* ----------------------------- leitura do link ----------------------------- */
{
  const ler = (sufixo) => lerLinkDeRecuperacao(`https://site.test/nova-senha${sufixo}`);

  assert.equal(ler("?code=abc").tipo, "codigo");
  assert.equal(ler("?code=abc").codigo, "abc");

  const implicito = ler("#access_token=a&refresh_token=r&expires_in=3600&type=recovery");
  assert.equal(implicito.tipo, "implicito");
  assert.equal(implicito.accessToken, "a");
  assert.equal(implicito.refreshToken, "r");
  assert.equal(
    ler("#access_token=a&refresh_token=r&type=magiclink").tipo,
    "nada",
    "token no fragmento só vale se o link for de recuperação"
  );

  assert.equal(ler("?token_hash=h&type=recovery").tipo, "token_hash");
  assert.equal(ler("?token_hash=h&type=signup").tipo, "nada");

  const vencido = ler(
    "#error=access_denied&error_code=otp_expired&error_description=Email+link+is+invalid+or+has+expired"
  );
  assert.equal(vencido.tipo, "erro");
  assert.equal(motivoDoErro(vencido.detalhe), "vencido");
  assert.equal(ler("?error=access_denied&code=abc").tipo, "erro", "o erro vence o código que vier junto");

  assert.equal(ler("").tipo, "nada");
}
console.log("ok: a leitura reconhece código, token no fragmento, token_hash e erro");

{
  assert.equal(
    motivoDoErro("PKCE code verifier not found in storage. This can happen if the auth flow was initiated in a different browser or device"),
    "outro_navegador"
  );
  assert.equal(motivoDoErro("invalid flow state, no valid flow state found"), "vencido");
  assert.equal(
    motivoDoErro("code challenge does not match previously saved code verifier"),
    "vencido",
    "clicar num link anterior ao último não é culpa do navegador"
  );
  assert.equal(motivoDoErro("Email link is invalid or has expired"), "vencido");
  assert.equal(motivoDoErro("sem_supabase"), "falhou");
  for (const motivo of ["vencido", "outro_navegador", "sem_link", "falhou"]) {
    assert.ok(TELA_DO_MOTIVO[motivo]?.titulo && TELA_DO_MOTIVO[motivo]?.texto, `tela para ${motivo}`);
  }
}
console.log("ok: cada falha do link vira um motivo com título e texto próprios");

/* -------------------------------- callback --------------------------------- */
function callback({ troca, verifica } = {}) {
  const chamadas = [];
  const supabase = {
    auth: {
      exchangeCodeForSession: async (codigo) => {
        chamadas.push(`troca:${codigo}`);
        return troca ?? { data: { session: {}, user: {}, redirectType: null }, error: null };
      },
      verifyOtp: async (p) => {
        chamadas.push(`verifica:${p.type}:${p.token_hash}`);
        return verifica ?? { data: {}, error: null };
      },
    },
  };
  const { GET } = carregar("app/auth/callback/route.ts", {
    "next/server": { NextResponse: { redirect: (u) => ({ location: String(u) }) } },
    "@/lib/supabase/server": { criaClienteServidor: async () => supabase },
    "@/lib/supabase/origem": { origemDoSite: async () => "https://site.test" },
    "@/lib/destino-seguro": destinoSeguro,
  });
  const ir = async (caminho) => (await GET({ url: `https://site.test${caminho}` })).location;
  return { ir, chamadas };
}
const recuperacaoOk = { data: { session: {}, user: {}, redirectType: "recovery" }, error: null };
const erroDoMotivo = (location) => motivoDoErro(new URL(location).searchParams.get("erro"));

{
  let c = callback({ troca: recuperacaoOk });
  assert.equal(await c.ir("/auth/callback?proximo=%2Fnova-senha&code=abc"), "https://site.test/nova-senha");

  // O caso do Site URL: o proxy traz o código da home SEM `proximo`.
  c = callback({ troca: recuperacaoOk });
  assert.equal(
    await c.ir("/auth/callback?code=abc"),
    "https://site.test/nova-senha",
    "o próprio código diz que era recuperação"
  );

  c = callback();
  assert.equal(await c.ir("/auth/callback?code=abc&proximo=%2Fapp%2Fquestoes"), "https://site.test/app/questoes");

  c = callback();
  assert.equal(await c.ir("/auth/callback?code=abc&proximo=https%3A%2F%2Fevil.com"), "https://site.test/app");

  c = callback({
    troca: { data: { session: null, user: null, redirectType: null }, error: { message: "PKCE code verifier not found in storage." } },
  });
  let destino = await c.ir("/auth/callback?proximo=%2Fnova-senha&code=abc");
  assert.ok(destino.startsWith("https://site.test/nova-senha?erro="), "a falha da recuperação é explicada na /nova-senha");
  assert.equal(erroDoMotivo(destino), "outro_navegador");

  c = callback({ troca: { data: {}, error: { message: "invalid flow state" } } });
  assert.ok((await c.ir("/auth/callback?code=abc")).startsWith("https://site.test/entrar?erro="));

  c = callback();
  assert.equal(
    await c.ir("/auth/callback?proximo=%2Fnova-senha"),
    "https://site.test/nova-senha",
    "sem código, o fragmento segue para a /nova-senha ler"
  );
  assert.equal(c.chamadas.length, 0);

  c = callback();
  assert.equal(await c.ir("/auth/callback"), "https://site.test/entrar?erro=sem_codigo");

  c = callback();
  assert.equal(await c.ir("/auth/callback?token_hash=h&type=recovery"), "https://site.test/nova-senha");
  assert.deepEqual([...c.chamadas], ["verifica:recovery:h"]);

  c = callback();
  destino = await c.ir("/auth/callback?token_hash=h&type=qualquer&proximo=%2Fnova-senha");
  assert.ok(destino.startsWith("https://site.test/nova-senha?erro="));
  assert.equal(c.chamadas.length, 0, "tipo desconhecido não chega ao Supabase");

  c = callback();
  destino = await c.ir(
    "/auth/callback?proximo=%2Fnova-senha&error=access_denied&error_description=Email+link+is+invalid+or+has+expired"
  );
  assert.equal(erroDoMotivo(destino), "vencido");
}
console.log("ok: o callback leva toda recuperação à /nova-senha, com ou sem `proximo`, e explica a falha lá");

/* ---------------------------------- proxy ---------------------------------- */
{
  const { proxy } = carregar("proxy.ts", {
    "next/server": { NextResponse: { redirect: (u) => ({ redirecionaPara: String(u) }) } },
    "@/lib/supabase/middleware": { atualizaSessao: async () => ({ headers: new Headers() }) },
  });
  const requisicao = (href) => {
    const u = new URL(href);
    return { nextUrl: Object.assign(u, { clone: () => new URL(u.href) }), headers: new Headers() };
  };

  let r = await proxy(requisicao("https://site.test/?code=abc"));
  assert.equal(r.redirecionaPara, "https://site.test/auth/callback?code=abc");

  r = await proxy(requisicao("https://site.test/?code=abc&sb_flow_id=f1"));
  assert.equal(r.redirecionaPara, "https://site.test/auth/callback?code=abc&sb_flow_id=f1");

  for (const href of [
    "https://site.test/",
    "https://site.test/app?code=abc",
    "https://site.test/auth/callback?code=abc",
  ]) {
    r = await proxy(requisicao(href));
    assert.equal(r.redirecionaPara, undefined, `não desvia ${href}`);
    assert.ok(r.headers.get("Content-Security-Policy"), "a resposta normal segue com CSP");
  }
}
console.log("ok: o proxy leva o ?code= da home ao callback e não mexe no resto");
