-- =============================================================================
-- PROVAS — tempo com fonte de verdade no servidor e bloqueio progressivo
-- =============================================================================
--
-- POR QUE ISTO É SQL E NÃO CÓDIGO DE ROTA
--
-- O navegador carrega o Supabase com a chave anon e a sessão do próprio aluno.
-- A política de UPDATE de `simulados` liberava QUALQUER coluna para o dono da
-- linha, então bastava abrir o DevTools e chamar
--
--     supabase.from('simulados').update({ indice_atual: 0 }).eq('id', ...)
--
-- para voltar à questão 1 sem passar por rota nenhuma. Validar dentro de
-- /api/prova/* protege só quem usa a tela. Estas regras ficam no banco porque
-- é o único ponto por onde toda escrita passa, venha de onde vier.
--
-- REGRA DE TEMPO ADOTADA: o relógio corre mesmo com o aluno fora, como no
-- exame real. `iniciado_em` e `expira_em` são gravados na criação e ficam
-- imutáveis; o restante é sempre `expira_em - now()`, calculado no banco. Não
-- existe estado de tempo no cliente para adulterar, e o relógio da máquina do
-- aluno não participa da conta.
--
-- REGRA DE BLOQUEIO ADOTADA: avançou, travou. `indice_atual` é monotônico e
-- sobe de um em um; questão de índice menor está fechada. Um único inteiro
-- descreve o conjunto travado, e é trivial de validar.
--
-- Nada aqui toca o simulado de treino (`prova_id is null`), que continua com o
-- comportamento antigo de propósito: lá o gabarito abre na hora e voltar numa
-- questão faz parte do estudo.
-- =============================================================================

-- ------------------------------- colunas ------------------------------------

alter table public.simulados
  add column if not exists iniciado_em         timestamptz not null default now(),
  add column if not exists expira_em           timestamptz,
  add column if not exists finalizado_em       timestamptz,
  add column if not exists ultima_atividade_em timestamptz not null default now();

comment on column public.simulados.expira_em is
  'Instante em que a tentativa vence. Gravado na criação a partir de provas.tempo_minutos e imutável daí em diante — é a fonte de verdade do cronômetro.';
comment on column public.simulados.segundos is
  'Decorrido em segundos. DERIVADO: o gatilho reescreve a cada update a partir de now() - iniciado_em. O valor que o cliente enviar é ignorado.';

/* Tentativas que já existiam não têm expira_em. Preenche a partir do início
   real delas, para não zerar o relógio de quem está no meio de uma prova. */
update public.simulados s
   set expira_em = coalesce(s.expira_em, s.criado_em + make_interval(mins => p.tempo_minutos)),
       iniciado_em = least(s.iniciado_em, s.criado_em)
  from public.provas p
 where s.prova_id = p.id
   and s.expira_em is null;

create index if not exists simulados_expira_idx
  on public.simulados (status, expira_em)
  where prova_id is not null;

-- --------------------------- guarda da tentativa ----------------------------

create or replace function public.prova_guarda_tentativa()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  total int;
begin
  -- Simulado de treino segue as regras antigas.
  if new.prova_id is null then
    return new;
  end if;

  total := coalesce(array_length(old.questao_ids, 1), 0);

  -- O que define a tentativa não se reescreve.
  if new.iniciado_em is distinct from old.iniciado_em then
    raise exception 'prova: iniciado_em é imutável';
  end if;
  if new.expira_em is distinct from old.expira_em then
    raise exception 'prova: expira_em é imutável';
  end if;
  if new.questao_ids is distinct from old.questao_ids then
    raise exception 'prova: a ordem das questões é imutável';
  end if;
  if new.usuario_id is distinct from old.usuario_id then
    raise exception 'prova: a tentativa não muda de dono';
  end if;

  -- Encerrada é encerrada: nem reabre, nem aceita mais nada.
  if old.status = 'concluido' then
    raise exception 'prova: tentativa encerrada é imutável';
  end if;

  -- A questão atual só avança, e de uma em uma. Sem isto, um update direto
  -- devolveria o aluno para a questão 1 com tudo destravado.
  if new.indice_atual < old.indice_atual then
    raise exception 'prova: a questão atual não retrocede';
  end if;
  if new.indice_atual > old.indice_atual + 1 then
    raise exception 'prova: a questão atual avança de uma em uma';
  end if;
  if new.indice_atual > total then
    raise exception 'prova: índice além do fim da prova';
  end if;

  -- Vencida, a única transição aceita é para concluída.
  if old.expira_em is not null
     and now() > old.expira_em
     and new.status <> 'concluido' then
    raise exception 'prova: tempo esgotado';
  end if;

  -- Decorrido é sempre derivado, nunca informado.
  new.segundos := greatest(
    0,
    floor(extract(epoch from (least(now(), coalesce(old.expira_em, now())) - old.iniciado_em)))::int
  );

  if new.status = 'concluido' and old.status <> 'concluido' then
    new.finalizado_em := now();
  end if;

  new.ultima_atividade_em := now();
  new.atualizado_em := now();
  return new;
