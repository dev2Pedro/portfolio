export interface ContributionDay {
  date: string
  count: number
  level: number
}

export interface ContributionsResponse {
  total: Record<string, number>
  contributions: ContributionDay[]
}

export async function getContributions(
  username: string,
): Promise<ContributionsResponse | null> {
  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${username}`,
      { next: { revalidate: 3600 } },
    )
    if (!res.ok) return null
    return (await res.json()) as ContributionsResponse
  } catch {
    return null
  }
}

export function buildWeeks(
  days: ContributionDay[],
): (ContributionDay | null)[][] {
  const last365 = days.slice(-365)
  if (last365.length === 0) return []

  const weeks: (ContributionDay | null)[][] = []
  let currentWeek: (ContributionDay | null)[] = []

  const firstDayOfWeek = new Date(last365[0].date).getDay()
  for (let i = 0; i < firstDayOfWeek; i++) currentWeek.push(null)

  for (const day of last365) {
    currentWeek.push(day)
    if (currentWeek.length === 7) {
      weeks.push(currentWeek)
      currentWeek = []
    }
  }
  if (currentWeek.length > 0) weeks.push(currentWeek)

  return weeks
}
