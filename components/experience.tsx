import { experience } from '@/data/content'

export default function Experience() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h2 className="mb-6 text-2xl font-semibold text-zinc-100">
        Experiences
      </h2>
      <div className="space-y-6">
        {experience.map((item) => (
          <div
            key={item.company}
            className="rounded-lg border border-zinc-800 p-5"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-zinc-100">{item.role}</p>
                <p className="text-sm text-zinc-400">{item.company}</p>
              </div>
              <span className="text-sm text-zinc-500">{item.period}</span>
            </div>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-300">
              {item.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
