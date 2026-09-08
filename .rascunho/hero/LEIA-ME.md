# Hero — livro que abre com o scroll

## O que está no ar

`public/media/hero-livro.mp4` — 1920×1080, 60fps, 4,97s, 5,6 MB.
Todos os 298 quadros são keyframe (I-frame).

`public/media/hero-closed.png` — primeiro quadro. Pôster do hero enquanto o
vídeo não carrega.
`public/media/hero-open.png` — último quadro. Usado em `app/entrar/page.tsx`.

## Por que todo quadro precisa ser keyframe

O hero não reproduz o vídeo: ele escreve `v.currentTime` a partir da posição
do scroll (`components/hero/Hero.tsx`). Com keyframes esparsos, cada busca
obriga o navegador a decodificar desde o keyframe anterior.

Medido neste projeto, rolagem sequencial, mediana do custo de busca:

| arquivo                        | keyframes | busca  |
|--------------------------------|-----------|--------|
| saída crua do Kling            | 1 de 121  | 175 ms |
| mesma saída, reencodada        | 121 de 121| 14 ms  |

175 ms por busca dá ~6 atualizações por segundo: o livro vira slideshow.

## Como refazer

Não há ffmpeg nesta máquina. Use o sandbox do Higgsfield (`sandbox_exec`),
que já vem com ffmpeg. Passos, a partir da URL de um vídeo gerado:

```bash
# 1. 24fps -> 60fps (o Kling entrega 24fps; o hero espera 60)
ffmpeg -i src.mp4 \
  -vf "minterpolate=fps=60:mi_mode=mci:mc_mode=aobmc:me_mode=bidir:vsbmc=1" \
  -an -c:v libx264 -preset slow -crf 25 \
  -g 1 -keyint_min 1 -sc_threshold 0 -bf 0 \
  -pix_fmt yuv420p -movflags +faststart out.mp4

# 2. pôsteres
ffmpeg -i src.mp4 -vf "select=eq(n\,0)" -vframes 1 hero-closed.png
ffmpeg -sseof -0.1 -i src.mp4 -vframes 1 -update 1 hero-open.png
```

A interpolação leva ~2 min em 1080p. Rode com `background:true`.

## O que checar num vídeo novo antes de subir

O movimento tem que **completar e parar** dentro do clipe. Se ele ainda
estiver acelerando no último quadro, o livro fica travado no meio do gesto
quando a pessoa termina de rolar.

Medida da distribuição do movimento, em 10 fatias:

```bash
ffmpeg -i v.mp4 -vf "select='gt(scene,0)',metadata=print:file=-" -an -f null - \
  2>/dev/null | grep lavfi.scene_score | awk -F= '{print $2}'
```

No ar hoje (take A): `1.3 1.9 5.4 13.3 16.1 21.8 17.7 9.7 11.1 1.6` — sobe,
sustenta o movimento por boa parte do clipe (são várias páginas virando) e
para na última fatia.
Ruim (primeira tentativa): `3.5 1.7 2.6 2.6 4.1 3.9 6.2 11.2 26.5 37.8` —
acelera até o fim e corta em pleno movimento.

O que consertou isso no prompt foi dar os marcos em **porcentagem do clipe**
e exigir repouso explícito no fim. Pedir "constant even speed" foi ignorado
nas duas vezes.

## Enquadramento: como medir se a câmera afastou

Pedido de "afasta a câmera" não dá para conferir no olho entre duas takes.
Meça a caixa do livro como fração do quadro, no último quadro do clipe:

```python
from PIL import Image; import numpy as np
a = np.asarray(Image.open("fim.png").convert("L"), dtype=float)
H,W = a.shape
m = a > a.max()*0.30          # o livro é o que é claro sobre o fundo quase preto
ys,xs = np.where(m)
print(f"{(xs.max()-xs.min())/W*100:.1f}% da largura, "
      f"{(ys.max()-ys.min())/H*100:.1f}% da altura")
```

Referência das takes já geradas:

| take | largura | altura | veredito |
|------|---------|--------|----------|
| capa-só (v2) | 79,8% | 78,0% | enquadramento original |
| **A** (no ar) | 74,8% | **60,0%** | afastada de verdade |
| B | 99,8% | 74,4% | mais fechado que o original |

B tinha o melhor ritmo das duas, mas encostava nas bordas — a métrica pegou
o que a impressão visual não pegava.

## Interpolação com páginas virando

Páginas finas girando rápido são o caso em que `minterpolate` mais arrisca
fantasma. Depois de interpolar, extraia ~8 quadros CONSECUTIVOS do trecho
mais rápido e olhe:

```bash
for i in $(seq 0 7); do
  ffmpeg -y -i out.mp4 -vf "select=eq(n\,$((165+i)))" -vframes 1 -update 1 t_$i.png
done
```

Borrão de movimento nas páginas é do original e é aceitável. O que reprova é
borda duplicada, rasgo, ou o corpo do livro/lombada deformando entre quadros
vizinhos. Na take A não houve nenhum dos três.

## Arquivos aqui

- `livro-A.mp4` — take A crua (24fps, 1 keyframe).
- `livro-A-60fps.mp4` — **a que está no ar**. 60fps, 298 quadros, todos I.
- `closed-A.png`, `open-A.png` — pôsteres que estão no ar.
- `livro-B.mp4` — take B crua. Ritmo ligeiramente melhor, enquadramento pior.
  Se um dia o pedido for "enche mais o quadro", é por aqui.
- `tira-A60.png` — os 8 quadros consecutivos da checagem de fantasma.
- `comparativo.png` — atual × A × B, 6 posições de rolagem cada.
- `livro-v1.mp4` — 1ª geração. Rejeitada: movimento todo no final.
- `v2-capa-so/` — a versão que abria só a capa, sem páginas virando.
- `anterior/` — o livro original do site, antes de tudo isso.

Para reverter para o livro original:
`cp .rascunho/hero/anterior/* public/media/`

Para voltar ao que abria só a capa:
`cp .rascunho/hero/v2-capa-so/livro-v2-60fps.mp4 public/media/hero-livro.mp4`
`cp .rascunho/hero/v2-capa-so/closed-v2.png public/media/hero-closed.png`
`cp .rascunho/hero/v2-capa-so/open-v2.png public/media/hero-open.png`

## Prompt que funcionou (Kling 3.0, mode pro, 5s, 16:9)

O que consertou o ritmo foi dizer os marcos em porcentagem do clipe e exigir
repouso no fim — "constant even speed" sozinho foi ignorado:

> ...the cover swings open with a smooth ease-in-ease-out motion — it is
> already halfway open by the midpoint of the clip, reaches fully open at 80
> percent of the clip, and then the book stays completely motionless and
> settled, wide open with both pages flat, for the entire final second.
