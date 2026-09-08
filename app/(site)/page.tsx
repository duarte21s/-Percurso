import { Hero } from "@/components/hero/Hero";

/* A home é só uma porta de entrada: o Hero, curto e visual. Quem quer conhecer
   o Percurso a fundo clica em "Conhecer o Percurso" e vai para /sobre — que é
   onde mora a apresentação completa (método, números, como funciona, recursos).
   Nada de ferramenta nem de dashboard aqui. */
export default function Home() {
  return (
    <main id="top">
      <Hero />
    </main>
  );
}
