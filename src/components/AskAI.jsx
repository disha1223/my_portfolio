import { useState, useRef, useEffect } from 'react'
import PinIcon from './PinIcon'

// Get a free key at https://console.groq.com/keys — paste it below.
const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;
const GROQ_MODEL = 'llama-3.3-70b-versatile'
// Context the assistant will answer from — keep this in sync with your resume/projects.
const PORTFOLIO_CONTEXT = `
You are answering questions on behalf of Disha PV, a Computer Science undergrad
at Manipal Institute of Technology (2023–2027), currently a Software Developer
Intern at Aroha Group, Udupi.

EXPERIENCE:
- Software Developer Intern, Aroha Group (June 2026–Present): Built a cross-platform
  mobile app with React Native and Expo Router, 11 mood-based place discovery
  categories, GPS-based location search, dark/light themes, favourites, search
  history via AsyncStorage, REST API integration.
- Machine Learning Intern, Dept. of CSE, MIT Manipal (June 2025): Built and evaluated
  5+ ML models (Random Forest, SVM, XGBoost) for depression prediction. Used SMOTE,
  feature selection, hyperparameter tuning — improved accuracy from 68% to 86%.

PROJECTS:
1. Smart Nearby Places Recommender (Web) — Full-stack MERN app, mood-based place
   recommendations using real-time location, JWT auth, MongoDB Atlas, SerpAPI,
   deployed on AWS EC2.
2. Smart Nearby (Mobile) — React Native + Expo Router version, same mood-based
   discovery, GPS search, AsyncStorage-based favourites/history.
3. Depression Prediction ML Models — Python, Pandas, Scikit-learn, XGBoost.
4. Student Attendance Management System — Python + MySQL, handles 500+ student
   records, CRUD operations, role-based access control, SQL indexing/joins.

SKILLS:
Languages: Java, Python, C, JavaScript, TypeScript
Web: HTML5, CSS3, React.js, Node.js, Express.js, Tailwind CSS, Django, React Native
Databases: MySQL, PostgreSQL, MongoDB Atlas
Tools: Git, GitHub, VS Code, Linux, AWS (EC2, S3)
Core CS: OOP, DBMS, Operating Systems, Computer Networks, REST APIs

CERTIFICATIONS: Google AI Professional Certificate (Coursera), Python Programming
Course (MICE, Manipal).

Answer questions about Disha's projects, skills, and experience in a friendly,
concise way (2-4 sentences). If asked something unrelated to her work, politely
redirect to what you can help with. Speak about her in third person ("she built...").
`.trim()

const SUGGESTIONS = [
  'What is she currently working on?',
  'What are her strongest skills?',
  'Where did she study?',
]

