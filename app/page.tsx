import { CenaEntrada } from "@/components/hero/CenaEntrada";
import { AtoLivro } from "@/components/hero/AtoLivro";
import { Footer } from "@/components/layout/Footer";

/**
 * A home fica fora do grupo (site), que traz nav, avisos e barra de leitura —
 * a abertura precisa da tela inteira, sem casca. O rodapé vem à parte, porque
 * uma página que rola não pode terminar em beco sem saída.
 *
 * Dois atos: a sequência cinematográfica na primeira tela, e o livro abrindo
 * logo abaixo, raspado pela rolagem.
 */
export default function Home() {
  return (
    <>
      <main>
        <CenaEntrada />
        <AtoLivro />
      </main>
      <Footer />
    </>
  );
}
