"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import css from "./visitante.module.css";

interface Props {
  /** Quantos minutos restavam quando o servidor renderizou. */
  minutosIniciais: number;
  /** Duração total do passe, só para o texto. */
  limiteMinutos: number;
}

/**
 * Faixa que acompanha a sessão de visitante até o fim dela.
 *
 * O contador é enfeite honesto: quem manda é o servidor, que compara o
 * `created_at` da conta anônima a cada página e a cada chamada de API. Mexer
 * no relógio da máquina ou no DOM daqui não compra um minuto a mais — só
 * estraga o aviso.
 *
 * Ele existe porque perder acesso no meio de um simulado sem nenhum sinal
 * prévio é uma experiência ruim, e porque quem vê o tempo correndo decide
 * criar a conta antes de perder o que já fez.
 */
export function AvisoVisitante({ minutosIniciais, limiteMinutos }: Props) {
  const router = useRouter();
  const [restam, setRestam] = useState(minutosIniciais);

  useEffect(() => {
    if (restam <= 0) {
      /* Chegou a zero com a aba aberta: o refresh faz o servidor decidir, e é
         ele quem manda para a tela de acesso. Não navegamos daqui direto para
         não passar na frente de quem tem a informação certa. */
      router.refresh();
      return;
    }
    const t = setTimeout(() => setRestam((n) => n - 1), 60_000);
    return () => clearTimeout(t);
  }, [restam, router]);

  const apertado = restam <= 10;

  return (
    <div className={`${css.faixa}${apertado ? ` ${css.urgente}` : ""}`} role="status">
      <span className={css.relogio}>
        {restam > 0 ? `${restam} min` : "acabou"}
      </span>
      <p className={css.texto}>
        {restam > 0 ? (
          <>
            Você está como <strong>visitante</strong>. O acesso dura{" "}
            {limiteMinutos} minutos e o que você fizer fica guardado — criando a
            conta agora, tudo continua na sua.
          </>
        ) : (
          <>
            O tempo de visitante terminou. Crie a conta para não perder o que
            você já fez.
          </>
        )}
      </p>
      <Link href="/entrar?modo=criar" className="btn btn-primary">
        Criar minha conta
      </Link>
    </div>
  );
}
