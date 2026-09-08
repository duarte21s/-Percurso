/* =========================================================================
   Vocabulário de movimento — eases e durações com intenção.

   A skill apple-design pede ease escolhido por interação, nunca um valor
   genérico em tudo. Aqui cada nome diz o que a curva comunica; os
   componentes referenciam pelo nome, não pela string.

   Eases GSAP usados e por quê:
   - power3.out / power4.out  → entrada de UI: arranca e desacelera forte,
     a sensação de "chegou e parou" sem quicar.
   - power2.in / power3.in    → saída: acelera pra fora, some com pressa.
   - power1.inOut             → travessia simétrica (crossfade, troca).
   - back.out(n)              → algo que "assenta com peso": sheet, toast,
     nota — passa um tico do alvo e volta.
   - elastic.out(1, p)        → poucos casos, celebração forte.
   - expo.out                 → barra/preenchimento: quase instantâneo no
     início, cauda longa — lê como "encheu".
   - none                     → só onde o tempo é o scrub do ScrollTrigger.
   ========================================================================= */

export const EASE = {
  entrada: "power3.out",
  entradaSuave: "power2.out",
  entradaForte: "power4.out",
  saida: "power2.in",
  saidaForte: "power3.in",
  travessia: "power1.inOut",
  assenta: "back.out(1.5)",
  assentaForte: "back.out(2.4)",
  celebra: "elastic.out(1, 0.5)",
  enche: "expo.out",
  scrub: "none",
} as const;

export const DUR = {
  micro: 0.16, // pressão, hover — quase imperceptível
  curta: 0.28,
  base: 0.44,
  sheet: 0.5,
  longa: 0.7,
  enche: 0.9, // preenchimento de barra
} as const;

/** Stagger padrão de lista/grade (segundos entre itens). */
export const STAGGER = {
  grade: 0.05,
  lista: 0.07,
  cascata: 0.09,
} as const;
