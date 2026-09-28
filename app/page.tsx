import { Suspense } from 'react'
import Header from '@/components/header'
import Projects from '@/components/projects'
import Experience from '@/components/experience'
import Tools from '@/components/tools'
import Contributions from '@/components/contributions'
import CodingWithMusic from '@/components/coding-with-music'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

function ContributionsSkeleton() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <div className="mb-6 h-7 w-40 animate-pulse rounded-md bg-zinc-200 dark:bg-zinc-800" />
      <div className="h-[7.75rem] w-full animate-pulse rounded-md bg-zinc-100 dark:bg-zinc-900" />
    </section>
  )
}

function MusicSkeleton() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <div className="mb-1 h-7 w-28 animate-pulse rounded-md bg-zinc-200 dark:bg-zinc-800" />
      <div className="mb-6 h-4 w-72 max-w-full animate-pulse rounded-md bg-zinc-100 dark:bg-zinc-900" />
      <div className="mx-auto w-72">
        <div className="h-72 w-72 animate-pulse rounded-2xl bg-zinc-200 dark:bg-zinc-800" />
        <div className="mt-5 h-7 w-full animate-pulse rounded-full bg-zinc-100 dark:bg-zinc-900" />
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Projects />
      <Experience />
      <Tools />
      <Suspense fallback={<ContributionsSkeleton />}>
        <Contributions />
      </Suspense>
      <Suspense fallback={<MusicSkeleton />}>
        <CodingWithMusic />
      </Suspense>
      <Contact />
      <Footer />
    </main>
  )
}
