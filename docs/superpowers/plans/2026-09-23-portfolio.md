# Portfólio Pessoal Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Site de portfólio pessoal (Next.js/Tailwind, dark, single-page) com projetos, experiências, stack de ferramentas, heatmap de contribuições do GitHub e uma seção "Coding with music", baseado no currículo de Pedro Cristóvão.

**Architecture:** App Router do Next.js 15, componentes de seção server-rendered, conteúdo estático tipado em `data/content.ts`, exceção única de dado dinâmico é o heatmap do GitHub (fetch em Server Component via API pública, com fallback).

**Tech Stack:** Next.js 15 (App Router) + TypeScript + Tailwind CSS v4, `lucide-react` (ícones genéricos), `react-icons/si` (ícones de stack).

**Spec:** `docs/superpowers/specs/2026-09-23-portfolio-design.md`

## Global Constraints

- Sem backend próprio, sem banco de dados — todo conteúdo estático exceto contribuições do GitHub.
- GitHub contributions via `https://github-contributions-api.jogruber.de/v4/<username>` (pública, sem chave), `revalidate: 3600`. Se falhar: mostrar texto "Não foi possível carregar as contribuições agora." — nunca dado mockado.
- Coding with music: sem integração Spotify API. Botão "Ouvir" aponta para `https://open.spotify.com/search/<query>` (busca, não embed).
- Projetos internos da Servfaz (ServAuth, Conecta, Odoo/CRM, Automações eSocial/FGTS/Edenred/Unico): sem botão de link.
- Sem saudação geo-localizada, sem bloco "How can I help you?", sem testes automatizados, sem deploy real — fora de escopo.
- Verificação de cada task: `npm run build` (cobre type-check + lint) e grep no HTML pré-renderizado gerado (`.next/server/app/page.html`) confirmando o texto novo da seção.

---

### Task 1: Scaffold do projeto Next.js

**Files:**
- Create: projeto inteiro via `create-next-app` (App Router, TS, Tailwind, ESLint) na raiz do repo já existente (`docs/` e `.git` já presentes e são ignorados pelo scaffolder).
- Modify: `package.json` (adicionar `lucide-react`, `react-icons`).

**Interfaces:**
- Produces: projeto Next.js buildável (`npm run build`), estrutura `app/`, `public/`, `tailwind`/`postcss` config padrão.

- [ ] **Step 1: Rodar o scaffold do Next.js**

```bash
npx --yes create-next-app@latest . --typescript --tailwind --eslint --app --src-dir=false --import-alias "@/*" --use-npm
```

- [ ] **Step 2: Instalar dependências de ícones**

```bash
npm install lucide-react react-icons
```

- [ ] **Step 3: Rodar build pra confirmar scaffold íntegro**

Run: `npm run build`
Expected: build finaliza com `✓ Compiled successfully`, sem erros de tipo/lint.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "chore: scaffold Next.js app com Tailwind e ícones"
```

---

### Task 2: Tema dark base (layout + fontes)

**Files:**
- Modify: `app/layout.tsx`
- Modify: `app/globals.css`

**Interfaces:**
- Produces: `RootLayout` com `lang="pt-BR"`, fundo `#0a0a0a`, texto `zinc-100`, fonte mono disponível via classe `.font-heading` (usada pelo Header na Task 3).

- [ ] **Step 1: Editar `app/layout.tsx`**

```tsx
import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'Pedro Cristóvão — Full Stack Developer',
  description: 'Portfólio de Pedro Cristóvão, desenvolvedor full stack.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={jetbrainsMono.variable}>
      <body className="bg-[#0a0a0a] text-zinc-100 antialiased">
        {children}
      </body>
    </html>
  )
}
```

- [ ] **Step 2: Editar `app/globals.css`** (manter o `@import "tailwindcss";` gerado pelo scaffold no topo e acrescentar)

```css
body {
  background-color: #0a0a0a;
}

.font-heading {
  font-family: var(--font-mono), ui-monospace, monospace;
}
```

- [ ] **Step 3: Build**

Run: `npm run build`
Expected: `✓ Compiled successfully`.

- [ ] **Step 4: Commit**

```bash
git add app/layout.tsx app/globals.css
git commit -m "feat: tema dark e fonte mono base"
```

