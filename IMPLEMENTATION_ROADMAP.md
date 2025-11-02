# Implementation Roadmap
## Mohishree Facility Services Website

This document outlines the step-by-step plan to bring the website from current state to full production.

---

## Current Status ✅

### Completed Features
- [x] Next.js 14 project structure
- [x] Homepage with hero section
- [x] Services overview page
- [x] Contact form UI
- [x] Quote request form UI
- [x] Booking form UI
- [x] Blog section (6 posts with categories)
- [x] Customer dashboard (bookings, profile, billing)
- [x] Responsive mobile-first design
- [x] Tailwind CSS styling
- [x] Complete database schema (15 tables)
- [x] Database seed data
- [x] Connection utilities (pg pool)
- [x] Query functions library
- [x] Environment configuration
- [x] Technical specifications document

### In Progress 🔄
- [ ] Database connection testing
- [ ] API route integration with database
- [ ] Authentication system

### Not Started ⏳
- [ ] Email notifications
- [ ] Payment gateway
- [ ] Admin dashboard
- [ ] Production deployment

---

## Phase 1: Database Integration (Week 1)

### Step 1.1: Set Up PostgreSQL
**Priority:** HIGH  
**Time Estimate:** 2-3 hours

- [ ] Install PostgreSQL 14+
- [ ] Create database: `mohishree_facility_services`
- [ ] Run `database/schema.sql` to create tables
- [ ] Run `database/seed.sql` to populate initial data
- [ ] Update `.env.local` with DATABASE_URL
- [ ] Test connection using test script

**Files to Edit:**
- `.env.local` (update DATABASE_URL)

**Commands:**
```bash
psql -U postgres
CREATE DATABASE mohishree_facility_services;
\c mohishree_facility_services
\i database/schema.sql
\i database/seed.sql
\q
```

**Success Criteria:**
- Database created with 15 tables
- Seed data loaded (15 services, 7 areas, 1 admin user)
- Connection test passes

---

### Step 1.2: Update Booking API
**Priority:** HIGH  
**Time Estimate:** 3-4 hours

**Current State:** Mock API that just logs data  
**Target State:** Save bookings to database, send confirmation email

**Files to Edit:**
- `src/app/api/booking/route.ts`
- Create `src/lib/email.ts` (email utility)

**Implementation:**
```typescript
// src/app/api/booking/route.ts
import { NextResponse } from 'next/server';
import { createBooking } from '@/lib/queries';
import { sendBookingConfirmation } from '@/lib/email';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Validate input
    if (!data.name || !data.email || !data.service) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Save to database
    const booking = await createBooking({
      user_name: data.name,
      user_email: data.email,
      user_phone: data.phone,
      service_id: data.serviceId,
      property_type: data.propertyType,
      property_size: data.propertySize,
      preferred_date: data.preferredDate,
      preferred_time: data.preferredTime,
      address: data.address,
      special_requests: data.specialRequests,
    });
    
    // Send confirmation email
    await sendBookingConfirmation(booking);
    
    return NextResponse.json({
      success: true,
      message: 'Booking created successfully',
      data: { bookingId: booking.id }
    });
  } catch (error) {
    console.error('Booking API error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to create booking' },
      { status: 500 }
    );
  }
}
```

**Success Criteria:**
- Booking form saves to database
- Booking appears in `bookings` table
- Confirmation email sent (once email setup)

---

### Step 1.3: Update Quote Request API
**Priority:** MEDIUM  
**Time Estimate:** 2 hours

**Files to Edit:**
- `src/app/api/quote/route.ts`

**Implementation:**
```typescript
import { createQuoteRequest } from '@/lib/queries';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    const quote = await createQuoteRequest({
      user_name: data.name,
      user_email: data.email,
      user_phone: data.phone,
      service_type: data.serviceType,
      property_type: data.propertyType,
      message: data.message,
    });
    
    // Send notification to admin
    await sendAdminNotification('New Quote Request', quote);
    
    return NextResponse.json({
      success: true,
      message: 'Quote request submitted successfully',
      data: { quoteId: quote.id }
    });
  } catch (error) {
    console.error('Quote API error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to submit quote' },
      { status: 500 }
    );
  }
}
```

---

### Step 1.4: Update Contact Form API
**Priority:** MEDIUM  
**Time Estimate:** 2 hours

