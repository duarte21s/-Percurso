# Home / marketing — motion pass (design da Apple)

**Data:** 2026-08-28 · **Sub-projeto:** 8 de 8 (último) · **Depende de:** Fundações.
**Estado:** CONCLUÍDO — quase no-op (ver abaixo).

## Achado

A home **já tinha** um sistema de revelar-ao-rolar bem-feito e alinhado com a
Apple: `components/ui/Revelar.tsx` (IntersectionObserver, observa uma vez e
para, `atraso` 1–6 para cascata) + CSS `.rv` / `.rv.is-in` em
`app/globals.css:1482` (`opacity 0→1`, `translateY(20px)→0`, `transition .75s
var(--ease)`, com `prefers-reduced-motion` tratado na linha ~1556). Usado em 9
das 12 seções.

Adicionar uma camada de `motion` por cima (o `RevelaAoRolar` que cheguei a
escrever) **duplicaria** o efeito e iria contra "seguir os padrões
existentes" (AGENTS.md). Foi descartado e o arquivo removido.

## Feito

- `app/(site)/page.tsx`: envolver `<Numeros>` (a única seção estática entre
  `<Marquee>` e `<Materias>` que não revelava) no `<Revelar como="div">`
  existente. Consistência, sem componente novo.

## Não mexido (de propósito)

- `Revelar` / `.rv` — já é o padrão certo. A curva `.75s var(--ease)`
  (`cubic-bezier(0.22, 1, 0.36, 1)`) é a mesma do resto do site.
- Hero (scroll-lock do livro, bespoke, funciona).
- FAQ (`grid-template-rows` CSS ok).
- CTA (`<Link className="btn">` já tem `:active` no globals.css).

## Verificação
`tsc` + `build` limpos; `/` renderiza as 12 seções, hero presente, 32
elementos `.rv` (inclui o novo em `<Numeros>`); console + servidor limpos.

## Notas
- Repo sem commits.
