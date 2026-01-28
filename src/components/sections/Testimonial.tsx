'use client'

import { testimonial } from '@/content/site-content'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export function Testimonial() {
  const reveal = useScrollReveal()

  return (
    <section className="py-24 md:py-32 bg-dark-900 relative overflow-hidden">
      {/* Gradient accents */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-500/30 to-transparent" />
      <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl" />

      <div className="container-wide relative">
        <figure
          ref={reveal.ref}
          className={`max-w-4xl mx-auto transition-all duration-700 ${
            reveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Large quote mark */}
          <div className="flex justify-center mb-10">
            <div className="w-16 h-16 flex items-center justify-center bg-accent-500/10 rounded-2xl border border-accent-500/20">
              <svg
                className="w-8 h-8 text-accent-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
          </div>

          <blockquote className="text-center">
            <p className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed font-medium">
              {testimonial.quote}
            </p>
          </blockquote>

          <figcaption className="mt-10 text-center">
            <cite className="not-italic">
              <span className="block text-xl font-bold text-white">
                {testimonial.author}
              </span>
              <span className="block mt-2 text-accent-400">
                {testimonial.role}
              </span>
            </cite>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
