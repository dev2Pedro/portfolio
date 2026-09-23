import { getContributions, buildWeeks } from '@/lib/github'
import { profile } from '@/data/content'

const LEVEL_COLORS = [
  'bg-zinc-800',
  'bg-green-900',
  'bg-green-700',
  'bg-green-500',
  'bg-green-300',
]

export default async function Contributions() {
  const data = await getContributions(profile.githubUsername)

  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h2 className="mb-6 text-2xl font-semibold text-zinc-100">
        Contributions
      </h2>
      {!data ? (
        <p className="text-sm text-zinc-500">
          Não foi possível carregar as contribuições agora.
        </p>
      ) : (
        <div className="flex gap-1 overflow-x-auto">
          {buildWeeks(data.contributions).map((week, wi) => (
            <div key={wi} className="flex flex-col gap-1">
              {week.map((day, di) => (
                <div
                  key={di}
                  className={`h-3 w-3 rounded-sm ${
                    day ? LEVEL_COLORS[day.level] : 'bg-transparent'
                  }`}
                  title={
                    day ? `${day.date}: ${day.count} contribuições` : undefined
                  }
                />
              ))}
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
