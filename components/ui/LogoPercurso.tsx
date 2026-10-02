import type { SVGProps } from "react";

/* A marca do Percurso: um P de traço contínuo, com dois pontos que chegam pela
   diagonal. Os pontos são a trilha que leva até o estudo.

   O desenho é todo em currentColor. A cor vem de `.logo-percurso` em
   globals.css (o acento do tema, claro ou escuro); quem precisar de outra, como
   a abertura, sobrescreve `color` no contêiner do svg. Os pontos usam a mesma
   cor com opacidade, o que os deixa mais claros em qualquer fundo.

   O tamanho vem do CSS de cada lugar, não daqui. O viewBox sobe um pouco o
   desenho para que o corpo do P, e não a trilha, caia no centro da caixa e
   fique alinhado ao nome. O mesmo desenho, dentro de um quadrado arredondado de
   acento (para ter contraste em qualquer aba do navegador), é o favicon em
   app/icon.svg: mexeu aqui, mexa lá. */
export function LogoPercurso(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="-1.2 1 46 46"
      className="logo-percurso"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path
        d="M16 35V10.5h11a9.25 9.25 0 0 1 0 18.5H16"
        fill="none"
        stroke="currentColor"
        strokeWidth={5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g className="logo-trilha" fill="currentColor">
        <circle cx={11} cy={40.5} r={2.5} />
        <circle cx={6.6} cy={44.4} r={1.7} />
      </g>
    </svg>
  );
}
