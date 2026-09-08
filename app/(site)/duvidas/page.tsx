import type { Metadata } from "next";
import { Faq } from "@/components/secoes/Faq";

export const metadata: Metadata = {
  title: "Dúvidas frequentes · Percurso",
  description:
    "As perguntas mais comuns sobre o Percurso: o que é, para quem, como funciona o cronograma, conta e recursos da plataforma.",
};

export default function PaginaDuvidas() {
  return (
    <main style={{ paddingTop: 120 }}>
      <Faq abertura />
    </main>
  );
}