---

### Task 3: Conteúdo tipado (`data/content.ts`)

**Files:**
- Create: `data/content.ts`

**Interfaces:**
- Produces: `Profile`, `ExperienceItem`, `ProjectItem`, `ToolCategory`, `Track` (types) e as constantes `profile`, `experience`, `projects`, `tools`, `tracks` — consumidas por todas as tasks seguintes.

- [ ] **Step 1: Criar `data/content.ts`**

```ts
export interface Profile {
  name: string
  role: string
  bio: string[]
  githubUsername: string
  githubUrl: string
  linkedinUrl: string
  email: string
}

export interface ExperienceItem {
  role: string
  company: string
  period: string
  bullets: string[]
}

export interface ProjectItem {
  name: string
  description: string
  stack: string[]
  url?: string
  internal?: boolean
}

export interface ToolCategory {
  category: string
  items: string[]
}

export interface Track {
  title: string
  artist: string
}

export const profile: Profile = {
  name: 'Pedro Cristóvão',
  role: 'Full Stack Developer | Back-end | Automação RPA',
  bio: [
    'Desenvolvedor full stack com experiência sólida em back-end (APIs REST em AdonisJS, Node.js/Express e Fastify, PostgreSQL/MySQL, Prisma e Lucid ORM) e em automações RPA (Python/Selenium) para processos internos de RH e operações. Também atuo em front-end moderno com React e Next.js, incluindo experiência com apps mobile em React Native/Expo.',
    'Tenho vivência no ciclo completo de sistemas internos — de módulos de autenticação/SSO e auditoria a customização de ERP (Odoo) — sempre com foco em código limpo, arquitetura escalável e entregas que economizam tempo operacional.',
  ],
  githubUsername: 'dev2Pedro',
  githubUrl: 'https://github.com/dev2Pedro',
  linkedinUrl: 'https://www.linkedin.com/in/devbypedro',
  email: 'itspedrodev@gmail.com',
}

export const experience: ExperienceItem[] = [
  {
    role: 'Desenvolvedor Full Stack',
    company: 'Servfaz',
    period: '2024 — atual',
    bullets: [
      'Desenvolvimento de APIs REST em AdonisJS v6 (arquitetura MSC, JWT, validação Zod, Lucid ORM/PostgreSQL) para sistemas internos de RH e operações.',
      'Criação do módulo de autenticação centralizada (SSO) da empresa — middleware JWT, refresh token — e liderança do módulo de auditoria/logs (ingestão, filtros, exportação CSV, integração server-to-server entre aplicações).',
      'Desenvolvimento full stack do sistema interno de gestão de frota e reservas: back-end em Node.js/Express/Prisma com filas (BullMQ/Redis) e upload para AWS S3; front-end em React/TypeScript com dashboards de BI.',
      'Desenvolvimento do aplicativo mobile de notificações do sistema Conecta, em React Native + Expo.',
      'Customização do ERP Odoo 18 (Python): módulo de armazenamento de anexos em S3/MinIO, hotfixes de localização fiscal brasileira e dashboard de KPIs para o CRM.',
      'Automações RPA em Python/Selenium para portais externos: validação de PIS no FGTS (Caixa), processamento de tickets Edenred TEP, extração de envelopes assinados (Unico) e relatórios de admissão/demissão via eSocial.',
      'Automações com n8n para geração de relatórios de CRM/ERP.',
    ],
  },
]

export const projects: ProjectItem[] = [
  {
    name: 'ServAuth (SSO)',
    description: 'Módulo de autenticação centralizada da Servfaz — middleware JWT, refresh token, auditoria/logs.',
    stack: ['AdonisJS', 'JWT', 'PostgreSQL'],
    internal: true,
  },
  {
    name: 'Conecta',
    description: 'Sistema interno de gestão de frota e reservas, com app mobile de notificações.',
    stack: ['Node.js', 'Express', 'Prisma', 'React', 'React Native'],
    internal: true,
  },
  {
    name: 'Odoo/CRM',
    description: 'Customização do ERP Odoo 18: anexos em S3/MinIO, localização fiscal, dashboard de KPIs.',
    stack: ['Python', 'Odoo'],
    internal: true,
  },
  {
    name: 'Automações eSocial/FGTS/Edenred/Unico',
    description: 'RPA em Python/Selenium para portais externos de RH e operações.',
    stack: ['Python', 'Selenium'],
    internal: true,
  },
  {
    name: 'Upload.ai',
    description: 'Transcrição de vídeo com Whisper Large v3 (via Groq) e geração de resumos/títulos por IA.',
    stack: ['React', 'Node.js', 'Fastify', 'Prisma'],
    url: 'https://github.com/dev2Pedro',
  },
  {
    name: 'Habits',
    description: 'Clone de app de tracking de hábitos com heatmap de progresso — monorepo mobile/web/server.',
    stack: ['React Native', 'Expo', 'React', 'Fastify', 'Prisma'],
    url: 'https://github.com/dev2Pedro',
  },
  {
    name: 'Christmas Elderly/API',
    description: 'Sistema de apadrinhamento natalino de idosos, em parceria com a turma de Psicologia da Unisociesc-Blumenau.',
    stack: ['Fastify', 'Prisma', 'PostgreSQL', 'Supabase', 'Next.js'],
    url: 'https://github.com/dev2Pedro',
  },
  {
    name: 'Automação de relatório mensal',
    description: 'Coleta commits do GitHub, gera resumo narrativo via IA (GitHub Models) e publica no Notion.',
    stack: ['GitHub Models', 'Notion API'],
    url: 'https://github.com/dev2Pedro',
  },
]

export const tools: ToolCategory[] = [
  {
    category: 'Front-end',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Radix UI', 'TanStack Query/Table', 'Zustand', 'GSAP'],
  },
  {
    category: 'Back-end',
    items: ['Node.js', 'AdonisJS', 'Fastify', 'Express', 'Prisma', 'Lucid ORM', 'PostgreSQL', 'MySQL', 'Zod', 'JWT', 'BullMQ/Redis', 'Socket.io'],
  },
  {
    category: 'Mobile',
    items: ['React Native', 'Expo'],
  },
  {
    category: 'RPA & Automação',
    items: ['Python', 'Selenium', 'openpyxl', 'PyInstaller', 'n8n'],
  },
  {
    category: 'ERP & Dados',
    items: ['Odoo (Python/XML)', 'PostgreSQL', 'MySQL', 'SQL Server'],
  },
  {
    category: 'Ferramentas',
    items: ['Git', 'GitHub', 'Docker', 'AWS (S3, Amplify)', 'Figma', 'Claude Code', 'Postman'],
  },
]

export const tracks: Track[] = [
  { title: 'Pueblo', artist: 'Wave to Earth' },
  { title: 'Nouvelle Vague', artist: 'Wave to Earth' },
  { title: 'Holyland', artist: 'Wave to Earth' },
  { title: 'Purple Lake', artist: 'Wave to Earth' },
  { title: 'Sing It All Again', artist: 'Wave to Earth' },
  { title: 'Self Control', artist: 'Frank Ocean' },
  { title: 'Seigfried', artist: 'Frank Ocean' },
  { title: 'Crack Rock', artist: 'Frank Ocean' },
  { title: 'Think About You', artist: 'Frank Ocean' },
  { title: 'Pink Matter', artist: 'Frank Ocean' },
  { title: 'Pyramids', artist: 'Frank Ocean' },
  { title: 'Nights', artist: 'Frank Ocean' },
  { title: 'Get You', artist: 'Daniel Caesar' },
  { title: 'Hold Me Down', artist: 'Daniel Caesar' },
  { title: 'Japanese Denim', artist: 'Daniel Caesar' },
  { title: 'Violet', artist: 'Daniel Caesar' },
  { title: 'Streetcar', artist: 'Daniel Caesar' },
  { title: 'Disillusioned', artist: 'Daniel Caesar' },
]
```

