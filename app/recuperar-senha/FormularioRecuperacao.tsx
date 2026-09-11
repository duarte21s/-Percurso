"use client";

import Link from "next/link";
import { useActionState } from "react";
import { Icone } from "@/components/ui/Icone";
import { pedirRecuperacao } from "./acoes";
import { ESTADO_INICIAL_RECUPERACAO } from "./estado";
import css from "@/app/entrar/entrar.module.css";

export function FormularioRecuperacao() {
  const [estado, acao, enviando] = useActionState(
    pedirRecuperacao,
    ESTADO_INICIAL_RECUPERACAO
  );

  /* Enviado: o formulário sai da tela. Deixá-lo ali convidaria a clicar de
     novo, e o Supabase limita envios por minuto — a segunda tentativa daria
     erro de limite logo depois de um sucesso, que é a pior sequência de
     recados possível. */
  if (estado.enviado) {
    return (
      <div className={css.cartao}>
        <h1 className={css.titulo}>Verifique seu e-mail.</h1>
        <p className={css.subtitulo}>
          Se existir uma conta com esse endereço, o link para criar uma senha
          nova acabou de sair. Ele vale por uma hora e por um uso só.
        </p>
        <p className={css.legal}>
          Não chegou em alguns minutos? Veja o spam — e confira se digitou o
          mesmo e-mail do cadastro.
        </p>
        <p className={css.legal}>
          <Link href="/entrar" className={css.elo}>
            Voltar para o acesso
          </Link>
        </p>
      </div>
    );
  }

  return (
    <div className={css.cartao}>
      <Link href="/entrar" className={css.voltar}>
        <Icone nome="seta" tracoLargura={1.8} />
        Voltar ao acesso
      </Link>

      <h1 className={css.titulo}>Esqueceu a senha?</h1>
      <p className={css.subtitulo}>
        Diga o e-mail da sua conta. Mandamos um link para você criar outra
        senha — nada do seu progresso se perde nisso.
      </p>

      {estado.erro && (
        <div className={`${css.recado} ${css.recadoErro}`} role="alert">
          {estado.erro}
        </div>
      )}

      <form action={acao} className={css.formularioSimples}>
        <div className={css.campo}>
          <input
            id="email"
            name="email"
            type="email"
            className={css.entrada}
            placeholder=" "
            autoComplete="email"
            required
            autoFocus
          />
          <label htmlFor="email" className={css.rotulo}>
            Seu e-mail
          </label>
        </div>

        <button
          type="submit"
          className={`btn btn-primary ${css.enviar}`}
          disabled={enviando}
        >
          {enviando ? "Enviando…" : "Enviar o link"}
          {!enviando && <span className="arrow">→</span>}
        </button>
      </form>

      <p className={css.legal}>
        Entrou com o Google? Então não há senha para recuperar — é só usar o
        botão do Google na tela de acesso.
      </p>
    </div>
  );
}
