import { TechBadge } from '@/components/tech-badge'
import { tools } from '@/data/content'

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
            className="flex flex-col gap-3 border-b border-zinc-800 pb-4 sm:flex-row sm:items-center"
          >
            <span className="w-40 shrink-0 text-sm text-zinc-500">
              {category.category}
            </span>
            <div className="flex flex-wrap items-center gap-3">
              {category.items.map((item) => (
                <TechBadge key={item} name={item} size={32} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
