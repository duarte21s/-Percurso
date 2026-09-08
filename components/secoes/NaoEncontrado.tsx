import Link from "next/link";

interface Props {
  /** Sem o layout do grupo (site) não há Nav: a marca precisa aparecer no
      próprio conteúdo, senão a página fica sem nenhuma saída visível. */
  comMarca?: boolean;
}

/**
 * Conteúdo da página 404, compartilhado pelos dois boundaries.
 *
 * São dois porque o Next resolve `not-found` por segmento: o de `(site)`
 * atende quem chamou `notFound()` dentro do grupo (um perfil que não existe,
 * por exemplo) e herda Nav e rodapé; o da raiz atende endereço que não casa
 * com rota nenhuma, e roda sem layout. O texto e a forma são os mesmos nos
 * dois — só a moldura muda.
 */
export function NaoEncontrado({ comMarca = false }: Props) {
  return (
    <main className="section" style={{ paddingTop: comMarca ? 96 : 150 }}>
      <div className="wrap head-centro" style={{ maxWidth: 560 }}>
        {comMarca && (
          <Link
            href="/"
            className="brand"
            style={{ marginBottom: 34, justifyContent: "center" }}
          >
            Percurso
          </Link>
        )}

        <span className="eyebrow">Erro 404</span>
        <h1 className="title" style={{ marginTop: 8 }}>
          Não achamos esta página.
        </h1>
        <p className="lede">
          O endereço pode estar errado, ou o conteúdo saiu do ar. Nada do seu
          progresso se perdeu.
        </p>

        <div
          className="uni-tools"
          style={{ marginTop: 26, justifyContent: "center" }}
        >
          <Link href="/" className="btn btn-primary">
            Voltar ao início
          </Link>
          <Link href="/comunidade" className="btn btn-ghost">
            Ir para a Comunidade
          </Link>
        </div>
      </div>
    </main>
  );
}
