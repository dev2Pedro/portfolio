interface ITunesResult {
  trackName: string
  artistName: string
  artworkUrl100: string
  previewUrl?: string
}

export interface TrackMedia {
  artwork: string | null
  previewUrl: string | null
}

async function fetchWithRetry(url: string, attempts = 3): Promise<Response> {
  let lastRes: Response | undefined
  for (let i = 0; i < attempts; i++) {
    const res = await fetch(url, { next: { revalidate: 86400 } })
    if (res.ok) return res
    lastRes = res
    if (res.status !== 403 && res.status !== 429) break
    await new Promise((resolve) => setTimeout(resolve, 500 * (i + 1)))
  }
  return lastRes!
}

export async function getTrackMedia(
  title: string,
  artist: string,
): Promise<TrackMedia> {
  try {
    const query = encodeURIComponent(`${title} ${artist}`)
    const res = await fetchWithRetry(
      `https://itunes.apple.com/search?term=${query}&entity=song&limit=5`,
    )
    if (!res.ok) return { artwork: null, previewUrl: null }
    const data = (await res.json()) as { results: ITunesResult[] }

    const sameArtist = data.results.filter((r) =>
      r.artistName.toLowerCase().includes(artist.toLowerCase()),
    )
    if (sameArtist.length === 0) return { artwork: null, previewUrl: null }

    const exactTitle = sameArtist.find(
      (r) => r.trackName.toLowerCase() === title.toLowerCase(),
    )
    const match = exactTitle ?? sameArtist[0]

    return {
      artwork: match.artworkUrl100.replace('100x100bb', '600x600bb'),
      previewUrl: match.previewUrl ?? null,
    }
  } catch {
    return { artwork: null, previewUrl: null }
  }
}
