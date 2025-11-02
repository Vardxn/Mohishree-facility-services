const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://postgres:password@localhost:5432/mohishree_facility_services',
});

async function testConnection() {
  try {
    console.log('Testing database connection...');
    
    const result = await pool.query('SELECT NOW()');
    console.log('✅ Database connected successfully!');
    console.log('Server time:', result.rows[0].now);
    
    // Test if tables exist
    const tables = await pool.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public'
      ORDER BY table_name;
    `);
    
    if (tables.rows.length > 0) {
      console.log('\n📊 Tables in database:');
      tables.rows.forEach(row => console.log('  -', row.table_name));
    } else {
      console.log('\n⚠️  No tables found. Run schema.sql to create tables.');
    }
    
    await pool.end();
  } catch (error) {
    console.error('❌ Database connection failed:', error.message);
    console.error('\n💡 Make sure PostgreSQL is running and DATABASE_URL is correct in .env.local');
    process.exit(1);
  }
}

testConnection();
