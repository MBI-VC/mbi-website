'use client'

import { portfolio } from '@/content/site-content'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const categoryColors: Record<string, string> = {
  Media: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  Sports: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  Technology: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  Entertainment: 'bg-pink-500/10 text-pink-400 border-pink-500/20',
}

export function Investments() {
  const headerReveal = useScrollReveal()
  const gridReveal = useScrollReveal()
  const upcomingReveal = useScrollReveal()

  const activeInvestments = portfolio.investments.filter((i) => !i.isUpcoming)
  const upcomingInvestments = portfolio.investments.filter((i) => i.isUpcoming)

  return (
    <section id="investments" className="section-padding bg-dark-950 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-950 to-dark-950" />

      <div className="container-wide relative">
        {/* Section header */}
        <div
          ref={headerReveal.ref}
          className={`max-w-4xl mb-16 transition-all duration-700 ${
            headerReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-accent-500" />
            <span className="text-accent-400 text-sm font-medium uppercase tracking-wider">Portfolio</span>
          </div>

          <h2 className="text-display-sm md:text-display-md lg:text-display-lg font-bold text-white tracking-tight">
            {portfolio.title}
          </h2>
          <p className="mt-6 text-xl text-dark-400 max-w-2xl">
            {portfolio.subtitle}
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-12 mt-10">
            <div>
              <p className="text-5xl font-bold text-white">{portfolio.stats.companies}</p>
              <p className="mt-1 text-dark-500 uppercase tracking-wider text-sm">Companies</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-accent-400">{portfolio.stats.categories}</p>
              <p className="mt-1 text-dark-500 uppercase tracking-wider text-sm">Sectors</p>
            </div>
          </div>
        </div>

        {/* Active investments grid */}
        <div
          ref={gridReveal.ref}
          className={`transition-all duration-700 ${
            gridReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {activeInvestments.map((investment, index) => (
              <article
                key={investment.name}
                className="group relative p-6 bg-dark-900/50 rounded-2xl border border-dark-800 hover:border-accent-500/30 hover:bg-dark-800/50 transition-all duration-500"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="flex items-start justify-between gap-3 mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-accent-400 transition-colors">
                    {investment.name}
                  </h3>
                  <span className={`flex-shrink-0 text-xs font-medium px-3 py-1 rounded-full border ${categoryColors[investment.category] || 'bg-dark-800 text-dark-400 border-dark-700'}`}>
                    {investment.category}
                  </span>
                </div>

                <p className="text-dark-400 text-sm leading-relaxed mb-6">
                  {investment.description}
                </p>

                <div className="mt-auto">
                  {investment.url ? (
                    <a
                      href={investment.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-dark-500 hover:text-accent-400 transition-colors"
                    >
                      <span>Visit site</span>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  ) : (
                    <span className="text-sm text-dark-600">Coming soon</span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Upcoming investments */}
        {upcomingInvestments.length > 0 && (
          <div
            ref={upcomingReveal.ref}
            className={`mt-20 transition-all duration-700 ${
              upcomingReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-500"></span>
                </span>
                <h3 className="text-xl font-bold text-white">Launching Soon</h3>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {upcomingInvestments.map((investment, index) => (
                <article
                  key={investment.name}
                  className="group relative p-6 bg-gradient-to-br from-dark-800/30 to-dark-900/50 rounded-2xl border-2 border-dashed border-dark-700 hover:border-accent-500/50 transition-all duration-500"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <h3 className="text-xl font-bold text-white">
                      {investment.name}
                    </h3>
                    {investment.badge && (
                      <span className="flex-shrink-0 text-xs font-bold px-3 py-1 bg-accent-500 text-dark-950 rounded-full">
                        {investment.badge}
                      </span>
                    )}
                  </div>

                  <p className="text-dark-400 text-sm leading-relaxed mb-4">
                    {investment.description}
                  </p>

                  <span className={`text-xs font-medium px-3 py-1 rounded-full border ${categoryColors[investment.category] || 'bg-dark-800 text-dark-400 border-dark-700'}`}>
                    {investment.category}
                  </span>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
