import Link from "next/link";
import { Icone } from "@/components/ui/Icone";

/* Cada href foi conferido contra as rotas públicas de app/(site)/ e os `id=`
   das seções da home. As ferramentas de estudo agora vivem sob /app e não
   aparecem aqui: o rodapé é do site público. */
const COLUNAS = [
  {
    titulo: "A plataforma",
    itens: [
      { href: "/como-funciona", rotulo: "Como funciona" },
      { href: "/recursos", rotulo: "Recursos" },
      { href: "/cronograma", rotulo: "Cronograma" },
      { href: "/faculdades", rotulo: "Faculdades" },
    ],
  },
  {
    titulo: "Conhecer",
    itens: [
      { href: "/sobre", rotulo: "Sobre o Percurso" },
      { href: "/duvidas", rotulo: "Dúvidas frequentes" },
      { href: "/contato", rotulo: "Contato" },
    ],
  },
  {
    titulo: "Conta",
    itens: [
      { href: "/login", rotulo: "Entrar" },
      { href: "/cadastro", rotulo: "Criar conta" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <Link href="/" className="brand">
            <span className="brand-mark">
              <Icone nome="marca" tracoLargura={1.7} />
            </span>
            Percurso <small>Estudos</small>
          </Link>
          <p>
            Plataforma de estudos para quem tem um objetivo com data marcada:
            ENEM, vestibulares, concursos e a escola de todo dia.
          </p>
        </div>

        {COLUNAS.map((c) => (
          <div key={c.titulo}>
            <h4>{c.titulo}</h4>
            <ul>
              {c.itens.map((i) => (
                <li key={i.rotulo}>
                  <Link href={i.href}>{i.rotulo}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="wrap footer-bottom">
        <span>
          © {new Date().getFullYear()} Percurso Estudos. Projeto demonstrativo.
        </span>
        <span>Feito para quem estuda no Brasil.</span>
      </div>
    </footer>
  );
}
