import { NextResponse } from 'next/server'
import { setDefaultResultOrder } from 'node:dns'

interface AirtableRecord {
  id: string
  fields: {
    Name?: string
    Company?: string
    Status?: string
    'Portfolio Type'?: string
    Sector?: string
    'Short Description'?: string
    Website?: string
    'Publish Card'?: boolean
  }
}

interface AirtableResponse {
  records: AirtableRecord[]
  offset?: string
}

export interface PortfolioItem {
  name: string
  description: string
  url: string
  category: string
  isUpcoming: boolean
  badge?: string
}

export async function GET() {
  try {
    const baseId = process.env.AIRTABLE_BASE_ID
    const token = process.env.AIRTABLE_TOKEN
    const tableId = process.env.AIRTABLE_TABLE_ID_PORTFOLIO

    if (!baseId || !token || !tableId) {
      return NextResponse.json(
        { error: 'Airtable environment variables are not configured' },
        { status: 500 }
      )
    }

    setDefaultResultOrder('ipv4first')

    // Fetch records where Publish Card is checked
    const filterFormula = encodeURIComponent('{Publish Card}=1')
    const response = await fetch(
      `https://api.airtable.com/v0/${baseId}/${tableId}?filterByFormula=${filterFormula}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        next: { revalidate: 60 }, // Cache for 60 seconds
      }
    )

    if (!response.ok) {
      const errorBody = await response.text()
      console.error('Airtable portfolio error:', errorBody)
      return NextResponse.json(
        { error: 'Failed to fetch portfolio data' },
        { status: 500 }
      )
    }

    const data: AirtableResponse = await response.json()

    // Transform records to portfolio items
    const portfolioItems: PortfolioItem[] = data.records
      .map((record) => ({
        name: record.fields.Name || '',
        description: record.fields['Short Description'] || '',
        url: record.fields.Website || '',
        category: record.fields.Sector || '',
        isUpcoming: record.fields['Portfolio Type']?.toLowerCase().trim() === 'launching soon',
      }))
      .filter((item) => item.name) // Filter out items without names
      .sort((a, b) => a.name.localeCompare(b.name)) // Sort alphabetically

    return NextResponse.json({ investments: portfolioItems })
  } catch (error) {
    console.error('Portfolio fetch error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