**Files to Edit:**
- `src/app/api/contact/route.ts`

**Implementation:**
```typescript
import { createContactMessage } from '@/lib/queries';

export async function POST(request: Request) {
  const data = await request.json();
  
  const message = await createContactMessage({
    name: data.name,
    email: data.email,
    phone: data.phone,
    subject: data.subject,
    message: data.message,
  });
  
  return NextResponse.json({
    success: true,
    message: 'Message sent successfully',
    data: { messageId: message.id }
  });
}
```

---

### Step 1.5: Update Services Page
**Priority:** MEDIUM  
**Time Estimate:** 2-3 hours

**Current State:** Static data  
**Target State:** Load from database

**Files to Edit:**
- `src/app/services/page.tsx`

**Implementation:**
```typescript
import { getAllServices } from '@/lib/queries';

export default async function ServicesPage() {
  const services = await getAllServices();
  
  return (
    <div>
      <h1>Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
}
```

---

## Phase 2: Authentication System (Week 2)

### Step 2.1: Create Auth API Routes
**Priority:** HIGH  
**Time Estimate:** 4-5 hours

**Files to Create:**
- `src/app/api/auth/register/route.ts`
- `src/app/api/auth/login/route.ts`
- `src/app/api/auth/logout/route.ts`
- `src/lib/auth.ts` (JWT utilities)

**Register Route:**
```typescript
// src/app/api/auth/register/route.ts
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import { pool } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const { name, email, phone, password } = await request.json();
    
    // Check if user exists
    const existing = await pool.query(
      'SELECT id FROM users WHERE email = $1',
      [email]
    );
    
    if (existing.rows.length > 0) {
      return NextResponse.json(
        { success: false, message: 'Email already registered' },
        { status: 400 }
      );
    }
    
    // Hash password
    const passwordHash = await bcrypt.hash(password, 10);
    
    // Create user
    const result = await pool.query(
      `INSERT INTO users (name, email, phone, password_hash, role)
       VALUES ($1, $2, $3, $4, 'customer')
       RETURNING id, name, email, phone, role`,
      [name, email, phone, passwordHash]
    );
    
    const user = result.rows[0];
    
    return NextResponse.json({
      success: true,
      message: 'Account created successfully',
      data: { user }
    });
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { success: false, message: 'Registration failed' },
      { status: 500 }
    );
  }
}
```

**Login Route:**
```typescript
// src/app/api/auth/login/route.ts
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { pool } from '@/lib/db';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();
    
    // Find user
    const result = await pool.query(
      'SELECT * FROM users WHERE email = $1',
      [email]
    );
    
    if (result.rows.length === 0) {
      return NextResponse.json(
        { success: false, message: 'Invalid credentials' },
        { status: 401 }
      );
    }
    
    const user = result.rows[0];
    
    // Verify password
    const isValid = await bcrypt.compare(password, user.password_hash);
    
    if (!isValid) {
      return NextResponse.json(
        { success: false, message: 'Invalid credentials' },
        { status: 401 }
      );
    }
    
    // Generate JWT token
    const token = jwt.sign(
      { userId: user.id, email: user.email, role: user.role },
      JWT_SECRET,
      { expiresIn: '7d' }
    );
    
    // Set HTTP-only cookie
    const response = NextResponse.json({
      success: true,
      message: 'Login successful',
      data: {
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role
        }
      }
    });
    
    response.cookies.set('auth_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60 // 7 days
    });
    
    return response;
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { success: false, message: 'Login failed' },
      { status: 500 }
    );
  }
}
```

---

### Step 2.2: Create Login/Register Pages
**Priority:** HIGH  
**Time Estimate:** 3-4 hours

**Files to Create:**
- `src/app/login/page.tsx`
- `src/app/register/page.tsx`
- `src/components/LoginForm.tsx`
- `src/components/RegisterForm.tsx`

---

### Step 2.3: Protect Customer Dashboard
**Priority:** HIGH  
**Time Estimate:** 2-3 hours

**Files to Edit:**
- `src/app/customer/layout.tsx` (add authentication check)
- Create `src/middleware.ts` (Next.js middleware)

**Middleware:**
```typescript
// src/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('auth_token')?.value;
  
  // Protected routes
  if (request.nextUrl.pathname.startsWith('/customer')) {
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
    
    try {
      jwt.verify(token, process.env.JWT_SECRET!);
      return NextResponse.next();
    } catch (error) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/customer/:path*']
};
```

