import Image from 'next/image'
import { team } from '@/content/site-content'

export function Team() {
  return (
    <section id="team" className="section-padding bg-white">
      <div className="container-wide">
        {/* Section header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-neutral-900 tracking-tight">
            {team.title}
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            {team.subtitle}
          </p>
        </div>

        {/* Team members */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12">
          {team.members.map((member) => (
            <article
              key={member.name}
              className="bg-neutral-50 rounded-2xl p-6 md:p-8 border border-neutral-100"
            >
              <div className="flex flex-col sm:flex-row gap-6">
                {/* Photo */}
                <div className="flex-shrink-0">
                  <div className="relative w-28 h-28 sm:w-32 sm:h-32 bg-neutral-200 rounded-xl overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 112px, 128px"
                    />
                  </div>
                </div>

                {/* Header info */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-semibold text-neutral-900">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-brand-600 font-medium text-sm">
                    {member.role}
                  </p>

                  {member.location && (
                    <p className="mt-2 text-sm text-neutral-500 flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                      className="inline-flex items-center gap-1.5 mt-3 text-sm text-neutral-500 hover:text-brand-600 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                      LinkedIn
                    </a>
                  )}
                </div>
              </div>

              {/* Highlights - scannable bullet points */}
              <div className="mt-6">
                <h4 className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-3">
                  Background
                </h4>
                <ul className="space-y-2">
                  {member.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2.5 text-sm text-neutral-700">
                      <svg className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Board seats if applicable */}
              {member.boards && member.boards.length > 0 && (
                <div className="mt-5 pt-5 border-t border-neutral-200">
                  <h4 className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-2">
                    Board Seats
                  </h4>
                  <p className="text-sm text-neutral-700">
                    {member.boards.join(' · ')}
                  </p>
                </div>
              )}

              {/* MBI role if applicable */}
              {member.mbiRole && (
                <div className="mt-5 pt-5 border-t border-neutral-200">
                  <h4 className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-2">
                    At MBI
                  </h4>
                  <p className="text-sm text-neutral-700 leading-relaxed">
                    {member.mbiRole}
                  </p>
                </div>
              )}

              {/* Personal note */}
              {member.personal && (
                <p className="mt-5 pt-5 border-t border-neutral-200 text-sm text-neutral-500 italic">
                  {member.personal}
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
