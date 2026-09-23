'use client'

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'

export type Locale = 'pt' | 'en'

interface LanguageContextValue {
  locale: Locale
  toggleLocale: () => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const LOCALE_STORAGE_KEY = 'locale'

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('pt')

  useEffect(() => {
    // Syncs from localStorage after mount to avoid an SSR/client hydration
    // mismatch (localStorage doesn't exist during server render).
    const stored = localStorage.getItem(LOCALE_STORAGE_KEY)
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (stored === 'pt' || stored === 'en') setLocale(stored)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCALE_STORAGE_KEY, locale)
  }, [locale])

  const toggleLocale = () => {
    setLocale((prev) => (prev === 'pt' ? 'en' : 'pt'))
  }

  return (
    <LanguageContext.Provider value={{ locale, toggleLocale }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
