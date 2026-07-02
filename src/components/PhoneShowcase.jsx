import { useRef, useState } from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import {
  Search,
  Smile,
  Coffee,
  Pizza,
  BookOpen,
  Heart,
  Moon,
  Star,
  Home,
  User,
  Cloud,
  Leaf,
  Zap,
  MapPin,
  Bot,
  Wifi,
  Signal,
  BatteryFull,
} from 'lucide-react'

const MOODS = [
  { label: 'Happy', Icon: Smile },
  { label: 'Coffee', Icon: Coffee },
  { label: 'Hungry', Icon: Pizza },
  { label: 'Study', Icon: BookOpen },
  { label: 'Date', Icon: Heart },
  { label: 'Chill', Icon: Moon },
]

const PLACES = [
  { name: 'Cafe Coffee Day', rating: 4.6, distance: '420m away', bg: 'bg-rose-light/60', Icon: Coffee },
  { name: 'MIT Library', rating: 4.8, distance: '650m away', bg: 'bg-panel', Icon: BookOpen },
  { name: 'Froth on Top', rating: 4.7, distance: '1.2 km away', bg: 'bg-rose-light/60', Icon: Coffee },
]

const BADGES = [
  { label: 'React Native', Icon: Zap, top: '0%', left: '-4%', dark: false, delay: 0 },
  { label: 'AWS EC2', Icon: Cloud, top: '14%', right: '-6%', dark: true, delay: 0.4 },
  { label: 'Node.js', Icon: Zap, top: '54%', left: '-10%', dark: false, delay: 1.2 },
  { label: 'GPS', Icon: MapPin, top: '68%', left: '-12%', dark: false, delay: 1.6 },
  { label: 'MongoDB', Icon: Leaf, top: '90%', left: '-4%', dark: false, delay: 2.0 },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.5 } },
}

const rise = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
}

