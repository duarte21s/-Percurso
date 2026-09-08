"use client";

import css from "@/app/entrar/entrar.module.css";

/**
 * Medidor de força. Não é validação — quem valida é o Supabase, com a regra
 * de 6 caracteres. Isto é orientação: mostra que comprimento e variedade
 * contam, sem barrar ninguém.
 */
function avalia(senha: string): { nivel: 0 | 1 | 2 | 3 | 4; rotulo: string; cor: string } {
  if (!senha) return { nivel: 0, rotulo: "", cor: "transparent" };

  let pontos = 0;
  if (senha.length >= 6) pontos++;
  if (senha.length >= 12) pontos++;
  if (/[a-z]/.test(senha) && /[A-Z]/.test(senha)) pontos++;
  if (/\d/.test(senha)) pontos++;
  if (/[^\w\s]/.test(senha)) pontos++;

  if (senha.length < 6) return { nivel: 1, rotulo: "Curta", cor: "var(--err)" };
  if (pontos <= 2) return { nivel: 2, rotulo: "Fraca", cor: "var(--err)" };
  if (pontos === 3) return { nivel: 3, rotulo: "Razoável", cor: "var(--accent)" };
  return { nivel: 4, rotulo: "Forte", cor: "var(--ok)" };
}

export function ForcaSenha({ senha }: { senha: string }) {
  const { nivel, rotulo, cor } = avalia(senha);
  if (!senha) return null;

  return (
    <div className={css.forca} aria-live="polite">
      <span className={css.forcaTrilho}>
        <i
          className={css.forcaFita}
          style={{ width: `${(nivel / 4) * 100}%`, background: cor }}
        />
      </span>
      <span className={css.forcaRotulo}>{rotulo}</span>
    </div>
  );
}
