/**
 * `<script>` inline que roda durante o parse do HTML, antes do primeiro paint
 * — usado para aplicar o tema salvo sem flash (ver app/layout.tsx).
 *
 * No servidor sai como `text/javascript` (executa). No cliente sai como
 * `text/plain` (inerte) — assim o React para de avisar "script tag while
 * rendering" e o script não roda de novo em navegação client-side.
 * `suppressHydrationWarning` cobre a diferença de `type` entre os dois.
 *
 * Padrão recomendado pela doc do Next: guides/preventing-flash-before-hydration.
 */
export function ScriptInline({
  html,
  nonce,
}: {
  html: string;
  nonce?: string | null;
}) {
  return (
    <script
      type={typeof window === "undefined" ? "text/javascript" : "text/plain"}
      nonce={nonce ?? undefined}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
