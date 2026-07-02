import { useState } from 'react'
import { motion } from 'framer-motion'
import PinIcon from './PinIcon'

const PROJECTS = [
  {
    tag: 'FEATURED',
    category: 'Web',
    eyebrow: 'DISCOVERY, REDESIGNED.',
    title: 'Smart Nearby — Web',
    description:
      'Full-stack MERN application that recommends nearby places based on the users mood, location, and budget. Built secure JWT authentication, real-time location services, MongoDB-powered favourites, and integrated SerpAPI for intelligent place discovery. Includes a cross-platform React Native app and AWS EC2 deployment.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB Atlas', 'AWS EC2','JWT','SerpApi'],
    image: '/images/webi.jpg',
    github: 'https://github.com/disha1223/smart-nearby-web',
    demo: null,
  },
  {
    tag: 'MOBILE APP',
    category: 'Mobile',
    eyebrow: 'MOOD-FIRST NAVIGATION.',
    title: 'Smart Nearby — Mobile',
    description:
      'Cross-platform React Native application that recommends nearby places based on users mood and real-time location. Features secure JWT authentication, GPS-powered place discovery, MongoDB-backed favourites, and SerpAPI integration for personalized recommendations.',
    stack: ['React Native','Expo', 'TypeScript', 'Node.js','Express.js', 'MongoDB','JWT Authentication', 'REST APIs'],
    image: '/images/mob.jpg',
    github: 'https://github.com/disha1223/smart-nearby-mobile',
    demo: null,
  },
  {
    tag: 'DATA / ML',
    category: 'ML',
    eyebrow: 'PREDICTION, VALIDATED.',
    title: 'Depression Prediction ML Models',
    description:
      'Built and compared 5+ ML models — Random Forest, Logistic Regression, SVM, XGBoost, and CatBoost — to predict depression severity from survey data. Applied SMOTE for class balancing, SelectKBest for feature selection, and k-fold cross-validation to improve accuracy from 68% to 94%.',
    stack: ['Python', 'Pandas', 'Scikit-learn', 'XGBoost', 'CatBoost', 'Jupyter'],
    image: '/images/ML.jpg',
    github: 'https://github.com/disha1223/Depression-ML-',
    demo: null,
  },
  {
    tag: 'FULL-STACK',
    category: 'Web',
    eyebrow: 'RECORDS, ORGANIZED.',
    title: 'Student Attendance Management System',
    description:
      'An attendance management system handling 500+ student records. Implements CRUD operations, relational database design, and role-based access control, with SQL indexing and JOINs for fast retrieval.',
    stack: ['Python', 'MySQL'],
    image: '/images/student.jpg',
    github: 'https://github.com/disha1223',
    demo: null,
  },
]

const FILTERS = ['All', 'Web', 'Mobile', 'ML']

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const visible = filter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === filter)

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-panel px-4 py-1.5 text-xs font-mono text-rose-dark">
              SELECTED WORK
            </span>
            <h2 className="mt-5 font-display text-4xl sm:text-5xl text-ink text-balance">
              Projects, <span className="italic text-rose">crafted</span> with care.
            </h2>
          </div>
        </div>

        <div className="flex gap-2 mb-10">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                filter === f ? 'bg-rose text-white' : 'bg-white/60 glass text-ink/60 hover:text-rose'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="space-y-8">
          {visible.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group grid lg:grid-cols-[1fr_1fr] gap-0 rounded-[2rem] overflow-hidden glass shadow-lg shadow-rose/5 hover:shadow-xl hover:shadow-rose/15 transition-shadow duration-500"
            >
              <div
                className={`relative overflow-hidden bg-gradient-to-br from-panel to-rose-light/20 flex items-center justify-center p-4 ${
                  i % 2 === 1 ? 'lg:order-2' : ''
                }`}
              >
                <span className="absolute top-5 left-5 z-10 inline-flex items-center gap-1.5 rounded-full bg-white/85 px-3 py-1.5 text-[11px] font-mono text-rose-dark">
                  <PinIcon className="w-3 h-3" /> {p.tag}
                </span>
                <img
                  src={p.image}
                  alt={`${p.title} preview`}
                  className="w-full h-auto max-h-full object-contain rounded-xl group-hover:scale-[1.02] transition-transform duration-700"
                />
              </div>

              <div className="p-8 sm:p-10 flex flex-col justify-center">
                <p className="font-mono text-xs text-rose-dark tracking-wide mb-3">{p.eyebrow}</p>
                <h3 className="font-display text-3xl text-ink mb-4">{p.title}</h3>
                <p className="text-ink/60 leading-relaxed mb-6">{p.description}</p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full bg-white/70 px-3.5 py-1.5 text-xs text-ink/70"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-rose hover:bg-rose-dark text-white text-sm font-medium px-5 py-3 transition-all hover:-translate-y-0.5"
                    >
                      Live Demo ↗
                    </a>
                  )}
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-ink/15 hover:border-rose/40 hover:text-rose text-ink text-sm font-medium px-5 py-3 transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}