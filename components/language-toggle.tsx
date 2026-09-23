'use client'

import { useLanguage } from '@/components/language-provider'

export default function LanguageToggle() {
  const { locale, toggleLocale } = useLanguage()

  return (
    <button
      type="button"
      onClick={toggleLocale}
      aria-label={locale === 'pt' ? 'Switch to English' : 'Mudar para Português'}
      className="flex h-8 w-10 cursor-pointer items-center justify-center rounded-md border border-zinc-200 text-xs font-medium text-zinc-600 hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-900"
    >
      {locale === 'pt' ? 'EN' : 'PT'}
    </button>
  )
}
