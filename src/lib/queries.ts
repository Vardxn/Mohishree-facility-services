import { query } from './db';

export interface Service {
  id: number;
  name: string;
  slug: string;
  category: string;
  description: string;
  short_description: string;
  base_price: number;
  unit: string;
  image_url: string;
  is_active: boolean;
}

export interface Booking {
  id: number;
  booking_id: string;
  user_id?: number;
  service_id: number;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  service_date: Date;
  service_time: string;
  property_type: string;
  area: string;
  address: string;
  city: string;
  pincode: string;
  special_instructions?: string;
  status: string;
  payment_status: string;
  estimated_amount: number;
  final_amount?: number;
}

export interface QuoteRequest {
  id: number;
  quote_id: string;
  name: string;
  email: string;
  phone: string;
  service_type: string;
  property_type: string;
  area: string;
  frequency: string;
  message?: string;
  status: string;
}

export interface ContactMessage {
  id: number;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  status: string;
}

// Services
export const getAllServices = async (category?: string) => {
  let sql = 'SELECT * FROM services WHERE is_active = TRUE';
  const params: any[] = [];
  
  if (category) {
    sql += ' AND category = $1';
    params.push(category);
  }
  
  sql += ' ORDER BY display_order ASC';
  
  const result = await query(sql, params);
  return result.rows as Service[];
};

export const getServiceBySlug = async (slug: string) => {
  const result = await query(
    'SELECT * FROM services WHERE slug = $1 AND is_active = TRUE',
    [slug]
  );
  return result.rows[0] as Service | undefined;
};

// Bookings
export const createBooking = async (bookingData: Omit<Booking, 'id'>) => {
  const result = await query(
    `INSERT INTO bookings (
      booking_id, user_id, service_id, customer_name, customer_email, 
      customer_phone, service_date, service_time, property_type, area, 
      address, city, pincode, special_instructions, status, 
      payment_status, estimated_amount
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17)
    RETURNING *`,
    [
      bookingData.booking_id,
      bookingData.user_id || null,
      bookingData.service_id,
      bookingData.customer_name,
      bookingData.customer_email,
      bookingData.customer_phone,
      bookingData.service_date,
      bookingData.service_time,
      bookingData.property_type,
      bookingData.area,
      bookingData.address,
      bookingData.city,
      bookingData.pincode,
      bookingData.special_instructions || null,
      bookingData.status,
      bookingData.payment_status,
      bookingData.estimated_amount,
    ]
  );
  return result.rows[0] as Booking;
};

export const getBookingById = async (bookingId: string) => {
  const result = await query(
    'SELECT * FROM bookings WHERE booking_id = $1',
    [bookingId]
  );
  return result.rows[0] as Booking | undefined;
};

export const getBookingsByUserId = async (userId: number) => {
  const result = await query(
    'SELECT * FROM bookings WHERE user_id = $1 ORDER BY created_at DESC',
    [userId]
  );
  return result.rows as Booking[];
};

export const updateBookingStatus = async (bookingId: string, status: string) => {
  const result = await query(
    'UPDATE bookings SET status = $1, updated_at = CURRENT_TIMESTAMP WHERE booking_id = $2 RETURNING *',
    [status, bookingId]
  );
  return result.rows[0] as Booking;
};

// Quote Requests
export const createQuoteRequest = async (quoteData: Omit<QuoteRequest, 'id'>) => {
  const result = await query(
    `INSERT INTO quote_requests (
      quote_id, name, email, phone, service_type, property_type, 
      area, frequency, message, status
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
    RETURNING *`,
    [
      quoteData.quote_id,
      quoteData.name,
      quoteData.email,
      quoteData.phone,
      quoteData.service_type,
      quoteData.property_type,
      quoteData.area,
      quoteData.frequency,
      quoteData.message || null,
      quoteData.status,
    ]
  );
  return result.rows[0] as QuoteRequest;
};

// Contact Messages
export const createContactMessage = async (contactData: Omit<ContactMessage, 'id' | 'status'>) => {
  const result = await query(
    `INSERT INTO contact_messages (name, email, phone, subject, message, status)
    VALUES ($1, $2, $3, $4, $5, 'new')
    RETURNING *`,
    [
      contactData.name,
      contactData.email,
      contactData.phone || null,
      contactData.subject,
      contactData.message,
    ]
  );
  return result.rows[0] as ContactMessage;
};

// Blog Posts
export const getPublishedBlogPosts = async (limit?: number) => {
  let sql = 'SELECT * FROM blog_posts WHERE is_published = TRUE ORDER BY published_at DESC';
  
  if (limit) {
    sql += ` LIMIT ${limit}`;
  }
  
  const result = await query(sql);
  return result.rows;
};

export const getBlogPostBySlug = async (slug: string) => {
  const result = await query(
    'SELECT * FROM blog_posts WHERE slug = $1 AND is_published = TRUE',
    [slug]
  );
  
  // Increment view count
  if (result.rows[0]) {
    await query(
      'UPDATE blog_posts SET views_count = views_count + 1 WHERE slug = $1',
      [slug]
    );
  }
  
  return result.rows[0];
};

// Testimonials
export const getFeaturedTestimonials = async (limit: number = 6) => {
  const result = await query(
    'SELECT * FROM testimonials WHERE is_approved = TRUE AND is_featured = TRUE ORDER BY created_at DESC LIMIT $1',
    [limit]
  );
  return result.rows;
};

// Gallery Images
export const getFeaturedGalleryImages = async (limit: number = 6) => {
  const result = await query(
    'SELECT * FROM gallery_images WHERE is_featured = TRUE ORDER BY display_order ASC LIMIT $1',
    [limit]
  );
  return result.rows;
};

// Newsletter
export const subscribeNewsletter = async (email: string, name?: string) => {
  const result = await query(
    `INSERT INTO newsletter_subscribers (email, name, status)
    VALUES ($1, $2, 'active')
    ON CONFLICT (email) DO UPDATE SET status = 'active'
    RETURNING *`,
    [email, name || null]
  );
  return result.rows[0];
};

// Service Areas
export const getServiceAreas = async () => {
  const result = await query(
    'SELECT DISTINCT city, state FROM service_areas WHERE is_active = TRUE ORDER BY city ASC'
  );
  return result.rows;
};

// Analytics
export const getBookingStats = async () => {
  const result = await query(`
    SELECT 
      COUNT(*) as total_bookings,
      COUNT(CASE WHEN status = 'completed' THEN 1 END) as completed_bookings,
      COUNT(CASE WHEN status = 'pending' OR status = 'confirmed' THEN 1 END) as active_bookings,
      AVG(rating) as average_rating,
      SUM(final_amount) as total_revenue
    FROM bookings
  `);
  return result.rows[0];
};
