"use client";

import Link from "next/link";
import { useActionState, useState } from "react";
import { CampoSenha } from "./CampoSenha";
import { ForcaSenha } from "./ForcaSenha";
import { LogoGoogle } from "./LogosSociais";
import { Icone } from "@/components/ui/Icone";
import {
  criarConta,
  entrar,
  entrarComProvedor,
  entrarComoVisitante,
} from "@/app/entrar/acoes";
import { ESTADO_INICIAL } from "@/app/entrar/estado";
import css from "@/app/entrar/entrar.module.css";

type Modo = "entrar" | "criar";

interface Props {
  modoInicial: Modo;
  proximo: string;
  erroInicial?: string;
}

export function CartaoAcesso({ modoInicial, proximo, erroInicial }: Props) {
  const [modo, setModo] = useState<Modo>(modoInicial);
  const [senha, setSenha] = useState("");

  const [estadoEntrar, acaoEntrar, entrando] = useActionState(
    entrar,
    ESTADO_INICIAL
  );
  const [estadoCriar, acaoCriar, criando] = useActionState(
    criarConta,
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

  const criandoConta = modo === "criar";
  const estado = criandoConta ? estadoCriar : estadoEntrar;
  const ocupado = entrando || criando || entrandoVisita || indoGoogle;
  const erroSocial = estadoGoogle.erro ?? erroInicial;

  function trocaModo(novo: Modo) {
    setModo(novo);
    setSenha("");
  }

  return (
    <div className={css.cartao}>
      <Link href="/" className={css.voltar}>
        <Icone nome="seta" tracoLargura={1.8} />
        Voltar ao site
      </Link>

      <h1 className={css.titulo}>
        {criandoConta ? "Comece o seu percurso." : "Bom te ver de novo."}
      </h1>
      <p className={css.subtitulo}>
        {criandoConta
          ? "Conta criada, progresso salvo: o simulado passa a lembrar em que questão você parou."
          : "Entre para continuar de onde parou no simulado."}
      </p>

      <div className={css.abas} role="tablist">
        <button
          className={`${css.aba}${!criandoConta ? ` ${css.abaAtiva}` : ""}`}
          onClick={() => trocaModo("entrar")}
          role="tab"
          aria-selected={!criandoConta}
          type="button"
        >
          Entrar
        </button>
        <button
          className={`${css.aba}${criandoConta ? ` ${css.abaAtiva}` : ""}`}
          onClick={() => trocaModo("criar")}
          role="tab"
          aria-selected={criandoConta}
          type="button"
        >
          Criar conta
        </button>
      </div>

      {estado.erro && (
        <div className={`${css.recado} ${css.recadoErro}`} role="alert">
          {estado.erro}
        </div>
      )}
      {estado.aviso && (
        <div className={`${css.recado} ${css.recadoAviso}`} role="status">
          {estado.aviso}
        </div>
      )}
      {estadoVisita.erro && (
        <div className={`${css.recado} ${css.recadoErro}`} role="alert">
          {estadoVisita.erro}
        </div>
      )}
      {erroSocial && (
        <div className={`${css.recado} ${css.recadoErro}`} role="alert">
          {erroSocial}
        </div>
      )}

      {/* O Google vem antes do e-mail porque é o caminho mais curto: nada
          para digitar, nada para lembrar depois. O formulário fica logo
          abaixo, para quem prefere não vincular uma conta de terceiro. */}
      <div className={css.social}>
        <form action={acaoGoogle}>
          <input type="hidden" name="provedor" value="google" />
          <input type="hidden" name="proximo" value={proximo} />
          <button
            type="submit"
            className={css.botaoSocial}
            disabled={ocupado}
          >
            <LogoGoogle />
            {indoGoogle ? "Abrindo o Google…" : "Continuar com o Google"}
          </button>
        </form>
      </div>

      <div className={css.separador}>ou com e-mail</div>

      {/* Dois formulários separados, um por modo. Um só, com action trocada
          por estado, faria o React remontar os campos e perder o que a
          pessoa digitou ao alternar. */}
      <form action={criandoConta ? acaoCriar : acaoEntrar} key={modo}>
        <input type="hidden" name="proximo" value={proximo} />

        {criandoConta && (
          <div className={css.campo}>
            <input
              id="nome"
              name="nome"
              type="text"
              className={css.entrada}
              placeholder=" "
              autoComplete="name"
              required
            />
            <label htmlFor="nome" className={css.rotulo}>
              Como podemos te chamar
            </label>
          </div>
        )}

        <div className={css.campo}>
          <input
            id="email"
            name="email"
            type="email"
            className={css.entrada}
            placeholder=" "
            autoComplete="email"
            required
          />
          <label htmlFor="email" className={css.rotulo}>
            Seu e-mail
          </label>
        </div>

        <CampoSenha
          id="senha"
          rotulo="Senha"
          valor={senha}
          onChange={setSenha}
          autoComplete={criandoConta ? "new-password" : "current-password"}
        />

        {criandoConta && <ForcaSenha senha={senha} />}

        <button
          type="submit"
          className={`btn btn-primary ${css.enviar}`}
          disabled={ocupado}
        >
          {criandoConta
            ? criando
              ? "Criando…"
              : "Criar minha conta"
            : entrando
              ? "Entrando…"
              : "Entrar"}
          {!ocupado && <span className="arrow">→</span>}
        </button>
      </form>

      {/* Sem separador aqui: já são dois acima, e um terceiro picotaria o
          cartão. O afastamento por margem basta para separar o visitante. */}
      <form action={acaoVisita} className={css.blocoVisitante}>
        <input type="hidden" name="proximo" value={proximo} />
        <button
          type="submit"
          className={`btn btn-ghost ${css.visitante}`}
          disabled={ocupado}
        >
          {entrandoVisita ? "Abrindo…" : "Entrar como visitante"}
        </button>
      </form>

      <p className={css.legal}>
        Como visitante você testa tudo e o progresso fica salvo. Ao criar uma
        conta depois, ele continua com você.
      </p>
    </div>
  );
}
