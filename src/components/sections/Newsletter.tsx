'use client'

import { useState, FormEvent } from 'react'
import { newsletter } from '@/content/site-content'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export function Newsletter() {
  const reveal = useScrollReveal()
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return
    }

    setStatus('submitting')

    try {
      const response = await fetch(newsletter.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setStatus('success')
        setEmail('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="py-20 bg-dark-950 relative">
      {/* Top border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-dark-800 to-transparent" />

      <div className="container-wide">
        <div
          ref={reveal.ref}
          className={`max-w-2xl mx-auto text-center transition-all duration-700 ${
            reveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
            {newsletter.title}
          </h2>
          <p className="mt-3 text-dark-400">
            {newsletter.description}
          </p>

          {status === 'success' ? (
            <p className="mt-8 text-accent-400 font-medium">{newsletter.successMessage}</p>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={newsletter.placeholder}
                required
                className="flex-1 px-5 py-3.5 bg-dark-800/50 border border-dark-700 rounded-full text-white placeholder-dark-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20 focus:border-accent-500 transition-colors"
              />
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="px-8 py-3.5 bg-accent-500 text-dark-950 font-semibold rounded-full hover:bg-accent-400 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap hover:scale-[1.02] active:scale-[0.98]"
              >
                {status === 'submitting' ? 'Subscribing...' : newsletter.button}
              </button>
            </form>
          )}

          {status === 'error' && (
            <p className="mt-4 text-sm text-red-400">Something went wrong. Please try again.</p>
          )}
        </div>
      </div>
    </section>
  )
}
