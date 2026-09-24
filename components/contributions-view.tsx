'use client'

import { buildWeeks, type ContributionsResponse } from '@/lib/github'
import { translations } from '@/data/i18n'
import { useLanguage } from '@/components/language-provider'

const LEVEL_COLORS = [
  'bg-zinc-200 dark:bg-zinc-800',
  'bg-green-300 dark:bg-green-900',
  'bg-green-500 dark:bg-green-700',
  'bg-green-600 dark:bg-green-500',
  'bg-green-700 dark:bg-green-300',
]

export default function ContributionsView({
  data,
}: {
  data: ContributionsResponse | null
}) {
  const { locale } = useLanguage()
  const t = translations[locale]

  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h2 className="mb-6 font-heading text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
        {t.sections.contributionsTitle}
      </h2>
      {!data ? (
        <p className="text-sm text-zinc-500">
          {t.sections.contributionsFallback}
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
                    day
                      ? `${day.date}: ${day.count} ${
                          locale === 'pt' ? 'contribuições' : 'contributions'
                        }`
                      : undefined
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