Nota: os projetos pessoais apontam para `https://github.com/dev2Pedro` (perfil) porque os slugs exatos dos repositórios não foram confirmados — trocar por URL do repo específico depois, se desejar.

- [ ] **Step 2: Build**

Run: `npm run build`
Expected: `✓ Compiled successfully` (arquivo ainda não é importado em lugar nenhum, mas precisa compilar sem erro de tipo).

- [ ] **Step 3: Commit**

```bash
git add data/content.ts
git commit -m "feat: conteudo tipado do portfolio"
```

---

### Task 4: Header

**Files:**
- Create: `components/header.tsx`
- Modify: `app/page.tsx` (substituir conteúdo padrão do scaffold, montar `<main>` e renderizar `<Header />`)

**Interfaces:**
- Consumes: `profile` de `@/data/content`.
- Produces: `export default function Header()`.

- [ ] **Step 1: Criar `components/header.tsx`**

```tsx
import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '@/data/content'

export default function Header() {
  return (
    <header className="mx-auto max-w-3xl px-6 pt-16 pb-8">
      <h1 className="font-heading text-3xl font-bold text-zinc-100">
        {profile.name}
      </h1>
      <p className="mt-1 text-zinc-400">{profile.role}</p>
      <div className="mt-6 space-y-4 text-zinc-300">
        {profile.bio.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
      <div className="mt-6 flex gap-4">
        <Link
          href={profile.githubUrl}
          className="flex items-center gap-2 text-sm text-zinc-300 hover:text-zinc-100"
        >
          <Github size={16} /> GitHub
        </Link>
        <Link
          href={profile.linkedinUrl}
          className="flex items-center gap-2 text-sm text-zinc-300 hover:text-zinc-100"
        >
          <Linkedin size={16} /> LinkedIn
        </Link>
        <Link
          href={`mailto:${profile.email}`}
          className="flex items-center gap-2 text-sm text-zinc-300 hover:text-zinc-100"
        >
          <Mail size={16} /> Email
        </Link>
      </div>
    </header>
  )
}
```

