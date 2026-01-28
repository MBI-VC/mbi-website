/**
 * MBI.VC Site Content
 *
 * This file contains all editable copy for the website.
 * Edit this file to update content across the site.
 */

export const siteConfig = {
  name: 'MBI.VC',
  tagline: 'Backing Resilient Founders',
  description: 'MBI is an operator-led venture firm backing resilient founders with real-world traction. We invest early-stage with hands-on support in strategy, growth, and operations.',
  url: 'https://mbi.vc',

  // Contact info
  email: 'hello@mbi.vc', // TODO: Update with actual email

  // Social links (optional)
  social: {
    twitter: '', // TODO: Add if applicable
    linkedin: '', // TODO: Add if applicable
  },

  // Investment parameters
  checkSize: {
    min: '$100K',
    max: '$500K',
    range: '$100K – $500K',
  },

  // Focus areas
  focusAreas: ['Media', 'Sports', 'AI', 'Tech', 'CPG'],
}

export const hero = {
  // More founder-focused, benefit-driven headline
  headline: 'We Build Alongside You',
  subheadline: 'MBI is an operator-led venture firm. We back resilient founders with real traction—and we stay in the trenches with you.',
  primaryCta: 'Start a Conversation',
  secondaryCta: 'View Portfolio',
  // Eyebrow text above headline
  eyebrow: 'Operator-Led Venture Capital',
}

export const approach = {
  title: 'Our Approach',
  intro: 'We invest in people first and businesses second.',

  paragraphs: [
    'Ideas matter, but the people behind them matter more. The best founders refuse to quit. They adapt when things go sideways and find a way forward when most others would stop.',
    'We look for businesses that have proven something in the real world—even if it\'s just early customers or modest revenue. That proof of life shows real validation and a founder who\'s pushed through obstacles to ship.',
    'We\'re not passive capital. We look for opportunities where our operating experience can meaningfully accelerate your trajectory.',
  ],

  investmentDetails: {
    stage: 'Pre-seed to Series A',
    checkSize: '$100K – $500K',
    focus: 'Media, Sports, AI, Tech, CPG',
    note: 'Industry-agnostic when we find the right founder.',
  },

  principles: [
    {
      title: 'Trust',
      question: 'Do we trust the person running the business?',
      description: 'Trust is everything. We back founders whose word means something—who communicate honestly in good times and bad. We\'d rather back someone we trust with an imperfect plan than a brilliant strategist we don\'t believe.',
    },
    {
      title: 'Conviction',
      question: 'Will they stay the course when things get hard?',
      description: 'Every business faces turbulence. The best founders lead with conviction—a blend of belief, courage, and endurance. They\'re driven by purpose, not comfort.',
    },
    {
      title: 'Vision',
      question: 'Is the idea grounded in a real problem?',
      description: 'We want to understand what you\'re solving, for whom, and why it matters. Strong ideas don\'t have to be revolutionary—they need to work better, faster, or more efficiently than what exists.',
    },
    {
      title: 'Discipline',
      question: 'Does the valuation reflect reality?',
      description: 'We look for logic and fairness, not fantasy. A valuation should reflect traction, not just potential. We value founders who understand capital efficiency.',
    },
  ],

  howWeHelp: {
    title: 'How We Help',
    description: 'We roll up our sleeves. Our partners take board seats, advise on strategy, and often embed directly with portfolio companies.',
    items: [
      { label: 'Strategy', detail: 'Positioning and go-to-market' },
      { label: 'Product', detail: 'Roadmap and prioritization' },
      { label: 'Growth', detail: 'Acquisition and retention' },
      { label: 'Hiring', detail: 'Team building and culture' },
      { label: 'Partnerships', detail: 'Intros and deal support' },
      { label: 'Operations', detail: 'Systems and process design' },
    ],
  },

  // Standalone callout for the closing statement
  closing: {
    headline: 'Character Endures',
    text: 'Markets evolve. Products pivot. But execution, integrity, and adaptability are the true differentiators. We back founders who build with purpose.',
  },
}

