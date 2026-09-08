import type { SVGProps } from "react";

/* Ícones em traço, portados do site original. Todos herdam currentColor. */

const CAMINHOS = {
  star: <path d="M12 3l2.6 5.6 6 .8-4.4 4.2 1.1 6.1L12 16.9 6.7 19.7l1.1-6.1L3.4 9.4l6-.8z" />,
  book: (
    <>
      <path d="M4 4h6a2.5 2.5 0 0 1 2.5 2.5V20a2 2 0 0 0-2-2H4z" />
      <path d="M20 4h-6a2.5 2.5 0 0 0-2.5 2.5V20a2 2 0 0 1 2-2H20z" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7.5 3v6c0 4.4-3 8.1-7.5 9.4C7.5 20.1 4.5 16.4 4.5 12V6z" />
      <path d="M9.3 12.2l1.9 1.9 3.6-3.7" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M15.2 8.8l-1.7 4.7-4.7 1.7 1.7-4.7z" />
    </>
  ),
  layers: (
    <>
      <path d="M12 3.5l8.5 4.3-8.5 4.3-8.5-4.3z" />
      <path d="M3.5 12.5l8.5 4.3 8.5-4.3" />
    </>
  ),
  cap: (
    <>
      <path d="M12 4L2.8 8.5 12 13l9.2-4.5z" />
      <path d="M6.5 10.7V16c0 1.5 2.5 2.8 5.5 2.8s5.5-1.3 5.5-2.8v-5.3" />
    </>
  ),
  /* A marca é a única do conjunto que vem cheia, e de propósito. Aos 14px do
     cabeçalho um desenho em traço vira rabisco — a silhueta é o que sobra
     nesse tamanho. O vazado no meio é o marco do percurso, e some antes do
     resto se a tela for pequena demais, o que é o comportamento certo: a
     forma continua reconhecível sem ele.

     Um marcador de página, não um livro: livro é o que todo site de estudo
     usa, e o `book` deste mesmo arquivo já o desenha. O marcador diz onde
     você parou — que é o que o produto faz. */
  marca: (
    <path
      fill="currentColor"
      stroke="none"
      fillRule="evenodd"
      d="M5.8 3.4h12.4v17.9L12 16.7l-6.2 4.6zM12 8.6a2.05 2.05 0 1 0 0 4.1 2.05 2.05 0 0 0 0-4.1z"
    />
  ),
  busca: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3.5-3.5" />
    </>
  ),
  seta: <path d="M6 9l6 6 6-6" />,
  check: <path d="M4 12.5l5 5L20 6.5" />,
  agenda: (
    <>
      <rect x="3" y="4.5" width="18" height="16" rx="2.5" />
      <path d="M3 9.5h18M8 2.5v4M16 2.5v4" />
    </>
  ),
  olho: (
    <>
      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  info: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 11v5.5" />
      <path d="M12 7.8v.6" />
    </>
  ),
  coracao: (
    <path d="M12 20s-7.2-4.4-7.2-9.3A4.1 4.1 0 0 1 12 8.2a4.1 4.1 0 0 1 7.2 2.5C19.2 15.6 12 20 12 20z" />
  ),
  balao: (
    <path d="M20 15.2a2.3 2.3 0 0 1-2.3 2.3H8.4L4 21V6.3A2.3 2.3 0 0 1 6.3 4h11.4A2.3 2.3 0 0 1 20 6.3z" />
  ),
  compartilhar: (
    <>
      <circle cx="17.5" cy="6" r="2.6" />
      <circle cx="6.5" cy="12" r="2.6" />
      <circle cx="17.5" cy="18" r="2.6" />
      <path d="M8.8 10.8l6.4-3.5M8.8 13.2l6.4 3.5" />
    </>
  ),
  marcador: <path d="M6.5 3.8h11v16.4L12 16l-5.5 4.2z" />,
  sino: (
    <>
      <path d="M18 15.5V10a6 6 0 1 0-12 0v5.5L4.5 18h15z" />
      <path d="M10 20.5a2.2 2.2 0 0 0 4 0" />
    </>
  ),
  mais: <path d="M12 5v14M5 12h14" />,
  reticencias: (
    <>
      <circle cx="5.5" cy="12" r="1.3" />
      <circle cx="12" cy="12" r="1.3" />
      <circle cx="18.5" cy="12" r="1.3" />
    </>
  ),
  imagem: (
    <>
      <rect x="3.5" y="5" width="17" height="14" rx="2.2" />
      <circle cx="9" cy="10" r="1.6" />
      <path d="M4.5 17l4.6-4.3 3.2 2.8 3-2.4 4.2 3.6" />
    </>
  ),
  elo: (
    <>
      <path d="M10.4 13.6a3.6 3.6 0 0 0 5.1 0l2.6-2.6a3.6 3.6 0 0 0-5.1-5.1l-1.3 1.3" />
      <path d="M13.6 10.4a3.6 3.6 0 0 0-5.1 0l-2.6 2.6a3.6 3.6 0 0 0 5.1 5.1l1.3-1.3" />
    </>
  ),
  codigo: <path d="M9 7.5L4.5 12 9 16.5M15 7.5L19.5 12 15 16.5" />,
  pessoas: (
    <>
      <circle cx="9.5" cy="8.5" r="3.2" />
      <path d="M3.8 19.2a5.9 5.9 0 0 1 11.4 0" />
      <path d="M16.2 6.1a3.2 3.2 0 0 1 0 6.1M17.4 14.6a5.9 5.9 0 0 1 3 4.6" />
    </>
  ),
  alta: <path d="M4 16.5l5-5.2 3.4 3.2L20 7.2M20 7.2h-4.6M20 7.2v4.6" />,
  olhoCortado: (
    <>
      <path d="M10.6 6.1A9.6 9.6 0 0 1 12 6c6 0 9.5 6 9.5 6a17 17 0 0 1-3 3.6M6.4 7.6A17 17 0 0 0 2.5 12s3.5 6 9.5 6c1.3 0 2.5-.3 3.6-.7" />
      <path d="M3 3l18 18" />
    </>
  ),
} as const;

export type NomeIcone = keyof typeof CAMINHOS;

interface Props extends SVGProps<SVGSVGElement> {
  nome: NomeIcone;
  tracoLargura?: number;
}

export function Icone({ nome, tracoLargura = 1.5, ...props }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={tracoLargura}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {CAMINHOS[nome]}
    </svg>
  );
}
