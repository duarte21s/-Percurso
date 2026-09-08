import Link from "next/link";
import { Revelar } from "@/components/ui/Revelar";

export function CtaFinal() {
  return (
    <section className="section">
      <div className="wrap">
        <Revelar como="div" className="cta">
          <h2>
            A página vira quando
            <br />
            você <em>decide</em> virar.
          </h2>
          <p>
            Comece pelo diagnóstico, monte a semana e deixe o percurso te levar
            até a vaga.
          </p>
          <div className="btns">
            <Link href="/cadastro" className="btn btn-primary">
              Criar minha conta <span className="arrow">→</span>
            </Link>
            <Link href="/login" className="btn">
              Já tenho conta
            </Link>
          </div>
          <p className="fine">Sem cartão. Sem compromisso. Só o próximo passo.</p>
        </Revelar>
      </div>
    </section>
  );
}
