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
  image?: string
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
  role: 'Desenvolvedor Full Stack | Back-end | Automação RPA',
  bio: [
    'Desenvolvedor full stack com experiência sólida em back-end (APIs REST em AdonisJS, Node.js/Express e Fastify, PostgreSQL/MySQL, Prisma e Lucid ORM) e em automações RPA (Python/Selenium) para processos internos de RH e operações. Também atuo em front-end moderno com React e Next.js, incluindo experiência com apps mobile em React Native/Expo, e vivência prática em projetos com Flutter e Dart.',
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
    period: 'Desde 2024',
    bullets: [
      'Desenvolvimento de APIs REST em AdonisJS v6 (arquitetura MSC, JWT, validação Zod, Lucid ORM/PostgreSQL) para sistemas internos de RH e operações.',
      'Criação do módulo de autenticação centralizada (SSO) da empresa, com middleware JWT e refresh token, e liderança do módulo de auditoria/logs (ingestão, filtros, exportação CSV, integração server-to-server entre aplicações).',
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
    name: 'Upload.ai',
    description: 'Transcrição de vídeo com IA (Whisper via Groq) e geração automática de resumos e títulos. Processamento de vídeo no navegador com FFmpeg, back-end em Fastify + Prisma.',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Fastify', 'Prisma'],
    url: 'https://github.com/dev2Pedro/upload.ai',
    image: '/projects/upload-ai.png',
  },
  {
    name: 'Christmas Elderly/API',
    description: 'Sistema de apadrinhamento natalino de idosos, em parceria com a turma de Psicologia da Unisociesc-Blumenau. Área administrativa autenticada, back-end em Fastify/Prisma/PostgreSQL (Supabase).',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Fastify', 'PostgreSQL'],
    url: 'https://github.com/dev2Pedro/christmas-front',
    image: '/projects/christmas-elderly.png',
  },
  {
    name: 'Automações eSocial/FGTS/Edenred/Unico',
    description: 'RPA para portais externos de RH e DP: validação de PIS no FGTS (Caixa), tickets Edenred TEP, envelopes assinados (Unico) e relatórios de admissão/demissão via eSocial.',
    stack: ['Python', 'Selenium'],
    internal: true,
  },
]

export const tools: ToolCategory[] = [
  {
    category: 'Front-end',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    category: 'Back-end',
    items: ['Node.js', 'Express', 'Prisma', 'Redis', 'AdonisJS'],
  },
  {
    category: 'Mobile',
    items: ['React Native', 'Expo', 'Flutter', 'Dart'],
  },
  {
    category: 'RPA & Automação',
    items: ['Python', 'Selenium', 'n8n'],
  },
  {
    category: 'Banco de dados',
    items: ['PostgreSQL', 'MySQL'],
  },
  {
    category: 'Ferramentas',
    items: ['Git', 'GitHub', 'Docker', 'AWS (S3, Amplify)', 'Figma', 'Postman'],
  },
]

