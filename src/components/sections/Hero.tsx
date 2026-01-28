import { siteConfig, hero } from '@/content/site-content'

export function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center bg-neutral-950 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950" />

      {/* Subtle texture */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container-wide relative z-10 py-32">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <p className="text-brand-400 text-sm font-medium tracking-wider uppercase mb-6 animate-fade-in">
            {hero.eyebrow}
          </p>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.05] tracking-tight animate-fade-in-up">
            {hero.headline}
          </h1>

          {/* Subheadline */}
          <p className="mt-6 md:mt-8 text-lg md:text-xl lg:text-2xl text-neutral-300 max-w-2xl leading-relaxed animate-fade-in-up animate-delay-100">
            {hero.subheadline}
          </p>

          {/* CTAs */}
          <div className="mt-10 md:mt-12 flex flex-wrap gap-4 animate-fade-in-up animate-delay-200">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center px-8 py-4 text-base font-medium text-neutral-900 bg-white hover:bg-neutral-100 rounded-full transition-all duration-200"
            >
              {hero.primaryCta}
              <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#investments"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white border border-neutral-700 hover:border-neutral-500 hover:bg-white/5 rounded-full transition-all duration-200"
            >
              {hero.secondaryCta}
            </a>
          </div>

          {/* Key differentiators - cleaner format */}
          <div className="mt-16 md:mt-20 flex flex-wrap gap-x-8 gap-y-3 animate-fade-in-up animate-delay-300">
            <div className="flex items-center gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-400" />
              <span className="text-neutral-400 text-sm">Pre-seed to Series A</span>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-400" />
              <span className="text-neutral-400 text-sm">{siteConfig.checkSize.range} checks</span>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-400" />
              <span className="text-neutral-400 text-sm">Hands-on support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a href="#approach" className="block animate-bounce text-neutral-600 hover:text-neutral-400 transition-colors" aria-label="Scroll to learn more">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  )
}
