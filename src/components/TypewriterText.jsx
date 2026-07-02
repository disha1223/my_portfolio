import { useEffect, useState } from 'react'

export default function TypewriterText({ text, speed = 28, startDelay = 400, className = '' }) {
  const [displayed, setDisplayed] = useState('')

  useEffect(() => {
    let i = 0
    let interval
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        i += 1
        setDisplayed(text.slice(0, i))
        if (i >= text.length) clearInterval(interval)
      }, speed)
    }, startDelay)

    return () => {
      clearTimeout(timeout)
      clearInterval(interval)
    }
  }, [text, speed, startDelay])

  return (
    <span className={className}>
      {displayed}
      <span className="inline-block w-[2px] h-[1em] align-middle bg-rose ml-0.5 animate-pulse" />
    </span>
  )
}