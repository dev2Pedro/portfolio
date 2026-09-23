'use client'

import Image from 'next/image'
import Link from 'next/link'
import { SiSpotify } from 'react-icons/si'
import Stack from '@/components/stack'
import type { Track } from '@/data/content'

interface MusicStackProps {
  items: { track: Track; artwork: string | null }[]
}

export default function MusicStack({ items }: MusicStackProps) {
  const cards = items.map(({ track, artwork }) => (
    <Link
      key={`${track.artist}-${track.title}`}
      href={`https://open.spotify.com/search/${encodeURIComponent(
        `${track.title} ${track.artist}`,
      )}`}
      draggable={false}
      className="relative block h-full w-full cursor-grab active:cursor-grabbing"
    >
      {artwork ? (
        <Image
          src={artwork}
          alt={track.title}
          fill
          className="pointer-events-none object-cover"
        />
      ) : (
        <div className="h-full w-full bg-gradient-to-br from-zinc-800 to-zinc-900" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />
      <div className="absolute right-0 bottom-0 left-0 p-4">
        <p className="truncate text-sm font-medium text-white">
          {track.title}
        </p>
        <p className="truncate text-xs text-zinc-300">{track.artist}</p>
      </div>
      <div className="absolute top-3 right-3 flex h-7 w-7 items-center justify-center rounded-full bg-black/40 backdrop-blur">
        <SiSpotify size={14} className="text-[#1ED760]" />
      </div>
    </Link>
  ))

  return (
    <div className="mx-auto h-72 w-72">
      <Stack
        cards={cards}
        randomRotation
        sensitivity={150}
        autoplay
        autoplayDelay={2800}
        pauseOnHover
      />
    </div>
  )
}
