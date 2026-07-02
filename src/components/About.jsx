import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import { useState, useEffect } from 'react'
import PinIcon from './PinIcon'

const STATS = [
  { value: 5,  suffix: '+', label: 'ML Models Built' },
  { value: 3,  suffix: '+', label: 'Years Coding' },
  { value: 10, suffix: '+', label: 'Technologies' },
  { value: 86, suffix: '%', label: 'Best Model Accuracy' },
]

const PILLS = [
  'B.Tech Computer Science, Manipal',
  'Software Developer Intern @ Aroha Group',
]

const HEADING_LINES = ["Engineer with a", "builder's", 'instinct.']

const PARAGRAPH_LINES = [
  "I'm a Computer Science undergrad at Manipal Institute of Technology who likes",
  'turning messy, real-world signals — location, mood, behaviour — into products',
  'people actually reach for. That\'s meant building cross-platform apps with React',
  'Native, training ML models that predict outcomes from data, and shipping REST',
  'APIs that hold up under real use.',
]

// last card animates in at delay 1.0 + 3*0.15 = 1.45s
// wait until all four are fully visible before starting counters
const COUNT_START_DELAY = 1600 // ms

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.25 })
  const [countReady, setCountReady] = useState(false)

  useEffect(() => {
    if (!inView) return
    const t = setTimeout(() => setCountReady(true), COUNT_START_DELAY)
    return () => clearTimeout(t)
  }, [inView])

  return (
    <section id="about" ref={ref} className="relative py-24 px-4 sm:px-6 overflow-hidden">
      <motion.div
        className="pointer-events-none absolute top-1/3 -right-32 w-[28rem] h-[28rem] rounded-full bg-rose-light/10 blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative mx-auto max-w-6xl grid lg:grid-cols-2 gap-16 items-start">
        {/* image column */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, x: -60, scale: 0.95 }}
            animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-[2rem] overflow-hidden aspect-[4/3] bg-gradient-to-br from-panel to-rose-light/25 shadow-xl shadow-rose/10 group"
          >
            <img
              src="/images/aabout.jpg"
              alt="Disha PV"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: [20, 0, -4, 0] } : {}}
            transition={{
              opacity: { duration: 0.5, delay: 0.9 },
              y: { duration: 0.5, delay: 0.9, times: [0, 0.4, 0.7, 1] },
            }}
            className="absolute -bottom-6 right-4 sm:right-8 glass rounded-2xl px-5 py-4 shadow-xl max-w-[220px]"
          >
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1.4 }}
            >
              <p className="text-[11px] font-mono text-rose-dark uppercase tracking-wide mb-1">Currently</p>
              <p className="font-display text-lg text-ink leading-snug">Building at Aroha Group, Udupi</p>
            </motion.div>
          </motion.div>
        </div>

        {/* text column */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full bg-panel px-4 py-1.5 text-xs font-mono text-rose-dark"
          >
            ABOUT
          </motion.span>

          <h2 className="mt-5 font-display text-4xl sm:text-5xl leading-[1.1] text-ink text-balance">
            {HEADING_LINES.map((line, i) => (
              <motion.span
                key={line}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`block ${i === 2 ? 'italic text-rose' : ''}`}
              >
                {line}
              </motion.span>
            ))}
          </h2>

          <p className="mt-6 text-ink/60 leading-relaxed max-w-lg">
            {PARAGRAPH_LINES.map((line, i) => (
              <motion.span
                key={line}
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                className="block"
              >
                {line}
              </motion.span>
            ))}
          </p>

          <div className="mt-10 grid grid-cols-2 gap-4">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.85, y: 16 }}
                animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 1.0 + i * 0.15 }}
                className="glass rounded-2xl p-5 hover:-translate-y-1 hover:shadow-lg hover:shadow-rose/10 transition-all duration-300"
              >
                <p className="font-display text-3xl sm:text-4xl text-rose">
                  {countReady
                    ? <CountUp start={0} end={s.value} duration={2.5} suffix={s.suffix} useEasing />
                    : <span>0{s.suffix}</span>
                  }
                </p>
                <p className="mt-1 text-sm text-ink/60">{s.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {PILLS.map((t, i) => (
              <motion.span
                key={t}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: [-30, 4, 0] } : {}}
                transition={{ duration: 0.45, delay: 1.7 + i * 0.2, times: [0, 0.7, 1] }}
                className="inline-flex items-center gap-2 rounded-full bg-white/70 glass px-4 py-2 text-xs text-ink/70"
              >
                <PinIcon className="w-3 h-3 text-rose" />
                {t}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}