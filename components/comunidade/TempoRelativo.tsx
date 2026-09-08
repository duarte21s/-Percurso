"use client";

import { useEffect, useState } from "react";
import { dataCompleta, tempoRelativo } from "@/lib/conteudo/comunidade";

/**
 * O horário de um post/comentário.
 *
 * "há 3 h" depende da hora atual, e calcular isso durante o render faz o
 * servidor e o cliente gerarem textos diferentes por alguns segundos — o
 * aviso de hidratação clássico. Aqui o primeiro paint (servidor + hidratação)
 * mostra a data curta, que é estável, e só depois de montar o texto vira
 * relativo e passa a atualizar sozinho.
 */
export function TempoRelativo({
  iso,
  className,
}: {
  iso: string;
  className?: string;
}) {
  const [relativo, setRelativo] = useState<string | null>(null);

  useEffect(() => {
    const atualiza = () => setRelativo(tempoRelativo(iso));
    atualiza();
    const t = setInterval(atualiza, 60_000);
    return () => clearInterval(t);
  }, [iso]);

  const curto = new Date(iso).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
  });

  return (
    <time className={className} dateTime={iso} title={dataCompleta(iso)}>
      {relativo ?? curto}
    </time>
  );
}
