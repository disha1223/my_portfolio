import PinIcon from './PinIcon'

const BADGES = [
  { label: 'React Native', top: '6%', left: '2%', delay: '0s' },
  { label: 'TypeScript', top: '14%', right: '0%', delay: '0.6s' },
  { label: 'MongoDB', top: '68%', right: '4%', delay: '1.1s' },
  { label: 'Node.js', top: '78%', left: '0%', delay: '1.6s' },
  { label: 'AWS EC2', top: '42%', left: '-4%', delay: '2.1s' },
]

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

          <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-[3.6rem] leading-[1.05] text-ink text-balance">
            Hi, I'm <span className="italic text-rose font-medium">Disha.</span>
          </h1>

          <p className="mt-4 font-body text-lg text-ink/70 flex flex-wrap items-center gap-x-3 gap-y-1">
            Software Developer <span className="w-1.5 h-1.5 rounded-full bg-rose inline-block" /> CS Undergrad @ Manipal
          </p>

          <p className="mt-5 max-w-xl text-ink/60 leading-relaxed">
             A Computer Science undergrad who enjoys building full-stack products and
  training ML models — comfortable across Python, Node.js, MongoDB, and AWS.
  Currently interning as a Software Developer at Aroha Group
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
              href="/FIN.pdf"
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
        <div className="relative">
          <div className="relative mx-auto max-w-md aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl shadow-rose/20 bg-gradient-to-br from-panel to-rose-light/30">
            <img
              src="/images/me.jpeg"
              alt="Disha PV"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* subtle code-panel decoration, echoes reference's "code overlay" */}
            <div className="absolute top-4 left-4 glass rounded-xl px-3 py-2 text-[10px] font-mono text-ink/50 leading-tight">
              function develop() {'{'}<br />
              &nbsp;&nbsp;passion, coffee<br />
              {'}'}
            </div>
          </div>

          {/* floating pin badges */}
          {BADGES.map((b) => (
            <div
              key={b.label}
              className="absolute hidden sm:flex items-center gap-1.5 glass rounded-full px-3.5 py-2 text-xs font-medium text-ink shadow-lg animate-bob"
              style={{ top: b.top, left: b.left, right: b.right, animationDelay: b.delay }}
            >
              <PinIcon className="w-3 h-3 text-rose" />
              {b.label}
            </div>
          ))}

          <div className="absolute -bottom-6 -left-4 sm:left-4 glass rounded-2xl px-5 py-4 shadow-xl animate-drop" style={{ animationDelay: '0.3s' }}>
            <p className="font-display text-2xl text-rose">3+</p>
            <p className="text-[11px] font-mono text-ink/50 uppercase tracking-wide">yrs building</p>
          </div>
        </div>
      </div>
    </section>
  )
}