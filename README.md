# BJJ LT — Site V3 (experimental)

Site pessoal de captação de alunos para as aulas de jiu-jitsu do **Leo Thaylor**, com atendimento presencial no **Studio TRION** (Anil, Rio de Janeiro).

## Estado
Primeira versão funcional para avaliação visual, copy e mobile. **Não é o site oficial.** A produção permanece intacta em [aulas-jiu-jitsu](https://github.com/leothaylor/aulas-jiu-jitsu).

## Publicar no GitHub Pages
1. Neste repositório, acesse **Settings → Pages**.
2. Em **Build and deployment**, escolha **Deploy from a branch**.
3. Selecione **main** e **/(root)**. Salve.
4. O endereço será https://leothaylor.github.io/aulas-jiu-jitsu-v3/ após o primeiro deploy.

Não há build, Node.js ou dependências JavaScript obrigatórias: basta servir index.html.

## Arquitetura
- index.html — Home, sem frameworks de runtime
- styles.css — design system monocromático e estilos responsivos
- script.js — menu mobile, progresso de scroll, parallax discreto, reveals e carrossel
- favicon.svg — monograma LT
- .nojekyll — garante publicação estática no GitHub Pages

## Critérios de conteúdo e fidelidade
- Número pessoal do professor, localização e horário recuperados da V2 existente.
- Relatos publicados na V2 foram reaproveitados, sem inventar alunos ou resultados.
- Não há promessa de emagrecimento. O texto utiliza "pode contribuir" e contextualiza hábitos e regularidade.
- Sem scripts de GA4, Meta Pixel ou Clarity na versão experimental. Quando houver migração, configurar tracking com consentimento e revisão das UTMs.
- A Área do Aluno continua hospedada na V2, acessada por link.
- **Imagens estão referenciadas por URLs públicas da V2**, para evitar cópias e permitir desenvolver a V3 sem alterar o repositório antigo. Antes de substituir a produção, copiar as fotos ao próprio repositório da V3 e revisar direitos, consentimentos e imagens específicas.
- Evite publicar como site oficial antes de validar todas as informações, fotos, depoimentos, CTAs e mobile.

## Referências de design
Gracie Kore para organização comercial; piloto Studio TRION para critérios de fluidez; marca pessoal Leo Thaylor para posicionamento próprio. Identidade monocromática independente, sem copiar layouts dessas fontes.

## Acessibilidade e desempenho
Semântica HTML, skip-link, foco visível, menu com aria-expanded, redução de movimento e lazy-loading fora do hero. O script funciona sem bibliotecas externas.