import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { headers } from "next/headers";
import { ScriptInline } from "@/components/ui/ScriptInline";
import { urlPublicaConfigurada } from "@/lib/site-url";
import "./globals.css";

/* Duas fontes com papéis separados: Inter carrega corpo e interface, Fraunces
   carrega os títulos.
   `latin-ext` entra por causa do português (ã, õ, ç, í): sem ele o navegador
   troca de fonte no meio da palavra para desenhar o acento. */
const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--fonte-sans",
});

/* Fraunces é variável, e é por isso que ela volta onde Palatino/Georgia não
   podiam ficar: os pesos 500/600/700 existem de verdade no arquivo, então a
   hierarquia de três pesos não colapsa em dois. Só em título — em texto de
   interface a Inter continua ganhando.

   `axes: ["opsz"]` não é enfeite. O next/font traz apenas o eixo de peso por
   padrão, para poupar bytes; sem o eixo óptico, o `font-optical-sizing: auto`
   que .title e .hero-h1 declaram no globals.css não teria o que ajustar e a
   linha seria decorativa. Com ele, o desenho da letra acompanha o corpo — mais
   fechado e mais fino nos títulos grandes, mais aberto nos pequenos, que é a
   razão de usar uma serifa variável em vez de uma estática. */
const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  axes: ["opsz"],
  variable: "--fonte-display",
});

const siteUrl = urlPublicaConfigurada();

export const metadata: Metadata = {
  title: "Percurso — Estude para o ENEM, vestibulares e reforço escolar",
  description:
    "Plataforma de estudos para ENEM, vestibulares e reforço escolar. Nove matérias, banco de questões com comentário nas autorais, índices comparativos de faculdades brasileiras e cronograma personalizado.",
  applicationName: "Percurso",
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  alternates: siteUrl ? { canonical: "/" } : undefined,
  keywords: [
    "ENEM",
    "vestibular",
    "raciocínio lógico",
    "questões ENEM",
    "redação ENEM",
    "cronograma de estudos",
    "plataforma de estudos",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Percurso",
    title: "Percurso — Estude para o ENEM, vestibulares e reforço escolar",
    description:
      "Banco de questões com comentário nas autorais, provas do ENEM, redação, cronograma e acompanhamento em uma plataforma de estudos.",
    url: siteUrl ? "/" : undefined,
    images: siteUrl ? [{ url: "/media/hero-open.png" }] : undefined,
  },
  twitter: {
    card: "summary_large_image",
    title: "Percurso — Estude para o ENEM, vestibulares e reforço escolar",
    description:
      "Banco de questões com comentário nas autorais, provas do ENEM, redação, cronograma e acompanhamento em uma plataforma de estudos.",
    images: siteUrl ? ["/media/hero-open.png"] : undefined,
  },
  category: "education",
};

/* Sem `viewport.themeColor` fixo: o `<meta name="theme-color">` abaixo troca
   com o tema (claro/escuro) via media query. */

/* Lê o tema salvo ANTES do primeiro paint — sem isto, o site pisca no claro
   e escurece na hidratação. Roda inline no <head>. */
const SCRIPT_TEMA = `
(function(){try{
  var t=localStorage.getItem("tema");
  if(t==="dark"||t==="light")document.documentElement.setAttribute("data-theme",t);
}catch(e){}
/* O Safari do iPhone só aplica :active se a página tiver ALGUM ouvinte de
   toque registrado — peculiaridade antiga do WebKit, não uma opção. Sem este
   ouvinte vazio, todo o retorno de aperto do site (o botão afundando, a linha
   acendendo) não existe no iPhone, e só no iPhone.

   Comentario de bloco, nao de linha: isto entra por innerHTML e qualquer
   passo que colapse as quebras de linha faria a barra dupla engolir o resto
   do script. Sem crase e sem acento aqui dentro: a crase fecharia o template
   literal que envolve tudo isto. */
try{document.addEventListener("touchstart",function(){},{passive:true});}catch(e){}
})();
`;

/**
 * Layout raiz: só o documento. Nav e rodapé vivem no grupo (site), para que
 * a abertura e a tela de acesso possam ocupar a viewport inteira sem eles.
 */
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const nonce = (await headers()).get("x-nonce");

  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${fraunces.variable}`}
      suppressHydrationWarning
    >
      <head>
        <meta
          name="theme-color"
          content="#f9fbf8"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#0c110d"
          media="(prefers-color-scheme: dark)"
        />
        <ScriptInline html={SCRIPT_TEMA} nonce={nonce} />
      </head>
      <body>{children}</body>
    </html>
  );
}
