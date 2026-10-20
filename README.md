# Leo Thaylor | Site experimental V3

Redesign integral, reconstruído em 20/10/2026. A V2 oficial em https://leothaylor.github.io/aulas-jiu-jitsu/ não foi modificada.

## O que mudou

- Hero assimétrica clara, foto em arco, título com entrada cinética e selo circular.
- Seção de benefícios com foto sticky e alternância sincronizada à rolagem no desktop; leitura natural e fotos intercaladas no celular.
- Seção fotográfica imersiva com parallax e mensagem central.
- Progressão visual do método; retrato em arco e galeria assimétrica do Studio TRION com reveal.
- Depoimentos reais em trilho horizontal, FAQ e CTAs pelo WhatsApp.

## Stack e deploy

HTML/CSS/JS, GSAP 3.12.5 + ScrollTrigger e Lenis por CDN; fallbacks sem bibliotecas. GitHub Pages: main / (root). Sem build.

## Notas

- Sem rastreamento ativo na V3; noindex no HTML.
- Imagens temporariamente referenciadas às URLs públicas V2 e TRION, para não alterar a produção nem duplicar acervo nesta etapa.
- Revisar layout, textos e fotos no celular e desktop antes de considerar finalizada.
- Horários seg/qua/sex 10h–11h30 e endereço da TRION conforme sites existentes.
- CTAs não prometem gratuidade; aula experimental deve ser confirmada.
- Área do Aluno continua no site oficial V2.


## Revisão após feedback visual
- Removidos selo circular da hero, faixa animada de palavras e seção fotográfica sem função.
- Método passou a ter números tipográficos, sem ícones decorativos.
- Copy revisada em títulos e seções principais para reduzir slogans e fórmulas genéricas.
- Na área da TRION, carrossel preparado em assets/cronogramas/. O usuário faz upload direto dos arquivos de cada dia.
- Sem artes disponíveis, há um fallback fotográfico. Não exibir imagens quebradas.
- O carrossel mostra os horários gerais do Studio TRION. A grade específica do professor é exibida separadamente.

## Interação das fotografias
- No computador, as fotos ficam coloridas ao passar o mouse e retornam ao preto e branco ao sair.
- No celular, a cor aparece enquanto o dedo estiver sobre a foto, inclusive durante o movimento, voltando ao padrão ao retirar o dedo.
- A cópia, layout e artes de programação da TRION permanecem inalterados.
- A transição respeita a preferência por movimento reduzido.
