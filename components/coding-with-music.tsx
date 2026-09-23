import { getTrackArtwork } from '@/lib/itunes'
import { tracks } from '@/data/content'
import MusicStack from '@/components/music-stack'

export default async function CodingWithMusic() {
  const artworks = await Promise.all(
    tracks.map((track) => getTrackArtwork(track.title, track.artist)),
  )
  const items = tracks.map((track, i) => ({ track, artwork: artworks[i] }))

  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h2 className="mb-1 text-2xl font-semibold text-zinc-100">
        Coding with music
      </h2>
      <p className="mb-6 text-sm text-zinc-400">
        Música é meu combustível pra focar e programar. Arraste os cards ou
        deixa rolar sozinho.
      </p>
      <MusicStack items={items} />
    </section>
  )
}
