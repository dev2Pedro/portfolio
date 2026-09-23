export interface ContributionDay {
  date: string
  count: number
  level: number
}

export interface ContributionsResponse {
  contributions: ContributionDay[]
}

export async function getContributions(
  username: string,
): Promise<ContributionsResponse | null> {
  try {
    const res = await fetch(
      `https://github.com/users/${username}/contributions`,
      { next: { revalidate: 3600 } },
    )
    if (!res.ok) return null
    const html = await res.text()
    const contributions = parseContributionsHtml(html)
    if (contributions.length === 0) return null
    return { contributions }
  } catch {
    return null
  }
}

function parseContributionsHtml(html: string): ContributionDay[] {
  const counts = new Map<string, number>()
  const tooltipRegex = /<tool-tip[^>]*for="([^"]+)"[^>]*>([^<]*)<\/tool-tip>/g
  let tooltipMatch: RegExpExecArray | null
  while ((tooltipMatch = tooltipRegex.exec(html))) {
    const [, forId, text] = tooltipMatch
    const countMatch = text.match(/^(\d+)/)
    counts.set(forId, countMatch ? Number(countMatch[1]) : 0)
  }

  const dayTags =
    html.match(/<td[^>]*class="ContributionCalendar-day"[^>]*><\/td>/g) ?? []

  const days: ContributionDay[] = []
  for (const tag of dayTags) {
    const date = tag.match(/data-date="([\d-]+)"/)?.[1]
    if (!date) continue
    const level = Number(tag.match(/data-level="(\d)"/)?.[1] ?? '0')
    const id = tag.match(/id="([^"]+)"/)?.[1]
    const count = id ? (counts.get(id) ?? 0) : 0
    days.push({ date, count, level })
  }
  return days
}

export function buildWeeks(
  days: ContributionDay[],
): (ContributionDay | null)[][] {
  const today = new Date().toISOString().slice(0, 10)
  const sorted = days
    .filter((day) => day.date <= today)
    .sort((a, b) => a.date.localeCompare(b.date))
  const last365 = sorted.slice(-365)
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
