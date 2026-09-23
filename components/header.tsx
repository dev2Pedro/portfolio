import Link from 'next/link'
import { Mail } from 'lucide-react'
import { SiGithub } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa6'
import { profile } from '@/data/content'

export default function Header() {
  return (
    <header className="mx-auto max-w-3xl px-6 pt-16 pb-8">
      <h1 className="font-heading text-3xl font-bold text-zinc-100">
        {profile.name}
      </h1>
      <p className="mt-1 text-zinc-400">{profile.role}</p>
      <div className="mt-6 space-y-4 text-zinc-300">
        {profile.bio.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
      <div className="mt-6 flex gap-4">
        <Link
          href={profile.githubUrl}
          className="flex items-center gap-2 text-sm text-zinc-300 hover:text-zinc-100"
        >
          <SiGithub size={16} /> GitHub
        </Link>
        <Link
          href={profile.linkedinUrl}
          className="flex items-center gap-2 text-sm text-zinc-300 hover:text-zinc-100"
        >
          <FaLinkedin size={16} /> LinkedIn
        </Link>
        <Link
          href={`mailto:${profile.email}`}
          className="flex items-center gap-2 text-sm text-zinc-300 hover:text-zinc-100"
        >
          <Mail size={16} /> Email
        </Link>
      </div>
    </header>
  )
}
