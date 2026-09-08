import Link from "next/link";

/* Um botão, em lugar óbvio, para quem quer entender o site antes de ler a
 * página inteira.
 *
 * Fica logo abaixo da lede, e não no rodapé: no rodapé só chega quem já leu
 * tudo — ou seja, exatamente quem não precisava mais dele. Quem bate na página
 * sem saber o que o Percurso é decide nos primeiros segundos, e é ali que a
 * saída tem que estar.
 *
 * Um só, e primário. Dois botões lado a lado dividem a atenção e nenhum dos
 * dois é clicado.
 */
export function BotaoApresentacao({
  rotulo = "Ver o que é o Percurso",
}: {
  rotulo?: string;
}) {
  return (
    <div className="botao-apresentacao">
      <Link href="/apresentacao" className="btn btn-primary">
        {rotulo} <span className="arrow">→</span>
      </Link>
    </div>
  );
}