- [ ] **Step 2: Editar `app/page.tsx`**

```tsx
import Header from '@/components/header'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Header />
    </main>
  )
}
```

- [ ] **Step 3: Build e verificar conteúdo renderizado**

```bash
npm run build
grep -o "Pedro Cristóvão" .next/server/app/page.html
```

Expected: build ok e o grep retorna `Pedro Cristóvão`.

- [ ] **Step 4: Commit**

```bash
git add components/header.tsx app/page.tsx
git commit -m "feat: secao header do portfolio"
```

---

### Task 5: Experience

**Files:**
- Create: `components/experience.tsx`
- Modify: `app/page.tsx` (adicionar `<Experience />` depois de `<Header />`)

**Interfaces:**
- Consumes: `experience` de `@/data/content`.
- Produces: `export default function Experience()`.

- [ ] **Step 1: Criar `components/experience.tsx`**

```tsx
import { experience } from '@/data/content'

export default function Experience() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h2 className="mb-6 text-2xl font-semibold text-zinc-100">
        Experiences
      </h2>
      <div className="space-y-6">
        {experience.map((item) => (
          <div
            key={item.company}
            className="rounded-lg border border-zinc-800 p-5"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-zinc-100">{item.role}</p>
                <p className="text-sm text-zinc-400">{item.company}</p>
              </div>
              <span className="text-sm text-zinc-500">{item.period}</span>
            </div>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-300">
              {item.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Editar `app/page.tsx`**

```tsx
import Header from '@/components/header'
import Experience from '@/components/experience'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Header />
      <Experience />
    </main>
  )
}
```

- [ ] **Step 3: Build e verificar**

```bash
npm run build
grep -o "Experiences" .next/server/app/page.html
```

Expected: build ok, grep retorna `Experiences`.

- [ ] **Step 4: Commit**

```bash
git add components/experience.tsx app/page.tsx
git commit -m "feat: secao experiences do portfolio"
```

---

### Task 6: Tools I use

**Files:**
- Create: `components/tools.tsx`
- Modify: `app/page.tsx` (adicionar `<Tools />` depois de `<Experience />`)

**Interfaces:**
- Consumes: `tools` de `@/data/content`.
- Produces: `export default function Tools()`.

- [ ] **Step 1: Criar `components/tools.tsx`**

```tsx
import type { IconType } from 'react-icons'
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPrisma,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiSocketdotio,
  SiPython,
  SiSelenium,
  SiGit,
  SiGithub,
  SiDocker,
  SiAmazonaws,
  SiFigma,
  SiPostman,
  SiExpo,
} from 'react-icons/si'
import { tools } from '@/data/content'

