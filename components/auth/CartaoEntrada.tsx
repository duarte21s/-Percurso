"use client";

import Link from "next/link";
import { useActionState, useState } from "react";
import { CampoSenha } from "./CampoSenha";
import { LogoGoogle } from "./LogosSociais";
import {
  entrar,
  entrarComProvedor,
  entrarComoVisitante,
} from "@/app/entrar/acoes";
import { ESTADO_INICIAL } from "@/app/entrar/estado";
import css from "./cartao-entrada.module.css";

/** Para onde o acesso pela home leva. A tela /entrar é quem lida com ?proximo=. */
const DESTINO = "/app";

/**
 * O cartão de acesso que fica sobre o vídeo da home.
 *
 * É uma tela de VOLTAR, não de cadastro: e-mail, senha e os dois atalhos que
 * já existiam (Google e visitante). Criar conta é um link para /entrar?modo=criar
 * em vez de um segundo formulário aqui — a criação tem nome, força de senha e
 * a promoção da sessão anônima, e duplicar isso sobre o vídeo seria duas
 * implementações do mesmo caminho crítico para manter em sincronia.
 *
 * As Server Actions são exatamente as mesmas da tela /entrar. O que muda aqui
 * é só a apresentação.
 */
export function CartaoEntrada() {
  const [senha, setSenha] = useState("");

  const [estadoEntrar, acaoEntrar, entrando] = useActionState(
    entrar,
    ESTADO_INICIAL
  );
  const [estadoVisita, acaoVisita, entrandoVisita] = useActionState(
    entrarComoVisitante,
    ESTADO_INICIAL
  );
  const [estadoGoogle, acaoGoogle, indoGoogle] = useActionState(
    entrarComProvedor,
    ESTADO_INICIAL
  );

  const ocupado = entrando || entrandoVisita || indoGoogle;
  const erro = estadoEntrar.erro ?? estadoGoogle.erro ?? estadoVisita.erro;

  return (
    <div className={css.cartao}>
      <span className={css.marca}>Percurso</span>

      <h2 className={css.titulo}>Continue sua jornada</h2>
      <p className={css.subtitulo}>
        Entre para retomar de onde parou — inclusive em qual questão.
      </p>

      {erro && (
        <div className={`${css.recado} ${css.recadoErro}`} role="alert">
          {erro}
        </div>
      )}
      {estadoEntrar.aviso && (
        <div className={`${css.recado} ${css.recadoAviso}`} role="status">
          {estadoEntrar.aviso}
        </div>
      )}

      <form action={acaoGoogle}>
        <input type="hidden" name="provedor" value="google" />
        <input type="hidden" name="proximo" value={DESTINO} />
        <button type="submit" className={css.botaoSocial} disabled={ocupado}>
          <LogoGoogle />
          {indoGoogle ? "Abrindo o Google…" : "Continuar com o Google"}
        </button>
      </form>

      <div className={css.separador}>ou com e-mail</div>

      <form action={acaoEntrar}>
        <input type="hidden" name="proximo" value={DESTINO} />

        <div className={css.campo}>
          <input
            id="email-home"
            name="email"
            type="email"
            className={css.entrada}
            placeholder=" "
            autoComplete="email"
            required
          />
          <label htmlFor="email-home" className={css.rotulo}>
            Seu e-mail
          </label>
        </div>

        <CampoSenha
          id="senha-home"
          rotulo="Senha"
          valor={senha}
          onChange={setSenha}
          autoComplete="current-password"
          estilos={css}
        />

        <p className={css.linhaEsqueci}>
          <Link href="/recuperar-senha" className={css.elo}>
            Esqueci minha senha
          </Link>
        </p>

        <button type="submit" className={css.enviar} disabled={ocupado}>
          {entrando ? "Entrando…" : "Entrar"}
          {!ocupado && (
            <span className={css.seta} aria-hidden="true">
              →
            </span>
          )}
        </button>
      </form>

      <form action={acaoVisita}>
        <input type="hidden" name="proximo" value={DESTINO} />
        <button type="submit" className={css.visitante} disabled={ocupado}>
          {entrandoVisita ? "Abrindo…" : "Entrar como visitante"}
        </button>
      </form>

      <p className={css.rodape}>
        Ainda não tem conta?{" "}
        <Link href="/entrar?modo=criar" className={css.elo}>
          Criar uma conta
        </Link>
      </p>
    </div>
  );
}

/**
 * O mesmo vidro, para quem já está logado. Mostrar um formulário de login a
 * quem tem sessão seria pedir de novo o que a pessoa já fez — e, na home, é
 * a primeira coisa que ela veria ao voltar ao site.
 */
export function CartaoDeVolta({ nome }: { nome: string | null }) {
  return (
    <div className={css.cartao}>
      <span className={css.marca}>Percurso</span>

      <h2 className={css.saudacao}>
        {nome ? `Bom te ver, ${nome}.` : "Bom te ver de novo."}
      </h2>
      <p className={css.subtitulo}>
        Seu progresso está onde você deixou.
      </p>

      <div className={css.acoesVolta}>
        <Link href="/app" className={css.enviar}>
          Continuar estudando
          <span className={css.seta} aria-hidden="true">
            →
          </span>
        </Link>
        <Link href="/app/questoes" className={css.visitante}>
          Ir direto para as questões
        </Link>
      </div>
    </div>
  );
}
