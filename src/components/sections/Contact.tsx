'use client'

import { useState, FormEvent } from 'react'
import { contact, siteConfig } from '@/content/site-content'

interface FormData {
  name: string
  email: string
  company: string
  website: string
  message: string
  honeypot: string // Spam mitigation
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

export function Contact() {
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

    // Honeypot check - if filled, it's likely a bot
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
    `w-full px-4 py-3.5 bg-white border rounded-xl text-neutral-900 placeholder-neutral-400 transition-all focus:outline-none focus:ring-2 focus:ring-brand-500/20 ${
      hasError ? 'border-red-300 focus:border-red-500' : 'border-neutral-200 focus:border-brand-500'
    }`

  return (
    <section id="contact" className="section-padding bg-neutral-50">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Copy */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-neutral-900 tracking-tight">
              {contact.title}
            </h2>
            <p className="mt-4 text-xl text-neutral-600">
              {contact.subtitle}
            </p>

            {/* Single friendly note instead of checklist */}
            <p className="mt-8 text-neutral-600 leading-relaxed">
              {contact.note}
            </p>

            {/* Direct email option */}
            <div className="mt-8 pt-8 border-t border-neutral-200">
              <p className="text-sm text-neutral-500 mb-2">Prefer email?</p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-brand-600 hover:text-brand-700 font-medium transition-colors"
              >
                {siteConfig.email}
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            {status === 'success' ? (
              <div className="bg-white rounded-2xl p-10 border border-neutral-200 text-center">
                <div className="w-16 h-16 mx-auto mb-5 bg-green-50 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">Message Sent</h3>
                <p className="text-neutral-600">{contact.form.successMessage}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 md:p-10 border border-neutral-200 space-y-5">
                {/* Honeypot field - hidden from users */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                  className="absolute -left-[9999px]"
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* Name and Email row */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                      {contact.form.fields.name.label} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={contact.form.fields.name.placeholder}
                      className={inputClasses(!!errors.name)}
                    />
                    {errors.name && <p className="mt-1.5 text-sm text-red-600">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                      {contact.form.fields.email.label} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={contact.form.fields.email.placeholder}
                      className={inputClasses(!!errors.email)}
                    />
                    {errors.email && <p className="mt-1.5 text-sm text-red-600">{errors.email}</p>}
                  </div>
                </div>

                {/* Company and Website row */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-neutral-700 mb-2">
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
                    <label htmlFor="website" className="block text-sm font-medium text-neutral-700 mb-2">
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
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                    {contact.form.fields.message.label} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={contact.form.fields.message.placeholder}
                    className={inputClasses(!!errors.message)}
                  />
                  {errors.message && <p className="mt-1.5 text-sm text-red-600">{errors.message}</p>}
                </div>

                {/* Error message */}
                {status === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
                    <p className="text-sm text-red-700">{contact.form.errorMessage}</p>
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-4 px-6 bg-neutral-900 text-white font-medium rounded-xl hover:bg-neutral-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
