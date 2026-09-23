interface ITunesResult {
  trackName: string
  artistName: string
  artworkUrl100: string
}

export async function getTrackArtwork(
  title: string,
  artist: string,
): Promise<string | null> {
  try {
    const query = encodeURIComponent(`${title} ${artist}`)
    const res = await fetch(
      `https://itunes.apple.com/search?term=${query}&entity=song&limit=5`,
      { next: { revalidate: 86400 } },
    )
    if (!res.ok) return null
    const data = (await res.json()) as { results: ITunesResult[] }

    const sameArtist = data.results.filter((r) =>
      r.artistName.toLowerCase().includes(artist.toLowerCase()),
    )
    if (sameArtist.length === 0) return null

    const exactTitle = sameArtist.find(
      (r) => r.trackName.toLowerCase() === title.toLowerCase(),
    )
    const artworkUrl100 = (exactTitle ?? sameArtist[0]).artworkUrl100

    return artworkUrl100.replace('100x100bb', '600x600bb')
  } catch {
    return null
  }
}
