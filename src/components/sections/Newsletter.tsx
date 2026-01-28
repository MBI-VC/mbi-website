'use client'

import { useState, FormEvent } from 'react'
import { newsletter } from '@/content/site-content'

export function Newsletter() {
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
    <section className="py-16 bg-white border-t border-neutral-100">
      <div className="container-wide">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900 tracking-tight">
            {newsletter.title}
          </h2>
          <p className="mt-3 text-neutral-600">
            {newsletter.description}
          </p>

          {status === 'success' ? (
            <p className="mt-6 text-brand-600 font-medium">{newsletter.successMessage}</p>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={newsletter.placeholder}
                required
                className="flex-1 px-4 py-3 bg-white border border-neutral-200 rounded-full text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-colors"
              />
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="px-6 py-3 bg-neutral-900 text-white font-medium rounded-full hover:bg-neutral-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {status === 'submitting' ? 'Subscribing...' : newsletter.button}
              </button>
            </form>
          )}

          {status === 'error' && (
            <p className="mt-4 text-sm text-red-600">Something went wrong. Please try again.</p>
          )}
        </div>
      </div>
    </section>
  )
}
