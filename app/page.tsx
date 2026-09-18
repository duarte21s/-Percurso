import { CenaEntrada } from "@/components/hero/CenaEntrada";

/**
 * A home fica fora do grupo (site), que traz nav, avisos e barra de leitura —
 * a abertura precisa da tela inteira, sem casca.
 *
 * UM ato E MAIS NADA: a página é a sequência cinematográfica, do topo ao fim.
 * O rodapé saiu daqui. Ele vinha logo abaixo do hero e, como a abertura ocupa
 * exatamente uma tela, bastava rolar um dedo para a faixa clara dele invadir a
 * cena do filme — foi o que apareceu na captura do iPhone. Com ele fora, o
 * documento tem a altura da viewport e não há o que rolar: a abertura é a tela
 * inteira e termina onde a tela termina.
 *
 * O componente `Footer` continua existindo e em uso pelo grupo (site); o que
 * mudou foi só quem o monta. A navegação da home não depende dele — a
 * `NavCinema` já leva a Sobre, Como funciona, Recursos, Faculdades, Dúvidas e
 * Contato.
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
    <main>
      <CenaEntrada />
    </main>
  );
}
