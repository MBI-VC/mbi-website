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
    <section id="approach" className="section-padding bg-dark-950 relative overflow-hidden">
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

        {/* Investment details - Interactive cards */}
        <div
          ref={detailsReveal.ref}
          className={`mt-20 transition-all duration-700 delay-100 ${
            detailsReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl">
            {[
              { label: 'Stage', value: approach.investmentDetails.stage, highlight: false },
              { label: 'Typical Check Size', value: approach.investmentDetails.checkSize, highlight: true },
            ].map((item, index) => (
              <div
                key={item.label}
                className="group p-6 bg-dark-800/50 rounded-2xl border border-dark-700/50 hover:border-accent-500/30 hover:bg-dark-800/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_-15px_rgba(168,85,247,0.15)]"
              >
                <p className="text-sm text-dark-500 uppercase tracking-wider mb-2 group-hover:text-accent-500/70 transition-colors">{item.label}</p>
                <p className={`text-xl font-bold transition-colors ${item.highlight ? 'text-accent-400 group-hover:text-accent-300' : 'text-white group-hover:text-accent-400'}`}>
                  {item.value}
                </p>
              </div>
            ))}
            <div className="md:col-span-2 group p-6 bg-dark-800/50 rounded-2xl border border-dark-700/50 hover:border-accent-500/30 hover:bg-dark-800/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_-15px_rgba(168,85,247,0.15)]">
              <p className="text-sm text-dark-500 uppercase tracking-wider mb-2 group-hover:text-accent-500/70 transition-colors">Sectors</p>
              <p className="text-xl font-bold text-white group-hover:text-accent-400 transition-colors">{approach.investmentDetails.focus}</p>
              <p className="text-sm text-dark-400 mt-2">{approach.investmentDetails.note}</p>
            </div>
          </div>
        </div>

        {/* Principles - with tilt and glow */}
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
                className="group relative p-8 bg-dark-800/30 border border-dark-700/50 rounded-2xl transition-all duration-500 hover:bg-dark-800/50 hover:border-accent-500/30 hover:-translate-y-2 hover:shadow-[0_20px_50px_-20px_rgba(168,85,247,0.2)]"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                {/* Number accent - rotates on hover */}
                <div className="absolute -top-4 -left-4 w-12 h-12 flex items-center justify-center bg-accent-500 text-dark-950 text-lg font-bold rounded-xl transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 group-hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.5)]">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <div className="relative pt-4">
                  <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-accent-400 transition-colors duration-300">
                    {principle.title}
                  </h4>
                  <p className="text-accent-400 font-medium mb-4 group-hover:text-accent-300 transition-colors">
                    {principle.question}
                  </p>
                  <p className="text-dark-400 leading-relaxed group-hover:text-dark-300 transition-colors">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How we help - Interactive items */}
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
                  className="group p-5 bg-dark-800/30 rounded-xl border border-dark-700/50 transition-all duration-300 hover:border-accent-500/30 hover:bg-dark-800/50 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(168,85,247,0.15)] cursor-default"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-2 h-2 rounded-full bg-accent-500 transition-all duration-300 group-hover:scale-150 group-hover:shadow-[0_0_10px_2px_rgba(168,85,247,0.4)]" />
                    <span className="font-semibold text-white group-hover:text-accent-400 transition-colors">{item.label}</span>
                  </div>
                  <p className="text-sm text-dark-400 pl-5 group-hover:text-dark-300 transition-colors">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Closing callout - with hover glow */}
        <div
          ref={closingReveal.ref}
          className={`mt-32 transition-all duration-700 ${
            closingReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="group relative p-10 md:p-14 bg-gradient-to-br from-accent-500/10 via-dark-800/50 to-dark-900 rounded-3xl border border-accent-500/20 overflow-hidden transition-all duration-500 hover:border-accent-500/40 hover:shadow-[0_0_80px_-20px_rgba(168,85,247,0.2)]">
            {/* Glow effect - animates on hover */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent-500/20 rounded-full blur-3xl transition-all duration-700 group-hover:scale-150 group-hover:bg-accent-500/30" />

            <div className="relative">
              <h3 className="text-display-sm md:text-display-md font-bold text-white mb-6 group-hover:text-accent-400 transition-colors duration-300">
                {approach.closing.headline}
              </h3>
              <p className="text-xl md:text-2xl text-dark-300 leading-relaxed max-w-2xl group-hover:text-dark-200 transition-colors duration-300">
                {approach.closing.text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