export default function AskAI() {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      text: "Hi! I can answer questions about Disha's projects, skills, and experience. Ask me anything.",
    },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [listening, setListening] = useState(false)
  const [voiceSupported, setVoiceSupported] = useState(false)
  const [voiceOn, setVoiceOn] = useState(true)
  const scrollRef = useRef(null)
  const recognitionRef = useRef(null)

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, loading])

  // set up speech recognition once, if the browser supports it
  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    if (!SpeechRecognition) {
      setVoiceSupported(false)
      return
    }
    setVoiceSupported(true)

    const recognition = new SpeechRecognition()
    recognition.continuous = false
    recognition.interimResults = false
    recognition.lang = 'en-US'

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript
      setInput(transcript)
      sendMessage(transcript)
    }
    recognition.onerror = () => setListening(false)
    recognition.onend = () => setListening(false)

    recognitionRef.current = recognition
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const speak = (text) => {
    if (!voiceOn || !window.speechSynthesis) return
    window.speechSynthesis.cancel()
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.rate = 1
    utterance.pitch = 1
    window.speechSynthesis.speak(utterance)
  }

  const toggleListening = () => {
    if (!recognitionRef.current) return
    if (listening) {
      recognitionRef.current.stop()
      setListening(false)
    } else {
      window.speechSynthesis?.cancel()
      recognitionRef.current.start()
      setListening(true)
    }
  }

  const sendMessage = async (text) => {
    const question = text.trim()
    if (!question || loading) return

    setMessages((prev) => [...prev, { role: 'user', text: question }])
    setInput('')
    setLoading(true)
    setError(null)

    try {
      if (!GROQ_API_KEY || GROQ_API_KEY === 'YOUR_GROQ_API_KEY') {
        throw new Error('missing-key')
      }

      const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: GROQ_MODEL,
          messages: [
            { role: 'system', content: PORTFOLIO_CONTEXT },
            { role: 'user', content: question },
          ],
          temperature: 0.5,
          max_tokens: 300,
        }),
      })

      if (!res.ok) throw new Error('request-failed')

      const data = await res.json()
      const reply =
        data?.choices?.[0]?.message?.content?.trim() ||
        "I couldn't find an answer to that — try asking about her projects or skills."

      setMessages((prev) => [...prev, { role: 'assistant', text: reply }])
      speak(reply)
    } catch (err) {
      const isMissingKey = err.message === 'missing-key'
      setError(
        isMissingKey
          ? 'This chatbot needs a free Groq API key to work — add yours in AskAI.jsx.'
          : "Something went wrong reaching the AI. Try again in a moment."
      )
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          text: isMissingKey
            ? "I'm not connected yet — Disha still needs to add a Groq API key to power me."
            : "Sorry, I ran into an error answering that. Please try again.",
        },
      ])
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="ask-ai" className="relative py-24 px-4 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 rounded-full bg-panel px-4 py-1.5 text-xs font-mono text-rose-dark">
            ASK ABOUT ME
          </span>
          <h2 className="mt-5 font-display text-4xl sm:text-5xl text-ink text-balance">
            Curious about <span className="italic text-rose">Disha?</span>
          </h2>
          <p className="mt-4 text-ink/60 max-w-lg mx-auto">
            Ask anything — projects, skills, experience, education. My portfolio
            assistant has the answers.
          </p>
        </div>

        <div className="glass rounded-[2rem] p-6 sm:p-8 shadow-lg shadow-rose/5">
          <div
            ref={scrollRef}
            className="h-80 overflow-y-auto space-y-4 pr-2 mb-5"
          >
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    m.role === 'user'
                      ? 'bg-rose text-white rounded-br-sm'
                      : 'bg-white/80 text-ink rounded-bl-sm'
                  }`}
                >
                  {m.role === 'assistant' && (
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-rose-dark mb-1">
                      <PinIcon className="w-2.5 h-2.5" /> ASSISTANT
                    </span>
                  )}
                  <p className={m.role === 'assistant' ? 'mt-0.5' : ''}>{m.text}</p>
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white/80 rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose/50 animate-bounce [animation-delay:-0.3s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-rose/50 animate-bounce [animation-delay:-0.15s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-rose/50 animate-bounce" />
                </div>
              </div>
            )}
          </div>

          {messages.length <= 1 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => sendMessage(s)}
                  className="rounded-full bg-white/70 hover:bg-rose hover:text-white px-3.5 py-1.5 text-xs text-ink/70 transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          <form
            onSubmit={(e) => {
              e.preventDefault()
              sendMessage(input)
            }}
            className="flex gap-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={listening ? 'Listening...' : 'Ask something about my work...'}
              className="flex-1 rounded-full bg-white/70 border border-white px-5 py-3 text-sm text-ink placeholder:text-ink/30 focus:border-rose outline-none transition-colors"
            />
            {voiceSupported && (
              <button
                type="button"
                onClick={toggleListening}
                title={listening ? 'Stop listening' : 'Speak your question'}
                className={`grid place-items-center w-11 h-11 rounded-full text-lg transition-colors shrink-0 ${
                  listening
                    ? 'bg-rose text-white animate-pulse'
                    : 'bg-white/70 text-ink/60 hover:bg-rose hover:text-white'
                }`}
              >
                🎤
              </button>
            )}
            <button
              type="button"
              onClick={() => {
                setVoiceOn((v) => !v)
                if (voiceOn) window.speechSynthesis?.cancel()
              }}
              title={voiceOn ? 'Mute voice replies' : 'Enable voice replies'}
              className={`grid place-items-center w-11 h-11 rounded-full text-lg transition-colors shrink-0 ${
                voiceOn
                  ? 'bg-white/70 text-ink/60 hover:bg-rose hover:text-white'
                  : 'bg-ink/10 text-ink/30'
              }`}
            >
              {voiceOn ? '🔊' : '🔇'}
            </button>
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="rounded-full bg-rose hover:bg-rose-dark text-white text-sm font-medium px-6 py-3 transition-all disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
            >
              Ask
            </button>
          </form>

          {error && (
            <p className="mt-3 text-xs text-red-500 font-mono">{error}</p>
          )}
        </div>
      </div>
    </section>
  )
}