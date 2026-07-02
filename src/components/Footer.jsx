import PinIcon from './PinIcon'

export default function Footer() {
  return (
    <footer className="relative border-t border-ink/5 py-10 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 font-display text-lg text-ink">
          <span className="grid place-items-center w-7 h-7 rounded-full bg-rose text-white">
            <PinIcon className="w-3 h-3" />
          </span>
          Disha PV
        </div>
        <p className="text-xs text-ink/40 font-mono">
          © {new Date().getFullYear()} Disha PV — built with React & Tailwind
        </p>
        <div className="flex gap-4 text-sm text-ink/50">
          <a href="https://github.com/disha1223" target="_blank" rel="noreferrer" className="hover:text-rose transition-colors">GitHub</a>
          <a href="https://linkedin.com/in/disha-pv" target="_blank" rel="noreferrer" className="hover:text-rose transition-colors">LinkedIn</a>
          <a href="mailto:disha.acharya1111@gmail.com" className="hover:text-rose transition-colors">Email</a>
        </div>
      </div>
    </footer>
  )
}
