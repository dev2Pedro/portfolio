import Link from 'next/link'
import { tracks } from '@/data/content'

export default function CodingWithMusic() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h2 className="mb-1 text-2xl font-semibold text-zinc-100">
        Coding with music
      </h2>
      <p className="mb-6 text-sm text-zinc-400">
        Música é meu combustível pra focar e programar.
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        {tracks.map((track) => (
          <Link
            key={`${track.artist}-${track.title}`}
            href={`https://open.spotify.com/search/${encodeURIComponent(
              `${track.title} ${track.artist}`,
            )}`}
            className="flex items-center justify-between rounded-lg border border-zinc-800 p-4 hover:border-zinc-700"
          >
            <div>
              <p className="text-sm font-medium text-zinc-100">
                {track.title}
              </p>
              <p className="text-xs text-zinc-500">{track.artist}</p>
            </div>
            <span className="text-xs text-zinc-500">Ouvir</span>
          </Link>
        ))}
      </div>
    </section>
  )
}
