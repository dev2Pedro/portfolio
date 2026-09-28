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
    workTitle: string
    experiencesTitle: string
    toolsTitle: string
    toolsSubtitle: string
    contributionsTitle: string
    musicTitle: string
    musicSubtitle: string
    contactTitle: string
    contactCta: string
    contactSecondary: string
    viewOnGithub: string
    contributionsFallback: string
    play: string
    pause: string
    showMore: string
    showLess: string
  }
}

export const translations: Record<Locale, Translations> = {
  pt: {
    profile: {
      role: 'Desenvolvedor Full Stack | Back-end | Automação RPA',
      bio: [
        'Desenvolvedor full stack com experiência sólida em back-end (APIs REST em AdonisJS, Node.js/Express e Fastify, PostgreSQL/MySQL, Prisma e Lucid ORM) e em automações RPA (Python/Selenium) para processos internos de RH e operações. Também atuo em front-end moderno com React e Next.js, incluindo experiência com apps mobile em React Native/Expo, e vivência prática em projetos com Flutter e Dart.',
        'Tenho vivência no ciclo completo de sistemas internos — de módulos de autenticação/SSO e auditoria à integração de microsserviços — sempre com foco em código limpo, arquitetura escalável e entregas que economizam tempo operacional.',
      ],
    },
    experience: [
      {
        role: 'Desenvolvedor Full Stack',
        period: 'Desde 2024',
        bullets: [
          'Desenvolvimento de APIs REST em AdonisJS v6 (arquitetura MSC, JWT, validação Zod, Lucid ORM/PostgreSQL) para sistemas internos de RH e operações.',
          'Criação do módulo de autenticação centralizada (SSO) da empresa, com middleware JWT e refresh token, e liderança do módulo de auditoria/logs (ingestão, filtros, exportação CSV, controle de acesso por rota via grupos de permissão, integração server-to-server entre aplicações).',
          'Desenvolvimento full stack do sistema interno de gestão de frota e reservas: cadastro de veículos por tipo (carros, caminhões e motos) com checklist e vínculo de condutor, reserva de salas, back-end em Node.js/Express/Prisma com filas (BullMQ/Redis) e upload para AWS S3; front-end em React/TypeScript com dashboards de BI.',
          'Endpoints do Portal do Colaborador e rotina de atualização cadastral obrigatória, com consentimento via WhatsApp, rate limiting e trilha de auditoria.',
          'Desenvolvimento do aplicativo mobile de notificações do sistema Conecta, em React Native + Expo.',
          'Customização do ERP Odoo 18 (Python): regras de negócio do CRM (validação obrigatória por etapa, numeração única de leads, controle de lead time, notificações automáticas por etapa), ACL e grupos de segurança, painel de KPIs com compartilhamento público, módulo de armazenamento de anexos em S3/MinIO, hotfixes de localização fiscal brasileira, testes automatizados e migrations.',
          'Automações RPA em Python/Selenium para portais externos: validação de PIS no FGTS (Caixa), processamento de tickets Edenred TEP (com interface gráfica, reprocessamento e checkpoint, rodando em Windows e macOS), extração de envelopes assinados (Unico) e relatórios de admissão/demissão via eSocial em lote a partir de planilhas.',
          'Integração do app Conecta com o Formbricks self-hosted (webhook e emissão de token) para pesquisas de NPS, e automações com n8n para geração de relatórios de CRM/ERP.',
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
      workTitle: 'Trabalhos e projetos',
      experiencesTitle: 'Experiências',
      toolsTitle: 'Ferramentas que uso',
      toolsSubtitle: 'Seleção de ferramentas usadas no dia a dia.',
      contributionsTitle: 'Contribuições',
      musicTitle: 'Playlist',
      musicSubtitle:
        'Música é meu combustível pra focar e programar. Arraste os cards ou deixa rolar sozinho — dá pra ouvir um trecho de cada faixa.',
      contactTitle: 'Fale comigo',
      contactCta: 'Enviar e-mail',
      contactSecondary: 'ou conecte-se no LinkedIn',
      viewOnGithub: 'Ver no GitHub',
      contributionsFallback: 'Não foi possível carregar as contribuições agora.',
      play: 'Reproduzir',
      pause: 'Pausar',
      showMore: 'Mostrar mais',
      showLess: 'Mostrar menos',
    },
  },
  en: {
    profile: {
      role: 'Full Stack Developer | Back-end | RPA Automation',
      bio: [
        'Full stack developer with solid experience in back-end (REST APIs in AdonisJS, Node.js/Express and Fastify, PostgreSQL/MySQL, Prisma and Lucid ORM) and RPA automation (Python/Selenium) for internal HR and operations processes. I also work with modern front-end using React and Next.js, including mobile app experience with React Native/Expo, and hands-on experience with Flutter and Dart projects.',
        'I have experience across the full lifecycle of internal systems — from authentication/SSO and audit modules to microservices integration — always focused on clean code, scalable architecture, and deliveries that save operational time.',
      ],
    },
    experience: [
      {
        role: 'Full Stack Developer',
        period: 'Since 2024',
        bullets: [
          'Development of REST APIs in AdonisJS v6 (MSC architecture, JWT, Zod validation, Lucid ORM/PostgreSQL) for internal HR and operations systems.',
          "Creation of the company's centralized authentication module (SSO), with JWT middleware and refresh tokens, and leadership of the audit/logging module (ingestion, filters, CSV export, route-level access control via permission groups, server-to-server integration between applications).",
          'Full stack development of the internal fleet and reservation management system: vehicle registration by type (cars, trucks, and motorcycles) with checklists and driver assignment, room booking, back-end in Node.js/Express/Prisma with queues (BullMQ/Redis) and AWS S3 upload; front-end in React/TypeScript with BI dashboards.',
          'Employee Portal endpoints and the mandatory profile-update flow, with WhatsApp consent, rate limiting, and an audit trail.',
          "Development of the Conecta system's mobile notification app, in React Native + Expo.",
          'Odoo 18 ERP customization (Python): CRM business rules (stage-gated required fields, unique lead numbering, lead-time control, automatic notifications), ACL and security groups, a publicly shareable KPI dashboard, an S3/MinIO attachment storage module, Brazilian fiscal localization hotfixes, automated tests, and migrations.',
          'RPA automations in Python/Selenium for external portals: PIS validation on FGTS (Caixa), Edenred TEP ticket processing (with a GUI, reprocessing, and checkpointing, running on Windows and macOS), signed envelope extraction (Unico), and batch admission/termination reports via eSocial from spreadsheets.',
          'Integrated the Conecta app with self-hosted Formbricks (webhook and token issuance) for in-app NPS surveys, plus n8n automations for CRM/ERP report generation.',
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
      workTitle: 'Work and projects',
      experiencesTitle: 'Experiences',
      toolsTitle: 'Tools I use',
      toolsSubtitle: 'A selection of tools used day to day.',
      contributionsTitle: 'Contributions',
      musicTitle: 'Playlist',
      musicSubtitle:
        'Music is my fuel to focus and code. Drag the cards or let it play — you can listen to a preview of each track.',
      contactTitle: 'Get in touch',
      contactCta: 'Send email',
      contactSecondary: 'or connect on LinkedIn',
      viewOnGithub: 'View on GitHub',
      contributionsFallback: "Couldn't load contributions right now.",
      play: 'Play',
      pause: 'Pause',
      showMore: 'Show more',
      showLess: 'Show less',
    },
  },
}
