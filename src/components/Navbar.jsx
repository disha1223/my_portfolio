import { useEffect, useState } from 'react'
import PinIcon from './PinIcon'

const LINKS = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Projects', id: 'projects' },
  { label: 'Skills', id: 'skills' },
  { label: 'Experience', id: 'experience' },
  { label: 'Contact', id: 'contact' },
]

export default function Navbar() {
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -45% 0px' }
    )
    LINKS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <nav
  className={`mx-auto max-w-6xl px-4 sm:px-6 flex items-center justify-between rounded-full glass shadow-lg shadow-rose/5 transition-all duration-300 ${
    scrolled ? 'py-2 px-4 sm:px-6' : 'py-3 px-5 sm:px-7'
  }`}
>
        <button
          onClick={() => scrollTo('home')}
          className="flex items-center gap-2 font-display text-xl font-semibold text-ink"
        >
          <span className="grid place-items-center w-9 h-9 rounded-full bg-rose text-white">
            <PinIcon className="w-4 h-4" />
          </span>
          Disha
        </button>

        <ul className="hidden md:flex items-center gap-8 font-body text-sm text-ink/80">
          {LINKS.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollTo(link.id)}
                className={`relative pb-1 transition-colors hover:text-rose ${
                  active === link.id ? 'text-ink font-medium' : ''
                }`}
              >
                {link.label}
                {active === link.id && (
                  <span className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-rose rounded-full" />
                )}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => scrollTo('contact')}
          className="hidden md:inline-flex items-center rounded-full bg-rose hover:bg-rose-dark text-white text-sm font-medium px-5 py-2.5 transition-colors shadow-sm shadow-rose/30"
        >
          Let's talk
        </button>

        <button
          className="md:hidden grid place-items-center w-9 h-9 text-ink"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-ink transition-transform ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`block w-6 h-0.5 bg-ink transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-ink transition-transform ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
          </div>
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden mx-4 mt-2 glass rounded-2xl p-4 flex flex-col gap-1 shadow-lg">
          {LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`text-left px-3 py-2.5 rounded-lg text-sm ${
                active === link.id ? 'bg-rose/10 text-rose font-medium' : 'text-ink/80'
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('contact')}
            className="mt-2 rounded-full bg-rose text-white text-sm font-medium px-5 py-2.5"
          >
            Let's talk
          </button>
        </div>
      )}
    </header>
  )
}
