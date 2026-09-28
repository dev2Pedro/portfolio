---
name: Pedro Cristóvão — Portfolio
description: Portfólio pessoal de desenvolvedor full stack, em tom monocromático e editorial, com toques mono-espaçados.
colors:
  void: "#0a0a0a"
  paper: "#fafafa"
  ink: "#f4f4f5"
  ink-deep: "#18181b"
  mist-200: "#e4e4e7"
  mist-800: "#27272a"
  fog-500: "#71717a"
  smoke-600: "#52525b"
  smoke-700: "#3f3f46"
  ash-300: "#d4d4d8"
  ash-400: "#a1a1aa"
  verified-blue: "#3b82f6"
  contribution-0: "#e4e4e7"
  contribution-1: "#86efac"
  contribution-2: "#22c55e"
  contribution-3: "#16a34a"
  contribution-4: "#15803d"
typography:
  display:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "normal"
  headline:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "normal"
  body:
    fontFamily: "Geist Sans, ui-sans-serif, system-ui"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Geist Sans, ui-sans-serif, system-ui"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.4
rounded:
  sm: "2px"
  md: "6px"
  lg: "8px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  card-padding: "20px"
  section-rhythm: "64px"
components:
  toggle-button:
    backgroundColor: "transparent"
    textColor: "{colors.smoke-600}"
    rounded: "{rounded.md}"
    height: "44px"
    width: "44px"
  toggle-button-hover:
    backgroundColor: "{colors.mist-200}"
  tech-badge:
    backgroundColor: "transparent"
    rounded: "{rounded.md}"
    size: "28px"
  experience-card:
    backgroundColor: "transparent"
    rounded: "{rounded.lg}"
    padding: "20px"
---

# Design System: Pedro Cristóvão — Portfolio

## Overview

**Creative North Star: "The Quiet Terminal"**

Uma página de rolagem única, em coluna centralizada, que se comporta como um devlog pessoal: cinza sobre cinza, bordas finas no lugar de sombra, e um único acento mono-espaçado (JetBrains Mono) reservado para nome e títulos de seção. A paleta é quase inteiramente neutra (escala zinc); cor só aparece como sinal funcional — o azul do selo de verificação e o verde do heatmap de contribuições do GitHub — nunca como decoração. O sistema assume dark mode como estado padrão (`themeInitScript` define `dark` quando não há preferência salva), com light mode como inversão espelhada, não como tema secundário com identidade própria.

Nada nesta interface disputa atenção com o conteúdo técnico. A hierarquia é tipográfica e espacial, não cromática: título mono-espaçado, corpo em Geist Sans, respiro generoso entre seções (64px). O único componente com física própria é o `WakeSlider` (barras que reagem à velocidade do arraste, com mola e assentamento), e o stack de cartões de música (`MusicStack`/`Stack`) com arrasto e autoplay — assinaturas de craft escondidas dentro de um shell deliberadamente austero.

**Key Characteristics:**
- Monocromático por padrão; cor é sinal, nunca ornamento.
- Sem sombra como sistema de profundidade — bordas finas (`border-zinc-200/800`) separam blocos.
- Um único par tipográfico: JetBrains Mono para identidade/títulos, Geist Sans para leitura.
- Layout de coluna única, largura fixa (`max-w-3xl`), sem grids multi-coluna.
- Dark mode é o estado de origem do produto, não uma variante opcional.

## Colors

Paleta quase monocromática (escala zinc), com dois acentos estritamente funcionais.

### Primary
- **Void** (`#0a0a0a`): fundo do modo escuro (padrão do produto).
- **Paper** (`#fafafa`): fundo do modo claro.

### Tertiary
- **Verified Blue** (`#3b82f6`): único acento decorativo do sistema, usado apenas no ícone de "verificado" ao lado do nome no header. Não reaparece em nenhum outro lugar.
- **Contribution Green** (`#86efac` → `#15803d`, 4 tons + `#e4e4e7` neutro): escala sequencial do heatmap de contribuições do GitHub, mapeada por nível de atividade (0 a 4). Uso exclusivo desse componente.

