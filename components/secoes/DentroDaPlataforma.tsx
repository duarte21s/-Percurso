import Link from "next/link";
import { Revelar } from "@/components/ui/Revelar";
import css from "./demonstracao.module.css";

/**
 * Prévia estática das duas telas que respondem "para que serve isso":
 * a retomada do simulado e o gabarito que abre abaixo da resposta.
 *
 * É marcação real com o CSS real — não uma imagem de mockup. Quando o
 * simulado muda de aparência, esta seção muda junto.
 */
export function DentroDaPlataforma() {
  return (
    <section className="section" id="dentro">
      <div className="wrap">
        <div className="section-head">
          <Revelar como="div" className="head-left">
            <span className="eyebrow">Dentro da plataforma</span>
            <h2 className="title">
              É <em>assim</em> que você
              <br />
              vai ver na tela.
            </h2>
            <p className="lede">
              Duas telas, com a marcação e o CSS reais do site em vez de uma
              imagem de mockup: a que devolve em qual questão você parou, e a
              do resultado, com o gabarito comentado de cada questão.
            </p>
          </Revelar>
        </div>

        <div className={css.telas}>
          {/* ---- retomada ---- */}
          <Revelar className={css.tela} atraso={1}>
            <div className={css.telaBarra}>
              <i />
              Ao voltar ao simulado
            </div>
            <div className={css.telaCorpo}>
              <div className={css.retomada}>
                <div className={css.retomadaTitulo}>
                  Você parou na questão 07 de 12
                </div>
                <div className={css.retomadaTexto}>
                  6 de 12 respondidas, em Matemática. Quer continuar de onde
                  parou? O resultado aparece quando você responder todas.
                </div>
                <div className={css.retomadaBotoes}>
                  <span className={`${css.botaoFalso} ${css.botaoFalsoForte}`}>
                    Continuar da questão 07
                  </span>
                  <span className={css.botaoFalso}>Encerrar e escolher outro</span>
                </div>
              </div>
              <p className={css.telaLegenda}>
                O progresso fica na sua conta, não no navegador. Trocar de
                computador não perde nada.
              </p>
            </div>
          </Revelar>

          {/* ---- resultado da sessão ---- */}
          <Revelar className={css.tela} atraso={2}>
            <div className={css.telaBarra}>
              <i />
              No resultado da sessão
            </div>
            <div className={css.telaCorpo}>
              <div className={`${css.alternativa} ${css.alternativaErrada}`}>
                <span className={`${css.letra} ${css.letraErrada}`}>C</span>
                <span>4% maior que o preço original.</span>
              </div>
              <div className={`${css.alternativa} ${css.alternativaCerta}`}>
                <span className={`${css.letra} ${css.letraCerta}`}>B</span>
                <span>4% menor que o preço original.</span>
              </div>

              <div className={css.gabarito}>
                <strong>Alternativa B.</strong> Partindo de P: o aumento leva a
                1,20P. O desconto de 20% incide sobre esse valor: 1,20P × 0,80 =
                0,96P. Logo o preço final é 96% do original, ou seja, 4% menor.
                O erro clássico é somar e subtrair os percentuais, porque eles
                se aplicam a bases diferentes.
              </div>

              <p className={css.telaLegenda}>
                Ao finalizar a sessão, cada questão mostra a alternativa que
                você marcou, a correta destacada e o comentário que explica por
                que o distrator engana.
              </p>
            </div>
          </Revelar>
        </div>

        <Revelar como="div" atraso={3} className={css.telasRodape}>
          <Link href="/cadastro" className="btn btn-accent">
            Criar conta e ver funcionando <span className="arrow">→</span>
          </Link>
        </Revelar>
      </div>
    </section>
  );
}
