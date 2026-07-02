import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import AskAI from './components/AskAI'
import Contact from './components/Contact'
import Footer from './components/Footer'


export default function App() {
  return (
    <div className="relative min-h-screen bg-blush">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <AskAI />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
