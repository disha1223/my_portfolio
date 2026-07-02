import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import PinIcon from './PinIcon'

const EXPERIENCE = [
  {
    period: 'June 2026 — Present',
    role: 'Software Developer Intern',
    org: 'Aroha Group, Udupi',
    points: [
      'Built a cross-platform mobile app with React Native & Expo Router, spanning 11 mood-based place discovery categories.',
      'Implemented GPS-based location search, dark/light themes, favourites, and search history via AsyncStorage.',
      'Integrated REST APIs for dynamic location recommendations with a focus on responsive UI and state management.',
    ],
  },
  {
    period: 'June 2025',
    role: 'Machine Learning Intern',
    org: 'Department of CSE, MIT Manipal',
    points: [
      'Developed and evaluated 5+ ML models — Random Forest, SVM, XGBoost — for depression prediction.',
      'Applied SMOTE, feature selection and hyperparameter tuning, raising accuracy from 68% to 86%.',
      'Ran preprocessing, EDA, and model validation using k-fold cross-validation.',
    ],
  },
]

const EDUCATION = [
  {
    title: 'B.Tech, Computer Science & Engineering',
    meta: 'Manipal Institute of Technology · 2023–2027',
    icon: '🎓',
  },
  {
    title: 'Diploma, Computer Science Engineering',
    meta: 'Board of Technical Education, Karnataka · 2020–2023',
    icon: '📘',
  },
]

const CERTIFICATIONS = [
  {
    title: 'Google AI Professional Certificate',
    meta: 'Google, Coursera',
    icon: '✦',
  },
  {
    title: 'Python Programming Course',
    meta: 'MICE, Manipal',
    icon: '🐍',
  },
]

function CredentialGroup({ label, items, delayStart }) {
  return (
    <div>
      <p className="font-mono text-xs text-rose-dark tracking-wide mb-4">{label}</p>
      <div className="grid sm:grid-cols-2 gap-5">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, delay: delayStart + i * 0.15 }}
            className="flex items-start gap-4 rounded-xl bg-white/60 p-4 hover:bg-white/90 hover:-translate-y-0.5 transition-all duration-300"
          >
            <span className="grid place-items-center w-10 h-10 rounded-full bg-rose/10 text-lg shrink-0">
              {item.icon}
            </span>
            <div>
              <p className="font-medium text-ink text-sm leading-snug">{item.title}</p>
              <p className="text-ink/50 text-xs mt-1">{item.meta}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default function Experience() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section id="experience" className="relative py-24 px-4 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <div className="mb-14">
          <span className="inline-flex items-center gap-2 rounded-full bg-panel px-4 py-1.5 text-xs font-mono text-rose-dark">
            EXPERIENCE
          </span>
          <h2 className="mt-5 font-display text-4xl sm:text-5xl text-ink text-balance">
            Where I've <span className="italic text-rose">shipped.</span>
          </h2>
        </div>

        <div ref={ref} className="relative pl-8 sm:pl-10">
          {/* vertical line grows downward as section enters view */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: 'top' }}
            className="absolute left-[7px] sm:left-[9px] top-2 bottom-2 w-px bg-rose/20"
          />

          <div className="space-y-12">
            {EXPERIENCE.map((e, i) => (
              <motion.div
                key={e.role}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <motion.span
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.35, type: 'spring', stiffness: 300, damping: 15 }}
                  className="absolute -left-8 sm:-left-10 top-1.5 grid place-items-center w-4 h-4 rounded-full bg-rose ring-4 ring-blush"
                >
                  <PinIcon className="w-2.5 h-2.5 text-white" />
                </motion.span>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.55 + i * 0.35 }}
                  className="font-mono text-xs text-rose-dark tracking-wide mb-2"
                >
                  {e.period}
                </motion.p>
                <h3 className="font-display text-2xl text-ink">{e.role}</h3>
                <p className="text-ink/50 text-sm mb-4">{e.org}</p>

                <ul className="space-y-2">
                  {e.points.map((pt, pi) => (
                    <motion.li
                      key={pt}
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.35, delay: 0.7 + i * 0.35 + pi * 0.08 }}
                      className="flex gap-3 text-ink/60 text-sm leading-relaxed"
                    >
                      <span className="mt-2 w-1 h-1 rounded-full bg-rose/60 shrink-0" />
                      {pt}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-14 glass rounded-2xl p-6 sm:p-8">
          <div className="mb-8">
            <CredentialGroup label="EDUCATION" items={EDUCATION} delayStart={0} />
          </div>
          <div className="pt-8 border-t border-ink/5">
            <CredentialGroup label="CERTIFICATIONS" items={CERTIFICATIONS} delayStart={0.2} />
          </div>
        </div>
      </div>
    </section>
  )
}