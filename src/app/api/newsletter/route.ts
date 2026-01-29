import { NextResponse } from 'next/server'
import { setDefaultResultOrder } from 'node:dns'

interface NewsletterData {
  email: string
}

export async function POST(request: Request) {
  try {
    const data: NewsletterData = await request.json()

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
                Newsletter: true,
              },
            },
          ],
        }),
      }
    )

    if (!response.ok) {
      const errorBody = await response.text()
      console.error('Airtable newsletter error:', errorBody)
      return NextResponse.json(
        { error: 'Failed to store newsletter submission' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
