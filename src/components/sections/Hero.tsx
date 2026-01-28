'use client'

import { siteConfig, hero } from '@/content/site-content'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-dark-950" />

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/4 w-[800px] h-[800px] rounded-full bg-gradient-radial from-accent-500/20 via-accent-600/5 to-transparent blur-3xl animate-glow-pulse" />
        <div className="absolute -bottom-1/2 -right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-radial from-accent-600/15 via-accent-700/5 to-transparent blur-3xl animate-glow-pulse animate-delay-500" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      <div className="container-wide relative z-10 py-32 lg:py-40">
        <div className="max-w-5xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8 animate-fade-in">
            <div className="w-12 h-px bg-gradient-to-r from-accent-500 to-transparent" />
            <span className="text-accent-400 text-sm font-medium tracking-wider uppercase">
              {hero.eyebrow}
            </span>
          </div>

          {/* Headline - BIG and BOLD */}
          <h1 className="animate-fade-in-up">
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-display-lg xl:text-display-xl font-bold text-white leading-none tracking-tight">
              We Build
            </span>
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-display-lg xl:text-display-xl font-bold leading-none tracking-tight mt-2 text-gradient">
              Alongside You
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mt-8 md:mt-10 text-xl md:text-2xl text-dark-300 max-w-2xl leading-relaxed animate-fade-in-up animate-delay-200">
            {hero.subheadline}
          </p>

          {/* CTAs */}
          <div className="mt-12 md:mt-14 flex flex-wrap gap-4 animate-fade-in-up animate-delay-300">
            <a href="#contact" className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold bg-accent-500 text-dark-950 rounded-full transition-all duration-300 hover:bg-accent-400 hover:scale-[1.02] hover:shadow-[0_0_40px_-10px_rgba(245,158,11,0.5)] active:scale-[0.98] overflow-hidden">
              <span className="relative z-10 flex items-center">
                {hero.primaryCta}
                <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent-400 to-accent-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <a href="#investments" className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white border border-dark-600 rounded-full transition-all duration-300 hover:border-accent-500/50 hover:bg-accent-500/5 overflow-hidden">
              <span className="relative z-10">{hero.secondaryCta}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-full group-hover:translate-x-0" />
            </a>
          </div>

          {/* Stats row - Interactive */}
          <div className="mt-20 md:mt-24 grid grid-cols-3 gap-8 max-w-2xl animate-fade-in-up animate-delay-400">
            {[
              { value: siteConfig.checkSize.range, label: 'Check size', highlight: true },
              { value: '11+', label: 'Portfolio companies', highlight: false },
              { value: '2', label: 'Continents', highlight: false },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className={`group cursor-default pl-5 border-l-2 transition-all duration-300 hover:-translate-y-1 ${
                  stat.highlight ? 'border-accent-500/50 hover:border-accent-500' : 'border-dark-700 hover:border-accent-500/50'
                }`}
              >
                <p className={`text-3xl md:text-4xl font-bold transition-colors duration-300 ${
                  stat.highlight ? 'text-white group-hover:text-accent-400' : 'text-white group-hover:text-accent-400'
                }`}>
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-dark-400 group-hover:text-dark-300 transition-colors duration-300">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animate-delay-500">
        <a
          href="#approach"
          className="flex flex-col items-center gap-2 text-dark-500 hover:text-accent-400 transition-colors group"
          aria-label="Scroll to learn more"
        >
          <span className="text-xs uppercase tracking-widest group-hover:tracking-[0.2em] transition-all duration-300">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-dark-500 to-transparent group-hover:from-accent-400 group-hover:h-16 transition-all duration-300" />
        </a>
      </div>
    </section>
  )
}
