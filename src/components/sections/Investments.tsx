import { portfolio } from '@/content/site-content'

const categoryColors: Record<string, string> = {
  Media: 'bg-blue-50 text-blue-700 border-blue-100',
  Sports: 'bg-emerald-50 text-emerald-700 border-emerald-100',
  Technology: 'bg-purple-50 text-purple-700 border-purple-100',
  Entertainment: 'bg-amber-50 text-amber-700 border-amber-100',
}

export function Investments() {
  // Separate active and upcoming investments
  const activeInvestments = portfolio.investments.filter((i) => !i.isUpcoming)
  const upcomingInvestments = portfolio.investments.filter((i) => i.isUpcoming)

  return (
    <section id="investments" className="section-padding bg-neutral-50">
      <div className="container-wide">
        {/* Section header */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-neutral-900 tracking-tight">
            {portfolio.title}
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            {portfolio.subtitle}
          </p>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-8 mb-12">
          <div className="flex items-center gap-3">
            <span className="text-3xl font-semibold text-neutral-900">{portfolio.stats.companies}</span>
            <span className="text-neutral-500">portfolio companies</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-3xl font-semibold text-neutral-900">{portfolio.stats.categories}</span>
            <span className="text-neutral-500">sectors</span>
          </div>
        </div>

        {/* Active investments */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {activeInvestments.map((investment) => (
            <article
              key={investment.name}
              className="group bg-white rounded-2xl p-6 border border-neutral-200 hover:border-neutral-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="text-lg font-semibold text-neutral-900 group-hover:text-brand-700 transition-colors">
                  {investment.name}
                </h3>
              </div>

              <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                {investment.description}
              </p>

              <div className="flex items-center justify-between mt-auto pt-2">
                <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${categoryColors[investment.category] || 'bg-neutral-100 text-neutral-600 border-neutral-200'}`}>
                  {investment.category}
                </span>

                {investment.url && (
                  <a
                    href={investment.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-neutral-500 hover:text-brand-600 transition-colors flex items-center gap-1"
                  >
                    Visit
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Upcoming investments */}
        {upcomingInvestments.length > 0 && (
          <div className="mt-12">
            <h3 className="text-lg font-semibold text-neutral-900 mb-6 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
              Coming Soon
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {upcomingInvestments.map((investment) => (
                <article
                  key={investment.name}
                  className="group bg-white rounded-2xl p-6 border-2 border-dashed border-neutral-200 hover:border-brand-300 transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="text-lg font-semibold text-neutral-900">
                      {investment.name}
                    </h3>
                    {investment.badge && (
                      <span className="flex-shrink-0 text-xs font-semibold px-2.5 py-1 bg-brand-500 text-white rounded-full">
                        {investment.badge}
                      </span>
                    )}
                  </div>

                  <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                    {investment.description}
                  </p>

                  <div className="flex items-center mt-auto pt-2">
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${categoryColors[investment.category] || 'bg-neutral-100 text-neutral-600 border-neutral-200'}`}>
                      {investment.category}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
