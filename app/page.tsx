import Header from '@/components/header'
import Projects from '@/components/projects'
import Experience from '@/components/experience'
import Tools from '@/components/tools'
import Contributions from '@/components/contributions'
import CodingWithMusic from '@/components/coding-with-music'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Header />
      <Projects />
      <Experience />
      <Tools />
      <Contributions />
      <CodingWithMusic />
    </main>
  )
}
