import Header from '@/components/header'
import Projects from '@/components/projects'
import Experience from '@/components/experience'
import Tools from '@/components/tools'
import Contributions from '@/components/contributions'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Header />
      <Projects />
      <Experience />
      <Tools />
      <Contributions />
    </main>
  )
}
