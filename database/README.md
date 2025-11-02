# Database Setup for Mohishree Facility Services

## Overview
This directory contains the database schema and setup files for the Mohishree Facility Services website.

## Database Technology
- **Primary**: PostgreSQL (recommended for production)
- **Alternative**: MySQL/MariaDB (also supported)
- **Development**: SQLite (for local development)

## Files
- `schema.sql` - Complete database schema with all tables
- `seed.sql` - Initial seed data for services, areas, and sample records
- `migrations/` - Database migration files (versioned)

## Setup Instructions

### PostgreSQL Setup

1. **Install PostgreSQL**
   ```bash
   # Windows (using chocolatey)
   choco install postgresql
   
   # Or download from: https://www.postgresql.org/download/windows/
   ```

2. **Create Database**
   ```bash
   psql -U postgres
   CREATE DATABASE mohishree_facility_services;
   \c mohishree_facility_services
   ```

3. **Run Schema**
   ```bash
   psql -U postgres -d mohishree_facility_services -f schema.sql
   ```

4. **Load Seed Data**
   ```bash
   psql -U postgres -d mohishree_facility_services -f seed.sql
   ```

### MySQL Setup

1. **Install MySQL**
   ```bash
   # Download from: https://dev.mysql.com/downloads/installer/
   ```

2. **Create Database**
   ```sql
   mysql -u root -p
   CREATE DATABASE mohishree_facility_services;
   USE mohishree_facility_services;
   ```

3. **Run Schema** (modify SERIAL to AUTO_INCREMENT for MySQL)
   ```bash
   mysql -u root -p mohishree_facility_services < schema.sql
   ```

## Environment Variables

Add these to your `.env.local` file:

```env
# Database Configuration
DATABASE_URL="postgresql://username:password@localhost:5432/mohishree_facility_services"

# Or for MySQL
# DATABASE_URL="mysql://username:password@localhost:3306/mohishree_facility_services"

# Connection Pool Settings
DB_POOL_MIN=2
DB_POOL_MAX=10
```

## Tables Overview

### Core Tables
- **users** - Customer accounts, admin users, staff
- **services** - Master list of all services offered
- **bookings** - Service booking records
- **quote_requests** - Quote request submissions
- **contact_messages** - Contact form submissions

### Content Tables
- **blog_posts** - Blog articles and guides
- **testimonials** - Customer reviews and ratings
- **gallery_images** - Before/after project photos

### Operational Tables
- **payments** - Payment transaction records
- **staff_assignments** - Staff-to-booking assignments
- **service_areas** - Geographical service coverage
- **pricing_rules** - Dynamic pricing configuration

### Marketing Tables
- **newsletter_subscribers** - Email subscription list

## Key Features

1. **User Authentication** - Secure password storage with bcrypt
2. **Role-Based Access** - Admin, staff, and customer roles
3. **Booking System** - Complete lifecycle from request to completion
4. **Quote Management** - Track quote requests and conversions
5. **Payment Tracking** - Multiple payment methods support
6. **Dynamic Pricing** - Configurable pricing based on property type/area
7. **Content Management** - Blog posts and testimonials
8. **Analytics Ready** - View counts, ratings, and performance metrics

## Security Considerations

1. **Passwords**: Always hash using bcrypt (minimum 10 rounds)
2. **SQL Injection**: Use parameterized queries only
3. **Data Validation**: Validate all inputs on both client and server
4. **Access Control**: Implement proper role-based permissions
5. **Encryption**: Use SSL/TLS for database connections
6. **Backups**: Schedule regular automated backups

## Maintenance

### Regular Tasks
- Daily: Monitor active bookings
- Weekly: Review quote requests and contact messages
- Monthly: Analyze performance metrics
- Quarterly: Database optimization and cleanup

### Backup Strategy
```bash
# PostgreSQL backup
pg_dump -U postgres mohishree_facility_services > backup_$(date +%Y%m%d).sql

# MySQL backup
mysqldump -u root -p mohishree_facility_services > backup_$(date +%Y%m%d).sql
```

## Migration Management

Use a migration tool like:
- **Prisma** (recommended for Next.js)
- **Knex.js**
- **Sequelize**

This ensures version control for database changes.

## Performance Optimization

1. **Indexes**: Already created on frequently queried columns
2. **Connection Pooling**: Configure based on traffic
3. **Query Optimization**: Monitor slow queries
4. **Caching**: Implement Redis for frequently accessed data

## Support

For database-related issues:
1. Check logs in PostgreSQL data directory
2. Verify connection string in `.env.local`
3. Ensure database service is running
4. Check firewall settings for port 5432 (PostgreSQL) or 3306 (MySQL)
