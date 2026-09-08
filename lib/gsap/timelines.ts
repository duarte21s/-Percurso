import { gsap } from "./registro";
import { EASE, DUR } from "./vocabulario";

/* =========================================================================
   Timelines reutilizáveis. São fábricas: recebem alvo(s) e devolvem um
   Timeline do GSAP. Quem chama controla — play/reverse/kill.

   Só entra aqui o que é reusado de fato. As demais animações do projeto são
   reinterpretadas caso a caso dentro do próprio componente (é o "feel" do
   GSAP que se quer, não um catálogo de helpers genéricos).

   Convenções:
   - `autoAlpha` no lugar de `opacity` (o GSAP também cuida do `visibility`,
     então o elemento sai da árvore de foco quando invisível).
   - transformas + `autoAlpha` + `filter` — nada que dispare layout.
   ========================================================================= */

type Alvo = gsap.TweenTarget;

/**
 * Superfície de vidro que CHEGA: blur + escala + opacidade, coreografados
 * num respiro só. Para menus e popovers ancorados num gatilho. Timeline
 * PAUSADA e com o estado final em `progress(1)` — quem chama dá `.play()`
 * para abrir e `.reverse()` para fechar (o mesmo objeto, sem recriar). Ver
 * `usarTimelineAberto`.
 *
 * `origem` é o `transformOrigin` (padrão: topo-centro). Passe `"100% 0%"`
 * para materializar a partir do canto superior direito.
 */
export function tlMaterializa(
  alvo: Alvo,
  { origem = "50% 0%" }: { origem?: string } = {}
): gsap.core.Timeline {
  const tl = gsap.timeline({ paused: true });
  tl.set(alvo, { transformOrigin: origem, willChange: "transform, filter" });
  tl.fromTo(
    alvo,
    { autoAlpha: 0, scale: 0.94, filter: "blur(10px)" },
    {
      autoAlpha: 1,
      scale: 1,
      filter: "blur(0px)",
      duration: DUR.sheet,
      ease: EASE.assenta,
    }
  );
  return tl;
}
