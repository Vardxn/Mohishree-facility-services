import { NextRequest, NextResponse } from 'next/server';
import { createQuoteRequest } from '@/lib/queries';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Validate required fields
    const requiredFields = ['name', 'email', 'phone', 'service', 'propertyType', 'frequency'];
    for (const field of requiredFields) {
      if (!data[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Save to database
    const quoteId = `QT${Date.now()}${Math.random().toString(36).substring(2, 7).toUpperCase()}`;
    
    const quote = await createQuoteRequest({
      quote_id: quoteId,
      name: data.name,
      email: data.email,
      phone: data.phone,
      service_type: data.service,
      property_type: data.propertyType,
      area: data.area || '',
      frequency: data.frequency,
      message: data.message || null,
      status: 'pending',
    });

    return NextResponse.json({
      success: true,
      message: 'Quote request received successfully',
      quoteId: quote.quote_id,
    });
  } catch (error) {
    console.error('Quote API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
