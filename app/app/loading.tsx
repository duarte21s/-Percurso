import { EsqueletoDePagina } from "@/components/layout/EsqueletoDePagina";

/**
 * O instante entre o clique numa aba da área de estudos e a página nova.
 *
 * Toda página daqui é dinâmica — depende da sessão —, e rota dinâmica sem
 * `loading` não é pré-carregada: o clique esperava o servidor montar a página
 * INTEIRA antes de mudar qualquer pixel, e nem a aba acendia. Medido em
 * produção: de 0,5 a 1,1 s de tela parada nas abas comuns, e perto de 5 s em
 * Matérias. Com este arquivo, o Next pré-carrega a casca até aqui, troca a
 * tela no ato do clique, e o conteúdo entra quando chega.
 *
 * Só importa o esqueleto, que é HTML puro — ver EsqueletoDePagina sobre o
 * script sem nonce que um `loading` com componente de cliente traria.
 *
 * Não esconde erro: o `error.tsx` desta pasta fica fora desta fronteira, e
 * uma falha da página continua caindo nele.
 */
export default function Carregando() {
  return <EsqueletoDePagina />;
}
