# MBI.VC Website

Premium website for MBI Ventures — an operator-led venture firm backing resilient founders.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/mbi-website.git
cd mbi-website

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the site.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
mbi-website/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── contact/route.ts    # Contact form endpoint
│   │   │   └── newsletter/route.ts # Newsletter subscription endpoint
│   │   ├── globals.css             # Global styles
│   │   ├── layout.tsx              # Root layout with metadata
│   │   ├── page.tsx                # Main page
│   │   ├── robots.ts               # SEO robots.txt
│   │   └── sitemap.ts              # SEO sitemap
│   ├── components/
│   │   ├── sections/               # Page sections
│   │   │   ├── Hero.tsx
│   │   │   ├── Approach.tsx
│   │   │   ├── Investments.tsx
│   │   │   ├── Testimonial.tsx
│   │   │   ├── Team.tsx
│   │   │   ├── Contact.tsx
│   │   │   └── Newsletter.tsx
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── content/
│       └── site-content.ts         # ⭐ All editable copy lives here
├── public/
│   └── images/                     # Add team photos here
├── tailwind.config.ts
├── next.config.js
└── package.json
```

## Editing Content

**All website copy is centralized in one file**: `src/content/site-content.ts`

This includes:
- Hero headline and CTAs
- Approach section text and principles
- Portfolio companies (names, descriptions, categories)
- Team member bios
- Contact form copy
- Newsletter copy
- Footer text

### Adding a Portfolio Company

In `site-content.ts`, add to the `portfolio.investments` array:

```typescript
{
  name: 'Company Name',
  description: 'One sentence description.',
  url: 'https://company.com', // or empty string
  category: 'Media', // Media, Sports, Technology, or Entertainment
  badge: 'Launching 2027', // optional
}
```

### Updating Team Members

In `site-content.ts`, edit the `team.members` array:

```typescript
{
  name: 'Full Name',
  role: 'Title',
  image: '/images/team/name.jpg',
  bio: ['Paragraph 1', 'Paragraph 2'],
  location: 'City, State',
  personal: 'Personal note (optional)',
  linkedin: 'https://linkedin.com/in/username',
}
```

## Adding Team Photos

1. Add photos to `public/images/team/`
2. Update the `image` path in `site-content.ts`
3. Uncomment the `Image` component in `src/components/sections/Team.tsx`

Recommended image specs:
- Format: JPG or WebP
- Size: 400x400px minimum
- Aspect ratio: 1:1 (square)

## Wiring the Contact Form

The contact form is set up with validation and honeypot spam protection. To send actual emails:

### Option 1: Resend

1. Sign up at [resend.com](https://resend.com)
2. Add environment variables:
   ```
   RESEND_API_KEY=re_xxxxx
   CONTACT_EMAIL=hello@mbi.vc
   ```
3. Install Resend: `npm install resend`
4. Update `src/app/api/contact/route.ts` (see commented code)

### Option 2: Formspree

1. Create a form at [formspree.io](https://formspree.io)
2. Update `contact.formEndpoint` in `site-content.ts` to your Formspree URL

### Option 3: SendGrid, Postmark, etc.

See the TODO comments in `src/app/api/contact/route.ts` for implementation guidance.

## Wiring the Newsletter

Similar to contact form — see `src/app/api/newsletter/route.ts` for integration options:
- ConvertKit
- Mailchimp
- Buttondown
- Resend Audiences

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project at [vercel.com/new](https://vercel.com/new)
3. Add environment variables if needed
4. Deploy

### Other Platforms

The site is a standard Next.js app and works on:
- Netlify
- Railway
- AWS Amplify
- Self-hosted (Docker)

## Environment Variables

Create `.env.local` for local development:

```env
# Contact form (choose one)
RESEND_API_KEY=
SENDGRID_API_KEY=
CONTACT_EMAIL=hello@mbi.vc

# Newsletter (choose one)
CONVERTKIT_API_KEY=
CONVERTKIT_FORM_ID=
MAILCHIMP_API_KEY=
MAILCHIMP_LIST_ID=
```

## SEO

The site includes:
- ✅ Meta title and description
- ✅ Open Graph tags
- ✅ Twitter card tags
- ✅ Sitemap (`/sitemap.xml`)
- ✅ Robots.txt (`/robots.txt`)
- ✅ Semantic HTML structure

### Adding OG Image

1. Create a 1200x630px image
2. Save as `public/og-image.png`
3. The metadata in `layout.tsx` already references it

## Performance

- Optimized fonts with `next/font`
- Automatic image optimization with `next/image`
- Zero runtime CSS (Tailwind)
- No heavy dependencies

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## License

Private - MBI Ventures
