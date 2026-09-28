'use client'

import { useId, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { Building2, Calendar, ChevronDown } from 'lucide-react'
import { experience } from '@/data/content'
import { translations } from '@/data/i18n'
import { useLanguage } from '@/components/language-provider'

export default function Experience() {
  const { locale } = useLanguage()
  const t = translations[locale]
  const reduceMotion = !!useReducedMotion()
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const baseId = useId()

  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h2 className="mb-6 font-heading text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
        {t.sections.experiencesTitle}
      </h2>
      <div className="space-y-6">
        {experience.map((item, i) => {
          const tItem = t.experience[i]
          const isOpen = openIndex === i
          const panelId = `${baseId}-panel-${i}`
          const toggle = () => setOpenIndex((prev) => (prev === i ? null : i))

          return (
            <div key={item.company} className="rounded-lg bg-zinc-100 p-5 dark:bg-zinc-900">
              <button
                type="button"
                onClick={toggle}
                aria-expanded={isOpen}
                aria-controls={panelId}
                aria-label={`${tItem.role} — ${item.company}. ${isOpen ? t.sections.showLess : t.sections.showMore}`}
                className="flex w-full cursor-pointer items-center justify-between gap-4 rounded-md text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
              >
                <div className="flex items-center gap-3">
                  <Building2
                    size={20}
                    className="shrink-0 text-zinc-500 dark:text-zinc-400"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-medium text-zinc-900 dark:text-zinc-100">{tItem.role}</p>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">{item.company}</p>
                  </div>
                </div>
                <div className="flex shrink-0 items-center gap-3">
                  <span className="flex items-center gap-1.5 text-sm text-zinc-500 dark:text-zinc-400">
                    <Calendar size={14} aria-hidden="true" />
                    {tItem.period}
                  </span>
                  <ChevronDown
                    size={16}
                    className={`shrink-0 text-zinc-500 transition-transform duration-200 dark:text-zinc-400 ${isOpen ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  />
                </div>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={panelId}
                    key="panel"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={reduceMotion ? { duration: 0 } : { duration: 0.2, ease: 'easeOut' }}
                    className="overflow-hidden"
                  >
                    <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                      {tItem.bullets.map((bullet, bi) => (
                        <li key={bi}>{bullet}</li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </section>
  )
}