export const tracks: Track[] = [
  { title: 'West', artist: 'River Tiber, Daniel Caesar' },
  { title: 'Echo! (talk to me baby)', artist: 'The Poles' },
  { title: 'surf.', artist: 'wave to earth' },
  { title: 'holyland', artist: 'wave to earth' },
  { title: 'so real', artist: 'wave to earth' },
  { title: 'ocean floor', artist: 'wave to earth' },
  { title: 'bird', artist: 'wave to earth' },
  { title: 'nouvelle vague', artist: 'wave to earth' },
  { title: 'are you bored?', artist: 'wave to earth' },
  { title: 'pink', artist: 'wave to earth' },
  { title: 'homesick', artist: 'wave to earth' },
  { title: 'calla', artist: 'wave to earth' },
  { title: 'slow dive', artist: 'wave to earth' },
  { title: 'play with earth!', artist: 'wave to earth' },
  { title: 'seasons', artist: 'wave to earth' },
  { title: 'bad', artist: 'wave to earth' },
  { title: 'annie. (clean)', artist: 'wave to earth' },
  { title: 'WA-R-R', artist: 'Colde' },
  { title: 'Home', artist: 'The Poles' },
  { title: 'pueblo - remastered 2024', artist: 'wave to earth' },
  { title: 'purple lake', artist: 'wave to earth' },
  { title: 'beck.', artist: 'wave to earth' },
  { title: 'summer, night (feat. wave to earth)', artist: 'Jeon Jin Hee, wave to earth' },
  { title: 'sunny days', artist: 'wave to earth' },
  { title: 'Strawberry Moon', artist: 'The Poles' },
  { title: 'daisy.', artist: 'wave to earth' },
  { title: 'peach eyes', artist: 'wave to earth' },
  { title: 'Black Mountain', artist: 'wave to earth' },
  { title: 'bonfire', artist: 'wave to earth' },
  { title: 'We Find Love', artist: 'Daniel Caesar' },
  { title: "Evergreen (You Didn't Deserve Me At All)", artist: 'Omar Apollo' },
  { title: 'Ivy', artist: 'Frank Ocean' },
  { title: 'Self Control', artist: 'Frank Ocean' },
  { title: 'Seigfried', artist: 'Frank Ocean' },
  { title: 'Pink Matter', artist: 'Frank Ocean, André 3000' },
  { title: 'White Ferrari', artist: 'Frank Ocean' },
  { title: 'Who Knows', artist: 'Daniel Caesar' },
  { title: 'Bad Religion', artist: 'Frank Ocean' },
  { title: 'Moon River', artist: 'Frank Ocean' },
  { title: 'Transform (feat. Charlotte Day Wilson)', artist: 'Daniel Caesar, Charlotte Day Wilson' },
  { title: 'Loose', artist: 'Daniel Caesar' },
  { title: 'Hold Me Down', artist: 'Daniel Caesar' },
  { title: 'Superpowers', artist: 'Daniel Caesar' },
  { title: 'ARE WE STILL FRIENDS?', artist: 'Tyler, The Creator' },
  { title: 'Crack Rock', artist: 'Frank Ocean' },
  { title: 'Moon In Water', artist: 'The Poles' },
  { title: 'ride', artist: 'wave to earth' },
  { title: 'Always', artist: 'Daniel Caesar' },
  { title: 'Disillusioned (with serpentwithfeet)', artist: 'Daniel Caesar, serpentwithfeet' },
  { title: 'Glue Song (feat. Clairo)', artist: 'beabadoobee, Clairo' },
  { title: 'Infrunami', artist: 'Steve Lacy' },
  { title: 'evening glow', artist: 'wave to earth' },
  { title: 'Juna', artist: 'Clairo' },
  { title: 'light', artist: 'wave to earth' },
  { title: 'dried flower', artist: 'wave to earth' },
  { title: 'Ocho Rios', artist: 'Daniel Caesar' },
  { title: 'Toronto 2014 (with Mustafa)', artist: 'Daniel Caesar, Mustafa' },
  { title: 'pueblo', artist: 'wave to earth' },
  { title: 'Stargazing', artist: 'The Poles' },
  { title: 'sunburn', artist: 'wave to earth' },
  { title: 'heaven and hell', artist: 'wave to earth' },
  { title: 'Terrapin', artist: 'Clairo' },
  { title: 'C U Girl', artist: 'Steve Lacy' },
  { title: 'Japanese Denim', artist: 'Daniel Caesar' },
  { title: 'Please Do Not Lean (feat. BADBADNOTGOOD) - Bonus', artist: 'Daniel Caesar, BADBADNOTGOOD' },
  { title: 'Snow', artist: 'Kim Daniel' },
  { title: 'Blessed', artist: 'Daniel Caesar' },
  { title: "Emily's Song", artist: 'Daniel Caesar' },
  { title: 'No One Noticed (Extended English)', artist: 'The Marías' },
  { title: 'Sienna', artist: 'The Marías' },
  { title: 'Blue', artist: 'Kim Daniel' },
  { title: 'Made to Fall in Love', artist: 'Daniel Caesar' },
  { title: 'Skyline To', artist: 'Frank Ocean' },
  { title: 'Girl With The Tattoo Enter.lewd', artist: 'Miguel' },
  { title: 'For the First Time', artist: 'Mac DeMarco' },
  { title: 'One Night Only', artist: 'Sonder' },
  { title: 'Bags - Recorded At Electric Lady Studios', artist: 'Clairo' },
  { title: 'Shameless', artist: 'Avenoir' },
  { title: 'My Kind of Woman', artist: 'Mac DeMarco' },
  { title: 'Sierra Leone', artist: 'Frank Ocean' },
  { title: 'Godspeed', artist: 'Frank Ocean' },
  { title: 'Language', artist: 'Paperboy Fabe, Brent Faiyaz' },
  { title: 'ALL MINE', artist: 'Brent Faiyaz' },
  { title: 'What You Heard', artist: 'Sonder' },
  { title: 'Call On Me', artist: 'Daniel Caesar' },
  { title: 'Nomad', artist: 'Clairo' },
  { title: 'Cayendo (Side A - Acoustic)', artist: 'Frank Ocean' },
  { title: 'wave', artist: 'wave to earth' },
  { title: 'Streetcar', artist: 'Daniel Caesar' },
  { title: 'Sunny day', artist: 'beabadoobee' },
  { title: 'Bags', artist: 'Clairo' },
  { title: 'the perfect pair', artist: 'beabadoobee' },
  { title: '4EVER', artist: 'Clairo' },
  { title: 'No Other Heart', artist: 'Mac DeMarco' },
  { title: 'Art of War', artist: 'Avenoir' },
  { title: 'Get You (feat. Kali Uchis)', artist: 'Daniel Caesar, Kali Uchis' },
  { title: 'space', artist: 'The Poles' },
  { title: 'Go Away', artist: 'Troy Javelona' },
  { title: 'Add Up My Love', artist: 'Clairo' },
]