export default function PhoneShowcase() {
  const [mood, setMood] = useState('Coffee')
  const wrapRef = useRef(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)

  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 150, damping: 20 })
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 150, damping: 20 })
  const glow = useSpring(useTransform(mx, [-0.5, 0.5], [0.35, 0.6]), { stiffness: 100, damping: 20 })

  function handleMouseMove(e) {
    const rect = wrapRef.current.getBoundingClientRect()
    mx.set((e.clientX - rect.left) / rect.width - 0.5)
    my.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  function handleMouseLeave() {
    mx.set(0)
    my.set(0)
  }

  return (
    <div
      ref={wrapRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative mx-auto max-w-md aspect-[4/5] [perspective:1200px] overflow-visible"
    >
      {/* ambient glow that responds to cursor position */}
      <motion.div
        style={{ opacity: glow }}
        className="pointer-events-none absolute -inset-10 rounded-[3rem] bg-rose blur-3xl"
      />
      <div className="pointer-events-none absolute top-6 -left-10 w-40 h-40 rounded-full bg-rose-light/40 blur-2xl animate-bob" />
      <div
        className="pointer-events-none absolute bottom-10 -right-6 w-32 h-32 rounded-full bg-panel blur-2xl animate-bob"
        style={{ animationDelay: '1s' }}
      />

      {/* drifting particles */}
      {[...Array(10)].map((_, i) => (
        <motion.span
          key={i}
          className="pointer-events-none absolute w-1 h-1 rounded-full bg-rose/50"
          style={{ top: `${(i * 37) % 100}%`, left: `${(i * 53) % 100}%` }}
          animate={{ opacity: [0.15, 0.7, 0.15], y: [0, -8, 0] }}
          transition={{ duration: 3 + (i % 4), repeat: Infinity, delay: i * 0.3, ease: 'easeInOut' }}
        />
      ))}

      {/* floating tech badges */}
      {BADGES.map((b) => (
        <motion.div
          key={b.label}
          className={`hidden sm:flex absolute items-center gap-1.5 rounded-full px-3.5 py-2 text-xs font-medium shadow-lg whitespace-nowrap z-20 ${
            b.dark ? 'bg-ink text-white' : 'glass text-ink'
          }`}
          style={{ top: b.top, left: b.left, right: b.right }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: [0, -10, 0] }}
          transition={{
            opacity: { duration: 0.6, delay: 0.8 + b.delay },
            y: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.4 + b.delay },
          }}
        >
          <b.Icon className={`w-3.5 h-3.5 ${b.dark ? 'text-rose-light' : 'text-rose'}`} />
          {b.label}
        </motion.div>
      ))}

      {/* phone mockup */}
      <motion.div
        initial={{ opacity: 0, x: 90 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="relative mx-auto w-[270px] sm:w-[290px] aspect-[9/19] rounded-[44px] p-[3px] shadow-2xl shadow-rose/30 z-10
                   bg-gradient-to-br from-[#4a4a4e] via-[#232326] to-[#141416]"
      >
        {/* outer chamfer highlight */}
        <div className="absolute inset-0 rounded-[44px] ring-1 ring-white/15" />

        {/* side buttons */}
        <span className="absolute -left-[3px] top-[86px] w-[3px] h-7 rounded-l-sm bg-gradient-to-b from-[#3a3a3e] to-[#1a1a1c]" />
        <span className="absolute -left-[3px] top-[128px] w-[3px] h-10 rounded-l-sm bg-gradient-to-b from-[#3a3a3e] to-[#1a1a1c]" />
        <span className="absolute -left-[3px] top-[172px] w-[3px] h-10 rounded-l-sm bg-gradient-to-b from-[#3a3a3e] to-[#1a1a1c]" />
        <span className="absolute -right-[3px] top-[140px] w-[3px] h-14 rounded-r-sm bg-gradient-to-b from-[#3a3a3e] to-[#1a1a1c]" />

        {/* bezel */}
        <div className="relative w-full h-full rounded-[40px] p-[9px] bg-black">
          {/* screen */}
          <div className="relative w-full h-full rounded-[32px] overflow-hidden bg-gradient-to-b from-white to-rose-light/20">
            {/* dynamic island */}
            <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-[86px] h-[26px] bg-black rounded-full z-30" />

            <motion.div initial="hidden" animate="show" variants={container} className="flex flex-col h-full pt-8 px-4 pb-5">
              {/* status bar */}
              <motion.div variants={rise} className="flex items-center justify-between text-[10px] font-mono text-ink/70 px-0.5">
                <span>9:41</span>
                <span className="flex items-center gap-1.5">
                  <Signal className="w-3 h-3" />
                  5G
                  <BatteryFull className="w-3.5 h-3.5" />
                </span>
              </motion.div>

              {/* header */}
              <motion.div variants={rise} className="mt-3.5 flex items-start justify-between">
                <div>
                  <p className="flex items-center gap-1.5 font-display text-lg text-ink">
                    <MapPin className="w-4 h-4 text-rose" />
                    Smart Nearby
                  </p>
                  <p className="text-[10.5px] text-ink/50 mt-0.5 leading-snug">Find places based on your mood.</p>
                </div>
                <span className="flex items-center gap-1 rounded-full bg-ink text-white text-[9px] font-mono px-2 py-1 shrink-0 mt-0.5">
                  <Bot className="w-3 h-3" /> ML
                </span>
              </motion.div>

              {/* search bar */}
              <motion.div
                variants={rise}
                className="mt-3 flex items-center gap-2 glass rounded-full px-3.5 py-2.5 text-[11px] text-ink/40"
              >
                <Search className="w-3.5 h-3.5" />
                Search nearby...
              </motion.div>

              {/* mood chips */}
              <motion.div variants={container} className="mt-3 flex flex-wrap gap-1.5">
                {MOODS.map((m) => (
                  <motion.button
                    key={m.label}
                    variants={rise}
                    onClick={() => setMood(m.label)}
                    whileTap={{ scale: 0.94 }}
                    className={`flex items-center gap-1 rounded-full px-2.5 py-1.5 text-[10px] font-medium transition-colors ${
                      mood === m.label ? 'bg-rose text-white shadow-md shadow-rose/30' : 'glass text-ink/60'
                    }`}
                  >
                    <m.Icon className="w-3 h-3" />
                    {m.label}
                  </motion.button>
                ))}
              </motion.div>

              {/* nearby places */}
              <motion.div variants={rise} className="mt-4 flex items-center justify-between">
                <p className="text-[9.5px] font-mono uppercase tracking-wide text-ink/40">Nearby Places</p>
                <span className="text-[10px] font-medium text-rose">See all</span>
              </motion.div>
              <motion.div variants={container} className="mt-2 flex flex-col gap-2 flex-1 overflow-hidden">
                {PLACES.map((p) => (
                  <motion.div
                    key={p.name}
                    variants={rise}
                    whileHover={{ y: -3, scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="flex items-center gap-2.5 glass rounded-2xl px-3 py-2.5 shadow-sm"
                  >
                    <span className={`flex items-center justify-center w-8 h-8 rounded-full ${p.bg} shrink-0`}>
                      <p.Icon className="w-4 h-4 text-rose-dark" />
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-[11px] font-medium text-ink truncate">{p.name}</p>
                      <p className="text-[9px] text-ink/40 flex items-center gap-1">
                        <Star className="w-2.5 h-2.5 fill-rose text-rose" /> {p.rating} · {p.distance}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* bottom nav */}
              <motion.div
                variants={rise}
                className="mt-1.5 flex items-center justify-around border-t border-ink/10 pt-2.5 text-[9px] font-mono text-ink/40"
              >
                <span className="flex flex-col items-center gap-0.5 text-rose">
                  <Home className="w-4 h-4" />
                  Explore
                </span>
                <span className="flex flex-col items-center gap-0.5">
                  <Heart className="w-4 h-4" />
                  Saved
                </span>
                <span className="flex flex-col items-center gap-0.5">
                  <User className="w-4 h-4" />
                  Profile
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}