const ICON_MAP: Record<string, IconType> = {
  React: SiReact,
  'Next.js': SiNextdotjs,
  TypeScript: SiTypescript,
  'Tailwind CSS': SiTailwindcss,
  'Node.js': SiNodedotjs,
  Express: SiExpress,
  Prisma: SiPrisma,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  'BullMQ/Redis': SiRedis,
  'Socket.io': SiSocketdotio,
  Python: SiPython,
  Selenium: SiSelenium,
  Git: SiGit,
  GitHub: SiGithub,
  Docker: SiDocker,
  'AWS (S3, Amplify)': SiAmazonaws,
  Figma: SiFigma,
  Postman: SiPostman,
  Expo: SiExpo,
}

export default function Tools() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h2 className="mb-1 text-2xl font-semibold text-zinc-100">
        Tools I use
      </h2>
      <p className="mb-6 text-sm text-zinc-400">
        Seleção de ferramentas usadas no dia a dia.
      </p>
      <div className="space-y-5">
        {tools.map((category) => (
          <div
            key={category.category}
            className="flex flex-col gap-3 border-b border-zinc-800 pb-4 sm:flex-row sm:items-start"
          >
            <span className="w-40 shrink-0 text-sm text-zinc-500">
              {category.category}
            </span>
            <div className="flex flex-wrap gap-3">
              {category.items.map((item) => {
                const Icon = ICON_MAP[item]
                return (
                  <span
                    key={item}
                    className="flex items-center gap-2 rounded-md border border-zinc-800 px-3 py-1.5 text-sm text-zinc-300"
                  >
                    {Icon ? <Icon size={16} /> : null}
                    {item}
                  </span>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Editar `app/page.tsx`**

```tsx
import Header from '@/components/header'
import Experience from '@/components/experience'
import Tools from '@/components/tools'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Header />
      <Experience />
      <Tools />
    </main>
  )
}
```

- [ ] **Step 3: Build e verificar**

```bash
npm run build
grep -o "Tools I use" .next/server/app/page.html
```

Expected: build ok, grep retorna `Tools I use`.

- [ ] **Step 4: Commit**

```bash
git add components/tools.tsx app/page.tsx
git commit -m "feat: secao tools i use do portfolio"
```

---

### Task 7: Projects

**Files:**
- Create: `components/projects.tsx`
- Modify: `app/page.tsx` (adicionar `<Projects />` logo após `<Header />`, antes de `<Experience />`, espelhando a ordem do PDF de referência)

**Interfaces:**
- Consumes: `projects` de `@/data/content`.
- Produces: `export default function Projects()`.

- [ ] **Step 1: Criar `components/projects.tsx`**

```tsx
import Link from 'next/link'
import { projects } from '@/data/content'

export default function Projects() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h2 className="mb-6 text-2xl font-semibold text-zinc-100">
        Work and projects
      </h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.name}
            className="rounded-lg border border-zinc-800 p-5"
          >
            <div className="mb-3 flex h-24 items-center justify-center rounded-md bg-gradient-to-br from-zinc-800 to-zinc-900 text-sm text-zinc-500">
              {project.name}
            </div>
            <p className="font-medium text-zinc-100">{project.name}</p>
            <p className="mt-1 text-sm text-zinc-400">{project.description}</p>
            <p className="mt-3 text-xs text-zinc-500">
              {project.stack.join(' · ')}
            </p>
            {project.url && !project.internal && (
              <Link
                href={project.url}
                className="mt-3 inline-block text-sm text-zinc-300 underline"
              >
                Ver no GitHub
              </Link>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Editar `app/page.tsx`**

```tsx
import Header from '@/components/header'
import Projects from '@/components/projects'
import Experience from '@/components/experience'
import Tools from '@/components/tools'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Header />
      <Projects />
      <Experience />
      <Tools />
    </main>
  )
}
```

- [ ] **Step 3: Build e verificar**

```bash
npm run build
grep -o "Work and projects" .next/server/app/page.html
```

Expected: build ok, grep retorna `Work and projects`.

- [ ] **Step 4: Commit**

```bash
git add components/projects.tsx app/page.tsx
git commit -m "feat: secao work and projects do portfolio"
```

---

### Task 8: GitHub Contributions

**Files:**
- Create: `lib/github.ts`
- Create: `components/contributions.tsx`
- Modify: `app/page.tsx` (adicionar `<Contributions />` depois de `<Tools />`)

**Interfaces:**
- Consumes: `profile.githubUsername` de `@/data/content`.
- Produces: `getContributions(username: string): Promise<ContributionsResponse | null>` e `buildWeeks(days: ContributionDay[]): (ContributionDay | null)[][]` em `lib/github.ts`; `export default function Contributions()` (async Server Component).

- [ ] **Step 1: Criar `lib/github.ts`**

```ts
export interface ContributionDay {
  date: string
  count: number
  level: number
}

export interface ContributionsResponse {
  total: Record<string, number>
  contributions: ContributionDay[]
}

export async function getContributions(
  username: string,
): Promise<ContributionsResponse | null> {
  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${username}`,
      { next: { revalidate: 3600 } },
    )
    if (!res.ok) return null
    return (await res.json()) as ContributionsResponse
  } catch {
    return null
  }
}

export function buildWeeks(
  days: ContributionDay[],
): (ContributionDay | null)[][] {
  const last365 = days.slice(-365)
  if (last365.length === 0) return []

  const weeks: (ContributionDay | null)[][] = []
  let currentWeek: (ContributionDay | null)[] = []

  const firstDayOfWeek = new Date(last365[0].date).getDay()
  for (let i = 0; i < firstDayOfWeek; i++) currentWeek.push(null)

  for (const day of last365) {
    currentWeek.push(day)
    if (currentWeek.length === 7) {
      weeks.push(currentWeek)
      currentWeek = []
    }
  }
  if (currentWeek.length > 0) weeks.push(currentWeek)

  return weeks
}
```

- [ ] **Step 2: Criar `components/contributions.tsx`**

```tsx
import { getContributions, buildWeeks } from '@/lib/github'
import { profile } from '@/data/content'

const LEVEL_COLORS = [
  'bg-zinc-800',
  'bg-green-900',
  'bg-green-700',
  'bg-green-500',
  'bg-green-300',
]

export default async function Contributions() {
  const data = await getContributions(profile.githubUsername)

  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h2 className="mb-6 text-2xl font-semibold text-zinc-100">
        Contributions
      </h2>
      {!data ? (
        <p className="text-sm text-zinc-500">
          Não foi possível carregar as contribuições agora.
        </p>
      ) : (
        <div className="flex gap-1 overflow-x-auto">
          {buildWeeks(data.contributions).map((week, wi) => (
            <div key={wi} className="flex flex-col gap-1">
              {week.map((day, di) => (
                <div
                  key={di}
                  className={`h-3 w-3 rounded-sm ${
                    day ? LEVEL_COLORS[day.level] : 'bg-transparent'
                  }`}
                  title={
                    day ? `${day.date}: ${day.count} contribuições` : undefined
                  }
                />
              ))}
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
```

- [ ] **Step 3: Editar `app/page.tsx`**

```tsx
import Header from '@/components/header'
import Projects from '@/components/projects'
import Experience from '@/components/experience'
import Tools from '@/components/tools'
import Contributions from '@/components/contributions'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Header />
      <Projects />
      <Experience />
      <Tools />
      <Contributions />
    </main>
  )
}
```

- [ ] **Step 4: Build e verificar (com fallback caso não haja rede no ambiente de execução)**

```bash
npm run build
grep -oE "Contributions|Não foi possível carregar as contribuições agora" .next/server/app/page.html
```

Expected: build ok; grep retorna `Contributions` (título sempre presente) — se o fetch externo falhar no ambiente de build, a mensagem de fallback também deve aparecer no HTML, o que é um resultado válido.

- [ ] **Step 5: Commit**

```bash
git add lib/github.ts components/contributions.tsx app/page.tsx
git commit -m "feat: secao github contributions do portfolio"
```

---

### Task 9: Coding with Music

**Files:**
- Create: `components/coding-with-music.tsx`
- Modify: `app/page.tsx` (adicionar `<CodingWithMusic />` depois de `<Contributions />`)

**Interfaces:**
- Consumes: `tracks` de `@/data/content`.
- Produces: `export default function CodingWithMusic()`.

- [ ] **Step 1: Criar `components/coding-with-music.tsx`**

```tsx
import Link from 'next/link'
import { tracks } from '@/data/content'

export default function CodingWithMusic() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h2 className="mb-1 text-2xl font-semibold text-zinc-100">
        Coding with music
      </h2>
      <p className="mb-6 text-sm text-zinc-400">
        Música é meu combustível pra focar e programar.
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        {tracks.map((track) => (
          <Link
            key={`${track.artist}-${track.title}`}
            href={`https://open.spotify.com/search/${encodeURIComponent(
              `${track.title} ${track.artist}`,
            )}`}
            className="flex items-center justify-between rounded-lg border border-zinc-800 p-4 hover:border-zinc-700"
          >
            <div>
              <p className="text-sm font-medium text-zinc-100">
                {track.title}
              </p>
              <p className="text-xs text-zinc-500">{track.artist}</p>
            </div>
            <span className="text-xs text-zinc-500">Ouvir</span>
          </Link>
        ))}
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Editar `app/page.tsx`**

```tsx
import Header from '@/components/header'
import Projects from '@/components/projects'
import Experience from '@/components/experience'
import Tools from '@/components/tools'
import Contributions from '@/components/contributions'
import CodingWithMusic from '@/components/coding-with-music'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Header />
      <Projects />
      <Experience />
      <Tools />
      <Contributions />
      <CodingWithMusic />
    </main>
  )
}
```

- [ ] **Step 3: Build e verificar**

```bash
npm run build
grep -o "Coding with music" .next/server/app/page.html
```

Expected: build ok, grep retorna `Coding with music`.

- [ ] **Step 4: Commit**

```bash
git add components/coding-with-music.tsx app/page.tsx
git commit -m "feat: secao coding with music do portfolio"
```

---

### Task 10: Contact, Footer e composição final

**Files:**
- Create: `components/contact.tsx`
- Create: `components/footer.tsx`
- Modify: `app/page.tsx` (adicionar `<Contact />` e `<Footer />` ao final)

**Interfaces:**
- Consumes: `profile` de `@/data/content`.
- Produces: `export default function Contact()`, `export default function Footer()`.

- [ ] **Step 1: Criar `components/contact.tsx`**

```tsx
import { profile } from '@/data/content'

export default function Contact() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h2 className="mb-4 text-2xl font-semibold text-zinc-100">
        Get in touch
      </h2>
      <a href={`mailto:${profile.email}`} className="text-zinc-300 underline">
        {profile.email}
      </a>
    </section>
  )
}
```

- [ ] **Step 2: Criar `components/footer.tsx`**

```tsx
export default function Footer() {
  return (
    <footer className="mx-auto max-w-3xl px-6 pb-16 pt-8 text-xs text-zinc-600">
      © {new Date().getFullYear()} Pedro Cristóvão
    </footer>
  )
}
```

- [ ] **Step 3: Editar `app/page.tsx` (versão final)**

```tsx
import Header from '@/components/header'
import Projects from '@/components/projects'
import Experience from '@/components/experience'
import Tools from '@/components/tools'
import Contributions from '@/components/contributions'
import CodingWithMusic from '@/components/coding-with-music'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Header />
      <Projects />
      <Experience />
      <Tools />
      <Contributions />
      <CodingWithMusic />
      <Contact />
      <Footer />
    </main>
  )
}
```

- [ ] **Step 4: Build final e verificação completa**

```bash
npm run build
grep -oE "Pedro Cristóvão|Work and projects|Experiences|Tools I use|Contributions|Coding with music|Get in touch" .next/server/app/page.html
```

Expected: build ok e as 7 strings aparecem no HTML gerado.

- [ ] **Step 5: Lint final**

Run: `npm run lint`
Expected: sem erros.

- [ ] **Step 6: Commit**

```bash
git add components/contact.tsx components/footer.tsx app/page.tsx
git commit -m "feat: secoes contact e footer, composicao final do portfolio"
```
