"use client";

import { useState } from "react";
import { Icone } from "@/components/ui/Icone";
import css from "@/app/entrar/entrar.module.css";

/**
 * As classes de que o campo precisa, venham do módulo CSS que vierem: `campo`,
 * `entrada`, `entradaComBotao`, `rotulo` e `olho`.
 *
 * O tipo é um índice aberto, e não uma interface com essas cinco chaves,
 * porque é assim que o Next declara `*.module.css` — o compilador não sabe
 * quais classes existem em cada arquivo, então exigir as chaves recusaria
 * qualquer módulo real.
 */
export type EstilosCampo = Readonly<Record<string, string>>;

interface Props {
  id: string;
  rotulo: string;
  valor: string;
  onChange: (v: string) => void;
  autoComplete: "current-password" | "new-password";
  /** Nome do campo no FormData. Só muda em tela com dois campos de senha. */
  nome?: string;
  /**
   * Estilos de quem hospeda o campo. Sem isto ele usaria sempre os da tela
   * /entrar, que são claros — e o campo desapareceria dentro do cartão de
   * vidro escuro que fica sobre o vídeo da home.
   */
  estilos?: EstilosCampo;
}

export function CampoSenha({
  id,
  rotulo,
  valor,
  onChange,
  autoComplete,
  nome = "senha",
  estilos = css,
}: Props) {
  const [visivel, setVisivel] = useState(false);

  return (
    <div className={estilos.campo}>
      <input
        id={id}
        name={nome}
        type={visivel ? "text" : "password"}
        className={`${estilos.entrada} ${estilos.entradaComBotao}`}
        /* O placeholder de espaço é o que faz :placeholder-shown funcionar —
           sem ele o rótulo flutuante nunca voltaria para baixo. */
        placeholder=" "
        autoComplete={autoComplete}
        value={valor}
        onChange={(e) => onChange(e.target.value)}
        required
      />
      <label htmlFor={id} className={estilos.rotulo}>
        {rotulo}
      </label>
      <button
        type="button"
        className={estilos.olho}
        onClick={() => setVisivel((v) => !v)}
        aria-label={visivel ? "Ocultar senha" : "Mostrar senha"}
        title={visivel ? "Ocultar senha" : "Mostrar senha"}
      >
        <Icone nome={visivel ? "olhoCortado" : "olho"} tracoLargura={1.6} />
      </button>
    </div>
  );
}
