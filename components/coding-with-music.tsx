import Image from 'next/image'
import Link from 'next/link'
import { SiSpotify } from 'react-icons/si'
import { getTrackArtwork } from '@/lib/itunes'
import { tracks } from '@/data/content'

export default async function CodingWithMusic() {
  const artworks = await Promise.all(
    tracks.map((track) => getTrackArtwork(track.title, track.artist)),
  )

  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h2 className="mb-1 text-2xl font-semibold text-zinc-100">
        Coding with music
      </h2>
      <p className="mb-6 text-sm text-zinc-400">
        Música é meu combustível pra focar e programar.
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        {tracks.map((track, i) => {
          const artwork = artworks[i]
          return (
            <Link
              key={`${track.artist}-${track.title}`}
              href={`https://open.spotify.com/search/${encodeURIComponent(
                `${track.title} ${track.artist}`,
              )}`}
              className="relative flex h-20 items-center overflow-hidden rounded-lg border border-zinc-800"
            >
              {artwork ? (
                <Image
                  src={artwork}
                  alt=""
                  fill
                  className="scale-150 object-cover opacity-70 blur-2xl"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900" />
              )}
              <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/50 to-black/80" />

              {artwork && (
                <Image
                  src={artwork}
                  alt={track.title}
                  width={64}
                  height={64}
                  className="relative z-10 ml-3 h-14 w-14 shrink-0 rounded-md object-cover"
                />
              )}

              <div className="relative z-10 ml-3 min-w-0 flex-1 pr-8">
                <p className="truncate text-sm font-medium text-zinc-100">
                  {track.title}
                </p>
                <p className="truncate text-xs text-zinc-300">
                  {track.artist}
                </p>
              </div>

              <div className="absolute right-2 top-2 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-black/40 backdrop-blur">
                <SiSpotify size={12} className="text-[#1ED760]" />
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
