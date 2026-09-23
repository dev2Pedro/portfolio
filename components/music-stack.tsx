'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { Play, Pause } from 'lucide-react'
import Stack from '@/components/stack'
import type { Track } from '@/data/content'

interface MusicItem {
  track: Track
  artwork: string | null
  previewUrl: string | null
}

export default function MusicStack({ items }: { items: MusicItem[] }) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playingKey, setPlayingKey] = useState<string | null>(null)

  const togglePlay = (key: string, previewUrl: string) => {
    const audio = audioRef.current
    if (!audio) return

    if (playingKey === key) {
      audio.pause()
      setPlayingKey(null)
      return
    }

    audio.src = previewUrl
    audio.play()
    setPlayingKey(key)
  }

  const cards = items.map(({ track, artwork, previewUrl }) => {
    const key = `${track.artist}-${track.title}`
    const isPlaying = playingKey === key

    return (
      <div
        key={key}
        className="relative h-full w-full cursor-grab select-none active:cursor-grabbing"
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
        {previewUrl && (
          <button
            type="button"
            onClick={() => togglePlay(key, previewUrl)}
            className="absolute top-3 right-3 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-black/50 backdrop-blur hover:bg-black/70"
          >
            {isPlaying ? (
              <Pause size={14} className="fill-white text-white" />
            ) : (
              <Play size={14} className="fill-white text-white" />
            )}
          </button>
        )}
      </div>
    )
  })

  return (
    <div className="mx-auto h-72 w-72">
      <audio ref={audioRef} onEnded={() => setPlayingKey(null)} />
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
