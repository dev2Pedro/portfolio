'use client'

import Image from 'next/image'
import Link from 'next/link'
import { TechBadge } from '@/components/tech-badge'
import { projects } from '@/data/content'
import { translations } from '@/data/i18n'
import { useLanguage } from '@/components/language-provider'

export default function Projects() {
  const { locale } = useLanguage()
  const t = translations[locale]

  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h2 className="mb-10 text-3xl font-semibold text-zinc-900 dark:text-zinc-100">
        Work and projects
      </h2>
      <div className="space-y-16">
        {projects.map((project, i) => {
          const reversed = i % 2 === 1
          return (
            <div
              key={project.name}
              className={`flex flex-col gap-6 sm:items-center ${
                reversed ? 'sm:flex-row-reverse' : 'sm:flex-row'
              }`}
            >
              {project.image ? (
                <div className="relative h-40 flex-1 overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-800">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="flex h-40 flex-1 items-center justify-center rounded-lg bg-gradient-to-br from-zinc-200 to-zinc-300 px-4 text-center text-sm text-zinc-600 dark:from-zinc-800 dark:to-zinc-900 dark:text-zinc-500">
                  {project.name}
                </div>
              )}
              <div className="flex-1">
                <p className="text-lg text-zinc-600 dark:text-zinc-400">
                  {project.name}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                  {t.projects[i].description}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  {project.stack.map((tech) => (
                    <TechBadge key={tech} name={tech} />
                  ))}
                </div>
                {project.url && !project.internal && (
                  <Link
                    href={project.url}
                    className="mt-4 inline-block text-sm text-zinc-600 underline dark:text-zinc-300"
                  >
                    {t.sections.viewOnGithub}
                  </Link>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
