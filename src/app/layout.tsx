import type { Metadata } from 'next'
import { Inter, Source_Serif_4 } from 'next/font/google'
import './globals.css'
import { siteConfig } from '@/content/site-content'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-source-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: [
      { url: '/light_purple/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/light_purple/icon-500.png', sizes: '500x500', type: 'image/png' },
    ],
    apple: '/light_purple/icon-500.png',
  },
  keywords: [
    'venture capital',
    'early-stage investing',
    'operator-led VC',
    'founder friendly',
    'pre-seed',
    'seed funding',
    'sports investment',
    'media investment',
  ],
  authors: [{ name: 'MBI Ventures' }],
  creator: 'MBI Ventures',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: 'MBI.VC | Operator-Led Venture Capital',
    description: 'We back resilient founders with real traction. $100K-$500K checks in media, sports, AI, tech, and CPG.',
    siteName: siteConfig.name,
    images: [
      {
        url: '/light_purple/icon-circle-2000.png',
        width: 2000,
        height: 2000,
        alt: 'MBI.VC Logo',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'MBI.VC | Operator-Led Venture Capital',
    description: 'We back resilient founders with real traction. $100K-$500K checks in media, sports, AI, tech, and CPG.',
    images: ['/light_purple/icon-circle-2000.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sourceSerif.variable}`}>
      <body className="font-sans">
        {children}
      </body>
    </html>
  )
}
