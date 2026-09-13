import { CenaEntrada } from "@/components/hero/CenaEntrada";
import { Footer } from "@/components/layout/Footer";

/**
 * A home fica fora do grupo (site), que traz nav, avisos e barra de leitura —
 * a abertura precisa da tela inteira, sem casca. O rodapé vem à parte, porque
 * uma página que rola não pode terminar em beco sem saída.
 *
 * UM ato: a sequência cinematográfica ocupa a primeira tela e o rodapé vem
 * logo em seguida.
 *
 * O segundo ato — `AtoLivro`, o livro abrindo raspado pela rolagem — foi
 * retirado daqui. Ele custava TRÊS TELAS de rolagem (300vh no
 * `ato-livro.module.css`) para entregar um segundo vídeo, e dois vídeos em
 * sequência na mesma página pesavam mais do que somavam. Sair da composição
 * levou junto a altura inteira: a seção não deixa vão, porque não existe mais
 * no documento.
 *
 * O componente e o `hero-livro.mp4` continuam no repositório, sem ninguém
 * importando — é código morto de propósito, para que voltar atrás seja uma
 * linha e não uma arqueologia. Se a decisão se firmar, `components/hero/`
 * (AtoLivro, PercursoBook, LivroAnimado, ato-livro.module.css,
 * livro-animado.module.css) e a mídia podem ser apagados junto.
 */
export default function Home() {
  return (
    <>
      <main>
        <CenaEntrada />
      </main>
      <Footer />
    </>
  );
}
