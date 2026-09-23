import { getTrackMedia } from '@/lib/itunes'
import { tracks } from '@/data/content'
import MusicStack from '@/components/music-stack'

export default async function CodingWithMusic() {
  const media = await Promise.all(
    tracks.map((track) => getTrackMedia(track.title, track.artist)),
  )
  const items = tracks.map((track, i) => ({ track, ...media[i] }))

  return <MusicStack items={items} />
}
