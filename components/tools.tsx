import { Laptop, Server, Smartphone, Bot, Database, Wrench } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { TechBadge } from '@/components/tech-badge'
import { tools } from '@/data/content'

const CATEGORY_ICONS: Record<string, LucideIcon> = {
  'Front-end': Laptop,
  'Back-end': Server,
  Mobile: Smartphone,
  'RPA & Automação': Bot,
  'Banco de dados': Database,
  Ferramentas: Wrench,
}

export default function Tools() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h2 className="mb-1 text-2xl font-semibold text-zinc-100">
        Tools I use
      </h2>
      <p className="mb-8 text-sm text-zinc-400">
        Seleção de ferramentas usadas no dia a dia pra construir soluções escaláveis e de alta performance.
      </p>
      <div className="space-y-5">
        {tools.map((category) => {
          const CategoryIcon = CATEGORY_ICONS[category.category]
          return (
            <div
              key={category.category}
              className="flex flex-col gap-3 border-b border-zinc-800 pb-5 sm:flex-row sm:items-center"
            >
              <div className="flex w-44 shrink-0 items-center gap-2 text-sm text-zinc-500">
                {CategoryIcon && <CategoryIcon size={16} />}
                {category.category}
              </div>
              <div className="flex flex-wrap items-center gap-4">
                {category.items.map((item) => (
                  <TechBadge key={item} name={item} size={32} />
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
