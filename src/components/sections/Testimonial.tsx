import { testimonial } from '@/content/site-content'

export function Testimonial() {
  return (
    <section className="py-20 md:py-28 bg-neutral-900">
      <div className="container-wide">
        <figure className="max-w-4xl mx-auto text-center">
          <svg
            className="w-12 h-12 mx-auto mb-8 text-neutral-700"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>

          <blockquote>
            <p className="text-2xl md:text-3xl lg:text-4xl font-serif text-white leading-relaxed">
              {testimonial.quote}
            </p>
          </blockquote>

          <figcaption className="mt-8">
            <cite className="not-italic">
              <span className="block text-lg font-medium text-white">
                {testimonial.author}
              </span>
              <span className="block mt-1 text-neutral-400">
                {testimonial.role}
              </span>
            </cite>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
