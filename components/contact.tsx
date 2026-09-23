import { profile } from '@/data/content'

export default function Contact() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h2 className="mb-4 text-2xl font-semibold text-zinc-100">
        Get in touch
      </h2>
      <a href={`mailto:${profile.email}`} className="text-zinc-300 underline">
        {profile.email}
      </a>
    </section>
  )
}