---

## Phase 3: Email Integration (Week 3)

### Step 3.1: Set Up Email Service
**Priority:** HIGH  
**Time Estimate:** 3-4 hours

**Install Nodemailer:**
```bash
npm install nodemailer @types/nodemailer
```

**Create Email Utility:**
```typescript
// src/lib/email.ts
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export async function sendBookingConfirmation(booking: any) {
  await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to: booking.user_email,
    subject: `Booking Confirmation - ${booking.booking_number}`,
    html: `
      <h1>Booking Confirmed!</h1>
      <p>Dear ${booking.user_name},</p>
      <p>Your booking has been confirmed.</p>
      <p><strong>Booking Number:</strong> ${booking.booking_number}</p>
      <p><strong>Service:</strong> ${booking.service_name}</p>
      <p><strong>Date:</strong> ${booking.preferred_date}</p>
      <p>We'll contact you shortly to confirm the details.</p>
    `,
  });
}

export async function sendAdminNotification(subject: string, data: any) {
  await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to: 'mohishreejcmk2025@gmail.com',
    subject: `[Admin] ${subject}`,
    html: `
      <h2>${subject}</h2>
      <pre>${JSON.stringify(data, null, 2)}</pre>
    `,
  });
}
```

---

### Step 3.2: Email Templates
**Priority:** MEDIUM  
**Time Estimate:** 4-5 hours

**Create:**
- Booking confirmation email
- Quote request email (customer)
- Quote request notification (admin)
- Contact form acknowledgment
- Welcome email (new user)
- Password reset email

---

## Phase 4: Admin Dashboard (Week 4)

### Step 4.1: Create Admin Routes
**Priority:** HIGH  
**Time Estimate:** 6-8 hours

**Files to Create:**
- `src/app/admin/dashboard/page.tsx`
- `src/app/admin/bookings/page.tsx`
- `src/app/admin/quotes/page.tsx`
- `src/app/admin/services/page.tsx`
- `src/app/admin/users/page.tsx`

**Dashboard Features:**
- Total bookings (today, this week, this month)
- Revenue statistics
- Recent bookings list
- Pending quote requests
- Quick actions (add service, view bookings)

---

### Step 4.2: Booking Management
**Priority:** HIGH  
**Time Estimate:** 4-5 hours

**Features:**
- List all bookings (with filters)
- Update booking status (pending → confirmed → in-progress → completed)
- Assign staff to bookings
- View booking details
- Export bookings (CSV)

---

## Phase 5: Payment Integration (Week 5)

### Step 5.1: Razorpay Setup
**Priority:** MEDIUM  
**Time Estimate:** 6-8 hours

**Install Razorpay:**
```bash
npm install razorpay
```

**Files to Create:**
- `src/app/api/payment/create-order/route.ts`
- `src/app/api/payment/verify/route.ts`
- `src/components/PaymentButton.tsx`

**Success Criteria:**
- User can pay for bookings
- Payment recorded in database
- Invoice generated (PDF)

---

## Phase 6: Production Deployment (Week 6)

### Step 6.1: Deploy to Vercel
**Priority:** HIGH  
**Time Estimate:** 2-3 hours

**Steps:**
1. Push code to GitHub
2. Connect Vercel to repository
3. Configure environment variables
4. Deploy

---

### Step 6.2: Database Hosting
**Priority:** HIGH  
**Time Estimate:** 2-3 hours

**Options:**
- Supabase (recommended for easy setup)
- Neon (serverless PostgreSQL)
- AWS RDS

**Steps:**
1. Create production database
2. Run schema.sql
3. Run seed.sql
4. Update DATABASE_URL in Vercel

---

### Step 6.3: Domain Setup
**Priority:** MEDIUM  
**Time Estimate:** 1-2 hours

**Steps:**
1. Purchase domain (e.g., mohishreefacilityservices.com)
2. Add to Vercel
3. Configure DNS
4. Enable SSL certificate

---

## Phase 7: SEO & Analytics (Week 7)

### Step 7.1: SEO Optimization
**Priority:** HIGH  
**Time Estimate:** 4-6 hours

