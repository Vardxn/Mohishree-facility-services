import { NextRequest, NextResponse } from 'next/server';
import { createBooking } from '@/lib/queries';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Validate required fields
    const requiredFields = ['name', 'email', 'phone', 'service', 'date', 'timeSlot', 'address', 'propertyType'];
    for (const field of requiredFields) {
      if (!data[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Validate date is in future
    const bookingDate = new Date(data.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (bookingDate < today) {
      return NextResponse.json(
        { error: 'Booking date must be in the future' },
        { status: 400 }
      );
    }

    // Save to database
    const bookingId = `BK${Date.now()}${Math.random().toString(36).substring(2, 7).toUpperCase()}`;
    
    const booking = await createBooking({
      booking_id: bookingId,
      service_id: 1, // Default for now - will map services later
      customer_name: data.name,
      customer_email: data.email,
      customer_phone: data.phone,
      service_date: new Date(data.date),
      service_time: data.timeSlot,
      property_type: data.propertyType,
      area: data.propertySize || '',
      address: data.address,
      city: '',
      pincode: '',
      special_instructions: data.specialInstructions || null,
      status: 'pending',
      payment_status: 'pending',
      estimated_amount: 0,
    });

    // Prepare email notifications
    const adminEmail = {
      to: 'bookings@mohishreefacilityservices.com',
      subject: `New Booking: ${data.service} - ${data.date}`,
      html: `
        <h2>New Service Booking</h2>
        <p><strong>Booking ID:</strong> ${bookingId}</p>
        <p><strong>Service:</strong> ${data.service}</p>
        <p><strong>Date:</strong> ${data.date}</p>
        <p><strong>Time Slot:</strong> ${data.timeSlot}</p>
        <hr>
        <h3>Customer Details</h3>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Property Type:</strong> ${data.propertyType}</p>
        <p><strong>Address:</strong></p>
        <p>${data.address.replace(/\n/g, '<br>')}</p>
        ${data.instructions ? `<p><strong>Special Instructions:</strong></p><p>${data.instructions}</p>` : ''}
        <hr>
        <p><strong>Booking Time:</strong> ${new Date().toLocaleString()}</p>
      `,
    };

    const customerEmail = {
      to: data.email,
      subject: `Booking Confirmed - ${bookingId}`,
      html: `
        <h2>Your Booking is Confirmed!</h2>
        <p>Dear ${data.name},</p>
        <p>Thank you for choosing Mohishree Facility Services. Your booking has been confirmed.</p>
        
        <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0;">Booking Details</h3>
          <p><strong>Booking ID:</strong> ${bookingId}</p>
          <p><strong>Service:</strong> ${data.service}</p>
          <p><strong>Date:</strong> ${data.date}</p>
          <p><strong>Time:</strong> ${data.timeSlot}</p>
          <p><strong>Address:</strong> ${data.address.replace(/\n/g, '<br>')}</p>
        </div>

        <h3>What's Next?</h3>
        <ul>
          <li>Our team will call you 1 day before the service</li>
          <li>You can reschedule up to 6 hours before the appointment</li>
          <li>Save this booking ID for any queries</li>
        </ul>

        <p>For any queries, call us at +91 98765 43210 or reply to this email.</p>
        
        <p>Best regards,<br>Mohishree Facility Services</p>
      `,
    };

    // TODO: Integrate with email service
    // await sendEmail(adminEmail);
    // await sendEmail(customerEmail);

    // TODO: Send SMS confirmation
    // await sendSMS(data.phone, `Booking confirmed! ID: ${bookingId}. Service: ${data.service} on ${data.date} ${data.timeSlot}. Call +91 98765 43210 for queries.`);

    // TODO: Store in database
    // await db.bookings.create({ ...data, bookingId, status: 'confirmed' });

    return NextResponse.json({
      success: true,
      bookingId,
      message: 'Booking confirmed successfully',
    });
  } catch (error) {
    console.error('Booking API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
