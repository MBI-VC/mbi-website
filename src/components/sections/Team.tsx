'use client'

import Image from 'next/image'
import { team } from '@/content/site-content'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export function Team() {
  const headerReveal = useScrollReveal()
  const cardsReveal = useScrollReveal()

  return (
    <section id="team" className="section-padding bg-dark-950 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 to-dark-950" />

      <div className="container-wide relative">
        {/* Section header */}
        <div
          ref={headerReveal.ref}
          className={`max-w-4xl mb-20 transition-all duration-700 ${
            headerReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-accent-500" />
            <span className="text-accent-400 text-sm font-medium uppercase tracking-wider">The Team</span>
          </div>

          <h2 className="text-display-sm md:text-display-md lg:text-display-lg font-bold text-white tracking-tight">
            {team.title}
          </h2>
          <p className="mt-6 text-xl text-dark-400 max-w-2xl">
            {team.subtitle}
          </p>
        </div>

        {/* Team members */}
        <div
          ref={cardsReveal.ref}
          className={`grid lg:grid-cols-2 gap-8 transition-all duration-700 ${
            cardsReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {team.members.map((member, index) => (
            <article
              key={member.name}
              className="group relative bg-dark-900/50 rounded-3xl p-8 md:p-10 border border-dark-800 hover:border-accent-500/30 transition-all duration-500"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Glow effect on hover */}
              <div className="absolute -inset-px bg-gradient-to-b from-accent-500/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                <div className="flex flex-col sm:flex-row gap-6 mb-8">
                  {/* Photo with accent border */}
                  <div className="flex-shrink-0">
                    <div className="relative w-32 h-32 sm:w-36 sm:h-36">
                      <div className="absolute inset-0 bg-gradient-to-br from-accent-500 via-glow-500 to-accent-600 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500" />
                      <div className="relative w-full h-full bg-dark-800 rounded-2xl overflow-hidden">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 128px, 144px"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Header info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-2xl font-bold text-white">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-accent-400 font-medium">
                      {member.role}
                    </p>

                    {member.location && (
                      <p className="mt-3 text-sm text-dark-400 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {member.location}
                      </p>
                    )}

                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-4 text-sm text-dark-500 hover:text-accent-400 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        LinkedIn
                      </a>
                    )}
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="text-xs font-medium text-dark-500 uppercase tracking-wider mb-4">
                    Background
                  </h4>
                  <ul className="space-y-3">
                    {member.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-dark-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent-500 mt-2 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Board seats */}
                {member.boards && member.boards.length > 0 && (
                  <div className="pt-6 border-t border-dark-800">
                    <h4 className="text-xs font-medium text-dark-500 uppercase tracking-wider mb-3">
                      Board Seats
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {member.boards.map((board) => (
                        <span
                          key={board}
                          className="px-3 py-1 text-sm text-dark-300 bg-dark-800/50 rounded-full border border-dark-700"
                        >
                          {board}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Personal note */}
                {member.personal && (
                  <p className="mt-6 pt-6 border-t border-dark-800 text-sm text-dark-500 italic">
                    {member.personal}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
