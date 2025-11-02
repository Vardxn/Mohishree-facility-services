# Database Setup Guide
## Mohishree Facility Services

This guide will help you set up the PostgreSQL database for the project.

---

## Prerequisites

1. **PostgreSQL 14+** installed on your system
   - Download from: https://www.postgresql.org/download/
   - Windows: Use the installer (includes pgAdmin)
   - Verify installation: `psql --version`

2. **Node.js packages installed**
   ```bash
   npm install pg bcrypt jsonwebtoken @types/pg @types/bcrypt @types/jsonwebtoken
   ```

---

## Step 1: Create Database

### Option A: Using psql (Command Line)

```bash
# Open PostgreSQL shell
psql -U postgres

# Create database
CREATE DATABASE mohishree_facility_services;

# Connect to database
\c mohishree_facility_services

# Exit shell
\q
```

### Option B: Using pgAdmin (GUI)

1. Open pgAdmin
2. Right-click on "Databases"
3. Select "Create" → "Database..."
4. Name: `mohishree_facility_services`
5. Click "Save"

---

## Step 2: Run Database Schema

```bash
# From project root directory
psql -U postgres -d mohishree_facility_services -f database/schema.sql
```

This will create all 15 tables:
- users
- services
- bookings
- quote_requests
- contact_messages
- blog_posts
- testimonials
- gallery_images
- newsletter_subscribers
- payments
- staff_assignments
- service_areas
- pricing_rules
- sessions
- audit_logs (optional)

---

## Step 3: Populate Initial Data

```bash
# Run seed data
psql -U postgres -d mohishree_facility_services -f database/seed.sql
```

This adds:
- 15 services (residential, commercial, industrial)
- 7 service areas (Maharashtra cities)
- 1 admin user (email: admin@mohishreefacilityservices.com, password: Admin@123)
- 3 sample testimonials
- 3 sample blog posts
- 6 pricing rules

---

## Step 4: Configure Database Connection

Update `.env.local` with your PostgreSQL credentials:

```env
DATABASE_URL="postgresql://postgres:your_password@localhost:5432/mohishree_facility_services"
```

**Format:** `postgresql://username:password@host:port/database_name`

**Example:**
```env
DATABASE_URL="postgresql://postgres:mypassword@localhost:5432/mohishree_facility_services"
```

---

## Step 5: Test Database Connection

Create a test file to verify the connection:

```bash
# Run the test connection
npm run test:db
```

Or manually test:

```javascript
// test-db.js
const { pool } = require('./src/lib/db');

async function testConnection() {
  try {
    const result = await pool.query('SELECT NOW()');
    console.log('✅ Database connected successfully!');
    console.log('Server time:', result.rows[0].now);
    
    const servicesCount = await pool.query('SELECT COUNT(*) FROM services');
    console.log('Services in database:', servicesCount.rows[0].count);
    
    await pool.end();
  } catch (error) {
    console.error('❌ Database connection failed:', error.message);
  }
}

testConnection();
```

Run: `node test-db.js`

---

## Common PostgreSQL Commands

### View All Tables
```sql
\dt
```

### View Table Structure
```sql
\d table_name
\d users
```

### View Data
```sql
SELECT * FROM services;
SELECT * FROM users;
SELECT * FROM bookings;
```

### Count Records
```sql
SELECT COUNT(*) FROM services;
SELECT COUNT(*) FROM bookings WHERE status = 'pending';
```

### Drop and Recreate (⚠️ Deletes all data)
```sql
DROP DATABASE mohishree_facility_services;
CREATE DATABASE mohishree_facility_services;
```

---

## Troubleshooting

### Issue: "connection refused"
**Solution:** Ensure PostgreSQL service is running
```bash
# Windows
net start postgresql-x64-14

# Or check services.msc
```

### Issue: "password authentication failed"
**Solution:** 
1. Check your PostgreSQL password
2. Update DATABASE_URL in `.env.local`
3. Reset password if needed:
   ```bash
   psql -U postgres
   ALTER USER postgres PASSWORD 'new_password';
   ```

### Issue: "database does not exist"
**Solution:** Create the database first (Step 1)

### Issue: "permission denied"
**Solution:** 
```sql
GRANT ALL PRIVILEGES ON DATABASE mohishree_facility_services TO postgres;
```

---

## Database Backup & Restore

### Create Backup
```bash
# Backup entire database
pg_dump -U postgres mohishree_facility_services > backup_$(date +%Y%m%d).sql

# Backup only schema
pg_dump -U postgres --schema-only mohishree_facility_services > schema_backup.sql

# Backup only data
pg_dump -U postgres --data-only mohishree_facility_services > data_backup.sql
```

### Restore Backup
```bash
psql -U postgres -d mohishree_facility_services < backup_20241102.sql
```

---

## Security Best Practices

1. **Change Default Admin Password**
   ```sql
   UPDATE users SET password_hash = crypt('NewSecurePassword123!', gen_salt('bf'))
   WHERE email = 'admin@mohishreefacilityservices.com';
   ```

2. **Create Application User** (instead of using `postgres`)
   ```sql
   CREATE USER mohishree_app WITH PASSWORD 'secure_password';
   GRANT CONNECT ON DATABASE mohishree_facility_services TO mohishree_app;
   GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO mohishree_app;
   GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO mohishree_app;
   ```

   Update `.env.local`:
   ```env
   DATABASE_URL="postgresql://mohishree_app:secure_password@localhost:5432/mohishree_facility_services"
   ```

3. **Enable SSL Connection** (Production)
   ```env
   DATABASE_URL="postgresql://user:pass@host:5432/db?sslmode=require"
   ```

---

## Production Deployment

### Recommended Hosting
- **Supabase** (Free tier available, includes PostgreSQL)
- **Neon** (Serverless PostgreSQL)
- **AWS RDS** (Managed PostgreSQL)
- **DigitalOcean Managed Databases**

### Migration Steps
1. Export local database: `pg_dump -U postgres mohishree_facility_services > production.sql`
2. Get production DATABASE_URL from hosting provider
3. Update `.env.local` (or `.env.production`)
4. Import data: `psql $DATABASE_URL < production.sql`

---

## Quick Reference

| Command | Description |
|---------|-------------|
| `psql -U postgres` | Open PostgreSQL shell |
| `\l` | List all databases |
| `\c database_name` | Connect to database |
| `\dt` | List all tables |
| `\d table_name` | Show table structure |
| `\q` | Exit psql |
| `SELECT version();` | Show PostgreSQL version |
| `SELECT current_database();` | Show current database |

---

## Next Steps

Once your database is set up:

1. ✅ Install npm packages
2. ✅ Create database
3. ✅ Run schema.sql
4. ✅ Run seed.sql
5. ✅ Configure .env.local
6. ✅ Test connection
7. **→ Update API routes to use database**
8. **→ Implement authentication system**
9. **→ Test booking flow end-to-end**

---

**Need Help?**
- PostgreSQL Documentation: https://www.postgresql.org/docs/
- pgAdmin Documentation: https://www.pgadmin.org/docs/
- Node.js pg library: https://node-postgres.com/

**Document Version:** 1.0  
**Last Updated:** November 2, 2024