### Neutral
- **Ink** (`#f4f4f5`, zinc-100): texto principal e títulos no modo escuro.
- **Ink Deep** (`#18181b`, zinc-900): texto principal e títulos no modo claro.
- **Mist 200** (`#e4e4e7`, zinc-200): bordas e divisores no modo claro.
- **Mist 800** (`#27272a`, zinc-800): bordas e divisores no modo escuro; também `trackColor` do WakeSlider no escuro.
- **Fog 500** (`#71717a`, zinc-500): texto terciário/labels de baixa ênfase em ambos os temas (datas, legendas).
- **Smoke 600/700** (`#52525b` / `#3f3f46`, zinc-600/700): corpo de texto secundário/primário no modo claro.
- **Ash 300/400** (`#d4d4d8` / `#a1a1aa`, zinc-300/400): corpo de texto secundário/terciário no modo escuro.

### Named Rules
**The Functional Color Rule.** Cor fora da escala zinc só existe quando carrega significado (verificação, nível de atividade). Nunca introduzir uma cor de marca ou destaque puramente decorativo.

## Typography

**Display/Headline Font:** JetBrains Mono (com fallback `ui-monospace, monospace`) — classe utilitária `.font-heading`.
**Body Font:** Geist Sans (com fallback `ui-sans-serif, system-ui`) — fonte padrão do `<body>`.
**Mono adicional:** Geist Mono está carregada como variável CSS mas não está aplicada a nenhum texto visível hoje; tratar como reserva, não como token ativo.

**Character:** Um par deliberadamente assimétrico — mono-espaçada para identidade (nome, títulos de seção), humanista para leitura corrida. A mono nunca aparece em parágrafos de corpo.

### Hierarchy
- **Display** (700, 24px `text-2xl`, 1.3): nome no header (`h1`).
- **Headline** (600, 24–30px `text-2xl`/`text-3xl`, 1.3): títulos de seção (`h2`), sempre em `.font-heading`.
- **Title** (500, 16px `text-base`, 1.4): rótulos de linha (cargo, categoria de ferramenta).
- **Body** (400, 14–18px `text-sm`/`text-lg`, 1.6): bio, descrições de projeto, bullets de experiência.
- **Label** (500, 12–13px `text-xs`, 1.4): datas, tooltips, legendas de contribuição, valor do slider.

### Named Rules
**The Mono-For-Identity Rule.** JetBrains Mono é reservada a nome e títulos de seção — nunca usada em corpo de texto ou rótulos pequenos.

## Layout

Coluna única centralizada, `max-w-3xl` (768px), com gutter lateral fixo de 24px (`px-6`) em toda seção. Ritmo vertical de 64px entre seções (`py-16`); o header usa um ritmo assimétrico (`pt-16 pb-8`) para ficar mais colado ao conteúdo seguinte. Nenhuma seção usa grid multi-coluna — mesmo a listagem de projetos alterna mídia/texto em uma única linha flexível que empilha em mobile (`flex-col`) e vira `flex-row`/`flex-row-reverse` a partir do breakpoint `sm` (640px), alternando o lado da imagem a cada projeto. Densidade é baixa: espaçamento generoso entre blocos (`gap-1` a `gap-6`, 4–24px) conforme a proximidade semântica dos elementos.

## Elevation & Depth

Sistema flat por padrão — nenhuma sombra é usada para separar blocos; a separação vem inteiramente de bordas finas (`border-zinc-200` no claro, `border-zinc-800` no escuro). A única exceção é funcional, não decorativa: o tooltip do `TechBadge` usa `shadow-md` para se destacar como um popover flutuante acima do conteúdo.

### Shadow Vocabulary
- **Tooltip popover** (`box-shadow` via utilitário `shadow-md`): exclusivo do tooltip de nome de tecnologia no hover do `TechBadge`.

### Named Rules
**The Border-Not-Shadow Rule.** Profundidade é comunicada por contraste de borda, nunca por sombra, exceto em popovers efêmeros (tooltips).

## Shapes

Cantos suavemente arredondados em quase tudo, sem geometria angular. Escala de raio: `sm` (2px, quadrados do heatmap de contribuições), `md` (6px, botões, badges de tecnologia, ícones), `lg` (8px, cards e imagens de projeto), `full` (avatar, barras do WakeSlider, botão de play/pause). Sem bordas grossas ou decorativas — bordas são sempre de 1px e servem como divisor, não como moldura.

