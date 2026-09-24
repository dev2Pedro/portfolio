import { getTrackMedia, type TrackMedia } from '@/lib/itunes'
import { tracks, type Track } from '@/data/content'
import MusicStack from '@/components/music-stack'

const CONCURRENCY = 6

async function fetchAllMedia(items: Track[]): Promise<TrackMedia[]> {
  const results: TrackMedia[] = new Array(items.length)
  let cursor = 0

  async function worker() {
    while (cursor < items.length) {
      const i = cursor++
      results[i] = await getTrackMedia(items[i].title, items[i].artist)
    }
  }

  await Promise.all(
    Array.from({ length: Math.min(CONCURRENCY, items.length) }, worker),
  )
  return results
}

export default async function CodingWithMusic() {
  const media = await fetchAllMedia(tracks)
  const items = tracks.map((track, i) => ({ track, ...media[i] }))

  return <MusicStack items={items} />
}
