# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Público misto, priorizando recrutadores/RH técnico (triagem rápida, decidem em segundos se chamam pra entrevista), servido também por tech leads avaliando profundidade de código/arquitetura e por clientes de freelance/consultoria buscando prova de entrega.

## Product Purpose

Portfólio pessoal de Pedro Cristóvão, desenvolvedor full stack. Existe para demonstrar experiência real em back-end (APIs REST, AdonisJS, Node.js/Express/Fastify), automação RPA (Python/Selenium) e front-end moderno (React/Next.js), com apps mobile (React Native/Expo) e projetos em Flutter/Dart. Sucesso = visitante identifica rapidamente a stack e o nível de senioridade, e avança pra contato/entrevista/proposta.

## Positioning

Combinação pouco comum: back-end sólido em produção (SSO, auditoria, integração de microsserviços) somado a automação RPA que já economiza tempo operacional real em ambiente corporativo (Servfaz). Não é portfólio de projetos de estudo isolados — é evidência de ciclo completo de sistemas internos em produção.

## Operating Context

Site estático/SSR em Next.js (App Router), deploy na Vercel. Seções fixas na home, nesta ordem: Header, Projects, Experience, Tools, Contributions (GitHub), Coding With Music, Contact, Footer. Suporta tema claro/escuro e alternância de idioma PT/EN (`components/language-provider.tsx`, `components/theme-provider.tsx`). Seção de música toca faixas com play/pause e slider de volume (`components/wake-slider.tsx`, `components/music-stack.tsx`).

## Capabilities and Constraints

- Conteúdo centralizado em `data/content.ts` (perfil, experiência, projetos, ferramentas, faixas de música) e `data/i18n.ts` (traduções PT/EN).
- Stack técnica do próprio site: Next.js 16, React 19, Tailwind CSS v4, `motion` (animações), `lucide-react`/`react-icons`.
- Projeto de automação RPA interno (eSocial/FGTS/Edenred/Unico) é marcado `internal: true` — sem link público, sem repositório exposto.
- Não expor nomes internos de sistemas da Servfaz além do que já está documentado em `data/content.ts` (ex.: "Conecta" já é público no conteúdo atual; não detalhar além disso).

## Brand Commitments

- Nome: Pedro Cristóvão. Grafia da empresa atual: **Servfaz** (nunca "ServFaz").
- Tom sério/profissional, sem humor ou informalidade excessiva.
- GitHub: dev2Pedro · LinkedIn: devbypedro.

## Evidence on Hand

- Experiência profissional real na Servfaz (desde 2024) descrita em `data/content.ts`: APIs REST em AdonisJS, módulo de SSO, módulo de auditoria/logs, sistema de gestão de frota, app mobile Conecta, customização Odoo 18, automações RPA, automações n8n.
- Projetos com repositório público: Upload.ai, Christmas Elderly/API (parceria com turma de Psicologia da Unisociesc-Blumenau).
- Projeto interno sem link público: Automações eSocial/FGTS/Edenred/Unico.
- Nenhum depoimento, métrica de cliente ou case de terceiros documentado — não fabricar nenhum desses.

## Product Principles

1. Credibilidade acima de expressão: toda alegação técnica precisa rastrear pra algo em `data/content.ts` ou no código; nada inventado.
2. Escaneável primeiro: recrutador decide em segundos — hierarquia visual deve entregar stack e senioridade sem esforço de leitura.
3. Profundidade disponível pra quem procura: tech lead e cliente de freelance encontram detalhe de arquitetura e prova de entrega sem que isso atrapalhe a leitura rápida do recrutador.
4. Identidade pessoal (música, tema, idioma) é diferencial de memorabilidade, mas nunca compete com a leitura da experiência profissional.

## Accessibility & Inclusion

Nenhum requisito de acessibilidade específico foi confirmado além dos padrões web esperados (contraste em ambos os temas, navegação por teclado nos toggles/slider).
