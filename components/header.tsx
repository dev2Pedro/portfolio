'use client'

import Link from 'next/link'
import { Mail, BadgeCheck } from 'lucide-react'
import { SiGithub } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa6'
import { profile } from '@/data/content'
import { translations } from '@/data/i18n'
import { useLanguage } from '@/components/language-provider'
import ThemeToggle from '@/components/theme-toggle'
import LanguageToggle from '@/components/language-toggle'

export default function Header() {
  const { locale } = useLanguage()
  const t = translations[locale]
  const [roleMain, ...roleRest] = t.profile.role.split(' | ')

  return (
    <header className="mx-auto max-w-3xl px-6 pt-16 pb-8">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/avatar.jpg"
            alt={profile.name}
            className="h-36 w-36 shrink-0 rounded-full bg-zinc-200 object-cover dark:bg-zinc-800"
          />
          <div>
            <div className="flex items-center gap-1.5">
              <h1 className="font-heading text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                {profile.name}
              </h1>
              <BadgeCheck size={18} className="text-blue-500" />
            </div>
            <div className="mt-1 flex gap-3">
              <Link
                href={profile.githubUrl}
                aria-label="GitHub"
                className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
              >
                <SiGithub size={16} />
              </Link>
              <Link
                href={profile.linkedinUrl}
                aria-label="LinkedIn"
                className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
              >
                <FaLinkedin size={16} />
              </Link>
              <Link
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
              >
                <Mail size={16} />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex shrink-0 gap-2">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
      <p className="mt-6 text-2xl font-bold text-zinc-900 dark:text-zinc-100">
        {roleMain}
        {roleRest.length > 0 && (
          <span className="font-normal text-zinc-500 dark:text-zinc-400">
            {' '}
            — {roleRest.join(' | ')}
          </span>
        )}
      </p>
      <div className="mt-4 space-y-4 text-zinc-700 dark:text-zinc-300">
        {t.profile.bio.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </header>
  )
}
