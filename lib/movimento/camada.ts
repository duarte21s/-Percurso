/* Sinal compartilhado: existe uma camada ocupando a tela.
 *
 * "Camada" aqui é a folha do menu do celular — qualquer coisa que cubra a
 * página, trave a rolagem e vire o assunto da tela. Quem a abre não precisa
 * saber quem está por baixo; quem está por baixo não precisa saber quem
 * abriu. Os dois lados falam com este módulo e com mais ninguém.
 *
 * Existe por um motivo medido: no celular, a abertura toca quatro vídeos em
 * sequência, e decodificar vídeo enquanto a folha corre a mola disputa o
 * mesmo quadro. A folha perde — é ela que o dedo está segurando. Pausar o
 * filme enquanto o menu está no ar devolve o quadro a quem está sendo tocado,
 * e o filme volta de onde parou quando a folha sai.
 *
 * É um contador, e não um booleano, porque `ocuparCamada` pode ser chamada
 * duas vezes antes da primeira soltar — o React chama efeito e limpeza em
 * pares, mas não garante a ordem entre componentes diferentes. Com booleano,
 * a primeira liberação apagaria a camada da segunda.
 */

let ocupadas = 0;
const ouvintes = new Set<(aberta: boolean) => void>();

function avisar() {
  const aberta = ocupadas > 0;
  ouvintes.forEach((ouvinte) => ouvinte(aberta));
}

/** Há alguma camada na tela agora. */
export function camadaAberta() {
  return ocupadas > 0;
}

/**
 * Registra uma camada e devolve a função que a solta.
 *
 * A liberação é idempotente de propósito: chamar duas vezes não derruba a
 * contagem de mais ninguém. Sem isso, uma limpeza repetida — e o React repete
 * limpezas — zeraria a camada de outro componente.
 */
export function ocuparCamada(): () => void {
  ocupadas++;
  if (ocupadas === 1) avisar();

  let solta = false;
  return () => {
    if (solta) return;
    solta = true;
    ocupadas--;
    if (ocupadas === 0) avisar();
  };
}

/** Observa entrada e saída de camada. Devolve a função que para de observar. */
export function observarCamada(ouvinte: (aberta: boolean) => void): () => void {
  ouvintes.add(ouvinte);
  return () => {
    ouvintes.delete(ouvinte);
  };
}

/** Só para os testes: devolve o módulo ao estado inicial entre casos. */
export function zerarCamadas() {
  ocupadas = 0;
  ouvintes.clear();
}
