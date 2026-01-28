'use client'

import { approach } from '@/content/site-content'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export function Approach() {
  const headerReveal = useScrollReveal()
  const detailsReveal = useScrollReveal()
  const principlesReveal = useScrollReveal()
  const helpReveal = useScrollReveal()
  const closingReveal = useScrollReveal()

  return (
    <section id="approach" className="section-padding bg-dark-900 relative overflow-hidden">
      {/* Subtle gradient accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-500/50 to-transparent" />

      <div className="container-wide relative">
        {/* Section header */}
        <div
          ref={headerReveal.ref}
          className={`max-w-4xl transition-all duration-700 ${
            headerReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-display-sm md:text-display-md lg:text-display-lg font-bold text-white tracking-tight">
            {approach.title}
          </h2>
          <p className="mt-8 text-2xl md:text-3xl text-dark-300 leading-relaxed max-w-3xl">
            {approach.intro}
          </p>
        </div>

        {/* Philosophy paragraphs */}
        <div className="mt-12 max-w-3xl space-y-6">
          {approach.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-lg text-dark-400 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Investment details */}
        <div
          ref={detailsReveal.ref}
          className={`mt-20 transition-all duration-700 delay-100 ${
            detailsReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl">
            <div className="p-6 bg-dark-800/50 rounded-2xl border border-dark-700/50">
              <p className="text-sm text-dark-500 uppercase tracking-wider mb-2">Stage</p>
              <p className="text-xl font-bold text-white">{approach.investmentDetails.stage}</p>
            </div>
            <div className="p-6 bg-dark-800/50 rounded-2xl border border-dark-700/50">
              <p className="text-sm text-dark-500 uppercase tracking-wider mb-2">Check Size</p>
              <p className="text-xl font-bold text-accent-400">{approach.investmentDetails.checkSize}</p>
            </div>
            <div className="md:col-span-2 p-6 bg-dark-800/50 rounded-2xl border border-dark-700/50">
              <p className="text-sm text-dark-500 uppercase tracking-wider mb-2">Sectors</p>
              <p className="text-xl font-bold text-white">{approach.investmentDetails.focus}</p>
              <p className="text-sm text-dark-400 mt-2">{approach.investmentDetails.note}</p>
            </div>
          </div>
        </div>

        {/* Principles */}
        <div
          ref={principlesReveal.ref}
          className={`mt-32 transition-all duration-700 ${
            principlesReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-accent-500" />
            <span className="text-accent-400 text-sm font-medium uppercase tracking-wider">What We Look For</span>
          </div>
          <h3 className="text-display-sm md:text-display-md font-bold text-white tracking-tight mb-4">
            Four Questions
          </h3>
          <p className="text-lg text-dark-400 mb-16 max-w-xl">
            We ask these about every founder and opportunity.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {approach.principles.map((principle, index) => (
              <div
                key={principle.title}
                className="group relative p-8 bg-dark-800/30 border border-dark-700/50 rounded-2xl hover:bg-dark-800/50 hover:border-accent-500/30 transition-all duration-500"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Number accent */}
                <div className="absolute -top-4 -left-4 w-12 h-12 flex items-center justify-center bg-accent-500 text-dark-950 text-lg font-bold rounded-xl">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <div className="pt-4">
                  <h4 className="text-2xl font-bold text-white mb-3">
                    {principle.title}
                  </h4>
                  <p className="text-accent-400 font-medium mb-4">
                    {principle.question}
                  </p>
                  <p className="text-dark-400 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How we help */}
        <div
          ref={helpReveal.ref}
          className={`mt-32 transition-all duration-700 ${
            helpReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-accent-500" />
                <span className="text-accent-400 text-sm font-medium uppercase tracking-wider">How We Help</span>
              </div>
              <h3 className="text-display-sm md:text-display-md font-bold text-white tracking-tight mb-6">
                In The Trenches
              </h3>
              <p className="text-xl text-dark-300 leading-relaxed">
                {approach.howWeHelp.description}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {approach.howWeHelp.items.map((item, index) => (
                <div
                  key={item.label}
                  className="group p-5 bg-dark-800/30 rounded-xl border border-dark-700/50 hover:border-accent-500/30 transition-all duration-300"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-2 h-2 rounded-full bg-accent-500" />
                    <span className="font-semibold text-white">{item.label}</span>
                  </div>
                  <p className="text-sm text-dark-400 pl-5">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Closing callout */}
        <div
          ref={closingReveal.ref}
          className={`mt-32 transition-all duration-700 ${
            closingReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="relative p-10 md:p-14 bg-gradient-to-br from-accent-500/10 via-dark-800/50 to-dark-900 rounded-3xl border border-accent-500/20 overflow-hidden">
            {/* Glow effect */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent-500/20 rounded-full blur-3xl" />

            <div className="relative">
              <h3 className="text-display-sm md:text-display-md font-bold text-white mb-6">
                {approach.closing.headline}
              </h3>
              <p className="text-xl md:text-2xl text-dark-300 leading-relaxed max-w-2xl">
                {approach.closing.text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
