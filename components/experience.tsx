'use client'

import { experience } from '@/data/content'
import { translations } from '@/data/i18n'
import { useLanguage } from '@/components/language-provider'

export default function Experience() {
  const { locale } = useLanguage()
  const t = translations[locale]

  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h2 className="mb-6 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
        Experiences
      </h2>
      <div className="space-y-6">
        {experience.map((item, i) => {
          const tItem = t.experience[i]
          return (
            <div
              key={item.company}
              className="rounded-lg border border-zinc-200 p-5 dark:border-zinc-800"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-zinc-900 dark:text-zinc-100">
                    {tItem.role}
                  </p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    {item.company}
                  </p>
                </div>
                <span className="text-sm text-zinc-500">{tItem.period}</span>
              </div>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                {tItem.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </section>
  )
}
