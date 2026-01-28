'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  { href: '#approach', label: 'Approach' },
  { href: '#investments', label: 'Investments' },
  { href: '#team', label: 'Team' },
  { href: '#contact', label: 'Contact' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm border-b border-neutral-100 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-wide flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <Image
            src="/logo.png"
            alt="MBI.VC"
            width={36}
            height={36}
            className={`transition-all ${isScrolled ? 'w-8 h-8' : 'w-9 h-9'}`}
          />
          <span className={`font-semibold tracking-tight transition-colors ${
            isScrolled ? 'text-neutral-900' : 'text-white'
          }`}>
            MBI.VC
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors ${
                isScrolled
                  ? 'text-neutral-600 hover:text-neutral-900'
                  : 'text-neutral-300 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className={`text-sm font-medium px-5 py-2.5 rounded-full transition-colors ${
              isScrolled
                ? 'text-white bg-neutral-900 hover:bg-neutral-800'
                : 'text-neutral-900 bg-white hover:bg-neutral-100'
            }`}
          >
            Get in Touch
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 -mr-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className={`w-6 h-6 transition-colors ${isScrolled ? 'text-neutral-900' : 'text-white'}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-neutral-100 py-4 shadow-lg">
          <nav className="container-wide flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base text-neutral-600 hover:text-neutral-900 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="text-base font-medium text-white bg-neutral-900 hover:bg-neutral-800 px-5 py-3 rounded-full transition-colors text-center mt-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get in Touch
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
