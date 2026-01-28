'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  { href: '#approach', label: 'Approach' },
  { href: '#investments', label: 'Portfolio' },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-dark-950/90 backdrop-blur-lg border-b border-dark-800/50 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container-wide flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <Image
            src="/logo.png"
            alt="MBI.VC"
            width={40}
            height={40}
            className={`transition-all duration-300 ${isScrolled ? 'w-9 h-9' : 'w-10 h-10'}`}
          />
          <span className="font-bold text-xl tracking-tight text-white">
            MBI<span className="text-accent-500">.VC</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-dark-300 hover:text-white transition-colors rounded-full hover:bg-white/5"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 px-6 py-2.5 text-sm font-semibold text-dark-950 bg-accent-500 hover:bg-accent-400 rounded-full transition-all duration-300 hover:scale-[1.02]"
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
            className="w-6 h-6 text-white"
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
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-dark-900/95 backdrop-blur-lg border-b border-dark-800 transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <nav className="container-wide flex flex-col gap-2 py-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-lg text-dark-200 hover:text-white transition-colors py-3 border-b border-dark-800"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-4 text-center text-base font-semibold text-dark-950 bg-accent-500 hover:bg-accent-400 px-6 py-4 rounded-full transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get in Touch
          </a>
        </nav>
      </div>
    </header>
  )
}
