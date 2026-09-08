/* Um arquivo "use server" só pode exportar funções async — por isso o tipo e
   o valor inicial das Server Actions moram aqui, e não em acoes.ts. */

export interface EstadoAuth {
  erro?: string;
  aviso?: string;
}

export const ESTADO_INICIAL: EstadoAuth = {};
