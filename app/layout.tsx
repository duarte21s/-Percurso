import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import { headers } from "next/headers";
import { ScriptInline } from "@/components/ui/ScriptInline";
import { urlPublicaConfigurada } from "@/lib/site-url";
import "./globals.css";

/* Duas fontes com papéis separados: Inter carrega corpo e interface, Montserrat
   carrega os títulos.
   `latin-ext` entra por causa do português (ã, õ, ç, í): sem ele o navegador
   troca de fonte no meio da palavra para desenhar o acento. */
const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--fonte-sans",
});

/* Montserrat no lugar da Fraunces. A troca muda a ESPÉCIE do título: sai uma
   serifa de contraste modulado, entra uma geométrica de traço uniforme. Duas
   consequências que o resto do sistema teve de acompanhar:

   1. O eixo `opsz` era da Fraunces e não existe aqui, então `axes` sai. Os
      `font-optical-sizing: auto` espalhados pelo CSS viram inertes — ficam,
      porque são inofensivos e voltam a valer se uma variável óptica retornar,
      mas não fazem mais nada.
   2. Geométrica de traço uniforme pesa mais no olho que serifa de mesmo
      número. O 560 que a `.title` usava viraria um bloco; por isso a escala de
      título se firmou em 600, e nada passa de 700.

   Montserrat também é variável, então os pesos 600 e 700 existem desenhados no
   arquivo — não são simulados por engrossamento, que é o que estragaria a
   hierarquia. */
const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--fonte-display",
});

const siteUrl = urlPublicaConfigurada();

export const metadata: Metadata = {
  title: "Percurso — Estude para o ENEM",
  description:
    "Plataforma de estudos para o ENEM. As nove matérias que o exame cobra, banco de questões com comentário nas autorais, provas reais em modo prova, correção de redação, índices comparativos de faculdades brasileiras e cronograma personalizado.",
  applicationName: "Percurso",
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  alternates: siteUrl ? { canonical: "/" } : undefined,
  keywords: [
    "ENEM",
    "questões ENEM",
    "provas do ENEM",
    "redação ENEM",
    "simulado ENEM",
    "cronograma de estudos",
    "plataforma de estudos",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Percurso",
    title: "Percurso — Estude para o ENEM",
    description:
      "Banco de questões com comentário nas autorais, provas do ENEM, redação, cronograma e acompanhamento em uma plataforma de estudos.",
    url: siteUrl ? "/" : undefined,
    images: siteUrl ? [{ url: "/media/hero-open.png" }] : undefined,
  },
  twitter: {
    card: "summary_large_image",
    title: "Percurso — Estude para o ENEM",
    description:
      "Banco de questões com comentário nas autorais, provas do ENEM, redação, cronograma e acompanhamento em uma plataforma de estudos.",
    images: siteUrl ? ["/media/hero-open.png"] : undefined,
  },
  category: "education",
};

/**
 * O `theme-color` saiu do `<head>` cravado e virou este export.
 *
 * O motivo é a home. Ela precisa de um `theme-color` ESCURO — a abertura é um
 * filme quase preto, e com a cor clara o Safari do iPhone pinta a barra de
 * status e a de endereço de branco, emoldurando a cena com duas faixas. Mas
 * `<meta>` escrita à mão no `<head>` não se sobrescreve: a página só
 * acrescentaria uma terceira, e o Safari usa a PRIMEIRA cujo `media` casa — a
 * clara. Pelo export, o Next resolve a precedência por segmento, e o
 * `app/page.tsx` troca só a dela.
 *
 * Os valores são os mesmos de antes, então nada muda fora da home.
 */
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f9fbf8" },
    { media: "(prefers-color-scheme: dark)", color: "#0c110d" },
  ],
};


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
      className={`${inter.variable} ${montserrat.variable}`}
      suppressHydrationWarning
    >
      <head>
        <ScriptInline html={SCRIPT_TEMA} nonce={nonce} />
      </head>
      <body>{children}</body>
    </html>
  );
}
