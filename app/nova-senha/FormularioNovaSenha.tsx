"use client";

import { useActionState, useState } from "react";
import { CampoSenha } from "@/components/auth/CampoSenha";
import { ForcaSenha } from "@/components/auth/ForcaSenha";
import { definirNovaSenha } from "./acoes";
import { ESTADO_INICIAL } from "@/app/entrar/estado";
import css from "@/app/entrar/entrar.module.css";

export function FormularioNovaSenha() {
  const [senha, setSenha] = useState("");
  const [confirmacao, setConfirmacao] = useState("");

  const [estado, acao, salvando] = useActionState(
    definirNovaSenha,
    ESTADO_INICIAL
  );

  return (
    <div className={css.cartao}>
      <h1 className={css.titulo}>Crie uma senha nova.</h1>
      <p className={css.subtitulo}>
        Assim que ela for salva, você entra direto — seus simulados, respostas
        e redações continuam exatamente onde estavam.
      </p>

      {estado.erro && (
        <div className={`${css.recado} ${css.recadoErro}`} role="alert">
          {estado.erro}
        </div>
      )}

      <form action={acao} className={css.formularioSimples}>
        <CampoSenha
          id="senha"
          rotulo="Senha nova"
          valor={senha}
          onChange={setSenha}
          autoComplete="new-password"
        />
        <ForcaSenha senha={senha} />

        <CampoSenha
          id="confirmacao"
          nome="confirmacao"
          rotulo="Repita a senha nova"
          valor={confirmacao}
          onChange={setConfirmacao}
          autoComplete="new-password"
        />

        <button
          type="submit"
          className={`btn btn-primary ${css.enviar}`}
          disabled={salvando}
        >
          {salvando ? "Salvando…" : "Salvar e entrar"}
          {!salvando && <span className="arrow">→</span>}
        </button>
      </form>
    </div>
  );
}
