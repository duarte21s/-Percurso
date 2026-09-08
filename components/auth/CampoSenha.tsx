"use client";

import { useState } from "react";
import { Icone } from "@/components/ui/Icone";
import css from "@/app/entrar/entrar.module.css";

interface Props {
  id: string;
  rotulo: string;
  valor: string;
  onChange: (v: string) => void;
  autoComplete: "current-password" | "new-password";
}

export function CampoSenha({ id, rotulo, valor, onChange, autoComplete }: Props) {
  const [visivel, setVisivel] = useState(false);

  return (
    <div className={css.campo}>
      <input
        id={id}
        name="senha"
        type={visivel ? "text" : "password"}
        className={`${css.entrada} ${css.entradaComBotao}`}
        /* O placeholder de espaço é o que faz :placeholder-shown funcionar —
           sem ele o rótulo flutuante nunca voltaria para baixo. */
        placeholder=" "
        autoComplete={autoComplete}
        value={valor}
        onChange={(e) => onChange(e.target.value)}
        required
      />
      <label htmlFor={id} className={css.rotulo}>
        {rotulo}
      </label>
      <button
        type="button"
        className={css.olho}
        onClick={() => setVisivel((v) => !v)}
        aria-label={visivel ? "Ocultar senha" : "Mostrar senha"}
        title={visivel ? "Ocultar senha" : "Mostrar senha"}
      >
        <Icone nome={visivel ? "olhoCortado" : "olho"} tracoLargura={1.6} />
      </button>
    </div>
  );
}
