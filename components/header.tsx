'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Mail, BadgeCheck } from 'lucide-react'
import { SiGithub } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa6'
import { profile } from '@/data/content'
import { translations } from '@/data/i18n'
import { useLanguage } from '@/components/language-provider'
import ThemeToggle from '@/components/theme-toggle'
import LanguageToggle from '@/components/language-toggle'

const BIO_HIGHLIGHTS: Record<string, string[][]> = {
  pt: [
    ['back-end', 'automações RPA', 'front-end moderno'],
    ['autenticação/SSO', 'integração de microsserviços', 'economizam tempo operacional'],
  ],
  en: [
    ['back-end', 'RPA automation', 'modern front-end'],
    ['authentication/SSO', 'microservices integration', 'deliveries that save operational time'],
  ],
}

function highlightBio(text: string, keywords: string[]) {
  const nodes: React.ReactNode[] = []
  let rest = text
  let key = 0
  for (const kw of keywords) {
    const idx = rest.indexOf(kw)
    if (idx === -1) continue
    if (idx > 0) nodes.push(rest.slice(0, idx))
    nodes.push(
      <strong key={key++} className="font-semibold">
        {kw}
      </strong>,
    )
    rest = rest.slice(idx + kw.length)
  }
  nodes.push(rest)
  return nodes
}

export default function Header() {
  const { locale } = useLanguage()
  const t = translations[locale]
  const [roleMain, ...roleRest] = t.profile.role.split(' | ')

  return (
    <header className="mx-auto max-w-3xl px-6 pt-16 pb-8">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <Image
            src="/avatar.jpg"
            alt={profile.name}
            width={144}
            height={144}
            priority
            className="h-24 w-24 shrink-0 rounded-full bg-zinc-200 object-cover sm:h-36 sm:w-36 dark:bg-zinc-800"
          />
          <div>
            <div className="flex items-center gap-1.5">
              <h1 className="font-heading text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                {profile.name}
              </h1>
              <BadgeCheck
                size={18}
                className="text-blue-500"
                role="img"
                aria-label={locale === 'pt' ? 'Perfil verificado' : 'Verified profile'}
              />
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
          <p key={i}>{highlightBio(paragraph, BIO_HIGHLIGHTS[locale]?.[i] ?? [])}</p>
        ))}
      </div>
    </header>
  )
}
