import type { Locale } from "@/components/language-provider";

interface Translations {
  profile: {
    role: string;
    bio: string[];
  };
  experience: {
    role: string;
    period: string;
    bullets: string[];
  }[];
  projects: {
    description: string;
  }[];
  tools: {
    category: string;
  }[];
  sections: {
    workTitle: string;
    experiencesTitle: string;
    toolsTitle: string;
    toolsSubtitle: string;
    contributionsTitle: string;
    musicTitle: string;
    musicSubtitle: string;
    contactTitle: string;
    contactCta: string;
    contactSecondary: string;
    viewOnGithub: string;
    contributionsFallback: string;
    play: string;
    pause: string;
    showMore: string;
    showLess: string;
  };
}

export const translations: Record<Locale, Translations> = {
  pt: {
    profile: {
      role: "Desenvolvedor Full Stack | Back-end | Automação RPA",
      bio: [
        "Desenvolvedor full stack com experiência sólida em back-end (APIs REST em AdonisJS, Node.js/Express e Fastify, PostgreSQL/MySQL, Prisma e Lucid ORM) e em automações RPA (Python/Selenium) para processos internos de RH e operações. Também atuo em front-end moderno com React e Next.js, incluindo experiência com apps mobile em React Native/Expo, e vivência prática em projetos com Flutter e Dart.",
        "Tenho vivência no ciclo completo de sistemas internos — de módulos de autenticação/SSO e auditoria à integração de microsserviços — sempre com foco em código limpo, arquitetura escalável e entregas que economizam tempo operacional.",
      ],
    },
    experience: [
      {
        role: "Desenvolvedor Full Stack",
        period: "Desde 2024",
        bullets: [
          "Desenvolvimento full-stack de soluções corporativas: APIs REST, automações e integrações entre sistemas, do banco de dados ao deploy.",
          "APIs RESTful & Backend: APIs em Node.js, TypeScript, AdonisJS e Prisma/PostgreSQL — microsserviços, rotas e fluxos de agendamento/gestão corporativa.",
          "Sistemas ERP & CRM: Criação e customização em Python — regras de CRM, lead time, painéis de KPIs e storage S3/MinIO.",
          "Segurança, Auditoria & Acesso: Autenticação JWT/refresh token, RBAC e auditoria centralizada server-to-server de logs e sessões.",
          "Automação de Processos (RPA): Robôs em Python/Selenium para extração de dados e emissão de documentos governamentais.",
          "Infraestrutura: Docker, testes automatizados, versionamento Git/GitHub e deploy em AWS/VPS.",
          "Mobile: App de notificações em React Native/Expo — push via Expo Notifications, roteamento por origem e integração via API REST.",
        ],
      },
    ],
    projects: [
      {
        description:
          "Transcrição de vídeo com IA (Whisper via Groq) e geração automática de resumos e títulos. Processamento de vídeo no navegador com FFmpeg, back-end em Fastify + Prisma.",
      },
      {
        description:
          "Sistema de apadrinhamento natalino de idosos, em parceria com a turma de Psicologia da Unisociesc-Blumenau. Área administrativa autenticada, back-end em Fastify/Prisma/PostgreSQL (Supabase).",
      },
      {
        description:
          "RPA para portais externos de RH e DP: validação de PIS no FGTS (Caixa), tickets Edenred TEP, envelopes assinados (Unico) e relatórios de admissão/demissão via eSocial.",
      },
    ],
    tools: [
      { category: "Front-end" },
      { category: "Back-end" },
      { category: "Mobile" },
      { category: "RPA & Automação" },
      { category: "Banco de dados" },
      { category: "Ferramentas" },
    ],
    sections: {
      workTitle: "Trabalhos e projetos",
      experiencesTitle: "Experiências",
      toolsTitle: "Ferramentas que uso",
      toolsSubtitle: "Seleção de ferramentas usadas no dia a dia.",
      contributionsTitle: "Contribuições",
      musicTitle: "Playlist",
      musicSubtitle:
        "Música é meu combustível pra focar e programar. Arraste os cards ou deixa rolar sozinho — dá pra ouvir um trecho de cada faixa.",
      contactTitle: "Fale comigo",
      contactCta: "Enviar e-mail",
      contactSecondary: "ou conecte-se no",
      viewOnGithub: "Ver no GitHub",
      contributionsFallback:
        "Não foi possível carregar as contribuições agora.",
      play: "Reproduzir",
      pause: "Pausar",
      showMore: "Mostrar mais",
      showLess: "Mostrar menos",
    },
  },
  en: {
    profile: {
      role: "Full Stack Developer | Back-end | RPA Automation",
      bio: [
        "Full stack developer with solid experience in back-end (REST APIs in AdonisJS, Node.js/Express and Fastify, PostgreSQL/MySQL, Prisma and Lucid ORM) and RPA automation (Python/Selenium) for internal HR and operations processes. I also work with modern front-end using React and Next.js, including mobile app experience with React Native/Expo, and hands-on experience with Flutter and Dart projects.",
        "I have experience across the full lifecycle of internal systems — from authentication/SSO and audit modules to microservices integration — always focused on clean code, scalable architecture, and deliveries that save operational time.",
      ],
    },
    experience: [
      {
        role: "Full Stack Developer",
        period: "Since 2024",
        bullets: [
          "Full-stack development of enterprise solutions: REST APIs, automations, and system integrations, from database to deployment.",
          "RESTful APIs & Backend: APIs in Node.js, TypeScript, AdonisJS, and Prisma/PostgreSQL — microservices, routing, and corporate scheduling/management workflows.",
          "ERP & CRM Systems: Development and customization in Python — CRM rules, lead time, KPI dashboards, and S3/MinIO storage.",
          "Security, Audit & Access: JWT/refresh-token auth, RBAC, and centralized server-to-server audit logging/sessions.",
          "Process Automation (RPA): Python/Selenium bots for government data extraction and document issuance.",
          "Infrastructure: Docker, automated testing, Git/GitHub versioning, and AWS/VPS deployment.",
          "Mobile: Notification app in React Native/Expo — Expo Notifications push, origin-based routing, and REST API integration.",
        ],
      },
    ],
    projects: [
      {
        description:
          "Video transcription with AI (Whisper via Groq) and automatic generation of summaries and titles. In-browser video processing with FFmpeg, back-end in Fastify + Prisma.",
      },
      {
        description:
          "Christmas sponsorship system for elderly people, in partnership with the Psychology class at Unisociesc-Blumenau. Authenticated admin area, back-end in Fastify/Prisma/PostgreSQL (Supabase).",
      },
      {
        description:
          "RPA for external HR and payroll portals: PIS validation on FGTS (Caixa), Edenred TEP tickets, signed envelopes (Unico), and admission/termination reports via eSocial.",
      },
    ],
    tools: [
      { category: "Front-end" },
      { category: "Back-end" },
      { category: "Mobile" },
      { category: "RPA & Automation" },
      { category: "Database" },
      { category: "Tools" },
    ],
    sections: {
      workTitle: "Work and projects",
      experiencesTitle: "Experiences",
      toolsTitle: "Tools I use",
      toolsSubtitle: "A selection of tools used day to day.",
      contributionsTitle: "Contributions",
      musicTitle: "Playlist",
      musicSubtitle:
        "Music is my fuel to focus and code. Drag the cards or let it play — you can listen to a preview of each track.",
      contactTitle: "Get in touch",
      contactCta: "Send email",
      contactSecondary: "or connect on",
      viewOnGithub: "View on GitHub",
      contributionsFallback: "Couldn't load contributions right now.",
      play: "Play",
      pause: "Pause",
      showMore: "Show more",
      showLess: "Show less",
    },
  },
};
