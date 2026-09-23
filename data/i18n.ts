import type { Locale } from '@/components/language-provider'

interface Translations {
  profile: {
    role: string
    bio: string[]
  }
  experience: {
    role: string
    period: string
    bullets: string[]
  }[]
  projects: {
    description: string
  }[]
  tools: {
    category: string
  }[]
  sections: {
    toolsSubtitle: string
    musicSubtitle: string
    viewOnGithub: string
    contributionsFallback: string
  }
}

export const translations: Record<Locale, Translations> = {
  pt: {
    profile: {
      role: 'Full Stack Developer | Back-end | Automação RPA',
      bio: [
        'Desenvolvedor full stack com experiência sólida em back-end (APIs REST em AdonisJS, Node.js/Express e Fastify, PostgreSQL/MySQL, Prisma e Lucid ORM) e em automações RPA (Python/Selenium) para processos internos de RH e operações. Também atuo em front-end moderno com React e Next.js, incluindo experiência com apps mobile em React Native/Expo, e vivência prática em projetos com Flutter e Dart.',
        'Tenho vivência no ciclo completo de sistemas internos — de módulos de autenticação/SSO e auditoria a customização de ERP (Odoo) — sempre com foco em código limpo, arquitetura escalável e entregas que economizam tempo operacional.',
      ],
    },
    experience: [
      {
        role: 'Desenvolvedor Full Stack',
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
    ],
    projects: [
      {
        description:
          'Transcrição de vídeo com IA (Whisper via Groq) e geração automática de resumos e títulos. Processamento de vídeo no navegador com FFmpeg, back-end em Fastify + Prisma.',
      },
      {
        description:
          'Sistema de apadrinhamento natalino de idosos, em parceria com a turma de Psicologia da Unisociesc-Blumenau. Área administrativa autenticada, back-end em Fastify/Prisma/PostgreSQL (Supabase).',
      },
      {
        description:
          'RPA para portais externos de RH e DP: validação de PIS no FGTS (Caixa), tickets Edenred TEP, envelopes assinados (Unico) e relatórios de admissão/demissão via eSocial.',
      },
    ],
    tools: [
      { category: 'Front-end' },
      { category: 'Back-end' },
      { category: 'Mobile' },
      { category: 'RPA & Automação' },
      { category: 'Banco de dados' },
      { category: 'Ferramentas' },
    ],
    sections: {
      toolsSubtitle: 'Seleção de ferramentas usadas no dia a dia.',
      musicSubtitle:
        'Música é meu combustível pra focar e programar. Arraste os cards ou deixa rolar sozinho — dá pra ouvir um trecho de cada faixa.',
      viewOnGithub: 'Ver no GitHub',
      contributionsFallback: 'Não foi possível carregar as contribuições agora.',
    },
  },
  en: {
    profile: {
      role: 'Full Stack Developer | Back-end | RPA Automation',
      bio: [
        'Full stack developer with solid experience in back-end (REST APIs in AdonisJS, Node.js/Express and Fastify, PostgreSQL/MySQL, Prisma and Lucid ORM) and RPA automation (Python/Selenium) for internal HR and operations processes. I also work with modern front-end using React and Next.js, including mobile app experience with React Native/Expo, and hands-on experience with Flutter and Dart projects.',
        "I have experience across the full lifecycle of internal systems — from authentication/SSO and audit modules to ERP customization (Odoo) — always focused on clean code, scalable architecture, and deliveries that save operational time.",
      ],
    },
    experience: [
      {
        role: 'Full Stack Developer',
        period: '2024 — present',
        bullets: [
          'Development of REST APIs in AdonisJS v6 (MSC architecture, JWT, Zod validation, Lucid ORM/PostgreSQL) for internal HR and operations systems.',
          "Creation of the company's centralized authentication module (SSO) — JWT middleware, refresh tokens — and leadership of the audit/logging module (ingestion, filters, CSV export, server-to-server integration between applications).",
          'Full stack development of the internal fleet and reservation management system: back-end in Node.js/Express/Prisma with queues (BullMQ/Redis) and AWS S3 upload; front-end in React/TypeScript with BI dashboards.',
          "Development of the Conecta system's mobile notification app, in React Native + Expo.",
          'Odoo 18 ERP customization (Python): attachment storage module in S3/MinIO, Brazilian fiscal localization hotfixes, and a KPI dashboard for the CRM.',
          'RPA automations in Python/Selenium for external portals: PIS validation on FGTS (Caixa), Edenred TEP ticket processing, signed envelope extraction (Unico), and admission/termination reports via eSocial.',
          'Automations with n8n for CRM/ERP report generation.',
        ],
      },
    ],
    projects: [
      {
        description:
          'Video transcription with AI (Whisper via Groq) and automatic generation of summaries and titles. In-browser video processing with FFmpeg, back-end in Fastify + Prisma.',
      },
      {
        description:
          'Christmas sponsorship system for elderly people, in partnership with the Psychology class at Unisociesc-Blumenau. Authenticated admin area, back-end in Fastify/Prisma/PostgreSQL (Supabase).',
      },
      {
        description:
          'RPA for external HR and payroll portals: PIS validation on FGTS (Caixa), Edenred TEP tickets, signed envelopes (Unico), and admission/termination reports via eSocial.',
      },
    ],
    tools: [
      { category: 'Front-end' },
      { category: 'Back-end' },
      { category: 'Mobile' },
      { category: 'RPA & Automation' },
      { category: 'Database' },
      { category: 'Tools' },
    ],
    sections: {
      toolsSubtitle: 'A selection of tools used day to day.',
      musicSubtitle:
        'Music is my fuel to focus and code. Drag the cards or let it play — you can listen to a preview of each track.',
      viewOnGithub: 'View on GitHub',
      contributionsFallback: "Couldn't load contributions right now.",
    },
  },
}
