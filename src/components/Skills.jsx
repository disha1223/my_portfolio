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
    items: ['DSA','OOP', 'DBMS', 'Operating Systems', 'Computer Networks', 'REST APIs'],
  },
]

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
          {GROUPS.map((g) => (
            <div
              key={g.title}
              className="glass rounded-2xl p-6 hover:-translate-y-1 hover:shadow-lg hover:shadow-rose/10 transition-all duration-300"
            >
              <h3 className="font-display text-xl text-ink mb-4">{g.title}</h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-white/70 px-3.5 py-1.5 text-xs text-ink/70 hover:bg-rose hover:text-white transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
