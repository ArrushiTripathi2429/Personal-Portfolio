import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import OpenSource from './components/opensource'
import Achievements from './components/achievements'
import Certifications from './components/Certifications'

export default function App() {
  return (
    <div className="noise min-h-screen">
      
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <OpenSource />
        <Certifications />
        <Achievements />
        <Contact />
      </main>
    </div>
  )
}
