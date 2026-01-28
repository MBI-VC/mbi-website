import Link from 'next/link'
import Image from 'next/image'
import { siteConfig, footer } from '@/content/site-content'

const navLinks = [
  { href: '#approach', label: 'Approach' },
  { href: '#investments', label: 'Portfolio' },
  { href: '#team', label: 'Team' },
  { href: '#contact', label: 'Contact' },
]

export function Footer() {
  return (
    <footer className="bg-dark-950 border-t border-dark-800">
      <div className="container-wide py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <Image
                src="/light_purple/icon-500.png"
                alt="MBI.VC"
                width={48}
                height={48}
                className="w-12 h-12 rounded-xl"
              />
            </Link>
            <p className="mt-4 text-dark-400 max-w-sm leading-relaxed">
              {footer.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-medium text-dark-500 uppercase tracking-wider mb-5">
              Navigate
            </h4>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-dark-300 hover:text-accent-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-medium text-dark-500 uppercase tracking-wider mb-5">
              Contact
            </h4>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-dark-300 hover:text-accent-400 transition-colors"
            >
              {siteConfig.email}
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-dark-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-dark-600">
            {footer.copyright}
          </p>
          <p className="text-sm text-dark-600">
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
