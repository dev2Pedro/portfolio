import Image from 'next/image'
import { TECH_ICONS } from '@/lib/tech-icons'

export function TechBadge({ name, size = 28 }: { name: string; size?: number }) {
  const slug = TECH_ICONS[name]

  if (!slug) {
    return (
      <span className="text-xs text-zinc-500" title={name}>
        {name}
      </span>
    )
  }

  return (
    <Image
      src={`/icons/${slug}.svg`}
      alt={name}
      title={name}
      width={size}
      height={size}
      className="rounded-md"
    />
  )
}
