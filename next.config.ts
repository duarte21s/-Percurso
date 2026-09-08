import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  /* Cabeçalhos que não dependem da requisição. A CSP fica no proxy porque usa
     um nonce novo por página; estes cobrem navegadores antigos e reduzem a
     superfície de ataques comuns sem interferir no Supabase ou no OAuth. */
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value:
              "camera=(), geolocation=(), microphone=(), payment=(), usb=()",
          },
          { key: "X-Permitted-Cross-Domain-Policies", value: "none" },
        ],
      },
    ];
  },

  async redirects() {
    return [
      /* Rotas antigas das ferramentas de estudo → nova área autenticada /app.
         Temporário (307) enquanto a reestruturação assenta; vira permanente
         depois. Links, bookmarks e o histórico do usuário continuam valendo. */
      { source: "/painel", destination: "/app", permanent: false },
      { source: "/estudar", destination: "/app/questoes", permanent: false },
      { source: "/provas", destination: "/app/simulados", permanent: false },
      { source: "/provas/:ano", destination: "/app/simulados/:ano", permanent: false },
      { source: "/redacao", destination: "/app/redacao", permanent: false },
      { source: "/redacao/:tema", destination: "/app/redacao/:tema", permanent: false },

      /* Aliases institucionais para a tela de acesso (/entrar continua sendo a
         implementação real, com a lógica de visitante e ?proximo=). */
      { source: "/login", destination: "/entrar", permanent: false },
      { source: "/cadastro", destination: "/entrar?modo=criar", permanent: false },
    ];
  },
};

export default nextConfig;
