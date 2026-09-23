import Image from 'next/image'
import Link from 'next/link'
import { TechBadge } from '@/components/tech-badge'
import { projects } from '@/data/content'

export default function Projects() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h2 className="mb-10 text-3xl font-semibold text-zinc-100">
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
                <div className="relative h-40 flex-1 overflow-hidden rounded-lg border border-zinc-800">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="flex h-40 flex-1 items-center justify-center rounded-lg bg-gradient-to-br from-zinc-800 to-zinc-900 px-4 text-center text-sm text-zinc-500">
                  {project.name}
                </div>
              )}
              <div className="flex-1">
                <p className="text-lg text-zinc-400">{project.name}</p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  {project.stack.map((tech) => (
                    <TechBadge key={tech} name={tech} />
                  ))}
                </div>
                {project.url && !project.internal && (
                  <Link
                    href={project.url}
                    className="mt-4 inline-block text-sm text-zinc-300 underline"
                  >
                    Ver no GitHub
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
