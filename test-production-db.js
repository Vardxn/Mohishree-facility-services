// Test Production Database Connection
const { Pool } = require('pg');

async function testDatabase() {
  console.log('🔍 Testing Production Database Connection...\n');
  
  // Check if environment variables are set
  if (!process.env.DATABASE_URL) {
    console.error('❌ DATABASE_URL is not set!');
    console.log('Please add DATABASE_URL to your .env.local file for local testing');
    process.exit(1);
  }

  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  });

  try {
    // Test 1: Basic connection
    console.log('Test 1: Basic Connection');
    const client = await pool.connect();
    console.log('✅ Connected to database successfully!\n');

    // Test 2: Check tables exist
    console.log('Test 2: Checking Tables');
    const tablesResult = await client.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public'
      ORDER BY table_name;
    `);
    
    const tables = tablesResult.rows.map(row => row.table_name);
    console.log('📋 Tables found:', tables);
    
    const requiredTables = ['quote_requests', 'contact_inquiries', 'admin_users'];
    const missingTables = requiredTables.filter(t => !tables.includes(t));
    
    if (missingTables.length > 0) {
      console.log('⚠️  Missing tables:', missingTables);
    } else {
      console.log('✅ All required tables exist!\n');
    }

    // Test 3: Check admin user
    console.log('Test 3: Checking Admin User');
    const adminResult = await client.query(
      'SELECT username, email, full_name, is_active FROM admin_users LIMIT 1'
    );
    
    if (adminResult.rows.length > 0) {
      console.log('✅ Admin user found:');
      console.log('   Username:', adminResult.rows[0].username);
      console.log('   Email:', adminResult.rows[0].email);
      console.log('   Active:', adminResult.rows[0].is_active);
    } else {
      console.log('⚠️  No admin user found');
    }

    // Test 4: Test insert capability
    console.log('\nTest 4: Testing Insert Capability');
    await client.query(`
      INSERT INTO contact_inquiries (name, email, subject, message)
      VALUES ('Test User', 'test@example.com', 'Test Subject', 'Test message from connection test')
      RETURNING id;
    `);
    console.log('✅ Successfully inserted test record\n');

    // Clean up test record
    await client.query(`
      DELETE FROM contact_inquiries WHERE email = 'test@example.com'
    `);
    console.log('🧹 Cleaned up test record\n');

    client.release();

    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('✅ ALL TESTS PASSED!');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('\n🎉 Your database is working perfectly!');
    console.log('\nNext steps:');
    console.log('1. Visit your website: https://mohishree-facility-services.vercel.app');
    console.log('2. Test the contact form');
    console.log('3. Test the quote request form');
    console.log('4. Login to admin panel: /admin/login');
    console.log('   Username: admin');
    console.log('   Password: admin123');

  } catch (error) {
    console.error('\n❌ Database test failed!');
    console.error('Error:', error.message);
    console.error('\nTroubleshooting:');
    console.error('1. Check if DATABASE_URL is correct in Vercel environment variables');
    console.error('2. Verify you ran the SQL schema in Supabase');
    console.error('3. Check if your database password is correct');
  } finally {
    await pool.end();
  }
}

testDatabase();
