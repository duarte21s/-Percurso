"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { criaClienteBrowser } from "@/lib/supabase/client";
import {
  lerLinkDeRecuperacao,
  motivoDoErro,
  TELA_DO_MOTIVO,
  type MotivoLinkInvalido,
} from "@/lib/auth/recuperacao";
import { FormularioNovaSenha } from "./FormularioNovaSenha";
import css from "@/app/entrar/entrar.module.css";

type Resultado =
  | { fase: "formulario" }
  | { fase: "invalido"; motivo: MotivoLinkInvalido };

type Estado = { fase: "lendo" } | Resultado;

type ClienteBrowser = NonNullable<ReturnType<typeof criaClienteBrowser>>;

/* Token e código do link são de uso único. O React em desenvolvimento roda
   cada efeito duas vezes; se a segunda rodada relesse o link, gastaria o
   token de novo e acusaria "link vencido" para quem acabou de chegar. A
   leitura fica guardada pelo endereço em que começou. */
let leitura: { href: string; resultado: Promise<Resultado> } | null = null;

/**
 * Abre a sessão a partir do que o link trouxe e diz se o formulário pode
 * aparecer.
 */
async function lerOLink(supabase: ClienteBrowser): Promise<Resultado> {
  const link = lerLinkDeRecuperacao(window.location.href);
  const recusar = (motivo: MotivoLinkInvalido): Resultado => ({ fase: "invalido", motivo });

  /* Token e código não podem ficar na barra de endereço: um recarregar
     tentaria de novo e falharia, e o endereço com token é o que vai para o
     histórico e para o print de quem pede ajuda. */
  const limparUrl = () =>
    window.history.replaceState(window.history.state, "", window.location.pathname);

  if (link.tipo === "erro") {
    limparUrl();
    return recusar(motivoDoErro(link.detalhe));
  }

  if (link.tipo === "implicito") {
    /* O cliente do @supabase/ssr é PKCE e recusa sozinho o token no
       fragmento ("Not a valid PKCE flow url"). Por isso a sessão é aberta
       aqui, à mão. `setSession` dispara SIGNED_IN, não PASSWORD_RECOVERY; o
       `type=recovery` do link já foi conferido na leitura. */
    const { error } = await supabase.auth.setSession({
      access_token: link.accessToken,
      refresh_token: link.refreshToken,
    });
    limparUrl();
    return error ? recusar(motivoDoErro(error.message)) : { fase: "formulario" };
  }

  if (link.tipo === "token_hash") {
    // `verifyOtp` do tipo recovery dispara PASSWORD_RECOVERY por conta própria.
    const { error } = await supabase.auth.verifyOtp({
      token_hash: link.tokenHash,
      type: "recovery",
    });
    limparUrl();
    return error ? recusar(motivoDoErro(error.message)) : { fase: "formulario" };
  }

  if (link.tipo === "codigo") {
    /* O cliente já tentou trocar o código ao nascer (detectSessionInUrl) e,
       se conseguiu, disparou PASSWORD_RECOVERY. Só consegue quando o
       verificador está neste navegador; sem ele nem tenta, e não sobra
       sessão. Visitante não conta: conta anônima não tem senha para trocar. */
    await supabase.auth.initialize();
    const {
      data: { session },
    } = await supabase.auth.getSession();
    limparUrl();
    return session && !session.user.is_anonymous
      ? { fase: "formulario" }
      : recusar("outro_navegador");
  }

  return recusar("sem_link");
}

/**
 * A /nova-senha quando o servidor ainda não enxerga sessão.
 *
 * O caminho normal nem passa por aqui: o /auth/callback troca o código no
 * servidor e a página já nasce com o formulário. Este componente cobre o que
 * o servidor não vê ou não resolve — o token no fragmento da URL, o
 * `token_hash`, o `?code=` que chegou direto nesta página — e dá nome ao
 * problema quando o link não serve, em vez de um "link inválido" genérico.
 *
 * O formulário aparece com o evento `PASSWORD_RECOVERY`, que o supabase-js
 * dispara quando uma sessão nasce de um link de recuperação, ou quando a
 * leitura acima termina bem. A senha nova é gravada pelo mesmo
 * `FormularioNovaSenha` de sempre, cuja Server Action chama
 * `supabase.auth.updateUser({ password })`: a sessão aberta aqui vai para os
 * cookies, e o servidor a lê de lá.
 */
export function RecuperacaoPeloLink({
  motivoDoServidor,
}: {
  motivoDoServidor: MotivoLinkInvalido | null;
}) {
  const [estado, setEstado] = useState<Estado>(
    motivoDoServidor ? { fase: "invalido", motivo: motivoDoServidor } : { fase: "lendo" }
  );

  useEffect(() => {
    // O /auth/callback já tentou e disse o motivo: não há link para reler.
    if (motivoDoServidor) return;

    const supabase = criaClienteBrowser();
    if (!supabase) {
      setEstado({ fase: "invalido", motivo: "falhou" });
      return;
    }

    let ativo = true;
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((evento, sessao) => {
      if (ativo && evento === "PASSWORD_RECOVERY" && sessao) {
        setEstado({ fase: "formulario" });
      }
    });

    const href = window.location.href;
    if (leitura?.href !== href) leitura = { href, resultado: lerOLink(supabase) };
    leitura.resultado.then((resultado) => {
      // O evento pode ter chegado antes; ele não é desfeito por uma leitura atrasada.
      if (ativo) setEstado((atual) => (atual.fase === "formulario" ? atual : resultado));
    });

    return () => {
      ativo = false;
      subscription.unsubscribe();
    };
  }, [motivoDoServidor]);

  if (estado.fase === "formulario") return <FormularioNovaSenha />;

  if (estado.fase === "lendo") {
    return (
      <div className={css.cartao} aria-busy="true">
        <h1 className={css.titulo}>Conferindo o link…</h1>
        <p className={css.subtitulo} role="status">
          Só um instante: estou validando o link que chegou no seu e-mail.
        </p>
      </div>
    );
  }

  const tela = TELA_DO_MOTIVO[estado.motivo];
  return (
    <div className={css.cartao}>
      <h1 className={css.titulo}>{tela.titulo}</h1>
      <p className={css.subtitulo}>{tela.texto}</p>
      <div className={css.formularioSimples}>
        <Link href="/recuperar-senha" className={`btn btn-primary ${css.enviar}`}>
          Pedir outro link
          <span className="arrow">→</span>
        </Link>
      </div>
      <p className={css.legal}>
        <Link href="/entrar" className={css.elo}>
          Voltar para o acesso
        </Link>
      </p>
    </div>
  );
}
