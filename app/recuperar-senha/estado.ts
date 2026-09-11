/* Um arquivo "use server" só pode exportar funções async — por isso o tipo e
   o valor inicial da Server Action moram aqui, e não em acoes.ts. */

export interface EstadoRecuperacao {
  erro?: string;
  /** O pedido foi aceito. Não diz que a conta existe — ver acoes.ts. */
  enviado?: true;
}

export const ESTADO_INICIAL_RECUPERACAO: EstadoRecuperacao = {};
