# Portfólio pessoal — Pedro Cristóvão

## Contexto

Site pessoal de portfólio, inspirado no layout de referência (PDF `screencapture-antonio-launch-now-dev`), mantendo as seções: projetos, experiências, tools/stack e contribuições do GitHub, mais uma seção extra de "Coding with music" (escopo aprovado pelo usuário na fase de brainstorming).

## Stack

- Next.js 15 (App Router), TypeScript, Tailwind CSS.
- Sem backend próprio, sem banco de dados. Todo conteúdo é estático (`data/content.ts`), exceto o heatmap do GitHub, que é buscado em runtime de uma API pública.
- Deploy alvo: Vercel (não faz parte deste escopo — apenas o código fica pronto para deploy).

## Estrutura de arquivos

```
app/
  layout.tsx        (fontes, metadata, tema dark fixo)
  page.tsx           (compõe as seções na ordem abaixo)
  globals.css
components/
  header.tsx          (nome, cargo, bio, links sociais)
  projects.tsx         (grid de cards de projetos)
  experience.tsx        (timeline de experiências)
  tools.tsx              (grid de stack por categoria)
  contributions.tsx        (heatmap GitHub, Server Component)
  coding-with-music.tsx      (cards de faixas)
  contact.tsx + footer.tsx
data/
  content.ts    (profile, projects[], experience[], tools, tracks[])
lib/
  github.ts     (fetch + tipagem da API de contribuições)
```

## Conteúdo (fonte: currículo `Curriculo_dev_2026.pdf`)

- **Perfil**: Pedro Cristóvão · "Full Stack Developer | Back-end | Automação RPA" · bio = texto do "Sobre mim" do currículo, resumido. Links: GitHub `dev2Pedro`, LinkedIn `devbypedro`, e-mail `itspedrodev@gmail.com`.
- **Experiência**: Desenvolvedor Full Stack, Servfaz, 2024–atual, bullets do currículo (SSO/auditoria, frota/reservas, app Conecta, Odoo, automações RPA, n8n).
- **Projetos**:
  - Servfaz (sem link, `internal: true`): ServAuth (SSO), Conecta (frota/reservas + app), Odoo/CRM, Automações eSocial/FGTS/Edenred/Unico.
  - Pessoais (com link `github.com/dev2Pedro/...`, thumbnail placeholder): Upload.ai, Habits, Christmas Elderly/API, Automação de relatório mensal, Portfólio pessoal (versão anterior em Vite).
- **Tools**: agrupadas por categoria (Front-end, Back-end, Mobile, RPA & Automação, ERP & Dados, Ferramentas) exatamente como listado no currículo, renderizadas com ícones de `react-icons/si` (ou `simple-icons` via CDN local — decidir na implementação conforme disponibilidade do pacote).

## GitHub Contributions

- Fonte: `https://github-contributions-api.jogruber.de/v4/dev2Pedro` (API pública, sem autenticação, sem chave).
- Fetch em Server Component com `revalidate: 3600` (ISR de 1h).
- Se o fetch falhar (erro de rede, rate limit, resposta inesperada): renderizar mensagem de fallback simples ("Não foi possível carregar as contribuições agora") em vez de quebrar a página. Não usar dado mockado como fallback.

## Coding with Music

Lista fixa em `data/content.ts`, sem integração com Spotify API (não há client id/secret no escopo). Cada card mostra:

- Título da faixa + artista.
- Capa: placeholder (gradiente com iniciais, sem imagem real).
- Botão "Ouvir" → `https://open.spotify.com/search/<faixa>%20<artista>` (link de busca, não embed).

Faixas (fonte: usuário):

- Wave to Earth: Pueblo, Nouvelle Vague, Holyland, Purple Lake, Sing It All Again
- Frank Ocean: Self Control, Seigfried, Crack Rock, Think About You, Pink Matter, Pyramids, Nights
- Daniel Caesar: Get You, Hold Me Down, Japanese Denim, Violet, Streetcar, Disillusioned

## Thumbnails de projetos

Sem imagens reais disponíveis no momento. Usar placeholder visual (gradiente + nome do projeto) no componente `projects.tsx`, com prop `image?: string` opcional em `data/content.ts` para substituição futura sem mudança de componente.

## Tema visual

- Fundo quase preto (`#0a0a0a`), texto `zinc-100`/`zinc-400`, cor de destaque (verde) reservada para o heatmap de contribuições.
- Nome/heading em fonte monoespaçada; corpo em fonte sans padrão do Next (`next/font`).

## Fora de escopo

- Saudação geo-localizada por IP.
- Bloco de tags "How can I help you?".
- Testes automatizados (site estático/institucional, sem lógica de negócio a testar). Cobertura mínima via `tsc --noEmit` e `eslint`.
- Deploy real na Vercel.
- Integração autenticada com Spotify API.

## Riscos

- API pública de contribuições (`jogruber`) é mantida por terceiro, sem SLA — mitigado pelo fallback silencioso.
- Ícones de stack (`react-icons`) podem não cobrir 100% das tecnologias listadas (ex.: Lucid ORM, TanStack) — nesses casos, renderizar apenas o texto sem ícone.
