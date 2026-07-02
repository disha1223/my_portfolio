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

export default function Experience() {
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

        <div className="relative pl-8 sm:pl-10">
          <div className="absolute left-[7px] sm:left-[9px] top-2 bottom-2 w-px bg-rose/20" />

          <div className="space-y-12">
            {EXPERIENCE.map((e) => (
              <div key={e.role} className="relative">
                <span className="absolute -left-8 sm:-left-10 top-1.5 grid place-items-center w-4 h-4 rounded-full bg-rose ring-4 ring-blush">
                  <PinIcon className="w-2.5 h-2.5 text-white" />
                </span>

                <p className="font-mono text-xs text-rose-dark tracking-wide mb-2">{e.period}</p>
                <h3 className="font-display text-2xl text-ink">{e.role}</h3>
                <p className="text-ink/50 text-sm mb-4">{e.org}</p>

                <ul className="space-y-2">
                  {e.points.map((pt) => (
                    <li key={pt} className="flex gap-3 text-ink/60 text-sm leading-relaxed">
                      <span className="mt-2 w-1 h-1 rounded-full bg-rose/60 shrink-0" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 glass rounded-2xl p-6 sm:p-8">
          <div className="mb-8">
            <p className="font-mono text-xs text-rose-dark tracking-wide mb-4">EDUCATION</p>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
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
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 rounded-xl bg-white/60 p-4 hover:bg-white/90 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <span className="grid place-items-center w-10 h-10 rounded-full bg-rose/10 text-lg shrink-0">
                    {item.icon}
                  </span>
                  <div>
                    <p className="font-medium text-ink text-sm leading-snug">{item.title}</p>
                    <p className="text-ink/50 text-xs mt-1">{item.meta}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-8 border-t border-ink/5">
            <p className="font-mono text-xs text-rose-dark tracking-wide mb-4">CERTIFICATIONS</p>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
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
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 rounded-xl bg-white/60 p-4 hover:bg-white/90 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <span className="grid place-items-center w-10 h-10 rounded-full bg-rose/10 text-lg shrink-0">
                    {item.icon}
                  </span>
                  <div>
                    <p className="font-medium text-ink text-sm leading-snug">{item.title}</p>
                    <p className="text-ink/50 text-xs mt-1">{item.meta}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}