export const portfolio = {
  title: 'Portfolio',
  subtitle: 'Companies we\'ve backed across media, sports, AI, tech, and CPG.',

  // Stats for social proof
  stats: {
    companies: '11',
    categories: '5',
  },

  investments: [
    {
      name: 'Prediction Media',
      description: 'PredictionNews.com serves the growing demand for prediction market analysis, data insights, and comprehensive industry reporting.',
      url: 'https://predictionnews.com', // TODO: Verify URL
      category: 'Media',
    },
    {
      name: 'Access Global Media',
      description: 'Hyper-local network of news websites across Pennsylvania and the Jersey Shore, including Fideri News.',
      url: '', // TODO: Add URL
      category: 'Media',
    },
    {
      name: 'CapeMedia.io',
      description: 'Leading sports and gaming performance marketing agency.',
      url: 'https://capemedia.io', // TODO: Verify URL
      category: 'Media',
    },
    {
      name: 'Culture Health',
      description: 'A culture operating system built around one loop: Measure, Understand, Act, Re-measure.',
      url: 'https://getculturehealth.com', // TODO: Verify URL
      category: 'Technology',
    },
    {
      name: 'Charlotte Checkers',
      description: 'Professional hockey team in the American Hockey League, managed by Zawyer Sports.',
      url: '', // TODO: Add URL
      category: 'Sports',
    },
    {
      name: 'Greensboro Gargoyles',
      description: 'Professional hockey team in the ECHL, managed by Zawyer Sports.',
      url: '', // TODO: Add URL
      category: 'Sports',
    },
    {
      name: 'Gastonia Baseball Club',
      description: 'Professional baseball team in the Atlantic League, managed by Zawyer Sports.',
      url: '', // TODO: Add URL
      category: 'Sports',
    },
    {
      name: 'Augusta Hockey Club',
      description: 'ECHL franchise launching in Augusta, Georgia.',
      url: '', // TODO: Add URL
      category: 'Sports',
      badge: '2027',
      isUpcoming: true,
    },
    {
      name: 'Mobile Hockey Club',
      description: 'Franchise team in the SPHL.',
      url: '', // TODO: Add URL
      category: 'Sports',
    },
    {
      name: 'Savannah Ice Cove & Amphitheatre',
      description: 'Live event space with music venue and two sheets of ice for the Savannah community.',
      url: '', // TODO: Add URL
      category: 'Entertainment',
    },
    {
      name: 'UpShot League',
      description: 'Professional women\'s basketball league. Inaugural teams in Jacksonville, Charlotte, Savannah, and Greensboro. Baltimore joining 2027.',
      url: '', // TODO: Add URL
      category: 'Sports',
      badge: 'May 2026',
      isUpcoming: true,
    },
  ],
}

export const testimonial = {
  quote: 'Morgan understood our vision from day one. Over time he\'s become much more than an investor—acting as a mentor and offering guidance, perspective, and hands-on involvement across the business.',
  author: 'Ashley Adir',
  role: 'Founder, Cape Media',
}

export const team = {
  title: 'Founding Team',
  subtitle: 'A global team of operators backing the best founders in the world.',

  members: [
    {
      name: 'Morgan Busby',
      role: 'Founding Partner',
      image: '/images/team/morgan-busby.png',
      highlights: [
        'Built Financial Media Corp from a blog to 130+ employees across 5 countries',
        'Sold majority stake to VNR Verlag, one of Germany\'s largest publishers (2021)',
        'Former securities broker (Series 3, 7, 24, 65, 66)',
        'Auburn University "20 Under 40" honoree',
      ],
      boards: ['Access Global Media', 'Cape Media', 'Prediction Media'],
      location: 'Jacksonville Beach, FL',
      personal: 'Lifelong Cubs fan. Lives with wife Melanie and daughters Olivia and Charlotte.',
      linkedin: 'https://www.linkedin.com/in/morgan-busby-72a53017/',
    },
    {
      name: 'Adam Kramer',
      role: 'Founding Partner & COO',
      image: '/images/team/adam-kramer.png',
      highlights: [
        'Executive Producer on Stumble Guys, with 60M MAU and $14M MRR',
        'Built logistics ops for Bird across 11 markets, securing fastest $1B valuation in history',
        'Raised $20M+ across personal and client ventures, with 2 exits prior to founding MBI',
        'Florida State University "7 Under 30" honoree',
      ],
      boards: ['Culture Health', 'LiQure', 'DevFlow'],
      location: 'Bangkok, Thailand',
      personal: 'Cutting-edge techie. Lives with wife Thu Thu and son Graphics.',
      linkedin: 'https://www.linkedin.com/in/theadamkramer/',
    },
  ],
}

export const contact = {
  title: 'Let\'s Talk',
  subtitle: 'Building something real? We want to hear about it.',

  // Friendlier, more human expectations
  note: 'We read every submission. If there\'s a fit, you\'ll hear from us quickly.',

  form: {
    fields: {
      name: { label: 'Name', placeholder: 'Your name', required: true },
      email: { label: 'Email', placeholder: 'you@company.com', required: true },
      company: { label: 'Company', placeholder: 'Company name', required: false },
      website: { label: 'Website or Deck', placeholder: 'https://', required: false },
      message: { label: 'Your Story', placeholder: 'What are you building? What stage are you at? What do you need?', required: true },
    },
    submitButton: 'Send Message',
    successMessage: 'Message received. If there\'s a fit, we\'ll be in touch soon.',
    errorMessage: 'Something went wrong. Please try again or email us directly.',
  },

  // Form destination - TODO: Update with actual endpoint
  formEndpoint: '/api/contact',
}

export const newsletter = {
  title: 'Stay in the Loop',
  description: 'Occasional updates on our portfolio, investments, and what we\'re learning.',
  placeholder: 'your@email.com',
  button: 'Subscribe',
  successMessage: 'You\'re in. Thanks for subscribing.',

  // Newsletter endpoint - TODO: Update with actual endpoint
  endpoint: '/api/newsletter',
}

export const footer = {
  copyright: `© ${new Date().getFullYear()} MBI.VC`,
  tagline: 'Operator-led venture capital backing resilient founders.',
}
