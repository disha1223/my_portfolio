import PinIcon from './PinIcon'

const STATS = [
  { value: '5+', label: 'ML Models Built' },
  { value: '3+', label: 'Years Coding' },
  { value: '10+', label: 'Technologies' },
  { value: '86%', label: 'Best Model Accuracy' },
]

export default function About() {
  return (
    <section id="about" className="relative py-24 px-4 sm:px-6">
<div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-16 items-center">        <div className="relative">
          <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] bg-gradient-to-br from-panel to-rose-light/25 shadow-xl shadow-rose/10">
  <img
    src="/images/aabout.jpg"
    alt="Disha PV"
    className="absolute inset-0 w-full h-full object-cover"
  />
</div>
          <div className="absolute -bottom-6 right-4 sm:right-8 glass rounded-2xl px-5 py-4 shadow-xl max-w-[220px]">
            <p className="text-[11px] font-mono text-rose-dark uppercase tracking-wide mb-1">Currently</p>
            <p className="font-display text-lg text-ink leading-snug">Building at Aroha Group, Udupi</p>
          </div>
        </div>

        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-panel px-4 py-1.5 text-xs font-mono text-rose-dark">
            ABOUT
          </span>
          <h2 className="mt-5 font-display text-4xl sm:text-5xl leading-[1.1] text-ink text-balance">
            Engineer with a builder's <span className="italic text-rose">instinct.</span>
          </h2>
          <p className="mt-6 text-ink/60 leading-relaxed max-w-lg">
            I'm a Computer Science undergrad at Manipal Institute of Technology who likes
            turning messy, real-world signals — location, mood, behaviour — into products
            people actually reach for. That's meant building cross-platform apps with React
            Native, training ML models that predict outcomes from data, and shipping REST
            APIs that hold up under real use.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-4">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="glass rounded-2xl p-5 hover:-translate-y-1 hover:shadow-lg hover:shadow-rose/10 transition-all duration-300"
              >
                <p className="font-display text-3xl sm:text-4xl text-rose">{s.value}</p>
                <p className="mt-1 text-sm text-ink/60">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              'B.Tech Computer Science, Manipal',
              'Software Developer Intern @ Aroha Group',
            ].map((t) => (
              <span
                key={t}
                className="inline-flex items-center gap-2 rounded-full bg-white/70 glass px-4 py-2 text-xs text-ink/70"
              >
                <PinIcon className="w-3 h-3 text-rose" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}