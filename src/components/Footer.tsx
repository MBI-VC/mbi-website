import Link from 'next/link'
import { siteConfig, footer } from '@/content/site-content'

const navLinks = [
  { href: '#approach', label: 'Approach' },
  { href: '#investments', label: 'Investments' },
  { href: '#team', label: 'Team' },
  { href: '#contact', label: 'Contact' },
]

export function Footer() {
  return (
    <footer className="bg-neutral-950 text-white">
      <div className="container-wide py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="text-2xl font-semibold tracking-tight">
              {siteConfig.name}
            </Link>
            <p className="mt-3 text-neutral-400 max-w-sm">
              {footer.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-medium text-neutral-300 uppercase tracking-wider mb-4">
              Navigate
            </h4>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-medium text-neutral-300 uppercase tracking-wider mb-4">
              Contact
            </h4>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-neutral-400 hover:text-white transition-colors"
            >
              {siteConfig.email}
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-neutral-500">
            {footer.copyright}
          </p>
          <p className="text-sm text-neutral-500">
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