## Components

### Buttons
- **Shape:** quadrado 44×44px (tema, play/pause) ou 44×48px (idioma) — alvo de toque ≥44×44px, raio `md` (6px). O ícone visual continua pequeno (16-18px); só a área clicável cresceu.
- **Estilo:** transparente com borda 1px (`border-zinc-200`/`border-zinc-800`); ícone/texto em `fog-500`/`ash-400`.
- **Hover:** preenchimento sutil (`bg-zinc-100`/`bg-zinc-900`), sem transição de escala.
- **Foco:** anel visível via `focus-visible` (nunca `outline-none` sem substituto) — controles arrastáveis/sliders usam o acento `verified-blue` como cor de foco.
- O contato agora tem uma CTA primária real (botão com borda, ícone e rótulo) — não é mais só utilitário icon-only; toggles de tema/idioma e play/pause continuam sendo os únicos icon-only.

### Chips (Tech Badge)
- **Estilo:** ícone SVG 28px (32px em Ferramentas) sem fundo; nome do item aparece só como fallback textual quando não há ícone mapeado.
- **State:** hover revela tooltip (nome completo) acima do ícone, fundo invertido (`zinc-900` claro / `zinc-100` escuro), com sombra (única exceção de elevação do sistema).

### Cards / Containers
- **Corner Style:** raio `lg` (8px).
- **Background:** transparente (sem preenchimento próprio); quando um projeto não tem imagem, usa gradiente diagonal `zinc-200→300` (claro) / `zinc-800→900` (escuro) como placeholder.
- **Shadow Strategy:** nenhuma — ver Elevation & Depth.
- **Border:** 1px `zinc-200`/`zinc-800` (card de experiência); imagens de projeto também levam borda 1px.
- **Internal Padding:** 20px (card de experiência).

### Navigation
Não há barra de navegação — o header concentra identidade (avatar, nome, selo, cargo, bio) e os três links sociais (GitHub, LinkedIn, e-mail) como ícones inline com hover de cor, mais os toggles de tema/idioma alinhados à direita.

### WakeSlider (assinatura)
Slider de barras verticais que reage à velocidade do arraste com física de mola (`motion/react`): quanto mais rápido o gesto, maior a "onda" de barras que se elevam ao redor do ponto ativo. Usado para volume da seção de música. Cores de preenchimento/trilho são passadas por prop e trocam com o tema (claro/escuro). É o componente mais elaborado do sistema — não substituir por um `<input type="range">` genérico.

### MusicStack (assinatura)
Pilha de cartões arrastável (`Stack`) com autoplay e rotação aleatória sutil, cada cartão mostrando capa do álbum, overlay em gradiente preto (`from-black/90` a transparente) para legibilidade do título/artista, e um botão circular de play/pause (`bg-black/50`, `backdrop-blur`) no canto superior.

## Do's and Don'ts

### Do:
- **Do** manter a paleta dominante em tons de zinc; introduzir cor nova só quando ela carregar significado funcional (como o selo azul ou o heatmap verde).
- **Do** usar bordas de 1px para separar blocos, nunca sombra, fora do tooltip.
- **Do** manter JetBrains Mono restrita a nome e títulos de seção (`.font-heading`).
- **Do** preservar a coluna única `max-w-3xl` com gutter de 24px em qualquer seção nova.
- **Do** manter todo alvo de toque interativo em pelo menos 44×44px, mesmo quando o ícone visual é menor.
- **Do** dar um substituto visível de foco (`focus-visible`) sempre que remover o `outline` padrão do navegador.

### Don't:
- **Don't** adicionar grid multi-coluna ou layout de largura total — quebra o ritmo editorial de coluna única.
- **Don't** introduzir sombras decorativas em cards ou botões — o sistema é deliberadamente flat.
- **Don't** substituir o `WakeSlider` ou o `MusicStack` por componentes genéricos de UI kit; são assinaturas de craft do produto.
- **Don't** aplicar cor de acento (azul, verde) fora dos dois contextos onde já carrega significado (selo verificado, heatmap de contribuições).
