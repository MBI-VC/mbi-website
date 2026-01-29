import { NextResponse } from 'next/server'
import { setDefaultResultOrder } from 'node:dns'

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
    const baseId = process.env.AIRTABLE_BASE_ID
    const tableName = process.env.AIRTABLE_TABLE_NAME || process.env.AIRTABLE_TABLE_ID_WEB || 'Web'
    const token = process.env.AIRTABLE_TOKEN

    if (!baseId || !token) {
      return NextResponse.json(
        { error: 'Airtable environment variables are not configured' },
        { status: 500 }
      )
    }

    setDefaultResultOrder('ipv4first')
    const response = await fetch(
      `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableName)}`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          records: [
            {
              fields: {
                Email: data.email ?? '',
                Name: data.name ?? '',
                Company: data.company ?? '',
                URL: data.website ?? '',
                Story: data.message ?? '',
                Newsletter: false,
              },
            },
          ],
        }),
      }
    )

    if (!response.ok) {
      const errorBody = await response.text()
      console.error('Airtable contact error:', errorBody)
      return NextResponse.json(
        { error: 'Failed to store contact submission' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
