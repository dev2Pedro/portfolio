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
