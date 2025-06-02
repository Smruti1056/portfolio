import '../styles/globals.css'
import { useEffect, useState } from "react"

export default function App({ Component, pageProps }) {
  // Simple dark mode toggle (persists in localStorage)
  const [dark, setDark] = useState(false)
  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved === 'dark') setDark(true)
  }, [])
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [dark])
  return (
    <div className={dark ? 'dark' : ''}>
      <button
        className="fixed top-4 right-4 z-50 bg-gray-200 dark:bg-gray-800 p-2 rounded"
        onClick={() => setDark(d => !d)}
        aria-label="Toggle dark mode"
      >
        {dark ? '🌙' : '☀️'}
      </button>
      <Component {...pageProps} />
    </div>
  )
}