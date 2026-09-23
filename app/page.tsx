import Header from '@/components/header'
import Projects from '@/components/projects'
import Experience from '@/components/experience'
import Tools from '@/components/tools'
import Contributions from '@/components/contributions'
import CodingWithMusic from '@/components/coding-with-music'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Projects />
      <Experience />
      <Tools />
      <Contributions />
      <CodingWithMusic />
      <Contact />
      <Footer />
    </main>
  )
}
