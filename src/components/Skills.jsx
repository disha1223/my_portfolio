import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const GROUPS = [
  {
    title: 'Languages',
    items: ['Java', 'Python', 'C', 'JavaScript', 'TypeScript'],
  },
  {
    title: 'Web Technologies',
    items: ['React.js', 'Node.js', 'Express.js', 'Tailwind CSS', 'Django', 'React Native', 'HTML5 / CSS3'],
  },
  {
    title: 'Databases',
    items: ['MySQL', 'PostgreSQL', 'MongoDB Atlas'],
  },
  {
    title: 'Tools & Platforms',
    items: ['Git', 'GitHub', 'VS Code', 'Linux', 'AWS (EC2, S3)'],
  },
  {
    title: 'Core Concepts',
    items: ['OOP', 'DBMS', 'Operating Systems', 'Computer Networks', 'REST APIs'],
  },
]

// pick a small pseudo-random offset per chip so they fly in from scattered directions
function randomOffset(seed) {
  const angle = (seed * 137.5) % 360
  const rad = (angle * Math.PI) / 180
  const distance = 60 + (seed % 3) * 20
  return {
    x: Math.cos(rad) * distance,
    y: Math.sin(rad) * distance,
    rotate: (seed % 2 === 0 ? 1 : -1) * (20 + (seed % 4) * 8),
  }
}

function SkillChip({ item, index }) {
  const offset = randomOffset(index + 1)

  return (
    <motion.span
      initial={{ opacity: 0, x: offset.x, y: offset.y, rotate: offset.rotate, scale: 0.4 }}
      whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{
        delay: index * 0.06,
        type: 'spring',
        stiffness: 260,
        damping: 14,
      }}
      className="inline-block"
    >
      <motion.span
        animate={{
          y: [0, -3, 0],
          rotate: [0, index % 2 === 0 ? 1.5 : -1.5, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2.6 + (index % 3) * 0.5,
          ease: 'easeInOut',
          delay: 0.8 + index * 0.06,
        }}
        whileHover={{
          scale: 1.08,
          background: 'linear-gradient(135deg, #E85D9C, #FF8CBB)',
          color: '#fff',
          boxShadow: '0 8px 20px -6px rgba(232, 93, 156, 0.5)',
        }}
        className="inline-block rounded-full bg-white/70 px-3.5 py-1.5 text-xs text-ink/70 cursor-default transition-colors"
      >
        {item}
      </motion.span>
    </motion.span>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 bg-panel/40">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 glass px-4 py-1.5 text-xs font-mono text-rose-dark">
            SKILLS
          </span>
          <h2 className="mt-5 font-display text-4xl sm:text-5xl text-ink text-balance">
            The <span className="italic text-rose">stack</span> behind the work.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GROUPS.map((g, gi) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: gi * 0.08 }}
              className="glass rounded-2xl p-6 hover:-translate-y-1 hover:shadow-lg hover:shadow-rose/10 transition-all duration-300"
            >
              <h3 className="font-display text-xl text-ink mb-4">{g.title}</h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((item, i) => (
                  <SkillChip key={item} item={item} index={i} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}