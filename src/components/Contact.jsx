import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import PinIcon from './PinIcon'

// Replace with your real Formspree endpoint from https://formspree.io
const FORM_ENDPOINT = 'https://formspree.io/f/xykqnreq'

const CONTACT_LINKS = [
  { href: 'mailto:disha.acharya1111@gmail.com', icon: '✉', label: 'disha.acharya1111@gmail.com' },
  { href: 'tel:+919110683726', icon: '☎', label: '+91 91106 83726' },
  { href: 'https://linkedin.com/in/disha-pv', icon: 'in', label: 'linkedin.com/in/disha-pv', external: true },
  { href: 'https://github.com/disha1223', icon: null, label: 'github.com/disha1223', external: true },
]

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    const form = e.target
    const data = new FormData(form)

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })

      if (res.ok) {
        setStatus('sent')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" ref={ref} className="relative py-24 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl grid lg:grid-cols-[1fr_1.1fr] gap-16">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full bg-panel px-4 py-1.5 text-xs font-mono text-rose-dark"
          >
            CONTACT
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-5 font-display text-4xl sm:text-5xl text-ink text-balance"
          >
            Let's build something <span className="italic text-rose">worth pinning.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="mt-5 text-ink/60 leading-relaxed max-w-md"
          >
            Open to software developer roles and interesting collaborations. Reach out —
            I usually reply within a day.
          </motion.p>

          <div className="mt-10 space-y-4">
            {CONTACT_LINKS.map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.external ? '_blank' : undefined}
                rel={c.external ? 'noreferrer' : undefined}
                initial={{ opacity: 0, x: -24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.35 + i * 0.1 }}
                whileHover={{ x: 4 }}
                className="flex items-center gap-3 text-ink/70 hover:text-rose transition-colors group"
              >
                <span className="grid place-items-center w-10 h-10 rounded-full bg-white/70 glass group-hover:bg-rose group-hover:text-white transition-colors">
                  {c.icon ?? <PinIcon className="w-4 h-4" />}
                </span>
                {c.label}
              </motion.a>
            ))}
          </div>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass rounded-[2rem] p-8 sm:p-10 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <label className="block text-xs font-mono text-ink/50 mb-2">NAME</label>
              <input
                required
                name="name"
                type="text"
                placeholder="Your name"
                className="w-full rounded-xl bg-white/70 border border-white px-4 py-3 text-sm text-ink placeholder:text-ink/30 focus:border-rose outline-none transition-colors"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <label className="block text-xs font-mono text-ink/50 mb-2">EMAIL</label>
              <input
                required
                name="email"
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-xl bg-white/70 border border-white px-4 py-3 text-sm text-ink placeholder:text-ink/30 focus:border-rose outline-none transition-colors"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            <label className="block text-xs font-mono text-ink/50 mb-2">MESSAGE</label>
            <textarea
              required
              name="message"
              rows={5}
              placeholder="Tell me about your project or opportunity..."
              className="w-full rounded-xl bg-white/70 border border-white px-4 py-3 text-sm text-ink placeholder:text-ink/30 focus:border-rose outline-none transition-colors resize-none"
            />
          </motion.div>

          <motion.button
            type="submit"
            disabled={status === 'sending'}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.7 }}
            whileHover={{ y: -3 }}
            className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-rose hover:bg-rose-dark text-white font-medium px-8 py-3.5 transition-colors overflow-hidden disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <span>
              {status === 'sending' && 'Sending...'}
              {status === 'sent' && 'Message sent'}
              {(status === 'idle' || status === 'error') && 'Send Message'}
            </span>
            {status === 'sent' ? (
              <span>✓</span>
            ) : (
              <span className="relative inline-block w-4 h-4">
                <motion.span
                  className="absolute inset-0 grid place-items-center"
                  initial={{ opacity: 1 }}
                  whileHover={{ opacity: 0, x: 10, y: -10, rotate: 20 }}
                  transition={{ duration: 0.25 }}
                >
                  ✉️
                </motion.span>
                <motion.span
                  className="absolute inset-0 grid place-items-center"
                  initial={{ opacity: 0, x: -10, y: 10 }}
                  whileHover={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.25, delay: 0.05 }}
                >
                  🚀
                </motion.span>
              </span>
            )}
          </motion.button>

          {status === 'sent' && (
            <p className="text-xs text-rose-dark font-mono">
              Thanks — I'll get back to you soon.
            </p>
          )}
          {status === 'error' && (
            <p className="text-xs text-red-500 font-mono">
              Something went wrong. Try emailing me directly instead.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  )
}