end;
$$;

drop trigger if exists prova_guarda_tentativa_tg on public.simulados;
create trigger prova_guarda_tentativa_tg
  before update on public.simulados
  for each row execute function public.prova_guarda_tentativa();

-- Na criação, o vencimento sai de provas.tempo_minutos — nunca do cliente.
create or replace function public.prova_define_vencimento()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  minutos int;
begin
  if new.prova_id is null then
    return new;
  end if;
  select tempo_minutos into minutos from public.provas where id = new.prova_id;
  new.iniciado_em := now();
  new.expira_em   := now() + make_interval(mins => coalesce(minutos, 660));
  new.segundos    := 0;
  new.indice_atual := 0;
  new.ultima_atividade_em := now();
  return new;
end;
$$;

drop trigger if exists prova_define_vencimento_tg on public.simulados;
create trigger prova_define_vencimento_tg
  before insert on public.simulados
  for each row execute function public.prova_define_vencimento();

-- ---------------------------- guarda da resposta ----------------------------

create or replace function public.prova_guarda_resposta()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  s public.simulados%rowtype;
begin
  select * into s from public.simulados where id = new.simulado_id;
  if not found then
    raise exception 'prova: tentativa inexistente';
  end if;

  -- Simulado de treino: sem bloqueio, como antes.
  if s.prova_id is null then
    return new;
  end if;

  if s.status <> 'em_andamento' then
    raise exception 'prova: tentativa encerrada';
  end if;
  if s.expira_em is not null and now() > s.expira_em then
    raise exception 'prova: tempo esgotado';
  end if;

  /* Só a questão atual aceita marcação. Arrays no Postgres começam em 1, daí
     o +1. É esta linha que impede alterar a resposta de uma questão já
     travada, inclusive por chamada direta ao PostgREST. */
  if new.questao_id is distinct from s.questao_ids[s.indice_atual + 1] then
    raise exception 'prova: só a questão atual pode ser respondida';
  end if;

  return new;
end;
$$;

drop trigger if exists prova_guarda_resposta_tg on public.respostas;
create trigger prova_guarda_resposta_tg
  before insert or update on public.respostas
  for each row execute function public.prova_guarda_resposta();

-- Apagar resposta de questão travada também não pode (era o caminho do
-- "Desmarcar" para burlar o bloqueio: apaga a antiga e grava outra).
create or replace function public.prova_guarda_delete_resposta()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  s public.simulados%rowtype;
begin
  select * into s from public.simulados where id = old.simulado_id;
  if not found or s.prova_id is null then
    return old;
  end if;
  if s.status <> 'em_andamento' then
    raise exception 'prova: tentativa encerrada';
  end if;
  if old.questao_id is distinct from s.questao_ids[s.indice_atual + 1] then
    raise exception 'prova: só a questão atual pode ser desmarcada';
  end if;
  return old;
end;
$$;

drop trigger if exists prova_guarda_delete_resposta_tg on public.respostas;
create trigger prova_guarda_delete_resposta_tg
  before delete on public.respostas
  for each row execute function public.prova_guarda_delete_resposta();

-- ------------------------------- leitura ------------------------------------

/* Estado da tentativa numa chamada só, com o tempo calculado NO BANCO. O
   cliente nunca subtrai nada: ele recebe quantos segundos faltam e só desenha.
   `security invoker` de propósito — a RLS de `simulados` continua valendo, e
   ninguém lê a tentativa de outra pessoa. */
create or replace function public.prova_estado(p_simulado_id uuid)
returns table (
  simulado_id      uuid,
  status           text,
  indice_atual     smallint,
  total_questoes   int,
  restante_segundos int,
  expirada         boolean,
  iniciado_em      timestamptz,
  expira_em        timestamptz
)
language sql
stable
security invoker
set search_path = public
as $$
  select
    s.id,
    s.status,
    s.indice_atual,
    coalesce(array_length(s.questao_ids, 1), 0),
    greatest(0, floor(extract(epoch from (s.expira_em - now()))))::int,
    (s.expira_em is not null and now() > s.expira_em),
    s.iniciado_em,
    s.expira_em
  from public.simulados s
  where s.id = p_simulado_id;
$$;

grant execute on function public.prova_estado(uuid) to authenticated;
