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
  SiFigma,
  SiPostman,
  SiExpo,
  SiFlutter,
  SiDart,
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
  Figma: SiFigma,
  Postman: SiPostman,
  Expo: SiExpo,
  Flutter: SiFlutter,
  Dart: SiDart,
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
