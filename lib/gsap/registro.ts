"use client";

/* =========================================================================
   Ponto único de entrada do GSAP no projeto.

   Registra os plugins uma vez e reexporta `gsap`, `ScrollTrigger` e
   `useGSAP`. Todo componente de animação importa daqui — nunca de "gsap"
   direto — para o registro nunca ser esquecido e o tree-shaking ficar
   previsível.

   `useGSAP` é registrado como plugin para o `gsap.context` interno dele
   reverter tudo no unmount (essencial no React Strict Mode, que monta,
   desmonta e remonta).
   ========================================================================= */

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/* Defaults do projeto: quase toda animação de UI quer sair rápido e assentar
   suave. Casos que pedem outro ease sobrescrevem no próprio tween. */
gsap.defaults({ ease: "power3.out", duration: 0.45 });

/* ScrollTrigger: sem marcadores em produção; recalcula no resize com um
   pequeno debounce (o padrão já faz, mas deixamos explícito). */
ScrollTrigger.config({ ignoreMobileResize: true });

export { gsap, ScrollTrigger, useGSAP };
