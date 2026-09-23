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
