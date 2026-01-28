import { approach } from '@/content/site-content'

export function Approach() {
  return (
    <section id="approach" className="section-padding bg-white">
      <div className="container-wide">
        {/* Section header */}
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-neutral-900 tracking-tight">
            {approach.title}
          </h2>
          <p className="mt-6 text-2xl md:text-3xl font-serif text-neutral-700 leading-snug">
            {approach.intro}
          </p>
        </div>

        {/* Philosophy paragraphs */}
        <div className="mt-10 max-w-3xl space-y-5">
          {approach.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-lg text-neutral-600 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Investment details - improved layout */}
        <div className="mt-14 p-8 md:p-10 bg-neutral-50 rounded-2xl max-w-4xl border border-neutral-100">
          <h3 className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-8">
            Investment Focus
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <p className="text-sm text-neutral-500 mb-1.5">Stage</p>
              <p className="text-lg font-semibold text-neutral-900">{approach.investmentDetails.stage}</p>
            </div>
            <div>
              <p className="text-sm text-neutral-500 mb-1.5">Check Size</p>
              <p className="text-lg font-semibold text-neutral-900">{approach.investmentDetails.checkSize}</p>
            </div>
            <div className="sm:col-span-2">
              <p className="text-sm text-neutral-500 mb-1.5">Sectors</p>
              <p className="text-lg font-semibold text-neutral-900">{approach.investmentDetails.focus}</p>
              <p className="text-sm text-neutral-500 mt-1">{approach.investmentDetails.note}</p>
            </div>
          </div>
        </div>

        {/* Principles - improved with questions */}
        <div className="mt-24">
          <h3 className="text-2xl md:text-3xl font-semibold text-neutral-900 tracking-tight mb-4">
            What We Look For
          </h3>
          <p className="text-lg text-neutral-600 mb-12 max-w-2xl">
            Four questions we ask about every founder and opportunity.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {approach.principles.map((principle, index) => (
              <div
                key={principle.title}
                className="group p-7 bg-white border border-neutral-200 rounded-2xl hover:border-neutral-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-neutral-900 text-white text-sm font-medium rounded-full">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xl font-semibold text-neutral-900">
                      {principle.title}
                    </h4>
                    <p className="mt-2 text-brand-700 font-medium text-sm">
                      {principle.question}
                    </p>
                    <p className="mt-3 text-neutral-600 leading-relaxed text-[15px]">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How we help - improved with details */}
        <div className="mt-24 grid lg:grid-cols-5 gap-12 lg:gap-16">
          <div className="lg:col-span-2">
            <h3 className="text-2xl md:text-3xl font-semibold text-neutral-900 tracking-tight">
              {approach.howWeHelp.title}
            </h3>
            <p className="mt-4 text-lg text-neutral-600 leading-relaxed">
              {approach.howWeHelp.description}
            </p>
          </div>
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
            {approach.howWeHelp.items.map((item) => (
              <div
                key={item.label}
                className="p-5 bg-neutral-50 rounded-xl border border-neutral-100"
              >
                <div className="flex items-center gap-3 mb-2">
                  <svg className="w-5 h-5 text-brand-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-semibold text-neutral-900">{item.label}</span>
                </div>
                <p className="text-sm text-neutral-600 pl-8">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Closing - standalone callout */}
        <div className="mt-24 max-w-3xl p-8 md:p-10 bg-neutral-900 rounded-2xl">
          <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
            {approach.closing.headline}
          </h3>
          <p className="text-lg md:text-xl text-neutral-300 leading-relaxed">
            {approach.closing.text}
          </p>
        </div>
      </div>
    </section>
  )
}
