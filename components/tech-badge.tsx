import Image from 'next/image'
import { TECH_ICONS } from '@/lib/tech-icons'

export function TechBadge({ name, size = 28 }: { name: string; size?: number }) {
  const slug = TECH_ICONS[name]

  return (
    <span className="group relative inline-flex items-center justify-center">
      {slug ? (
        <Image
          src={`/icons/${slug}.svg`}
          alt={name}
          width={size}
          height={size}
          className="rounded-md"
        />
      ) : (
        <span className="text-xs text-zinc-500">{name}</span>
      )}
      <span className="pointer-events-none absolute -top-8 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-md bg-zinc-900 px-2 py-1 text-xs text-zinc-100 opacity-0 shadow-md transition-opacity duration-150 group-hover:opacity-100 dark:bg-zinc-100 dark:text-zinc-900">
        {name}
      </span>
    </span>
  )
}
