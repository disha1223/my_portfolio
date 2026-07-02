import { motion } from 'framer-motion'
import PinIcon from './PinIcon'
import TypewriterText from './TypewriterText'
import PhoneShowcase from './PhoneShowcase'

export default function Hero() {
  return (
    <section id="home" className="relative pt-10 sm:pt-16 pb-24 px-4 sm:px-6 overflow-hidden">
      {/* ambient blobs */}
      <div className="pointer-events-none absolute -top-32 -right-32 w-[36rem] h-[36rem] rounded-full bg-rose-light/20 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 -left-40 w-[30rem] h-[30rem] rounded-full bg-panel blur-3xl" />

      <div className="relative mx-auto max-w-6xl grid lg:grid-cols-2 gap-14 items-center">
        {/* left copy */}
        <div className="relative z-10 animate-fadeUp">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 glass px-4 py-1.5 text-xs font-mono text-rose-dark">
            <PinIcon className="w-3.5 h-3.5" />
            Open to software developer roles
          </span>

          <motion.h1
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 font-display text-5xl sm:text-6xl lg:text-[3.6rem] leading-[1.05] text-ink text-balance"
          >
            Hi, I'm <span className="italic text-rose font-medium">Disha.</span>
          </motion.h1>

          <p className="mt-4 font-body text-lg text-ink/70 flex flex-wrap items-center gap-x-3 gap-y-1">
            Software Developer <span className="w-1.5 h-1.5 rounded-full bg-rose inline-block" /> CS Undergrad @ Manipal
          </p>

          <p className="mt-5 max-w-xl min-h-[6.5rem] sm:min-h-[4.5rem] text-ink/60 leading-relaxed">
            <TypewriterText
              text="I build location-aware, mood-driven products with React, React Native and Node.js — from GPS-based discovery apps to ML models that turn raw data into decisions. Currently interning at Aroha Group, shipping cross-platform mobile experiences."
              speed={14}
              startDelay={600}
            />
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="inline-flex items-center gap-2 rounded-full bg-rose hover:bg-rose-dark text-white font-medium px-6 py-3.5 transition-all hover:shadow-lg hover:shadow-rose/30 hover:-translate-y-0.5"
            >
              View Projects
              <span aria-hidden>↘</span>
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-ink/15 hover:border-rose/40 hover:text-rose text-ink font-medium px-6 py-3.5 transition-colors"
            >
              ↓ Download Resume
            </a>
            <a
              href="mailto:disha.acharya1111@gmail.com"
              className="inline-flex items-center gap-2 text-ink/70 hover:text-rose font-medium px-2 py-3.5 transition-colors"
            >
              ✉ Contact Me
            </a>
          </div>

          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="mt-14 hidden sm:flex items-center gap-3 text-xs font-mono text-ink/40 hover:text-rose transition-colors"
          >
            <span className="w-8 h-px bg-ink/20" />
            SCROLL TO EXPLORE
            <span className="animate-bob inline-block">↓</span>
          </button>
        </div>

        {/* right visual */}
        <div className="relative animate-fadeUp" style={{ animationDelay: '0.2s' }}>
          <PhoneShowcase />
        </div>
      </div>
    </section>
  )
}