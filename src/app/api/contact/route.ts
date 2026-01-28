import { NextResponse } from 'next/server'

/**
 * Contact Form API Route
 *
 * TODO: Wire this to your preferred email service:
 * - Resend (https://resend.com)
 * - Postmark (https://postmarkapp.com)
 * - SendGrid (https://sendgrid.com)
 * - Formspree (https://formspree.io)
 * - Or forward to a webhook/Zapier
 *
 * Environment variables needed:
 * - EMAIL_SERVICE_API_KEY
 * - CONTACT_EMAIL (where to send submissions)
 */

interface ContactFormData {
  name: string
  email: string
  company?: string
  website?: string
  message: string
}

export async function POST(request: Request) {
  try {
    const data: ContactFormData = await request.json()

    // Validate required fields
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // TODO: Implement actual email sending
    // Example with Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'MBI Contact Form <noreply@mbi.vc>',
    //   to: process.env.CONTACT_EMAIL,
    //   replyTo: data.email,
    //   subject: `Contact Form: ${data.name} from ${data.company || 'Unknown Company'}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${data.name}</p>
    //     <p><strong>Email:</strong> ${data.email}</p>
    //     <p><strong>Company:</strong> ${data.company || 'Not provided'}</p>
    //     <p><strong>Website/Deck:</strong> ${data.website || 'Not provided'}</p>
    //     <h3>Message:</h3>
    //     <p>${data.message}</p>
    //   `,
    // })

    // For now, log to console (remove in production)
    console.log('Contact form submission:', data)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
