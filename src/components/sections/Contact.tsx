'use client'

import { useState, FormEvent } from 'react'
import { contact, siteConfig } from '@/content/site-content'
import { useScrollReveal } from '@/hooks/useScrollReveal'

interface FormData {
  name: string
  email: string
  company: string
  website: string
  message: string
  honeypot: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

export function Contact() {
  const headerReveal = useScrollReveal()
  const formReveal = useScrollReveal()

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    website: '',
    message: '',
    honeypot: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (formData.honeypot) {
      setStatus('success')
      return
    }

    if (!validateForm()) return

    setStatus('submitting')

    try {
      const response = await fetch(contact.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          website: formData.website,
          message: formData.message,
        }),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', company: '', website: '', message: '', honeypot: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputClasses = (hasError: boolean) =>
    `w-full px-5 py-4 bg-dark-800/50 border rounded-xl text-white placeholder-dark-500 transition-all focus:outline-none focus:ring-2 focus:ring-accent-500/20 ${
      hasError ? 'border-red-500/50 focus:border-red-500' : 'border-dark-700 focus:border-accent-500'
    }`

  return (
    <section id="contact" className="section-padding bg-dark-900 relative overflow-hidden">
      {/* Gradient accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-500/30 to-transparent" />
      <div className="absolute -right-40 bottom-0 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl" />

      <div className="container-wide relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Copy */}
          <div
            ref={headerReveal.ref}
            className={`lg:sticky lg:top-32 lg:self-start transition-all duration-700 ${
              headerReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-accent-500" />
              <span className="text-accent-400 text-sm font-medium uppercase tracking-wider">Get in Touch</span>
            </div>

            <h2 className="text-display-sm md:text-display-md font-bold text-white tracking-tight">
              {contact.title}
            </h2>
            <p className="mt-6 text-xl text-dark-300">
              {contact.subtitle}
            </p>

            <p className="mt-8 text-dark-400 leading-relaxed">
              {contact.note}
            </p>

            {/* Direct email */}
            <div className="mt-10 pt-10 border-t border-dark-800">
              <p className="text-sm text-dark-500 mb-3">Prefer email?</p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 text-lg text-accent-400 hover:text-accent-300 font-medium transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {siteConfig.email}
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div
            ref={formReveal.ref}
            className={`transition-all duration-700 delay-200 ${
              formReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {status === 'success' ? (
              <div className="bg-dark-800/50 rounded-3xl p-12 border border-dark-700 text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-accent-500/10 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Message Sent</h3>
                <p className="text-dark-400">{contact.form.successMessage}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-dark-800/30 rounded-3xl p-8 md:p-10 border border-dark-700 space-y-6">
                {/* Honeypot */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                  className="absolute -left-[9999px]"
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* Name and Email */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-dark-300 mb-2">
                      {contact.form.fields.name.label} <span className="text-accent-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={contact.form.fields.name.placeholder}
                      className={inputClasses(!!errors.name)}
                    />
                    {errors.name && <p className="mt-2 text-sm text-red-400">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-dark-300 mb-2">
                      {contact.form.fields.email.label} <span className="text-accent-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={contact.form.fields.email.placeholder}
                      className={inputClasses(!!errors.email)}
                    />
                    {errors.email && <p className="mt-2 text-sm text-red-400">{errors.email}</p>}
                  </div>
                </div>

                {/* Company and Website */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-dark-300 mb-2">
                      {contact.form.fields.company.label}
                    </label>
                    <input
                      type="text"
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder={contact.form.fields.company.placeholder}
                      className={inputClasses(false)}
                    />
                  </div>

                  <div>
                    <label htmlFor="website" className="block text-sm font-medium text-dark-300 mb-2">
                      {contact.form.fields.website.label}
                    </label>
                    <input
                      type="url"
                      id="website"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      placeholder={contact.form.fields.website.placeholder}
                      className={inputClasses(false)}
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-dark-300 mb-2">
                    {contact.form.fields.message.label} <span className="text-accent-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={contact.form.fields.message.placeholder}
                    className={inputClasses(!!errors.message)}
                  />
                  {errors.message && <p className="mt-2 text-sm text-red-400">{errors.message}</p>}
                </div>

                {/* Error message */}
                {status === 'error' && (
                  <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                    <p className="text-sm text-red-400">{contact.form.errorMessage}</p>
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-4 px-6 bg-accent-500 text-dark-950 font-semibold rounded-xl hover:bg-accent-400 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.01] active:scale-[0.99]"
                >
                  {status === 'submitting' ? 'Sending...' : contact.form.submitButton}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