**Tasks:**
- [ ] Add metadata to all pages
- [ ] Create XML sitemap
- [ ] Add robots.txt
- [ ] Implement structured data (JSON-LD)
- [ ] Optimize images (WebP format)
- [ ] Add canonical URLs

---

### Step 7.2: Google Analytics
**Priority:** MEDIUM  
**Time Estimate:** 2 hours

**Install:**
```bash
npm install @next/third-parties
```

**Add to Layout:**
```typescript
import { GoogleAnalytics } from '@next/third-parties/google';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  );
}
```

---

### Step 7.3: Google Business Profile
**Priority:** HIGH  
**Time Estimate:** 2-3 hours

**Tasks:**
- [ ] Create/claim Google Business Profile
- [ ] Add business info, photos
- [ ] Verify business
- [ ] Add schema markup to website

---

## Phase 8: Testing & Launch (Week 8)

### Step 8.1: Testing Checklist
**Priority:** CRITICAL  
**Time Estimate:** 8-10 hours

- [ ] Test all forms (booking, quote, contact)
- [ ] Test authentication (login, register, logout)
- [ ] Test payment flow
- [ ] Test email notifications
- [ ] Test on mobile devices (iOS, Android)
- [ ] Test on different browsers (Chrome, Firefox, Safari, Edge)
- [ ] Test page load speed (< 3s)
- [ ] Security audit (SQL injection, XSS)
- [ ] Accessibility audit (WCAG 2.1)

---

### Step 8.2: Launch Preparation
**Priority:** CRITICAL  
**Time Estimate:** 4-6 hours

- [ ] Change admin password
- [ ] Update JWT_SECRET
- [ ] Enable rate limiting
- [ ] Set up database backups
- [ ] Set up error monitoring (Sentry)
- [ ] Set up uptime monitoring
- [ ] Create backup/disaster recovery plan

---

### Step 8.3: Soft Launch
**Priority:** HIGH  
**Time Estimate:** 1 week

- [ ] Launch to limited audience
- [ ] Collect feedback
- [ ] Monitor errors
- [ ] Fix critical bugs
- [ ] Optimize based on user behavior

---

## Ongoing Maintenance

### Daily
- Monitor booking submissions
- Respond to quote requests
- Check error logs

### Weekly
- Review analytics
- Publish blog post
- Update content

### Monthly
- Security updates
- Dependency updates
- Performance optimization
- Backup verification

---

## Success Metrics

### Technical KPIs
- [ ] 99.9% uptime
- [ ] < 3s page load time
- [ ] 90+ Google PageSpeed score
- [ ] 0 critical security vulnerabilities

### Business KPIs
- [ ] 100+ monthly bookings
- [ ] 25% conversion rate (visitor → booking)
- [ ] 50% mobile traffic
- [ ] 4.5+ star average rating

---

## Budget Estimate

| Item | Cost (Monthly) |
|------|----------------|
| Vercel Pro | $20 |
| Supabase Pro | $25 |
| Domain | $1 |
| Email (SendGrid) | $15 |
| SMS (MSG91) | ₹500 (~$6) |
| Total | ~$67/month |

**One-time Costs:**
- Development: 200-300 hours @ $X/hour
- Design assets: $0 (using free resources)

---

## Timeline Summary

| Week | Phase | Deliverables |
|------|-------|--------------|
| 1 | Database Integration | All forms save to DB |
| 2 | Authentication | Login/register working |
| 3 | Email | All notifications sent |
| 4 | Admin Dashboard | Booking management |
| 5 | Payments | Razorpay integration |
| 6 | Deployment | Live on production |
| 7 | SEO & Analytics | GA4, GSC setup |
| 8 | Testing & Launch | Public launch |

**Total Timeline:** 8 weeks for MVP (Minimum Viable Product)

---

## Next Immediate Actions

1. **Set up PostgreSQL database** (1-2 hours)
   - Install PostgreSQL
   - Run schema.sql
   - Run seed.sql

2. **Update booking API** (2-3 hours)
   - Integrate database queries
   - Test form submission

3. **Create email utility** (2-3 hours)
   - Set up Nodemailer
   - Send test email

4. **Implement authentication** (4-5 hours)
   - Create login/register pages
   - Add JWT middleware

---

**Document Version:** 1.0  
**Last Updated:** November 2, 2024  
**Status:** Ready for Implementation
